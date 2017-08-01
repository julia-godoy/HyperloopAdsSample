/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.DoubleSummaryStatistics
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.util');

/**
 * @class java.util.DoubleSummaryStatistics
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/DoubleSummaryStatistics.html}
 **/
var DoubleSummaryStatistics = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.DoubleSummaryStatistics')) {
		result = arguments[0];
	}
	else {
		result = DoubleSummaryStatistics.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
DoubleSummaryStatistics.prototype = Object.create(SuperClass.prototype);
DoubleSummaryStatistics.prototype.constructor = DoubleSummaryStatistics;

Object.defineProperty(DoubleSummaryStatistics.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new DoubleSummaryStatistics(this.$native.super);
	},
	enumerable: true
});

DoubleSummaryStatistics.className = 'java.util.DoubleSummaryStatistics';
DoubleSummaryStatistics.prototype.className = 'java.util.DoubleSummaryStatistics';

// class property
Object.defineProperty(DoubleSummaryStatistics, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.DoubleSummaryStatistics');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
DoubleSummaryStatistics.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.util.DoubleSummaryStatistics');

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
	SubClass.prototype = Object.create(DoubleSummaryStatistics.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
DoubleSummaryStatistics.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new DoubleSummaryStatistics(Hyperloop.cast('java.util.DoubleSummaryStatistics', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getMin
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/DoubleSummaryStatistics.html#getMin()}
 **/
DoubleSummaryStatistics.prototype.getMin = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMin',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.DoubleSummaryStatistics') {
			return new DoubleSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMax
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/DoubleSummaryStatistics.html#getMax()}
 **/
DoubleSummaryStatistics.prototype.getMax = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMax',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.DoubleSummaryStatistics') {
			return new DoubleSummaryStatistics(result);
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
 * @see {@link http://developer.android.com/reference/java/util/DoubleSummaryStatistics.html#toString()}
 **/
DoubleSummaryStatistics.prototype.toString = function() {
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
		if (result.apiName === 'java.util.DoubleSummaryStatistics') {
			return new DoubleSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/DoubleSummaryStatistics.html#getCount()}
 **/
DoubleSummaryStatistics.prototype.getCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.DoubleSummaryStatistics') {
			return new DoubleSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSum
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/DoubleSummaryStatistics.html#getSum()}
 **/
DoubleSummaryStatistics.prototype.getSum = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSum',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.DoubleSummaryStatistics') {
			return new DoubleSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAverage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/DoubleSummaryStatistics.html#getAverage()}
 **/
DoubleSummaryStatistics.prototype.getAverage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAverage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.DoubleSummaryStatistics') {
			return new DoubleSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function accept
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/DoubleSummaryStatistics.html#accept(double)}
 **/
DoubleSummaryStatistics.prototype.accept = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'accept',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.DoubleSummaryStatistics') {
			return new DoubleSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function combine
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/DoubleSummaryStatistics.html#combine(java.util.DoubleSummaryStatistics)}
 **/
DoubleSummaryStatistics.prototype.combine = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'combine',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.DoubleSummaryStatistics') {
			return new DoubleSummaryStatistics(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = DoubleSummaryStatistics;
