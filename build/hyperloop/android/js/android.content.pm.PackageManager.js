/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PackageManager
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.PackageManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html}
 **/
var PackageManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.PackageManager')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.content.pm.PackageManager. Create a subclass using android.content.pm.PackageManager.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PackageManager.prototype = Object.create(SuperClass.prototype);
PackageManager.prototype.constructor = PackageManager;

Object.defineProperty(PackageManager.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PackageManager(this.$native.super);
	},
	enumerable: true
});

PackageManager.className = 'android.content.pm.PackageManager';
PackageManager.prototype.className = 'android.content.pm.PackageManager';

// class property
Object.defineProperty(PackageManager, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.PackageManager');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PackageManager.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.PackageManager');

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
	SubClass.prototype = Object.create(PackageManager.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PackageManager.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PackageManager(Hyperloop.cast('android.content.pm.PackageManager', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_AUDIO_LOW_LATENCY}
 */
PackageManager.FEATURE_AUDIO_LOW_LATENCY = "android.hardware.audio.low_latency";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_LOCATION_GPS}
 */
PackageManager.FEATURE_LOCATION_GPS = "android.hardware.location.gps";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_SERVICES}
 */
PackageManager.GET_SERVICES = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_GYROSCOPE}
 */
PackageManager.FEATURE_SENSOR_GYROSCOPE = "android.hardware.sensor.gyroscope";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CAMERA_EXTERNAL}
 */
PackageManager.FEATURE_CAMERA_EXTERNAL = "android.hardware.camera.external";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#COMPONENT_ENABLED_STATE_DISABLED_USER}
 */
PackageManager.COMPONENT_ENABLED_STATE_DISABLED_USER = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SCREEN_LANDSCAPE}
 */
PackageManager.FEATURE_SCREEN_LANDSCAPE = "android.hardware.screen.landscape";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#MATCH_DEFAULT_ONLY}
 */
PackageManager.MATCH_DEFAULT_ONLY = 65536;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_BAROMETER}
 */
PackageManager.FEATURE_SENSOR_BAROMETER = "android.hardware.sensor.barometer";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CONSUMER_IR}
 */
PackageManager.FEATURE_CONSUMER_IR = "android.hardware.consumerir";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_MIDI}
 */
PackageManager.FEATURE_MIDI = "android.software.midi";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_SHARED_LIBRARY_FILES}
 */
PackageManager.GET_SHARED_LIBRARY_FILES = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_FAKETOUCH_MULTITOUCH_DISTINCT}
 */
PackageManager.FEATURE_FAKETOUCH_MULTITOUCH_DISTINCT = "android.hardware.faketouch.multitouch.distinct";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SIP_VOIP}
 */
PackageManager.FEATURE_SIP_VOIP = "android.software.sip.voip";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#PERMISSION_GRANTED}
 */
PackageManager.PERMISSION_GRANTED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CAMERA_AUTOFOCUS}
 */
PackageManager.FEATURE_CAMERA_AUTOFOCUS = "android.hardware.camera.autofocus";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#MATCH_ALL}
 */
PackageManager.MATCH_ALL = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CAMERA_FLASH}
 */
PackageManager.FEATURE_CAMERA_FLASH = "android.hardware.camera.flash";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_WIFI}
 */
PackageManager.FEATURE_WIFI = "android.hardware.wifi";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_RELATIVE_HUMIDITY}
 */
PackageManager.FEATURE_SENSOR_RELATIVE_HUMIDITY = "android.hardware.sensor.relative_humidity";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_WIFI_DIRECT}
 */
PackageManager.FEATURE_WIFI_DIRECT = "android.hardware.wifi.direct";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_ACCELEROMETER}
 */
PackageManager.FEATURE_SENSOR_ACCELEROMETER = "android.hardware.sensor.accelerometer";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_PROXIMITY}
 */
PackageManager.FEATURE_SENSOR_PROXIMITY = "android.hardware.sensor.proximity";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_DEVICE_ADMIN}
 */
PackageManager.FEATURE_DEVICE_ADMIN = "android.software.device_admin";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_DISABLED_UNTIL_USED_COMPONENTS}
 */
PackageManager.GET_DISABLED_UNTIL_USED_COMPONENTS = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_HEART_RATE}
 */
PackageManager.FEATURE_SENSOR_HEART_RATE = "android.hardware.sensor.heartrate";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_RECEIVERS}
 */
PackageManager.GET_RECEIVERS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_GAMEPAD}
 */
PackageManager.FEATURE_GAMEPAD = "android.hardware.gamepad";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CAMERA}
 */
PackageManager.FEATURE_CAMERA = "android.hardware.camera";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#SIGNATURE_NEITHER_SIGNED}
 */
PackageManager.SIGNATURE_NEITHER_SIGNED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#EXTRA_VERIFICATION_RESULT}
 */
PackageManager.EXTRA_VERIFICATION_RESULT = "android.content.pm.extra.VERIFICATION_RESULT";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_DISABLED_COMPONENTS}
 */
PackageManager.GET_DISABLED_COMPONENTS = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_RESOLVED_FILTER}
 */
PackageManager.GET_RESOLVED_FILTER = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_INSTRUMENTATION}
 */
PackageManager.GET_INSTRUMENTATION = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#SIGNATURE_UNKNOWN_PACKAGE}
 */
PackageManager.SIGNATURE_UNKNOWN_PACKAGE = -4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CAMERA_CAPABILITY_MANUAL_POST_PROCESSING}
 */
PackageManager.FEATURE_CAMERA_CAPABILITY_MANUAL_POST_PROCESSING = "android.hardware.camera.capability.manual_post_processing";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SIP}
 */
PackageManager.FEATURE_SIP = "android.software.sip";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_META_DATA}
 */
PackageManager.GET_META_DATA = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_PROVIDERS}
 */
PackageManager.GET_PROVIDERS = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CAMERA_LEVEL_FULL}
 */
PackageManager.FEATURE_CAMERA_LEVEL_FULL = "android.hardware.camera.level.full";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_LOCATION}
 */
PackageManager.FEATURE_LOCATION = "android.hardware.location";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_NFC}
 */
PackageManager.FEATURE_NFC = "android.hardware.nfc";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_USB_ACCESSORY}
 */
PackageManager.FEATURE_USB_ACCESSORY = "android.hardware.usb.accessory";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_UNINSTALLED_PACKAGES}
 */
PackageManager.GET_UNINSTALLED_PACKAGES = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_OPENGLES_EXTENSION_PACK}
 */
PackageManager.FEATURE_OPENGLES_EXTENSION_PACK = "android.hardware.opengles.aep";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#SIGNATURE_MATCH}
 */
PackageManager.SIGNATURE_MATCH = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_NFC_HOST_CARD_EMULATION}
 */
PackageManager.FEATURE_NFC_HOST_CARD_EMULATION = "android.hardware.nfc.hce";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_LEANBACK}
 */
PackageManager.FEATURE_LEANBACK = "android.software.leanback";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#COMPONENT_ENABLED_STATE_ENABLED}
 */
PackageManager.COMPONENT_ENABLED_STATE_ENABLED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_INPUT_METHODS}
 */
PackageManager.FEATURE_INPUT_METHODS = "android.software.input_methods";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#COMPONENT_ENABLED_STATE_DEFAULT}
 */
PackageManager.COMPONENT_ENABLED_STATE_DEFAULT = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_GIDS}
 */
PackageManager.GET_GIDS = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_LIGHT}
 */
PackageManager.FEATURE_SENSOR_LIGHT = "android.hardware.sensor.light";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_TELEVISION}
 */
PackageManager.FEATURE_TELEVISION = "android.hardware.type.television";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#VERIFICATION_REJECT}
 */
PackageManager.VERIFICATION_REJECT = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#EXTRA_VERIFICATION_ID}
 */
PackageManager.EXTRA_VERIFICATION_ID = "android.content.pm.extra.VERIFICATION_ID";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_STEP_DETECTOR}
 */
PackageManager.FEATURE_SENSOR_STEP_DETECTOR = "android.hardware.sensor.stepdetector";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CAMERA_CAPABILITY_RAW}
 */
PackageManager.FEATURE_CAMERA_CAPABILITY_RAW = "android.hardware.camera.capability.raw";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_INTENT_FILTERS}
 */
PackageManager.GET_INTENT_FILTERS = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_FINGERPRINT}
 */
PackageManager.FEATURE_FINGERPRINT = "android.hardware.fingerprint";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_MICROPHONE}
 */
PackageManager.FEATURE_MICROPHONE = "android.hardware.microphone";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_BLUETOOTH_LE}
 */
PackageManager.FEATURE_BLUETOOTH_LE = "android.hardware.bluetooth_le";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#SIGNATURE_NO_MATCH}
 */
PackageManager.SIGNATURE_NO_MATCH = -3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#COMPONENT_ENABLED_STATE_DISABLED_UNTIL_USED}
 */
PackageManager.COMPONENT_ENABLED_STATE_DISABLED_UNTIL_USED = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_TOUCHSCREEN_MULTITOUCH_JAZZHAND}
 */
PackageManager.FEATURE_TOUCHSCREEN_MULTITOUCH_JAZZHAND = "android.hardware.touchscreen.multitouch.jazzhand";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_COMPASS}
 */
PackageManager.FEATURE_SENSOR_COMPASS = "android.hardware.sensor.compass";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_BACKUP}
 */
PackageManager.FEATURE_BACKUP = "android.software.backup";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_ACTIVITIES}
 */
PackageManager.GET_ACTIVITIES = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_BLUETOOTH}
 */
PackageManager.FEATURE_BLUETOOTH = "android.hardware.bluetooth";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SECURELY_REMOVES_USERS}
 */
PackageManager.FEATURE_SECURELY_REMOVES_USERS = "android.software.securely_removes_users";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_TELEPHONY}
 */
PackageManager.FEATURE_TELEPHONY = "android.hardware.telephony";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#PERMISSION_DENIED}
 */
PackageManager.PERMISSION_DENIED = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_CONFIGURATIONS}
 */
PackageManager.GET_CONFIGURATIONS = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CAMERA_ANY}
 */
PackageManager.FEATURE_CAMERA_ANY = "android.hardware.camera.any";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_FAKETOUCH}
 */
PackageManager.FEATURE_FAKETOUCH = "android.hardware.faketouch";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_PERMISSIONS}
 */
PackageManager.GET_PERMISSIONS = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_AUDIO_PRO}
 */
PackageManager.FEATURE_AUDIO_PRO = "android.hardware.audio.pro";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#SIGNATURE_FIRST_NOT_SIGNED}
 */
PackageManager.SIGNATURE_FIRST_NOT_SIGNED = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#COMPONENT_ENABLED_STATE_DISABLED}
 */
PackageManager.COMPONENT_ENABLED_STATE_DISABLED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_AUTOMOTIVE}
 */
PackageManager.FEATURE_AUTOMOTIVE = "android.hardware.type.automotive";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_PRINTING}
 */
PackageManager.FEATURE_PRINTING = "android.software.print";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_MANAGED_USERS}
 */
PackageManager.FEATURE_MANAGED_USERS = "android.software.managed_users";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_STEP_COUNTER}
 */
PackageManager.FEATURE_SENSOR_STEP_COUNTER = "android.hardware.sensor.stepcounter";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#VERIFICATION_ALLOW}
 */
PackageManager.VERIFICATION_ALLOW = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_AUDIO_OUTPUT}
 */
PackageManager.FEATURE_AUDIO_OUTPUT = "android.hardware.audio.output";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_AMBIENT_TEMPERATURE}
 */
PackageManager.FEATURE_SENSOR_AMBIENT_TEMPERATURE = "android.hardware.sensor.ambient_temperature";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_USB_HOST}
 */
PackageManager.FEATURE_USB_HOST = "android.hardware.usb.host";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_APP_WIDGETS}
 */
PackageManager.FEATURE_APP_WIDGETS = "android.software.app_widgets";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CONNECTION_SERVICE}
 */
PackageManager.FEATURE_CONNECTION_SERVICE = "android.software.connectionservice";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_WATCH}
 */
PackageManager.FEATURE_WATCH = "android.hardware.type.watch";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_TELEPHONY_CDMA}
 */
PackageManager.FEATURE_TELEPHONY_CDMA = "android.hardware.telephony.cdma";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_TELEPHONY_GSM}
 */
PackageManager.FEATURE_TELEPHONY_GSM = "android.hardware.telephony.gsm";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_HOME_SCREEN}
 */
PackageManager.FEATURE_HOME_SCREEN = "android.software.home_screen";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_LIVE_TV}
 */
PackageManager.FEATURE_LIVE_TV = "android.software.live_tv";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_TOUCHSCREEN_MULTITOUCH}
 */
PackageManager.FEATURE_TOUCHSCREEN_MULTITOUCH = "android.hardware.touchscreen.multitouch";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#MAXIMUM_VERIFICATION_TIMEOUT}
 */
PackageManager.MAXIMUM_VERIFICATION_TIMEOUT = 3600000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_HIFI_SENSORS}
 */
PackageManager.FEATURE_HIFI_SENSORS = "android.hardware.sensor.hifi_sensors";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CAMERA_CAPABILITY_MANUAL_SENSOR}
 */
PackageManager.FEATURE_CAMERA_CAPABILITY_MANUAL_SENSOR = "android.hardware.camera.capability.manual_sensor";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_FAKETOUCH_MULTITOUCH_JAZZHAND}
 */
PackageManager.FEATURE_FAKETOUCH_MULTITOUCH_JAZZHAND = "android.hardware.faketouch.multitouch.jazzhand";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_WEBVIEW}
 */
PackageManager.FEATURE_WEBVIEW = "android.software.webview";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_CAMERA_FRONT}
 */
PackageManager.FEATURE_CAMERA_FRONT = "android.hardware.camera.front";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_URI_PERMISSION_PATTERNS}
 */
PackageManager.GET_URI_PERMISSION_PATTERNS = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_TOUCHSCREEN_MULTITOUCH_DISTINCT}
 */
PackageManager.FEATURE_TOUCHSCREEN_MULTITOUCH_DISTINCT = "android.hardware.touchscreen.multitouch.distinct";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#SIGNATURE_SECOND_NOT_SIGNED}
 */
PackageManager.SIGNATURE_SECOND_NOT_SIGNED = -2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SENSOR_HEART_RATE_ECG}
 */
PackageManager.FEATURE_SENSOR_HEART_RATE_ECG = "android.hardware.sensor.heartrate.ecg";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_SCREEN_PORTRAIT}
 */
PackageManager.FEATURE_SCREEN_PORTRAIT = "android.hardware.screen.portrait";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#DONT_KILL_APP}
 */
PackageManager.DONT_KILL_APP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_VERIFIED_BOOT}
 */
PackageManager.FEATURE_VERIFIED_BOOT = "android.software.verified_boot";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_TOUCHSCREEN}
 */
PackageManager.FEATURE_TOUCHSCREEN = "android.hardware.touchscreen";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_LOCATION_NETWORK}
 */
PackageManager.FEATURE_LOCATION_NETWORK = "android.hardware.location.network";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#FEATURE_LIVE_WALLPAPER}
 */
PackageManager.FEATURE_LIVE_WALLPAPER = "android.software.live_wallpaper";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#GET_SIGNATURES}
 */
PackageManager.GET_SIGNATURES = 64;

// Inner classes
Object.defineProperty(PackageManager, 'NameNotFoundException', {
	get: function() {
		return require('android.content.pm.PackageManager$NameNotFoundException');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getDefaultActivityIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getDefaultActivityIcon()}
 **/
PackageManager.prototype.getDefaultActivityIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDefaultActivityIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getDrawable(java.lang.String, int, android.content.pm.ApplicationInfo)}
 **/
PackageManager.prototype.getDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setComponentEnabledSetting
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#setComponentEnabledSetting(android.content.ComponentName, int, int)}
 **/
PackageManager.prototype.setComponentEnabledSetting = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setComponentEnabledSetting',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#addPermission(android.content.pm.PermissionInfo)}
 **/
PackageManager.prototype.addPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function queryIntentContentProviders
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#queryIntentContentProviders(android.content.Intent, int)}
 **/
PackageManager.prototype.queryIntentContentProviders = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'queryIntentContentProviders',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPreferredPackages
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getPreferredPackages(int)}
 **/
PackageManager.prototype.getPreferredPackages = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPreferredPackages',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemSharedLibraryNames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getSystemSharedLibraryNames()}
 **/
PackageManager.prototype.getSystemSharedLibraryNames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemSharedLibraryNames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLeanbackLaunchIntentForPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getLeanbackLaunchIntentForPackage(java.lang.String)}
 **/
PackageManager.prototype.getLeanbackLaunchIntentForPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLeanbackLaunchIntentForPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAllPermissionGroups
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getAllPermissionGroups(int)}
 **/
PackageManager.prototype.getAllPermissionGroups = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAllPermissionGroups',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#resolveActivity(android.content.Intent, int)}
 **/
PackageManager.prototype.resolveActivity = function() {
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
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#checkPermission(java.lang.String, java.lang.String)}
 **/
PackageManager.prototype.checkPermission = function() {
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
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInstallerPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getInstallerPackageName(java.lang.String)}
 **/
PackageManager.prototype.getInstallerPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInstallerPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkSignatures
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#checkSignatures(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#checkSignatures(int, int)}
 **/
PackageManager.prototype.checkSignatures = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkSignatures',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function queryPermissionsByGroup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#queryPermissionsByGroup(java.lang.String, int)}
 **/
PackageManager.prototype.queryPermissionsByGroup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'queryPermissionsByGroup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageInstaller
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getPackageInstaller()}
 **/
PackageManager.prototype.getPackageInstaller = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageInstaller',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActivityBanner
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getActivityBanner(android.content.ComponentName)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getActivityBanner(android.content.Intent)}
 **/
PackageManager.prototype.getActivityBanner = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActivityBanner',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActivityIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getActivityIcon(android.content.ComponentName)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getActivityIcon(android.content.Intent)}
 **/
PackageManager.prototype.getActivityIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActivityIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNameForUid
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getNameForUid(int)}
 **/
PackageManager.prototype.getNameForUid = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNameForUid',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getPackageInfo(java.lang.String, int)}
 **/
PackageManager.prototype.getPackageInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInstrumentationInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getInstrumentationInfo(android.content.ComponentName, int)}
 **/
PackageManager.prototype.getInstrumentationInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInstrumentationInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackagesHoldingPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getPackagesHoldingPermissions(java.lang.String[], int)}
 **/
PackageManager.prototype.getPackagesHoldingPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackagesHoldingPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getText(java.lang.String, int, android.content.pm.ApplicationInfo)}
 **/
PackageManager.prototype.getText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function verifyPendingInstall
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#verifyPendingInstall(int, int)}
 **/
PackageManager.prototype.verifyPendingInstall = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'verifyPendingInstall',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPermissionGroupInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getPermissionGroupInfo(java.lang.String, int)}
 **/
PackageManager.prototype.getPermissionGroupInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPermissionGroupInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removePermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#removePermission(java.lang.String)}
 **/
PackageManager.prototype.removePermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removePermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getServiceInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getServiceInfo(android.content.ComponentName, int)}
 **/
PackageManager.prototype.getServiceInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getServiceInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLaunchIntentForPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getLaunchIntentForPackage(java.lang.String)}
 **/
PackageManager.prototype.getLaunchIntentForPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLaunchIntentForPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function queryIntentActivityOptions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#queryIntentActivityOptions(android.content.ComponentName, android.content.Intent[], android.content.Intent, int)}
 **/
PackageManager.prototype.queryIntentActivityOptions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'queryIntentActivityOptions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removePackageFromPreferred
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#removePackageFromPreferred(java.lang.String)}
 **/
PackageManager.prototype.removePackageFromPreferred = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removePackageFromPreferred',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setInstallerPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#setInstallerPackageName(java.lang.String, java.lang.String)}
 **/
PackageManager.prototype.setInstallerPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setInstallerPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplicationLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getApplicationLabel(android.content.pm.ApplicationInfo)}
 **/
PackageManager.prototype.getApplicationLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getApplicationLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplicationIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getApplicationIcon(android.content.pm.ApplicationInfo)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getApplicationIcon(java.lang.String)}
 **/
PackageManager.prototype.getApplicationIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getApplicationIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPermissionRevokedByPolicy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#isPermissionRevokedByPolicy(java.lang.String, java.lang.String)}
 **/
PackageManager.prototype.isPermissionRevokedByPolicy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPermissionRevokedByPolicy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUserBadgedDrawableForDensity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getUserBadgedDrawableForDensity(android.graphics.drawable.Drawable, android.os.UserHandle, android.graphics.Rect, int)}
 **/
PackageManager.prototype.getUserBadgedDrawableForDensity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUserBadgedDrawableForDensity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canonicalToCurrentPackageNames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#canonicalToCurrentPackageNames(java.lang.String[])}
 **/
PackageManager.prototype.canonicalToCurrentPackageNames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canonicalToCurrentPackageNames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPreferredActivities
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getPreferredActivities(java.util.List, java.util.List, java.lang.String)}
 **/
PackageManager.prototype.getPreferredActivities = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPreferredActivities',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProviderInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getProviderInfo(android.content.ComponentName, int)}
 **/
PackageManager.prototype.getProviderInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProviderInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSafeMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#isSafeMode()}
 **/
PackageManager.prototype.isSafeMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSafeMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPermissionInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getPermissionInfo(java.lang.String, int)}
 **/
PackageManager.prototype.getPermissionInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPermissionInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getComponentEnabledSetting
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getComponentEnabledSetting(android.content.ComponentName)}
 **/
PackageManager.prototype.getComponentEnabledSetting = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getComponentEnabledSetting',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplicationEnabledSetting
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getApplicationEnabledSetting(java.lang.String)}
 **/
PackageManager.prototype.getApplicationEnabledSetting = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getApplicationEnabledSetting',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActivityInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getActivityInfo(android.content.ComponentName, int)}
 **/
PackageManager.prototype.getActivityInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActivityInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInstalledPackages
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getInstalledPackages(int)}
 **/
PackageManager.prototype.getInstalledPackages = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInstalledPackages',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActivityLogo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getActivityLogo(android.content.ComponentName)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getActivityLogo(android.content.Intent)}
 **/
PackageManager.prototype.getActivityLogo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActivityLogo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function queryBroadcastReceivers
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#queryBroadcastReceivers(android.content.Intent, int)}
 **/
PackageManager.prototype.queryBroadcastReceivers = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'queryBroadcastReceivers',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageArchiveInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getPackageArchiveInfo(java.lang.String, int)}
 **/
PackageManager.prototype.getPackageArchiveInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageArchiveInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addPreferredActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#addPreferredActivity(android.content.IntentFilter, int, android.content.ComponentName[], android.content.ComponentName)}
 **/
PackageManager.prototype.addPreferredActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addPreferredActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageGids
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getPackageGids(java.lang.String)}
 **/
PackageManager.prototype.getPackageGids = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageGids',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReceiverInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getReceiverInfo(android.content.ComponentName, int)}
 **/
PackageManager.prototype.getReceiverInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReceiverInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUserBadgedLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getUserBadgedLabel(java.lang.CharSequence, android.os.UserHandle)}
 **/
PackageManager.prototype.getUserBadgedLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUserBadgedLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResourcesForActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getResourcesForActivity(android.content.ComponentName)}
 **/
PackageManager.prototype.getResourcesForActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourcesForActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInstalledApplications
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getInstalledApplications(int)}
 **/
PackageManager.prototype.getInstalledApplications = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInstalledApplications',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplicationLogo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getApplicationLogo(android.content.pm.ApplicationInfo)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getApplicationLogo(java.lang.String)}
 **/
PackageManager.prototype.getApplicationLogo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getApplicationLogo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function extendVerificationTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#extendVerificationTimeout(int, int, long)}
 **/
PackageManager.prototype.extendVerificationTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'extendVerificationTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getXml
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getXml(java.lang.String, int, android.content.pm.ApplicationInfo)}
 **/
PackageManager.prototype.getXml = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getXml',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUserBadgedIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getUserBadgedIcon(android.graphics.drawable.Drawable, android.os.UserHandle)}
 **/
PackageManager.prototype.getUserBadgedIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUserBadgedIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResourcesForApplication
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getResourcesForApplication(android.content.pm.ApplicationInfo)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getResourcesForApplication(java.lang.String)}
 **/
PackageManager.prototype.getResourcesForApplication = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourcesForApplication',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function currentToCanonicalPackageNames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#currentToCanonicalPackageNames(java.lang.String[])}
 **/
PackageManager.prototype.currentToCanonicalPackageNames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'currentToCanonicalPackageNames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getApplicationInfo(java.lang.String, int)}
 **/
PackageManager.prototype.getApplicationInfo = function() {
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
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addPermissionAsync
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#addPermissionAsync(android.content.pm.PermissionInfo)}
 **/
PackageManager.prototype.addPermissionAsync = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addPermissionAsync',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setApplicationEnabledSetting
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#setApplicationEnabledSetting(java.lang.String, int, int)}
 **/
PackageManager.prototype.setApplicationEnabledSetting = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setApplicationEnabledSetting',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveService
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#resolveService(android.content.Intent, int)}
 **/
PackageManager.prototype.resolveService = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveService',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function queryContentProviders
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#queryContentProviders(java.lang.String, int, int)}
 **/
PackageManager.prototype.queryContentProviders = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'queryContentProviders',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveContentProvider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#resolveContentProvider(java.lang.String, int)}
 **/
PackageManager.prototype.resolveContentProvider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveContentProvider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function queryIntentServices
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#queryIntentServices(android.content.Intent, int)}
 **/
PackageManager.prototype.queryIntentServices = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'queryIntentServices',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackagesForUid
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getPackagesForUid(int)}
 **/
PackageManager.prototype.getPackagesForUid = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackagesForUid',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function queryIntentActivities
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#queryIntentActivities(android.content.Intent, int)}
 **/
PackageManager.prototype.queryIntentActivities = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'queryIntentActivities',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addPackageToPreferred
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#addPackageToPreferred(java.lang.String)}
 **/
PackageManager.prototype.addPackageToPreferred = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addPackageToPreferred',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasSystemFeature
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#hasSystemFeature(java.lang.String)}
 **/
PackageManager.prototype.hasSystemFeature = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasSystemFeature',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getApplicationBanner
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getApplicationBanner(android.content.pm.ApplicationInfo)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getApplicationBanner(java.lang.String)}
 **/
PackageManager.prototype.getApplicationBanner = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getApplicationBanner',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemAvailableFeatures
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#getSystemAvailableFeatures()}
 **/
PackageManager.prototype.getSystemAvailableFeatures = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemAvailableFeatures',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function queryInstrumentation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#queryInstrumentation(java.lang.String, int)}
 **/
PackageManager.prototype.queryInstrumentation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'queryInstrumentation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearPackagePreferredActivities
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageManager.html#clearPackagePreferredActivities(java.lang.String)}
 **/
PackageManager.prototype.clearPackagePreferredActivities = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearPackagePreferredActivities',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageManager') {
			return new PackageManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PackageManager;
