/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.MediaController$PlaybackInfo
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.media.session.MediaController');

/**
 * @class android.media.session.MediaController$PlaybackInfo
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html}
 **/
var PlaybackInfo = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.session.MediaController$PlaybackInfo')) {
		result = arguments[0];
	}
	else {
		result = PlaybackInfo.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PlaybackInfo.prototype = Object.create(SuperClass.prototype);
PlaybackInfo.prototype.constructor = PlaybackInfo;

Object.defineProperty(PlaybackInfo.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PlaybackInfo(this.$native.super);
	},
	enumerable: true
});

PlaybackInfo.className = 'android.media.session.MediaController$PlaybackInfo';
PlaybackInfo.prototype.className = 'android.media.session.MediaController$PlaybackInfo';

// class property
Object.defineProperty(PlaybackInfo, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.session.MediaController$PlaybackInfo');
	},
	enumerable: true,
	configurable: false
});


// Cast
PlaybackInfo.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PlaybackInfo(Hyperloop.cast('android.media.session.MediaController$PlaybackInfo', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#PLAYBACK_TYPE_LOCAL}
 */
PlaybackInfo.PLAYBACK_TYPE_LOCAL = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#PLAYBACK_TYPE_REMOTE}
 */
PlaybackInfo.PLAYBACK_TYPE_REMOTE = 2;

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getAudioAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#getAudioAttributes()}
 **/
PlaybackInfo.prototype.getAudioAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAudioAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$PlaybackInfo') {
			return new PlaybackInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPlaybackType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#getPlaybackType()}
 **/
PlaybackInfo.prototype.getPlaybackType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPlaybackType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$PlaybackInfo') {
			return new PlaybackInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaxVolume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#getMaxVolume()}
 **/
PlaybackInfo.prototype.getMaxVolume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaxVolume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$PlaybackInfo') {
			return new PlaybackInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCurrentVolume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#getCurrentVolume()}
 **/
PlaybackInfo.prototype.getCurrentVolume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCurrentVolume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$PlaybackInfo') {
			return new PlaybackInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVolumeControl
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.PlaybackInfo.html#getVolumeControl()}
 **/
PlaybackInfo.prototype.getVolumeControl = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVolumeControl',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$PlaybackInfo') {
			return new PlaybackInfo(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PlaybackInfo;
