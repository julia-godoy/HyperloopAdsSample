/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module com.inlocomedia.android.core.serialization.json.JsonableModel
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('com.inlocomedia.android.core.serialization.json');

/**
 * @class com.inlocomedia.android.core.serialization.json.JsonableModel
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/serialization/json/JsonableModel.html}
 **/
var JsonableModel = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('com.inlocomedia.android.core.serialization.json.JsonableModel')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: com.inlocomedia.android.core.serialization.json.JsonableModel. Create a subclass using com.inlocomedia.android.core.serialization.json.JsonableModel.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
JsonableModel.prototype = Object.create(SuperClass.prototype);
JsonableModel.prototype.constructor = JsonableModel;

Object.defineProperty(JsonableModel.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new JsonableModel(this.$native.super);
	},
	enumerable: true
});

JsonableModel.className = 'com.inlocomedia.android.core.serialization.json.JsonableModel';
JsonableModel.prototype.className = 'com.inlocomedia.android.core.serialization.json.JsonableModel';

// class property
Object.defineProperty(JsonableModel, 'class', {
	get: function() {
		return Hyperloop.getClass('com.inlocomedia.android.core.serialization.json.JsonableModel');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
JsonableModel.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('com.inlocomedia.android.core.serialization.json.JsonableModel');

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
	SubClass.prototype = Object.create(JsonableModel.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
JsonableModel.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new JsonableModel(Hyperloop.cast('com.inlocomedia.android.core.serialization.json.JsonableModel', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(JsonableModel, 'JsonField', {
	get: function() {
		return require('com.inlocomedia.android.core.serialization.json.JsonableModel$JsonField');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function parseFromJSON
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/serialization/json/JsonableModel.html#parseFromJSON(org.json.JSONObject)}
 **/
JsonableModel.prototype.parseFromJSON = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parseFromJSON',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.core.serialization.json.JsonableModel') {
			return new JsonableModel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseToJSON
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/com/inlocomedia/android/core/serialization/json/JsonableModel.html#parseToJSON()}
 **/
JsonableModel.prototype.parseToJSON = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'parseToJSON',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'com.inlocomedia.android.core.serialization.json.JsonableModel') {
			return new JsonableModel(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = JsonableModel;
