/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.ServerSocketChannel
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.channels');

/**
 * @class java.nio.channels.ServerSocketChannel
 * @extends java.nio.channels.spi.AbstractSelectableChannel 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html}
 **/
var ServerSocketChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.channels.ServerSocketChannel')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.ServerSocketChannel. Create a subclass using java.nio.channels.ServerSocketChannel.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.spi.AbstractSelectableChannel');
ServerSocketChannel.prototype = Object.create(SuperClass.prototype);
ServerSocketChannel.prototype.constructor = ServerSocketChannel;

Object.defineProperty(ServerSocketChannel.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ServerSocketChannel(this.$native.super);
	},
	enumerable: true
});

ServerSocketChannel.className = 'java.nio.channels.ServerSocketChannel';
ServerSocketChannel.prototype.className = 'java.nio.channels.ServerSocketChannel';

// class property
Object.defineProperty(ServerSocketChannel, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.channels.ServerSocketChannel');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ServerSocketChannel.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.channels.ServerSocketChannel');

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
	SubClass.prototype = Object.create(ServerSocketChannel.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ServerSocketChannel.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ServerSocketChannel(Hyperloop.cast('java.nio.channels.ServerSocketChannel', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function open
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html#open()}
 **/
ServerSocketChannel.open = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'open',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.ServerSocketChannel') {
			return new ServerSocketChannel(result);
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
 * @function setOption
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html#setOption(java.net.SocketOption, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html#setOption(java.net.SocketOption, java.lang.Object)}
 **/
ServerSocketChannel.prototype.setOption = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setOption',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.ServerSocketChannel') {
			return new ServerSocketChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html#bind(java.net.SocketAddress)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html#bind(java.net.SocketAddress, int)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html#bind(java.net.SocketAddress)}
 **/
ServerSocketChannel.prototype.bind = function() {
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
		if (result.apiName === 'java.nio.channels.ServerSocketChannel') {
			return new ServerSocketChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function socket
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html#socket()}
 **/
ServerSocketChannel.prototype.socket = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'socket',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.ServerSocketChannel') {
			return new ServerSocketChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function validOps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html#validOps()}
 **/
ServerSocketChannel.prototype.validOps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'validOps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.ServerSocketChannel') {
			return new ServerSocketChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLocalAddress
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html#getLocalAddress()}
 **/
ServerSocketChannel.prototype.getLocalAddress = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalAddress',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.ServerSocketChannel') {
			return new ServerSocketChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function accept
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/ServerSocketChannel.html#accept()}
 **/
ServerSocketChannel.prototype.accept = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'accept',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.ServerSocketChannel') {
			return new ServerSocketChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ServerSocketChannel;
