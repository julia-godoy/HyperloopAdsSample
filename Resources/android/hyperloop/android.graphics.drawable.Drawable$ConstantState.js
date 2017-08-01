/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.drawable.Drawable$ConstantState
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.drawable.Drawable');

/**
 * @class android.graphics.drawable.Drawable$ConstantState
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html}
 **/
var ConstantState = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.drawable.Drawable$ConstantState')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.graphics.drawable.Drawable$ConstantState. Create a subclass using android.graphics.drawable.Drawable$ConstantState.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ConstantState.prototype = Object.create(SuperClass.prototype);
ConstantState.prototype.constructor = ConstantState;

Object.defineProperty(ConstantState.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ConstantState(this.$native.super);
	},
	enumerable: true
});

ConstantState.className = 'android.graphics.drawable.Drawable$ConstantState';
ConstantState.prototype.className = 'android.graphics.drawable.Drawable$ConstantState';

// class property
Object.defineProperty(ConstantState, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.drawable.Drawable$ConstantState');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ConstantState.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.drawable.Drawable$ConstantState');

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
	SubClass.prototype = Object.create(ConstantState.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ConstantState.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ConstantState(Hyperloop.cast('android.graphics.drawable.Drawable$ConstantState', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getChangingConfigurations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html#getChangingConfigurations()}
 **/
ConstantState.prototype.getChangingConfigurations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChangingConfigurations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable$ConstantState') {
			return new ConstantState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html#newDrawable()}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html#newDrawable(android.content.res.Resources)}
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html#newDrawable(android.content.res.Resources, android.content.res.Resources$Theme)}
 **/
ConstantState.prototype.newDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable$ConstantState') {
			return new ConstantState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canApplyTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/Drawable.ConstantState.html#canApplyTheme()}
 **/
ConstantState.prototype.canApplyTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canApplyTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.Drawable$ConstantState') {
			return new ConstantState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ConstantState;
