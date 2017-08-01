/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.pm.PackageItemInfo$DisplayNameComparator
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.content.pm.PackageItemInfo');

/**
 * @class android.content.pm.PackageItemInfo$DisplayNameComparator
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.DisplayNameComparator.html}
 **/
var DisplayNameComparator = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.pm.PackageItemInfo$DisplayNameComparator')) {
		result = arguments[0];
	}
	else {
		result = DisplayNameComparator.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
DisplayNameComparator.prototype = Object.create(SuperClass.prototype);
DisplayNameComparator.prototype.constructor = DisplayNameComparator;

Object.defineProperty(DisplayNameComparator.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new DisplayNameComparator(this.$native.super);
	},
	enumerable: true
});

DisplayNameComparator.className = 'android.content.pm.PackageItemInfo$DisplayNameComparator';
DisplayNameComparator.prototype.className = 'android.content.pm.PackageItemInfo$DisplayNameComparator';

// class property
Object.defineProperty(DisplayNameComparator, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.pm.PackageItemInfo$DisplayNameComparator');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
DisplayNameComparator.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.pm.PackageItemInfo$DisplayNameComparator');

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
	SubClass.prototype = Object.create(DisplayNameComparator.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
DisplayNameComparator.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new DisplayNameComparator(Hyperloop.cast('android.content.pm.PackageItemInfo$DisplayNameComparator', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function compare
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.DisplayNameComparator.html#compare(android.content.pm.PackageItemInfo, android.content.pm.PackageItemInfo)}
 * @see {@link http://developer.android.com/reference/android/content/pm/PackageItemInfo.DisplayNameComparator.html#compare(java.lang.Object, java.lang.Object)}
 **/
DisplayNameComparator.prototype.compare = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compare',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.pm.PackageItemInfo$DisplayNameComparator') {
			return new DisplayNameComparator(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = DisplayNameComparator;
