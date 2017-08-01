/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.inputmethod.EditorInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view.inputmethod');

/**
 * @class android.view.inputmethod.EditorInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html}
 **/
var EditorInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.inputmethod.EditorInfo')) {
		result = arguments[0];
	}
	else {
		result = EditorInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
EditorInfo.prototype = Object.create(SuperClass.prototype);
EditorInfo.prototype.constructor = EditorInfo;

Object.defineProperty(EditorInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new EditorInfo(this.$native.super);
	},
	enumerable: true
});

EditorInfo.className = 'android.view.inputmethod.EditorInfo';
EditorInfo.prototype.className = 'android.view.inputmethod.EditorInfo';

// class property
Object.defineProperty(EditorInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.inputmethod.EditorInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
EditorInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.inputmethod.EditorInfo');

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
	SubClass.prototype = Object.create(EditorInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
EditorInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new EditorInfo(Hyperloop.cast('android.view.inputmethod.EditorInfo', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NO_ACCESSORY_ACTION}
 */
EditorInfo.IME_FLAG_NO_ACCESSORY_ACTION = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_NEXT}
 */
EditorInfo.IME_ACTION_NEXT = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEARCH}
 */
EditorInfo.IME_ACTION_SEARCH = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_FORCE_ASCII}
 */
EditorInfo.IME_FLAG_FORCE_ASCII = -2147483648;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NO_ENTER_ACTION}
 */
EditorInfo.IME_FLAG_NO_ENTER_ACTION = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_MASK_ACTION}
 */
EditorInfo.IME_MASK_ACTION = 255;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NAVIGATE_NEXT}
 */
EditorInfo.IME_FLAG_NAVIGATE_NEXT = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NO_FULLSCREEN}
 */
EditorInfo.IME_FLAG_NO_FULLSCREEN = 33554432;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEND}
 */
EditorInfo.IME_ACTION_SEND = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_PREVIOUS}
 */
EditorInfo.IME_ACTION_PREVIOUS = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_GO}
 */
EditorInfo.IME_ACTION_GO = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NO_EXTRACT_UI}
 */
EditorInfo.IME_FLAG_NO_EXTRACT_UI = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_DONE}
 */
EditorInfo.IME_ACTION_DONE = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_UNSPECIFIED}
 */
EditorInfo.IME_ACTION_UNSPECIFIED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_NULL}
 */
EditorInfo.IME_NULL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_NONE}
 */
EditorInfo.IME_ACTION_NONE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_FLAG_NAVIGATE_PREVIOUS}
 */
EditorInfo.IME_FLAG_NAVIGATE_PREVIOUS = 67108864;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#CREATOR
Object.defineProperty(EditorInfo, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
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
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#fieldName
Object.defineProperty(EditorInfo.prototype, 'fieldName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('fieldName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('fieldName', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#initialCapsMode
Object.defineProperty(EditorInfo.prototype, 'initialCapsMode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('initialCapsMode');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('initialCapsMode', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#imeOptions
Object.defineProperty(EditorInfo.prototype, 'imeOptions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('imeOptions');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('imeOptions', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#privateImeOptions
Object.defineProperty(EditorInfo.prototype, 'privateImeOptions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('privateImeOptions');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('privateImeOptions', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#extras
Object.defineProperty(EditorInfo.prototype, 'extras', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('extras');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('extras', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#initialSelEnd
Object.defineProperty(EditorInfo.prototype, 'initialSelEnd', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('initialSelEnd');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('initialSelEnd', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#actionLabel
Object.defineProperty(EditorInfo.prototype, 'actionLabel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('actionLabel');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('actionLabel', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#inputType
Object.defineProperty(EditorInfo.prototype, 'inputType', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('inputType');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('inputType', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#packageName
Object.defineProperty(EditorInfo.prototype, 'packageName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('packageName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('packageName', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#fieldId
Object.defineProperty(EditorInfo.prototype, 'fieldId', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('fieldId');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('fieldId', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#label
Object.defineProperty(EditorInfo.prototype, 'label', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('label');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('label', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#hintText
Object.defineProperty(EditorInfo.prototype, 'hintText', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('hintText');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('hintText', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#actionId
Object.defineProperty(EditorInfo.prototype, 'actionId', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('actionId');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('actionId', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#initialSelStart
Object.defineProperty(EditorInfo.prototype, 'initialSelStart', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('initialSelStart');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.EditorInfo') {
				return new EditorInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('initialSelStart', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function makeCompatible
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#makeCompatible(int)}
 **/
EditorInfo.prototype.makeCompatible = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'makeCompatible',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.inputmethod.EditorInfo') {
			return new EditorInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#dump(android.util.Printer, java.lang.String)}
 **/
EditorInfo.prototype.dump = function() {
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
		if (result.apiName === 'android.view.inputmethod.EditorInfo') {
			return new EditorInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
EditorInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.inputmethod.EditorInfo') {
			return new EditorInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#describeContents()}
 **/
EditorInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.inputmethod.EditorInfo') {
			return new EditorInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = EditorInfo;
