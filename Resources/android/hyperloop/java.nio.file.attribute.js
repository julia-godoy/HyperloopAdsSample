/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.attribute
 */
var parent = require('java.nio.file') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/nio/file/attribute/package-summary.html
 **/
var attribute = {};
parent.attribute = attribute;

// Types in package
Object.defineProperty(attribute, 'BasicFileAttributes', {
	get: function() {
		return require('java.nio.file.attribute.BasicFileAttributes');
	},
	enumerable: true
});
Object.defineProperty(attribute, 'FileAttributeView', {
	get: function() {
		return require('java.nio.file.attribute.FileAttributeView');
	},
	enumerable: true
});
Object.defineProperty(attribute, 'FileStoreAttributeView', {
	get: function() {
		return require('java.nio.file.attribute.FileStoreAttributeView');
	},
	enumerable: true
});
Object.defineProperty(attribute, 'FileTime', {
	get: function() {
		return require('java.nio.file.attribute.FileTime');
	},
	enumerable: true
});
Object.defineProperty(attribute, 'GroupPrincipal', {
	get: function() {
		return require('java.nio.file.attribute.GroupPrincipal');
	},
	enumerable: true
});
Object.defineProperty(attribute, 'UserPrincipal', {
	get: function() {
		return require('java.nio.file.attribute.UserPrincipal');
	},
	enumerable: true
});
Object.defineProperty(attribute, 'UserPrincipalLookupService', {
	get: function() {
		return require('java.nio.file.attribute.UserPrincipalLookupService');
	},
	enumerable: true
});

// export the interface
module.exports = attribute;
