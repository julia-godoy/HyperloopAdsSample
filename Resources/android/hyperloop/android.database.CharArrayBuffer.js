/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.CharArrayBuffer
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.database');

/**
 * @class android.database.CharArrayBuffer
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/CharArrayBuffer.html}
 **/
var CharArrayBuffer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.database.CharArrayBuffer')) {
		result = arguments[0];
	}
	else {
		result = CharArrayBuffer.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CharArrayBuffer.prototype = Object.create(SuperClass.prototype);
CharArrayBuffer.prototype.constructor = CharArrayBuffer;

Object.defineProperty(CharArrayBuffer.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CharArrayBuffer(this.$native.super);
	},
	enumerable: true
});

CharArrayBuffer.className = 'android.database.CharArrayBuffer';
CharArrayBuffer.prototype.className = 'android.database.CharArrayBuffer';

// class property
Object.defineProperty(CharArrayBuffer, 'class', {
	get: function() {
		return Hyperloop.getClass('android.database.CharArrayBuffer');
	},
	enumerable: true,
	configurable: false
});


// Cast
CharArrayBuffer.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CharArrayBuffer(Hyperloop.cast('android.database.CharArrayBuffer', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/database/CharArrayBuffer.html#data
Object.defineProperty(CharArrayBuffer.prototype, 'data', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('data');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.database.CharArrayBuffer') {
				return new CharArrayBuffer(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('data', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/database/CharArrayBuffer.html#sizeCopied
Object.defineProperty(CharArrayBuffer.prototype, 'sizeCopied', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('sizeCopied');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.database.CharArrayBuffer') {
				return new CharArrayBuffer(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('sizeCopied', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods

// export the class
module.exports = CharArrayBuffer;
