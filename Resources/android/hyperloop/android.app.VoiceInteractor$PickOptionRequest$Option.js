/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.VoiceInteractor$PickOptionRequest$Option
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.app.VoiceInteractor');

/**
 * @class android.app.VoiceInteractor$PickOptionRequest$Option
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html}
 **/
var PickOptionRequest$Option = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.VoiceInteractor$PickOptionRequest$Option')) {
		result = arguments[0];
	}
	else {
		result = PickOptionRequest$Option.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PickOptionRequest$Option.prototype = Object.create(SuperClass.prototype);
PickOptionRequest$Option.prototype.constructor = PickOptionRequest$Option;

Object.defineProperty(PickOptionRequest$Option.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PickOptionRequest$Option(this.$native.super);
	},
	enumerable: true
});

PickOptionRequest$Option.className = 'android.app.VoiceInteractor$PickOptionRequest$Option';
PickOptionRequest$Option.prototype.className = 'android.app.VoiceInteractor$PickOptionRequest$Option';

// class property
Object.defineProperty(PickOptionRequest$Option, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.VoiceInteractor$PickOptionRequest$Option');
	},
	enumerable: true,
	configurable: false
});


// Cast
PickOptionRequest$Option.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PickOptionRequest$Option(Hyperloop.cast('android.app.VoiceInteractor$PickOptionRequest$Option', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html#CREATOR
Object.defineProperty(PickOptionRequest$Option, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.app.VoiceInteractor$PickOptionRequest$Option') {
				return new PickOptionRequest$Option(result);
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
 * @function setExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html#setExtras(android.os.Bundle)}
 **/
PickOptionRequest$Option.prototype.setExtras = function() {
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
		if (result.apiName === 'android.app.VoiceInteractor$PickOptionRequest$Option') {
			return new PickOptionRequest$Option(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLabel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html#getLabel()}
 **/
PickOptionRequest$Option.prototype.getLabel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLabel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$PickOptionRequest$Option') {
			return new PickOptionRequest$Option(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html#getIndex()}
 **/
PickOptionRequest$Option.prototype.getIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$PickOptionRequest$Option') {
			return new PickOptionRequest$Option(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countSynonyms
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html#countSynonyms()}
 **/
PickOptionRequest$Option.prototype.countSynonyms = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countSynonyms',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$PickOptionRequest$Option') {
			return new PickOptionRequest$Option(result);
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
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html#getExtras()}
 **/
PickOptionRequest$Option.prototype.getExtras = function() {
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
		if (result.apiName === 'android.app.VoiceInteractor$PickOptionRequest$Option') {
			return new PickOptionRequest$Option(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addSynonym
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html#addSynonym(java.lang.CharSequence)}
 **/
PickOptionRequest$Option.prototype.addSynonym = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addSynonym',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$PickOptionRequest$Option') {
			return new PickOptionRequest$Option(result);
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
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html#describeContents()}
 **/
PickOptionRequest$Option.prototype.describeContents = function() {
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
		if (result.apiName === 'android.app.VoiceInteractor$PickOptionRequest$Option') {
			return new PickOptionRequest$Option(result);
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
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html#writeToParcel(android.os.Parcel, int)}
 **/
PickOptionRequest$Option.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.app.VoiceInteractor$PickOptionRequest$Option') {
			return new PickOptionRequest$Option(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSynonymAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.PickOptionRequest$Option.html#getSynonymAt(int)}
 **/
PickOptionRequest$Option.prototype.getSynonymAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSynonymAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor$PickOptionRequest$Option') {
			return new PickOptionRequest$Option(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PickOptionRequest$Option;
