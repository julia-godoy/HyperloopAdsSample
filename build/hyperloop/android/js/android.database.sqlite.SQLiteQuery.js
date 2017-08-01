/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.sqlite.SQLiteQuery
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.database.sqlite');

/**
 * @class android.database.sqlite.SQLiteQuery
 * @extends android.database.sqlite.SQLiteProgram 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteQuery.html}
 **/
var SQLiteQuery = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.database.sqlite.SQLiteQuery')) {
		result = arguments[0];
	}
	else {
		result = SQLiteQuery.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.database.sqlite.SQLiteProgram');
SQLiteQuery.prototype = Object.create(SuperClass.prototype);
SQLiteQuery.prototype.constructor = SQLiteQuery;

Object.defineProperty(SQLiteQuery.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SQLiteQuery(this.$native.super);
	},
	enumerable: true
});

SQLiteQuery.className = 'android.database.sqlite.SQLiteQuery';
SQLiteQuery.prototype.className = 'android.database.sqlite.SQLiteQuery';

// class property
Object.defineProperty(SQLiteQuery, 'class', {
	get: function() {
		return Hyperloop.getClass('android.database.sqlite.SQLiteQuery');
	},
	enumerable: true,
	configurable: false
});


// Cast
SQLiteQuery.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SQLiteQuery(Hyperloop.cast('android.database.sqlite.SQLiteQuery', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function toString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteQuery.html#toString()}
 **/
SQLiteQuery.prototype.toString = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteQuery') {
			return new SQLiteQuery(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SQLiteQuery;
