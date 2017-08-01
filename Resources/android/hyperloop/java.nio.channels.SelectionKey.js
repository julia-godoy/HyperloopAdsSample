/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.channels.SelectionKey
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.channels');

/**
 * @class java.nio.channels.SelectionKey
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html}
 **/
var SelectionKey = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.channels.SelectionKey')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.channels.SelectionKey. Create a subclass using java.nio.channels.SelectionKey.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
SelectionKey.prototype = Object.create(SuperClass.prototype);
SelectionKey.prototype.constructor = SelectionKey;

Object.defineProperty(SelectionKey.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SelectionKey(this.$native.super);
	},
	enumerable: true
});

SelectionKey.className = 'java.nio.channels.SelectionKey';
SelectionKey.prototype.className = 'java.nio.channels.SelectionKey';

// class property
Object.defineProperty(SelectionKey, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.channels.SelectionKey');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SelectionKey.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.channels.SelectionKey');

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
	SubClass.prototype = Object.create(SelectionKey.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SelectionKey.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SelectionKey(Hyperloop.cast('java.nio.channels.SelectionKey', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#OP_CONNECT}
 */
SelectionKey.OP_CONNECT = 8;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#OP_ACCEPT}
 */
SelectionKey.OP_ACCEPT = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#OP_READ}
 */
SelectionKey.OP_READ = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#OP_WRITE}
 */
SelectionKey.OP_WRITE = 4;

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function cancel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#cancel()}
 **/
SelectionKey.prototype.cancel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cancel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAcceptable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#isAcceptable()}
 **/
SelectionKey.prototype.isAcceptable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAcceptable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isConnectable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#isConnectable()}
 **/
SelectionKey.prototype.isConnectable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isConnectable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isValid
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#isValid()}
 **/
SelectionKey.prototype.isValid = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isValid',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function channel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#channel()}
 **/
SelectionKey.prototype.channel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'channel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isWritable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#isWritable()}
 **/
SelectionKey.prototype.isWritable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isWritable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attachment
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#attachment()}
 **/
SelectionKey.prototype.attachment = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attachment',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function readyOps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#readyOps()}
 **/
SelectionKey.prototype.readyOps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'readyOps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function interestOps
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#interestOps()}
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#interestOps(int)}
 **/
SelectionKey.prototype.interestOps = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'interestOps',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function selector
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#selector()}
 **/
SelectionKey.prototype.selector = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'selector',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function attach
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#attach(java.lang.Object)}
 **/
SelectionKey.prototype.attach = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'attach',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isReadable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/channels/SelectionKey.html#isReadable()}
 **/
SelectionKey.prototype.isReadable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isReadable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.channels.SelectionKey') {
			return new SelectionKey(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SelectionKey;
