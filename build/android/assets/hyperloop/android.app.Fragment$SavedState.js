var Hyperloop=require("hyperloop"),EnclosingClass=require("android.app.Fragment"),SavedState=function(){var t;t=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.app.Fragment$SavedState")?arguments[0]:SavedState.class.newInstance(arguments),this.$native=t,this._hasPointer=null!=t,this._private={}},SuperClass=require("java.lang.Object");SavedState.prototype=Object.create(SuperClass.prototype),SavedState.prototype.constructor=SavedState,Object.defineProperty(SavedState.prototype,"super",{get:function(){return this._hasPointer?new SavedState(this.$native.super):null},enumerable:!0}),SavedState.className="android.app.Fragment$SavedState",SavedState.prototype.className="android.app.Fragment$SavedState",Object.defineProperty(SavedState,"class",{get:function(){return Hyperloop.getClass("android.app.Fragment$SavedState")},enumerable:!0,configurable:!1}),SavedState.extend=function(t){var e=Hyperloop.extend("android.app.Fragment$SavedState"),n=function(){function n(t){if(t.apiName&&t.isNativeProxy&&t.isInstanceProxy){var e=require(t.apiName);return new e(t)}return t}function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=n(arguments[e]);return t}var r=e.newInstance(arguments),a=this,o=t,u={};Object.keys(o).forEach(function(t){a[t]=function(){return o[t].apply(a,arguments)},u[t]=function(){return a[t].apply(a,i.apply(this,arguments))}}),r.setOverrides(u),this.$native=r,this._hasPointer=null!=r,this._private={}};return n.prototype=Object.create(SavedState.prototype),n.prototype.constructor=n,n},SavedState.cast=function(t){return t.$native&&t.$native.isInstanceProxy?new SavedState(Hyperloop.cast("android.app.Fragment$SavedState",t.$native)):t},Object.defineProperty(SavedState,"CREATOR",{get:function(){if(!this.class)return null;var t=this.class.getNativeField("CREATOR");if(null==t)return null;if(t.apiName){if("android.app.Fragment$SavedState"===t.apiName)return new SavedState(t);var e=require(t.apiName);return new e(t)}return t},enumerable:!0}),SavedState.prototype.describeContents=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"describeContents",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("android.app.Fragment$SavedState"===t.apiName)return new SavedState(t);var e=require(t.apiName);return new e(t)}return t},SavedState.prototype.writeToParcel=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"writeToParcel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("android.app.Fragment$SavedState"===t.apiName)return new SavedState(t);var e=require(t.apiName);return new e(t)}return t},module.exports=SavedState;