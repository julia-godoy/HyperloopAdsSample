var Hyperloop=require("hyperloop"),EnclosingClass=require("android.os.ParcelFileDescriptor"),FileDescriptorDetachedException=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.os.ParcelFileDescriptor$FileDescriptorDetachedException")?arguments[0]:FileDescriptorDetachedException.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.io.IOException");FileDescriptorDetachedException.prototype=Object.create(SuperClass.prototype),FileDescriptorDetachedException.prototype.constructor=FileDescriptorDetachedException,Object.defineProperty(FileDescriptorDetachedException.prototype,"super",{get:function(){return this._hasPointer?new FileDescriptorDetachedException(this.$native.super):null},enumerable:!0}),FileDescriptorDetachedException.className="android.os.ParcelFileDescriptor$FileDescriptorDetachedException",FileDescriptorDetachedException.prototype.className="android.os.ParcelFileDescriptor$FileDescriptorDetachedException",Object.defineProperty(FileDescriptorDetachedException,"class",{get:function(){return Hyperloop.getClass("android.os.ParcelFileDescriptor$FileDescriptorDetachedException")},enumerable:!0,configurable:!1}),FileDescriptorDetachedException.extend=function(e){var t=Hyperloop.extend("android.os.ParcelFileDescriptor$FileDescriptorDetachedException"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var a=t.newInstance(arguments),i=this,o=e,u={};Object.keys(o).forEach(function(e){i[e]=function(){return o[e].apply(i,arguments)},u[e]=function(){return i[e].apply(i,r.apply(this,arguments))}}),a.setOverrides(u),this.$native=a,this._hasPointer=null!=a,this._private={}};return n.prototype=Object.create(FileDescriptorDetachedException.prototype),n.prototype.constructor=n,n},FileDescriptorDetachedException.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new FileDescriptorDetachedException(Hyperloop.cast("android.os.ParcelFileDescriptor$FileDescriptorDetachedException",e.$native)):e},module.exports=FileDescriptorDetachedException;