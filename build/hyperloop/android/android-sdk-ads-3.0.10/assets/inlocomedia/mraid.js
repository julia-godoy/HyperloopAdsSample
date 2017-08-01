// V 0.3

(function() {
    var isIOS = (/iphone|ipad|ipod/i).test(window.navigator.userAgent.toLowerCase());
    if (isIOS) {
        console = {};
        console.log = function(log) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', 'ios-log: ' + log);
            document.documentElement.appendChild(iframe);
            iframe.parentNode.removeChild(iframe);
            iframe = null;
        };
        console.debug = console.info = console.warn = console.error = console.log;
    }
}());


(function() {
    var mraid = window.mraid = {};

    var sdkBridge = window.sdkBridge;

    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Bridge interface to SDK

    var bridge = window.mraidbridge = {
        nativeSDKFiredReady: false,
        lastSizeChangeProperties: null
    };

    bridge.fireChangeEvent = function(properties) {
        for (var p in properties) {
            if (properties.hasOwnProperty(p)) {
                // Change handlers defined by MRAID below
                var handler = changeHandlers[p];
                handler(properties[p]);
            }
        }
    };

    bridge.executeNativeCall = function(args) {
        if (!this.nativeSDKFiredReady) {
            console.log('rejecting ' + command + ' because mraid is not ready');
            bridge.fireErrorEvent('mraid is not ready', command);
            return;
        }

        args.unshift(MRAID_SCHEMA);

        sdkBridge.executeNativeCall(args);
    };

    bridge.setCurrentPosition = function(x, y, width, height) {
        currentPosition = {
            x: x,
            y: y,
            width: width,
            height: height
        };
        broadcastEvent(EVENTS.INFO, 'Set current position to ' + stringify(currentPosition));
    };

    bridge.setDefaultPosition = function(x, y, width, height) {
        defaultPosition = {
            x: x,
            y: y,
            width: width,
            height: height
        };
        broadcastEvent(EVENTS.INFO, 'Set default position to ' + stringify(defaultPosition));
    };

    bridge.setMaxSize = function(width, height) {
        maxSize = {
            width: width,
            height: height
        };

        expandProperties.width = width;
        expandProperties.height = height;

        broadcastEvent(EVENTS.INFO, 'Set max size to ' + stringify(maxSize));
    };

    bridge.setPlacementType = function(_placementType) {
        placementType = _placementType;
        broadcastEvent(EVENTS.INFO, 'Set placement type to ' + stringify(placementType));
    };

    bridge.setScreenSize = function(width, height) {
        screenSize = {
            width: width,
            height: height
        };
        broadcastEvent(EVENTS.INFO, 'Set screen size to ' + stringify(screenSize));
    };

    bridge.setState = function(_state) {
        state = _state;
        broadcastEvent(EVENTS.INFO, 'Set state to ' + stringify(state));
        broadcastEvent(EVENTS.STATE_CHANGE, state);
    };

    bridge.setViewable = function(_isViewable) {
        isViewable = _isViewable;
        broadcastEvent(EVENTS.INFO, 'Set isViewable to ' + stringify(isViewable));
        broadcastEvent(EVENTS.VIEWABLE_CHANGE, isViewable);
    };

    bridge.setSupportsAll = function(sms, tel, calendar, storePicture, inlineVideo, vpaid) {
        supportProperties = {
            sms: sms,
            tel: tel,
            calendar: calendar,
            storePicture: storePicture,
            inlineVideo: inlineVideo,
            vpaid: vpaid,
        };
    };

    bridge.setSupports = function(feature, supported) {
        supportProperties[feature] = supported;
    };

    bridge.fireReadyEvent = function() {
        this.nativeSDKFiredReady = true;
        broadcastEvent(EVENTS.READY);
    };

    bridge.fireErrorEvent = function(message, action) {
        broadcastEvent(EVENTS.ERROR, message, action);
    };

    bridge.notifySizeChangeEvent = function(width, height) {
        if (this.lastSizeChangeProperties &&
            width == this.lastSizeChangeProperties.width && height == this.lastSizeChangeProperties.height) {
            return;
        }

        this.lastSizeChangeProperties = {
            width: width,
            height: height
        };
        broadcastEvent(EVENTS.SIZE_CHANGE, width, height);
    };

    bridge.notifyStateChangeEvent = function() {
        if (state === STATES.LOADING) {
            broadcastEvent(EVENTS.INFO, 'Native SDK initialized.');
        }

        broadcastEvent(EVENTS.INFO, 'Set state to ' + stringify(state));
        broadcastEvent(EVENTS.STATE_CHANGE, state);
    };

    bridge.notifyViewableChangeEvent = function() {
        broadcastEvent(EVENTS.INFO, 'Set isViewable to ' + stringify(isViewable));
        broadcastEvent(EVENTS.VIEWABLE_CHANGE, isViewable);
    };


    // Constants. ////////////////////////////////////////////////////////////////////////////////////

    var VERSION = mraid.VERSION = '2.0';

    var MRAID_SCHEMA = "mraid";

    var STATES = mraid.STATES = {
        LOADING: 'loading',
        DEFAULT: 'default',
        EXPANDED: 'expanded',
        HIDDEN: 'hidden',
        RESIZED: 'resized'
    };

    var EVENTS = mraid.EVENTS = {
        ERROR: 'error',
        INFO: 'info',
        READY: 'ready',
        STATE_CHANGE: 'stateChange',
        VIEWABLE_CHANGE: 'viewableChange',
        SIZE_CHANGE: 'sizeChange'
    };

    var PLACEMENT_TYPES = mraid.PLACEMENT_TYPES = {
        UNKNOWN: 'unknown',
        INLINE: 'inline',
        INTERSTITIAL: 'interstitial'
    };

    var SUPPORTED_FEATURES = mraid.SUPPORTED_FEATURES = {
        SMS: 'sms',
        TEL: 'tel',
        CALENDAR: 'calendar',
        STORE_PICTURE: 'storePicture',
        INLINE_VIDEO: 'inlineVideo',
        VPAID: 'vpaid'
    }

    var SUPPORTED_VPAID_EVENTS = mraid.SUPPORTED_VPAID_EVENTS = {
        AD_CLICK_THRU: 'AdClickThru',
        AD_ERROR: 'AdError',
        AD_IMPRESSION: 'AdImpression',
        AD_PAUSED: 'AdPaused',
        AD_PLAYING: 'AdPlaying',
        AD_VIDEO_COMPLETE: 'AdVideoComplete',
        AD_VIDEO_FIRST_QUARTILE: 'AdVideoFirstQuartile',
        AD_VIDEO_MIDPOINT: 'AdVideoMidpoint',
        AD_VIDEO_START: 'AdVideoStart',
        AD_VIDEO_THIRD_QUARTILE: 'AdVideoThirdQuartile'
    }

    var NATIVE_CALL_PARAMS = mraid.NATIVE_CALL_PARAMS = {
        WIDTH: 'width',
        HEIGHT: 'height',
        OFFSET_X: 'offsetX',
        OFFSET_Y: 'offsetY',
        CUSTOM_CLOSE_POSITION: 'customClosePosition',
        ALLOW_OFF_SCREEN: 'allowOffscreen',
        SHOULD_USE_CUSTOM_CLOSE: 'shouldUseCustomClose',
        URL: 'url',
        URI: 'uri',
        EVENT: 'event'
    }

    var MRAID_ACTION = mraid.MRAID_ACTION = {
        CLOSE: 'close',
        EXPAND: 'expand',
        OPEN: 'open',
        RESIZE: 'resize',
        SET_ORIENTATION_PROPERTIES: 'setOrientationProperties',
        PLAY_VIDEO: 'playVideo',
        USE_CUSTOM_CLOSE: 'useCustomClose',
        STORE_PICTURE: 'storePicture',
        CREATE_CALENDAR_EVENT: 'createCalendarEvent',
        VPAID: 'vpaid'
    }

    // External MRAID state: may be directly or indirectly modified by the ad JS. ////////////////////

    // Properties which define the behavior of an expandable ad.
    var expandProperties = {
        width: false,
        height: false,
        useCustomClose: false,
        isModal: true
    };

    var resizeProperties = {
        width: false,
        height: false,
        offsetX: false,
        offsetY: false,
        customClosePosition: 'top-right',
        allowOffscreen: true
    };

    var orientationProperties = {
        allowOrientationChange: true,
        forceOrientation: "none"
    };

    var supportProperties = {
        sms: false,
        tel: false,
        calendar: false,
        storePicture: false,
        inlineVideo: false,
        vpaid: false
    };

    // default is undefined so that notifySizeChangeEvent can track changes
    var lastSizeChangeProperties;

    var maxSize = {};

    var currentPosition = {};

    var defaultPosition = {};

    var screenSize = {};

    var hasSetCustomClose = false;

    var listeners = {};

    // Internal MRAID state. Modified by the native SDK. /////////////////////////////////////////////

    var state = STATES.LOADING;

    var isViewable = false;

    var placementType = PLACEMENT_TYPES.UNKNOWN;

    //////////////////////////////////////////////////////////////////////////////////////////////////

    var EventListeners = function(event) {
        this.event = event;
        this.count = 0;
        var listeners = {};

        this.add = function(func) {
            var id = String(func);
            if (!listeners[id]) {
                listeners[id] = func;
                this.count++;
            }
        };

        this.remove = function(func) {
            var id = String(func);
            if (listeners[id]) {
                listeners[id] = null;
                delete listeners[id];
                this.count--;
                return true;
            } else {
                return false;
            }
        };

        this.removeAll = function() {
            for (var id in listeners) {
                if (listeners.hasOwnProperty(id)) this.remove(listeners[id]);
            }
        };

        this.broadcast = function(args) {
            for (var id in listeners) {
                if (listeners.hasOwnProperty(id)) listeners[id].apply(mraid, args);
            }
        };

        this.toString = function() {
            var out = [event, ':'];
            for (var id in listeners) {
                if (listeners.hasOwnProperty(id)) out.push('|', id, '|');
            }
            return out.join('');
        };
    };

    var broadcastEvent = function() {
        var args = new Array(arguments.length);
        var l = arguments.length;
        for (var i = 0; i < l; i++) args[i] = arguments[i];
        var event = args.shift();
        if (listeners[event]) listeners[event].broadcast(args);
    };

    var contains = function(value, array) {
        for (var i in array) {
            if (array[i] === value) return true;
        }
        return false;
    };

    var clone = function(obj) {
        if (obj === null) return null;
        var f = function() {};
        f.prototype = obj;
        return new f();
    };

    var stringify = function(obj) {
        if (typeof obj === 'object') {
            var out = [];
            if (obj.push) {
                // Array.
                for (var p in obj) out.push(obj[p]);
                return '[' + out.join(',') + ']';
            } else {
                // Other object.
                for (var p in obj) out.push("'" + p + "':" + obj[p]);
                return '{' + out.join(',') + '}';
            }
        } else return String(obj);
    };

    var trim = function(str) {
        return str.replace(/^\\s+|\\s+$/g, '');
    };

    // Functions that will be invoked by the native SDK whenever a \"change\" event occurs.
    var changeHandlers = {
        state: function(val) {
            if (state === STATES.LOADING) {
                broadcastEvent(EVENTS.INFO, 'Native SDK initialized.');
            }
            state = val;
            broadcastEvent(EVENTS.INFO, 'Set state to ' + stringify(val));
            broadcastEvent(EVENTS.STATE_CHANGE, state);
        },

        viewable: function(val) {
            isViewable = val;
            broadcastEvent(EVENTS.INFO, 'Set isViewable to ' + stringify(val));
            broadcastEvent(EVENTS.VIEWABLE_CHANGE, isViewable);
        },

        placementType: function(val) {
            broadcastEvent(EVENTS.INFO, 'Set placementType to ' + stringify(val));
            placementType = val;
        },

        sizeChange: function(val) {
            broadcastEvent(EVENTS.INFO, 'Set screenSize to ' + stringify(val));
            for (var key in val) {
                if (val.hasOwnProperty(key)) screenSize[key] = val[key];
            }
        },

        supports: function(val) {
            broadcastEvent(EVENTS.INFO, 'Set supports to ' + stringify(val));
            supportProperties = val;
        }
    };

    var validate = function(obj, validators, action, merge) {
        if (!merge) {
            // Check to see if any required properties are missing.
            if (obj === null) {
                broadcastEvent(EVENTS.ERROR, 'Required object not provided.', action);
                return false;
            } else {
                for (var i in validators) {
                    if (validators.hasOwnProperty(i) && obj[i] === undefined) {
                        broadcastEvent(EVENTS.ERROR, 'Object is missing required property: ' + i, action);
                        return false;
                    }
                }
            }
        }

        for (var prop in obj) {
            var validator = validators[prop];
            var value = obj[prop];
            if (validator && !validator(value)) {
                // Failed validation.
                broadcastEvent(EVENTS.ERROR, 'Value of property ' + prop + ' is invalid: ' + value, action);
                return false;
            }
        }
        return true;
    };

    var expandPropertyValidators = {
        useCustomClose: function(v) {
            return (typeof v === 'boolean');
        },
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////

    mraid.addEventListener = function(event, listener) {
        if (!event || !listener) {
            broadcastEvent(EVENTS.ERROR, 'Both event and listener are required.', 'addEventListener');
        } else if (!contains(event, EVENTS)) {
            broadcastEvent(EVENTS.ERROR, 'Unknown MRAID event: ' + event, 'addEventListener');
        } else {
            if (!listeners[event]) {
                listeners[event] = new EventListeners(event);
            }
            listeners[event].add(listener);
        }
    };

    mraid.close = function() {
        if (state === STATES.HIDDEN) {
            broadcastEvent(EVENTS.ERROR, 'Ad cannot be closed when it is already hidden.',
                MRAID_ACTION.CLOSE);
        } else bridge.executeNativeCall([MRAID_ACTION.CLOSE]);
    };

    mraid.expand = function(URL) {
        if (!(this.getState() === STATES.DEFAULT || this.getState() === STATES.RESIZED)) {
            broadcastEvent(EVENTS.ERROR, 'Ad can only be expanded from the default or resized state.', MRAID_ACTION.EXPAND);
        } else {
            var args = [MRAID_ACTION.EXPAND,
                NATIVE_CALL_PARAMS.SHOULD_USE_CUSTOM_CLOSE, expandProperties.useCustomClose
            ];

            if (URL) {
                args = args.concat([NATIVE_CALL_PARAMS.URL, URL]);
            }

            bridge.executeNativeCall(args);
        }
    };

    mraid.getExpandProperties = function() {
        var properties = {
            width: expandProperties.width,
            height: expandProperties.height,
            useCustomClose: expandProperties.useCustomClose,
            isModal: expandProperties.isModal
        };
        return properties;
    };


    mraid.getCurrentPosition = function() {
        return {
            x: currentPosition.x,
            y: currentPosition.y,
            width: currentPosition.width,
            height: currentPosition.height
        };
    };

    mraid.getDefaultPosition = function() {
        return {
            x: defaultPosition.x,
            y: defaultPosition.y,
            width: defaultPosition.width,
            height: defaultPosition.height
        };
    };

    mraid.getMaxSize = function() {
        return {
            width: maxSize.width,
            height: maxSize.height
        };
    };

    mraid.getPlacementType = function() {
        return placementType;
    };

    mraid.getScreenSize = function() {
        return {
            width: screenSize.width,
            height: screenSize.height
        };
    };

    mraid.getState = function() {
        return state;
    };

    mraid.isViewable = function() {
        return isViewable;
    };

    mraid.getVersion = function() {
        return mraid.VERSION;
    };

    mraid.open = function(URL) {
        if (!URL) broadcastEvent(EVENTS.ERROR, 'URL is required.', MRAID_ACTION.OPEN);
        else bridge.executeNativeCall([MRAID_ACTION.OPEN, NATIVE_CALL_PARAMS.URL, URL]);
    };

    mraid.removeEventListener = function(event, listener) {
        if (!event) {
            broadcastEvent(EVENTS.ERROR, 'Event is required.', 'removeEventListener');
            return;
        }

        if (listener) {
            // If we have a valid event, we'll try to remove the listener from it.
            var success = false;
            if (listeners[event]) {
                success = listeners[event].remove(listener);
            }

            // If we didn't have a valid event or couldn't remove the listener from the event, broadcast an error and return early.
            if (!success) {
                broadcastEvent(EVENTS.ERROR, 'Listener not currently registered for event.', 'removeEventListener');
                return;
            }

        } else if (!listener && listeners[event]) {
            listeners[event].removeAll();
        }

        if (listeners[event] && listeners[event].count === 0) {
            listeners[event] = null;
            delete listeners[event];
        }
    };

    mraid.setExpandProperties = function(properties) {
        if (validate(properties, expandPropertyValidators, 'setExpandProperties', true)) {
            if (properties.hasOwnProperty('useCustomClose')) {
                expandProperties.useCustomClose = properties.useCustomClose;
            }
        }
    };

    mraid.useCustomClose = function(shouldUseCustomClose) {
        expandProperties.useCustomClose = shouldUseCustomClose;
        hasSetCustomClose = true;
        bridge.executeNativeCall([MRAID_ACTION.USE_CUSTOM_CLOSE, NATIVE_CALL_PARAMS.SHOULD_USE_CUSTOM_CLOSE, shouldUseCustomClose]);
    };

    // MRAID 2.0 APIs ////////////////////////////////////////////////////////////////////////////////

    mraid.createCalendarEvent = function(parameters) {
        CalendarEventParser.initialize(parameters);
        if (CalendarEventParser.parse()) {
            bridge.executeNativeCall(CalendarEventParser.arguments);
        } else {
            broadcastEvent(EVENTS.ERROR, CalendarEventParser.errors[0], MRAID_ACTION.CREATE_CALENDAR_EVENT);
        }
    };

    mraid.supports = function(feature) {
        return supportProperties[feature];
    };

    mraid.playVideo = function(uri) {
        if (!mraid.isViewable()) {
            broadcastEvent(EVENTS.ERROR, 'playVideo cannot be called until the ad is viewable', MRAID_ACTION.PLAY_VIDEO);
            return;
        }

        if (!uri) {
            broadcastEvent(EVENTS.ERROR, 'playVideo must be called with a valid URI', MRAID_ACTION.PLAY_VIDEO);
        } else {
            bridge.executeNativeCall([MRAID_ACTION.PLAY_VIDEO, NATIVE_CALL_PARAMS.URI, uri]);
        }
    };

    mraid.storePicture = function(uri) {
        if (!mraid.isViewable()) {
            broadcastEvent(EVENTS.ERROR, 'storePicture cannot be called until the ad is viewable', MRAID_ACTION.STORE_PICTURE);
            return;
        }

        if (!uri) {
            broadcastEvent(EVENTS.ERROR, 'storePicture must be called with a valid URI', MRAID_ACTION.STORE_PICTURE);
        } else {
            bridge.executeNativeCall([MRAID_ACTION.STORE_PICTURE, NATIVE_CALL_PARAMS.URI, uri]);
        }
    };

    var resizePropertyValidators = {
        width: function(v) {
            return !isNaN(v) && v > 0;
        },
        height: function(v) {
            return !isNaN(v) && v > 0;
        },
        offsetX: function(v) {
            return !isNaN(v);
        },
        offsetY: function(v) {
            return !isNaN(v);
        },
        customClosePosition: function(v) {
            return (typeof v === 'string' && ['top-right', 'bottom-right', 'top-left', 'bottom-left', 'center', 'top-center', 'bottom-center'].indexOf(v) > -1);
        },
        allowOffscreen: function(v) {
            return (typeof v === 'boolean');
        }
    };

    mraid.setOrientationProperties = function(properties) {

        if (properties.hasOwnProperty('allowOrientationChange')) {
            orientationProperties.allowOrientationChange = properties.allowOrientationChange;
        }

        if (properties.hasOwnProperty('forceOrientation')) {
            orientationProperties.forceOrientation = properties.forceOrientation;
        }

        var args = [MRAID_ACTION.SET_ORIENTATION_PROPERTIES,
            'allowOrientationChange', orientationProperties.allowOrientationChange,
            'forceOrientation', orientationProperties.forceOrientation
        ];
        bridge.executeNativeCall(args);
    };

    mraid.getOrientationProperties = function() {
        return {
            allowOrientationChange: orientationProperties.allowOrientationChange,
            forceOrientation: orientationProperties.forceOrientation
        };
    };

    mraid.resize = function() {
        if (!(this.getState() === STATES.DEFAULT || this.getState() === STATES.RESIZED)) {
            broadcastEvent(EVENTS.ERROR, 'Ad can only be resized from the default or resized state.', MRAID_ACTION.RESIZE);
        } else if (!resizeProperties.width || !resizeProperties.height) {
            broadcastEvent(EVENTS.ERROR, 'Must set resize properties before calling resize()', MRAID_ACTION.RESIZE);
        } else {
            var args = [MRAID_ACTION.RESIZE,
                NATIVE_CALL_PARAMS.WIDTH, resizeProperties.width,
                NATIVE_CALL_PARAMS.HEIGHT, resizeProperties.height,
                NATIVE_CALL_PARAMS.OFFSET_X, resizeProperties.offsetX || 0,
                NATIVE_CALL_PARAMS.OFFSET_Y, resizeProperties.offsetY || 0,
                NATIVE_CALL_PARAMS.CUSTOM_CLOSE_POSITION, resizeProperties.customClosePosition,
                NATIVE_CALL_PARAMS.ALLOW_OFF_SCREEN, !!resizeProperties.allowOffscreen
            ];

            bridge.executeNativeCall(args);
        }
    };

    mraid.getResizeProperties = function() {
        var properties = {
            width: resizeProperties.width,
            height: resizeProperties.height,
            offsetX: resizeProperties.offsetX,
            offsetY: resizeProperties.offsetY,
            customClosePosition: resizeProperties.customClosePosition,
            allowOffscreen: resizeProperties.allowOffscreen
        };
        return properties;
    };

    mraid.setResizeProperties = function(properties) {
        if (validate(properties, resizePropertyValidators, 'setResizeProperties', true)) {

            var desiredProperties = ['width', 'height', 'offsetX', 'offsetY', 'customClosePosition', 'allowOffscreen'];

            var length = desiredProperties.length;

            for (var i = 0; i < length; i++) {
                var propname = desiredProperties[i];
                if (properties.hasOwnProperty(propname)) {
                    resizeProperties[propname] = properties[propname];
                }
            }
        }
    };

    // Additional methods to support the VPAID API //////////////////////////////////////////////////////////

    mraid.initVpaid = function(vpaidObject) {
        vpaidObject.subscribe(onAdClickthru, SUPPORTED_VPAID_EVENTS.AD_CLICKTHRU);
        vpaidObject.subscribe(onAdError, SUPPORTED_VPAID_EVENTS.AD_ERROR);
        vpaidObject.subscribe(onAdImpression, SUPPORTED_VPAID_EVENTS.AD_IMPRESSION);
        vpaidObject.subscribe(onAdPaused, SUPPORTED_VPAID_EVENTS.AD_PAUSED);
        vpaidObject.subscribe(onAdPlaying, SUPPORTED_VPAID_EVENTS.AD_PLAYING);
        vpaidObject.subscribe(onAdVideoComplete, SUPPORTED_VPAID_EVENTS.AD_VIDEO_COMPLETE);
        vpaidObject.subscribe(onAdVideoFirstQuartile, SUPPORTED_VPAID_EVENTS.AD_VIDEO_FIRST_QUARTILE);
        vpaidObject.subscribe(onAdVideoMidpoint, SUPPORTED_VPAID_EVENTS.AD_VIDEO_MIDPOINT);
        vpaidObject.subscribe(onAdVideoStart, SUPPORTED_VPAID_EVENTS.AD_VIDEO_START);
        vpaidObject.subscribe(onAdVideoThirdQuartile, SUPPORTED_VPAID_EVENTS.AD_VIDEO_THIRD_QUARTILE);

        vpaidObject.startAd();
    }

    function onAdClickthru() {
        bridge.executeNativeCall([MRAID_ACTION.VPAID, NATIVE_CALL_PARAMS.EVENT, SUPPORTED_VPAID_EVENTS.AD_CLICKTHRU]);
    }

    function onAdError() {
        bridge.executeNativeCall([MRAID_ACTION.VPAID, NATIVE_CALL_PARAMS.EVENT, SUPPORTED_VPAID_EVENTS.AD_ERROR]);
    }

    function onAdImpression() {
        bridge.executeNativeCall([MRAID_ACTION.VPAID, NATIVE_CALL_PARAMS.EVENT, SUPPORTED_VPAID_EVENTS.AD_IMPRESSION]);
    }

    function onAdPaused() {
        bridge.executeNativeCall([MRAID_ACTION.VPAID, NATIVE_CALL_PARAMS.EVENT, SUPPORTED_VPAID_EVENTS.AD_PAUSED]);
    }

    function onAdPlaying() {
        bridge.executeNativeCall([MRAID_ACTION.VPAID, NATIVE_CALL_PARAMS.EVENT, SUPPORTED_VPAID_EVENTS.AD_PLAYING]);
    }

    function onAdVideoComplete() {
        bridge.executeNativeCall([MRAID_ACTION.VPAID, NATIVE_CALL_PARAMS.EVENT, SUPPORTED_VPAID_EVENTS.AD_VIDEO_COMPLETE]);
    }

    function onAdVideoFirstQuartile() {
        bridge.executeNativeCall([MRAID_ACTION.VPAID, NATIVE_CALL_PARAMS.EVENT, SUPPORTED_VPAID_EVENTS.AD_VIDEO_FIRST_QUARTILE]);
    }

    function onAdVideoMidpoint() {
        bridge.executeNativeCall([MRAID_ACTION.VPAID, NATIVE_CALL_PARAMS.EVENT, SUPPORTED_VPAID_EVENTS.AD_VIDEO_MIDPOINT]);
    }

    function onAdVideoStart() {
        bridge.executeNativeCall([MRAID_ACTION.VPAID, NATIVE_CALL_PARAMS.EVENT, SUPPORTED_VPAID_EVENTS.AD_VIDEO_START]);
    }

    function onAdVideoThirdQuartile() {
        bridge.executeNativeCall([MRAID_ACTION.VPAID, NATIVE_CALL_PARAMS.EVENT, SUPPORTED_VPAID_EVENTS.AD_VIDEO_THIRD_QUARTILE]);
    }

    var CalendarEventParser = {
        initialize: function(parameters) {
            this.parameters = parameters;
            this.errors = [];
            this.arguments = [MRAID_ACTION.CREATE_CALENDAR_EVENT];
        },

        parse: function() {
            if (!this.parameters) {
                this.errors.push('The object passed to createCalendarEvent cannot be null.');
            } else {
                this.parseDescription();
                this.parseLocation();
                this.parseSummary();
                this.parseStartAndEndDates();
                this.parseReminder();
                this.parseRecurrence();
                this.parseTransparency();
            }

            var errorCount = this.errors.length;
            if (errorCount) {
                this.arguments.length = 0;
            }

            return (errorCount === 0);
        },

        parseDescription: function() {
            this._processStringValue('description');
        },

        parseLocation: function() {
            this._processStringValue('location');
        },

        parseSummary: function() {
            this._processStringValue('summary');
        },

        parseStartAndEndDates: function() {
            this._processDateValue('start');
            this._processDateValue('end');
        },

        parseReminder: function() {
            var reminder = this._getParameter('reminder');
            if (!reminder) {
                return;
            }

            if (reminder < 0) {
                this.arguments.push('relativeReminder');
                this.arguments.push(parseInt(reminder) / 1000);
            } else {
                this.arguments.push('absoluteReminder');
                this.arguments.push(reminder);
            }
        },

        parseRecurrence: function() {
            var recurrenceDict = this._getParameter('recurrence');
            if (!recurrenceDict) {
                return;
            }

            this.parseRecurrenceInterval(recurrenceDict);
            this.parseRecurrenceFrequency(recurrenceDict);
            this.parseRecurrenceEndDate(recurrenceDict);
            this.parseRecurrenceArrayValue(recurrenceDict, 'daysInWeek');
            this.parseRecurrenceArrayValue(recurrenceDict, 'daysInMonth');
            this.parseRecurrenceArrayValue(recurrenceDict, 'daysInYear');
            this.parseRecurrenceArrayValue(recurrenceDict, 'monthsInYear');
        },

        parseTransparency: function() {
            var validValues = ['opaque', 'transparent'];

            if (this.parameters.hasOwnProperty('transparency')) {
                var transparency = this.parameters.transparency;
                if (contains(transparency, validValues)) {
                    this.arguments.push('transparency');
                    this.arguments.push(transparency);
                } else {
                    this.errors.push('transparency must be opaque or transparent');
                }
            }
        },

        parseRecurrenceArrayValue: function(recurrenceDict, kind) {
            if (recurrenceDict.hasOwnProperty(kind)) {
                var array = recurrenceDict[kind];
                if (!array || !(array instanceof Array)) {
                    this.errors.push(kind + ' must be an array.');
                } else {
                    var arrayStr = array.join(',');
                    this.arguments.push(kind);
                    this.arguments.push(arrayStr);
                }
            }
        },

        parseRecurrenceInterval: function(recurrenceDict) {
            if (recurrenceDict.hasOwnProperty('interval')) {
                var interval = recurrenceDict.interval;
                if (!interval) {
                    this.errors.push('Recurrence interval cannot be null.');
                } else {
                    this.arguments.push('interval');
                    this.arguments.push(interval);
                }
            } else {
                // If a recurrence rule was specified without an interval, use a default value of 1.
                this.arguments.push('interval');
                this.arguments.push(1);
            }
        },

        parseRecurrenceFrequency: function(recurrenceDict) {
            if (recurrenceDict.hasOwnProperty('frequency')) {
                var frequency = recurrenceDict.frequency;
                var validFrequencies = ['daily', 'weekly', 'monthly', 'yearly'];
                if (contains(frequency, validFrequencies)) {
                    this.arguments.push('frequency');
                    this.arguments.push(frequency);
                } else {
                    this.errors.push('Recurrence frequency must be one of: \"daily\", \"weekly\", \"monthly\", \"yearly\".');
                }
            }
        },

        parseRecurrenceEndDate: function(recurrenceDict) {
            var expires = recurrenceDict.expires;

            if (!expires) {
                return;
            }

            this.arguments.push('expires');
            this.arguments.push(expires);
        },

        _getParameter: function(key) {
            if (this.parameters.hasOwnProperty(key)) {
                return this.parameters[key];
            }

            return null;
        },

        _processStringValue: function(kind) {
            if (this.parameters.hasOwnProperty(kind)) {
                var value = this.parameters[kind];
                this.arguments.push(kind);
                this.arguments.push(value);
            }
        },

        _processDateValue: function(kind) {
            if (this.parameters.hasOwnProperty(kind)) {
                var dateString = this._getParameter(kind);
                this.arguments.push(kind);
                this.arguments.push(dateString);
            }
        }
    };

}());