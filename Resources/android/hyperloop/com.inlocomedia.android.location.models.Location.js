/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.location.models.Location
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.location.models');

/**
 * @class com.inlocomedia.android.location.models.Location
 * @extends com.inlocomedia.android.core.serialization.json.JsonableModel 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html}
 **/
var Location = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.location.models.Location')) {
		result = arguments[0];
	}
	else {
		result = Location.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('com.inlocomedia.android.core.serialization.json.JsonableModel');
Location.prototype = Object.create(SuperClass.prototype);
Location.prototype.constructor = Location;

Object.defineProperty(Location.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Location(this.$native.super);
	},
	enumerable: true
});

Location.className = 'com.inlocomedia.android.location.models.Location';
Location.prototype.className = 'com.inlocomedia.android.location.models.Location';

// class property
Object.defineProperty(Location, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.location.models.Location');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Location.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('com.inlocomedia.android.location.models.Location');

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
	SubClass.prototype = Object.create(Location.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Location.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Location(Hyperloop.cast('com.inlocomedia.android.location.models.Location', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(Location, 'a', {
	get: function() {
		return require('com.inlocomedia.android.location.models.Location$a');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function parseListToJSON
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#parseListToJSON(java.util.List)}
 **/
Location.parseListToJSON = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseListToJSON',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseListFromJSON
 * @static
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#parseListFromJSON(org.json.JSONObject)}
 **/
Location.parseListFromJSON = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseListFromJSON',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
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
 * @function getPoint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getPoint()}
 **/
Location.prototype.getPoint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPoint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRetailId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getRetailId()}
 **/
Location.prototype.getRetailId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRetailId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLongitude
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getLongitude()}
 **/
Location.prototype.getLongitude = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLongitude',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLatitude
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getLatitude()}
 **/
Location.prototype.getLatitude = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLatitude',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPrecision
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getPrecision()}
 **/
Location.prototype.getPrecision = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPrecision',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function distanceTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#distanceTo(com.inlocomedia.android.location.models.Location)}
 **/
Location.prototype.distanceTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'distanceTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasIndoorLocation
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#hasIndoorLocation()}
 **/
Location.prototype.hasIndoorLocation = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasIndoorLocation',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getX()}
 **/
Location.prototype.getX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getY()}
 **/
Location.prototype.getY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAngle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getAngle()}
 **/
Location.prototype.getAngle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAngle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIndoorTimestamp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getIndoorTimestamp()}
 **/
Location.prototype.getIndoorTimestamp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIndoorTimestamp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getAddress()}
 **/
Location.prototype.getAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
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
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#toString()}
 **/
Location.prototype.toString = function() {
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
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFloor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getFloor()}
 **/
Location.prototype.getFloor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFloor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOutdoorTimestamp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/location/models/Location.html#getOutdoorTimestamp()}
 **/
Location.prototype.getOutdoorTimestamp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutdoorTimestamp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.location.models.Location') {
			return new Location(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Location;
