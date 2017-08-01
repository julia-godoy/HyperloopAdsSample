/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.PrintStream
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.io');

/**
 * @class java.io.PrintStream
 * @extends java.io.FilterOutputStream 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html}
 **/
var PrintStream = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.io.PrintStream')) {
		result = arguments[0];
	}
	else {
		result = PrintStream.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.FilterOutputStream');
PrintStream.prototype = Object.create(SuperClass.prototype);
PrintStream.prototype.constructor = PrintStream;

Object.defineProperty(PrintStream.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PrintStream(this.$native.super);
	},
	enumerable: true
});

PrintStream.className = 'java.io.PrintStream';
PrintStream.prototype.className = 'java.io.PrintStream';

// class property
Object.defineProperty(PrintStream, 'class', {
	get: function() {
		return Hyperloop.getClass('java.io.PrintStream');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PrintStream.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.io.PrintStream');

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
	SubClass.prototype = Object.create(PrintStream.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PrintStream.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PrintStream(Hyperloop.cast('java.io.PrintStream', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function print
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#print(boolean)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#print(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#print(int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#print(long)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#print(float)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#print(double)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#print(char[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#print(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#print(java.lang.Object)}
 **/
PrintStream.prototype.print = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'print',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function println
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#println()}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#println(boolean)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#println(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#println(int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#println(long)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#println(float)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#println(double)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#println(char[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#println(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#println(java.lang.Object)}
 **/
PrintStream.prototype.println = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'println',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function flush
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#flush()}
 **/
PrintStream.prototype.flush = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'flush',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#setError()}
 **/
PrintStream.prototype.setError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function clearError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#clearError()}
 **/
PrintStream.prototype.clearError = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearError',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function format
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#format(java.lang.String, java.lang.Object[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#format(java.util.Locale, java.lang.String, java.lang.Object[])}
 **/
PrintStream.prototype.format = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'format',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function checkError
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#checkError()}
 **/
PrintStream.prototype.checkError = function() {
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
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#close()}
 **/
PrintStream.prototype.close = function() {
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
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#write(int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#write(byte[], int, int)}
 **/
PrintStream.prototype.write = function() {
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
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function append
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#append(java.lang.CharSequence)}
 **/
PrintStream.prototype.append = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'append',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function printf
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#printf(java.lang.String, java.lang.Object[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintStream.html#printf(java.util.Locale, java.lang.String, java.lang.Object[])}
 **/
PrintStream.prototype.printf = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'printf',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.io.PrintStream') {
			return new PrintStream(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PrintStream;
