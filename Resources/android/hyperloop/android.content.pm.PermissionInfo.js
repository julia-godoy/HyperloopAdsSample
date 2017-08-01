/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PermissionInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.PermissionInfo
 * @extends android.content.pm.PackageItemInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html}
 **/
var PermissionInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.PermissionInfo')) {
		result = arguments[0];
	}
	else {
		result = PermissionInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.PackageItemInfo');
PermissionInfo.prototype = Object.create(SuperClass.prototype);
PermissionInfo.prototype.constructor = PermissionInfo;

Object.defineProperty(PermissionInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PermissionInfo(this.$native.super);
	},
	enumerable: true
});

PermissionInfo.className = 'android.content.pm.PermissionInfo';
PermissionInfo.prototype.className = 'android.content.pm.PermissionInfo';

// class property
Object.defineProperty(PermissionInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.PermissionInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PermissionInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.PermissionInfo');

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
	SubClass.prototype = Object.create(PermissionInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PermissionInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PermissionInfo(Hyperloop.cast('android.content.pm.PermissionInfo', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#FLAG_COSTS_MONEY}
 */
PermissionInfo.FLAG_COSTS_MONEY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#FLAG_INSTALLED}
 */
PermissionInfo.FLAG_INSTALLED = 1073741824;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_DANGEROUS}
 */
PermissionInfo.PROTECTION_DANGEROUS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_DEVELOPMENT}
 */
PermissionInfo.PROTECTION_FLAG_DEVELOPMENT = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_MASK_FLAGS}
 */
PermissionInfo.PROTECTION_MASK_FLAGS = 4080;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_APPOP}
 */
PermissionInfo.PROTECTION_FLAG_APPOP = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_SIGNATURE}
 */
PermissionInfo.PROTECTION_SIGNATURE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_VERIFIER}
 */
PermissionInfo.PROTECTION_FLAG_VERIFIER = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_INSTALLER}
 */
PermissionInfo.PROTECTION_FLAG_INSTALLER = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_NORMAL}
 */
PermissionInfo.PROTECTION_NORMAL = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_SYSTEM}
 */
PermissionInfo.PROTECTION_FLAG_SYSTEM = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_PREINSTALLED}
 */
PermissionInfo.PROTECTION_FLAG_PREINSTALLED = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_MASK_BASE}
 */
PermissionInfo.PROTECTION_MASK_BASE = 15;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_PRE23}
 */
PermissionInfo.PROTECTION_FLAG_PRE23 = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_FLAG_PRIVILEGED}
 */
PermissionInfo.PROTECTION_FLAG_PRIVILEGED = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#PROTECTION_SIGNATURE_OR_SYSTEM}
 */
PermissionInfo.PROTECTION_SIGNATURE_OR_SYSTEM = 3;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#CREATOR
Object.defineProperty(PermissionInfo, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new PermissionInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#nonLocalizedDescription
Object.defineProperty(PermissionInfo.prototype, 'nonLocalizedDescription', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('nonLocalizedDescription');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new PermissionInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('nonLocalizedDescription', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#flags
Object.defineProperty(PermissionInfo.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('flags');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new PermissionInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#descriptionRes
Object.defineProperty(PermissionInfo.prototype, 'descriptionRes', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('descriptionRes');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new PermissionInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('descriptionRes', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#protectionLevel
Object.defineProperty(PermissionInfo.prototype, 'protectionLevel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('protectionLevel');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new PermissionInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('protectionLevel', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PermissionInfo.html#group
Object.defineProperty(PermissionInfo.prototype, 'group', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('group');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionInfo') {
				return new PermissionInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('group', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function loadDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#loadDescription(android.content.pm.PackageManager)}
 **/
PermissionInfo.prototype.loadDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PermissionInfo') {
			return new PermissionInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#toString()}
 **/
PermissionInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.PermissionInfo') {
			return new PermissionInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#describeContents()}
 **/
PermissionInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.PermissionInfo') {
			return new PermissionInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
PermissionInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.PermissionInfo') {
			return new PermissionInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PermissionInfo;
