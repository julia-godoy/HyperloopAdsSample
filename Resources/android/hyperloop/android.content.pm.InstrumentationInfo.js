/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.InstrumentationInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.InstrumentationInfo
 * @extends android.content.pm.PackageItemInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html}
 **/
var InstrumentationInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.InstrumentationInfo')) {
		result = arguments[0];
	}
	else {
		result = InstrumentationInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.PackageItemInfo');
InstrumentationInfo.prototype = Object.create(SuperClass.prototype);
InstrumentationInfo.prototype.constructor = InstrumentationInfo;

Object.defineProperty(InstrumentationInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new InstrumentationInfo(this.$native.super);
	},
	enumerable: true
});

InstrumentationInfo.className = 'android.content.pm.InstrumentationInfo';
InstrumentationInfo.prototype.className = 'android.content.pm.InstrumentationInfo';

// class property
Object.defineProperty(InstrumentationInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.InstrumentationInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
InstrumentationInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.InstrumentationInfo');

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
	SubClass.prototype = Object.create(InstrumentationInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
InstrumentationInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new InstrumentationInfo(Hyperloop.cast('android.content.pm.InstrumentationInfo', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#CREATOR
Object.defineProperty(InstrumentationInfo, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new InstrumentationInfo(result);
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
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#sourceDir
Object.defineProperty(InstrumentationInfo.prototype, 'sourceDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('sourceDir');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new InstrumentationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('sourceDir', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#splitPublicSourceDirs
Object.defineProperty(InstrumentationInfo.prototype, 'splitPublicSourceDirs', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('splitPublicSourceDirs');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new InstrumentationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('splitPublicSourceDirs', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#splitSourceDirs
Object.defineProperty(InstrumentationInfo.prototype, 'splitSourceDirs', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('splitSourceDirs');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new InstrumentationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('splitSourceDirs', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#dataDir
Object.defineProperty(InstrumentationInfo.prototype, 'dataDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('dataDir');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new InstrumentationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('dataDir', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#publicSourceDir
Object.defineProperty(InstrumentationInfo.prototype, 'publicSourceDir', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('publicSourceDir');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new InstrumentationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('publicSourceDir', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#handleProfiling
Object.defineProperty(InstrumentationInfo.prototype, 'handleProfiling', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('handleProfiling');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new InstrumentationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('handleProfiling', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#functionalTest
Object.defineProperty(InstrumentationInfo.prototype, 'functionalTest', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('functionalTest');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new InstrumentationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('functionalTest', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#targetPackage
Object.defineProperty(InstrumentationInfo.prototype, 'targetPackage', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('targetPackage');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.InstrumentationInfo') {
				return new InstrumentationInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('targetPackage', newValue);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#toString()}
 **/
InstrumentationInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.InstrumentationInfo') {
			return new InstrumentationInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#describeContents()}
 **/
InstrumentationInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.InstrumentationInfo') {
			return new InstrumentationInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/InstrumentationInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
InstrumentationInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.InstrumentationInfo') {
			return new InstrumentationInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = InstrumentationInfo;
