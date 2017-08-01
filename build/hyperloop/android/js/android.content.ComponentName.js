/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.ComponentName
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.ComponentName
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html}
 **/
var ComponentName = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.ComponentName')) {
		result = arguments[0];
	}
	else {
		result = ComponentName.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ComponentName.prototype = Object.create(SuperClass.prototype);
ComponentName.prototype.constructor = ComponentName;

Object.defineProperty(ComponentName.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ComponentName(this.$native.super);
	},
	enumerable: true
});

ComponentName.className = 'android.content.ComponentName';
ComponentName.prototype.className = 'android.content.ComponentName';

// class property
Object.defineProperty(ComponentName, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.ComponentName');
	},
	enumerable: true,
	configurable: false
});


// Cast
ComponentName.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ComponentName(Hyperloop.cast('android.content.ComponentName', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/content/ComponentName.html#CREATOR
Object.defineProperty(ComponentName, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.ComponentName') {
				return new ComponentName(result);
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
 * @function readFromParcel
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#readFromParcel(android.os.Parcel)}
 **/
ComponentName.readFromParcel = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'readFromParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unflattenFromString
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#unflattenFromString(java.lang.String)}
 **/
ComponentName.unflattenFromString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'unflattenFromString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createRelative
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#createRelative(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#createRelative(android.content.Context, java.lang.String)}
 **/
ComponentName.createRelative = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createRelative',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#writeToParcel(android.content.ComponentName, android.os.Parcel)}
 **/
ComponentName.writeToParcel = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
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
 * @function flattenToString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#flattenToString()}
 **/
ComponentName.prototype.flattenToString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flattenToString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getShortClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#getShortClassName()}
 **/
ComponentName.prototype.getShortClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getShortClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#compareTo(android.content.ComponentName)}
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#compareTo(java.lang.Object)}
 **/
ComponentName.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#describeContents()}
 **/
ComponentName.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toShortString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#toShortString()}
 **/
ComponentName.prototype.toShortString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toShortString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#hashCode()}
 **/
ComponentName.prototype.hashCode = function() {
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
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#equals(java.lang.Object)}
 **/
ComponentName.prototype.equals = function() {
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
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#clone()}
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#clone()}
 **/
ComponentName.prototype.clone = function() {
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
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#toString()}
 **/
ComponentName.prototype.toString = function() {
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
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackageName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#getPackageName()}
 **/
ComponentName.prototype.getPackageName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackageName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#getClassName()}
 **/
ComponentName.prototype.getClassName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClassName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function flattenToShortString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#flattenToShortString()}
 **/
ComponentName.prototype.flattenToShortString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flattenToShortString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
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
 * @see {@link http://developer.android.com/reference/android/content/ComponentName.html#writeToParcel(android.os.Parcel, int)}
 **/
ComponentName.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.ComponentName') {
			return new ComponentName(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ComponentName;
