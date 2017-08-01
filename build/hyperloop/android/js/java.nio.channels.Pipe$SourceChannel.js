/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.Pipe$SourceChannel
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('java.nio.channels.Pipe');

/**
 * @class java.nio.channels.Pipe$SourceChannel
 * @extends java.nio.channels.spi.AbstractSelectableChannel 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/Pipe.SourceChannel.html}
 **/
var SourceChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.channels.Pipe$SourceChannel')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.Pipe$SourceChannel. Create a subclass using java.nio.channels.Pipe$SourceChannel.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.spi.AbstractSelectableChannel');
SourceChannel.prototype = Object.create(SuperClass.prototype);
SourceChannel.prototype.constructor = SourceChannel;

Object.defineProperty(SourceChannel.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SourceChannel(this.$native.super);
	},
	enumerable: true
});

SourceChannel.className = 'java.nio.channels.Pipe$SourceChannel';
SourceChannel.prototype.className = 'java.nio.channels.Pipe$SourceChannel';

// class property
Object.defineProperty(SourceChannel, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.channels.Pipe$SourceChannel');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SourceChannel.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.channels.Pipe$SourceChannel');

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
	SubClass.prototype = Object.create(SourceChannel.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SourceChannel.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SourceChannel(Hyperloop.cast('java.nio.channels.Pipe$SourceChannel', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function validOps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/Pipe.SourceChannel.html#validOps()}
 **/
SourceChannel.prototype.validOps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'validOps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.Pipe$SourceChannel') {
			return new SourceChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SourceChannel;
