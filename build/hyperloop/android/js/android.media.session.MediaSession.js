/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.MediaSession
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.media.session');

/**
 * @class android.media.session.MediaSession
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html}
 **/
var MediaSession = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.session.MediaSession')) {
		result = arguments[0];
	}
	else {
		result = MediaSession.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
MediaSession.prototype = Object.create(SuperClass.prototype);
MediaSession.prototype.constructor = MediaSession;

Object.defineProperty(MediaSession.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MediaSession(this.$native.super);
	},
	enumerable: true
});

MediaSession.className = 'android.media.session.MediaSession';
MediaSession.prototype.className = 'android.media.session.MediaSession';

// class property
Object.defineProperty(MediaSession, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.session.MediaSession');
	},
	enumerable: true,
	configurable: false
});


// Cast
MediaSession.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MediaSession(Hyperloop.cast('android.media.session.MediaSession', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#FLAG_HANDLES_MEDIA_BUTTONS}
 */
MediaSession.FLAG_HANDLES_MEDIA_BUTTONS = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#FLAG_HANDLES_TRANSPORT_CONTROLS}
 */
MediaSession.FLAG_HANDLES_TRANSPORT_CONTROLS = 2;

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setPlaybackToRemote
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setPlaybackToRemote(android.media.VolumeProvider)}
 **/
MediaSession.prototype.setPlaybackToRemote = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPlaybackToRemote',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPlaybackToLocal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setPlaybackToLocal(android.media.AudioAttributes)}
 **/
MediaSession.prototype.setPlaybackToLocal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPlaybackToLocal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSessionActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setSessionActivity(android.app.PendingIntent)}
 **/
MediaSession.prototype.setSessionActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSessionActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendSessionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#sendSessionEvent(java.lang.String, android.os.Bundle)}
 **/
MediaSession.prototype.sendSessionEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendSessionEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function release
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#release()}
 **/
MediaSession.prototype.release = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'release',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setCallback(android.media.session.MediaSession$Callback)}
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setCallback(android.media.session.MediaSession$Callback, android.os.Handler)}
 **/
MediaSession.prototype.setCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isActive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#isActive()}
 **/
MediaSession.prototype.isActive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isActive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getController
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#getController()}
 **/
MediaSession.prototype.getController = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getController',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPlaybackState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setPlaybackState(android.media.session.PlaybackState)}
 **/
MediaSession.prototype.setPlaybackState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPlaybackState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMetadata
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setMetadata(android.media.MediaMetadata)}
 **/
MediaSession.prototype.setMetadata = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMetadata',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setExtras(android.os.Bundle)}
 **/
MediaSession.prototype.setExtras = function() {
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
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setActive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setActive(boolean)}
 **/
MediaSession.prototype.setActive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setActive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMediaButtonReceiver
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setMediaButtonReceiver(android.app.PendingIntent)}
 **/
MediaSession.prototype.setMediaButtonReceiver = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMediaButtonReceiver',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setQueue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setQueue(java.util.List)}
 **/
MediaSession.prototype.setQueue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setQueue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSessionToken
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#getSessionToken()}
 **/
MediaSession.prototype.getSessionToken = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSessionToken',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setQueueTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setQueueTitle(java.lang.CharSequence)}
 **/
MediaSession.prototype.setQueueTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setQueueTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setFlags(int)}
 **/
MediaSession.prototype.setFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRatingType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.html#setRatingType(int)}
 **/
MediaSession.prototype.setRatingType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRatingType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaSession') {
			return new MediaSession(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = MediaSession;
