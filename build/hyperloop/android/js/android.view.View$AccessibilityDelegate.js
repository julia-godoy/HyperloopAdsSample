/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.View$AccessibilityDelegate
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.View');

/**
 * @class android.view.View$AccessibilityDelegate
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html}
 **/
var AccessibilityDelegate = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.View$AccessibilityDelegate')) {
		result = arguments[0];
	}
	else {
		result = AccessibilityDelegate.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
AccessibilityDelegate.prototype = Object.create(SuperClass.prototype);
AccessibilityDelegate.prototype.constructor = AccessibilityDelegate;

Object.defineProperty(AccessibilityDelegate.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AccessibilityDelegate(this.$native.super);
	},
	enumerable: true
});

AccessibilityDelegate.className = 'android.view.View$AccessibilityDelegate';
AccessibilityDelegate.prototype.className = 'android.view.View$AccessibilityDelegate';

// class property
Object.defineProperty(AccessibilityDelegate, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.View$AccessibilityDelegate');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
AccessibilityDelegate.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.View$AccessibilityDelegate');

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
	SubClass.prototype = Object.create(AccessibilityDelegate.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
AccessibilityDelegate.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AccessibilityDelegate(Hyperloop.cast('android.view.View$AccessibilityDelegate', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function dispatchPopulateAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#dispatchPopulateAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
AccessibilityDelegate.prototype.dispatchPopulateAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchPopulateAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInitializeAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#onInitializeAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
AccessibilityDelegate.prototype.onInitializeAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInitializeAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAccessibilityNodeProvider
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#getAccessibilityNodeProvider(android.view.View)}
 **/
AccessibilityDelegate.prototype.getAccessibilityNodeProvider = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAccessibilityNodeProvider',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendAccessibilityEventUnchecked
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#sendAccessibilityEventUnchecked(android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
AccessibilityDelegate.prototype.sendAccessibilityEventUnchecked = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendAccessibilityEventUnchecked',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPopulateAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#onPopulateAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
AccessibilityDelegate.prototype.onPopulateAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPopulateAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRequestSendAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#onRequestSendAccessibilityEvent(android.view.ViewGroup, android.view.View, android.view.accessibility.AccessibilityEvent)}
 **/
AccessibilityDelegate.prototype.onRequestSendAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRequestSendAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function performAccessibilityAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#performAccessibilityAction(android.view.View, int, android.os.Bundle)}
 **/
AccessibilityDelegate.prototype.performAccessibilityAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'performAccessibilityAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInitializeAccessibilityNodeInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#onInitializeAccessibilityNodeInfo(android.view.View, android.view.accessibility.AccessibilityNodeInfo)}
 **/
AccessibilityDelegate.prototype.onInitializeAccessibilityNodeInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInitializeAccessibilityNodeInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendAccessibilityEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/View.AccessibilityDelegate.html#sendAccessibilityEvent(android.view.View, int)}
 **/
AccessibilityDelegate.prototype.sendAccessibilityEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendAccessibilityEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.View$AccessibilityDelegate') {
			return new AccessibilityDelegate(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AccessibilityDelegate;
