/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.location.models.e
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.location.models');

/**
 * @class com.inlocomedia.android.location.models.e
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html}
 **/
var e = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.location.models.e')) {
		result = arguments[0];
	}
	else {
		result = e.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
e.prototype = Object.create(SuperClass.prototype);
e.prototype.constructor = e;

Object.defineProperty(e.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new e(this.$native.super);
	},
	enumerable: true
});

e.className = 'com.inlocomedia.android.location.models.e';
e.prototype.className = 'com.inlocomedia.android.location.models.e';

// class property
Object.defineProperty(e, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.location.models.e');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
e.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('com.inlocomedia.android.location.models.e');

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
	SubClass.prototype = Object.create(e.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
e.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new e(Hyperloop.cast('com.inlocomedia.android.location.models.e', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function a
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#a(boolean)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#a(android.graphics.PointF)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#a()}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#a(java.lang.String)}
 **/
e.prototype.a = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'a',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.e') {
			return new e(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#getHeight()}
 **/
e.prototype.getHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.e') {
			return new e(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function b
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#b()}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#b(android.graphics.PointF)}
 **/
e.prototype.b = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'b',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.e') {
			return new e(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloorY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#getFloorY()}
 **/
e.prototype.getFloorY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloorY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.e') {
			return new e(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getImageDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#getImageDrawable(boolean)}
 **/
e.prototype.getImageDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getImageDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.e') {
			return new e(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloorX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#getFloorX()}
 **/
e.prototype.getFloorX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloorX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.e') {
			return new e(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#getWidth()}
 **/
e.prototype.getWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.e') {
			return new e(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloorWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#getFloorWidth()}
 **/
e.prototype.getFloorWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloorWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.e') {
			return new e(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloorHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/e.html#getFloorHeight()}
 **/
e.prototype.getFloorHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloorHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.e') {
			return new e(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = e;
