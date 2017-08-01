/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.IntentSender
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.IntentSender
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html}
 **/
var IntentSender = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.IntentSender')) {
		result = arguments[0];
	}
	else {
		result = IntentSender.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
IntentSender.prototype = Object.create(SuperClass.prototype);
IntentSender.prototype.constructor = IntentSender;

Object.defineProperty(IntentSender.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new IntentSender(this.$native.super);
	},
	enumerable: true
});

IntentSender.className = 'android.content.IntentSender';
IntentSender.prototype.className = 'android.content.IntentSender';

// class property
Object.defineProperty(IntentSender, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.IntentSender');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
IntentSender.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.IntentSender');

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
	SubClass.prototype = Object.create(IntentSender.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
IntentSender.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new IntentSender(Hyperloop.cast('android.content.IntentSender', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(IntentSender, 'SendIntentException', {
	get: function() {
		return require('android.content.IntentSender$SendIntentException');
	},
	enumerable: true
});
Object.defineProperty(IntentSender, 'OnFinished', {
	get: function() {
		return require('android.content.IntentSender$OnFinished');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/content/IntentSender.html#CREATOR
Object.defineProperty(IntentSender, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.IntentSender') {
				return new IntentSender(result);
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
 * @function readIntentSenderOrNullFromParcel
 * @static
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#readIntentSenderOrNullFromParcel(android.os.Parcel)}
 **/
IntentSender.readIntentSenderOrNullFromParcel = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'readIntentSenderOrNullFromParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeIntentSenderOrNullToParcel
 * @static
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#writeIntentSenderOrNullToParcel(android.content.IntentSender, android.os.Parcel)}
 **/
IntentSender.writeIntentSenderOrNullToParcel = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'writeIntentSenderOrNullToParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
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
 * @function sendIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#sendIntent(android.content.Context, int, android.content.Intent, android.content.IntentSender$OnFinished, android.os.Handler)}
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#sendIntent(android.content.Context, int, android.content.Intent, android.content.IntentSender$OnFinished, android.os.Handler, java.lang.String)}
 **/
IntentSender.prototype.sendIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#hashCode()}
 **/
IntentSender.prototype.hashCode = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTargetPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#getTargetPackage()}
 **/
IntentSender.prototype.getTargetPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTargetPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#equals(java.lang.Object)}
 **/
IntentSender.prototype.equals = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCreatorPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#getCreatorPackage()}
 **/
IntentSender.prototype.getCreatorPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCreatorPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#toString()}
 **/
IntentSender.prototype.toString = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCreatorUid
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#getCreatorUid()}
 **/
IntentSender.prototype.getCreatorUid = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCreatorUid',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#describeContents()}
 **/
IntentSender.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#writeToParcel(android.os.Parcel, int)}
 **/
IntentSender.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCreatorUserHandle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentSender.html#getCreatorUserHandle()}
 **/
IntentSender.prototype.getCreatorUserHandle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCreatorUserHandle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentSender') {
			return new IntentSender(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = IntentSender;
