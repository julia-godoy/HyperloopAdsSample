/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.FileOutputStream
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.io');

/**
 * @class java.io.FileOutputStream
 * @extends java.io.OutputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/FileOutputStream.html}
 **/
var FileOutputStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.io.FileOutputStream')) {
		result = arguments[0];
	}
	else {
		result = FileOutputStream.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.OutputStream');
FileOutputStream.prototype = Object.create(SuperClass.prototype);
FileOutputStream.prototype.constructor = FileOutputStream;

Object.defineProperty(FileOutputStream.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FileOutputStream(this.$native.super);
	},
	enumerable: true
});

FileOutputStream.className = 'java.io.FileOutputStream';
FileOutputStream.prototype.className = 'java.io.FileOutputStream';

// class property
Object.defineProperty(FileOutputStream, 'class', {
	get: function() {
		return Hyperloop.getClass('java.io.FileOutputStream');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
FileOutputStream.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.io.FileOutputStream');

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
	SubClass.prototype = Object.create(FileOutputStream.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
FileOutputStream.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FileOutputStream(Hyperloop.cast('java.io.FileOutputStream', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileOutputStream.html#getChannel()}
 **/
FileOutputStream.prototype.getChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileOutputStream') {
			return new FileOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileOutputStream.html#finalize()}
 **/
FileOutputStream.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileOutputStream') {
			return new FileOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/FileOutputStream.html#write(int)}
 * @see {@link http://developer.android.com/reference/java/io/FileOutputStream.html#write(byte[])}
 * @see {@link http://developer.android.com/reference/java/io/FileOutputStream.html#write(byte[], int, int)}
 **/
FileOutputStream.prototype.write = function() {
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
		if (result.apiName === 'java.io.FileOutputStream') {
			return new FileOutputStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/FileOutputStream.html#close()}
 **/
FileOutputStream.prototype.close = function() {
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
		if (result.apiName === 'java.io.FileOutputStream') {
			return new FileOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFD
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileOutputStream.html#getFD()}
 **/
FileOutputStream.prototype.getFD = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFD',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileOutputStream') {
			return new FileOutputStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FileOutputStream;
