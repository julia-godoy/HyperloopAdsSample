/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.stream.Collector$Characteristics
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('java.util.stream.Collector');

/**
 * @class java.util.stream.Collector$Characteristics
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/stream/Collector.Characteristics.html}
 **/
var Characteristics = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.stream.Collector$Characteristics')) {
		result = arguments[0];
	}
	else {
		result = Characteristics.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
Characteristics.prototype = Object.create(SuperClass.prototype);
Characteristics.prototype.constructor = Characteristics;

Object.defineProperty(Characteristics.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Characteristics(this.$native.super);
	},
	enumerable: true
});

Characteristics.className = 'java.util.stream.Collector$Characteristics';
Characteristics.prototype.className = 'java.util.stream.Collector$Characteristics';

// class property
Object.defineProperty(Characteristics, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.stream.Collector$Characteristics');
	},
	enumerable: true,
	configurable: false
});


// Cast
Characteristics.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Characteristics(Hyperloop.cast('java.util.stream.Collector$Characteristics', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/util/stream/Collector.Characteristics.html#IDENTITY_FINISH
Object.defineProperty(Characteristics, 'IDENTITY_FINISH', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('IDENTITY_FINISH');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.stream.Collector$Characteristics') {
				return new Characteristics(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/stream/Collector.Characteristics.html#UNORDERED
Object.defineProperty(Characteristics, 'UNORDERED', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('UNORDERED');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.stream.Collector$Characteristics') {
				return new Characteristics(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/util/stream/Collector.Characteristics.html#CONCURRENT
Object.defineProperty(Characteristics, 'CONCURRENT', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CONCURRENT');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.util.stream.Collector$Characteristics') {
				return new Characteristics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/stream/Collector.Characteristics.html#valueOf(java.lang.String)}
 **/
Characteristics.valueOf = function() {
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
		if (result.apiName === 'java.util.stream.Collector$Characteristics') {
			return new Characteristics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/stream/Collector.Characteristics.html#values()}
 **/
Characteristics.values = function() {
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
		if (result.apiName === 'java.util.stream.Collector$Characteristics') {
			return new Characteristics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = Characteristics;
