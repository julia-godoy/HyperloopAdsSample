/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.PersistableBundle
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.os');

/**
 * @class android.os.PersistableBundle
 * @extends android.os.BaseBundle 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/PersistableBundle.html}
 **/
var PersistableBundle = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.PersistableBundle')) {
		result = arguments[0];
	}
	else {
		result = PersistableBundle.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.os.BaseBundle');
PersistableBundle.prototype = Object.create(SuperClass.prototype);
PersistableBundle.prototype.constructor = PersistableBundle;

Object.defineProperty(PersistableBundle.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PersistableBundle(this.$native.super);
	},
	enumerable: true
});

PersistableBundle.className = 'android.os.PersistableBundle';
PersistableBundle.prototype.className = 'android.os.PersistableBundle';

// class property
Object.defineProperty(PersistableBundle, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.PersistableBundle');
	},
	enumerable: true,
	configurable: false
});


// Cast
PersistableBundle.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PersistableBundle(Hyperloop.cast('android.os.PersistableBundle', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/os/PersistableBundle.html#CREATOR
Object.defineProperty(PersistableBundle, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.PersistableBundle') {
				return new PersistableBundle(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/os/PersistableBundle.html#EMPTY
Object.defineProperty(PersistableBundle, 'EMPTY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('EMPTY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.PersistableBundle') {
				return new PersistableBundle(result);
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
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PersistableBundle.html#clone()}
 **/
PersistableBundle.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PersistableBundle') {
			return new PersistableBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPersistableBundle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PersistableBundle.html#getPersistableBundle(java.lang.String)}
 **/
PersistableBundle.prototype.getPersistableBundle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPersistableBundle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PersistableBundle') {
			return new PersistableBundle(result);
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
 * @see {@link http://developer.android.com/reference/android/os/PersistableBundle.html#toString()}
 **/
PersistableBundle.prototype.toString = function() {
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
		if (result.apiName === 'android.os.PersistableBundle') {
			return new PersistableBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putPersistableBundle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/PersistableBundle.html#putPersistableBundle(java.lang.String, android.os.PersistableBundle)}
 **/
PersistableBundle.prototype.putPersistableBundle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putPersistableBundle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.PersistableBundle') {
			return new PersistableBundle(result);
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
 * @see {@link http://developer.android.com/reference/android/os/PersistableBundle.html#describeContents()}
 **/
PersistableBundle.prototype.describeContents = function() {
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
		if (result.apiName === 'android.os.PersistableBundle') {
			return new PersistableBundle(result);
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
 * @see {@link http://developer.android.com/reference/android/os/PersistableBundle.html#writeToParcel(android.os.Parcel, int)}
 **/
PersistableBundle.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.os.PersistableBundle') {
			return new PersistableBundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PersistableBundle;
