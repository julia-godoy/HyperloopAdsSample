/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.View$BaseSavedState
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.View');

/**
 * @class android.view.View$BaseSavedState
 * @extends android.view.AbsSavedState 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/View.BaseSavedState.html}
 **/
var BaseSavedState = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.View$BaseSavedState')) {
		result = arguments[0];
	}
	else {
		result = BaseSavedState.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.AbsSavedState');
BaseSavedState.prototype = Object.create(SuperClass.prototype);
BaseSavedState.prototype.constructor = BaseSavedState;

Object.defineProperty(BaseSavedState.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new BaseSavedState(this.$native.super);
	},
	enumerable: true
});

BaseSavedState.className = 'android.view.View$BaseSavedState';
BaseSavedState.prototype.className = 'android.view.View$BaseSavedState';

// class property
Object.defineProperty(BaseSavedState, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.View$BaseSavedState');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
BaseSavedState.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.View$BaseSavedState');

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
	SubClass.prototype = Object.create(BaseSavedState.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
BaseSavedState.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new BaseSavedState(Hyperloop.cast('android.view.View$BaseSavedState', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/view/View.BaseSavedState.html#CREATOR
Object.defineProperty(BaseSavedState, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.View$BaseSavedState') {
				return new BaseSavedState(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.BaseSavedState.html#writeToParcel(android.os.Parcel, int)}
 **/
BaseSavedState.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$BaseSavedState') {
			return new BaseSavedState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = BaseSavedState;
