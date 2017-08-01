/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.animation.ValueAnimator
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.animation');

/**
 * @class android.animation.ValueAnimator
 * @extends android.animation.Animator 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html}
 **/
var ValueAnimator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.animation.ValueAnimator')) {
		result = arguments[0];
	}
	else {
		result = ValueAnimator.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.animation.Animator');
ValueAnimator.prototype = Object.create(SuperClass.prototype);
ValueAnimator.prototype.constructor = ValueAnimator;

Object.defineProperty(ValueAnimator.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ValueAnimator(this.$native.super);
	},
	enumerable: true
});

ValueAnimator.className = 'android.animation.ValueAnimator';
ValueAnimator.prototype.className = 'android.animation.ValueAnimator';

// class property
Object.defineProperty(ValueAnimator, 'class', {
	get: function() {
		return Hyperloop.getClass('android.animation.ValueAnimator');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ValueAnimator.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.animation.ValueAnimator');

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
	SubClass.prototype = Object.create(ValueAnimator.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ValueAnimator.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ValueAnimator(Hyperloop.cast('android.animation.ValueAnimator', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#RESTART}
 */
ValueAnimator.RESTART = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#REVERSE}
 */
ValueAnimator.REVERSE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#INFINITE}
 */
ValueAnimator.INFINITE = -1;

// Inner classes
Object.defineProperty(ValueAnimator, 'AnimatorUpdateListener', {
	get: function() {
		return require('android.animation.ValueAnimator$AnimatorUpdateListener');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getFrameDelay
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getFrameDelay()}
 **/
ValueAnimator.getFrameDelay = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getFrameDelay',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ofInt
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#ofInt(int[])}
 **/
ValueAnimator.ofInt = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'ofInt',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFrameDelay
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setFrameDelay(long)}
 **/
ValueAnimator.setFrameDelay = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setFrameDelay',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ofArgb
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#ofArgb(int[])}
 **/
ValueAnimator.ofArgb = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'ofArgb',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ofFloat
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#ofFloat(float[])}
 **/
ValueAnimator.ofFloat = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'ofFloat',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ofPropertyValuesHolder
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#ofPropertyValuesHolder(android.animation.PropertyValuesHolder[])}
 **/
ValueAnimator.ofPropertyValuesHolder = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'ofPropertyValuesHolder',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ofObject
 * @static
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#ofObject(android.animation.TypeEvaluator, java.lang.Object[])}
 **/
ValueAnimator.ofObject = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'ofObject',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @function setDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setDuration(long)}
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setDuration(long)}
 **/
ValueAnimator.prototype.setDuration = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#cancel()}
 **/
ValueAnimator.prototype.cancel = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStartDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getStartDelay()}
 **/
ValueAnimator.prototype.getStartDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStartDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getRepeatMode()}
 **/
ValueAnimator.prototype.getRepeatMode = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getDuration()}
 **/
ValueAnimator.prototype.getDuration = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setValues(android.animation.PropertyValuesHolder[])}
 **/
ValueAnimator.prototype.setValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setRepeatCount(int)}
 **/
ValueAnimator.prototype.setRepeatCount = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRunning
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#isRunning()}
 **/
ValueAnimator.prototype.isRunning = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRunning',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getInterpolator()}
 **/
ValueAnimator.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function end
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#end()}
 **/
ValueAnimator.prototype.end = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'end',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIntValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setIntValues(int[])}
 **/
ValueAnimator.prototype.setIntValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIntValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStartDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setStartDelay(long)}
 **/
ValueAnimator.prototype.setStartDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStartDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimatedValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getAnimatedValue()}
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getAnimatedValue(java.lang.String)}
 **/
ValueAnimator.prototype.getAnimatedValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimatedValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setRepeatMode(int)}
 **/
ValueAnimator.prototype.setRepeatMode = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEvaluator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setEvaluator(android.animation.TypeEvaluator)}
 **/
ValueAnimator.prototype.setEvaluator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEvaluator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#resume()}
 **/
ValueAnimator.prototype.resume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getValues()}
 **/
ValueAnimator.prototype.getValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setInterpolator(android.animation.TimeInterpolator)}
 **/
ValueAnimator.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeAllUpdateListeners
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#removeAllUpdateListeners()}
 **/
ValueAnimator.prototype.removeAllUpdateListeners = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeAllUpdateListeners',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#start()}
 **/
ValueAnimator.prototype.start = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setObjectValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setObjectValues(java.lang.Object[])}
 **/
ValueAnimator.prototype.setObjectValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setObjectValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentPlayTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getCurrentPlayTime()}
 **/
ValueAnimator.prototype.getCurrentPlayTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentPlayTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isStarted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#isStarted()}
 **/
ValueAnimator.prototype.isStarted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isStarted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reverse
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#reverse()}
 **/
ValueAnimator.prototype.reverse = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reverse',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFloatValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setFloatValues(float[])}
 **/
ValueAnimator.prototype.setFloatValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFloatValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCurrentFraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setCurrentFraction(float)}
 **/
ValueAnimator.prototype.setCurrentFraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCurrentFraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function pause
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#pause()}
 **/
ValueAnimator.prototype.pause = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'pause',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimatedFraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getAnimatedFraction()}
 **/
ValueAnimator.prototype.getAnimatedFraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimatedFraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addUpdateListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#addUpdateListener(android.animation.ValueAnimator$AnimatorUpdateListener)}
 **/
ValueAnimator.prototype.addUpdateListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addUpdateListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#clone()}
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#clone()}
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#clone()}
 **/
ValueAnimator.prototype.clone = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#toString()}
 **/
ValueAnimator.prototype.toString = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeUpdateListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#removeUpdateListener(android.animation.ValueAnimator$AnimatorUpdateListener)}
 **/
ValueAnimator.prototype.removeUpdateListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeUpdateListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCurrentPlayTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#setCurrentPlayTime(long)}
 **/
ValueAnimator.prototype.setCurrentPlayTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCurrentPlayTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/ValueAnimator.html#getRepeatCount()}
 **/
ValueAnimator.prototype.getRepeatCount = function() {
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
		if (result.apiName === 'android.animation.ValueAnimator') {
			return new ValueAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ValueAnimator;
