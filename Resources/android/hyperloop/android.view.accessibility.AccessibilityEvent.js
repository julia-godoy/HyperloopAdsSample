/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityEvent
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view.accessibility');

/**
 * @class android.view.accessibility.AccessibilityEvent
 * @extends android.view.accessibility.AccessibilityRecord 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html}
 **/
var AccessibilityEvent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.accessibility.AccessibilityEvent')) {
		result = arguments[0];
	}
	else {
		result = AccessibilityEvent.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.accessibility.AccessibilityRecord');
AccessibilityEvent.prototype = Object.create(SuperClass.prototype);
AccessibilityEvent.prototype.constructor = AccessibilityEvent;

Object.defineProperty(AccessibilityEvent.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AccessibilityEvent(this.$native.super);
	},
	enumerable: true
});

AccessibilityEvent.className = 'android.view.accessibility.AccessibilityEvent';
AccessibilityEvent.prototype.className = 'android.view.accessibility.AccessibilityEvent';

// class property
Object.defineProperty(AccessibilityEvent, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.accessibility.AccessibilityEvent');
	},
	enumerable: true,
	configurable: false
});


// Cast
AccessibilityEvent.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AccessibilityEvent(Hyperloop.cast('android.view.accessibility.AccessibilityEvent', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_ACCESSIBILITY_FOCUSED}
 */
AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#CONTENT_CHANGE_TYPE_TEXT}
 */
AccessibilityEvent.CONTENT_CHANGE_TYPE_TEXT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_CONTEXT_CLICKED}
 */
AccessibilityEvent.TYPE_VIEW_CONTEXT_CLICKED = 8388608;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_TOUCH_INTERACTION_END}
 */
AccessibilityEvent.TYPE_TOUCH_INTERACTION_END = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_SCROLLED}
 */
AccessibilityEvent.TYPE_VIEW_SCROLLED = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_ASSIST_READING_CONTEXT}
 */
AccessibilityEvent.TYPE_ASSIST_READING_CONTEXT = 16777216;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_TEXT_SELECTION_CHANGED}
 */
AccessibilityEvent.TYPE_VIEW_TEXT_SELECTION_CHANGED = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_GESTURE_DETECTION_END}
 */
AccessibilityEvent.TYPE_GESTURE_DETECTION_END = 524288;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_WINDOW_CONTENT_CHANGED}
 */
AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_ANNOUNCEMENT}
 */
AccessibilityEvent.TYPE_ANNOUNCEMENT = 16384;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#CONTENT_CHANGE_TYPE_SUBTREE}
 */
AccessibilityEvent.CONTENT_CHANGE_TYPE_SUBTREE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_CLICKED}
 */
AccessibilityEvent.TYPE_VIEW_CLICKED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_GESTURE_DETECTION_START}
 */
AccessibilityEvent.TYPE_GESTURE_DETECTION_START = 262144;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_WINDOWS_CHANGED}
 */
AccessibilityEvent.TYPE_WINDOWS_CHANGED = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_TEXT_CHANGED}
 */
AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_LONG_CLICKED}
 */
AccessibilityEvent.TYPE_VIEW_LONG_CLICKED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#CONTENT_CHANGE_TYPE_UNDEFINED}
 */
AccessibilityEvent.CONTENT_CHANGE_TYPE_UNDEFINED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPES_ALL_MASK}
 */
AccessibilityEvent.TYPES_ALL_MASK = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_WINDOW_STATE_CHANGED}
 */
AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY}
 */
AccessibilityEvent.TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY = 131072;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#INVALID_POSITION}
 */
AccessibilityEvent.INVALID_POSITION = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_TOUCH_INTERACTION_START}
 */
AccessibilityEvent.TYPE_TOUCH_INTERACTION_START = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_TOUCH_EXPLORATION_GESTURE_START}
 */
AccessibilityEvent.TYPE_TOUCH_EXPLORATION_GESTURE_START = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_FOCUSED}
 */
AccessibilityEvent.TYPE_VIEW_FOCUSED = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#MAX_TEXT_LENGTH}
 */
AccessibilityEvent.MAX_TEXT_LENGTH = 500;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED}
 */
AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED = 65536;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#CONTENT_CHANGE_TYPE_CONTENT_DESCRIPTION}
 */
AccessibilityEvent.CONTENT_CHANGE_TYPE_CONTENT_DESCRIPTION = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_HOVER_EXIT}
 */
AccessibilityEvent.TYPE_VIEW_HOVER_EXIT = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_HOVER_ENTER}
 */
AccessibilityEvent.TYPE_VIEW_HOVER_ENTER = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_NOTIFICATION_STATE_CHANGED}
 */
AccessibilityEvent.TYPE_NOTIFICATION_STATE_CHANGED = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_VIEW_SELECTED}
 */
AccessibilityEvent.TYPE_VIEW_SELECTED = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#TYPE_TOUCH_EXPLORATION_GESTURE_END}
 */
AccessibilityEvent.TYPE_TOUCH_EXPLORATION_GESTURE_END = 1024;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#CREATOR
Object.defineProperty(AccessibilityEvent, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
				return new AccessibilityEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#obtain(int)}
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#obtain(android.view.accessibility.AccessibilityEvent)}
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#obtain()}
 **/
AccessibilityEvent.obtain = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function eventTypeToString
 * @static
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#eventTypeToString(int)}
 **/
AccessibilityEvent.eventTypeToString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'eventTypeToString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
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
 * @function getContentChangeTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getContentChangeTypes()}
 **/
AccessibilityEvent.prototype.getContentChangeTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentChangeTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentChangeTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setContentChangeTypes(int)}
 **/
AccessibilityEvent.prototype.setContentChangeTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentChangeTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setAction(int)}
 **/
AccessibilityEvent.prototype.setAction = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEventTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setEventTime(long)}
 **/
AccessibilityEvent.prototype.setEventTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEventTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMovementGranularity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getMovementGranularity()}
 **/
AccessibilityEvent.prototype.getMovementGranularity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMovementGranularity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setPackageName(java.lang.CharSequence)}
 **/
AccessibilityEvent.prototype.setPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMovementGranularity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setMovementGranularity(int)}
 **/
AccessibilityEvent.prototype.setMovementGranularity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMovementGranularity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initFromParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#initFromParcel(android.os.Parcel)}
 **/
AccessibilityEvent.prototype.initFromParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initFromParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getAction()}
 **/
AccessibilityEvent.prototype.getAction = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#describeContents()}
 **/
AccessibilityEvent.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function appendRecord
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#appendRecord(android.view.accessibility.AccessibilityRecord)}
 **/
AccessibilityEvent.prototype.appendRecord = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'appendRecord',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEventType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#setEventType(int)}
 **/
AccessibilityEvent.prototype.setEventType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEventType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEventType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getEventType()}
 **/
AccessibilityEvent.prototype.getEventType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEventType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRecordCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getRecordCount()}
 **/
AccessibilityEvent.prototype.getRecordCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRecordCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#recycle()}
 **/
AccessibilityEvent.prototype.recycle = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRecord
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getRecord(int)}
 **/
AccessibilityEvent.prototype.getRecord = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRecord',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#toString()}
 **/
AccessibilityEvent.prototype.toString = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getPackageName()}
 **/
AccessibilityEvent.prototype.getPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#getEventTime()}
 **/
AccessibilityEvent.prototype.getEventTime = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
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
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html#writeToParcel(android.os.Parcel, int)}
 **/
AccessibilityEvent.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityEvent') {
			return new AccessibilityEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AccessibilityEvent;
