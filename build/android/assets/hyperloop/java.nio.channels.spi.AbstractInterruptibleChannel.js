var Hyperloop=require("hyperloop"),parentPackage=require("java.nio.channels.spi"),AbstractInterruptibleChannel=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.nio.channels.spi.AbstractInterruptibleChannel")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.nio.channels.spi.AbstractInterruptibleChannel. Create a subclass using java.nio.channels.spi.AbstractInterruptibleChannel.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");AbstractInterruptibleChannel.prototype=Object.create(SuperClass.prototype),AbstractInterruptibleChannel.prototype.constructor=AbstractInterruptibleChannel,Object.defineProperty(AbstractInterruptibleChannel.prototype,"super",{get:function(){return this._hasPointer?new AbstractInterruptibleChannel(this.$native.super):null},enumerable:!0}),AbstractInterruptibleChannel.className="java.nio.channels.spi.AbstractInterruptibleChannel",AbstractInterruptibleChannel.prototype.className="java.nio.channels.spi.AbstractInterruptibleChannel",Object.defineProperty(AbstractInterruptibleChannel,"class",{get:function(){return Hyperloop.getClass("java.nio.channels.spi.AbstractInterruptibleChannel")},enumerable:!0,configurable:!1}),AbstractInterruptibleChannel.extend=function(e){var t=Hyperloop.extend("java.nio.channels.spi.AbstractInterruptibleChannel"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,l={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},l[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(l),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(AbstractInterruptibleChannel.prototype),n.prototype.constructor=n,n},AbstractInterruptibleChannel.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new AbstractInterruptibleChannel(Hyperloop.cast("java.nio.channels.spi.AbstractInterruptibleChannel",e.$native)):e},AbstractInterruptibleChannel.prototype.implCloseChannel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"implCloseChannel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.spi.AbstractInterruptibleChannel"===e.apiName)return new AbstractInterruptibleChannel(e);var t=require(e.apiName);return new t(e)}return e},AbstractInterruptibleChannel.prototype.isOpen=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isOpen",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.spi.AbstractInterruptibleChannel"===e.apiName)return new AbstractInterruptibleChannel(e);var t=require(e.apiName);return new t(e)}return e},AbstractInterruptibleChannel.prototype.end=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"end",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.spi.AbstractInterruptibleChannel"===e.apiName)return new AbstractInterruptibleChannel(e);var t=require(e.apiName);return new t(e)}return e},AbstractInterruptibleChannel.prototype.close=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"close",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.spi.AbstractInterruptibleChannel"===e.apiName)return new AbstractInterruptibleChannel(e);var t=require(e.apiName);return new t(e)}return e},AbstractInterruptibleChannel.prototype.begin=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"begin",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.spi.AbstractInterruptibleChannel"===e.apiName)return new AbstractInterruptibleChannel(e);var t=require(e.apiName);return new t(e)}return e},module.exports=AbstractInterruptibleChannel;