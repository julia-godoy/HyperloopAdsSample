var Hyperloop=require("hyperloop"),parentPackage=require("java.util.stream"),LongStream=function(){function e(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=e(arguments[n]);return t}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"java.util.stream.LongStream"===arguments[0].apiName)n=arguments[0];else{var r,i=this,a=Array.prototype.slice.call(arguments)[0],o={};Object.keys(a).forEach(function(e){i[e]=function(){return a[e].apply(i,arguments)},o[e]=function(){return i[e].apply(i,t.apply(this,arguments))}}),r=Hyperloop.implement("java.util.stream.LongStream"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};LongStream.toString=function(){return"[object "+this.className+"]"},LongStream.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},LongStream.isInstanceOf=function(e,t){if("function"!=typeof t||"function"!=typeof e)return!1;for(;e;){if(t===e||e instanceof t||e.className===t.className)return!0;e=e.__superclass__}return!1},LongStream.className="java.util.stream.LongStream",LongStream.prototype.className="java.util.stream.LongStream",Object.defineProperty(LongStream,"class",{get:function(){return Hyperloop.getClass("java.util.stream.LongStream")},enumerable:!0,configurable:!1}),LongStream.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new LongStream(Hyperloop.cast("java.util.stream.LongStream",e.$native)):e},LongStream.prototype.equals=function(e){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[e]});return t},LongStream.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return e},module.exports=LongStream;