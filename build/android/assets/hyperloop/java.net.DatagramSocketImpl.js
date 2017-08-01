var Hyperloop=require("hyperloop"),parentPackage=require("java.net"),DatagramSocketImpl=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.net.DatagramSocketImpl")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.net.DatagramSocketImpl. Create a subclass using java.net.DatagramSocketImpl.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");DatagramSocketImpl.prototype=Object.create(SuperClass.prototype),DatagramSocketImpl.prototype.constructor=DatagramSocketImpl,Object.defineProperty(DatagramSocketImpl.prototype,"super",{get:function(){return this._hasPointer?new DatagramSocketImpl(this.$native.super):null},enumerable:!0}),DatagramSocketImpl.className="java.net.DatagramSocketImpl",DatagramSocketImpl.prototype.className="java.net.DatagramSocketImpl",Object.defineProperty(DatagramSocketImpl,"class",{get:function(){return Hyperloop.getClass("java.net.DatagramSocketImpl")},enumerable:!0,configurable:!1}),DatagramSocketImpl.extend=function(e){var t=Hyperloop.extend("java.net.DatagramSocketImpl"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(DatagramSocketImpl.prototype),n.prototype.constructor=n,n},DatagramSocketImpl.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new DatagramSocketImpl(Hyperloop.cast("java.net.DatagramSocketImpl",e.$native)):e},Object.defineProperty(DatagramSocketImpl.prototype,"localPort",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("localPort");if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("localPort",e)},enumerable:!0}),Object.defineProperty(DatagramSocketImpl.prototype,"fd",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("fd");if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("fd",e)},enumerable:!0}),DatagramSocketImpl.prototype.disconnect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"disconnect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.receive=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"receive",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.getLocalPort=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLocalPort",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.setTTL=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setTTL",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.getTimeToLive=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTimeToLive",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.joinGroup=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"joinGroup",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.leaveGroup=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"leaveGroup",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.peek=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"peek",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.bind=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"bind",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.peekData=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"peekData",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.leave=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"leave",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.getFileDescriptor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFileDescriptor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.create=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"create",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.join=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"join",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.setTimeToLive=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setTimeToLive",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.send=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"send",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.close=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"close",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.connect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"connect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},DatagramSocketImpl.prototype.getTTL=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTTL",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.DatagramSocketImpl"===e.apiName)return new DatagramSocketImpl(e);var t=require(e.apiName);return new t(e)}return e},module.exports=DatagramSocketImpl;