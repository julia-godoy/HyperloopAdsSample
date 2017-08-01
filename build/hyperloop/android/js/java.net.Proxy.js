/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.Proxy
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.net');

/**
 * @class java.net.Proxy
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/Proxy.html}
 **/
var _Proxy = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.net.Proxy')) {
		result = arguments[0];
	}
	else {
		result = _Proxy.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
_Proxy.prototype = Object.create(SuperClass.prototype);
_Proxy.prototype.constructor = _Proxy;

Object.defineProperty(_Proxy.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new _Proxy(this.$native.super);
	},
	enumerable: true
});

_Proxy.className = 'java.net.Proxy';
_Proxy.prototype.className = 'java.net.Proxy';

// class property
Object.defineProperty(_Proxy, 'class', {
	get: function() {
		return Hyperloop.getClass('java.net.Proxy');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
_Proxy.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.net.Proxy');

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
	SubClass.prototype = Object.create(_Proxy.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
_Proxy.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new _Proxy(Hyperloop.cast('java.net.Proxy', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(_Proxy, 'Type', {
	get: function() {
		return require('java.net.Proxy$Type');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/java/net/Proxy.html#NO_PROXY
Object.defineProperty(_Proxy, 'NO_PROXY', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('NO_PROXY');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.Proxy') {
				return new _Proxy(result);
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
 * @function address
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Proxy.html#address()}
 **/
_Proxy.prototype.address = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'address',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Proxy') {
			return new _Proxy(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Proxy.html#hashCode()}
 **/
_Proxy.prototype.hashCode = function() {
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
		if (result.apiName === 'java.net.Proxy') {
			return new _Proxy(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Proxy.html#equals(java.lang.Object)}
 **/
_Proxy.prototype.equals = function() {
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
		if (result.apiName === 'java.net.Proxy') {
			return new _Proxy(result);
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
 * @see {@link http://developer.android.com/reference/java/net/Proxy.html#toString()}
 **/
_Proxy.prototype.toString = function() {
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
		if (result.apiName === 'java.net.Proxy') {
			return new _Proxy(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function type
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/Proxy.html#type()}
 **/
_Proxy.prototype.type = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'type',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Proxy') {
			return new _Proxy(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = _Proxy;
