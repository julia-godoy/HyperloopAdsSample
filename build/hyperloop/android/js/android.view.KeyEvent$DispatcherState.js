/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.KeyEvent$DispatcherState
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.KeyEvent');

/**
 * @class android.view.KeyEvent$DispatcherState
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html}
 **/
var DispatcherState = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.KeyEvent$DispatcherState')) {
		result = arguments[0];
	}
	else {
		result = DispatcherState.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
DispatcherState.prototype = Object.create(SuperClass.prototype);
DispatcherState.prototype.constructor = DispatcherState;

Object.defineProperty(DispatcherState.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new DispatcherState(this.$native.super);
	},
	enumerable: true
});

DispatcherState.className = 'android.view.KeyEvent$DispatcherState';
DispatcherState.prototype.className = 'android.view.KeyEvent$DispatcherState';

// class property
Object.defineProperty(DispatcherState, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.KeyEvent$DispatcherState');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
DispatcherState.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.KeyEvent$DispatcherState');

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
	SubClass.prototype = Object.create(DispatcherState.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
DispatcherState.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new DispatcherState(Hyperloop.cast('android.view.KeyEvent$DispatcherState', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function isTracking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#isTracking(android.view.KeyEvent)}
 **/
DispatcherState.prototype.isTracking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTracking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent$DispatcherState') {
			return new DispatcherState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startTracking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#startTracking(android.view.KeyEvent, java.lang.Object)}
 **/
DispatcherState.prototype.startTracking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startTracking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent$DispatcherState') {
			return new DispatcherState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#reset()}
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#reset(java.lang.Object)}
 **/
DispatcherState.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent$DispatcherState') {
			return new DispatcherState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performedLongPress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#performedLongPress(android.view.KeyEvent)}
 **/
DispatcherState.prototype.performedLongPress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performedLongPress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent$DispatcherState') {
			return new DispatcherState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function handleUpEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.DispatcherState.html#handleUpEvent(android.view.KeyEvent)}
 **/
DispatcherState.prototype.handleUpEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'handleUpEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent$DispatcherState') {
			return new DispatcherState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = DispatcherState;
