/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.ads.InLocoMedia
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.ads');

/**
 * @class com.inlocomedia.android.ads.InLocoMedia
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html}
 **/
var InLocoMedia = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.ads.InLocoMedia')) {
		result = arguments[0];
	}
	else {
		result = InLocoMedia.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
InLocoMedia.prototype = Object.create(SuperClass.prototype);
InLocoMedia.prototype.constructor = InLocoMedia;

Object.defineProperty(InLocoMedia.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new InLocoMedia(this.$native.super);
	},
	enumerable: true
});

InLocoMedia.className = 'com.inlocomedia.android.ads.InLocoMedia';
InLocoMedia.prototype.className = 'com.inlocomedia.android.ads.InLocoMedia';

// class property
Object.defineProperty(InLocoMedia, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.ads.InLocoMedia');
	},
	enumerable: true,
	configurable: false
});


// Cast
InLocoMedia.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new InLocoMedia(Hyperloop.cast('com.inlocomedia.android.ads.InLocoMedia', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(InLocoMedia, 'Notification', {
	get: function() {
		return require('com.inlocomedia.android.ads.InLocoMedia$Notification');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function init
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#init(android.content.Context, com.inlocomedia.android.ads.InLocoMediaOptions)}
 **/
InLocoMedia.init = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'init',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLocationTrackingEnabled
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#isLocationTrackingEnabled(android.content.Context)}
 **/
InLocoMedia.isLocationTrackingEnabled = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isLocationTrackingEnabled',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeLocationUpdates
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#removeLocationUpdates(android.content.Context, com.inlocomedia.android.location.listeners.LocationListener)}
 **/
InLocoMedia.removeLocationUpdates = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'removeLocationUpdates',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestStores
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestStores(android.content.Context, java.lang.String, java.util.Locale, com.inlocomedia.android.location.core.communication.listeners.StoresRequestListener)}
 **/
InLocoMedia.requestStores = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestStores',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestLocation
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestLocation(android.content.Context, com.inlocomedia.android.location.listeners.LocationListener)}
 **/
InLocoMedia.requestLocation = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestLocation',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestRetailImageThumbNail
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestRetailImageThumbNail(android.content.Context, java.lang.String, com.inlocomedia.android.core.communication.listeners.ImageRequestListener)}
 **/
InLocoMedia.requestRetailImageThumbNail = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestRetailImageThumbNail',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestLocationUpdates
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestLocationUpdates(android.content.Context, com.inlocomedia.android.location.listeners.LocationListener)}
 **/
InLocoMedia.requestLocationUpdates = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestLocationUpdates',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestRetailImage
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestRetailImage(android.content.Context, java.lang.String, com.inlocomedia.android.core.communication.listeners.ImageRequestListener)}
 **/
InLocoMedia.requestRetailImage = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestRetailImage',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestPermissions
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestPermissions(android.app.Activity, java.lang.String[], boolean, com.inlocomedia.android.core.permissions.PermissionsListener)}
 **/
InLocoMedia.requestPermissions = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestPermissions',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestMapImage
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestMapImage(android.content.Context, java.lang.String, java.lang.String, com.inlocomedia.android.location.core.communication.listeners.RetailMapImageRequestListener)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestMapImage(android.content.Context, java.lang.String, java.lang.String, boolean, com.inlocomedia.android.location.core.communication.listeners.RetailMapImageRequestListener)}
 **/
InLocoMedia.requestMapImage = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestMapImage',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestRetails
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestRetails(android.content.Context, com.inlocomedia.android.location.core.communication.listeners.RetailsRequestListener)}
 **/
InLocoMedia.requestRetails = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestRetails',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestMaps
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestMaps(android.content.Context, java.lang.String, com.inlocomedia.android.location.core.communication.listeners.RetailMapsRequestListener)}
 **/
InLocoMedia.requestMaps = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestMaps',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeMapsLocationUpdates
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#removeMapsLocationUpdates(android.content.Context, com.inlocomedia.android.location.listeners.LocationListener)}
 **/
InLocoMedia.removeMapsLocationUpdates = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'removeMapsLocationUpdates',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestLocationPermission
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestLocationPermission(android.app.Activity, boolean)}
 **/
InLocoMedia.requestLocationPermission = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestLocationPermission',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestCoarseLocationPermission
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestCoarseLocationPermission(android.app.Activity, boolean)}
 **/
InLocoMedia.requestCoarseLocationPermission = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestCoarseLocationPermission',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocationTrackingEnabled
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#setLocationTrackingEnabled(android.content.Context, boolean)}
 **/
InLocoMedia.setLocationTrackingEnabled = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setLocationTrackingEnabled',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestMapsLocationUpdates
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestMapsLocationUpdates(android.content.Context, com.inlocomedia.android.location.listeners.LocationListener)}
 **/
InLocoMedia.requestMapsLocationUpdates = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestMapsLocationUpdates',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function requestMapsLocation
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.html#requestMapsLocation(android.content.Context, com.inlocomedia.android.location.listeners.LocationListener)}
 **/
InLocoMedia.requestMapsLocation = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'requestMapsLocation',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia') {
			return new InLocoMedia(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = InLocoMedia;
