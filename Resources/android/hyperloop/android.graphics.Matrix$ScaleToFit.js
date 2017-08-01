/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.Matrix$ScaleToFit
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.graphics.Matrix');

/**
 * @class android.graphics.Matrix$ScaleToFit
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html}
 **/
var ScaleToFit = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.graphics.Matrix$ScaleToFit')) {
		result = arguments[0];
	}
	else {
		result = ScaleToFit.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
ScaleToFit.prototype = Object.create(SuperClass.prototype);
ScaleToFit.prototype.constructor = ScaleToFit;

Object.defineProperty(ScaleToFit.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ScaleToFit(this.$native.super);
	},
	enumerable: true
});

ScaleToFit.className = 'android.graphics.Matrix$ScaleToFit';
ScaleToFit.prototype.className = 'android.graphics.Matrix$ScaleToFit';

// class property
Object.defineProperty(ScaleToFit, 'class', {
	get: function() {
		return Hyperloop.getClass('android.graphics.Matrix$ScaleToFit');
	},
	enumerable: true,
	configurable: false
});


// Cast
ScaleToFit.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ScaleToFit(Hyperloop.cast('android.graphics.Matrix$ScaleToFit', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#CENTER
Object.defineProperty(ScaleToFit, 'CENTER', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CENTER');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
				return new ScaleToFit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#FILL
Object.defineProperty(ScaleToFit, 'FILL', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('FILL');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
				return new ScaleToFit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#END
Object.defineProperty(ScaleToFit, 'END', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('END');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
				return new ScaleToFit(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#START
Object.defineProperty(ScaleToFit, 'START', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('START');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
				return new ScaleToFit(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#valueOf(java.lang.String)}
 **/
ScaleToFit.valueOf = function() {
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
		if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
			return new ScaleToFit(result);
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
 * @see {@link http://developer.android.com/reference/android/graphics/Matrix.ScaleToFit.html#values()}
 **/
ScaleToFit.values = function() {
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
		if (result.apiName === 'android.graphics.Matrix$ScaleToFit') {
			return new ScaleToFit(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = ScaleToFit;
