var Hyperloop=require("hyperloop"),parentPackage=require("java.net"),URL=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.net.URL")?arguments[0]:URL.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");URL.prototype=Object.create(SuperClass.prototype),URL.prototype.constructor=URL,Object.defineProperty(URL.prototype,"super",{get:function(){return this._hasPointer?new URL(this.$native.super):null},enumerable:!0}),URL.className="java.net.URL",URL.prototype.className="java.net.URL",Object.defineProperty(URL,"class",{get:function(){return Hyperloop.getClass("java.net.URL")},enumerable:!0,configurable:!1}),URL.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new URL(Hyperloop.cast("java.net.URL",e.$native)):e},URL.setURLStreamHandlerFactory=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"setURLStreamHandlerFactory",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getDefaultPort=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDefaultPort",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.openConnection=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openConnection",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.toURI=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toURI",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getContent=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getContent",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getProtocol=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getProtocol",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getAuthority=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAuthority",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getFile=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFile",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.openStream=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openStream",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.toExternalForm=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toExternalForm",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getPort=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPort",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getRef=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getRef",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.sameFile=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sameFile",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.equals=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getPath=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPath",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getUserInfo=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getUserInfo",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getQuery=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getQuery",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},URL.prototype.getHost=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHost",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.URL"===e.apiName)return new URL(e);var t=require(e.apiName);return new t(e)}return e},module.exports=URL;