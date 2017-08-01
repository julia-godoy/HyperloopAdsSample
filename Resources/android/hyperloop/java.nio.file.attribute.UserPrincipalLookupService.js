/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.attribute.UserPrincipalLookupService
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.file.attribute');

/**
 * @class java.nio.file.attribute.UserPrincipalLookupService
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/UserPrincipalLookupService.html}
 **/
var UserPrincipalLookupService = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.file.attribute.UserPrincipalLookupService')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.file.attribute.UserPrincipalLookupService. Create a subclass using java.nio.file.attribute.UserPrincipalLookupService.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
UserPrincipalLookupService.prototype = Object.create(SuperClass.prototype);
UserPrincipalLookupService.prototype.constructor = UserPrincipalLookupService;

Object.defineProperty(UserPrincipalLookupService.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new UserPrincipalLookupService(this.$native.super);
	},
	enumerable: true
});

UserPrincipalLookupService.className = 'java.nio.file.attribute.UserPrincipalLookupService';
UserPrincipalLookupService.prototype.className = 'java.nio.file.attribute.UserPrincipalLookupService';

// class property
Object.defineProperty(UserPrincipalLookupService, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.file.attribute.UserPrincipalLookupService');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
UserPrincipalLookupService.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.file.attribute.UserPrincipalLookupService');

	// Generate a JS wrapper for our dynamic subclass
	var SubClass = function() {
		var result = subclassProxy.newInstance(arguments),
			instance = this,
			copy = overrides,
			modified = {};

		function _wrapArg(arg) {
			if (arg.apiName && arg.isNativeProxy && arg.isInstanceProxy) { // Assume hyperloop proxy, wrap in JS wrapper
				var other = require(arg.apiName);
				return new other(arg);
			}
			return arg;
		}

		function _wrapArgs() {
			var newArgs = [];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i] = _wrapArg(arguments[i]);
			}
			return newArgs;
		};

		Object.keys(copy).forEach(function (each) {
			// Hang the original override method on the JS wrapper object
			instance[each] = function() {
				return copy[each].apply(instance, arguments);
			};

			// Hang a delegate on the "overrides" object we pass into Java.
			// This one wraps hyperloop proxies from Java in their JS wrapper before forwarding on
			modified[each] = function() {
				return instance[each].apply(instance, _wrapArgs.apply(this, arguments));
			}
		});
		result.setOverrides(modified);

		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};
	};
	// it extends the JS wrapper for the parent type
	SubClass.prototype = Object.create(UserPrincipalLookupService.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
UserPrincipalLookupService.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new UserPrincipalLookupService(Hyperloop.cast('java.nio.file.attribute.UserPrincipalLookupService', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function lookupPrincipalByGroupName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/UserPrincipalLookupService.html#lookupPrincipalByGroupName(java.lang.String)}
 **/
UserPrincipalLookupService.prototype.lookupPrincipalByGroupName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lookupPrincipalByGroupName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.UserPrincipalLookupService') {
			return new UserPrincipalLookupService(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lookupPrincipalByName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/UserPrincipalLookupService.html#lookupPrincipalByName(java.lang.String)}
 **/
UserPrincipalLookupService.prototype.lookupPrincipalByName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lookupPrincipalByName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.UserPrincipalLookupService') {
			return new UserPrincipalLookupService(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = UserPrincipalLookupService;
