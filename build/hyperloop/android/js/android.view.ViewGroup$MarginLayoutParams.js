/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewGroup$MarginLayoutParams
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.ViewGroup');

/**
 * @class android.view.ViewGroup$MarginLayoutParams
 * @extends android.view.ViewGroup.LayoutParams 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html}
 **/
var MarginLayoutParams = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.ViewGroup$MarginLayoutParams')) {
		result = arguments[0];
	}
	else {
		result = MarginLayoutParams.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.view.ViewGroup$LayoutParams');
MarginLayoutParams.prototype = Object.create(SuperClass.prototype);
MarginLayoutParams.prototype.constructor = MarginLayoutParams;

Object.defineProperty(MarginLayoutParams.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MarginLayoutParams(this.$native.super);
	},
	enumerable: true
});

MarginLayoutParams.className = 'android.view.ViewGroup$MarginLayoutParams';
MarginLayoutParams.prototype.className = 'android.view.ViewGroup$MarginLayoutParams';

// class property
Object.defineProperty(MarginLayoutParams, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.ViewGroup$MarginLayoutParams');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
MarginLayoutParams.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.ViewGroup$MarginLayoutParams');

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
	SubClass.prototype = Object.create(MarginLayoutParams.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
MarginLayoutParams.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MarginLayoutParams(Hyperloop.cast('android.view.ViewGroup$MarginLayoutParams', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#leftMargin
Object.defineProperty(MarginLayoutParams.prototype, 'leftMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('leftMargin');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
				return new MarginLayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('leftMargin', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#topMargin
Object.defineProperty(MarginLayoutParams.prototype, 'topMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('topMargin');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
				return new MarginLayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('topMargin', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#rightMargin
Object.defineProperty(MarginLayoutParams.prototype, 'rightMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('rightMargin');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
				return new MarginLayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('rightMargin', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#bottomMargin
Object.defineProperty(MarginLayoutParams.prototype, 'bottomMargin', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('bottomMargin');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
				return new MarginLayoutParams(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('bottomMargin', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function isMarginRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#isMarginRelative()}
 **/
MarginLayoutParams.prototype.isMarginRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMarginRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#getLayoutDirection()}
 **/
MarginLayoutParams.prototype.getLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMargins
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#setMargins(int, int, int, int)}
 **/
MarginLayoutParams.prototype.setMargins = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMargins',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMarginEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#setMarginEnd(int)}
 **/
MarginLayoutParams.prototype.setMarginEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMarginEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMarginEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#getMarginEnd()}
 **/
MarginLayoutParams.prototype.getMarginEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMarginEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#setLayoutDirection(int)}
 **/
MarginLayoutParams.prototype.setLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveLayoutDirection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#resolveLayoutDirection(int)}
 **/
MarginLayoutParams.prototype.resolveLayoutDirection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveLayoutDirection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMarginStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#getMarginStart()}
 **/
MarginLayoutParams.prototype.getMarginStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMarginStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMarginStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html#setMarginStart(int)}
 **/
MarginLayoutParams.prototype.setMarginStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMarginStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewGroup$MarginLayoutParams') {
			return new MarginLayoutParams(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = MarginLayoutParams;
