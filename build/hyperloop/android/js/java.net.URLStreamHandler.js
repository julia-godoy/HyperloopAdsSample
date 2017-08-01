/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.URLStreamHandler
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.net');

/**
 * @class java.net.URLStreamHandler
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html}
 **/
var URLStreamHandler = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.net.URLStreamHandler')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.net.URLStreamHandler. Create a subclass using java.net.URLStreamHandler.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
URLStreamHandler.prototype = Object.create(SuperClass.prototype);
URLStreamHandler.prototype.constructor = URLStreamHandler;

Object.defineProperty(URLStreamHandler.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new URLStreamHandler(this.$native.super);
	},
	enumerable: true
});

URLStreamHandler.className = 'java.net.URLStreamHandler';
URLStreamHandler.prototype.className = 'java.net.URLStreamHandler';

// class property
Object.defineProperty(URLStreamHandler, 'class', {
	get: function() {
		return Hyperloop.getClass('java.net.URLStreamHandler');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
URLStreamHandler.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.net.URLStreamHandler');

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
	SubClass.prototype = Object.create(URLStreamHandler.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
URLStreamHandler.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new URLStreamHandler(Hyperloop.cast('java.net.URLStreamHandler', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function parseURL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#parseURL(java.net.URL, java.lang.String, int, int)}
 **/
URLStreamHandler.prototype.parseURL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parseURL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toExternalForm
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#toExternalForm(java.net.URL)}
 **/
URLStreamHandler.prototype.toExternalForm = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toExternalForm',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hostsEqual
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#hostsEqual(java.net.URL, java.net.URL)}
 **/
URLStreamHandler.prototype.hostsEqual = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hostsEqual',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#getDefaultPort()}
 **/
URLStreamHandler.prototype.getDefaultPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDefaultPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openConnection
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#openConnection(java.net.URL)}
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#openConnection(java.net.URL, java.net.Proxy)}
 **/
URLStreamHandler.prototype.openConnection = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openConnection',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new URLStreamHandler(result);
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
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#hashCode(java.net.URL)}
 **/
URLStreamHandler.prototype.hashCode = function() {
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
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sameFile
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#sameFile(java.net.URL, java.net.URL)}
 **/
URLStreamHandler.prototype.sameFile = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sameFile',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new URLStreamHandler(result);
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
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#equals(java.net.URL, java.net.URL)}
 **/
URLStreamHandler.prototype.equals = function() {
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
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHostAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#getHostAddress(java.net.URL)}
 **/
URLStreamHandler.prototype.getHostAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHostAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setURL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#setURL(java.net.URL, java.lang.String, java.lang.String, int, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/net/URLStreamHandler.html#setURL(java.net.URL, java.lang.String, java.lang.String, int, java.lang.String, java.lang.String)}
 **/
URLStreamHandler.prototype.setURL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setURL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLStreamHandler') {
			return new URLStreamHandler(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = URLStreamHandler;
