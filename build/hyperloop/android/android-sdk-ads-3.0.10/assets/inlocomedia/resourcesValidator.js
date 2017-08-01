var SCHEMA = "resourcesvalidator";
var ERROR_COMMAND = "error";
var SUCCESS_COMMAND = "success";
var FAILED_RESOURCES_KEY = "failedResources";
var AD_RESOURCE_TAG = "ad-resource";
var IMG_TAG = "IMG";
var VIDEO_TAG = "VIDEO";
var IFRAME_TAG = "IFRAME";
var DIV_TAG = "DIV";

var RESOURCE_TAGS = [IMG_TAG, VIDEO_TAG, IFRAME_TAG];

var SUPPORTED_URL_SCHEMAS = ["http:", "https:"];

var VIDEO_PRE_LOAD_VALUES = {
    METADATA: "metadata",
    AUTO: "auto",
    NONE: "none"
};

var VIDEO_READY_STATES = {
    HAVE_METADATA: 1,
    HAVE_ENOUGH_DATA: 4
};

var resourcesLoaded;
var numberOfResources;
var error = false;
var failedResources = [];

function validateResources() {
    var resources = [];

    var resources = getResources(document);

    resourcesLoaded = 0;
    numberOfResources = resources.length;

    if (numberOfResources == resourcesLoaded) {
        sendResult();
    }

    for (var i = 0; i < resources.length; i++) {
        validateResource(resources[i]);
    }
}

function getResources(dom) {
    for (var currentTagIndex = 0; currentTagIndex < RESOURCE_TAGS.length; currentTagIndex++) {
        var tagElements = dom.getElementsByTagName(RESOURCE_TAGS[currentTagIndex]);

        for (var currentElementIndex = 0; currentElementIndex < tagElements.length; currentElementIndex++) {
            tagElements[currentElementIndex].classList.add(AD_RESOURCE_TAG);
        }
    }

    return dom.getElementsByClassName(AD_RESOURCE_TAG);
}

function validateResource(resource) {
    switch (resource.tagName) {
        case VIDEO_TAG:
            validateVideo(resource);
            break;

        case IFRAME_TAG:
            validateIframe(resource);
            break;

        case IMG_TAG:
        case DIV_TAG:
            validateImage(resource);
            break;
    }

    if (!validateUrl(resource.src)) {
        resource.dispatchEvent(new Event('error'));
    }
}

//Checks if video is already loaded, and if not, sets its events, all according to its preload property.
function validateVideo(video) {
    var expectedReadyState = 0;

    switch (video.preload) {
        case VIDEO_PRE_LOAD_VALUES.METADATA:
            expectedReadyState = VIDEO_READY_STATES.HAVE_METADATA;
            break;

        case VIDEO_PRE_LOAD_VALUES.AUTO:
            expectedReadyState = VIDEO_READY_STATES.HAVE_ENOUGH_DATA;
            break;
    }

    if (video.readyState >= expectedReadyState) {
        onResourceLoad();
    }
    else {
        if (expectedReadyState === VIDEO_READY_STATES.HAVE_METADATA) {
            video.addEventListener('loadedmetadata', onResourceLoad);
        }
        else if (expectedReadyState === VIDEO_READY_STATES.HAVE_ENOUGH_DATA) {
            video.addEventListener('loadeddata', onResourceLoad);
        }

        video.addEventListener('error', onResourceError);

        //Checks if the error event has already been thrown
        if (video.error != null) {
            video.dispatchEvent(new Event('error'));
        }
    }
}

function validateIframe(iframe) {
    iframe.addEventListener('load', onIframeLoad);
    iframe.addEventListener('error', onResourceError);
}

//Gets the iframe's DOM and checks its resources
function onIframeLoad() {
    var doc = this.contentDocument || this.contentWindow.document;

    //checking if the iframe's DOM is valid
    if (!doc == undefined || !(doc instanceof HTMLDocument || Object.prototype.toString.call(doc) == "[object HTMLDocument]")
        || doc.readyState == "uninitialized" || doc.readyState == "loading") {
        this.dispatchEvent(new Event('error'));
        return;
    }

    var iframeResources = getResources(doc);

    for (var i = 0; i < iframeResources.length; i++) {
        var resource = iframeResources[i];
        numberOfResources += 1;
        validateResource(resource);
    }

    onResourceLoad();
}

//Gets the src from the original image from the html, creates a new Image object and loads it with the same src.
//The image file won't be downloaded twice as it will be on the browser's cache.
function validateImage(image) {
    if (!image.src) {
        var style = image.currentStyle || window.getComputedStyle(image, false);
        image.src = style.backgroundImage.slice(5,-2);
    }

    var newImage = new Image();

    newImage.addEventListener('load', onResourceLoad);
    newImage.addEventListener('error', onResourceError);
    newImage.src = image.src;
}

function onResourceLoad() {
    resourcesLoaded += 1;

    if (resourcesLoaded === numberOfResources) {
        sendResult();
    }
}

//It is important for every resource to have a src attribute, so that the failing url may be known.
function onResourceError() {
    error = true;
    failedResources.push(this.src);

    onResourceLoad();
}

function validateUrl(url) {
    var schema = url.split('/')[0];

    for (var i = 0; i < SUPPORTED_URL_SCHEMAS.length; i++)  {
        if (SUPPORTED_URL_SCHEMAS[i] === schema) {
            return true;
        }
    }

    return false;
}

function sendResult() {
    var schema = SCHEMA;
    var command = error ? ERROR_COMMAND : SUCCESS_COMMAND;
    var args = [schema, command];

    if (error) {
        args.push(FAILED_RESOURCES_KEY);
        args.push(failedResources);
    }

    window.sdkBridge.executeNativeCall(args);
}

if (document.readyState == "loaded") {
    validateResources();
} else {
    document.addEventListener("DOMContentLoaded", validateResources);
}