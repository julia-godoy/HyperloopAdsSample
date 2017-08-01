/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.FileStore
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.file');

/**
 * @class java.nio.file.FileStore
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html}
 **/
var FileStore = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.file.FileStore')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.file.FileStore. Create a subclass using java.nio.file.FileStore.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
FileStore.prototype = Object.create(SuperClass.prototype);
FileStore.prototype.constructor = FileStore;

Object.defineProperty(FileStore.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FileStore(this.$native.super);
	},
	enumerable: true
});

FileStore.className = 'java.nio.file.FileStore';
FileStore.prototype.className = 'java.nio.file.FileStore';

// class property
Object.defineProperty(FileStore, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.file.FileStore');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
FileStore.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.file.FileStore');

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
	SubClass.prototype = Object.create(FileStore.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
FileStore.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FileStore(Hyperloop.cast('java.nio.file.FileStore', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getTotalSpace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#getTotalSpace()}
 **/
FileStore.prototype.getTotalSpace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTotalSpace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isReadOnly
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#isReadOnly()}
 **/
FileStore.prototype.isReadOnly = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isReadOnly',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUsableSpace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#getUsableSpace()}
 **/
FileStore.prototype.getUsableSpace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUsableSpace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAttribute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#getAttribute(java.lang.String)}
 **/
FileStore.prototype.getAttribute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAttribute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function supportsFileAttributeView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#supportsFileAttributeView(java.lang.Class)}
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#supportsFileAttributeView(java.lang.String)}
 **/
FileStore.prototype.supportsFileAttributeView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'supportsFileAttributeView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function name
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#name()}
 **/
FileStore.prototype.name = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'name',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function type
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#type()}
 **/
FileStore.prototype.type = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'type',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUnallocatedSpace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#getUnallocatedSpace()}
 **/
FileStore.prototype.getUnallocatedSpace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUnallocatedSpace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileStoreAttributeView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/FileStore.html#getFileStoreAttributeView(java.lang.Class)}
 **/
FileStore.prototype.getFileStoreAttributeView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileStoreAttributeView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.FileStore') {
			return new FileStore(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FileStore;
