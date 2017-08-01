/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.view.animation
 */
var parent = require('android.view') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/view/animation/package-summary.html
 **/
var animation = {};
parent.animation = animation;

// Types in package
Object.defineProperty(animation, 'Animation', {
	get: function() {
		return require('android.view.animation.Animation');
	},
	enumerable: true
});
Object.defineProperty(animation, 'Interpolator', {
	get: function() {
		return require('android.view.animation.Interpolator');
	},
	enumerable: true
});
Object.defineProperty(animation, 'LayoutAnimationController', {
	get: function() {
		return require('android.view.animation.LayoutAnimationController');
	},
	enumerable: true
});
Object.defineProperty(animation, 'Transformation', {
	get: function() {
		return require('android.view.animation.Transformation');
	},
	enumerable: true
});

// export the interface
module.exports = animation;
