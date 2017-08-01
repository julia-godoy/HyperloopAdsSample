/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.AsynchronousFileChannel
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.channels');

/**
 * @class java.nio.channels.AsynchronousFileChannel
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html}
 **/
var AsynchronousFileChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.channels.AsynchronousFileChannel')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.AsynchronousFileChannel. Create a subclass using java.nio.channels.AsynchronousFileChannel.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
AsynchronousFileChannel.prototype = Object.create(SuperClass.prototype);
AsynchronousFileChannel.prototype.constructor = AsynchronousFileChannel;

Object.defineProperty(AsynchronousFileChannel.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AsynchronousFileChannel(this.$native.super);
	},
	enumerable: true
});

AsynchronousFileChannel.className = 'java.nio.channels.AsynchronousFileChannel';
AsynchronousFileChannel.prototype.className = 'java.nio.channels.AsynchronousFileChannel';

// class property
Object.defineProperty(AsynchronousFileChannel, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.channels.AsynchronousFileChannel');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
AsynchronousFileChannel.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.channels.AsynchronousFileChannel');

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
	SubClass.prototype = Object.create(AsynchronousFileChannel.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
AsynchronousFileChannel.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AsynchronousFileChannel(Hyperloop.cast('java.nio.channels.AsynchronousFileChannel', object.$native));
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#open(java.nio.file.Path, java.util.Set, java.util.concurrent.ExecutorService, java.nio.file.attribute.FileAttribute[])}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#open(java.nio.file.Path, java.nio.file.OpenOption[])}
 **/
AsynchronousFileChannel.open = function() {
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
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new AsynchronousFileChannel(result);
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
 * @function read
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#read(java.nio.ByteBuffer, long, java.lang.Object, java.nio.channels.CompletionHandler)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#read(java.nio.ByteBuffer, long)}
 **/
AsynchronousFileChannel.prototype.read = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'read',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function size
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#size()}
 **/
AsynchronousFileChannel.prototype.size = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'size',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function truncate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#truncate(long)}
 **/
AsynchronousFileChannel.prototype.truncate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'truncate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function lock
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#lock(long, long, boolean, java.lang.Object, java.nio.channels.CompletionHandler)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#lock(java.lang.Object, java.nio.channels.CompletionHandler)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#lock(long, long, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#lock()}
 **/
AsynchronousFileChannel.prototype.lock = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'lock',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function force
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#force(boolean)}
 **/
AsynchronousFileChannel.prototype.force = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'force',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function write
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#write(java.nio.ByteBuffer, long, java.lang.Object, java.nio.channels.CompletionHandler)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#write(java.nio.ByteBuffer, long)}
 **/
AsynchronousFileChannel.prototype.write = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'write',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function tryLock
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#tryLock(long, long, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/AsynchronousFileChannel.html#tryLock()}
 **/
AsynchronousFileChannel.prototype.tryLock = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'tryLock',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.AsynchronousFileChannel') {
			return new AsynchronousFileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AsynchronousFileChannel;
