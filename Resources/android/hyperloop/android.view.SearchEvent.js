/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.SearchEvent
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.SearchEvent
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/SearchEvent.html}
 **/
var SearchEvent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.SearchEvent')) {
		result = arguments[0];
	}
	else {
		result = SearchEvent.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
SearchEvent.prototype = Object.create(SuperClass.prototype);
SearchEvent.prototype.constructor = SearchEvent;

Object.defineProperty(SearchEvent.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SearchEvent(this.$native.super);
	},
	enumerable: true
});

SearchEvent.className = 'android.view.SearchEvent';
SearchEvent.prototype.className = 'android.view.SearchEvent';

// class property
Object.defineProperty(SearchEvent, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.SearchEvent');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SearchEvent.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.SearchEvent');

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
	SubClass.prototype = Object.create(SearchEvent.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SearchEvent.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SearchEvent(Hyperloop.cast('android.view.SearchEvent', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getInputDevice
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/SearchEvent.html#getInputDevice()}
 **/
SearchEvent.prototype.getInputDevice = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInputDevice',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.SearchEvent') {
			return new SearchEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SearchEvent;
