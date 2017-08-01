var Hyperloop=require("hyperloop"),parentPackage=require("android.graphics"),Matrix=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.Matrix")?arguments[0]:Matrix.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Matrix.prototype=Object.create(SuperClass.prototype),Matrix.prototype.constructor=Matrix,Object.defineProperty(Matrix.prototype,"super",{get:function(){return this._hasPointer?new Matrix(this.$native.super):null},enumerable:!0}),Matrix.className="android.graphics.Matrix",Matrix.prototype.className="android.graphics.Matrix",Object.defineProperty(Matrix,"class",{get:function(){return Hyperloop.getClass("android.graphics.Matrix")},enumerable:!0,configurable:!1}),Matrix.extend=function(e){var t=Hyperloop.extend("android.graphics.Matrix"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var a=t.newInstance(arguments),i=this,o=e,u={};Object.keys(o).forEach(function(e){i[e]=function(){return o[e].apply(i,arguments)},u[e]=function(){return i[e].apply(i,r.apply(this,arguments))}}),a.setOverrides(u),this.$native=a,this._hasPointer=null!=a,this._private={}};return n.prototype=Object.create(Matrix.prototype),n.prototype.constructor=n,n},Matrix.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Matrix(Hyperloop.cast("android.graphics.Matrix",e.$native)):e},Matrix.MSKEW_Y=3,Matrix.MSKEW_X=1,Matrix.MPERSP_2=8,Matrix.MTRANS_X=2,Matrix.MTRANS_Y=5,Matrix.MPERSP_1=7,Matrix.MPERSP_0=6,Matrix.MSCALE_Y=4,Matrix.MSCALE_X=0,Object.defineProperty(Matrix,"ScaleToFit",{get:function(){return require("android.graphics.Matrix$ScaleToFit")},enumerable:!0}),Matrix.prototype.preScale=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"preScale",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.mapVectors=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"mapVectors",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.setPolyToPoly=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setPolyToPoly",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.setTranslate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setTranslate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.toShortString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toShortString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.postSkew=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"postSkew",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.setSinCos=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setSinCos",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.preRotate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"preRotate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.setValues=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setValues",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.preTranslate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"preTranslate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.setSkew=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setSkew",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.postRotate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"postRotate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.setConcat=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setConcat",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.postTranslate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"postTranslate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.setRectToRect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setRectToRect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.mapPoints=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"mapPoints",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.set=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"set",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.invert=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"invert",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.getValues=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getValues",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.setScale=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setScale",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.preConcat=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"preConcat",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.isIdentity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isIdentity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.rectStaysRect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"rectStaysRect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.isAffine=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isAffine",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.mapRadius=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"mapRadius",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.preSkew=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"preSkew",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.equals=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.postConcat=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"postConcat",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.reset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"reset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.setRotate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setRotate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.finalize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"finalize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.postScale=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"postScale",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},Matrix.prototype.mapRect=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"mapRect",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.Matrix"===e.apiName)return new Matrix(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Matrix;