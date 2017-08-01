/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.AbstractMap$SimpleImmutableEntry
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('java.util.AbstractMap');

/**
 * @class java.util.AbstractMap$SimpleImmutableEntry
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.SimpleImmutableEntry.html}
 **/
var SimpleImmutableEntry = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.AbstractMap$SimpleImmutableEntry')) {
		result = arguments[0];
	}
	else {
		result = SimpleImmutableEntry.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
SimpleImmutableEntry.prototype = Object.create(SuperClass.prototype);
SimpleImmutableEntry.prototype.constructor = SimpleImmutableEntry;

Object.defineProperty(SimpleImmutableEntry.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SimpleImmutableEntry(this.$native.super);
	},
	enumerable: true
});

SimpleImmutableEntry.className = 'java.util.AbstractMap$SimpleImmutableEntry';
SimpleImmutableEntry.prototype.className = 'java.util.AbstractMap$SimpleImmutableEntry';

// class property
Object.defineProperty(SimpleImmutableEntry, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.AbstractMap$SimpleImmutableEntry');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SimpleImmutableEntry.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.util.AbstractMap$SimpleImmutableEntry');

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
	SubClass.prototype = Object.create(SimpleImmutableEntry.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SimpleImmutableEntry.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SimpleImmutableEntry(Hyperloop.cast('java.util.AbstractMap$SimpleImmutableEntry', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.SimpleImmutableEntry.html#getKey()}
 **/
SimpleImmutableEntry.prototype.getKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap$SimpleImmutableEntry') {
			return new SimpleImmutableEntry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.SimpleImmutableEntry.html#getValue()}
 **/
SimpleImmutableEntry.prototype.getValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap$SimpleImmutableEntry') {
			return new SimpleImmutableEntry(result);
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
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.SimpleImmutableEntry.html#hashCode()}
 **/
SimpleImmutableEntry.prototype.hashCode = function() {
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
		if (result.apiName === 'java.util.AbstractMap$SimpleImmutableEntry') {
			return new SimpleImmutableEntry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.SimpleImmutableEntry.html#setValue(java.lang.Object)}
 **/
SimpleImmutableEntry.prototype.setValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.AbstractMap$SimpleImmutableEntry') {
			return new SimpleImmutableEntry(result);
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
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.SimpleImmutableEntry.html#equals(java.lang.Object)}
 **/
SimpleImmutableEntry.prototype.equals = function() {
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
		if (result.apiName === 'java.util.AbstractMap$SimpleImmutableEntry') {
			return new SimpleImmutableEntry(result);
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
 * @see {@link http://developer.android.com/reference/java/util/AbstractMap.SimpleImmutableEntry.html#toString()}
 **/
SimpleImmutableEntry.prototype.toString = function() {
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
		if (result.apiName === 'java.util.AbstractMap$SimpleImmutableEntry') {
			return new SimpleImmutableEntry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SimpleImmutableEntry;
