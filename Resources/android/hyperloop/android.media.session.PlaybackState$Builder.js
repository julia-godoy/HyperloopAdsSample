/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.PlaybackState$Builder
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.media.session.PlaybackState');

/**
 * @class android.media.session.PlaybackState$Builder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html}
 **/
var Builder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.session.PlaybackState$Builder')) {
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

Builder.className = 'android.media.session.PlaybackState$Builder';
Builder.prototype.className = 'android.media.session.PlaybackState$Builder';

// class property
Object.defineProperty(Builder, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.session.PlaybackState$Builder');
	},
	enumerable: true,
	configurable: false
});


// Cast
Builder.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Builder(Hyperloop.cast('android.media.session.PlaybackState$Builder', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setErrorMessage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html#setErrorMessage(java.lang.CharSequence)}
 **/
Builder.prototype.setErrorMessage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setErrorMessage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$Builder') {
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
 * @function setExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html#setExtras(android.os.Bundle)}
 **/
Builder.prototype.setExtras = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState$Builder') {
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
 * @function setActions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html#setActions(long)}
 **/
Builder.prototype.setActions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setActions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$Builder') {
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
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html#build()}
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
		if (result.apiName === 'android.media.session.PlaybackState$Builder') {
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
 * @function setActiveQueueItemId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html#setActiveQueueItemId(long)}
 **/
Builder.prototype.setActiveQueueItemId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setActiveQueueItemId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$Builder') {
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
 * @function setState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html#setState(int, long, float, long)}
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html#setState(int, long, float)}
 **/
Builder.prototype.setState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$Builder') {
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
 * @function setBufferedPosition
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html#setBufferedPosition(long)}
 **/
Builder.prototype.setBufferedPosition = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setBufferedPosition',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$Builder') {
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
 * @function addCustomAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html#addCustomAction(java.lang.String, java.lang.String, int)}
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.Builder.html#addCustomAction(android.media.session.PlaybackState$CustomAction)}
 **/
Builder.prototype.addCustomAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addCustomAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$Builder') {
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
