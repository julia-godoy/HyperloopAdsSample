/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.MediaMetadata
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.media');

/**
 * @class android.media.MediaMetadata
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html}
 **/
var MediaMetadata = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.MediaMetadata')) {
		result = arguments[0];
	}
	else {
		result = MediaMetadata.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
MediaMetadata.prototype = Object.create(SuperClass.prototype);
MediaMetadata.prototype.constructor = MediaMetadata;

Object.defineProperty(MediaMetadata.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new MediaMetadata(this.$native.super);
	},
	enumerable: true
});

MediaMetadata.className = 'android.media.MediaMetadata';
MediaMetadata.prototype.className = 'android.media.MediaMetadata';

// class property
Object.defineProperty(MediaMetadata, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.MediaMetadata');
	},
	enumerable: true,
	configurable: false
});


// Cast
MediaMetadata.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new MediaMetadata(Hyperloop.cast('android.media.MediaMetadata', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISC_NUMBER}
 */
MediaMetadata.METADATA_KEY_DISC_NUMBER = "android.media.metadata.DISC_NUMBER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_COMPOSER}
 */
MediaMetadata.METADATA_KEY_COMPOSER = "android.media.metadata.COMPOSER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_TITLE}
 */
MediaMetadata.METADATA_KEY_TITLE = "android.media.metadata.TITLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_TRACK_NUMBER}
 */
MediaMetadata.METADATA_KEY_TRACK_NUMBER = "android.media.metadata.TRACK_NUMBER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISPLAY_ICON_URI}
 */
MediaMetadata.METADATA_KEY_DISPLAY_ICON_URI = "android.media.metadata.DISPLAY_ICON_URI";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DATE}
 */
MediaMetadata.METADATA_KEY_DATE = "android.media.metadata.DATE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_AUTHOR}
 */
MediaMetadata.METADATA_KEY_AUTHOR = "android.media.metadata.AUTHOR";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_COMPILATION}
 */
MediaMetadata.METADATA_KEY_COMPILATION = "android.media.metadata.COMPILATION";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISPLAY_DESCRIPTION}
 */
MediaMetadata.METADATA_KEY_DISPLAY_DESCRIPTION = "android.media.metadata.DISPLAY_DESCRIPTION";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_RATING}
 */
MediaMetadata.METADATA_KEY_RATING = "android.media.metadata.RATING";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISPLAY_SUBTITLE}
 */
MediaMetadata.METADATA_KEY_DISPLAY_SUBTITLE = "android.media.metadata.DISPLAY_SUBTITLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DURATION}
 */
MediaMetadata.METADATA_KEY_DURATION = "android.media.metadata.DURATION";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISPLAY_ICON}
 */
MediaMetadata.METADATA_KEY_DISPLAY_ICON = "android.media.metadata.DISPLAY_ICON";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ART_URI}
 */
MediaMetadata.METADATA_KEY_ART_URI = "android.media.metadata.ART_URI";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ALBUM}
 */
MediaMetadata.METADATA_KEY_ALBUM = "android.media.metadata.ALBUM";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_USER_RATING}
 */
MediaMetadata.METADATA_KEY_USER_RATING = "android.media.metadata.USER_RATING";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ALBUM_ART_URI}
 */
MediaMetadata.METADATA_KEY_ALBUM_ART_URI = "android.media.metadata.ALBUM_ART_URI";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ALBUM_ARTIST}
 */
MediaMetadata.METADATA_KEY_ALBUM_ARTIST = "android.media.metadata.ALBUM_ARTIST";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_GENRE}
 */
MediaMetadata.METADATA_KEY_GENRE = "android.media.metadata.GENRE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ALBUM_ART}
 */
MediaMetadata.METADATA_KEY_ALBUM_ART = "android.media.metadata.ALBUM_ART";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ART}
 */
MediaMetadata.METADATA_KEY_ART = "android.media.metadata.ART";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_DISPLAY_TITLE}
 */
MediaMetadata.METADATA_KEY_DISPLAY_TITLE = "android.media.metadata.DISPLAY_TITLE";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_WRITER}
 */
MediaMetadata.METADATA_KEY_WRITER = "android.media.metadata.WRITER";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_YEAR}
 */
MediaMetadata.METADATA_KEY_YEAR = "android.media.metadata.YEAR";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_NUM_TRACKS}
 */
MediaMetadata.METADATA_KEY_NUM_TRACKS = "android.media.metadata.NUM_TRACKS";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_MEDIA_ID}
 */
MediaMetadata.METADATA_KEY_MEDIA_ID = "android.media.metadata.MEDIA_ID";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#METADATA_KEY_ARTIST}
 */
MediaMetadata.METADATA_KEY_ARTIST = "android.media.metadata.ARTIST";

// Inner classes
Object.defineProperty(MediaMetadata, 'Builder', {
	get: function() {
		return require('android.media.MediaMetadata$Builder');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/media/MediaMetadata.html#CREATOR
Object.defineProperty(MediaMetadata, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.media.MediaMetadata') {
				return new MediaMetadata(result);
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
 * @function getLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getLong(java.lang.String)}
 **/
MediaMetadata.prototype.getLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function size
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#size()}
 **/
MediaMetadata.prototype.size = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'size',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBitmap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getBitmap(java.lang.String)}
 **/
MediaMetadata.prototype.getBitmap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBitmap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function containsKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#containsKey(java.lang.String)}
 **/
MediaMetadata.prototype.containsKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'containsKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getText
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getText(java.lang.String)}
 **/
MediaMetadata.prototype.getText = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getText',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getString(java.lang.String)}
 **/
MediaMetadata.prototype.getString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
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
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#describeContents()}
 **/
MediaMetadata.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
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
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#writeToParcel(android.os.Parcel, int)}
 **/
MediaMetadata.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function keySet
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#keySet()}
 **/
MediaMetadata.prototype.keySet = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'keySet',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getDescription()}
 **/
MediaMetadata.prototype.getDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRating
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/MediaMetadata.html#getRating(java.lang.String)}
 **/
MediaMetadata.prototype.getRating = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRating',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.MediaMetadata') {
			return new MediaMetadata(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = MediaMetadata;
