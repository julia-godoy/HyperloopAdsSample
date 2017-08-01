/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.file.spi.FileSystemProvider
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.file.spi');

/**
 * @class java.nio.file.spi.FileSystemProvider
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html}
 **/
var FileSystemProvider = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.file.spi.FileSystemProvider')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.file.spi.FileSystemProvider. Create a subclass using java.nio.file.spi.FileSystemProvider.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
FileSystemProvider.prototype = Object.create(SuperClass.prototype);
FileSystemProvider.prototype.constructor = FileSystemProvider;

Object.defineProperty(FileSystemProvider.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new FileSystemProvider(this.$native.super);
	},
	enumerable: true
});

FileSystemProvider.className = 'java.nio.file.spi.FileSystemProvider';
FileSystemProvider.prototype.className = 'java.nio.file.spi.FileSystemProvider';

// class property
Object.defineProperty(FileSystemProvider, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.file.spi.FileSystemProvider');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
FileSystemProvider.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.file.spi.FileSystemProvider');

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
	SubClass.prototype = Object.create(FileSystemProvider.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
FileSystemProvider.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new FileSystemProvider(Hyperloop.cast('java.nio.file.spi.FileSystemProvider', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function installedProviders
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#installedProviders()}
 **/
FileSystemProvider.installedProviders = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'installedProviders',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
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
 * @function newByteChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newByteChannel(java.nio.file.Path, java.util.Set, java.nio.file.attribute.FileAttribute[])}
 **/
FileSystemProvider.prototype.newByteChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newByteChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSameFile
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#isSameFile(java.nio.file.Path, java.nio.file.Path)}
 **/
FileSystemProvider.prototype.isSameFile = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isSameFile',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileStore
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#getFileStore(java.nio.file.Path)}
 **/
FileSystemProvider.prototype.getFileStore = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileStore',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newAsynchronousFileChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newAsynchronousFileChannel(java.nio.file.Path, java.util.Set, java.util.concurrent.ExecutorService, java.nio.file.attribute.FileAttribute[])}
 **/
FileSystemProvider.prototype.newAsynchronousFileChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newAsynchronousFileChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileAttributeView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#getFileAttributeView(java.nio.file.Path, java.lang.Class, java.nio.file.LinkOption[])}
 **/
FileSystemProvider.prototype.getFileAttributeView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileAttributeView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createSymbolicLink
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#createSymbolicLink(java.nio.file.Path, java.nio.file.Path, java.nio.file.attribute.FileAttribute[])}
 **/
FileSystemProvider.prototype.createSymbolicLink = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createSymbolicLink',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function delete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#delete(java.nio.file.Path)}
 **/
FileSystemProvider.prototype.delete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'delete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createLink
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#createLink(java.nio.file.Path, java.nio.file.Path)}
 **/
FileSystemProvider.prototype.createLink = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createLink',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAttribute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#setAttribute(java.nio.file.Path, java.lang.String, java.lang.Object, java.nio.file.LinkOption[])}
 **/
FileSystemProvider.prototype.setAttribute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAttribute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newInputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newInputStream(java.nio.file.Path, java.nio.file.OpenOption[])}
 **/
FileSystemProvider.prototype.newInputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newInputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newFileChannel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newFileChannel(java.nio.file.Path, java.util.Set, java.nio.file.attribute.FileAttribute[])}
 **/
FileSystemProvider.prototype.newFileChannel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newFileChannel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newOutputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newOutputStream(java.nio.file.Path, java.nio.file.OpenOption[])}
 **/
FileSystemProvider.prototype.newOutputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newOutputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readAttributes
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#readAttributes(java.nio.file.Path, java.lang.Class, java.nio.file.LinkOption[])}
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#readAttributes(java.nio.file.Path, java.lang.String, java.nio.file.LinkOption[])}
 **/
FileSystemProvider.prototype.readAttributes = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readAttributes',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#getPath(java.net.URI)}
 **/
FileSystemProvider.prototype.getPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createDirectory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#createDirectory(java.nio.file.Path, java.nio.file.attribute.FileAttribute[])}
 **/
FileSystemProvider.prototype.createDirectory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createDirectory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#copy(java.nio.file.Path, java.nio.file.Path, java.nio.file.CopyOption[])}
 **/
FileSystemProvider.prototype.copy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function move
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#move(java.nio.file.Path, java.nio.file.Path, java.nio.file.CopyOption[])}
 **/
FileSystemProvider.prototype.move = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'move',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getScheme
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#getScheme()}
 **/
FileSystemProvider.prototype.getScheme = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getScheme',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newFileSystem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newFileSystem(java.net.URI, java.util.Map)}
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newFileSystem(java.nio.file.Path, java.util.Map)}
 **/
FileSystemProvider.prototype.newFileSystem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newFileSystem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deleteIfExists
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#deleteIfExists(java.nio.file.Path)}
 **/
FileSystemProvider.prototype.deleteIfExists = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deleteIfExists',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newDirectoryStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#newDirectoryStream(java.nio.file.Path, java.nio.file.DirectoryStream$Filter)}
 **/
FileSystemProvider.prototype.newDirectoryStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newDirectoryStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileSystem
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#getFileSystem(java.net.URI)}
 **/
FileSystemProvider.prototype.getFileSystem = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFileSystem',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkAccess
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#checkAccess(java.nio.file.Path, java.nio.file.AccessMode[])}
 **/
FileSystemProvider.prototype.checkAccess = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkAccess',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readSymbolicLink
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#readSymbolicLink(java.nio.file.Path)}
 **/
FileSystemProvider.prototype.readSymbolicLink = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readSymbolicLink',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isHidden
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/file/spi/FileSystemProvider.html#isHidden(java.nio.file.Path)}
 **/
FileSystemProvider.prototype.isHidden = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isHidden',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.file.spi.FileSystemProvider') {
			return new FileSystemProvider(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = FileSystemProvider;
