/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.location.LocationError
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.location');

/**
 * @class com.inlocomedia.android.location.LocationError
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html}
 **/
var LocationError = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.location.LocationError')) {
		result = arguments[0];
	}
	else {
		result = LocationError.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
LocationError.prototype = Object.create(SuperClass.prototype);
LocationError.prototype.constructor = LocationError;

Object.defineProperty(LocationError.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new LocationError(this.$native.super);
	},
	enumerable: true
});

LocationError.className = 'com.inlocomedia.android.location.LocationError';
LocationError.prototype.className = 'com.inlocomedia.android.location.LocationError';

// class property
Object.defineProperty(LocationError, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.location.LocationError');
	},
	enumerable: true,
	configurable: false
});


// Cast
LocationError.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new LocationError(Hyperloop.cast('com.inlocomedia.android.location.LocationError', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#GPS_UNAVAILABLE
Object.defineProperty(LocationError, 'GPS_UNAVAILABLE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('GPS_UNAVAILABLE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
				return new LocationError(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#UNAUTHORIZED
Object.defineProperty(LocationError, 'UNAUTHORIZED', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('UNAUTHORIZED');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
				return new LocationError(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#INTERNAL_ERROR
Object.defineProperty(LocationError, 'INTERNAL_ERROR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('INTERNAL_ERROR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
				return new LocationError(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#UNAVAILABLE
Object.defineProperty(LocationError, 'UNAVAILABLE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('UNAVAILABLE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
				return new LocationError(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#NETWORK_UNAVAILABLE
Object.defineProperty(LocationError, 'NETWORK_UNAVAILABLE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('NETWORK_UNAVAILABLE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
				return new LocationError(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#WIFI_UNAVAILABLE
Object.defineProperty(LocationError, 'WIFI_UNAVAILABLE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('WIFI_UNAVAILABLE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
				return new LocationError(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#TEMPORARY_UNAVAILABLE
Object.defineProperty(LocationError, 'TEMPORARY_UNAVAILABLE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TEMPORARY_UNAVAILABLE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
				return new LocationError(result);
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
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#valueOf(java.lang.String)}
 **/
LocationError.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
			return new LocationError(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#values()}
 **/
LocationError.values = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
			return new LocationError(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#getValue()}
 **/
LocationError.prototype.getValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
			return new LocationError(result);
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
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/LocationError.html#toString()}
 **/
LocationError.prototype.toString = function() {
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
		if (result.apiName === 'com.inlocomedia.android.location.LocationError') {
			return new LocationError(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = LocationError;
