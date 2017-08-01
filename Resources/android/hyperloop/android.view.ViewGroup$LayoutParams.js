/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewGroup$LayoutParams
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.ViewGroup');

/**
 * @class android.view.ViewGroup$LayoutParams
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html}
 **/
var LayoutParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.ViewGroup$LayoutParams')) {
		result = arguments[0];
	}
	else {
		result = LayoutParams.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
LayoutParams.prototype = Object.create(SuperClass.prototype);
LayoutParams.prototype.constructor = LayoutParams;

Object.defineProperty(LayoutParams.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new LayoutParams(this.$native.super);
	},
	enumerable: true
});

LayoutParams.className = 'android.view.ViewGroup$LayoutParams';
LayoutParams.prototype.className = 'android.view.ViewGroup$LayoutParams';

// class property
Object.defineProperty(LayoutParams, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.ViewGroup$LayoutParams');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
LayoutParams.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.ViewGroup$LayoutParams');

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
	SubClass.prototype = Object.create(LayoutParams.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
LayoutParams.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new LayoutParams(Hyperloop.cast('android.view.ViewGroup$LayoutParams', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#MATCH_PARENT}
 */
LayoutParams.MATCH_PARENT = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#FILL_PARENT}
 */
LayoutParams.FILL_PARENT = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#WRAP_CONTENT}
 */
LayoutParams.WRAP_CONTENT = -2;

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#layoutAnimationParameters
Object.defineProperty(LayoutParams.prototype, 'layoutAnimationParameters', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('layoutAnimationParameters');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('layoutAnimationParameters', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#width
Object.defineProperty(LayoutParams.prototype, 'width', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('width');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('width', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#height
Object.defineProperty(LayoutParams.prototype, 'height', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('height');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('height', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function resolveLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#resolveLayoutDirection(int)}
 **/
LayoutParams.prototype.resolveLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$LayoutParams') {
			return new LayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBaseAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html#setBaseAttributes(android.content.res.TypedArray, int, int)}
 **/
LayoutParams.prototype.setBaseAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBaseAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$LayoutParams') {
			return new LayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = LayoutParams;
