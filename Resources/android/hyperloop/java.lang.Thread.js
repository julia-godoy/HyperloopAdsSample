/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Thread
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.lang');

/**
 * @class java.lang.Thread
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html}
 **/
var Thread = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.lang.Thread')) {
		result = arguments[0];
	}
	else {
		result = Thread.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Thread.prototype = Object.create(SuperClass.prototype);
Thread.prototype.constructor = Thread;

Object.defineProperty(Thread.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Thread(this.$native.super);
	},
	enumerable: true
});

Thread.className = 'java.lang.Thread';
Thread.prototype.className = 'java.lang.Thread';

// class property
Object.defineProperty(Thread, 'class', {
	get: function() {
		return Hyperloop.getClass('java.lang.Thread');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Thread.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.lang.Thread');

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
	SubClass.prototype = Object.create(Thread.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Thread.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Thread(Hyperloop.cast('java.lang.Thread', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#MIN_PRIORITY}
 */
Thread.MIN_PRIORITY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#MAX_PRIORITY}
 */
Thread.MAX_PRIORITY = 10;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#NORM_PRIORITY}
 */
Thread.NORM_PRIORITY = 5;

// Inner classes
Object.defineProperty(Thread, 'UncaughtExceptionHandler', {
	get: function() {
		return require('java.lang.Thread$UncaughtExceptionHandler');
	},
	enumerable: true
});
Object.defineProperty(Thread, 'State', {
	get: function() {
		return require('java.lang.Thread$State');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getAllStackTraces
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getAllStackTraces()}
 **/
Thread.getAllStackTraces = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getAllStackTraces',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sleep
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#sleep(long)}
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#sleep(long, int)}
 **/
Thread.sleep = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'sleep',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function yield
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#yield()}
 **/
Thread.yield = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'yield',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enumerate
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#enumerate(java.lang.Thread[])}
 **/
Thread.enumerate = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'enumerate',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function activeCount
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#activeCount()}
 **/
Thread.activeCount = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'activeCount',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function currentThread
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#currentThread()}
 **/
Thread.currentThread = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'currentThread',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dumpStack
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#dumpStack()}
 **/
Thread.dumpStack = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'dumpStack',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultUncaughtExceptionHandler
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setDefaultUncaughtExceptionHandler(java.lang.Thread$UncaughtExceptionHandler)}
 **/
Thread.setDefaultUncaughtExceptionHandler = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setDefaultUncaughtExceptionHandler',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function interrupted
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#interrupted()}
 **/
Thread.interrupted = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'interrupted',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultUncaughtExceptionHandler
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getDefaultUncaughtExceptionHandler()}
 **/
Thread.getDefaultUncaughtExceptionHandler = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDefaultUncaughtExceptionHandler',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function holdsLock
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#holdsLock(java.lang.Object)}
 **/
Thread.holdsLock = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'holdsLock',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
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
 * @function setName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setName(java.lang.String)}
 **/
Thread.prototype.setName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getName()}
 **/
Thread.prototype.getName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getThreadGroup
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getThreadGroup()}
 **/
Thread.prototype.getThreadGroup = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getThreadGroup',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function run
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#run()}
 **/
Thread.prototype.run = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'run',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getId
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getId()}
 **/
Thread.prototype.getId = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getId',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContextClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setContextClassLoader(java.lang.ClassLoader)}
 **/
Thread.prototype.setContextClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setContextClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getStackTrace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getStackTrace()}
 **/
Thread.prototype.getStackTrace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getStackTrace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDaemon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#isDaemon()}
 **/
Thread.prototype.isDaemon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDaemon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function interrupt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#interrupt()}
 **/
Thread.prototype.interrupt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'interrupt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function join
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#join(long)}
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#join(long, int)}
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#join()}
 **/
Thread.prototype.join = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'join',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function suspend
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#suspend()}
 **/
Thread.prototype.suspend = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'suspend',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function resume
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#resume()}
 **/
Thread.prototype.resume = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'resume',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isInterrupted
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#isInterrupted()}
 **/
Thread.prototype.isInterrupted = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isInterrupted',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUncaughtExceptionHandler
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setUncaughtExceptionHandler(java.lang.Thread$UncaughtExceptionHandler)}
 **/
Thread.prototype.setUncaughtExceptionHandler = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUncaughtExceptionHandler',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function start
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#start()}
 **/
Thread.prototype.start = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'start',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function destroy
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#destroy()}
 **/
Thread.prototype.destroy = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'destroy',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUncaughtExceptionHandler
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getUncaughtExceptionHandler()}
 **/
Thread.prototype.getUncaughtExceptionHandler = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUncaughtExceptionHandler',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#checkAccess()}
 **/
Thread.prototype.checkAccess = function() {
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
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAlive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#isAlive()}
 **/
Thread.prototype.isAlive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAlive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDaemon
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setDaemon(boolean)}
 **/
Thread.prototype.setDaemon = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDaemon',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getState()}
 **/
Thread.prototype.getState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function stop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#stop()}
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#stop(java.lang.Throwable)}
 **/
Thread.prototype.stop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'stop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContextClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getContextClassLoader()}
 **/
Thread.prototype.getContextClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContextClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clone
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#clone()}
 **/
Thread.prototype.clone = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clone',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPriority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#getPriority()}
 **/
Thread.prototype.getPriority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPriority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function countStackFrames
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#countStackFrames()}
 **/
Thread.prototype.countStackFrames = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'countStackFrames',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#toString()}
 **/
Thread.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPriority
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Thread.html#setPriority(int)}
 **/
Thread.prototype.setPriority = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPriority',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread') {
			return new Thread(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Thread;
