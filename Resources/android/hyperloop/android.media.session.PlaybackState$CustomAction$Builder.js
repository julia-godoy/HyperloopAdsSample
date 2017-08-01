/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.PlaybackState$CustomAction$Builder
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.media.session.PlaybackState');

/**
 * @class android.media.session.PlaybackState$CustomAction$Builder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction$Builder.html}
 **/
var CustomAction$Builder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.session.PlaybackState$CustomAction$Builder')) {
		result = arguments[0];
	}
	else {
		result = CustomAction$Builder.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CustomAction$Builder.prototype = Object.create(SuperClass.prototype);
CustomAction$Builder.prototype.constructor = CustomAction$Builder;

Object.defineProperty(CustomAction$Builder.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CustomAction$Builder(this.$native.super);
	},
	enumerable: true
});

CustomAction$Builder.className = 'android.media.session.PlaybackState$CustomAction$Builder';
CustomAction$Builder.prototype.className = 'android.media.session.PlaybackState$CustomAction$Builder';

// class property
Object.defineProperty(CustomAction$Builder, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.session.PlaybackState$CustomAction$Builder');
	},
	enumerable: true,
	configurable: false
});


// Cast
CustomAction$Builder.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CustomAction$Builder(Hyperloop.cast('android.media.session.PlaybackState$CustomAction$Builder', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction$Builder.html#setExtras(android.os.Bundle)}
 **/
CustomAction$Builder.prototype.setExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$CustomAction$Builder') {
			return new CustomAction$Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function build
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction$Builder.html#build()}
 **/
CustomAction$Builder.prototype.build = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'build',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$CustomAction$Builder') {
			return new CustomAction$Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CustomAction$Builder;
