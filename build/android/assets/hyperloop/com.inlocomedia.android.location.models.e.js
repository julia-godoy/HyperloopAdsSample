var Hyperloop=require("hyperloop"),parentPackage=require("com.inlocomedia.android.location.models"),e=function(){var t;t=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("com.inlocomedia.android.location.models.e")?arguments[0]:e.class.newInstance(arguments),this.$native=t,this._hasPointer=null!=t,this._private={}},SuperClass=require("java.lang.Object");e.prototype=Object.create(SuperClass.prototype),e.prototype.constructor=e,Object.defineProperty(e.prototype,"super",{get:function(){return this._hasPointer?new e(this.$native.super):null},enumerable:!0}),e.className="com.inlocomedia.android.location.models.e",e.prototype.className="com.inlocomedia.android.location.models.e",Object.defineProperty(e,"class",{get:function(){return Hyperloop.getClass("com.inlocomedia.android.location.models.e")},enumerable:!0,configurable:!1}),e.extend=function(t){var n=Hyperloop.extend("com.inlocomedia.android.location.models.e"),r=function(){function e(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var t=[],n=0;n<arguments.length;n++)t[n]=e(arguments[n]);return t}var i=n.newInstance(arguments),a=this,o=t,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r},e.cast=function(t){return t.$native&&t.$native.isInstanceProxy?new e(Hyperloop.cast("com.inlocomedia.android.location.models.e",t.$native)):t},e.prototype.a=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"a",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("com.inlocomedia.android.location.models.e"===t.apiName)return new e(t);var n=require(t.apiName);return new n(t)}return t},e.prototype.getHeight=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"getHeight",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("com.inlocomedia.android.location.models.e"===t.apiName)return new e(t);var n=require(t.apiName);return new n(t)}return t},e.prototype.b=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"b",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("com.inlocomedia.android.location.models.e"===t.apiName)return new e(t);var n=require(t.apiName);return new n(t)}return t},e.prototype.getFloorY=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"getFloorY",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("com.inlocomedia.android.location.models.e"===t.apiName)return new e(t);var n=require(t.apiName);return new n(t)}return t},e.prototype.getImageDrawable=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"getImageDrawable",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("com.inlocomedia.android.location.models.e"===t.apiName)return new e(t);var n=require(t.apiName);return new n(t)}return t},e.prototype.getFloorX=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"getFloorX",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("com.inlocomedia.android.location.models.e"===t.apiName)return new e(t);var n=require(t.apiName);return new n(t)}return t},e.prototype.getWidth=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"getWidth",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("com.inlocomedia.android.location.models.e"===t.apiName)return new e(t);var n=require(t.apiName);return new n(t)}return t},e.prototype.getFloorWidth=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"getFloorWidth",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("com.inlocomedia.android.location.models.e"===t.apiName)return new e(t);var n=require(t.apiName);return new n(t)}return t},e.prototype.getFloorHeight=function(){if(!this._hasPointer)return null;var t=this.$native.callNativeFunction({func:"getFloorHeight",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==t)return null;if(t.apiName){if("com.inlocomedia.android.location.models.e"===t.apiName)return new e(t);var n=require(t.apiName);return new n(t)}return t},module.exports=e;