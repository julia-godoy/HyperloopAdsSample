/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.accessibility.AccessibilityNodeInfo');

/**
 * @class android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html}
 **/
var CollectionItemInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo')) {
		result = arguments[0];
	}
	else {
		result = CollectionItemInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CollectionItemInfo.prototype = Object.create(SuperClass.prototype);
CollectionItemInfo.prototype.constructor = CollectionItemInfo;

Object.defineProperty(CollectionItemInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CollectionItemInfo(this.$native.super);
	},
	enumerable: true
});

CollectionItemInfo.className = 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo';
CollectionItemInfo.prototype.className = 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo';

// class property
Object.defineProperty(CollectionItemInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo');
	},
	enumerable: true,
	configurable: false
});


// Cast
CollectionItemInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CollectionItemInfo(Hyperloop.cast('android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function obtain
 * @static
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#obtain(int, int, int, int, boolean)}
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#obtain(int, int, int, int, boolean, boolean)}
 **/
CollectionItemInfo.obtain = function() {
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
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new CollectionItemInfo(result);
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
 * @function isHeading
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#isHeading()}
 **/
CollectionItemInfo.prototype.isHeading = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHeading',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRowIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#getRowIndex()}
 **/
CollectionItemInfo.prototype.getRowIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRowIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColumnSpan
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#getColumnSpan()}
 **/
CollectionItemInfo.prototype.getColumnSpan = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColumnSpan',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSelected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#isSelected()}
 **/
CollectionItemInfo.prototype.isSelected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSelected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColumnIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#getColumnIndex()}
 **/
CollectionItemInfo.prototype.getColumnIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColumnIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRowSpan
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.CollectionItemInfo.html#getRowSpan()}
 **/
CollectionItemInfo.prototype.getRowSpan = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRowSpan',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo') {
			return new CollectionItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CollectionItemInfo;
