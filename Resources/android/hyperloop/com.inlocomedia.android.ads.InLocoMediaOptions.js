/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.ads.InLocoMediaOptions
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.ads');

/**
 * @class com.inlocomedia.android.ads.InLocoMediaOptions
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html}
 **/
var InLocoMediaOptions = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.ads.InLocoMediaOptions')) {
		result = arguments[0];
	}
	else {
		result = InLocoMediaOptions.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
InLocoMediaOptions.prototype = Object.create(SuperClass.prototype);
InLocoMediaOptions.prototype.constructor = InLocoMediaOptions;

Object.defineProperty(InLocoMediaOptions.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new InLocoMediaOptions(this.$native.super);
	},
	enumerable: true
});

InLocoMediaOptions.className = 'com.inlocomedia.android.ads.InLocoMediaOptions';
InLocoMediaOptions.prototype.className = 'com.inlocomedia.android.ads.InLocoMediaOptions';

// class property
Object.defineProperty(InLocoMediaOptions, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.ads.InLocoMediaOptions');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
InLocoMediaOptions.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('com.inlocomedia.android.ads.InLocoMediaOptions');

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
	SubClass.prototype = Object.create(InLocoMediaOptions.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
InLocoMediaOptions.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new InLocoMediaOptions(Hyperloop.cast('com.inlocomedia.android.ads.InLocoMediaOptions', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function newInstance
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#newInstance(android.content.Context)}
 **/
InLocoMediaOptions.newInstance = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newInstance',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#reset(android.content.Context)}
 **/
InLocoMediaOptions.reset = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'reset',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInstance
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#getInstance(android.content.Context)}
 **/
InLocoMediaOptions.getInstance = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getInstance',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
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
 * @function setCacheSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#setCacheSize(long)}
 **/
InLocoMediaOptions.prototype.setCacheSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCacheSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCacheSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#getCacheSize()}
 **/
InLocoMediaOptions.prototype.getCacheSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCacheSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDevelopmentEnvironment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#isDevelopmentEnvironment()}
 **/
InLocoMediaOptions.prototype.isDevelopmentEnvironment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDevelopmentEnvironment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLocationTrackingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#isLocationTrackingEnabled()}
 **/
InLocoMediaOptions.prototype.isLocationTrackingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLocationTrackingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
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
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#clear()}
 **/
InLocoMediaOptions.prototype.clear = function() {
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
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMapsKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#getMapsKey()}
 **/
InLocoMediaOptions.prototype.getMapsKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMapsKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMapsKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#setMapsKey(java.lang.String, java.lang.String)}
 **/
InLocoMediaOptions.prototype.setMapsKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMapsKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDevelopmentDevices
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#setDevelopmentDevices(java.lang.String[])}
 **/
InLocoMediaOptions.prototype.setDevelopmentDevices = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDevelopmentDevices',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLogEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#setLogEnabled(boolean)}
 **/
InLocoMediaOptions.prototype.setLogEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLogEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLogEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#isLogEnabled()}
 **/
InLocoMediaOptions.prototype.isLogEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLogEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAdsKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#getAdsKey()}
 **/
InLocoMediaOptions.prototype.getAdsKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAdsKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAdsKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#setAdsKey(java.lang.String)}
 **/
InLocoMediaOptions.prototype.setAdsKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAdsKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMapsSecret
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#getMapsSecret()}
 **/
InLocoMediaOptions.prototype.getMapsSecret = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMapsSecret',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocationTrackingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMediaOptions.html#setLocationTrackingEnabled(boolean)}
 **/
InLocoMediaOptions.prototype.setLocationTrackingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocationTrackingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMediaOptions') {
			return new InLocoMediaOptions(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = InLocoMediaOptions;
