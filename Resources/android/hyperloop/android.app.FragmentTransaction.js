/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.FragmentTransaction
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.FragmentTransaction
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html}
 **/
var FragmentTransaction = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.FragmentTransaction')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.app.FragmentTransaction. Create a subclass using android.app.FragmentTransaction.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
FragmentTransaction.prototype = Object.create(SuperClass.prototype);
FragmentTransaction.prototype.constructor = FragmentTransaction;

Object.defineProperty(FragmentTransaction.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FragmentTransaction(this.$native.super);
	},
	enumerable: true
});

FragmentTransaction.className = 'android.app.FragmentTransaction';
FragmentTransaction.prototype.className = 'android.app.FragmentTransaction';

// class property
Object.defineProperty(FragmentTransaction, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.FragmentTransaction');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
FragmentTransaction.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.FragmentTransaction');

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
	SubClass.prototype = Object.create(FragmentTransaction.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
FragmentTransaction.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FragmentTransaction(Hyperloop.cast('android.app.FragmentTransaction', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_FRAGMENT_FADE}
 */
FragmentTransaction.TRANSIT_FRAGMENT_FADE = 4099;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_ENTER_MASK}
 */
FragmentTransaction.TRANSIT_ENTER_MASK = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_EXIT_MASK}
 */
FragmentTransaction.TRANSIT_EXIT_MASK = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_FRAGMENT_CLOSE}
 */
FragmentTransaction.TRANSIT_FRAGMENT_CLOSE = 8194;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_UNSET}
 */
FragmentTransaction.TRANSIT_UNSET = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_NONE}
 */
FragmentTransaction.TRANSIT_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#TRANSIT_FRAGMENT_OPEN}
 */
FragmentTransaction.TRANSIT_FRAGMENT_OPEN = 4097;

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
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#add(android.app.Fragment, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#add(int, android.app.Fragment)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#add(int, android.app.Fragment, java.lang.String)}
 **/
FragmentTransaction.prototype.add = function() {
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
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBreadCrumbShortTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setBreadCrumbShortTitle(int)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setBreadCrumbShortTitle(java.lang.CharSequence)}
 **/
FragmentTransaction.prototype.setBreadCrumbShortTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBreadCrumbShortTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function commitAllowingStateLoss
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#commitAllowingStateLoss()}
 **/
FragmentTransaction.prototype.commitAllowingStateLoss = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'commitAllowingStateLoss',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAddToBackStackAllowed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#isAddToBackStackAllowed()}
 **/
FragmentTransaction.prototype.isAddToBackStackAllowed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAddToBackStackAllowed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addSharedElement
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#addSharedElement(android.view.View, java.lang.String)}
 **/
FragmentTransaction.prototype.addSharedElement = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addSharedElement',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#replace(int, android.app.Fragment)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#replace(int, android.app.Fragment, java.lang.String)}
 **/
FragmentTransaction.prototype.replace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function show
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#show(android.app.Fragment)}
 **/
FragmentTransaction.prototype.show = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'show',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEmpty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#isEmpty()}
 **/
FragmentTransaction.prototype.isEmpty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEmpty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function commit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#commit()}
 **/
FragmentTransaction.prototype.commit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'commit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
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
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#remove(android.app.Fragment)}
 **/
FragmentTransaction.prototype.remove = function() {
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
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hide
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#hide(android.app.Fragment)}
 **/
FragmentTransaction.prototype.hide = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hide',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function disallowAddToBackStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#disallowAddToBackStack()}
 **/
FragmentTransaction.prototype.disallowAddToBackStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'disallowAddToBackStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBreadCrumbTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setBreadCrumbTitle(int)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setBreadCrumbTitle(java.lang.CharSequence)}
 **/
FragmentTransaction.prototype.setBreadCrumbTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBreadCrumbTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCustomAnimations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setCustomAnimations(int, int)}
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setCustomAnimations(int, int, int, int)}
 **/
FragmentTransaction.prototype.setCustomAnimations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCustomAnimations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setTransition(int)}
 **/
FragmentTransaction.prototype.setTransition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransitionStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#setTransitionStyle(int)}
 **/
FragmentTransaction.prototype.setTransitionStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransitionStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addToBackStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#addToBackStack(java.lang.String)}
 **/
FragmentTransaction.prototype.addToBackStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addToBackStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#detach(android.app.Fragment)}
 **/
FragmentTransaction.prototype.detach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/FragmentTransaction.html#attach(android.app.Fragment)}
 **/
FragmentTransaction.prototype.attach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.FragmentTransaction') {
			return new FragmentTransaction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FragmentTransaction;
