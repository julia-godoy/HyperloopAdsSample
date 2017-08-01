/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.TouchDelegate
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.TouchDelegate
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html}
 **/
var TouchDelegate = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.TouchDelegate')) {
		result = arguments[0];
	}
	else {
		result = TouchDelegate.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
TouchDelegate.prototype = Object.create(SuperClass.prototype);
TouchDelegate.prototype.constructor = TouchDelegate;

Object.defineProperty(TouchDelegate.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new TouchDelegate(this.$native.super);
	},
	enumerable: true
});

TouchDelegate.className = 'android.view.TouchDelegate';
TouchDelegate.prototype.className = 'android.view.TouchDelegate';

// class property
Object.defineProperty(TouchDelegate, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.TouchDelegate');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
TouchDelegate.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.TouchDelegate');

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
	SubClass.prototype = Object.create(TouchDelegate.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
TouchDelegate.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new TouchDelegate(Hyperloop.cast('android.view.TouchDelegate', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html#BELOW}
 */
TouchDelegate.BELOW = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html#TO_LEFT}
 */
TouchDelegate.TO_LEFT = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html#TO_RIGHT}
 */
TouchDelegate.TO_RIGHT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html#ABOVE}
 */
TouchDelegate.ABOVE = 1;

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/TouchDelegate.html#onTouchEvent(android.view.MotionEvent)}
 **/
TouchDelegate.prototype.onTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.TouchDelegate') {
			return new TouchDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = TouchDelegate;
