/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Paint
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics');

/**
 * @class android.graphics.Paint
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html}
 **/
var Paint = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Paint')) {
		result = arguments[0];
	}
	else {
		result = Paint.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Paint.prototype = Object.create(SuperClass.prototype);
Paint.prototype.constructor = Paint;

Object.defineProperty(Paint.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Paint(this.$native.super);
	},
	enumerable: true
});

Paint.className = 'android.graphics.Paint';
Paint.prototype.className = 'android.graphics.Paint';

// class property
Object.defineProperty(Paint, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Paint');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Paint.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.Paint');

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
	SubClass.prototype = Object.create(Paint.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Paint.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Paint(Hyperloop.cast('android.graphics.Paint', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#STRIKE_THRU_TEXT_FLAG}
 */
Paint.STRIKE_THRU_TEXT_FLAG = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#EMBEDDED_BITMAP_TEXT_FLAG}
 */
Paint.EMBEDDED_BITMAP_TEXT_FLAG = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#FILTER_BITMAP_FLAG}
 */
Paint.FILTER_BITMAP_FLAG = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#HINTING_ON}
 */
Paint.HINTING_ON = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#ANTI_ALIAS_FLAG}
 */
Paint.ANTI_ALIAS_FLAG = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#DITHER_FLAG}
 */
Paint.DITHER_FLAG = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#FAKE_BOLD_TEXT_FLAG}
 */
Paint.FAKE_BOLD_TEXT_FLAG = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#LINEAR_TEXT_FLAG}
 */
Paint.LINEAR_TEXT_FLAG = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#SUBPIXEL_TEXT_FLAG}
 */
Paint.SUBPIXEL_TEXT_FLAG = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#DEV_KERN_TEXT_FLAG}
 */
Paint.DEV_KERN_TEXT_FLAG = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#HINTING_OFF}
 */
Paint.HINTING_OFF = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#UNDERLINE_TEXT_FLAG}
 */
Paint.UNDERLINE_TEXT_FLAG = 8;

// Inner classes
Object.defineProperty(Paint, 'Align', {
	get: function() {
		return require('android.graphics.Paint$Align');
	},
	enumerable: true
});
Object.defineProperty(Paint, 'Cap', {
	get: function() {
		return require('android.graphics.Paint$Cap');
	},
	enumerable: true
});
Object.defineProperty(Paint, 'FontMetricsInt', {
	get: function() {
		return require('android.graphics.Paint$FontMetricsInt');
	},
	enumerable: true
});
Object.defineProperty(Paint, 'Style', {
	get: function() {
		return require('android.graphics.Paint$Style');
	},
	enumerable: true
});
Object.defineProperty(Paint, 'Join', {
	get: function() {
		return require('android.graphics.Paint$Join');
	},
	enumerable: true
});
Object.defineProperty(Paint, 'FontMetrics', {
	get: function() {
		return require('android.graphics.Paint$FontMetrics');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setFilterBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setFilterBitmap(boolean)}
 **/
Paint.prototype.setFilterBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFilterBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHinting
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getHinting()}
 **/
Paint.prototype.getHinting = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHinting',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setColorFilter(android.graphics.ColorFilter)}
 **/
Paint.prototype.setColorFilter = function() {
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
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFakeBoldText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isFakeBoldText()}
 **/
Paint.prototype.isFakeBoldText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFakeBoldText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setElegantTextHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setElegantTextHeight(boolean)}
 **/
Paint.prototype.setElegantTextHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setElegantTextHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPathEffect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setPathEffect(android.graphics.PathEffect)}
 **/
Paint.prototype.setPathEffect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPathEffect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLinearText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setLinearText(boolean)}
 **/
Paint.prototype.setLinearText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLinearText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHinting
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setHinting(int)}
 **/
Paint.prototype.setHinting = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHinting',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getAlpha()}
 **/
Paint.prototype.getAlpha = function() {
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
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStrokeMiter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getStrokeMiter()}
 **/
Paint.prototype.getStrokeMiter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStrokeMiter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFontFeatureSettings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontFeatureSettings()}
 **/
Paint.prototype.getFontFeatureSettings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFontFeatureSettings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColorFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getColorFilter()}
 **/
Paint.prototype.getColorFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColorFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextScaleX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTextScaleX(float)}
 **/
Paint.prototype.setTextScaleX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextScaleX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function breakText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#breakText(char[], int, int, float, float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#breakText(java.lang.CharSequence, int, int, boolean, float, float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#breakText(java.lang.String, boolean, float, float[])}
 **/
Paint.prototype.breakText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'breakText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isUnderlineText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isUnderlineText()}
 **/
Paint.prototype.isUnderlineText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isUnderlineText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setShader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setShader(android.graphics.Shader)}
 **/
Paint.prototype.setShader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setShader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTypeface
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTypeface()}
 **/
Paint.prototype.getTypeface = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTypeface',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOffsetForAdvance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getOffsetForAdvance(char[], int, int, int, int, boolean, float)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getOffsetForAdvance(java.lang.CharSequence, int, int, int, int, boolean, float)}
 **/
Paint.prototype.getOffsetForAdvance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOffsetForAdvance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextSkewX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTextSkewX(float)}
 **/
Paint.prototype.setTextSkewX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextSkewX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextWidths
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextWidths(char[], int, int, float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextWidths(java.lang.CharSequence, int, int, float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextWidths(java.lang.String, int, int, float[])}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextWidths(java.lang.String, float[])}
 **/
Paint.prototype.getTextWidths = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextWidths',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextAlign
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTextAlign(android.graphics.Paint$Align)}
 **/
Paint.prototype.setTextAlign = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextAlign',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setAlpha(int)}
 **/
Paint.prototype.setAlpha = function() {
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
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRunAdvance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getRunAdvance(char[], int, int, int, int, boolean, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getRunAdvance(java.lang.CharSequence, int, int, int, int, boolean, int)}
 **/
Paint.prototype.getRunAdvance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRunAdvance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStrokeCap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStrokeCap(android.graphics.Paint$Cap)}
 **/
Paint.prototype.setStrokeCap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStrokeCap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isElegantTextHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isElegantTextHeight()}
 **/
Paint.prototype.isElegantTextHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isElegantTextHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLetterSpacing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getLetterSpacing()}
 **/
Paint.prototype.getLetterSpacing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLetterSpacing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAntiAlias
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isAntiAlias()}
 **/
Paint.prototype.isAntiAlias = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAntiAlias',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStrokeMiter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStrokeMiter(float)}
 **/
Paint.prototype.setStrokeMiter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStrokeMiter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#reset()}
 **/
Paint.prototype.reset = function() {
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
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaskFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getMaskFilter()}
 **/
Paint.prototype.getMaskFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaskFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFontSpacing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontSpacing()}
 **/
Paint.prototype.getFontSpacing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFontSpacing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFlags()}
 **/
Paint.prototype.getFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isFilterBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isFilterBitmap()}
 **/
Paint.prototype.isFilterBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isFilterBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStrokeWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getStrokeWidth()}
 **/
Paint.prototype.getStrokeWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStrokeWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setShadowLayer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setShadowLayer(float, float, float, int)}
 **/
Paint.prototype.setShadowLayer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setShadowLayer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasGlyph
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#hasGlyph(java.lang.String)}
 **/
Paint.prototype.hasGlyph = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasGlyph',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setFlags(int)}
 **/
Paint.prototype.setFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDither
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isDither()}
 **/
Paint.prototype.isDither = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDither',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLinearText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isLinearText()}
 **/
Paint.prototype.isLinearText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLinearText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRasterizer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getRasterizer()}
 **/
Paint.prototype.getRasterizer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRasterizer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextLocale()}
 **/
Paint.prototype.getTextLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFontFeatureSettings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setFontFeatureSettings(java.lang.String)}
 **/
Paint.prototype.setFontFeatureSettings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFontFeatureSettings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getXfermode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getXfermode()}
 **/
Paint.prototype.getXfermode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getXfermode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubpixelText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setSubpixelText(boolean)}
 **/
Paint.prototype.setSubpixelText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubpixelText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStrokeJoin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStrokeJoin(android.graphics.Paint$Join)}
 **/
Paint.prototype.setStrokeJoin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStrokeJoin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextSize()}
 **/
Paint.prototype.getTextSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextSkewX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextSkewX()}
 **/
Paint.prototype.getTextSkewX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextSkewX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDither
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setDither(boolean)}
 **/
Paint.prototype.setDither = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDither',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStrokeWidth
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStrokeWidth(float)}
 **/
Paint.prototype.setStrokeWidth = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStrokeWidth',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextAlign
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextAlign()}
 **/
Paint.prototype.getTextAlign = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextAlign',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function measureText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#measureText(char[], int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#measureText(java.lang.String, int, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#measureText(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#measureText(java.lang.CharSequence, int, int)}
 **/
Paint.prototype.measureText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'measureText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRasterizer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setRasterizer(android.graphics.Rasterizer)}
 **/
Paint.prototype.setRasterizer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRasterizer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFontMetrics
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontMetrics(android.graphics.Paint$FontMetrics)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontMetrics()}
 **/
Paint.prototype.getFontMetrics = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFontMetrics',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getStyle()}
 **/
Paint.prototype.getStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTypeface
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTypeface(android.graphics.Typeface)}
 **/
Paint.prototype.setTypeface = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTypeface',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function ascent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#ascent()}
 **/
Paint.prototype.ascent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'ascent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUnderlineText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setUnderlineText(boolean)}
 **/
Paint.prototype.setUnderlineText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUnderlineText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearShadowLayer
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#clearShadowLayer()}
 **/
Paint.prototype.clearShadowLayer = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearShadowLayer',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStyle(android.graphics.Paint$Style)}
 **/
Paint.prototype.setStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStrokeJoin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getStrokeJoin()}
 **/
Paint.prototype.getStrokeJoin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStrokeJoin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFillPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFillPath(android.graphics.Path, android.graphics.Path)}
 **/
Paint.prototype.getFillPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFillPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getShader()}
 **/
Paint.prototype.getShader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPathEffect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getPathEffect()}
 **/
Paint.prototype.getPathEffect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPathEffect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaskFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setMaskFilter(android.graphics.MaskFilter)}
 **/
Paint.prototype.setMaskFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaskFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextBounds
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextBounds(java.lang.String, int, int, android.graphics.Rect)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextBounds(char[], int, int, android.graphics.Rect)}
 **/
Paint.prototype.getTextBounds = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextBounds',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#set(android.graphics.Paint)}
 **/
Paint.prototype.set = function() {
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
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSubpixelText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isSubpixelText()}
 **/
Paint.prototype.isSubpixelText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSubpixelText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFontMetricsInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontMetricsInt(android.graphics.Paint$FontMetricsInt)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getFontMetricsInt()}
 **/
Paint.prototype.getFontMetricsInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFontMetricsInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getColor()}
 **/
Paint.prototype.getColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setARGB
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setARGB(int, int, int, int)}
 **/
Paint.prototype.setARGB = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setARGB',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStrikeThruText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setStrikeThruText(boolean)}
 **/
Paint.prototype.setStrikeThruText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStrikeThruText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextPath(char[], int, int, float, float, android.graphics.Path)}
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextPath(java.lang.String, int, int, float, float, android.graphics.Path)}
 **/
Paint.prototype.getTextPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setXfermode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setXfermode(android.graphics.Xfermode)}
 **/
Paint.prototype.setXfermode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setXfermode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTextLocale(java.util.Locale)}
 **/
Paint.prototype.setTextLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTextSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setTextSize(float)}
 **/
Paint.prototype.setTextSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTextSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLetterSpacing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setLetterSpacing(float)}
 **/
Paint.prototype.setLetterSpacing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLetterSpacing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function descent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#descent()}
 **/
Paint.prototype.descent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'descent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isStrikeThruText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#isStrikeThruText()}
 **/
Paint.prototype.isStrikeThruText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isStrikeThruText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStrokeCap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getStrokeCap()}
 **/
Paint.prototype.getStrokeCap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStrokeCap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setColor(int)}
 **/
Paint.prototype.setColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAntiAlias
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setAntiAlias(boolean)}
 **/
Paint.prototype.setAntiAlias = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAntiAlias',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#finalize()}
 **/
Paint.prototype.finalize = function() {
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
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFakeBoldText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#setFakeBoldText(boolean)}
 **/
Paint.prototype.setFakeBoldText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFakeBoldText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextScaleX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Paint.html#getTextScaleX()}
 **/
Paint.prototype.getTextScaleX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextScaleX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Paint') {
			return new Paint(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Paint;
