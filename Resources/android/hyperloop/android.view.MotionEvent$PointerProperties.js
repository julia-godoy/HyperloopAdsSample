/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.MotionEvent$PointerProperties
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.MotionEvent');

/**
 * @class android.view.MotionEvent$PointerProperties
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html}
 **/
var PointerProperties = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.MotionEvent$PointerProperties')) {
		result = arguments[0];
	}
	else {
		result = PointerProperties.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PointerProperties.prototype = Object.create(SuperClass.prototype);
PointerProperties.prototype.constructor = PointerProperties;

Object.defineProperty(PointerProperties.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PointerProperties(this.$native.super);
	},
	enumerable: true
});

PointerProperties.className = 'android.view.MotionEvent$PointerProperties';
PointerProperties.prototype.className = 'android.view.MotionEvent$PointerProperties';

// class property
Object.defineProperty(PointerProperties, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.MotionEvent$PointerProperties');
	},
	enumerable: true,
	configurable: false
});


// Cast
PointerProperties.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PointerProperties(Hyperloop.cast('android.view.MotionEvent$PointerProperties', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#id
Object.defineProperty(PointerProperties.prototype, 'id', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('id');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
				return new PointerProperties(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('id', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#toolType
Object.defineProperty(PointerProperties.prototype, 'toolType', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('toolType');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
				return new PointerProperties(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('toolType', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#hashCode()}
 **/
PointerProperties.prototype.hashCode = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
			return new PointerProperties(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#equals(java.lang.Object)}
 **/
PointerProperties.prototype.equals = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
			return new PointerProperties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clear
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#clear()}
 **/
PointerProperties.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
			return new PointerProperties(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerProperties.html#copyFrom(android.view.MotionEvent$PointerProperties)}
 **/
PointerProperties.prototype.copyFrom = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerProperties') {
			return new PointerProperties(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PointerProperties;
