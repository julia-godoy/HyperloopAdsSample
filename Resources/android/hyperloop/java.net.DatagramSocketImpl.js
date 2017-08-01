/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.DatagramSocketImpl
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.net');

/**
 * @class java.net.DatagramSocketImpl
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html}
 **/
var DatagramSocketImpl = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.net.DatagramSocketImpl')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.net.DatagramSocketImpl. Create a subclass using java.net.DatagramSocketImpl.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
DatagramSocketImpl.prototype = Object.create(SuperClass.prototype);
DatagramSocketImpl.prototype.constructor = DatagramSocketImpl;

Object.defineProperty(DatagramSocketImpl.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new DatagramSocketImpl(this.$native.super);
	},
	enumerable: true
});

DatagramSocketImpl.className = 'java.net.DatagramSocketImpl';
DatagramSocketImpl.prototype.className = 'java.net.DatagramSocketImpl';

// class property
Object.defineProperty(DatagramSocketImpl, 'class', {
	get: function() {
		return Hyperloop.getClass('java.net.DatagramSocketImpl');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
DatagramSocketImpl.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.net.DatagramSocketImpl');

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
	SubClass.prototype = Object.create(DatagramSocketImpl.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
DatagramSocketImpl.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new DatagramSocketImpl(Hyperloop.cast('java.net.DatagramSocketImpl', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/net/DatagramSocketImpl.html#localPort
Object.defineProperty(DatagramSocketImpl.prototype, 'localPort', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('localPort');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.DatagramSocketImpl') {
				return new DatagramSocketImpl(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('localPort', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/DatagramSocketImpl.html#fd
Object.defineProperty(DatagramSocketImpl.prototype, 'fd', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('fd');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.DatagramSocketImpl') {
				return new DatagramSocketImpl(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('fd', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function disconnect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#disconnect()}
 **/
DatagramSocketImpl.prototype.disconnect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'disconnect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function receive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#receive(java.net.DatagramPacket)}
 **/
DatagramSocketImpl.prototype.receive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'receive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#getLocalPort()}
 **/
DatagramSocketImpl.prototype.getLocalPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTTL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#setTTL(byte)}
 **/
DatagramSocketImpl.prototype.setTTL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTTL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTimeToLive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#getTimeToLive()}
 **/
DatagramSocketImpl.prototype.getTimeToLive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTimeToLive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function joinGroup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#joinGroup(java.net.SocketAddress, java.net.NetworkInterface)}
 **/
DatagramSocketImpl.prototype.joinGroup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'joinGroup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function leaveGroup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#leaveGroup(java.net.SocketAddress, java.net.NetworkInterface)}
 **/
DatagramSocketImpl.prototype.leaveGroup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'leaveGroup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peek
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#peek(java.net.InetAddress)}
 **/
DatagramSocketImpl.prototype.peek = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peek',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function bind
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#bind(int, java.net.InetAddress)}
 **/
DatagramSocketImpl.prototype.bind = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'bind',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peekData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#peekData(java.net.DatagramPacket)}
 **/
DatagramSocketImpl.prototype.peekData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peekData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function leave
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#leave(java.net.InetAddress)}
 **/
DatagramSocketImpl.prototype.leave = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'leave',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#getFileDescriptor()}
 **/
DatagramSocketImpl.prototype.getFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function create
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#create()}
 **/
DatagramSocketImpl.prototype.create = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'create',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function join
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#join(java.net.InetAddress)}
 **/
DatagramSocketImpl.prototype.join = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'join',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTimeToLive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#setTimeToLive(int)}
 **/
DatagramSocketImpl.prototype.setTimeToLive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTimeToLive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function send
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#send(java.net.DatagramPacket)}
 **/
DatagramSocketImpl.prototype.send = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'send',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function close
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#close()}
 **/
DatagramSocketImpl.prototype.close = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'close',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function connect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#connect(java.net.InetAddress, int)}
 **/
DatagramSocketImpl.prototype.connect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'connect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTTL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/DatagramSocketImpl.html#getTTL()}
 **/
DatagramSocketImpl.prototype.getTTL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTTL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.DatagramSocketImpl') {
			return new DatagramSocketImpl(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = DatagramSocketImpl;
