var Hyperloop=require("hyperloop"),parentPackage=require("java.nio.channels"),SeekableByteChannel=function(){function e(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=e(arguments[n]);return t}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"java.nio.channels.SeekableByteChannel"===arguments[0].apiName)n=arguments[0];else{var r,i=this,a=Array.prototype.slice.call(arguments)[0],o={};Object.keys(a).forEach(function(e){i[e]=function(){return a[e].apply(i,arguments)},o[e]=function(){return i[e].apply(i,t.apply(this,arguments))}}),r=Hyperloop.implement("java.nio.channels.SeekableByteChannel"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};SeekableByteChannel.toString=function(){return"[object "+this.className+"]"},SeekableByteChannel.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},SeekableByteChannel.isInstanceOf=function(e,t){if("function"!=typeof t||"function"!=typeof e)return!1;for(;e;){if(t===e||e instanceof t||e.className===t.className)return!0;e=e.__superclass__}return!1},SeekableByteChannel.className="java.nio.channels.SeekableByteChannel",SeekableByteChannel.prototype.className="java.nio.channels.SeekableByteChannel",Object.defineProperty(SeekableByteChannel,"class",{get:function(){return Hyperloop.getClass("java.nio.channels.SeekableByteChannel")},enumerable:!0,configurable:!1}),SeekableByteChannel.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new SeekableByteChannel(Hyperloop.cast("java.nio.channels.SeekableByteChannel",e.$native)):e},SeekableByteChannel.prototype.equals=function(e){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[e]});return t},SeekableByteChannel.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return e},module.exports=SeekableByteChannel;