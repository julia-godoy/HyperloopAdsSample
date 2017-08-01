/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PackageInstaller
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.PackageInstaller
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html}
 **/
var PackageInstaller = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.PackageInstaller')) {
		result = arguments[0];
	}
	else {
		result = PackageInstaller.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PackageInstaller.prototype = Object.create(SuperClass.prototype);
PackageInstaller.prototype.constructor = PackageInstaller;

Object.defineProperty(PackageInstaller.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PackageInstaller(this.$native.super);
	},
	enumerable: true
});

PackageInstaller.className = 'android.content.pm.PackageInstaller';
PackageInstaller.prototype.className = 'android.content.pm.PackageInstaller';

// class property
Object.defineProperty(PackageInstaller, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.PackageInstaller');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PackageInstaller.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.PackageInstaller');

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
	SubClass.prototype = Object.create(PackageInstaller.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PackageInstaller.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PackageInstaller(Hyperloop.cast('android.content.pm.PackageInstaller', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_STATUS}
 */
PackageInstaller.EXTRA_STATUS = "android.content.pm.extra.STATUS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_ABORTED}
 */
PackageInstaller.STATUS_FAILURE_ABORTED = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE}
 */
PackageInstaller.STATUS_FAILURE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_STORAGE_PATH}
 */
PackageInstaller.EXTRA_STORAGE_PATH = "android.content.pm.extra.STORAGE_PATH";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#ACTION_SESSION_DETAILS}
 */
PackageInstaller.ACTION_SESSION_DETAILS = "android.content.pm.action.SESSION_DETAILS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_PENDING_USER_ACTION}
 */
PackageInstaller.STATUS_PENDING_USER_ACTION = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_STORAGE}
 */
PackageInstaller.STATUS_FAILURE_STORAGE = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_CONFLICT}
 */
PackageInstaller.STATUS_FAILURE_CONFLICT = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_SUCCESS}
 */
PackageInstaller.STATUS_SUCCESS = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_PACKAGE_NAME}
 */
PackageInstaller.EXTRA_PACKAGE_NAME = "android.content.pm.extra.PACKAGE_NAME";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_STATUS_MESSAGE}
 */
PackageInstaller.EXTRA_STATUS_MESSAGE = "android.content.pm.extra.STATUS_MESSAGE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_OTHER_PACKAGE_NAME}
 */
PackageInstaller.EXTRA_OTHER_PACKAGE_NAME = "android.content.pm.extra.OTHER_PACKAGE_NAME";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#EXTRA_SESSION_ID}
 */
PackageInstaller.EXTRA_SESSION_ID = "android.content.pm.extra.SESSION_ID";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_BLOCKED}
 */
PackageInstaller.STATUS_FAILURE_BLOCKED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_INVALID}
 */
PackageInstaller.STATUS_FAILURE_INVALID = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#STATUS_FAILURE_INCOMPATIBLE}
 */
PackageInstaller.STATUS_FAILURE_INCOMPATIBLE = 7;

// Inner classes
Object.defineProperty(PackageInstaller, 'SessionCallback', {
	get: function() {
		return require('android.content.pm.PackageInstaller$SessionCallback');
	},
	enumerable: true
});
Object.defineProperty(PackageInstaller, 'SessionInfo', {
	get: function() {
		return require('android.content.pm.PackageInstaller$SessionInfo');
	},
	enumerable: true
});
Object.defineProperty(PackageInstaller, 'Session', {
	get: function() {
		return require('android.content.pm.PackageInstaller$Session');
	},
	enumerable: true
});
Object.defineProperty(PackageInstaller, 'SessionParams', {
	get: function() {
		return require('android.content.pm.PackageInstaller$SessionParams');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getSessionInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#getSessionInfo(int)}
 **/
PackageInstaller.prototype.getSessionInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSessionInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function uninstall
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#uninstall(java.lang.String, android.content.IntentSender)}
 **/
PackageInstaller.prototype.uninstall = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'uninstall',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMySessions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#getMySessions()}
 **/
PackageInstaller.prototype.getMySessions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMySessions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function updateSessionAppIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#updateSessionAppIcon(int, android.graphics.Bitmap)}
 **/
PackageInstaller.prototype.updateSessionAppIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateSessionAppIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openSession
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#openSession(int)}
 **/
PackageInstaller.prototype.openSession = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openSession',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAllSessions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#getAllSessions()}
 **/
PackageInstaller.prototype.getAllSessions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAllSessions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function updateSessionAppLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#updateSessionAppLabel(int, java.lang.CharSequence)}
 **/
PackageInstaller.prototype.updateSessionAppLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateSessionAppLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerSessionCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#registerSessionCallback(android.content.pm.PackageInstaller$SessionCallback)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#registerSessionCallback(android.content.pm.PackageInstaller$SessionCallback, android.os.Handler)}
 **/
PackageInstaller.prototype.registerSessionCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerSessionCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function abandonSession
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#abandonSession(int)}
 **/
PackageInstaller.prototype.abandonSession = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'abandonSession',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createSession
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#createSession(android.content.pm.PackageInstaller$SessionParams)}
 **/
PackageInstaller.prototype.createSession = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createSession',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterSessionCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInstaller.html#unregisterSessionCallback(android.content.pm.PackageInstaller$SessionCallback)}
 **/
PackageInstaller.prototype.unregisterSessionCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterSessionCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageInstaller') {
			return new PackageInstaller(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PackageInstaller;
