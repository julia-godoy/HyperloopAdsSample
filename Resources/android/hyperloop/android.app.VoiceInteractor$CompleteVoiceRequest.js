/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.VoiceInteractor$CompleteVoiceRequest
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.app.VoiceInteractor');

/**
 * @class android.app.VoiceInteractor$CompleteVoiceRequest
 * @extends android.app.VoiceInteractor.Request 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.CompleteVoiceRequest.html}
 **/
var CompleteVoiceRequest = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.VoiceInteractor$CompleteVoiceRequest')) {
		result = arguments[0];
	}
	else {
		result = CompleteVoiceRequest.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.app.VoiceInteractor$Request');
CompleteVoiceRequest.prototype = Object.create(SuperClass.prototype);
CompleteVoiceRequest.prototype.constructor = CompleteVoiceRequest;

Object.defineProperty(CompleteVoiceRequest.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CompleteVoiceRequest(this.$native.super);
	},
	enumerable: true
});

CompleteVoiceRequest.className = 'android.app.VoiceInteractor$CompleteVoiceRequest';
CompleteVoiceRequest.prototype.className = 'android.app.VoiceInteractor$CompleteVoiceRequest';

// class property
Object.defineProperty(CompleteVoiceRequest, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.VoiceInteractor$CompleteVoiceRequest');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
CompleteVoiceRequest.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.VoiceInteractor$CompleteVoiceRequest');

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
	SubClass.prototype = Object.create(CompleteVoiceRequest.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
CompleteVoiceRequest.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CompleteVoiceRequest(Hyperloop.cast('android.app.VoiceInteractor$CompleteVoiceRequest', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onCompleteResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.CompleteVoiceRequest.html#onCompleteResult(android.os.Bundle)}
 **/
CompleteVoiceRequest.prototype.onCompleteResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCompleteResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$CompleteVoiceRequest') {
			return new CompleteVoiceRequest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CompleteVoiceRequest;
