var Hyperloop=require("hyperloop"),parentPackage=require("java.net"),SocketAddress=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.net.SocketAddress")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.net.SocketAddress. Create a subclass using java.net.SocketAddress.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");SocketAddress.prototype=Object.create(SuperClass.prototype),SocketAddress.prototype.constructor=SocketAddress,Object.defineProperty(SocketAddress.prototype,"super",{get:function(){return this._hasPointer?new SocketAddress(this.$native.super):null},enumerable:!0}),SocketAddress.className="java.net.SocketAddress",SocketAddress.prototype.className="java.net.SocketAddress",Object.defineProperty(SocketAddress,"class",{get:function(){return Hyperloop.getClass("java.net.SocketAddress")},enumerable:!0,configurable:!1}),SocketAddress.extend=function(e){var t=Hyperloop.extend("java.net.SocketAddress"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(SocketAddress.prototype),n.prototype.constructor=n,n},SocketAddress.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new SocketAddress(Hyperloop.cast("java.net.SocketAddress",e.$native)):e},module.exports=SocketAddress;