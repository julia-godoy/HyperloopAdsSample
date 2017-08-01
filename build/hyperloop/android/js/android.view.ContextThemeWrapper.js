/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ContextThemeWrapper
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.ContextThemeWrapper
 * @extends android.content.ContextWrapper 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html}
 **/
var ContextThemeWrapper = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.ContextThemeWrapper')) {
		result = arguments[0];
	}
	else {
		result = ContextThemeWrapper.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.ContextWrapper');
ContextThemeWrapper.prototype = Object.create(SuperClass.prototype);
ContextThemeWrapper.prototype.constructor = ContextThemeWrapper;

Object.defineProperty(ContextThemeWrapper.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ContextThemeWrapper(this.$native.super);
	},
	enumerable: true
});

ContextThemeWrapper.className = 'android.view.ContextThemeWrapper';
ContextThemeWrapper.prototype.className = 'android.view.ContextThemeWrapper';

// class property
Object.defineProperty(ContextThemeWrapper, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.ContextThemeWrapper');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ContextThemeWrapper.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.ContextThemeWrapper');

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
	SubClass.prototype = Object.create(ContextThemeWrapper.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ContextThemeWrapper.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ContextThemeWrapper(Hyperloop.cast('android.view.ContextThemeWrapper', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#getTheme()}
 **/
ContextThemeWrapper.prototype.getTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#getSystemService(java.lang.String)}
 **/
ContextThemeWrapper.prototype.getSystemService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#getResources()}
 **/
ContextThemeWrapper.prototype.getResources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#setTheme(int)}
 **/
ContextThemeWrapper.prototype.setTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attachBaseContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#attachBaseContext(android.content.Context)}
 **/
ContextThemeWrapper.prototype.attachBaseContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attachBaseContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onApplyThemeResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#onApplyThemeResource(android.content.res.Resources$Theme, int, boolean)}
 **/
ContextThemeWrapper.prototype.onApplyThemeResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onApplyThemeResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyOverrideConfiguration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ContextThemeWrapper.html#applyOverrideConfiguration(android.content.res.Configuration)}
 **/
ContextThemeWrapper.prototype.applyOverrideConfiguration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyOverrideConfiguration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ContextThemeWrapper') {
			return new ContextThemeWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ContextThemeWrapper;
