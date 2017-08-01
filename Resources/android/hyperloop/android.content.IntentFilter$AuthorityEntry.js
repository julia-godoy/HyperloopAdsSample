/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.content.IntentFilter$AuthorityEntry
 */
var Hyperloop = require('hyperloop');

var EnclosingClass = require('android.content.IntentFilter');

/**
 * @class android.content.IntentFilter$AuthorityEntry
 * @extends java.lang.Object 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.AuthorityEntry.html}
 **/
var AuthorityEntry = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.content.IntentFilter$AuthorityEntry')) {
		result = arguments[0];
	}
	else {
		result = AuthorityEntry.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('java.lang.Object');
AuthorityEntry.prototype = Object.create(SuperClass.prototype);
AuthorityEntry.prototype.constructor = AuthorityEntry;

Object.defineProperty(AuthorityEntry.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new AuthorityEntry(this.$native.super);
	},
	enumerable: true
});

AuthorityEntry.className = 'android.content.IntentFilter$AuthorityEntry';
AuthorityEntry.prototype.className = 'android.content.IntentFilter$AuthorityEntry';

// class property
Object.defineProperty(AuthorityEntry, 'class', {
	get: function() {
		return Hyperloop.getClass('android.content.IntentFilter$AuthorityEntry');
	},
	enumerable: true,
	configurable: false
});


// Cast
AuthorityEntry.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new AuthorityEntry(Hyperloop.cast('android.content.IntentFilter$AuthorityEntry', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function getPort
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.AuthorityEntry.html#getPort()}
 **/
AuthorityEntry.prototype.getPort = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPort',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter$AuthorityEntry') {
			return new AuthorityEntry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function match
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.AuthorityEntry.html#match(android.net.Uri)}
 **/
AuthorityEntry.prototype.match = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'match',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter$AuthorityEntry') {
			return new AuthorityEntry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getHost
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/content/IntentFilter.AuthorityEntry.html#getHost()}
 **/
AuthorityEntry.prototype.getHost = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getHost',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.content.IntentFilter$AuthorityEntry') {
			return new AuthorityEntry(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = AuthorityEntry;
