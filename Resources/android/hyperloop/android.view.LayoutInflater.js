/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.LayoutInflater
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.LayoutInflater
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html}
 **/
var LayoutInflater = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.LayoutInflater')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: android.view.LayoutInflater. Create a subclass using android.view.LayoutInflater.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
LayoutInflater.prototype = Object.create(SuperClass.prototype);
LayoutInflater.prototype.constructor = LayoutInflater;

Object.defineProperty(LayoutInflater.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new LayoutInflater(this.$native.super);
	},
	enumerable: true
});

LayoutInflater.className = 'android.view.LayoutInflater';
LayoutInflater.prototype.className = 'android.view.LayoutInflater';

// class property
Object.defineProperty(LayoutInflater, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.LayoutInflater');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
LayoutInflater.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('android.view.LayoutInflater');

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
	SubClass.prototype = Object.create(LayoutInflater.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
LayoutInflater.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new LayoutInflater(Hyperloop.cast('android.view.LayoutInflater', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(LayoutInflater, 'Filter', {
	get: function() {
		return require('android.view.LayoutInflater$Filter');
	},
	enumerable: true
});
Object.defineProperty(LayoutInflater, 'Factory', {
	get: function() {
		return require('android.view.LayoutInflater$Factory');
	},
	enumerable: true
});
Object.defineProperty(LayoutInflater, 'Factory2', {
	get: function() {
		return require('android.view.LayoutInflater$Factory2');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function from
 * @static
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#from(android.content.Context)}
 **/
LayoutInflater.from = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'from',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
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
 * @function setFactory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#setFactory(android.view.LayoutInflater$Factory)}
 **/
LayoutInflater.prototype.setFactory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFactory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFactory2
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#setFactory2(android.view.LayoutInflater$Factory2)}
 **/
LayoutInflater.prototype.setFactory2 = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFactory2',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function cloneInContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#cloneInContext(android.content.Context)}
 **/
LayoutInflater.prototype.cloneInContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'cloneInContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFactory2
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#getFactory2()}
 **/
LayoutInflater.prototype.getFactory2 = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFactory2',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFactory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#getFactory()}
 **/
LayoutInflater.prototype.getFactory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFactory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#setFilter(android.view.LayoutInflater$Filter)}
 **/
LayoutInflater.prototype.setFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFilter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#getFilter()}
 **/
LayoutInflater.prototype.getFilter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getFilter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inflate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#inflate(int, android.view.ViewGroup)}
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#inflate(org.xmlpull.v1.XmlPullParser, android.view.ViewGroup)}
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#inflate(int, android.view.ViewGroup, boolean)}
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#inflate(org.xmlpull.v1.XmlPullParser, android.view.ViewGroup, boolean)}
 **/
LayoutInflater.prototype.inflate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inflate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onCreateView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#onCreateView(java.lang.String, android.util.AttributeSet)}
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#onCreateView(android.view.View, java.lang.String, android.util.AttributeSet)}
 **/
LayoutInflater.prototype.onCreateView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onCreateView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function createView
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#createView(java.lang.String, java.lang.String, android.util.AttributeSet)}
 **/
LayoutInflater.prototype.createView = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'createView',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContext
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/LayoutInflater.html#getContext()}
 **/
LayoutInflater.prototype.getContext = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContext',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.LayoutInflater') {
			return new LayoutInflater(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = LayoutInflater;
