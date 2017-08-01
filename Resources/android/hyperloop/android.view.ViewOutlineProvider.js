/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewOutlineProvider
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.ViewOutlineProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewOutlineProvider.html}
 **/
var ViewOutlineProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.ViewOutlineProvider')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.ViewOutlineProvider. Create a subclass using android.view.ViewOutlineProvider.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ViewOutlineProvider.prototype = Object.create(SuperClass.prototype);
ViewOutlineProvider.prototype.constructor = ViewOutlineProvider;

Object.defineProperty(ViewOutlineProvider.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ViewOutlineProvider(this.$native.super);
	},
	enumerable: true
});

ViewOutlineProvider.className = 'android.view.ViewOutlineProvider';
ViewOutlineProvider.prototype.className = 'android.view.ViewOutlineProvider';

// class property
Object.defineProperty(ViewOutlineProvider, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.ViewOutlineProvider');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ViewOutlineProvider.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.ViewOutlineProvider');

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
	SubClass.prototype = Object.create(ViewOutlineProvider.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ViewOutlineProvider.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ViewOutlineProvider(Hyperloop.cast('android.view.ViewOutlineProvider', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/view/ViewOutlineProvider.html#BOUNDS
Object.defineProperty(ViewOutlineProvider, 'BOUNDS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('BOUNDS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewOutlineProvider') {
				return new ViewOutlineProvider(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewOutlineProvider.html#PADDED_BOUNDS
Object.defineProperty(ViewOutlineProvider, 'PADDED_BOUNDS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('PADDED_BOUNDS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewOutlineProvider') {
				return new ViewOutlineProvider(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewOutlineProvider.html#BACKGROUND
Object.defineProperty(ViewOutlineProvider, 'BACKGROUND', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('BACKGROUND');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewOutlineProvider') {
				return new ViewOutlineProvider(result);
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
 * @function getOutline
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewOutlineProvider.html#getOutline(android.view.View, android.graphics.Outline)}
 **/
ViewOutlineProvider.prototype.getOutline = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutline',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewOutlineProvider') {
			return new ViewOutlineProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ViewOutlineProvider;
