/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ContextWrapper
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.ContextWrapper
 * @extends android.content.Context 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html}
 **/
var ContextWrapper = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.ContextWrapper')) {
		result = arguments[0];
	}
	else {
		result = ContextWrapper.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.Context');
ContextWrapper.prototype = Object.create(SuperClass.prototype);
ContextWrapper.prototype.constructor = ContextWrapper;

Object.defineProperty(ContextWrapper.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ContextWrapper(this.$native.super);
	},
	enumerable: true
});

ContextWrapper.className = 'android.content.ContextWrapper';
ContextWrapper.prototype.className = 'android.content.ContextWrapper';

// class property
Object.defineProperty(ContextWrapper, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.ContextWrapper');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ContextWrapper.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.ContextWrapper');

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
	SubClass.prototype = Object.create(ContextWrapper.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ContextWrapper.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ContextWrapper(Hyperloop.cast('android.content.ContextWrapper', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function sendOrderedBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendOrderedBroadcast(android.content.Intent, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendOrderedBroadcast(android.content.Intent, java.lang.String, android.content.BroadcastReceiver, android.os.Handler, int, java.lang.String, android.os.Bundle)}
 **/
ContextWrapper.prototype.sendOrderedBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendOrderedBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExternalFilesDirs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getExternalFilesDirs(java.lang.String)}
 **/
ContextWrapper.prototype.getExternalFilesDirs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExternalFilesDirs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceCallingPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#enforceCallingPermission(java.lang.String, java.lang.String)}
 **/
ContextWrapper.prototype.enforceCallingPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enforceCallingPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getObbDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getObbDir()}
 **/
ContextWrapper.prototype.getObbDir = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getObbDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendBroadcastAsUser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendBroadcastAsUser(android.content.Intent, android.os.UserHandle)}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendBroadcastAsUser(android.content.Intent, android.os.UserHandle, java.lang.String)}
 **/
ContextWrapper.prototype.sendBroadcastAsUser = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendBroadcastAsUser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#attachBaseContext(android.content.Context)}
 **/
ContextWrapper.prototype.attachBaseContext = function() {
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
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExternalCacheDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getExternalCacheDir()}
 **/
ContextWrapper.prototype.getExternalCacheDir = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExternalCacheDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deleteDatabase
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#deleteDatabase(java.lang.String)}
 **/
ContextWrapper.prototype.deleteDatabase = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deleteDatabase',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkSelfPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#checkSelfPermission(java.lang.String)}
 **/
ContextWrapper.prototype.checkSelfPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkSelfPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceCallingOrSelfPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#enforceCallingOrSelfPermission(java.lang.String, java.lang.String)}
 **/
ContextWrapper.prototype.enforceCallingOrSelfPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enforceCallingOrSelfPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openFileInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#openFileInput(java.lang.String)}
 **/
ContextWrapper.prototype.openFileInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openFileInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeStickyBroadcastAsUser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#removeStickyBroadcastAsUser(android.content.Intent, android.os.UserHandle)}
 **/
ContextWrapper.prototype.removeStickyBroadcastAsUser = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeStickyBroadcastAsUser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#checkPermission(java.lang.String, int, int)}
 **/
ContextWrapper.prototype.checkPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#enforceUriPermission(android.net.Uri, int, int, int, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#enforceUriPermission(android.net.Uri, java.lang.String, java.lang.String, int, int, int, java.lang.String)}
 **/
ContextWrapper.prototype.enforceUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enforceUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentResolver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getContentResolver()}
 **/
ContextWrapper.prototype.getContentResolver = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentResolver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageResourcePath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getPackageResourcePath()}
 **/
ContextWrapper.prototype.getPackageResourcePath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageResourcePath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function databaseList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#databaseList()}
 **/
ContextWrapper.prototype.databaseList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'databaseList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFilesDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getFilesDir()}
 **/
ContextWrapper.prototype.getFilesDir = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFilesDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendStickyOrderedBroadcastAsUser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendStickyOrderedBroadcastAsUser(android.content.Intent, android.os.UserHandle, android.content.BroadcastReceiver, android.os.Handler, int, java.lang.String, android.os.Bundle)}
 **/
ContextWrapper.prototype.sendStickyOrderedBroadcastAsUser = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendStickyOrderedBroadcastAsUser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fileList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#fileList()}
 **/
ContextWrapper.prototype.fileList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'fileList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExternalMediaDirs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getExternalMediaDirs()}
 **/
ContextWrapper.prototype.getExternalMediaDirs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExternalMediaDirs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getWallpaper()}
 **/
ContextWrapper.prototype.getWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDatabasePath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getDatabasePath(java.lang.String)}
 **/
ContextWrapper.prototype.getDatabasePath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDatabasePath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceCallingOrSelfUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#enforceCallingOrSelfUriPermission(android.net.Uri, int, java.lang.String)}
 **/
ContextWrapper.prototype.enforceCallingOrSelfUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enforceCallingOrSelfUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getTheme()}
 **/
ContextWrapper.prototype.getTheme = function() {
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
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCacheDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getCacheDir()}
 **/
ContextWrapper.prototype.getCacheDir = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCacheDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExternalCacheDirs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getExternalCacheDirs()}
 **/
ContextWrapper.prototype.getExternalCacheDirs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExternalCacheDirs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startIntentSender
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#startIntentSender(android.content.IntentSender, android.content.Intent, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#startIntentSender(android.content.IntentSender, android.content.Intent, int, int, int, android.os.Bundle)}
 **/
ContextWrapper.prototype.startIntentSender = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startIntentSender',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkCallingOrSelfPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#checkCallingOrSelfPermission(java.lang.String)}
 **/
ContextWrapper.prototype.checkCallingOrSelfPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkCallingOrSelfPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemServiceName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getSystemServiceName(java.lang.Class)}
 **/
ContextWrapper.prototype.getSystemServiceName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemServiceName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCodeCacheDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getCodeCacheDir()}
 **/
ContextWrapper.prototype.getCodeCacheDir = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCodeCacheDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openOrCreateDatabase
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#openOrCreateDatabase(java.lang.String, int, android.database.sqlite.SQLiteDatabase$CursorFactory)}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#openOrCreateDatabase(java.lang.String, int, android.database.sqlite.SQLiteDatabase$CursorFactory, android.database.DatabaseErrorHandler)}
 **/
ContextWrapper.prototype.openOrCreateDatabase = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openOrCreateDatabase',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileStreamPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getFileStreamPath(java.lang.String)}
 **/
ContextWrapper.prototype.getFileStreamPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileStreamPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActivities
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#startActivities(android.content.Intent[])}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#startActivities(android.content.Intent[], android.os.Bundle)}
 **/
ContextWrapper.prototype.startActivities = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivities',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWallpaperDesiredMinimumHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getWallpaperDesiredMinimumHeight()}
 **/
ContextWrapper.prototype.getWallpaperDesiredMinimumHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWallpaperDesiredMinimumHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#startService(android.content.Intent)}
 **/
ContextWrapper.prototype.startService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerReceiver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter)}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter, java.lang.String, android.os.Handler)}
 **/
ContextWrapper.prototype.registerReceiver = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerReceiver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#setTheme(int)}
 **/
ContextWrapper.prototype.setTheme = function() {
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
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getPackageManager()}
 **/
ContextWrapper.prototype.getPackageManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendOrderedBroadcastAsUser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendOrderedBroadcastAsUser(android.content.Intent, android.os.UserHandle, java.lang.String, android.content.BroadcastReceiver, android.os.Handler, int, java.lang.String, android.os.Bundle)}
 **/
ContextWrapper.prototype.sendOrderedBroadcastAsUser = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendOrderedBroadcastAsUser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getPackageName()}
 **/
ContextWrapper.prototype.getPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bindService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#bindService(android.content.Intent, android.content.ServiceConnection, int)}
 **/
ContextWrapper.prototype.bindService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bindService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRestricted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#isRestricted()}
 **/
ContextWrapper.prototype.isRestricted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRestricted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getObbDirs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getObbDirs()}
 **/
ContextWrapper.prototype.getObbDirs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getObbDirs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforceCallingUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#enforceCallingUriPermission(android.net.Uri, int, java.lang.String)}
 **/
ContextWrapper.prototype.enforceCallingUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enforceCallingUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkCallingUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#checkCallingUriPermission(android.net.Uri, int)}
 **/
ContextWrapper.prototype.checkCallingUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkCallingUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendBroadcast(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendBroadcast(android.content.Intent, java.lang.String)}
 **/
ContextWrapper.prototype.sendBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getSystemService(java.lang.String)}
 **/
ContextWrapper.prototype.getSystemService = function() {
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
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unbindService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#unbindService(android.content.ServiceConnection)}
 **/
ContextWrapper.prototype.unbindService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unbindService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeStickyBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#removeStickyBroadcast(android.content.Intent)}
 **/
ContextWrapper.prototype.removeStickyBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeStickyBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkCallingOrSelfUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#checkCallingOrSelfUriPermission(android.net.Uri, int)}
 **/
ContextWrapper.prototype.checkCallingOrSelfUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkCallingOrSelfUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageCodePath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getPackageCodePath()}
 **/
ContextWrapper.prototype.getPackageCodePath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageCodePath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peekWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#peekWallpaper()}
 **/
ContextWrapper.prototype.peekWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peekWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getClassLoader()}
 **/
ContextWrapper.prototype.getClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createConfigurationContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#createConfigurationContext(android.content.res.Configuration)}
 **/
ContextWrapper.prototype.createConfigurationContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createConfigurationContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openFileOutput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#openFileOutput(java.lang.String, int)}
 **/
ContextWrapper.prototype.openFileOutput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openFileOutput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#startActivity(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#startActivity(android.content.Intent, android.os.Bundle)}
 **/
ContextWrapper.prototype.startActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createPackageContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#createPackageContext(java.lang.String, int)}
 **/
ContextWrapper.prototype.createPackageContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createPackageContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBaseContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getBaseContext()}
 **/
ContextWrapper.prototype.getBaseContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBaseContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplicationContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getApplicationContext()}
 **/
ContextWrapper.prototype.getApplicationContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getApplicationContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendStickyBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendStickyBroadcast(android.content.Intent)}
 **/
ContextWrapper.prototype.sendStickyBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendStickyBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getResources()}
 **/
ContextWrapper.prototype.getResources = function() {
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
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enforcePermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#enforcePermission(java.lang.String, int, int, java.lang.String)}
 **/
ContextWrapper.prototype.enforcePermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enforcePermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNoBackupFilesDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getNoBackupFilesDir()}
 **/
ContextWrapper.prototype.getNoBackupFilesDir = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNoBackupFilesDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSharedPreferences
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getSharedPreferences(java.lang.String, int)}
 **/
ContextWrapper.prototype.getSharedPreferences = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSharedPreferences',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function grantUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#grantUriPermission(java.lang.String, android.net.Uri, int)}
 **/
ContextWrapper.prototype.grantUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'grantUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#checkUriPermission(android.net.Uri, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#checkUriPermission(android.net.Uri, java.lang.String, java.lang.String, int, int, int)}
 **/
ContextWrapper.prototype.checkUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMainLooper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getMainLooper()}
 **/
ContextWrapper.prototype.getMainLooper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMainLooper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAssets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getAssets()}
 **/
ContextWrapper.prototype.getAssets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAssets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getDir(java.lang.String, int)}
 **/
ContextWrapper.prototype.getDir = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWallpaperDesiredMinimumWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getWallpaperDesiredMinimumWidth()}
 **/
ContextWrapper.prototype.getWallpaperDesiredMinimumWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWallpaperDesiredMinimumWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startInstrumentation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#startInstrumentation(android.content.ComponentName, java.lang.String, android.os.Bundle)}
 **/
ContextWrapper.prototype.startInstrumentation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startInstrumentation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deleteFile
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#deleteFile(java.lang.String)}
 **/
ContextWrapper.prototype.deleteFile = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deleteFile',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#clearWallpaper()}
 **/
ContextWrapper.prototype.clearWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExternalFilesDir
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getExternalFilesDir(java.lang.String)}
 **/
ContextWrapper.prototype.getExternalFilesDir = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExternalFilesDir',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendStickyBroadcastAsUser
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendStickyBroadcastAsUser(android.content.Intent, android.os.UserHandle)}
 **/
ContextWrapper.prototype.sendStickyBroadcastAsUser = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendStickyBroadcastAsUser',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function revokeUriPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#revokeUriPermission(android.net.Uri, int)}
 **/
ContextWrapper.prototype.revokeUriPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'revokeUriPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#setWallpaper(android.graphics.Bitmap)}
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#setWallpaper(java.io.InputStream)}
 **/
ContextWrapper.prototype.setWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplicationInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#getApplicationInfo()}
 **/
ContextWrapper.prototype.getApplicationInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getApplicationInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendStickyOrderedBroadcast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#sendStickyOrderedBroadcast(android.content.Intent, android.content.BroadcastReceiver, android.os.Handler, int, java.lang.String, android.os.Bundle)}
 **/
ContextWrapper.prototype.sendStickyOrderedBroadcast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendStickyOrderedBroadcast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkCallingPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#checkCallingPermission(java.lang.String)}
 **/
ContextWrapper.prototype.checkCallingPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkCallingPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterReceiver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#unregisterReceiver(android.content.BroadcastReceiver)}
 **/
ContextWrapper.prototype.unregisterReceiver = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterReceiver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stopService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#stopService(android.content.Intent)}
 **/
ContextWrapper.prototype.stopService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stopService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createDisplayContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ContextWrapper.html#createDisplayContext(android.view.Display)}
 **/
ContextWrapper.prototype.createDisplayContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createDisplayContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ContextWrapper') {
			return new ContextWrapper(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ContextWrapper;
