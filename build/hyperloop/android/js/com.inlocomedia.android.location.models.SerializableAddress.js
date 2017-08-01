/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.location.models.SerializableAddress
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.location.models');

/**
 * @class com.inlocomedia.android.location.models.SerializableAddress
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html}
 **/
var SerializableAddress = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.location.models.SerializableAddress')) {
		result = arguments[0];
	}
	else {
		result = SerializableAddress.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
SerializableAddress.prototype = Object.create(SuperClass.prototype);
SerializableAddress.prototype.constructor = SerializableAddress;

Object.defineProperty(SerializableAddress.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SerializableAddress(this.$native.super);
	},
	enumerable: true
});

SerializableAddress.className = 'com.inlocomedia.android.location.models.SerializableAddress';
SerializableAddress.prototype.className = 'com.inlocomedia.android.location.models.SerializableAddress';

// class property
Object.defineProperty(SerializableAddress, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.location.models.SerializableAddress');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SerializableAddress.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('com.inlocomedia.android.location.models.SerializableAddress');

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
	SubClass.prototype = Object.create(SerializableAddress.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SerializableAddress.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SerializableAddress(Hyperloop.cast('com.inlocomedia.android.location.models.SerializableAddress', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getSubAdminArea
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#getSubAdminArea()}
 **/
SerializableAddress.prototype.getSubAdminArea = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSubAdminArea',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCountryName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#setCountryName(java.lang.String)}
 **/
SerializableAddress.prototype.setCountryName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCountryName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setCountryCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#setCountryCode(java.lang.String)}
 **/
SerializableAddress.prototype.setCountryCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setCountryCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
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
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#hashCode()}
 **/
SerializableAddress.prototype.hashCode = function() {
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
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseToJSON
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#parseToJSON(org.json.JSONObject)}
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#parseToJSON()}
 **/
SerializableAddress.prototype.parseToJSON = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parseToJSON',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCountryName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#getCountryName()}
 **/
SerializableAddress.prototype.getCountryName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCountryName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPostalCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#setPostalCode(java.lang.String)}
 **/
SerializableAddress.prototype.setPostalCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPostalCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubLocality
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#setSubLocality(java.lang.String)}
 **/
SerializableAddress.prototype.setSubLocality = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubLocality',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCountryCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#getCountryCode()}
 **/
SerializableAddress.prototype.getCountryCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCountryCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isEmpty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#isEmpty()}
 **/
SerializableAddress.prototype.isEmpty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isEmpty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toVisitMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#toVisitMap()}
 **/
SerializableAddress.prototype.toVisitMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toVisitMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPostalCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#getPostalCode()}
 **/
SerializableAddress.prototype.getPostalCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPostalCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSubLocality
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#getSubLocality()}
 **/
SerializableAddress.prototype.getSubLocality = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSubLocality',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getThoroughfare
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#getThoroughfare()}
 **/
SerializableAddress.prototype.getThoroughfare = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getThoroughfare',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubThoroughfare
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#setSubThoroughfare(java.lang.String)}
 **/
SerializableAddress.prototype.setSubThoroughfare = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubThoroughfare',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setThoroughfare
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#setThoroughfare(java.lang.String)}
 **/
SerializableAddress.prototype.setThoroughfare = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setThoroughfare',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSubThoroughfare
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#getSubThoroughfare()}
 **/
SerializableAddress.prototype.getSubThoroughfare = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSubThoroughfare',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAdminArea
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#getAdminArea()}
 **/
SerializableAddress.prototype.getAdminArea = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAdminArea',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toMap
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#toMap()}
 **/
SerializableAddress.prototype.toMap = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toMap',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
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
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#equals(java.lang.Object)}
 **/
SerializableAddress.prototype.equals = function() {
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
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseFromJSON
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#parseFromJSON(org.json.JSONObject)}
 **/
SerializableAddress.prototype.parseFromJSON = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parseFromJSON',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
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
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#toString()}
 **/
SerializableAddress.prototype.toString = function() {
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
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocality
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#setLocality(java.lang.String)}
 **/
SerializableAddress.prototype.setLocality = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocality',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAdminArea
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#setAdminArea(java.lang.String)}
 **/
SerializableAddress.prototype.setAdminArea = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAdminArea',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSubAdminArea
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#setSubAdminArea(java.lang.String)}
 **/
SerializableAddress.prototype.setSubAdminArea = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSubAdminArea',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#getLocale()}
 **/
SerializableAddress.prototype.getLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#setLocale(java.util.Locale)}
 **/
SerializableAddress.prototype.setLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocality
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/SerializableAddress.html#getLocality()}
 **/
SerializableAddress.prototype.getLocality = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocality',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.SerializableAddress') {
			return new SerializableAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SerializableAddress;
