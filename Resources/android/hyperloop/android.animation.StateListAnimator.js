/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.animation.StateListAnimator
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.animation');

/**
 * @class android.animation.StateListAnimator
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/animation/StateListAnimator.html}
 **/
var StateListAnimator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.animation.StateListAnimator')) {
		result = arguments[0];
	}
	else {
		result = StateListAnimator.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
StateListAnimator.prototype = Object.create(SuperClass.prototype);
StateListAnimator.prototype.constructor = StateListAnimator;

Object.defineProperty(StateListAnimator.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new StateListAnimator(this.$native.super);
	},
	enumerable: true
});

StateListAnimator.className = 'android.animation.StateListAnimator';
StateListAnimator.prototype.className = 'android.animation.StateListAnimator';

// class property
Object.defineProperty(StateListAnimator, 'class', {
	get: function() {
		return Hyperloop.getClass('android.animation.StateListAnimator');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
StateListAnimator.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.animation.StateListAnimator');

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
	SubClass.prototype = Object.create(StateListAnimator.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
StateListAnimator.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new StateListAnimator(Hyperloop.cast('android.animation.StateListAnimator', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/StateListAnimator.html#clone()}
 * @see {@link http://developer.android.com/reference/android/animation/StateListAnimator.html#clone()}
 **/
StateListAnimator.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.StateListAnimator') {
			return new StateListAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function jumpToCurrentState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/StateListAnimator.html#jumpToCurrentState()}
 **/
StateListAnimator.prototype.jumpToCurrentState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'jumpToCurrentState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.StateListAnimator') {
			return new StateListAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/StateListAnimator.html#addState(int[], android.animation.Animator)}
 **/
StateListAnimator.prototype.addState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.StateListAnimator') {
			return new StateListAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = StateListAnimator;
