/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation.LayoutAnimationController
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view.animation');

/**
 * @class android.view.animation.LayoutAnimationController
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html}
 **/
var LayoutAnimationController = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.animation.LayoutAnimationController')) {
		result = arguments[0];
	}
	else {
		result = LayoutAnimationController.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
LayoutAnimationController.prototype = Object.create(SuperClass.prototype);
LayoutAnimationController.prototype.constructor = LayoutAnimationController;

Object.defineProperty(LayoutAnimationController.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new LayoutAnimationController(this.$native.super);
	},
	enumerable: true
});

LayoutAnimationController.className = 'android.view.animation.LayoutAnimationController';
LayoutAnimationController.prototype.className = 'android.view.animation.LayoutAnimationController';

// class property
Object.defineProperty(LayoutAnimationController, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.animation.LayoutAnimationController');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
LayoutAnimationController.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.animation.LayoutAnimationController');

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
	SubClass.prototype = Object.create(LayoutAnimationController.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
LayoutAnimationController.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new LayoutAnimationController(Hyperloop.cast('android.view.animation.LayoutAnimationController', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#ORDER_REVERSE}
 */
LayoutAnimationController.ORDER_REVERSE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#ORDER_NORMAL}
 */
LayoutAnimationController.ORDER_NORMAL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#ORDER_RANDOM}
 */
LayoutAnimationController.ORDER_RANDOM = 2;

// Inner classes
Object.defineProperty(LayoutAnimationController, 'AnimationParameters', {
	get: function() {
		return require('android.view.animation.LayoutAnimationController$AnimationParameters');
	},
	enumerable: true
});

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#mInterpolator
Object.defineProperty(LayoutAnimationController.prototype, 'mInterpolator', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('mInterpolator');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.LayoutAnimationController') {
				return new LayoutAnimationController(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('mInterpolator', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#mAnimation
Object.defineProperty(LayoutAnimationController.prototype, 'mAnimation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('mAnimation');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.LayoutAnimationController') {
				return new LayoutAnimationController(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('mAnimation', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#mRandomizer
Object.defineProperty(LayoutAnimationController.prototype, 'mRandomizer', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('mRandomizer');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.LayoutAnimationController') {
				return new LayoutAnimationController(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('mRandomizer', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getDelay()}
 **/
LayoutAnimationController.prototype.getDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setInterpolator(android.content.Context, int)}
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setInterpolator(android.view.animation.Interpolator)}
 **/
LayoutAnimationController.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#start()}
 **/
LayoutAnimationController.prototype.start = function() {
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
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function willOverlap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#willOverlap()}
 **/
LayoutAnimationController.prototype.willOverlap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'willOverlap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#isDone()}
 **/
LayoutAnimationController.prototype.isDone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setAnimation(android.content.Context, int)}
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setAnimation(android.view.animation.Animation)}
 **/
LayoutAnimationController.prototype.setAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOrder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setOrder(int)}
 **/
LayoutAnimationController.prototype.setOrder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOrder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimationForView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getAnimationForView(android.view.View)}
 **/
LayoutAnimationController.prototype.getAnimationForView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimationForView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransformedIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getTransformedIndex(android.view.animation.LayoutAnimationController$AnimationParameters)}
 **/
LayoutAnimationController.prototype.getTransformedIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransformedIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getAnimation()}
 **/
LayoutAnimationController.prototype.getAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOrder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getOrder()}
 **/
LayoutAnimationController.prototype.getOrder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOrder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDelayForView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getDelayForView(android.view.View)}
 **/
LayoutAnimationController.prototype.getDelayForView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDelayForView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#getInterpolator()}
 **/
LayoutAnimationController.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDelay
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/LayoutAnimationController.html#setDelay(float)}
 **/
LayoutAnimationController.prototype.setDelay = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDelay',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.LayoutAnimationController') {
			return new LayoutAnimationController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = LayoutAnimationController;
