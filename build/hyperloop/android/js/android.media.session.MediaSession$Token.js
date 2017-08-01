/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.MediaSession$Token
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.media.session.MediaSession');

/**
 * @class android.media.session.MediaSession$Token
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.Token.html}
 **/
var Token = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.session.MediaSession$Token')) {
		result = arguments[0];
	}
	else {
		result = Token.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Token.prototype = Object.create(SuperClass.prototype);
Token.prototype.constructor = Token;

Object.defineProperty(Token.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Token(this.$native.super);
	},
	enumerable: true
});

Token.className = 'android.media.session.MediaSession$Token';
Token.prototype.className = 'android.media.session.MediaSession$Token';

// class property
Object.defineProperty(Token, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.session.MediaSession$Token');
	},
	enumerable: true,
	configurable: false
});


// Cast
Token.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Token(Hyperloop.cast('android.media.session.MediaSession$Token', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/media/session/MediaSession.Token.html#CREATOR
Object.defineProperty(Token, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.media.session.MediaSession$Token') {
				return new Token(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.Token.html#hashCode()}
 **/
Token.prototype.hashCode = function() {
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
		if (result.apiName === 'android.media.session.MediaSession$Token') {
			return new Token(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.Token.html#equals(java.lang.Object)}
 **/
Token.prototype.equals = function() {
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
		if (result.apiName === 'android.media.session.MediaSession$Token') {
			return new Token(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.Token.html#describeContents()}
 **/
Token.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.session.MediaSession$Token') {
			return new Token(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/MediaSession.Token.html#writeToParcel(android.os.Parcel, int)}
 **/
Token.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.session.MediaSession$Token') {
			return new Token(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Token;
