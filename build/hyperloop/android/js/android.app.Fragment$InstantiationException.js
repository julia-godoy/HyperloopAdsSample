/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.Fragment$InstantiationException
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.app.Fragment');

/**
 * @class android.app.Fragment$InstantiationException
 * @extends android.util.AndroidRuntimeException 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/Fragment.InstantiationException.html}
 **/
var InstantiationException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.Fragment$InstantiationException')) {
		result = arguments[0];
	}
	else {
		result = InstantiationException.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.util.AndroidRuntimeException');
InstantiationException.prototype = Object.create(SuperClass.prototype);
InstantiationException.prototype.constructor = InstantiationException;

Object.defineProperty(InstantiationException.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new InstantiationException(this.$native.super);
	},
	enumerable: true
});

InstantiationException.className = 'android.app.Fragment$InstantiationException';
InstantiationException.prototype.className = 'android.app.Fragment$InstantiationException';

// class property
Object.defineProperty(InstantiationException, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.Fragment$InstantiationException');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
InstantiationException.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.Fragment$InstantiationException');

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
	SubClass.prototype = Object.create(InstantiationException.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
InstantiationException.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new InstantiationException(Hyperloop.cast('android.app.Fragment$InstantiationException', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = InstantiationException;
