/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Shader
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics');

/**
 * @class android.graphics.Shader
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Shader.html}
 **/
var Shader = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Shader')) {
		result = arguments[0];
	}
	else {
		result = Shader.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Shader.prototype = Object.create(SuperClass.prototype);
Shader.prototype.constructor = Shader;

Object.defineProperty(Shader.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Shader(this.$native.super);
	},
	enumerable: true
});

Shader.className = 'android.graphics.Shader';
Shader.prototype.className = 'android.graphics.Shader';

// class property
Object.defineProperty(Shader, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Shader');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Shader.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.Shader');

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
	SubClass.prototype = Object.create(Shader.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Shader.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Shader(Hyperloop.cast('android.graphics.Shader', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(Shader, 'TileMode', {
	get: function() {
		return require('android.graphics.Shader$TileMode');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getLocalMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Shader.html#getLocalMatrix(android.graphics.Matrix)}
 **/
Shader.prototype.getLocalMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Shader') {
			return new Shader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocalMatrix
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Shader.html#setLocalMatrix(android.graphics.Matrix)}
 **/
Shader.prototype.setLocalMatrix = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocalMatrix',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Shader') {
			return new Shader(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Shader.html#finalize()}
 **/
Shader.prototype.finalize = function() {
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
		if (result.apiName === 'android.graphics.Shader') {
			return new Shader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Shader;
