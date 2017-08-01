/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.BroadcastReceiver
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.BroadcastReceiver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html}
 **/
var BroadcastReceiver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.BroadcastReceiver')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.content.BroadcastReceiver. Create a subclass using android.content.BroadcastReceiver.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
BroadcastReceiver.prototype = Object.create(SuperClass.prototype);
BroadcastReceiver.prototype.constructor = BroadcastReceiver;

Object.defineProperty(BroadcastReceiver.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new BroadcastReceiver(this.$native.super);
	},
	enumerable: true
});

BroadcastReceiver.className = 'android.content.BroadcastReceiver';
BroadcastReceiver.prototype.className = 'android.content.BroadcastReceiver';

// class property
Object.defineProperty(BroadcastReceiver, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.BroadcastReceiver');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
BroadcastReceiver.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.BroadcastReceiver');

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
	SubClass.prototype = Object.create(BroadcastReceiver.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
BroadcastReceiver.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new BroadcastReceiver(Hyperloop.cast('android.content.BroadcastReceiver', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(BroadcastReceiver, 'PendingResult', {
	get: function() {
		return require('android.content.BroadcastReceiver$PendingResult');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function goAsync
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#goAsync()}
 **/
BroadcastReceiver.prototype.goAsync = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'goAsync',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDebugUnregister
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#getDebugUnregister()}
 **/
BroadcastReceiver.prototype.getDebugUnregister = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDebugUnregister',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResultCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#getResultCode()}
 **/
BroadcastReceiver.prototype.getResultCode = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#getAbortBroadcast()}
 **/
BroadcastReceiver.prototype.getAbortBroadcast = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setResult(int, java.lang.String, android.os.Bundle)}
 **/
BroadcastReceiver.prototype.setResult = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setResultCode(int)}
 **/
BroadcastReceiver.prototype.setResultCode = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onReceive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#onReceive(android.content.Context, android.content.Intent)}
 **/
BroadcastReceiver.prototype.onReceive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onReceive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setResultData(java.lang.String)}
 **/
BroadcastReceiver.prototype.setResultData = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInitialStickyBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#isInitialStickyBroadcast()}
 **/
BroadcastReceiver.prototype.isInitialStickyBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInitialStickyBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setResultExtras(android.os.Bundle)}
 **/
BroadcastReceiver.prototype.setResultExtras = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOrderedBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#isOrderedBroadcast()}
 **/
BroadcastReceiver.prototype.isOrderedBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOrderedBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#getResultExtras(boolean)}
 **/
BroadcastReceiver.prototype.getResultExtras = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#abortBroadcast()}
 **/
BroadcastReceiver.prototype.abortBroadcast = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peekService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#peekService(android.content.Context, android.content.Intent)}
 **/
BroadcastReceiver.prototype.peekService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peekService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDebugUnregister
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setDebugUnregister(boolean)}
 **/
BroadcastReceiver.prototype.setDebugUnregister = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDebugUnregister',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOrderedHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#setOrderedHint(boolean)}
 **/
BroadcastReceiver.prototype.setOrderedHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOrderedHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#getResultData()}
 **/
BroadcastReceiver.prototype.getResultData = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
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
 * @see {@link http://developer.android.com/reference/android/content/BroadcastReceiver.html#clearAbortBroadcast()}
 **/
BroadcastReceiver.prototype.clearAbortBroadcast = function() {
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
		if (result.apiName === 'android.content.BroadcastReceiver') {
			return new BroadcastReceiver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = BroadcastReceiver;
