/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.drawable.PictureDrawable
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics.drawable');

/**
 * @class android.graphics.drawable.PictureDrawable
 * @extends android.graphics.drawable.Drawable 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/PictureDrawable.html}
 **/
var PictureDrawable = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.drawable.PictureDrawable')) {
		result = arguments[0];
	}
	else {
		result = PictureDrawable.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.graphics.drawable.Drawable');
PictureDrawable.prototype = Object.create(SuperClass.prototype);
PictureDrawable.prototype.constructor = PictureDrawable;

Object.defineProperty(PictureDrawable.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PictureDrawable(this.$native.super);
	},
	enumerable: true
});

PictureDrawable.className = 'android.graphics.drawable.PictureDrawable';
PictureDrawable.prototype.className = 'android.graphics.drawable.PictureDrawable';

// class property
Object.defineProperty(PictureDrawable, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.drawable.PictureDrawable');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PictureDrawable.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.drawable.PictureDrawable');

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
	SubClass.prototype = Object.create(PictureDrawable.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PictureDrawable.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PictureDrawable(Hyperloop.cast('android.graphics.drawable.PictureDrawable', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getOpacity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/PictureDrawable.html#getOpacity()}
 **/
PictureDrawable.prototype.getOpacity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOpacity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.PictureDrawable') {
			return new PictureDrawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPicture
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/PictureDrawable.html#setPicture(android.graphics.Picture)}
 **/
PictureDrawable.prototype.setPicture = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPicture',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.PictureDrawable') {
			return new PictureDrawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setColorFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/PictureDrawable.html#setColorFilter(android.graphics.ColorFilter)}
 **/
PictureDrawable.prototype.setColorFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setColorFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.PictureDrawable') {
			return new PictureDrawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPicture
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/PictureDrawable.html#getPicture()}
 **/
PictureDrawable.prototype.getPicture = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPicture',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.PictureDrawable') {
			return new PictureDrawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntrinsicHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/PictureDrawable.html#getIntrinsicHeight()}
 **/
PictureDrawable.prototype.getIntrinsicHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntrinsicHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.PictureDrawable') {
			return new PictureDrawable(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/PictureDrawable.html#setAlpha(int)}
 **/
PictureDrawable.prototype.setAlpha = function() {
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
		if (result.apiName === 'android.graphics.drawable.PictureDrawable') {
			return new PictureDrawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function draw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/PictureDrawable.html#draw(android.graphics.Canvas)}
 **/
PictureDrawable.prototype.draw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'draw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.PictureDrawable') {
			return new PictureDrawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntrinsicWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/drawable/PictureDrawable.html#getIntrinsicWidth()}
 **/
PictureDrawable.prototype.getIntrinsicWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntrinsicWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.drawable.PictureDrawable') {
			return new PictureDrawable(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PictureDrawable;
