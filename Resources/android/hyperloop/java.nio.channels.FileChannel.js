/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.FileChannel
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.channels');

/**
 * @class java.nio.channels.FileChannel
 * @extends java.nio.channels.spi.AbstractInterruptibleChannel 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html}
 **/
var FileChannel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.channels.FileChannel')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.FileChannel. Create a subclass using java.nio.channels.FileChannel.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.nio.channels.spi.AbstractInterruptibleChannel');
FileChannel.prototype = Object.create(SuperClass.prototype);
FileChannel.prototype.constructor = FileChannel;

Object.defineProperty(FileChannel.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FileChannel(this.$native.super);
	},
	enumerable: true
});

FileChannel.className = 'java.nio.channels.FileChannel';
FileChannel.prototype.className = 'java.nio.channels.FileChannel';

// class property
Object.defineProperty(FileChannel, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.channels.FileChannel');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
FileChannel.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.channels.FileChannel');

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
	SubClass.prototype = Object.create(FileChannel.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
FileChannel.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FileChannel(Hyperloop.cast('java.nio.channels.FileChannel', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(FileChannel, 'MapMode', {
	get: function() {
		return require('java.nio.channels.FileChannel$MapMode');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function open
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#open(java.nio.file.Path, java.util.Set, java.nio.file.attribute.FileAttribute[])}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#open(java.nio.file.Path, java.nio.file.OpenOption[])}
 **/
FileChannel.open = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#read(java.nio.ByteBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#read(java.nio.ByteBuffer[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#read(java.nio.ByteBuffer[])}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#read(java.nio.ByteBuffer, long)}
 **/
FileChannel.prototype.read = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function transferFrom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#transferFrom(java.nio.channels.ReadableByteChannel, long, long)}
 **/
FileChannel.prototype.transferFrom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'transferFrom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function transferTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#transferTo(long, long, java.nio.channels.WritableByteChannel)}
 **/
FileChannel.prototype.transferTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'transferTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#tryLock(long, long, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#tryLock()}
 **/
FileChannel.prototype.tryLock = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#size()}
 **/
FileChannel.prototype.size = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#truncate(long)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#truncate(long)}
 **/
FileChannel.prototype.truncate = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#lock(long, long, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#lock()}
 **/
FileChannel.prototype.lock = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#force(boolean)}
 **/
FileChannel.prototype.force = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function position
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#position()}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#position(long)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#position(long)}
 **/
FileChannel.prototype.position = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'position',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#write(java.nio.ByteBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#write(java.nio.ByteBuffer[], int, int)}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#write(java.nio.ByteBuffer[])}
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#write(java.nio.ByteBuffer, long)}
 **/
FileChannel.prototype.write = function() {
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
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function map
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/FileChannel.html#map(java.nio.channels.FileChannel$MapMode, long, long)}
 **/
FileChannel.prototype.map = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'map',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.FileChannel') {
			return new FileChannel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FileChannel;
