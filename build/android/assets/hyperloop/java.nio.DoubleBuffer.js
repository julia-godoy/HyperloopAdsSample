var Hyperloop=require("hyperloop"),parentPackage=require("java.nio"),DoubleBuffer=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.nio.DoubleBuffer")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.nio.DoubleBuffer. Create a subclass using java.nio.DoubleBuffer.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.nio.Buffer");DoubleBuffer.prototype=Object.create(SuperClass.prototype),DoubleBuffer.prototype.constructor=DoubleBuffer,Object.defineProperty(DoubleBuffer.prototype,"super",{get:function(){return this._hasPointer?new DoubleBuffer(this.$native.super):null},enumerable:!0}),DoubleBuffer.className="java.nio.DoubleBuffer",DoubleBuffer.prototype.className="java.nio.DoubleBuffer",Object.defineProperty(DoubleBuffer,"class",{get:function(){return Hyperloop.getClass("java.nio.DoubleBuffer")},enumerable:!0,configurable:!1}),DoubleBuffer.extend=function(e){var t=Hyperloop.extend("java.nio.DoubleBuffer"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(DoubleBuffer.prototype),n.prototype.constructor=n,n},DoubleBuffer.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new DoubleBuffer(Hyperloop.cast("java.nio.DoubleBuffer",e.$native)):e},DoubleBuffer.allocate=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"allocate",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.wrap=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"wrap",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.hasArray=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hasArray",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.compact=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"compact",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.duplicate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"duplicate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.compareTo=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"compareTo",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.asReadOnlyBuffer=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"asReadOnlyBuffer",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.put=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"put",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.slice=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"slice",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.array=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"array",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.get=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"get",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.equals=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.arrayOffset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"arrayOffset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.isDirect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isDirect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},DoubleBuffer.prototype.order=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"order",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.DoubleBuffer"===e.apiName)return new DoubleBuffer(e);var t=require(e.apiName);return new t(e)}return e},module.exports=DoubleBuffer;