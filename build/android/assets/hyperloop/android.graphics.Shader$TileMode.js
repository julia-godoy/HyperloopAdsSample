var Hyperloop=require("hyperloop"),EnclosingClass=require("android.graphics.Shader"),TileMode=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.Shader$TileMode")?arguments[0]:TileMode.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Enum");TileMode.prototype=Object.create(SuperClass.prototype),TileMode.prototype.constructor=TileMode,Object.defineProperty(TileMode.prototype,"super",{get:function(){return this._hasPointer?new TileMode(this.$native.super):null},enumerable:!0}),TileMode.className="android.graphics.Shader$TileMode",TileMode.prototype.className="android.graphics.Shader$TileMode",Object.defineProperty(TileMode,"class",{get:function(){return Hyperloop.getClass("android.graphics.Shader$TileMode")},enumerable:!0,configurable:!1}),TileMode.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new TileMode(Hyperloop.cast("android.graphics.Shader$TileMode",e.$native)):e},Object.defineProperty(TileMode,"REPEAT",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("REPEAT");if(null==e)return null;if(e.apiName){if("android.graphics.Shader$TileMode"===e.apiName)return new TileMode(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(TileMode,"CLAMP",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("CLAMP");if(null==e)return null;if(e.apiName){if("android.graphics.Shader$TileMode"===e.apiName)return new TileMode(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(TileMode,"MIRROR",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("MIRROR");if(null==e)return null;if(e.apiName){if("android.graphics.Shader$TileMode"===e.apiName)return new TileMode(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),TileMode.valueOf=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"valueOf",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Shader$TileMode"===e.apiName)return new TileMode(e);var t=require(e.apiName);return new t(e)}return e},TileMode.values=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"values",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Shader$TileMode"===e.apiName)return new TileMode(e);var t=require(e.apiName);return new t(e)}return e},module.exports=TileMode;