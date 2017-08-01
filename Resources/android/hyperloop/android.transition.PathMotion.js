/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.PathMotion
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.transition');

/**
 * @class android.transition.PathMotion
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/PathMotion.html}
 **/
var PathMotion = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.transition.PathMotion')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.transition.PathMotion. Create a subclass using android.transition.PathMotion.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PathMotion.prototype = Object.create(SuperClass.prototype);
PathMotion.prototype.constructor = PathMotion;

Object.defineProperty(PathMotion.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PathMotion(this.$native.super);
	},
	enumerable: true
});

PathMotion.className = 'android.transition.PathMotion';
PathMotion.prototype.className = 'android.transition.PathMotion';

// class property
Object.defineProperty(PathMotion, 'class', {
	get: function() {
		return Hyperloop.getClass('android.transition.PathMotion');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PathMotion.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.transition.PathMotion');

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
	SubClass.prototype = Object.create(PathMotion.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PathMotion.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PathMotion(Hyperloop.cast('android.transition.PathMotion', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/PathMotion.html#getPath(float, float, float, float)}
 **/
PathMotion.prototype.getPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.PathMotion') {
			return new PathMotion(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PathMotion;
