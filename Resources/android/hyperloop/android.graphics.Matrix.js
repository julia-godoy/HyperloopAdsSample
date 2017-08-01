/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Matrix
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics');

/**
 * @class android.graphics.Matrix
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html}
 **/
var Matrix = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Matrix')) {
		result = arguments[0];
	}
	else {
		result = Matrix.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Matrix.prototype = Object.create(SuperClass.prototype);
Matrix.prototype.constructor = Matrix;

Object.defineProperty(Matrix.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Matrix(this.$native.super);
	},
	enumerable: true
});

Matrix.className = 'android.graphics.Matrix';
Matrix.prototype.className = 'android.graphics.Matrix';

// class property
Object.defineProperty(Matrix, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Matrix');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Matrix.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.Matrix');

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
	SubClass.prototype = Object.create(Matrix.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Matrix.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Matrix(Hyperloop.cast('android.graphics.Matrix', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MSKEW_Y}
 */
Matrix.MSKEW_Y = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MSKEW_X}
 */
Matrix.MSKEW_X = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MPERSP_2}
 */
Matrix.MPERSP_2 = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MTRANS_X}
 */
Matrix.MTRANS_X = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MTRANS_Y}
 */
Matrix.MTRANS_Y = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MPERSP_1}
 */
Matrix.MPERSP_1 = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MPERSP_0}
 */
Matrix.MPERSP_0 = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MSCALE_Y}
 */
Matrix.MSCALE_Y = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#MSCALE_X}
 */
Matrix.MSCALE_X = 0;

// Inner classes
Object.defineProperty(Matrix, 'ScaleToFit', {
	get: function() {
		return require('android.graphics.Matrix$ScaleToFit');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function preScale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preScale(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preScale(float, float)}
 **/
Matrix.prototype.preScale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'preScale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mapVectors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapVectors(float[], int, float[], int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapVectors(float[], float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapVectors(float[])}
 **/
Matrix.prototype.mapVectors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mapVectors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPolyToPoly
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setPolyToPoly(float[], int, float[], int, int)}
 **/
Matrix.prototype.setPolyToPoly = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPolyToPoly',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTranslate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setTranslate(float, float)}
 **/
Matrix.prototype.setTranslate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTranslate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toShortString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#toShortString()}
 **/
Matrix.prototype.toShortString = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postSkew
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postSkew(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postSkew(float, float)}
 **/
Matrix.prototype.postSkew = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postSkew',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSinCos
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setSinCos(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setSinCos(float, float)}
 **/
Matrix.prototype.setSinCos = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSinCos',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function preRotate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preRotate(float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preRotate(float)}
 **/
Matrix.prototype.preRotate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'preRotate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setValues(float[])}
 **/
Matrix.prototype.setValues = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#hashCode()}
 **/
Matrix.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function preTranslate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preTranslate(float, float)}
 **/
Matrix.prototype.preTranslate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'preTranslate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSkew
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setSkew(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setSkew(float, float)}
 **/
Matrix.prototype.setSkew = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSkew',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postRotate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postRotate(float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postRotate(float)}
 **/
Matrix.prototype.postRotate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postRotate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setConcat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setConcat(android.graphics.Matrix, android.graphics.Matrix)}
 **/
Matrix.prototype.setConcat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setConcat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postTranslate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postTranslate(float, float)}
 **/
Matrix.prototype.postTranslate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postTranslate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRectToRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setRectToRect(android.graphics.RectF, android.graphics.RectF, android.graphics.Matrix$ScaleToFit)}
 **/
Matrix.prototype.setRectToRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRectToRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mapPoints
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapPoints(float[], int, float[], int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapPoints(float[], float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapPoints(float[])}
 **/
Matrix.prototype.mapPoints = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mapPoints',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#set(android.graphics.Matrix)}
 **/
Matrix.prototype.set = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#invert(android.graphics.Matrix)}
 **/
Matrix.prototype.invert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#getValues(float[])}
 **/
Matrix.prototype.getValues = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setScale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setScale(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setScale(float, float)}
 **/
Matrix.prototype.setScale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function preConcat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preConcat(android.graphics.Matrix)}
 **/
Matrix.prototype.preConcat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'preConcat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isIdentity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#isIdentity()}
 **/
Matrix.prototype.isIdentity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isIdentity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rectStaysRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#rectStaysRect()}
 **/
Matrix.prototype.rectStaysRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rectStaysRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAffine
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#isAffine()}
 **/
Matrix.prototype.isAffine = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAffine',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mapRadius
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapRadius(float)}
 **/
Matrix.prototype.mapRadius = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mapRadius',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function preSkew
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preSkew(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#preSkew(float, float)}
 **/
Matrix.prototype.preSkew = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'preSkew',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#equals(java.lang.Object)}
 **/
Matrix.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postConcat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postConcat(android.graphics.Matrix)}
 **/
Matrix.prototype.postConcat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postConcat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#reset()}
 **/
Matrix.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRotate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setRotate(float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#setRotate(float)}
 **/
Matrix.prototype.setRotate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRotate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#toString()}
 **/
Matrix.prototype.toString = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#finalize()}
 **/
Matrix.prototype.finalize = function() {
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
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function postScale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postScale(float, float, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#postScale(float, float)}
 **/
Matrix.prototype.postScale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'postScale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function mapRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapRect(android.graphics.RectF, android.graphics.RectF)}
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.html#mapRect(android.graphics.RectF)}
 **/
Matrix.prototype.mapRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'mapRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Matrix') {
			return new Matrix(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Matrix;
