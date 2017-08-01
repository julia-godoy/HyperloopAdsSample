/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.WindowManager$LayoutParams
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.WindowManager');

/**
 * @class android.view.WindowManager$LayoutParams
 * @extends android.view.ViewGroup.LayoutParams 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html}
 **/
var LayoutParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.WindowManager$LayoutParams')) {
		result = arguments[0];
	}
	else {
		result = LayoutParams.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup$LayoutParams');
LayoutParams.prototype = Object.create(SuperClass.prototype);
LayoutParams.prototype.constructor = LayoutParams;

Object.defineProperty(LayoutParams.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new LayoutParams(this.$native.super);
	},
	enumerable: true
});

LayoutParams.className = 'android.view.WindowManager$LayoutParams';
LayoutParams.prototype.className = 'android.view.WindowManager$LayoutParams';

// class property
Object.defineProperty(LayoutParams, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.WindowManager$LayoutParams');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
LayoutParams.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.WindowManager$LayoutParams');

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
	SubClass.prototype = Object.create(LayoutParams.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
LayoutParams.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new LayoutParams(Hyperloop.cast('android.view.WindowManager$LayoutParams', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LAYOUT_INSET_DECOR}
 */
LayoutParams.FLAG_LAYOUT_INSET_DECOR = 65536;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION}
 */
LayoutParams.TYPE_APPLICATION = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TRANSLUCENT_NAVIGATION}
 */
LayoutParams.FLAG_TRANSLUCENT_NAVIGATION = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FORMAT_CHANGED}
 */
LayoutParams.FORMAT_CHANGED = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_PRIORITY_PHONE}
 */
LayoutParams.TYPE_PRIORITY_PHONE = 2007;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TURN_SCREEN_ON}
 */
LayoutParams.FLAG_TURN_SCREEN_ON = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ROTATION_ANIMATION_JUMPCUT}
 */
LayoutParams.ROTATION_ANIMATION_JUMPCUT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_VISIBLE}
 */
LayoutParams.SOFT_INPUT_STATE_VISIBLE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_UNCHANGED}
 */
LayoutParams.SOFT_INPUT_STATE_UNCHANGED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_CHANGED}
 */
LayoutParams.TYPE_CHANGED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LAYOUT_IN_SCREEN}
 */
LayoutParams.FLAG_LAYOUT_IN_SCREEN = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#MEMORY_TYPE_GPU}
 */
LayoutParams.MEMORY_TYPE_GPU = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LAYOUT_ATTACHED_IN_DECOR}
 */
LayoutParams.FLAG_LAYOUT_ATTACHED_IN_DECOR = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SHOW_WALLPAPER}
 */
LayoutParams.FLAG_SHOW_WALLPAPER = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_ALLOW_LOCK_WHILE_SCREEN_ON}
 */
LayoutParams.FLAG_ALLOW_LOCK_WHILE_SCREEN_ON = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_SYSTEM_DIALOG}
 */
LayoutParams.TYPE_SYSTEM_DIALOG = 2008;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAGS_CHANGED}
 */
LayoutParams.FLAGS_CHANGED = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_FORCE_NOT_FULLSCREEN}
 */
LayoutParams.FLAG_FORCE_NOT_FULLSCREEN = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ANIMATION_CHANGED}
 */
LayoutParams.ANIMATION_CHANGED = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TRANSLUCENT_STATUS}
 */
LayoutParams.FLAG_TRANSLUCENT_STATUS = 67108864;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_ADJUST_RESIZE}
 */
LayoutParams.SOFT_INPUT_ADJUST_RESIZE = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FIRST_SUB_WINDOW}
 */
LayoutParams.FIRST_SUB_WINDOW = 1000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_INPUT_METHOD_DIALOG}
 */
LayoutParams.TYPE_INPUT_METHOD_DIALOG = 2012;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#MEMORY_TYPE_NORMAL}
 */
LayoutParams.MEMORY_TYPE_NORMAL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_IS_FORWARD_NAVIGATION}
 */
LayoutParams.SOFT_INPUT_IS_FORWARD_NAVIGATION = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_ALWAYS_HIDDEN}
 */
LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_ADJUST_UNSPECIFIED}
 */
LayoutParams.SOFT_INPUT_ADJUST_UNSPECIFIED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#MEMORY_TYPE_PUSH_BUFFERS}
 */
LayoutParams.MEMORY_TYPE_PUSH_BUFFERS = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION_MEDIA}
 */
LayoutParams.TYPE_APPLICATION_MEDIA = 1001;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#BRIGHTNESS_OVERRIDE_OFF}
 */
LayoutParams.BRIGHTNESS_OVERRIDE_OFF = 0.0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#MEMORY_TYPE_CHANGED}
 */
LayoutParams.MEMORY_TYPE_CHANGED = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_NOT_FOCUSABLE}
 */
LayoutParams.FLAG_NOT_FOCUSABLE = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#BRIGHTNESS_OVERRIDE_FULL}
 */
LayoutParams.BRIGHTNESS_OVERRIDE_FULL = 1.0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#DIM_AMOUNT_CHANGED}
 */
LayoutParams.DIM_AMOUNT_CHANGED = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_DIM_BEHIND}
 */
LayoutParams.FLAG_DIM_BEHIND = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_ALWAYS_VISIBLE}
 */
LayoutParams.SOFT_INPUT_STATE_ALWAYS_VISIBLE = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_KEYGUARD_DIALOG}
 */
LayoutParams.TYPE_KEYGUARD_DIALOG = 2009;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_BASE_APPLICATION}
 */
LayoutParams.TYPE_BASE_APPLICATION = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_ALT_FOCUSABLE_IM}
 */
LayoutParams.FLAG_ALT_FOCUSABLE_IM = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ROTATION_ANIMATION_CROSSFADE}
 */
LayoutParams.ROTATION_ANIMATION_CROSSFADE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SHOW_WHEN_LOCKED}
 */
LayoutParams.FLAG_SHOW_WHEN_LOCKED = 524288;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_SEARCH_BAR}
 */
LayoutParams.TYPE_SEARCH_BAR = 2001;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_HIDDEN}
 */
LayoutParams.SOFT_INPUT_STATE_HIDDEN = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_DISMISS_KEYGUARD}
 */
LayoutParams.FLAG_DISMISS_KEYGUARD = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_SYSTEM_ERROR}
 */
LayoutParams.TYPE_SYSTEM_ERROR = 2010;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FIRST_SYSTEM_WINDOW}
 */
LayoutParams.FIRST_SYSTEM_WINDOW = 2000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ALPHA_CHANGED}
 */
LayoutParams.ALPHA_CHANGED = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FIRST_APPLICATION_WINDOW}
 */
LayoutParams.FIRST_APPLICATION_WINDOW = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SECURE}
 */
LayoutParams.FLAG_SECURE = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_NOT_TOUCHABLE}
 */
LayoutParams.FLAG_NOT_TOUCHABLE = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#LAST_SUB_WINDOW}
 */
LayoutParams.LAST_SUB_WINDOW = 1999;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SCALED}
 */
LayoutParams.FLAG_SCALED = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_ADJUST_NOTHING}
 */
LayoutParams.SOFT_INPUT_ADJUST_NOTHING = 48;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_BLUR_BEHIND}
 */
LayoutParams.FLAG_BLUR_BEHIND = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_ACCESSIBILITY_OVERLAY}
 */
LayoutParams.TYPE_ACCESSIBILITY_OVERLAY = 2032;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LAYOUT_IN_OVERSCAN}
 */
LayoutParams.FLAG_LAYOUT_IN_OVERSCAN = 33554432;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_IGNORE_CHEEK_PRESSES}
 */
LayoutParams.FLAG_IGNORE_CHEEK_PRESSES = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LOCAL_FOCUS_MODE}
 */
LayoutParams.FLAG_LOCAL_FOCUS_MODE = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_DITHER}
 */
LayoutParams.FLAG_DITHER = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SCREEN_BRIGHTNESS_CHANGED}
 */
LayoutParams.SCREEN_BRIGHTNESS_CHANGED = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ROTATION_ANIMATION_CHANGED}
 */
LayoutParams.ROTATION_ANIMATION_CHANGED = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_SYSTEM_ALERT}
 */
LayoutParams.TYPE_SYSTEM_ALERT = 2003;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_WALLPAPER}
 */
LayoutParams.TYPE_WALLPAPER = 2013;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_MODE_CHANGED}
 */
LayoutParams.SOFT_INPUT_MODE_CHANGED = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#MEMORY_TYPE_HARDWARE}
 */
LayoutParams.MEMORY_TYPE_HARDWARE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#BRIGHTNESS_OVERRIDE_NONE}
 */
LayoutParams.BRIGHTNESS_OVERRIDE_NONE = -1.0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_MASK_STATE}
 */
LayoutParams.SOFT_INPUT_MASK_STATE = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SCREEN_ORIENTATION_CHANGED}
 */
LayoutParams.SCREEN_ORIENTATION_CHANGED = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_PRIVATE_PRESENTATION}
 */
LayoutParams.TYPE_PRIVATE_PRESENTATION = 2030;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_TOUCHABLE_WHEN_WAKING}
 */
LayoutParams.FLAG_TOUCHABLE_WHEN_WAKING = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION_SUB_PANEL}
 */
LayoutParams.TYPE_APPLICATION_SUB_PANEL = 1002;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION_ATTACHED_DIALOG}
 */
LayoutParams.TYPE_APPLICATION_ATTACHED_DIALOG = 1003;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_ADJUST_PAN}
 */
LayoutParams.SOFT_INPUT_ADJUST_PAN = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_STATUS_BAR_PANEL}
 */
LayoutParams.TYPE_STATUS_BAR_PANEL = 2014;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_HARDWARE_ACCELERATED}
 */
LayoutParams.FLAG_HARDWARE_ACCELERATED = 16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION_PANEL}
 */
LayoutParams.TYPE_APPLICATION_PANEL = 1000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#LAYOUT_CHANGED}
 */
LayoutParams.LAYOUT_CHANGED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_KEEP_SCREEN_ON}
 */
LayoutParams.FLAG_KEEP_SCREEN_ON = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_FULLSCREEN}
 */
LayoutParams.FLAG_FULLSCREEN = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#LAST_SYSTEM_WINDOW}
 */
LayoutParams.LAST_SYSTEM_WINDOW = 2999;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_APPLICATION_STARTING}
 */
LayoutParams.TYPE_APPLICATION_STARTING = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TITLE_CHANGED}
 */
LayoutParams.TITLE_CHANGED = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_STATUS_BAR}
 */
LayoutParams.TYPE_STATUS_BAR = 2000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS}
 */
LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS = -2147483648;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_LAYOUT_NO_LIMITS}
 */
LayoutParams.FLAG_LAYOUT_NO_LIMITS = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_NOT_TOUCH_MODAL}
 */
LayoutParams.FLAG_NOT_TOUCH_MODAL = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SPLIT_TOUCH}
 */
LayoutParams.FLAG_SPLIT_TOUCH = 8388608;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_INPUT_METHOD}
 */
LayoutParams.TYPE_INPUT_METHOD = 2011;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_MASK_ADJUST}
 */
LayoutParams.SOFT_INPUT_MASK_ADJUST = 240;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_TOAST}
 */
LayoutParams.TYPE_TOAST = 2005;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#LAST_APPLICATION_WINDOW}
 */
LayoutParams.LAST_APPLICATION_WINDOW = 99;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#SOFT_INPUT_STATE_UNSPECIFIED}
 */
LayoutParams.SOFT_INPUT_STATE_UNSPECIFIED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#ROTATION_ANIMATION_ROTATE}
 */
LayoutParams.ROTATION_ANIMATION_ROTATE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_PHONE}
 */
LayoutParams.TYPE_PHONE = 2002;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_WATCH_OUTSIDE_TOUCH}
 */
LayoutParams.FLAG_WATCH_OUTSIDE_TOUCH = 262144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#TYPE_SYSTEM_OVERLAY}
 */
LayoutParams.TYPE_SYSTEM_OVERLAY = 2006;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#CREATOR
Object.defineProperty(LayoutParams, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
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
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#type
Object.defineProperty(LayoutParams.prototype, 'type', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('type');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('type', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#dimAmount
Object.defineProperty(LayoutParams.prototype, 'dimAmount', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('dimAmount');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('dimAmount', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#flags
Object.defineProperty(LayoutParams.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('flags');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
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
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#horizontalWeight
Object.defineProperty(LayoutParams.prototype, 'horizontalWeight', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('horizontalWeight');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('horizontalWeight', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#screenOrientation
Object.defineProperty(LayoutParams.prototype, 'screenOrientation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('screenOrientation');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
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
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#windowAnimations
Object.defineProperty(LayoutParams.prototype, 'windowAnimations', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('windowAnimations');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('windowAnimations', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#horizontalMargin
Object.defineProperty(LayoutParams.prototype, 'horizontalMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('horizontalMargin');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('horizontalMargin', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#verticalWeight
Object.defineProperty(LayoutParams.prototype, 'verticalWeight', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('verticalWeight');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('verticalWeight', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#verticalMargin
Object.defineProperty(LayoutParams.prototype, 'verticalMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('verticalMargin');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('verticalMargin', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#token
Object.defineProperty(LayoutParams.prototype, 'token', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('token');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('token', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#screenBrightness
Object.defineProperty(LayoutParams.prototype, 'screenBrightness', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('screenBrightness');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('screenBrightness', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#x
Object.defineProperty(LayoutParams.prototype, 'x', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('x');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('x', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#y
Object.defineProperty(LayoutParams.prototype, 'y', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('y');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('y', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#memoryType
Object.defineProperty(LayoutParams.prototype, 'memoryType', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('memoryType');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('memoryType', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#preferredDisplayModeId
Object.defineProperty(LayoutParams.prototype, 'preferredDisplayModeId', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('preferredDisplayModeId');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('preferredDisplayModeId', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#buttonBrightness
Object.defineProperty(LayoutParams.prototype, 'buttonBrightness', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('buttonBrightness');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('buttonBrightness', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#preferredRefreshRate
Object.defineProperty(LayoutParams.prototype, 'preferredRefreshRate', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('preferredRefreshRate');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('preferredRefreshRate', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#format
Object.defineProperty(LayoutParams.prototype, 'format', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('format');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('format', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#rotationAnimation
Object.defineProperty(LayoutParams.prototype, 'rotationAnimation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('rotationAnimation');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('rotationAnimation', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#alpha
Object.defineProperty(LayoutParams.prototype, 'alpha', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('alpha');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('alpha', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#packageName
Object.defineProperty(LayoutParams.prototype, 'packageName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('packageName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('packageName', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#systemUiVisibility
Object.defineProperty(LayoutParams.prototype, 'systemUiVisibility', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('systemUiVisibility');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('systemUiVisibility', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#softInputMode
Object.defineProperty(LayoutParams.prototype, 'softInputMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('softInputMode');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
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
// http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#gravity
Object.defineProperty(LayoutParams.prototype, 'gravity', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('gravity');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.WindowManager$LayoutParams') {
				return new LayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('gravity', newValue);
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function mayUseInputMethod
 * @static
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#mayUseInputMethod(int)}
 **/
LayoutParams.mayUseInputMethod = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'mayUseInputMethod',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new LayoutParams(result);
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
 * @function getTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#getTitle()}
 **/
LayoutParams.prototype.getTitle = function() {
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
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new LayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function debug
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#debug(java.lang.String)}
 **/
LayoutParams.prototype.debug = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'debug',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new LayoutParams(result);
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
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#setTitle(java.lang.CharSequence)}
 **/
LayoutParams.prototype.setTitle = function() {
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
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new LayoutParams(result);
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
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#toString()}
 **/
LayoutParams.prototype.toString = function() {
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
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new LayoutParams(result);
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
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#describeContents()}
 **/
LayoutParams.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new LayoutParams(result);
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
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#writeToParcel(android.os.Parcel, int)}
 **/
LayoutParams.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new LayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copyFrom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#copyFrom(android.view.WindowManager$LayoutParams)}
 **/
LayoutParams.prototype.copyFrom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copyFrom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowManager$LayoutParams') {
			return new LayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = LayoutParams;
