/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition.Scene
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.transition');

/**
 * @class android.transition.Scene
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html}
 **/
var Scene = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.transition.Scene')) {
		result = arguments[0];
	}
	else {
		result = Scene.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Scene.prototype = Object.create(SuperClass.prototype);
Scene.prototype.constructor = Scene;

Object.defineProperty(Scene.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Scene(this.$native.super);
	},
	enumerable: true
});

Scene.className = 'android.transition.Scene';
Scene.prototype.className = 'android.transition.Scene';

// class property
Object.defineProperty(Scene, 'class', {
	get: function() {
		return Hyperloop.getClass('android.transition.Scene');
	},
	enumerable: true,
	configurable: false
});


// Cast
Scene.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Scene(Hyperloop.cast('android.transition.Scene', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function getSceneForLayout
 * @static
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#getSceneForLayout(android.view.ViewGroup, int, android.content.Context)}
 **/
Scene.getSceneForLayout = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getSceneForLayout',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new Scene(result);
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
 * @function exit
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#exit()}
 **/
Scene.prototype.exit = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'exit',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new Scene(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setExitAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#setExitAction(java.lang.Runnable)}
 **/
Scene.prototype.setExitAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExitAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new Scene(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setEnterAction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#setEnterAction(java.lang.Runnable)}
 **/
Scene.prototype.setEnterAction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setEnterAction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new Scene(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSceneRoot
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#getSceneRoot()}
 **/
Scene.prototype.getSceneRoot = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSceneRoot',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new Scene(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enter
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/transition/Scene.html#enter()}
 **/
Scene.prototype.enter = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enter',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.transition.Scene') {
			return new Scene(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Scene;
