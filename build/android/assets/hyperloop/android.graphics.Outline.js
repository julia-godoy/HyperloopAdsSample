var Hyperloop=require("hyperloop"),parentPackage=require("android.graphics"),Outline=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.Outline")?arguments[0]:Outline.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Outline.prototype=Object.create(SuperClass.prototype),Outline.prototype.constructor=Outline,Object.defineProperty(Outline.prototype,"super",{get:function(){return this._hasPointer?new Outline(this.$native.super):null},enumerable:!0}),Outline.className="android.graphics.Outline",Outline.prototype.className="android.graphics.Outline",Object.defineProperty(Outline,"class",{get:function(){return Hyperloop.getClass("android.graphics.Outline")},enumerable:!0,configurable:!1}),Outline.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Outline(Hyperloop.cast("android.graphics.Outline",e.$native)):e},Outline.prototype.set=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"set",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},Outline.prototype.setRoundRect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setRoundRect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},Outline.prototype.offset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"offset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},Outline.prototype.setEmpty=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setEmpty",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},Outline.prototype.isEmpty=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isEmpty",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},Outline.prototype.setAlpha=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setAlpha",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},Outline.prototype.setRect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setRect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},Outline.prototype.setOval=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setOval",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},Outline.prototype.setConvexPath=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setConvexPath",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},Outline.prototype.canClip=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"canClip",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},Outline.prototype.getAlpha=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAlpha",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Outline"===e.apiName)return new Outline(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Outline;