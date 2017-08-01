/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.VoiceInteractor
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.VoiceInteractor
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html}
 **/
var VoiceInteractor = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.VoiceInteractor')) {
		result = arguments[0];
	}
	else {
		result = VoiceInteractor.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
VoiceInteractor.prototype = Object.create(SuperClass.prototype);
VoiceInteractor.prototype.constructor = VoiceInteractor;

Object.defineProperty(VoiceInteractor.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new VoiceInteractor(this.$native.super);
	},
	enumerable: true
});

VoiceInteractor.className = 'android.app.VoiceInteractor';
VoiceInteractor.prototype.className = 'android.app.VoiceInteractor';

// class property
Object.defineProperty(VoiceInteractor, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.VoiceInteractor');
	},
	enumerable: true,
	configurable: false
});


// Cast
VoiceInteractor.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new VoiceInteractor(Hyperloop.cast('android.app.VoiceInteractor', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(VoiceInteractor, 'AbortVoiceRequest', {
	get: function() {
		return require('android.app.VoiceInteractor$AbortVoiceRequest');
	},
	enumerable: true
});
Object.defineProperty(VoiceInteractor, 'Request', {
	get: function() {
		return require('android.app.VoiceInteractor$Request');
	},
	enumerable: true
});
Object.defineProperty(VoiceInteractor, 'PickOptionRequest', {
	get: function() {
		return require('android.app.VoiceInteractor$PickOptionRequest');
	},
	enumerable: true
});
Object.defineProperty(VoiceInteractor, 'ConfirmationRequest', {
	get: function() {
		return require('android.app.VoiceInteractor$ConfirmationRequest');
	},
	enumerable: true
});
Object.defineProperty(VoiceInteractor, 'CompleteVoiceRequest', {
	get: function() {
		return require('android.app.VoiceInteractor$CompleteVoiceRequest');
	},
	enumerable: true
});
Object.defineProperty(VoiceInteractor, 'CommandRequest', {
	get: function() {
		return require('android.app.VoiceInteractor$CommandRequest');
	},
	enumerable: true
});
Object.defineProperty(VoiceInteractor, 'Prompt', {
	get: function() {
		return require('android.app.VoiceInteractor$Prompt');
	},
	enumerable: true
});
Object.defineProperty(VoiceInteractor, 'PickOptionRequest$Option', {
	get: function() {
		return require('android.app.VoiceInteractor$PickOptionRequest$Option');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function supportsCommands
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html#supportsCommands(java.lang.String[])}
 **/
VoiceInteractor.prototype.supportsCommands = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'supportsCommands',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor') {
			return new VoiceInteractor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActiveRequest
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html#getActiveRequest(java.lang.String)}
 **/
VoiceInteractor.prototype.getActiveRequest = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActiveRequest',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor') {
			return new VoiceInteractor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function submitRequest
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html#submitRequest(android.app.VoiceInteractor$Request)}
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html#submitRequest(android.app.VoiceInteractor$Request, java.lang.String)}
 **/
VoiceInteractor.prototype.submitRequest = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'submitRequest',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor') {
			return new VoiceInteractor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActiveRequests
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/VoiceInteractor.html#getActiveRequests()}
 **/
VoiceInteractor.prototype.getActiveRequests = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getActiveRequests',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.VoiceInteractor') {
			return new VoiceInteractor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = VoiceInteractor;
