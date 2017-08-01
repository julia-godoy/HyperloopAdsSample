/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.WindowId$FocusObserver
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.WindowId');

/**
 * @class android.view.WindowId$FocusObserver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/WindowId.FocusObserver.html}
 **/
var FocusObserver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.WindowId$FocusObserver')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.WindowId$FocusObserver. Create a subclass using android.view.WindowId$FocusObserver.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
FocusObserver.prototype = Object.create(SuperClass.prototype);
FocusObserver.prototype.constructor = FocusObserver;

Object.defineProperty(FocusObserver.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FocusObserver(this.$native.super);
	},
	enumerable: true
});

FocusObserver.className = 'android.view.WindowId$FocusObserver';
FocusObserver.prototype.className = 'android.view.WindowId$FocusObserver';

// class property
Object.defineProperty(FocusObserver, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.WindowId$FocusObserver');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
FocusObserver.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.WindowId$FocusObserver');

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
	SubClass.prototype = Object.create(FocusObserver.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
FocusObserver.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FocusObserver(Hyperloop.cast('android.view.WindowId$FocusObserver', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onFocusGained
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowId.FocusObserver.html#onFocusGained(android.view.WindowId)}
 **/
FocusObserver.prototype.onFocusGained = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFocusGained',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowId$FocusObserver') {
			return new FocusObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onFocusLost
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/WindowId.FocusObserver.html#onFocusLost(android.view.WindowId)}
 **/
FocusObserver.prototype.onFocusLost = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onFocusLost',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.WindowId$FocusObserver') {
			return new FocusObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FocusObserver;
