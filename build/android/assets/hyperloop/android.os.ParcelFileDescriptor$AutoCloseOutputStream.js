var Hyperloop=require("hyperloop"),EnclosingClass=require("android.os.ParcelFileDescriptor"),AutoCloseOutputStream=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.os.ParcelFileDescriptor$AutoCloseOutputStream")?arguments[0]:AutoCloseOutputStream.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.io.FileOutputStream");AutoCloseOutputStream.prototype=Object.create(SuperClass.prototype),AutoCloseOutputStream.prototype.constructor=AutoCloseOutputStream,Object.defineProperty(AutoCloseOutputStream.prototype,"super",{get:function(){return this._hasPointer?new AutoCloseOutputStream(this.$native.super):null},enumerable:!0}),AutoCloseOutputStream.className="android.os.ParcelFileDescriptor$AutoCloseOutputStream",AutoCloseOutputStream.prototype.className="android.os.ParcelFileDescriptor$AutoCloseOutputStream",Object.defineProperty(AutoCloseOutputStream,"class",{get:function(){return Hyperloop.getClass("android.os.ParcelFileDescriptor$AutoCloseOutputStream")},enumerable:!0,configurable:!1}),AutoCloseOutputStream.extend=function(e){var t=Hyperloop.extend("android.os.ParcelFileDescriptor$AutoCloseOutputStream"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var a=t.newInstance(arguments),i=this,o=e,u={};Object.keys(o).forEach(function(e){i[e]=function(){return o[e].apply(i,arguments)},u[e]=function(){return i[e].apply(i,r.apply(this,arguments))}}),a.setOverrides(u),this.$native=a,this._hasPointer=null!=a,this._private={}};return n.prototype=Object.create(AutoCloseOutputStream.prototype),n.prototype.constructor=n,n},AutoCloseOutputStream.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new AutoCloseOutputStream(Hyperloop.cast("android.os.ParcelFileDescriptor$AutoCloseOutputStream",e.$native)):e},AutoCloseOutputStream.prototype.close=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"close",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.os.ParcelFileDescriptor$AutoCloseOutputStream"===e.apiName)return new AutoCloseOutputStream(e);var t=require(e.apiName);return new t(e)}return e},module.exports=AutoCloseOutputStream;