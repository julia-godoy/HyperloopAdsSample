/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.TransitionManager
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.transition');

/**
 * @class android.transition.TransitionManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html}
 **/
var TransitionManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.transition.TransitionManager')) {
		result = arguments[0];
	}
	else {
		result = TransitionManager.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
TransitionManager.prototype = Object.create(SuperClass.prototype);
TransitionManager.prototype.constructor = TransitionManager;

Object.defineProperty(TransitionManager.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new TransitionManager(this.$native.super);
	},
	enumerable: true
});

TransitionManager.className = 'android.transition.TransitionManager';
TransitionManager.prototype.className = 'android.transition.TransitionManager';

// class property
Object.defineProperty(TransitionManager, 'class', {
	get: function() {
		return Hyperloop.getClass('android.transition.TransitionManager');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
TransitionManager.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.transition.TransitionManager');

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
	SubClass.prototype = Object.create(TransitionManager.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
TransitionManager.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new TransitionManager(Hyperloop.cast('android.transition.TransitionManager', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function go
 * @static
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#go(android.transition.Scene)}
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#go(android.transition.Scene, android.transition.Transition)}
 **/
TransitionManager.go = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'go',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionManager') {
			return new TransitionManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginDelayedTransition
 * @static
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#beginDelayedTransition(android.view.ViewGroup)}
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#beginDelayedTransition(android.view.ViewGroup, android.transition.Transition)}
 **/
TransitionManager.beginDelayedTransition = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'beginDelayedTransition',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionManager') {
			return new TransitionManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function endTransitions
 * @static
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#endTransitions(android.view.ViewGroup)}
 **/
TransitionManager.endTransitions = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'endTransitions',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionManager') {
			return new TransitionManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function transitionTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#transitionTo(android.transition.Scene)}
 **/
TransitionManager.prototype.transitionTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'transitionTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionManager') {
			return new TransitionManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#setTransition(android.transition.Scene, android.transition.Transition)}
 * @see {@link http://developer.android.com/reference/android/transition/TransitionManager.html#setTransition(android.transition.Scene, android.transition.Scene, android.transition.Transition)}
 **/
TransitionManager.prototype.setTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.TransitionManager') {
			return new TransitionManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = TransitionManager;
