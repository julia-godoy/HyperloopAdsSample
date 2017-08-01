/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Paint$Align
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Paint');

/**
 * @class android.graphics.Paint$Align
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Align.html}
 **/
var Align = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Paint$Align')) {
		result = arguments[0];
	}
	else {
		result = Align.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Align.prototype = Object.create(SuperClass.prototype);
Align.prototype.constructor = Align;

Object.defineProperty(Align.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Align(this.$native.super);
	},
	enumerable: true
});

Align.className = 'android.graphics.Paint$Align';
Align.prototype.className = 'android.graphics.Paint$Align';

// class property
Object.defineProperty(Align, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Paint$Align');
	},
	enumerable: true,
	configurable: false
});


// Cast
Align.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Align(Hyperloop.cast('android.graphics.Paint$Align', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Paint.Align.html#CENTER
Object.defineProperty(Align, 'CENTER', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CENTER');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Align') {
				return new Align(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.Align.html#LEFT
Object.defineProperty(Align, 'LEFT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('LEFT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Align') {
				return new Align(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.Align.html#RIGHT
Object.defineProperty(Align, 'RIGHT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('RIGHT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Align') {
				return new Align(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Align.html#valueOf(java.lang.String)}
 **/
Align.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Paint$Align') {
			return new Align(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Align.html#values()}
 **/
Align.values = function() {
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
		if (result.apiName === 'android.graphics.Paint$Align') {
			return new Align(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Align;
