/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.KeyCharacterMap
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.KeyCharacterMap
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html}
 **/
var KeyCharacterMap = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.KeyCharacterMap')) {
		result = arguments[0];
	}
	else {
		result = KeyCharacterMap.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
KeyCharacterMap.prototype = Object.create(SuperClass.prototype);
KeyCharacterMap.prototype.constructor = KeyCharacterMap;

Object.defineProperty(KeyCharacterMap.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new KeyCharacterMap(this.$native.super);
	},
	enumerable: true
});

KeyCharacterMap.className = 'android.view.KeyCharacterMap';
KeyCharacterMap.prototype.className = 'android.view.KeyCharacterMap';

// class property
Object.defineProperty(KeyCharacterMap, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.KeyCharacterMap');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
KeyCharacterMap.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.KeyCharacterMap');

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
	SubClass.prototype = Object.create(KeyCharacterMap.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
KeyCharacterMap.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new KeyCharacterMap(Hyperloop.cast('android.view.KeyCharacterMap', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#COMBINING_ACCENT_MASK}
 */
KeyCharacterMap.COMBINING_ACCENT_MASK = 2147483647;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#NUMERIC}
 */
KeyCharacterMap.NUMERIC = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#MODIFIER_BEHAVIOR_CHORDED_OR_TOGGLED}
 */
KeyCharacterMap.MODIFIER_BEHAVIOR_CHORDED_OR_TOGGLED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#ALPHA}
 */
KeyCharacterMap.ALPHA = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#FULL}
 */
KeyCharacterMap.FULL = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#MODIFIER_BEHAVIOR_CHORDED}
 */
KeyCharacterMap.MODIFIER_BEHAVIOR_CHORDED = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#SPECIAL_FUNCTION}
 */
KeyCharacterMap.SPECIAL_FUNCTION = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#COMBINING_ACCENT}
 */
KeyCharacterMap.COMBINING_ACCENT = -2147483648;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#PICKER_DIALOG_INPUT}
 */
KeyCharacterMap.PICKER_DIALOG_INPUT = 61185;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#BUILT_IN_KEYBOARD}
 */
KeyCharacterMap.BUILT_IN_KEYBOARD = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#HEX_INPUT}
 */
KeyCharacterMap.HEX_INPUT = 61184;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#VIRTUAL_KEYBOARD}
 */
KeyCharacterMap.VIRTUAL_KEYBOARD = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#PREDICTIVE}
 */
KeyCharacterMap.PREDICTIVE = 2;

// Inner classes
Object.defineProperty(KeyCharacterMap, 'UnavailableException', {
	get: function() {
		return require('android.view.KeyCharacterMap$UnavailableException');
	},
	enumerable: true
});
Object.defineProperty(KeyCharacterMap, 'KeyData', {
	get: function() {
		return require('android.view.KeyCharacterMap$KeyData');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/view/KeyCharacterMap.html#CREATOR
Object.defineProperty(KeyCharacterMap, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.KeyCharacterMap') {
				return new KeyCharacterMap(result);
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
 * @function deviceHasKeys
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#deviceHasKeys(int[])}
 **/
KeyCharacterMap.deviceHasKeys = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'deviceHasKeys',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deviceHasKey
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#deviceHasKey(int)}
 **/
KeyCharacterMap.deviceHasKey = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'deviceHasKey',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function load
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#load(int)}
 **/
KeyCharacterMap.load = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'load',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDeadChar
 * @static
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getDeadChar(int, int)}
 **/
KeyCharacterMap.getDeadChar = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDeadChar',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getMatch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getMatch(int, char[])}
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getMatch(int, char[], int)}
 **/
KeyCharacterMap.prototype.getMatch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMatch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPrintingKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#isPrintingKey(int)}
 **/
KeyCharacterMap.prototype.isPrintingKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPrintingKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getDisplayLabel(int)}
 **/
KeyCharacterMap.prototype.getDisplayLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
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
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#describeContents()}
 **/
KeyCharacterMap.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNumber
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getNumber(int)}
 **/
KeyCharacterMap.prototype.getNumber = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getNumber',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEvents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getEvents(char[])}
 **/
KeyCharacterMap.prototype.getEvents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEvents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyboardType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getKeyboardType()}
 **/
KeyCharacterMap.prototype.getKeyboardType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyboardType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function get
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#get(int, int)}
 **/
KeyCharacterMap.prototype.get = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'get',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getModifierBehavior
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getModifierBehavior()}
 **/
KeyCharacterMap.prototype.getModifierBehavior = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getModifierBehavior',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getKeyData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#getKeyData(int, android.view.KeyCharacterMap$KeyData)}
 **/
KeyCharacterMap.prototype.getKeyData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKeyData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
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
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#finalize()}
 **/
KeyCharacterMap.prototype.finalize = function() {
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
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
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
 * @see {@link http://developer.android.com/reference/android/view/KeyCharacterMap.html#writeToParcel(android.os.Parcel, int)}
 **/
KeyCharacterMap.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.KeyCharacterMap') {
			return new KeyCharacterMap(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = KeyCharacterMap;
