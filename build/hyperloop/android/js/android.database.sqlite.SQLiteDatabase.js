/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.sqlite.SQLiteDatabase
 */
var Hyperloop = require('hyperloop');

var parentPackage = require('android.database.sqlite');

/**
 * @class android.database.sqlite.SQLiteDatabase
 * @extends android.database.sqlite.SQLiteClosable 
 * @constructor
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html}
 **/
var SQLiteDatabase = function() {
	var result;
	// Allow the constructor to either invoke the real java constructor, or function as a "wrapping" method that will take
	// a single argument that is a native hyperloop proxy for this class type and just wraps it in our JS type.
	if (arguments.length == 1 && arguments[0].isNativeProxy && arguments[0].isInstanceProxy && arguments[0].isInstanceOf('android.database.sqlite.SQLiteDatabase')) {
		result = arguments[0];
	}
	else {
		result = SQLiteDatabase.class.newInstance(arguments);
	}

	this.$native = result;
	this._hasPointer = result != null;
	this._private = {};
};

var SuperClass = require('android.database.sqlite.SQLiteClosable');
SQLiteDatabase.prototype = Object.create(SuperClass.prototype);
SQLiteDatabase.prototype.constructor = SQLiteDatabase;

Object.defineProperty(SQLiteDatabase.prototype, 'super', {
	get: function() {
		if (!this._hasPointer) return null;
		return new SQLiteDatabase(this.$native.super);
	},
	enumerable: true
});

SQLiteDatabase.className = 'android.database.sqlite.SQLiteDatabase';
SQLiteDatabase.prototype.className = 'android.database.sqlite.SQLiteDatabase';

// class property
Object.defineProperty(SQLiteDatabase, 'class', {
	get: function() {
		return Hyperloop.getClass('android.database.sqlite.SQLiteDatabase');
	},
	enumerable: true,
	configurable: false
});


// Cast
SQLiteDatabase.cast = function(object) {
	if (!object.$native || !object.$native.isInstanceProxy) return object;
	return new SQLiteDatabase(Hyperloop.cast('android.database.sqlite.SQLiteDatabase', object.$native));
};

// Constants
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_REPLACE}
 */
SQLiteDatabase.CONFLICT_REPLACE = 5;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#OPEN_READWRITE}
 */
SQLiteDatabase.OPEN_READWRITE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CREATE_IF_NECESSARY}
 */
SQLiteDatabase.CREATE_IF_NECESSARY = 268435456;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#OPEN_READONLY}
 */
SQLiteDatabase.OPEN_READONLY = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#ENABLE_WRITE_AHEAD_LOGGING}
 */
SQLiteDatabase.ENABLE_WRITE_AHEAD_LOGGING = 536870912;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_FAIL}
 */
SQLiteDatabase.CONFLICT_FAIL = 3;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_IGNORE}
 */
SQLiteDatabase.CONFLICT_IGNORE = 4;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#NO_LOCALIZED_COLLATORS}
 */
SQLiteDatabase.NO_LOCALIZED_COLLATORS = 16;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#SQLITE_MAX_LIKE_PATTERN_LENGTH}
 */
SQLiteDatabase.SQLITE_MAX_LIKE_PATTERN_LENGTH = 50000;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_NONE}
 */
SQLiteDatabase.CONFLICT_NONE = 0;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_ROLLBACK}
 */
SQLiteDatabase.CONFLICT_ROLLBACK = 1;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#CONFLICT_ABORT}
 */
SQLiteDatabase.CONFLICT_ABORT = 2;
/**
 * @constant
 * @default
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#MAX_SQL_CACHE_SIZE}
 */
SQLiteDatabase.MAX_SQL_CACHE_SIZE = 100;

// Inner classes
Object.defineProperty(SQLiteDatabase, 'CursorFactory', {
	get: function() {
		return require('android.database.sqlite.SQLiteDatabase$CursorFactory');
	},
	enumerable: true
});

// Static fields

// Instance Fields

// Static methods
/**
 * TODO Fill out docs more...
 * @function deleteDatabase
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#deleteDatabase(java.io.File)}
 **/
SQLiteDatabase.deleteDatabase = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'deleteDatabase',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function create
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#create(android.database.sqlite.SQLiteDatabase$CursorFactory)}
 **/
SQLiteDatabase.create = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'create',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openDatabase
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase$CursorFactory, int)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase$CursorFactory, int, android.database.DatabaseErrorHandler)}
 **/
SQLiteDatabase.openDatabase = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'openDatabase',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function releaseMemory
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#releaseMemory()}
 **/
SQLiteDatabase.releaseMemory = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'releaseMemory',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function openOrCreateDatabase
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openOrCreateDatabase(java.io.File, android.database.sqlite.SQLiteDatabase$CursorFactory)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openOrCreateDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase$CursorFactory)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#openOrCreateDatabase(java.lang.String, android.database.sqlite.SQLiteDatabase$CursorFactory, android.database.DatabaseErrorHandler)}
 **/
SQLiteDatabase.openOrCreateDatabase = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'openOrCreateDatabase',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function findEditTable
 * @static
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#findEditTable(java.lang.String)}
 **/
SQLiteDatabase.findEditTable = function() {
	if (!this.class) return null;

	var result = this.class.callNativeFunction({
		func: 'findEditTable',
		instanceMethod: false,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
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
 * @function updateWithOnConflict
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#updateWithOnConflict(java.lang.String, android.content.ContentValues, java.lang.String, java.lang.String[], int)}
 **/
SQLiteDatabase.prototype.updateWithOnConflict = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'updateWithOnConflict',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function needUpgrade
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#needUpgrade(int)}
 **/
SQLiteDatabase.prototype.needUpgrade = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'needUpgrade',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replace
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#replace(java.lang.String, java.lang.String, android.content.ContentValues)}
 **/
SQLiteDatabase.prototype.replace = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replace',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginTransactionWithListener
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#beginTransactionWithListener(android.database.sqlite.SQLiteTransactionListener)}
 **/
SQLiteDatabase.prototype.beginTransactionWithListener = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginTransactionWithListener',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getSyncedTables
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getSyncedTables()}
 **/
SQLiteDatabase.prototype.getSyncedTables = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getSyncedTables',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function queryWithFactory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#queryWithFactory(android.database.sqlite.SQLiteDatabase$CursorFactory, boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#queryWithFactory(android.database.sqlite.SQLiteDatabase$CursorFactory, boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String, android.os.CancellationSignal)}
 **/
SQLiteDatabase.prototype.queryWithFactory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'queryWithFactory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rawQueryWithFactory
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQueryWithFactory(android.database.sqlite.SQLiteDatabase$CursorFactory, java.lang.String, java.lang.String[], java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQueryWithFactory(android.database.sqlite.SQLiteDatabase$CursorFactory, java.lang.String, java.lang.String[], java.lang.String, android.os.CancellationSignal)}
 **/
SQLiteDatabase.prototype.rawQueryWithFactory = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rawQueryWithFactory',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function onAllReferencesReleased
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#onAllReferencesReleased()}
 **/
SQLiteDatabase.prototype.onAllReferencesReleased = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'onAllReferencesReleased',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginTransactionWithListenerNonExclusive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#beginTransactionWithListenerNonExclusive(android.database.sqlite.SQLiteTransactionListener)}
 **/
SQLiteDatabase.prototype.beginTransactionWithListenerNonExclusive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginTransactionWithListenerNonExclusive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function markTableSyncable
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#markTableSyncable(java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#markTableSyncable(java.lang.String, java.lang.String, java.lang.String)}
 **/
SQLiteDatabase.prototype.markTableSyncable = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'markTableSyncable',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPath
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getPath()}
 **/
SQLiteDatabase.prototype.getPath = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPath',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function yieldIfContended
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#yieldIfContended()}
 **/
SQLiteDatabase.prototype.yieldIfContended = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'yieldIfContended',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setVersion(int)}
 **/
SQLiteDatabase.prototype.setVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function execSQL
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#execSQL(java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#execSQL(java.lang.String, java.lang.Object[])}
 **/
SQLiteDatabase.prototype.execSQL = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'execSQL',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaxSqlCacheSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setMaxSqlCacheSize(int)}
 **/
SQLiteDatabase.prototype.setMaxSqlCacheSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaxSqlCacheSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function enableWriteAheadLogging
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#enableWriteAheadLogging()}
 **/
SQLiteDatabase.prototype.enableWriteAheadLogging = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'enableWriteAheadLogging',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function query
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(boolean, java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String, android.os.CancellationSignal)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String)}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#query(java.lang.String, java.lang.String[], java.lang.String, java.lang.String[], java.lang.String, java.lang.String, java.lang.String, java.lang.String)}
 **/
SQLiteDatabase.prototype.query = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'query',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setForeignKeyConstraintsEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setForeignKeyConstraintsEnabled(boolean)}
 **/
SQLiteDatabase.prototype.setForeignKeyConstraintsEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setForeignKeyConstraintsEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getPageSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getPageSize()}
 **/
SQLiteDatabase.prototype.getPageSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getPageSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function insertWithOnConflict
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#insertWithOnConflict(java.lang.String, java.lang.String, android.content.ContentValues, int)}
 **/
SQLiteDatabase.prototype.insertWithOnConflict = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'insertWithOnConflict',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isOpen
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isOpen()}
 **/
SQLiteDatabase.prototype.isOpen = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isOpen',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginTransaction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#beginTransaction()}
 **/
SQLiteDatabase.prototype.beginTransaction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginTransaction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function compileStatement
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#compileStatement(java.lang.String)}
 **/
SQLiteDatabase.prototype.compileStatement = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'compileStatement',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDbLockedByOtherThreads
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isDbLockedByOtherThreads()}
 **/
SQLiteDatabase.prototype.isDbLockedByOtherThreads = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDbLockedByOtherThreads',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setTransactionSuccessful
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setTransactionSuccessful()}
 **/
SQLiteDatabase.prototype.setTransactionSuccessful = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setTransactionSuccessful',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
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
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setLocale(java.util.Locale)}
 **/
SQLiteDatabase.prototype.setLocale = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function endTransaction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#endTransaction()}
 **/
SQLiteDatabase.prototype.endTransaction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'endTransaction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function rawQuery
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQuery(java.lang.String, java.lang.String[])}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#rawQuery(java.lang.String, java.lang.String[], android.os.CancellationSignal)}
 **/
SQLiteDatabase.prototype.rawQuery = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'rawQuery',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getMaximumSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getMaximumSize()}
 **/
SQLiteDatabase.prototype.getMaximumSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getMaximumSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function beginTransactionNonExclusive
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#beginTransactionNonExclusive()}
 **/
SQLiteDatabase.prototype.beginTransactionNonExclusive = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'beginTransactionNonExclusive',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function insert
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#insert(java.lang.String, java.lang.String, android.content.ContentValues)}
 **/
SQLiteDatabase.prototype.insert = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'insert',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function update
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#update(java.lang.String, android.content.ContentValues, java.lang.String, java.lang.String[])}
 **/
SQLiteDatabase.prototype.update = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'update',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setMaximumSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setMaximumSize(long)}
 **/
SQLiteDatabase.prototype.setMaximumSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setMaximumSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setLockingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setLockingEnabled(boolean)}
 **/
SQLiteDatabase.prototype.setLockingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setLockingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function delete
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#delete(java.lang.String, java.lang.String, java.lang.String[])}
 **/
SQLiteDatabase.prototype.delete = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'delete',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isReadOnly
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isReadOnly()}
 **/
SQLiteDatabase.prototype.isReadOnly = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isReadOnly',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function yieldIfContendedSafely
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#yieldIfContendedSafely()}
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#yieldIfContendedSafely(long)}
 **/
SQLiteDatabase.prototype.yieldIfContendedSafely = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'yieldIfContendedSafely',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function replaceOrThrow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#replaceOrThrow(java.lang.String, java.lang.String, android.content.ContentValues)}
 **/
SQLiteDatabase.prototype.replaceOrThrow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'replaceOrThrow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getVersion
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getVersion()}
 **/
SQLiteDatabase.prototype.getVersion = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getVersion',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDbLockedByCurrentThread
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isDbLockedByCurrentThread()}
 **/
SQLiteDatabase.prototype.isDbLockedByCurrentThread = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDbLockedByCurrentThread',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function getAttachedDbs
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#getAttachedDbs()}
 **/
SQLiteDatabase.prototype.getAttachedDbs = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'getAttachedDbs',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function inTransaction
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#inTransaction()}
 **/
SQLiteDatabase.prototype.inTransaction = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'inTransaction',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function insertOrThrow
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#insertOrThrow(java.lang.String, java.lang.String, android.content.ContentValues)}
 **/
SQLiteDatabase.prototype.insertOrThrow = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'insertOrThrow',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isWriteAheadLoggingEnabled
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isWriteAheadLoggingEnabled()}
 **/
SQLiteDatabase.prototype.isWriteAheadLoggingEnabled = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isWriteAheadLoggingEnabled',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function disableWriteAheadLogging
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#disableWriteAheadLogging()}
 **/
SQLiteDatabase.prototype.disableWriteAheadLogging = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'disableWriteAheadLogging',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function isDatabaseIntegrityOk
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#isDatabaseIntegrityOk()}
 **/
SQLiteDatabase.prototype.isDatabaseIntegrityOk = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'isDatabaseIntegrityOk',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function finalize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#finalize()}
 **/
SQLiteDatabase.prototype.finalize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'finalize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
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
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#toString()}
 **/
SQLiteDatabase.prototype.toString = function() {
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
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};
/**
 * TODO Fill out docs more...
 * @function setPageSize
 * @memberof
 * @instance
 * @see {@link http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html#setPageSize(long)}
 **/
SQLiteDatabase.prototype.setPageSize = function() {
	if (!this._hasPointer) return null;

	var result = this.$native.callNativeFunction({
		func: 'setPageSize',
		instanceMethod: true,
		args: Array.prototype.slice.call(arguments)
	});
	if (result == null) {
		return null;
	}
	// Wrap result if it's not a primitive type?
	if (result.apiName) {
		if (result.apiName === 'android.database.sqlite.SQLiteDatabase') {
			return new SQLiteDatabase(result);
		} else {
			var ctor = require(result.apiName);
			return new ctor(result);
		}
	}
	return result;
};

// export the class
module.exports = SQLiteDatabase;
