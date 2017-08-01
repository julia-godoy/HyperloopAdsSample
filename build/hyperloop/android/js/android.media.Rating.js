/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.Rating
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.media');

/**
 * @class android.media.Rating
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/Rating.html}
 **/
var Rating = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.Rating')) {
		result = arguments[0];
	}
	else {
		result = Rating.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Rating.prototype = Object.create(SuperClass.prototype);
Rating.prototype.constructor = Rating;

Object.defineProperty(Rating.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Rating(this.$native.super);
	},
	enumerable: true
});

Rating.className = 'android.media.Rating';
Rating.prototype.className = 'android.media.Rating';

// class property
Object.defineProperty(Rating, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.Rating');
	},
	enumerable: true,
	configurable: false
});


// Cast
Rating.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Rating(Hyperloop.cast('android.media.Rating', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_4_STARS}
 */
Rating.RATING_4_STARS = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_NONE}
 */
Rating.RATING_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_HEART}
 */
Rating.RATING_HEART = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_PERCENTAGE}
 */
Rating.RATING_PERCENTAGE = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_THUMB_UP_DOWN}
 */
Rating.RATING_THUMB_UP_DOWN = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_3_STARS}
 */
Rating.RATING_3_STARS = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#RATING_5_STARS}
 */
Rating.RATING_5_STARS = 5;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/media/Rating.html#CREATOR
Object.defineProperty(Rating, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.media.Rating') {
				return new Rating(result);
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
/**
 * TODO Fill out docs more...
 * @function newThumbRating
 * @static
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#newThumbRating(boolean)}
 **/
Rating.newThumbRating = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newThumbRating',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newUnratedRating
 * @static
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#newUnratedRating(int)}
 **/
Rating.newUnratedRating = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newUnratedRating',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newStarRating
 * @static
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#newStarRating(int, float)}
 **/
Rating.newStarRating = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newStarRating',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newHeartRating
 * @static
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#newHeartRating(boolean)}
 **/
Rating.newHeartRating = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newHeartRating',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newPercentageRating
 * @static
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#newPercentageRating(float)}
 **/
Rating.newPercentageRating = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newPercentageRating',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function isRated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#isRated()}
 **/
Rating.prototype.isRated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRatingStyle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#getRatingStyle()}
 **/
Rating.prototype.getRatingStyle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRatingStyle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
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
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#describeContents()}
 **/
Rating.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasHeart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#hasHeart()}
 **/
Rating.prototype.hasHeart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasHeart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStarRating
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#getStarRating()}
 **/
Rating.prototype.getStarRating = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStarRating',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isThumbUp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#isThumbUp()}
 **/
Rating.prototype.isThumbUp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isThumbUp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPercentRating
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#getPercentRating()}
 **/
Rating.prototype.getPercentRating = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPercentRating',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
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
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#toString()}
 **/
Rating.prototype.toString = function() {
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
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
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
 * @see {@link http://developer.android.com/reference/android/media/Rating.html#writeToParcel(android.os.Parcel, int)}
 **/
Rating.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.Rating') {
			return new Rating(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Rating;
