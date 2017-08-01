/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.io.Writer
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.io');

/**
 * @class java.io.Writer
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/io/Writer.html}
 **/
var Writer = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.io.Writer')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.io.Writer. Create a subclass using java.io.Writer.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Writer.prototype = Object.create(SuperClass.prototype);
Writer.prototype.constructor = Writer;

Object.defineProperty(Writer.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Writer(this.$native.super);
	},
	enumerable: true
});

Writer.className = 'java.io.Writer';
Writer.prototype.className = 'java.io.Writer';

// class property
Object.defineProperty(Writer, 'class', {
	get: function() {
		return Hyperloop.getClass('java.io.Writer');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Writer.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.io.Writer');

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
	SubClass.prototype = Object.create(Writer.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Writer.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Writer(Hyperloop.cast('java.io.Writer', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/io/Writer.html#lock
Object.defineProperty(Writer.prototype, 'lock', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('lock');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.io.Writer') {
				return new Writer(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('lock', newValue);
	},
	enumerable: true
});

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function flush
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#flush()}
 **/
Writer.prototype.flush = function() {
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
		if (result.apiName === 'java.io.Writer') {
			return new Writer(result);
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
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#write(int)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#write(char[])}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#write(char[], int, int)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#write(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#write(java.lang.String, int, int)}
 **/
Writer.prototype.write = function() {
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
		if (result.apiName === 'java.io.Writer') {
			return new Writer(result);
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
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#close()}
 **/
Writer.prototype.close = function() {
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
		if (result.apiName === 'java.io.Writer') {
			return new Writer(result);
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
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(java.lang.CharSequence)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(char)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(java.lang.CharSequence, int, int)}
 * @see {@link http://developer.android.com/reference/java/io/Writer.html#append(java.lang.CharSequence)}
 **/
Writer.prototype.append = function() {
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
		if (result.apiName === 'java.io.Writer') {
			return new Writer(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Writer;
