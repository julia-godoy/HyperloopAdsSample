/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.AssetManager
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.res');

/**
 * @class android.content.res.AssetManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html}
 **/
var AssetManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.res.AssetManager')) {
		result = arguments[0];
	}
	else {
		result = AssetManager.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
AssetManager.prototype = Object.create(SuperClass.prototype);
AssetManager.prototype.constructor = AssetManager;

Object.defineProperty(AssetManager.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AssetManager(this.$native.super);
	},
	enumerable: true
});

AssetManager.className = 'android.content.res.AssetManager';
AssetManager.prototype.className = 'android.content.res.AssetManager';

// class property
Object.defineProperty(AssetManager, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.res.AssetManager');
	},
	enumerable: true,
	configurable: false
});


// Cast
AssetManager.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AssetManager(Hyperloop.cast('android.content.res.AssetManager', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#ACCESS_BUFFER}
 */
AssetManager.ACCESS_BUFFER = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#ACCESS_UNKNOWN}
 */
AssetManager.ACCESS_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#ACCESS_STREAMING}
 */
AssetManager.ACCESS_STREAMING = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#ACCESS_RANDOM}
 */
AssetManager.ACCESS_RANDOM = 1;

// Inner classes
Object.defineProperty(AssetManager, 'AssetInputStream', {
	get: function() {
		return require('android.content.res.AssetManager$AssetInputStream');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function openXmlResourceParser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#openXmlResourceParser(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#openXmlResourceParser(int, java.lang.String)}
 **/
AssetManager.prototype.openXmlResourceParser = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openXmlResourceParser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openNonAssetFd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#openNonAssetFd(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#openNonAssetFd(int, java.lang.String)}
 **/
AssetManager.prototype.openNonAssetFd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openNonAssetFd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new AssetManager(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#finalize()}
 **/
AssetManager.prototype.finalize = function() {
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
		if (result.apiName === 'android.content.res.AssetManager') {
			return new AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openFd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#openFd(java.lang.String)}
 **/
AssetManager.prototype.openFd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openFd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocales
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#getLocales()}
 **/
AssetManager.prototype.getLocales = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocales',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function list
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#list(java.lang.String)}
 **/
AssetManager.prototype.list = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'list',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new AssetManager(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#close()}
 **/
AssetManager.prototype.close = function() {
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
		if (result.apiName === 'android.content.res.AssetManager') {
			return new AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function open
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#open(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/res/AssetManager.html#open(java.lang.String, int)}
 **/
AssetManager.prototype.open = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'open',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.AssetManager') {
			return new AssetManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AssetManager;
