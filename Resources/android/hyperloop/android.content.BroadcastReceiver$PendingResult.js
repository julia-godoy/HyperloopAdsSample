/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.BroadcastReceiver$PendingResult
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.content.BroadcastReceiver');

/**
 * @class android.content.BroadcastReceiver$PendingResult
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html}
 **/
var PendingResult = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.BroadcastReceiver$PendingResult')) {
		result = arguments[0];
	}
	else {
		result = PendingResult.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PendingResult.prototype = Object.create(SuperClass.prototype);
PendingResult.prototype.constructor = PendingResult;

Object.defineProperty(PendingResult.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PendingResult(this.$native.super);
	},
	enumerable: true
});

PendingResult.className = 'android.content.BroadcastReceiver$PendingResult';
PendingResult.prototype.className = 'android.content.BroadcastReceiver$PendingResult';

// class property
Object.defineProperty(PendingResult, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.BroadcastReceiver$PendingResult');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PendingResult.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.BroadcastReceiver$PendingResult');

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
	SubClass.prototype = Object.create(PendingResult.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PendingResult.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PendingResult(Hyperloop.cast('android.content.BroadcastReceiver$PendingResult', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getResultCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#getResultCode()}
 **/
PendingResult.prototype.getResultCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResultCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAbortBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#getAbortBroadcast()}
 **/
PendingResult.prototype.getAbortBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAbortBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setResultExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#setResultExtras(android.os.Bundle)}
 **/
PendingResult.prototype.setResultExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setResultExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#setResult(int, java.lang.String, android.os.Bundle)}
 **/
PendingResult.prototype.setResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResultExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#getResultExtras(boolean)}
 **/
PendingResult.prototype.getResultExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResultExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function abortBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#abortBroadcast()}
 **/
PendingResult.prototype.abortBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'abortBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finish
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#finish()}
 **/
PendingResult.prototype.finish = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finish',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setResultCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#setResultCode(int)}
 **/
PendingResult.prototype.setResultCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setResultCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setResultData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#setResultData(java.lang.String)}
 **/
PendingResult.prototype.setResultData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setResultData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResultData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#getResultData()}
 **/
PendingResult.prototype.getResultData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResultData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearAbortBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.PendingResult.html#clearAbortBroadcast()}
 **/
PendingResult.prototype.clearAbortBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearAbortBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver$PendingResult') {
			return new PendingResult(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PendingResult;
