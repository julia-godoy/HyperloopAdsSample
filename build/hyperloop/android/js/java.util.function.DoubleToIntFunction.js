/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module DoubleToIntFunction
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.util.function');

/**
 * constructor
 * http://developer.android.com/reference/java/util/function/DoubleToIntFunction.html
 **/
var DoubleToIntFunction = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName && arguments[0].apiName === 'java.util.function.DoubleToIntFunction') {
		result = arguments[0];
	}
	else {
		var instance = this,
			copy = Array.prototype.slice.call(arguments)[0],
			modified = {},
			subclass;

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
		// Create dynamic subclass of the interface
		// Then generate a new instance of the subclass with the modified overrides that auto wrap native objects in JS wrappers
		// and delegate to the original impls.
		subclass = Hyperloop.implement('java.util.function.DoubleToIntFunction');
		result = subclass.newInstance(modified);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};


DoubleToIntFunction.toString = function() {
	return "[object " + this.className + "]";
};

DoubleToIntFunction.prototype.toString = function() {
	if (this._hasPointer) {
		return "[object " + this.className + "]";
	}
	return null;
};

DoubleToIntFunction.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

DoubleToIntFunction.className = "java.util.function.DoubleToIntFunction";
DoubleToIntFunction.prototype.className = "java.util.function.DoubleToIntFunction";

// class property
Object.defineProperty(DoubleToIntFunction, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.function.DoubleToIntFunction');
	},
	enumerable: true,
	configurable: false
});

// Cast
DoubleToIntFunction.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new DoubleToIntFunction(Hyperloop.cast('java.util.function.DoubleToIntFunction', object.$native));
};

// Constants

DoubleToIntFunction.prototype.equals = function (other) {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: [other]
	});
	return result;
};

DoubleToIntFunction.prototype.hashCode = function () {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	return result;
};

// export the interface
module.exports = DoubleToIntFunction;