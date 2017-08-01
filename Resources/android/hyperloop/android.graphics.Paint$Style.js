/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Paint$Style
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Paint');

/**
 * @class android.graphics.Paint$Style
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Style.html}
 **/
var Style = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Paint$Style')) {
		result = arguments[0];
	}
	else {
		result = Style.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Style.prototype = Object.create(SuperClass.prototype);
Style.prototype.constructor = Style;

Object.defineProperty(Style.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Style(this.$native.super);
	},
	enumerable: true
});

Style.className = 'android.graphics.Paint$Style';
Style.prototype.className = 'android.graphics.Paint$Style';

// class property
Object.defineProperty(Style, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Paint$Style');
	},
	enumerable: true,
	configurable: false
});


// Cast
Style.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Style(Hyperloop.cast('android.graphics.Paint$Style', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Paint.Style.html#STROKE
Object.defineProperty(Style, 'STROKE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('STROKE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Style') {
				return new Style(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.Style.html#FILL
Object.defineProperty(Style, 'FILL', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('FILL');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Style') {
				return new Style(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Paint.Style.html#FILL_AND_STROKE
Object.defineProperty(Style, 'FILL_AND_STROKE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('FILL_AND_STROKE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Paint$Style') {
				return new Style(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Style.html#valueOf(java.lang.String)}
 **/
Style.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Paint$Style') {
			return new Style(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.Style.html#values()}
 **/
Style.values = function() {
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
		if (result.apiName === 'android.graphics.Paint$Style') {
			return new Style(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Style;
