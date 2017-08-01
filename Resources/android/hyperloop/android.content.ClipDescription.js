/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ClipDescription
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.ClipDescription
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html}
 **/
var ClipDescription = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.ClipDescription')) {
		result = arguments[0];
	}
	else {
		result = ClipDescription.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ClipDescription.prototype = Object.create(SuperClass.prototype);
ClipDescription.prototype.constructor = ClipDescription;

Object.defineProperty(ClipDescription.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ClipDescription(this.$native.super);
	},
	enumerable: true
});

ClipDescription.className = 'android.content.ClipDescription';
ClipDescription.prototype.className = 'android.content.ClipDescription';

// class property
Object.defineProperty(ClipDescription, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.ClipDescription');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ClipDescription.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.ClipDescription');

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
	SubClass.prototype = Object.create(ClipDescription.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ClipDescription.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ClipDescription(Hyperloop.cast('android.content.ClipDescription', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#MIMETYPE_TEXT_HTML}
 */
ClipDescription.MIMETYPE_TEXT_HTML = "text/html";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#MIMETYPE_TEXT_URILIST}
 */
ClipDescription.MIMETYPE_TEXT_URILIST = "text/uri-list";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#MIMETYPE_TEXT_PLAIN}
 */
ClipDescription.MIMETYPE_TEXT_PLAIN = "text/plain";
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#MIMETYPE_TEXT_INTENT}
 */
ClipDescription.MIMETYPE_TEXT_INTENT = "text/vnd.android.intent";

// Inner classes

// Static fields
// http://developer.android.com/reference/android/content/ClipDescription.html#CREATOR
Object.defineProperty(ClipDescription, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.ClipDescription') {
				return new ClipDescription(result);
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
 * @function compareMimeTypes
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#compareMimeTypes(java.lang.String, java.lang.String)}
 **/
ClipDescription.compareMimeTypes = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'compareMimeTypes',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipDescription') {
			return new ClipDescription(result);
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
 * @function getMimeTypeCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#getMimeTypeCount()}
 **/
ClipDescription.prototype.getMimeTypeCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMimeTypeCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipDescription') {
			return new ClipDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasMimeType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#hasMimeType(java.lang.String)}
 **/
ClipDescription.prototype.hasMimeType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasMimeType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipDescription') {
			return new ClipDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#getLabel()}
 **/
ClipDescription.prototype.getLabel = function() {
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
		if (result.apiName === 'android.content.ClipDescription') {
			return new ClipDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMimeType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#getMimeType(int)}
 **/
ClipDescription.prototype.getMimeType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMimeType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipDescription') {
			return new ClipDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#toString()}
 **/
ClipDescription.prototype.toString = function() {
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
		if (result.apiName === 'android.content.ClipDescription') {
			return new ClipDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#describeContents()}
 **/
ClipDescription.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.ClipDescription') {
			return new ClipDescription(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#writeToParcel(android.os.Parcel, int)}
 **/
ClipDescription.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.ClipDescription') {
			return new ClipDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function filterMimeTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipDescription.html#filterMimeTypes(java.lang.String)}
 **/
ClipDescription.prototype.filterMimeTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'filterMimeTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipDescription') {
			return new ClipDescription(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ClipDescription;
