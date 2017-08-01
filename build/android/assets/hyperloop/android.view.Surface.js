var Hyperloop=require("hyperloop"),parentPackage=require("android.view"),Surface=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.view.Surface")?arguments[0]:Surface.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Surface.prototype=Object.create(SuperClass.prototype),Surface.prototype.constructor=Surface,Object.defineProperty(Surface.prototype,"super",{get:function(){return this._hasPointer?new Surface(this.$native.super):null},enumerable:!0}),Surface.className="android.view.Surface",Surface.prototype.className="android.view.Surface",Object.defineProperty(Surface,"class",{get:function(){return Hyperloop.getClass("android.view.Surface")},enumerable:!0,configurable:!1}),Surface.extend=function(e){var t=Hyperloop.extend("android.view.Surface"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(Surface.prototype),n.prototype.constructor=n,n},Surface.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Surface(Hyperloop.cast("android.view.Surface",e.$native)):e},Surface.ROTATION_0=0,Surface.ROTATION_270=3,Surface.ROTATION_180=2,Surface.ROTATION_90=1,Object.defineProperty(Surface,"OutOfResourcesException",{get:function(){return require("android.view.Surface$OutOfResourcesException")},enumerable:!0}),Object.defineProperty(Surface,"CREATOR",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("CREATOR");if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Surface.prototype.lockCanvas=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"lockCanvas",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},Surface.prototype.release=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"release",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},Surface.prototype.isValid=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isValid",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},Surface.prototype.unlockCanvas=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"unlockCanvas",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},Surface.prototype.unlockCanvasAndPost=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"unlockCanvasAndPost",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},Surface.prototype.finalize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"finalize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},Surface.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},Surface.prototype.readFromParcel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"readFromParcel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},Surface.prototype.describeContents=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"describeContents",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},Surface.prototype.writeToParcel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"writeToParcel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},Surface.prototype.lockHardwareCanvas=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"lockHardwareCanvas",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.Surface"===e.apiName)return new Surface(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Surface;