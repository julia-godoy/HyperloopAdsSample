var Hyperloop=require("hyperloop"),parentPackage=require("java.net"),DatagramSocketImplFactory=function(){function e(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=e(arguments[n]);return t}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"java.net.DatagramSocketImplFactory"===arguments[0].apiName)n=arguments[0];else{var r,i=this,a=Array.prototype.slice.call(arguments)[0],o={};Object.keys(a).forEach(function(e){i[e]=function(){return a[e].apply(i,arguments)},o[e]=function(){return i[e].apply(i,t.apply(this,arguments))}}),r=Hyperloop.implement("java.net.DatagramSocketImplFactory"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};DatagramSocketImplFactory.toString=function(){return"[object "+this.className+"]"},DatagramSocketImplFactory.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},DatagramSocketImplFactory.isInstanceOf=function(e,t){if("function"!=typeof t||"function"!=typeof e)return!1;for(;e;){if(t===e||e instanceof t||e.className===t.className)return!0;e=e.__superclass__}return!1},DatagramSocketImplFactory.className="java.net.DatagramSocketImplFactory",DatagramSocketImplFactory.prototype.className="java.net.DatagramSocketImplFactory",Object.defineProperty(DatagramSocketImplFactory,"class",{get:function(){return Hyperloop.getClass("java.net.DatagramSocketImplFactory")},enumerable:!0,configurable:!1}),DatagramSocketImplFactory.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new DatagramSocketImplFactory(Hyperloop.cast("java.net.DatagramSocketImplFactory",e.$native)):e},DatagramSocketImplFactory.prototype.equals=function(e){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[e]});return t},DatagramSocketImplFactory.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return e},module.exports=DatagramSocketImplFactory;