var Hyperloop=require("hyperloop"),parentPackage=require("java.util"),OptionalLong=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.util.OptionalLong")?arguments[0]:OptionalLong.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");OptionalLong.prototype=Object.create(SuperClass.prototype),OptionalLong.prototype.constructor=OptionalLong,Object.defineProperty(OptionalLong.prototype,"super",{get:function(){return this._hasPointer?new OptionalLong(this.$native.super):null},enumerable:!0}),OptionalLong.className="java.util.OptionalLong",OptionalLong.prototype.className="java.util.OptionalLong",Object.defineProperty(OptionalLong,"class",{get:function(){return Hyperloop.getClass("java.util.OptionalLong")},enumerable:!0,configurable:!1}),OptionalLong.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new OptionalLong(Hyperloop.cast("java.util.OptionalLong",e.$native)):e},OptionalLong.of=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"of",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},OptionalLong.empty=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"empty",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},OptionalLong.prototype.getAsLong=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAsLong",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},OptionalLong.prototype.orElseGet=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"orElseGet",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},OptionalLong.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},OptionalLong.prototype.ifPresent=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"ifPresent",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},OptionalLong.prototype.equals=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},OptionalLong.prototype.isPresent=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isPresent",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},OptionalLong.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},OptionalLong.prototype.orElse=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"orElse",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},OptionalLong.prototype.orElseThrow=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"orElseThrow",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.OptionalLong"===e.apiName)return new OptionalLong(e);var t=require(e.apiName);return new t(e)}return e},module.exports=OptionalLong;