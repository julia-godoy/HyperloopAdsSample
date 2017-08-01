/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.location
 */
var parent = require('android') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/location/package-summary.html
 **/
var location = {};
parent.location = location;

// Types in package
Object.defineProperty(location, 'Address', {
	get: function() {
		return require('android.location.Address');
	},
	enumerable: true
});

// export the interface
module.exports = location;
