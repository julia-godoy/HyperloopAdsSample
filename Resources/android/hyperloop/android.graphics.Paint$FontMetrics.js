/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Paint$FontMetrics
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Paint');

/**
 * @class android.graphics.Paint$FontMetrics
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html}
 **/
var FontMetrics = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Paint$FontMetrics')) {
		result = arguments[0];
	}
	else {
		result = FontMetrics.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
FontMetrics.prototype = Object.create(SuperClass.prototype);
FontMetrics.prototype.constructor = FontMetrics;

Object.defineProperty(FontMetrics.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FontMetrics(this.$native.super);
	},
	enumerable: true
});

FontMetrics.className = 'android.graphics.Paint$FontMetrics';
FontMetrics.prototype.className = 'android.graphics.Paint$FontMetrics';

// class property
Object.defineProperty(FontMetrics, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Paint$FontMetrics');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
FontMetrics.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.Paint$FontMetrics');

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
	SubClass.prototype = Object.create(FontMetrics.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
FontMetrics.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FontMetrics(Hyperloop.cast('android.graphics.Paint$FontMetrics', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html#descent
Object.defineProperty(FontMetrics.prototype, 'descent', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('descent');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetrics') {
				return new FontMetrics(result);
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
// http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html#ascent
Object.defineProperty(FontMetrics.prototype, 'ascent', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('ascent');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetrics') {
				return new FontMetrics(result);
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
// http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html#top
Object.defineProperty(FontMetrics.prototype, 'top', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('top');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetrics') {
				return new FontMetrics(result);
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
// http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html#bottom
Object.defineProperty(FontMetrics.prototype, 'bottom', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('bottom');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetrics') {
				return new FontMetrics(result);
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
// http://developer.android.com/reference/android/graphics/Paint.FontMetrics.html#leading
Object.defineProperty(FontMetrics.prototype, 'leading', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('leading');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$FontMetrics') {
				return new FontMetrics(result);
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

// export the class
module.exports = FontMetrics;
