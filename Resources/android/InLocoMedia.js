function initWithOptions(optionsArgument) {
    var InLocoMedia;
    var InLocoMediaOptions;
    var options;
    InLocoMedia = require("com.inlocomedia.android.ads.InLocoMedia");
    InLocoMediaOptions = require("com.inlocomedia.android.ads.InLocoMediaOptions");
    var Activity = require("android.app.Activity");
    var activity = new Activity(Ti.Android.currentActivity);
    var options = InLocoMediaOptions.getInstance(activity);
    Ti.API.info("logando appid");
    Ti.API.info(optionsArgument.appId);
    options.setAdsKey(optionsArgument.appId);
    options.setLogEnabled(optionsArgument.logsEnabled);
    null != optionsArgument.developmentDevices && options.setDevelopmentDevices(optionsArgument.developmentDevices);
    InLocoMedia.init(activity, options);
}

module.exports = {
    initWithOptions: initWithOptions
};