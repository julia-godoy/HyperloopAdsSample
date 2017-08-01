/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.app.SharedElementCallback
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.app');

/**
 * @class android.app.SharedElementCallback
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html}
 **/
var SharedElementCallback = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.app.SharedElementCallback')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.app.SharedElementCallback. Create a subclass using android.app.SharedElementCallback.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
SharedElementCallback.prototype = Object.create(SuperClass.prototype);
SharedElementCallback.prototype.constructor = SharedElementCallback;

Object.defineProperty(SharedElementCallback.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SharedElementCallback(this.$native.super);
	},
	enumerable: true
});

SharedElementCallback.className = 'android.app.SharedElementCallback';
SharedElementCallback.prototype.className = 'android.app.SharedElementCallback';

// class property
Object.defineProperty(SharedElementCallback, 'class', {
	get: function() {
		return Hyperloop.getClass('android.app.SharedElementCallback');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
SharedElementCallback.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.app.SharedElementCallback');

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
	SubClass.prototype = Object.create(SharedElementCallback.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
SharedElementCallback.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SharedElementCallback(Hyperloop.cast('android.app.SharedElementCallback', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(SharedElementCallback, 'OnSharedElementsReadyListener', {
	get: function() {
		return require('android.app.SharedElementCallback$OnSharedElementsReadyListener');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function onSharedElementEnd
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onSharedElementEnd(java.util.List, java.util.List, java.util.List)}
 **/
SharedElementCallback.prototype.onSharedElementEnd = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSharedElementEnd',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSharedElementsArrived
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onSharedElementsArrived(java.util.List, java.util.List, android.app.SharedElementCallback$OnSharedElementsReadyListener)}
 **/
SharedElementCallback.prototype.onSharedElementsArrived = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSharedElementsArrived',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateSnapshotView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onCreateSnapshotView(android.content.Context, android.os.Parcelable)}
 **/
SharedElementCallback.prototype.onCreateSnapshotView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateSnapshotView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onRejectSharedElements
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onRejectSharedElements(java.util.List)}
 **/
SharedElementCallback.prototype.onRejectSharedElements = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onRejectSharedElements',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onSharedElementStart
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onSharedElementStart(java.util.List, java.util.List, java.util.List)}
 **/
SharedElementCallback.prototype.onSharedElementStart = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onSharedElementStart',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onMapSharedElements
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onMapSharedElements(java.util.List, java.util.Map)}
 **/
SharedElementCallback.prototype.onMapSharedElements = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onMapSharedElements',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCaptureSharedElementSnapshot
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/app/SharedElementCallback.html#onCaptureSharedElementSnapshot(android.view.View, android.graphics.Matrix, android.graphics.RectF)}
 **/
SharedElementCallback.prototype.onCaptureSharedElementSnapshot = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCaptureSharedElementSnapshot',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.app.SharedElementCallback') {
			return new SharedElementCallback(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SharedElementCallback;
