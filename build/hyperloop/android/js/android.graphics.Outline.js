/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Outline
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics');

/**
 * @class android.graphics.Outline
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html}
 **/
var Outline = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Outline')) {
		result = arguments[0];
	}
	else {
		result = Outline.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Outline.prototype = Object.create(SuperClass.prototype);
Outline.prototype.constructor = Outline;

Object.defineProperty(Outline.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Outline(this.$native.super);
	},
	enumerable: true
});

Outline.className = 'android.graphics.Outline';
Outline.prototype.className = 'android.graphics.Outline';

// class property
Object.defineProperty(Outline, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Outline');
	},
	enumerable: true,
	configurable: false
});


// Cast
Outline.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Outline(Hyperloop.cast('android.graphics.Outline', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function set
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#set(android.graphics.Outline)}
 **/
Outline.prototype.set = function() {
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
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRoundRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#setRoundRect(int, int, int, int, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#setRoundRect(android.graphics.Rect, float)}
 **/
Outline.prototype.setRoundRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRoundRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function offset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#offset(int, int)}
 **/
Outline.prototype.offset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'offset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEmpty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#setEmpty()}
 **/
Outline.prototype.setEmpty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEmpty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEmpty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#isEmpty()}
 **/
Outline.prototype.isEmpty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEmpty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#setAlpha(float)}
 **/
Outline.prototype.setAlpha = function() {
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
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#setRect(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#setRect(android.graphics.Rect)}
 **/
Outline.prototype.setRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOval
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#setOval(int, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#setOval(android.graphics.Rect)}
 **/
Outline.prototype.setOval = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOval',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setConvexPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#setConvexPath(android.graphics.Path)}
 **/
Outline.prototype.setConvexPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setConvexPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canClip
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#canClip()}
 **/
Outline.prototype.canClip = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canClip',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Outline.html#getAlpha()}
 **/
Outline.prototype.getAlpha = function() {
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
		if (result.apiName === 'android.graphics.Outline') {
			return new Outline(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Outline;
