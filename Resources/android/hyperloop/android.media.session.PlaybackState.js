/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.PlaybackState
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.media.session');

/**
 * @class android.media.session.PlaybackState
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html}
 **/
var PlaybackState = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.session.PlaybackState')) {
		result = arguments[0];
	}
	else {
		result = PlaybackState.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PlaybackState.prototype = Object.create(SuperClass.prototype);
PlaybackState.prototype.constructor = PlaybackState;

Object.defineProperty(PlaybackState.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PlaybackState(this.$native.super);
	},
	enumerable: true
});

PlaybackState.className = 'android.media.session.PlaybackState';
PlaybackState.prototype.className = 'android.media.session.PlaybackState';

// class property
Object.defineProperty(PlaybackState, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.session.PlaybackState');
	},
	enumerable: true,
	configurable: false
});


// Cast
PlaybackState.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PlaybackState(Hyperloop.cast('android.media.session.PlaybackState', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_CONNECTING}
 */
PlaybackState.STATE_CONNECTING = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_SKIP_TO_NEXT}
 */
PlaybackState.ACTION_SKIP_TO_NEXT = 32;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_ERROR}
 */
PlaybackState.STATE_ERROR = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#PLAYBACK_POSITION_UNKNOWN}
 */
PlaybackState.PLAYBACK_POSITION_UNKNOWN = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_SKIPPING_TO_PREVIOUS}
 */
PlaybackState.STATE_SKIPPING_TO_PREVIOUS = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_PLAYING}
 */
PlaybackState.STATE_PLAYING = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_BUFFERING}
 */
PlaybackState.STATE_BUFFERING = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PAUSE}
 */
PlaybackState.ACTION_PAUSE = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_SET_RATING}
 */
PlaybackState.ACTION_SET_RATING = 128;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_STOP}
 */
PlaybackState.ACTION_STOP = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_SEEK_TO}
 */
PlaybackState.ACTION_SEEK_TO = 256;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PLAY_FROM_SEARCH}
 */
PlaybackState.ACTION_PLAY_FROM_SEARCH = 2048;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_NONE}
 */
PlaybackState.STATE_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_FAST_FORWARDING}
 */
PlaybackState.STATE_FAST_FORWARDING = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_PAUSED}
 */
PlaybackState.STATE_PAUSED = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PLAY_PAUSE}
 */
PlaybackState.ACTION_PLAY_PAUSE = 512;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_SKIP_TO_PREVIOUS}
 */
PlaybackState.ACTION_SKIP_TO_PREVIOUS = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PLAY}
 */
PlaybackState.ACTION_PLAY = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_SKIPPING_TO_QUEUE_ITEM}
 */
PlaybackState.STATE_SKIPPING_TO_QUEUE_ITEM = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_REWINDING}
 */
PlaybackState.STATE_REWINDING = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_REWIND}
 */
PlaybackState.ACTION_REWIND = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_STOPPED}
 */
PlaybackState.STATE_STOPPED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_SKIP_TO_QUEUE_ITEM}
 */
PlaybackState.ACTION_SKIP_TO_QUEUE_ITEM = 4096;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PLAY_FROM_URI}
 */
PlaybackState.ACTION_PLAY_FROM_URI = 8192;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_PLAY_FROM_MEDIA_ID}
 */
PlaybackState.ACTION_PLAY_FROM_MEDIA_ID = 1024;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#ACTION_FAST_FORWARD}
 */
PlaybackState.ACTION_FAST_FORWARD = 64;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#STATE_SKIPPING_TO_NEXT}
 */
PlaybackState.STATE_SKIPPING_TO_NEXT = 10;

// Inner classes
Object.defineProperty(PlaybackState, 'Builder', {
	get: function() {
		return require('android.media.session.PlaybackState$Builder');
	},
	enumerable: true
});
Object.defineProperty(PlaybackState, 'CustomAction$Builder', {
	get: function() {
		return require('android.media.session.PlaybackState$CustomAction$Builder');
	},
	enumerable: true
});
Object.defineProperty(PlaybackState, 'CustomAction', {
	get: function() {
		return require('android.media.session.PlaybackState$CustomAction');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/media/session/PlaybackState.html#CREATOR
Object.defineProperty(PlaybackState, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.media.session.PlaybackState') {
				return new PlaybackState(result);
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
 * @function getLastPositionUpdateTime
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getLastPositionUpdateTime()}
 **/
PlaybackState.prototype.getLastPositionUpdateTime = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLastPositionUpdateTime',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBufferedPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getBufferedPosition()}
 **/
PlaybackState.prototype.getBufferedPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBufferedPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getActions()}
 **/
PlaybackState.prototype.getActions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActiveQueueItemId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getActiveQueueItemId()}
 **/
PlaybackState.prototype.getActiveQueueItemId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActiveQueueItemId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#describeContents()}
 **/
PlaybackState.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCustomActions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getCustomActions()}
 **/
PlaybackState.prototype.getCustomActions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCustomActions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getState()}
 **/
PlaybackState.prototype.getState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getPosition()}
 **/
PlaybackState.prototype.getPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#toString()}
 **/
PlaybackState.prototype.toString = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPlaybackSpeed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getPlaybackSpeed()}
 **/
PlaybackState.prototype.getPlaybackSpeed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPlaybackSpeed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getExtras()}
 **/
PlaybackState.prototype.getExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#writeToParcel(android.os.Parcel, int)}
 **/
PlaybackState.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getErrorMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.html#getErrorMessage()}
 **/
PlaybackState.prototype.getErrorMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getErrorMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState') {
			return new PlaybackState(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PlaybackState;
