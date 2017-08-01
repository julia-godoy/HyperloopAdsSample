var Hyperloop=require("hyperloop"),parentPackage=require("android.view"),ActionProvider=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.view.ActionProvider")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: android.view.ActionProvider. Create a subclass using android.view.ActionProvider.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");ActionProvider.prototype=Object.create(SuperClass.prototype),ActionProvider.prototype.constructor=ActionProvider,Object.defineProperty(ActionProvider.prototype,"super",{get:function(){return this._hasPointer?new ActionProvider(this.$native.super):null},enumerable:!0}),ActionProvider.className="android.view.ActionProvider",ActionProvider.prototype.className="android.view.ActionProvider",Object.defineProperty(ActionProvider,"class",{get:function(){return Hyperloop.getClass("android.view.ActionProvider")},enumerable:!0,configurable:!1}),ActionProvider.extend=function(e){var t=Hyperloop.extend("android.view.ActionProvider"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var a=t.newInstance(arguments),i=this,o=e,u={};Object.keys(o).forEach(function(e){i[e]=function(){return o[e].apply(i,arguments)},u[e]=function(){return i[e].apply(i,r.apply(this,arguments))}}),a.setOverrides(u),this.$native=a,this._hasPointer=null!=a,this._private={}};return n.prototype=Object.create(ActionProvider.prototype),n.prototype.constructor=n,n},ActionProvider.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new ActionProvider(Hyperloop.cast("android.view.ActionProvider",e.$native)):e},Object.defineProperty(ActionProvider,"VisibilityListener",{get:function(){return require("android.view.ActionProvider$VisibilityListener")},enumerable:!0}),ActionProvider.prototype.onCreateActionView=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onCreateActionView",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ActionProvider"===e.apiName)return new ActionProvider(e);var t=require(e.apiName);return new t(e)}return e},ActionProvider.prototype.overridesItemVisibility=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"overridesItemVisibility",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ActionProvider"===e.apiName)return new ActionProvider(e);var t=require(e.apiName);return new t(e)}return e},ActionProvider.prototype.hasSubMenu=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hasSubMenu",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ActionProvider"===e.apiName)return new ActionProvider(e);var t=require(e.apiName);return new t(e)}return e},ActionProvider.prototype.onPerformDefaultAction=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onPerformDefaultAction",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ActionProvider"===e.apiName)return new ActionProvider(e);var t=require(e.apiName);return new t(e)}return e},ActionProvider.prototype.setVisibilityListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setVisibilityListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ActionProvider"===e.apiName)return new ActionProvider(e);var t=require(e.apiName);return new t(e)}return e},ActionProvider.prototype.isVisible=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isVisible",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ActionProvider"===e.apiName)return new ActionProvider(e);var t=require(e.apiName);return new t(e)}return e},ActionProvider.prototype.onPrepareSubMenu=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onPrepareSubMenu",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ActionProvider"===e.apiName)return new ActionProvider(e);var t=require(e.apiName);return new t(e)}return e},ActionProvider.prototype.refreshVisibility=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"refreshVisibility",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ActionProvider"===e.apiName)return new ActionProvider(e);var t=require(e.apiName);return new t(e)}return e},module.exports=ActionProvider;