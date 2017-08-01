/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.spi
 */
var parent = require('java.nio.channels') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/nio/channels/spi/package-summary.html
 **/
var spi = {};
parent.spi = spi;

// Types in package
Object.defineProperty(spi, 'AbstractInterruptibleChannel', {
	get: function() {
		return require('java.nio.channels.spi.AbstractInterruptibleChannel');
	},
	enumerable: true
});
Object.defineProperty(spi, 'AbstractSelectableChannel', {
	get: function() {
		return require('java.nio.channels.spi.AbstractSelectableChannel');
	},
	enumerable: true
});
Object.defineProperty(spi, 'AbstractSelectionKey', {
	get: function() {
		return require('java.nio.channels.spi.AbstractSelectionKey');
	},
	enumerable: true
});
Object.defineProperty(spi, 'AbstractSelector', {
	get: function() {
		return require('java.nio.channels.spi.AbstractSelector');
	},
	enumerable: true
});
Object.defineProperty(spi, 'SelectorProvider', {
	get: function() {
		return require('java.nio.channels.spi.SelectorProvider');
	},
	enumerable: true
});

// export the interface
module.exports = spi;
