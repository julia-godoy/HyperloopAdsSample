/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.AssetFileDescriptor
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.res');

/**
 * @class android.content.res.AssetFileDescriptor
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html}
 **/
var AssetFileDescriptor = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.res.AssetFileDescriptor')) {
		result = arguments[0];
	}
	else {
		result = AssetFileDescriptor.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
AssetFileDescriptor.prototype = Object.create(SuperClass.prototype);
AssetFileDescriptor.prototype.constructor = AssetFileDescriptor;

Object.defineProperty(AssetFileDescriptor.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AssetFileDescriptor(this.$native.super);
	},
	enumerable: true
});

AssetFileDescriptor.className = 'android.content.res.AssetFileDescriptor';
AssetFileDescriptor.prototype.className = 'android.content.res.AssetFileDescriptor';

// class property
Object.defineProperty(AssetFileDescriptor, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.res.AssetFileDescriptor');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
AssetFileDescriptor.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.res.AssetFileDescriptor');

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
	SubClass.prototype = Object.create(AssetFileDescriptor.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
AssetFileDescriptor.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AssetFileDescriptor(Hyperloop.cast('android.content.res.AssetFileDescriptor', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#UNKNOWN_LENGTH}
 */
AssetFileDescriptor.UNKNOWN_LENGTH = -1;

// Inner classes
Object.defineProperty(AssetFileDescriptor, 'AutoCloseInputStream', {
	get: function() {
		return require('android.content.res.AssetFileDescriptor$AutoCloseInputStream');
	},
	enumerable: true
});
Object.defineProperty(AssetFileDescriptor, 'AutoCloseOutputStream', {
	get: function() {
		return require('android.content.res.AssetFileDescriptor$AutoCloseOutputStream');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#CREATOR
Object.defineProperty(AssetFileDescriptor, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.AssetFileDescriptor') {
				return new AssetFileDescriptor(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getStartOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getStartOffset()}
 **/
AssetFileDescriptor.prototype.getStartOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createOutputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#createOutputStream()}
 **/
AssetFileDescriptor.prototype.createOutputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createOutputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#describeContents()}
 **/
AssetFileDescriptor.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createInputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#createInputStream()}
 **/
AssetFileDescriptor.prototype.createInputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createInputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeclaredLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getDeclaredLength()}
 **/
AssetFileDescriptor.prototype.getDeclaredLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeclaredLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getFileDescriptor()}
 **/
AssetFileDescriptor.prototype.getFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParcelFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getParcelFileDescriptor()}
 **/
AssetFileDescriptor.prototype.getParcelFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParcelFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getLength()}
 **/
AssetFileDescriptor.prototype.getLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#toString()}
 **/
AssetFileDescriptor.prototype.toString = function() {
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
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#getExtras()}
 **/
AssetFileDescriptor.prototype.getExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function close
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#close()}
 **/
AssetFileDescriptor.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetFileDescriptor.html#writeToParcel(android.os.Parcel, int)}
 **/
AssetFileDescriptor.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetFileDescriptor') {
			return new AssetFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AssetFileDescriptor;
