var Hyperloop=require("hyperloop"),parentPackage=require("android.content.res"),_TypedArray=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.content.res.TypedArray")?arguments[0]:_TypedArray.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");_TypedArray.prototype=Object.create(SuperClass.prototype),_TypedArray.prototype.constructor=_TypedArray,Object.defineProperty(_TypedArray.prototype,"super",{get:function(){return this._hasPointer?new _TypedArray(this.$native.super):null},enumerable:!0}),_TypedArray.className="android.content.res.TypedArray",_TypedArray.prototype.className="android.content.res.TypedArray",Object.defineProperty(_TypedArray,"class",{get:function(){return Hyperloop.getClass("android.content.res.TypedArray")},enumerable:!0,configurable:!1}),_TypedArray.extend=function(e){var t=Hyperloop.extend("android.content.res.TypedArray"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(_TypedArray.prototype),n.prototype.constructor=n,n},_TypedArray.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new _TypedArray(Hyperloop.cast("android.content.res.TypedArray",e.$native)):e},_TypedArray.prototype.getDrawable=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDrawable",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getIndex=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIndex",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getChangingConfigurations=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getChangingConfigurations",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getDimensionPixelOffset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDimensionPixelOffset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getInteger=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getInteger",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.peekValue=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"peekValue",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getFloat=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFloat",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getLayoutDimension=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLayoutDimension",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getResources=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getResources",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getDimension=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDimension",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.recycle=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"recycle",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getBoolean=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getBoolean",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getTextArray=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTextArray",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getPositionDescription=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPositionDescription",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getDimensionPixelSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDimensionPixelSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getText=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getText",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.length=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"length",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getColor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getColor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.hasValue=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hasValue",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getIndexCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIndexCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getNonResourceString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getNonResourceString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getInt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getInt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getValue=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getValue",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getColorStateList=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getColorStateList",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getResourceId=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getResourceId",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getType=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getType",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.hasValueOrEmpty=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hasValueOrEmpty",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},_TypedArray.prototype.getFraction=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFraction",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.TypedArray"===e.apiName)return new _TypedArray(e);var t=require(e.apiName);return new t(e)}return e},module.exports=_TypedArray;