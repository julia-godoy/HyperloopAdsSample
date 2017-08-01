/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.reflect
 */
var parent = require('java.lang') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/java/lang/reflect/package-summary.html
 **/
var reflect = {};
parent.reflect = reflect;

// Types in package
Object.defineProperty(reflect, 'AccessibleObject', {
	get: function() {
		return require('java.lang.reflect.AccessibleObject');
	},
	enumerable: true
});
Object.defineProperty(reflect, 'AnnotatedType', {
	get: function() {
		return require('java.lang.reflect.AnnotatedType');
	},
	enumerable: true
});
Object.defineProperty(reflect, 'Constructor', {
	get: function() {
		return require('java.lang.reflect.Constructor');
	},
	enumerable: true
});
Object.defineProperty(reflect, 'Executable', {
	get: function() {
		return require('java.lang.reflect.Executable');
	},
	enumerable: true
});
Object.defineProperty(reflect, 'Field', {
	get: function() {
		return require('java.lang.reflect.Field');
	},
	enumerable: true
});
Object.defineProperty(reflect, 'Method', {
	get: function() {
		return require('java.lang.reflect.Method');
	},
	enumerable: true
});
Object.defineProperty(reflect, 'Type', {
	get: function() {
		return require('java.lang.reflect.Type');
	},
	enumerable: true
});

// export the interface
module.exports = reflect;
