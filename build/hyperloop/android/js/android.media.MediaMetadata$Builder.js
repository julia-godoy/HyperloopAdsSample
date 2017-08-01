/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.MediaMetadata$Builder
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.media.MediaMetadata');

/**
 * @class android.media.MediaMetadata$Builder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.Builder.html}
 **/
var Builder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.MediaMetadata$Builder')) {
		result = arguments[0];
	}
	else {
		result = Builder.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Builder.prototype = Object.create(SuperClass.prototype);
Builder.prototype.constructor = Builder;

Object.defineProperty(Builder.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Builder(this.$native.super);
	},
	enumerable: true
});

Builder.className = 'android.media.MediaMetadata$Builder';
Builder.prototype.className = 'android.media.MediaMetadata$Builder';

// class property
Object.defineProperty(Builder, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.MediaMetadata$Builder');
	},
	enumerable: true,
	configurable: false
});


// Cast
Builder.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Builder(Hyperloop.cast('android.media.MediaMetadata$Builder', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function putBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.Builder.html#putBitmap(java.lang.String, android.graphics.Bitmap)}
 **/
Builder.prototype.putBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata$Builder') {
			return new Builder(result);
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
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.Builder.html#build()}
 **/
Builder.prototype.build = function() {
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
		if (result.apiName === 'android.media.MediaMetadata$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.Builder.html#putText(java.lang.String, java.lang.CharSequence)}
 **/
Builder.prototype.putText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.Builder.html#putString(java.lang.String, java.lang.String)}
 **/
Builder.prototype.putString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putRating
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.Builder.html#putRating(java.lang.String, android.media.Rating)}
 **/
Builder.prototype.putRating = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putRating',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.Builder.html#putLong(java.lang.String, long)}
 **/
Builder.prototype.putLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Builder;
