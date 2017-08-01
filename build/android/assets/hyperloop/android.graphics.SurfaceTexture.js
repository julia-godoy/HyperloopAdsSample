var Hyperloop=require("hyperloop"),parentPackage=require("android.graphics"),SurfaceTexture=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.SurfaceTexture")?arguments[0]:SurfaceTexture.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");SurfaceTexture.prototype=Object.create(SuperClass.prototype),SurfaceTexture.prototype.constructor=SurfaceTexture,Object.defineProperty(SurfaceTexture.prototype,"super",{get:function(){return this._hasPointer?new SurfaceTexture(this.$native.super):null},enumerable:!0}),SurfaceTexture.className="android.graphics.SurfaceTexture",SurfaceTexture.prototype.className="android.graphics.SurfaceTexture",Object.defineProperty(SurfaceTexture,"class",{get:function(){return Hyperloop.getClass("android.graphics.SurfaceTexture")},enumerable:!0,configurable:!1}),SurfaceTexture.extend=function(e){var t=Hyperloop.extend("android.graphics.SurfaceTexture"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(SurfaceTexture.prototype),n.prototype.constructor=n,n},SurfaceTexture.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new SurfaceTexture(Hyperloop.cast("android.graphics.SurfaceTexture",e.$native)):e},Object.defineProperty(SurfaceTexture,"OnFrameAvailableListener",{get:function(){return require("android.graphics.SurfaceTexture$OnFrameAvailableListener")},enumerable:!0}),Object.defineProperty(SurfaceTexture,"OutOfResourcesException",{get:function(){return require("android.graphics.SurfaceTexture$OutOfResourcesException")},enumerable:!0}),SurfaceTexture.prototype.getTransformMatrix=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTransformMatrix",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.SurfaceTexture"===e.apiName)return new SurfaceTexture(e);var t=require(e.apiName);return new t(e)}return e},SurfaceTexture.prototype.attachToGLContext=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"attachToGLContext",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.SurfaceTexture"===e.apiName)return new SurfaceTexture(e);var t=require(e.apiName);return new t(e)}return e},SurfaceTexture.prototype.updateTexImage=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"updateTexImage",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.SurfaceTexture"===e.apiName)return new SurfaceTexture(e);var t=require(e.apiName);return new t(e)}return e},SurfaceTexture.prototype.releaseTexImage=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"releaseTexImage",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.SurfaceTexture"===e.apiName)return new SurfaceTexture(e);var t=require(e.apiName);return new t(e)}return e},SurfaceTexture.prototype.getTimestamp=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTimestamp",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.SurfaceTexture"===e.apiName)return new SurfaceTexture(e);var t=require(e.apiName);return new t(e)}return e},SurfaceTexture.prototype.release=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"release",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.SurfaceTexture"===e.apiName)return new SurfaceTexture(e);var t=require(e.apiName);return new t(e)}return e},SurfaceTexture.prototype.finalize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"finalize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.SurfaceTexture"===e.apiName)return new SurfaceTexture(e);var t=require(e.apiName);return new t(e)}return e},SurfaceTexture.prototype.setDefaultBufferSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setDefaultBufferSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.SurfaceTexture"===e.apiName)return new SurfaceTexture(e);var t=require(e.apiName);return new t(e)}return e},SurfaceTexture.prototype.detachFromGLContext=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"detachFromGLContext",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.SurfaceTexture"===e.apiName)return new SurfaceTexture(e);var t=require(e.apiName);return new t(e)}return e},SurfaceTexture.prototype.setOnFrameAvailableListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setOnFrameAvailableListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.SurfaceTexture"===e.apiName)return new SurfaceTexture(e);var t=require(e.apiName);return new t(e)}return e},module.exports=SurfaceTexture;