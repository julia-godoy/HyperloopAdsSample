var Hyperloop=require("hyperloop"),parentPackage=require("java.net"),Socket=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.net.Socket")?arguments[0]:Socket.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Socket.prototype=Object.create(SuperClass.prototype),Socket.prototype.constructor=Socket,Object.defineProperty(Socket.prototype,"super",{get:function(){return this._hasPointer?new Socket(this.$native.super):null},enumerable:!0}),Socket.className="java.net.Socket",Socket.prototype.className="java.net.Socket",Object.defineProperty(Socket,"class",{get:function(){return Hyperloop.getClass("java.net.Socket")},enumerable:!0,configurable:!1}),Socket.extend=function(e){var t=Hyperloop.extend("java.net.Socket"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(Socket.prototype),n.prototype.constructor=n,n},Socket.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Socket(Hyperloop.cast("java.net.Socket",e.$native)):e},Socket.setSocketImplFactory=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"setSocketImplFactory",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getInetAddress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getInetAddress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getOOBInline=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getOOBInline",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getLocalPort=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLocalPort",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.setReceiveBufferSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setReceiveBufferSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.isInputShutdown=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isInputShutdown",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.setTcpNoDelay=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setTcpNoDelay",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.isConnected=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isConnected",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getKeepAlive=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getKeepAlive",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getLocalAddress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLocalAddress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.bind=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"bind",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getChannel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getChannel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getSoLinger=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSoLinger",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getTcpNoDelay=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTcpNoDelay",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.setSoLinger=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setSoLinger",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getSoTimeout=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSoTimeout",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.isOutputShutdown=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isOutputShutdown",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.close=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"close",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.connect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"connect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.setTrafficClass=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setTrafficClass",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.setOOBInline=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setOOBInline",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getLocalSocketAddress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLocalSocketAddress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getReceiveBufferSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getReceiveBufferSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.setReuseAddress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setReuseAddress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getTrafficClass=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTrafficClass",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getReuseAddress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getReuseAddress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.setSoTimeout=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setSoTimeout",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.setKeepAlive=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setKeepAlive",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getInputStream=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getInputStream",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.shutdownOutput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"shutdownOutput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.shutdownInput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"shutdownInput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.setPerformancePreferences=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setPerformancePreferences",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getPort=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPort",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.sendUrgentData=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendUrgentData",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.isClosed=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isClosed",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.isBound=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isBound",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.setSendBufferSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setSendBufferSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getSendBufferSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSendBufferSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getOutputStream=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getOutputStream",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},Socket.prototype.getRemoteSocketAddress=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getRemoteSocketAddress",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Socket"===e.apiName)return new Socket(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Socket;