var Hyperloop=require("hyperloop"),EnclosingClass=require("android.app.Application"),OnProvideAssistDataListener=function(){function t(t){if(t.apiName&&t.isNativeProxy&&t.isInstanceProxy){var e=require(t.apiName);return new e(t)}return t}function e(){for(var e=[],i=0;i<arguments.length;i++)e[i]=t(arguments[i]);return e}var i;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"android.app.Application$OnProvideAssistDataListener"===arguments[0].apiName)i=arguments[0];else{var n,r=this,a=Array.prototype.slice.call(arguments)[0],o={};Object.keys(a).forEach(function(t){r[t]=function(){return a[t].apply(r,arguments)},o[t]=function(){return r[t].apply(r,e.apply(this,arguments))}}),n=Hyperloop.implement("android.app.Application$OnProvideAssistDataListener"),i=n.newInstance(o)}this.$native=i,this._hasPointer=null!=i,this._private={}};OnProvideAssistDataListener.toString=function(){return"[object "+this.className+"]"},OnProvideAssistDataListener.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},OnProvideAssistDataListener.isInstanceOf=function(t,e){if("function"!=typeof e||"function"!=typeof t)return!1;for(;t;){if(e===t||t instanceof e||t.className===e.className)return!0;t=t.__superclass__}return!1},OnProvideAssistDataListener.className="android.app.Application$OnProvideAssistDataListener",OnProvideAssistDataListener.prototype.className="android.app.Application$OnProvideAssistDataListener",Object.defineProperty(OnProvideAssistDataListener,"class",{get:function(){return Hyperloop.getClass("android.app.Application$OnProvideAssistDataListener")},enumerable:!0,configurable:!1}),OnProvideAssistDataListener.cast=function(t){return t.$native&&t.$native.isInstanceProxy?new OnProvideAssistDataListener(Hyperloop.cast("android.app.Application$OnProvideAssistDataListener",t.$native)):t},OnProvideAssistDataListener.prototype.equals=function(t){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[t]});return e},OnProvideAssistDataListener.prototype.hashCode=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return t},module.exports=OnProvideAssistDataListener;