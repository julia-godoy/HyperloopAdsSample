/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.DragEvent
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.DragEvent
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html}
 **/
var DragEvent = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.DragEvent')) {
		result = arguments[0];
	}
	else {
		result = DragEvent.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
DragEvent.prototype = Object.create(SuperClass.prototype);
DragEvent.prototype.constructor = DragEvent;

Object.defineProperty(DragEvent.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new DragEvent(this.$native.super);
	},
	enumerable: true
});

DragEvent.className = 'android.view.DragEvent';
DragEvent.prototype.className = 'android.view.DragEvent';

// class property
Object.defineProperty(DragEvent, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.DragEvent');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
DragEvent.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.DragEvent');

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
	SubClass.prototype = Object.create(DragEvent.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
DragEvent.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new DragEvent(Hyperloop.cast('android.view.DragEvent', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DRAG_ENDED}
 */
DragEvent.ACTION_DRAG_ENDED = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DRAG_EXITED}
 */
DragEvent.ACTION_DRAG_EXITED = 6;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DRAG_STARTED}
 */
DragEvent.ACTION_DRAG_STARTED = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DRAG_ENTERED}
 */
DragEvent.ACTION_DRAG_ENTERED = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DROP}
 */
DragEvent.ACTION_DROP = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#ACTION_DRAG_LOCATION}
 */
DragEvent.ACTION_DRAG_LOCATION = 2;

// Inner classes

// Static fields
// http://developer.android.com/reference/android/view/DragEvent.html#CREATOR
Object.defineProperty(DragEvent, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.view.DragEvent') {
				return new DragEvent(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getLocalState
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getLocalState()}
 **/
DragEvent.prototype.getLocalState = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLocalState',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getX
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getX()}
 **/
DragEvent.prototype.getX = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getX',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getY
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getY()}
 **/
DragEvent.prototype.getY = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getY',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipDescription
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getClipDescription()}
 **/
DragEvent.prototype.getClipDescription = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipDescription',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getClipData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getClipData()}
 **/
DragEvent.prototype.getClipData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getClipData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getResult
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getResult()}
 **/
DragEvent.prototype.getResult = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getResult',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#getAction()}
 **/
DragEvent.prototype.getAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#toString()}
 **/
DragEvent.prototype.toString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'toString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function describeContents
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#describeContents()}
 **/
DragEvent.prototype.describeContents = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'describeContents',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function writeToParcel
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/DragEvent.html#writeToParcel(android.os.Parcel, int)}
 **/
DragEvent.prototype.writeToParcel = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'writeToParcel',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.DragEvent') {
			return new DragEvent(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = DragEvent;
