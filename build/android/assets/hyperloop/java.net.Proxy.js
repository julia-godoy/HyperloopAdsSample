var Hyperloop=require("hyperloop"),parentPackage=require("java.net"),_Proxy=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.net.Proxy")?arguments[0]:_Proxy.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");_Proxy.prototype=Object.create(SuperClass.prototype),_Proxy.prototype.constructor=_Proxy,Object.defineProperty(_Proxy.prototype,"super",{get:function(){return this._hasPointer?new _Proxy(this.$native.super):null},enumerable:!0}),_Proxy.className="java.net.Proxy",_Proxy.prototype.className="java.net.Proxy",Object.defineProperty(_Proxy,"class",{get:function(){return Hyperloop.getClass("java.net.Proxy")},enumerable:!0,configurable:!1}),_Proxy.extend=function(e){var t=Hyperloop.extend("java.net.Proxy"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(_Proxy.prototype),n.prototype.constructor=n,n},_Proxy.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new _Proxy(Hyperloop.cast("java.net.Proxy",e.$native)):e},Object.defineProperty(_Proxy,"Type",{get:function(){return require("java.net.Proxy$Type")},enumerable:!0}),Object.defineProperty(_Proxy,"NO_PROXY",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("NO_PROXY");if(null==e)return null;if(e.apiName){if("java.net.Proxy"===e.apiName)return new _Proxy(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),_Proxy.prototype.address=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"address",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Proxy"===e.apiName)return new _Proxy(e);var t=require(e.apiName);return new t(e)}return e},_Proxy.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Proxy"===e.apiName)return new _Proxy(e);var t=require(e.apiName);return new t(e)}return e},_Proxy.prototype.equals=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Proxy"===e.apiName)return new _Proxy(e);var t=require(e.apiName);return new t(e)}return e},_Proxy.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Proxy"===e.apiName)return new _Proxy(e);var t=require(e.apiName);return new t(e)}return e},_Proxy.prototype.type=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"type",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.net.Proxy"===e.apiName)return new _Proxy(e);var t=require(e.apiName);return new t(e)}return e},module.exports=_Proxy;