/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.IOException
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.io');

/**
 * @class java.io.IOException
 * @extends java.lang.Exception 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/IOException.html}
 **/
var IOException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.io.IOException')) {
		result = arguments[0];
	}
	else {
		result = IOException.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Exception');
IOException.prototype = Object.create(SuperClass.prototype);
IOException.prototype.constructor = IOException;

Object.defineProperty(IOException.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new IOException(this.$native.super);
	},
	enumerable: true
});

IOException.className = 'java.io.IOException';
IOException.prototype.className = 'java.io.IOException';

// class property
Object.defineProperty(IOException, 'class', {
	get: function() {
		return Hyperloop.getClass('java.io.IOException');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
IOException.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.io.IOException');

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
	SubClass.prototype = Object.create(IOException.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
IOException.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new IOException(Hyperloop.cast('java.io.IOException', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = IOException;
