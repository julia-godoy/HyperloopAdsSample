
function initWithOptions(optionsArgument) {
	var InLocoMedia;
	var InLocoMediaOptions;

	if (Ti.Platform.name == "android") {
		InLocoMedia = require('com.inlocomedia.android.ads.InLocoMedia');
		InLocoMediaOptions = require('com.inlocomedia.android.ads.InLocoMediaOptions');
		var Activity = require('android.app.Activity');
		var activity = new Activity(Ti.Android.currentActivity);

		var options = InLocoMediaOptions.getInstance(activity);
		Ti.API.info("logando appid");
		Ti.API.info(optionsArgument.appId);

		options.setAdsKey(optionsArgument.appId);
		options.setLogEnabled(optionsArgument.logsEnabled);
		
		if (optionsArgument.developmentDevices != null) {
			options.setDevelopmentDevices(optionsArgument.developmentDevices);	
		}

		InLocoMedia.init(activity, options);
	} else if (Ti.Platform.name == 'iOS') {
		InLocoMedia = require('InLocoMediaSDKAds/ILMInLocoMedia');
		InLocoMediaOptions = require('InLocoMediaSDKAds/ILMAdsOptions');

		var options = InLocoMediaOptions.alloc().init();
		options.setAdsKey(optionsArgument.appId);
		options.setLogEnabled(optionsArgument.logsEnabled);
		
		if (optionsArgument.developmentDevices != null) {
			options.setDevelopmentDevices([optionsArgument.developmentDevices]);	
		}
		
		InLocoMedia.initWithOptions(options);
	}	
}

module.exports = {
	initWithOptions:initWithOptions
};
