var Hyperloop=require("hyperloop"),parentPackage=require("java.nio.channels"),SelectionKey=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.nio.channels.SelectionKey")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.nio.channels.SelectionKey. Create a subclass using java.nio.channels.SelectionKey.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");SelectionKey.prototype=Object.create(SuperClass.prototype),SelectionKey.prototype.constructor=SelectionKey,Object.defineProperty(SelectionKey.prototype,"super",{get:function(){return this._hasPointer?new SelectionKey(this.$native.super):null},enumerable:!0}),SelectionKey.className="java.nio.channels.SelectionKey",SelectionKey.prototype.className="java.nio.channels.SelectionKey",Object.defineProperty(SelectionKey,"class",{get:function(){return Hyperloop.getClass("java.nio.channels.SelectionKey")},enumerable:!0,configurable:!1}),SelectionKey.extend=function(e){var t=Hyperloop.extend("java.nio.channels.SelectionKey"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(SelectionKey.prototype),n.prototype.constructor=n,n},SelectionKey.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new SelectionKey(Hyperloop.cast("java.nio.channels.SelectionKey",e.$native)):e},SelectionKey.OP_CONNECT=8,SelectionKey.OP_ACCEPT=16,SelectionKey.OP_READ=1,SelectionKey.OP_WRITE=4,SelectionKey.prototype.cancel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"cancel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.isAcceptable=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isAcceptable",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.isConnectable=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isConnectable",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.isValid=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isValid",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.channel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"channel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.isWritable=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isWritable",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.attachment=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"attachment",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.readyOps=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"readyOps",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.interestOps=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"interestOps",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.selector=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"selector",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.attach=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"attach",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},SelectionKey.prototype.isReadable=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isReadable",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.channels.SelectionKey"===e.apiName)return new SelectionKey(e);var t=require(e.apiName);return new t(e)}return e},module.exports=SelectionKey;