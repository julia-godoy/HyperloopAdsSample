/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.stream
 */
var parent = require('java.util') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/util/stream/package-summary.html
 **/
var stream = {};
parent.stream = stream;

// Types in package
Object.defineProperty(stream, 'BaseStream', {
	get: function() {
		return require('java.util.stream.BaseStream');
	},
	enumerable: true
});
Object.defineProperty(stream, 'Collector', {
	get: function() {
		return require('java.util.stream.Collector');
	},
	enumerable: true
});
Object.defineProperty(stream, 'DoubleStream', {
	get: function() {
		return require('java.util.stream.DoubleStream');
	},
	enumerable: true
});
Object.defineProperty(stream, 'IntStream', {
	get: function() {
		return require('java.util.stream.IntStream');
	},
	enumerable: true
});
Object.defineProperty(stream, 'LongStream', {
	get: function() {
		return require('java.util.stream.LongStream');
	},
	enumerable: true
});
Object.defineProperty(stream, 'Stream', {
	get: function() {
		return require('java.util.stream.Stream');
	},
	enumerable: true
});

// export the interface
module.exports = stream;
