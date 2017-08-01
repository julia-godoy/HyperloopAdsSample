/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.Bundle
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.os');

/**
 * @class android.os.Bundle
 * @extends android.os.BaseBundle 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html}
 **/
var Bundle = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.Bundle')) {
		result = arguments[0];
	}
	else {
		result = Bundle.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.os.BaseBundle');
Bundle.prototype = Object.create(SuperClass.prototype);
Bundle.prototype.constructor = Bundle;

Object.defineProperty(Bundle.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Bundle(this.$native.super);
	},
	enumerable: true
});

Bundle.className = 'android.os.Bundle';
Bundle.prototype.className = 'android.os.Bundle';

// class property
Object.defineProperty(Bundle, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.Bundle');
	},
	enumerable: true,
	configurable: false
});


// Cast
Bundle.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Bundle(Hyperloop.cast('android.os.Bundle', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/os/Bundle.html#CREATOR
Object.defineProperty(Bundle, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.Bundle') {
				return new Bundle(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/os/Bundle.html#EMPTY
Object.defineProperty(Bundle, 'EMPTY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('EMPTY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.Bundle') {
				return new Bundle(result);
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
 * @function putIntegerArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putIntegerArrayList(java.lang.String, java.util.ArrayList)}
 **/
Bundle.prototype.putIntegerArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putIntegerArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putBundle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putBundle(java.lang.String, android.os.Bundle)}
 **/
Bundle.prototype.putBundle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putBundle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getCharArray(java.lang.String)}
 **/
Bundle.prototype.getCharArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getByte(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getByte(java.lang.String, byte)}
 **/
Bundle.prototype.getByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putShortArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putShortArray(java.lang.String, short[])}
 **/
Bundle.prototype.putShortArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putShortArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharSequence
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getCharSequence(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getCharSequence(java.lang.String, java.lang.CharSequence)}
 **/
Bundle.prototype.getCharSequence = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharSequence',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSizeF
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getSizeF(java.lang.String)}
 **/
Bundle.prototype.getSizeF = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSizeF',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBundle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getBundle(java.lang.String)}
 **/
Bundle.prototype.getBundle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBundle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParcelableArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getParcelableArray(java.lang.String)}
 **/
Bundle.prototype.getParcelableArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParcelableArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSparseParcelableArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getSparseParcelableArray(java.lang.String)}
 **/
Bundle.prototype.getSparseParcelableArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSparseParcelableArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putParcelable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putParcelable(java.lang.String, android.os.Parcelable)}
 **/
Bundle.prototype.putParcelable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putParcelable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putCharArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putCharArray(java.lang.String, char[])}
 **/
Bundle.prototype.putCharArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putCharArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStringArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getStringArrayList(java.lang.String)}
 **/
Bundle.prototype.getStringArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStringArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloatArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getFloatArray(java.lang.String)}
 **/
Bundle.prototype.getFloatArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloatArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putFloat(java.lang.String, float)}
 **/
Bundle.prototype.putFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getChar(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getChar(java.lang.String, char)}
 **/
Bundle.prototype.getChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSerializable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getSerializable(java.lang.String)}
 **/
Bundle.prototype.getSerializable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSerializable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharSequenceArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getCharSequenceArrayList(java.lang.String)}
 **/
Bundle.prototype.getCharSequenceArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharSequenceArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCharSequenceArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getCharSequenceArray(java.lang.String)}
 **/
Bundle.prototype.getCharSequenceArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCharSequenceArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
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
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#writeToParcel(android.os.Parcel, int)}
 **/
Bundle.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putStringArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putStringArrayList(java.lang.String, java.util.ArrayList)}
 **/
Bundle.prototype.putStringArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putStringArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParcelable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getParcelable(java.lang.String)}
 **/
Bundle.prototype.getParcelable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParcelable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShortArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getShortArray(java.lang.String)}
 **/
Bundle.prototype.getShortArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShortArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getClassLoader()}
 **/
Bundle.prototype.getClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloat
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getFloat(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getFloat(java.lang.String, float)}
 **/
Bundle.prototype.getFloat = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloat',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#setClassLoader(java.lang.ClassLoader)}
 **/
Bundle.prototype.setClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasFileDescriptors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#hasFileDescriptors()}
 **/
Bundle.prototype.hasFileDescriptors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasFileDescriptors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putByte(java.lang.String, byte)}
 **/
Bundle.prototype.putByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putCharSequenceArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putCharSequenceArrayList(java.lang.String, java.util.ArrayList)}
 **/
Bundle.prototype.putCharSequenceArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putCharSequenceArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putAll
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putAll(android.os.Bundle)}
 **/
Bundle.prototype.putAll = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putAll',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putSize(java.lang.String, android.util.Size)}
 **/
Bundle.prototype.putSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putShort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putShort(java.lang.String, short)}
 **/
Bundle.prototype.putShort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putSparseParcelableArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putSparseParcelableArray(java.lang.String, android.util.SparseArray)}
 **/
Bundle.prototype.putSparseParcelableArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putSparseParcelableArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putBinder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putBinder(java.lang.String, android.os.IBinder)}
 **/
Bundle.prototype.putBinder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putBinder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putCharSequence
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putCharSequence(java.lang.String, java.lang.CharSequence)}
 **/
Bundle.prototype.putCharSequence = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putCharSequence',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntegerArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getIntegerArrayList(java.lang.String)}
 **/
Bundle.prototype.getIntegerArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntegerArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putSizeF
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putSizeF(java.lang.String, android.util.SizeF)}
 **/
Bundle.prototype.putSizeF = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putSizeF',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getShort(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getShort(java.lang.String, short)}
 **/
Bundle.prototype.getShort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putChar(java.lang.String, char)}
 **/
Bundle.prototype.putChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clear
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#clear()}
 **/
Bundle.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putParcelableArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putParcelableArray(java.lang.String, android.os.Parcelable[])}
 **/
Bundle.prototype.putParcelableArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putParcelableArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putParcelableArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putParcelableArrayList(java.lang.String, java.util.ArrayList)}
 **/
Bundle.prototype.putParcelableArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putParcelableArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFromParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#readFromParcel(android.os.Parcel)}
 **/
Bundle.prototype.readFromParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFromParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBinder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getBinder(java.lang.String)}
 **/
Bundle.prototype.getBinder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBinder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
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
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#describeContents()}
 **/
Bundle.prototype.describeContents = function() {
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
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putByteArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putByteArray(java.lang.String, byte[])}
 **/
Bundle.prototype.putByteArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putByteArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getSize(java.lang.String)}
 **/
Bundle.prototype.getSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParcelableArrayList
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getParcelableArrayList(java.lang.String)}
 **/
Bundle.prototype.getParcelableArrayList = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParcelableArrayList',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putCharSequenceArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putCharSequenceArray(java.lang.String, java.lang.CharSequence[])}
 **/
Bundle.prototype.putCharSequenceArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putCharSequenceArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putSerializable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putSerializable(java.lang.String, java.io.Serializable)}
 **/
Bundle.prototype.putSerializable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putSerializable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#clone()}
 **/
Bundle.prototype.clone = function() {
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
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByteArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#getByteArray(java.lang.String)}
 **/
Bundle.prototype.getByteArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getByteArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
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
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#toString()}
 **/
Bundle.prototype.toString = function() {
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
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function putFloatArray
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Bundle.html#putFloatArray(java.lang.String, float[])}
 **/
Bundle.prototype.putFloatArray = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'putFloatArray',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Bundle') {
			return new Bundle(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Bundle;
