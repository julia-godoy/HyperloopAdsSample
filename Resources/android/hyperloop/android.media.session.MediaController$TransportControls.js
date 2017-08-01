/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.MediaController$TransportControls
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.media.session.MediaController');

/**
 * @class android.media.session.MediaController$TransportControls
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html}
 **/
var TransportControls = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.session.MediaController$TransportControls')) {
		result = arguments[0];
	}
	else {
		result = TransportControls.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
TransportControls.prototype = Object.create(SuperClass.prototype);
TransportControls.prototype.constructor = TransportControls;

Object.defineProperty(TransportControls.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new TransportControls(this.$native.super);
	},
	enumerable: true
});

TransportControls.className = 'android.media.session.MediaController$TransportControls';
TransportControls.prototype.className = 'android.media.session.MediaController$TransportControls';

// class property
Object.defineProperty(TransportControls, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.session.MediaController$TransportControls');
	},
	enumerable: true,
	configurable: false
});


// Cast
TransportControls.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new TransportControls(Hyperloop.cast('android.media.session.MediaController$TransportControls', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function play
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#play()}
 **/
TransportControls.prototype.play = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'play',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function playFromMediaId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#playFromMediaId(java.lang.String, android.os.Bundle)}
 **/
TransportControls.prototype.playFromMediaId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'playFromMediaId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function playFromSearch
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#playFromSearch(java.lang.String, android.os.Bundle)}
 **/
TransportControls.prototype.playFromSearch = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'playFromSearch',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skipToNext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#skipToNext()}
 **/
TransportControls.prototype.skipToNext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skipToNext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function pause
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#pause()}
 **/
TransportControls.prototype.pause = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'pause',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function seekTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#seekTo(long)}
 **/
TransportControls.prototype.seekTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'seekTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skipToQueueItem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#skipToQueueItem(long)}
 **/
TransportControls.prototype.skipToQueueItem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skipToQueueItem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function skipToPrevious
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#skipToPrevious()}
 **/
TransportControls.prototype.skipToPrevious = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'skipToPrevious',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#stop()}
 **/
TransportControls.prototype.stop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rewind
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#rewind()}
 **/
TransportControls.prototype.rewind = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rewind',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendCustomAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#sendCustomAction(android.media.session.PlaybackState$CustomAction, android.os.Bundle)}
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#sendCustomAction(java.lang.String, android.os.Bundle)}
 **/
TransportControls.prototype.sendCustomAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendCustomAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fastForward
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#fastForward()}
 **/
TransportControls.prototype.fastForward = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'fastForward',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRating
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#setRating(android.media.Rating)}
 **/
TransportControls.prototype.setRating = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRating',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function playFromUri
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.TransportControls.html#playFromUri(android.net.Uri, android.os.Bundle)}
 **/
TransportControls.prototype.playFromUri = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'playFromUri',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$TransportControls') {
			return new TransportControls(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = TransportControls;
