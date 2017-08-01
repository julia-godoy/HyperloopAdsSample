/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.View$MeasureSpec
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.View');

/**
 * @class android.view.View$MeasureSpec
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/View.MeasureSpec.html}
 **/
var MeasureSpec = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.View$MeasureSpec')) {
		result = arguments[0];
	}
	else {
		result = MeasureSpec.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
MeasureSpec.prototype = Object.create(SuperClass.prototype);
MeasureSpec.prototype.constructor = MeasureSpec;

Object.defineProperty(MeasureSpec.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MeasureSpec(this.$native.super);
	},
	enumerable: true
});

MeasureSpec.className = 'android.view.View$MeasureSpec';
MeasureSpec.prototype.className = 'android.view.View$MeasureSpec';

// class property
Object.defineProperty(MeasureSpec, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.View$MeasureSpec');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
MeasureSpec.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.View$MeasureSpec');

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
	SubClass.prototype = Object.create(MeasureSpec.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
MeasureSpec.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MeasureSpec(Hyperloop.cast('android.view.View$MeasureSpec', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.MeasureSpec.html#EXACTLY}
 */
MeasureSpec.EXACTLY = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.MeasureSpec.html#UNSPECIFIED}
 */
MeasureSpec.UNSPECIFIED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/View.MeasureSpec.html#AT_MOST}
 */
MeasureSpec.AT_MOST = -2147483648;

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getSize
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.MeasureSpec.html#getSize(int)}
 **/
MeasureSpec.getSize = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSize',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$MeasureSpec') {
			return new MeasureSpec(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.MeasureSpec.html#toString(int)}
 **/
MeasureSpec.toString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$MeasureSpec') {
			return new MeasureSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function makeMeasureSpec
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.MeasureSpec.html#makeMeasureSpec(int, int)}
 **/
MeasureSpec.makeMeasureSpec = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'makeMeasureSpec',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$MeasureSpec') {
			return new MeasureSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMode
 * @static
 * @see {@link http://developer.android.com/reference/android/view/View.MeasureSpec.html#getMode(int)}
 **/
MeasureSpec.getMode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getMode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$MeasureSpec') {
			return new MeasureSpec(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = MeasureSpec;
