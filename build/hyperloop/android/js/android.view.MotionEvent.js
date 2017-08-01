/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.MotionEvent
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.MotionEvent
 * @extends android.view.InputEvent 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html}
 **/
var MotionEvent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.MotionEvent')) {
		result = arguments[0];
	}
	else {
		result = MotionEvent.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.InputEvent');
MotionEvent.prototype = Object.create(SuperClass.prototype);
MotionEvent.prototype.constructor = MotionEvent;

Object.defineProperty(MotionEvent.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MotionEvent(this.$native.super);
	},
	enumerable: true
});

MotionEvent.className = 'android.view.MotionEvent';
MotionEvent.prototype.className = 'android.view.MotionEvent';

// class property
Object.defineProperty(MotionEvent, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.MotionEvent');
	},
	enumerable: true,
	configurable: false
});


// Cast
MotionEvent.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MotionEvent(Hyperloop.cast('android.view.MotionEvent', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_STYLUS_SECONDARY}
 */
MotionEvent.BUTTON_STYLUS_SECONDARY = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_HOVER_MOVE}
 */
MotionEvent.ACTION_HOVER_MOVE = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_BRAKE}
 */
MotionEvent.AXIS_BRAKE = 23;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#TOOL_TYPE_STYLUS}
 */
MotionEvent.TOOL_TYPE_STYLUS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_9}
 */
MotionEvent.AXIS_GENERIC_9 = 40;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_8}
 */
MotionEvent.AXIS_GENERIC_8 = 39;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_7}
 */
MotionEvent.AXIS_GENERIC_7 = 38;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_6}
 */
MotionEvent.AXIS_GENERIC_6 = 37;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#EDGE_BOTTOM}
 */
MotionEvent.EDGE_BOTTOM = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#TOOL_TYPE_MOUSE}
 */
MotionEvent.TOOL_TYPE_MOUSE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_5}
 */
MotionEvent.AXIS_GENERIC_5 = 36;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_ID_MASK}
 */
MotionEvent.ACTION_POINTER_ID_MASK = 65280;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_4}
 */
MotionEvent.AXIS_GENERIC_4 = 35;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_3}
 */
MotionEvent.AXIS_GENERIC_3 = 34;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_WHEEL}
 */
MotionEvent.AXIS_WHEEL = 21;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_2}
 */
MotionEvent.AXIS_GENERIC_2 = 33;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_LTRIGGER}
 */
MotionEvent.AXIS_LTRIGGER = 17;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#TOOL_TYPE_UNKNOWN}
 */
MotionEvent.TOOL_TYPE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_1}
 */
MotionEvent.AXIS_GENERIC_1 = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_UP}
 */
MotionEvent.ACTION_POINTER_UP = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_SCROLL}
 */
MotionEvent.ACTION_SCROLL = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_FORWARD}
 */
MotionEvent.BUTTON_FORWARD = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_DOWN}
 */
MotionEvent.ACTION_POINTER_DOWN = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_MASK}
 */
MotionEvent.ACTION_MASK = 255;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_SIZE}
 */
MotionEvent.AXIS_SIZE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_UP}
 */
MotionEvent.ACTION_UP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#FLAG_WINDOW_IS_OBSCURED}
 */
MotionEvent.FLAG_WINDOW_IS_OBSCURED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_3_UP}
 */
MotionEvent.ACTION_POINTER_3_UP = 518;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_INDEX_MASK}
 */
MotionEvent.ACTION_POINTER_INDEX_MASK = 65280;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_ORIENTATION}
 */
MotionEvent.AXIS_ORIENTATION = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_HOVER_EXIT}
 */
MotionEvent.ACTION_HOVER_EXIT = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_3_DOWN}
 */
MotionEvent.ACTION_POINTER_3_DOWN = 517;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GAS}
 */
MotionEvent.AXIS_GAS = 22;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_VSCROLL}
 */
MotionEvent.AXIS_VSCROLL = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_MOVE}
 */
MotionEvent.ACTION_MOVE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_2_DOWN}
 */
MotionEvent.ACTION_POINTER_2_DOWN = 261;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#EDGE_RIGHT}
 */
MotionEvent.EDGE_RIGHT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#TOOL_TYPE_ERASER}
 */
MotionEvent.TOOL_TYPE_ERASER = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_TERTIARY}
 */
MotionEvent.BUTTON_TERTIARY = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#EDGE_TOP}
 */
MotionEvent.EDGE_TOP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_INDEX_SHIFT}
 */
MotionEvent.ACTION_POINTER_INDEX_SHIFT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_DISTANCE}
 */
MotionEvent.AXIS_DISTANCE = 24;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_HAT_X}
 */
MotionEvent.AXIS_HAT_X = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_RUDDER}
 */
MotionEvent.AXIS_RUDDER = 20;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_HAT_Y}
 */
MotionEvent.AXIS_HAT_Y = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_SECONDARY}
 */
MotionEvent.BUTTON_SECONDARY = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_2_UP}
 */
MotionEvent.ACTION_POINTER_2_UP = 262;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_11}
 */
MotionEvent.AXIS_GENERIC_11 = 42;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_12}
 */
MotionEvent.AXIS_GENERIC_12 = 43;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_HSCROLL}
 */
MotionEvent.AXIS_HSCROLL = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_CANCEL}
 */
MotionEvent.ACTION_CANCEL = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_STYLUS_PRIMARY}
 */
MotionEvent.BUTTON_STYLUS_PRIMARY = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_10}
 */
MotionEvent.AXIS_GENERIC_10 = 41;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_15}
 */
MotionEvent.AXIS_GENERIC_15 = 46;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_16}
 */
MotionEvent.AXIS_GENERIC_16 = 47;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_Z}
 */
MotionEvent.AXIS_Z = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_13}
 */
MotionEvent.AXIS_GENERIC_13 = 44;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_THROTTLE}
 */
MotionEvent.AXIS_THROTTLE = 19;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_GENERIC_14}
 */
MotionEvent.AXIS_GENERIC_14 = 45;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_TOOL_MINOR}
 */
MotionEvent.AXIS_TOOL_MINOR = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_TOOL_MAJOR}
 */
MotionEvent.AXIS_TOOL_MAJOR = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_Y}
 */
MotionEvent.AXIS_Y = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_1_DOWN}
 */
MotionEvent.ACTION_POINTER_1_DOWN = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_X}
 */
MotionEvent.AXIS_X = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_HOVER_ENTER}
 */
MotionEvent.ACTION_HOVER_ENTER = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_BUTTON_RELEASE}
 */
MotionEvent.ACTION_BUTTON_RELEASE = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_TOUCH_MINOR}
 */
MotionEvent.AXIS_TOUCH_MINOR = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_RTRIGGER}
 */
MotionEvent.AXIS_RTRIGGER = 18;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_TILT}
 */
MotionEvent.AXIS_TILT = 25;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#INVALID_POINTER_ID}
 */
MotionEvent.INVALID_POINTER_ID = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_TOUCH_MAJOR}
 */
MotionEvent.AXIS_TOUCH_MAJOR = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_RZ}
 */
MotionEvent.AXIS_RZ = 14;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_RY}
 */
MotionEvent.AXIS_RY = 13;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#TOOL_TYPE_FINGER}
 */
MotionEvent.TOOL_TYPE_FINGER = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_RX}
 */
MotionEvent.AXIS_RX = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#EDGE_LEFT}
 */
MotionEvent.EDGE_LEFT = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_OUTSIDE}
 */
MotionEvent.ACTION_OUTSIDE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_ID_SHIFT}
 */
MotionEvent.ACTION_POINTER_ID_SHIFT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_POINTER_1_UP}
 */
MotionEvent.ACTION_POINTER_1_UP = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_PRIMARY}
 */
MotionEvent.BUTTON_PRIMARY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#AXIS_PRESSURE}
 */
MotionEvent.AXIS_PRESSURE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_BUTTON_PRESS}
 */
MotionEvent.ACTION_BUTTON_PRESS = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#BUTTON_BACK}
 */
MotionEvent.BUTTON_BACK = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#ACTION_DOWN}
 */
MotionEvent.ACTION_DOWN = 0;

// Inner classes
Object.defineProperty(MotionEvent, 'PointerProperties', {
	get: function() {
		return require('android.view.MotionEvent$PointerProperties');
	},
	enumerable: true
});
Object.defineProperty(MotionEvent, 'PointerCoords', {
	get: function() {
		return require('android.view.MotionEvent$PointerCoords');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/view/MotionEvent.html#CREATOR
Object.defineProperty(MotionEvent, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent') {
				return new MotionEvent(result);
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
 * @function obtain
 * @static
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(long, long, int, int, android.view.MotionEvent$PointerProperties[], android.view.MotionEvent$PointerCoords[], int, int, float, float, int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(long, long, int, int, int[], android.view.MotionEvent$PointerCoords[], int, float, float, int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(long, long, int, float, float, float, float, int, float, float, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(long, long, int, int, float, float, float, float, int, float, float, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(long, long, int, float, float, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtain(android.view.MotionEvent)}
 **/
MotionEvent.obtain = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'obtain',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function axisFromString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#axisFromString(java.lang.String)}
 **/
MotionEvent.axisFromString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'axisFromString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function obtainNoHistory
 * @static
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#obtainNoHistory(android.view.MotionEvent)}
 **/
MotionEvent.obtainNoHistory = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'obtainNoHistory',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function actionToString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#actionToString(int)}
 **/
MotionEvent.actionToString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'actionToString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function axisToString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#axisToString(int)}
 **/
MotionEvent.axisToString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'axisToString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @function findPointerIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#findPointerIndex(int)}
 **/
MotionEvent.prototype.findPointerIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findPointerIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActionIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getActionIndex()}
 **/
MotionEvent.prototype.getActionIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActionIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getButtonState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getButtonState()}
 **/
MotionEvent.prototype.getButtonState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getButtonState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOrientation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getOrientation()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getOrientation(int)}
 **/
MotionEvent.prototype.getOrientation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOrientation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function recycle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#recycle()}
 **/
MotionEvent.prototype.recycle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'recycle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalOrientation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalOrientation(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalOrientation(int, int)}
 **/
MotionEvent.prototype.getHistoricalOrientation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalOrientation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getYPrecision
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getYPrecision()}
 **/
MotionEvent.prototype.getYPrecision = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getYPrecision',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPointerCoords
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPointerCoords(int, android.view.MotionEvent$PointerCoords)}
 **/
MotionEvent.prototype.getPointerCoords = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPointerCoords',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getEventTime()}
 **/
MotionEvent.prototype.getEventTime = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActionButton
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getActionButton()}
 **/
MotionEvent.prototype.getActionButton = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActionButton',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTouchMinor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getTouchMinor()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getTouchMinor(int)}
 **/
MotionEvent.prototype.getTouchMinor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTouchMinor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRawX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getRawX()}
 **/
MotionEvent.prototype.getRawX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRawX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRawY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getRawY()}
 **/
MotionEvent.prototype.getRawY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRawY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isButtonPressed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#isButtonPressed(int)}
 **/
MotionEvent.prototype.isButtonPressed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isButtonPressed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addBatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#addBatch(long, float, float, float, float, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#addBatch(long, android.view.MotionEvent$PointerCoords[], int)}
 **/
MotionEvent.prototype.addBatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addBatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistorySize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistorySize()}
 **/
MotionEvent.prototype.getHistorySize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistorySize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalPressure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalPressure(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalPressure(int, int)}
 **/
MotionEvent.prototype.getHistoricalPressure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalPressure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPointerId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPointerId(int)}
 **/
MotionEvent.prototype.getPointerId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPointerId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getSource()}
 **/
MotionEvent.prototype.getSource = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEdgeFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#setEdgeFlags(int)}
 **/
MotionEvent.prototype.setEdgeFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEdgeFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTouchMajor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getTouchMajor()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getTouchMajor(int)}
 **/
MotionEvent.prototype.getTouchMajor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTouchMajor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getFlags()}
 **/
MotionEvent.prototype.getFlags = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#writeToParcel(android.os.Parcel, int)}
 **/
MotionEvent.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#setSource(int)}
 **/
MotionEvent.prototype.setSource = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#setAction(int)}
 **/
MotionEvent.prototype.setAction = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getXPrecision
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getXPrecision()}
 **/
MotionEvent.prototype.getXPrecision = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getXPrecision',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalAxisValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalAxisValue(int, int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalAxisValue(int, int, int)}
 **/
MotionEvent.prototype.getHistoricalAxisValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalAxisValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getToolType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getToolType(int)}
 **/
MotionEvent.prototype.getToolType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getToolType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function transform
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#transform(android.graphics.Matrix)}
 **/
MotionEvent.prototype.transform = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'transform',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalSize(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalSize(int, int)}
 **/
MotionEvent.prototype.getHistoricalSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#setLocation(float, float)}
 **/
MotionEvent.prototype.setLocation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getToolMajor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getToolMajor()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getToolMajor(int)}
 **/
MotionEvent.prototype.getToolMajor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getToolMajor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalEventTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalEventTime(int)}
 **/
MotionEvent.prototype.getHistoricalEventTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalEventTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getToolMinor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getToolMinor()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getToolMinor(int)}
 **/
MotionEvent.prototype.getToolMinor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getToolMinor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActionMasked
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getActionMasked()}
 **/
MotionEvent.prototype.getActionMasked = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActionMasked',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getMetaState()}
 **/
MotionEvent.prototype.getMetaState = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalToolMinor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalToolMinor(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalToolMinor(int, int)}
 **/
MotionEvent.prototype.getHistoricalToolMinor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalToolMinor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalPointerCoords
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalPointerCoords(int, int, android.view.MotionEvent$PointerCoords)}
 **/
MotionEvent.prototype.getHistoricalPointerCoords = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalPointerCoords',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalToolMajor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalToolMajor(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalToolMajor(int, int)}
 **/
MotionEvent.prototype.getHistoricalToolMajor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalToolMajor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function offsetLocation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#offsetLocation(float, float)}
 **/
MotionEvent.prototype.offsetLocation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'offsetLocation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPointerProperties
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPointerProperties(int, android.view.MotionEvent$PointerProperties)}
 **/
MotionEvent.prototype.getPointerProperties = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPointerProperties',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAxisValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getAxisValue(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getAxisValue(int, int)}
 **/
MotionEvent.prototype.getAxisValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAxisValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getAction()}
 **/
MotionEvent.prototype.getAction = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPointerCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPointerCount()}
 **/
MotionEvent.prototype.getPointerCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPointerCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalX(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalX(int, int)}
 **/
MotionEvent.prototype.getHistoricalX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getDownTime()}
 **/
MotionEvent.prototype.getDownTime = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalY(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalY(int, int)}
 **/
MotionEvent.prototype.getHistoricalY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getDeviceId()}
 **/
MotionEvent.prototype.getDeviceId = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalTouchMajor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalTouchMajor(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalTouchMajor(int, int)}
 **/
MotionEvent.prototype.getHistoricalTouchMajor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalTouchMajor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getX()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getX(int)}
 **/
MotionEvent.prototype.getX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getSize()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getSize(int)}
 **/
MotionEvent.prototype.getSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getY()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getY(int)}
 **/
MotionEvent.prototype.getY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPressure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPressure()}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getPressure(int)}
 **/
MotionEvent.prototype.getPressure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPressure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHistoricalTouchMinor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalTouchMinor(int)}
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getHistoricalTouchMinor(int, int)}
 **/
MotionEvent.prototype.getHistoricalTouchMinor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHistoricalTouchMinor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#finalize()}
 **/
MotionEvent.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#toString()}
 **/
MotionEvent.prototype.toString = function() {
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
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEdgeFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.html#getEdgeFlags()}
 **/
MotionEvent.prototype.getEdgeFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEdgeFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent') {
			return new MotionEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = MotionEvent;
