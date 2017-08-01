/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.Resources
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.res');

/**
 * @class android.content.res.Resources
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html}
 **/
var Resources = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.res.Resources')) {
		result = arguments[0];
	}
	else {
		result = Resources.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Resources.prototype = Object.create(SuperClass.prototype);
Resources.prototype.constructor = Resources;

Object.defineProperty(Resources.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Resources(this.$native.super);
	},
	enumerable: true
});

Resources.className = 'android.content.res.Resources';
Resources.prototype.className = 'android.content.res.Resources';

// class property
Object.defineProperty(Resources, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.res.Resources');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Resources.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.res.Resources');

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
	SubClass.prototype = Object.create(Resources.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Resources.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Resources(Hyperloop.cast('android.content.res.Resources', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(Resources, 'NotFoundException', {
	get: function() {
		return require('android.content.res.Resources$NotFoundException');
	},
	enumerable: true
});
Object.defineProperty(Resources, 'Theme', {
	get: function() {
		return require('android.content.res.Resources$Theme');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getSystem
 * @static
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getSystem()}
 **/
Resources.getSystem = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSystem',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
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
 * @function getResourcePackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getResourcePackageName(int)}
 **/
Resources.prototype.getResourcePackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourcePackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDrawable(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDrawable(int, android.content.res.Resources$Theme)}
 **/
Resources.prototype.getDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openRawResourceFd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#openRawResourceFd(int)}
 **/
Resources.prototype.openRawResourceFd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openRawResourceFd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function flushLayoutCache
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#flushLayoutCache()}
 **/
Resources.prototype.flushLayoutCache = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flushLayoutCache',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseBundleExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#parseBundleExtras(android.content.res.XmlResourceParser, android.os.Bundle)}
 **/
Resources.prototype.parseBundleExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parseBundleExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDimensionPixelOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDimensionPixelOffset(int)}
 **/
Resources.prototype.getDimensionPixelOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDimensionPixelOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInteger
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getInteger(int)}
 **/
Resources.prototype.getInteger = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInteger',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayMetrics
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDisplayMetrics()}
 **/
Resources.prototype.getDisplayMetrics = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayMetrics',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResourceTypeName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getResourceTypeName(int)}
 **/
Resources.prototype.getResourceTypeName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourceTypeName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getLayout(int)}
 **/
Resources.prototype.getLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQuantityString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getQuantityString(int, int, java.lang.Object[])}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getQuantityString(int, int)}
 **/
Resources.prototype.getQuantityString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQuantityString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getConfiguration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getConfiguration()}
 **/
Resources.prototype.getConfiguration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getConfiguration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAnimation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getAnimation(int)}
 **/
Resources.prototype.getAnimation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAnimation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIdentifier
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getIdentifier(java.lang.String, java.lang.String, java.lang.String)}
 **/
Resources.prototype.getIdentifier = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIdentifier',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDimension
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDimension(int)}
 **/
Resources.prototype.getDimension = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDimension',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQuantityText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getQuantityText(int, int)}
 **/
Resources.prototype.getQuantityText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQuantityText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBoolean
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getBoolean(int)}
 **/
Resources.prototype.getBoolean = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBoolean',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTextArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getTextArray(int)}
 **/
Resources.prototype.getTextArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTextArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDimensionPixelSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDimensionPixelSize(int)}
 **/
Resources.prototype.getDimensionPixelSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDimensionPixelSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finishPreloading
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#finishPreloading()}
 **/
Resources.prototype.finishPreloading = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finishPreloading',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAssets
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getAssets()}
 **/
Resources.prototype.getAssets = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAssets',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function obtainAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#obtainAttributes(android.util.AttributeSet, int[])}
 **/
Resources.prototype.obtainAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'obtainAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResourceEntryName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getResourceEntryName(int)}
 **/
Resources.prototype.getResourceEntryName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourceEntryName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getText(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getText(int, java.lang.CharSequence)}
 **/
Resources.prototype.getText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function obtainTypedArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#obtainTypedArray(int)}
 **/
Resources.prototype.obtainTypedArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'obtainTypedArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getColor(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getColor(int, android.content.res.Resources$Theme)}
 **/
Resources.prototype.getColor = function() {
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
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getXml
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getXml(int)}
 **/
Resources.prototype.getXml = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getXml',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResourceName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getResourceName(int)}
 **/
Resources.prototype.getResourceName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourceName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getString(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getString(int, java.lang.Object[])}
 **/
Resources.prototype.getString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMovie
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getMovie(int)}
 **/
Resources.prototype.getMovie = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMovie',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openRawResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#openRawResource(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#openRawResource(int, android.util.TypedValue)}
 **/
Resources.prototype.openRawResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openRawResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getValue(int, android.util.TypedValue, boolean)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getValue(java.lang.String, android.util.TypedValue, boolean)}
 **/
Resources.prototype.getValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getColorStateList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getColorStateList(int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getColorStateList(int, android.content.res.Resources$Theme)}
 **/
Resources.prototype.getColorStateList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getColorStateList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getValueForDensity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getValueForDensity(int, int, android.util.TypedValue, boolean)}
 **/
Resources.prototype.getValueForDensity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getValueForDensity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseBundleExtra
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#parseBundleExtra(java.lang.String, android.util.AttributeSet, android.os.Bundle)}
 **/
Resources.prototype.parseBundleExtra = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parseBundleExtra',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawableForDensity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDrawableForDensity(int, int)}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getDrawableForDensity(int, int, android.content.res.Resources$Theme)}
 **/
Resources.prototype.getDrawableForDensity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawableForDensity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStringArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getStringArray(int)}
 **/
Resources.prototype.getStringArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStringArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function updateConfiguration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#updateConfiguration(android.content.res.Configuration, android.util.DisplayMetrics)}
 **/
Resources.prototype.updateConfiguration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateConfiguration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getIntArray(int)}
 **/
Resources.prototype.getIntArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#newTheme()}
 **/
Resources.prototype.newTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.html#getFraction(int, int, int)}
 **/
Resources.prototype.getFraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources') {
			return new Resources(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Resources;
