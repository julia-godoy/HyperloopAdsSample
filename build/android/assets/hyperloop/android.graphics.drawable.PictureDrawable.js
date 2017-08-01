var Hyperloop=require("hyperloop"),parentPackage=require("android.graphics.drawable"),PictureDrawable=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.drawable.PictureDrawable")?arguments[0]:PictureDrawable.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("android.graphics.drawable.Drawable");PictureDrawable.prototype=Object.create(SuperClass.prototype),PictureDrawable.prototype.constructor=PictureDrawable,Object.defineProperty(PictureDrawable.prototype,"super",{get:function(){return this._hasPointer?new PictureDrawable(this.$native.super):null},enumerable:!0}),PictureDrawable.className="android.graphics.drawable.PictureDrawable",PictureDrawable.prototype.className="android.graphics.drawable.PictureDrawable",Object.defineProperty(PictureDrawable,"class",{get:function(){return Hyperloop.getClass("android.graphics.drawable.PictureDrawable")},enumerable:!0,configurable:!1}),PictureDrawable.extend=function(e){var t=Hyperloop.extend("android.graphics.drawable.PictureDrawable"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var a=t.newInstance(arguments),i=this,o=e,u={};Object.keys(o).forEach(function(e){i[e]=function(){return o[e].apply(i,arguments)},u[e]=function(){return i[e].apply(i,r.apply(this,arguments))}}),a.setOverrides(u),this.$native=a,this._hasPointer=null!=a,this._private={}};return n.prototype=Object.create(PictureDrawable.prototype),n.prototype.constructor=n,n},PictureDrawable.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new PictureDrawable(Hyperloop.cast("android.graphics.drawable.PictureDrawable",e.$native)):e},PictureDrawable.prototype.getOpacity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getOpacity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.PictureDrawable"===e.apiName)return new PictureDrawable(e);var t=require(e.apiName);return new t(e)}return e},PictureDrawable.prototype.setPicture=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setPicture",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.PictureDrawable"===e.apiName)return new PictureDrawable(e);var t=require(e.apiName);return new t(e)}return e},PictureDrawable.prototype.setColorFilter=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setColorFilter",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.PictureDrawable"===e.apiName)return new PictureDrawable(e);var t=require(e.apiName);return new t(e)}return e},PictureDrawable.prototype.getPicture=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPicture",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.PictureDrawable"===e.apiName)return new PictureDrawable(e);var t=require(e.apiName);return new t(e)}return e},PictureDrawable.prototype.getIntrinsicHeight=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIntrinsicHeight",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.PictureDrawable"===e.apiName)return new PictureDrawable(e);var t=require(e.apiName);return new t(e)}return e},PictureDrawable.prototype.setAlpha=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setAlpha",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.PictureDrawable"===e.apiName)return new PictureDrawable(e);var t=require(e.apiName);return new t(e)}return e},PictureDrawable.prototype.draw=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"draw",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.PictureDrawable"===e.apiName)return new PictureDrawable(e);var t=require(e.apiName);return new t(e)}return e},PictureDrawable.prototype.getIntrinsicWidth=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIntrinsicWidth",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.PictureDrawable"===e.apiName)return new PictureDrawable(e);var t=require(e.apiName);return new t(e)}return e},module.exports=PictureDrawable;