/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio
 */
var parent = require('java') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/nio/package-summary.html
 **/
var nio = {};
parent.nio = nio;

// Types in package
Object.defineProperty(nio, 'Buffer', {
	get: function() {
		return require('java.nio.Buffer');
	},
	enumerable: true
});
Object.defineProperty(nio, 'ByteBuffer', {
	get: function() {
		return require('java.nio.ByteBuffer');
	},
	enumerable: true
});
Object.defineProperty(nio, 'ByteOrder', {
	get: function() {
		return require('java.nio.ByteOrder');
	},
	enumerable: true
});
Object.defineProperty(nio, 'DoubleBuffer', {
	get: function() {
		return require('java.nio.DoubleBuffer');
	},
	enumerable: true
});
Object.defineProperty(nio, 'FloatBuffer', {
	get: function() {
		return require('java.nio.FloatBuffer');
	},
	enumerable: true
});
Object.defineProperty(nio, 'IntBuffer', {
	get: function() {
		return require('java.nio.IntBuffer');
	},
	enumerable: true
});
Object.defineProperty(nio, 'LongBuffer', {
	get: function() {
		return require('java.nio.LongBuffer');
	},
	enumerable: true
});
Object.defineProperty(nio, 'MappedByteBuffer', {
	get: function() {
		return require('java.nio.MappedByteBuffer');
	},
	enumerable: true
});
Object.defineProperty(nio, 'ShortBuffer', {
	get: function() {
		return require('java.nio.ShortBuffer');
	},
	enumerable: true
});

// export the interface
module.exports = nio;
