/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset
 */
var parent = require('java.nio') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/nio/charset/package-summary.html
 **/
var charset = {};
parent.charset = charset;

// Types in package
Object.defineProperty(charset, 'Charset', {
	get: function() {
		return require('java.nio.charset.Charset');
	},
	enumerable: true
});
Object.defineProperty(charset, 'CharsetDecoder', {
	get: function() {
		return require('java.nio.charset.CharsetDecoder');
	},
	enumerable: true
});
Object.defineProperty(charset, 'CharsetEncoder', {
	get: function() {
		return require('java.nio.charset.CharsetEncoder');
	},
	enumerable: true
});
Object.defineProperty(charset, 'CoderResult', {
	get: function() {
		return require('java.nio.charset.CoderResult');
	},
	enumerable: true
});
Object.defineProperty(charset, 'CodingErrorAction', {
	get: function() {
		return require('java.nio.charset.CodingErrorAction');
	},
	enumerable: true
});

// export the interface
module.exports = charset;
