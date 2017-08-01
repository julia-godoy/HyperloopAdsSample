/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.KeyCharacterMap$UnavailableException
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.KeyCharacterMap');

/**
 * @class android.view.KeyCharacterMap$UnavailableException
 * @extends android.util.AndroidRuntimeException 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.UnavailableException.html}
 **/
var UnavailableException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.KeyCharacterMap$UnavailableException')) {
		result = arguments[0];
	}
	else {
		result = UnavailableException.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.util.AndroidRuntimeException');
UnavailableException.prototype = Object.create(SuperClass.prototype);
UnavailableException.prototype.constructor = UnavailableException;

Object.defineProperty(UnavailableException.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new UnavailableException(this.$native.super);
	},
	enumerable: true
});

UnavailableException.className = 'android.view.KeyCharacterMap$UnavailableException';
UnavailableException.prototype.className = 'android.view.KeyCharacterMap$UnavailableException';

// class property
Object.defineProperty(UnavailableException, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.KeyCharacterMap$UnavailableException');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
UnavailableException.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.KeyCharacterMap$UnavailableException');

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
	SubClass.prototype = Object.create(UnavailableException.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
UnavailableException.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new UnavailableException(Hyperloop.cast('android.view.KeyCharacterMap$UnavailableException', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = UnavailableException;
