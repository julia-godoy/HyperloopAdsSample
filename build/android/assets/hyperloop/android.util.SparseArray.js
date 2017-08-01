var Hyperloop=require("hyperloop"),parentPackage=require("android.util"),SparseArray=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.util.SparseArray")?arguments[0]:SparseArray.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");SparseArray.prototype=Object.create(SuperClass.prototype),SparseArray.prototype.constructor=SparseArray,Object.defineProperty(SparseArray.prototype,"super",{get:function(){return this._hasPointer?new SparseArray(this.$native.super):null},enumerable:!0}),SparseArray.className="android.util.SparseArray",SparseArray.prototype.className="android.util.SparseArray",Object.defineProperty(SparseArray,"class",{get:function(){return Hyperloop.getClass("android.util.SparseArray")},enumerable:!0,configurable:!1}),SparseArray.extend=function(e){var t=Hyperloop.extend("android.util.SparseArray"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var a=t.newInstance(arguments),i=this,o=e,u={};Object.keys(o).forEach(function(e){i[e]=function(){return o[e].apply(i,arguments)},u[e]=function(){return i[e].apply(i,r.apply(this,arguments))}}),a.setOverrides(u),this.$native=a,this._hasPointer=null!=a,this._private={}};return n.prototype=Object.create(SparseArray.prototype),n.prototype.constructor=n,n},SparseArray.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new SparseArray(Hyperloop.cast("android.util.SparseArray",e.$native)):e},SparseArray.prototype.keyAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"keyAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.removeAtRange=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeAtRange",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.clear=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"clear",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.valueAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"valueAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.indexOfValue=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"indexOfValue",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.delete=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"delete",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.remove=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"remove",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.put=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"put",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.setValueAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setValueAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.size=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"size",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.indexOfKey=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"indexOfKey",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.get=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"get",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.clone=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"clone",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.removeAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},SparseArray.prototype.append=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"append",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.util.SparseArray"===e.apiName)return new SparseArray(e);var t=require(e.apiName);return new t(e)}return e},module.exports=SparseArray;