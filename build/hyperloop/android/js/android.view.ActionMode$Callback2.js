/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ActionMode$Callback2
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.ActionMode');

/**
 * @class android.view.ActionMode$Callback2
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.Callback2.html}
 **/
var Callback2 = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.ActionMode$Callback2')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.ActionMode$Callback2. Create a subclass using android.view.ActionMode$Callback2.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Callback2.prototype = Object.create(SuperClass.prototype);
Callback2.prototype.constructor = Callback2;

Object.defineProperty(Callback2.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Callback2(this.$native.super);
	},
	enumerable: true
});

Callback2.className = 'android.view.ActionMode$Callback2';
Callback2.prototype.className = 'android.view.ActionMode$Callback2';

// class property
Object.defineProperty(Callback2, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.ActionMode$Callback2');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Callback2.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.ActionMode$Callback2');

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
	SubClass.prototype = Object.create(Callback2.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Callback2.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Callback2(Hyperloop.cast('android.view.ActionMode$Callback2', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onGetContentRect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionMode.Callback2.html#onGetContentRect(android.view.ActionMode, android.view.View, android.graphics.Rect)}
 **/
Callback2.prototype.onGetContentRect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onGetContentRect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionMode$Callback2') {
			return new Callback2(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Callback2;
