var Hyperloop=require("hyperloop"),parentPackage=require("android.database"),ContentObserver=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.database.ContentObserver")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: android.database.ContentObserver. Create a subclass using android.database.ContentObserver.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");ContentObserver.prototype=Object.create(SuperClass.prototype),ContentObserver.prototype.constructor=ContentObserver,Object.defineProperty(ContentObserver.prototype,"super",{get:function(){return this._hasPointer?new ContentObserver(this.$native.super):null},enumerable:!0}),ContentObserver.className="android.database.ContentObserver",ContentObserver.prototype.className="android.database.ContentObserver",Object.defineProperty(ContentObserver,"class",{get:function(){return Hyperloop.getClass("android.database.ContentObserver")},enumerable:!0,configurable:!1}),ContentObserver.extend=function(e){var t=Hyperloop.extend("android.database.ContentObserver"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(ContentObserver.prototype),n.prototype.constructor=n,n},ContentObserver.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new ContentObserver(Hyperloop.cast("android.database.ContentObserver",e.$native)):e},ContentObserver.prototype.dispatchChange=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"dispatchChange",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.database.ContentObserver"===e.apiName)return new ContentObserver(e);var t=require(e.apiName);return new t(e)}return e},ContentObserver.prototype.onChange=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onChange",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.database.ContentObserver"===e.apiName)return new ContentObserver(e);var t=require(e.apiName);return new t(e)}return e},ContentObserver.prototype.deliverSelfNotifications=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"deliverSelfNotifications",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.database.ContentObserver"===e.apiName)return new ContentObserver(e);var t=require(e.apiName);return new t(e)}return e},module.exports=ContentObserver;