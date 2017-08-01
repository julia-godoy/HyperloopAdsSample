/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.Intent$FilterComparison
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.content.Intent');

/**
 * @class android.content.Intent$FilterComparison
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/Intent.FilterComparison.html}
 **/
var FilterComparison = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.Intent$FilterComparison')) {
		result = arguments[0];
	}
	else {
		result = FilterComparison.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
FilterComparison.prototype = Object.create(SuperClass.prototype);
FilterComparison.prototype.constructor = FilterComparison;

Object.defineProperty(FilterComparison.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FilterComparison(this.$native.super);
	},
	enumerable: true
});

FilterComparison.className = 'android.content.Intent$FilterComparison';
FilterComparison.prototype.className = 'android.content.Intent$FilterComparison';

// class property
Object.defineProperty(FilterComparison, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.Intent$FilterComparison');
	},
	enumerable: true,
	configurable: false
});


// Cast
FilterComparison.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FilterComparison(Hyperloop.cast('android.content.Intent$FilterComparison', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.FilterComparison.html#hashCode()}
 **/
FilterComparison.prototype.hashCode = function() {
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
		if (result.apiName === 'android.content.Intent$FilterComparison') {
			return new FilterComparison(result);
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
 * @see {@link http://developer.android.com/reference/android/content/Intent.FilterComparison.html#equals(java.lang.Object)}
 **/
FilterComparison.prototype.equals = function() {
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
		if (result.apiName === 'android.content.Intent$FilterComparison') {
			return new FilterComparison(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.FilterComparison.html#getIntent()}
 **/
FilterComparison.prototype.getIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent$FilterComparison') {
			return new FilterComparison(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FilterComparison;
