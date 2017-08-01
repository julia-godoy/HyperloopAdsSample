/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.transition
 */
var parent = require('android') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/transition/package-summary.html
 **/
var transition = {};
parent.transition = transition;

// Types in package
Object.defineProperty(transition, 'PathMotion', {
	get: function() {
		return require('android.transition.PathMotion');
	},
	enumerable: true
});
Object.defineProperty(transition, 'Scene', {
	get: function() {
		return require('android.transition.Scene');
	},
	enumerable: true
});
Object.defineProperty(transition, 'Transition', {
	get: function() {
		return require('android.transition.Transition');
	},
	enumerable: true
});
Object.defineProperty(transition, 'TransitionManager', {
	get: function() {
		return require('android.transition.TransitionManager');
	},
	enumerable: true
});
Object.defineProperty(transition, 'TransitionPropagation', {
	get: function() {
		return require('android.transition.TransitionPropagation');
	},
	enumerable: true
});
Object.defineProperty(transition, 'TransitionValues', {
	get: function() {
		return require('android.transition.TransitionValues');
	},
	enumerable: true
});

// export the interface
module.exports = transition;
