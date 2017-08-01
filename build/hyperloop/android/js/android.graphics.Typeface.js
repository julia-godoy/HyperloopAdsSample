/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Typeface
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.graphics');

/**
 * @class android.graphics.Typeface
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html}
 **/
var Typeface = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Typeface')) {
		result = arguments[0];
	}
	else {
		result = Typeface.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Typeface.prototype = Object.create(SuperClass.prototype);
Typeface.prototype.constructor = Typeface;

Object.defineProperty(Typeface.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Typeface(this.$native.super);
	},
	enumerable: true
});

Typeface.className = 'android.graphics.Typeface';
Typeface.prototype.className = 'android.graphics.Typeface';

// class property
Object.defineProperty(Typeface, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Typeface');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Typeface.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.graphics.Typeface');

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
	SubClass.prototype = Object.create(Typeface.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Typeface.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Typeface(Hyperloop.cast('android.graphics.Typeface', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#ITALIC}
 */
Typeface.ITALIC = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#BOLD}
 */
Typeface.BOLD = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#BOLD_ITALIC}
 */
Typeface.BOLD_ITALIC = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#NORMAL}
 */
Typeface.NORMAL = 0;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Typeface.html#DEFAULT_BOLD
Object.defineProperty(Typeface, 'DEFAULT_BOLD', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DEFAULT_BOLD');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Typeface') {
				return new Typeface(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Typeface.html#MONOSPACE
Object.defineProperty(Typeface, 'MONOSPACE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('MONOSPACE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Typeface') {
				return new Typeface(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Typeface.html#DEFAULT
Object.defineProperty(Typeface, 'DEFAULT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DEFAULT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Typeface') {
				return new Typeface(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Typeface.html#SANS_SERIF
Object.defineProperty(Typeface, 'SANS_SERIF', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SANS_SERIF');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Typeface') {
				return new Typeface(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Typeface.html#SERIF
Object.defineProperty(Typeface, 'SERIF', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SERIF');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Typeface') {
				return new Typeface(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function createFromFile
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#createFromFile(java.io.File)}
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#createFromFile(java.lang.String)}
 **/
Typeface.createFromFile = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createFromFile',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function create
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#create(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#create(android.graphics.Typeface, int)}
 **/
Typeface.create = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'create',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createFromAsset
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#createFromAsset(android.content.res.AssetManager, java.lang.String)}
 **/
Typeface.createFromAsset = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createFromAsset',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function defaultFromStyle
 * @static
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#defaultFromStyle(int)}
 **/
Typeface.defaultFromStyle = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'defaultFromStyle',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function isItalic
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#isItalic()}
 **/
Typeface.prototype.isItalic = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isItalic',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new Typeface(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#getStyle()}
 **/
Typeface.prototype.getStyle = function() {
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
		if (result.apiName === 'android.graphics.Typeface') {
			return new Typeface(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#hashCode()}
 **/
Typeface.prototype.hashCode = function() {
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
		if (result.apiName === 'android.graphics.Typeface') {
			return new Typeface(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#equals(java.lang.Object)}
 **/
Typeface.prototype.equals = function() {
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
		if (result.apiName === 'android.graphics.Typeface') {
			return new Typeface(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#finalize()}
 **/
Typeface.prototype.finalize = function() {
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
		if (result.apiName === 'android.graphics.Typeface') {
			return new Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isBold
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/graphics/Typeface.html#isBold()}
 **/
Typeface.prototype.isBold = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isBold',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.graphics.Typeface') {
			return new Typeface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Typeface;
