var parent=require("android.media")||{},session={};parent.session=session,Object.defineProperty(session,"MediaController",{get:function(){return require("android.media.session.MediaController")},enumerable:!0}),Object.defineProperty(session,"MediaSession",{get:function(){return require("android.media.session.MediaSession")},enumerable:!0}),Object.defineProperty(session,"PlaybackState",{get:function(){return require("android.media.session.PlaybackState")},enumerable:!0}),module.exports=session;