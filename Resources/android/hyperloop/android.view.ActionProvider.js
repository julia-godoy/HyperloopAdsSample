/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ActionProvider
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.ActionProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html}
 **/
var ActionProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.ActionProvider')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.ActionProvider. Create a subclass using android.view.ActionProvider.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ActionProvider.prototype = Object.create(SuperClass.prototype);
ActionProvider.prototype.constructor = ActionProvider;

Object.defineProperty(ActionProvider.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ActionProvider(this.$native.super);
	},
	enumerable: true
});

ActionProvider.className = 'android.view.ActionProvider';
ActionProvider.prototype.className = 'android.view.ActionProvider';

// class property
Object.defineProperty(ActionProvider, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.ActionProvider');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ActionProvider.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.ActionProvider');

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
	SubClass.prototype = Object.create(ActionProvider.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ActionProvider.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ActionProvider(Hyperloop.cast('android.view.ActionProvider', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(ActionProvider, 'VisibilityListener', {
	get: function() {
		return require('android.view.ActionProvider$VisibilityListener');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onCreateActionView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#onCreateActionView()}
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#onCreateActionView(android.view.MenuItem)}
 **/
ActionProvider.prototype.onCreateActionView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateActionView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function overridesItemVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#overridesItemVisibility()}
 **/
ActionProvider.prototype.overridesItemVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'overridesItemVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasSubMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#hasSubMenu()}
 **/
ActionProvider.prototype.hasSubMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasSubMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPerformDefaultAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#onPerformDefaultAction()}
 **/
ActionProvider.prototype.onPerformDefaultAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPerformDefaultAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVisibilityListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#setVisibilityListener(android.view.ActionProvider$VisibilityListener)}
 **/
ActionProvider.prototype.setVisibilityListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVisibilityListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVisible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#isVisible()}
 **/
ActionProvider.prototype.isVisible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVisible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPrepareSubMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#onPrepareSubMenu(android.view.SubMenu)}
 **/
ActionProvider.prototype.onPrepareSubMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPrepareSubMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function refreshVisibility
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ActionProvider.html#refreshVisibility()}
 **/
ActionProvider.prototype.refreshVisibility = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'refreshVisibility',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ActionProvider') {
			return new ActionProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ActionProvider;
