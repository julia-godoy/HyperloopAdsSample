/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database.sqlite
 */
var parent = require('android.database') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/database/sqlite/package-summary.html
 **/
var sqlite = {};
parent.sqlite = sqlite;

// Types in package
Object.defineProperty(sqlite, 'SQLiteClosable', {
	get: function() {
		return require('android.database.sqlite.SQLiteClosable');
	},
	enumerable: true
});
Object.defineProperty(sqlite, 'SQLiteCursorDriver', {
	get: function() {
		return require('android.database.sqlite.SQLiteCursorDriver');
	},
	enumerable: true
});
Object.defineProperty(sqlite, 'SQLiteDatabase', {
	get: function() {
		return require('android.database.sqlite.SQLiteDatabase');
	},
	enumerable: true
});
Object.defineProperty(sqlite, 'SQLiteProgram', {
	get: function() {
		return require('android.database.sqlite.SQLiteProgram');
	},
	enumerable: true
});
Object.defineProperty(sqlite, 'SQLiteQuery', {
	get: function() {
		return require('android.database.sqlite.SQLiteQuery');
	},
	enumerable: true
});
Object.defineProperty(sqlite, 'SQLiteStatement', {
	get: function() {
		return require('android.database.sqlite.SQLiteStatement');
	},
	enumerable: true
});
Object.defineProperty(sqlite, 'SQLiteTransactionListener', {
	get: function() {
		return require('android.database.sqlite.SQLiteTransactionListener');
	},
	enumerable: true
});

// export the interface
module.exports = sqlite;
