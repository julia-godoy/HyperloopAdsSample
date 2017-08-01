/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.OptionalDouble
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.util');

/**
 * @class java.util.OptionalDouble
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html}
 **/
var OptionalDouble = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.OptionalDouble')) {
		result = arguments[0];
	}
	else {
		result = OptionalDouble.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
OptionalDouble.prototype = Object.create(SuperClass.prototype);
OptionalDouble.prototype.constructor = OptionalDouble;

Object.defineProperty(OptionalDouble.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new OptionalDouble(this.$native.super);
	},
	enumerable: true
});

OptionalDouble.className = 'java.util.OptionalDouble';
OptionalDouble.prototype.className = 'java.util.OptionalDouble';

// class property
Object.defineProperty(OptionalDouble, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.OptionalDouble');
	},
	enumerable: true,
	configurable: false
});


// Cast
OptionalDouble.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new OptionalDouble(Hyperloop.cast('java.util.OptionalDouble', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function of
 * @static
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#of(double)}
 **/
OptionalDouble.of = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'of',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function empty
 * @static
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#empty()}
 **/
OptionalDouble.empty = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'empty',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
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
 * @function orElseGet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#orElseGet(java.util.function.DoubleSupplier)}
 **/
OptionalDouble.prototype.orElseGet = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'orElseGet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
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
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#hashCode()}
 **/
OptionalDouble.prototype.hashCode = function() {
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
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ifPresent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#ifPresent(java.util.function.DoubleConsumer)}
 **/
OptionalDouble.prototype.ifPresent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'ifPresent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
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
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#equals(java.lang.Object)}
 **/
OptionalDouble.prototype.equals = function() {
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
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPresent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#isPresent()}
 **/
OptionalDouble.prototype.isPresent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPresent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
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
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#toString()}
 **/
OptionalDouble.prototype.toString = function() {
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
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAsDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#getAsDouble()}
 **/
OptionalDouble.prototype.getAsDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAsDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function orElse
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#orElse(double)}
 **/
OptionalDouble.prototype.orElse = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'orElse',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function orElseThrow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/OptionalDouble.html#orElseThrow(java.util.function.Supplier)}
 **/
OptionalDouble.prototype.orElseThrow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'orElseThrow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.OptionalDouble') {
			return new OptionalDouble(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = OptionalDouble;
