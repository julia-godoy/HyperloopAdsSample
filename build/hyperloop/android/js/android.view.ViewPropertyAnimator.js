/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewPropertyAnimator
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.ViewPropertyAnimator
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html}
 **/
var ViewPropertyAnimator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.ViewPropertyAnimator')) {
		result = arguments[0];
	}
	else {
		result = ViewPropertyAnimator.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ViewPropertyAnimator.prototype = Object.create(SuperClass.prototype);
ViewPropertyAnimator.prototype.constructor = ViewPropertyAnimator;

Object.defineProperty(ViewPropertyAnimator.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ViewPropertyAnimator(this.$native.super);
	},
	enumerable: true
});

ViewPropertyAnimator.className = 'android.view.ViewPropertyAnimator';
ViewPropertyAnimator.prototype.className = 'android.view.ViewPropertyAnimator';

// class property
Object.defineProperty(ViewPropertyAnimator, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.ViewPropertyAnimator');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ViewPropertyAnimator.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.ViewPropertyAnimator');

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
	SubClass.prototype = Object.create(ViewPropertyAnimator.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ViewPropertyAnimator.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ViewPropertyAnimator(Hyperloop.cast('android.view.ViewPropertyAnimator', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setDuration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#setDuration(long)}
 **/
ViewPropertyAnimator.prototype.setDuration = function() {
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
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#cancel()}
 **/
ViewPropertyAnimator.prototype.cancel = function() {
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
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotationYBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotationYBy(float)}
 **/
ViewPropertyAnimator.prototype.rotationYBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotationYBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotationXBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotationXBy(float)}
 **/
ViewPropertyAnimator.prototype.rotationXBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotationXBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#getStartDelay()}
 **/
ViewPropertyAnimator.prototype.getStartDelay = function() {
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
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scaleX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#scaleX(float)}
 **/
ViewPropertyAnimator.prototype.scaleX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scaleX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scaleY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#scaleY(float)}
 **/
ViewPropertyAnimator.prototype.scaleY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scaleY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scaleYBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#scaleYBy(float)}
 **/
ViewPropertyAnimator.prototype.scaleYBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scaleYBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotationX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotationX(float)}
 **/
ViewPropertyAnimator.prototype.rotationX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotationX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function scaleXBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#scaleXBy(float)}
 **/
ViewPropertyAnimator.prototype.scaleXBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'scaleXBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotationY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotationY(float)}
 **/
ViewPropertyAnimator.prototype.rotationY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotationY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#getDuration()}
 **/
ViewPropertyAnimator.prototype.getDuration = function() {
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
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationXBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationXBy(float)}
 **/
ViewPropertyAnimator.prototype.translationXBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationXBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationYBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationYBy(float)}
 **/
ViewPropertyAnimator.prototype.translationYBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationYBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function alpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#alpha(float)}
 **/
ViewPropertyAnimator.prototype.alpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'alpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#getInterpolator()}
 **/
ViewPropertyAnimator.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function withStartAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#withStartAction(java.lang.Runnable)}
 **/
ViewPropertyAnimator.prototype.withStartAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'withStartAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#setStartDelay(long)}
 **/
ViewPropertyAnimator.prototype.setStartDelay = function() {
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
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#setInterpolator(android.animation.TimeInterpolator)}
 **/
ViewPropertyAnimator.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotationBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotationBy(float)}
 **/
ViewPropertyAnimator.prototype.rotationBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotationBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rotation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#rotation(float)}
 **/
ViewPropertyAnimator.prototype.rotation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rotation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
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
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#start()}
 **/
ViewPropertyAnimator.prototype.start = function() {
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
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationZBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationZBy(float)}
 **/
ViewPropertyAnimator.prototype.translationZBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationZBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function xBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#xBy(float)}
 **/
ViewPropertyAnimator.prototype.xBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'xBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function zBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#zBy(float)}
 **/
ViewPropertyAnimator.prototype.zBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'zBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function yBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#yBy(float)}
 **/
ViewPropertyAnimator.prototype.yBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'yBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationX(float)}
 **/
ViewPropertyAnimator.prototype.translationX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUpdateListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#setUpdateListener(android.animation.ValueAnimator$AnimatorUpdateListener)}
 **/
ViewPropertyAnimator.prototype.setUpdateListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUpdateListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function alphaBy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#alphaBy(float)}
 **/
ViewPropertyAnimator.prototype.alphaBy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'alphaBy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function x
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#x(float)}
 **/
ViewPropertyAnimator.prototype.x = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'x',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#setListener(android.animation.Animator$AnimatorListener)}
 **/
ViewPropertyAnimator.prototype.setListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function y
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#y(float)}
 **/
ViewPropertyAnimator.prototype.y = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'y',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function withLayer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#withLayer()}
 **/
ViewPropertyAnimator.prototype.withLayer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'withLayer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function withEndAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#withEndAction(java.lang.Runnable)}
 **/
ViewPropertyAnimator.prototype.withEndAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'withEndAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function z
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#z(float)}
 **/
ViewPropertyAnimator.prototype.z = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'z',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationY(float)}
 **/
ViewPropertyAnimator.prototype.translationY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function translationZ
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewPropertyAnimator.html#translationZ(float)}
 **/
ViewPropertyAnimator.prototype.translationZ = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'translationZ',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewPropertyAnimator') {
			return new ViewPropertyAnimator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ViewPropertyAnimator;
