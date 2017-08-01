/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.SyncRequest
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.SyncRequest
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.html}
 **/
var SyncRequest = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.SyncRequest')) {
		result = arguments[0];
	}
	else {
		result = SyncRequest.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
SyncRequest.prototype = Object.create(SuperClass.prototype);
SyncRequest.prototype.constructor = SyncRequest;

Object.defineProperty(SyncRequest.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SyncRequest(this.$native.super);
	},
	enumerable: true
});

SyncRequest.className = 'android.content.SyncRequest';
SyncRequest.prototype.className = 'android.content.SyncRequest';

// class property
Object.defineProperty(SyncRequest, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.SyncRequest');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SyncRequest.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.SyncRequest');

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
	SubClass.prototype = Object.create(SyncRequest.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SyncRequest.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SyncRequest(Hyperloop.cast('android.content.SyncRequest', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(SyncRequest, 'Builder', {
	get: function() {
		return require('android.content.SyncRequest$Builder');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/content/SyncRequest.html#CREATOR
Object.defineProperty(SyncRequest, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.SyncRequest') {
				return new SyncRequest(result);
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

// Instance methods
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.html#describeContents()}
 **/
SyncRequest.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.SyncRequest') {
			return new SyncRequest(result);
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
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.html#writeToParcel(android.os.Parcel, int)}
 **/
SyncRequest.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.SyncRequest') {
			return new SyncRequest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SyncRequest;
