/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.attribute.FileTime
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.file.attribute');

/**
 * @class java.nio.file.attribute.FileTime
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html}
 **/
var FileTime = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.file.attribute.FileTime')) {
		result = arguments[0];
	}
	else {
		result = FileTime.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
FileTime.prototype = Object.create(SuperClass.prototype);
FileTime.prototype.constructor = FileTime;

Object.defineProperty(FileTime.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FileTime(this.$native.super);
	},
	enumerable: true
});

FileTime.className = 'java.nio.file.attribute.FileTime';
FileTime.prototype.className = 'java.nio.file.attribute.FileTime';

// class property
Object.defineProperty(FileTime, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.file.attribute.FileTime');
	},
	enumerable: true,
	configurable: false
});


// Cast
FileTime.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FileTime(Hyperloop.cast('java.nio.file.attribute.FileTime', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function fromMillis
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#fromMillis(long)}
 **/
FileTime.fromMillis = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromMillis',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function from
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#from(long, java.util.concurrent.TimeUnit)}
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#from(java.time.Instant)}
 **/
FileTime.from = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'from',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new FileTime(result);
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
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#hashCode()}
 **/
FileTime.prototype.hashCode = function() {
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
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new FileTime(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#equals(java.lang.Object)}
 **/
FileTime.prototype.equals = function() {
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
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toMillis
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#toMillis()}
 **/
FileTime.prototype.toMillis = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toMillis',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new FileTime(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#toString()}
 **/
FileTime.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function to
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#to(java.util.concurrent.TimeUnit)}
 **/
FileTime.prototype.to = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'to',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#compareTo(java.nio.file.attribute.FileTime)}
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#compareTo(java.lang.Object)}
 **/
FileTime.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toInstant
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/attribute/FileTime.html#toInstant()}
 **/
FileTime.prototype.toInstant = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toInstant',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.attribute.FileTime') {
			return new FileTime(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FileTime;
