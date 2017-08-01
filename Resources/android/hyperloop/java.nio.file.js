/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file
 */
var parent = require('java.nio') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/nio/file/package-summary.html
 **/
var file = {};
parent.file = file;

// Types in package
Object.defineProperty(file, 'DirectoryStream', {
	get: function() {
		return require('java.nio.file.DirectoryStream');
	},
	enumerable: true
});
Object.defineProperty(file, 'FileStore', {
	get: function() {
		return require('java.nio.file.FileStore');
	},
	enumerable: true
});
Object.defineProperty(file, 'FileSystem', {
	get: function() {
		return require('java.nio.file.FileSystem');
	},
	enumerable: true
});
Object.defineProperty(file, 'Path', {
	get: function() {
		return require('java.nio.file.Path');
	},
	enumerable: true
});
Object.defineProperty(file, 'PathMatcher', {
	get: function() {
		return require('java.nio.file.PathMatcher');
	},
	enumerable: true
});
Object.defineProperty(file, 'WatchKey', {
	get: function() {
		return require('java.nio.file.WatchKey');
	},
	enumerable: true
});
Object.defineProperty(file, 'WatchService', {
	get: function() {
		return require('java.nio.file.WatchService');
	},
	enumerable: true
});
Object.defineProperty(file, 'Watchable', {
	get: function() {
		return require('java.nio.file.Watchable');
	},
	enumerable: true
});

// export the interface
module.exports = file;
