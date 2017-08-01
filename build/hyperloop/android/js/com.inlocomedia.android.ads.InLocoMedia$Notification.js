/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.ads.InLocoMedia$Notification
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('com.inlocomedia.android.ads.InLocoMedia');

/**
 * @class com.inlocomedia.android.ads.InLocoMedia$Notification
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.Notification.html}
 **/
var Notification = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.ads.InLocoMedia$Notification')) {
		result = arguments[0];
	}
	else {
		result = Notification.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Notification.prototype = Object.create(SuperClass.prototype);
Notification.prototype.constructor = Notification;

Object.defineProperty(Notification.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Notification(this.$native.super);
	},
	enumerable: true
});

Notification.className = 'com.inlocomedia.android.ads.InLocoMedia$Notification';
Notification.prototype.className = 'com.inlocomedia.android.ads.InLocoMedia$Notification';

// class property
Object.defineProperty(Notification, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.ads.InLocoMedia$Notification');
	},
	enumerable: true,
	configurable: false
});


// Cast
Notification.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Notification(Hyperloop.cast('com.inlocomedia.android.ads.InLocoMedia$Notification', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function setEnabled
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.Notification.html#setEnabled(android.app.Activity, boolean)}
 **/
Notification.setEnabled = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setEnabled',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia$Notification') {
			return new Notification(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getById
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.Notification.html#getById(android.content.Context, java.lang.String)}
 **/
Notification.getById = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getById',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia$Notification') {
			return new Notification(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAdRequest
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.Notification.html#setAdRequest(android.content.Context, com.inlocomedia.android.ads.notification.NotificationAdRequest)}
 **/
Notification.setAdRequest = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setAdRequest',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia$Notification') {
			return new Notification(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.Notification.html#isEnabled(android.content.Context)}
 **/
Notification.isEnabled = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isEnabled',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia$Notification') {
			return new Notification(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function showById
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.Notification.html#showById(android.content.Context, java.lang.String)}
 **/
Notification.showById = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'showById',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia$Notification') {
			return new Notification(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function discardById
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/ads/InLocoMedia.Notification.html#discardById(android.content.Context, java.lang.String)}
 **/
Notification.discardById = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'discardById',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.ads.InLocoMedia$Notification') {
			return new Notification(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Notification;
