var Hyperloop=require("hyperloop"),parentPackage=require("java.nio"),ShortBuffer=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.nio.ShortBuffer")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.nio.ShortBuffer. Create a subclass using java.nio.ShortBuffer.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.nio.Buffer");ShortBuffer.prototype=Object.create(SuperClass.prototype),ShortBuffer.prototype.constructor=ShortBuffer,Object.defineProperty(ShortBuffer.prototype,"super",{get:function(){return this._hasPointer?new ShortBuffer(this.$native.super):null},enumerable:!0}),ShortBuffer.className="java.nio.ShortBuffer",ShortBuffer.prototype.className="java.nio.ShortBuffer",Object.defineProperty(ShortBuffer,"class",{get:function(){return Hyperloop.getClass("java.nio.ShortBuffer")},enumerable:!0,configurable:!1}),ShortBuffer.extend=function(e){var t=Hyperloop.extend("java.nio.ShortBuffer"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(ShortBuffer.prototype),n.prototype.constructor=n,n},ShortBuffer.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new ShortBuffer(Hyperloop.cast("java.nio.ShortBuffer",e.$native)):e},ShortBuffer.allocate=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"allocate",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.wrap=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"wrap",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.hasArray=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hasArray",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.compact=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"compact",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.duplicate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"duplicate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.compareTo=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"compareTo",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.asReadOnlyBuffer=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"asReadOnlyBuffer",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.put=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"put",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.slice=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"slice",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.array=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"array",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.get=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"get",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.equals=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.arrayOffset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"arrayOffset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.isDirect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isDirect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},ShortBuffer.prototype.order=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"order",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.ShortBuffer"===e.apiName)return new ShortBuffer(e);var t=require(e.apiName);return new t(e)}return e},module.exports=ShortBuffer;