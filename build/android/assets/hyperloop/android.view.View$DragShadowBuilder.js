var Hyperloop=require("hyperloop"),EnclosingClass=require("android.view.View"),DragShadowBuilder=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.view.View$DragShadowBuilder")?arguments[0]:DragShadowBuilder.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");DragShadowBuilder.prototype=Object.create(SuperClass.prototype),DragShadowBuilder.prototype.constructor=DragShadowBuilder,Object.defineProperty(DragShadowBuilder.prototype,"super",{get:function(){return this._hasPointer?new DragShadowBuilder(this.$native.super):null},enumerable:!0}),DragShadowBuilder.className="android.view.View$DragShadowBuilder",DragShadowBuilder.prototype.className="android.view.View$DragShadowBuilder",Object.defineProperty(DragShadowBuilder,"class",{get:function(){return Hyperloop.getClass("android.view.View$DragShadowBuilder")},enumerable:!0,configurable:!1}),DragShadowBuilder.extend=function(e){var t=Hyperloop.extend("android.view.View$DragShadowBuilder"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(DragShadowBuilder.prototype),n.prototype.constructor=n,n},DragShadowBuilder.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new DragShadowBuilder(Hyperloop.cast("android.view.View$DragShadowBuilder",e.$native)):e},DragShadowBuilder.prototype.onDrawShadow=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onDrawShadow",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.View$DragShadowBuilder"===e.apiName)return new DragShadowBuilder(e);var t=require(e.apiName);return new t(e)}return e},DragShadowBuilder.prototype.onProvideShadowMetrics=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onProvideShadowMetrics",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.View$DragShadowBuilder"===e.apiName)return new DragShadowBuilder(e);var t=require(e.apiName);return new t(e)}return e},DragShadowBuilder.prototype.getView=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getView",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.View$DragShadowBuilder"===e.apiName)return new DragShadowBuilder(e);var t=require(e.apiName);return new t(e)}return e},module.exports=DragShadowBuilder;