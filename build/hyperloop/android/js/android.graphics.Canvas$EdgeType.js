/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Canvas$EdgeType
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Canvas');

/**
 * @class android.graphics.Canvas$EdgeType
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.EdgeType.html}
 **/
var EdgeType = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Canvas$EdgeType')) {
		result = arguments[0];
	}
	else {
		result = EdgeType.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
EdgeType.prototype = Object.create(SuperClass.prototype);
EdgeType.prototype.constructor = EdgeType;

Object.defineProperty(EdgeType.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new EdgeType(this.$native.super);
	},
	enumerable: true
});

EdgeType.className = 'android.graphics.Canvas$EdgeType';
EdgeType.prototype.className = 'android.graphics.Canvas$EdgeType';

// class property
Object.defineProperty(EdgeType, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Canvas$EdgeType');
	},
	enumerable: true,
	configurable: false
});


// Cast
EdgeType.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new EdgeType(Hyperloop.cast('android.graphics.Canvas$EdgeType', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Canvas.EdgeType.html#AA
Object.defineProperty(EdgeType, 'AA', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('AA');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Canvas$EdgeType') {
				return new EdgeType(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Canvas.EdgeType.html#BW
Object.defineProperty(EdgeType, 'BW', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('BW');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Canvas$EdgeType') {
				return new EdgeType(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.EdgeType.html#valueOf(java.lang.String)}
 **/
EdgeType.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Canvas$EdgeType') {
			return new EdgeType(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Canvas.EdgeType.html#values()}
 **/
EdgeType.values = function() {
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
		if (result.apiName === 'android.graphics.Canvas$EdgeType') {
			return new EdgeType(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = EdgeType;
