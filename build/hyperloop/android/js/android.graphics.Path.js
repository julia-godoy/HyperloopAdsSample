/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Path
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics');

/**
 * @class android.graphics.Path
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html}
 **/
var Path = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Path')) {
		result = arguments[0];
	}
	else {
		result = Path.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Path.prototype = Object.create(SuperClass.prototype);
Path.prototype.constructor = Path;

Object.defineProperty(Path.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Path(this.$native.super);
	},
	enumerable: true
});

Path.className = 'android.graphics.Path';
Path.prototype.className = 'android.graphics.Path';

// class property
Object.defineProperty(Path, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Path');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Path.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.Path');

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
	SubClass.prototype = Object.create(Path.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Path.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Path(Hyperloop.cast('android.graphics.Path', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(Path, 'FillType', {
	get: function() {
		return require('android.graphics.Path$FillType');
	},
	enumerable: true
});
Object.defineProperty(Path, 'Op', {
	get: function() {
		return require('android.graphics.Path$Op');
	},
	enumerable: true
});
Object.defineProperty(Path, 'Direction', {
	get: function() {
		return require('android.graphics.Path$Direction');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function rMoveTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#rMoveTo(float, float)}
 **/
Path.prototype.rMoveTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rMoveTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFillType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#setFillType(android.graphics.Path$FillType)}
 **/
Path.prototype.setFillType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFillType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addArc
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addArc(android.graphics.RectF, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addArc(float, float, float, float, float, float)}
 **/
Path.prototype.addArc = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addArc',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#isRect(android.graphics.RectF)}
 **/
Path.prototype.isRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function incReserve
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#incReserve(int)}
 **/
Path.prototype.incReserve = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'incReserve',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function computeBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#computeBounds(android.graphics.RectF, boolean)}
 **/
Path.prototype.computeBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'computeBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addRoundRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addRoundRect(android.graphics.RectF, float, float, android.graphics.Path$Direction)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addRoundRect(float, float, float, float, float, float, android.graphics.Path$Direction)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addRoundRect(android.graphics.RectF, float[], android.graphics.Path$Direction)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addRoundRect(float, float, float, float, float[], android.graphics.Path$Direction)}
 **/
Path.prototype.addRoundRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addRoundRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lineTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#lineTo(float, float)}
 **/
Path.prototype.lineTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lineTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rLineTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#rLineTo(float, float)}
 **/
Path.prototype.rLineTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rLineTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function transform
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#transform(android.graphics.Matrix, android.graphics.Path)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#transform(android.graphics.Matrix)}
 **/
Path.prototype.transform = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'transform',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function quadTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#quadTo(float, float, float, float)}
 **/
Path.prototype.quadTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'quadTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOval
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addOval(android.graphics.RectF, android.graphics.Path$Direction)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addOval(float, float, float, float, android.graphics.Path$Direction)}
 **/
Path.prototype.addOval = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOval',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rCubicTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#rCubicTo(float, float, float, float, float, float)}
 **/
Path.prototype.rCubicTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rCubicTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isConvex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#isConvex()}
 **/
Path.prototype.isConvex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isConvex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function close
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#close()}
 **/
Path.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function op
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#op(android.graphics.Path, android.graphics.Path$Op)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#op(android.graphics.Path, android.graphics.Path, android.graphics.Path$Op)}
 **/
Path.prototype.op = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'op',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function arcTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#arcTo(android.graphics.RectF, float, float, boolean)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#arcTo(android.graphics.RectF, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#arcTo(float, float, float, float, float, float, boolean)}
 **/
Path.prototype.arcTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'arcTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#set(android.graphics.Path)}
 **/
Path.prototype.set = function() {
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
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cubicTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#cubicTo(float, float, float, float, float, float)}
 **/
Path.prototype.cubicTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cubicTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInverseFillType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#isInverseFillType()}
 **/
Path.prototype.isInverseFillType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInverseFillType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#offset(float, float, android.graphics.Path)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#offset(float, float)}
 **/
Path.prototype.offset = function() {
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
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#isEmpty()}
 **/
Path.prototype.isEmpty = function() {
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
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rQuadTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#rQuadTo(float, float, float, float)}
 **/
Path.prototype.rQuadTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rQuadTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addRect(android.graphics.RectF, android.graphics.Path$Direction)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addRect(float, float, float, float, android.graphics.Path$Direction)}
 **/
Path.prototype.addRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addPath(android.graphics.Path, float, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addPath(android.graphics.Path)}
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addPath(android.graphics.Path, android.graphics.Matrix)}
 **/
Path.prototype.addPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rewind
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#rewind()}
 **/
Path.prototype.rewind = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rewind',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLastPoint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#setLastPoint(float, float)}
 **/
Path.prototype.setLastPoint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLastPoint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addCircle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#addCircle(float, float, float, android.graphics.Path$Direction)}
 **/
Path.prototype.addCircle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addCircle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFillType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#getFillType()}
 **/
Path.prototype.getFillType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFillType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#reset()}
 **/
Path.prototype.reset = function() {
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
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#finalize()}
 **/
Path.prototype.finalize = function() {
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
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toggleInverseFillType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#toggleInverseFillType()}
 **/
Path.prototype.toggleInverseFillType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toggleInverseFillType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function moveTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Path.html#moveTo(float, float)}
 **/
Path.prototype.moveTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'moveTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Path') {
			return new Path(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Path;
