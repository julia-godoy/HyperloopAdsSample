/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.KeyEvent
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.KeyEvent
 * @extends android.view.InputEvent 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html}
 **/
var KeyEvent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.KeyEvent')) {
		result = arguments[0];
	}
	else {
		result = KeyEvent.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.InputEvent');
KeyEvent.prototype = Object.create(SuperClass.prototype);
KeyEvent.prototype.constructor = KeyEvent;

Object.defineProperty(KeyEvent.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new KeyEvent(this.$native.super);
	},
	enumerable: true
});

KeyEvent.className = 'android.view.KeyEvent';
KeyEvent.prototype.className = 'android.view.KeyEvent';

// class property
Object.defineProperty(KeyEvent, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.KeyEvent');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
KeyEvent.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.KeyEvent');

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
	SubClass.prototype = Object.create(KeyEvent.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
KeyEvent.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new KeyEvent(Hyperloop.cast('android.view.KeyEvent', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_HDMI_4}
 */
KeyEvent.KEYCODE_TV_INPUT_HDMI_4 = 246;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CAPS_LOCK}
 */
KeyEvent.KEYCODE_CAPS_LOCK = 115;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NAVIGATE_PREVIOUS}
 */
KeyEvent.KEYCODE_NAVIGATE_PREVIOUS = 260;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_HDMI_2}
 */
KeyEvent.KEYCODE_TV_INPUT_HDMI_2 = 244;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_A}
 */
KeyEvent.KEYCODE_BUTTON_A = 96;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_HDMI_3}
 */
KeyEvent.KEYCODE_TV_INPUT_HDMI_3 = 245;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_TIMER_PROGRAMMING}
 */
KeyEvent.KEYCODE_TV_TIMER_PROGRAMMING = 258;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_HDMI_1}
 */
KeyEvent.KEYCODE_TV_INPUT_HDMI_1 = 243;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_B}
 */
KeyEvent.KEYCODE_BUTTON_B = 97;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_L1}
 */
KeyEvent.KEYCODE_BUTTON_L1 = 102;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_C}
 */
KeyEvent.KEYCODE_BUTTON_C = 98;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CHANNEL_DOWN}
 */
KeyEvent.KEYCODE_CHANNEL_DOWN = 167;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BRIGHTNESS_DOWN}
 */
KeyEvent.KEYCODE_BRIGHTNESS_DOWN = 220;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CTRL_LEFT}
 */
KeyEvent.KEYCODE_CTRL_LEFT = 113;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_DOWN}
 */
KeyEvent.KEYCODE_DPAD_DOWN = 20;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_TERRESTRIAL_ANALOG}
 */
KeyEvent.KEYCODE_TV_TERRESTRIAL_ANALOG = 235;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ZOOM_IN}
 */
KeyEvent.KEYCODE_ZOOM_IN = 168;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_HELP}
 */
KeyEvent.KEYCODE_HELP = 259;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_X}
 */
KeyEvent.KEYCODE_BUTTON_X = 99;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_Y}
 */
KeyEvent.KEYCODE_BUTTON_Y = 100;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_MULTIPLY}
 */
KeyEvent.KEYCODE_NUMPAD_MULTIPLY = 155;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_AVR_INPUT}
 */
KeyEvent.KEYCODE_AVR_INPUT = 182;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_NUMBER_ENTRY}
 */
KeyEvent.KEYCODE_TV_NUMBER_ENTRY = 234;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_FUNCTION_ON}
 */
KeyEvent.META_FUNCTION_ON = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_VOLUME_UP}
 */
KeyEvent.KEYCODE_VOLUME_UP = 24;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_ALT_ON}
 */
KeyEvent.META_ALT_ON = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_SATELLITE_CS}
 */
KeyEvent.KEYCODE_TV_SATELLITE_CS = 239;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_RADIO_SERVICE}
 */
KeyEvent.KEYCODE_TV_RADIO_SERVICE = 232;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CAPTIONS}
 */
KeyEvent.KEYCODE_CAPTIONS = 175;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CLEAR}
 */
KeyEvent.KEYCODE_CLEAR = 28;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ENDCALL}
 */
KeyEvent.KEYCODE_ENDCALL = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_1}
 */
KeyEvent.KEYCODE_BUTTON_1 = 188;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_POWER}
 */
KeyEvent.KEYCODE_POWER = 26;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_4}
 */
KeyEvent.KEYCODE_BUTTON_4 = 191;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_CLOSE}
 */
KeyEvent.KEYCODE_MEDIA_CLOSE = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_5}
 */
KeyEvent.KEYCODE_BUTTON_5 = 192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_SKIP_FORWARD}
 */
KeyEvent.KEYCODE_MEDIA_SKIP_FORWARD = 272;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_2}
 */
KeyEvent.KEYCODE_BUTTON_2 = 189;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_3}
 */
KeyEvent.KEYCODE_BUTTON_3 = 190;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_8}
 */
KeyEvent.KEYCODE_BUTTON_8 = 195;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_9}
 */
KeyEvent.KEYCODE_BUTTON_9 = 196;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_AUDIO_DESCRIPTION}
 */
KeyEvent.KEYCODE_TV_AUDIO_DESCRIPTION = 252;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_CTRL_RIGHT_ON}
 */
KeyEvent.META_CTRL_RIGHT_ON = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_FALLBACK}
 */
KeyEvent.FLAG_FALLBACK = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_6}
 */
KeyEvent.KEYCODE_BUTTON_6 = 193;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_NETWORK}
 */
KeyEvent.KEYCODE_TV_NETWORK = 241;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_7}
 */
KeyEvent.KEYCODE_BUTTON_7 = 194;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_WAKEUP}
 */
KeyEvent.KEYCODE_WAKEUP = 224;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_LAST_CHANNEL}
 */
KeyEvent.KEYCODE_LAST_CHANNEL = 229;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BACK}
 */
KeyEvent.KEYCODE_BACK = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_ALT_MASK}
 */
KeyEvent.META_ALT_MASK = 50;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SHIFT_RIGHT}
 */
KeyEvent.KEYCODE_SHIFT_RIGHT = 60;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DEL}
 */
KeyEvent.KEYCODE_DEL = 67;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_NUM_LOCK_ON}
 */
KeyEvent.META_NUM_LOCK_ON = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_SOFT_KEYBOARD}
 */
KeyEvent.FLAG_SOFT_KEYBOARD = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_SELECT}
 */
KeyEvent.KEYCODE_BUTTON_SELECT = 109;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NOTIFICATION}
 */
KeyEvent.KEYCODE_NOTIFICATION = 83;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_LANGUAGE_SWITCH}
 */
KeyEvent.KEYCODE_LANGUAGE_SWITCH = 204;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PICTSYMBOLS}
 */
KeyEvent.KEYCODE_PICTSYMBOLS = 94;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_STB_POWER}
 */
KeyEvent.KEYCODE_STB_POWER = 179;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_TOP_MENU}
 */
KeyEvent.KEYCODE_MEDIA_TOP_MENU = 226;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CONTACTS}
 */
KeyEvent.KEYCODE_CONTACTS = 207;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SPACE}
 */
KeyEvent.KEYCODE_SPACE = 62;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_START}
 */
KeyEvent.KEYCODE_BUTTON_START = 108;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_Z}
 */
KeyEvent.KEYCODE_BUTTON_Z = 101;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP}
 */
KeyEvent.KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP = 253;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SETTINGS}
 */
KeyEvent.KEYCODE_SETTINGS = 176;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT}
 */
KeyEvent.KEYCODE_TV_INPUT = 178;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SOFT_LEFT}
 */
KeyEvent.KEYCODE_SOFT_LEFT = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_WOKE_HERE}
 */
KeyEvent.FLAG_WOKE_HERE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ENTER}
 */
KeyEvent.KEYCODE_ENTER = 66;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SOFT_RIGHT}
 */
KeyEvent.KEYCODE_SOFT_RIGHT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_APOSTROPHE}
 */
KeyEvent.KEYCODE_APOSTROPHE = 75;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_FOCUS}
 */
KeyEvent.KEYCODE_FOCUS = 80;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_HOME}
 */
KeyEvent.KEYCODE_HOME = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ALT_LEFT}
 */
KeyEvent.KEYCODE_ALT_LEFT = 57;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_L2}
 */
KeyEvent.KEYCODE_BUTTON_L2 = 104;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DVR}
 */
KeyEvent.KEYCODE_DVR = 173;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ALT_RIGHT}
 */
KeyEvent.KEYCODE_ALT_RIGHT = 58;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_INFO}
 */
KeyEvent.KEYCODE_INFO = 165;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BRIGHTNESS_UP}
 */
KeyEvent.KEYCODE_BRIGHTNESS_UP = 221;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_REWIND}
 */
KeyEvent.KEYCODE_MEDIA_REWIND = 89;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_AT}
 */
KeyEvent.KEYCODE_AT = 77;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ENVELOPE}
 */
KeyEvent.KEYCODE_ENVELOPE = 65;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_EQUALS}
 */
KeyEvent.KEYCODE_EQUALS = 70;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SHIFT_MASK}
 */
KeyEvent.META_SHIFT_MASK = 193;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_RIGHT_PAREN}
 */
KeyEvent.KEYCODE_NUMPAD_RIGHT_PAREN = 163;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CHANNEL_UP}
 */
KeyEvent.KEYCODE_CHANNEL_UP = 166;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_WINDOW}
 */
KeyEvent.KEYCODE_WINDOW = 171;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MANNER_MODE}
 */
KeyEvent.KEYCODE_MANNER_MODE = 205;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_RO}
 */
KeyEvent.KEYCODE_RO = 217;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PAGE_UP}
 */
KeyEvent.KEYCODE_PAGE_UP = 92;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_GUIDE}
 */
KeyEvent.KEYCODE_GUIDE = 172;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SYM_ON}
 */
KeyEvent.META_SYM_ON = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SLEEP}
 */
KeyEvent.KEYCODE_SLEEP = 223;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BACKSLASH}
 */
KeyEvent.KEYCODE_BACKSLASH = 73;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#ACTION_UP}
 */
KeyEvent.ACTION_UP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_ANTENNA_CABLE}
 */
KeyEvent.KEYCODE_TV_ANTENNA_CABLE = 242;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_PLAY}
 */
KeyEvent.KEYCODE_MEDIA_PLAY = 126;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_FORWARD}
 */
KeyEvent.KEYCODE_FORWARD = 125;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_HENKAN}
 */
KeyEvent.KEYCODE_HENKAN = 214;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_STB_INPUT}
 */
KeyEvent.KEYCODE_STB_INPUT = 180;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_12}
 */
KeyEvent.KEYCODE_12 = 228;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_COMPONENT_1}
 */
KeyEvent.KEYCODE_TV_INPUT_COMPONENT_1 = 249;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_META_RIGHT_ON}
 */
KeyEvent.META_META_RIGHT_ON = 262144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_COMPONENT_2}
 */
KeyEvent.KEYCODE_TV_INPUT_COMPONENT_2 = 250;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_KATAKANA_HIRAGANA}
 */
KeyEvent.KEYCODE_KATAKANA_HIRAGANA = 215;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_11}
 */
KeyEvent.KEYCODE_11 = 227;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_POUND}
 */
KeyEvent.KEYCODE_POUND = 18;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NAVIGATE_NEXT}
 */
KeyEvent.KEYCODE_NAVIGATE_NEXT = 261;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUM}
 */
KeyEvent.KEYCODE_NUM = 78;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PROG_YELLOW}
 */
KeyEvent.KEYCODE_PROG_YELLOW = 185;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SEMICOLON}
 */
KeyEvent.KEYCODE_SEMICOLON = 74;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MOVE_HOME}
 */
KeyEvent.KEYCODE_MOVE_HOME = 122;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CALL}
 */
KeyEvent.KEYCODE_CALL = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_PLAY_PAUSE}
 */
KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE = 85;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ASSIST}
 */
KeyEvent.KEYCODE_ASSIST = 219;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_RIGHT_BRACKET}
 */
KeyEvent.KEYCODE_RIGHT_BRACKET = 72;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_ENTER}
 */
KeyEvent.KEYCODE_NUMPAD_ENTER = 160;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV}
 */
KeyEvent.KEYCODE_TV = 170;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_CONTENTS_MENU}
 */
KeyEvent.KEYCODE_TV_CONTENTS_MENU = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_SATELLITE}
 */
KeyEvent.KEYCODE_TV_SATELLITE = 237;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_STAR}
 */
KeyEvent.KEYCODE_STAR = 17;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PERIOD}
 */
KeyEvent.KEYCODE_PERIOD = 56;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_TELETEXT}
 */
KeyEvent.KEYCODE_TV_TELETEXT = 233;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_STEP_FORWARD}
 */
KeyEvent.KEYCODE_MEDIA_STEP_FORWARD = 274;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_TRACKING}
 */
KeyEvent.FLAG_TRACKING = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_NEXT}
 */
KeyEvent.KEYCODE_MEDIA_NEXT = 87;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_LEFT_PAREN}
 */
KeyEvent.KEYCODE_NUMPAD_LEFT_PAREN = 162;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_POWER}
 */
KeyEvent.KEYCODE_TV_POWER = 177;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_0}
 */
KeyEvent.KEYCODE_NUMPAD_0 = 144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TAB}
 */
KeyEvent.KEYCODE_TAB = 61;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_1}
 */
KeyEvent.KEYCODE_NUMPAD_1 = 145;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_COMMA}
 */
KeyEvent.KEYCODE_NUMPAD_COMMA = 159;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_2}
 */
KeyEvent.KEYCODE_NUMPAD_2 = 146;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_MODE}
 */
KeyEvent.KEYCODE_BUTTON_MODE = 110;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_3}
 */
KeyEvent.KEYCODE_NUMPAD_3 = 147;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_4}
 */
KeyEvent.KEYCODE_NUMPAD_4 = 148;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_FUNCTION}
 */
KeyEvent.KEYCODE_FUNCTION = 119;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_5}
 */
KeyEvent.KEYCODE_NUMPAD_5 = 149;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_COMPOSITE_2}
 */
KeyEvent.KEYCODE_TV_INPUT_COMPOSITE_2 = 248;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_6}
 */
KeyEvent.KEYCODE_NUMPAD_6 = 150;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_COMPOSITE_1}
 */
KeyEvent.KEYCODE_TV_INPUT_COMPOSITE_1 = 247;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_7}
 */
KeyEvent.KEYCODE_NUMPAD_7 = 151;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_8}
 */
KeyEvent.KEYCODE_NUMPAD_8 = 152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_9}
 */
KeyEvent.KEYCODE_NUMPAD_9 = 153;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_VOICE_ASSIST}
 */
KeyEvent.KEYCODE_VOICE_ASSIST = 231;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_META_RIGHT}
 */
KeyEvent.KEYCODE_META_RIGHT = 118;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MUHENKAN}
 */
KeyEvent.KEYCODE_MUHENKAN = 213;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MOVE_END}
 */
KeyEvent.KEYCODE_MOVE_END = 123;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SYM}
 */
KeyEvent.KEYCODE_SYM = 63;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F9}
 */
KeyEvent.KEYCODE_F9 = 139;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_UP}
 */
KeyEvent.KEYCODE_DPAD_UP = 19;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CTRL_RIGHT}
 */
KeyEvent.KEYCODE_CTRL_RIGHT = 114;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F7}
 */
KeyEvent.KEYCODE_F7 = 137;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F8}
 */
KeyEvent.KEYCODE_F8 = 138;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F5}
 */
KeyEvent.KEYCODE_F5 = 135;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F6}
 */
KeyEvent.KEYCODE_F6 = 136;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#MAX_KEYCODE}
 */
KeyEvent.MAX_KEYCODE = 84;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F3}
 */
KeyEvent.KEYCODE_F3 = 133;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F4}
 */
KeyEvent.KEYCODE_F4 = 134;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PAGE_DOWN}
 */
KeyEvent.KEYCODE_PAGE_DOWN = 93;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_Y}
 */
KeyEvent.KEYCODE_Y = 53;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_ALT_RIGHT_ON}
 */
KeyEvent.META_ALT_RIGHT_ON = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_Z}
 */
KeyEvent.KEYCODE_Z = 54;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_W}
 */
KeyEvent.KEYCODE_W = 51;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_X}
 */
KeyEvent.KEYCODE_X = 52;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_U}
 */
KeyEvent.KEYCODE_U = 49;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_FAST_FORWARD}
 */
KeyEvent.KEYCODE_MEDIA_FAST_FORWARD = 90;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_V}
 */
KeyEvent.KEYCODE_V = 50;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_S}
 */
KeyEvent.KEYCODE_S = 47;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_T}
 */
KeyEvent.KEYCODE_T = 48;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_LONG_PRESS}
 */
KeyEvent.FLAG_LONG_PRESS = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_RECORD}
 */
KeyEvent.KEYCODE_MEDIA_RECORD = 130;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ESCAPE}
 */
KeyEvent.KEYCODE_ESCAPE = 111;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_META_LEFT}
 */
KeyEvent.KEYCODE_META_LEFT = 117;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_VIRTUAL_HARD_KEY}
 */
KeyEvent.FLAG_VIRTUAL_HARD_KEY = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MUTE}
 */
KeyEvent.KEYCODE_MUTE = 91;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PAIRING}
 */
KeyEvent.KEYCODE_PAIRING = 225;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F1}
 */
KeyEvent.KEYCODE_F1 = 131;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F2}
 */
KeyEvent.KEYCODE_F2 = 132;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SWITCH_CHARSET}
 */
KeyEvent.KEYCODE_SWITCH_CHARSET = 95;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_ZOOM_MODE}
 */
KeyEvent.KEYCODE_TV_ZOOM_MODE = 255;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PROG_RED}
 */
KeyEvent.KEYCODE_PROG_RED = 183;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PROG_GREEN}
 */
KeyEvent.KEYCODE_PROG_GREEN = 184;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_YEN}
 */
KeyEvent.KEYCODE_YEN = 216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_TERRESTRIAL_DIGITAL}
 */
KeyEvent.KEYCODE_TV_TERRESTRIAL_DIGITAL = 236;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_CENTER}
 */
KeyEvent.KEYCODE_DPAD_CENTER = 23;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_CANCELED_LONG_PRESS}
 */
KeyEvent.FLAG_CANCELED_LONG_PRESS = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F11}
 */
KeyEvent.KEYCODE_F11 = 141;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F10}
 */
KeyEvent.KEYCODE_F10 = 140;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_ADD}
 */
KeyEvent.KEYCODE_NUMPAD_ADD = 157;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F12}
 */
KeyEvent.KEYCODE_F12 = 142;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_INSERT}
 */
KeyEvent.KEYCODE_INSERT = 124;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_AVR_POWER}
 */
KeyEvent.KEYCODE_AVR_POWER = 181;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_THUMBL}
 */
KeyEvent.KEYCODE_BUTTON_THUMBL = 106;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_THUMBR}
 */
KeyEvent.KEYCODE_BUTTON_THUMBR = 107;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUM_LOCK}
 */
KeyEvent.KEYCODE_NUM_LOCK = 143;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_VOLUME_MUTE}
 */
KeyEvent.KEYCODE_VOLUME_MUTE = 164;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_PREVIOUS}
 */
KeyEvent.KEYCODE_MEDIA_PREVIOUS = 88;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_META_LEFT_ON}
 */
KeyEvent.META_META_LEFT_ON = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BOOKMARK}
 */
KeyEvent.KEYCODE_BOOKMARK = 174;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_CTRL_LEFT_ON}
 */
KeyEvent.META_CTRL_LEFT_ON = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_INPUT_VGA_1}
 */
KeyEvent.KEYCODE_TV_INPUT_VGA_1 = 251;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SCROLL_LOCK_ON}
 */
KeyEvent.META_SCROLL_LOCK_ON = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SHIFT_ON}
 */
KeyEvent.META_SHIFT_ON = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_AUDIO_TRACK}
 */
KeyEvent.KEYCODE_MEDIA_AUDIO_TRACK = 222;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_3D_MODE}
 */
KeyEvent.KEYCODE_3D_MODE = 206;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_EISU}
 */
KeyEvent.KEYCODE_EISU = 212;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BREAK}
 */
KeyEvent.KEYCODE_BREAK = 121;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_EDITOR_ACTION}
 */
KeyEvent.FLAG_EDITOR_ACTION = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_SKIP_BACKWARD}
 */
KeyEvent.KEYCODE_MEDIA_SKIP_BACKWARD = 273;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_MEDIA_CONTEXT_MENU}
 */
KeyEvent.KEYCODE_TV_MEDIA_CONTEXT_MENU = 257;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_STEP_BACKWARD}
 */
KeyEvent.KEYCODE_MEDIA_STEP_BACKWARD = 275;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_FORWARD_DEL}
 */
KeyEvent.KEYCODE_FORWARD_DEL = 112;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CALENDAR}
 */
KeyEvent.KEYCODE_CALENDAR = 208;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_RIGHT}
 */
KeyEvent.KEYCODE_DPAD_RIGHT = 22;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#ACTION_DOWN}
 */
KeyEvent.ACTION_DOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ZOOM_OUT}
 */
KeyEvent.KEYCODE_ZOOM_OUT = 169;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MINUS}
 */
KeyEvent.KEYCODE_MINUS = 69;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SYSRQ}
 */
KeyEvent.KEYCODE_SYSRQ = 120;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_EQUALS}
 */
KeyEvent.KEYCODE_NUMPAD_EQUALS = 161;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_COMMA}
 */
KeyEvent.KEYCODE_COMMA = 55;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_LEFT}
 */
KeyEvent.KEYCODE_DPAD_LEFT = 21;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ZENKAKU_HANKAKU}
 */
KeyEvent.KEYCODE_ZENKAKU_HANKAKU = 211;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_META_MASK}
 */
KeyEvent.META_META_MASK = 458752;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_UNKNOWN}
 */
KeyEvent.KEYCODE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_CAPS_LOCK_ON}
 */
KeyEvent.META_CAPS_LOCK_ON = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SHIFT_LEFT}
 */
KeyEvent.KEYCODE_SHIFT_LEFT = 59;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_CTRL_ON}
 */
KeyEvent.META_CTRL_ON = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_SUBTRACT}
 */
KeyEvent.KEYCODE_NUMPAD_SUBTRACT = 156;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#ACTION_MULTIPLE}
 */
KeyEvent.ACTION_MULTIPLE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_LEFT_BRACKET}
 */
KeyEvent.KEYCODE_LEFT_BRACKET = 71;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_DIVIDE}
 */
KeyEvent.KEYCODE_NUMPAD_DIVIDE = 154;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_APP_SWITCH}
 */
KeyEvent.KEYCODE_APP_SWITCH = 187;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PLUS}
 */
KeyEvent.KEYCODE_PLUS = 81;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN}
 */
KeyEvent.KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN = 254;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_EJECT}
 */
KeyEvent.KEYCODE_MEDIA_EJECT = 129;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_FROM_SYSTEM}
 */
KeyEvent.FLAG_FROM_SYSTEM = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_PROG_BLUE}
 */
KeyEvent.KEYCODE_PROG_BLUE = 186;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_KEEP_TOUCH_MODE}
 */
KeyEvent.FLAG_KEEP_TOUCH_MODE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_GRAVE}
 */
KeyEvent.KEYCODE_GRAVE = 68;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_HEADSETHOOK}
 */
KeyEvent.KEYCODE_HEADSETHOOK = 79;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#FLAG_CANCELED}
 */
KeyEvent.FLAG_CANCELED = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_SATELLITE_SERVICE}
 */
KeyEvent.KEYCODE_TV_SATELLITE_SERVICE = 240;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_CTRL_MASK}
 */
KeyEvent.META_CTRL_MASK = 28672;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CALCULATOR}
 */
KeyEvent.KEYCODE_CALCULATOR = 210;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NAVIGATE_IN}
 */
KeyEvent.KEYCODE_NAVIGATE_IN = 262;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_EXPLORER}
 */
KeyEvent.KEYCODE_EXPLORER = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SLASH}
 */
KeyEvent.KEYCODE_SLASH = 76;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_META_ON}
 */
KeyEvent.META_META_ON = 65536;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_1}
 */
KeyEvent.KEYCODE_1 = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_14}
 */
KeyEvent.KEYCODE_BUTTON_14 = 201;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_2}
 */
KeyEvent.KEYCODE_2 = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_13}
 */
KeyEvent.KEYCODE_BUTTON_13 = 200;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SCROLL_LOCK}
 */
KeyEvent.KEYCODE_SCROLL_LOCK = 116;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_16}
 */
KeyEvent.KEYCODE_BUTTON_16 = 203;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_0}
 */
KeyEvent.KEYCODE_0 = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_15}
 */
KeyEvent.KEYCODE_BUTTON_15 = 202;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_SATELLITE_BS}
 */
KeyEvent.KEYCODE_TV_SATELLITE_BS = 238;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_10}
 */
KeyEvent.KEYCODE_BUTTON_10 = 197;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_R1}
 */
KeyEvent.KEYCODE_BUTTON_R1 = 103;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_12}
 */
KeyEvent.KEYCODE_BUTTON_12 = 199;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MUSIC}
 */
KeyEvent.KEYCODE_MUSIC = 209;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_11}
 */
KeyEvent.KEYCODE_BUTTON_11 = 198;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BUTTON_R2}
 */
KeyEvent.KEYCODE_BUTTON_R2 = 105;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_ALT_LEFT_ON}
 */
KeyEvent.META_ALT_LEFT_ON = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_VOLUME_DOWN}
 */
KeyEvent.KEYCODE_VOLUME_DOWN = 25;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_TV_DATA_SERVICE}
 */
KeyEvent.KEYCODE_TV_DATA_SERVICE = 230;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NAVIGATE_OUT}
 */
KeyEvent.KEYCODE_NAVIGATE_OUT = 263;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_KANA}
 */
KeyEvent.KEYCODE_KANA = 218;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_I}
 */
KeyEvent.KEYCODE_I = 37;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_J}
 */
KeyEvent.KEYCODE_J = 38;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_G}
 */
KeyEvent.KEYCODE_G = 35;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_H}
 */
KeyEvent.KEYCODE_H = 36;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_E}
 */
KeyEvent.KEYCODE_E = 33;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_STOP}
 */
KeyEvent.KEYCODE_MEDIA_STOP = 86;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_F}
 */
KeyEvent.KEYCODE_F = 34;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_C}
 */
KeyEvent.KEYCODE_C = 31;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SHIFT_LEFT_ON}
 */
KeyEvent.META_SHIFT_LEFT_ON = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_D}
 */
KeyEvent.KEYCODE_D = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_Q}
 */
KeyEvent.KEYCODE_Q = 45;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_NUMPAD_DOT}
 */
KeyEvent.KEYCODE_NUMPAD_DOT = 158;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_R}
 */
KeyEvent.KEYCODE_R = 46;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_O}
 */
KeyEvent.KEYCODE_O = 43;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_P}
 */
KeyEvent.KEYCODE_P = 44;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_M}
 */
KeyEvent.KEYCODE_M = 41;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MEDIA_PAUSE}
 */
KeyEvent.KEYCODE_MEDIA_PAUSE = 127;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_N}
 */
KeyEvent.KEYCODE_N = 42;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_K}
 */
KeyEvent.KEYCODE_K = 39;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_L}
 */
KeyEvent.KEYCODE_L = 40;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_9}
 */
KeyEvent.KEYCODE_9 = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_MENU}
 */
KeyEvent.KEYCODE_MENU = 82;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_7}
 */
KeyEvent.KEYCODE_7 = 14;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_8}
 */
KeyEvent.KEYCODE_8 = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_5}
 */
KeyEvent.KEYCODE_5 = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_6}
 */
KeyEvent.KEYCODE_6 = 13;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CAMERA}
 */
KeyEvent.KEYCODE_CAMERA = 27;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_3}
 */
KeyEvent.KEYCODE_3 = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SEARCH}
 */
KeyEvent.KEYCODE_SEARCH = 84;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_4}
 */
KeyEvent.KEYCODE_4 = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_A}
 */
KeyEvent.KEYCODE_A = 29;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_B}
 */
KeyEvent.KEYCODE_B = 30;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#META_SHIFT_RIGHT_ON}
 */
KeyEvent.META_SHIFT_RIGHT_ON = 128;

// Inner classes
Object.defineProperty(KeyEvent, 'Callback', {
	get: function() {
		return require('android.view.KeyEvent$Callback');
	},
	enumerable: true
});
Object.defineProperty(KeyEvent, 'DispatcherState', {
	get: function() {
		return require('android.view.KeyEvent$DispatcherState');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/view/KeyEvent.html#CREATOR
Object.defineProperty(KeyEvent, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.KeyEvent') {
				return new KeyEvent(result);
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
/**
 * TODO Fill out docs more...
 * @function getModifierMetaStateMask
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getModifierMetaStateMask()}
 **/
KeyEvent.getModifierMetaStateMask = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getModifierMetaStateMask',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isModifierKey
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isModifierKey(int)}
 **/
KeyEvent.isModifierKey = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isModifierKey',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keyCodeToString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#keyCodeToString(int)}
 **/
KeyEvent.keyCodeToString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'keyCodeToString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function normalizeMetaState
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#normalizeMetaState(int)}
 **/
KeyEvent.normalizeMetaState = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'normalizeMetaState',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeadChar
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getDeadChar(int, int)}
 **/
KeyEvent.getDeadChar = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDeadChar',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function metaStateHasModifiers
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#metaStateHasModifiers(int, int)}
 **/
KeyEvent.metaStateHasModifiers = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'metaStateHasModifiers',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function metaStateHasNoModifiers
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#metaStateHasNoModifiers(int)}
 **/
KeyEvent.metaStateHasNoModifiers = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'metaStateHasNoModifiers',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function changeTimeRepeat
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#changeTimeRepeat(android.view.KeyEvent, long, int)}
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#changeTimeRepeat(android.view.KeyEvent, long, int, int)}
 **/
KeyEvent.changeTimeRepeat = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'changeTimeRepeat',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxKeyCode
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getMaxKeyCode()}
 **/
KeyEvent.getMaxKeyCode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getMaxKeyCode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function changeFlags
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#changeFlags(android.view.KeyEvent, int)}
 **/
KeyEvent.changeFlags = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'changeFlags',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keyCodeFromString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#keyCodeFromString(java.lang.String)}
 **/
KeyEvent.keyCodeFromString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'keyCodeFromString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function changeAction
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#changeAction(android.view.KeyEvent, int)}
 **/
KeyEvent.changeAction = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'changeAction',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isGamepadButton
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isGamepadButton(int)}
 **/
KeyEvent.isGamepadButton = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isGamepadButton',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
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
 * @function isCanceled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isCanceled()}
 **/
KeyEvent.prototype.isCanceled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCanceled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#dispatch(android.view.KeyEvent$Callback)}
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#dispatch(android.view.KeyEvent$Callback, android.view.KeyEvent$DispatcherState, java.lang.Object)}
 **/
KeyEvent.prototype.dispatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isShiftPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isShiftPressed()}
 **/
KeyEvent.prototype.isShiftPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isShiftPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isNumLockOn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isNumLockOn()}
 **/
KeyEvent.prototype.isNumLockOn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isNumLockOn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLongPress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isLongPress()}
 **/
KeyEvent.prototype.isLongPress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLongPress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getKeyCode()}
 **/
KeyEvent.prototype.getKeyCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharacters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getCharacters()}
 **/
KeyEvent.prototype.getCharacters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharacters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEventTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getEventTime()}
 **/
KeyEvent.prototype.getEventTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEventTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUnicodeChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getUnicodeChar()}
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getUnicodeChar(int)}
 **/
KeyEvent.prototype.getUnicodeChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUnicodeChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSystem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isSystem()}
 **/
KeyEvent.prototype.isSystem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSystem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMetaPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isMetaPressed()}
 **/
KeyEvent.prototype.isMetaPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMetaPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getSource()}
 **/
KeyEvent.prototype.getSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isScrollLockOn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isScrollLockOn()}
 **/
KeyEvent.prototype.isScrollLockOn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isScrollLockOn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getFlags()}
 **/
KeyEvent.prototype.getFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#writeToParcel(android.os.Parcel, int)}
 **/
KeyEvent.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScanCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getScanCode()}
 **/
KeyEvent.prototype.getScanCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScanCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#setSource(int)}
 **/
KeyEvent.prototype.setSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSymPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isSymPressed()}
 **/
KeyEvent.prototype.isSymPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSymPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getMatch(char[])}
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getMatch(char[], int)}
 **/
KeyEvent.prototype.getMatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPrintingKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isPrintingKey()}
 **/
KeyEvent.prototype.isPrintingKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPrintingKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCtrlPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isCtrlPressed()}
 **/
KeyEvent.prototype.isCtrlPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCtrlPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNumber
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getNumber()}
 **/
KeyEvent.prototype.getNumber = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNumber',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getKeyData(android.view.KeyCharacterMap$KeyData)}
 **/
KeyEvent.prototype.getKeyData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getModifiers
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getModifiers()}
 **/
KeyEvent.prototype.getModifiers = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getModifiers',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFunctionPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isFunctionPressed()}
 **/
KeyEvent.prototype.isFunctionPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFunctionPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMetaState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getMetaState()}
 **/
KeyEvent.prototype.getMetaState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMetaState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCapsLockOn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isCapsLockOn()}
 **/
KeyEvent.prototype.isCapsLockOn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCapsLockOn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAltPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isAltPressed()}
 **/
KeyEvent.prototype.isAltPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAltPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getAction()}
 **/
KeyEvent.prototype.getAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getDisplayLabel()}
 **/
KeyEvent.prototype.getDisplayLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDownTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getDownTime()}
 **/
KeyEvent.prototype.getDownTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDownTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeviceId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getDeviceId()}
 **/
KeyEvent.prototype.getDeviceId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDeviceId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTracking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#isTracking()}
 **/
KeyEvent.prototype.isTracking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTracking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasModifiers
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#hasModifiers(int)}
 **/
KeyEvent.prototype.hasModifiers = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasModifiers',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasNoModifiers
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#hasNoModifiers()}
 **/
KeyEvent.prototype.hasNoModifiers = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasNoModifiers',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startTracking
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#startTracking()}
 **/
KeyEvent.prototype.startTracking = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startTracking',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyCharacterMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getKeyCharacterMap()}
 **/
KeyEvent.prototype.getKeyCharacterMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyCharacterMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#toString()}
 **/
KeyEvent.prototype.toString = function() {
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
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRepeatCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyEvent.html#getRepeatCount()}
 **/
KeyEvent.prototype.getRepeatCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRepeatCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyEvent') {
			return new KeyEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = KeyEvent;
