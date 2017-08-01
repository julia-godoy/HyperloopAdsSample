var Hyperloop=require("hyperloop"),parentPackage=require("android.graphics"),Bitmap=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.Bitmap")?arguments[0]:Bitmap.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Bitmap.prototype=Object.create(SuperClass.prototype),Bitmap.prototype.constructor=Bitmap,Object.defineProperty(Bitmap.prototype,"super",{get:function(){return this._hasPointer?new Bitmap(this.$native.super):null},enumerable:!0}),Bitmap.className="android.graphics.Bitmap",Bitmap.prototype.className="android.graphics.Bitmap",Object.defineProperty(Bitmap,"class",{get:function(){return Hyperloop.getClass("android.graphics.Bitmap")},enumerable:!0,configurable:!1}),Bitmap.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Bitmap(Hyperloop.cast("android.graphics.Bitmap",e.$native)):e},Bitmap.DENSITY_NONE=0,Object.defineProperty(Bitmap,"CompressFormat",{get:function(){return require("android.graphics.Bitmap$CompressFormat")},enumerable:!0}),Object.defineProperty(Bitmap,"Config",{get:function(){return require("android.graphics.Bitmap$Config")},enumerable:!0}),Object.defineProperty(Bitmap,"CREATOR",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("CREATOR");if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Bitmap.createScaledBitmap=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"createScaledBitmap",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.createBitmap=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"createBitmap",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.isPremultiplied=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isPremultiplied",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.setPixel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setPixel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.extractAlpha=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"extractAlpha",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.setPixels=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setPixels",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getWidth=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getWidth",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.reconfigure=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"reconfigure",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getScaledWidth=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getScaledWidth",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.setHasMipMap=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setHasMipMap",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.hasMipMap=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hasMipMap",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.setConfig=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setConfig",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getScaledHeight=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getScaledHeight",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.setPremultiplied=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setPremultiplied",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getHeight=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHeight",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getPixels=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPixels",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.recycle=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"recycle",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.copyPixelsFromBuffer=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"copyPixelsFromBuffer",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.copy=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"copy",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.hasAlpha=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hasAlpha",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getAllocationByteCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAllocationByteCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.isRecycled=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isRecycled",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.prepareToDraw=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"prepareToDraw",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.compress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"compress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.copyPixelsToBuffer=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"copyPixelsToBuffer",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getPixel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPixel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getDensity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDensity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.setHasAlpha=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setHasAlpha",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getGenerationId=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getGenerationId",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.setDensity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setDensity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.setWidth=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setWidth",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.setHeight=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setHeight",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.describeContents=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"describeContents",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getConfig=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getConfig",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getByteCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getByteCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getNinePatchChunk=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getNinePatchChunk",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.eraseColor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"eraseColor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.isMutable=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isMutable",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.getRowBytes=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getRowBytes",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.writeToParcel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"writeToParcel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},Bitmap.prototype.sameAs=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sameAs",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Bitmap"===e.apiName)return new Bitmap(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Bitmap;