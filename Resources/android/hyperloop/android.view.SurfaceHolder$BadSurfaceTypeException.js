/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.SurfaceHolder$BadSurfaceTypeException
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.SurfaceHolder');

/**
 * @class android.view.SurfaceHolder$BadSurfaceTypeException
 * @extends java.lang.RuntimeException 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/SurfaceHolder.BadSurfaceTypeException.html}
 **/
var BadSurfaceTypeException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.SurfaceHolder$BadSurfaceTypeException')) {
		result = arguments[0];
	}
	else {
		result = BadSurfaceTypeException.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.RuntimeException');
BadSurfaceTypeException.prototype = Object.create(SuperClass.prototype);
BadSurfaceTypeException.prototype.constructor = BadSurfaceTypeException;

Object.defineProperty(BadSurfaceTypeException.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new BadSurfaceTypeException(this.$native.super);
	},
	enumerable: true
});

BadSurfaceTypeException.className = 'android.view.SurfaceHolder$BadSurfaceTypeException';
BadSurfaceTypeException.prototype.className = 'android.view.SurfaceHolder$BadSurfaceTypeException';

// class property
Object.defineProperty(BadSurfaceTypeException, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.SurfaceHolder$BadSurfaceTypeException');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
BadSurfaceTypeException.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.SurfaceHolder$BadSurfaceTypeException');

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
	SubClass.prototype = Object.create(BadSurfaceTypeException.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
BadSurfaceTypeException.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new BadSurfaceTypeException(Hyperloop.cast('android.view.SurfaceHolder$BadSurfaceTypeException', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods

// export the class
module.exports = BadSurfaceTypeException;
