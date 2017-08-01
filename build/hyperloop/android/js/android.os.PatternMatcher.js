/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.PatternMatcher
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.os');

/**
 * @class android.os.PatternMatcher
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html}
 **/
var PatternMatcher = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.PatternMatcher')) {
		result = arguments[0];
	}
	else {
		result = PatternMatcher.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PatternMatcher.prototype = Object.create(SuperClass.prototype);
PatternMatcher.prototype.constructor = PatternMatcher;

Object.defineProperty(PatternMatcher.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PatternMatcher(this.$native.super);
	},
	enumerable: true
});

PatternMatcher.className = 'android.os.PatternMatcher';
PatternMatcher.prototype.className = 'android.os.PatternMatcher';

// class property
Object.defineProperty(PatternMatcher, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.PatternMatcher');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PatternMatcher.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.os.PatternMatcher');

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
	SubClass.prototype = Object.create(PatternMatcher.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PatternMatcher.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PatternMatcher(Hyperloop.cast('android.os.PatternMatcher', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#PATTERN_SIMPLE_GLOB}
 */
PatternMatcher.PATTERN_SIMPLE_GLOB = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#PATTERN_PREFIX}
 */
PatternMatcher.PATTERN_PREFIX = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#PATTERN_LITERAL}
 */
PatternMatcher.PATTERN_LITERAL = 0;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/os/PatternMatcher.html#CREATOR
Object.defineProperty(PatternMatcher, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.PatternMatcher') {
				return new PatternMatcher(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#getType()}
 **/
PatternMatcher.prototype.getType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PatternMatcher') {
			return new PatternMatcher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#getPath()}
 **/
PatternMatcher.prototype.getPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PatternMatcher') {
			return new PatternMatcher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function match
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#match(java.lang.String)}
 **/
PatternMatcher.prototype.match = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'match',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PatternMatcher') {
			return new PatternMatcher(result);
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
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#toString()}
 **/
PatternMatcher.prototype.toString = function() {
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
		if (result.apiName === 'android.os.PatternMatcher') {
			return new PatternMatcher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#describeContents()}
 **/
PatternMatcher.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PatternMatcher') {
			return new PatternMatcher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PatternMatcher.html#writeToParcel(android.os.Parcel, int)}
 **/
PatternMatcher.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PatternMatcher') {
			return new PatternMatcher(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PatternMatcher;
