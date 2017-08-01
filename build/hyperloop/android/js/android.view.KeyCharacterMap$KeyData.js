/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.KeyCharacterMap$KeyData
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.view.KeyCharacterMap');

/**
 * @class android.view.KeyCharacterMap$KeyData
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.KeyData.html}
 **/
var KeyData = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.KeyCharacterMap$KeyData')) {
		result = arguments[0];
	}
	else {
		result = KeyData.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
KeyData.prototype = Object.create(SuperClass.prototype);
KeyData.prototype.constructor = KeyData;

Object.defineProperty(KeyData.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new KeyData(this.$native.super);
	},
	enumerable: true
});

KeyData.className = 'android.view.KeyCharacterMap$KeyData';
KeyData.prototype.className = 'android.view.KeyCharacterMap$KeyData';

// class property
Object.defineProperty(KeyData, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.KeyCharacterMap$KeyData');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
KeyData.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.KeyCharacterMap$KeyData');

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
	SubClass.prototype = Object.create(KeyData.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
KeyData.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new KeyData(Hyperloop.cast('android.view.KeyCharacterMap$KeyData', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.KeyData.html#META_LENGTH}
 */
KeyData.META_LENGTH = 4;

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/view/KeyCharacterMap.KeyData.html#displayLabel
Object.defineProperty(KeyData.prototype, 'displayLabel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('displayLabel');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.KeyCharacterMap$KeyData') {
				return new KeyData(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('displayLabel', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/KeyCharacterMap.KeyData.html#number
Object.defineProperty(KeyData.prototype, 'number', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('number');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.KeyCharacterMap$KeyData') {
				return new KeyData(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('number', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/KeyCharacterMap.KeyData.html#meta
Object.defineProperty(KeyData.prototype, 'meta', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('meta');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.KeyCharacterMap$KeyData') {
				return new KeyData(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('meta', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods

// export the class
module.exports = KeyData;