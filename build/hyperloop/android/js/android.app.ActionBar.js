/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.ActionBar
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.ActionBar
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html}
 **/
var ActionBar = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.ActionBar')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.app.ActionBar. Create a subclass using android.app.ActionBar.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ActionBar.prototype = Object.create(SuperClass.prototype);
ActionBar.prototype.constructor = ActionBar;

Object.defineProperty(ActionBar.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ActionBar(this.$native.super);
	},
	enumerable: true
});

ActionBar.className = 'android.app.ActionBar';
ActionBar.prototype.className = 'android.app.ActionBar';

// class property
Object.defineProperty(ActionBar, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.ActionBar');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ActionBar.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.ActionBar');

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
	SubClass.prototype = Object.create(ActionBar.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ActionBar.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ActionBar(Hyperloop.cast('android.app.ActionBar', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#DISPLAY_SHOW_TITLE}
 */
ActionBar.DISPLAY_SHOW_TITLE = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#NAVIGATION_MODE_TABS}
 */
ActionBar.NAVIGATION_MODE_TABS = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#DISPLAY_SHOW_HOME}
 */
ActionBar.DISPLAY_SHOW_HOME = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#NAVIGATION_MODE_LIST}
 */
ActionBar.NAVIGATION_MODE_LIST = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#NAVIGATION_MODE_STANDARD}
 */
ActionBar.NAVIGATION_MODE_STANDARD = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#DISPLAY_HOME_AS_UP}
 */
ActionBar.DISPLAY_HOME_AS_UP = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#DISPLAY_SHOW_CUSTOM}
 */
ActionBar.DISPLAY_SHOW_CUSTOM = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#DISPLAY_USE_LOGO}
 */
ActionBar.DISPLAY_USE_LOGO = 1;

// Inner classes
Object.defineProperty(ActionBar, 'LayoutParams', {
	get: function() {
		return require('android.app.ActionBar$LayoutParams');
	},
	enumerable: true
});
Object.defineProperty(ActionBar, 'TabListener', {
	get: function() {
		return require('android.app.ActionBar$TabListener');
	},
	enumerable: true
});
Object.defineProperty(ActionBar, 'OnNavigationListener', {
	get: function() {
		return require('android.app.ActionBar$OnNavigationListener');
	},
	enumerable: true
});
Object.defineProperty(ActionBar, 'OnMenuVisibilityListener', {
	get: function() {
		return require('android.app.ActionBar$OnMenuVisibilityListener');
	},
	enumerable: true
});
Object.defineProperty(ActionBar, 'Tab', {
	get: function() {
		return require('android.app.ActionBar$Tab');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function addTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#addTab(android.app.ActionBar$Tab)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#addTab(android.app.ActionBar$Tab, boolean)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#addTab(android.app.ActionBar$Tab, int)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#addTab(android.app.ActionBar$Tab, int, boolean)}
 **/
ActionBar.prototype.addTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNavigationItemCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getNavigationItemCount()}
 **/
ActionBar.prototype.getNavigationItemCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNavigationItemCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSubtitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getSubtitle()}
 **/
ActionBar.prototype.getSubtitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSubtitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayUseLogoEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayUseLogoEnabled(boolean)}
 **/
ActionBar.prototype.setDisplayUseLogoEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayUseLogoEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNavigationMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getNavigationMode()}
 **/
ActionBar.prototype.getNavigationMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNavigationMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setListNavigationCallbacks
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setListNavigationCallbacks(android.widget.SpinnerAdapter, android.app.ActionBar$OnNavigationListener)}
 **/
ActionBar.prototype.setListNavigationCallbacks = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setListNavigationCallbacks',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayShowCustomEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayShowCustomEnabled(boolean)}
 **/
ActionBar.prototype.setDisplayShowCustomEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayShowCustomEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHomeActionContentDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHomeActionContentDescription(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHomeActionContentDescription(int)}
 **/
ActionBar.prototype.setHomeActionContentDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHomeActionContentDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getElevation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getElevation()}
 **/
ActionBar.prototype.getElevation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getElevation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isShowing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#isShowing()}
 **/
ActionBar.prototype.isShowing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isShowing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getTitle()}
 **/
ActionBar.prototype.getTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayOptions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getDisplayOptions()}
 **/
ActionBar.prototype.getDisplayOptions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayOptions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setStackedBackgroundDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setStackedBackgroundDrawable(android.graphics.drawable.Drawable)}
 **/
ActionBar.prototype.setStackedBackgroundDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setStackedBackgroundDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHideOnContentScrollEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#isHideOnContentScrollEnabled()}
 **/
ActionBar.prototype.isHideOnContentScrollEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHideOnContentScrollEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#removeTab(android.app.ActionBar$Tab)}
 **/
ActionBar.prototype.removeTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayOptions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayOptions(int)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayOptions(int, int)}
 **/
ActionBar.prototype.setDisplayOptions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayOptions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCustomView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setCustomView(android.view.View)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setCustomView(android.view.View, android.app.ActionBar$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setCustomView(int)}
 **/
ActionBar.prototype.setCustomView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCustomView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnMenuVisibilityListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#addOnMenuVisibilityListener(android.app.ActionBar$OnMenuVisibilityListener)}
 **/
ActionBar.prototype.addOnMenuVisibilityListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnMenuVisibilityListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setTitle(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setTitle(int)}
 **/
ActionBar.prototype.setTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#newTab()}
 **/
ActionBar.prototype.newTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setIcon(int)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setIcon(android.graphics.drawable.Drawable)}
 **/
ActionBar.prototype.setIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setBackgroundDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setBackgroundDrawable(android.graphics.drawable.Drawable)}
 **/
ActionBar.prototype.setBackgroundDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBackgroundDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayShowHomeEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayShowHomeEnabled(boolean)}
 **/
ActionBar.prototype.setDisplayShowHomeEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayShowHomeEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayShowTitleEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayShowTitleEnabled(boolean)}
 **/
ActionBar.prototype.setDisplayShowTitleEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayShowTitleEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectedTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getSelectedTab()}
 **/
ActionBar.prototype.getSelectedTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectedTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHomeButtonEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHomeButtonEnabled(boolean)}
 **/
ActionBar.prototype.setHomeButtonEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHomeButtonEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function selectTab
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#selectTab(android.app.ActionBar$Tab)}
 **/
ActionBar.prototype.selectTab = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'selectTab',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHideOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHideOffset(int)}
 **/
ActionBar.prototype.setHideOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHideOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSelectedNavigationIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getSelectedNavigationIndex()}
 **/
ActionBar.prototype.getSelectedNavigationIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSelectedNavigationIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
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
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#show()}
 **/
ActionBar.prototype.show = function() {
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
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTabCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getTabCount()}
 **/
ActionBar.prototype.getTabCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTabCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSelectedNavigationItem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setSelectedNavigationItem(int)}
 **/
ActionBar.prototype.setSelectedNavigationItem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSelectedNavigationItem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getHeight()}
 **/
ActionBar.prototype.getHeight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSplitBackgroundDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setSplitBackgroundDrawable(android.graphics.drawable.Drawable)}
 **/
ActionBar.prototype.setSplitBackgroundDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSplitBackgroundDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCustomView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getCustomView()}
 **/
ActionBar.prototype.getCustomView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCustomView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnMenuVisibilityListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#removeOnMenuVisibilityListener(android.app.ActionBar$OnMenuVisibilityListener)}
 **/
ActionBar.prototype.removeOnMenuVisibilityListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnMenuVisibilityListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeTabAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#removeTabAt(int)}
 **/
ActionBar.prototype.removeTabAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeTabAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubtitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setSubtitle(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setSubtitle(int)}
 **/
ActionBar.prototype.setSubtitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubtitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHomeAsUpIndicator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHomeAsUpIndicator(android.graphics.drawable.Drawable)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHomeAsUpIndicator(int)}
 **/
ActionBar.prototype.setHomeAsUpIndicator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHomeAsUpIndicator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTabAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getTabAt(int)}
 **/
ActionBar.prototype.getTabAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTabAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLogo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setLogo(int)}
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setLogo(android.graphics.drawable.Drawable)}
 **/
ActionBar.prototype.setLogo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLogo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNavigationMode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setNavigationMode(int)}
 **/
ActionBar.prototype.setNavigationMode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNavigationMode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHideOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getHideOffset()}
 **/
ActionBar.prototype.getHideOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHideOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setElevation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setElevation(float)}
 **/
ActionBar.prototype.setElevation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setElevation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDisplayHomeAsUpEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setDisplayHomeAsUpEnabled(boolean)}
 **/
ActionBar.prototype.setDisplayHomeAsUpEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisplayHomeAsUpEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getThemedContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#getThemedContext()}
 **/
ActionBar.prototype.getThemedContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getThemedContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
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
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#hide()}
 **/
ActionBar.prototype.hide = function() {
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
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setHideOnContentScrollEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#setHideOnContentScrollEnabled(boolean)}
 **/
ActionBar.prototype.setHideOnContentScrollEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setHideOnContentScrollEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeAllTabs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/ActionBar.html#removeAllTabs()}
 **/
ActionBar.prototype.removeAllTabs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeAllTabs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.ActionBar') {
			return new ActionBar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ActionBar;
