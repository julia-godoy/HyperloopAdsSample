/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.core.exception.InLocoMediaException
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.core.exception');

/**
 * @class com.inlocomedia.android.core.exception.InLocoMediaException
 * @extends java.lang.Exception 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/exception/InLocoMediaException.html}
 **/
var InLocoMediaException = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.core.exception.InLocoMediaException')) {
		result = arguments[0];
	}
	else {
		result = InLocoMediaException.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Exception');
InLocoMediaException.prototype = Object.create(SuperClass.prototype);
InLocoMediaException.prototype.constructor = InLocoMediaException;

Object.defineProperty(InLocoMediaException.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new InLocoMediaException(this.$native.super);
	},
	enumerable: true
});

InLocoMediaException.className = 'com.inlocomedia.android.core.exception.InLocoMediaException';
InLocoMediaException.prototype.className = 'com.inlocomedia.android.core.exception.InLocoMediaException';

// class property
Object.defineProperty(InLocoMediaException, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.core.exception.InLocoMediaException');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
InLocoMediaException.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('com.inlocomedia.android.core.exception.InLocoMediaException');

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
	SubClass.prototype = Object.create(InLocoMediaException.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
InLocoMediaException.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new InLocoMediaException(Hyperloop.cast('com.inlocomedia.android.core.exception.InLocoMediaException', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function isUnhandledError
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/exception/InLocoMediaException.html#isUnhandledError(java.lang.Throwable)}
 **/
InLocoMediaException.isUnhandledError = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isUnhandledError',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.core.exception.InLocoMediaException') {
			return new InLocoMediaException(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFormattedMessage
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/exception/InLocoMediaException.html#getFormattedMessage(java.lang.Throwable)}
 **/
InLocoMediaException.getFormattedMessage = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getFormattedMessage',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.core.exception.InLocoMediaException') {
			return new InLocoMediaException(result);
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
 * @function setExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/exception/InLocoMediaException.html#setExtras(org.json.JSONObject)}
 **/
InLocoMediaException.prototype.setExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.core.exception.InLocoMediaException') {
			return new InLocoMediaException(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFormattedMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/exception/InLocoMediaException.html#getFormattedMessage()}
 **/
InLocoMediaException.prototype.getFormattedMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFormattedMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.core.exception.InLocoMediaException') {
			return new InLocoMediaException(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/exception/InLocoMediaException.html#getExtras()}
 **/
InLocoMediaException.prototype.getExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.core.exception.InLocoMediaException') {
			return new InLocoMediaException(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = InLocoMediaException;
