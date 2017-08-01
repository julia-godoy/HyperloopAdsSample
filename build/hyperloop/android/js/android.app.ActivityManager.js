/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.ActivityManager
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.ActivityManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html}
 **/
var ActivityManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.ActivityManager')) {
		result = arguments[0];
	}
	else {
		result = ActivityManager.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ActivityManager.prototype = Object.create(SuperClass.prototype);
ActivityManager.prototype.constructor = ActivityManager;

Object.defineProperty(ActivityManager.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ActivityManager(this.$native.super);
	},
	enumerable: true
});

ActivityManager.className = 'android.app.ActivityManager';
ActivityManager.prototype.className = 'android.app.ActivityManager';

// class property
Object.defineProperty(ActivityManager, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.ActivityManager');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ActivityManager.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.ActivityManager');

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
	SubClass.prototype = Object.create(ActivityManager.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ActivityManager.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ActivityManager(Hyperloop.cast('android.app.ActivityManager', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#MOVE_TASK_NO_USER_ACTION}
 */
ActivityManager.MOVE_TASK_NO_USER_ACTION = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#META_HOME_ALTERNATE}
 */
ActivityManager.META_HOME_ALTERNATE = "android.app.home.alternate";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#ACTION_REPORT_HEAP_LIMIT}
 */
ActivityManager.ACTION_REPORT_HEAP_LIMIT = "android.app.action.REPORT_HEAP_LIMIT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#LOCK_TASK_MODE_NONE}
 */
ActivityManager.LOCK_TASK_MODE_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#LOCK_TASK_MODE_LOCKED}
 */
ActivityManager.LOCK_TASK_MODE_LOCKED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#LOCK_TASK_MODE_PINNED}
 */
ActivityManager.LOCK_TASK_MODE_PINNED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#MOVE_TASK_WITH_HOME}
 */
ActivityManager.MOVE_TASK_WITH_HOME = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#RECENT_IGNORE_UNAVAILABLE}
 */
ActivityManager.RECENT_IGNORE_UNAVAILABLE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#RECENT_WITH_EXCLUDED}
 */
ActivityManager.RECENT_WITH_EXCLUDED = 1;

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function isUserAMonkey
 * @static
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#isUserAMonkey()}
 **/
ActivityManager.isUserAMonkey = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isUserAMonkey',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRunningInTestHarness
 * @static
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#isRunningInTestHarness()}
 **/
ActivityManager.isRunningInTestHarness = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isRunningInTestHarness',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMyMemoryState
 * @static
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getMyMemoryState(android.app.ActivityManager$RunningAppProcessInfo)}
 **/
ActivityManager.getMyMemoryState = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getMyMemoryState',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
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
 * @function getRunningAppProcesses
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getRunningAppProcesses()}
 **/
ActivityManager.prototype.getRunningAppProcesses = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRunningAppProcesses',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLauncherLargeIconDensity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getLauncherLargeIconDensity()}
 **/
ActivityManager.prototype.getLauncherLargeIconDensity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLauncherLargeIconDensity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setWatchHeapLimit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#setWatchHeapLimit(long)}
 **/
ActivityManager.prototype.setWatchHeapLimit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setWatchHeapLimit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearWatchHeapLimit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#clearWatchHeapLimit()}
 **/
ActivityManager.prototype.clearWatchHeapLimit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearWatchHeapLimit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMemoryInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getMemoryInfo(android.app.ActivityManager$MemoryInfo)}
 **/
ActivityManager.prototype.getMemoryInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMemoryInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function moveTaskToFront
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#moveTaskToFront(int, int)}
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#moveTaskToFront(int, int, android.os.Bundle)}
 **/
ActivityManager.prototype.moveTaskToFront = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'moveTaskToFront',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRunningServices
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getRunningServices(int)}
 **/
ActivityManager.prototype.getRunningServices = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRunningServices',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addAppTask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#addAppTask(android.app.Activity, android.content.Intent, android.app.ActivityManager$TaskDescription, android.graphics.Bitmap)}
 **/
ActivityManager.prototype.addAppTask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addAppTask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProcessMemoryInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getProcessMemoryInfo(int[])}
 **/
ActivityManager.prototype.getProcessMemoryInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProcessMemoryInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMemoryClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getMemoryClass()}
 **/
ActivityManager.prototype.getMemoryClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMemoryClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLowRamDevice
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#isLowRamDevice()}
 **/
ActivityManager.prototype.isLowRamDevice = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLowRamDevice',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeviceConfigurationInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getDeviceConfigurationInfo()}
 **/
ActivityManager.prototype.getDeviceConfigurationInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeviceConfigurationInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearApplicationUserData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#clearApplicationUserData()}
 **/
ActivityManager.prototype.clearApplicationUserData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearApplicationUserData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInLockTaskMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#isInLockTaskMode()}
 **/
ActivityManager.prototype.isInLockTaskMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInLockTaskMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRecentTasks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getRecentTasks(int, int)}
 **/
ActivityManager.prototype.getRecentTasks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRecentTasks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function restartPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#restartPackage(java.lang.String)}
 **/
ActivityManager.prototype.restartPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'restartPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function killBackgroundProcesses
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#killBackgroundProcesses(java.lang.String)}
 **/
ActivityManager.prototype.killBackgroundProcesses = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'killBackgroundProcesses',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRunningTasks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getRunningTasks(int)}
 **/
ActivityManager.prototype.getRunningTasks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRunningTasks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLockTaskModeState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getLockTaskModeState()}
 **/
ActivityManager.prototype.getLockTaskModeState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLockTaskModeState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLauncherLargeIconSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getLauncherLargeIconSize()}
 **/
ActivityManager.prototype.getLauncherLargeIconSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLauncherLargeIconSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLargeMemoryClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getLargeMemoryClass()}
 **/
ActivityManager.prototype.getLargeMemoryClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLargeMemoryClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAppTasks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getAppTasks()}
 **/
ActivityManager.prototype.getAppTasks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAppTasks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAppTaskThumbnailSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getAppTaskThumbnailSize()}
 **/
ActivityManager.prototype.getAppTaskThumbnailSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAppTaskThumbnailSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProcessesInErrorState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getProcessesInErrorState()}
 **/
ActivityManager.prototype.getProcessesInErrorState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProcessesInErrorState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dumpPackageState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#dumpPackageState(java.io.FileDescriptor, java.lang.String)}
 **/
ActivityManager.prototype.dumpPackageState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dumpPackageState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRunningServiceControlPanel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActivityManager.html#getRunningServiceControlPanel(android.content.ComponentName)}
 **/
ActivityManager.prototype.getRunningServiceControlPanel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRunningServiceControlPanel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActivityManager') {
			return new ActivityManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ActivityManager;
