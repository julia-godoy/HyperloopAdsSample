/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.concurrent
 */
var parent = require('java.util') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/util/concurrent/package-summary.html
 **/
var concurrent = {};
parent.concurrent = concurrent;

// Types in package
Object.defineProperty(concurrent, 'Callable', {
	get: function() {
		return require('java.util.concurrent.Callable');
	},
	enumerable: true
});
Object.defineProperty(concurrent, 'ExecutorService', {
	get: function() {
		return require('java.util.concurrent.ExecutorService');
	},
	enumerable: true
});
Object.defineProperty(concurrent, 'Future', {
	get: function() {
		return require('java.util.concurrent.Future');
	},
	enumerable: true
});
Object.defineProperty(concurrent, 'TimeUnit', {
	get: function() {
		return require('java.util.concurrent.TimeUnit');
	},
	enumerable: true
});

// export the interface
module.exports = concurrent;
