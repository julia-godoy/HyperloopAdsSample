/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Double
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.lang');

/**
 * @class java.lang.Double
 * @extends java.lang.Number 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Double.html}
 **/
var Double = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.lang.Double')) {
		result = arguments[0];
	}
	else {
		result = Double.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Number');
Double.prototype = Object.create(SuperClass.prototype);
Double.prototype.constructor = Double;

Object.defineProperty(Double.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Double(this.$native.super);
	},
	enumerable: true
});

Double.className = 'java.lang.Double';
Double.prototype.className = 'java.lang.Double';

// class property
Object.defineProperty(Double, 'class', {
	get: function() {
		return Hyperloop.getClass('java.lang.Double');
	},
	enumerable: true,
	configurable: false
});


// Cast
Double.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Double(Hyperloop.cast('java.lang.Double', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#POSITIVE_INFINITY}
 */
Double.POSITIVE_INFINITY = Infinity;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#BYTES}
 */
Double.BYTES = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#MAX_EXPONENT}
 */
Double.MAX_EXPONENT = 1023;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#NEGATIVE_INFINITY}
 */
Double.NEGATIVE_INFINITY = -Infinity;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#MIN_NORMAL}
 */
Double.MIN_NORMAL = 2.2250738585072014E-308;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#SIZE}
 */
Double.SIZE = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#NaN}
 */
Double.NaN = NaN;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#MAX_VALUE}
 */
Double.MAX_VALUE = 1.7976931348623157E308;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#MIN_VALUE}
 */
Double.MIN_VALUE = 4.9E-324;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#MIN_EXPONENT}
 */
Double.MIN_EXPONENT = -1022;

// Inner classes

// Static fields
// http://developer.android.com/reference/java/lang/Double.html#TYPE
Object.defineProperty(Double, 'TYPE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TYPE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Double') {
				return new Double(result);
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
 * @function compare
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#compare(double, double)}
 **/
Double.compare = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#toHexString(double)}
 **/
Double.toHexString = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#max(double, double)}
 **/
Double.max = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#valueOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#valueOf(double)}
 **/
Double.valueOf = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#sum(double, double)}
 **/
Double.sum = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#isNaN(double)}
 **/
Double.isNaN = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function doubleToLongBits
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#doubleToLongBits(double)}
 **/
Double.doubleToLongBits = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'doubleToLongBits',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function longBitsToDouble
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#longBitsToDouble(long)}
 **/
Double.longBitsToDouble = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'longBitsToDouble',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function doubleToRawLongBits
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#doubleToRawLongBits(double)}
 **/
Double.doubleToRawLongBits = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'doubleToRawLongBits',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#isFinite(double)}
 **/
Double.isFinite = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseDouble
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#parseDouble(java.lang.String)}
 **/
Double.parseDouble = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseDouble',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#min(double, double)}
 **/
Double.min = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#isInfinite(double)}
 **/
Double.isInfinite = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#hashCode(double)}
 **/
Double.hashCode = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#toString(double)}
 **/
Double.toString = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#intValue()}
 **/
Double.prototype.intValue = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#floatValue()}
 **/
Double.prototype.floatValue = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#doubleValue()}
 **/
Double.prototype.doubleValue = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#compareTo(java.lang.Double)}
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#compareTo(java.lang.Object)}
 **/
Double.prototype.compareTo = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#isNaN()}
 **/
Double.prototype.isNaN = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#longValue()}
 **/
Double.prototype.longValue = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#isInfinite()}
 **/
Double.prototype.isInfinite = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#hashCode()}
 **/
Double.prototype.hashCode = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#equals(java.lang.Object)}
 **/
Double.prototype.equals = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#toString()}
 **/
Double.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#shortValue()}
 **/
Double.prototype.shortValue = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Double.html#byteValue()}
 **/
Double.prototype.byteValue = function() {
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
		if (result.apiName === 'java.lang.Double') {
			return new Double(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Double;
