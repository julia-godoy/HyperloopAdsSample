/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.InputDevice$MotionRange
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.InputDevice');

/**
 * @class android.view.InputDevice$MotionRange
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html}
 **/
var MotionRange = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.InputDevice$MotionRange')) {
		result = arguments[0];
	}
	else {
		result = MotionRange.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
MotionRange.prototype = Object.create(SuperClass.prototype);
MotionRange.prototype.constructor = MotionRange;

Object.defineProperty(MotionRange.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MotionRange(this.$native.super);
	},
	enumerable: true
});

MotionRange.className = 'android.view.InputDevice$MotionRange';
MotionRange.prototype.className = 'android.view.InputDevice$MotionRange';

// class property
Object.defineProperty(MotionRange, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.InputDevice$MotionRange');
	},
	enumerable: true,
	configurable: false
});


// Cast
MotionRange.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MotionRange(Hyperloop.cast('android.view.InputDevice$MotionRange', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getFlat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getFlat()}
 **/
MotionRange.prototype.getFlat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFlat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResolution
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getResolution()}
 **/
MotionRange.prototype.getResolution = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResolution',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getMin()}
 **/
MotionRange.prototype.getMin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getSource()}
 **/
MotionRange.prototype.getSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMax
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getMax()}
 **/
MotionRange.prototype.getMax = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMax',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getRange()}
 **/
MotionRange.prototype.getRange = function() {
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
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFromSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#isFromSource(int)}
 **/
MotionRange.prototype.isFromSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFromSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAxis
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getAxis()}
 **/
MotionRange.prototype.getAxis = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAxis',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFuzz
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.MotionRange.html#getFuzz()}
 **/
MotionRange.prototype.getFuzz = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFuzz',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice$MotionRange') {
			return new MotionRange(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = MotionRange;
