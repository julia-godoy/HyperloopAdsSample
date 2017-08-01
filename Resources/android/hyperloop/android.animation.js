/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.animation
 */
var parent = require('android') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/animation/package-summary.html
 **/
var animation = {};
parent.animation = animation;

// Types in package
Object.defineProperty(animation, 'Animator', {
	get: function() {
		return require('android.animation.Animator');
	},
	enumerable: true
});
Object.defineProperty(animation, 'LayoutTransition', {
	get: function() {
		return require('android.animation.LayoutTransition');
	},
	enumerable: true
});
Object.defineProperty(animation, 'StateListAnimator', {
	get: function() {
		return require('android.animation.StateListAnimator');
	},
	enumerable: true
});
Object.defineProperty(animation, 'TimeInterpolator', {
	get: function() {
		return require('android.animation.TimeInterpolator');
	},
	enumerable: true
});
Object.defineProperty(animation, 'TypeEvaluator', {
	get: function() {
		return require('android.animation.TypeEvaluator');
	},
	enumerable: true
});
Object.defineProperty(animation, 'ValueAnimator', {
	get: function() {
		return require('android.animation.ValueAnimator');
	},
	enumerable: true
});

// export the interface
module.exports = animation;
