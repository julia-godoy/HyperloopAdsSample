/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.Pipe
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.channels');

/**
 * @class java.nio.channels.Pipe
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/Pipe.html}
 **/
var Pipe = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.channels.Pipe')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.Pipe. Create a subclass using java.nio.channels.Pipe.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Pipe.prototype = Object.create(SuperClass.prototype);
Pipe.prototype.constructor = Pipe;

Object.defineProperty(Pipe.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Pipe(this.$native.super);
	},
	enumerable: true
});

Pipe.className = 'java.nio.channels.Pipe';
Pipe.prototype.className = 'java.nio.channels.Pipe';

// class property
Object.defineProperty(Pipe, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.channels.Pipe');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Pipe.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.channels.Pipe');

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
	SubClass.prototype = Object.create(Pipe.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Pipe.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Pipe(Hyperloop.cast('java.nio.channels.Pipe', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(Pipe, 'SourceChannel', {
	get: function() {
		return require('java.nio.channels.Pipe$SourceChannel');
	},
	enumerable: true
});
Object.defineProperty(Pipe, 'SinkChannel', {
	get: function() {
		return require('java.nio.channels.Pipe$SinkChannel');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function open
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/channels/Pipe.html#open()}
 **/
Pipe.open = function() {
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
		if (result.apiName === 'java.nio.channels.Pipe') {
			return new Pipe(result);
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
 * @function sink
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/Pipe.html#sink()}
 **/
Pipe.prototype.sink = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sink',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.Pipe') {
			return new Pipe(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function source
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/Pipe.html#source()}
 **/
Pipe.prototype.source = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'source',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.Pipe') {
			return new Pipe(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Pipe;
