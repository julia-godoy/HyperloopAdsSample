/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.ApplicationInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.ApplicationInfo
 * @extends android.content.pm.PackageItemInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html}
 **/
var ApplicationInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.ApplicationInfo')) {
		result = arguments[0];
	}
	else {
		result = ApplicationInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.PackageItemInfo');
ApplicationInfo.prototype = Object.create(SuperClass.prototype);
ApplicationInfo.prototype.constructor = ApplicationInfo;

Object.defineProperty(ApplicationInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ApplicationInfo(this.$native.super);
	},
	enumerable: true
});

ApplicationInfo.className = 'android.content.pm.ApplicationInfo';
ApplicationInfo.prototype.className = 'android.content.pm.ApplicationInfo';

// class property
Object.defineProperty(ApplicationInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.ApplicationInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ApplicationInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.ApplicationInfo');

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
	SubClass.prototype = Object.create(ApplicationInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ApplicationInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ApplicationInfo(Hyperloop.cast('android.content.pm.ApplicationInfo', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_NORMAL_SCREENS}
 */
ApplicationInfo.FLAG_SUPPORTS_NORMAL_SCREENS = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_SCREEN_DENSITIES}
 */
ApplicationInfo.FLAG_SUPPORTS_SCREEN_DENSITIES = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_SMALL_SCREENS}
 */
ApplicationInfo.FLAG_SUPPORTS_SMALL_SCREENS = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_FULL_BACKUP_ONLY}
 */
ApplicationInfo.FLAG_FULL_BACKUP_ONLY = 67108864;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_RESIZEABLE_FOR_SCREENS}
 */
ApplicationInfo.FLAG_RESIZEABLE_FOR_SCREENS = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_HAS_CODE}
 */
ApplicationInfo.FLAG_HAS_CODE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SYSTEM}
 */
ApplicationInfo.FLAG_SYSTEM = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_USES_CLEARTEXT_TRAFFIC}
 */
ApplicationInfo.FLAG_USES_CLEARTEXT_TRAFFIC = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_EXTRACT_NATIVE_LIBS}
 */
ApplicationInfo.FLAG_EXTRACT_NATIVE_LIBS = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_VM_SAFE_MODE}
 */
ApplicationInfo.FLAG_VM_SAFE_MODE = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_LARGE_SCREENS}
 */
ApplicationInfo.FLAG_SUPPORTS_LARGE_SCREENS = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_LARGE_HEAP}
 */
ApplicationInfo.FLAG_LARGE_HEAP = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_ALLOW_BACKUP}
 */
ApplicationInfo.FLAG_ALLOW_BACKUP = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_RTL}
 */
ApplicationInfo.FLAG_SUPPORTS_RTL = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_ALLOW_CLEAR_USER_DATA}
 */
ApplicationInfo.FLAG_ALLOW_CLEAR_USER_DATA = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_SUPPORTS_XLARGE_SCREENS}
 */
ApplicationInfo.FLAG_SUPPORTS_XLARGE_SCREENS = 524288;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_HARDWARE_ACCELERATED}
 */
ApplicationInfo.FLAG_HARDWARE_ACCELERATED = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_RESTORE_ANY_VERSION}
 */
ApplicationInfo.FLAG_RESTORE_ANY_VERSION = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_EXTERNAL_STORAGE}
 */
ApplicationInfo.FLAG_EXTERNAL_STORAGE = 262144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_IS_GAME}
 */
ApplicationInfo.FLAG_IS_GAME = 33554432;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_FACTORY_TEST}
 */
ApplicationInfo.FLAG_FACTORY_TEST = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_MULTIARCH}
 */
ApplicationInfo.FLAG_MULTIARCH = -2147483648;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_DEBUGGABLE}
 */
ApplicationInfo.FLAG_DEBUGGABLE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_INSTALLED}
 */
ApplicationInfo.FLAG_INSTALLED = 8388608;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_IS_DATA_ONLY}
 */
ApplicationInfo.FLAG_IS_DATA_ONLY = 16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_UPDATED_SYSTEM_APP}
 */
ApplicationInfo.FLAG_UPDATED_SYSTEM_APP = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_ALLOW_TASK_REPARENTING}
 */
ApplicationInfo.FLAG_ALLOW_TASK_REPARENTING = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_TEST_ONLY}
 */
ApplicationInfo.FLAG_TEST_ONLY = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_STOPPED}
 */
ApplicationInfo.FLAG_STOPPED = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_PERSISTENT}
 */
ApplicationInfo.FLAG_PERSISTENT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#FLAG_KILL_AFTER_RESTORE}
 */
ApplicationInfo.FLAG_KILL_AFTER_RESTORE = 65536;

// Inner classes
Object.defineProperty(ApplicationInfo, 'DisplayNameComparator', {
	get: function() {
		return require('android.content.pm.ApplicationInfo$DisplayNameComparator');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#CREATOR
Object.defineProperty(ApplicationInfo, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#dataDir
Object.defineProperty(ApplicationInfo.prototype, 'dataDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('dataDir');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('dataDir', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#uiOptions
Object.defineProperty(ApplicationInfo.prototype, 'uiOptions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('uiOptions');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('uiOptions', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#nativeLibraryDir
Object.defineProperty(ApplicationInfo.prototype, 'nativeLibraryDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('nativeLibraryDir');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('nativeLibraryDir', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#splitSourceDirs
Object.defineProperty(ApplicationInfo.prototype, 'splitSourceDirs', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('splitSourceDirs');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('splitSourceDirs', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#processName
Object.defineProperty(ApplicationInfo.prototype, 'processName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('processName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('processName', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#compatibleWidthLimitDp
Object.defineProperty(ApplicationInfo.prototype, 'compatibleWidthLimitDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('compatibleWidthLimitDp');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('compatibleWidthLimitDp', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#backupAgentName
Object.defineProperty(ApplicationInfo.prototype, 'backupAgentName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('backupAgentName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('backupAgentName', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#descriptionRes
Object.defineProperty(ApplicationInfo.prototype, 'descriptionRes', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('descriptionRes');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('descriptionRes', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#sourceDir
Object.defineProperty(ApplicationInfo.prototype, 'sourceDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('sourceDir');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('sourceDir', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#sharedLibraryFiles
Object.defineProperty(ApplicationInfo.prototype, 'sharedLibraryFiles', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('sharedLibraryFiles');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('sharedLibraryFiles', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#manageSpaceActivityName
Object.defineProperty(ApplicationInfo.prototype, 'manageSpaceActivityName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('manageSpaceActivityName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('manageSpaceActivityName', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#flags
Object.defineProperty(ApplicationInfo.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('flags');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('flags', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#className
Object.defineProperty(ApplicationInfo.prototype, 'className', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('className');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('className', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#enabled
Object.defineProperty(ApplicationInfo.prototype, 'enabled', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('enabled');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('enabled', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#uid
Object.defineProperty(ApplicationInfo.prototype, 'uid', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('uid');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('uid', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#splitPublicSourceDirs
Object.defineProperty(ApplicationInfo.prototype, 'splitPublicSourceDirs', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('splitPublicSourceDirs');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('splitPublicSourceDirs', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#publicSourceDir
Object.defineProperty(ApplicationInfo.prototype, 'publicSourceDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('publicSourceDir');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('publicSourceDir', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#theme
Object.defineProperty(ApplicationInfo.prototype, 'theme', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('theme');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('theme', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#largestWidthLimitDp
Object.defineProperty(ApplicationInfo.prototype, 'largestWidthLimitDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('largestWidthLimitDp');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('largestWidthLimitDp', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#permission
Object.defineProperty(ApplicationInfo.prototype, 'permission', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('permission');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('permission', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#targetSdkVersion
Object.defineProperty(ApplicationInfo.prototype, 'targetSdkVersion', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('targetSdkVersion');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('targetSdkVersion', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#requiresSmallestWidthDp
Object.defineProperty(ApplicationInfo.prototype, 'requiresSmallestWidthDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('requiresSmallestWidthDp');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('requiresSmallestWidthDp', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#taskAffinity
Object.defineProperty(ApplicationInfo.prototype, 'taskAffinity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('taskAffinity');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ApplicationInfo') {
				return new ApplicationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('taskAffinity', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function loadDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#loadDescription(android.content.pm.PackageManager)}
 **/
ApplicationInfo.prototype.loadDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ApplicationInfo') {
			return new ApplicationInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#toString()}
 **/
ApplicationInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.ApplicationInfo') {
			return new ApplicationInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#dump(android.util.Printer, java.lang.String)}
 **/
ApplicationInfo.prototype.dump = function() {
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
		if (result.apiName === 'android.content.pm.ApplicationInfo') {
			return new ApplicationInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#describeContents()}
 **/
ApplicationInfo.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ApplicationInfo') {
			return new ApplicationInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ApplicationInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
ApplicationInfo.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ApplicationInfo') {
			return new ApplicationInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ApplicationInfo;
