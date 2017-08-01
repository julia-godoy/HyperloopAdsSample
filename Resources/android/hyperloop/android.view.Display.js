/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.Display
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.Display
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/Display.html}
 **/
var Display = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.Display')) {
		result = arguments[0];
	}
	else {
		result = Display.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Display.prototype = Object.create(SuperClass.prototype);
Display.prototype.constructor = Display;

Object.defineProperty(Display.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Display(this.$native.super);
	},
	enumerable: true
});

Display.className = 'android.view.Display';
Display.prototype.className = 'android.view.Display';

// class property
Object.defineProperty(Display, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.Display');
	},
	enumerable: true,
	configurable: false
});


// Cast
Display.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Display(Hyperloop.cast('android.view.Display', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#FLAG_SUPPORTS_PROTECTED_BUFFERS}
 */
Display.FLAG_SUPPORTS_PROTECTED_BUFFERS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#STATE_DOZE}
 */
Display.STATE_DOZE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#FLAG_SECURE}
 */
Display.FLAG_SECURE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#INVALID_DISPLAY}
 */
Display.INVALID_DISPLAY = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#FLAG_PRIVATE}
 */
Display.FLAG_PRIVATE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#STATE_ON}
 */
Display.STATE_ON = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#STATE_OFF}
 */
Display.STATE_OFF = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#STATE_DOZE_SUSPEND}
 */
Display.STATE_DOZE_SUSPEND = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#FLAG_ROUND}
 */
Display.FLAG_ROUND = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#DEFAULT_DISPLAY}
 */
Display.DEFAULT_DISPLAY = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#STATE_UNKNOWN}
 */
Display.STATE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/Display.html#FLAG_PRESENTATION}
 */
Display.FLAG_PRESENTATION = 8;

// Inner classes
Object.defineProperty(Display, 'Mode', {
	get: function() {
		return require('android.view.Display$Mode');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getRefreshRate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getRefreshRate()}
 **/
Display.prototype.getRefreshRate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRefreshRate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRealSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getRealSize(android.graphics.Point)}
 **/
Display.prototype.getRealSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRealSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getName()}
 **/
Display.prototype.getName = function() {
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
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isValid
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#isValid()}
 **/
Display.prototype.isValid = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isValid',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getRotation()}
 **/
Display.prototype.getRotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getDisplayId()}
 **/
Display.prototype.getDisplayId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSupportedRefreshRates
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getSupportedRefreshRates()}
 **/
Display.prototype.getSupportedRefreshRates = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSupportedRefreshRates',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMetrics
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getMetrics(android.util.DisplayMetrics)}
 **/
Display.prototype.getMetrics = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMetrics',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRealMetrics
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getRealMetrics(android.util.DisplayMetrics)}
 **/
Display.prototype.getRealMetrics = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRealMetrics',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getWidth()}
 **/
Display.prototype.getWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAppVsyncOffsetNanos
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getAppVsyncOffsetNanos()}
 **/
Display.prototype.getAppVsyncOffsetNanos = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAppVsyncOffsetNanos',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentSizeRange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getCurrentSizeRange(android.graphics.Point, android.graphics.Point)}
 **/
Display.prototype.getCurrentSizeRange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentSizeRange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getSize(android.graphics.Point)}
 **/
Display.prototype.getSize = function() {
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
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getHeight()}
 **/
Display.prototype.getHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getOrientation()}
 **/
Display.prototype.getOrientation = function() {
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
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPixelFormat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getPixelFormat()}
 **/
Display.prototype.getPixelFormat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPixelFormat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getState()}
 **/
Display.prototype.getState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRectSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getRectSize(android.graphics.Rect)}
 **/
Display.prototype.getRectSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRectSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPresentationDeadlineNanos
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getPresentationDeadlineNanos()}
 **/
Display.prototype.getPresentationDeadlineNanos = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPresentationDeadlineNanos',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.html#toString()}
 **/
Display.prototype.toString = function() {
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
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getMode()}
 **/
Display.prototype.getMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
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
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getFlags()}
 **/
Display.prototype.getFlags = function() {
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
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSupportedModes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/Display.html#getSupportedModes()}
 **/
Display.prototype.getSupportedModes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSupportedModes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.Display') {
			return new Display(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Display;
