/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.widget.Toolbar
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.widget');

/**
 * @class android.widget.Toolbar
 * @extends android.view.ViewGroup 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html}
 **/
var Toolbar = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.widget.Toolbar')) {
		result = arguments[0];
	}
	else {
		result = Toolbar.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup');
Toolbar.prototype = Object.create(SuperClass.prototype);
Toolbar.prototype.constructor = Toolbar;

Object.defineProperty(Toolbar.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Toolbar(this.$native.super);
	},
	enumerable: true
});

Toolbar.className = 'android.widget.Toolbar';
Toolbar.prototype.className = 'android.widget.Toolbar';

// class property
Object.defineProperty(Toolbar, 'class', {
	get: function() {
		return Hyperloop.getClass('android.widget.Toolbar');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Toolbar.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.widget.Toolbar');

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
	SubClass.prototype = Object.create(Toolbar.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Toolbar.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Toolbar(Hyperloop.cast('android.widget.Toolbar', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(Toolbar, 'OnMenuItemClickListener', {
	get: function() {
		return require('android.widget.Toolbar$OnMenuItemClickListener');
	},
	enumerable: true
});
Object.defineProperty(Toolbar, 'LayoutParams', {
	get: function() {
		return require('android.widget.Toolbar$LayoutParams');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getContentInsetEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getContentInsetEnd()}
 **/
Toolbar.prototype.getContentInsetEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentInsetEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentInsetLeft
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getContentInsetLeft()}
 **/
Toolbar.prototype.getContentInsetLeft = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentInsetLeft',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function generateLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateLayoutParams(android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateLayoutParams(android.view.ViewGroup$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateLayoutParams(android.view.ViewGroup$LayoutParams)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateLayoutParams(android.util.AttributeSet)}
 **/
Toolbar.prototype.generateLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'generateLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRestoreInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onRestoreInstanceState(android.os.Parcelable)}
 **/
Toolbar.prototype.onRestoreInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRestoreInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getSubtitle()}
 **/
Toolbar.prototype.getSubtitle = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNavigationOnClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setNavigationOnClickListener(android.view.View$OnClickListener)}
 **/
Toolbar.prototype.setNavigationOnClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNavigationOnClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inflateMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#inflateMenu(int)}
 **/
Toolbar.prototype.inflateMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inflateMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPopupTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getPopupTheme()}
 **/
Toolbar.prototype.getPopupTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPopupTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentInsetStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getContentInsetStart()}
 **/
Toolbar.prototype.getContentInsetStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentInsetStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function collapseActionView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#collapseActionView()}
 **/
Toolbar.prototype.collapseActionView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'collapseActionView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitleTextColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setTitleTextColor(int)}
 **/
Toolbar.prototype.setTitleTextColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitleTextColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubtitleTextAppearance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setSubtitleTextAppearance(android.content.Context, int)}
 **/
Toolbar.prototype.setSubtitleTextAppearance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubtitleTextAppearance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRtlPropertiesChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onRtlPropertiesChanged(int)}
 **/
Toolbar.prototype.onRtlPropertiesChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRtlPropertiesChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dismissPopupMenus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#dismissPopupMenus()}
 **/
Toolbar.prototype.dismissPopupMenus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dismissPopupMenus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasExpandedActionView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#hasExpandedActionView()}
 **/
Toolbar.prototype.hasExpandedActionView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasExpandedActionView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOverflowIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setOverflowIcon(android.graphics.drawable.Drawable)}
 **/
Toolbar.prototype.setOverflowIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOverflowIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function generateDefaultLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateDefaultLayoutParams()}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#generateDefaultLayoutParams()}
 **/
Toolbar.prototype.generateDefaultLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'generateDefaultLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getTitle()}
 **/
Toolbar.prototype.getTitle = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNavigationIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setNavigationIcon(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setNavigationIcon(android.graphics.drawable.Drawable)}
 **/
Toolbar.prototype.setNavigationIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNavigationIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getMenu()}
 **/
Toolbar.prototype.getMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentInsetsAbsolute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setContentInsetsAbsolute(int, int)}
 **/
Toolbar.prototype.setContentInsetsAbsolute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentInsetsAbsolute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOverflowMenuShowing
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#isOverflowMenuShowing()}
 **/
Toolbar.prototype.isOverflowMenuShowing = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOverflowMenuShowing',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOverflowIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getOverflowIcon()}
 **/
Toolbar.prototype.getOverflowIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOverflowIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkLayoutParams
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#checkLayoutParams(android.view.ViewGroup$LayoutParams)}
 **/
Toolbar.prototype.checkLayoutParams = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkLayoutParams',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setOnMenuItemClickListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setOnMenuItemClickListener(android.widget.Toolbar$OnMenuItemClickListener)}
 **/
Toolbar.prototype.setOnMenuItemClickListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOnMenuItemClickListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hideOverflowMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#hideOverflowMenu()}
 **/
Toolbar.prototype.hideOverflowMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hideOverflowMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setSubtitle(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setSubtitle(java.lang.CharSequence)}
 **/
Toolbar.prototype.setSubtitle = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLogoDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setLogoDescription(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setLogoDescription(java.lang.CharSequence)}
 **/
Toolbar.prototype.setLogoDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLogoDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentInsetsRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setContentInsetsRelative(int, int)}
 **/
Toolbar.prototype.setContentInsetsRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContentInsetsRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPopupTheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setPopupTheme(int)}
 **/
Toolbar.prototype.setPopupTheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPopupTheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setLogo(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setLogo(android.graphics.drawable.Drawable)}
 **/
Toolbar.prototype.setLogo = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLogoDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getLogoDescription()}
 **/
Toolbar.prototype.getLogoDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLogoDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLogo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getLogo()}
 **/
Toolbar.prototype.getLogo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLogo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onTouchEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onTouchEvent(android.view.MotionEvent)}
 **/
Toolbar.prototype.onTouchEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onTouchEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNavigationIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getNavigationIcon()}
 **/
Toolbar.prototype.getNavigationIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNavigationIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onLayout(boolean, int, int, int, int)}
 **/
Toolbar.prototype.onLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
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
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setTitle(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setTitle(java.lang.CharSequence)}
 **/
Toolbar.prototype.setTitle = function() {
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
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMeasure
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onMeasure(int, int)}
 **/
Toolbar.prototype.onMeasure = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMeasure',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentInsetRight
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getContentInsetRight()}
 **/
Toolbar.prototype.getContentInsetRight = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentInsetRight',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNavigationContentDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#getNavigationContentDescription()}
 **/
Toolbar.prototype.getNavigationContentDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNavigationContentDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSaveInstanceState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onSaveInstanceState()}
 **/
Toolbar.prototype.onSaveInstanceState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSaveInstanceState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubtitleTextColor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setSubtitleTextColor(int)}
 **/
Toolbar.prototype.setSubtitleTextColor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubtitleTextColor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNavigationContentDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setNavigationContentDescription(int)}
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setNavigationContentDescription(java.lang.CharSequence)}
 **/
Toolbar.prototype.setNavigationContentDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNavigationContentDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onDetachedFromWindow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#onDetachedFromWindow()}
 **/
Toolbar.prototype.onDetachedFromWindow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onDetachedFromWindow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function showOverflowMenu
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#showOverflowMenu()}
 **/
Toolbar.prototype.showOverflowMenu = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'showOverflowMenu',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTitleTextAppearance
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/widget/Toolbar.html#setTitleTextAppearance(android.content.Context, int)}
 **/
Toolbar.prototype.setTitleTextAppearance = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTitleTextAppearance',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.widget.Toolbar') {
			return new Toolbar(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Toolbar;
