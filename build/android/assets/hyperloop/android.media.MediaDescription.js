var Hyperloop=require("hyperloop"),parentPackage=require("android.media"),MediaDescription=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.media.MediaDescription")?arguments[0]:MediaDescription.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");MediaDescription.prototype=Object.create(SuperClass.prototype),MediaDescription.prototype.constructor=MediaDescription,Object.defineProperty(MediaDescription.prototype,"super",{get:function(){return this._hasPointer?new MediaDescription(this.$native.super):null},enumerable:!0}),MediaDescription.className="android.media.MediaDescription",MediaDescription.prototype.className="android.media.MediaDescription",Object.defineProperty(MediaDescription,"class",{get:function(){return Hyperloop.getClass("android.media.MediaDescription")},enumerable:!0,configurable:!1}),MediaDescription.extend=function(e){var t=Hyperloop.extend("android.media.MediaDescription"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(MediaDescription.prototype),n.prototype.constructor=n,n},MediaDescription.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new MediaDescription(Hyperloop.cast("android.media.MediaDescription",e.$native)):e},Object.defineProperty(MediaDescription,"Builder",{get:function(){return require("android.media.MediaDescription$Builder")},enumerable:!0}),Object.defineProperty(MediaDescription,"CREATOR",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("CREATOR");if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),MediaDescription.prototype.getTitle=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTitle",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},MediaDescription.prototype.getSubtitle=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSubtitle",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},MediaDescription.prototype.getIconUri=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIconUri",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},MediaDescription.prototype.getMediaUri=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMediaUri",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},MediaDescription.prototype.getMediaId=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMediaId",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},MediaDescription.prototype.getIconBitmap=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIconBitmap",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},MediaDescription.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},MediaDescription.prototype.getExtras=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getExtras",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},MediaDescription.prototype.getDescription=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDescription",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},MediaDescription.prototype.describeContents=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"describeContents",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},MediaDescription.prototype.writeToParcel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"writeToParcel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.MediaDescription"===e.apiName)return new MediaDescription(e);var t=require(e.apiName);return new t(e)}return e},module.exports=MediaDescription;