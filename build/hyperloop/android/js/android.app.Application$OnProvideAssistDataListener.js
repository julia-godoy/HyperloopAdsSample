/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module OnProvideAssistDataListener
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.app.Application');

/**
 * constructor
 * http://developer.android.com/reference/android/app/Application.OnProvideAssistDataListener.html
 **/
var OnProvideAssistDataListener = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName && arguments[0].apiName === 'android.app.Application$OnProvideAssistDataListener') {
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
		subclass = Hyperloop.implement('android.app.Application$OnProvideAssistDataListener');
		result = subclass.newInstance(modified);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};


OnProvideAssistDataListener.toString = function() {
	return "[object " + this.className + "]";
};

OnProvideAssistDataListener.prototype.toString = function() {
	if (this._hasPointer) {
		return "[object " + this.className + "]";
	}
	return null;
};

OnProvideAssistDataListener.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

OnProvideAssistDataListener.className = "android.app.Application$OnProvideAssistDataListener";
OnProvideAssistDataListener.prototype.className = "android.app.Application$OnProvideAssistDataListener";

// class property
Object.defineProperty(OnProvideAssistDataListener, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.Application$OnProvideAssistDataListener');
	},
	enumerable: true,
	configurable: false
});

// Cast
OnProvideAssistDataListener.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new OnProvideAssistDataListener(Hyperloop.cast('android.app.Application$OnProvideAssistDataListener', object.$native));
};

// Constants

OnProvideAssistDataListener.prototype.equals = function (other) {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: [other]
	});
	return result;
};

OnProvideAssistDataListener.prototype.hashCode = function () {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	return result;
};

// export the interface
module.exports = OnProvideAssistDataListener;
