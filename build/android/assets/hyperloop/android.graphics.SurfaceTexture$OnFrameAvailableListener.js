var Hyperloop=require("hyperloop"),EnclosingClass=require("android.graphics.SurfaceTexture"),OnFrameAvailableListener=function(){function e(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=e(arguments[n]);return t}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"android.graphics.SurfaceTexture$OnFrameAvailableListener"===arguments[0].apiName)n=arguments[0];else{var r,i=this,a=Array.prototype.slice.call(arguments)[0],o={};Object.keys(a).forEach(function(e){i[e]=function(){return a[e].apply(i,arguments)},o[e]=function(){return i[e].apply(i,t.apply(this,arguments))}}),r=Hyperloop.implement("android.graphics.SurfaceTexture$OnFrameAvailableListener"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};OnFrameAvailableListener.toString=function(){return"[object "+this.className+"]"},OnFrameAvailableListener.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},OnFrameAvailableListener.isInstanceOf=function(e,t){if("function"!=typeof t||"function"!=typeof e)return!1;for(;e;){if(t===e||e instanceof t||e.className===t.className)return!0;e=e.__superclass__}return!1},OnFrameAvailableListener.className="android.graphics.SurfaceTexture$OnFrameAvailableListener",OnFrameAvailableListener.prototype.className="android.graphics.SurfaceTexture$OnFrameAvailableListener",Object.defineProperty(OnFrameAvailableListener,"class",{get:function(){return Hyperloop.getClass("android.graphics.SurfaceTexture$OnFrameAvailableListener")},enumerable:!0,configurable:!1}),OnFrameAvailableListener.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new OnFrameAvailableListener(Hyperloop.cast("android.graphics.SurfaceTexture$OnFrameAvailableListener",e.$native)):e},OnFrameAvailableListener.prototype.equals=function(e){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[e]});return t},OnFrameAvailableListener.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return e},module.exports=OnFrameAvailableListener;