/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.net.URLConnection
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('java.net');

/**
 * @class java.net.URLConnection
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html}
 **/
var URLConnection = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.net.URLConnection')) {
		result = arguments[0];
	}
	else {
		Ti.API.error('Cannot instantiate instance of abstract class: java.net.URLConnection. Create a subclass using java.net.URLConnection.extend();' );
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
URLConnection.prototype = Object.create(SuperClass.prototype);
URLConnection.prototype.constructor = URLConnection;

Object.defineProperty(URLConnection.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new URLConnection(this.$native.super);
	},
	enumerable: true
});

URLConnection.className = 'java.net.URLConnection';
URLConnection.prototype.className = 'java.net.URLConnection';

// class property
Object.defineProperty(URLConnection, 'class', {
	get: function() {
		return Hyperloop.getClass('java.net.URLConnection');
	},
	enumerable: true,
	configurable: false
});

// Allow subclassing
URLConnection.extend = function (overrides) {
	var subclassProxy = Hyperloop.extend('java.net.URLConnection');

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
	SubClass.prototype = Object.create(URLConnection.prototype);
	SubClass.prototype.constructor = SubClass;
	return SubClass;
};

// Cast
URLConnection.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new URLConnection(Hyperloop.cast('java.net.URLConnection', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields
// http://developer.android.com/reference/java/net/URLConnection.html#connected
Object.defineProperty(URLConnection.prototype, 'connected', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('connected');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new URLConnection(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('connected', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#doOutput
Object.defineProperty(URLConnection.prototype, 'doOutput', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('doOutput');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new URLConnection(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('doOutput', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#useCaches
Object.defineProperty(URLConnection.prototype, 'useCaches', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('useCaches');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new URLConnection(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('useCaches', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#ifModifiedSince
Object.defineProperty(URLConnection.prototype, 'ifModifiedSince', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('ifModifiedSince');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new URLConnection(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('ifModifiedSince', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#url
Object.defineProperty(URLConnection.prototype, 'url', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('url');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new URLConnection(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('url', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#doInput
Object.defineProperty(URLConnection.prototype, 'doInput', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('doInput');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new URLConnection(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('doInput', newValue);
	},
	enumerable: true
});
// http://developer.android.com/reference/java/net/URLConnection.html#allowUserInteraction
Object.defineProperty(URLConnection.prototype, 'allowUserInteraction', {
	get: function() {
		if (!this._hasPointer) return null;

		var result = this.$native.getNativeField('allowUserInteraction');
		if (result == null) {
			return null;
		}
		// Wrap result if it's not a primitive type?
		if (result.apiName) {
			if (result.apiName === 'java.net.URLConnection') {
				return new URLConnection(result);
			} else {
				var ctor = require(result.apiName);
				return new ctor(result);
			}
		}
		return result;
	},
	set: function(newValue) {
		if (!this._hasPointer) return;

		this.$native.setNativeField('allowUserInteraction', newValue);
	},
	enumerable: true
});

// Static methods
/**
 * TODO Fill out docs more...
 * @function getDefaultAllowUserInteraction
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDefaultAllowUserInteraction()}
 **/
URLConnection.getDefaultAllowUserInteraction = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDefaultAllowUserInteraction',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultAllowUserInteraction
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setDefaultAllowUserInteraction(boolean)}
 **/
URLConnection.setDefaultAllowUserInteraction = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setDefaultAllowUserInteraction',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function guessContentTypeFromName
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#guessContentTypeFromName(java.lang.String)}
 **/
URLConnection.guessContentTypeFromName = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'guessContentTypeFromName',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function guessContentTypeFromStream
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#guessContentTypeFromStream(java.io.InputStream)}
 **/
URLConnection.guessContentTypeFromStream = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'guessContentTypeFromStream',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultRequestProperty
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setDefaultRequestProperty(java.lang.String, java.lang.String)}
 **/
URLConnection.setDefaultRequestProperty = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setDefaultRequestProperty',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getFileNameMap
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getFileNameMap()}
 **/
URLConnection.getFileNameMap = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getFileNameMap',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setContentHandlerFactory
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setContentHandlerFactory(java.net.ContentHandlerFactory)}
 **/
URLConnection.setContentHandlerFactory = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setContentHandlerFactory',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultRequestProperty
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDefaultRequestProperty(java.lang.String)}
 **/
URLConnection.getDefaultRequestProperty = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'getDefaultRequestProperty',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setFileNameMap
 * @static
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setFileNameMap(java.net.FileNameMap)}
 **/
URLConnection.setFileNameMap = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'setFileNameMap',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
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
 * @function setConnectTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setConnectTimeout(int)}
 **/
URLConnection.prototype.setConnectTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setConnectTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderFieldLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderFieldLong(java.lang.String, long)}
 **/
URLConnection.prototype.getHeaderFieldLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderFieldLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setUseCaches
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setUseCaches(boolean)}
 **/
URLConnection.prototype.setUseCaches = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUseCaches',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setRequestProperty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setRequestProperty(java.lang.String, java.lang.String)}
 **/
URLConnection.prototype.setRequestProperty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRequestProperty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDoInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDoInput()}
 **/
URLConnection.prototype.getDoInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDoInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getIfModifiedSince
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getIfModifiedSince()}
 **/
URLConnection.prototype.getIfModifiedSince = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getIfModifiedSince',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPermission
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getPermission()}
 **/
URLConnection.prototype.getPermission = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPermission',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDefaultUseCaches
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDefaultUseCaches()}
 **/
URLConnection.prototype.getDefaultUseCaches = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDefaultUseCaches',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAllowUserInteraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getAllowUserInteraction()}
 **/
URLConnection.prototype.getAllowUserInteraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAllowUserInteraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getConnectTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getConnectTimeout()}
 **/
URLConnection.prototype.getConnectTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getConnectTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentLength
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContentLength()}
 **/
URLConnection.prototype.getContentLength = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentLength',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getInputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getInputStream()}
 **/
URLConnection.prototype.getInputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getInputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setAllowUserInteraction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setAllowUserInteraction(boolean)}
 **/
URLConnection.prototype.setAllowUserInteraction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setAllowUserInteraction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRequestProperties
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getRequestProperties()}
 **/
URLConnection.prototype.getRequestProperties = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRequestProperties',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getURL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getURL()}
 **/
URLConnection.prototype.getURL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getURL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderField
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderField(java.lang.String)}
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderField(int)}
 **/
URLConnection.prototype.getHeaderField = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderField',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderFields
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderFields()}
 **/
URLConnection.prototype.getHeaderFields = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderFields',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentLengthLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContentLengthLong()}
 **/
URLConnection.prototype.getContentLengthLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentLengthLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentType
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContentType()}
 **/
URLConnection.prototype.getContentType = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentType',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDefaultUseCaches
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setDefaultUseCaches(boolean)}
 **/
URLConnection.prototype.setDefaultUseCaches = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDefaultUseCaches',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDoOutput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setDoOutput(boolean)}
 **/
URLConnection.prototype.setDoOutput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDoOutput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getLastModified
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getLastModified()}
 **/
URLConnection.prototype.getLastModified = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getLastModified',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setIfModifiedSince
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setIfModifiedSince(long)}
 **/
URLConnection.prototype.setIfModifiedSince = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setIfModifiedSince',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getReadTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getReadTimeout()}
 **/
URLConnection.prototype.getReadTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getReadTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContent
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContent()}
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContent(java.lang.Class[])}
 **/
URLConnection.prototype.getContent = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContent',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderFieldInt
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderFieldInt(java.lang.String, int)}
 **/
URLConnection.prototype.getHeaderFieldInt = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderFieldInt',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getRequestProperty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getRequestProperty(java.lang.String)}
 **/
URLConnection.prototype.getRequestProperty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getRequestProperty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderFieldDate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderFieldDate(java.lang.String, long)}
 **/
URLConnection.prototype.getHeaderFieldDate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderFieldDate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDate
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDate()}
 **/
URLConnection.prototype.getDate = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDate',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function connect
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#connect()}
 **/
URLConnection.prototype.connect = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'connect',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHeaderFieldKey
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getHeaderFieldKey(int)}
 **/
URLConnection.prototype.getHeaderFieldKey = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHeaderFieldKey',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getContentEncoding
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getContentEncoding()}
 **/
URLConnection.prototype.getContentEncoding = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getContentEncoding',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getUseCaches
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getUseCaches()}
 **/
URLConnection.prototype.getUseCaches = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getUseCaches',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setDoInput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setDoInput(boolean)}
 **/
URLConnection.prototype.setDoInput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setDoInput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function addRequestProperty
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#addRequestProperty(java.lang.String, java.lang.String)}
 **/
URLConnection.prototype.addRequestProperty = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addRequestProperty',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setReadTimeout
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#setReadTimeout(int)}
 **/
URLConnection.prototype.setReadTimeout = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setReadTimeout',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getExpiration
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getExpiration()}
 **/
URLConnection.prototype.getExpiration = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getExpiration',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getOutputStream
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getOutputStream()}
 **/
URLConnection.prototype.getOutputStream = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getOutputStream',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
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
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#toString()}
 **/
URLConnection.prototype.toString = function() {
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
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getDoOutput
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/net/URLConnection.html#getDoOutput()}
 **/
URLConnection.prototype.getDoOutput = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getDoOutput',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.net.URLConnection') {
			return new URLConnection(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = URLConnection;
