/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.MediaController
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.media.session');

/**
 * @class android.media.session.MediaController
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html}
 **/
var MediaController = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.session.MediaController')) {
		result = arguments[0];
	}
	else {
		result = MediaController.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
MediaController.prototype = Object.create(SuperClass.prototype);
MediaController.prototype.constructor = MediaController;

Object.defineProperty(MediaController.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MediaController(this.$native.super);
	},
	enumerable: true
});

MediaController.className = 'android.media.session.MediaController';
MediaController.prototype.className = 'android.media.session.MediaController';

// class property
Object.defineProperty(MediaController, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.session.MediaController');
	},
	enumerable: true,
	configurable: false
});


// Cast
MediaController.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MediaController(Hyperloop.cast('android.media.session.MediaController', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(MediaController, 'PlaybackInfo', {
	get: function() {
		return require('android.media.session.MediaController$PlaybackInfo');
	},
	enumerable: true
});
Object.defineProperty(MediaController, 'TransportControls', {
	get: function() {
		return require('android.media.session.MediaController$TransportControls');
	},
	enumerable: true
});
Object.defineProperty(MediaController, 'Callback', {
	get: function() {
		return require('android.media.session.MediaController$Callback');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getSessionActivity
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getSessionActivity()}
 **/
MediaController.prototype.getSessionActivity = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSessionActivity',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unregisterCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#unregisterCallback(android.media.session.MediaController$Callback)}
 **/
MediaController.prototype.unregisterCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unregisterCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMetadata
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getMetadata()}
 **/
MediaController.prototype.getMetadata = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMetadata',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPlaybackInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getPlaybackInfo()}
 **/
MediaController.prototype.getPlaybackInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPlaybackInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPlaybackState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getPlaybackState()}
 **/
MediaController.prototype.getPlaybackState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPlaybackState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRatingType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getRatingType()}
 **/
MediaController.prototype.getRatingType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRatingType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQueueTitle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getQueueTitle()}
 **/
MediaController.prototype.getQueueTitle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQueueTitle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendCommand
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#sendCommand(java.lang.String, android.os.Bundle, android.os.ResultReceiver)}
 **/
MediaController.prototype.sendCommand = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendCommand',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQueue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getQueue()}
 **/
MediaController.prototype.getQueue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQueue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getSessionToken()}
 **/
MediaController.prototype.getSessionToken = function() {
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
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVolumeTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#setVolumeTo(int, int)}
 **/
MediaController.prototype.setVolumeTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVolumeTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function adjustVolume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#adjustVolume(int, int)}
 **/
MediaController.prototype.adjustVolume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'adjustVolume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getExtras()}
 **/
MediaController.prototype.getExtras = function() {
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
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getPackageName()}
 **/
MediaController.prototype.getPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTransportControls
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getTransportControls()}
 **/
MediaController.prototype.getTransportControls = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTransportControls',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFlags
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#getFlags()}
 **/
MediaController.prototype.getFlags = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFlags',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchMediaButtonEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#dispatchMediaButtonEvent(android.view.KeyEvent)}
 **/
MediaController.prototype.dispatchMediaButtonEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchMediaButtonEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function registerCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#registerCallback(android.media.session.MediaController$Callback)}
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.html#registerCallback(android.media.session.MediaController$Callback, android.os.Handler)}
 **/
MediaController.prototype.registerCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'registerCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController') {
			return new MediaController(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = MediaController;
