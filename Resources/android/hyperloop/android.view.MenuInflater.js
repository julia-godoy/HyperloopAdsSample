/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.MenuInflater
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.MenuInflater
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/MenuInflater.html}
 **/
var MenuInflater = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.MenuInflater')) {
		result = arguments[0];
	}
	else {
		result = MenuInflater.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
MenuInflater.prototype = Object.create(SuperClass.prototype);
MenuInflater.prototype.constructor = MenuInflater;

Object.defineProperty(MenuInflater.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MenuInflater(this.$native.super);
	},
	enumerable: true
});

MenuInflater.className = 'android.view.MenuInflater';
MenuInflater.prototype.className = 'android.view.MenuInflater';

// class property
Object.defineProperty(MenuInflater, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.MenuInflater');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
MenuInflater.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.MenuInflater');

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
	SubClass.prototype = Object.create(MenuInflater.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
MenuInflater.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MenuInflater(Hyperloop.cast('android.view.MenuInflater', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function inflate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/MenuInflater.html#inflate(int, android.view.Menu)}
 **/
MenuInflater.prototype.inflate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inflate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.MenuInflater') {
			return new MenuInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = MenuInflater;
