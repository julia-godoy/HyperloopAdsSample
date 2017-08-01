/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.CharsetEncoder
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.charset');

/**
 * @class java.nio.charset.CharsetEncoder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html}
 **/
var CharsetEncoder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.charset.CharsetEncoder')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.nio.charset.CharsetEncoder. Create a subclass using java.nio.charset.CharsetEncoder.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CharsetEncoder.prototype = Object.create(SuperClass.prototype);
CharsetEncoder.prototype.constructor = CharsetEncoder;

Object.defineProperty(CharsetEncoder.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CharsetEncoder(this.$native.super);
	},
	enumerable: true
});

CharsetEncoder.className = 'java.nio.charset.CharsetEncoder';
CharsetEncoder.prototype.className = 'java.nio.charset.CharsetEncoder';

// class property
Object.defineProperty(CharsetEncoder, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.charset.CharsetEncoder');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
CharsetEncoder.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.charset.CharsetEncoder');

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
	SubClass.prototype = Object.create(CharsetEncoder.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
CharsetEncoder.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CharsetEncoder(Hyperloop.cast('java.nio.charset.CharsetEncoder', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function encode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#encode(java.nio.CharBuffer, java.nio.ByteBuffer, boolean)}
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#encode(java.nio.CharBuffer)}
 **/
CharsetEncoder.prototype.encode = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#implFlush(java.nio.ByteBuffer)}
 **/
CharsetEncoder.prototype.implFlush = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#charset()}
 **/
CharsetEncoder.prototype.charset = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#onUnmappableCharacter(java.nio.charset.CodingErrorAction)}
 **/
CharsetEncoder.prototype.onUnmappableCharacter = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#implReset()}
 **/
CharsetEncoder.prototype.implReset = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#implOnMalformedInput(java.nio.charset.CodingErrorAction)}
 **/
CharsetEncoder.prototype.implOnMalformedInput = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function maxBytesPerChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#maxBytesPerChar()}
 **/
CharsetEncoder.prototype.maxBytesPerChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'maxBytesPerChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isLegalReplacement
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#isLegalReplacement(byte[])}
 **/
CharsetEncoder.prototype.isLegalReplacement = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isLegalReplacement',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#unmappableCharacterAction()}
 **/
CharsetEncoder.prototype.unmappableCharacterAction = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#malformedInputAction()}
 **/
CharsetEncoder.prototype.malformedInputAction = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#flush(java.nio.ByteBuffer)}
 **/
CharsetEncoder.prototype.flush = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#canEncode(char)}
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#canEncode(java.lang.CharSequence)}
 **/
CharsetEncoder.prototype.canEncode = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#onMalformedInput(java.nio.charset.CodingErrorAction)}
 **/
CharsetEncoder.prototype.onMalformedInput = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function averageBytesPerChar
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#averageBytesPerChar()}
 **/
CharsetEncoder.prototype.averageBytesPerChar = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'averageBytesPerChar',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#reset()}
 **/
CharsetEncoder.prototype.reset = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#implReplaceWith(byte[])}
 **/
CharsetEncoder.prototype.implReplaceWith = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function encodeLoop
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#encodeLoop(java.nio.CharBuffer, java.nio.ByteBuffer)}
 **/
CharsetEncoder.prototype.encodeLoop = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'encodeLoop',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#implOnUnmappableCharacter(java.nio.charset.CodingErrorAction)}
 **/
CharsetEncoder.prototype.implOnUnmappableCharacter = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#replacement()}
 **/
CharsetEncoder.prototype.replacement = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
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
 * @see {@link http://developer.android.com/reference/java/nio/charset/CharsetEncoder.html#replaceWith(byte[])}
 **/
CharsetEncoder.prototype.replaceWith = function() {
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
		if (result.apiName === 'java.nio.charset.CharsetEncoder') {
			return new CharsetEncoder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CharsetEncoder;
