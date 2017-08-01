/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.location.models.Location$a
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('com.inlocomedia.android.location.models.Location');

/**
 * @class com.inlocomedia.android.location.models.Location$a
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html}
 **/
var a = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.location.models.Location$a')) {
		result = arguments[0];
	}
	else {
		result = a.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
a.prototype = Object.create(SuperClass.prototype);
a.prototype.constructor = a;

Object.defineProperty(a.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new a(this.$native.super);
	},
	enumerable: true
});

a.className = 'com.inlocomedia.android.location.models.Location$a';
a.prototype.className = 'com.inlocomedia.android.location.models.Location$a';

// class property
Object.defineProperty(a, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.location.models.Location$a');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
a.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('com.inlocomedia.android.location.models.Location$a');

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
	SubClass.prototype = Object.create(a.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
a.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new a(Hyperloop.cast('com.inlocomedia.android.location.models.Location$a', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function a
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#a(java.lang.Float)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#a(java.lang.Integer)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#a(java.lang.Double)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#a(java.lang.String)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#a(com.inlocomedia.android.location.models.SerializableAddress)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#a(long)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#a()}
 **/
a.prototype.a = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'a',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location$a') {
			return new a(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function b
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#b(java.lang.Float)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#b(java.lang.Double)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#b(long)}
 **/
a.prototype.b = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'b',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location$a') {
			return new a(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function c
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#c(java.lang.Float)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.a.html#c(java.lang.Double)}
 **/
a.prototype.c = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'c',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location$a') {
			return new a(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = a;
