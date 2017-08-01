/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.location.private.cl
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.location.private');

/**
 * @class com.inlocomedia.android.location.private.cl
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html}
 **/
var cl = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.location.private.cl')) {
		result = arguments[0];
	}
	else {
		result = cl.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
cl.prototype = Object.create(SuperClass.prototype);
cl.prototype.constructor = cl;

Object.defineProperty(cl.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new cl(this.$native.super);
	},
	enumerable: true
});

cl.className = 'com.inlocomedia.android.location.private.cl';
cl.prototype.className = 'com.inlocomedia.android.location.private.cl';

// class property
Object.defineProperty(cl, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.location.private.cl');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
cl.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('com.inlocomedia.android.location.private.cl');

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
	SubClass.prototype = Object.create(cl.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
cl.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new cl(Hyperloop.cast('com.inlocomedia.android.location.private.cl', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function a
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#a()}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#a(java.lang.String)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#a(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#a(java.util.HashMap)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#a(java.util.regex.Pattern)}
 **/
cl.prototype.a = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'a',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.private.cl') {
			return new cl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function b
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#b()}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#b(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#b(java.lang.String)}
 **/
cl.prototype.b = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'b',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.private.cl') {
			return new cl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function c
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#c()}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#c(java.lang.String)}
 **/
cl.prototype.c = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'c',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.private.cl') {
			return new cl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function d
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#d()}
 **/
cl.prototype.d = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.private.cl') {
			return new cl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function e
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#e()}
 **/
cl.prototype.e = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'e',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.private.cl') {
			return new cl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function f
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/private/cl.html#f()}
 **/
cl.prototype.f = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'f',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.private.cl') {
			return new cl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = cl;
