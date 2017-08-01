/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Paint$Cap
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Paint');

/**
 * @class android.graphics.Paint$Cap
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Cap.html}
 **/
var Cap = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Paint$Cap')) {
		result = arguments[0];
	}
	else {
		result = Cap.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Cap.prototype = Object.create(SuperClass.prototype);
Cap.prototype.constructor = Cap;

Object.defineProperty(Cap.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Cap(this.$native.super);
	},
	enumerable: true
});

Cap.className = 'android.graphics.Paint$Cap';
Cap.prototype.className = 'android.graphics.Paint$Cap';

// class property
Object.defineProperty(Cap, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Paint$Cap');
	},
	enumerable: true,
	configurable: false
});


// Cast
Cap.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Cap(Hyperloop.cast('android.graphics.Paint$Cap', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Paint.Cap.html#SQUARE
Object.defineProperty(Cap, 'SQUARE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SQUARE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Cap') {
				return new Cap(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.Cap.html#ROUND
Object.defineProperty(Cap, 'ROUND', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ROUND');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Cap') {
				return new Cap(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.Cap.html#BUTT
Object.defineProperty(Cap, 'BUTT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('BUTT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Cap') {
				return new Cap(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Cap.html#valueOf(java.lang.String)}
 **/
Cap.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Paint$Cap') {
			return new Cap(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Cap.html#values()}
 **/
Cap.values = function() {
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
		if (result.apiName === 'android.graphics.Paint$Cap') {
			return new Cap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Cap;
