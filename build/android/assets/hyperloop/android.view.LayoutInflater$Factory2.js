var Hyperloop=require("hyperloop"),EnclosingClass=require("android.view.LayoutInflater"),Factory2=function(){function e(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=e(arguments[n]);return t}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"android.view.LayoutInflater$Factory2"===arguments[0].apiName)n=arguments[0];else{var r,a=this,i=Array.prototype.slice.call(arguments)[0],o={};Object.keys(i).forEach(function(e){a[e]=function(){return i[e].apply(a,arguments)},o[e]=function(){return a[e].apply(a,t.apply(this,arguments))}}),r=Hyperloop.implement("android.view.LayoutInflater$Factory2"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};Factory2.toString=function(){return"[object "+this.className+"]"},Factory2.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},Factory2.isInstanceOf=function(e,t){if("function"!=typeof t||"function"!=typeof e)return!1;for(;e;){if(t===e||e instanceof t||e.className===t.className)return!0;e=e.__superclass__}return!1},Factory2.className="android.view.LayoutInflater$Factory2",Factory2.prototype.className="android.view.LayoutInflater$Factory2",Object.defineProperty(Factory2,"class",{get:function(){return Hyperloop.getClass("android.view.LayoutInflater$Factory2")},enumerable:!0,configurable:!1}),Factory2.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Factory2(Hyperloop.cast("android.view.LayoutInflater$Factory2",e.$native)):e},Factory2.prototype.equals=function(e){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[e]});return t},Factory2.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return e},module.exports=Factory2;