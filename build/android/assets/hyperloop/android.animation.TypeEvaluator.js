var Hyperloop=require("hyperloop"),parentPackage=require("android.animation"),TypeEvaluator=function(){function t(t){if(t.apiName&&t.isNativeProxy&&t.isInstanceProxy){var e=require(t.apiName);return new e(t)}return t}function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=t(arguments[n]);return e}var n;if(1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].apiName&&"android.animation.TypeEvaluator"===arguments[0].apiName)n=arguments[0];else{var r,i=this,a=Array.prototype.slice.call(arguments)[0],o={};Object.keys(a).forEach(function(t){i[t]=function(){return a[t].apply(i,arguments)},o[t]=function(){return i[t].apply(i,e.apply(this,arguments))}}),r=Hyperloop.implement("android.animation.TypeEvaluator"),n=r.newInstance(o)}this.$native=n,this._hasPointer=null!=n,this._private={}};TypeEvaluator.toString=function(){return"[object "+this.className+"]"},TypeEvaluator.prototype.toString=function(){return this._hasPointer?"[object "+this.className+"]":null},TypeEvaluator.isInstanceOf=function(t,e){if("function"!=typeof e||"function"!=typeof t)return!1;for(;t;){if(e===t||t instanceof e||t.className===e.className)return!0;t=t.__superclass__}return!1},TypeEvaluator.className="android.animation.TypeEvaluator",TypeEvaluator.prototype.className="android.animation.TypeEvaluator",Object.defineProperty(TypeEvaluator,"class",{get:function(){return Hyperloop.getClass("android.animation.TypeEvaluator")},enumerable:!0,configurable:!1}),TypeEvaluator.cast=function(t){return t.$native&&t.$native.isInstanceProxy?new TypeEvaluator(Hyperloop.cast("android.animation.TypeEvaluator",t.$native)):t},TypeEvaluator.prototype.equals=function(t){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:[t]});return e},TypeEvaluator.prototype.hashCode=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});return t},module.exports=TypeEvaluator;