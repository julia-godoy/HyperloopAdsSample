var Hyperloop=require("hyperloop"),parentPackage=require("java.util"),Enumeration=function(){function e(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=e(arguments[n]);return t}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"java.util.Enumeration"===arguments[0].apiName)n=arguments[0];else{var r,i=this,a=Array.prototype.slice.call(arguments)[0],o={};Object.keys(a).forEach(function(e){i[e]=function(){return a[e].apply(i,arguments)},o[e]=function(){return i[e].apply(i,t.apply(this,arguments))}}),r=Hyperloop.implement("java.util.Enumeration"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};Enumeration.toString=function(){return"[object "+this.className+"]"},Enumeration.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},Enumeration.isInstanceOf=function(e,t){if("function"!=typeof t||"function"!=typeof e)return!1;for(;e;){if(t===e||e instanceof t||e.className===t.className)return!0;e=e.__superclass__}return!1},Enumeration.className="java.util.Enumeration",Enumeration.prototype.className="java.util.Enumeration",Object.defineProperty(Enumeration,"class",{get:function(){return Hyperloop.getClass("java.util.Enumeration")},enumerable:!0,configurable:!1}),Enumeration.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Enumeration(Hyperloop.cast("java.util.Enumeration",e.$native)):e},Enumeration.prototype.equals=function(e){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[e]});return t},Enumeration.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return e},module.exports=Enumeration;