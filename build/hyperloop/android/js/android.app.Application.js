/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.Application
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.Application
 * @extends android.content.ContextWrapper 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/Application.html}
 **/
var Application = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.Application')) {
		result = arguments[0];
	}
	else {
		result = Application.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.ContextWrapper');
Application.prototype = Object.create(SuperClass.prototype);
Application.prototype.constructor = Application;

Object.defineProperty(Application.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Application(this.$native.super);
	},
	enumerable: true
});

Application.className = 'android.app.Application';
Application.prototype.className = 'android.app.Application';

// class property
Object.defineProperty(Application, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.Application');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Application.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.Application');

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
	SubClass.prototype = Object.create(Application.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Application.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Application(Hyperloop.cast('android.app.Application', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(Application, 'OnProvideAssistDataListener', {
	get: function() {
		return require('android.app.Application$OnProvideAssistDataListener');
	},
	enumerable: true
});
Object.defineProperty(Application, 'ActivityLifecycleCallbacks', {
	get: function() {
		return require('android.app.Application$ActivityLifecycleCallbacks');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onCreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#onCreate()}
 **/
Application.prototype.onCreate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterComponentCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#unregisterComponentCallbacks(android.content.ComponentCallbacks)}
 **/
Application.prototype.unregisterComponentCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterComponentCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerActivityLifecycleCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#registerActivityLifecycleCallbacks(android.app.Application$ActivityLifecycleCallbacks)}
 **/
Application.prototype.registerActivityLifecycleCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerActivityLifecycleCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerOnProvideAssistDataListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#registerOnProvideAssistDataListener(android.app.Application$OnProvideAssistDataListener)}
 **/
Application.prototype.registerOnProvideAssistDataListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerOnProvideAssistDataListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTerminate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#onTerminate()}
 **/
Application.prototype.onTerminate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTerminate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterActivityLifecycleCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#unregisterActivityLifecycleCallbacks(android.app.Application$ActivityLifecycleCallbacks)}
 **/
Application.prototype.unregisterActivityLifecycleCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterActivityLifecycleCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTrimMemory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#onTrimMemory(int)}
 **/
Application.prototype.onTrimMemory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTrimMemory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onConfigurationChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#onConfigurationChanged(android.content.res.Configuration)}
 **/
Application.prototype.onConfigurationChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onConfigurationChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterOnProvideAssistDataListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#unregisterOnProvideAssistDataListener(android.app.Application$OnProvideAssistDataListener)}
 **/
Application.prototype.unregisterOnProvideAssistDataListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterOnProvideAssistDataListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLowMemory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#onLowMemory()}
 **/
Application.prototype.onLowMemory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLowMemory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerComponentCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Application.html#registerComponentCallbacks(android.content.ComponentCallbacks)}
 **/
Application.prototype.registerComponentCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerComponentCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Application') {
			return new Application(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Application;
