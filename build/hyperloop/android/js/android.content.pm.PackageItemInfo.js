/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PackageItemInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.PackageItemInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.html}
 **/
var PackageItemInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.PackageItemInfo')) {
		result = arguments[0];
	}
	else {
		result = PackageItemInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PackageItemInfo.prototype = Object.create(SuperClass.prototype);
PackageItemInfo.prototype.constructor = PackageItemInfo;

Object.defineProperty(PackageItemInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PackageItemInfo(this.$native.super);
	},
	enumerable: true
});

PackageItemInfo.className = 'android.content.pm.PackageItemInfo';
PackageItemInfo.prototype.className = 'android.content.pm.PackageItemInfo';

// class property
Object.defineProperty(PackageItemInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.PackageItemInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PackageItemInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.PackageItemInfo');

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
	SubClass.prototype = Object.create(PackageItemInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PackageItemInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PackageItemInfo(Hyperloop.cast('android.content.pm.PackageItemInfo', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(PackageItemInfo, 'DisplayNameComparator', {
	get: function() {
		return require('android.content.pm.PackageItemInfo$DisplayNameComparator');
	},
	enumerable: true
});

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#metaData
Object.defineProperty(PackageItemInfo.prototype, 'metaData', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('metaData');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageItemInfo') {
				return new PackageItemInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('metaData', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#icon
Object.defineProperty(PackageItemInfo.prototype, 'icon', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('icon');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageItemInfo') {
				return new PackageItemInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('icon', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#name
Object.defineProperty(PackageItemInfo.prototype, 'name', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('name');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageItemInfo') {
				return new PackageItemInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('name', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#banner
Object.defineProperty(PackageItemInfo.prototype, 'banner', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('banner');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageItemInfo') {
				return new PackageItemInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('banner', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#logo
Object.defineProperty(PackageItemInfo.prototype, 'logo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('logo');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageItemInfo') {
				return new PackageItemInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('logo', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#labelRes
Object.defineProperty(PackageItemInfo.prototype, 'labelRes', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('labelRes');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageItemInfo') {
				return new PackageItemInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('labelRes', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#packageName
Object.defineProperty(PackageItemInfo.prototype, 'packageName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('packageName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageItemInfo') {
				return new PackageItemInfo(result);
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
// http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#nonLocalizedLabel
Object.defineProperty(PackageItemInfo.prototype, 'nonLocalizedLabel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('nonLocalizedLabel');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.PackageItemInfo') {
				return new PackageItemInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('nonLocalizedLabel', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function loadLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#loadLabel(android.content.pm.PackageManager)}
 **/
PackageItemInfo.prototype.loadLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageItemInfo') {
			return new PackageItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadXmlMetaData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#loadXmlMetaData(android.content.pm.PackageManager, java.lang.String)}
 **/
PackageItemInfo.prototype.loadXmlMetaData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadXmlMetaData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageItemInfo') {
			return new PackageItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadBanner
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#loadBanner(android.content.pm.PackageManager)}
 **/
PackageItemInfo.prototype.loadBanner = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadBanner',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageItemInfo') {
			return new PackageItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#loadIcon(android.content.pm.PackageManager)}
 **/
PackageItemInfo.prototype.loadIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageItemInfo') {
			return new PackageItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dumpBack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#dumpBack(android.util.Printer, java.lang.String)}
 **/
PackageItemInfo.prototype.dumpBack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dumpBack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageItemInfo') {
			return new PackageItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadUnbadgedIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#loadUnbadgedIcon(android.content.pm.PackageManager)}
 **/
PackageItemInfo.prototype.loadUnbadgedIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadUnbadgedIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageItemInfo') {
			return new PackageItemInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
PackageItemInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.PackageItemInfo') {
			return new PackageItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadLogo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#loadLogo(android.content.pm.PackageManager)}
 **/
PackageItemInfo.prototype.loadLogo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadLogo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageItemInfo') {
			return new PackageItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dumpFront
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.html#dumpFront(android.util.Printer, java.lang.String)}
 **/
PackageItemInfo.prototype.dumpFront = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dumpFront',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageItemInfo') {
			return new PackageItemInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PackageItemInfo;
