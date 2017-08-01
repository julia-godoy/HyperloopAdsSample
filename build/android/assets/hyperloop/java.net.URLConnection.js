var Hyperloop=require("hyperloop"),parentPackage=require("java.net"),URLConnection=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.net.URLConnection")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.net.URLConnection. Create a subclass using java.net.URLConnection.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");URLConnection.prototype=Object.create(SuperClass.prototype),URLConnection.prototype.constructor=URLConnection,Object.defineProperty(URLConnection.prototype,"super",{get:function(){return this._hasPointer?new URLConnection(this.$native.super):null},enumerable:!0}),URLConnection.className="java.net.URLConnection",URLConnection.prototype.className="java.net.URLConnection",Object.defineProperty(URLConnection,"class",{get:function(){return Hyperloop.getClass("java.net.URLConnection")},enumerable:!0,configurable:!1}),URLConnection.extend=function(e){var t=Hyperloop.extend("java.net.URLConnection"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(URLConnection.prototype),n.prototype.constructor=n,n},URLConnection.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new URLConnection(Hyperloop.cast("java.net.URLConnection",e.$native)):e},Object.defineProperty(URLConnection.prototype,"connected",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("connected");if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("connected",e)},enumerable:!0}),Object.defineProperty(URLConnection.prototype,"doOutput",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("doOutput");if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("doOutput",e)},enumerable:!0}),Object.defineProperty(URLConnection.prototype,"useCaches",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("useCaches");if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("useCaches",e)},enumerable:!0}),Object.defineProperty(URLConnection.prototype,"ifModifiedSince",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("ifModifiedSince");if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("ifModifiedSince",e)},enumerable:!0}),Object.defineProperty(URLConnection.prototype,"url",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("url");if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("url",e)},enumerable:!0}),Object.defineProperty(URLConnection.prototype,"doInput",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("doInput");if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("doInput",e)},enumerable:!0}),Object.defineProperty(URLConnection.prototype,"allowUserInteraction",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("allowUserInteraction");if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("allowUserInteraction",e)},enumerable:!0}),URLConnection.getDefaultAllowUserInteraction=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getDefaultAllowUserInteraction",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.setDefaultAllowUserInteraction=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"setDefaultAllowUserInteraction",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.guessContentTypeFromName=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"guessContentTypeFromName",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.guessContentTypeFromStream=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"guessContentTypeFromStream",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.setDefaultRequestProperty=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"setDefaultRequestProperty",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.getFileNameMap=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getFileNameMap",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.setContentHandlerFactory=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"setContentHandlerFactory",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.getDefaultRequestProperty=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getDefaultRequestProperty",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.setFileNameMap=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"setFileNameMap",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.setConnectTimeout=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setConnectTimeout",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getHeaderFieldLong=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHeaderFieldLong",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.setUseCaches=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setUseCaches",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.setRequestProperty=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setRequestProperty",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getDoInput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDoInput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getIfModifiedSince=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIfModifiedSince",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getDefaultUseCaches=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDefaultUseCaches",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getAllowUserInteraction=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAllowUserInteraction",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getConnectTimeout=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getConnectTimeout",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getContentLength=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getContentLength",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getInputStream=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getInputStream",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.setAllowUserInteraction=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setAllowUserInteraction",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getRequestProperties=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getRequestProperties",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getURL=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getURL",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getHeaderField=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHeaderField",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getHeaderFields=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHeaderFields",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getContentLengthLong=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getContentLengthLong",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getContentType=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getContentType",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.setDefaultUseCaches=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setDefaultUseCaches",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.setDoOutput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setDoOutput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getLastModified=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLastModified",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.setIfModifiedSince=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setIfModifiedSince",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getReadTimeout=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getReadTimeout",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getContent=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getContent",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getHeaderFieldInt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHeaderFieldInt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getRequestProperty=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getRequestProperty",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getHeaderFieldDate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHeaderFieldDate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getDate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.connect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"connect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getHeaderFieldKey=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHeaderFieldKey",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getContentEncoding=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getContentEncoding",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getUseCaches=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getUseCaches",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.setDoInput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setDoInput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.addRequestProperty=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addRequestProperty",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.setReadTimeout=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setReadTimeout",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getExpiration=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getExpiration",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getOutputStream=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getOutputStream",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},URLConnection.prototype.getDoOutput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDoOutput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URLConnection"===e.apiName)return new URLConnection(e);var t=require(e.apiName);return new t(e)}return e},module.exports=URLConnection;