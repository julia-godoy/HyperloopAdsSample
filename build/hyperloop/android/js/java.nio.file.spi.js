/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.spi
 */
var parent = require('java.nio.file') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/nio/file/spi/package-summary.html
 **/
var spi = {};
parent.spi = spi;

// Types in package
Object.defineProperty(spi, 'FileSystemProvider', {
	get: function() {
		return require('java.nio.file.spi.FileSystemProvider');
	},
	enumerable: true
});

// export the interface
module.exports = spi;
