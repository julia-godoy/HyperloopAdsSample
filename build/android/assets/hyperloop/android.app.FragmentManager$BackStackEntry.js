var Hyperloop=require("hyperloop"),EnclosingClass=require("android.app.FragmentManager"),BackStackEntry=function(){function t(t){if(t.apiName&&t.isNativeProxy&&t.isInstanceProxy){var e=require(t.apiName);return new e(t)}return t}function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=t(arguments[n]);return e}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"android.app.FragmentManager$BackStackEntry"===arguments[0].apiName)n=arguments[0];else{var r,i=this,a=Array.prototype.slice.call(arguments)[0],o={};Object.keys(a).forEach(function(t){i[t]=function(){return a[t].apply(i,arguments)},o[t]=function(){return i[t].apply(i,e.apply(this,arguments))}}),r=Hyperloop.implement("android.app.FragmentManager$BackStackEntry"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};BackStackEntry.toString=function(){return"[object "+this.className+"]"},BackStackEntry.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},BackStackEntry.isInstanceOf=function(t,e){if("function"!=typeof e||"function"!=typeof t)return!1;for(;t;){if(e===t||t instanceof e||t.className===e.className)return!0;t=t.__superclass__}return!1},BackStackEntry.className="android.app.FragmentManager$BackStackEntry",BackStackEntry.prototype.className="android.app.FragmentManager$BackStackEntry",Object.defineProperty(BackStackEntry,"class",{get:function(){return Hyperloop.getClass("android.app.FragmentManager$BackStackEntry")},enumerable:!0,configurable:!1}),BackStackEntry.cast=function(t){return t.$native&&t.$native.isInstanceProxy?new BackStackEntry(Hyperloop.cast("android.app.FragmentManager$BackStackEntry",t.$native)):t},BackStackEntry.prototype.equals=function(t){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[t]});return e},BackStackEntry.prototype.hashCode=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return t},module.exports=BackStackEntry;