/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Shader$TileMode
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Shader');

/**
 * @class android.graphics.Shader$TileMode
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Shader.TileMode.html}
 **/
var TileMode = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Shader$TileMode')) {
		result = arguments[0];
	}
	else {
		result = TileMode.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
TileMode.prototype = Object.create(SuperClass.prototype);
TileMode.prototype.constructor = TileMode;

Object.defineProperty(TileMode.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new TileMode(this.$native.super);
	},
	enumerable: true
});

TileMode.className = 'android.graphics.Shader$TileMode';
TileMode.prototype.className = 'android.graphics.Shader$TileMode';

// class property
Object.defineProperty(TileMode, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Shader$TileMode');
	},
	enumerable: true,
	configurable: false
});


// Cast
TileMode.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new TileMode(Hyperloop.cast('android.graphics.Shader$TileMode', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Shader.TileMode.html#REPEAT
Object.defineProperty(TileMode, 'REPEAT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('REPEAT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Shader$TileMode') {
				return new TileMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Shader.TileMode.html#CLAMP
Object.defineProperty(TileMode, 'CLAMP', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CLAMP');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Shader$TileMode') {
				return new TileMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Shader.TileMode.html#MIRROR
Object.defineProperty(TileMode, 'MIRROR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('MIRROR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Shader$TileMode') {
				return new TileMode(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Shader.TileMode.html#valueOf(java.lang.String)}
 **/
TileMode.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Shader$TileMode') {
			return new TileMode(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Shader.TileMode.html#values()}
 **/
TileMode.values = function() {
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
		if (result.apiName === 'android.graphics.Shader$TileMode') {
			return new TileMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = TileMode;
