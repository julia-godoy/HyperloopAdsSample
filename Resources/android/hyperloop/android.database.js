/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.database
 */
var parent = require('android') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/database/package-summary.html
 **/
var database = {};
parent.database = database;

// Types in package
Object.defineProperty(database, 'CharArrayBuffer', {
	get: function() {
		return require('android.database.CharArrayBuffer');
	},
	enumerable: true
});
Object.defineProperty(database, 'ContentObserver', {
	get: function() {
		return require('android.database.ContentObserver');
	},
	enumerable: true
});
Object.defineProperty(database, 'Cursor', {
	get: function() {
		return require('android.database.Cursor');
	},
	enumerable: true
});
Object.defineProperty(database, 'DataSetObserver', {
	get: function() {
		return require('android.database.DataSetObserver');
	},
	enumerable: true
});
Object.defineProperty(database, 'DatabaseErrorHandler', {
	get: function() {
		return require('android.database.DatabaseErrorHandler');
	},
	enumerable: true
});

// export the interface
module.exports = database;
