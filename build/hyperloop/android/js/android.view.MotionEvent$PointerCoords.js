/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.MotionEvent$PointerCoords
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.MotionEvent');

/**
 * @class android.view.MotionEvent$PointerCoords
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html}
 **/
var PointerCoords = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.MotionEvent$PointerCoords')) {
		result = arguments[0];
	}
	else {
		result = PointerCoords.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PointerCoords.prototype = Object.create(SuperClass.prototype);
PointerCoords.prototype.constructor = PointerCoords;

Object.defineProperty(PointerCoords.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PointerCoords(this.$native.super);
	},
	enumerable: true
});

PointerCoords.className = 'android.view.MotionEvent$PointerCoords';
PointerCoords.prototype.className = 'android.view.MotionEvent$PointerCoords';

// class property
Object.defineProperty(PointerCoords, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.MotionEvent$PointerCoords');
	},
	enumerable: true,
	configurable: false
});


// Cast
PointerCoords.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PointerCoords(Hyperloop.cast('android.view.MotionEvent$PointerCoords', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#orientation
Object.defineProperty(PointerCoords.prototype, 'orientation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('orientation');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new PointerCoords(result);
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
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#touchMajor
Object.defineProperty(PointerCoords.prototype, 'touchMajor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('touchMajor');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new PointerCoords(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('touchMajor', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#size
Object.defineProperty(PointerCoords.prototype, 'size', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('size');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new PointerCoords(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('size', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#x
Object.defineProperty(PointerCoords.prototype, 'x', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('x');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new PointerCoords(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('x', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#y
Object.defineProperty(PointerCoords.prototype, 'y', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('y');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new PointerCoords(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('y', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#touchMinor
Object.defineProperty(PointerCoords.prototype, 'touchMinor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('touchMinor');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new PointerCoords(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('touchMinor', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#pressure
Object.defineProperty(PointerCoords.prototype, 'pressure', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('pressure');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new PointerCoords(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('pressure', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#toolMajor
Object.defineProperty(PointerCoords.prototype, 'toolMajor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('toolMajor');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new PointerCoords(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('toolMajor', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#toolMinor
Object.defineProperty(PointerCoords.prototype, 'toolMinor', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('toolMinor');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
				return new PointerCoords(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('toolMinor', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getAxisValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#getAxisValue(int)}
 **/
PointerCoords.prototype.getAxisValue = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
			return new PointerCoords(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#clear()}
 **/
PointerCoords.prototype.clear = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
			return new PointerCoords(result);
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
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#copyFrom(android.view.MotionEvent$PointerCoords)}
 **/
PointerCoords.prototype.copyFrom = function() {
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
		if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
			return new PointerCoords(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAxisValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MotionEvent.PointerCoords.html#setAxisValue(int, float)}
 **/
PointerCoords.prototype.setAxisValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAxisValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MotionEvent$PointerCoords') {
			return new PointerCoords(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PointerCoords;
