/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Paint$FontMetricsInt
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Paint');

/**
 * @class android.graphics.Paint$FontMetricsInt
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html}
 **/
var FontMetricsInt = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Paint$FontMetricsInt')) {
		result = arguments[0];
	}
	else {
		result = FontMetricsInt.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
FontMetricsInt.prototype = Object.create(SuperClass.prototype);
FontMetricsInt.prototype.constructor = FontMetricsInt;

Object.defineProperty(FontMetricsInt.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FontMetricsInt(this.$native.super);
	},
	enumerable: true
});

FontMetricsInt.className = 'android.graphics.Paint$FontMetricsInt';
FontMetricsInt.prototype.className = 'android.graphics.Paint$FontMetricsInt';

// class property
Object.defineProperty(FontMetricsInt, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Paint$FontMetricsInt');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
FontMetricsInt.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.Paint$FontMetricsInt');

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
	SubClass.prototype = Object.create(FontMetricsInt.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
FontMetricsInt.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FontMetricsInt(Hyperloop.cast('android.graphics.Paint$FontMetricsInt', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#descent
Object.defineProperty(FontMetricsInt.prototype, 'descent', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('descent');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
				return new FontMetricsInt(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('descent', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#ascent
Object.defineProperty(FontMetricsInt.prototype, 'ascent', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('ascent');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
				return new FontMetricsInt(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('ascent', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#top
Object.defineProperty(FontMetricsInt.prototype, 'top', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('top');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
				return new FontMetricsInt(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('top', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#bottom
Object.defineProperty(FontMetricsInt.prototype, 'bottom', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('bottom');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
				return new FontMetricsInt(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('bottom', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#leading
Object.defineProperty(FontMetricsInt.prototype, 'leading', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('leading');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
				return new FontMetricsInt(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('leading', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.FontMetricsInt.html#toString()}
 **/
FontMetricsInt.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint$FontMetricsInt') {
			return new FontMetricsInt(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FontMetricsInt;
