/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.Handler
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.os');

/**
 * @class android.os.Handler
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/Handler.html}
 **/
var Handler = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.Handler')) {
		result = arguments[0];
	}
	else {
		result = Handler.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Handler.prototype = Object.create(SuperClass.prototype);
Handler.prototype.constructor = Handler;

Object.defineProperty(Handler.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Handler(this.$native.super);
	},
	enumerable: true
});

Handler.className = 'android.os.Handler';
Handler.prototype.className = 'android.os.Handler';

// class property
Object.defineProperty(Handler, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.Handler');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Handler.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.os.Handler');

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
	SubClass.prototype = Object.create(Handler.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Handler.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Handler(Hyperloop.cast('android.os.Handler', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(Handler, 'Callback', {
	get: function() {
		return require('android.os.Handler$Callback');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function sendEmptyMessageAtTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendEmptyMessageAtTime(int, long)}
 **/
Handler.prototype.sendEmptyMessageAtTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendEmptyMessageAtTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function handleMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#handleMessage(android.os.Message)}
 **/
Handler.prototype.handleMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'handleMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#dispatchMessage(android.os.Message)}
 **/
Handler.prototype.dispatchMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendEmptyMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendEmptyMessage(int)}
 **/
Handler.prototype.sendEmptyMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendEmptyMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendMessage(android.os.Message)}
 **/
Handler.prototype.sendMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendEmptyMessageDelayed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendEmptyMessageDelayed(int, long)}
 **/
Handler.prototype.sendEmptyMessageDelayed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendEmptyMessageDelayed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#removeCallbacks(java.lang.Runnable)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#removeCallbacks(java.lang.Runnable, java.lang.Object)}
 **/
Handler.prototype.removeCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeCallbacksAndMessages
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#removeCallbacksAndMessages(java.lang.Object)}
 **/
Handler.prototype.removeCallbacksAndMessages = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeCallbacksAndMessages',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postDelayed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#postDelayed(java.lang.Runnable, long)}
 **/
Handler.prototype.postDelayed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postDelayed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendMessageAtTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendMessageAtTime(android.os.Message, long)}
 **/
Handler.prototype.sendMessageAtTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendMessageAtTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasMessages
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#hasMessages(int)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#hasMessages(int, java.lang.Object)}
 **/
Handler.prototype.hasMessages = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasMessages',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postAtFrontOfQueue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#postAtFrontOfQueue(java.lang.Runnable)}
 **/
Handler.prototype.postAtFrontOfQueue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postAtFrontOfQueue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendMessageAtFrontOfQueue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendMessageAtFrontOfQueue(android.os.Message)}
 **/
Handler.prototype.sendMessageAtFrontOfQueue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendMessageAtFrontOfQueue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMessageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#getMessageName(android.os.Message)}
 **/
Handler.prototype.getMessageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMessageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function post
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#post(java.lang.Runnable)}
 **/
Handler.prototype.post = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'post',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLooper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#getLooper()}
 **/
Handler.prototype.getLooper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLooper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendMessageDelayed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#sendMessageDelayed(android.os.Message, long)}
 **/
Handler.prototype.sendMessageDelayed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendMessageDelayed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#toString()}
 **/
Handler.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeMessages
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#removeMessages(int)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#removeMessages(int, java.lang.Object)}
 **/
Handler.prototype.removeMessages = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeMessages',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dump
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#dump(android.util.Printer, java.lang.String)}
 **/
Handler.prototype.dump = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dump',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postAtTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#postAtTime(java.lang.Runnable, long)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#postAtTime(java.lang.Runnable, java.lang.Object, long)}
 **/
Handler.prototype.postAtTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postAtTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function obtainMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#obtainMessage()}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#obtainMessage(int)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#obtainMessage(int, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#obtainMessage(int, int, int)}
 * @see {@link http://developer.android.com/reference/android/os/Handler.html#obtainMessage(int, int, int, java.lang.Object)}
 **/
Handler.prototype.obtainMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'obtainMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Handler') {
			return new Handler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Handler;
