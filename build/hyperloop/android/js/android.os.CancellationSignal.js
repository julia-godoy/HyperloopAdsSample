/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.CancellationSignal
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.os');

/**
 * @class android.os.CancellationSignal
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/CancellationSignal.html}
 **/
var CancellationSignal = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.CancellationSignal')) {
		result = arguments[0];
	}
	else {
		result = CancellationSignal.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CancellationSignal.prototype = Object.create(SuperClass.prototype);
CancellationSignal.prototype.constructor = CancellationSignal;

Object.defineProperty(CancellationSignal.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CancellationSignal(this.$native.super);
	},
	enumerable: true
});

CancellationSignal.className = 'android.os.CancellationSignal';
CancellationSignal.prototype.className = 'android.os.CancellationSignal';

// class property
Object.defineProperty(CancellationSignal, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.CancellationSignal');
	},
	enumerable: true,
	configurable: false
});


// Cast
CancellationSignal.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CancellationSignal(Hyperloop.cast('android.os.CancellationSignal', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(CancellationSignal, 'OnCancelListener', {
	get: function() {
		return require('android.os.CancellationSignal$OnCancelListener');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/CancellationSignal.html#cancel()}
 **/
CancellationSignal.prototype.cancel = function() {
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
		if (result.apiName === 'android.os.CancellationSignal') {
			return new CancellationSignal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function throwIfCanceled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/CancellationSignal.html#throwIfCanceled()}
 **/
CancellationSignal.prototype.throwIfCanceled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'throwIfCanceled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.CancellationSignal') {
			return new CancellationSignal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCanceled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/CancellationSignal.html#isCanceled()}
 **/
CancellationSignal.prototype.isCanceled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCanceled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.CancellationSignal') {
			return new CancellationSignal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnCancelListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/CancellationSignal.html#setOnCancelListener(android.os.CancellationSignal$OnCancelListener)}
 **/
CancellationSignal.prototype.setOnCancelListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnCancelListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.CancellationSignal') {
			return new CancellationSignal(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CancellationSignal;
