/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.ActivityInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.ActivityInfo
 * @extends android.content.pm.ComponentInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html}
 **/
var ActivityInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.ActivityInfo')) {
		result = arguments[0];
	}
	else {
		result = ActivityInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.ComponentInfo');
ActivityInfo.prototype = Object.create(SuperClass.prototype);
ActivityInfo.prototype.constructor = ActivityInfo;

Object.defineProperty(ActivityInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ActivityInfo(this.$native.super);
	},
	enumerable: true
});

ActivityInfo.className = 'android.content.pm.ActivityInfo';
ActivityInfo.prototype.className = 'android.content.pm.ActivityInfo';

// class property
Object.defineProperty(ActivityInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.ActivityInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ActivityInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.ActivityInfo');

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
	SubClass.prototype = Object.create(ActivityInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ActivityInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ActivityInfo(Hyperloop.cast('android.content.pm.ActivityInfo', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#DOCUMENT_LAUNCH_NEVER}
 */
ActivityInfo.DOCUMENT_LAUNCH_NEVER = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_LOCALE}
 */
ActivityInfo.CONFIG_LOCALE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#LAUNCH_MULTIPLE}
 */
ActivityInfo.LAUNCH_MULTIPLE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#LAUNCH_SINGLE_INSTANCE}
 */
ActivityInfo.LAUNCH_SINGLE_INSTANCE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_SENSOR_LANDSCAPE}
 */
ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_PORTRAIT}
 */
ActivityInfo.SCREEN_ORIENTATION_PORTRAIT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#PERSIST_ACROSS_REBOOTS}
 */
ActivityInfo.PERSIST_ACROSS_REBOOTS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_SENSOR}
 */
ActivityInfo.SCREEN_ORIENTATION_SENSOR = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_BEHIND}
 */
ActivityInfo.SCREEN_ORIENTATION_BEHIND = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_STATE_NOT_NEEDED}
 */
ActivityInfo.FLAG_STATE_NOT_NEEDED = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_NOSENSOR}
 */
ActivityInfo.SCREEN_ORIENTATION_NOSENSOR = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_FINISH_ON_CLOSE_SYSTEM_DIALOGS}
 */
ActivityInfo.FLAG_FINISH_ON_CLOSE_SYSTEM_DIALOGS = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_USER}
 */
ActivityInfo.SCREEN_ORIENTATION_USER = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_ALWAYS_RETAIN_TASK_STATE}
 */
ActivityInfo.FLAG_ALWAYS_RETAIN_TASK_STATE = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#DOCUMENT_LAUNCH_INTO_EXISTING}
 */
ActivityInfo.DOCUMENT_LAUNCH_INTO_EXISTING = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#UIOPTION_SPLIT_ACTION_BAR_WHEN_NARROW}
 */
ActivityInfo.UIOPTION_SPLIT_ACTION_BAR_WHEN_NARROW = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#PERSIST_ROOT_ONLY}
 */
ActivityInfo.PERSIST_ROOT_ONLY = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_ORIENTATION}
 */
ActivityInfo.CONFIG_ORIENTATION = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#DOCUMENT_LAUNCH_NONE}
 */
ActivityInfo.DOCUMENT_LAUNCH_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_FULL_SENSOR}
 */
ActivityInfo.SCREEN_ORIENTATION_FULL_SENSOR = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_SCREEN_LAYOUT}
 */
ActivityInfo.CONFIG_SCREEN_LAYOUT = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_SENSOR_PORTRAIT}
 */
ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_IMMERSIVE}
 */
ActivityInfo.FLAG_IMMERSIVE = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_RELINQUISH_TASK_IDENTITY}
 */
ActivityInfo.FLAG_RELINQUISH_TASK_IDENTITY = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#DOCUMENT_LAUNCH_ALWAYS}
 */
ActivityInfo.DOCUMENT_LAUNCH_ALWAYS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_DENSITY}
 */
ActivityInfo.CONFIG_DENSITY = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_AUTO_REMOVE_FROM_RECENTS}
 */
ActivityInfo.FLAG_AUTO_REMOVE_FROM_RECENTS = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#LAUNCH_SINGLE_TOP}
 */
ActivityInfo.LAUNCH_SINGLE_TOP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_CLEAR_TASK_ON_LAUNCH}
 */
ActivityInfo.FLAG_CLEAR_TASK_ON_LAUNCH = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_KEYBOARD}
 */
ActivityInfo.CONFIG_KEYBOARD = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_FULL_USER}
 */
ActivityInfo.SCREEN_ORIENTATION_FULL_USER = 13;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_LOCKED}
 */
ActivityInfo.SCREEN_ORIENTATION_LOCKED = 14;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_USER_PORTRAIT}
 */
ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_KEYBOARD_HIDDEN}
 */
ActivityInfo.CONFIG_KEYBOARD_HIDDEN = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_FONT_SCALE}
 */
ActivityInfo.CONFIG_FONT_SCALE = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_MNC}
 */
ActivityInfo.CONFIG_MNC = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_REVERSE_LANDSCAPE}
 */
ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_UNSPECIFIED}
 */
ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_MULTIPROCESS}
 */
ActivityInfo.FLAG_MULTIPROCESS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_USER_LANDSCAPE}
 */
ActivityInfo.SCREEN_ORIENTATION_USER_LANDSCAPE = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_HARDWARE_ACCELERATED}
 */
ActivityInfo.FLAG_HARDWARE_ACCELERATED = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_SMALLEST_SCREEN_SIZE}
 */
ActivityInfo.CONFIG_SMALLEST_SCREEN_SIZE = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_REVERSE_PORTRAIT}
 */
ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_NAVIGATION}
 */
ActivityInfo.CONFIG_NAVIGATION = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_LAYOUT_DIRECTION}
 */
ActivityInfo.CONFIG_LAYOUT_DIRECTION = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_RESUME_WHILE_PAUSING}
 */
ActivityInfo.FLAG_RESUME_WHILE_PAUSING = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#PERSIST_NEVER}
 */
ActivityInfo.PERSIST_NEVER = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_EXCLUDE_FROM_RECENTS}
 */
ActivityInfo.FLAG_EXCLUDE_FROM_RECENTS = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_SCREEN_SIZE}
 */
ActivityInfo.CONFIG_SCREEN_SIZE = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_ALLOW_TASK_REPARENTING}
 */
ActivityInfo.FLAG_ALLOW_TASK_REPARENTING = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_FINISH_ON_TASK_LAUNCH}
 */
ActivityInfo.FLAG_FINISH_ON_TASK_LAUNCH = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_TOUCHSCREEN}
 */
ActivityInfo.CONFIG_TOUCHSCREEN = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_NO_HISTORY}
 */
ActivityInfo.FLAG_NO_HISTORY = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_UI_MODE}
 */
ActivityInfo.CONFIG_UI_MODE = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_LANDSCAPE}
 */
ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#FLAG_SINGLE_USER}
 */
ActivityInfo.FLAG_SINGLE_USER = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#LAUNCH_SINGLE_TASK}
 */
ActivityInfo.LAUNCH_SINGLE_TASK = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CONFIG_MCC}
 */
ActivityInfo.CONFIG_MCC = 1;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#CREATOR
Object.defineProperty(ActivityInfo, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#configChanges
Object.defineProperty(ActivityInfo.prototype, 'configChanges', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('configChanges');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('configChanges', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#uiOptions
Object.defineProperty(ActivityInfo.prototype, 'uiOptions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('uiOptions');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#maxRecents
Object.defineProperty(ActivityInfo.prototype, 'maxRecents', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('maxRecents');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('maxRecents', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#persistableMode
Object.defineProperty(ActivityInfo.prototype, 'persistableMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('persistableMode');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('persistableMode', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#targetActivity
Object.defineProperty(ActivityInfo.prototype, 'targetActivity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('targetActivity');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('targetActivity', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#documentLaunchMode
Object.defineProperty(ActivityInfo.prototype, 'documentLaunchMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('documentLaunchMode');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('documentLaunchMode', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#parentActivityName
Object.defineProperty(ActivityInfo.prototype, 'parentActivityName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('parentActivityName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('parentActivityName', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#flags
Object.defineProperty(ActivityInfo.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('flags');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#screenOrientation
Object.defineProperty(ActivityInfo.prototype, 'screenOrientation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('screenOrientation');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('screenOrientation', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#theme
Object.defineProperty(ActivityInfo.prototype, 'theme', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('theme');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#permission
Object.defineProperty(ActivityInfo.prototype, 'permission', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('permission');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#softInputMode
Object.defineProperty(ActivityInfo.prototype, 'softInputMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('softInputMode');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('softInputMode', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#launchMode
Object.defineProperty(ActivityInfo.prototype, 'launchMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('launchMode');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('launchMode', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ActivityInfo.html#taskAffinity
Object.defineProperty(ActivityInfo.prototype, 'taskAffinity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('taskAffinity');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ActivityInfo') {
				return new ActivityInfo(result);
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
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#toString()}
 **/
ActivityInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.ActivityInfo') {
			return new ActivityInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#dump(android.util.Printer, java.lang.String)}
 **/
ActivityInfo.prototype.dump = function() {
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
		if (result.apiName === 'android.content.pm.ActivityInfo') {
			return new ActivityInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#describeContents()}
 **/
ActivityInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.ActivityInfo') {
			return new ActivityInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
ActivityInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.ActivityInfo') {
			return new ActivityInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getThemeResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ActivityInfo.html#getThemeResource()}
 **/
ActivityInfo.prototype.getThemeResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getThemeResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ActivityInfo') {
			return new ActivityInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ActivityInfo;
