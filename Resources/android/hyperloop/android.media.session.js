/**
 * Hyperloop
 * Generated code is Copyright (c) 2017 Appcelerator, Inc. and subject to the
 * Appcelerator Platform Subscription agreement.
 *
 * WARNING: This is generated code. Modify at your own risk and without support
 *
 * @module android.media.session
 */
var parent = require('android.media') || {};

/**
 * Java Package exposed in JS.
 * http://developer.android.com/reference/android/media/session/package-summary.html
 **/
var session = {};
parent.session = session;

// Types in package
Object.defineProperty(session, 'MediaController', {
	get: function() {
		return require('android.media.session.MediaController');
	},
	enumerable: true
});
Object.defineProperty(session, 'MediaSession', {
	get: function() {
		return require('android.media.session.MediaSession');
	},
	enumerable: true
});
Object.defineProperty(session, 'PlaybackState', {
	get: function() {
		return require('android.media.session.PlaybackState');
	},
	enumerable: true
});

// export the interface
module.exports = session;
