/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility.AccessibilityNodeProvider
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view.accessibility');

/**
 * @class android.view.accessibility.AccessibilityNodeProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html}
 **/
var AccessibilityNodeProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.accessibility.AccessibilityNodeProvider')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.accessibility.AccessibilityNodeProvider. Create a subclass using android.view.accessibility.AccessibilityNodeProvider.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
AccessibilityNodeProvider.prototype = Object.create(SuperClass.prototype);
AccessibilityNodeProvider.prototype.constructor = AccessibilityNodeProvider;

Object.defineProperty(AccessibilityNodeProvider.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AccessibilityNodeProvider(this.$native.super);
	},
	enumerable: true
});

AccessibilityNodeProvider.className = 'android.view.accessibility.AccessibilityNodeProvider';
AccessibilityNodeProvider.prototype.className = 'android.view.accessibility.AccessibilityNodeProvider';

// class property
Object.defineProperty(AccessibilityNodeProvider, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.accessibility.AccessibilityNodeProvider');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
AccessibilityNodeProvider.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.accessibility.AccessibilityNodeProvider');

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
	SubClass.prototype = Object.create(AccessibilityNodeProvider.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
AccessibilityNodeProvider.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AccessibilityNodeProvider(Hyperloop.cast('android.view.accessibility.AccessibilityNodeProvider', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html#HOST_VIEW_ID}
 */
AccessibilityNodeProvider.HOST_VIEW_ID = -1;

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function performAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html#performAction(int, int, android.os.Bundle)}
 **/
AccessibilityNodeProvider.prototype.performAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeProvider') {
			return new AccessibilityNodeProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findAccessibilityNodeInfosByText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html#findAccessibilityNodeInfosByText(java.lang.String, int)}
 **/
AccessibilityNodeProvider.prototype.findAccessibilityNodeInfosByText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findAccessibilityNodeInfosByText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeProvider') {
			return new AccessibilityNodeProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createAccessibilityNodeInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html#createAccessibilityNodeInfo(int)}
 **/
AccessibilityNodeProvider.prototype.createAccessibilityNodeInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createAccessibilityNodeInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeProvider') {
			return new AccessibilityNodeProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findFocus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/accessibility/AccessibilityNodeProvider.html#findFocus(int)}
 **/
AccessibilityNodeProvider.prototype.findFocus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findFocus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.accessibility.AccessibilityNodeProvider') {
			return new AccessibilityNodeProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AccessibilityNodeProvider;
