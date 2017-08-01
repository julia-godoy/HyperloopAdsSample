/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.Intent
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.Intent
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/Intent.html}
 **/
var Intent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.Intent')) {
		result = arguments[0];
	}
	else {
		result = Intent.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Intent.prototype = Object.create(SuperClass.prototype);
Intent.prototype.constructor = Intent;

Object.defineProperty(Intent.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Intent(this.$native.super);
	},
	enumerable: true
});

Intent.className = 'android.content.Intent';
Intent.prototype.className = 'android.content.Intent';

// class property
Object.defineProperty(Intent, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.Intent');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Intent.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.Intent');

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
	SubClass.prototype = Object.create(Intent.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Intent.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Intent(Hyperloop.cast('android.content.Intent', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_POWER_DISCONNECTED}
 */
Intent.ACTION_POWER_DISCONNECTED = "android.intent.action.ACTION_POWER_DISCONNECTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_REMOVED}
 */
Intent.ACTION_PACKAGE_REMOVED = "android.intent.action.PACKAGE_REMOVED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_EDIT}
 */
Intent.ACTION_EDIT = "android.intent.action.EDIT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_INITIAL_INTENTS}
 */
Intent.EXTRA_INITIAL_INTENTS = "android.intent.extra.INITIAL_INTENTS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_GTALK_SERVICE_CONNECTED}
 */
Intent.ACTION_GTALK_SERVICE_CONNECTED = "android.intent.action.GTALK_CONNECTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_ALL_APPS}
 */
Intent.ACTION_ALL_APPS = "android.intent.action.ALL_APPS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_INSERT}
 */
Intent.ACTION_INSERT = "android.intent.action.INSERT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_REBOOT}
 */
Intent.ACTION_REBOOT = "android.intent.action.REBOOT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_MONKEY}
 */
Intent.CATEGORY_MONKEY = "android.intent.category.MONKEY";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#METADATA_DOCK_HOME}
 */
Intent.METADATA_DOCK_HOME = "android.dock_home";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_EXTERNAL_APPLICATIONS_AVAILABLE}
 */
Intent.ACTION_EXTERNAL_APPLICATIONS_AVAILABLE = "android.intent.action.EXTERNAL_APPLICATIONS_AVAILABLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_DATA_CLEARED}
 */
Intent.ACTION_PACKAGE_DATA_CLEARED = "android.intent.action.PACKAGE_DATA_CLEARED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_POWER_CONNECTED}
 */
Intent.ACTION_POWER_CONNECTED = "android.intent.action.ACTION_POWER_CONNECTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SET_WALLPAPER}
 */
Intent.ACTION_SET_WALLPAPER = "android.intent.action.SET_WALLPAPER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_APP_EMAIL}
 */
Intent.CATEGORY_APP_EMAIL = "android.intent.category.APP_EMAIL";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_PROCESS_TEXT_READONLY}
 */
Intent.EXTRA_PROCESS_TEXT_READONLY = "android.intent.extra.PROCESS_TEXT_READONLY";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_LOCAL_ONLY}
 */
Intent.EXTRA_LOCAL_ONLY = "android.intent.extra.LOCAL_ONLY";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_UID_REMOVED}
 */
Intent.ACTION_UID_REMOVED = "android.intent.action.UID_REMOVED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_REPLACEMENT_EXTRAS}
 */
Intent.EXTRA_REPLACEMENT_EXTRAS = "android.intent.extra.REPLACEMENT_EXTRAS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_APP_CALCULATOR}
 */
Intent.CATEGORY_APP_CALCULATOR = "android.intent.category.APP_CALCULATOR";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_DOCK_STATE_DESK}
 */
Intent.EXTRA_DOCK_STATE_DESK = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_BATTERY_CHANGED}
 */
Intent.ACTION_BATTERY_CHANGED = "android.intent.action.BATTERY_CHANGED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_CAR_MODE}
 */
Intent.CATEGORY_CAR_MODE = "android.intent.category.CAR_MODE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_ALARM_COUNT}
 */
Intent.EXTRA_ALARM_COUNT = "android.intent.extra.ALARM_COUNT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_HOME}
 */
Intent.CATEGORY_HOME = "android.intent.category.HOME";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_ASSIST_INPUT_DEVICE_ID}
 */
Intent.EXTRA_ASSIST_INPUT_DEVICE_ID = "android.intent.extra.ASSIST_INPUT_DEVICE_ID";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_APP_CALENDAR}
 */
Intent.CATEGORY_APP_CALENDAR = "android.intent.category.APP_CALENDAR";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_APP_GALLERY}
 */
Intent.CATEGORY_APP_GALLERY = "android.intent.category.APP_GALLERY";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_NEEDS_VERIFICATION}
 */
Intent.ACTION_PACKAGE_NEEDS_VERIFICATION = "android.intent.action.PACKAGE_NEEDS_VERIFICATION";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_DELETE}
 */
Intent.ACTION_DELETE = "android.intent.action.DELETE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_ASSIST_CONTEXT}
 */
Intent.EXTRA_ASSIST_CONTEXT = "android.intent.extra.ASSIST_CONTEXT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_CONFIGURATION_CHANGED}
 */
Intent.ACTION_CONFIGURATION_CHANGED = "android.intent.action.CONFIGURATION_CHANGED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_RECEIVER_NO_ABORT}
 */
Intent.FLAG_RECEIVER_NO_ABORT = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_FORWARD_RESULT}
 */
Intent.FLAG_ACTIVITY_FORWARD_RESULT = 33554432;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_ALTERNATIVE}
 */
Intent.CATEGORY_ALTERNATIVE = "android.intent.category.ALTERNATIVE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_BCC}
 */
Intent.EXTRA_BCC = "android.intent.extra.BCC";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_APP_CONTACTS}
 */
Intent.CATEGORY_APP_CONTACTS = "android.intent.category.APP_CONTACTS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_REPLACING}
 */
Intent.EXTRA_REPLACING = "android.intent.extra.REPLACING";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_SHORTCUT_ICON_RESOURCE}
 */
Intent.EXTRA_SHORTCUT_ICON_RESOURCE = "android.intent.extra.shortcut.ICON_RESOURCE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_DREAMING_STOPPED}
 */
Intent.ACTION_DREAMING_STOPPED = "android.intent.action.DREAMING_STOPPED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_CHANGED_COMPONENT_NAME}
 */
Intent.EXTRA_CHANGED_COMPONENT_NAME = "android.intent.extra.changed_component_name";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_MULTIPLE_TASK}
 */
Intent.FLAG_ACTIVITY_MULTIPLE_TASK = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_DREAMING_STARTED}
 */
Intent.ACTION_DREAMING_STARTED = "android.intent.action.DREAMING_STARTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_VOICE_COMMAND}
 */
Intent.ACTION_VOICE_COMMAND = "android.intent.action.VOICE_COMMAND";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_NEW_DOCUMENT}
 */
Intent.FLAG_ACTIVITY_NEW_DOCUMENT = 524288;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_HEADSET_PLUG}
 */
Intent.ACTION_HEADSET_PLUG = "android.intent.action.HEADSET_PLUG";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_RETURN_RESULT}
 */
Intent.EXTRA_RETURN_RESULT = "android.intent.extra.RETURN_RESULT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_APP_MUSIC}
 */
Intent.CATEGORY_APP_MUSIC = "android.intent.category.APP_MUSIC";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MAIN}
 */
Intent.ACTION_MAIN = "android.intent.action.MAIN";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_EJECT}
 */
Intent.ACTION_MEDIA_EJECT = "android.intent.action.MEDIA_EJECT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PICK_ACTIVITY}
 */
Intent.ACTION_PICK_ACTIVITY = "android.intent.action.PICK_ACTIVITY";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FILL_IN_CLIP_DATA}
 */
Intent.FILL_IN_CLIP_DATA = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_MOUNTED}
 */
Intent.ACTION_MEDIA_MOUNTED = "android.intent.action.MEDIA_MOUNTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_SCANNER_FINISHED}
 */
Intent.ACTION_MEDIA_SCANNER_FINISHED = "android.intent.action.MEDIA_SCANNER_FINISHED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_CHOOSER_REFINEMENT_INTENT_SENDER}
 */
Intent.EXTRA_CHOOSER_REFINEMENT_INTENT_SENDER = "android.intent.extra.CHOOSER_REFINEMENT_INTENT_SENDER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_REPLACED}
 */
Intent.ACTION_PACKAGE_REPLACED = "android.intent.action.PACKAGE_REPLACED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_TIME_TICK}
 */
Intent.ACTION_TIME_TICK = "android.intent.action.TIME_TICK";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET}
 */
Intent.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET = 524288;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_CALL_BUTTON}
 */
Intent.ACTION_CALL_BUTTON = "android.intent.action.CALL_BUTTON";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_DATA_REMOVED}
 */
Intent.EXTRA_DATA_REMOVED = "android.intent.extra.DATA_REMOVED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FILL_IN_SOURCE_BOUNDS}
 */
Intent.FILL_IN_SOURCE_BOUNDS = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_DEFAULT}
 */
Intent.CATEGORY_DEFAULT = "android.intent.category.DEFAULT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_VOICE}
 */
Intent.CATEGORY_VOICE = "android.intent.category.VOICE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MANAGE_NETWORK_USAGE}
 */
Intent.ACTION_MANAGE_NETWORK_USAGE = "android.intent.action.MANAGE_NETWORK_USAGE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_UID}
 */
Intent.EXTRA_UID = "android.intent.extra.UID";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_FROM_BACKGROUND}
 */
Intent.FLAG_FROM_BACKGROUND = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MANAGED_PROFILE_REMOVED}
 */
Intent.ACTION_MANAGED_PROFILE_REMOVED = "android.intent.action.MANAGED_PROFILE_REMOVED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_ADDED}
 */
Intent.ACTION_PACKAGE_ADDED = "android.intent.action.PACKAGE_ADDED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_CLOSE_SYSTEM_DIALOGS}
 */
Intent.ACTION_CLOSE_SYSTEM_DIALOGS = "android.intent.action.CLOSE_SYSTEM_DIALOGS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_USER_PRESENT}
 */
Intent.ACTION_USER_PRESENT = "android.intent.action.USER_PRESENT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_APP_ERROR}
 */
Intent.ACTION_APP_ERROR = "android.intent.action.APP_ERROR";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#URI_ALLOW_UNSAFE}
 */
Intent.URI_ALLOW_UNSAFE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_ALTERNATE_INTENTS}
 */
Intent.EXTRA_ALTERNATE_INTENTS = "android.intent.extra.ALTERNATE_INTENTS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_DONT_KILL_APP}
 */
Intent.EXTRA_DONT_KILL_APP = "android.intent.extra.DONT_KILL_APP";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_RESET_TASK_IF_NEEDED}
 */
Intent.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_CHANGED_COMPONENT_NAME_LIST}
 */
Intent.EXTRA_CHANGED_COMPONENT_NAME_LIST = "android.intent.extra.changed_component_name_list";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_TEST}
 */
Intent.CATEGORY_TEST = "android.intent.category.TEST";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_MIME_TYPES}
 */
Intent.EXTRA_MIME_TYPES = "android.intent.extra.MIME_TYPES";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FILL_IN_PACKAGE}
 */
Intent.FILL_IN_PACKAGE = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_UNMOUNTED}
 */
Intent.ACTION_MEDIA_UNMOUNTED = "android.intent.action.MEDIA_UNMOUNTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_TIMEZONE_CHANGED}
 */
Intent.ACTION_TIMEZONE_CHANGED = "android.intent.action.TIMEZONE_CHANGED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_SHORTCUT_INTENT}
 */
Intent.EXTRA_SHORTCUT_INTENT = "android.intent.extra.shortcut.INTENT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_POWER_USAGE_SUMMARY}
 */
Intent.ACTION_POWER_USAGE_SUMMARY = "android.intent.action.POWER_USAGE_SUMMARY";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_LE_DESK_DOCK}
 */
Intent.CATEGORY_LE_DESK_DOCK = "android.intent.category.LE_DESK_DOCK";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_DATE_CHANGED}
 */
Intent.ACTION_DATE_CHANGED = "android.intent.action.DATE_CHANGED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_APP_MARKET}
 */
Intent.CATEGORY_APP_MARKET = "android.intent.category.APP_MARKET";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_EXTERNAL_APPLICATIONS_UNAVAILABLE}
 */
Intent.ACTION_EXTERNAL_APPLICATIONS_UNAVAILABLE = "android.intent.action.EXTERNAL_APPLICATIONS_UNAVAILABLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_NEW_OUTGOING_CALL}
 */
Intent.ACTION_NEW_OUTGOING_CALL = "android.intent.action.NEW_OUTGOING_CALL";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_GRANT_READ_URI_PERMISSION}
 */
Intent.FLAG_GRANT_READ_URI_PERMISSION = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_ALLOW_REPLACE}
 */
Intent.EXTRA_ALLOW_REPLACE = "android.intent.extra.ALLOW_REPLACE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FILL_IN_COMPONENT}
 */
Intent.FILL_IN_COMPONENT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_FULLY_REMOVED}
 */
Intent.ACTION_PACKAGE_FULLY_REMOVED = "android.intent.action.PACKAGE_FULLY_REMOVED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_RESULT_RECEIVER}
 */
Intent.EXTRA_RESULT_RECEIVER = "android.intent.extra.RESULT_RECEIVER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_ATTACH_DATA}
 */
Intent.ACTION_ATTACH_DATA = "android.intent.action.ATTACH_DATA";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_LOCALE_CHANGED}
 */
Intent.ACTION_LOCALE_CHANGED = "android.intent.action.LOCALE_CHANGED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_TEMPLATE}
 */
Intent.EXTRA_TEMPLATE = "android.intent.extra.TEMPLATE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_ANSWER}
 */
Intent.ACTION_ANSWER = "android.intent.action.ANSWER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SEARCH}
 */
Intent.ACTION_SEARCH = "android.intent.action.SEARCH";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_SCANNER_STARTED}
 */
Intent.ACTION_MEDIA_SCANNER_STARTED = "android.intent.action.MEDIA_SCANNER_STARTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_DOCK_STATE_UNDOCKED}
 */
Intent.EXTRA_DOCK_STATE_UNDOCKED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_INCLUDE_STOPPED_PACKAGES}
 */
Intent.FLAG_INCLUDE_STOPPED_PACKAGES = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_AIRPLANE_MODE_CHANGED}
 */
Intent.ACTION_AIRPLANE_MODE_CHANGED = "android.intent.action.AIRPLANE_MODE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_BUTTON}
 */
Intent.ACTION_MEDIA_BUTTON = "android.intent.action.MEDIA_BUTTON";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_OPEN_DOCUMENT}
 */
Intent.ACTION_OPEN_DOCUMENT = "android.intent.action.OPEN_DOCUMENT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_PREVIOUS_IS_TOP}
 */
Intent.FLAG_ACTIVITY_PREVIOUS_IS_TOP = 16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_SHARED}
 */
Intent.ACTION_MEDIA_SHARED = "android.intent.action.MEDIA_SHARED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_CALL}
 */
Intent.ACTION_CALL = "android.intent.action.CALL";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SCREEN_OFF}
 */
Intent.ACTION_SCREEN_OFF = "android.intent.action.SCREEN_OFF";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_INSTALL_PACKAGE}
 */
Intent.ACTION_INSTALL_PACKAGE = "android.intent.action.INSTALL_PACKAGE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_CAR_DOCK}
 */
Intent.CATEGORY_CAR_DOCK = "android.intent.category.CAR_DOCK";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_APP_BROWSER}
 */
Intent.CATEGORY_APP_BROWSER = "android.intent.category.APP_BROWSER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_REFERRER_NAME}
 */
Intent.EXTRA_REFERRER_NAME = "android.intent.extra.REFERRER_NAME";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_HTML_TEXT}
 */
Intent.EXTRA_HTML_TEXT = "android.intent.extra.HTML_TEXT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_NOT_UNKNOWN_SOURCE}
 */
Intent.EXTRA_NOT_UNKNOWN_SOURCE = "android.intent.extra.NOT_UNKNOWN_SOURCE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_QUICK_CLOCK}
 */
Intent.ACTION_QUICK_CLOCK = "android.intent.action.QUICK_CLOCK";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_DEVICE_STORAGE_OK}
 */
Intent.ACTION_DEVICE_STORAGE_OK = "android.intent.action.DEVICE_STORAGE_OK";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_RECEIVER_REPLACE_PENDING}
 */
Intent.FLAG_RECEIVER_REPLACE_PENDING = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MANAGED_PROFILE_ADDED}
 */
Intent.ACTION_MANAGED_PROFILE_ADDED = "android.intent.action.MANAGED_PROFILE_ADDED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_GRANT_WRITE_URI_PERMISSION}
 */
Intent.FLAG_GRANT_WRITE_URI_PERMISSION = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_FIRST_LAUNCH}
 */
Intent.ACTION_PACKAGE_FIRST_LAUNCH = "android.intent.action.PACKAGE_FIRST_LAUNCH";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_TASK_ON_HOME}
 */
Intent.FLAG_ACTIVITY_TASK_ON_HOME = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_HE_DESK_DOCK}
 */
Intent.CATEGORY_HE_DESK_DOCK = "android.intent.category.HE_DESK_DOCK";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_INSERT_OR_EDIT}
 */
Intent.ACTION_INSERT_OR_EDIT = "android.intent.action.INSERT_OR_EDIT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST}
 */
Intent.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST = "android.intent.category.FRAMEWORK_INSTRUMENTATION_TEST";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_SHUTDOWN_USERSPACE_ONLY}
 */
Intent.EXTRA_SHUTDOWN_USERSPACE_ONLY = "android.intent.extra.SHUTDOWN_USERSPACE_ONLY";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_DOCK_STATE_CAR}
 */
Intent.EXTRA_DOCK_STATE_CAR = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_RESTRICTIONS_BUNDLE}
 */
Intent.EXTRA_RESTRICTIONS_BUNDLE = "android.intent.extra.restrictions_bundle";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_WEB_SEARCH}
 */
Intent.ACTION_WEB_SEARCH = "android.intent.action.WEB_SEARCH";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_DEVICE_STORAGE_LOW}
 */
Intent.ACTION_DEVICE_STORAGE_LOW = "android.intent.action.DEVICE_STORAGE_LOW";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_CLEAR_TASK}
 */
Intent.FLAG_ACTIVITY_CLEAR_TASK = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_CLEAR_TOP}
 */
Intent.FLAG_ACTIVITY_CLEAR_TOP = 67108864;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_CHOOSER}
 */
Intent.ACTION_CHOOSER = "android.intent.action.CHOOSER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_REMOTE_INTENT_TOKEN}
 */
Intent.EXTRA_REMOTE_INTENT_TOKEN = "android.intent.extra.remote_intent_token";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_INFO}
 */
Intent.CATEGORY_INFO = "android.intent.category.INFO";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FILL_IN_ACTION}
 */
Intent.FILL_IN_ACTION = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PROCESS_TEXT}
 */
Intent.ACTION_PROCESS_TEXT = "android.intent.action.PROCESS_TEXT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MANAGE_PACKAGE_STORAGE}
 */
Intent.ACTION_MANAGE_PACKAGE_STORAGE = "android.intent.action.MANAGE_PACKAGE_STORAGE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_INSTALL}
 */
Intent.ACTION_PACKAGE_INSTALL = "android.intent.action.PACKAGE_INSTALL";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PICK}
 */
Intent.ACTION_PICK = "android.intent.action.PICK";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_BUG_REPORT}
 */
Intent.EXTRA_BUG_REPORT = "android.intent.extra.BUG_REPORT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_OPENABLE}
 */
Intent.CATEGORY_OPENABLE = "android.intent.category.OPENABLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS}
 */
Intent.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS = 8388608;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_RESTRICTIONS_LIST}
 */
Intent.EXTRA_RESTRICTIONS_LIST = "android.intent.extra.restrictions_list";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#URI_INTENT_SCHEME}
 */
Intent.URI_INTENT_SCHEME = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MY_PACKAGE_REPLACED}
 */
Intent.ACTION_MY_PACKAGE_REPLACED = "android.intent.action.MY_PACKAGE_REPLACED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_RESTARTED}
 */
Intent.ACTION_PACKAGE_RESTARTED = "android.intent.action.PACKAGE_RESTARTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_UMS_CONNECTED}
 */
Intent.ACTION_UMS_CONNECTED = "android.intent.action.UMS_CONNECTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_DOCK_STATE_HE_DESK}
 */
Intent.EXTRA_DOCK_STATE_HE_DESK = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_DEFAULT}
 */
Intent.ACTION_DEFAULT = "android.intent.action.VIEW";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_BROWSABLE}
 */
Intent.CATEGORY_BROWSABLE = "android.intent.category.BROWSABLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_CHOSEN_COMPONENT}
 */
Intent.EXTRA_CHOSEN_COMPONENT = "android.intent.extra.CHOSEN_COMPONENT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_ASSIST_INPUT_HINT_KEYBOARD}
 */
Intent.EXTRA_ASSIST_INPUT_HINT_KEYBOARD = "android.intent.extra.ASSIST_INPUT_HINT_KEYBOARD";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FILL_IN_CATEGORIES}
 */
Intent.FILL_IN_CATEGORIES = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_DOCK_EVENT}
 */
Intent.ACTION_DOCK_EVENT = "android.intent.action.DOCK_EVENT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_INPUT_METHOD_CHANGED}
 */
Intent.ACTION_INPUT_METHOD_CHANGED = "android.intent.action.INPUT_METHOD_CHANGED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_ASSIST}
 */
Intent.ACTION_ASSIST = "android.intent.action.ASSIST";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SEND_MULTIPLE}
 */
Intent.ACTION_SEND_MULTIPLE = "android.intent.action.SEND_MULTIPLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_CHANGED_UID_LIST}
 */
Intent.EXTRA_CHANGED_UID_LIST = "android.intent.extra.changed_uid_list";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_STREAM}
 */
Intent.EXTRA_STREAM = "android.intent.extra.STREAM";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_NEW_TASK}
 */
Intent.FLAG_ACTIVITY_NEW_TASK = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SCREEN_ON}
 */
Intent.ACTION_SCREEN_ON = "android.intent.action.SCREEN_ON";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_TAB}
 */
Intent.CATEGORY_TAB = "android.intent.category.TAB";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_GET_CONTENT}
 */
Intent.ACTION_GET_CONTENT = "android.intent.action.GET_CONTENT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_RECEIVER_REGISTERED_ONLY}
 */
Intent.FLAG_RECEIVER_REGISTERED_ONLY = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_USER_INITIALIZE}
 */
Intent.ACTION_USER_INITIALIZE = "android.intent.action.USER_INITIALIZE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FILL_IN_SELECTOR}
 */
Intent.FILL_IN_SELECTOR = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_REORDER_TO_FRONT}
 */
Intent.FLAG_ACTIVITY_REORDER_TO_FRONT = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_UNMOUNTABLE}
 */
Intent.ACTION_MEDIA_UNMOUNTABLE = "android.intent.action.MEDIA_UNMOUNTABLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_CREATE_DOCUMENT}
 */
Intent.ACTION_CREATE_DOCUMENT = "android.intent.action.CREATE_DOCUMENT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_BATTERY_OKAY}
 */
Intent.ACTION_BATTERY_OKAY = "android.intent.action.BATTERY_OKAY";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_RESTRICTIONS_INTENT}
 */
Intent.EXTRA_RESTRICTIONS_INTENT = "android.intent.extra.restrictions_intent";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_BUG_REPORT}
 */
Intent.ACTION_BUG_REPORT = "android.intent.action.BUG_REPORT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_FACTORY_TEST}
 */
Intent.ACTION_FACTORY_TEST = "android.intent.action.FACTORY_TEST";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_GET_RESTRICTION_ENTRIES}
 */
Intent.ACTION_GET_RESTRICTION_ENTRIES = "android.intent.action.GET_RESTRICTION_ENTRIES";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_WALLPAPER_CHANGED}
 */
Intent.ACTION_WALLPAPER_CHANGED = "android.intent.action.WALLPAPER_CHANGED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_NO_ANIMATION}
 */
Intent.FLAG_ACTIVITY_NO_ANIMATION = 65536;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SENDTO}
 */
Intent.ACTION_SENDTO = "android.intent.action.SENDTO";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_DOCK_STATE}
 */
Intent.EXTRA_DOCK_STATE = "android.intent.extra.DOCK_STATE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY}
 */
Intent.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FILL_IN_DATA}
 */
Intent.FILL_IN_DATA = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_SHORTCUT_ICON}
 */
Intent.EXTRA_SHORTCUT_ICON = "android.intent.extra.shortcut.ICON";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_TEXT}
 */
Intent.EXTRA_TEXT = "android.intent.extra.TEXT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_BATTERY_LOW}
 */
Intent.ACTION_BATTERY_LOW = "android.intent.action.BATTERY_LOW";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_CAMERA_BUTTON}
 */
Intent.ACTION_CAMERA_BUTTON = "android.intent.action.CAMERA_BUTTON";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_CHANGED}
 */
Intent.ACTION_PACKAGE_CHANGED = "android.intent.action.PACKAGE_CHANGED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_GRANT_PERSISTABLE_URI_PERMISSION}
 */
Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_ASSIST_UID}
 */
Intent.EXTRA_ASSIST_UID = "android.intent.extra.ASSIST_UID";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SHUTDOWN}
 */
Intent.ACTION_SHUTDOWN = "android.intent.action.ACTION_SHUTDOWN";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_PROCESS_TEXT}
 */
Intent.EXTRA_PROCESS_TEXT = "android.intent.extra.PROCESS_TEXT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_REFERRER}
 */
Intent.EXTRA_REFERRER = "android.intent.extra.REFERRER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_VIEW}
 */
Intent.ACTION_VIEW = "android.intent.action.VIEW";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_ASSIST_PACKAGE}
 */
Intent.EXTRA_ASSIST_PACKAGE = "android.intent.extra.ASSIST_PACKAGE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_APP_MESSAGING}
 */
Intent.CATEGORY_APP_MESSAGING = "android.intent.category.APP_MESSAGING";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_SHORTCUT_NAME}
 */
Intent.EXTRA_SHORTCUT_NAME = "android.intent.extra.shortcut.NAME";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_BOOT_COMPLETED}
 */
Intent.ACTION_BOOT_COMPLETED = "android.intent.action.BOOT_COMPLETED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SYNC}
 */
Intent.ACTION_SYNC = "android.intent.action.SYNC";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_PHONE_NUMBER}
 */
Intent.EXTRA_PHONE_NUMBER = "android.intent.extra.PHONE_NUMBER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_SELECTED_ALTERNATIVE}
 */
Intent.CATEGORY_SELECTED_ALTERNATIVE = "android.intent.category.SELECTED_ALTERNATIVE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_NO_USER_ACTION}
 */
Intent.FLAG_ACTIVITY_NO_USER_ACTION = 262144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SYSTEM_TUTORIAL}
 */
Intent.ACTION_SYSTEM_TUTORIAL = "android.intent.action.SYSTEM_TUTORIAL";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_DEVELOPMENT_PREFERENCE}
 */
Intent.CATEGORY_DEVELOPMENT_PREFERENCE = "android.intent.category.DEVELOPMENT_PREFERENCE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_SAMPLE_CODE}
 */
Intent.CATEGORY_SAMPLE_CODE = "android.intent.category.SAMPLE_CODE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_DOCK_STATE_LE_DESK}
 */
Intent.EXTRA_DOCK_STATE_LE_DESK = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SEND}
 */
Intent.ACTION_SEND = "android.intent.action.SEND";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_REMOVED}
 */
Intent.ACTION_MEDIA_REMOVED = "android.intent.action.MEDIA_REMOVED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PACKAGE_VERIFIED}
 */
Intent.ACTION_PACKAGE_VERIFIED = "android.intent.action.PACKAGE_VERIFIED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_TIME_CHANGED}
 */
Intent.ACTION_TIME_CHANGED = "android.intent.action.TIME_SET";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_UMS_DISCONNECTED}
 */
Intent.ACTION_UMS_DISCONNECTED = "android.intent.action.UMS_DISCONNECTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_EMAIL}
 */
Intent.EXTRA_EMAIL = "android.intent.extra.EMAIL";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_BAD_REMOVAL}
 */
Intent.ACTION_MEDIA_BAD_REMOVAL = "android.intent.action.MEDIA_BAD_REMOVAL";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_KEY_EVENT}
 */
Intent.EXTRA_KEY_EVENT = "android.intent.extra.KEY_EVENT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_EXCLUDE_STOPPED_PACKAGES}
 */
Intent.FLAG_EXCLUDE_STOPPED_PACKAGES = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_GTALK_SERVICE_DISCONNECTED}
 */
Intent.ACTION_GTALK_SERVICE_DISCONNECTED = "android.intent.action.GTALK_DISCONNECTED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_LAUNCHER}
 */
Intent.CATEGORY_LAUNCHER = "android.intent.category.LAUNCHER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_APPLICATION_RESTRICTIONS_CHANGED}
 */
Intent.ACTION_APPLICATION_RESTRICTIONS_CHANGED = "android.intent.action.APPLICATION_RESTRICTIONS_CHANGED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_BROUGHT_TO_FRONT}
 */
Intent.FLAG_ACTIVITY_BROUGHT_TO_FRONT = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_LEANBACK_LAUNCHER}
 */
Intent.CATEGORY_LEANBACK_LAUNCHER = "android.intent.category.LEANBACK_LAUNCHER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_CHECKING}
 */
Intent.ACTION_MEDIA_CHECKING = "android.intent.action.MEDIA_CHECKING";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_APP_MAPS}
 */
Intent.CATEGORY_APP_MAPS = "android.intent.category.APP_MAPS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_DIAL}
 */
Intent.ACTION_DIAL = "android.intent.action.DIAL";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_CHANGED_PACKAGE_LIST}
 */
Intent.EXTRA_CHANGED_PACKAGE_LIST = "android.intent.extra.changed_package_list";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_USER_FOREGROUND}
 */
Intent.ACTION_USER_FOREGROUND = "android.intent.action.USER_FOREGROUND";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_RUN}
 */
Intent.ACTION_RUN = "android.intent.action.RUN";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_CC}
 */
Intent.EXTRA_CC = "android.intent.extra.CC";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_CHOSEN_COMPONENT_INTENT_SENDER}
 */
Intent.EXTRA_CHOSEN_COMPONENT_INTENT_SENDER = "android.intent.extra.CHOSEN_COMPONENT_INTENT_SENDER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_PREFERENCE}
 */
Intent.CATEGORY_PREFERENCE = "android.intent.category.PREFERENCE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_EMBED}
 */
Intent.CATEGORY_EMBED = "android.intent.category.EMBED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_UNIT_TEST}
 */
Intent.CATEGORY_UNIT_TEST = "android.intent.category.UNIT_TEST";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_CREATE_SHORTCUT}
 */
Intent.ACTION_CREATE_SHORTCUT = "android.intent.action.CREATE_SHORTCUT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_SCANNER_SCAN_FILE}
 */
Intent.ACTION_MEDIA_SCANNER_SCAN_FILE = "android.intent.action.MEDIA_SCANNER_SCAN_FILE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_MEDIA_NOFS}
 */
Intent.ACTION_MEDIA_NOFS = "android.intent.action.MEDIA_NOFS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_OPEN_DOCUMENT_TREE}
 */
Intent.ACTION_OPEN_DOCUMENT_TREE = "android.intent.action.OPEN_DOCUMENT_TREE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_INSTALLER_PACKAGE_NAME}
 */
Intent.EXTRA_INSTALLER_PACKAGE_NAME = "android.intent.extra.INSTALLER_PACKAGE_NAME";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_ORIGINATING_URI}
 */
Intent.EXTRA_ORIGINATING_URI = "android.intent.extra.ORIGINATING_URI";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_GRANT_PREFIX_URI_PERMISSION}
 */
Intent.FLAG_GRANT_PREFIX_URI_PERMISSION = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#URI_ANDROID_APP_SCHEME}
 */
Intent.URI_ANDROID_APP_SCHEME = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_NO_HISTORY}
 */
Intent.FLAG_ACTIVITY_NO_HISTORY = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_RECEIVER_FOREGROUND}
 */
Intent.FLAG_RECEIVER_FOREGROUND = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#CATEGORY_DESK_DOCK}
 */
Intent.CATEGORY_DESK_DOCK = "android.intent.category.DESK_DOCK";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_TITLE}
 */
Intent.EXTRA_TITLE = "android.intent.extra.TITLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_SEARCH_LONG_PRESS}
 */
Intent.ACTION_SEARCH_LONG_PRESS = "android.intent.action.SEARCH_LONG_PRESS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_SUBJECT}
 */
Intent.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_INTENT}
 */
Intent.EXTRA_INTENT = "android.intent.extra.INTENT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_UNINSTALL_PACKAGE}
 */
Intent.ACTION_UNINSTALL_PACKAGE = "android.intent.action.UNINSTALL_PACKAGE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_USER_BACKGROUND}
 */
Intent.ACTION_USER_BACKGROUND = "android.intent.action.USER_BACKGROUND";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_RETAIN_IN_RECENTS}
 */
Intent.FLAG_ACTIVITY_RETAIN_IN_RECENTS = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_ALLOW_MULTIPLE}
 */
Intent.EXTRA_ALLOW_MULTIPLE = "android.intent.extra.ALLOW_MULTIPLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PROVIDER_CHANGED}
 */
Intent.ACTION_PROVIDER_CHANGED = "android.intent.action.PROVIDER_CHANGED";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_DEBUG_LOG_RESOLUTION}
 */
Intent.FLAG_DEBUG_LOG_RESOLUTION = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#EXTRA_USER}
 */
Intent.EXTRA_USER = "android.intent.extra.USER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#FLAG_ACTIVITY_SINGLE_TOP}
 */
Intent.FLAG_ACTIVITY_SINGLE_TOP = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#ACTION_PASTE}
 */
Intent.ACTION_PASTE = "android.intent.action.PASTE";

// Inner classes
Object.defineProperty(Intent, 'FilterComparison', {
	get: function() {
		return require('android.content.Intent$FilterComparison');
	},
	enumerable: true
});
Object.defineProperty(Intent, 'ShortcutIconResource', {
	get: function() {
		return require('android.content.Intent$ShortcutIconResource');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/content/Intent.html#CREATOR
Object.defineProperty(Intent, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.Intent') {
				return new Intent(result);
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
 * @function parseIntent
 * @static
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#parseIntent(android.content.res.Resources, org.xmlpull.v1.XmlPullParser, android.util.AttributeSet)}
 **/
Intent.parseIntent = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseIntent',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntentOld
 * @static
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getIntentOld(java.lang.String)}
 **/
Intent.getIntentOld = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getIntentOld',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function makeMainActivity
 * @static
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#makeMainActivity(android.content.ComponentName)}
 **/
Intent.makeMainActivity = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'makeMainActivity',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getIntent(java.lang.String)}
 **/
Intent.getIntent = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getIntent',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function normalizeMimeType
 * @static
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#normalizeMimeType(java.lang.String)}
 **/
Intent.normalizeMimeType = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'normalizeMimeType',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createChooser
 * @static
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#createChooser(android.content.Intent, java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#createChooser(android.content.Intent, java.lang.CharSequence, android.content.IntentSender)}
 **/
Intent.createChooser = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createChooser',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function makeRestartActivityTask
 * @static
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#makeRestartActivityTask(android.content.ComponentName)}
 **/
Intent.makeRestartActivityTask = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'makeRestartActivityTask',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function makeMainSelectorActivity
 * @static
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#makeMainSelectorActivity(java.lang.String, java.lang.String)}
 **/
Intent.makeMainSelectorActivity = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'makeMainSelectorActivity',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseUri
 * @static
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#parseUri(java.lang.String, int)}
 **/
Intent.parseUri = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseUri',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
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
 * @function fillIn
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#fillIn(android.content.Intent, int)}
 **/
Intent.prototype.fillIn = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'fillIn',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharSequenceArrayListExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getCharSequenceArrayListExtra(java.lang.String)}
 **/
Intent.prototype.getCharSequenceArrayListExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharSequenceArrayListExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getCharExtra(java.lang.String, char)}
 **/
Intent.prototype.getCharExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByteExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getByteExtra(java.lang.String, byte)}
 **/
Intent.prototype.getByteExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getByteExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDataString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getDataString()}
 **/
Intent.prototype.getDataString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#resolveActivity(android.content.pm.PackageManager)}
 **/
Intent.prototype.resolveActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByteArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getByteArrayExtra(java.lang.String)}
 **/
Intent.prototype.getByteArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getByteArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#addFlags(int)}
 **/
Intent.prototype.addFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCategories
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getCategories()}
 **/
Intent.prototype.getCategories = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCategories',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDoubleArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getDoubleArrayExtra(java.lang.String)}
 **/
Intent.prototype.getDoubleArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDoubleArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getClipData()}
 **/
Intent.prototype.getClipData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getExtras()}
 **/
Intent.prototype.getExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParcelableArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getParcelableArrayExtra(java.lang.String)}
 **/
Intent.prototype.getParcelableArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParcelableArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLongExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getLongExtra(java.lang.String, long)}
 **/
Intent.prototype.getLongExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLongExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBooleanExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getBooleanExtra(java.lang.String, boolean)}
 **/
Intent.prototype.getBooleanExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBooleanExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putCharSequenceArrayListExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putCharSequenceArrayListExtra(java.lang.String, java.util.ArrayList)}
 **/
Intent.prototype.putCharSequenceArrayListExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putCharSequenceArrayListExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExtrasClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setExtrasClassLoader(java.lang.ClassLoader)}
 **/
Intent.prototype.setExtrasClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExtrasClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getPackage()}
 **/
Intent.prototype.getPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#resolveType(android.content.Context)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#resolveType(android.content.ContentResolver)}
 **/
Intent.prototype.resolveType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClipData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setClipData(android.content.ClipData)}
 **/
Intent.prototype.setClipData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClipData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShortArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getShortArrayExtra(java.lang.String)}
 **/
Intent.prototype.getShortArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShortArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setPackage(java.lang.String)}
 **/
Intent.prototype.setPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cloneFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#cloneFilter()}
 **/
Intent.prototype.cloneFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cloneFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharSequenceExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getCharSequenceExtra(java.lang.String)}
 **/
Intent.prototype.getCharSequenceExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharSequenceExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStringExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getStringExtra(java.lang.String)}
 **/
Intent.prototype.getStringExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStringExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTypeAndNormalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setTypeAndNormalize(java.lang.String)}
 **/
Intent.prototype.setTypeAndNormalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTypeAndNormalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSourceBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setSourceBounds(android.graphics.Rect)}
 **/
Intent.prototype.setSourceBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSourceBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloatExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getFloatExtra(java.lang.String, float)}
 **/
Intent.prototype.getFloatExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloatExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getType()}
 **/
Intent.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelector
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getSelector()}
 **/
Intent.prototype.getSelector = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelector',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBundleExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getBundleExtra(java.lang.String)}
 **/
Intent.prototype.getBundleExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBundleExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLongArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getLongArrayExtra(java.lang.String)}
 **/
Intent.prototype.getLongArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLongArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getComponent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getComponent()}
 **/
Intent.prototype.getComponent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getComponent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
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
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getFlags()}
 **/
Intent.prototype.getFlags = function() {
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
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveActivityInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#resolveActivityInfo(android.content.pm.PackageManager, int)}
 **/
Intent.prototype.resolveActivityInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveActivityInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloatArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getFloatArrayExtra(java.lang.String)}
 **/
Intent.prototype.getFloatArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloatArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
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
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#writeToParcel(android.os.Parcel, int)}
 **/
Intent.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setFlags(int)}
 **/
Intent.prototype.setFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShortExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getShortExtra(java.lang.String, short)}
 **/
Intent.prototype.getShortExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShortExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setAction(java.lang.String)}
 **/
Intent.prototype.setAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function filterEquals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#filterEquals(android.content.Intent)}
 **/
Intent.prototype.filterEquals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'filterEquals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setClassName(android.content.Context, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setClassName(java.lang.String, java.lang.String)}
 **/
Intent.prototype.setClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getIntExtra(java.lang.String, int)}
 **/
Intent.prototype.getIntExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putStringArrayListExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putStringArrayListExtra(java.lang.String, java.util.ArrayList)}
 **/
Intent.prototype.putStringArrayListExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putStringArrayListExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addCategory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#addCategory(java.lang.String)}
 **/
Intent.prototype.addCategory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addCategory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasFileDescriptors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#hasFileDescriptors()}
 **/
Intent.prototype.hasFileDescriptors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasFileDescriptors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putParcelableArrayListExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putParcelableArrayListExtra(java.lang.String, java.util.ArrayList)}
 **/
Intent.prototype.putParcelableArrayListExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putParcelableArrayListExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#replaceExtras(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#replaceExtras(android.os.Bundle)}
 **/
Intent.prototype.replaceExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStringArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getStringArrayExtra(java.lang.String)}
 **/
Intent.prototype.getStringArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStringArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSerializableExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getSerializableExtra(java.lang.String)}
 **/
Intent.prototype.getSerializableExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSerializableExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeCategory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#removeCategory(java.lang.String)}
 **/
Intent.prototype.removeCategory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeCategory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBooleanArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getBooleanArrayExtra(java.lang.String)}
 **/
Intent.prototype.getBooleanArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBooleanArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStringArrayListExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getStringArrayListExtra(java.lang.String)}
 **/
Intent.prototype.getStringArrayListExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStringArrayListExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getData()}
 **/
Intent.prototype.getData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveTypeIfNeeded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#resolveTypeIfNeeded(android.content.ContentResolver)}
 **/
Intent.prototype.resolveTypeIfNeeded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveTypeIfNeeded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putIntegerArrayListExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putIntegerArrayListExtra(java.lang.String, java.util.ArrayList)}
 **/
Intent.prototype.putIntegerArrayListExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putIntegerArrayListExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getScheme()}
 **/
Intent.prototype.getScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntegerArrayListExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getIntegerArrayListExtra(java.lang.String)}
 **/
Intent.prototype.getIntegerArrayListExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntegerArrayListExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getIntArrayExtra(java.lang.String)}
 **/
Intent.prototype.getIntArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setData(android.net.Uri)}
 **/
Intent.prototype.setData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setClass(android.content.Context, java.lang.Class)}
 **/
Intent.prototype.setClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toURI
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#toURI()}
 **/
Intent.prototype.toURI = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toURI',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#toUri(int)}
 **/
Intent.prototype.toUri = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toUri',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDataAndType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setDataAndType(android.net.Uri, java.lang.String)}
 **/
Intent.prototype.setDataAndType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDataAndType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDataAndTypeAndNormalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setDataAndTypeAndNormalize(android.net.Uri, java.lang.String)}
 **/
Intent.prototype.setDataAndTypeAndNormalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDataAndTypeAndNormalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
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
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getAction()}
 **/
Intent.prototype.getAction = function() {
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
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setComponent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setComponent(android.content.ComponentName)}
 **/
Intent.prototype.setComponent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setComponent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
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
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#readFromParcel(android.os.Parcel)}
 **/
Intent.prototype.readFromParcel = function() {
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
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setType(java.lang.String)}
 **/
Intent.prototype.setType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
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
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#describeContents()}
 **/
Intent.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#hasExtra(java.lang.String)}
 **/
Intent.prototype.hasExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtras(android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtras(android.os.Bundle)}
 **/
Intent.prototype.putExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasCategory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#hasCategory(java.lang.String)}
 **/
Intent.prototype.hasCategory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasCategory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, boolean)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, byte)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, char)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, short)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, long)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, float)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, double)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, android.os.Parcelable)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, android.os.Parcelable[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, java.io.Serializable)}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, boolean[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, byte[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, short[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, char[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, int[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, long[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, float[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, double[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, java.lang.String[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, java.lang.CharSequence[])}
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#putExtra(java.lang.String, android.os.Bundle)}
 **/
Intent.prototype.putExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDoubleExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getDoubleExtra(java.lang.String, double)}
 **/
Intent.prototype.getDoubleExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDoubleExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharSequenceArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getCharSequenceArrayExtra(java.lang.String)}
 **/
Intent.prototype.getCharSequenceArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharSequenceArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSourceBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getSourceBounds()}
 **/
Intent.prototype.getSourceBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSourceBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDataAndNormalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setDataAndNormalize(android.net.Uri)}
 **/
Intent.prototype.setDataAndNormalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDataAndNormalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#clone()}
 **/
Intent.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#removeExtra(java.lang.String)}
 **/
Intent.prototype.removeExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelector
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#setSelector(android.content.Intent)}
 **/
Intent.prototype.setSelector = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelector',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function filterHashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#filterHashCode()}
 **/
Intent.prototype.filterHashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'filterHashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
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
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#toString()}
 **/
Intent.prototype.toString = function() {
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
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParcelableExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getParcelableExtra(java.lang.String)}
 **/
Intent.prototype.getParcelableExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParcelableExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharArrayExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getCharArrayExtra(java.lang.String)}
 **/
Intent.prototype.getCharArrayExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharArrayExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParcelableArrayListExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Intent.html#getParcelableArrayListExtra(java.lang.String)}
 **/
Intent.prototype.getParcelableArrayListExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParcelableArrayListExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Intent') {
			return new Intent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Intent;
