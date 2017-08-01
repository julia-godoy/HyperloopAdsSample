/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.FileDescriptor
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.io');

/**
 * @class java.io.FileDescriptor
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/FileDescriptor.html}
 **/
var FileDescriptor = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.io.FileDescriptor')) {
		result = arguments[0];
	}
	else {
		result = FileDescriptor.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
FileDescriptor.prototype = Object.create(SuperClass.prototype);
FileDescriptor.prototype.constructor = FileDescriptor;

Object.defineProperty(FileDescriptor.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FileDescriptor(this.$native.super);
	},
	enumerable: true
});

FileDescriptor.className = 'java.io.FileDescriptor';
FileDescriptor.prototype.className = 'java.io.FileDescriptor';

// class property
Object.defineProperty(FileDescriptor, 'class', {
	get: function() {
		return Hyperloop.getClass('java.io.FileDescriptor');
	},
	enumerable: true,
	configurable: false
});


// Cast
FileDescriptor.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FileDescriptor(Hyperloop.cast('java.io.FileDescriptor', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/io/FileDescriptor.html#err
Object.defineProperty(FileDescriptor, 'err', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('err');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.FileDescriptor') {
				return new FileDescriptor(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/io/FileDescriptor.html#in
Object.defineProperty(FileDescriptor, 'in', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('in');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.FileDescriptor') {
				return new FileDescriptor(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/io/FileDescriptor.html#out
Object.defineProperty(FileDescriptor, 'out', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('out');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.FileDescriptor') {
				return new FileDescriptor(result);
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
 * @function valid
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileDescriptor.html#valid()}
 **/
FileDescriptor.prototype.valid = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'valid',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileDescriptor') {
			return new FileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sync
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/FileDescriptor.html#sync()}
 **/
FileDescriptor.prototype.sync = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sync',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.FileDescriptor') {
			return new FileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FileDescriptor;
