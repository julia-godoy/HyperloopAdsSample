/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.WindowInsets
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.WindowInsets
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html}
 **/
var WindowInsets = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.WindowInsets')) {
		result = arguments[0];
	}
	else {
		result = WindowInsets.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
WindowInsets.prototype = Object.create(SuperClass.prototype);
WindowInsets.prototype.constructor = WindowInsets;

Object.defineProperty(WindowInsets.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new WindowInsets(this.$native.super);
	},
	enumerable: true
});

WindowInsets.className = 'android.view.WindowInsets';
WindowInsets.prototype.className = 'android.view.WindowInsets';

// class property
Object.defineProperty(WindowInsets, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.WindowInsets');
	},
	enumerable: true,
	configurable: false
});


// Cast
WindowInsets.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new WindowInsets(Hyperloop.cast('android.view.WindowInsets', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getSystemWindowInsetRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getSystemWindowInsetRight()}
 **/
WindowInsets.prototype.getSystemWindowInsetRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemWindowInsetRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceSystemWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#replaceSystemWindowInsets(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#replaceSystemWindowInsets(android.graphics.Rect)}
 **/
WindowInsets.prototype.replaceSystemWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceSystemWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRound
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#isRound()}
 **/
WindowInsets.prototype.isRound = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRound',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasSystemWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#hasSystemWindowInsets()}
 **/
WindowInsets.prototype.hasSystemWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasSystemWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemWindowInsetBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getSystemWindowInsetBottom()}
 **/
WindowInsets.prototype.getSystemWindowInsetBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemWindowInsetBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStableInsetLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getStableInsetLeft()}
 **/
WindowInsets.prototype.getStableInsetLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStableInsetLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#hasInsets()}
 **/
WindowInsets.prototype.hasInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemWindowInsetLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getSystemWindowInsetLeft()}
 **/
WindowInsets.prototype.getSystemWindowInsetLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemWindowInsetLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isConsumed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#isConsumed()}
 **/
WindowInsets.prototype.isConsumed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isConsumed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStableInsetRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getStableInsetRight()}
 **/
WindowInsets.prototype.getStableInsetRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStableInsetRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStableInsetBottom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getStableInsetBottom()}
 **/
WindowInsets.prototype.getStableInsetBottom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStableInsetBottom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function consumeStableInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#consumeStableInsets()}
 **/
WindowInsets.prototype.consumeStableInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'consumeStableInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasStableInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#hasStableInsets()}
 **/
WindowInsets.prototype.hasStableInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasStableInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
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
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#toString()}
 **/
WindowInsets.prototype.toString = function() {
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
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemWindowInsetTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getSystemWindowInsetTop()}
 **/
WindowInsets.prototype.getSystemWindowInsetTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSystemWindowInsetTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function consumeSystemWindowInsets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#consumeSystemWindowInsets()}
 **/
WindowInsets.prototype.consumeSystemWindowInsets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'consumeSystemWindowInsets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStableInsetTop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowInsets.html#getStableInsetTop()}
 **/
WindowInsets.prototype.getStableInsetTop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStableInsetTop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowInsets') {
			return new WindowInsets(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = WindowInsets;
