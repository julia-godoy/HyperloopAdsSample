var Hyperloop=require("hyperloop"),EnclosingClass=require("android.app.PendingIntent"),CanceledException=function(){var t;t=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.app.PendingIntent$CanceledException")?arguments[0]:CanceledException.class.newInstance(arguments),this.$native=t,this._hasPointer=null!=t,this._private={}},SuperClass=require("android.util.AndroidException");CanceledException.prototype=Object.create(SuperClass.prototype),CanceledException.prototype.constructor=CanceledException,Object.defineProperty(CanceledException.prototype,"super",{get:function(){return this._hasPointer?new CanceledException(this.$native.super):null},enumerable:!0}),CanceledException.className="android.app.PendingIntent$CanceledException",CanceledException.prototype.className="android.app.PendingIntent$CanceledException",Object.defineProperty(CanceledException,"class",{get:function(){return Hyperloop.getClass("android.app.PendingIntent$CanceledException")},enumerable:!0,configurable:!1}),CanceledException.extend=function(t){var e=Hyperloop.extend("android.app.PendingIntent$CanceledException"),n=function(){function n(t){if(t.apiName&&t.isNativeProxy&&t.isInstanceProxy){var e=require(t.apiName);return new e(t)}return t}function r(){for(var t=[],e=0;e<arguments.length;e++)t[e]=n(arguments[e]);return t}var i=e.newInstance(arguments),a=this,o=t,u={};Object.keys(o).forEach(function(t){a[t]=function(){return o[t].apply(a,arguments)},u[t]=function(){return a[t].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(CanceledException.prototype),n.prototype.constructor=n,n},CanceledException.cast=function(t){return t.$native&&t.$native.isInstanceProxy?new CanceledException(Hyperloop.cast("android.app.PendingIntent$CanceledException",t.$native)):t},module.exports=CanceledException;