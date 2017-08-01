/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.AssetFileDescriptor$AutoCloseInputStream
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.content.res.AssetFileDescriptor');

/**
 * @class android.content.res.AssetFileDescriptor$AutoCloseInputStream
 * @extends android.os.ParcelFileDescriptor.AutoCloseInputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.AutoCloseInputStream.html}
 **/
var AutoCloseInputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.res.AssetFileDescriptor$AutoCloseInputStream')) {
		result = arguments[0];
	}
	else {
		result = AutoCloseInputStream.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.os.ParcelFileDescriptor$AutoCloseInputStream');
AutoCloseInputStream.prototype = Object.create(SuperClass.prototype);
AutoCloseInputStream.prototype.constructor = AutoCloseInputStream;

Object.defineProperty(AutoCloseInputStream.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AutoCloseInputStream(this.$native.super);
	},
	enumerable: true
});

AutoCloseInputStream.className = 'android.content.res.AssetFileDescriptor$AutoCloseInputStream';
AutoCloseInputStream.prototype.className = 'android.content.res.AssetFileDescriptor$AutoCloseInputStream';

// class property
Object.defineProperty(AutoCloseInputStream, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.res.AssetFileDescriptor$AutoCloseInputStream');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
AutoCloseInputStream.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.res.AssetFileDescriptor$AutoCloseInputStream');

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
	SubClass.prototype = Object.create(AutoCloseInputStream.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
AutoCloseInputStream.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AutoCloseInputStream(Hyperloop.cast('android.content.res.AssetFileDescriptor$AutoCloseInputStream', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function read
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.AutoCloseInputStream.html#read()}
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.AutoCloseInputStream.html#read(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.AutoCloseInputStream.html#read(byte[])}
 **/
AutoCloseInputStream.prototype.read = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'read',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor$AutoCloseInputStream') {
			return new AutoCloseInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function markSupported
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.AutoCloseInputStream.html#markSupported()}
 **/
AutoCloseInputStream.prototype.markSupported = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'markSupported',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor$AutoCloseInputStream') {
			return new AutoCloseInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function available
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.AutoCloseInputStream.html#available()}
 **/
AutoCloseInputStream.prototype.available = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'available',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor$AutoCloseInputStream') {
			return new AutoCloseInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.AutoCloseInputStream.html#reset()}
 **/
AutoCloseInputStream.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor$AutoCloseInputStream') {
			return new AutoCloseInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skip
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.AutoCloseInputStream.html#skip(long)}
 **/
AutoCloseInputStream.prototype.skip = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skip',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor$AutoCloseInputStream') {
			return new AutoCloseInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mark
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.AutoCloseInputStream.html#mark(int)}
 **/
AutoCloseInputStream.prototype.mark = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mark',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor$AutoCloseInputStream') {
			return new AutoCloseInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AutoCloseInputStream;
