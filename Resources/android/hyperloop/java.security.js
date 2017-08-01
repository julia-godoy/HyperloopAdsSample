/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security
 */
var parent = require('java') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/security/package-summary.html
 **/
var security = {};
parent.security = security;

// Types in package
Object.defineProperty(security, 'CodeSource', {
	get: function() {
		return require('java.security.CodeSource');
	},
	enumerable: true
});
Object.defineProperty(security, 'Permission', {
	get: function() {
		return require('java.security.Permission');
	},
	enumerable: true
});
Object.defineProperty(security, 'PermissionCollection', {
	get: function() {
		return require('java.security.PermissionCollection');
	},
	enumerable: true
});
Object.defineProperty(security, 'ProtectionDomain', {
	get: function() {
		return require('java.security.ProtectionDomain');
	},
	enumerable: true
});

// export the interface
module.exports = security;
