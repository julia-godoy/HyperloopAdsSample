/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.inputmethod
 */
var parent = require('android.view') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/view/inputmethod/package-summary.html
 **/
var inputmethod = {};
parent.inputmethod = inputmethod;

// Types in package
Object.defineProperty(inputmethod, 'CompletionInfo', {
	get: function() {
		return require('android.view.inputmethod.CompletionInfo');
	},
	enumerable: true
});
Object.defineProperty(inputmethod, 'CorrectionInfo', {
	get: function() {
		return require('android.view.inputmethod.CorrectionInfo');
	},
	enumerable: true
});
Object.defineProperty(inputmethod, 'EditorInfo', {
	get: function() {
		return require('android.view.inputmethod.EditorInfo');
	},
	enumerable: true
});
Object.defineProperty(inputmethod, 'ExtractedText', {
	get: function() {
		return require('android.view.inputmethod.ExtractedText');
	},
	enumerable: true
});
Object.defineProperty(inputmethod, 'ExtractedTextRequest', {
	get: function() {
		return require('android.view.inputmethod.ExtractedTextRequest');
	},
	enumerable: true
});
Object.defineProperty(inputmethod, 'InputConnection', {
	get: function() {
		return require('android.view.inputmethod.InputConnection');
	},
	enumerable: true
});

// export the interface
module.exports = inputmethod;
