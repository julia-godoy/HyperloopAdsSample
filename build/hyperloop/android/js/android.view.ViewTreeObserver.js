/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.ViewTreeObserver
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.view');

/**
 * @class android.view.ViewTreeObserver
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html}
 **/
var ViewTreeObserver = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.view.ViewTreeObserver')) {
		result = arguments[0];
	}
	else {
		result = ViewTreeObserver.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
ViewTreeObserver.prototype = Object.create(SuperClass.prototype);
ViewTreeObserver.prototype.constructor = ViewTreeObserver;

Object.defineProperty(ViewTreeObserver.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new ViewTreeObserver(this.$native.super);
	},
	enumerable: true
});

ViewTreeObserver.className = 'android.view.ViewTreeObserver';
ViewTreeObserver.prototype.className = 'android.view.ViewTreeObserver';

// class property
Object.defineProperty(ViewTreeObserver, 'class', {
	get: function() {
		return Hyperloop.getClass('android.view.ViewTreeObserver');
	},
	enumerable: true,
	configurable: false
});


// Cast
ViewTreeObserver.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new ViewTreeObserver(Hyperloop.cast('android.view.ViewTreeObserver', object.$native));
};

// Constants

// Inner classes
Object.defineProperty(ViewTreeObserver, 'OnDrawListener', {
	get: function() {
		return require('android.view.ViewTreeObserver$OnDrawListener');
	},
	enumerable: true
});
Object.defineProperty(ViewTreeObserver, 'OnGlobalFocusChangeListener', {
	get: function() {
		return require('android.view.ViewTreeObserver$OnGlobalFocusChangeListener');
	},
	enumerable: true
});
Object.defineProperty(ViewTreeObserver, 'OnWindowAttachListener', {
	get: function() {
		return require('android.view.ViewTreeObserver$OnWindowAttachListener');
	},
	enumerable: true
});
Object.defineProperty(ViewTreeObserver, 'OnPreDrawListener', {
	get: function() {
		return require('android.view.ViewTreeObserver$OnPreDrawListener');
	},
	enumerable: true
});
Object.defineProperty(ViewTreeObserver, 'OnScrollChangedListener', {
	get: function() {
		return require('android.view.ViewTreeObserver$OnScrollChangedListener');
	},
	enumerable: true
});
Object.defineProperty(ViewTreeObserver, 'OnTouchModeChangeListener', {
	get: function() {
		return require('android.view.ViewTreeObserver$OnTouchModeChangeListener');
	},
	enumerable: true
});
Object.defineProperty(ViewTreeObserver, 'OnGlobalLayoutListener', {
	get: function() {
		return require('android.view.ViewTreeObserver$OnGlobalLayoutListener');
	},
	enumerable: true
});
Object.defineProperty(ViewTreeObserver, 'OnWindowFocusChangeListener', {
	get: function() {
		return require('android.view.ViewTreeObserver$OnWindowFocusChangeListener');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function removeOnDrawListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnDrawListener(android.view.ViewTreeObserver$OnDrawListener)}
 **/
ViewTreeObserver.prototype.removeOnDrawListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnDrawListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnPreDrawListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnPreDrawListener(android.view.ViewTreeObserver$OnPreDrawListener)}
 **/
ViewTreeObserver.prototype.addOnPreDrawListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnPreDrawListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnPreDrawListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnPreDrawListener(android.view.ViewTreeObserver$OnPreDrawListener)}
 **/
ViewTreeObserver.prototype.removeOnPreDrawListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnPreDrawListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnTouchModeChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnTouchModeChangeListener(android.view.ViewTreeObserver$OnTouchModeChangeListener)}
 **/
ViewTreeObserver.prototype.addOnTouchModeChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnTouchModeChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnTouchModeChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnTouchModeChangeListener(android.view.ViewTreeObserver$OnTouchModeChangeListener)}
 **/
ViewTreeObserver.prototype.removeOnTouchModeChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnTouchModeChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnWindowAttachListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnWindowAttachListener(android.view.ViewTreeObserver$OnWindowAttachListener)}
 **/
ViewTreeObserver.prototype.removeOnWindowAttachListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnWindowAttachListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnGlobalLayoutListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnGlobalLayoutListener(android.view.ViewTreeObserver$OnGlobalLayoutListener)}
 **/
ViewTreeObserver.prototype.addOnGlobalLayoutListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnGlobalLayoutListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAlive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#isAlive()}
 **/
ViewTreeObserver.prototype.isAlive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAlive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchOnDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#dispatchOnDraw()}
 **/
ViewTreeObserver.prototype.dispatchOnDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchOnDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnScrollChangedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnScrollChangedListener(android.view.ViewTreeObserver$OnScrollChangedListener)}
 **/
ViewTreeObserver.prototype.addOnScrollChangedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnScrollChangedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnGlobalFocusChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnGlobalFocusChangeListener(android.view.ViewTreeObserver$OnGlobalFocusChangeListener)}
 **/
ViewTreeObserver.prototype.removeOnGlobalFocusChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnGlobalFocusChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchOnPreDraw
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#dispatchOnPreDraw()}
 **/
ViewTreeObserver.prototype.dispatchOnPreDraw = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchOnPreDraw',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnWindowFocusChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnWindowFocusChangeListener(android.view.ViewTreeObserver$OnWindowFocusChangeListener)}
 **/
ViewTreeObserver.prototype.addOnWindowFocusChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnWindowFocusChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnGlobalFocusChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnGlobalFocusChangeListener(android.view.ViewTreeObserver$OnGlobalFocusChangeListener)}
 **/
ViewTreeObserver.prototype.addOnGlobalFocusChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnGlobalFocusChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnDrawListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnDrawListener(android.view.ViewTreeObserver$OnDrawListener)}
 **/
ViewTreeObserver.prototype.addOnDrawListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnDrawListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addOnWindowAttachListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#addOnWindowAttachListener(android.view.ViewTreeObserver$OnWindowAttachListener)}
 **/
ViewTreeObserver.prototype.addOnWindowAttachListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addOnWindowAttachListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnWindowFocusChangeListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnWindowFocusChangeListener(android.view.ViewTreeObserver$OnWindowFocusChangeListener)}
 **/
ViewTreeObserver.prototype.removeOnWindowFocusChangeListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnWindowFocusChangeListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function dispatchOnGlobalLayout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#dispatchOnGlobalLayout()}
 **/
ViewTreeObserver.prototype.dispatchOnGlobalLayout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'dispatchOnGlobalLayout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnScrollChangedListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnScrollChangedListener(android.view.ViewTreeObserver$OnScrollChangedListener)}
 **/
ViewTreeObserver.prototype.removeOnScrollChangedListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnScrollChangedListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeGlobalOnLayoutListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeGlobalOnLayoutListener(android.view.ViewTreeObserver$OnGlobalLayoutListener)}
 **/
ViewTreeObserver.prototype.removeGlobalOnLayoutListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeGlobalOnLayoutListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function removeOnGlobalLayoutListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/view/ViewTreeObserver.html#removeOnGlobalLayoutListener(android.view.ViewTreeObserver$OnGlobalLayoutListener)}
 **/
ViewTreeObserver.prototype.removeOnGlobalLayoutListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeOnGlobalLayoutListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.view.ViewTreeObserver') {
			return new ViewTreeObserver(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = ViewTreeObserver;
