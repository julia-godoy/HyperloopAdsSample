/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewGroupOverlay
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.ViewGroupOverlay
 * @extends android.view.ViewOverlay 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewGroupOverlay.html}
 **/
var ViewGroupOverlay = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.ViewGroupOverlay')) {
		result = arguments[0];
	}
	else {
		result = ViewGroupOverlay.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewOverlay');
ViewGroupOverlay.prototype = Object.create(SuperClass.prototype);
ViewGroupOverlay.prototype.constructor = ViewGroupOverlay;

Object.defineProperty(ViewGroupOverlay.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ViewGroupOverlay(this.$native.super);
	},
	enumerable: true
});

ViewGroupOverlay.className = 'android.view.ViewGroupOverlay';
ViewGroupOverlay.prototype.className = 'android.view.ViewGroupOverlay';

// class property
Object.defineProperty(ViewGroupOverlay, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.ViewGroupOverlay');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ViewGroupOverlay.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.ViewGroupOverlay');

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
	SubClass.prototype = Object.create(ViewGroupOverlay.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ViewGroupOverlay.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ViewGroupOverlay(Hyperloop.cast('android.view.ViewGroupOverlay', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function add
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroupOverlay.html#add(android.view.View)}
 **/
ViewGroupOverlay.prototype.add = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'add',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroupOverlay') {
			return new ViewGroupOverlay(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function remove
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroupOverlay.html#remove(android.view.View)}
 **/
ViewGroupOverlay.prototype.remove = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'remove',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroupOverlay') {
			return new ViewGroupOverlay(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ViewGroupOverlay;
