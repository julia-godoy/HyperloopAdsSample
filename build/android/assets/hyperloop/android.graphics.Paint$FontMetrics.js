var Hyperloop=require("hyperloop"),EnclosingClass=require("android.graphics.Paint"),FontMetrics=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.Paint$FontMetrics")?arguments[0]:FontMetrics.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");FontMetrics.prototype=Object.create(SuperClass.prototype),FontMetrics.prototype.constructor=FontMetrics,Object.defineProperty(FontMetrics.prototype,"super",{get:function(){return this._hasPointer?new FontMetrics(this.$native.super):null},enumerable:!0}),FontMetrics.className="android.graphics.Paint$FontMetrics",FontMetrics.prototype.className="android.graphics.Paint$FontMetrics",Object.defineProperty(FontMetrics,"class",{get:function(){return Hyperloop.getClass("android.graphics.Paint$FontMetrics")},enumerable:!0,configurable:!1}),FontMetrics.extend=function(e){var t=Hyperloop.extend("android.graphics.Paint$FontMetrics"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var a=t.newInstance(arguments),i=this,o=e,u={};Object.keys(o).forEach(function(e){i[e]=function(){return o[e].apply(i,arguments)},u[e]=function(){return i[e].apply(i,r.apply(this,arguments))}}),a.setOverrides(u),this.$native=a,this._hasPointer=null!=a,this._private={}};return n.prototype=Object.create(FontMetrics.prototype),n.prototype.constructor=n,n},FontMetrics.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new FontMetrics(Hyperloop.cast("android.graphics.Paint$FontMetrics",e.$native)):e},Object.defineProperty(FontMetrics.prototype,"descent",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("descent");if(null==e)return null;if(e.apiName){if("android.graphics.Paint$FontMetrics"===e.apiName)return new FontMetrics(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("descent",e)},enumerable:!0}),Object.defineProperty(FontMetrics.prototype,"ascent",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("ascent");if(null==e)return null;if(e.apiName){if("android.graphics.Paint$FontMetrics"===e.apiName)return new FontMetrics(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("ascent",e)},enumerable:!0}),Object.defineProperty(FontMetrics.prototype,"top",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("top");if(null==e)return null;if(e.apiName){if("android.graphics.Paint$FontMetrics"===e.apiName)return new FontMetrics(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("top",e)},enumerable:!0}),Object.defineProperty(FontMetrics.prototype,"bottom",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("bottom");if(null==e)return null;if(e.apiName){if("android.graphics.Paint$FontMetrics"===e.apiName)return new FontMetrics(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("bottom",e)},enumerable:!0}),Object.defineProperty(FontMetrics.prototype,"leading",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("leading");if(null==e)return null;if(e.apiName){if("android.graphics.Paint$FontMetrics"===e.apiName)return new FontMetrics(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("leading",e)},enumerable:!0}),module.exports=FontMetrics;