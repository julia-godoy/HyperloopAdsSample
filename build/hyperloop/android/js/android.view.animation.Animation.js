/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation.Animation
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view.animation');

/**
 * @class android.view.animation.Animation
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html}
 **/
var Animation = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.animation.Animation')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.animation.Animation. Create a subclass using android.view.animation.Animation.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Animation.prototype = Object.create(SuperClass.prototype);
Animation.prototype.constructor = Animation;

Object.defineProperty(Animation.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Animation(this.$native.super);
	},
	enumerable: true
});

Animation.className = 'android.view.animation.Animation';
Animation.prototype.className = 'android.view.animation.Animation';

// class property
Object.defineProperty(Animation, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.animation.Animation');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Animation.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.animation.Animation');

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
	SubClass.prototype = Object.create(Animation.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Animation.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Animation(Hyperloop.cast('android.view.animation.Animation', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#ABSOLUTE}
 */
Animation.ABSOLUTE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#ZORDER_NORMAL}
 */
Animation.ZORDER_NORMAL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#RELATIVE_TO_PARENT}
 */
Animation.RELATIVE_TO_PARENT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#RESTART}
 */
Animation.RESTART = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#REVERSE}
 */
Animation.REVERSE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#INFINITE}
 */
Animation.INFINITE = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#ZORDER_TOP}
 */
Animation.ZORDER_TOP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#START_ON_FIRST_FRAME}
 */
Animation.START_ON_FIRST_FRAME = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#RELATIVE_TO_SELF}
 */
Animation.RELATIVE_TO_SELF = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#ZORDER_BOTTOM}
 */
Animation.ZORDER_BOTTOM = -1;

// Inner classes
Object.defineProperty(Animation, 'Description', {
	get: function() {
		return require('android.view.animation.Animation$Description');
	},
	enumerable: true
});
Object.defineProperty(Animation, 'AnimationListener', {
	get: function() {
		return require('android.view.animation.Animation$AnimationListener');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#cancel()}
 **/
Animation.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setDuration(long)}
 **/
Animation.prototype.setDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransformation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getTransformation(long, android.view.animation.Transformation)}
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getTransformation(long, android.view.animation.Transformation, float)}
 **/
Animation.prototype.getTransformation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransformation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function restrictDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#restrictDuration(long)}
 **/
Animation.prototype.restrictDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'restrictDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFillAfter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setFillAfter(boolean)}
 **/
Animation.prototype.setFillAfter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFillAfter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBackgroundColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getBackgroundColor()}
 **/
Animation.prototype.getBackgroundColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBackgroundColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInitialized
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#isInitialized()}
 **/
Animation.prototype.isInitialized = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInitialized',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasStarted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#hasStarted()}
 **/
Animation.prototype.hasStarted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasStarted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyTransformation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#applyTransformation(float, android.view.animation.Transformation)}
 **/
Animation.prototype.applyTransformation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyTransformation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFillBefore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getFillBefore()}
 **/
Animation.prototype.getFillBefore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFillBefore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRepeatMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getRepeatMode()}
 **/
Animation.prototype.getRepeatMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRepeatMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDetachWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setDetachWallpaper(boolean)}
 **/
Animation.prototype.setDetachWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDetachWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getDuration()}
 **/
Animation.prototype.getDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRepeatCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setRepeatCount(int)}
 **/
Animation.prototype.setRepeatCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRepeatCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInterpolator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getInterpolator()}
 **/
Animation.prototype.getInterpolator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInterpolator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStartTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setStartTime(long)}
 **/
Animation.prototype.setStartTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStartTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getStartTime()}
 **/
Animation.prototype.getStartTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFillEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setFillEnabled(boolean)}
 **/
Animation.prototype.setFillEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFillEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFillBefore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setFillBefore(boolean)}
 **/
Animation.prototype.setFillBefore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFillBefore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDetachWallpaper
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getDetachWallpaper()}
 **/
Animation.prototype.getDetachWallpaper = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDetachWallpaper',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAnimationListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setAnimationListener(android.view.animation.Animation$AnimationListener)}
 **/
Animation.prototype.setAnimationListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAnimationListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFillAfter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getFillAfter()}
 **/
Animation.prototype.getFillAfter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFillAfter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRepeatMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setRepeatMode(int)}
 **/
Animation.prototype.setRepeatMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRepeatMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function willChangeBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#willChangeBounds()}
 **/
Animation.prototype.willChangeBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'willChangeBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getStartOffset()}
 **/
Animation.prototype.getStartOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackgroundColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setBackgroundColor(int)}
 **/
Animation.prototype.setBackgroundColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackgroundColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setInterpolator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setInterpolator(android.content.Context, int)}
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setInterpolator(android.view.animation.Interpolator)}
 **/
Animation.prototype.setInterpolator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setInterpolator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setZAdjustment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setZAdjustment(int)}
 **/
Animation.prototype.setZAdjustment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setZAdjustment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function start
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#start()}
 **/
Animation.prototype.start = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'start',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function startNow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#startNow()}
 **/
Animation.prototype.startNow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startNow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#resolveSize(int, float, int, int)}
 **/
Animation.prototype.resolveSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ensureInterpolator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#ensureInterpolator()}
 **/
Animation.prototype.ensureInterpolator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'ensureInterpolator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getZAdjustment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getZAdjustment()}
 **/
Animation.prototype.getZAdjustment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getZAdjustment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFillEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#isFillEnabled()}
 **/
Animation.prototype.isFillEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFillEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStartOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#setStartOffset(long)}
 **/
Animation.prototype.setStartOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStartOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasEnded
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#hasEnded()}
 **/
Animation.prototype.hasEnded = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasEnded',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScaleFactor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getScaleFactor()}
 **/
Animation.prototype.getScaleFactor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScaleFactor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#clone()}
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#clone()}
 **/
Animation.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeDurationHint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#computeDurationHint()}
 **/
Animation.prototype.computeDurationHint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeDurationHint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#reset()}
 **/
Animation.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#finalize()}
 **/
Animation.prototype.finalize = function() {
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
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function initialize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#initialize(int, int, int, int)}
 **/
Animation.prototype.initialize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'initialize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scaleCurrentDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#scaleCurrentDuration(float)}
 **/
Animation.prototype.scaleCurrentDuration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scaleCurrentDuration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRepeatCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#getRepeatCount()}
 **/
Animation.prototype.getRepeatCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRepeatCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function willChangeTransformationMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.html#willChangeTransformationMatrix()}
 **/
Animation.prototype.willChangeTransformationMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'willChangeTransformationMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Animation') {
			return new Animation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Animation;
