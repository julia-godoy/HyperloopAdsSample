/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.lang.Boolean
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.lang');

/**
 * @class java.lang.Boolean
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html}
 **/
var _Boolean = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.lang.Boolean')) {
		result = arguments[0];
	}
	else {
		result = _Boolean.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
_Boolean.prototype = Object.create(SuperClass.prototype);
_Boolean.prototype.constructor = _Boolean;

Object.defineProperty(_Boolean.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new _Boolean(this.$native.super);
	},
	enumerable: true
});

_Boolean.className = 'java.lang.Boolean';
_Boolean.prototype.className = 'java.lang.Boolean';

// class property
Object.defineProperty(_Boolean, 'class', {
	get: function() {
		return Hyperloop.getClass('java.lang.Boolean');
	},
	enumerable: true,
	configurable: false
});


// Cast
_Boolean.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new _Boolean(Hyperloop.cast('java.lang.Boolean', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/java/lang/Boolean.html#TRUE
Object.defineProperty(_Boolean, 'TRUE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TRUE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Boolean') {
				return new _Boolean(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/Boolean.html#FALSE
Object.defineProperty(_Boolean, 'FALSE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('FALSE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Boolean') {
				return new _Boolean(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	enumerable: true
});
// http://developer.android.com/reference/java/lang/Boolean.html#TYPE
Object.defineProperty(_Boolean, 'TYPE', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('TYPE');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.lang.Boolean') {
				return new _Boolean(result);
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
 * @function compare
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#compare(boolean, boolean)}
 **/
_Boolean.compare = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'compare',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function valueOf
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#valueOf(boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#valueOf(java.lang.String)}
 **/
_Boolean.valueOf = function() {
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
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function parseBoolean
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#parseBoolean(java.lang.String)}
 **/
_Boolean.parseBoolean = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'parseBoolean',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function logicalAnd
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#logicalAnd(boolean, boolean)}
 **/
_Boolean.logicalAnd = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'logicalAnd',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#hashCode(boolean)}
 **/
_Boolean.hashCode = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'hashCode',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
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
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#toString(boolean)}
 **/
_Boolean.toString = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'toString',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getBoolean
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#getBoolean(java.lang.String)}
 **/
_Boolean.getBoolean = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getBoolean',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function logicalXor
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#logicalXor(boolean, boolean)}
 **/
_Boolean.logicalXor = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'logicalXor',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function logicalOr
 * @static
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#logicalOr(boolean, boolean)}
 **/
_Boolean.logicalOr = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'logicalOr',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
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
 * @function compareTo
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#compareTo(java.lang.Boolean)}
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#compareTo(java.lang.Object)}
 **/
_Boolean.prototype.compareTo = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compareTo',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function hashCode
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#hashCode()}
 **/
_Boolean.prototype.hashCode = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'hashCode',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function equals
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#equals(java.lang.Object)}
 **/
_Boolean.prototype.equals = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'equals',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function booleanValue
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#booleanValue()}
 **/
_Boolean.prototype.booleanValue = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'booleanValue',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
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
 * @see {@link http://developer.android.com/reference/java/lang/Boolean.html#toString()}
 **/
_Boolean.prototype.toString = function() {
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
		if (result.apiName === 'java.lang.Boolean') {
			return new _Boolean(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = _Boolean;
