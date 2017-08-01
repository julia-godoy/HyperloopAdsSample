/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.inputmethod.CorrectionInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view.inputmethod');

/**
 * @class android.view.inputmethod.CorrectionInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CorrectionInfo.html}
 **/
var CorrectionInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.inputmethod.CorrectionInfo')) {
		result = arguments[0];
	}
	else {
		result = CorrectionInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CorrectionInfo.prototype = Object.create(SuperClass.prototype);
CorrectionInfo.prototype.constructor = CorrectionInfo;

Object.defineProperty(CorrectionInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CorrectionInfo(this.$native.super);
	},
	enumerable: true
});

CorrectionInfo.className = 'android.view.inputmethod.CorrectionInfo';
CorrectionInfo.prototype.className = 'android.view.inputmethod.CorrectionInfo';

// class property
Object.defineProperty(CorrectionInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.inputmethod.CorrectionInfo');
	},
	enumerable: true,
	configurable: false
});


// Cast
CorrectionInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CorrectionInfo(Hyperloop.cast('android.view.inputmethod.CorrectionInfo', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/view/inputmethod/CorrectionInfo.html#CREATOR
Object.defineProperty(CorrectionInfo, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.CorrectionInfo') {
				return new CorrectionInfo(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getOffset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CorrectionInfo.html#getOffset()}
 **/
CorrectionInfo.prototype.getOffset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOffset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.CorrectionInfo') {
			return new CorrectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CorrectionInfo.html#toString()}
 **/
CorrectionInfo.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.CorrectionInfo') {
			return new CorrectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOldText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CorrectionInfo.html#getOldText()}
 **/
CorrectionInfo.prototype.getOldText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOldText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.CorrectionInfo') {
			return new CorrectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CorrectionInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
CorrectionInfo.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.CorrectionInfo') {
			return new CorrectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CorrectionInfo.html#describeContents()}
 **/
CorrectionInfo.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.CorrectionInfo') {
			return new CorrectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNewText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/CorrectionInfo.html#getNewText()}
 **/
CorrectionInfo.prototype.getNewText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNewText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.CorrectionInfo') {
			return new CorrectionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CorrectionInfo;
