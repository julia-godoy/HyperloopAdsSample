/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.DataSetObserver
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.database');

/**
 * @class android.database.DataSetObserver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/DataSetObserver.html}
 **/
var DataSetObserver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.database.DataSetObserver')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.database.DataSetObserver. Create a subclass using android.database.DataSetObserver.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
DataSetObserver.prototype = Object.create(SuperClass.prototype);
DataSetObserver.prototype.constructor = DataSetObserver;

Object.defineProperty(DataSetObserver.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new DataSetObserver(this.$native.super);
	},
	enumerable: true
});

DataSetObserver.className = 'android.database.DataSetObserver';
DataSetObserver.prototype.className = 'android.database.DataSetObserver';

// class property
Object.defineProperty(DataSetObserver, 'class', {
	get: function() {
		return Hyperloop.getClass('android.database.DataSetObserver');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
DataSetObserver.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.database.DataSetObserver');

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
	SubClass.prototype = Object.create(DataSetObserver.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
DataSetObserver.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new DataSetObserver(Hyperloop.cast('android.database.DataSetObserver', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onChanged
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/DataSetObserver.html#onChanged()}
 **/
DataSetObserver.prototype.onChanged = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onChanged',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.DataSetObserver') {
			return new DataSetObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onInvalidated
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/DataSetObserver.html#onInvalidated()}
 **/
DataSetObserver.prototype.onInvalidated = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onInvalidated',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.DataSetObserver') {
			return new DataSetObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = DataSetObserver;
