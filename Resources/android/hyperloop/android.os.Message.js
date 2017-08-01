/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.os.Message
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.os');

/**
 * @class android.os.Message
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/os/Message.html}
 **/
var Message = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.os.Message')) {
		result = arguments[0];
	}
	else {
		result = Message.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
Message.prototype = Object.create(SuperClass.prototype);
Message.prototype.constructor = Message;

Object.defineProperty(Message.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new Message(this.$native.super);
	},
	enumerable: true
});

Message.className = 'android.os.Message';
Message.prototype.className = 'android.os.Message';

// class property
Object.defineProperty(Message, 'class', {
	get: function() {
		return Hyperloop.getClass('android.os.Message');
	},
	enumerable: true,
	configurable: false
});


// Cast
Message.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Message(Hyperloop.cast('android.os.Message', object.$native));
};

// Constants

// Inner classes

// Static fields
// http://developer.android.com/reference/android/os/Message.html#CREATOR
Object.defineProperty(Message, 'CREATOR', {
	get: function() {
		if (!this.class) return null;

		var result = this.class.getNativeField('CREATOR');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.Message') {
				return new Message(result);
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
// http://developer.android.com/reference/android/os/Message.html#arg2
Object.defineProperty(Message.prototype, 'arg2', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('arg2');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.Message') {
				return new Message(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('arg2', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/os/Message.html#what
Object.defineProperty(Message.prototype, 'what', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('what');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.Message') {
				return new Message(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('what', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/os/Message.html#arg1
Object.defineProperty(Message.prototype, 'arg1', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('arg1');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.Message') {
				return new Message(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('arg1', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/os/Message.html#obj
Object.defineProperty(Message.prototype, 'obj', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('obj');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.Message') {
				return new Message(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('obj', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/os/Message.html#replyTo
Object.defineProperty(Message.prototype, 'replyTo', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('replyTo');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.Message') {
				return new Message(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('replyTo', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/android/os/Message.html#sendingUid
Object.defineProperty(Message.prototype, 'sendingUid', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('sendingUid');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'android.os.Message') {
				return new Message(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('sendingUid', newValue);
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function obtain
 * @static
 * @see {@link http://developer.android.com/reference/android/os/Message.html#obtain()}
 * @see {@link http://developer.android.com/reference/android/os/Message.html#obtain(android.os.Message)}
 * @see {@link http://developer.android.com/reference/android/os/Message.html#obtain(android.os.Handler)}
 * @see {@link http://developer.android.com/reference/android/os/Message.html#obtain(android.os.Handler, java.lang.Runnable)}
 * @see {@link http://developer.android.com/reference/android/os/Message.html#obtain(android.os.Handler, int)}
 * @see {@link http://developer.android.com/reference/android/os/Message.html#obtain(android.os.Handler, int, java.lang.Object)}
 * @see {@link http://developer.android.com/reference/android/os/Message.html#obtain(android.os.Handler, int, int, int)}
 * @see {@link http://developer.android.com/reference/android/os/Message.html#obtain(android.os.Handler, int, int, int, java.lang.Object)}
 **/
Message.obtain = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'obtain',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
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
 * @function setData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#setData(android.os.Bundle)}
 **/
Message.prototype.setData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getCallback
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#getCallback()}
 **/
Message.prototype.getCallback = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getCallback',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
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
 * @see {@link http://developer.android.com/reference/android/os/Message.html#describeContents()}
 **/
Message.prototype.describeContents = function() {
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
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function copyFrom
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#copyFrom(android.os.Message)}
 **/
Message.prototype.copyFrom = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'copyFrom',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isAsynchronous
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#isAsynchronous()}
 **/
Message.prototype.isAsynchronous = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isAsynchronous',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAsynchronous
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#setAsynchronous(boolean)}
 **/
Message.prototype.setAsynchronous = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAsynchronous',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#getTarget()}
 **/
Message.prototype.getTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function peekData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#peekData()}
 **/
Message.prototype.peekData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'peekData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getWhen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#getWhen()}
 **/
Message.prototype.getWhen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getWhen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function recycle
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#recycle()}
 **/
Message.prototype.recycle = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'recycle',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#setTarget(android.os.Handler)}
 **/
Message.prototype.setTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
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
 * @see {@link http://developer.android.com/reference/android/os/Message.html#toString()}
 **/
Message.prototype.toString = function() {
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
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
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
 * @see {@link http://developer.android.com/reference/android/os/Message.html#writeToParcel(android.os.Parcel, int)}
 **/
Message.prototype.writeToParcel = function() {
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
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getData
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#getData()}
 **/
Message.prototype.getData = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getData',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function sendToTarget
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/os/Message.html#sendToTarget()}
 **/
Message.prototype.sendToTarget = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'sendToTarget',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.os.Message') {
			return new Message(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = Message;
