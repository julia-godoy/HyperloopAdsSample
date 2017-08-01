/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.AssetManager$AssetInputStream
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.content.res.AssetManager');

/**
 * @class android.content.res.AssetManager$AssetInputStream
 * @extends java.io.InputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html}
 **/
var AssetInputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.res.AssetManager$AssetInputStream')) {
		result = arguments[0];
	}
	else {
		result = AssetInputStream.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.InputStream');
AssetInputStream.prototype = Object.create(SuperClass.prototype);
AssetInputStream.prototype.constructor = AssetInputStream;

Object.defineProperty(AssetInputStream.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AssetInputStream(this.$native.super);
	},
	enumerable: true
});

AssetInputStream.className = 'android.content.res.AssetManager$AssetInputStream';
AssetInputStream.prototype.className = 'android.content.res.AssetManager$AssetInputStream';

// class property
Object.defineProperty(AssetInputStream, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.res.AssetManager$AssetInputStream');
	},
	enumerable: true,
	configurable: false
});


// Cast
AssetInputStream.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AssetInputStream(Hyperloop.cast('android.content.res.AssetManager$AssetInputStream', object.$native));
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html#read()}
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html#read(byte[])}
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html#read(byte[], int, int)}
 **/
AssetInputStream.prototype.read = function() {
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
		if (result.apiName === 'android.content.res.AssetManager$AssetInputStream') {
			return new AssetInputStream(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html#markSupported()}
 **/
AssetInputStream.prototype.markSupported = function() {
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
		if (result.apiName === 'android.content.res.AssetManager$AssetInputStream') {
			return new AssetInputStream(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html#available()}
 **/
AssetInputStream.prototype.available = function() {
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
		if (result.apiName === 'android.content.res.AssetManager$AssetInputStream') {
			return new AssetInputStream(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html#reset()}
 **/
AssetInputStream.prototype.reset = function() {
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
		if (result.apiName === 'android.content.res.AssetManager$AssetInputStream') {
			return new AssetInputStream(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html#skip(long)}
 **/
AssetInputStream.prototype.skip = function() {
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
		if (result.apiName === 'android.content.res.AssetManager$AssetInputStream') {
			return new AssetInputStream(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html#finalize()}
 **/
AssetInputStream.prototype.finalize = function() {
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
		if (result.apiName === 'android.content.res.AssetManager$AssetInputStream') {
			return new AssetInputStream(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html#close()}
 **/
AssetInputStream.prototype.close = function() {
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
		if (result.apiName === 'android.content.res.AssetManager$AssetInputStream') {
			return new AssetInputStream(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.AssetInputStream.html#mark(int)}
 **/
AssetInputStream.prototype.mark = function() {
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
		if (result.apiName === 'android.content.res.AssetManager$AssetInputStream') {
			return new AssetInputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AssetInputStream;
