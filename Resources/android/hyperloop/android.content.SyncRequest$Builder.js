/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.SyncRequest$Builder
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.content.SyncRequest');

/**
 * @class android.content.SyncRequest$Builder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html}
 **/
var Builder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.SyncRequest$Builder')) {
		result = arguments[0];
	}
	else {
		result = Builder.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Builder.prototype = Object.create(SuperClass.prototype);
Builder.prototype.constructor = Builder;

Object.defineProperty(Builder.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Builder(this.$native.super);
	},
	enumerable: true
});

Builder.className = 'android.content.SyncRequest$Builder';
Builder.prototype.className = 'android.content.SyncRequest$Builder';

// class property
Object.defineProperty(Builder, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.SyncRequest$Builder');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
Builder.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.content.SyncRequest$Builder');

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
	SubClass.prototype = Object.create(Builder.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
Builder.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Builder(Hyperloop.cast('android.content.SyncRequest$Builder', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setDisallowMetered
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#setDisallowMetered(boolean)}
 **/
Builder.prototype.setDisallowMetered = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDisallowMetered',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExpedited
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#setExpedited(boolean)}
 **/
Builder.prototype.setExpedited = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExpedited',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExtras
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#setExtras(android.os.Bundle)}
 **/
Builder.prototype.setExtras = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExtras',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function syncPeriodic
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#syncPeriodic(long, long)}
 **/
Builder.prototype.syncPeriodic = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'syncPeriodic',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIgnoreBackoff
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#setIgnoreBackoff(boolean)}
 **/
Builder.prototype.setIgnoreBackoff = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIgnoreBackoff',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function build
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#build()}
 **/
Builder.prototype.build = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'build',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function syncOnce
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#syncOnce()}
 **/
Builder.prototype.syncOnce = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'syncOnce',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIgnoreSettings
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#setIgnoreSettings(boolean)}
 **/
Builder.prototype.setIgnoreSettings = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIgnoreSettings',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setNoRetry
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#setNoRetry(boolean)}
 **/
Builder.prototype.setNoRetry = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setNoRetry',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setSyncAdapter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#setSyncAdapter(android.accounts.Account, java.lang.String)}
 **/
Builder.prototype.setSyncAdapter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setSyncAdapter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setManual
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/SyncRequest.Builder.html#setManual(boolean)}
 **/
Builder.prototype.setManual = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setManual',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.SyncRequest$Builder') {
			return new Builder(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Builder;
