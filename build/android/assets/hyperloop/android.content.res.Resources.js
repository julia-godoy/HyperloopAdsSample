var Hyperloop=require("hyperloop"),parentPackage=require("android.content.res"),Resources=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.content.res.Resources")?arguments[0]:Resources.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Resources.prototype=Object.create(SuperClass.prototype),Resources.prototype.constructor=Resources,Object.defineProperty(Resources.prototype,"super",{get:function(){return this._hasPointer?new Resources(this.$native.super):null},enumerable:!0}),Resources.className="android.content.res.Resources",Resources.prototype.className="android.content.res.Resources",Object.defineProperty(Resources,"class",{get:function(){return Hyperloop.getClass("android.content.res.Resources")},enumerable:!0,configurable:!1}),Resources.extend=function(e){var t=Hyperloop.extend("android.content.res.Resources"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(Resources.prototype),n.prototype.constructor=n,n},Resources.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Resources(Hyperloop.cast("android.content.res.Resources",e.$native)):e},Object.defineProperty(Resources,"NotFoundException",{get:function(){return require("android.content.res.Resources$NotFoundException")},enumerable:!0}),Object.defineProperty(Resources,"Theme",{get:function(){return require("android.content.res.Resources$Theme")},enumerable:!0}),Resources.getSystem=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getSystem",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getResourcePackageName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getResourcePackageName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getDrawable=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDrawable",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.openRawResourceFd=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openRawResourceFd",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.flushLayoutCache=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"flushLayoutCache",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.parseBundleExtras=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"parseBundleExtras",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getDimensionPixelOffset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDimensionPixelOffset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getInteger=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getInteger",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getDisplayMetrics=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDisplayMetrics",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getResourceTypeName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getResourceTypeName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getLayout=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLayout",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getQuantityString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getQuantityString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getConfiguration=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getConfiguration",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getAnimation=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAnimation",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getIdentifier=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIdentifier",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getDimension=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDimension",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getQuantityText=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getQuantityText",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getBoolean=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getBoolean",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getTextArray=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTextArray",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getDimensionPixelSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDimensionPixelSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.finishPreloading=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"finishPreloading",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getAssets=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAssets",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.obtainAttributes=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"obtainAttributes",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getResourceEntryName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getResourceEntryName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getText=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getText",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.obtainTypedArray=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"obtainTypedArray",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getColor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getColor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getXml=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getXml",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getResourceName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getResourceName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getMovie=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMovie",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.openRawResource=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openRawResource",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getValue=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getValue",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getColorStateList=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getColorStateList",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getValueForDensity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getValueForDensity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.parseBundleExtra=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"parseBundleExtra",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getDrawableForDensity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDrawableForDensity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getStringArray=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getStringArray",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.updateConfiguration=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"updateConfiguration",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getIntArray=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIntArray",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.newTheme=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"newTheme",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},Resources.prototype.getFraction=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFraction",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.res.Resources"===e.apiName)return new Resources(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Resources;