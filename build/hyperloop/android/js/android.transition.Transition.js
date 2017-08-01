/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.Transition
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.transition');

/**
 * @class android.transition.Transition
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html}
 **/
var Transition = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.transition.Transition')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.transition.Transition. Create a subclass using android.transition.Transition.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Transition.prototype = Object.create(SuperClass.prototype);
Transition.prototype.constructor = Transition;

Object.defineProperty(Transition.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Transition(this.$native.super);
	},
	enumerable: true
});

Transition.className = 'android.transition.Transition';
Transition.prototype.className = 'android.transition.Transition';

// class property
Object.defineProperty(Transition, 'class', {
	get: function() {
		return Hyperloop.getClass('android.transition.Transition');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Transition.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.transition.Transition');

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
	SubClass.prototype = Object.create(Transition.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Transition.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Transition(Hyperloop.cast('android.transition.Transition', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#MATCH_NAME}
 */
Transition.MATCH_NAME = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#MATCH_INSTANCE}
 */
Transition.MATCH_INSTANCE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#MATCH_ITEM_ID}
 */
Transition.MATCH_ITEM_ID = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#MATCH_ID}
 */
Transition.MATCH_ID = 3;

// Inner classes
Object.defineProperty(Transition, 'EpicenterCallback', {
	get: function() {
		return require('android.transition.Transition$EpicenterCallback');
	},
	enumerable: true
});
Object.defineProperty(Transition, 'TransitionListener', {
	get: function() {
		return require('android.transition.Transition$TransitionListener');
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setDuration(long)}
 **/
Transition.prototype.setDuration = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPathMotion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setPathMotion(android.transition.PathMotion)}
 **/
Transition.prototype.setPathMotion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPathMotion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEpicenterCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setEpicenterCallback(android.transition.Transition$EpicenterCallback)}
 **/
Transition.prototype.setEpicenterCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEpicenterCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPropagation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getPropagation()}
 **/
Transition.prototype.getPropagation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPropagation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getName()}
 **/
Transition.prototype.getName = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransitionValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTransitionValues(android.view.View, boolean)}
 **/
Transition.prototype.getTransitionValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransitionValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getStartDelay()}
 **/
Transition.prototype.getStartDelay = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargetTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTargetTypes()}
 **/
Transition.prototype.getTargetTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargetTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isTransitionRequired
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#isTransitionRequired(android.transition.TransitionValues, android.transition.TransitionValues)}
 **/
Transition.prototype.isTransitionRequired = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isTransitionRequired',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTargets()}
 **/
Transition.prototype.getTargets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function excludeTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeTarget(int, boolean)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeTarget(java.lang.String, boolean)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeTarget(android.view.View, boolean)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeTarget(java.lang.Class, boolean)}
 **/
Transition.prototype.excludeTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'excludeTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getDuration()}
 **/
Transition.prototype.getDuration = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createAnimator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#createAnimator(android.view.ViewGroup, android.transition.TransitionValues, android.transition.TransitionValues)}
 **/
Transition.prototype.createAnimator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createAnimator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function captureEndValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#captureEndValues(android.transition.TransitionValues)}
 **/
Transition.prototype.captureEndValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'captureEndValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getInterpolator()}
 **/
Transition.prototype.getInterpolator = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEpicenterCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getEpicenterCallback()}
 **/
Transition.prototype.getEpicenterCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEpicenterCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setStartDelay(long)}
 **/
Transition.prototype.setStartDelay = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargetNames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTargetNames()}
 **/
Transition.prototype.getTargetNames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargetNames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#addListener(android.transition.Transition$TransitionListener)}
 **/
Transition.prototype.addListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargetIds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTargetIds()}
 **/
Transition.prototype.getTargetIds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargetIds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setInterpolator(android.animation.TimeInterpolator)}
 **/
Transition.prototype.setInterpolator = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#addTarget(int)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#addTarget(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#addTarget(java.lang.Class)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#addTarget(android.view.View)}
 **/
Transition.prototype.addTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function excludeChildren
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeChildren(int, boolean)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeChildren(android.view.View, boolean)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#excludeChildren(java.lang.Class, boolean)}
 **/
Transition.prototype.excludeChildren = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'excludeChildren',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPathMotion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getPathMotion()}
 **/
Transition.prototype.getPathMotion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPathMotion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#removeListener(android.transition.Transition$TransitionListener)}
 **/
Transition.prototype.removeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEpicenter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getEpicenter()}
 **/
Transition.prototype.getEpicenter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEpicenter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransitionProperties
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#getTransitionProperties()}
 **/
Transition.prototype.getTransitionProperties = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransitionProperties',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPropagation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setPropagation(android.transition.TransitionPropagation)}
 **/
Transition.prototype.setPropagation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPropagation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function captureStartValues
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#captureStartValues(android.transition.TransitionValues)}
 **/
Transition.prototype.captureStartValues = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'captureStartValues',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#clone()}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#clone()}
 **/
Transition.prototype.clone = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#toString()}
 **/
Transition.prototype.toString = function() {
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
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMatchOrder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#setMatchOrder(int[])}
 **/
Transition.prototype.setMatchOrder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMatchOrder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canRemoveViews
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#canRemoveViews()}
 **/
Transition.prototype.canRemoveViews = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canRemoveViews',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#removeTarget(int)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#removeTarget(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#removeTarget(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/transition/Transition.html#removeTarget(java.lang.Class)}
 **/
Transition.prototype.removeTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Transition') {
			return new Transition(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Transition;
