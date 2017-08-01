/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.sqlite.SQLiteStatement
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.database.sqlite');

/**
 * @class android.database.sqlite.SQLiteStatement
 * @extends android.database.sqlite.SQLiteProgram 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html}
 **/
var SQLiteStatement = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.database.sqlite.SQLiteStatement')) {
		result = arguments[0];
	}
	else {
		result = SQLiteStatement.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.database.sqlite.SQLiteProgram');
SQLiteStatement.prototype = Object.create(SuperClass.prototype);
SQLiteStatement.prototype.constructor = SQLiteStatement;

Object.defineProperty(SQLiteStatement.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SQLiteStatement(this.$native.super);
	},
	enumerable: true
});

SQLiteStatement.className = 'android.database.sqlite.SQLiteStatement';
SQLiteStatement.prototype.className = 'android.database.sqlite.SQLiteStatement';

// class property
Object.defineProperty(SQLiteStatement, 'class', {
	get: function() {
		return Hyperloop.getClass('android.database.sqlite.SQLiteStatement');
	},
	enumerable: true,
	configurable: false
});


// Cast
SQLiteStatement.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SQLiteStatement(Hyperloop.cast('android.database.sqlite.SQLiteStatement', object.$native));
};

// Constants

// Inner classes

// Static fields

// Instance Fields

// Static methods

// Instance methods
/**
 * TODO Fill out docs more...
 * @function executeUpdateDelete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#executeUpdateDelete()}
 **/
SQLiteStatement.prototype.executeUpdateDelete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'executeUpdateDelete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function simpleQueryForLong
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#simpleQueryForLong()}
 **/
SQLiteStatement.prototype.simpleQueryForLong = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'simpleQueryForLong',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function simpleQueryForBlobFileDescriptor
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#simpleQueryForBlobFileDescriptor()}
 **/
SQLiteStatement.prototype.simpleQueryForBlobFileDescriptor = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'simpleQueryForBlobFileDescriptor',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new SQLiteStatement(result);
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
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#toString()}
 **/
SQLiteStatement.prototype.toString = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function executeInsert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#executeInsert()}
 **/
SQLiteStatement.prototype.executeInsert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'executeInsert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function execute
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#execute()}
 **/
SQLiteStatement.prototype.execute = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'execute',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function simpleQueryForString
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteStatement.html#simpleQueryForString()}
 **/
SQLiteStatement.prototype.simpleQueryForString = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'simpleQueryForString',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteStatement') {
			return new SQLiteStatement(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SQLiteStatement;
