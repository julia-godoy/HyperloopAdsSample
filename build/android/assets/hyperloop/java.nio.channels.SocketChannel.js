var Hyperloop=require("hyperloop"),parentPackage=require("java.nio.channels"),SocketChannel=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.nio.channels.SocketChannel")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.nio.channels.SocketChannel. Create a subclass using java.nio.channels.SocketChannel.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.nio.channels.spi.AbstractSelectableChannel");SocketChannel.prototype=Object.create(SuperClass.prototype),SocketChannel.prototype.constructor=SocketChannel,Object.defineProperty(SocketChannel.prototype,"super",{get:function(){return this._hasPointer?new SocketChannel(this.$native.super):null},enumerable:!0}),SocketChannel.className="java.nio.channels.SocketChannel",SocketChannel.prototype.className="java.nio.channels.SocketChannel",Object.defineProperty(SocketChannel,"class",{get:function(){return Hyperloop.getClass("java.nio.channels.SocketChannel")},enumerable:!0,configurable:!1}),SocketChannel.extend=function(e){var t=Hyperloop.extend("java.nio.channels.SocketChannel"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(SocketChannel.prototype),n.prototype.constructor=n,n},SocketChannel.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new SocketChannel(Hyperloop.cast("java.nio.channels.SocketChannel",e.$native)):e},SocketChannel.open=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"open",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.setOption=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setOption",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.isConnectionPending=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isConnectionPending",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.read=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"read",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.isConnected=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isConnected",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.getRemoteAddress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getRemoteAddress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.finishConnect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"finishConnect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.shutdownOutput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"shutdownOutput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.getLocalAddress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLocalAddress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.shutdownInput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"shutdownInput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.bind=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"bind",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.socket=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"socket",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.write=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"write",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.validOps=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"validOps",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},SocketChannel.prototype.connect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"connect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SocketChannel"===e.apiName)return new SocketChannel(e);var t=require(e.apiName);return new t(e)}return e},module.exports=SocketChannel;