/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Movie
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics');

/**
 * @class android.graphics.Movie
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html}
 **/
var Movie = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Movie')) {
		result = arguments[0];
	}
	else {
		result = Movie.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Movie.prototype = Object.create(SuperClass.prototype);
Movie.prototype.constructor = Movie;

Object.defineProperty(Movie.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Movie(this.$native.super);
	},
	enumerable: true
});

Movie.className = 'android.graphics.Movie';
Movie.prototype.className = 'android.graphics.Movie';

// class property
Object.defineProperty(Movie, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Movie');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Movie.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.Movie');

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
	SubClass.prototype = Object.create(Movie.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Movie.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Movie(Hyperloop.cast('android.graphics.Movie', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function decodeByteArray
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#decodeByteArray(byte[], int, int)}
 **/
Movie.decodeByteArray = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'decodeByteArray',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Movie') {
			return new Movie(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decodeFile
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#decodeFile(java.lang.String)}
 **/
Movie.decodeFile = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'decodeFile',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Movie') {
			return new Movie(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decodeStream
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#decodeStream(java.io.InputStream)}
 **/
Movie.decodeStream = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'decodeStream',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Movie') {
			return new Movie(result);
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
 * @function duration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#duration()}
 **/
Movie.prototype.duration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'duration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Movie') {
			return new Movie(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOpaque
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#isOpaque()}
 **/
Movie.prototype.isOpaque = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOpaque',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Movie') {
			return new Movie(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function width
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#width()}
 **/
Movie.prototype.width = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'width',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Movie') {
			return new Movie(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#finalize()}
 **/
Movie.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Movie') {
			return new Movie(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function draw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#draw(android.graphics.Canvas, float, float, android.graphics.Paint)}
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#draw(android.graphics.Canvas, float, float)}
 **/
Movie.prototype.draw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'draw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Movie') {
			return new Movie(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function height
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#height()}
 **/
Movie.prototype.height = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'height',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Movie') {
			return new Movie(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Movie.html#setTime(int)}
 **/
Movie.prototype.setTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Movie') {
			return new Movie(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Movie;
