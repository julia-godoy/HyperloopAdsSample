/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.inputmethod.ExtractedText
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view.inputmethod');

/**
 * @class android.view.inputmethod.ExtractedText
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html}
 **/
var ExtractedText = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.inputmethod.ExtractedText')) {
		result = arguments[0];
	}
	else {
		result = ExtractedText.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ExtractedText.prototype = Object.create(SuperClass.prototype);
ExtractedText.prototype.constructor = ExtractedText;

Object.defineProperty(ExtractedText.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ExtractedText(this.$native.super);
	},
	enumerable: true
});

ExtractedText.className = 'android.view.inputmethod.ExtractedText';
ExtractedText.prototype.className = 'android.view.inputmethod.ExtractedText';

// class property
Object.defineProperty(ExtractedText, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.inputmethod.ExtractedText');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ExtractedText.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.inputmethod.ExtractedText');

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
	SubClass.prototype = Object.create(ExtractedText.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ExtractedText.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ExtractedText(Hyperloop.cast('android.view.inputmethod.ExtractedText', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#FLAG_SELECTING}
 */
ExtractedText.FLAG_SELECTING = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#FLAG_SINGLE_LINE}
 */
ExtractedText.FLAG_SINGLE_LINE = 1;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#CREATOR
Object.defineProperty(ExtractedText, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new ExtractedText(result);
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
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#selectionStart
Object.defineProperty(ExtractedText.prototype, 'selectionStart', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('selectionStart');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new ExtractedText(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('selectionStart', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#startOffset
Object.defineProperty(ExtractedText.prototype, 'startOffset', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('startOffset');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new ExtractedText(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('startOffset', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#partialStartOffset
Object.defineProperty(ExtractedText.prototype, 'partialStartOffset', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('partialStartOffset');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new ExtractedText(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('partialStartOffset', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#flags
Object.defineProperty(ExtractedText.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('flags');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new ExtractedText(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('flags', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#selectionEnd
Object.defineProperty(ExtractedText.prototype, 'selectionEnd', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('selectionEnd');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new ExtractedText(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('selectionEnd', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#partialEndOffset
Object.defineProperty(ExtractedText.prototype, 'partialEndOffset', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('partialEndOffset');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new ExtractedText(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('partialEndOffset', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#text
Object.defineProperty(ExtractedText.prototype, 'text', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('text');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedText') {
				return new ExtractedText(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('text', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#writeToParcel(android.os.Parcel, int)}
 **/
ExtractedText.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.inputmethod.ExtractedText') {
			return new ExtractedText(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedText.html#describeContents()}
 **/
ExtractedText.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.inputmethod.ExtractedText') {
			return new ExtractedText(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ExtractedText;
