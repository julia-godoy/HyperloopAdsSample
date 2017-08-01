/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.security.ProtectionDomain
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.security');

/**
 * @class java.security.ProtectionDomain
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html}
 **/
var ProtectionDomain = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.security.ProtectionDomain')) {
		result = arguments[0];
	}
	else {
		result = ProtectionDomain.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ProtectionDomain.prototype = Object.create(SuperClass.prototype);
ProtectionDomain.prototype.constructor = ProtectionDomain;

Object.defineProperty(ProtectionDomain.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ProtectionDomain(this.$native.super);
	},
	enumerable: true
});

ProtectionDomain.className = 'java.security.ProtectionDomain';
ProtectionDomain.prototype.className = 'java.security.ProtectionDomain';

// class property
Object.defineProperty(ProtectionDomain, 'class', {
	get: function() {
		return Hyperloop.getClass('java.security.ProtectionDomain');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ProtectionDomain.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.security.ProtectionDomain');

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
	SubClass.prototype = Object.create(ProtectionDomain.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ProtectionDomain.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ProtectionDomain(Hyperloop.cast('java.security.ProtectionDomain', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getPermissions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#getPermissions()}
 **/
ProtectionDomain.prototype.getPermissions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPermissions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClassLoader
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#getClassLoader()}
 **/
ProtectionDomain.prototype.getClassLoader = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClassLoader',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new ProtectionDomain(result);
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
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#toString()}
 **/
ProtectionDomain.prototype.toString = function() {
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
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPrincipals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#getPrincipals()}
 **/
ProtectionDomain.prototype.getPrincipals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPrincipals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function implies
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#implies(java.security.Permission)}
 **/
ProtectionDomain.prototype.implies = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'implies',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCodeSource
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/security/ProtectionDomain.html#getCodeSource()}
 **/
ProtectionDomain.prototype.getCodeSource = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCodeSource',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.security.ProtectionDomain') {
			return new ProtectionDomain(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ProtectionDomain;
