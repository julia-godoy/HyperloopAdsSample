/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels
 */
var parent = require('java.nio') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/nio/channels/package-summary.html
 **/
var channels = {};
parent.channels = channels;

// Types in package
Object.defineProperty(channels, 'AsynchronousFileChannel', {
	get: function() {
		return require('java.nio.channels.AsynchronousFileChannel');
	},
	enumerable: true
});
Object.defineProperty(channels, 'Channel', {
	get: function() {
		return require('java.nio.channels.Channel');
	},
	enumerable: true
});
Object.defineProperty(channels, 'CompletionHandler', {
	get: function() {
		return require('java.nio.channels.CompletionHandler');
	},
	enumerable: true
});
Object.defineProperty(channels, 'DatagramChannel', {
	get: function() {
		return require('java.nio.channels.DatagramChannel');
	},
	enumerable: true
});
Object.defineProperty(channels, 'FileChannel', {
	get: function() {
		return require('java.nio.channels.FileChannel');
	},
	enumerable: true
});
Object.defineProperty(channels, 'FileLock', {
	get: function() {
		return require('java.nio.channels.FileLock');
	},
	enumerable: true
});
Object.defineProperty(channels, 'NetworkChannel', {
	get: function() {
		return require('java.nio.channels.NetworkChannel');
	},
	enumerable: true
});
Object.defineProperty(channels, 'Pipe', {
	get: function() {
		return require('java.nio.channels.Pipe');
	},
	enumerable: true
});
Object.defineProperty(channels, 'ReadableByteChannel', {
	get: function() {
		return require('java.nio.channels.ReadableByteChannel');
	},
	enumerable: true
});
Object.defineProperty(channels, 'SeekableByteChannel', {
	get: function() {
		return require('java.nio.channels.SeekableByteChannel');
	},
	enumerable: true
});
Object.defineProperty(channels, 'SelectableChannel', {
	get: function() {
		return require('java.nio.channels.SelectableChannel');
	},
	enumerable: true
});
Object.defineProperty(channels, 'SelectionKey', {
	get: function() {
		return require('java.nio.channels.SelectionKey');
	},
	enumerable: true
});
Object.defineProperty(channels, 'Selector', {
	get: function() {
		return require('java.nio.channels.Selector');
	},
	enumerable: true
});
Object.defineProperty(channels, 'ServerSocketChannel', {
	get: function() {
		return require('java.nio.channels.ServerSocketChannel');
	},
	enumerable: true
});
Object.defineProperty(channels, 'SocketChannel', {
	get: function() {
		return require('java.nio.channels.SocketChannel');
	},
	enumerable: true
});
Object.defineProperty(channels, 'WritableByteChannel', {
	get: function() {
		return require('java.nio.channels.WritableByteChannel');
	},
	enumerable: true
});

// export the interface
module.exports = channels;
