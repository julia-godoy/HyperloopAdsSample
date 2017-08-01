/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityNodeInfo$CollectionInfo
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.accessibility.AccessibilityNodeInfo');

/**
 * @class android.view.accessibility.AccessibilityNodeInfo$CollectionInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html}
 **/
var CollectionInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.accessibility.AccessibilityNodeInfo$CollectionInfo')) {
		result = arguments[0];
	}
	else {
		result = CollectionInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CollectionInfo.prototype = Object.create(SuperClass.prototype);
CollectionInfo.prototype.constructor = CollectionInfo;

Object.defineProperty(CollectionInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CollectionInfo(this.$native.super);
	},
	enumerable: true
});

CollectionInfo.className = 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo';
CollectionInfo.prototype.className = 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo';

// class property
Object.defineProperty(CollectionInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.accessibility.AccessibilityNodeInfo$CollectionInfo');
	},
	enumerable: true,
	configurable: false
});


// Cast
CollectionInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CollectionInfo(Hyperloop.cast('android.view.accessibility.AccessibilityNodeInfo$CollectionInfo', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#SELECTION_MODE_NONE}
 */
CollectionInfo.SELECTION_MODE_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#SELECTION_MODE_SINGLE}
 */
CollectionInfo.SELECTION_MODE_SINGLE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#SELECTION_MODE_MULTIPLE}
 */
CollectionInfo.SELECTION_MODE_MULTIPLE = 2;

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function obtain
 * @static
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#obtain(int, int, boolean)}
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#obtain(int, int, boolean, int)}
 **/
CollectionInfo.obtain = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
			return new CollectionInfo(result);
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
 * @function getRowCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#getRowCount()}
 **/
CollectionInfo.prototype.getRowCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRowCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
			return new CollectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectionMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#getSelectionMode()}
 **/
CollectionInfo.prototype.getSelectionMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectionMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
			return new CollectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColumnCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#getColumnCount()}
 **/
CollectionInfo.prototype.getColumnCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColumnCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
			return new CollectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHierarchical
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo.html#isHierarchical()}
 **/
CollectionInfo.prototype.isHierarchical = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHierarchical',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionInfo') {
			return new CollectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CollectionInfo;
