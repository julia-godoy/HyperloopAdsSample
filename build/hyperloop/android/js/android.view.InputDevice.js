/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.InputDevice
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.InputDevice
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html}
 **/
var InputDevice = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.InputDevice')) {
		result = arguments[0];
	}
	else {
		result = InputDevice.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
InputDevice.prototype = Object.create(SuperClass.prototype);
InputDevice.prototype.constructor = InputDevice;

Object.defineProperty(InputDevice.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new InputDevice(this.$native.super);
	},
	enumerable: true
});

InputDevice.className = 'android.view.InputDevice';
InputDevice.prototype.className = 'android.view.InputDevice';

// class property
Object.defineProperty(InputDevice, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.InputDevice');
	},
	enumerable: true,
	configurable: false
});


// Cast
InputDevice.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new InputDevice(Hyperloop.cast('android.view.InputDevice', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_TOOL_MINOR}
 */
InputDevice.MOTION_RANGE_TOOL_MINOR = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_NONE}
 */
InputDevice.SOURCE_CLASS_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_TRACKBALL}
 */
InputDevice.SOURCE_CLASS_TRACKBALL = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_POINTER}
 */
InputDevice.SOURCE_CLASS_POINTER = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_TOOL_MAJOR}
 */
InputDevice.MOTION_RANGE_TOOL_MAJOR = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_BUTTON}
 */
InputDevice.SOURCE_CLASS_BUTTON = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#KEYBOARD_TYPE_NON_ALPHABETIC}
 */
InputDevice.KEYBOARD_TYPE_NON_ALPHABETIC = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_BLUETOOTH_STYLUS}
 */
InputDevice.SOURCE_BLUETOOTH_STYLUS = 49154;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_JOYSTICK}
 */
InputDevice.SOURCE_CLASS_JOYSTICK = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_TOUCHPAD}
 */
InputDevice.SOURCE_TOUCHPAD = 1048584;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_SIZE}
 */
InputDevice.MOTION_RANGE_SIZE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_STYLUS}
 */
InputDevice.SOURCE_STYLUS = 16386;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_PRESSURE}
 */
InputDevice.MOTION_RANGE_PRESSURE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_DPAD}
 */
InputDevice.SOURCE_DPAD = 513;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_ORIENTATION}
 */
InputDevice.MOTION_RANGE_ORIENTATION = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_MOUSE}
 */
InputDevice.SOURCE_MOUSE = 8194;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_ANY}
 */
InputDevice.SOURCE_ANY = -256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_TRACKBALL}
 */
InputDevice.SOURCE_TRACKBALL = 65540;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_UNKNOWN}
 */
InputDevice.SOURCE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_Y}
 */
InputDevice.MOTION_RANGE_Y = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_TOUCH_MINOR}
 */
InputDevice.MOTION_RANGE_TOUCH_MINOR = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_X}
 */
InputDevice.MOTION_RANGE_X = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_JOYSTICK}
 */
InputDevice.SOURCE_JOYSTICK = 16777232;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#KEYBOARD_TYPE_ALPHABETIC}
 */
InputDevice.KEYBOARD_TYPE_ALPHABETIC = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_TOUCH_NAVIGATION}
 */
InputDevice.SOURCE_TOUCH_NAVIGATION = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#MOTION_RANGE_TOUCH_MAJOR}
 */
InputDevice.MOTION_RANGE_TOUCH_MAJOR = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_TOUCHSCREEN}
 */
InputDevice.SOURCE_TOUCHSCREEN = 4098;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_GAMEPAD}
 */
InputDevice.SOURCE_GAMEPAD = 1025;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_MASK}
 */
InputDevice.SOURCE_CLASS_MASK = 255;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_HDMI}
 */
InputDevice.SOURCE_HDMI = 33554433;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_CLASS_POSITION}
 */
InputDevice.SOURCE_CLASS_POSITION = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#KEYBOARD_TYPE_NONE}
 */
InputDevice.KEYBOARD_TYPE_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#SOURCE_KEYBOARD}
 */
InputDevice.SOURCE_KEYBOARD = 257;

// Inner classes
Object.defineProperty(InputDevice, 'MotionRange', {
	get: function() {
		return require('android.view.InputDevice$MotionRange');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/view/InputDevice.html#CREATOR
Object.defineProperty(InputDevice, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.InputDevice') {
				return new InputDevice(result);
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
 * @function getDeviceIds
 * @static
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getDeviceIds()}
 **/
InputDevice.getDeviceIds = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDeviceIds',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDevice
 * @static
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getDevice(int)}
 **/
InputDevice.getDevice = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDevice',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
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
 * @function getDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getDescriptor()}
 **/
InputDevice.prototype.getDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMotionRanges
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getMotionRanges()}
 **/
InputDevice.prototype.getMotionRanges = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMotionRanges',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getName()}
 **/
InputDevice.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasKeys
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#hasKeys(int[])}
 **/
InputDevice.prototype.hasKeys = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasKeys',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getId()}
 **/
InputDevice.prototype.getId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getSources()}
 **/
InputDevice.prototype.getSources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasMicrophone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#hasMicrophone()}
 **/
InputDevice.prototype.hasMicrophone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasMicrophone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVibrator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getVibrator()}
 **/
InputDevice.prototype.getVibrator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVibrator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
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
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#describeContents()}
 **/
InputDevice.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getProductId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getProductId()}
 **/
InputDevice.prototype.getProductId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getProductId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getControllerNumber
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getControllerNumber()}
 **/
InputDevice.prototype.getControllerNumber = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getControllerNumber',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyboardType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getKeyboardType()}
 **/
InputDevice.prototype.getKeyboardType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyboardType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
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
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getKeyCharacterMap()}
 **/
InputDevice.prototype.getKeyCharacterMap = function() {
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
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMotionRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getMotionRange(int)}
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getMotionRange(int, int)}
 **/
InputDevice.prototype.getMotionRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMotionRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function supportsSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#supportsSource(int)}
 **/
InputDevice.prototype.supportsSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'supportsSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
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
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#toString()}
 **/
InputDevice.prototype.toString = function() {
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
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVirtual
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#isVirtual()}
 **/
InputDevice.prototype.isVirtual = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVirtual',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVendorId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#getVendorId()}
 **/
InputDevice.prototype.getVendorId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVendorId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
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
 * @see {@link http://developer.android.com/reference/android/view/InputDevice.html#writeToParcel(android.os.Parcel, int)}
 **/
InputDevice.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.InputDevice') {
			return new InputDevice(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = InputDevice;
