/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Path$Op
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Path');

/**
 * @class android.graphics.Path$Op
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Path.Op.html}
 **/
var Op = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Path$Op')) {
		result = arguments[0];
	}
	else {
		result = Op.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Op.prototype = Object.create(SuperClass.prototype);
Op.prototype.constructor = Op;

Object.defineProperty(Op.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Op(this.$native.super);
	},
	enumerable: true
});

Op.className = 'android.graphics.Path$Op';
Op.prototype.className = 'android.graphics.Path$Op';

// class property
Object.defineProperty(Op, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Path$Op');
	},
	enumerable: true,
	configurable: false
});


// Cast
Op.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Op(Hyperloop.cast('android.graphics.Path$Op', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Path.Op.html#REVERSE_DIFFERENCE
Object.defineProperty(Op, 'REVERSE_DIFFERENCE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('REVERSE_DIFFERENCE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$Op') {
				return new Op(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Path.Op.html#DIFFERENCE
Object.defineProperty(Op, 'DIFFERENCE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DIFFERENCE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$Op') {
				return new Op(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Path.Op.html#XOR
Object.defineProperty(Op, 'XOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('XOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$Op') {
				return new Op(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Path.Op.html#INTERSECT
Object.defineProperty(Op, 'INTERSECT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('INTERSECT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$Op') {
				return new Op(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Path.Op.html#UNION
Object.defineProperty(Op, 'UNION', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('UNION');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Path$Op') {
				return new Op(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.Op.html#valueOf(java.lang.String)}
 **/
Op.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Path$Op') {
			return new Op(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.Op.html#values()}
 **/
Op.values = function() {
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
		if (result.apiName === 'android.graphics.Path$Op') {
			return new Op(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Op;
