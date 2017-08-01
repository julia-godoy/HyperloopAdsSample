/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.inputmethod.ExtractedTextRequest
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view.inputmethod');

/**
 * @class android.view.inputmethod.ExtractedTextRequest
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html}
 **/
var ExtractedTextRequest = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.inputmethod.ExtractedTextRequest')) {
		result = arguments[0];
	}
	else {
		result = ExtractedTextRequest.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ExtractedTextRequest.prototype = Object.create(SuperClass.prototype);
ExtractedTextRequest.prototype.constructor = ExtractedTextRequest;

Object.defineProperty(ExtractedTextRequest.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ExtractedTextRequest(this.$native.super);
	},
	enumerable: true
});

ExtractedTextRequest.className = 'android.view.inputmethod.ExtractedTextRequest';
ExtractedTextRequest.prototype.className = 'android.view.inputmethod.ExtractedTextRequest';

// class property
Object.defineProperty(ExtractedTextRequest, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.inputmethod.ExtractedTextRequest');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ExtractedTextRequest.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.inputmethod.ExtractedTextRequest');

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
	SubClass.prototype = Object.create(ExtractedTextRequest.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ExtractedTextRequest.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ExtractedTextRequest(Hyperloop.cast('android.view.inputmethod.ExtractedTextRequest', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#CREATOR
Object.defineProperty(ExtractedTextRequest, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
				return new ExtractedTextRequest(result);
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
// http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#hintMaxLines
Object.defineProperty(ExtractedTextRequest.prototype, 'hintMaxLines', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('hintMaxLines');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
				return new ExtractedTextRequest(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('hintMaxLines', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#hintMaxChars
Object.defineProperty(ExtractedTextRequest.prototype, 'hintMaxChars', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('hintMaxChars');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
				return new ExtractedTextRequest(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('hintMaxChars', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#flags
Object.defineProperty(ExtractedTextRequest.prototype, 'flags', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('flags');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
				return new ExtractedTextRequest(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('flags', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#token
Object.defineProperty(ExtractedTextRequest.prototype, 'token', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('token');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
				return new ExtractedTextRequest(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('token', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#writeToParcel(android.os.Parcel, int)}
 **/
ExtractedTextRequest.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
			return new ExtractedTextRequest(result);
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
 * @see {@link http://developer.android.com/reference/android/view/inputmethod/ExtractedTextRequest.html#describeContents()}
 **/
ExtractedTextRequest.prototype.describeContents = function() {
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
		if (result.apiName === 'android.view.inputmethod.ExtractedTextRequest') {
			return new ExtractedTextRequest(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ExtractedTextRequest;
