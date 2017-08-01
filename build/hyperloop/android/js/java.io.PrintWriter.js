/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.PrintWriter
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.io');

/**
 * @class java.io.PrintWriter
 * @extends java.io.Writer 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html}
 **/
var PrintWriter = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.io.PrintWriter')) {
		result = arguments[0];
	}
	else {
		result = PrintWriter.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.io.Writer');
PrintWriter.prototype = Object.create(SuperClass.prototype);
PrintWriter.prototype.constructor = PrintWriter;

Object.defineProperty(PrintWriter.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new PrintWriter(this.$native.super);
	},
	enumerable: true
});

PrintWriter.className = 'java.io.PrintWriter';
PrintWriter.prototype.className = 'java.io.PrintWriter';

// class property
Object.defineProperty(PrintWriter, 'class', {
	get: function() {
		return Hyperloop.getClass('java.io.PrintWriter');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
PrintWriter.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.io.PrintWriter');

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
	SubClass.prototype = Object.create(PrintWriter.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
PrintWriter.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new PrintWriter(Hyperloop.cast('java.io.PrintWriter', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/io/PrintWriter.html#out
Object.defineProperty(PrintWriter.prototype, 'out', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('out');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.PrintWriter') {
				return new PrintWriter(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('out', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function print
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(boolean)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(long)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(float)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(double)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(char[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#print(java.lang.Object)}
 **/
PrintWriter.prototype.print = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println()}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(boolean)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(long)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(float)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(double)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(char[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#println(java.lang.Object)}
 **/
PrintWriter.prototype.println = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#flush()}
 **/
PrintWriter.prototype.flush = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#setError()}
 **/
PrintWriter.prototype.setError = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#clearError()}
 **/
PrintWriter.prototype.clearError = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#format(java.lang.String, java.lang.Object[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#format(java.util.Locale, java.lang.String, java.lang.Object[])}
 **/
PrintWriter.prototype.format = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#checkError()}
 **/
PrintWriter.prototype.checkError = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#close()}
 **/
PrintWriter.prototype.close = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#write(int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#write(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#write(char[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#write(java.lang.String, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#write(java.lang.String)}
 **/
PrintWriter.prototype.write = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#append(java.lang.CharSequence)}
 **/
PrintWriter.prototype.append = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
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
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#printf(java.lang.String, java.lang.Object[])}
 * @see {@link http://developer.android.com/reference/java/io/PrintWriter.html#printf(java.util.Locale, java.lang.String, java.lang.Object[])}
 **/
PrintWriter.prototype.printf = function() {
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
		if (result.apiName === 'java.io.PrintWriter') {
			return new PrintWriter(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = PrintWriter;
