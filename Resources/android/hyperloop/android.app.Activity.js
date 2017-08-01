/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.Activity
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.Activity
 * @extends android.view.ContextThemeWrapper 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/Activity.html}
 **/
var Activity = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.Activity')) {
		result = arguments[0];
	}
	else {
		result = Activity.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ContextThemeWrapper');
Activity.prototype = Object.create(SuperClass.prototype);
Activity.prototype.constructor = Activity;

Object.defineProperty(Activity.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Activity(this.$native.super);
	},
	enumerable: true
});

Activity.className = 'android.app.Activity';
Activity.prototype.className = 'android.app.Activity';

// class property
Object.defineProperty(Activity, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.Activity');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Activity.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.Activity');

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
	SubClass.prototype = Object.create(Activity.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Activity.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Activity(Hyperloop.cast('android.app.Activity', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#RESULT_CANCELED}
 */
Activity.RESULT_CANCELED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#DEFAULT_KEYS_SEARCH_LOCAL}
 */
Activity.DEFAULT_KEYS_SEARCH_LOCAL = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#DEFAULT_KEYS_SHORTCUT}
 */
Activity.DEFAULT_KEYS_SHORTCUT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#RESULT_OK}
 */
Activity.RESULT_OK = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#DEFAULT_KEYS_DIALER}
 */
Activity.DEFAULT_KEYS_DIALER = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#RESULT_FIRST_USER}
 */
Activity.RESULT_FIRST_USER = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#DEFAULT_KEYS_DISABLE}
 */
Activity.DEFAULT_KEYS_DISABLE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#DEFAULT_KEYS_SEARCH_GLOBAL}
 */
Activity.DEFAULT_KEYS_SEARCH_GLOBAL = 4;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/app/Activity.html#FOCUSED_STATE_SET
Object.defineProperty(Activity, 'FOCUSED_STATE_SET', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('FOCUSED_STATE_SET');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.app.Activity') {
				return new Activity(result);
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

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onChildTitleChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onChildTitleChanged(android.app.Activity, java.lang.CharSequence)}
 **/
Activity.prototype.onChildTitleChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onChildTitleChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChangingConfigurations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getChangingConfigurations()}
 **/
Activity.prototype.getChangingConfigurations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChangingConfigurations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSearchRequested
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onSearchRequested(android.view.SearchEvent)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onSearchRequested()}
 **/
Activity.prototype.onSearchRequested = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSearchRequested',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function navigateUpToFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#navigateUpToFromChild(android.app.Activity, android.content.Intent)}
 **/
Activity.prototype.navigateUpToFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'navigateUpToFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeDialog
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#removeDialog(int)}
 **/
Activity.prototype.removeDialog = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeDialog',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postponeEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#postponeEnterTransition()}
 **/
Activity.prototype.postponeEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postponeEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setProgressBarIndeterminate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setProgressBarIndeterminate(boolean)}
 **/
Activity.prototype.setProgressBarIndeterminate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setProgressBarIndeterminate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActivityFromFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityFromFragment(android.app.Fragment, android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityFromFragment(android.app.Fragment, android.content.Intent, int, android.os.Bundle)}
 **/
Activity.prototype.startActivityFromFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivityFromFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchGenericMotionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchGenericMotionEvent(android.view.MotionEvent)}
 **/
Activity.prototype.dispatchGenericMotionEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchGenericMotionEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTaskDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setTaskDescription(android.app.ActivityManager$TaskDescription)}
 **/
Activity.prototype.setTaskDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTaskDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onBackPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onBackPressed()}
 **/
Activity.prototype.onBackPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onBackPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRestart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onRestart()}
 **/
Activity.prototype.onRestart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRestart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shouldUpRecreateTask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#shouldUpRecreateTask(android.content.Intent)}
 **/
Activity.prototype.shouldUpRecreateTask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shouldUpRecreateTask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finishAffinity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishAffinity()}
 **/
Activity.prototype.finishAffinity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishAffinity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setIntent(android.content.Intent)}
 **/
Activity.prototype.setIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchPopulateAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchPopulateAccessibilityEvent(android.view.accessibility.AccessibilityEvent)}
 **/
Activity.prototype.dispatchPopulateAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchPopulateAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLoaderManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getLoaderManager()}
 **/
Activity.prototype.getLoaderManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLoaderManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setActionBar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setActionBar(android.widget.Toolbar)}
 **/
Activity.prototype.setActionBar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setActionBar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSender(android.content.IntentSender, android.content.Intent, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSender(android.content.IntentSender, android.content.Intent, int, int, int, android.os.Bundle)}
 **/
Activity.prototype.startIntentSender = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function showAssist
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#showAssist(android.os.Bundle)}
 **/
Activity.prototype.showAssist = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showAssist',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function closeOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#closeOptionsMenu()}
 **/
Activity.prototype.closeOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'closeOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#openOptionsMenu()}
 **/
Activity.prototype.openOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCallingActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getCallingActivity()}
 **/
Activity.prototype.getCallingActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCallingActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onWindowAttributesChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onWindowAttributesChanged(android.view.WindowManager$LayoutParams)}
 **/
Activity.prototype.onWindowAttributesChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onWindowAttributesChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#invalidateOptionsMenu()}
 **/
Activity.prototype.invalidateOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setProgressBarVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setProgressBarVisibility(boolean)}
 **/
Activity.prototype.setProgressBarVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setProgressBarVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateNavigateUpTaskStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateNavigateUpTaskStack(android.app.TaskStackBuilder)}
 **/
Activity.prototype.onCreateNavigateUpTaskStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateNavigateUpTaskStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getCurrentFocus()}
 **/
Activity.prototype.getCurrentFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchKeyEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchKeyEvent(android.view.KeyEvent)}
 **/
Activity.prototype.dispatchKeyEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchKeyEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setProgress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setProgress(int)}
 **/
Activity.prototype.setProgress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setProgress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVolumeControlStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setVolumeControlStream(int)}
 **/
Activity.prototype.setVolumeControlStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVolumeControlStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onOptionsMenuClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onOptionsMenuClosed(android.view.Menu)}
 **/
Activity.prototype.onOptionsMenuClosed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onOptionsMenuClosed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFinishOnTouchOutside
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setFinishOnTouchOutside(boolean)}
 **/
Activity.prototype.setFinishOnTouchOutside = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFinishOnTouchOutside',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAttachedToWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onAttachedToWindow()}
 **/
Activity.prototype.onAttachedToWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAttachedToWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplication
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getApplication()}
 **/
Activity.prototype.getApplication = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getApplication',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPrepareOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPrepareOptionsMenu(android.view.Menu)}
 **/
Activity.prototype.onPrepareOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPrepareOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setProgressBarIndeterminateVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setProgressBarIndeterminateVisibility(boolean)}
 **/
Activity.prototype.setProgressBarIndeterminateVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setProgressBarIndeterminateVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getComponentName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getComponentName()}
 **/
Activity.prototype.getComponentName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getComponentName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getParent()}
 **/
Activity.prototype.getParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stopManagingCursor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#stopManagingCursor(android.database.Cursor)}
 **/
Activity.prototype.stopManagingCursor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stopManagingCursor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onTrimMemory(int)}
 **/
Activity.prototype.onTrimMemory = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParentActivityIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getParentActivityIntent()}
 **/
Activity.prototype.getParentActivityIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParentActivityIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onActionModeFinished
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onActionModeFinished(android.view.ActionMode)}
 **/
Activity.prototype.onActionModeFinished = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActionModeFinished',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function recreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#recreate()}
 **/
Activity.prototype.recreate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'recreate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateDialog
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateDialog(int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateDialog(int, android.os.Bundle)}
 **/
Activity.prototype.onCreateDialog = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateDialog',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActivityForResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityForResult(android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityForResult(android.content.Intent, int, android.os.Bundle)}
 **/
Activity.prototype.startActivityForResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivityForResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTitleChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onTitleChanged(java.lang.CharSequence, int)}
 **/
Activity.prototype.onTitleChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTitleChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onActivityReenter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onActivityReenter(int, android.content.Intent)}
 **/
Activity.prototype.onActivityReenter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActivityReenter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onEnterAnimationComplete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onEnterAnimationComplete()}
 **/
Activity.prototype.onEnterAnimationComplete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onEnterAnimationComplete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onNewIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onNewIntent(android.content.Intent)}
 **/
Activity.prototype.onNewIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNewIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActionBar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getActionBar()}
 **/
Activity.prototype.getActionBar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActionBar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreatePanelView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreatePanelView(int)}
 **/
Activity.prototype.onCreatePanelView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreatePanelView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyMultiple
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onKeyMultiple(int, int, android.view.KeyEvent)}
 **/
Activity.prototype.onKeyMultiple = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyMultiple',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFragmentManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getFragmentManager()}
 **/
Activity.prototype.getFragmentManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFragmentManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPanelClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPanelClosed(int, android.view.Menu)}
 **/
Activity.prototype.onPanelClosed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPanelClosed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyShortcut
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onKeyShortcut(int, android.view.KeyEvent)}
 **/
Activity.prototype.onKeyShortcut = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyShortcut',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchTrackballEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchTrackballEvent(android.view.MotionEvent)}
 **/
Activity.prototype.dispatchTrackballEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchTrackballEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFeatureDrawableAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setFeatureDrawableAlpha(int, int)}
 **/
Activity.prototype.setFeatureDrawableAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFeatureDrawableAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onVisibleBehindCanceled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onVisibleBehindCanceled()}
 **/
Activity.prototype.onVisibleBehindCanceled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onVisibleBehindCanceled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addContentView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#addContentView(android.view.View, android.view.ViewGroup$LayoutParams)}
 **/
Activity.prototype.addContentView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addContentView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onActivityResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onActivityResult(int, int, android.content.Intent)}
 **/
Activity.prototype.onActivityResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActivityResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindowManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getWindowManager()}
 **/
Activity.prototype.getWindowManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindowManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRequestedOrientation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getRequestedOrientation()}
 **/
Activity.prototype.getRequestedOrientation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRequestedOrientation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function triggerSearch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#triggerSearch(java.lang.String, android.os.Bundle)}
 **/
Activity.prototype.triggerSearch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'triggerSearch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finish
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finish()}
 **/
Activity.prototype.finish = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finish',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isChild()}
 **/
Activity.prototype.isChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVoiceInteraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isVoiceInteraction()}
 **/
Activity.prototype.isVoiceInteraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVoiceInteraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVoiceInteractionRoot
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isVoiceInteractionRoot()}
 **/
Activity.prototype.isVoiceInteractionRoot = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVoiceInteractionRoot',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchKeyShortcutEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchKeyShortcutEvent(android.view.KeyEvent)}
 **/
Activity.prototype.dispatchKeyShortcutEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchKeyShortcutEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onProvideReferrer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onProvideReferrer()}
 **/
Activity.prototype.onProvideReferrer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideReferrer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVisible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setVisible(boolean)}
 **/
Activity.prototype.setVisible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVisible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDestroyed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isDestroyed()}
 **/
Activity.prototype.isDestroyed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDestroyed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setTitle(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setTitle(int)}
 **/
Activity.prototype.setTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVoiceInteractor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getVoiceInteractor()}
 **/
Activity.prototype.getVoiceInteractor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVoiceInteractor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stopLockTask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#stopLockTask()}
 **/
Activity.prototype.stopLockTask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stopLockTask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivities(android.content.Intent[])}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivities(android.content.Intent[], android.os.Bundle)}
 **/
Activity.prototype.startActivities = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyLongPress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onKeyLongPress(int, android.view.KeyEvent)}
 **/
Activity.prototype.onKeyLongPress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyLongPress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startLockTask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startLockTask()}
 **/
Activity.prototype.startLockTask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startLockTask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onGenericMotionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onGenericMotionEvent(android.view.MotionEvent)}
 **/
Activity.prototype.onGenericMotionEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onGenericMotionEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMenuInflater
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getMenuInflater()}
 **/
Activity.prototype.getMenuInflater = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMenuInflater',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isChangingConfigurations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isChangingConfigurations()}
 **/
Activity.prototype.isChangingConfigurations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isChangingConfigurations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isImmersive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isImmersive()}
 **/
Activity.prototype.isImmersive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isImmersive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRequestedOrientation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setRequestedOrientation(int)}
 **/
Activity.prototype.setRequestedOrientation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRequestedOrientation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEnterSharedElementCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setEnterSharedElementCallback(android.app.SharedElementCallback)}
 **/
Activity.prototype.setEnterSharedElementCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEnterSharedElementCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dismissDialog
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dismissDialog(int)}
 **/
Activity.prototype.dismissDialog = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dismissDialog',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getWindow()}
 **/
Activity.prototype.getWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRestoreInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onRestoreInstanceState(android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onRestoreInstanceState(android.os.Bundle, android.os.PersistableBundle)}
 **/
Activity.prototype.onRestoreInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRestoreInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getLocalClassName()}
 **/
Activity.prototype.getLocalClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRequestPermissionsResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onRequestPermissionsResult(int, java.lang.String[], int[])}
 **/
Activity.prototype.onRequestPermissionsResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRequestPermissionsResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitleColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setTitleColor(int)}
 **/
Activity.prototype.setTitleColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitleColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function closeContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#closeContextMenu()}
 **/
Activity.prototype.closeContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'closeContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function moveTaskToBack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#moveTaskToBack(boolean)}
 **/
Activity.prototype.moveTaskToBack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'moveTaskToBack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dispatchTouchEvent(android.view.MotionEvent)}
 **/
Activity.prototype.dispatchTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onActionModeStarted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onActionModeStarted(android.view.ActionMode)}
 **/
Activity.prototype.onActionModeStarted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onActionModeStarted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPostCreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPostCreate(android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPostCreate(android.os.Bundle, android.os.PersistableBundle)}
 **/
Activity.prototype.onPostCreate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPostCreate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function showDialog
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#showDialog(int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#showDialog(int, android.os.Bundle)}
 **/
Activity.prototype.showDialog = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showDialog',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSearchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getSearchEvent()}
 **/
Activity.prototype.getSearchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSearchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTaskId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getTaskId()}
 **/
Activity.prototype.getTaskId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTaskId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function navigateUpTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#navigateUpTo(android.content.Intent)}
 **/
Activity.prototype.navigateUpTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'navigateUpTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTitleColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getTitleColor()}
 **/
Activity.prototype.getTitleColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTitleColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFeatureDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setFeatureDrawable(int, android.graphics.drawable.Drawable)}
 **/
Activity.prototype.setFeatureDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFeatureDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestWindowFeature
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#requestWindowFeature(int)}
 **/
Activity.prototype.requestWindowFeature = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestWindowFeature',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finishActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishActivity(int)}
 **/
Activity.prototype.finishActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function managedQuery
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#managedQuery(android.net.Uri, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String)}
 **/
Activity.prototype.managedQuery = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'managedQuery',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finishFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishFromChild(android.app.Activity)}
 **/
Activity.prototype.finishFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function takeKeyEvents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#takeKeyEvents(boolean)}
 **/
Activity.prototype.takeKeyEvents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'takeKeyEvents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function overridePendingTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#overridePendingTransition(int, int)}
 **/
Activity.prototype.overridePendingTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'overridePendingTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterForContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#unregisterForContextMenu(android.view.View)}
 **/
Activity.prototype.unregisterForContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterForContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findViewById
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#findViewById(int)}
 **/
Activity.prototype.findViewById = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findViewById',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onNavigateUp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onNavigateUp()}
 **/
Activity.prototype.onNavigateUp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNavigateUp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#requestPermissions(java.lang.String[], int)}
 **/
Activity.prototype.requestPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onNavigateUpFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onNavigateUpFromChild(android.app.Activity)}
 **/
Activity.prototype.onNavigateUpFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onNavigateUpFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function shouldShowRequestPermissionRationale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#shouldShowRequestPermissionRationale(java.lang.String)}
 **/
Activity.prototype.shouldShowRequestPermissionRationale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'shouldShowRequestPermissionRationale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTaskRoot
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isTaskRoot()}
 **/
Activity.prototype.isTaskRoot = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTaskRoot',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onProvideAssistData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onProvideAssistData(android.os.Bundle)}
 **/
Activity.prototype.onProvideAssistData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideAssistData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFinishing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#isFinishing()}
 **/
Activity.prototype.isFinishing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFinishing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getIntent()}
 **/
Activity.prototype.getIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onStop()}
 **/
Activity.prototype.onStop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onWindowStartingActionMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onWindowStartingActionMode(android.view.ActionMode$Callback)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onWindowStartingActionMode(android.view.ActionMode$Callback, int)}
 **/
Activity.prototype.onWindowStartingActionMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onWindowStartingActionMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActivityIfNeeded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityIfNeeded(android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityIfNeeded(android.content.Intent, int, android.os.Bundle)}
 **/
Activity.prototype.startActivityIfNeeded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivityIfNeeded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExitSharedElementCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setExitSharedElementCallback(android.app.SharedElementCallback)}
 **/
Activity.prototype.setExitSharedElementCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExitSharedElementCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPostResume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPostResume()}
 **/
Activity.prototype.onPostResume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPostResume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreatePanelMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreatePanelMenu(int, android.view.Menu)}
 **/
Activity.prototype.onCreatePanelMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreatePanelMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPreparePanel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPreparePanel(int, android.view.View, android.view.Menu)}
 **/
Activity.prototype.onPreparePanel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPreparePanel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSecondaryProgress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setSecondaryProgress(int)}
 **/
Activity.prototype.setSecondaryProgress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSecondaryProgress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getSystemService(java.lang.String)}
 **/
Activity.prototype.getSystemService = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startSearch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startSearch(java.lang.String, boolean, android.os.Bundle, boolean)}
 **/
Activity.prototype.startSearch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startSearch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultKeyMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setDefaultKeyMode(int)}
 **/
Activity.prototype.setDefaultKeyMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDefaultKeyMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onContextItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onContextItemSelected(android.view.MenuItem)}
 **/
Activity.prototype.onContextItemSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onContextItemSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPause
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPause()}
 **/
Activity.prototype.onPause = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPause',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onApplyThemeResource(android.content.res.Resources$Theme, int, boolean)}
 **/
Activity.prototype.onApplyThemeResource = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onProvideAssistContent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onProvideAssistContent(android.app.assist.AssistContent)}
 **/
Activity.prototype.onProvideAssistContent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideAssistContent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finishActivityFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishActivityFromChild(android.app.Activity, int)}
 **/
Activity.prototype.finishActivityFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishActivityFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivity(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivity(android.content.Intent, android.os.Bundle)}
 **/
Activity.prototype.startActivity = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentTransitionManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setContentTransitionManager(android.transition.TransitionManager)}
 **/
Activity.prototype.setContentTransitionManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentTransitionManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reportFullyDrawn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#reportFullyDrawn()}
 **/
Activity.prototype.reportFullyDrawn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reportFullyDrawn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutInflater
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getLayoutInflater()}
 **/
Activity.prototype.getLayoutInflater = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutInflater',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActionMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActionMode(android.view.ActionMode$Callback)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActionMode(android.view.ActionMode$Callback, int)}
 **/
Activity.prototype.startActionMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActionMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRetainNonConfigurationInstance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onRetainNonConfigurationInstance()}
 **/
Activity.prototype.onRetainNonConfigurationInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRetainNonConfigurationInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReferrer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getReferrer()}
 **/
Activity.prototype.getReferrer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReferrer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDestroy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onDestroy()}
 **/
Activity.prototype.onDestroy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDestroy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyUp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onKeyUp(int, android.view.KeyEvent)}
 **/
Activity.prototype.onKeyUp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyUp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMenuOpened
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onMenuOpened(int, android.view.Menu)}
 **/
Activity.prototype.onMenuOpened = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMenuOpened',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finishAfterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishAfterTransition()}
 **/
Activity.prototype.finishAfterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishAfterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startManagingCursor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startManagingCursor(android.database.Cursor)}
 **/
Activity.prototype.startManagingCursor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startManagingCursor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPrepareDialog
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPrepareDialog(int, android.app.Dialog)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPrepareDialog(int, android.app.Dialog, android.os.Bundle)}
 **/
Activity.prototype.onPrepareDialog = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPrepareDialog',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#openContextMenu(android.view.View)}
 **/
Activity.prototype.openContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCallingPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getCallingPackage()}
 **/
Activity.prototype.getCallingPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCallingPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMediaController
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setMediaController(android.media.session.MediaController)}
 **/
Activity.prototype.setMediaController = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMediaController',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAttachFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onAttachFragment(android.app.Fragment)}
 **/
Activity.prototype.onAttachFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAttachFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSaveInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onSaveInstanceState(android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onSaveInstanceState(android.os.Bundle, android.os.PersistableBundle)}
 **/
Activity.prototype.onSaveInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSaveInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasWindowFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#hasWindowFocus()}
 **/
Activity.prototype.hasWindowFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasWindowFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateOptionsMenu(android.view.Menu)}
 **/
Activity.prototype.onCreateOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVolumeControlStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getVolumeControlStream()}
 **/
Activity.prototype.getVolumeControlStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVolumeControlStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setResult(int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setResult(int, android.content.Intent)}
 **/
Activity.prototype.setResult = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startIntentSenderForResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSenderForResult(android.content.IntentSender, int, android.content.Intent, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSenderForResult(android.content.IntentSender, int, android.content.Intent, int, int, int, android.os.Bundle)}
 **/
Activity.prototype.startIntentSenderForResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startIntentSenderForResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onLowMemory()}
 **/
Activity.prototype.onLowMemory = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onOptionsItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onOptionsItemSelected(android.view.MenuItem)}
 **/
Activity.prototype.onOptionsItemSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onOptionsItemSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateThumbnail
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateThumbnail(android.graphics.Bitmap, android.graphics.Canvas)}
 **/
Activity.prototype.onCreateThumbnail = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateThumbnail',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onStart()}
 **/
Activity.prototype.onStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getTitle()}
 **/
Activity.prototype.getTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startNextMatchingActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startNextMatchingActivity(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startNextMatchingActivity(android.content.Intent, android.os.Bundle)}
 **/
Activity.prototype.startNextMatchingActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startNextMatchingActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function releaseInstance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#releaseInstance()}
 **/
Activity.prototype.releaseInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'releaseInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onUserInteraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onUserInteraction()}
 **/
Activity.prototype.onUserInteraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onUserInteraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTrackballEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onTrackballEvent(android.view.MotionEvent)}
 **/
Activity.prototype.onTrackballEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTrackballEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onTouchEvent(android.view.MotionEvent)}
 **/
Activity.prototype.onTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onUserLeaveHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onUserLeaveHint()}
 **/
Activity.prototype.onUserLeaveHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onUserLeaveHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onResume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onResume()}
 **/
Activity.prototype.onResume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onResume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPreferences
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getPreferences(int)}
 **/
Activity.prototype.getPreferences = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPreferences',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentTransitionManager
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getContentTransitionManager()}
 **/
Activity.prototype.getContentTransitionManager = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentTransitionManager',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onContextMenuClosed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onContextMenuClosed(android.view.Menu)}
 **/
Activity.prototype.onContextMenuClosed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onContextMenuClosed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateView(java.lang.String, android.content.Context, android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateView(android.view.View, java.lang.String, android.content.Context, android.util.AttributeSet)}
 **/
Activity.prototype.onCreateView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMediaController
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getMediaController()}
 **/
Activity.prototype.getMediaController = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMediaController',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onConfigurationChanged(android.content.res.Configuration)}
 **/
Activity.prototype.onConfigurationChanged = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onContentChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onContentChanged()}
 **/
Activity.prototype.onContentChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onContentChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFeatureDrawableResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setFeatureDrawableResource(int, int)}
 **/
Activity.prototype.setFeatureDrawableResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFeatureDrawableResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateContextMenu(android.view.ContextMenu, android.view.View, android.view.ContextMenu$ContextMenuInfo)}
 **/
Activity.prototype.onCreateContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPrepareNavigateUpTaskStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onPrepareNavigateUpTaskStack(android.app.TaskStackBuilder)}
 **/
Activity.prototype.onPrepareNavigateUpTaskStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPrepareNavigateUpTaskStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLastNonConfigurationInstance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getLastNonConfigurationInstance()}
 **/
Activity.prototype.getLastNonConfigurationInstance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLastNonConfigurationInstance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onKeyDown
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onKeyDown(int, android.view.KeyEvent)}
 **/
Activity.prototype.onKeyDown = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onKeyDown',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFeatureDrawableUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setFeatureDrawableUri(int, android.net.Uri)}
 **/
Activity.prototype.setFeatureDrawableUri = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFeatureDrawableUri',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createPendingResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#createPendingResult(int, android.content.Intent, int)}
 **/
Activity.prototype.createPendingResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createPendingResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerForContextMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#registerForContextMenu(android.view.View)}
 **/
Activity.prototype.registerForContextMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerForContextMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
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
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#dump(java.lang.String, java.io.FileDescriptor, java.io.PrintWriter, java.lang.String[])}
 **/
Activity.prototype.dump = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function showLockTaskEscapeMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#showLockTaskEscapeMessage()}
 **/
Activity.prototype.showLockTaskEscapeMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showLockTaskEscapeMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentScene
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#getContentScene()}
 **/
Activity.prototype.getContentScene = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentScene',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startIntentSenderFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSenderFromChild(android.app.Activity, android.content.IntentSender, int, android.content.Intent, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startIntentSenderFromChild(android.app.Activity, android.content.IntentSender, int, android.content.Intent, int, int, int, android.os.Bundle)}
 **/
Activity.prototype.startIntentSenderFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startIntentSenderFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreate(android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreate(android.os.Bundle, android.os.PersistableBundle)}
 **/
Activity.prototype.onCreate = function() {
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
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startPostponedEnterTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startPostponedEnterTransition()}
 **/
Activity.prototype.startPostponedEnterTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startPostponedEnterTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onWindowFocusChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onWindowFocusChanged(boolean)}
 **/
Activity.prototype.onWindowFocusChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onWindowFocusChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startActivityFromChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityFromChild(android.app.Activity, android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#startActivityFromChild(android.app.Activity, android.content.Intent, int, android.os.Bundle)}
 **/
Activity.prototype.startActivityFromChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivityFromChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMenuItemSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onMenuItemSelected(int, android.view.MenuItem)}
 **/
Activity.prototype.onMenuItemSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMenuItemSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onCreateDescription()}
 **/
Activity.prototype.onCreateDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestVisibleBehind
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#requestVisibleBehind(boolean)}
 **/
Activity.prototype.requestVisibleBehind = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'requestVisibleBehind',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function runOnUiThread
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#runOnUiThread(java.lang.Runnable)}
 **/
Activity.prototype.runOnUiThread = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'runOnUiThread',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setContentView(int)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setContentView(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setContentView(android.view.View, android.view.ViewGroup$LayoutParams)}
 **/
Activity.prototype.setContentView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setImmersive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#setImmersive(boolean)}
 **/
Activity.prototype.setImmersive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setImmersive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDetachedFromWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onDetachedFromWindow()}
 **/
Activity.prototype.onDetachedFromWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDetachedFromWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finishAndRemoveTask
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#finishAndRemoveTask()}
 **/
Activity.prototype.finishAndRemoveTask = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishAndRemoveTask',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onStateNotSaved
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/Activity.html#onStateNotSaved()}
 **/
Activity.prototype.onStateNotSaved = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onStateNotSaved',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.Activity') {
			return new Activity(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Activity;
