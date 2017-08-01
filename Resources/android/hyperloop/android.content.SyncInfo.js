/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.SyncInfo
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.SyncInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/SyncInfo.html}
 **/
var SyncInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.SyncInfo')) {
		result = arguments[0];
	}
	else {
		result = SyncInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
SyncInfo.prototype = Object.create(SuperClass.prototype);
SyncInfo.prototype.constructor = SyncInfo;

Object.defineProperty(SyncInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SyncInfo(this.$native.super);
	},
	enumerable: true
});

SyncInfo.className = 'android.content.SyncInfo';
SyncInfo.prototype.className = 'android.content.SyncInfo';

// class property
Object.defineProperty(SyncInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.SyncInfo');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SyncInfo.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.SyncInfo');

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
	SubClass.prototype = Object.create(SyncInfo.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SyncInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SyncInfo(Hyperloop.cast('android.content.SyncInfo', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/android/content/SyncInfo.html#authority
Object.defineProperty(SyncInfo.prototype, 'authority', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('authority');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.SyncInfo') {
				return new SyncInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/SyncInfo.html#startTime
Object.defineProperty(SyncInfo.prototype, 'startTime', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('startTime');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.SyncInfo') {
				return new SyncInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/content/SyncInfo.html#account
Object.defineProperty(SyncInfo.prototype, 'account', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('account');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.SyncInfo') {
				return new SyncInfo(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncInfo.html#describeContents()}
 **/
SyncInfo.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.SyncInfo') {
			return new SyncInfo(result);
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
 * @see {@link http://developer.android.com/reference/android/content/SyncInfo.html#writeToParcel(android.os.Parcel, int)}
 **/
SyncInfo.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.SyncInfo') {
			return new SyncInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SyncInfo;
