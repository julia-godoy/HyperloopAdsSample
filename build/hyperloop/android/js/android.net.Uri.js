/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.net.Uri
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.net');

/**
 * @class android.net.Uri
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/net/Uri.html}
 **/
var Uri = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.net.Uri')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.net.Uri. Create a subclass using android.net.Uri.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Uri.prototype = Object.create(SuperClass.prototype);
Uri.prototype.constructor = Uri;

Object.defineProperty(Uri.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Uri(this.$native.super);
	},
	enumerable: true
});

Uri.className = 'android.net.Uri';
Uri.prototype.className = 'android.net.Uri';

// class property
Object.defineProperty(Uri, 'class', {
	get: function() {
		return Hyperloop.getClass('android.net.Uri');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Uri.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.net.Uri');

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
	SubClass.prototype = Object.create(Uri.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Uri.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Uri(Hyperloop.cast('android.net.Uri', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(Uri, 'Builder', {
	get: function() {
		return require('android.net.Uri$Builder');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/net/Uri.html#CREATOR
Object.defineProperty(Uri, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.net.Uri') {
				return new Uri(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/android/net/Uri.html#EMPTY
Object.defineProperty(Uri, 'EMPTY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('EMPTY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.net.Uri') {
				return new Uri(result);
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
 * @function encode
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#encode(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#encode(java.lang.String, java.lang.String)}
 **/
Uri.encode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'encode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decode
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#decode(java.lang.String)}
 **/
Uri.decode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'decode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fromFile
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#fromFile(java.io.File)}
 **/
Uri.fromFile = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromFile',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fromParts
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#fromParts(java.lang.String, java.lang.String, java.lang.String)}
 **/
Uri.fromParts = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromParts',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function withAppendedPath
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#withAppendedPath(android.net.Uri, java.lang.String)}
 **/
Uri.withAppendedPath = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'withAppendedPath',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parse
 * @static
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#parse(java.lang.String)}
 **/
Uri.parse = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parse',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#writeToParcel(android.os.Parcel, android.net.Uri)}
 **/
Uri.writeToParcel = function() {
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
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
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
 * @function getQueryParameter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getQueryParameter(java.lang.String)}
 **/
Uri.prototype.getQueryParameter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQueryParameter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOpaque
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#isOpaque()}
 **/
Uri.prototype.isOpaque = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOpaque',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQueryParameterNames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getQueryParameterNames()}
 **/
Uri.prototype.getQueryParameterNames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQueryParameterNames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#compareTo(android.net.Uri)}
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#compareTo(java.lang.Object)}
 **/
Uri.prototype.compareTo = function() {
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
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBooleanQueryParameter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getBooleanQueryParameter(java.lang.String, boolean)}
 **/
Uri.prototype.getBooleanQueryParameter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getBooleanQueryParameter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#hashCode()}
 **/
Uri.prototype.hashCode = function() {
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
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getPath()}
 **/
Uri.prototype.getPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function normalizeScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#normalizeScheme()}
 **/
Uri.prototype.normalizeScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'normalizeScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHost
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getHost()}
 **/
Uri.prototype.getHost = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHost',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQuery
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getQuery()}
 **/
Uri.prototype.getQuery = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQuery',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLastPathSegment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getLastPathSegment()}
 **/
Uri.prototype.getLastPathSegment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLastPathSegment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getScheme()}
 **/
Uri.prototype.getScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPathSegments
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getPathSegments()}
 **/
Uri.prototype.getPathSegments = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPathSegments',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getAuthority()}
 **/
Uri.prototype.getAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedQuery
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedQuery()}
 **/
Uri.prototype.getEncodedQuery = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedQuery',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHierarchical
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#isHierarchical()}
 **/
Uri.prototype.isHierarchical = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHierarchical',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedFragment()}
 **/
Uri.prototype.getEncodedFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getPort()}
 **/
Uri.prototype.getPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedSchemeSpecificPart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedSchemeSpecificPart()}
 **/
Uri.prototype.getEncodedSchemeSpecificPart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedSchemeSpecificPart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getQueryParameters
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getQueryParameters(java.lang.String)}
 **/
Uri.prototype.getQueryParameters = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getQueryParameters',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedPath()}
 **/
Uri.prototype.getEncodedPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#equals(java.lang.Object)}
 **/
Uri.prototype.equals = function() {
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
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function buildUpon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#buildUpon()}
 **/
Uri.prototype.buildUpon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'buildUpon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAbsolute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#isAbsolute()}
 **/
Uri.prototype.isAbsolute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAbsolute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
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
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#toString()}
 **/
Uri.prototype.toString = function() {
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
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFragment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getFragment()}
 **/
Uri.prototype.getFragment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFragment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUserInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getUserInfo()}
 **/
Uri.prototype.getUserInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUserInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRelative
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#isRelative()}
 **/
Uri.prototype.isRelative = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRelative',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSchemeSpecificPart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getSchemeSpecificPart()}
 **/
Uri.prototype.getSchemeSpecificPart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSchemeSpecificPart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedAuthority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedAuthority()}
 **/
Uri.prototype.getEncodedAuthority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedAuthority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getEncodedUserInfo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/net/Uri.html#getEncodedUserInfo()}
 **/
Uri.prototype.getEncodedUserInfo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getEncodedUserInfo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.net.Uri') {
			return new Uri(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Uri;
