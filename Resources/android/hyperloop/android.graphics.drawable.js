/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.graphics.drawable
 */
var parent = require('android.graphics') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/graphics/drawable/package-summary.html
 **/
var drawable = {};
parent.drawable = drawable;

// Types in package
Object.defineProperty(drawable, 'Drawable', {
	get: function() {
		return require('android.graphics.drawable.Drawable');
	},
	enumerable: true
});
Object.defineProperty(drawable, 'PictureDrawable', {
	get: function() {
		return require('android.graphics.drawable.PictureDrawable');
	},
	enumerable: true
});

// export the interface
module.exports = drawable;
