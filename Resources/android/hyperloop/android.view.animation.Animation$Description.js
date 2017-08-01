/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation.Animation$Description
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.animation.Animation');

/**
 * @class android.view.animation.Animation$Description
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/animation/Animation.Description.html}
 **/
var Description = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.animation.Animation$Description')) {
		result = arguments[0];
	}
	else {
		result = Description.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Description.prototype = Object.create(SuperClass.prototype);
Description.prototype.constructor = Description;

Object.defineProperty(Description.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Description(this.$native.super);
	},
	enumerable: true
});

Description.className = 'android.view.animation.Animation$Description';
Description.prototype.className = 'android.view.animation.Animation$Description';

// class property
Object.defineProperty(Description, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.animation.Animation$Description');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Description.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.animation.Animation$Description');

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
	SubClass.prototype = Object.create(Description.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Description.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Description(Hyperloop.cast('android.view.animation.Animation$Description', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/animation/Animation.Description.html#type
Object.defineProperty(Description.prototype, 'type', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('type');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.Animation$Description') {
				return new Description(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('type', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/animation/Animation.Description.html#value
Object.defineProperty(Description.prototype, 'value', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('value');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.animation.Animation$Description') {
				return new Description(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('value', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods

// export the class
module.exports = Description;
