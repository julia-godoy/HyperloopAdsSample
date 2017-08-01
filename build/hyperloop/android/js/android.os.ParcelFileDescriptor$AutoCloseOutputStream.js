/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.ParcelFileDescriptor$AutoCloseOutputStream
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.os.ParcelFileDescriptor');

/**
 * @class android.os.ParcelFileDescriptor$AutoCloseOutputStream
 * @extends java.io.FileOutputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.AutoCloseOutputStream.html}
 **/
var AutoCloseOutputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.ParcelFileDescriptor$AutoCloseOutputStream')) {
		result = arguments[0];
	}
	else {
		result = AutoCloseOutputStream.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.FileOutputStream');
AutoCloseOutputStream.prototype = Object.create(SuperClass.prototype);
AutoCloseOutputStream.prototype.constructor = AutoCloseOutputStream;

Object.defineProperty(AutoCloseOutputStream.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AutoCloseOutputStream(this.$native.super);
	},
	enumerable: true
});

AutoCloseOutputStream.className = 'android.os.ParcelFileDescriptor$AutoCloseOutputStream';
AutoCloseOutputStream.prototype.className = 'android.os.ParcelFileDescriptor$AutoCloseOutputStream';

// class property
Object.defineProperty(AutoCloseOutputStream, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.ParcelFileDescriptor$AutoCloseOutputStream');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
AutoCloseOutputStream.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.os.ParcelFileDescriptor$AutoCloseOutputStream');

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
	SubClass.prototype = Object.create(AutoCloseOutputStream.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
AutoCloseOutputStream.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AutoCloseOutputStream(Hyperloop.cast('android.os.ParcelFileDescriptor$AutoCloseOutputStream', object.$native));
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
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.AutoCloseOutputStream.html#close()}
 **/
AutoCloseOutputStream.prototype.close = function() {
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
		if (result.apiName === 'android.os.ParcelFileDescriptor$AutoCloseOutputStream') {
			return new AutoCloseOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AutoCloseOutputStream;
