var Hyperloop=require("hyperloop"),EnclosingClass=require("android.view.View"),OnDragListener=function(){function e(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=e(arguments[n]);return t}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"android.view.View$OnDragListener"===arguments[0].apiName)n=arguments[0];else{var r,i=this,a=Array.prototype.slice.call(arguments)[0],o={};Object.keys(a).forEach(function(e){i[e]=function(){return a[e].apply(i,arguments)},o[e]=function(){return i[e].apply(i,t.apply(this,arguments))}}),r=Hyperloop.implement("android.view.View$OnDragListener"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};OnDragListener.toString=function(){return"[object "+this.className+"]"},OnDragListener.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},OnDragListener.isInstanceOf=function(e,t){if("function"!=typeof t||"function"!=typeof e)return!1;for(;e;){if(t===e||e instanceof t||e.className===t.className)return!0;e=e.__superclass__}return!1},OnDragListener.className="android.view.View$OnDragListener",OnDragListener.prototype.className="android.view.View$OnDragListener",Object.defineProperty(OnDragListener,"class",{get:function(){return Hyperloop.getClass("android.view.View$OnDragListener")},enumerable:!0,configurable:!1}),OnDragListener.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new OnDragListener(Hyperloop.cast("android.view.View$OnDragListener",e.$native)):e},OnDragListener.prototype.equals=function(e){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[e]});return t},OnDragListener.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return e},module.exports=OnDragListener;