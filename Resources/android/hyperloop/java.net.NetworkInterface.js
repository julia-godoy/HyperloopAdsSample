/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.NetworkInterface
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.net');

/**
 * @class java.net.NetworkInterface
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html}
 **/
var NetworkInterface = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.net.NetworkInterface')) {
		result = arguments[0];
	}
	else {
		result = NetworkInterface.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
NetworkInterface.prototype = Object.create(SuperClass.prototype);
NetworkInterface.prototype.constructor = NetworkInterface;

Object.defineProperty(NetworkInterface.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new NetworkInterface(this.$native.super);
	},
	enumerable: true
});

NetworkInterface.className = 'java.net.NetworkInterface';
NetworkInterface.prototype.className = 'java.net.NetworkInterface';

// class property
Object.defineProperty(NetworkInterface, 'class', {
	get: function() {
		return Hyperloop.getClass('java.net.NetworkInterface');
	},
	enumerable: true,
	configurable: false
});


// Cast
NetworkInterface.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new NetworkInterface(Hyperloop.cast('java.net.NetworkInterface', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getByIndex
 * @static
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getByIndex(int)}
 **/
NetworkInterface.getByIndex = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getByIndex',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getByInetAddress
 * @static
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getByInetAddress(java.net.InetAddress)}
 **/
NetworkInterface.getByInetAddress = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getByInetAddress',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
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
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getByName(java.lang.String)}
 **/
NetworkInterface.getByName = function() {
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
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getNetworkInterfaces
 * @static
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getNetworkInterfaces()}
 **/
NetworkInterface.getNetworkInterfaces = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getNetworkInterfaces',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
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
 * @function getInterfaceAddresses
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getInterfaceAddresses()}
 **/
NetworkInterface.prototype.getInterfaceAddresses = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInterfaceAddresses',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getParent()}
 **/
NetworkInterface.prototype.getParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getName()}
 **/
NetworkInterface.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIndex
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getIndex()}
 **/
NetworkInterface.prototype.getIndex = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIndex',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSubInterfaces
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getSubInterfaces()}
 **/
NetworkInterface.prototype.getSubInterfaces = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSubInterfaces',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function supportsMulticast
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#supportsMulticast()}
 **/
NetworkInterface.prototype.supportsMulticast = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'supportsMulticast',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isPointToPoint
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#isPointToPoint()}
 **/
NetworkInterface.prototype.isPointToPoint = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isPointToPoint',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMTU
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getMTU()}
 **/
NetworkInterface.prototype.getMTU = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMTU',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isUp
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#isUp()}
 **/
NetworkInterface.prototype.isUp = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isUp',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDisplayName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getDisplayName()}
 **/
NetworkInterface.prototype.getDisplayName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDisplayName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
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
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#hashCode()}
 **/
NetworkInterface.prototype.hashCode = function() {
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
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
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
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#equals(java.lang.Object)}
 **/
NetworkInterface.prototype.equals = function() {
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
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLoopback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#isLoopback()}
 **/
NetworkInterface.prototype.isLoopback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLoopback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHardwareAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getHardwareAddress()}
 **/
NetworkInterface.prototype.getHardwareAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHardwareAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
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
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#toString()}
 **/
NetworkInterface.prototype.toString = function() {
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
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isVirtual
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#isVirtual()}
 **/
NetworkInterface.prototype.isVirtual = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isVirtual',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInetAddresses
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/NetworkInterface.html#getInetAddresses()}
 **/
NetworkInterface.prototype.getInetAddresses = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInetAddresses',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.NetworkInterface') {
			return new NetworkInterface(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = NetworkInterface;
