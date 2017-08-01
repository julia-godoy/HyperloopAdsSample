/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Bitmap$Config
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Bitmap');

/**
 * @class android.graphics.Bitmap$Config
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.Config.html}
 **/
var Config = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Bitmap$Config')) {
		result = arguments[0];
	}
	else {
		result = Config.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Config.prototype = Object.create(SuperClass.prototype);
Config.prototype.constructor = Config;

Object.defineProperty(Config.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Config(this.$native.super);
	},
	enumerable: true
});

Config.className = 'android.graphics.Bitmap$Config';
Config.prototype.className = 'android.graphics.Bitmap$Config';

// class property
Object.defineProperty(Config, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Bitmap$Config');
	},
	enumerable: true,
	configurable: false
});


// Cast
Config.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Config(Hyperloop.cast('android.graphics.Bitmap$Config', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Bitmap.Config.html#RGB_565
Object.defineProperty(Config, 'RGB_565', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('RGB_565');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$Config') {
				return new Config(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Bitmap.Config.html#ALPHA_8
Object.defineProperty(Config, 'ALPHA_8', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ALPHA_8');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$Config') {
				return new Config(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Bitmap.Config.html#ARGB_8888
Object.defineProperty(Config, 'ARGB_8888', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ARGB_8888');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$Config') {
				return new Config(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Bitmap.Config.html#ARGB_4444
Object.defineProperty(Config, 'ARGB_4444', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ARGB_4444');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$Config') {
				return new Config(result);
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
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.Config.html#valueOf(java.lang.String)}
 **/
Config.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap$Config') {
			return new Config(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.Config.html#values()}
 **/
Config.values = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Bitmap$Config') {
			return new Config(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Config;
