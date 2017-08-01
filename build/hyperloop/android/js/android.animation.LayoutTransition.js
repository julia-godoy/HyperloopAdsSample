/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.animation.LayoutTransition
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.animation');

/**
 * @class android.animation.LayoutTransition
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html}
 **/
var LayoutTransition = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.animation.LayoutTransition')) {
		result = arguments[0];
	}
	else {
		result = LayoutTransition.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
LayoutTransition.prototype = Object.create(SuperClass.prototype);
LayoutTransition.prototype.constructor = LayoutTransition;

Object.defineProperty(LayoutTransition.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new LayoutTransition(this.$native.super);
	},
	enumerable: true
});

LayoutTransition.className = 'android.animation.LayoutTransition';
LayoutTransition.prototype.className = 'android.animation.LayoutTransition';

// class property
Object.defineProperty(LayoutTransition, 'class', {
	get: function() {
		return Hyperloop.getClass('android.animation.LayoutTransition');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
LayoutTransition.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.animation.LayoutTransition');

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
	SubClass.prototype = Object.create(LayoutTransition.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
LayoutTransition.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new LayoutTransition(Hyperloop.cast('android.animation.LayoutTransition', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#APPEARING}
 */
LayoutTransition.APPEARING = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#CHANGING}
 */
LayoutTransition.CHANGING = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#CHANGE_APPEARING}
 */
LayoutTransition.CHANGE_APPEARING = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#CHANGE_DISAPPEARING}
 */
LayoutTransition.CHANGE_DISAPPEARING = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#DISAPPEARING}
 */
LayoutTransition.DISAPPEARING = 3;

// Inner classes
Object.defineProperty(LayoutTransition, 'TransitionListener', {
	get: function() {
		return require('android.animation.LayoutTransition$TransitionListener');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setDuration(long)}
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setDuration(int, long)}
 **/
LayoutTransition.prototype.setDuration = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isChangingLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#isChangingLayout()}
 **/
LayoutTransition.prototype.isChangingLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isChangingLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function showChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#showChild(android.view.ViewGroup, android.view.View)}
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#showChild(android.view.ViewGroup, android.view.View, int)}
 **/
LayoutTransition.prototype.showChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enableTransitionType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#enableTransitionType(int)}
 **/
LayoutTransition.prototype.enableTransitionType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enableTransitionType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStagger
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getStagger(int)}
 **/
LayoutTransition.prototype.getStagger = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStagger',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setInterpolator(int, android.animation.TimeInterpolator)}
 **/
LayoutTransition.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeTransitionListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#removeTransitionListener(android.animation.LayoutTransition$TransitionListener)}
 **/
LayoutTransition.prototype.removeTransitionListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeTransitionListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAnimator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setAnimator(int, android.animation.Animator)}
 **/
LayoutTransition.prototype.setAnimator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAnimator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAnimateParentHierarchy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setAnimateParentHierarchy(boolean)}
 **/
LayoutTransition.prototype.setAnimateParentHierarchy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAnimateParentHierarchy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addTransitionListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#addTransitionListener(android.animation.LayoutTransition$TransitionListener)}
 **/
LayoutTransition.prototype.addTransitionListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addTransitionListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#removeChild(android.view.ViewGroup, android.view.View)}
 **/
LayoutTransition.prototype.removeChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hideChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#hideChild(android.view.ViewGroup, android.view.View)}
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#hideChild(android.view.ViewGroup, android.view.View, int)}
 **/
LayoutTransition.prototype.hideChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hideChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getAnimator(int)}
 **/
LayoutTransition.prototype.getAnimator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTransitionTypeEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#isTransitionTypeEnabled(int)}
 **/
LayoutTransition.prototype.isTransitionTypeEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTransitionTypeEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getStartDelay(int)}
 **/
LayoutTransition.prototype.getStartDelay = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStagger
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setStagger(int, long)}
 **/
LayoutTransition.prototype.setStagger = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStagger',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getDuration(int)}
 **/
LayoutTransition.prototype.getDuration = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#isRunning()}
 **/
LayoutTransition.prototype.isRunning = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getInterpolator(int)}
 **/
LayoutTransition.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function disableTransitionType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#disableTransitionType(int)}
 **/
LayoutTransition.prototype.disableTransitionType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'disableTransitionType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransitionListeners
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#getTransitionListeners()}
 **/
LayoutTransition.prototype.getTransitionListeners = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransitionListeners',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addChild
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#addChild(android.view.ViewGroup, android.view.View)}
 **/
LayoutTransition.prototype.addChild = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addChild',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
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
 * @see {@link http://developer.android.com/reference/android/animation/LayoutTransition.html#setStartDelay(int, long)}
 **/
LayoutTransition.prototype.setStartDelay = function() {
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
		if (result.apiName === 'android.animation.LayoutTransition') {
			return new LayoutTransition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = LayoutTransition;
