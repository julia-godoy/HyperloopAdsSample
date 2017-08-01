/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Bitmap$CompressFormat
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Bitmap');

/**
 * @class android.graphics.Bitmap$CompressFormat
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.CompressFormat.html}
 **/
var CompressFormat = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Bitmap$CompressFormat')) {
		result = arguments[0];
	}
	else {
		result = CompressFormat.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
CompressFormat.prototype = Object.create(SuperClass.prototype);
CompressFormat.prototype.constructor = CompressFormat;

Object.defineProperty(CompressFormat.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CompressFormat(this.$native.super);
	},
	enumerable: true
});

CompressFormat.className = 'android.graphics.Bitmap$CompressFormat';
CompressFormat.prototype.className = 'android.graphics.Bitmap$CompressFormat';

// class property
Object.defineProperty(CompressFormat, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Bitmap$CompressFormat');
	},
	enumerable: true,
	configurable: false
});


// Cast
CompressFormat.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CompressFormat(Hyperloop.cast('android.graphics.Bitmap$CompressFormat', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Bitmap.CompressFormat.html#WEBP
Object.defineProperty(CompressFormat, 'WEBP', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('WEBP');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$CompressFormat') {
				return new CompressFormat(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Bitmap.CompressFormat.html#PNG
Object.defineProperty(CompressFormat, 'PNG', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('PNG');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$CompressFormat') {
				return new CompressFormat(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Bitmap.CompressFormat.html#JPEG
Object.defineProperty(CompressFormat, 'JPEG', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('JPEG');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Bitmap$CompressFormat') {
				return new CompressFormat(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.CompressFormat.html#valueOf(java.lang.String)}
 **/
CompressFormat.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Bitmap$CompressFormat') {
			return new CompressFormat(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Bitmap.CompressFormat.html#values()}
 **/
CompressFormat.values = function() {
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
		if (result.apiName === 'android.graphics.Bitmap$CompressFormat') {
			return new CompressFormat(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = CompressFormat;
