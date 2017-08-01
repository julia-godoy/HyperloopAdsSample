/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.BitmapFactory
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics');

/**
 * @class android.graphics.BitmapFactory
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html}
 **/
var BitmapFactory = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.BitmapFactory')) {
		result = arguments[0];
	}
	else {
		result = BitmapFactory.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
BitmapFactory.prototype = Object.create(SuperClass.prototype);
BitmapFactory.prototype.constructor = BitmapFactory;

Object.defineProperty(BitmapFactory.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new BitmapFactory(this.$native.super);
	},
	enumerable: true
});

BitmapFactory.className = 'android.graphics.BitmapFactory';
BitmapFactory.prototype.className = 'android.graphics.BitmapFactory';

// class property
Object.defineProperty(BitmapFactory, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.BitmapFactory');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
BitmapFactory.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.BitmapFactory');

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
	SubClass.prototype = Object.create(BitmapFactory.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
BitmapFactory.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new BitmapFactory(Hyperloop.cast('android.graphics.BitmapFactory', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function decodeResourceStream
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeResourceStream(android.content.res.Resources, android.util.TypedValue, java.io.InputStream, android.graphics.Rect, android.graphics.BitmapFactory$Options)}
 **/
BitmapFactory.decodeResourceStream = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'decodeResourceStream',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.BitmapFactory') {
			return new BitmapFactory(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decodeByteArray
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeByteArray(byte[], int, int, android.graphics.BitmapFactory$Options)}
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeByteArray(byte[], int, int)}
 **/
BitmapFactory.decodeByteArray = function() {
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
		if (result.apiName === 'android.graphics.BitmapFactory') {
			return new BitmapFactory(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeFile(java.lang.String, android.graphics.BitmapFactory$Options)}
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeFile(java.lang.String)}
 **/
BitmapFactory.decodeFile = function() {
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
		if (result.apiName === 'android.graphics.BitmapFactory') {
			return new BitmapFactory(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeStream(java.io.InputStream, android.graphics.Rect, android.graphics.BitmapFactory$Options)}
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeStream(java.io.InputStream)}
 **/
BitmapFactory.decodeStream = function() {
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
		if (result.apiName === 'android.graphics.BitmapFactory') {
			return new BitmapFactory(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decodeResource
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeResource(android.content.res.Resources, int, android.graphics.BitmapFactory$Options)}
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeResource(android.content.res.Resources, int)}
 **/
BitmapFactory.decodeResource = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'decodeResource',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.BitmapFactory') {
			return new BitmapFactory(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decodeFileDescriptor
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeFileDescriptor(java.io.FileDescriptor, android.graphics.Rect, android.graphics.BitmapFactory$Options)}
 * @see {@link http://developer.android.com/reference/android/graphics/BitmapFactory.html#decodeFileDescriptor(java.io.FileDescriptor)}
 **/
BitmapFactory.decodeFileDescriptor = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'decodeFileDescriptor',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.BitmapFactory') {
			return new BitmapFactory(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = BitmapFactory;
