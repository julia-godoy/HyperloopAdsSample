/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media
 */
var parent = require('android') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/media/package-summary.html
 **/
var media = {};
parent.media = media;

// Types in package
Object.defineProperty(media, 'AudioAttributes', {
	get: function() {
		return require('android.media.AudioAttributes');
	},
	enumerable: true
});
Object.defineProperty(media, 'MediaDescription', {
	get: function() {
		return require('android.media.MediaDescription');
	},
	enumerable: true
});
Object.defineProperty(media, 'MediaMetadata', {
	get: function() {
		return require('android.media.MediaMetadata');
	},
	enumerable: true
});
Object.defineProperty(media, 'Rating', {
	get: function() {
		return require('android.media.Rating');
	},
	enumerable: true
});

// export the interface
module.exports = media;
