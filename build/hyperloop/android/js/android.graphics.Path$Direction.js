/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Path$Direction
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Path');

/**
 * @class android.graphics.Path$Direction
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Path.Direction.html}
 **/
var Direction = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Path$Direction')) {
		result = arguments[0];
	}
	else {
		result = Direction.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Direction.prototype = Object.create(SuperClass.prototype);
Direction.prototype.constructor = Direction;

Object.defineProperty(Direction.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Direction(this.$native.super);
	},
	enumerable: true
});

Direction.className = 'android.graphics.Path$Direction';
Direction.prototype.className = 'android.graphics.Path$Direction';

// class property
Object.defineProperty(Direction, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Path$Direction');
	},
	enumerable: true,
	configurable: false
});


// Cast
Direction.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Direction(Hyperloop.cast('android.graphics.Path$Direction', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Path.Direction.html#CW
Object.defineProperty(Direction, 'CW', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CW');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$Direction') {
				return new Direction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Path.Direction.html#CCW
Object.defineProperty(Direction, 'CCW', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CCW');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$Direction') {
				return new Direction(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.Direction.html#valueOf(java.lang.String)}
 **/
Direction.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Path$Direction') {
			return new Direction(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.Direction.html#values()}
 **/
Direction.values = function() {
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
		if (result.apiName === 'android.graphics.Path$Direction') {
			return new Direction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Direction;
