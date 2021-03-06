/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module StoresRequestListener
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.location.core.communication.listeners');

/**
 * constructor
 * http://developer.android.com/reference/com/inlocomedia/android/location/core/communication/listeners/StoresRequestListener.html
 **/
var StoresRequestListener = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].apiName && arguments[0].apiName === 'com.inlocomedia.android.location.core.communication.listeners.StoresRequestListener') {
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
		subclass = Hyperloop.implement('com.inlocomedia.android.location.core.communication.listeners.StoresRequestListener');
		result = subclass.newInstance(modified);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};


StoresRequestListener.toString = function() {
	return "[object " + this.className + "]";
};

StoresRequestListener.prototype.toString = function() {
	if (this._hasPointer) {
		return "[object " + this.className + "]";
	}
	return null;
};

StoresRequestListener.isInstanceOf = function (self, cls) {
	if (typeof cls !== "function" || typeof self !== "function") { return false; }
	while (self) {
		if (cls === self || self instanceof cls || self.className === cls.className) {
			return true;
		}
		self = self.__superclass__;
	}
	return false;
};

StoresRequestListener.className = "com.inlocomedia.android.location.core.communication.listeners.StoresRequestListener";
StoresRequestListener.prototype.className = "com.inlocomedia.android.location.core.communication.listeners.StoresRequestListener";

// class property
Object.defineProperty(StoresRequestListener, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.location.core.communication.listeners.StoresRequestListener');
	},
	enumerable: true,
	configurable: false
});

// Cast
StoresRequestListener.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new StoresRequestListener(Hyperloop.cast('com.inlocomedia.android.location.core.communication.listeners.StoresRequestListener', object.$native));
};

// Constants

StoresRequestListener.prototype.equals = function (other) {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: [other]
	});
	return result;
};

StoresRequestListener.prototype.hashCode = function () {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	return result;
};

// export the interface
module.exports = StoresRequestListener;
