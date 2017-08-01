/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.VoiceInteractor$AbortVoiceRequest
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.app.VoiceInteractor');

/**
 * @class android.app.VoiceInteractor$AbortVoiceRequest
 * @extends android.app.VoiceInteractor.Request 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.AbortVoiceRequest.html}
 **/
var AbortVoiceRequest = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.VoiceInteractor$AbortVoiceRequest')) {
		result = arguments[0];
	}
	else {
		result = AbortVoiceRequest.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.app.VoiceInteractor$Request');
AbortVoiceRequest.prototype = Object.create(SuperClass.prototype);
AbortVoiceRequest.prototype.constructor = AbortVoiceRequest;

Object.defineProperty(AbortVoiceRequest.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AbortVoiceRequest(this.$native.super);
	},
	enumerable: true
});

AbortVoiceRequest.className = 'android.app.VoiceInteractor$AbortVoiceRequest';
AbortVoiceRequest.prototype.className = 'android.app.VoiceInteractor$AbortVoiceRequest';

// class property
Object.defineProperty(AbortVoiceRequest, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.VoiceInteractor$AbortVoiceRequest');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
AbortVoiceRequest.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.VoiceInteractor$AbortVoiceRequest');

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
	SubClass.prototype = Object.create(AbortVoiceRequest.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
AbortVoiceRequest.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AbortVoiceRequest(Hyperloop.cast('android.app.VoiceInteractor$AbortVoiceRequest', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onAbortResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.AbortVoiceRequest.html#onAbortResult(android.os.Bundle)}
 **/
AbortVoiceRequest.prototype.onAbortResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAbortResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$AbortVoiceRequest') {
			return new AbortVoiceRequest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AbortVoiceRequest;
