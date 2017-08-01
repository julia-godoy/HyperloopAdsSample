/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.TransitionPropagation
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.transition');

/**
 * @class android.transition.TransitionPropagation
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html}
 **/
var TransitionPropagation = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.transition.TransitionPropagation')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.transition.TransitionPropagation. Create a subclass using android.transition.TransitionPropagation.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
TransitionPropagation.prototype = Object.create(SuperClass.prototype);
TransitionPropagation.prototype.constructor = TransitionPropagation;

Object.defineProperty(TransitionPropagation.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new TransitionPropagation(this.$native.super);
	},
	enumerable: true
});

TransitionPropagation.className = 'android.transition.TransitionPropagation';
TransitionPropagation.prototype.className = 'android.transition.TransitionPropagation';

// class property
Object.defineProperty(TransitionPropagation, 'class', {
	get: function() {
		return Hyperloop.getClass('android.transition.TransitionPropagation');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
TransitionPropagation.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.transition.TransitionPropagation');

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
	SubClass.prototype = Object.create(TransitionPropagation.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
TransitionPropagation.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new TransitionPropagation(Hyperloop.cast('android.transition.TransitionPropagation', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function captureValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html#captureValues(android.transition.TransitionValues)}
 **/
TransitionPropagation.prototype.captureValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'captureValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionPropagation') {
			return new TransitionPropagation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPropagationProperties
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html#getPropagationProperties()}
 **/
TransitionPropagation.prototype.getPropagationProperties = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPropagationProperties',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionPropagation') {
			return new TransitionPropagation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionPropagation.html#getStartDelay(android.view.ViewGroup, android.transition.Transition, android.transition.TransitionValues, android.transition.TransitionValues)}
 **/
TransitionPropagation.prototype.getStartDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionPropagation') {
			return new TransitionPropagation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = TransitionPropagation;
