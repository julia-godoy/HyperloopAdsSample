var Hyperloop=require("hyperloop"),EnclosingClass=require("android.content.res.AssetManager"),AssetInputStream=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.content.res.AssetManager$AssetInputStream")?arguments[0]:AssetInputStream.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.io.InputStream");AssetInputStream.prototype=Object.create(SuperClass.prototype),AssetInputStream.prototype.constructor=AssetInputStream,Object.defineProperty(AssetInputStream.prototype,"super",{get:function(){return this._hasPointer?new AssetInputStream(this.$native.super):null},enumerable:!0}),AssetInputStream.className="android.content.res.AssetManager$AssetInputStream",AssetInputStream.prototype.className="android.content.res.AssetManager$AssetInputStream",Object.defineProperty(AssetInputStream,"class",{get:function(){return Hyperloop.getClass("android.content.res.AssetManager$AssetInputStream")},enumerable:!0,configurable:!1}),AssetInputStream.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new AssetInputStream(Hyperloop.cast("android.content.res.AssetManager$AssetInputStream",e.$native)):e},AssetInputStream.prototype.read=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"read",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.AssetManager$AssetInputStream"===e.apiName)return new AssetInputStream(e);var t=require(e.apiName);return new t(e)}return e},AssetInputStream.prototype.markSupported=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"markSupported",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.AssetManager$AssetInputStream"===e.apiName)return new AssetInputStream(e);var t=require(e.apiName);return new t(e)}return e},AssetInputStream.prototype.available=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"available",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.AssetManager$AssetInputStream"===e.apiName)return new AssetInputStream(e);var t=require(e.apiName);return new t(e)}return e},AssetInputStream.prototype.reset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"reset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.AssetManager$AssetInputStream"===e.apiName)return new AssetInputStream(e);var t=require(e.apiName);return new t(e)}return e},AssetInputStream.prototype.skip=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"skip",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.AssetManager$AssetInputStream"===e.apiName)return new AssetInputStream(e);var t=require(e.apiName);return new t(e)}return e},AssetInputStream.prototype.finalize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"finalize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.AssetManager$AssetInputStream"===e.apiName)return new AssetInputStream(e);var t=require(e.apiName);return new t(e)}return e},AssetInputStream.prototype.close=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"close",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.AssetManager$AssetInputStream"===e.apiName)return new AssetInputStream(e);var t=require(e.apiName);return new t(e)}return e},AssetInputStream.prototype.mark=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"mark",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.AssetManager$AssetInputStream"===e.apiName)return new AssetInputStream(e);var t=require(e.apiName);return new t(e)}return e},module.exports=AssetInputStream;