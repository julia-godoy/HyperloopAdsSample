/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.CoderResult
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.charset');

/**
 * @class java.nio.charset.CoderResult
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html}
 **/
var CoderResult = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.charset.CoderResult')) {
		result = arguments[0];
	}
	else {
		result = CoderResult.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CoderResult.prototype = Object.create(SuperClass.prototype);
CoderResult.prototype.constructor = CoderResult;

Object.defineProperty(CoderResult.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CoderResult(this.$native.super);
	},
	enumerable: true
});

CoderResult.className = 'java.nio.charset.CoderResult';
CoderResult.prototype.className = 'java.nio.charset.CoderResult';

// class property
Object.defineProperty(CoderResult, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.charset.CoderResult');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
CoderResult.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.charset.CoderResult');

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
	SubClass.prototype = Object.create(CoderResult.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
CoderResult.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CoderResult(Hyperloop.cast('java.nio.charset.CoderResult', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/nio/charset/CoderResult.html#OVERFLOW
Object.defineProperty(CoderResult, 'OVERFLOW', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('OVERFLOW');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CoderResult') {
				return new CoderResult(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/charset/CoderResult.html#UNDERFLOW
Object.defineProperty(CoderResult, 'UNDERFLOW', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('UNDERFLOW');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CoderResult') {
				return new CoderResult(result);
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
 * @function malformedForLength
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#malformedForLength(int)}
 **/
CoderResult.malformedForLength = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'malformedForLength',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unmappableForLength
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#unmappableForLength(int)}
 **/
CoderResult.unmappableForLength = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'unmappableForLength',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new CoderResult(result);
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
 * @function isMalformed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#isMalformed()}
 **/
CoderResult.prototype.isMalformed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMalformed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#isError()}
 **/
CoderResult.prototype.isError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOverflow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#isOverflow()}
 **/
CoderResult.prototype.isOverflow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOverflow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isUnmappable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#isUnmappable()}
 **/
CoderResult.prototype.isUnmappable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isUnmappable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isUnderflow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#isUnderflow()}
 **/
CoderResult.prototype.isUnderflow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isUnderflow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function length
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#length()}
 **/
CoderResult.prototype.length = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'length',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new CoderResult(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#toString()}
 **/
CoderResult.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function throwException
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CoderResult.html#throwException()}
 **/
CoderResult.prototype.throwException = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'throwException',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CoderResult') {
			return new CoderResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CoderResult;
