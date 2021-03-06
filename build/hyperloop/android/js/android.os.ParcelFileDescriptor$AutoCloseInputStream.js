/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.ParcelFileDescriptor$AutoCloseInputStream
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.os.ParcelFileDescriptor');

/**
 * @class android.os.ParcelFileDescriptor$AutoCloseInputStream
 * @extends java.io.FileInputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.AutoCloseInputStream.html}
 **/
var AutoCloseInputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.ParcelFileDescriptor$AutoCloseInputStream')) {
		result = arguments[0];
	}
	else {
		result = AutoCloseInputStream.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.FileInputStream');
AutoCloseInputStream.prototype = Object.create(SuperClass.prototype);
AutoCloseInputStream.prototype.constructor = AutoCloseInputStream;

Object.defineProperty(AutoCloseInputStream.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AutoCloseInputStream(this.$native.super);
	},
	enumerable: true
});

AutoCloseInputStream.className = 'android.os.ParcelFileDescriptor$AutoCloseInputStream';
AutoCloseInputStream.prototype.className = 'android.os.ParcelFileDescriptor$AutoCloseInputStream';

// class property
Object.defineProperty(AutoCloseInputStream, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.ParcelFileDescriptor$AutoCloseInputStream');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
AutoCloseInputStream.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.os.ParcelFileDescriptor$AutoCloseInputStream');

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
	SubClass.prototype = Object.create(AutoCloseInputStream.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
AutoCloseInputStream.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AutoCloseInputStream(Hyperloop.cast('android.os.ParcelFileDescriptor$AutoCloseInputStream', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function close
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.AutoCloseInputStream.html#close()}
 **/
AutoCloseInputStream.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor$AutoCloseInputStream') {
			return new AutoCloseInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AutoCloseInputStream;
