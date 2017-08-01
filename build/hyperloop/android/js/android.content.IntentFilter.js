/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.IntentFilter
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.content');

/**
 * @class android.content.IntentFilter
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html}
 **/
var IntentFilter = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.IntentFilter')) {
		result = arguments[0];
	}
	else {
		result = IntentFilter.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
IntentFilter.prototype = Object.create(SuperClass.prototype);
IntentFilter.prototype.constructor = IntentFilter;

Object.defineProperty(IntentFilter.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new IntentFilter(this.$native.super);
	},
	enumerable: true
});

IntentFilter.className = 'android.content.IntentFilter';
IntentFilter.prototype.className = 'android.content.IntentFilter';

// class property
Object.defineProperty(IntentFilter, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.IntentFilter');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
IntentFilter.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.IntentFilter');

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
	SubClass.prototype = Object.create(IntentFilter.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
IntentFilter.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new IntentFilter(Hyperloop.cast('android.content.IntentFilter', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_PORT}
 */
IntentFilter.MATCH_CATEGORY_PORT = 4194304;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#NO_MATCH_TYPE}
 */
IntentFilter.NO_MATCH_TYPE = -1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_PATH}
 */
IntentFilter.MATCH_CATEGORY_PATH = 5242880;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#SYSTEM_LOW_PRIORITY}
 */
IntentFilter.SYSTEM_LOW_PRIORITY = -1000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_SCHEME_SPECIFIC_PART}
 */
IntentFilter.MATCH_CATEGORY_SCHEME_SPECIFIC_PART = 5767168;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_HOST}
 */
IntentFilter.MATCH_CATEGORY_HOST = 3145728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_TYPE}
 */
IntentFilter.MATCH_CATEGORY_TYPE = 6291456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#NO_MATCH_DATA}
 */
IntentFilter.NO_MATCH_DATA = -2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_EMPTY}
 */
IntentFilter.MATCH_CATEGORY_EMPTY = 1048576;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_SCHEME}
 */
IntentFilter.MATCH_CATEGORY_SCHEME = 2097152;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_ADJUSTMENT_MASK}
 */
IntentFilter.MATCH_ADJUSTMENT_MASK = 65535;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#NO_MATCH_CATEGORY}
 */
IntentFilter.NO_MATCH_CATEGORY = -4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_ADJUSTMENT_NORMAL}
 */
IntentFilter.MATCH_ADJUSTMENT_NORMAL = 32768;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#MATCH_CATEGORY_MASK}
 */
IntentFilter.MATCH_CATEGORY_MASK = 268369920;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#SYSTEM_HIGH_PRIORITY}
 */
IntentFilter.SYSTEM_HIGH_PRIORITY = 1000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#NO_MATCH_ACTION}
 */
IntentFilter.NO_MATCH_ACTION = -3;

// Inner classes
Object.defineProperty(IntentFilter, 'MalformedMimeTypeException', {
	get: function() {
		return require('android.content.IntentFilter$MalformedMimeTypeException');
	},
	enumerable: true
});
Object.defineProperty(IntentFilter, 'AuthorityEntry', {
	get: function() {
		return require('android.content.IntentFilter$AuthorityEntry');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/content/IntentFilter.html#CREATOR
Object.defineProperty(IntentFilter, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.content.IntentFilter') {
				return new IntentFilter(result);
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
 * @function create
 * @static
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#create(java.lang.String, java.lang.String)}
 **/
IntentFilter.create = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'create',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
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
 * @function getDataSchemeSpecificPart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getDataSchemeSpecificPart(int)}
 **/
IntentFilter.prototype.getDataSchemeSpecificPart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataSchemeSpecificPart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToXml
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#writeToXml(org.xmlpull.v1.XmlSerializer)}
 **/
IntentFilter.prototype.writeToXml = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToXml',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDataType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getDataType(int)}
 **/
IntentFilter.prototype.getDataType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function matchDataAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#matchDataAuthority(android.net.Uri)}
 **/
IntentFilter.prototype.matchDataAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'matchDataAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDataScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getDataScheme(int)}
 **/
IntentFilter.prototype.getDataScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addDataAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addDataAuthority(java.lang.String, java.lang.String)}
 **/
IntentFilter.prototype.addDataAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addDataAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readFromXml
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#readFromXml(org.xmlpull.v1.XmlPullParser)}
 **/
IntentFilter.prototype.readFromXml = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readFromXml',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDataPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getDataPath(int)}
 **/
IntentFilter.prototype.getDataPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function matchData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#matchData(java.lang.String, java.lang.String, android.net.Uri)}
 **/
IntentFilter.prototype.matchData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'matchData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countDataTypes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countDataTypes()}
 **/
IntentFilter.prototype.countDataTypes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countDataTypes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCategory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getCategory(int)}
 **/
IntentFilter.prototype.getCategory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCategory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function schemeSpecificPartsIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#schemeSpecificPartsIterator()}
 **/
IntentFilter.prototype.schemeSpecificPartsIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'schemeSpecificPartsIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addDataScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addDataScheme(java.lang.String)}
 **/
IntentFilter.prototype.addDataScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addDataScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countDataPaths
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countDataPaths()}
 **/
IntentFilter.prototype.countDataPaths = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countDataPaths',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countActions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countActions()}
 **/
IntentFilter.prototype.countActions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countActions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countDataAuthorities
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countDataAuthorities()}
 **/
IntentFilter.prototype.countDataAuthorities = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countDataAuthorities',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDataAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getDataAuthority(int)}
 **/
IntentFilter.prototype.getDataAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDataAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function matchAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#matchAction(java.lang.String)}
 **/
IntentFilter.prototype.matchAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'matchAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPriority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#setPriority(int)}
 **/
IntentFilter.prototype.setPriority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPriority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#writeToParcel(android.os.Parcel, int)}
 **/
IntentFilter.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addDataPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addDataPath(java.lang.String, int)}
 **/
IntentFilter.prototype.addDataPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addDataPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasDataAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasDataAuthority(android.net.Uri)}
 **/
IntentFilter.prototype.hasDataAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasDataAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function matchCategories
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#matchCategories(java.util.Set)}
 **/
IntentFilter.prototype.matchCategories = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'matchCategories',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasDataType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasDataType(java.lang.String)}
 **/
IntentFilter.prototype.hasDataType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasDataType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countDataSchemes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countDataSchemes()}
 **/
IntentFilter.prototype.countDataSchemes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countDataSchemes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasDataSchemeSpecificPart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasDataSchemeSpecificPart(java.lang.String)}
 **/
IntentFilter.prototype.hasDataSchemeSpecificPart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasDataSchemeSpecificPart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addCategory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addCategory(java.lang.String)}
 **/
IntentFilter.prototype.addCategory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addCategory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addAction(java.lang.String)}
 **/
IntentFilter.prototype.addAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasAction(java.lang.String)}
 **/
IntentFilter.prototype.hasAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function pathsIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#pathsIterator()}
 **/
IntentFilter.prototype.pathsIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'pathsIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addDataType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addDataType(java.lang.String)}
 **/
IntentFilter.prototype.addDataType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addDataType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addDataSchemeSpecificPart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#addDataSchemeSpecificPart(java.lang.String, int)}
 **/
IntentFilter.prototype.addDataSchemeSpecificPart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addDataSchemeSpecificPart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function categoriesIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#categoriesIterator()}
 **/
IntentFilter.prototype.categoriesIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'categoriesIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function authoritiesIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#authoritiesIterator()}
 **/
IntentFilter.prototype.authoritiesIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'authoritiesIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dump
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#dump(android.util.Printer, java.lang.String)}
 **/
IntentFilter.prototype.dump = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dump',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasDataPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasDataPath(java.lang.String)}
 **/
IntentFilter.prototype.hasDataPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasDataPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countDataSchemeSpecificParts
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countDataSchemeSpecificParts()}
 **/
IntentFilter.prototype.countDataSchemeSpecificParts = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countDataSchemeSpecificParts',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasDataScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasDataScheme(java.lang.String)}
 **/
IntentFilter.prototype.hasDataScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasDataScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function schemesIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#schemesIterator()}
 **/
IntentFilter.prototype.schemesIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'schemesIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function match
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#match(android.content.ContentResolver, android.content.Intent, boolean, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#match(java.lang.String, java.lang.String, java.lang.String, android.net.Uri, java.util.Set, java.lang.String)}
 **/
IntentFilter.prototype.match = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'match',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getAction(int)}
 **/
IntentFilter.prototype.getAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
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
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#describeContents()}
 **/
IntentFilter.prototype.describeContents = function() {
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
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hasCategory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#hasCategory(java.lang.String)}
 **/
IntentFilter.prototype.hasCategory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hasCategory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function typesIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#typesIterator()}
 **/
IntentFilter.prototype.typesIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'typesIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPriority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#getPriority()}
 **/
IntentFilter.prototype.getPriority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPriority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function actionsIterator
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#actionsIterator()}
 **/
IntentFilter.prototype.actionsIterator = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'actionsIterator',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countCategories
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.html#countCategories()}
 **/
IntentFilter.prototype.countCategories = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countCategories',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter') {
			return new IntentFilter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = IntentFilter;
