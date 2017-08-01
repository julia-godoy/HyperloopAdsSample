/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.Locale$LanguageRange
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('java.util.Locale');

/**
 * @class java.util.Locale$LanguageRange
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/Locale.LanguageRange.html}
 **/
var LanguageRange = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.Locale$LanguageRange')) {
		result = arguments[0];
	}
	else {
		result = LanguageRange.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
LanguageRange.prototype = Object.create(SuperClass.prototype);
LanguageRange.prototype.constructor = LanguageRange;

Object.defineProperty(LanguageRange.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new LanguageRange(this.$native.super);
	},
	enumerable: true
});

LanguageRange.className = 'java.util.Locale$LanguageRange';
LanguageRange.prototype.className = 'java.util.Locale$LanguageRange';

// class property
Object.defineProperty(LanguageRange, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.Locale$LanguageRange');
	},
	enumerable: true,
	configurable: false
});


// Cast
LanguageRange.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new LanguageRange(Hyperloop.cast('java.util.Locale$LanguageRange', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/util/Locale.LanguageRange.html#MAX_WEIGHT}
 */
LanguageRange.MAX_WEIGHT = 1.0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/util/Locale.LanguageRange.html#MIN_WEIGHT}
 */
LanguageRange.MIN_WEIGHT = 0.0;

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function mapEquivalents
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.LanguageRange.html#mapEquivalents(java.util.List, java.util.Map)}
 **/
LanguageRange.mapEquivalents = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'mapEquivalents',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$LanguageRange') {
			return new LanguageRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parse
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.LanguageRange.html#parse(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/util/Locale.LanguageRange.html#parse(java.lang.String, java.util.Map)}
 **/
LanguageRange.parse = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parse',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$LanguageRange') {
			return new LanguageRange(result);
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
 * @function getRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.LanguageRange.html#getRange()}
 **/
LanguageRange.prototype.getRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$LanguageRange') {
			return new LanguageRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.LanguageRange.html#getWeight()}
 **/
LanguageRange.prototype.getWeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$LanguageRange') {
			return new LanguageRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.LanguageRange.html#hashCode()}
 **/
LanguageRange.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$LanguageRange') {
			return new LanguageRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.LanguageRange.html#equals(java.lang.Object)}
 **/
LanguageRange.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$LanguageRange') {
			return new LanguageRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = LanguageRange;
