/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.ContentObserver
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.database');

/**
 * @class android.database.ContentObserver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html}
 **/
var ContentObserver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.database.ContentObserver')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.database.ContentObserver. Create a subclass using android.database.ContentObserver.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ContentObserver.prototype = Object.create(SuperClass.prototype);
ContentObserver.prototype.constructor = ContentObserver;

Object.defineProperty(ContentObserver.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ContentObserver(this.$native.super);
	},
	enumerable: true
});

ContentObserver.className = 'android.database.ContentObserver';
ContentObserver.prototype.className = 'android.database.ContentObserver';

// class property
Object.defineProperty(ContentObserver, 'class', {
	get: function() {
		return Hyperloop.getClass('android.database.ContentObserver');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
ContentObserver.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.database.ContentObserver');

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
	SubClass.prototype = Object.create(ContentObserver.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
ContentObserver.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ContentObserver(Hyperloop.cast('android.database.ContentObserver', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function dispatchChange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html#dispatchChange(boolean)}
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html#dispatchChange(boolean, android.net.Uri)}
 **/
ContentObserver.prototype.dispatchChange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchChange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.ContentObserver') {
			return new ContentObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onChange
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html#onChange(boolean)}
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html#onChange(boolean, android.net.Uri)}
 **/
ContentObserver.prototype.onChange = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onChange',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.ContentObserver') {
			return new ContentObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function deliverSelfNotifications
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/ContentObserver.html#deliverSelfNotifications()}
 **/
ContentObserver.prototype.deliverSelfNotifications = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'deliverSelfNotifications',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.ContentObserver') {
			return new ContentObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ContentObserver;
