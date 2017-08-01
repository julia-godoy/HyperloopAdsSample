/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.Charset
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.charset');

/**
 * @class java.nio.charset.Charset
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html}
 **/
var Charset = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.charset.Charset')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.charset.Charset. Create a subclass using java.nio.charset.Charset.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Charset.prototype = Object.create(SuperClass.prototype);
Charset.prototype.constructor = Charset;

Object.defineProperty(Charset.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Charset(this.$native.super);
	},
	enumerable: true
});

Charset.className = 'java.nio.charset.Charset';
Charset.prototype.className = 'java.nio.charset.Charset';

// class property
Object.defineProperty(Charset, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.charset.Charset');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Charset.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.charset.Charset');

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
	SubClass.prototype = Object.create(Charset.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Charset.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Charset(Hyperloop.cast('java.nio.charset.Charset', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function forName
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#forName(java.lang.String)}
 **/
Charset.forName = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'forName',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function defaultCharset
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#defaultCharset()}
 **/
Charset.defaultCharset = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'defaultCharset',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isSupported
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#isSupported(java.lang.String)}
 **/
Charset.isSupported = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'isSupported',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function availableCharsets
 * @static
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#availableCharsets()}
 **/
Charset.availableCharsets = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'availableCharsets',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
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
 * @function encode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#encode(java.nio.CharBuffer)}
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#encode(java.lang.String)}
 **/
Charset.prototype.encode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'encode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function aliases
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#aliases()}
 **/
Charset.prototype.aliases = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'aliases',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function displayName
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#displayName()}
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#displayName(java.util.Locale)}
 **/
Charset.prototype.displayName = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'displayName',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newDecoder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#newDecoder()}
 **/
Charset.prototype.newDecoder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newDecoder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#compareTo(java.nio.charset.Charset)}
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#compareTo(java.lang.Object)}
 **/
Charset.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#decode(java.nio.ByteBuffer)}
 **/
Charset.prototype.decode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'decode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function contains
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#contains(java.nio.charset.Charset)}
 **/
Charset.prototype.contains = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'contains',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#hashCode()}
 **/
Charset.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function canEncode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#canEncode()}
 **/
Charset.prototype.canEncode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'canEncode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#equals(java.lang.Object)}
 **/
Charset.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#name()}
 **/
Charset.prototype.name = function() {
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
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function newEncoder
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#newEncoder()}
 **/
Charset.prototype.newEncoder = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'newEncoder',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isRegistered
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#isRegistered()}
 **/
Charset.prototype.isRegistered = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isRegistered',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/Charset.html#toString()}
 **/
Charset.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.charset.Charset') {
			return new Charset(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Charset;
