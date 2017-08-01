/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Path$FillType
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Path');

/**
 * @class android.graphics.Path$FillType
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Path.FillType.html}
 **/
var FillType = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Path$FillType')) {
		result = arguments[0];
	}
	else {
		result = FillType.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
FillType.prototype = Object.create(SuperClass.prototype);
FillType.prototype.constructor = FillType;

Object.defineProperty(FillType.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FillType(this.$native.super);
	},
	enumerable: true
});

FillType.className = 'android.graphics.Path$FillType';
FillType.prototype.className = 'android.graphics.Path$FillType';

// class property
Object.defineProperty(FillType, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Path$FillType');
	},
	enumerable: true,
	configurable: false
});


// Cast
FillType.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FillType(Hyperloop.cast('android.graphics.Path$FillType', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Path.FillType.html#WINDING
Object.defineProperty(FillType, 'WINDING', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('WINDING');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$FillType') {
				return new FillType(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Path.FillType.html#INVERSE_WINDING
Object.defineProperty(FillType, 'INVERSE_WINDING', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('INVERSE_WINDING');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$FillType') {
				return new FillType(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Path.FillType.html#EVEN_ODD
Object.defineProperty(FillType, 'EVEN_ODD', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('EVEN_ODD');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$FillType') {
				return new FillType(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Path.FillType.html#INVERSE_EVEN_ODD
Object.defineProperty(FillType, 'INVERSE_EVEN_ODD', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('INVERSE_EVEN_ODD');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$FillType') {
				return new FillType(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.FillType.html#valueOf(java.lang.String)}
 **/
FillType.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Path$FillType') {
			return new FillType(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.FillType.html#values()}
 **/
FillType.values = function() {
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
		if (result.apiName === 'android.graphics.Path$FillType') {
			return new FillType(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = FillType;
