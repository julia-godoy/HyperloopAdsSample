/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.PendingIntent
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.PendingIntent
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html}
 **/
var PendingIntent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.PendingIntent')) {
		result = arguments[0];
	}
	else {
		result = PendingIntent.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
PendingIntent.prototype = Object.create(SuperClass.prototype);
PendingIntent.prototype.constructor = PendingIntent;

Object.defineProperty(PendingIntent.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PendingIntent(this.$native.super);
	},
	enumerable: true
});

PendingIntent.className = 'android.app.PendingIntent';
PendingIntent.prototype.className = 'android.app.PendingIntent';

// class property
Object.defineProperty(PendingIntent, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.PendingIntent');
	},
	enumerable: true,
	configurable: false
});


// Cast
PendingIntent.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PendingIntent(Hyperloop.cast('android.app.PendingIntent', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#FLAG_CANCEL_CURRENT}
 */
PendingIntent.FLAG_CANCEL_CURRENT = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#FLAG_IMMUTABLE}
 */
PendingIntent.FLAG_IMMUTABLE = 67108864;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#FLAG_NO_CREATE}
 */
PendingIntent.FLAG_NO_CREATE = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#FLAG_UPDATE_CURRENT}
 */
PendingIntent.FLAG_UPDATE_CURRENT = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#FLAG_ONE_SHOT}
 */
PendingIntent.FLAG_ONE_SHOT = 1073741824;

// Inner classes
Object.defineProperty(PendingIntent, 'OnFinished', {
	get: function() {
		return require('android.app.PendingIntent$OnFinished');
	},
	enumerable: true
});
Object.defineProperty(PendingIntent, 'CanceledException', {
	get: function() {
		return require('android.app.PendingIntent$CanceledException');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/app/PendingIntent.html#CREATOR
Object.defineProperty(PendingIntent, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.app.PendingIntent') {
				return new PendingIntent(result);
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
 * @function writePendingIntentOrNullToParcel
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#writePendingIntentOrNullToParcel(android.app.PendingIntent, android.os.Parcel)}
 **/
PendingIntent.writePendingIntentOrNullToParcel = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'writePendingIntentOrNullToParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActivity
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getActivity(android.content.Context, int, android.content.Intent, int)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getActivity(android.content.Context, int, android.content.Intent, int, android.os.Bundle)}
 **/
PendingIntent.getActivity = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getActivity',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBroadcast
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getBroadcast(android.content.Context, int, android.content.Intent, int)}
 **/
PendingIntent.getBroadcast = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getBroadcast',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getService
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getService(android.content.Context, int, android.content.Intent, int)}
 **/
PendingIntent.getService = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getService',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readPendingIntentOrNullFromParcel
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#readPendingIntentOrNullFromParcel(android.os.Parcel)}
 **/
PendingIntent.readPendingIntentOrNullFromParcel = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'readPendingIntentOrNullFromParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getActivities
 * @static
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getActivities(android.content.Context, int, android.content.Intent[], int)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getActivities(android.content.Context, int, android.content.Intent[], int, android.os.Bundle)}
 **/
PendingIntent.getActivities = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getActivities',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
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
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#cancel()}
 **/
PendingIntent.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getTargetPackage()}
 **/
PendingIntent.prototype.getTargetPackage = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getCreatorUid()}
 **/
PendingIntent.prototype.getCreatorUid = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#describeContents()}
 **/
PendingIntent.prototype.describeContents = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntentSender
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getIntentSender()}
 **/
PendingIntent.prototype.getIntentSender = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntentSender',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#hashCode()}
 **/
PendingIntent.prototype.hashCode = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#equals(java.lang.Object)}
 **/
PendingIntent.prototype.equals = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getCreatorPackage()}
 **/
PendingIntent.prototype.getCreatorPackage = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#toString()}
 **/
PendingIntent.prototype.toString = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function send
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send()}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(int)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(android.content.Context, int, android.content.Intent)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(int, android.app.PendingIntent$OnFinished, android.os.Handler)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(android.content.Context, int, android.content.Intent, android.app.PendingIntent$OnFinished, android.os.Handler)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(android.content.Context, int, android.content.Intent, android.app.PendingIntent$OnFinished, android.os.Handler, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#send(android.content.Context, int, android.content.Intent, android.app.PendingIntent$OnFinished, android.os.Handler, java.lang.String, android.os.Bundle)}
 **/
PendingIntent.prototype.send = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'send',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#writeToParcel(android.os.Parcel, int)}
 **/
PendingIntent.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
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
 * @see {@link http://developer.android.com/reference/android/app/PendingIntent.html#getCreatorUserHandle()}
 **/
PendingIntent.prototype.getCreatorUserHandle = function() {
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
		if (result.apiName === 'android.app.PendingIntent') {
			return new PendingIntent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PendingIntent;
