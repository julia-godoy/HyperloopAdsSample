var Hyperloop=require("hyperloop"),parentPackage=require("android.app"),LoaderManager=function(){var t;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.app.LoaderManager")?t=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: android.app.LoaderManager. Create a subclass using android.app.LoaderManager.extend();"),this.$native=t,this._hasPointer=null!=t,this._private={}},SuperClass=require("java.lang.Object");LoaderManager.prototype=Object.create(SuperClass.prototype),LoaderManager.prototype.constructor=LoaderManager,Object.defineProperty(LoaderManager.prototype,"super",{get:function(){return this._hasPointer?new LoaderManager(this.$native.super):null},enumerable:!0}),LoaderManager.className="android.app.LoaderManager",LoaderManager.prototype.className="android.app.LoaderManager",Object.defineProperty(LoaderManager,"class",{get:function(){return Hyperloop.getClass("android.app.LoaderManager")},enumerable:!0,configurable:!1}),LoaderManager.extend=function(t){var e=Hyperloop.extend("android.app.LoaderManager"),n=function(){function n(t){if(t.apiName&&t.isNativeProxy&&t.isInstanceProxy){var e=require(t.apiName);return new e(t)}return t}function r(){for(var t=[],e=0;e<arguments.length;e++)t[e]=n(arguments[e]);return t}var i=e.newInstance(arguments),a=this,o=t,u={};Object.keys(o).forEach(function(t){a[t]=function(){return o[t].apply(a,arguments)},u[t]=function(){return a[t].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(LoaderManager.prototype),n.prototype.constructor=n,n},LoaderManager.cast=function(t){return t.$native&&t.$native.isInstanceProxy?new LoaderManager(Hyperloop.cast("android.app.LoaderManager",t.$native)):t},Object.defineProperty(LoaderManager,"LoaderCallbacks",{get:function(){return require("android.app.LoaderManager$LoaderCallbacks")},enumerable:!0}),LoaderManager.enableDebugLogging=function(){if(!this.class)return null;var t=this.class.callNativeFunction({func:"enableDebugLogging",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("android.app.LoaderManager"===t.apiName)return new LoaderManager(t);var e=require(t.apiName);return new e(t)}return t},LoaderManager.prototype.restartLoader=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"restartLoader",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("android.app.LoaderManager"===t.apiName)return new LoaderManager(t);var e=require(t.apiName);return new e(t)}return t},LoaderManager.prototype.getLoader=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"getLoader",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("android.app.LoaderManager"===t.apiName)return new LoaderManager(t);var e=require(t.apiName);return new e(t)}return t},LoaderManager.prototype.dump=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"dump",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("android.app.LoaderManager"===t.apiName)return new LoaderManager(t);var e=require(t.apiName);return new e(t)}return t},LoaderManager.prototype.initLoader=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"initLoader",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("android.app.LoaderManager"===t.apiName)return new LoaderManager(t);var e=require(t.apiName);return new e(t)}return t},LoaderManager.prototype.destroyLoader=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"destroyLoader",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("android.app.LoaderManager"===t.apiName)return new LoaderManager(t);var e=require(t.apiName);return new e(t)}return t},module.exports=LoaderManager;