var Hyperloop=require("hyperloop"),EnclosingClass=require("android.graphics.Path"),FillType=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.Path$FillType")?arguments[0]:FillType.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Enum");FillType.prototype=Object.create(SuperClass.prototype),FillType.prototype.constructor=FillType,Object.defineProperty(FillType.prototype,"super",{get:function(){return this._hasPointer?new FillType(this.$native.super):null},enumerable:!0}),FillType.className="android.graphics.Path$FillType",FillType.prototype.className="android.graphics.Path$FillType",Object.defineProperty(FillType,"class",{get:function(){return Hyperloop.getClass("android.graphics.Path$FillType")},enumerable:!0,configurable:!1}),FillType.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new FillType(Hyperloop.cast("android.graphics.Path$FillType",e.$native)):e},Object.defineProperty(FillType,"WINDING",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("WINDING");if(null==e)return null;if(e.apiName){if("android.graphics.Path$FillType"===e.apiName)return new FillType(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(FillType,"INVERSE_WINDING",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("INVERSE_WINDING");if(null==e)return null;if(e.apiName){if("android.graphics.Path$FillType"===e.apiName)return new FillType(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(FillType,"EVEN_ODD",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("EVEN_ODD");if(null==e)return null;if(e.apiName){if("android.graphics.Path$FillType"===e.apiName)return new FillType(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(FillType,"INVERSE_EVEN_ODD",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("INVERSE_EVEN_ODD");if(null==e)return null;if(e.apiName){if("android.graphics.Path$FillType"===e.apiName)return new FillType(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),FillType.valueOf=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"valueOf",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Path$FillType"===e.apiName)return new FillType(e);var t=require(e.apiName);return new t(e)}return e},FillType.values=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"values",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Path$FillType"===e.apiName)return new FillType(e);var t=require(e.apiName);return new t(e)}return e},module.exports=FillType;