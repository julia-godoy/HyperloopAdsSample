/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.location.core.communication.listeners
 */
var parent = require('com.inlocomedia.android.location.core.communication') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/com/inlocomedia/android/location/core/communication/listeners/package-summary.html
 **/
var listeners = {};
parent.listeners = listeners;

// Types in package
Object.defineProperty(listeners, 'RetailMapImageRequestListener', {
	get: function() {
		return require('com.inlocomedia.android.location.core.communication.listeners.RetailMapImageRequestListener');
	},
	enumerable: true
});
Object.defineProperty(listeners, 'RetailMapsRequestListener', {
	get: function() {
		return require('com.inlocomedia.android.location.core.communication.listeners.RetailMapsRequestListener');
	},
	enumerable: true
});
Object.defineProperty(listeners, 'RetailsRequestListener', {
	get: function() {
		return require('com.inlocomedia.android.location.core.communication.listeners.RetailsRequestListener');
	},
	enumerable: true
});
Object.defineProperty(listeners, 'StoresRequestListener', {
	get: function() {
		return require('com.inlocomedia.android.location.core.communication.listeners.StoresRequestListener');
	},
	enumerable: true
});

// export the interface
module.exports = listeners;
