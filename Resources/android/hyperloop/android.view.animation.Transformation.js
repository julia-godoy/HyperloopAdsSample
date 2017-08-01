/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation.Transformation
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view.animation');

/**
 * @class android.view.animation.Transformation
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html}
 **/
var Transformation = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.animation.Transformation')) {
		result = arguments[0];
	}
	else {
		result = Transformation.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Transformation.prototype = Object.create(SuperClass.prototype);
Transformation.prototype.constructor = Transformation;

Object.defineProperty(Transformation.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Transformation(this.$native.super);
	},
	enumerable: true
});

Transformation.className = 'android.view.animation.Transformation';
Transformation.prototype.className = 'android.view.animation.Transformation';

// class property
Object.defineProperty(Transformation, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.animation.Transformation');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Transformation.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.animation.Transformation');

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
	SubClass.prototype = Object.create(Transformation.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Transformation.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Transformation(Hyperloop.cast('android.view.animation.Transformation', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#TYPE_BOTH}
 */
Transformation.TYPE_BOTH = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#TYPE_MATRIX}
 */
Transformation.TYPE_MATRIX = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#TYPE_IDENTITY}
 */
Transformation.TYPE_IDENTITY = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#TYPE_ALPHA}
 */
Transformation.TYPE_ALPHA = 1;

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/animation/Transformation.html#mAlpha
Object.defineProperty(Transformation.prototype, 'mAlpha', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('mAlpha');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.Transformation') {
				return new Transformation(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('mAlpha', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/animation/Transformation.html#mMatrix
Object.defineProperty(Transformation.prototype, 'mMatrix', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('mMatrix');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.Transformation') {
				return new Transformation(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('mMatrix', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/animation/Transformation.html#mTransformationType
Object.defineProperty(Transformation.prototype, 'mTransformationType', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('mTransformationType');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.Transformation') {
				return new Transformation(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('mTransformationType', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toShortString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#toShortString()}
 **/
Transformation.prototype.toShortString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toShortString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function set
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#set(android.view.animation.Transformation)}
 **/
Transformation.prototype.set = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'set',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#getMatrix()}
 **/
Transformation.prototype.getMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compose
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#compose(android.view.animation.Transformation)}
 **/
Transformation.prototype.compose = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compose',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransformationType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#setTransformationType(int)}
 **/
Transformation.prototype.setTransformationType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransformationType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new Transformation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#clear()}
 **/
Transformation.prototype.clear = function() {
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
		if (result.apiName === 'android.view.animation.Transformation') {
			return new Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#setAlpha(float)}
 **/
Transformation.prototype.setAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new Transformation(result);
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
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#toString()}
 **/
Transformation.prototype.toString = function() {
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
		if (result.apiName === 'android.view.animation.Transformation') {
			return new Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransformationType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#getTransformationType()}
 **/
Transformation.prototype.getTransformationType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransformationType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAlpha
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/animation/Transformation.html#getAlpha()}
 **/
Transformation.prototype.getAlpha = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAlpha',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.animation.Transformation') {
			return new Transformation(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Transformation;
