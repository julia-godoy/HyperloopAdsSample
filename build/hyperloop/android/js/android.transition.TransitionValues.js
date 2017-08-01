/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.TransitionValues
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.transition');

/**
 * @class android.transition.TransitionValues
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/TransitionValues.html}
 **/
var TransitionValues = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.transition.TransitionValues')) {
		result = arguments[0];
	}
	else {
		result = TransitionValues.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
TransitionValues.prototype = Object.create(SuperClass.prototype);
TransitionValues.prototype.constructor = TransitionValues;

Object.defineProperty(TransitionValues.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new TransitionValues(this.$native.super);
	},
	enumerable: true
});

TransitionValues.className = 'android.transition.TransitionValues';
TransitionValues.prototype.className = 'android.transition.TransitionValues';

// class property
Object.defineProperty(TransitionValues, 'class', {
	get: function() {
		return Hyperloop.getClass('android.transition.TransitionValues');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
TransitionValues.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.transition.TransitionValues');

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
	SubClass.prototype = Object.create(TransitionValues.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
TransitionValues.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new TransitionValues(Hyperloop.cast('android.transition.TransitionValues', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/transition/TransitionValues.html#view
Object.defineProperty(TransitionValues.prototype, 'view', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('view');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.transition.TransitionValues') {
				return new TransitionValues(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('view', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/transition/TransitionValues.html#values
Object.defineProperty(TransitionValues.prototype, 'values', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('values');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.transition.TransitionValues') {
				return new TransitionValues(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/TransitionValues.html#hashCode()}
 **/
TransitionValues.prototype.hashCode = function() {
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
		if (result.apiName === 'android.transition.TransitionValues') {
			return new TransitionValues(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/TransitionValues.html#equals(java.lang.Object)}
 **/
TransitionValues.prototype.equals = function() {
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
		if (result.apiName === 'android.transition.TransitionValues') {
			return new TransitionValues(result);
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
 * @see {@link http://developer.android.com/reference/android/transition/TransitionValues.html#toString()}
 **/
TransitionValues.prototype.toString = function() {
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
		if (result.apiName === 'android.transition.TransitionValues') {
			return new TransitionValues(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = TransitionValues;
