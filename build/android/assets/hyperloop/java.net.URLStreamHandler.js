var Hyperloop=require("hyperloop"),parentPackage=require("java.net"),URLStreamHandler=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.net.URLStreamHandler")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.net.URLStreamHandler. Create a subclass using java.net.URLStreamHandler.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");URLStreamHandler.prototype=Object.create(SuperClass.prototype),URLStreamHandler.prototype.constructor=URLStreamHandler,Object.defineProperty(URLStreamHandler.prototype,"super",{get:function(){return this._hasPointer?new URLStreamHandler(this.$native.super):null},enumerable:!0}),URLStreamHandler.className="java.net.URLStreamHandler",URLStreamHandler.prototype.className="java.net.URLStreamHandler",Object.defineProperty(URLStreamHandler,"class",{get:function(){return Hyperloop.getClass("java.net.URLStreamHandler")},enumerable:!0,configurable:!1}),URLStreamHandler.extend=function(e){var t=Hyperloop.extend("java.net.URLStreamHandler"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(URLStreamHandler.prototype),n.prototype.constructor=n,n},URLStreamHandler.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new URLStreamHandler(Hyperloop.cast("java.net.URLStreamHandler",e.$native)):e},URLStreamHandler.prototype.parseURL=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"parseURL",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLStreamHandler"===e.apiName)return new URLStreamHandler(e);var t=require(e.apiName);return new t(e)}return e},URLStreamHandler.prototype.toExternalForm=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toExternalForm",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLStreamHandler"===e.apiName)return new URLStreamHandler(e);var t=require(e.apiName);return new t(e)}return e},URLStreamHandler.prototype.hostsEqual=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hostsEqual",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLStreamHandler"===e.apiName)return new URLStreamHandler(e);var t=require(e.apiName);return new t(e)}return e},URLStreamHandler.prototype.getDefaultPort=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDefaultPort",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLStreamHandler"===e.apiName)return new URLStreamHandler(e);var t=require(e.apiName);return new t(e)}return e},URLStreamHandler.prototype.openConnection=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openConnection",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLStreamHandler"===e.apiName)return new URLStreamHandler(e);var t=require(e.apiName);return new t(e)}return e},URLStreamHandler.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLStreamHandler"===e.apiName)return new URLStreamHandler(e);var t=require(e.apiName);return new t(e)}return e},URLStreamHandler.prototype.sameFile=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sameFile",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLStreamHandler"===e.apiName)return new URLStreamHandler(e);var t=require(e.apiName);return new t(e)}return e},URLStreamHandler.prototype.equals=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLStreamHandler"===e.apiName)return new URLStreamHandler(e);var t=require(e.apiName);return new t(e)}return e},URLStreamHandler.prototype.getHostAddress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHostAddress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLStreamHandler"===e.apiName)return new URLStreamHandler(e);var t=require(e.apiName);return new t(e)}return e},URLStreamHandler.prototype.setURL=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setURL",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLStreamHandler"===e.apiName)return new URLStreamHandler(e);var t=require(e.apiName);return new t(e)}return e},module.exports=URLStreamHandler;