/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.core.exception
 */
var parent = require('com.inlocomedia.android.core') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/com/inlocomedia/android/core/exception/package-summary.html
 **/
var exception = {};
parent.exception = exception;

// Types in package
Object.defineProperty(exception, 'InLocoMediaAPIException', {
	get: function() {
		return require('com.inlocomedia.android.core.exception.InLocoMediaAPIException');
	},
	enumerable: true
});
Object.defineProperty(exception, 'InLocoMediaException', {
	get: function() {
		return require('com.inlocomedia.android.core.exception.InLocoMediaException');
	},
	enumerable: true
});

// export the interface
module.exports = exception;
