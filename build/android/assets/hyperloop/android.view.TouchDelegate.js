var Hyperloop=require("hyperloop"),parentPackage=require("android.view"),TouchDelegate=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.view.TouchDelegate")?arguments[0]:TouchDelegate.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");TouchDelegate.prototype=Object.create(SuperClass.prototype),TouchDelegate.prototype.constructor=TouchDelegate,Object.defineProperty(TouchDelegate.prototype,"super",{get:function(){return this._hasPointer?new TouchDelegate(this.$native.super):null},enumerable:!0}),TouchDelegate.className="android.view.TouchDelegate",TouchDelegate.prototype.className="android.view.TouchDelegate",Object.defineProperty(TouchDelegate,"class",{get:function(){return Hyperloop.getClass("android.view.TouchDelegate")},enumerable:!0,configurable:!1}),TouchDelegate.extend=function(e){var t=Hyperloop.extend("android.view.TouchDelegate"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(TouchDelegate.prototype),n.prototype.constructor=n,n},TouchDelegate.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new TouchDelegate(Hyperloop.cast("android.view.TouchDelegate",e.$native)):e},TouchDelegate.BELOW=2,TouchDelegate.TO_LEFT=4,TouchDelegate.TO_RIGHT=8,TouchDelegate.ABOVE=1,TouchDelegate.prototype.onTouchEvent=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onTouchEvent",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.TouchDelegate"===e.apiName)return new TouchDelegate(e);var t=require(e.apiName);return new t(e)}return e},module.exports=TouchDelegate;