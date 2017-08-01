/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.ProviderInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.ProviderInfo
 * @extends android.content.pm.ComponentInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/ProviderInfo.html}
 **/
var ProviderInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.ProviderInfo')) {
		result = arguments[0];
	}
	else {
		result = ProviderInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.ComponentInfo');
ProviderInfo.prototype = Object.create(SuperClass.prototype);
ProviderInfo.prototype.constructor = ProviderInfo;

Object.defineProperty(ProviderInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ProviderInfo(this.$native.super);
	},
	enumerable: true
});

ProviderInfo.className = 'android.content.pm.ProviderInfo';
ProviderInfo.prototype.className = 'android.content.pm.ProviderInfo';

// class property
Object.defineProperty(ProviderInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.ProviderInfo');
	},
	enumerable: true,
	configurable: false
});


// Cast
ProviderInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ProviderInfo(Hyperloop.cast('android.content.pm.ProviderInfo', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/pm/ProviderInfo.html#FLAG_SINGLE_USER}
 */
ProviderInfo.FLAG_SINGLE_USER = 1073741824;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#CREATOR
Object.defineProperty(ProviderInfo, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#pathPermissions
Object.defineProperty(ProviderInfo.prototype, 'pathPermissions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('pathPermissions');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('pathPermissions', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#grantUriPermissions
Object.defineProperty(ProviderInfo.prototype, 'grantUriPermissions', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('grantUriPermissions');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('grantUriPermissions', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#authority
Object.defineProperty(ProviderInfo.prototype, 'authority', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('authority');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('authority', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#readPermission
Object.defineProperty(ProviderInfo.prototype, 'readPermission', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('readPermission');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('readPermission', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#flags
Object.defineProperty(ProviderInfo.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('flags');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#isSyncable
Object.defineProperty(ProviderInfo.prototype, 'isSyncable', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('isSyncable');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('isSyncable', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#multiprocess
Object.defineProperty(ProviderInfo.prototype, 'multiprocess', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('multiprocess');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('multiprocess', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#uriPermissionPatterns
Object.defineProperty(ProviderInfo.prototype, 'uriPermissionPatterns', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('uriPermissionPatterns');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('uriPermissionPatterns', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#writePermission
Object.defineProperty(ProviderInfo.prototype, 'writePermission', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('writePermission');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('writePermission', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ProviderInfo.html#initOrder
Object.defineProperty(ProviderInfo.prototype, 'initOrder', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('initOrder');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ProviderInfo') {
				return new ProviderInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('initOrder', newValue);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ProviderInfo.html#toString()}
 **/
ProviderInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.ProviderInfo') {
			return new ProviderInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ProviderInfo.html#dump(android.util.Printer, java.lang.String)}
 **/
ProviderInfo.prototype.dump = function() {
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
		if (result.apiName === 'android.content.pm.ProviderInfo') {
			return new ProviderInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ProviderInfo.html#describeContents()}
 **/
ProviderInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.ProviderInfo') {
			return new ProviderInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ProviderInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
ProviderInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.ProviderInfo') {
			return new ProviderInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ProviderInfo;
