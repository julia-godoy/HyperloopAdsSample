/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.ParcelFileDescriptor
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.os');

/**
 * @class android.os.ParcelFileDescriptor
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html}
 **/
var ParcelFileDescriptor = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.ParcelFileDescriptor')) {
		result = arguments[0];
	}
	else {
		result = ParcelFileDescriptor.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ParcelFileDescriptor.prototype = Object.create(SuperClass.prototype);
ParcelFileDescriptor.prototype.constructor = ParcelFileDescriptor;

Object.defineProperty(ParcelFileDescriptor.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ParcelFileDescriptor(this.$native.super);
	},
	enumerable: true
});

ParcelFileDescriptor.className = 'android.os.ParcelFileDescriptor';
ParcelFileDescriptor.prototype.className = 'android.os.ParcelFileDescriptor';

// class property
Object.defineProperty(ParcelFileDescriptor, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.ParcelFileDescriptor');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ParcelFileDescriptor.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.os.ParcelFileDescriptor');

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
	SubClass.prototype = Object.create(ParcelFileDescriptor.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ParcelFileDescriptor.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ParcelFileDescriptor(Hyperloop.cast('android.os.ParcelFileDescriptor', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_TRUNCATE}
 */
ParcelFileDescriptor.MODE_TRUNCATE = 67108864;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_WORLD_READABLE}
 */
ParcelFileDescriptor.MODE_WORLD_READABLE = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_CREATE}
 */
ParcelFileDescriptor.MODE_CREATE = 134217728;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_READ_WRITE}
 */
ParcelFileDescriptor.MODE_READ_WRITE = 805306368;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_WRITE_ONLY}
 */
ParcelFileDescriptor.MODE_WRITE_ONLY = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_APPEND}
 */
ParcelFileDescriptor.MODE_APPEND = 33554432;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_READ_ONLY}
 */
ParcelFileDescriptor.MODE_READ_ONLY = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#MODE_WORLD_WRITEABLE}
 */
ParcelFileDescriptor.MODE_WORLD_WRITEABLE = 2;

// Inner classes
Object.defineProperty(ParcelFileDescriptor, 'AutoCloseInputStream', {
	get: function() {
		return require('android.os.ParcelFileDescriptor$AutoCloseInputStream');
	},
	enumerable: true
});
Object.defineProperty(ParcelFileDescriptor, 'FileDescriptorDetachedException', {
	get: function() {
		return require('android.os.ParcelFileDescriptor$FileDescriptorDetachedException');
	},
	enumerable: true
});
Object.defineProperty(ParcelFileDescriptor, 'AutoCloseOutputStream', {
	get: function() {
		return require('android.os.ParcelFileDescriptor$AutoCloseOutputStream');
	},
	enumerable: true
});
Object.defineProperty(ParcelFileDescriptor, 'OnCloseListener', {
	get: function() {
		return require('android.os.ParcelFileDescriptor$OnCloseListener');
	},
	enumerable: true
});

// Static fields
// http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#CREATOR
Object.defineProperty(ParcelFileDescriptor, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.ParcelFileDescriptor') {
				return new ParcelFileDescriptor(result);
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
/**
 * TODO Fill out docs more...
 * @function fromFd
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#fromFd(int)}
 **/
ParcelFileDescriptor.fromFd = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromFd',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createReliablePipe
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#createReliablePipe()}
 **/
ParcelFileDescriptor.createReliablePipe = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createReliablePipe',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createSocketPair
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#createSocketPair()}
 **/
ParcelFileDescriptor.createSocketPair = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createSocketPair',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fromDatagramSocket
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#fromDatagramSocket(java.net.DatagramSocket)}
 **/
ParcelFileDescriptor.fromDatagramSocket = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromDatagramSocket',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseMode
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#parseMode(java.lang.String)}
 **/
ParcelFileDescriptor.parseMode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseMode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function fromSocket
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#fromSocket(java.net.Socket)}
 **/
ParcelFileDescriptor.fromSocket = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'fromSocket',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createPipe
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#createPipe()}
 **/
ParcelFileDescriptor.createPipe = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createPipe',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createReliableSocketPair
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#createReliableSocketPair()}
 **/
ParcelFileDescriptor.createReliableSocketPair = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'createReliableSocketPair',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function open
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#open(java.io.File, int)}
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#open(java.io.File, int, android.os.Handler, android.os.ParcelFileDescriptor$OnCloseListener)}
 **/
ParcelFileDescriptor.open = function() {
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
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dup
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#dup(java.io.FileDescriptor)}
 **/
ParcelFileDescriptor.dup = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'dup',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function adoptFd
 * @static
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#adoptFd(int)}
 **/
ParcelFileDescriptor.adoptFd = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'adoptFd',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
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
 * @function checkError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#checkError()}
 **/
ParcelFileDescriptor.prototype.checkError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'checkError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#describeContents()}
 **/
ParcelFileDescriptor.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStatSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#getStatSize()}
 **/
ParcelFileDescriptor.prototype.getStatSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStatSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#getFd()}
 **/
ParcelFileDescriptor.prototype.getFd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detachFd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#detachFd()}
 **/
ParcelFileDescriptor.prototype.detachFd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detachFd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
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
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#getFileDescriptor()}
 **/
ParcelFileDescriptor.prototype.getFileDescriptor = function() {
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
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function closeWithError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#closeWithError(java.lang.String)}
 **/
ParcelFileDescriptor.prototype.closeWithError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'closeWithError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
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
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#toString()}
 **/
ParcelFileDescriptor.prototype.toString = function() {
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
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
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
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#finalize()}
 **/
ParcelFileDescriptor.prototype.finalize = function() {
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
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
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
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#close()}
 **/
ParcelFileDescriptor.prototype.close = function() {
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
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canDetectErrors
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#canDetectErrors()}
 **/
ParcelFileDescriptor.prototype.canDetectErrors = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canDetectErrors',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#writeToParcel(android.os.Parcel, int)}
 **/
ParcelFileDescriptor.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/ParcelFileDescriptor.html#dup()}
 **/
ParcelFileDescriptor.prototype.dup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.ParcelFileDescriptor') {
			return new ParcelFileDescriptor(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ParcelFileDescriptor;
