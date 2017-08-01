/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.InetAddress
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.net');

/**
 * @class java.net.InetAddress
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html}
 **/
var InetAddress = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.net.InetAddress')) {
		result = arguments[0];
	}
	else {
		result = InetAddress.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
InetAddress.prototype = Object.create(SuperClass.prototype);
InetAddress.prototype.constructor = InetAddress;

Object.defineProperty(InetAddress.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new InetAddress(this.$native.super);
	},
	enumerable: true
});

InetAddress.className = 'java.net.InetAddress';
InetAddress.prototype.className = 'java.net.InetAddress';

// class property
Object.defineProperty(InetAddress, 'class', {
	get: function() {
		return Hyperloop.getClass('java.net.InetAddress');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
InetAddress.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.net.InetAddress');

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
	SubClass.prototype = Object.create(InetAddress.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
InetAddress.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new InetAddress(Hyperloop.cast('java.net.InetAddress', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getAllByName
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getAllByName(java.lang.String)}
 **/
InetAddress.getAllByName = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getAllByName',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalHost
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getLocalHost()}
 **/
InetAddress.getLocalHost = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getLocalHost',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByName
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getByName(java.lang.String)}
 **/
InetAddress.getByName = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getByName',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByAddress
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getByAddress(java.lang.String, byte[])}
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getByAddress(byte[])}
 **/
InetAddress.getByAddress = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getByAddress',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLoopbackAddress
 * @static
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getLoopbackAddress()}
 **/
InetAddress.getLoopbackAddress = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getLoopbackAddress',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
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
 * @function isMCSiteLocal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMCSiteLocal()}
 **/
InetAddress.prototype.isMCSiteLocal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMCSiteLocal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isReachable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isReachable(int)}
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isReachable(java.net.NetworkInterface, int, int)}
 **/
InetAddress.prototype.isReachable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isReachable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMCGlobal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMCGlobal()}
 **/
InetAddress.prototype.isMCGlobal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMCGlobal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHostName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getHostName()}
 **/
InetAddress.prototype.getHostName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHostName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMCOrgLocal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMCOrgLocal()}
 **/
InetAddress.prototype.isMCOrgLocal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMCOrgLocal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAnyLocalAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isAnyLocalAddress()}
 **/
InetAddress.prototype.isAnyLocalAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAnyLocalAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLinkLocalAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isLinkLocalAddress()}
 **/
InetAddress.prototype.isLinkLocalAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLinkLocalAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCanonicalHostName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getCanonicalHostName()}
 **/
InetAddress.prototype.getCanonicalHostName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCanonicalHostName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLoopbackAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isLoopbackAddress()}
 **/
InetAddress.prototype.isLoopbackAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLoopbackAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMCLinkLocal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMCLinkLocal()}
 **/
InetAddress.prototype.isMCLinkLocal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMCLinkLocal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSiteLocalAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isSiteLocalAddress()}
 **/
InetAddress.prototype.isSiteLocalAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSiteLocalAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMulticastAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMulticastAddress()}
 **/
InetAddress.prototype.isMulticastAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMulticastAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#hashCode()}
 **/
InetAddress.prototype.hashCode = function() {
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
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#equals(java.lang.Object)}
 **/
InetAddress.prototype.equals = function() {
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
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getAddress()}
 **/
InetAddress.prototype.getAddress = function() {
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
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#toString()}
 **/
InetAddress.prototype.toString = function() {
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
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
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
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#getHostAddress()}
 **/
InetAddress.prototype.getHostAddress = function() {
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
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isMCNodeLocal
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/InetAddress.html#isMCNodeLocal()}
 **/
InetAddress.prototype.isMCNodeLocal = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isMCNodeLocal',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.InetAddress') {
			return new InetAddress(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = InetAddress;
