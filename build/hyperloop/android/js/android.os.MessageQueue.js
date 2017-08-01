/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.MessageQueue
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.os');

/**
 * @class android.os.MessageQueue
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html}
 **/
var MessageQueue = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.MessageQueue')) {
		result = arguments[0];
	}
	else {
		result = MessageQueue.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
MessageQueue.prototype = Object.create(SuperClass.prototype);
MessageQueue.prototype.constructor = MessageQueue;

Object.defineProperty(MessageQueue.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MessageQueue(this.$native.super);
	},
	enumerable: true
});

MessageQueue.className = 'android.os.MessageQueue';
MessageQueue.prototype.className = 'android.os.MessageQueue';

// class property
Object.defineProperty(MessageQueue, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.MessageQueue');
	},
	enumerable: true,
	configurable: false
});


// Cast
MessageQueue.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MessageQueue(Hyperloop.cast('android.os.MessageQueue', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(MessageQueue, 'IdleHandler', {
	get: function() {
		return require('android.os.MessageQueue$IdleHandler');
	},
	enumerable: true
});
Object.defineProperty(MessageQueue, 'OnFileDescriptorEventListener', {
	get: function() {
		return require('android.os.MessageQueue$OnFileDescriptorEventListener');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function removeIdleHandler
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#removeIdleHandler(android.os.MessageQueue$IdleHandler)}
 **/
MessageQueue.prototype.removeIdleHandler = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeIdleHandler',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.MessageQueue') {
			return new MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnFileDescriptorEventListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#addOnFileDescriptorEventListener(java.io.FileDescriptor, int, android.os.MessageQueue$OnFileDescriptorEventListener)}
 **/
MessageQueue.prototype.addOnFileDescriptorEventListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnFileDescriptorEventListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.MessageQueue') {
			return new MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addIdleHandler
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#addIdleHandler(android.os.MessageQueue$IdleHandler)}
 **/
MessageQueue.prototype.addIdleHandler = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addIdleHandler',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.MessageQueue') {
			return new MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#finalize()}
 **/
MessageQueue.prototype.finalize = function() {
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
		if (result.apiName === 'android.os.MessageQueue') {
			return new MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isIdle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#isIdle()}
 **/
MessageQueue.prototype.isIdle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isIdle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.MessageQueue') {
			return new MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnFileDescriptorEventListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/MessageQueue.html#removeOnFileDescriptorEventListener(java.io.FileDescriptor)}
 **/
MessageQueue.prototype.removeOnFileDescriptorEventListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnFileDescriptorEventListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.MessageQueue') {
			return new MessageQueue(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = MessageQueue;
