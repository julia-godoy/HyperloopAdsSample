/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.ColorFilter
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics');

/**
 * @class android.graphics.ColorFilter
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/ColorFilter.html}
 **/
var ColorFilter = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.ColorFilter')) {
		result = arguments[0];
	}
	else {
		result = ColorFilter.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ColorFilter.prototype = Object.create(SuperClass.prototype);
ColorFilter.prototype.constructor = ColorFilter;

Object.defineProperty(ColorFilter.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ColorFilter(this.$native.super);
	},
	enumerable: true
});

ColorFilter.className = 'android.graphics.ColorFilter';
ColorFilter.prototype.className = 'android.graphics.ColorFilter';

// class property
Object.defineProperty(ColorFilter, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.ColorFilter');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ColorFilter.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.ColorFilter');

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
	SubClass.prototype = Object.create(ColorFilter.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ColorFilter.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ColorFilter(Hyperloop.cast('android.graphics.ColorFilter', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/ColorFilter.html#finalize()}
 **/
ColorFilter.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.ColorFilter') {
			return new ColorFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ColorFilter;
