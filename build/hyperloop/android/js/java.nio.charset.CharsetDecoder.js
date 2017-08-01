/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.CharsetDecoder
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.charset');

/**
 * @class java.nio.charset.CharsetDecoder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html}
 **/
var CharsetDecoder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.charset.CharsetDecoder')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.charset.CharsetDecoder. Create a subclass using java.nio.charset.CharsetDecoder.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CharsetDecoder.prototype = Object.create(SuperClass.prototype);
CharsetDecoder.prototype.constructor = CharsetDecoder;

Object.defineProperty(CharsetDecoder.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CharsetDecoder(this.$native.super);
	},
	enumerable: true
});

CharsetDecoder.className = 'java.nio.charset.CharsetDecoder';
CharsetDecoder.prototype.className = 'java.nio.charset.CharsetDecoder';

// class property
Object.defineProperty(CharsetDecoder, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.charset.CharsetDecoder');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
CharsetDecoder.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.charset.CharsetDecoder');

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
	SubClass.prototype = Object.create(CharsetDecoder.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
CharsetDecoder.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CharsetDecoder(Hyperloop.cast('java.nio.charset.CharsetDecoder', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function averageCharsPerByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#averageCharsPerByte()}
 **/
CharsetDecoder.prototype.averageCharsPerByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'averageCharsPerByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implFlush
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#implFlush(java.nio.CharBuffer)}
 **/
CharsetDecoder.prototype.implFlush = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implFlush',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function charset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#charset()}
 **/
CharsetDecoder.prototype.charset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'charset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function maxCharsPerByte
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#maxCharsPerByte()}
 **/
CharsetDecoder.prototype.maxCharsPerByte = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'maxCharsPerByte',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function decodeLoop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#decodeLoop(java.nio.ByteBuffer, java.nio.CharBuffer)}
 **/
CharsetDecoder.prototype.decodeLoop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'decodeLoop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onUnmappableCharacter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#onUnmappableCharacter(java.nio.charset.CodingErrorAction)}
 **/
CharsetDecoder.prototype.onUnmappableCharacter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onUnmappableCharacter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implReset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#implReset()}
 **/
CharsetDecoder.prototype.implReset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implReset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implOnMalformedInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#implOnMalformedInput(java.nio.charset.CodingErrorAction)}
 **/
CharsetDecoder.prototype.implOnMalformedInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implOnMalformedInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#decode(java.nio.ByteBuffer, java.nio.CharBuffer, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#decode(java.nio.ByteBuffer)}
 **/
CharsetDecoder.prototype.decode = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isCharsetDetected
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#isCharsetDetected()}
 **/
CharsetDecoder.prototype.isCharsetDetected = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isCharsetDetected',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAutoDetecting
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#isAutoDetecting()}
 **/
CharsetDecoder.prototype.isAutoDetecting = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAutoDetecting',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function unmappableCharacterAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#unmappableCharacterAction()}
 **/
CharsetDecoder.prototype.unmappableCharacterAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'unmappableCharacterAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function malformedInputAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#malformedInputAction()}
 **/
CharsetDecoder.prototype.malformedInputAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'malformedInputAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#flush(java.nio.CharBuffer)}
 **/
CharsetDecoder.prototype.flush = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function detectedCharset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#detectedCharset()}
 **/
CharsetDecoder.prototype.detectedCharset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'detectedCharset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMalformedInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#onMalformedInput(java.nio.charset.CodingErrorAction)}
 **/
CharsetDecoder.prototype.onMalformedInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMalformedInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function reset
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#reset()}
 **/
CharsetDecoder.prototype.reset = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'reset',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implReplaceWith
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#implReplaceWith(java.lang.String)}
 **/
CharsetDecoder.prototype.implReplaceWith = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implReplaceWith',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implOnUnmappableCharacter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#implOnUnmappableCharacter(java.nio.charset.CodingErrorAction)}
 **/
CharsetDecoder.prototype.implOnUnmappableCharacter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implOnUnmappableCharacter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replacement
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#replacement()}
 **/
CharsetDecoder.prototype.replacement = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replacement',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceWith
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetDecoder.html#replaceWith(java.lang.String)}
 **/
CharsetDecoder.prototype.replaceWith = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceWith',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetDecoder') {
			return new CharsetDecoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CharsetDecoder;
