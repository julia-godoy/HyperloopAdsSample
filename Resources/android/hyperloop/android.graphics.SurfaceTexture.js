/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.SurfaceTexture
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics');

/**
 * @class android.graphics.SurfaceTexture
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html}
 **/
var SurfaceTexture = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.SurfaceTexture')) {
		result = arguments[0];
	}
	else {
		result = SurfaceTexture.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
SurfaceTexture.prototype = Object.create(SuperClass.prototype);
SurfaceTexture.prototype.constructor = SurfaceTexture;

Object.defineProperty(SurfaceTexture.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SurfaceTexture(this.$native.super);
	},
	enumerable: true
});

SurfaceTexture.className = 'android.graphics.SurfaceTexture';
SurfaceTexture.prototype.className = 'android.graphics.SurfaceTexture';

// class property
Object.defineProperty(SurfaceTexture, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.SurfaceTexture');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SurfaceTexture.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.SurfaceTexture');

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
	SubClass.prototype = Object.create(SurfaceTexture.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SurfaceTexture.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SurfaceTexture(Hyperloop.cast('android.graphics.SurfaceTexture', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(SurfaceTexture, 'OnFrameAvailableListener', {
	get: function() {
		return require('android.graphics.SurfaceTexture$OnFrameAvailableListener');
	},
	enumerable: true
});
Object.defineProperty(SurfaceTexture, 'OutOfResourcesException', {
	get: function() {
		return require('android.graphics.SurfaceTexture$OutOfResourcesException');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getTransformMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#getTransformMatrix(float[])}
 **/
SurfaceTexture.prototype.getTransformMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransformMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attachToGLContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#attachToGLContext(int)}
 **/
SurfaceTexture.prototype.attachToGLContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attachToGLContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function updateTexImage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#updateTexImage()}
 **/
SurfaceTexture.prototype.updateTexImage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateTexImage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function releaseTexImage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#releaseTexImage()}
 **/
SurfaceTexture.prototype.releaseTexImage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'releaseTexImage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTimestamp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#getTimestamp()}
 **/
SurfaceTexture.prototype.getTimestamp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTimestamp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function release
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#release()}
 **/
SurfaceTexture.prototype.release = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'release',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new SurfaceTexture(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#finalize()}
 **/
SurfaceTexture.prototype.finalize = function() {
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
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultBufferSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#setDefaultBufferSize(int, int)}
 **/
SurfaceTexture.prototype.setDefaultBufferSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDefaultBufferSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detachFromGLContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#detachFromGLContext()}
 **/
SurfaceTexture.prototype.detachFromGLContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detachFromGLContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnFrameAvailableListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#setOnFrameAvailableListener(android.graphics.SurfaceTexture$OnFrameAvailableListener)}
 * @see {@link http://developer.android.com/reference/android/graphics/SurfaceTexture.html#setOnFrameAvailableListener(android.graphics.SurfaceTexture$OnFrameAvailableListener, android.os.Handler)}
 **/
SurfaceTexture.prototype.setOnFrameAvailableListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnFrameAvailableListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.SurfaceTexture') {
			return new SurfaceTexture(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SurfaceTexture;
