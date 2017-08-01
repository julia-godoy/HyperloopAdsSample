/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Paint$Join
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Paint');

/**
 * @class android.graphics.Paint$Join
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Join.html}
 **/
var Join = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Paint$Join')) {
		result = arguments[0];
	}
	else {
		result = Join.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Join.prototype = Object.create(SuperClass.prototype);
Join.prototype.constructor = Join;

Object.defineProperty(Join.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Join(this.$native.super);
	},
	enumerable: true
});

Join.className = 'android.graphics.Paint$Join';
Join.prototype.className = 'android.graphics.Paint$Join';

// class property
Object.defineProperty(Join, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Paint$Join');
	},
	enumerable: true,
	configurable: false
});


// Cast
Join.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Join(Hyperloop.cast('android.graphics.Paint$Join', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Paint.Join.html#ROUND
Object.defineProperty(Join, 'ROUND', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ROUND');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Join') {
				return new Join(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.Join.html#BEVEL
Object.defineProperty(Join, 'BEVEL', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('BEVEL');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Join') {
				return new Join(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.Join.html#MITER
Object.defineProperty(Join, 'MITER', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('MITER');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Join') {
				return new Join(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Join.html#valueOf(java.lang.String)}
 **/
Join.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Paint$Join') {
			return new Join(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Join.html#values()}
 **/
Join.values = function() {
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
		if (result.apiName === 'android.graphics.Paint$Join') {
			return new Join(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Join;
