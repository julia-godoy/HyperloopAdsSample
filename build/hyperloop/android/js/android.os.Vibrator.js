/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.Vibrator
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.os');

/**
 * @class android.os.Vibrator
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html}
 **/
var Vibrator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.Vibrator')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.os.Vibrator. Create a subclass using android.os.Vibrator.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Vibrator.prototype = Object.create(SuperClass.prototype);
Vibrator.prototype.constructor = Vibrator;

Object.defineProperty(Vibrator.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Vibrator(this.$native.super);
	},
	enumerable: true
});

Vibrator.className = 'android.os.Vibrator';
Vibrator.prototype.className = 'android.os.Vibrator';

// class property
Object.defineProperty(Vibrator, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.Vibrator');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Vibrator.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.os.Vibrator');

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
	SubClass.prototype = Object.create(Vibrator.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Vibrator.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Vibrator(Hyperloop.cast('android.os.Vibrator', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#cancel()}
 **/
Vibrator.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Vibrator') {
			return new Vibrator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function vibrate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#vibrate(long)}
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#vibrate(long, android.media.AudioAttributes)}
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#vibrate(long[], int)}
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#vibrate(long[], int, android.media.AudioAttributes)}
 **/
Vibrator.prototype.vibrate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'vibrate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Vibrator') {
			return new Vibrator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasVibrator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Vibrator.html#hasVibrator()}
 **/
Vibrator.prototype.hasVibrator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasVibrator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Vibrator') {
			return new Vibrator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Vibrator;
