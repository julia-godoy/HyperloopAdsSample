/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.ResolveInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.ResolveInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html}
 **/
var ResolveInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.ResolveInfo')) {
		result = arguments[0];
	}
	else {
		result = ResolveInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ResolveInfo.prototype = Object.create(SuperClass.prototype);
ResolveInfo.prototype.constructor = ResolveInfo;

Object.defineProperty(ResolveInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ResolveInfo(this.$native.super);
	},
	enumerable: true
});

ResolveInfo.className = 'android.content.pm.ResolveInfo';
ResolveInfo.prototype.className = 'android.content.pm.ResolveInfo';

// class property
Object.defineProperty(ResolveInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.ResolveInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ResolveInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.ResolveInfo');

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
	SubClass.prototype = Object.create(ResolveInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ResolveInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ResolveInfo(Hyperloop.cast('android.content.pm.ResolveInfo', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(ResolveInfo, 'DisplayNameComparator', {
	get: function() {
		return require('android.content.pm.ResolveInfo$DisplayNameComparator');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#CREATOR
Object.defineProperty(ResolveInfo, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#resolvePackageName
Object.defineProperty(ResolveInfo.prototype, 'resolvePackageName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('resolvePackageName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('resolvePackageName', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#icon
Object.defineProperty(ResolveInfo.prototype, 'icon', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('icon');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#match
Object.defineProperty(ResolveInfo.prototype, 'match', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('match');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('match', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#serviceInfo
Object.defineProperty(ResolveInfo.prototype, 'serviceInfo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('serviceInfo');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('serviceInfo', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#priority
Object.defineProperty(ResolveInfo.prototype, 'priority', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('priority');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#activityInfo
Object.defineProperty(ResolveInfo.prototype, 'activityInfo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('activityInfo');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('activityInfo', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#filter
Object.defineProperty(ResolveInfo.prototype, 'filter', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('filter');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('filter', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#isDefault
Object.defineProperty(ResolveInfo.prototype, 'isDefault', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('isDefault');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('isDefault', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#preferredOrder
Object.defineProperty(ResolveInfo.prototype, 'preferredOrder', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('preferredOrder');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('preferredOrder', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#specificIndex
Object.defineProperty(ResolveInfo.prototype, 'specificIndex', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('specificIndex');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('specificIndex', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#labelRes
Object.defineProperty(ResolveInfo.prototype, 'labelRes', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('labelRes');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#nonLocalizedLabel
Object.defineProperty(ResolveInfo.prototype, 'nonLocalizedLabel', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('nonLocalizedLabel');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ResolveInfo.html#providerInfo
Object.defineProperty(ResolveInfo.prototype, 'providerInfo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('providerInfo');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ResolveInfo') {
				return new ResolveInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('providerInfo', newValue);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#loadLabel(android.content.pm.PackageManager)}
 **/
ResolveInfo.prototype.loadLabel = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new ResolveInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#loadIcon(android.content.pm.PackageManager)}
 **/
ResolveInfo.prototype.loadIcon = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new ResolveInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#toString()}
 **/
ResolveInfo.prototype.toString = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new ResolveInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIconResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#getIconResource()}
 **/
ResolveInfo.prototype.getIconResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIconResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new ResolveInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#dump(android.util.Printer, java.lang.String)}
 **/
ResolveInfo.prototype.dump = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new ResolveInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#describeContents()}
 **/
ResolveInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new ResolveInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ResolveInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
ResolveInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.ResolveInfo') {
			return new ResolveInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ResolveInfo;
