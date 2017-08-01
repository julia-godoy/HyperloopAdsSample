/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PermissionGroupInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.PermissionGroupInfo
 * @extends android.content.pm.PackageItemInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html}
 **/
var PermissionGroupInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.PermissionGroupInfo')) {
		result = arguments[0];
	}
	else {
		result = PermissionGroupInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.PackageItemInfo');
PermissionGroupInfo.prototype = Object.create(SuperClass.prototype);
PermissionGroupInfo.prototype.constructor = PermissionGroupInfo;

Object.defineProperty(PermissionGroupInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PermissionGroupInfo(this.$native.super);
	},
	enumerable: true
});

PermissionGroupInfo.className = 'android.content.pm.PermissionGroupInfo';
PermissionGroupInfo.prototype.className = 'android.content.pm.PermissionGroupInfo';

// class property
Object.defineProperty(PermissionGroupInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.PermissionGroupInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PermissionGroupInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.PermissionGroupInfo');

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
	SubClass.prototype = Object.create(PermissionGroupInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PermissionGroupInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PermissionGroupInfo(Hyperloop.cast('android.content.pm.PermissionGroupInfo', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#FLAG_PERSONAL_INFO}
 */
PermissionGroupInfo.FLAG_PERSONAL_INFO = 1;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#CREATOR
Object.defineProperty(PermissionGroupInfo, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
				return new PermissionGroupInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#nonLocalizedDescription
Object.defineProperty(PermissionGroupInfo.prototype, 'nonLocalizedDescription', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('nonLocalizedDescription');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
				return new PermissionGroupInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#flags
Object.defineProperty(PermissionGroupInfo.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('flags');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
				return new PermissionGroupInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#priority
Object.defineProperty(PermissionGroupInfo.prototype, 'priority', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('priority');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
				return new PermissionGroupInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('priority', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#descriptionRes
Object.defineProperty(PermissionGroupInfo.prototype, 'descriptionRes', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('descriptionRes');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
				return new PermissionGroupInfo(result);
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

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function loadDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#loadDescription(android.content.pm.PackageManager)}
 **/
PermissionGroupInfo.prototype.loadDescription = function() {
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
		if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
			return new PermissionGroupInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#toString()}
 **/
PermissionGroupInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
			return new PermissionGroupInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#describeContents()}
 **/
PermissionGroupInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
			return new PermissionGroupInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PermissionGroupInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
PermissionGroupInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.PermissionGroupInfo') {
			return new PermissionGroupInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PermissionGroupInfo;
