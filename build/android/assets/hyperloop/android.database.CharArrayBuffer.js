var Hyperloop=require("hyperloop"),parentPackage=require("android.database"),CharArrayBuffer=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.database.CharArrayBuffer")?arguments[0]:CharArrayBuffer.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");CharArrayBuffer.prototype=Object.create(SuperClass.prototype),CharArrayBuffer.prototype.constructor=CharArrayBuffer,Object.defineProperty(CharArrayBuffer.prototype,"super",{get:function(){return this._hasPointer?new CharArrayBuffer(this.$native.super):null},enumerable:!0}),CharArrayBuffer.className="android.database.CharArrayBuffer",CharArrayBuffer.prototype.className="android.database.CharArrayBuffer",Object.defineProperty(CharArrayBuffer,"class",{get:function(){return Hyperloop.getClass("android.database.CharArrayBuffer")},enumerable:!0,configurable:!1}),CharArrayBuffer.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new CharArrayBuffer(Hyperloop.cast("android.database.CharArrayBuffer",e.$native)):e},Object.defineProperty(CharArrayBuffer.prototype,"data",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("data");if(null==e)return null;if(e.apiName){if("android.database.CharArrayBuffer"===e.apiName)return new CharArrayBuffer(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("data",e)},enumerable:!0}),Object.defineProperty(CharArrayBuffer.prototype,"sizeCopied",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("sizeCopied");if(null==e)return null;if(e.apiName){if("android.database.CharArrayBuffer"===e.apiName)return new CharArrayBuffer(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("sizeCopied",e)},enumerable:!0}),module.exports=CharArrayBuffer;