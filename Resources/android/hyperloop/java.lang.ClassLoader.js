/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.ClassLoader
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.lang');

/**
 * @class java.lang.ClassLoader
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html}
 **/
var ClassLoader = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.lang.ClassLoader')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.lang.ClassLoader. Create a subclass using java.lang.ClassLoader.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ClassLoader.prototype = Object.create(SuperClass.prototype);
ClassLoader.prototype.constructor = ClassLoader;

Object.defineProperty(ClassLoader.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ClassLoader(this.$native.super);
	},
	enumerable: true
});

ClassLoader.className = 'java.lang.ClassLoader';
ClassLoader.prototype.className = 'java.lang.ClassLoader';

// class property
Object.defineProperty(ClassLoader, 'class', {
	get: function() {
		return Hyperloop.getClass('java.lang.ClassLoader');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ClassLoader.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.lang.ClassLoader');

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
	SubClass.prototype = Object.create(ClassLoader.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ClassLoader.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ClassLoader(Hyperloop.cast('java.lang.ClassLoader', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function registerAsParallelCapable
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#registerAsParallelCapable()}
 **/
ClassLoader.registerAsParallelCapable = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'registerAsParallelCapable',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemResources
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getSystemResources(java.lang.String)}
 **/
ClassLoader.getSystemResources = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSystemResources',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemClassLoader
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getSystemClassLoader()}
 **/
ClassLoader.getSystemClassLoader = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSystemClassLoader',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemResource
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getSystemResource(java.lang.String)}
 **/
ClassLoader.getSystemResource = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSystemResource',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSystemResourceAsStream
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getSystemResourceAsStream(java.lang.String)}
 **/
ClassLoader.getSystemResourceAsStream = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSystemResourceAsStream',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
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
 * @function getResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getResource(java.lang.String)}
 **/
ClassLoader.prototype.getResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findResource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findResource(java.lang.String)}
 **/
ClassLoader.prototype.findResource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findResource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultAssertionStatus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#setDefaultAssertionStatus(boolean)}
 **/
ClassLoader.prototype.setDefaultAssertionStatus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDefaultAssertionStatus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPackageAssertionStatus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#setPackageAssertionStatus(java.lang.String, boolean)}
 **/
ClassLoader.prototype.setPackageAssertionStatus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPackageAssertionStatus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setClassAssertionStatus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#setClassAssertionStatus(java.lang.String, boolean)}
 **/
ClassLoader.prototype.setClassAssertionStatus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setClassAssertionStatus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearAssertionStatus
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#clearAssertionStatus()}
 **/
ClassLoader.prototype.clearAssertionStatus = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearAssertionStatus',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function definePackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#definePackage(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.net.URL)}
 **/
ClassLoader.prototype.definePackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'definePackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getResources(java.lang.String)}
 **/
ClassLoader.prototype.getResources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findSystemClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findSystemClass(java.lang.String)}
 **/
ClassLoader.prototype.findSystemClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findSystemClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getParent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getParent()}
 **/
ClassLoader.prototype.getParent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getParent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getPackage(java.lang.String)}
 **/
ClassLoader.prototype.getPackage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function defineClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#defineClass(byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#defineClass(java.lang.String, byte[], int, int)}
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#defineClass(java.lang.String, byte[], int, int, java.security.ProtectionDomain)}
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#defineClass(java.lang.String, java.nio.ByteBuffer, java.security.ProtectionDomain)}
 **/
ClassLoader.prototype.defineClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'defineClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResourceAsStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getResourceAsStream(java.lang.String)}
 **/
ClassLoader.prototype.getResourceAsStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResourceAsStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findLoadedClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findLoadedClass(java.lang.String)}
 **/
ClassLoader.prototype.findLoadedClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findLoadedClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findResources
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findResources(java.lang.String)}
 **/
ClassLoader.prototype.findResources = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findResources',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findClass(java.lang.String)}
 **/
ClassLoader.prototype.findClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSigners
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#setSigners(java.lang.Class, java.lang.Object[])}
 **/
ClassLoader.prototype.setSigners = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSigners',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resolveClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#resolveClass(java.lang.Class)}
 **/
ClassLoader.prototype.resolveClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resolveClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function loadClass
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#loadClass(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#loadClass(java.lang.String, boolean)}
 **/
ClassLoader.prototype.loadClass = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'loadClass',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPackages
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getPackages()}
 **/
ClassLoader.prototype.getPackages = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPackages',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassLoadingLock
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#getClassLoadingLock(java.lang.String)}
 **/
ClassLoader.prototype.getClassLoadingLock = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClassLoadingLock',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findLibrary
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/ClassLoader.html#findLibrary(java.lang.String)}
 **/
ClassLoader.prototype.findLibrary = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'findLibrary',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.ClassLoader') {
			return new ClassLoader(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ClassLoader;
