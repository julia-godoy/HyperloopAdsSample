/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Integer
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.lang');

/**
 * @class java.lang.Integer
 * @extends java.lang.Number 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html}
 **/
var Integer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.lang.Integer')) {
		result = arguments[0];
	}
	else {
		result = Integer.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Number');
Integer.prototype = Object.create(SuperClass.prototype);
Integer.prototype.constructor = Integer;

Object.defineProperty(Integer.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Integer(this.$native.super);
	},
	enumerable: true
});

Integer.className = 'java.lang.Integer';
Integer.prototype.className = 'java.lang.Integer';

// class property
Object.defineProperty(Integer, 'class', {
	get: function() {
		return Hyperloop.getClass('java.lang.Integer');
	},
	enumerable: true,
	configurable: false
});


// Cast
Integer.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Integer(Hyperloop.cast('java.lang.Integer', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#BYTES}
 */
Integer.BYTES = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#SIZE}
 */
Integer.SIZE = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#MAX_VALUE}
 */
Integer.MAX_VALUE = 2147483647;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#MIN_VALUE}
 */
Integer.MIN_VALUE = -2147483648;

// Inner classes

// Static fields
// http://developer.android.com/reference/java/lang/Integer.html#TYPE
Object.defineProperty(Integer, 'TYPE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TYPE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Integer') {
				return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#compare(int, int)}
 **/
Integer.compare = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toUnsignedLong
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#toUnsignedLong(int)}
 **/
Integer.toUnsignedLong = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toUnsignedLong',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotateLeft
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#rotateLeft(int, int)}
 **/
Integer.rotateLeft = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'rotateLeft',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInteger
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#getInteger(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#getInteger(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#getInteger(java.lang.String, java.lang.Integer)}
 **/
Integer.getInteger = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getInteger',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#sum(int, int)}
 **/
Integer.sum = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decode
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#decode(java.lang.String)}
 **/
Integer.decode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'decode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toOctalString
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#toOctalString(int)}
 **/
Integer.toOctalString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toOctalString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseUnsignedInt
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#parseUnsignedInt(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#parseUnsignedInt(java.lang.String)}
 **/
Integer.parseUnsignedInt = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseUnsignedInt',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function remainderUnsigned
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#remainderUnsigned(int, int)}
 **/
Integer.remainderUnsigned = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'remainderUnsigned',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#min(int, int)}
 **/
Integer.min = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#hashCode(int)}
 **/
Integer.hashCode = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lowestOneBit
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#lowestOneBit(int)}
 **/
Integer.lowestOneBit = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'lowestOneBit',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function signum
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#signum(int)}
 **/
Integer.signum = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'signum',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#toHexString(int)}
 **/
Integer.toHexString = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotateRight
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#rotateRight(int, int)}
 **/
Integer.rotateRight = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'rotateRight',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#max(int, int)}
 **/
Integer.max = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#valueOf(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#valueOf(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#valueOf(int)}
 **/
Integer.valueOf = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function divideUnsigned
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#divideUnsigned(int, int)}
 **/
Integer.divideUnsigned = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'divideUnsigned',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reverse
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#reverse(int)}
 **/
Integer.reverse = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'reverse',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function numberOfLeadingZeros
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#numberOfLeadingZeros(int)}
 **/
Integer.numberOfLeadingZeros = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'numberOfLeadingZeros',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseInt
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#parseInt(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#parseInt(java.lang.String)}
 **/
Integer.parseInt = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseInt',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareUnsigned
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#compareUnsigned(int, int)}
 **/
Integer.compareUnsigned = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'compareUnsigned',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toBinaryString
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#toBinaryString(int)}
 **/
Integer.toBinaryString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toBinaryString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#toString(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#toString(int)}
 **/
Integer.toString = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toUnsignedString
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#toUnsignedString(int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#toUnsignedString(int)}
 **/
Integer.toUnsignedString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toUnsignedString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bitCount
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#bitCount(int)}
 **/
Integer.bitCount = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'bitCount',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function highestOneBit
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#highestOneBit(int)}
 **/
Integer.highestOneBit = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'highestOneBit',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function numberOfTrailingZeros
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#numberOfTrailingZeros(int)}
 **/
Integer.numberOfTrailingZeros = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'numberOfTrailingZeros',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reverseBytes
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#reverseBytes(int)}
 **/
Integer.reverseBytes = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'reverseBytes',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#compareTo(java.lang.Integer)}
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#compareTo(java.lang.Object)}
 **/
Integer.prototype.compareTo = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#longValue()}
 **/
Integer.prototype.longValue = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#hashCode()}
 **/
Integer.prototype.hashCode = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#shortValue()}
 **/
Integer.prototype.shortValue = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function intValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#intValue()}
 **/
Integer.prototype.intValue = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#floatValue()}
 **/
Integer.prototype.floatValue = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#doubleValue()}
 **/
Integer.prototype.doubleValue = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#equals(java.lang.Object)}
 **/
Integer.prototype.equals = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#toString()}
 **/
Integer.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Integer.html#byteValue()}
 **/
Integer.prototype.byteValue = function() {
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
		if (result.apiName === 'java.lang.Integer') {
			return new Integer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Integer;
