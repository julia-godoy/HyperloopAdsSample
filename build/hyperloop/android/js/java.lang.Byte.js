/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Byte
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.lang');

/**
 * @class java.lang.Byte
 * @extends java.lang.Number 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html}
 **/
var Byte = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.lang.Byte')) {
		result = arguments[0];
	}
	else {
		result = Byte.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Number');
Byte.prototype = Object.create(SuperClass.prototype);
Byte.prototype.constructor = Byte;

Object.defineProperty(Byte.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Byte(this.$native.super);
	},
	enumerable: true
});

Byte.className = 'java.lang.Byte';
Byte.prototype.className = 'java.lang.Byte';

// class property
Object.defineProperty(Byte, 'class', {
	get: function() {
		return Hyperloop.getClass('java.lang.Byte');
	},
	enumerable: true,
	configurable: false
});


// Cast
Byte.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Byte(Hyperloop.cast('java.lang.Byte', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#BYTES}
 */
Byte.BYTES = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#SIZE}
 */
Byte.SIZE = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#MAX_VALUE}
 */
Byte.MAX_VALUE = 127;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#MIN_VALUE}
 */
Byte.MIN_VALUE = -128;

// Inner classes

// Static fields
// http://developer.android.com/reference/java/lang/Byte.html#TYPE
Object.defineProperty(Byte, 'TYPE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TYPE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Byte') {
				return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#compare(byte, byte)}
 **/
Byte.compare = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#valueOf(byte)}
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#valueOf(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#valueOf(java.lang.String)}
 **/
Byte.valueOf = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#toUnsignedLong(byte)}
 **/
Byte.toUnsignedLong = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#decode(java.lang.String)}
 **/
Byte.decode = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseByte
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#parseByte(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#parseByte(java.lang.String)}
 **/
Byte.parseByte = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseByte',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toUnsignedInt
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#toUnsignedInt(byte)}
 **/
Byte.toUnsignedInt = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toUnsignedInt',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#hashCode(byte)}
 **/
Byte.hashCode = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#toString(byte)}
 **/
Byte.toString = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#intValue()}
 **/
Byte.prototype.intValue = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#floatValue()}
 **/
Byte.prototype.floatValue = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#doubleValue()}
 **/
Byte.prototype.doubleValue = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#compareTo(java.lang.Byte)}
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#compareTo(java.lang.Object)}
 **/
Byte.prototype.compareTo = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#longValue()}
 **/
Byte.prototype.longValue = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#hashCode()}
 **/
Byte.prototype.hashCode = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#equals(java.lang.Object)}
 **/
Byte.prototype.equals = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#toString()}
 **/
Byte.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#shortValue()}
 **/
Byte.prototype.shortValue = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Byte.html#byteValue()}
 **/
Byte.prototype.byteValue = function() {
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
		if (result.apiName === 'java.lang.Byte') {
			return new Byte(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Byte;
