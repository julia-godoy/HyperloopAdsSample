/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.InputQueue
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.InputQueue
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/InputQueue.html}
 **/
var InputQueue = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.InputQueue')) {
		result = arguments[0];
	}
	else {
		result = InputQueue.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
InputQueue.prototype = Object.create(SuperClass.prototype);
InputQueue.prototype.constructor = InputQueue;

Object.defineProperty(InputQueue.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new InputQueue(this.$native.super);
	},
	enumerable: true
});

InputQueue.className = 'android.view.InputQueue';
InputQueue.prototype.className = 'android.view.InputQueue';

// class property
Object.defineProperty(InputQueue, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.InputQueue');
	},
	enumerable: true,
	configurable: false
});


// Cast
InputQueue.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new InputQueue(Hyperloop.cast('android.view.InputQueue', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(InputQueue, 'Callback', {
	get: function() {
		return require('android.view.InputQueue$Callback');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputQueue.html#finalize()}
 **/
InputQueue.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputQueue') {
			return new InputQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = InputQueue;
