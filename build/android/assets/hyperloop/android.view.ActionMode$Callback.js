var Hyperloop=require("hyperloop"),EnclosingClass=require("android.view.ActionMode"),Callback=function(){function e(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=e(arguments[n]);return t}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"android.view.ActionMode$Callback"===arguments[0].apiName)n=arguments[0];else{var r,a=this,i=Array.prototype.slice.call(arguments)[0],o={};Object.keys(i).forEach(function(e){a[e]=function(){return i[e].apply(a,arguments)},o[e]=function(){return a[e].apply(a,t.apply(this,arguments))}}),r=Hyperloop.implement("android.view.ActionMode$Callback"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};Callback.toString=function(){return"[object "+this.className+"]"},Callback.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},Callback.isInstanceOf=function(e,t){if("function"!=typeof t||"function"!=typeof e)return!1;for(;e;){if(t===e||e instanceof t||e.className===t.className)return!0;e=e.__superclass__}return!1},Callback.className="android.view.ActionMode$Callback",Callback.prototype.className="android.view.ActionMode$Callback",Object.defineProperty(Callback,"class",{get:function(){return Hyperloop.getClass("android.view.ActionMode$Callback")},enumerable:!0,configurable:!1}),Callback.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Callback(Hyperloop.cast("android.view.ActionMode$Callback",e.$native)):e},Callback.prototype.equals=function(e){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[e]});return t},Callback.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return e},module.exports=Callback;