var Hyperloop=require("hyperloop"),parentPackage=require("android.util"),SparseBooleanArray=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.util.SparseBooleanArray")?arguments[0]:SparseBooleanArray.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");SparseBooleanArray.prototype=Object.create(SuperClass.prototype),SparseBooleanArray.prototype.constructor=SparseBooleanArray,Object.defineProperty(SparseBooleanArray.prototype,"super",{get:function(){return this._hasPointer?new SparseBooleanArray(this.$native.super):null},enumerable:!0}),SparseBooleanArray.className="android.util.SparseBooleanArray",SparseBooleanArray.prototype.className="android.util.SparseBooleanArray",Object.defineProperty(SparseBooleanArray,"class",{get:function(){return Hyperloop.getClass("android.util.SparseBooleanArray")},enumerable:!0,configurable:!1}),SparseBooleanArray.extend=function(e){var t=Hyperloop.extend("android.util.SparseBooleanArray"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var a=t.newInstance(arguments),i=this,o=e,u={};Object.keys(o).forEach(function(e){i[e]=function(){return o[e].apply(i,arguments)},u[e]=function(){return i[e].apply(i,r.apply(this,arguments))}}),a.setOverrides(u),this.$native=a,this._hasPointer=null!=a,this._private={}};return n.prototype=Object.create(SparseBooleanArray.prototype),n.prototype.constructor=n,n},SparseBooleanArray.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new SparseBooleanArray(Hyperloop.cast("android.util.SparseBooleanArray",e.$native)):e},SparseBooleanArray.prototype.keyAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"keyAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.clear=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"clear",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.valueAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"valueAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.indexOfValue=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"indexOfValue",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.delete=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"delete",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.put=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"put",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.size=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"size",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.indexOfKey=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"indexOfKey",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.get=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"get",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.clone=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"clone",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},SparseBooleanArray.prototype.append=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"append",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseBooleanArray"===e.apiName)return new SparseBooleanArray(e);var t=require(e.apiName);return new t(e)}return e},module.exports=SparseBooleanArray;