/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.BitmapFactory$Options
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.BitmapFactory');

/**
 * @class android.graphics.BitmapFactory$Options
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html}
 **/
var Options = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.BitmapFactory$Options')) {
		result = arguments[0];
	}
	else {
		result = Options.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Options.prototype = Object.create(SuperClass.prototype);
Options.prototype.constructor = Options;

Object.defineProperty(Options.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Options(this.$native.super);
	},
	enumerable: true
});

Options.className = 'android.graphics.BitmapFactory$Options';
Options.prototype.className = 'android.graphics.BitmapFactory$Options';

// class property
Object.defineProperty(Options, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.BitmapFactory$Options');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Options.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.BitmapFactory$Options');

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
	SubClass.prototype = Object.create(Options.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Options.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Options(Hyperloop.cast('android.graphics.BitmapFactory$Options', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#outMimeType
Object.defineProperty(Options.prototype, 'outMimeType', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('outMimeType');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('outMimeType', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#mCancel
Object.defineProperty(Options.prototype, 'mCancel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('mCancel');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('mCancel', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inPreferQualityOverSpeed
Object.defineProperty(Options.prototype, 'inPreferQualityOverSpeed', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inPreferQualityOverSpeed');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inPreferQualityOverSpeed', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inPreferredConfig
Object.defineProperty(Options.prototype, 'inPreferredConfig', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inPreferredConfig');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inPreferredConfig', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inTempStorage
Object.defineProperty(Options.prototype, 'inTempStorage', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inTempStorage');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inTempStorage', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inScreenDensity
Object.defineProperty(Options.prototype, 'inScreenDensity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inScreenDensity');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inScreenDensity', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inMutable
Object.defineProperty(Options.prototype, 'inMutable', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inMutable');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inMutable', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inPremultiplied
Object.defineProperty(Options.prototype, 'inPremultiplied', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inPremultiplied');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inPremultiplied', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inSampleSize
Object.defineProperty(Options.prototype, 'inSampleSize', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inSampleSize');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inSampleSize', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inInputShareable
Object.defineProperty(Options.prototype, 'inInputShareable', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inInputShareable');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inInputShareable', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inPurgeable
Object.defineProperty(Options.prototype, 'inPurgeable', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inPurgeable');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inPurgeable', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#outHeight
Object.defineProperty(Options.prototype, 'outHeight', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('outHeight');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('outHeight', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#outWidth
Object.defineProperty(Options.prototype, 'outWidth', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('outWidth');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('outWidth', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inBitmap
Object.defineProperty(Options.prototype, 'inBitmap', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inBitmap');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inBitmap', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inDensity
Object.defineProperty(Options.prototype, 'inDensity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inDensity');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inDensity', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inJustDecodeBounds
Object.defineProperty(Options.prototype, 'inJustDecodeBounds', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inJustDecodeBounds');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inJustDecodeBounds', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inScaled
Object.defineProperty(Options.prototype, 'inScaled', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inScaled');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inScaled', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inTargetDensity
Object.defineProperty(Options.prototype, 'inTargetDensity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inTargetDensity');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inTargetDensity', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inDither
Object.defineProperty(Options.prototype, 'inDither', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inDither');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.BitmapFactory$Options') {
				return new Options(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inDither', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function requestCancelDecode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#requestCancelDecode()}
 **/
Options.prototype.requestCancelDecode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestCancelDecode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.BitmapFactory$Options') {
			return new Options(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Options;
