var Hyperloop=require("hyperloop"),EnclosingClass=require("android.view.WindowId"),FocusObserver=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.view.WindowId$FocusObserver")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: android.view.WindowId$FocusObserver. Create a subclass using android.view.WindowId$FocusObserver.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");FocusObserver.prototype=Object.create(SuperClass.prototype),FocusObserver.prototype.constructor=FocusObserver,Object.defineProperty(FocusObserver.prototype,"super",{get:function(){return this._hasPointer?new FocusObserver(this.$native.super):null},enumerable:!0}),FocusObserver.className="android.view.WindowId$FocusObserver",FocusObserver.prototype.className="android.view.WindowId$FocusObserver",Object.defineProperty(FocusObserver,"class",{get:function(){return Hyperloop.getClass("android.view.WindowId$FocusObserver")},enumerable:!0,configurable:!1}),FocusObserver.extend=function(e){var t=Hyperloop.extend("android.view.WindowId$FocusObserver"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(FocusObserver.prototype),n.prototype.constructor=n,n},FocusObserver.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new FocusObserver(Hyperloop.cast("android.view.WindowId$FocusObserver",e.$native)):e},FocusObserver.prototype.onFocusGained=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onFocusGained",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.WindowId$FocusObserver"===e.apiName)return new FocusObserver(e);var t=require(e.apiName);return new t(e)}return e},FocusObserver.prototype.onFocusLost=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onFocusLost",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.WindowId$FocusObserver"===e.apiName)return new FocusObserver(e);var t=require(e.apiName);return new t(e)}return e},module.exports=FocusObserver;