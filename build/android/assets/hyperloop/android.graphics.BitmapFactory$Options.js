var Hyperloop=require("hyperloop"),EnclosingClass=require("android.graphics.BitmapFactory"),Options=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.BitmapFactory$Options")?arguments[0]:Options.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Options.prototype=Object.create(SuperClass.prototype),Options.prototype.constructor=Options,Object.defineProperty(Options.prototype,"super",{get:function(){return this._hasPointer?new Options(this.$native.super):null},enumerable:!0}),Options.className="android.graphics.BitmapFactory$Options",Options.prototype.className="android.graphics.BitmapFactory$Options",Object.defineProperty(Options,"class",{get:function(){return Hyperloop.getClass("android.graphics.BitmapFactory$Options")},enumerable:!0,configurable:!1}),Options.extend=function(e){var t=Hyperloop.extend("android.graphics.BitmapFactory$Options"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(Options.prototype),n.prototype.constructor=n,n},Options.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Options(Hyperloop.cast("android.graphics.BitmapFactory$Options",e.$native)):e},Object.defineProperty(Options.prototype,"outMimeType",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("outMimeType");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("outMimeType",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"mCancel",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("mCancel");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("mCancel",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inPreferQualityOverSpeed",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inPreferQualityOverSpeed");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inPreferQualityOverSpeed",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inPreferredConfig",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inPreferredConfig");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inPreferredConfig",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inTempStorage",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inTempStorage");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inTempStorage",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inScreenDensity",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inScreenDensity");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inScreenDensity",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inMutable",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inMutable");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inMutable",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inPremultiplied",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inPremultiplied");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inPremultiplied",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inSampleSize",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inSampleSize");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inSampleSize",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inInputShareable",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inInputShareable");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inInputShareable",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inPurgeable",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inPurgeable");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inPurgeable",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"outHeight",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("outHeight");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("outHeight",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"outWidth",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("outWidth");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("outWidth",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inBitmap",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inBitmap");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inBitmap",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inDensity",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inDensity");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inDensity",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inJustDecodeBounds",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inJustDecodeBounds");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inJustDecodeBounds",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inScaled",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inScaled");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inScaled",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inTargetDensity",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inTargetDensity");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inTargetDensity",e)},enumerable:!0}),Object.defineProperty(Options.prototype,"inDither",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("inDither");if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("inDither",e)},enumerable:!0}),Options.prototype.requestCancelDecode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"requestCancelDecode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory$Options"===e.apiName)return new Options(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Options;