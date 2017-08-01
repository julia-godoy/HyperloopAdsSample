/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Canvas$VertexMode
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Canvas');

/**
 * @class android.graphics.Canvas$VertexMode
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html}
 **/
var VertexMode = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Canvas$VertexMode')) {
		result = arguments[0];
	}
	else {
		result = VertexMode.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
VertexMode.prototype = Object.create(SuperClass.prototype);
VertexMode.prototype.constructor = VertexMode;

Object.defineProperty(VertexMode.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new VertexMode(this.$native.super);
	},
	enumerable: true
});

VertexMode.className = 'android.graphics.Canvas$VertexMode';
VertexMode.prototype.className = 'android.graphics.Canvas$VertexMode';

// class property
Object.defineProperty(VertexMode, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Canvas$VertexMode');
	},
	enumerable: true,
	configurable: false
});


// Cast
VertexMode.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new VertexMode(Hyperloop.cast('android.graphics.Canvas$VertexMode', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html#TRIANGLE_FAN
Object.defineProperty(VertexMode, 'TRIANGLE_FAN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TRIANGLE_FAN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Canvas$VertexMode') {
				return new VertexMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html#TRIANGLES
Object.defineProperty(VertexMode, 'TRIANGLES', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TRIANGLES');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Canvas$VertexMode') {
				return new VertexMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html#TRIANGLE_STRIP
Object.defineProperty(VertexMode, 'TRIANGLE_STRIP', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TRIANGLE_STRIP');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Canvas$VertexMode') {
				return new VertexMode(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html#valueOf(java.lang.String)}
 **/
VertexMode.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Canvas$VertexMode') {
			return new VertexMode(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.VertexMode.html#values()}
 **/
VertexMode.values = function() {
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
		if (result.apiName === 'android.graphics.Canvas$VertexMode') {
			return new VertexMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = VertexMode;
