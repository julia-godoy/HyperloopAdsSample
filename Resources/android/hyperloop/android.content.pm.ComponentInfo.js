/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.ComponentInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content.pm');

/**
 * @class android.content.pm.ComponentInfo
 * @extends android.content.pm.PackageItemInfo 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html}
 **/
var ComponentInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.ComponentInfo')) {
		result = arguments[0];
	}
	else {
		result = ComponentInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.content.pm.PackageItemInfo');
ComponentInfo.prototype = Object.create(SuperClass.prototype);
ComponentInfo.prototype.constructor = ComponentInfo;

Object.defineProperty(ComponentInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ComponentInfo(this.$native.super);
	},
	enumerable: true
});

ComponentInfo.className = 'android.content.pm.ComponentInfo';
ComponentInfo.prototype.className = 'android.content.pm.ComponentInfo';

// class property
Object.defineProperty(ComponentInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.ComponentInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ComponentInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.ComponentInfo');

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
	SubClass.prototype = Object.create(ComponentInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ComponentInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ComponentInfo(Hyperloop.cast('android.content.pm.ComponentInfo', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/content/pm/ComponentInfo.html#exported
Object.defineProperty(ComponentInfo.prototype, 'exported', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('exported');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ComponentInfo') {
				return new ComponentInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('exported', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ComponentInfo.html#processName
Object.defineProperty(ComponentInfo.prototype, 'processName', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('processName');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ComponentInfo') {
				return new ComponentInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('processName', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ComponentInfo.html#applicationInfo
Object.defineProperty(ComponentInfo.prototype, 'applicationInfo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('applicationInfo');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ComponentInfo') {
				return new ComponentInfo(result);
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
// http://developer.android.com/reference/android/content/pm/ComponentInfo.html#enabled
Object.defineProperty(ComponentInfo.prototype, 'enabled', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('enabled');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ComponentInfo') {
				return new ComponentInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('enabled', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/pm/ComponentInfo.html#descriptionRes
Object.defineProperty(ComponentInfo.prototype, 'descriptionRes', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('descriptionRes');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.pm.ComponentInfo') {
				return new ComponentInfo(result);
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
 * @function loadLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#loadLabel(android.content.pm.PackageManager)}
 **/
ComponentInfo.prototype.loadLabel = function() {
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
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLogoResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#getLogoResource()}
 **/
ComponentInfo.prototype.getLogoResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLogoResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new ComponentInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#dumpBack(android.util.Printer, java.lang.String)}
 **/
ComponentInfo.prototype.dumpBack = function() {
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
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#isEnabled()}
 **/
ComponentInfo.prototype.isEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBannerResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#getBannerResource()}
 **/
ComponentInfo.prototype.getBannerResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBannerResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new ComponentInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#getIconResource()}
 **/
ComponentInfo.prototype.getIconResource = function() {
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
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new ComponentInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
ComponentInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new ComponentInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/pm/ComponentInfo.html#dumpFront(android.util.Printer, java.lang.String)}
 **/
ComponentInfo.prototype.dumpFront = function() {
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
		if (result.apiName === 'android.content.pm.ComponentInfo') {
			return new ComponentInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ComponentInfo;
