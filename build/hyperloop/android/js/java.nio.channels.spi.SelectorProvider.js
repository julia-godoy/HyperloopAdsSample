/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.spi.SelectorProvider
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.channels.spi');

/**
 * @class java.nio.channels.spi.SelectorProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html}
 **/
var SelectorProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.channels.spi.SelectorProvider')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.spi.SelectorProvider. Create a subclass using java.nio.channels.spi.SelectorProvider.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
SelectorProvider.prototype = Object.create(SuperClass.prototype);
SelectorProvider.prototype.constructor = SelectorProvider;

Object.defineProperty(SelectorProvider.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SelectorProvider(this.$native.super);
	},
	enumerable: true
});

SelectorProvider.className = 'java.nio.channels.spi.SelectorProvider';
SelectorProvider.prototype.className = 'java.nio.channels.spi.SelectorProvider';

// class property
Object.defineProperty(SelectorProvider, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.channels.spi.SelectorProvider');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SelectorProvider.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.channels.spi.SelectorProvider');

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
	SubClass.prototype = Object.create(SelectorProvider.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SelectorProvider.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SelectorProvider(Hyperloop.cast('java.nio.channels.spi.SelectorProvider', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function provider
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#provider()}
 **/
SelectorProvider.provider = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'provider',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new SelectorProvider(result);
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
 * @function openPipe
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openPipe()}
 **/
SelectorProvider.prototype.openPipe = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openPipe',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openSocketChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openSocketChannel()}
 **/
SelectorProvider.prototype.openSocketChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openSocketChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openDatagramChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openDatagramChannel()}
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openDatagramChannel(java.net.ProtocolFamily)}
 **/
SelectorProvider.prototype.openDatagramChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openDatagramChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inheritedChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#inheritedChannel()}
 **/
SelectorProvider.prototype.inheritedChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inheritedChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openServerSocketChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openServerSocketChannel()}
 **/
SelectorProvider.prototype.openServerSocketChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openServerSocketChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openSelector
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/spi/SelectorProvider.html#openSelector()}
 **/
SelectorProvider.prototype.openSelector = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'openSelector',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.spi.SelectorProvider') {
			return new SelectorProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SelectorProvider;
