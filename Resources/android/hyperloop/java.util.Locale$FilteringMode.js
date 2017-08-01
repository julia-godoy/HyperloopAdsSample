/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.Locale$FilteringMode
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('java.util.Locale');

/**
 * @class java.util.Locale$FilteringMode
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/Locale.FilteringMode.html}
 **/
var FilteringMode = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.Locale$FilteringMode')) {
		result = arguments[0];
	}
	else {
		result = FilteringMode.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
FilteringMode.prototype = Object.create(SuperClass.prototype);
FilteringMode.prototype.constructor = FilteringMode;

Object.defineProperty(FilteringMode.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FilteringMode(this.$native.super);
	},
	enumerable: true
});

FilteringMode.className = 'java.util.Locale$FilteringMode';
FilteringMode.prototype.className = 'java.util.Locale$FilteringMode';

// class property
Object.defineProperty(FilteringMode, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.Locale$FilteringMode');
	},
	enumerable: true,
	configurable: false
});


// Cast
FilteringMode.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FilteringMode(Hyperloop.cast('java.util.Locale$FilteringMode', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/util/Locale.FilteringMode.html#IGNORE_EXTENDED_RANGES
Object.defineProperty(FilteringMode, 'IGNORE_EXTENDED_RANGES', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('IGNORE_EXTENDED_RANGES');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$FilteringMode') {
				return new FilteringMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.FilteringMode.html#MAP_EXTENDED_RANGES
Object.defineProperty(FilteringMode, 'MAP_EXTENDED_RANGES', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('MAP_EXTENDED_RANGES');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$FilteringMode') {
				return new FilteringMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.FilteringMode.html#AUTOSELECT_FILTERING
Object.defineProperty(FilteringMode, 'AUTOSELECT_FILTERING', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('AUTOSELECT_FILTERING');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$FilteringMode') {
				return new FilteringMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.FilteringMode.html#REJECT_EXTENDED_RANGES
Object.defineProperty(FilteringMode, 'REJECT_EXTENDED_RANGES', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('REJECT_EXTENDED_RANGES');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$FilteringMode') {
				return new FilteringMode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/Locale.FilteringMode.html#EXTENDED_FILTERING
Object.defineProperty(FilteringMode, 'EXTENDED_FILTERING', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('EXTENDED_FILTERING');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.Locale$FilteringMode') {
				return new FilteringMode(result);
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
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.FilteringMode.html#valueOf(java.lang.String)}
 **/
FilteringMode.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$FilteringMode') {
			return new FilteringMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @static
 * @see {@link http://developer.android.com/reference/java/util/Locale.FilteringMode.html#values()}
 **/
FilteringMode.values = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$FilteringMode') {
			return new FilteringMode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = FilteringMode;
