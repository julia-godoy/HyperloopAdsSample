/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.Loader$ForceLoadContentObserver
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.content.Loader');

/**
 * @class android.content.Loader$ForceLoadContentObserver
 * @extends android.database.ContentObserver 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/Loader.ForceLoadContentObserver.html}
 **/
var ForceLoadContentObserver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.Loader$ForceLoadContentObserver')) {
		result = arguments[0];
	}
	else {
		result = ForceLoadContentObserver.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.database.ContentObserver');
ForceLoadContentObserver.prototype = Object.create(SuperClass.prototype);
ForceLoadContentObserver.prototype.constructor = ForceLoadContentObserver;

Object.defineProperty(ForceLoadContentObserver.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ForceLoadContentObserver(this.$native.super);
	},
	enumerable: true
});

ForceLoadContentObserver.className = 'android.content.Loader$ForceLoadContentObserver';
ForceLoadContentObserver.prototype.className = 'android.content.Loader$ForceLoadContentObserver';

// class property
Object.defineProperty(ForceLoadContentObserver, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.Loader$ForceLoadContentObserver');
	},
	enumerable: true,
	configurable: false
});


// Cast
ForceLoadContentObserver.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ForceLoadContentObserver(Hyperloop.cast('android.content.Loader$ForceLoadContentObserver', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onChange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Loader.ForceLoadContentObserver.html#onChange(boolean)}
 **/
ForceLoadContentObserver.prototype.onChange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onChange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Loader$ForceLoadContentObserver') {
			return new ForceLoadContentObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deliverSelfNotifications
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/Loader.ForceLoadContentObserver.html#deliverSelfNotifications()}
 **/
ForceLoadContentObserver.prototype.deliverSelfNotifications = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deliverSelfNotifications',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.Loader$ForceLoadContentObserver') {
			return new ForceLoadContentObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ForceLoadContentObserver;
