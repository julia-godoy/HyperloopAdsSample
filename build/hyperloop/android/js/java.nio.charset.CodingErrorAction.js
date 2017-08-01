/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.nio.charset.CodingErrorAction
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.nio.charset');

/**
 * @class java.nio.charset.CodingErrorAction
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/nio/charset/CodingErrorAction.html}
 **/
var CodingErrorAction = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.nio.charset.CodingErrorAction')) {
		result = arguments[0];
	}
	else {
		result = CodingErrorAction.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
CodingErrorAction.prototype = Object.create(SuperClass.prototype);
CodingErrorAction.prototype.constructor = CodingErrorAction;

Object.defineProperty(CodingErrorAction.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new CodingErrorAction(this.$native.super);
	},
	enumerable: true
});

CodingErrorAction.className = 'java.nio.charset.CodingErrorAction';
CodingErrorAction.prototype.className = 'java.nio.charset.CodingErrorAction';

// class property
Object.defineProperty(CodingErrorAction, 'class', {
	get: function() {
		return Hyperloop.getClass('java.nio.charset.CodingErrorAction');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
CodingErrorAction.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.nio.charset.CodingErrorAction');

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
	SubClass.prototype = Object.create(CodingErrorAction.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
CodingErrorAction.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new CodingErrorAction(Hyperloop.cast('java.nio.charset.CodingErrorAction', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/nio/charset/CodingErrorAction.html#REPORT
Object.defineProperty(CodingErrorAction, 'REPORT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('REPORT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CodingErrorAction') {
				return new CodingErrorAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/charset/CodingErrorAction.html#IGNORE
Object.defineProperty(CodingErrorAction, 'IGNORE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('IGNORE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CodingErrorAction') {
				return new CodingErrorAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/nio/charset/CodingErrorAction.html#REPLACE
Object.defineProperty(CodingErrorAction, 'REPLACE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('REPLACE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.nio.charset.CodingErrorAction') {
				return new CodingErrorAction(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/nio/charset/CodingErrorAction.html#toString()}
 **/
CodingErrorAction.prototype.toString = function() {
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
		if (result.apiName === 'java.nio.charset.CodingErrorAction') {
			return new CodingErrorAction(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = CodingErrorAction;
