/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.MappedByteBuffer
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio');

/**
 * @class java.nio.MappedByteBuffer
 * @extends java.nio.ByteBuffer 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/MappedByteBuffer.html}
 **/
var MappedByteBuffer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.MappedByteBuffer')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.MappedByteBuffer. Create a subclass using java.nio.MappedByteBuffer.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.ByteBuffer');
MappedByteBuffer.prototype = Object.create(SuperClass.prototype);
MappedByteBuffer.prototype.constructor = MappedByteBuffer;

Object.defineProperty(MappedByteBuffer.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MappedByteBuffer(this.$native.super);
	},
	enumerable: true
});

MappedByteBuffer.className = 'java.nio.MappedByteBuffer';
MappedByteBuffer.prototype.className = 'java.nio.MappedByteBuffer';

// class property
Object.defineProperty(MappedByteBuffer, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.MappedByteBuffer');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
MappedByteBuffer.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.MappedByteBuffer');

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
	SubClass.prototype = Object.create(MappedByteBuffer.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
MappedByteBuffer.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MappedByteBuffer(Hyperloop.cast('java.nio.MappedByteBuffer', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function load
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/MappedByteBuffer.html#load()}
 **/
MappedByteBuffer.prototype.load = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'load',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.MappedByteBuffer') {
			return new MappedByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function force
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/MappedByteBuffer.html#force()}
 **/
MappedByteBuffer.prototype.force = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'force',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.MappedByteBuffer') {
			return new MappedByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLoaded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/MappedByteBuffer.html#isLoaded()}
 **/
MappedByteBuffer.prototype.isLoaded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLoaded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.MappedByteBuffer') {
			return new MappedByteBuffer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = MappedByteBuffer;
