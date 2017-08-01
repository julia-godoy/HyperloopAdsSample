/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.View$DragShadowBuilder
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.View');

/**
 * @class android.view.View$DragShadowBuilder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/View.DragShadowBuilder.html}
 **/
var DragShadowBuilder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.View$DragShadowBuilder')) {
		result = arguments[0];
	}
	else {
		result = DragShadowBuilder.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
DragShadowBuilder.prototype = Object.create(SuperClass.prototype);
DragShadowBuilder.prototype.constructor = DragShadowBuilder;

Object.defineProperty(DragShadowBuilder.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new DragShadowBuilder(this.$native.super);
	},
	enumerable: true
});

DragShadowBuilder.className = 'android.view.View$DragShadowBuilder';
DragShadowBuilder.prototype.className = 'android.view.View$DragShadowBuilder';

// class property
Object.defineProperty(DragShadowBuilder, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.View$DragShadowBuilder');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
DragShadowBuilder.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.View$DragShadowBuilder');

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
	SubClass.prototype = Object.create(DragShadowBuilder.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
DragShadowBuilder.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new DragShadowBuilder(Hyperloop.cast('android.view.View$DragShadowBuilder', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onDrawShadow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.DragShadowBuilder.html#onDrawShadow(android.graphics.Canvas)}
 **/
DragShadowBuilder.prototype.onDrawShadow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDrawShadow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$DragShadowBuilder') {
			return new DragShadowBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onProvideShadowMetrics
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.DragShadowBuilder.html#onProvideShadowMetrics(android.graphics.Point, android.graphics.Point)}
 **/
DragShadowBuilder.prototype.onProvideShadowMetrics = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onProvideShadowMetrics',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$DragShadowBuilder') {
			return new DragShadowBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.DragShadowBuilder.html#getView()}
 **/
DragShadowBuilder.prototype.getView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$DragShadowBuilder') {
			return new DragShadowBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = DragShadowBuilder;
