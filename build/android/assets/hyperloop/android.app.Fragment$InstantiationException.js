var Hyperloop=require("hyperloop"),EnclosingClass=require("android.app.Fragment"),InstantiationException=function(){var t;t=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.app.Fragment$InstantiationException")?arguments[0]:InstantiationException.class.newInstance(arguments),this.$native=t,this._hasPointer=null!=t,this._private={}},SuperClass=require("android.util.AndroidRuntimeException");InstantiationException.prototype=Object.create(SuperClass.prototype),InstantiationException.prototype.constructor=InstantiationException,Object.defineProperty(InstantiationException.prototype,"super",{get:function(){return this._hasPointer?new InstantiationException(this.$native.super):null},enumerable:!0}),InstantiationException.className="android.app.Fragment$InstantiationException",InstantiationException.prototype.className="android.app.Fragment$InstantiationException",Object.defineProperty(InstantiationException,"class",{get:function(){return Hyperloop.getClass("android.app.Fragment$InstantiationException")},enumerable:!0,configurable:!1}),InstantiationException.extend=function(t){var e=Hyperloop.extend("android.app.Fragment$InstantiationException"),n=function(){function n(t){if(t.apiName&&t.isNativeProxy&&t.isInstanceProxy){var e=require(t.apiName);return new e(t)}return t}function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=n(arguments[e]);return t}var r=e.newInstance(arguments),a=this,o=t,u={};Object.keys(o).forEach(function(t){a[t]=function(){return o[t].apply(a,arguments)},u[t]=function(){return a[t].apply(a,i.apply(this,arguments))}}),r.setOverrides(u),this.$native=r,this._hasPointer=null!=r,this._private={}};return n.prototype=Object.create(InstantiationException.prototype),n.prototype.constructor=n,n},InstantiationException.cast=function(t){return t.$native&&t.$native.isInstanceProxy?new InstantiationException(Hyperloop.cast("android.app.Fragment$InstantiationException",t.$native)):t},module.exports=InstantiationException;