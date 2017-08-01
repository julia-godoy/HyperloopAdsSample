/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session.PlaybackState$CustomAction
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.media.session.PlaybackState');

/**
 * @class android.media.session.PlaybackState$CustomAction
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction.html}
 **/
var CustomAction = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.media.session.PlaybackState$CustomAction')) {
		result = arguments[0];
	}
	else {
		result = CustomAction.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CustomAction.prototype = Object.create(SuperClass.prototype);
CustomAction.prototype.constructor = CustomAction;

Object.defineProperty(CustomAction.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CustomAction(this.$native.super);
	},
	enumerable: true
});

CustomAction.className = 'android.media.session.PlaybackState$CustomAction';
CustomAction.prototype.className = 'android.media.session.PlaybackState$CustomAction';

// class property
Object.defineProperty(CustomAction, 'class', {
	get: function() {
		return Hyperloop.getClass('android.media.session.PlaybackState$CustomAction');
	},
	enumerable: true,
	configurable: false
});


// Cast
CustomAction.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CustomAction(Hyperloop.cast('android.media.session.PlaybackState$CustomAction', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction.html#CREATOR
Object.defineProperty(CustomAction, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.media.session.PlaybackState$CustomAction') {
				return new CustomAction(result);
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
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction.html#getName()}
 **/
CustomAction.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$CustomAction') {
			return new CustomAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction.html#getAction()}
 **/
CustomAction.prototype.getAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$CustomAction') {
			return new CustomAction(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction.html#toString()}
 **/
CustomAction.prototype.toString = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState$CustomAction') {
			return new CustomAction(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction.html#getExtras()}
 **/
CustomAction.prototype.getExtras = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState$CustomAction') {
			return new CustomAction(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction.html#writeToParcel(android.os.Parcel, int)}
 **/
CustomAction.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState$CustomAction') {
			return new CustomAction(result);
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
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction.html#describeContents()}
 **/
CustomAction.prototype.describeContents = function() {
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
		if (result.apiName === 'android.media.session.PlaybackState$CustomAction') {
			return new CustomAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIcon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/media/session/PlaybackState.CustomAction.html#getIcon()}
 **/
CustomAction.prototype.getIcon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIcon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.media.session.PlaybackState$CustomAction') {
			return new CustomAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CustomAction;
