/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.util.DisplayMetrics
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.util');

/**
 * @class android.util.DisplayMetrics
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html}
 **/
var DisplayMetrics = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.util.DisplayMetrics')) {
		result = arguments[0];
	}
	else {
		result = DisplayMetrics.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
DisplayMetrics.prototype = Object.create(SuperClass.prototype);
DisplayMetrics.prototype.constructor = DisplayMetrics;

Object.defineProperty(DisplayMetrics.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new DisplayMetrics(this.$native.super);
	},
	enumerable: true
});

DisplayMetrics.className = 'android.util.DisplayMetrics';
DisplayMetrics.prototype.className = 'android.util.DisplayMetrics';

// class property
Object.defineProperty(DisplayMetrics, 'class', {
	get: function() {
		return Hyperloop.getClass('android.util.DisplayMetrics');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
DisplayMetrics.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.util.DisplayMetrics');

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
	SubClass.prototype = Object.create(DisplayMetrics.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
DisplayMetrics.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new DisplayMetrics(Hyperloop.cast('android.util.DisplayMetrics', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_360}
 */
DisplayMetrics.DENSITY_360 = 360;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_XXXHIGH}
 */
DisplayMetrics.DENSITY_XXXHIGH = 640;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_280}
 */
DisplayMetrics.DENSITY_280 = 280;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_TV}
 */
DisplayMetrics.DENSITY_TV = 213;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_400}
 */
DisplayMetrics.DENSITY_400 = 400;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_LOW}
 */
DisplayMetrics.DENSITY_LOW = 120;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_420}
 */
DisplayMetrics.DENSITY_420 = 420;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_560}
 */
DisplayMetrics.DENSITY_560 = 560;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_DEFAULT}
 */
DisplayMetrics.DENSITY_DEFAULT = 160;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_XHIGH}
 */
DisplayMetrics.DENSITY_XHIGH = 320;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_HIGH}
 */
DisplayMetrics.DENSITY_HIGH = 240;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_XXHIGH}
 */
DisplayMetrics.DENSITY_XXHIGH = 480;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#DENSITY_MEDIUM}
 */
DisplayMetrics.DENSITY_MEDIUM = 160;

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/util/DisplayMetrics.html#scaledDensity
Object.defineProperty(DisplayMetrics.prototype, 'scaledDensity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('scaledDensity');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new DisplayMetrics(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('scaledDensity', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#density
Object.defineProperty(DisplayMetrics.prototype, 'density', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('density');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new DisplayMetrics(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('density', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#heightPixels
Object.defineProperty(DisplayMetrics.prototype, 'heightPixels', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('heightPixels');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new DisplayMetrics(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('heightPixels', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#widthPixels
Object.defineProperty(DisplayMetrics.prototype, 'widthPixels', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('widthPixels');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new DisplayMetrics(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('widthPixels', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#densityDpi
Object.defineProperty(DisplayMetrics.prototype, 'densityDpi', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('densityDpi');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new DisplayMetrics(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('densityDpi', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#ydpi
Object.defineProperty(DisplayMetrics.prototype, 'ydpi', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('ydpi');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new DisplayMetrics(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('ydpi', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/DisplayMetrics.html#xdpi
Object.defineProperty(DisplayMetrics.prototype, 'xdpi', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('xdpi');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.DisplayMetrics') {
				return new DisplayMetrics(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('xdpi', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setToDefaults
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#setToDefaults()}
 **/
DisplayMetrics.prototype.setToDefaults = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setToDefaults',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.DisplayMetrics') {
			return new DisplayMetrics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#hashCode()}
 **/
DisplayMetrics.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.DisplayMetrics') {
			return new DisplayMetrics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#equals(java.lang.Object)}
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#equals(android.util.DisplayMetrics)}
 **/
DisplayMetrics.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.DisplayMetrics') {
			return new DisplayMetrics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#setTo(android.util.DisplayMetrics)}
 **/
DisplayMetrics.prototype.setTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.DisplayMetrics') {
			return new DisplayMetrics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/DisplayMetrics.html#toString()}
 **/
DisplayMetrics.prototype.toString = function() {
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
		if (result.apiName === 'android.util.DisplayMetrics') {
			return new DisplayMetrics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = DisplayMetrics;
