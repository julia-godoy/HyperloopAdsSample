/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.TaskStackBuilder
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.TaskStackBuilder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html}
 **/
var TaskStackBuilder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.TaskStackBuilder')) {
		result = arguments[0];
	}
	else {
		result = TaskStackBuilder.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
TaskStackBuilder.prototype = Object.create(SuperClass.prototype);
TaskStackBuilder.prototype.constructor = TaskStackBuilder;

Object.defineProperty(TaskStackBuilder.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new TaskStackBuilder(this.$native.super);
	},
	enumerable: true
});

TaskStackBuilder.className = 'android.app.TaskStackBuilder';
TaskStackBuilder.prototype.className = 'android.app.TaskStackBuilder';

// class property
Object.defineProperty(TaskStackBuilder, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.TaskStackBuilder');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
TaskStackBuilder.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.TaskStackBuilder');

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
	SubClass.prototype = Object.create(TaskStackBuilder.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
TaskStackBuilder.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new TaskStackBuilder(Hyperloop.cast('android.app.TaskStackBuilder', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function create
 * @static
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#create(android.content.Context)}
 **/
TaskStackBuilder.create = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'create',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods
/**
 * TODO Fill out docs more...
 * @function startActivities
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#startActivities()}
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#startActivities(android.os.Bundle)}
 **/
TaskStackBuilder.prototype.startActivities = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'startActivities',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addParentStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#addParentStack(android.app.Activity)}
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#addParentStack(java.lang.Class)}
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#addParentStack(android.content.ComponentName)}
 **/
TaskStackBuilder.prototype.addParentStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addParentStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntentCount
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#getIntentCount()}
 **/
TaskStackBuilder.prototype.getIntentCount = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntentCount',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIntents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#getIntents()}
 **/
TaskStackBuilder.prototype.getIntents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIntents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPendingIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#getPendingIntent(int, int)}
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#getPendingIntent(int, int, android.os.Bundle)}
 **/
TaskStackBuilder.prototype.getPendingIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPendingIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addNextIntent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#addNextIntent(android.content.Intent)}
 **/
TaskStackBuilder.prototype.addNextIntent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addNextIntent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addNextIntentWithParentStack
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#addNextIntentWithParentStack(android.content.Intent)}
 **/
TaskStackBuilder.prototype.addNextIntentWithParentStack = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addNextIntentWithParentStack',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function editIntentAt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/TaskStackBuilder.html#editIntentAt(int)}
 **/
TaskStackBuilder.prototype.editIntentAt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'editIntentAt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.TaskStackBuilder') {
			return new TaskStackBuilder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = TaskStackBuilder;
