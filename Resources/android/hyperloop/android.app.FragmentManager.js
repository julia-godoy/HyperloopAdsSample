/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.FragmentManager
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.FragmentManager
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html}
 **/
var FragmentManager = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.FragmentManager')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.app.FragmentManager. Create a subclass using android.app.FragmentManager.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
FragmentManager.prototype = Object.create(SuperClass.prototype);
FragmentManager.prototype.constructor = FragmentManager;

Object.defineProperty(FragmentManager.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FragmentManager(this.$native.super);
	},
	enumerable: true
});

FragmentManager.className = 'android.app.FragmentManager';
FragmentManager.prototype.className = 'android.app.FragmentManager';

// class property
Object.defineProperty(FragmentManager, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.FragmentManager');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
FragmentManager.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.FragmentManager');

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
	SubClass.prototype = Object.create(FragmentManager.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
FragmentManager.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FragmentManager(Hyperloop.cast('android.app.FragmentManager', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#POP_BACK_STACK_INCLUSIVE}
 */
FragmentManager.POP_BACK_STACK_INCLUSIVE = 1;

// Inner classes
Object.defineProperty(FragmentManager, 'BackStackEntry', {
	get: function() {
		return require('android.app.FragmentManager$BackStackEntry');
	},
	enumerable: true
});
Object.defineProperty(FragmentManager, 'OnBackStackChangedListener', {
	get: function() {
		return require('android.app.FragmentManager$OnBackStackChangedListener');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function enableDebugLogging
 * @static
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#enableDebugLogging(boolean)}
 **/
FragmentManager.enableDebugLogging = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'enableDebugLogging',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function putFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#putFragment(android.os.Bundle, java.lang.String, android.app.Fragment)}
 **/
FragmentManager.prototype.putFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBackStackEntryAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#getBackStackEntryAt(int)}
 **/
FragmentManager.prototype.getBackStackEntryAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBackStackEntryAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnBackStackChangedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#removeOnBackStackChangedListener(android.app.FragmentManager$OnBackStackChangedListener)}
 **/
FragmentManager.prototype.removeOnBackStackChangedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnBackStackChangedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBackStackEntryCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#getBackStackEntryCount()}
 **/
FragmentManager.prototype.getBackStackEntryCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBackStackEntryCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDestroyed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#isDestroyed()}
 **/
FragmentManager.prototype.isDestroyed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDestroyed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnBackStackChangedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#addOnBackStackChangedListener(android.app.FragmentManager$OnBackStackChangedListener)}
 **/
FragmentManager.prototype.addOnBackStackChangedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnBackStackChangedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function popBackStackImmediate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStackImmediate()}
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStackImmediate(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStackImmediate(int, int)}
 **/
FragmentManager.prototype.popBackStackImmediate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'popBackStackImmediate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function saveFragmentInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#saveFragmentInstanceState(android.app.Fragment)}
 **/
FragmentManager.prototype.saveFragmentInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'saveFragmentInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function popBackStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStack()}
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStack(java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#popBackStack(int, int)}
 **/
FragmentManager.prototype.popBackStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'popBackStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginTransaction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#beginTransaction()}
 **/
FragmentManager.prototype.beginTransaction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginTransaction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function executePendingTransactions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#executePendingTransactions()}
 **/
FragmentManager.prototype.executePendingTransactions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'executePendingTransactions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findFragmentById
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#findFragmentById(int)}
 **/
FragmentManager.prototype.findFragmentById = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findFragmentById',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#getFragment(android.os.Bundle, java.lang.String)}
 **/
FragmentManager.prototype.getFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dump
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#dump(java.lang.String, java.io.FileDescriptor, java.io.PrintWriter, java.lang.String[])}
 **/
FragmentManager.prototype.dump = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dump',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findFragmentByTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#findFragmentByTag(java.lang.String)}
 **/
FragmentManager.prototype.findFragmentByTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findFragmentByTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function invalidateOptionsMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentManager.html#invalidateOptionsMenu()}
 **/
FragmentManager.prototype.invalidateOptionsMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'invalidateOptionsMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentManager') {
			return new FragmentManager(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FragmentManager;
