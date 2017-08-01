/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module java.util.Locale$Builder
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('java.util.Locale');

/**
 * @class java.util.Locale$Builder
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html}
 **/
var Builder = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('java.util.Locale$Builder')) {
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

Builder.className = 'java.util.Locale$Builder';
Builder.prototype.className = 'java.util.Locale$Builder';

// class property
Object.defineProperty(Builder, 'class', {
	get: function() {
		return Hyperloop.getClass('java.util.Locale$Builder');
	},
	enumerable: true,
	configurable: false
});


// Cast
Builder.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new Builder(Hyperloop.cast('java.util.Locale$Builder', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function setRegion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#setRegion(java.lang.String)}
 **/
Builder.prototype.setRegion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setRegion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function setExtension
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#setExtension(char, java.lang.String)}
 **/
Builder.prototype.setExtension = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setExtension',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function setLanguageTag
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#setLanguageTag(java.lang.String)}
 **/
Builder.prototype.setLanguageTag = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLanguageTag',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function setUnicodeLocaleKeyword
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#setUnicodeLocaleKeyword(java.lang.String, java.lang.String)}
 **/
Builder.prototype.setUnicodeLocaleKeyword = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setUnicodeLocaleKeyword',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function addUnicodeLocaleAttribute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#addUnicodeLocaleAttribute(java.lang.String)}
 **/
Builder.prototype.addUnicodeLocaleAttribute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'addUnicodeLocaleAttribute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function clear
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#clear()}
 **/
Builder.prototype.clear = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clear',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function removeUnicodeLocaleAttribute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#removeUnicodeLocaleAttribute(java.lang.String)}
 **/
Builder.prototype.removeUnicodeLocaleAttribute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'removeUnicodeLocaleAttribute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#build()}
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
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function setVariant
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#setVariant(java.lang.String)}
 **/
Builder.prototype.setVariant = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVariant',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function clearExtensions
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#clearExtensions()}
 **/
Builder.prototype.clearExtensions = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'clearExtensions',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function setLocale
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#setLocale(java.util.Locale)}
 **/
Builder.prototype.setLocale = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLocale',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function setLanguage
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#setLanguage(java.lang.String)}
 **/
Builder.prototype.setLanguage = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLanguage',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
 * @function setScript
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/java/util/Locale.Builder.html#setScript(java.lang.String)}
 **/
Builder.prototype.setScript = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setScript',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'java.util.Locale$Builder') {
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
