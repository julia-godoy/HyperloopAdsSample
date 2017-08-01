/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.res.Resources$Theme
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.content.res.Resources');

/**
 * @class android.content.res.Resources$Theme
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html}
 **/
var Theme = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.res.Resources$Theme')) {
		result = arguments[0];
	}
	else {
		result = Theme.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Theme.prototype = Object.create(SuperClass.prototype);
Theme.prototype.constructor = Theme;

Object.defineProperty(Theme.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Theme(this.$native.super);
	},
	enumerable: true
});

Theme.className = 'android.content.res.Resources$Theme';
Theme.prototype.className = 'android.content.res.Resources$Theme';

// class property
Object.defineProperty(Theme, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.res.Resources$Theme');
	},
	enumerable: true,
	configurable: false
});


// Cast
Theme.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Theme(Hyperloop.cast('android.content.res.Resources$Theme', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function obtainStyledAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#obtainStyledAttributes(int[])}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#obtainStyledAttributes(int, int[])}
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#obtainStyledAttributes(android.util.AttributeSet, int[], int, int)}
 **/
Theme.prototype.obtainStyledAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'obtainStyledAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDrawable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#getDrawable(int)}
 **/
Theme.prototype.getDrawable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDrawable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#getResources()}
 **/
Theme.prototype.getResources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveAttribute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#resolveAttribute(int, android.util.TypedValue, boolean)}
 **/
Theme.prototype.resolveAttribute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveAttribute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChangingConfigurations
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#getChangingConfigurations()}
 **/
Theme.prototype.getChangingConfigurations = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChangingConfigurations',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function applyStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#applyStyle(int, boolean)}
 **/
Theme.prototype.applyStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'applyStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#setTo(android.content.res.Resources$Theme)}
 **/
Theme.prototype.setTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#finalize()}
 **/
Theme.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new Theme(result);
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
 * @see {@link http://developer.android.com/reference/android/content/res/Resources.Theme.html#dump(int, java.lang.String, java.lang.String)}
 **/
Theme.prototype.dump = function() {
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
		if (result.apiName === 'android.content.res.Resources$Theme') {
			return new Theme(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Theme;
