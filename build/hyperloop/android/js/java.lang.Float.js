/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Float
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.lang');

/**
 * @class java.lang.Float
 * @extends java.lang.Number 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Float.html}
 **/
var Float = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.lang.Float')) {
		result = arguments[0];
	}
	else {
		result = Float.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Number');
Float.prototype = Object.create(SuperClass.prototype);
Float.prototype.constructor = Float;

Object.defineProperty(Float.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Float(this.$native.super);
	},
	enumerable: true
});

Float.className = 'java.lang.Float';
Float.prototype.className = 'java.lang.Float';

// class property
Object.defineProperty(Float, 'class', {
	get: function() {
		return Hyperloop.getClass('java.lang.Float');
	},
	enumerable: true,
	configurable: false
});


// Cast
Float.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Float(Hyperloop.cast('java.lang.Float', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#POSITIVE_INFINITY}
 */
Float.POSITIVE_INFINITY = Infinity;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#BYTES}
 */
Float.BYTES = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#MAX_EXPONENT}
 */
Float.MAX_EXPONENT = 127;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#NEGATIVE_INFINITY}
 */
Float.NEGATIVE_INFINITY = -Infinity;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#MIN_NORMAL}
 */
Float.MIN_NORMAL = 1.17549435E-38;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#SIZE}
 */
Float.SIZE = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#NaN}
 */
Float.NaN = NaN;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#MAX_VALUE}
 */
Float.MAX_VALUE = 3.4028235E38;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#MIN_VALUE}
 */
Float.MIN_VALUE = 1.4E-45;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#MIN_EXPONENT}
 */
Float.MIN_EXPONENT = -126;

// Inner classes

// Static fields
// http://developer.android.com/reference/java/lang/Float.html#TYPE
Object.defineProperty(Float, 'TYPE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TYPE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Float') {
				return new Float(result);
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
/**
 * TODO Fill out docs more...
 * @function parseFloat
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#parseFloat(java.lang.String)}
 **/
Float.parseFloat = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseFloat',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compare
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#compare(float, float)}
 **/
Float.compare = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'compare',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toHexString
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#toHexString(float)}
 **/
Float.toHexString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toHexString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function max
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#max(float, float)}
 **/
Float.max = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'max',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#valueOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#valueOf(float)}
 **/
Float.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function intBitsToFloat
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#intBitsToFloat(int)}
 **/
Float.intBitsToFloat = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'intBitsToFloat',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sum
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#sum(float, float)}
 **/
Float.sum = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'sum',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isNaN
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#isNaN(float)}
 **/
Float.isNaN = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isNaN',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFinite
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#isFinite(float)}
 **/
Float.isFinite = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isFinite',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function floatToIntBits
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#floatToIntBits(float)}
 **/
Float.floatToIntBits = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'floatToIntBits',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function floatToRawIntBits
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#floatToRawIntBits(float)}
 **/
Float.floatToRawIntBits = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'floatToRawIntBits',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function min
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#min(float, float)}
 **/
Float.min = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'min',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInfinite
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#isInfinite(float)}
 **/
Float.isInfinite = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isInfinite',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#hashCode(float)}
 **/
Float.hashCode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'hashCode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#toString(float)}
 **/
Float.toString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
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
 * @function intValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#intValue()}
 **/
Float.prototype.intValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'intValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function floatValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#floatValue()}
 **/
Float.prototype.floatValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'floatValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function doubleValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#doubleValue()}
 **/
Float.prototype.doubleValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'doubleValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#compareTo(java.lang.Float)}
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#compareTo(java.lang.Object)}
 **/
Float.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isNaN
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#isNaN()}
 **/
Float.prototype.isNaN = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isNaN',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function longValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#longValue()}
 **/
Float.prototype.longValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'longValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInfinite
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#isInfinite()}
 **/
Float.prototype.isInfinite = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInfinite',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#hashCode()}
 **/
Float.prototype.hashCode = function() {
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
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#equals(java.lang.Object)}
 **/
Float.prototype.equals = function() {
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
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#toString()}
 **/
Float.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shortValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#shortValue()}
 **/
Float.prototype.shortValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shortValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function byteValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Float.html#byteValue()}
 **/
Float.prototype.byteValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'byteValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Float') {
			return new Float(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Float;
