var Hyperloop=require("hyperloop"),EnclosingClass=require("android.graphics.Canvas"),EdgeType=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.Canvas$EdgeType")?arguments[0]:EdgeType.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Enum");EdgeType.prototype=Object.create(SuperClass.prototype),EdgeType.prototype.constructor=EdgeType,Object.defineProperty(EdgeType.prototype,"super",{get:function(){return this._hasPointer?new EdgeType(this.$native.super):null},enumerable:!0}),EdgeType.className="android.graphics.Canvas$EdgeType",EdgeType.prototype.className="android.graphics.Canvas$EdgeType",Object.defineProperty(EdgeType,"class",{get:function(){return Hyperloop.getClass("android.graphics.Canvas$EdgeType")},enumerable:!0,configurable:!1}),EdgeType.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new EdgeType(Hyperloop.cast("android.graphics.Canvas$EdgeType",e.$native)):e},Object.defineProperty(EdgeType,"AA",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("AA");if(null==e)return null;if(e.apiName){if("android.graphics.Canvas$EdgeType"===e.apiName)return new EdgeType(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(EdgeType,"BW",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("BW");if(null==e)return null;if(e.apiName){if("android.graphics.Canvas$EdgeType"===e.apiName)return new EdgeType(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),EdgeType.valueOf=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"valueOf",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Canvas$EdgeType"===e.apiName)return new EdgeType(e);var t=require(e.apiName);return new t(e)}return e},EdgeType.values=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"values",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Canvas$EdgeType"===e.apiName)return new EdgeType(e);var t=require(e.apiName);return new t(e)}return e},module.exports=EdgeType;