/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Exception
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.lang');

/**
 * @class java.lang.Exception
 * @extends java.lang.Throwable 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Exception.html}
 **/
var Exception = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.lang.Exception')) {
		result = arguments[0];
	}
	else {
		result = Exception.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Throwable');
Exception.prototype = Object.create(SuperClass.prototype);
Exception.prototype.constructor = Exception;

Object.defineProperty(Exception.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Exception(this.$native.super);
	},
	enumerable: true
});

Exception.className = 'java.lang.Exception';
Exception.prototype.className = 'java.lang.Exception';

// class property
Object.defineProperty(Exception, 'class', {
	get: function() {
		return Hyperloop.getClass('java.lang.Exception');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Exception.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.lang.Exception');

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
	SubClass.prototype = Object.create(Exception.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Exception.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Exception(Hyperloop.cast('java.lang.Exception', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = Exception;
