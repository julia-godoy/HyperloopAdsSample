var Hyperloop=require("hyperloop"),parentPackage=require("android.app"),SharedElementCallback=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.app.SharedElementCallback")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: android.app.SharedElementCallback. Create a subclass using android.app.SharedElementCallback.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");SharedElementCallback.prototype=Object.create(SuperClass.prototype),SharedElementCallback.prototype.constructor=SharedElementCallback,Object.defineProperty(SharedElementCallback.prototype,"super",{get:function(){return this._hasPointer?new SharedElementCallback(this.$native.super):null},enumerable:!0}),SharedElementCallback.className="android.app.SharedElementCallback",SharedElementCallback.prototype.className="android.app.SharedElementCallback",Object.defineProperty(SharedElementCallback,"class",{get:function(){return Hyperloop.getClass("android.app.SharedElementCallback")},enumerable:!0,configurable:!1}),SharedElementCallback.extend=function(e){var t=Hyperloop.extend("android.app.SharedElementCallback"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(SharedElementCallback.prototype),n.prototype.constructor=n,n},SharedElementCallback.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new SharedElementCallback(Hyperloop.cast("android.app.SharedElementCallback",e.$native)):e},Object.defineProperty(SharedElementCallback,"OnSharedElementsReadyListener",{get:function(){return require("android.app.SharedElementCallback$OnSharedElementsReadyListener")},enumerable:!0}),SharedElementCallback.prototype.onSharedElementEnd=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onSharedElementEnd",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.SharedElementCallback"===e.apiName)return new SharedElementCallback(e);var t=require(e.apiName);return new t(e)}return e},SharedElementCallback.prototype.onSharedElementsArrived=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onSharedElementsArrived",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.SharedElementCallback"===e.apiName)return new SharedElementCallback(e);var t=require(e.apiName);return new t(e)}return e},SharedElementCallback.prototype.onCreateSnapshotView=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onCreateSnapshotView",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.SharedElementCallback"===e.apiName)return new SharedElementCallback(e);var t=require(e.apiName);return new t(e)}return e},SharedElementCallback.prototype.onRejectSharedElements=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onRejectSharedElements",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.SharedElementCallback"===e.apiName)return new SharedElementCallback(e);var t=require(e.apiName);return new t(e)}return e},SharedElementCallback.prototype.onSharedElementStart=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onSharedElementStart",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.SharedElementCallback"===e.apiName)return new SharedElementCallback(e);var t=require(e.apiName);return new t(e)}return e},SharedElementCallback.prototype.onMapSharedElements=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onMapSharedElements",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.SharedElementCallback"===e.apiName)return new SharedElementCallback(e);var t=require(e.apiName);return new t(e)}return e},SharedElementCallback.prototype.onCaptureSharedElementSnapshot=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onCaptureSharedElementSnapshot",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.SharedElementCallback"===e.apiName)return new SharedElementCallback(e);var t=require(e.apiName);return new t(e)}return e},module.exports=SharedElementCallback;