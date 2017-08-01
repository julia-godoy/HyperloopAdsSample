var Hyperloop=require("hyperloop"),parentPackage=require("android.app"),TaskStackBuilder=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.app.TaskStackBuilder")?arguments[0]:TaskStackBuilder.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");TaskStackBuilder.prototype=Object.create(SuperClass.prototype),TaskStackBuilder.prototype.constructor=TaskStackBuilder,Object.defineProperty(TaskStackBuilder.prototype,"super",{get:function(){return this._hasPointer?new TaskStackBuilder(this.$native.super):null},enumerable:!0}),TaskStackBuilder.className="android.app.TaskStackBuilder",TaskStackBuilder.prototype.className="android.app.TaskStackBuilder",Object.defineProperty(TaskStackBuilder,"class",{get:function(){return Hyperloop.getClass("android.app.TaskStackBuilder")},enumerable:!0,configurable:!1}),TaskStackBuilder.extend=function(e){var t=Hyperloop.extend("android.app.TaskStackBuilder"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(TaskStackBuilder.prototype),n.prototype.constructor=n,n},TaskStackBuilder.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new TaskStackBuilder(Hyperloop.cast("android.app.TaskStackBuilder",e.$native)):e},TaskStackBuilder.create=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"create",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.TaskStackBuilder"===e.apiName)return new TaskStackBuilder(e);var t=require(e.apiName);return new t(e)}return e},TaskStackBuilder.prototype.startActivities=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"startActivities",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.TaskStackBuilder"===e.apiName)return new TaskStackBuilder(e);var t=require(e.apiName);return new t(e)}return e},TaskStackBuilder.prototype.addParentStack=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addParentStack",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.TaskStackBuilder"===e.apiName)return new TaskStackBuilder(e);var t=require(e.apiName);return new t(e)}return e},TaskStackBuilder.prototype.getIntentCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIntentCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.TaskStackBuilder"===e.apiName)return new TaskStackBuilder(e);var t=require(e.apiName);return new t(e)}return e},TaskStackBuilder.prototype.getIntents=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIntents",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.TaskStackBuilder"===e.apiName)return new TaskStackBuilder(e);var t=require(e.apiName);return new t(e)}return e},TaskStackBuilder.prototype.getPendingIntent=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPendingIntent",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.TaskStackBuilder"===e.apiName)return new TaskStackBuilder(e);var t=require(e.apiName);return new t(e)}return e},TaskStackBuilder.prototype.addNextIntent=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addNextIntent",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.TaskStackBuilder"===e.apiName)return new TaskStackBuilder(e);var t=require(e.apiName);return new t(e)}return e},TaskStackBuilder.prototype.addNextIntentWithParentStack=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addNextIntentWithParentStack",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.TaskStackBuilder"===e.apiName)return new TaskStackBuilder(e);var t=require(e.apiName);return new t(e)}return e},TaskStackBuilder.prototype.editIntentAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"editIntentAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.TaskStackBuilder"===e.apiName)return new TaskStackBuilder(e);var t=require(e.apiName);return new t(e)}return e},module.exports=TaskStackBuilder;