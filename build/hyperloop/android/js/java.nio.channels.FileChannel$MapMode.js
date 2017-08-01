/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.FileChannel$MapMode
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('java.nio.channels.FileChannel');

/**
 * @class java.nio.channels.FileChannel$MapMode
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.MapMode.html}
 **/
var MapMode = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.channels.FileChannel$MapMode')) {
		result = arguments[0];
	}
	else {
		result = MapMode.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
MapMode.prototype = Object.create(SuperClass.prototype);
MapMode.prototype.constructor = MapMode;

Object.defineProperty(MapMode.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MapMode(this.$native.super);
	},
	enumerable: true
});

MapMode.className = 'java.nio.channels.FileChannel$MapMode';
MapMode.prototype.className = 'java.nio.channels.FileChannel$MapMode';

// class property
Object.defineProperty(MapMode, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.channels.FileChannel$MapMode');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
MapMode.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.channels.FileChannel$MapMode');

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
	SubClass.prototype = Object.create(MapMode.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
MapMode.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MapMode(Hyperloop.cast('java.nio.channels.FileChannel$MapMode', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/nio/channels/FileChannel.MapMode.html#READ_ONLY
Object.defineProperty(MapMode, 'READ_ONLY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('READ_ONLY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.channels.FileChannel$MapMode') {
				return new MapMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/channels/FileChannel.MapMode.html#READ_WRITE
Object.defineProperty(MapMode, 'READ_WRITE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('READ_WRITE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.channels.FileChannel$MapMode') {
				return new MapMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/channels/FileChannel.MapMode.html#PRIVATE
Object.defineProperty(MapMode, 'PRIVATE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('PRIVATE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.channels.FileChannel$MapMode') {
				return new MapMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.MapMode.html#toString()}
 **/
MapMode.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileChannel$MapMode') {
			return new MapMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = MapMode;
