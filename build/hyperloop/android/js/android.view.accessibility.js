/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.accessibility
 */
var parent = require('android.view') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/view/accessibility/package-summary.html
 **/
var accessibility = {};
parent.accessibility = accessibility;

// Types in package
Object.defineProperty(accessibility, 'AccessibilityEvent', {
	get: function() {
		return require('android.view.accessibility.AccessibilityEvent');
	},
	enumerable: true
});
Object.defineProperty(accessibility, 'AccessibilityNodeInfo', {
	get: function() {
		return require('android.view.accessibility.AccessibilityNodeInfo');
	},
	enumerable: true
});
Object.defineProperty(accessibility, 'AccessibilityNodeProvider', {
	get: function() {
		return require('android.view.accessibility.AccessibilityNodeProvider');
	},
	enumerable: true
});
Object.defineProperty(accessibility, 'AccessibilityRecord', {
	get: function() {
		return require('android.view.accessibility.AccessibilityRecord');
	},
	enumerable: true
});
Object.defineProperty(accessibility, 'AccessibilityWindowInfo', {
	get: function() {
		return require('android.view.accessibility.AccessibilityWindowInfo');
	},
	enumerable: true
});

// export the interface
module.exports = accessibility;
