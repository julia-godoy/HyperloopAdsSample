/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.MediaController$Callback
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.media.session.MediaController');

/**
 * @class android.media.session.MediaController$Callback
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html}
 **/
var Callback = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.session.MediaController$Callback')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.media.session.MediaController$Callback. Create a subclass using android.media.session.MediaController$Callback.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Callback.prototype = Object.create(SuperClass.prototype);
Callback.prototype.constructor = Callback;

Object.defineProperty(Callback.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Callback(this.$native.super);
	},
	enumerable: true
});

Callback.className = 'android.media.session.MediaController$Callback';
Callback.prototype.className = 'android.media.session.MediaController$Callback';

// class property
Object.defineProperty(Callback, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.session.MediaController$Callback');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Callback.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.media.session.MediaController$Callback');

	// Generate a JS wrapper for our dynamic subclass
	var SubClass = function() {
		var result = subclassProxy.newInstance(arguments),
			instance = this,
			copy = overrides,
			modified = {};

		function _wrapArg(arg) {
			if (arg.apiName && arg.isNativeProxy && arg.isInstanceProxy) { // Assume hyperloop proxy, wrap in JS wrapper
				var other = require(arg.apiName);
				return new other(arg);
			}
			return arg;
		}

		function _wrapArgs() {
			var newArgs = [];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i] = _wrapArg(arguments[i]);
			}
			return newArgs;
		};

		Object.keys(copy).forEach(function (each) {
			// Hang the original override method on the JS wrapper object
			instance[each] = function() {
				return copy[each].apply(instance, arguments);
			};

			// Hang a delegate on the "overrides" object we pass into Java.
			// This one wraps hyperloop proxies from Java in their JS wrapper before forwarding on
			modified[each] = function() {
				return instance[each].apply(instance, _wrapArgs.apply(this, arguments));
			}
		});
		result.setOverrides(modified);

		this.$native = result;
		this._hasPointer = result != null;
		this._private = {};
	};
	// it extends the JS wrapper for the parent type
	SubClass.prototype = Object.create(Callback.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Callback.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Callback(Hyperloop.cast('android.media.session.MediaController$Callback', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onMetadataChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onMetadataChanged(android.media.MediaMetadata)}
 **/
Callback.prototype.onMetadataChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMetadataChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onExtrasChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onExtrasChanged(android.os.Bundle)}
 **/
Callback.prototype.onExtrasChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onExtrasChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSessionDestroyed
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onSessionDestroyed()}
 **/
Callback.prototype.onSessionDestroyed = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSessionDestroyed',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAudioInfoChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onAudioInfoChanged(android.media.session.MediaController$PlaybackInfo)}
 **/
Callback.prototype.onAudioInfoChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAudioInfoChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onPlaybackStateChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onPlaybackStateChanged(android.media.session.PlaybackState)}
 **/
Callback.prototype.onPlaybackStateChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onPlaybackStateChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSessionEvent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onSessionEvent(java.lang.String, android.os.Bundle)}
 **/
Callback.prototype.onSessionEvent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSessionEvent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onQueueChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onQueueChanged(java.util.List)}
 **/
Callback.prototype.onQueueChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onQueueChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onQueueTitleChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/MediaController.Callback.html#onQueueTitleChanged(java.lang.CharSequence)}
 **/
Callback.prototype.onQueueTitleChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onQueueTitleChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.MediaController$Callback') {
			return new Callback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Callback;
