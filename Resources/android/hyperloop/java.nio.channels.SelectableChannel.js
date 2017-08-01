/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.SelectableChannel
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.channels');

/**
 * @class java.nio.channels.SelectableChannel
 * @extends java.nio.channels.spi.AbstractInterruptibleChannel 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html}
 **/
var SelectableChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.channels.SelectableChannel')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.SelectableChannel. Create a subclass using java.nio.channels.SelectableChannel.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.spi.AbstractInterruptibleChannel');
SelectableChannel.prototype = Object.create(SuperClass.prototype);
SelectableChannel.prototype.constructor = SelectableChannel;

Object.defineProperty(SelectableChannel.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SelectableChannel(this.$native.super);
	},
	enumerable: true
});

SelectableChannel.className = 'java.nio.channels.SelectableChannel';
SelectableChannel.prototype.className = 'java.nio.channels.SelectableChannel';

// class property
Object.defineProperty(SelectableChannel, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.channels.SelectableChannel');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SelectableChannel.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.channels.SelectableChannel');

	// Generate a JS wrapper for our dynamic subclass
	var SubClass = function() {
		var result = subclassProxy.newInstance(arguments),
			instance = this,
			copy = overrides,
			modified = {};

		function _wrapArg(arg) {
			if (arg.apiName && arg.isNativeProxy && arg.isInstanceProxy) { // Assume hyperloop proxy, wrap in JS wrapper
				var other = require(arg.apiName);
				return new other(arg);
			}
			return arg;
		}

		function _wrapArgs() {
			var newArgs = [];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i] = _wrapArg(arguments[i]);
			}
			return newArgs;
		};

		Object.keys(copy).forEach(function (each) {
			// Hang the original override method on the JS wrapper object
			instance[each] = function() {
				return copy[each].apply(instance, arguments);
			};

			// Hang a delegate on the "overrides" object we pass into Java.
			// This one wraps hyperloop proxies from Java in their JS wrapper before forwarding on
			modified[each] = function() {
				return instance[each].apply(instance, _wrapArgs.apply(this, arguments));
			}
		});
		result.setOverrides(modified);

		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};
	};
	// it extends the JS wrapper for the parent type
	SubClass.prototype = Object.create(SelectableChannel.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SelectableChannel.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SelectableChannel(Hyperloop.cast('java.nio.channels.SelectableChannel', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function isBlocking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#isBlocking()}
 **/
SelectableChannel.prototype.isBlocking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isBlocking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function provider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#provider()}
 **/
SelectableChannel.prototype.provider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'provider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keyFor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#keyFor(java.nio.channels.Selector)}
 **/
SelectableChannel.prototype.keyFor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'keyFor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRegistered
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#isRegistered()}
 **/
SelectableChannel.prototype.isRegistered = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRegistered',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function blockingLock
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#blockingLock()}
 **/
SelectableChannel.prototype.blockingLock = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'blockingLock',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function validOps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#validOps()}
 **/
SelectableChannel.prototype.validOps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'validOps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function register
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#register(java.nio.channels.Selector, int, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#register(java.nio.channels.Selector, int)}
 **/
SelectableChannel.prototype.register = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'register',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function configureBlocking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectableChannel.html#configureBlocking(boolean)}
 **/
SelectableChannel.prototype.configureBlocking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'configureBlocking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectableChannel') {
			return new SelectableChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SelectableChannel;
