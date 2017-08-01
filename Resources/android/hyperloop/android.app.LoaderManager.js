/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.LoaderManager
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.LoaderManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html}
 **/
var LoaderManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.LoaderManager')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.app.LoaderManager. Create a subclass using android.app.LoaderManager.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
LoaderManager.prototype = Object.create(SuperClass.prototype);
LoaderManager.prototype.constructor = LoaderManager;

Object.defineProperty(LoaderManager.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new LoaderManager(this.$native.super);
	},
	enumerable: true
});

LoaderManager.className = 'android.app.LoaderManager';
LoaderManager.prototype.className = 'android.app.LoaderManager';

// class property
Object.defineProperty(LoaderManager, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.LoaderManager');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
LoaderManager.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.LoaderManager');

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
	SubClass.prototype = Object.create(LoaderManager.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
LoaderManager.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new LoaderManager(Hyperloop.cast('android.app.LoaderManager', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(LoaderManager, 'LoaderCallbacks', {
	get: function() {
		return require('android.app.LoaderManager$LoaderCallbacks');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function enableDebugLogging
 * @static
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#enableDebugLogging(boolean)}
 **/
LoaderManager.enableDebugLogging = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'enableDebugLogging',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new LoaderManager(result);
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
 * @function restartLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#restartLoader(int, android.os.Bundle, android.app.LoaderManager$LoaderCallbacks)}
 **/
LoaderManager.prototype.restartLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'restartLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#getLoader(int)}
 **/
LoaderManager.prototype.getLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new LoaderManager(result);
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
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#dump(java.lang.String, java.io.FileDescriptor, java.io.PrintWriter, java.lang.String[])}
 **/
LoaderManager.prototype.dump = function() {
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
		if (result.apiName === 'android.app.LoaderManager') {
			return new LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#initLoader(int, android.os.Bundle, android.app.LoaderManager$LoaderCallbacks)}
 **/
LoaderManager.prototype.initLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function destroyLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/LoaderManager.html#destroyLoader(int)}
 **/
LoaderManager.prototype.destroyLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'destroyLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.LoaderManager') {
			return new LoaderManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = LoaderManager;
