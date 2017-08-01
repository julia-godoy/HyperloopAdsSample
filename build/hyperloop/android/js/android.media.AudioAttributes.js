/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.AudioAttributes
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.media');

/**
 * @class android.media.AudioAttributes
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html}
 **/
var AudioAttributes = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.AudioAttributes')) {
		result = arguments[0];
	}
	else {
		result = AudioAttributes.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
AudioAttributes.prototype = Object.create(SuperClass.prototype);
AudioAttributes.prototype.constructor = AudioAttributes;

Object.defineProperty(AudioAttributes.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AudioAttributes(this.$native.super);
	},
	enumerable: true
});

AudioAttributes.className = 'android.media.AudioAttributes';
AudioAttributes.prototype.className = 'android.media.AudioAttributes';

// class property
Object.defineProperty(AudioAttributes, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.AudioAttributes');
	},
	enumerable: true,
	configurable: false
});


// Cast
AudioAttributes.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AudioAttributes(Hyperloop.cast('android.media.AudioAttributes', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION_COMMUNICATION_REQUEST}
 */
AudioAttributes.USAGE_NOTIFICATION_COMMUNICATION_REQUEST = 7;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_GAME}
 */
AudioAttributes.USAGE_GAME = 14;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#CONTENT_TYPE_MOVIE}
 */
AudioAttributes.CONTENT_TYPE_MOVIE = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION_EVENT}
 */
AudioAttributes.USAGE_NOTIFICATION_EVENT = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#FLAG_HW_AV_SYNC}
 */
AudioAttributes.FLAG_HW_AV_SYNC = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_ALARM}
 */
AudioAttributes.USAGE_ALARM = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#CONTENT_TYPE_UNKNOWN}
 */
AudioAttributes.CONTENT_TYPE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION_COMMUNICATION_DELAYED}
 */
AudioAttributes.USAGE_NOTIFICATION_COMMUNICATION_DELAYED = 9;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION_COMMUNICATION_INSTANT}
 */
AudioAttributes.USAGE_NOTIFICATION_COMMUNICATION_INSTANT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION}
 */
AudioAttributes.USAGE_NOTIFICATION = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_NOTIFICATION_RINGTONE}
 */
AudioAttributes.USAGE_NOTIFICATION_RINGTONE = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_UNKNOWN}
 */
AudioAttributes.USAGE_UNKNOWN = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_VOICE_COMMUNICATION}
 */
AudioAttributes.USAGE_VOICE_COMMUNICATION = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#CONTENT_TYPE_MUSIC}
 */
AudioAttributes.CONTENT_TYPE_MUSIC = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#FLAG_AUDIBILITY_ENFORCED}
 */
AudioAttributes.FLAG_AUDIBILITY_ENFORCED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_ASSISTANCE_ACCESSIBILITY}
 */
AudioAttributes.USAGE_ASSISTANCE_ACCESSIBILITY = 11;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_ASSISTANCE_NAVIGATION_GUIDANCE}
 */
AudioAttributes.USAGE_ASSISTANCE_NAVIGATION_GUIDANCE = 12;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_ASSISTANCE_SONIFICATION}
 */
AudioAttributes.USAGE_ASSISTANCE_SONIFICATION = 13;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#CONTENT_TYPE_SPEECH}
 */
AudioAttributes.CONTENT_TYPE_SPEECH = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_MEDIA}
 */
AudioAttributes.USAGE_MEDIA = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#USAGE_VOICE_COMMUNICATION_SIGNALLING}
 */
AudioAttributes.USAGE_VOICE_COMMUNICATION_SIGNALLING = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#CONTENT_TYPE_SONIFICATION}
 */
AudioAttributes.CONTENT_TYPE_SONIFICATION = 4;

// Inner classes
Object.defineProperty(AudioAttributes, 'Builder', {
	get: function() {
		return require('android.media.AudioAttributes$Builder');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/media/AudioAttributes.html#CREATOR
Object.defineProperty(AudioAttributes, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.media.AudioAttributes') {
				return new AudioAttributes(result);
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
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#hashCode()}
 **/
AudioAttributes.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.AudioAttributes') {
			return new AudioAttributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#equals(java.lang.Object)}
 **/
AudioAttributes.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.AudioAttributes') {
			return new AudioAttributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#getContentType()}
 **/
AudioAttributes.prototype.getContentType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.AudioAttributes') {
			return new AudioAttributes(result);
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
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#toString()}
 **/
AudioAttributes.prototype.toString = function() {
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
		if (result.apiName === 'android.media.AudioAttributes') {
			return new AudioAttributes(result);
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
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#getFlags()}
 **/
AudioAttributes.prototype.getFlags = function() {
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
		if (result.apiName === 'android.media.AudioAttributes') {
			return new AudioAttributes(result);
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
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#describeContents()}
 **/
AudioAttributes.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.AudioAttributes') {
			return new AudioAttributes(result);
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
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#writeToParcel(android.os.Parcel, int)}
 **/
AudioAttributes.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.AudioAttributes') {
			return new AudioAttributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUsage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/AudioAttributes.html#getUsage()}
 **/
AudioAttributes.prototype.getUsage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUsage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.AudioAttributes') {
			return new AudioAttributes(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AudioAttributes;
