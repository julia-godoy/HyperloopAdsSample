var Admob = require('ti.admob');
var InLocoMedia = require("InLocoMedia");

InLocoMedia.initWithOptions({
  appId : 'my app id',
  logsEnabled : true, 
  developmentDevices : 'my device id'
});

var osname = Ti.Platform.osname;
var adView;
if (osname == 'android') {
	adView = Admob.createView({
		bottom : 0,
		left : 0,
		right : 0,
		height : 50,
		publisherId : 'my ad unit id'
	});
} else {
	adView = Admob.createView({
		bottom : 0,
		left : 0,
		right : 0,
		height : 50,
		adUnitId : 'my ad unit id'
	});
}
$.ad.add(adView);
$.index.open();
