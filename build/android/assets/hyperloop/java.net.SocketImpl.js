var Hyperloop=require("hyperloop"),parentPackage=require("java.net"),SocketImpl=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.net.SocketImpl")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.net.SocketImpl. Create a subclass using java.net.SocketImpl.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");SocketImpl.prototype=Object.create(SuperClass.prototype),SocketImpl.prototype.constructor=SocketImpl,Object.defineProperty(SocketImpl.prototype,"super",{get:function(){return this._hasPointer?new SocketImpl(this.$native.super):null},enumerable:!0}),SocketImpl.className="java.net.SocketImpl",SocketImpl.prototype.className="java.net.SocketImpl",Object.defineProperty(SocketImpl,"class",{get:function(){return Hyperloop.getClass("java.net.SocketImpl")},enumerable:!0,configurable:!1}),SocketImpl.extend=function(e){var t=Hyperloop.extend("java.net.SocketImpl"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(SocketImpl.prototype),n.prototype.constructor=n,n},SocketImpl.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new SocketImpl(Hyperloop.cast("java.net.SocketImpl",e.$native)):e},Object.defineProperty(SocketImpl.prototype,"address",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("address");if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("address",e)},enumerable:!0}),Object.defineProperty(SocketImpl.prototype,"port",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("port");if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("port",e)},enumerable:!0}),Object.defineProperty(SocketImpl.prototype,"localport",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("localport");if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("localport",e)},enumerable:!0}),Object.defineProperty(SocketImpl.prototype,"fd",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("fd");if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("fd",e)},enumerable:!0}),SocketImpl.prototype.getInetAddress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getInetAddress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.getLocalPort=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLocalPort",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.available=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"available",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.getInputStream=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getInputStream",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.listen=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"listen",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.shutdownOutput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"shutdownOutput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.accept=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"accept",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.shutdownInput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"shutdownInput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.setPerformancePreferences=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setPerformancePreferences",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.bind=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"bind",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.getPort=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPort",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.sendUrgentData=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendUrgentData",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.supportsUrgentData=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"supportsUrgentData",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.getFileDescriptor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFileDescriptor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.create=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"create",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.getOutputStream=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getOutputStream",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.close=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"close",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},SocketImpl.prototype.connect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"connect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.SocketImpl"===e.apiName)return new SocketImpl(e);var t=require(e.apiName);return new t(e)}return e},module.exports=SocketImpl;