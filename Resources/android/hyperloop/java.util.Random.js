/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.Random
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.util');

/**
 * @class java.util.Random
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/Random.html}
 **/
var Random = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.Random')) {
		result = arguments[0];
	}
	else {
		result = Random.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Random.prototype = Object.create(SuperClass.prototype);
Random.prototype.constructor = Random;

Object.defineProperty(Random.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Random(this.$native.super);
	},
	enumerable: true
});

Random.className = 'java.util.Random';
Random.prototype.className = 'java.util.Random';

// class property
Object.defineProperty(Random, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.Random');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Random.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.util.Random');

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
	SubClass.prototype = Object.create(Random.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Random.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Random(Hyperloop.cast('java.util.Random', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function next
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#next(int)}
 **/
Random.prototype.next = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'next',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextFloat()}
 **/
Random.prototype.nextFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextInt()}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextInt(int)}
 **/
Random.prototype.nextInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextLong()}
 **/
Random.prototype.nextLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextDouble
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextDouble()}
 **/
Random.prototype.nextDouble = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextDouble',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextGaussian
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextGaussian()}
 **/
Random.prototype.nextGaussian = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextGaussian',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextBytes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextBytes(byte[])}
 **/
Random.prototype.nextBytes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextBytes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function longs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#longs(long)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#longs()}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#longs(long, long, long)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#longs(long, long)}
 **/
Random.prototype.longs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'longs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ints
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#ints(long)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#ints()}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#ints(long, int, int)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#ints(int, int)}
 **/
Random.prototype.ints = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'ints',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function doubles
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#doubles(long)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#doubles()}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#doubles(long, double, double)}
 * @see {@link http://developer.android.com/reference/java/util/Random.html#doubles(double, double)}
 **/
Random.prototype.doubles = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'doubles',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function nextBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#nextBoolean()}
 **/
Random.prototype.nextBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'nextBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSeed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Random.html#setSeed(long)}
 **/
Random.prototype.setSeed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSeed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Random') {
			return new Random(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Random;
