var Hyperloop=require("hyperloop"),parentPackage=require("java.util.stream"),Collector=function(){function e(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=e(arguments[n]);return t}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"java.util.stream.Collector"===arguments[0].apiName)n=arguments[0];else{var r,i=this,a=Array.prototype.slice.call(arguments)[0],o={};Object.keys(a).forEach(function(e){i[e]=function(){return a[e].apply(i,arguments)},o[e]=function(){return i[e].apply(i,t.apply(this,arguments))}}),r=Hyperloop.implement("java.util.stream.Collector"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};Collector.toString=function(){return"[object "+this.className+"]"},Collector.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},Collector.isInstanceOf=function(e,t){if("function"!=typeof t||"function"!=typeof e)return!1;for(;e;){if(t===e||e instanceof t||e.className===t.className)return!0;e=e.__superclass__}return!1},Collector.className="java.util.stream.Collector",Collector.prototype.className="java.util.stream.Collector",Object.defineProperty(Collector,"class",{get:function(){return Hyperloop.getClass("java.util.stream.Collector")},enumerable:!0,configurable:!1}),Collector.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Collector(Hyperloop.cast("java.util.stream.Collector",e.$native)):e},Collector.prototype.equals=function(e){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[e]});return t},Collector.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return e},module.exports=Collector;