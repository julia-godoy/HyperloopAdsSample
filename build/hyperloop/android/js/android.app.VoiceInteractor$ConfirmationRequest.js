/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.VoiceInteractor$ConfirmationRequest
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.app.VoiceInteractor');

/**
 * @class android.app.VoiceInteractor$ConfirmationRequest
 * @extends android.app.VoiceInteractor.Request 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.ConfirmationRequest.html}
 **/
var ConfirmationRequest = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.VoiceInteractor$ConfirmationRequest')) {
		result = arguments[0];
	}
	else {
		result = ConfirmationRequest.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.app.VoiceInteractor$Request');
ConfirmationRequest.prototype = Object.create(SuperClass.prototype);
ConfirmationRequest.prototype.constructor = ConfirmationRequest;

Object.defineProperty(ConfirmationRequest.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ConfirmationRequest(this.$native.super);
	},
	enumerable: true
});

ConfirmationRequest.className = 'android.app.VoiceInteractor$ConfirmationRequest';
ConfirmationRequest.prototype.className = 'android.app.VoiceInteractor$ConfirmationRequest';

// class property
Object.defineProperty(ConfirmationRequest, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.VoiceInteractor$ConfirmationRequest');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ConfirmationRequest.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.VoiceInteractor$ConfirmationRequest');

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
	SubClass.prototype = Object.create(ConfirmationRequest.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ConfirmationRequest.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ConfirmationRequest(Hyperloop.cast('android.app.VoiceInteractor$ConfirmationRequest', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onConfirmationResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.ConfirmationRequest.html#onConfirmationResult(boolean, android.os.Bundle)}
 **/
ConfirmationRequest.prototype.onConfirmationResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onConfirmationResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$ConfirmationRequest') {
			return new ConfirmationRequest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ConfirmationRequest;
