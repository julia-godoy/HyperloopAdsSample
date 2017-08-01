/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.Configuration
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.res');

/**
 * @class android.content.res.Configuration
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html}
 **/
var Configuration = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.res.Configuration')) {
		result = arguments[0];
	}
	else {
		result = Configuration.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Configuration.prototype = Object.create(SuperClass.prototype);
Configuration.prototype.constructor = Configuration;

Object.defineProperty(Configuration.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Configuration(this.$native.super);
	},
	enumerable: true
});

Configuration.className = 'android.content.res.Configuration';
Configuration.prototype.className = 'android.content.res.Configuration';

// class property
Object.defineProperty(Configuration, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.res.Configuration');
	},
	enumerable: true,
	configurable: false
});


// Cast
Configuration.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Configuration(Hyperloop.cast('android.content.res.Configuration', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARDHIDDEN_NO}
 */
Configuration.KEYBOARDHIDDEN_NO = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARD_QWERTY}
 */
Configuration.KEYBOARD_QWERTY = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_UNDEFINED}
 */
Configuration.SCREENLAYOUT_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_DESK}
 */
Configuration.UI_MODE_TYPE_DESK = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_MASK}
 */
Configuration.SCREENLAYOUT_SIZE_MASK = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_CAR}
 */
Configuration.UI_MODE_TYPE_CAR = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#ORIENTATION_UNDEFINED}
 */
Configuration.ORIENTATION_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_ROUND_MASK}
 */
Configuration.SCREENLAYOUT_ROUND_MASK = 768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREEN_HEIGHT_DP_UNDEFINED}
 */
Configuration.SCREEN_HEIGHT_DP_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_NIGHT_MASK}
 */
Configuration.UI_MODE_NIGHT_MASK = 48;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#HARDKEYBOARDHIDDEN_YES}
 */
Configuration.HARDKEYBOARDHIDDEN_YES = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATION_TRACKBALL}
 */
Configuration.NAVIGATION_TRACKBALL = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#ORIENTATION_PORTRAIT}
 */
Configuration.ORIENTATION_PORTRAIT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATIONHIDDEN_UNDEFINED}
 */
Configuration.NAVIGATIONHIDDEN_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATION_UNDEFINED}
 */
Configuration.NAVIGATION_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_WATCH}
 */
Configuration.UI_MODE_TYPE_WATCH = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_TELEVISION}
 */
Configuration.UI_MODE_TYPE_TELEVISION = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LONG_NO}
 */
Configuration.SCREENLAYOUT_LONG_NO = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_NIGHT_NO}
 */
Configuration.UI_MODE_NIGHT_NO = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARD_12KEY}
 */
Configuration.KEYBOARD_12KEY = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_NORMAL}
 */
Configuration.UI_MODE_TYPE_NORMAL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATIONHIDDEN_NO}
 */
Configuration.NAVIGATIONHIDDEN_NO = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#MNC_ZERO}
 */
Configuration.MNC_ZERO = 65535;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LONG_UNDEFINED}
 */
Configuration.SCREENLAYOUT_LONG_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_ROUND_UNDEFINED}
 */
Configuration.SCREENLAYOUT_ROUND_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATION_NONAV}
 */
Configuration.NAVIGATION_NONAV = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_XLARGE}
 */
Configuration.SCREENLAYOUT_SIZE_XLARGE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#DENSITY_DPI_UNDEFINED}
 */
Configuration.DENSITY_DPI_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_MASK}
 */
Configuration.UI_MODE_TYPE_MASK = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#TOUCHSCREEN_STYLUS}
 */
Configuration.TOUCHSCREEN_STYLUS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#ORIENTATION_SQUARE}
 */
Configuration.ORIENTATION_SQUARE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_SMALL}
 */
Configuration.SCREENLAYOUT_SIZE_SMALL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#HARDKEYBOARDHIDDEN_NO}
 */
Configuration.HARDKEYBOARDHIDDEN_NO = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#ORIENTATION_LANDSCAPE}
 */
Configuration.ORIENTATION_LANDSCAPE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_LARGE}
 */
Configuration.SCREENLAYOUT_SIZE_LARGE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SMALLEST_SCREEN_WIDTH_DP_UNDEFINED}
 */
Configuration.SMALLEST_SCREEN_WIDTH_DP_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_UNDEFINED}
 */
Configuration.SCREENLAYOUT_SIZE_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_ROUND_NO}
 */
Configuration.SCREENLAYOUT_ROUND_NO = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREEN_WIDTH_DP_UNDEFINED}
 */
Configuration.SCREEN_WIDTH_DP_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_APPLIANCE}
 */
Configuration.UI_MODE_TYPE_APPLIANCE = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LAYOUTDIR_MASK}
 */
Configuration.SCREENLAYOUT_LAYOUTDIR_MASK = 192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_NIGHT_YES}
 */
Configuration.UI_MODE_NIGHT_YES = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#HARDKEYBOARDHIDDEN_UNDEFINED}
 */
Configuration.HARDKEYBOARDHIDDEN_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LAYOUTDIR_LTR}
 */
Configuration.SCREENLAYOUT_LAYOUTDIR_LTR = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LAYOUTDIR_RTL}
 */
Configuration.SCREENLAYOUT_LAYOUTDIR_RTL = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARDHIDDEN_YES}
 */
Configuration.KEYBOARDHIDDEN_YES = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_NORMAL}
 */
Configuration.SCREENLAYOUT_SIZE_NORMAL = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LAYOUTDIR_SHIFT}
 */
Configuration.SCREENLAYOUT_LAYOUTDIR_SHIFT = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_ROUND_YES}
 */
Configuration.SCREENLAYOUT_ROUND_YES = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARDHIDDEN_UNDEFINED}
 */
Configuration.KEYBOARDHIDDEN_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARD_NOKEYS}
 */
Configuration.KEYBOARD_NOKEYS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#TOUCHSCREEN_NOTOUCH}
 */
Configuration.TOUCHSCREEN_NOTOUCH = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LONG_YES}
 */
Configuration.SCREENLAYOUT_LONG_YES = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_NIGHT_UNDEFINED}
 */
Configuration.UI_MODE_NIGHT_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LONG_MASK}
 */
Configuration.SCREENLAYOUT_LONG_MASK = 48;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATIONHIDDEN_YES}
 */
Configuration.NAVIGATIONHIDDEN_YES = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATION_DPAD}
 */
Configuration.NAVIGATION_DPAD = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_LAYOUTDIR_UNDEFINED}
 */
Configuration.SCREENLAYOUT_LAYOUTDIR_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#NAVIGATION_WHEEL}
 */
Configuration.NAVIGATION_WHEEL = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#TOUCHSCREEN_UNDEFINED}
 */
Configuration.TOUCHSCREEN_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#KEYBOARD_UNDEFINED}
 */
Configuration.KEYBOARD_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#TOUCHSCREEN_FINGER}
 */
Configuration.TOUCHSCREEN_FINGER = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#UI_MODE_TYPE_UNDEFINED}
 */
Configuration.UI_MODE_TYPE_UNDEFINED = 0;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/content/res/Configuration.html#CREATOR
Object.defineProperty(Configuration, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
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
// http://developer.android.com/reference/android/content/res/Configuration.html#mcc
Object.defineProperty(Configuration.prototype, 'mcc', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('mcc');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('mcc', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#navigation
Object.defineProperty(Configuration.prototype, 'navigation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('navigation');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('navigation', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#screenWidthDp
Object.defineProperty(Configuration.prototype, 'screenWidthDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('screenWidthDp');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('screenWidthDp', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#screenHeightDp
Object.defineProperty(Configuration.prototype, 'screenHeightDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('screenHeightDp');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('screenHeightDp', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#touchscreen
Object.defineProperty(Configuration.prototype, 'touchscreen', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('touchscreen');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('touchscreen', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#fontScale
Object.defineProperty(Configuration.prototype, 'fontScale', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('fontScale');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('fontScale', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#screenLayout
Object.defineProperty(Configuration.prototype, 'screenLayout', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('screenLayout');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('screenLayout', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#uiMode
Object.defineProperty(Configuration.prototype, 'uiMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('uiMode');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('uiMode', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#keyboardHidden
Object.defineProperty(Configuration.prototype, 'keyboardHidden', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('keyboardHidden');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('keyboardHidden', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#locale
Object.defineProperty(Configuration.prototype, 'locale', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('locale');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('locale', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#keyboard
Object.defineProperty(Configuration.prototype, 'keyboard', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('keyboard');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('keyboard', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#orientation
Object.defineProperty(Configuration.prototype, 'orientation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('orientation');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('orientation', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#mnc
Object.defineProperty(Configuration.prototype, 'mnc', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('mnc');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('mnc', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#smallestScreenWidthDp
Object.defineProperty(Configuration.prototype, 'smallestScreenWidthDp', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('smallestScreenWidthDp');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('smallestScreenWidthDp', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#densityDpi
Object.defineProperty(Configuration.prototype, 'densityDpi', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('densityDpi');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('densityDpi', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#hardKeyboardHidden
Object.defineProperty(Configuration.prototype, 'hardKeyboardHidden', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('hardKeyboardHidden');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('hardKeyboardHidden', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/res/Configuration.html#navigationHidden
Object.defineProperty(Configuration.prototype, 'navigationHidden', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('navigationHidden');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.res.Configuration') {
				return new Configuration(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('navigationHidden', newValue);
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function needNewResources
 * @static
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#needNewResources(int, int)}
 **/
Configuration.needNewResources = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'needNewResources',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
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
 * @function updateFrom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#updateFrom(android.content.res.Configuration)}
 **/
Configuration.prototype.updateFrom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateFrom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function diff
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#diff(android.content.res.Configuration)}
 **/
Configuration.prototype.diff = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'diff',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFromParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#readFromParcel(android.os.Parcel)}
 **/
Configuration.prototype.readFromParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFromParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#compareTo(android.content.res.Configuration)}
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#compareTo(java.lang.Object)}
 **/
Configuration.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#describeContents()}
 **/
Configuration.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#getLayoutDirection()}
 **/
Configuration.prototype.getLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isScreenRound
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#isScreenRound()}
 **/
Configuration.prototype.isScreenRound = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isScreenRound',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#setLayoutDirection(java.util.Locale)}
 **/
Configuration.prototype.setLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setToDefaults
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#setToDefaults()}
 **/
Configuration.prototype.setToDefaults = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setToDefaults',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#hashCode()}
 **/
Configuration.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#equals(android.content.res.Configuration)}
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#equals(java.lang.Object)}
 **/
Configuration.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#setTo(android.content.res.Configuration)}
 **/
Configuration.prototype.setTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#toString()}
 **/
Configuration.prototype.toString = function() {
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
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLayoutSizeAtLeast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#isLayoutSizeAtLeast(int)}
 **/
Configuration.prototype.isLayoutSizeAtLeast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLayoutSizeAtLeast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#writeToParcel(android.os.Parcel, int)}
 **/
Configuration.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Configuration.html#setLocale(java.util.Locale)}
 **/
Configuration.prototype.setLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Configuration') {
			return new Configuration(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Configuration;
