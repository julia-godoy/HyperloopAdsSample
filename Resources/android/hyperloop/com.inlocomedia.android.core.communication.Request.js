/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.core.communication.Request
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.core.communication');

/**
 * @class com.inlocomedia.android.core.communication.Request
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/communication/Request.html}
 **/
var Request = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.core.communication.Request')) {
		result = arguments[0];
	}
	else {
		result = Request.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Request.prototype = Object.create(SuperClass.prototype);
Request.prototype.constructor = Request;

Object.defineProperty(Request.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Request(this.$native.super);
	},
	enumerable: true
});

Request.className = 'com.inlocomedia.android.core.communication.Request';
Request.prototype.className = 'com.inlocomedia.android.core.communication.Request';

// class property
Object.defineProperty(Request, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.core.communication.Request');
	},
	enumerable: true,
	configurable: false
});


// Cast
Request.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Request(Hyperloop.cast('com.inlocomedia.android.core.communication.Request', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function get
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/communication/Request.html#get(com.inlocomedia.android.core.communication.a)}
 **/
Request.get = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'get',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.core.communication.Request') {
			return new Request(result);
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
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/communication/Request.html#cancel()}
 **/
Request.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.core.communication.Request') {
			return new Request(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTerminated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/communication/Request.html#isTerminated()}
 **/
Request.prototype.isTerminated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTerminated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.core.communication.Request') {
			return new Request(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Request;
