var Hyperloop=require("hyperloop"),EnclosingClass=require("android.content.Loader"),ForceLoadContentObserver=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.content.Loader$ForceLoadContentObserver")?arguments[0]:ForceLoadContentObserver.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("android.database.ContentObserver");ForceLoadContentObserver.prototype=Object.create(SuperClass.prototype),ForceLoadContentObserver.prototype.constructor=ForceLoadContentObserver,Object.defineProperty(ForceLoadContentObserver.prototype,"super",{get:function(){return this._hasPointer?new ForceLoadContentObserver(this.$native.super):null},enumerable:!0}),ForceLoadContentObserver.className="android.content.Loader$ForceLoadContentObserver",ForceLoadContentObserver.prototype.className="android.content.Loader$ForceLoadContentObserver",Object.defineProperty(ForceLoadContentObserver,"class",{get:function(){return Hyperloop.getClass("android.content.Loader$ForceLoadContentObserver")},enumerable:!0,configurable:!1}),ForceLoadContentObserver.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new ForceLoadContentObserver(Hyperloop.cast("android.content.Loader$ForceLoadContentObserver",e.$native)):e},ForceLoadContentObserver.prototype.onChange=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onChange",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.Loader$ForceLoadContentObserver"===e.apiName)return new ForceLoadContentObserver(e);var t=require(e.apiName);return new t(e)}return e},ForceLoadContentObserver.prototype.deliverSelfNotifications=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"deliverSelfNotifications",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.Loader$ForceLoadContentObserver"===e.apiName)return new ForceLoadContentObserver(e);var t=require(e.apiName);return new t(e)}return e},module.exports=ForceLoadContentObserver;