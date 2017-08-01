/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PackageInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.PackageInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInfo.html}
 **/
var PackageInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.PackageInfo')) {
		result = arguments[0];
	}
	else {
		result = PackageInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PackageInfo.prototype = Object.create(SuperClass.prototype);
PackageInfo.prototype.constructor = PackageInfo;

Object.defineProperty(PackageInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PackageInfo(this.$native.super);
	},
	enumerable: true
});

PackageInfo.className = 'android.content.pm.PackageInfo';
PackageInfo.prototype.className = 'android.content.pm.PackageInfo';

// class property
Object.defineProperty(PackageInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.PackageInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PackageInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.PackageInfo');

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
	SubClass.prototype = Object.create(PackageInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PackageInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PackageInfo(Hyperloop.cast('android.content.pm.PackageInfo', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInfo.html#INSTALL_LOCATION_PREFER_EXTERNAL}
 */
PackageInfo.INSTALL_LOCATION_PREFER_EXTERNAL = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInfo.html#INSTALL_LOCATION_INTERNAL_ONLY}
 */
PackageInfo.INSTALL_LOCATION_INTERNAL_ONLY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInfo.html#REQUESTED_PERMISSION_GRANTED}
 */
PackageInfo.REQUESTED_PERMISSION_GRANTED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInfo.html#INSTALL_LOCATION_AUTO}
 */
PackageInfo.INSTALL_LOCATION_AUTO = 0;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#CREATOR
Object.defineProperty(PackageInfo, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#gids
Object.defineProperty(PackageInfo.prototype, 'gids', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('gids');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('gids', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#configPreferences
Object.defineProperty(PackageInfo.prototype, 'configPreferences', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('configPreferences');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('configPreferences', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#splitNames
Object.defineProperty(PackageInfo.prototype, 'splitNames', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('splitNames');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('splitNames', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#versionName
Object.defineProperty(PackageInfo.prototype, 'versionName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('versionName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('versionName', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#signatures
Object.defineProperty(PackageInfo.prototype, 'signatures', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('signatures');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('signatures', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#firstInstallTime
Object.defineProperty(PackageInfo.prototype, 'firstInstallTime', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('firstInstallTime');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('firstInstallTime', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#baseRevisionCode
Object.defineProperty(PackageInfo.prototype, 'baseRevisionCode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('baseRevisionCode');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('baseRevisionCode', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#sharedUserId
Object.defineProperty(PackageInfo.prototype, 'sharedUserId', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('sharedUserId');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('sharedUserId', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#featureGroups
Object.defineProperty(PackageInfo.prototype, 'featureGroups', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('featureGroups');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('featureGroups', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#receivers
Object.defineProperty(PackageInfo.prototype, 'receivers', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('receivers');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('receivers', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#permissions
Object.defineProperty(PackageInfo.prototype, 'permissions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('permissions');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('permissions', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#instrumentation
Object.defineProperty(PackageInfo.prototype, 'instrumentation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('instrumentation');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('instrumentation', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#packageName
Object.defineProperty(PackageInfo.prototype, 'packageName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('packageName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#installLocation
Object.defineProperty(PackageInfo.prototype, 'installLocation', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('installLocation');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('installLocation', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#services
Object.defineProperty(PackageInfo.prototype, 'services', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('services');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('services', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#splitRevisionCodes
Object.defineProperty(PackageInfo.prototype, 'splitRevisionCodes', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('splitRevisionCodes');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('splitRevisionCodes', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#versionCode
Object.defineProperty(PackageInfo.prototype, 'versionCode', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('versionCode');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('versionCode', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#requestedPermissionsFlags
Object.defineProperty(PackageInfo.prototype, 'requestedPermissionsFlags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('requestedPermissionsFlags');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('requestedPermissionsFlags', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#sharedUserLabel
Object.defineProperty(PackageInfo.prototype, 'sharedUserLabel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('sharedUserLabel');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('sharedUserLabel', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#activities
Object.defineProperty(PackageInfo.prototype, 'activities', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('activities');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('activities', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#reqFeatures
Object.defineProperty(PackageInfo.prototype, 'reqFeatures', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('reqFeatures');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('reqFeatures', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#requestedPermissions
Object.defineProperty(PackageInfo.prototype, 'requestedPermissions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('requestedPermissions');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('requestedPermissions', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#applicationInfo
Object.defineProperty(PackageInfo.prototype, 'applicationInfo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('applicationInfo');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('applicationInfo', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#providers
Object.defineProperty(PackageInfo.prototype, 'providers', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('providers');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('providers', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageInfo.html#lastUpdateTime
Object.defineProperty(PackageInfo.prototype, 'lastUpdateTime', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('lastUpdateTime');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageInfo') {
				return new PackageInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('lastUpdateTime', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInfo.html#toString()}
 **/
PackageInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.PackageInfo') {
			return new PackageInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInfo.html#describeContents()}
 **/
PackageInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.PackageInfo') {
			return new PackageInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
PackageInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.PackageInfo') {
			return new PackageInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PackageInfo;
