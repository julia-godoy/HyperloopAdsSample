var Hyperloop=require("hyperloop"),EnclosingClass=require("android.graphics.Paint"),Cap=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.Paint$Cap")?arguments[0]:Cap.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Enum");Cap.prototype=Object.create(SuperClass.prototype),Cap.prototype.constructor=Cap,Object.defineProperty(Cap.prototype,"super",{get:function(){return this._hasPointer?new Cap(this.$native.super):null},enumerable:!0}),Cap.className="android.graphics.Paint$Cap",Cap.prototype.className="android.graphics.Paint$Cap",Object.defineProperty(Cap,"class",{get:function(){return Hyperloop.getClass("android.graphics.Paint$Cap")},enumerable:!0,configurable:!1}),Cap.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Cap(Hyperloop.cast("android.graphics.Paint$Cap",e.$native)):e},Object.defineProperty(Cap,"SQUARE",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("SQUARE");if(null==e)return null;if(e.apiName){if("android.graphics.Paint$Cap"===e.apiName)return new Cap(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(Cap,"ROUND",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("ROUND");if(null==e)return null;if(e.apiName){if("android.graphics.Paint$Cap"===e.apiName)return new Cap(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(Cap,"BUTT",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("BUTT");if(null==e)return null;if(e.apiName){if("android.graphics.Paint$Cap"===e.apiName)return new Cap(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Cap.valueOf=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"valueOf",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Paint$Cap"===e.apiName)return new Cap(e);var t=require(e.apiName);return new t(e)}return e},Cap.values=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"values",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Paint$Cap"===e.apiName)return new Cap(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Cap;