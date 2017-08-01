/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.PorterDuff$Mode
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.PorterDuff');

/**
 * @class android.graphics.PorterDuff$Mode
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html}
 **/
var Mode = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.PorterDuff$Mode')) {
		result = arguments[0];
	}
	else {
		result = Mode.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Mode.prototype = Object.create(SuperClass.prototype);
Mode.prototype.constructor = Mode;

Object.defineProperty(Mode.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Mode(this.$native.super);
	},
	enumerable: true
});

Mode.className = 'android.graphics.PorterDuff$Mode';
Mode.prototype.className = 'android.graphics.PorterDuff$Mode';

// class property
Object.defineProperty(Mode, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.PorterDuff$Mode');
	},
	enumerable: true,
	configurable: false
});


// Cast
Mode.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Mode(Hyperloop.cast('android.graphics.PorterDuff$Mode', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#ADD
Object.defineProperty(Mode, 'ADD', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('ADD');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#SRC_ATOP
Object.defineProperty(Mode, 'SRC_ATOP', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SRC_ATOP');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#DST_OUT
Object.defineProperty(Mode, 'DST_OUT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DST_OUT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#DST_OVER
Object.defineProperty(Mode, 'DST_OVER', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DST_OVER');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#DST
Object.defineProperty(Mode, 'DST', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DST');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#SRC
Object.defineProperty(Mode, 'SRC', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SRC');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#SRC_IN
Object.defineProperty(Mode, 'SRC_IN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SRC_IN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#LIGHTEN
Object.defineProperty(Mode, 'LIGHTEN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('LIGHTEN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#DST_ATOP
Object.defineProperty(Mode, 'DST_ATOP', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DST_ATOP');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#OVERLAY
Object.defineProperty(Mode, 'OVERLAY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('OVERLAY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#SCREEN
Object.defineProperty(Mode, 'SCREEN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SCREEN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#MULTIPLY
Object.defineProperty(Mode, 'MULTIPLY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('MULTIPLY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#SRC_OVER
Object.defineProperty(Mode, 'SRC_OVER', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SRC_OVER');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#XOR
Object.defineProperty(Mode, 'XOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('XOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#DARKEN
Object.defineProperty(Mode, 'DARKEN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DARKEN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#SRC_OUT
Object.defineProperty(Mode, 'SRC_OUT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SRC_OUT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#DST_IN
Object.defineProperty(Mode, 'DST_IN', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DST_IN');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#CLEAR
Object.defineProperty(Mode, 'CLEAR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CLEAR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.PorterDuff$Mode') {
				return new Mode(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#valueOf(java.lang.String)}
 **/
Mode.valueOf = function() {
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
		if (result.apiName === 'android.graphics.PorterDuff$Mode') {
			return new Mode(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html#values()}
 **/
Mode.values = function() {
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
		if (result.apiName === 'android.graphics.PorterDuff$Mode') {
			return new Mode(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Mode;
