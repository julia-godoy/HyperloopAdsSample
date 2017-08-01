/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Thread$State
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('java.lang.Thread');

/**
 * @class java.lang.Thread$State
 * @extends java.lang.Enum 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Thread.State.html}
 **/
var State = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.lang.Thread$State')) {
		result = arguments[0];
	}
	else {
		result = State.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Enum');
State.prototype = Object.create(SuperClass.prototype);
State.prototype.constructor = State;

Object.defineProperty(State.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new State(this.$native.super);
	},
	enumerable: true
});

State.className = 'java.lang.Thread$State';
State.prototype.className = 'java.lang.Thread$State';

// class property
Object.defineProperty(State, 'class', {
	get: function() {
		return Hyperloop.getClass('java.lang.Thread$State');
	},
	enumerable: true,
	configurable: false
});


// Cast
State.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new State(Hyperloop.cast('java.lang.Thread$State', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/lang/Thread.State.html#NEW
Object.defineProperty(State, 'NEW', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('NEW');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Thread$State') {
				return new State(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/Thread.State.html#TERMINATED
Object.defineProperty(State, 'TERMINATED', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TERMINATED');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Thread$State') {
				return new State(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/Thread.State.html#RUNNABLE
Object.defineProperty(State, 'RUNNABLE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('RUNNABLE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Thread$State') {
				return new State(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/Thread.State.html#BLOCKED
Object.defineProperty(State, 'BLOCKED', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('BLOCKED');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Thread$State') {
				return new State(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/Thread.State.html#WAITING
Object.defineProperty(State, 'WAITING', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('WAITING');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Thread$State') {
				return new State(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/Thread.State.html#TIMED_WAITING
Object.defineProperty(State, 'TIMED_WAITING', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TIMED_WAITING');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Thread$State') {
				return new State(result);
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
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.State.html#valueOf(java.lang.String)}
 **/
State.valueOf = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'valueOf',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread$State') {
			return new State(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function values
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Thread.State.html#values()}
 **/
State.values = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'values',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Thread$State') {
			return new State(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// Instance methods

// export the class
module.exports = State;
