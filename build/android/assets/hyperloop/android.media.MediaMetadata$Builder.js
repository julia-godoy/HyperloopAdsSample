var Hyperloop=require("hyperloop"),EnclosingClass=require("android.media.MediaMetadata"),Builder=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.media.MediaMetadata$Builder")?arguments[0]:Builder.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Builder.prototype=Object.create(SuperClass.prototype),Builder.prototype.constructor=Builder,Object.defineProperty(Builder.prototype,"super",{get:function(){return this._hasPointer?new Builder(this.$native.super):null},enumerable:!0}),Builder.className="android.media.MediaMetadata$Builder",Builder.prototype.className="android.media.MediaMetadata$Builder",Object.defineProperty(Builder,"class",{get:function(){return Hyperloop.getClass("android.media.MediaMetadata$Builder")},enumerable:!0,configurable:!1}),Builder.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Builder(Hyperloop.cast("android.media.MediaMetadata$Builder",e.$native)):e},Builder.prototype.putBitmap=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"putBitmap",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaMetadata$Builder"===e.apiName)return new Builder(e);var t=require(e.apiName);return new t(e)}return e},Builder.prototype.build=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"build",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaMetadata$Builder"===e.apiName)return new Builder(e);var t=require(e.apiName);return new t(e)}return e},Builder.prototype.putText=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"putText",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaMetadata$Builder"===e.apiName)return new Builder(e);var t=require(e.apiName);return new t(e)}return e},Builder.prototype.putString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"putString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaMetadata$Builder"===e.apiName)return new Builder(e);var t=require(e.apiName);return new t(e)}return e},Builder.prototype.putRating=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"putRating",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaMetadata$Builder"===e.apiName)return new Builder(e);var t=require(e.apiName);return new t(e)}return e},Builder.prototype.putLong=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"putLong",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaMetadata$Builder"===e.apiName)return new Builder(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Builder;