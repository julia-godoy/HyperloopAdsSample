/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.core.exception.InLocoMediaAPIException
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.core.exception');

/**
 * @class com.inlocomedia.android.core.exception.InLocoMediaAPIException
 * @extends com.inlocomedia.android.core.exception.InLocoMediaException 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/exception/InLocoMediaAPIException.html}
 **/
var InLocoMediaAPIException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.core.exception.InLocoMediaAPIException')) {
		result = arguments[0];
	}
	else {
		result = InLocoMediaAPIException.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('com.inlocomedia.android.core.exception.InLocoMediaException');
InLocoMediaAPIException.prototype = Object.create(SuperClass.prototype);
InLocoMediaAPIException.prototype.constructor = InLocoMediaAPIException;

Object.defineProperty(InLocoMediaAPIException.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new InLocoMediaAPIException(this.$native.super);
	},
	enumerable: true
});

InLocoMediaAPIException.className = 'com.inlocomedia.android.core.exception.InLocoMediaAPIException';
InLocoMediaAPIException.prototype.className = 'com.inlocomedia.android.core.exception.InLocoMediaAPIException';

// class property
Object.defineProperty(InLocoMediaAPIException, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.core.exception.InLocoMediaAPIException');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
InLocoMediaAPIException.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('com.inlocomedia.android.core.exception.InLocoMediaAPIException');

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
	SubClass.prototype = Object.create(InLocoMediaAPIException.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
InLocoMediaAPIException.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new InLocoMediaAPIException(Hyperloop.cast('com.inlocomedia.android.core.exception.InLocoMediaAPIException', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = InLocoMediaAPIException;
