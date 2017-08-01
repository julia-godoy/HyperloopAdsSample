/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.Proxy$Type
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('java.net.Proxy');

/**
 * @class java.net.Proxy$Type
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/Proxy.Type.html}
 **/
var Type = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.net.Proxy$Type')) {
		result = arguments[0];
	}
	else {
		result = Type.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Type.prototype = Object.create(SuperClass.prototype);
Type.prototype.constructor = Type;

Object.defineProperty(Type.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Type(this.$native.super);
	},
	enumerable: true
});

Type.className = 'java.net.Proxy$Type';
Type.prototype.className = 'java.net.Proxy$Type';

// class property
Object.defineProperty(Type, 'class', {
	get: function() {
		return Hyperloop.getClass('java.net.Proxy$Type');
	},
	enumerable: true,
	configurable: false
});


// Cast
Type.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Type(Hyperloop.cast('java.net.Proxy$Type', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/net/Proxy.Type.html#SOCKS
Object.defineProperty(Type, 'SOCKS', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('SOCKS');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.Proxy$Type') {
				return new Type(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/Proxy.Type.html#HTTP
Object.defineProperty(Type, 'HTTP', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('HTTP');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.Proxy$Type') {
				return new Type(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/Proxy.Type.html#DIRECT
Object.defineProperty(Type, 'DIRECT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('DIRECT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.Proxy$Type') {
				return new Type(result);
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
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/net/Proxy.Type.html#valueOf(java.lang.String)}
 **/
Type.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Proxy$Type') {
			return new Type(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @static
 * @see {@link http://developer.android.com/reference/java/net/Proxy.Type.html#values()}
 **/
Type.values = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.Proxy$Type') {
			return new Type(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Type;
