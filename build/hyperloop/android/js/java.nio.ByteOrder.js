/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.ByteOrder
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio');

/**
 * @class java.nio.ByteOrder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/ByteOrder.html}
 **/
var ByteOrder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.ByteOrder')) {
		result = arguments[0];
	}
	else {
		result = ByteOrder.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ByteOrder.prototype = Object.create(SuperClass.prototype);
ByteOrder.prototype.constructor = ByteOrder;

Object.defineProperty(ByteOrder.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ByteOrder(this.$native.super);
	},
	enumerable: true
});

ByteOrder.className = 'java.nio.ByteOrder';
ByteOrder.prototype.className = 'java.nio.ByteOrder';

// class property
Object.defineProperty(ByteOrder, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.ByteOrder');
	},
	enumerable: true,
	configurable: false
});


// Cast
ByteOrder.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ByteOrder(Hyperloop.cast('java.nio.ByteOrder', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/nio/ByteOrder.html#BIG_ENDIAN
Object.defineProperty(ByteOrder, 'BIG_ENDIAN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('BIG_ENDIAN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.ByteOrder') {
				return new ByteOrder(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/ByteOrder.html#LITTLE_ENDIAN
Object.defineProperty(ByteOrder, 'LITTLE_ENDIAN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('LITTLE_ENDIAN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.ByteOrder') {
				return new ByteOrder(result);
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
 * @function nativeOrder
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/ByteOrder.html#nativeOrder()}
 **/
ByteOrder.nativeOrder = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'nativeOrder',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteOrder') {
			return new ByteOrder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/ByteOrder.html#toString()}
 **/
ByteOrder.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.ByteOrder') {
			return new ByteOrder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ByteOrder;
