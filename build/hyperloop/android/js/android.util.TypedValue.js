/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.util.TypedValue
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.util');

/**
 * @class android.util.TypedValue
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html}
 **/
var TypedValue = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.util.TypedValue')) {
		result = arguments[0];
	}
	else {
		result = TypedValue.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
TypedValue.prototype = Object.create(SuperClass.prototype);
TypedValue.prototype.constructor = TypedValue;

Object.defineProperty(TypedValue.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new TypedValue(this.$native.super);
	},
	enumerable: true
});

TypedValue.className = 'android.util.TypedValue';
TypedValue.prototype.className = 'android.util.TypedValue';

// class property
Object.defineProperty(TypedValue, 'class', {
	get: function() {
		return Hyperloop.getClass('android.util.TypedValue');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
TypedValue.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.util.TypedValue');

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
	SubClass.prototype = Object.create(TypedValue.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
TypedValue.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new TypedValue(Hyperloop.cast('android.util.TypedValue', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_SP}
 */
TypedValue.COMPLEX_UNIT_SP = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_MANTISSA_MASK}
 */
TypedValue.COMPLEX_MANTISSA_MASK = 16777215;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#DATA_NULL_EMPTY}
 */
TypedValue.DATA_NULL_EMPTY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#DATA_NULL_UNDEFINED}
 */
TypedValue.DATA_NULL_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_MASK}
 */
TypedValue.COMPLEX_UNIT_MASK = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_MM}
 */
TypedValue.COMPLEX_UNIT_MM = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_HEX}
 */
TypedValue.TYPE_INT_HEX = 17;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_REFERENCE}
 */
TypedValue.TYPE_REFERENCE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_STRING}
 */
TypedValue.TYPE_STRING = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_16p7}
 */
TypedValue.COMPLEX_RADIX_16p7 = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_DIMENSION}
 */
TypedValue.TYPE_DIMENSION = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_FIRST_INT}
 */
TypedValue.TYPE_FIRST_INT = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_MANTISSA_SHIFT}
 */
TypedValue.COMPLEX_MANTISSA_SHIFT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_FRACTION_PARENT}
 */
TypedValue.COMPLEX_UNIT_FRACTION_PARENT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_IN}
 */
TypedValue.COMPLEX_UNIT_IN = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_8p15}
 */
TypedValue.COMPLEX_RADIX_8p15 = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_SHIFT}
 */
TypedValue.COMPLEX_UNIT_SHIFT = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_FRACTION}
 */
TypedValue.TYPE_FRACTION = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_FRACTION}
 */
TypedValue.COMPLEX_UNIT_FRACTION = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_FLOAT}
 */
TypedValue.TYPE_FLOAT = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_BOOLEAN}
 */
TypedValue.TYPE_INT_BOOLEAN = 18;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_NULL}
 */
TypedValue.TYPE_NULL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_DEC}
 */
TypedValue.TYPE_INT_DEC = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_DIP}
 */
TypedValue.COMPLEX_UNIT_DIP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_COLOR_RGB4}
 */
TypedValue.TYPE_INT_COLOR_RGB4 = 31;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#DENSITY_NONE}
 */
TypedValue.DENSITY_NONE = 65535;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_ATTRIBUTE}
 */
TypedValue.TYPE_ATTRIBUTE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_COLOR_RGB8}
 */
TypedValue.TYPE_INT_COLOR_RGB8 = 29;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_LAST_INT}
 */
TypedValue.TYPE_LAST_INT = 31;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_FIRST_COLOR_INT}
 */
TypedValue.TYPE_FIRST_COLOR_INT = 28;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_SHIFT}
 */
TypedValue.COMPLEX_RADIX_SHIFT = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_COLOR_ARGB8}
 */
TypedValue.TYPE_INT_COLOR_ARGB8 = 28;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_0p23}
 */
TypedValue.COMPLEX_RADIX_0p23 = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_23p0}
 */
TypedValue.COMPLEX_RADIX_23p0 = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#DENSITY_DEFAULT}
 */
TypedValue.DENSITY_DEFAULT = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_PT}
 */
TypedValue.COMPLEX_UNIT_PT = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_INT_COLOR_ARGB4}
 */
TypedValue.TYPE_INT_COLOR_ARGB4 = 30;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_UNIT_PX}
 */
TypedValue.COMPLEX_UNIT_PX = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#COMPLEX_RADIX_MASK}
 */
TypedValue.COMPLEX_RADIX_MASK = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#TYPE_LAST_COLOR_INT}
 */
TypedValue.TYPE_LAST_COLOR_INT = 31;

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/util/TypedValue.html#resourceId
Object.defineProperty(TypedValue.prototype, 'resourceId', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('resourceId');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new TypedValue(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('resourceId', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/TypedValue.html#data
Object.defineProperty(TypedValue.prototype, 'data', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('data');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new TypedValue(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('data', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/TypedValue.html#string
Object.defineProperty(TypedValue.prototype, 'string', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('string');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new TypedValue(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('string', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/TypedValue.html#assetCookie
Object.defineProperty(TypedValue.prototype, 'assetCookie', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('assetCookie');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new TypedValue(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('assetCookie', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/TypedValue.html#type
Object.defineProperty(TypedValue.prototype, 'type', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('type');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new TypedValue(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('type', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/util/TypedValue.html#density
Object.defineProperty(TypedValue.prototype, 'density', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('density');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new TypedValue(result);
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
// http://developer.android.com/reference/android/util/TypedValue.html#changingConfigurations
Object.defineProperty(TypedValue.prototype, 'changingConfigurations', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('changingConfigurations');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.util.TypedValue') {
				return new TypedValue(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('changingConfigurations', newValue);
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function complexToFloat
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#complexToFloat(int)}
 **/
TypedValue.complexToFloat = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'complexToFloat',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyDimension
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#applyDimension(int, float, android.util.DisplayMetrics)}
 **/
TypedValue.applyDimension = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'applyDimension',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function complexToDimensionPixelSize
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#complexToDimensionPixelSize(int, android.util.DisplayMetrics)}
 **/
TypedValue.complexToDimensionPixelSize = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'complexToDimensionPixelSize',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function complexToFraction
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#complexToFraction(int, float, float)}
 **/
TypedValue.complexToFraction = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'complexToFraction',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function complexToDimensionPixelOffset
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#complexToDimensionPixelOffset(int, android.util.DisplayMetrics)}
 **/
TypedValue.complexToDimensionPixelOffset = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'complexToDimensionPixelOffset',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function coerceToString
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#coerceToString(int, int)}
 **/
TypedValue.coerceToString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'coerceToString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function complexToDimension
 * @static
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#complexToDimension(int, android.util.DisplayMetrics)}
 **/
TypedValue.complexToDimension = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'complexToDimension',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
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
 * @function getFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#getFloat()}
 **/
TypedValue.prototype.getFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDimension
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#getDimension(android.util.DisplayMetrics)}
 **/
TypedValue.prototype.getDimension = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDimension',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
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
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#setTo(android.util.TypedValue)}
 **/
TypedValue.prototype.setTo = function() {
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
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getComplexUnit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#getComplexUnit()}
 **/
TypedValue.prototype.getComplexUnit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getComplexUnit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
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
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#toString()}
 **/
TypedValue.prototype.toString = function() {
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
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function coerceToString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#coerceToString()}
 **/
TypedValue.prototype.coerceToString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'coerceToString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/util/TypedValue.html#getFraction(float, float)}
 **/
TypedValue.prototype.getFraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.util.TypedValue') {
			return new TypedValue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = TypedValue;
