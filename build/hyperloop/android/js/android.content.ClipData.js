/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ClipData
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.ClipData
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html}
 **/
var ClipData = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.ClipData')) {
		result = arguments[0];
	}
	else {
		result = ClipData.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ClipData.prototype = Object.create(SuperClass.prototype);
ClipData.prototype.constructor = ClipData;

Object.defineProperty(ClipData.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ClipData(this.$native.super);
	},
	enumerable: true
});

ClipData.className = 'android.content.ClipData';
ClipData.prototype.className = 'android.content.ClipData';

// class property
Object.defineProperty(ClipData, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.ClipData');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ClipData.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.ClipData');

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
	SubClass.prototype = Object.create(ClipData.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ClipData.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ClipData(Hyperloop.cast('android.content.ClipData', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(ClipData, 'Item', {
	get: function() {
		return require('android.content.ClipData$Item');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/content/ClipData.html#CREATOR
Object.defineProperty(ClipData, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.ClipData') {
				return new ClipData(result);
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
 * @function newPlainText
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#newPlainText(java.lang.CharSequence, java.lang.CharSequence)}
 **/
ClipData.newPlainText = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newPlainText',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newIntent
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#newIntent(java.lang.CharSequence, android.content.Intent)}
 **/
ClipData.newIntent = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newIntent',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newHtmlText
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#newHtmlText(java.lang.CharSequence, java.lang.CharSequence, java.lang.String)}
 **/
ClipData.newHtmlText = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newHtmlText',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newUri
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#newUri(android.content.ContentResolver, java.lang.CharSequence, android.net.Uri)}
 **/
ClipData.newUri = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newUri',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newRawUri
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#newRawUri(java.lang.CharSequence, android.net.Uri)}
 **/
ClipData.newRawUri = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'newRawUri',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
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
 * @function getItemCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#getItemCount()}
 **/
ClipData.prototype.getItemCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getItemCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getItemAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#getItemAt(int)}
 **/
ClipData.prototype.getItemAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getItemAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#getDescription()}
 **/
ClipData.prototype.getDescription = function() {
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
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#describeContents()}
 **/
ClipData.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addItem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#addItem(android.content.ClipData$Item)}
 **/
ClipData.prototype.addItem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addItem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#toString()}
 **/
ClipData.prototype.toString = function() {
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
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ClipData.html#writeToParcel(android.os.Parcel, int)}
 **/
ClipData.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.ClipData') {
			return new ClipData(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ClipData;
