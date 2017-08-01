/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.Locale$Category
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('java.util.Locale');

/**
 * @class java.util.Locale$Category
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/Locale.Category.html}
 **/
var Category = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.Locale$Category')) {
		result = arguments[0];
	}
	else {
		result = Category.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Category.prototype = Object.create(SuperClass.prototype);
Category.prototype.constructor = Category;

Object.defineProperty(Category.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Category(this.$native.super);
	},
	enumerable: true
});

Category.className = 'java.util.Locale$Category';
Category.prototype.className = 'java.util.Locale$Category';

// class property
Object.defineProperty(Category, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.Locale$Category');
	},
	enumerable: true,
	configurable: false
});


// Cast
Category.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Category(Hyperloop.cast('java.util.Locale$Category', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/util/Locale.Category.html#DISPLAY
Object.defineProperty(Category, 'DISPLAY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DISPLAY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$Category') {
				return new Category(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.Category.html#FORMAT
Object.defineProperty(Category, 'FORMAT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('FORMAT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$Category') {
				return new Category(result);
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
 * @see {@link http://developer.android.com/reference/java/util/Locale.Category.html#valueOf(java.lang.String)}
 **/
Category.valueOf = function() {
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
		if (result.apiName === 'java.util.Locale$Category') {
			return new Category(result);
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
 * @see {@link http://developer.android.com/reference/java/util/Locale.Category.html#values()}
 **/
Category.values = function() {
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
		if (result.apiName === 'java.util.Locale$Category') {
			return new Category(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Category;
