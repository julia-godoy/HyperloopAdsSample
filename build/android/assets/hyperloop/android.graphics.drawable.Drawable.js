var Hyperloop=require("hyperloop"),parentPackage=require("android.graphics.drawable"),Drawable=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.drawable.Drawable")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: android.graphics.drawable.Drawable. Create a subclass using android.graphics.drawable.Drawable.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Drawable.prototype=Object.create(SuperClass.prototype),Drawable.prototype.constructor=Drawable,Object.defineProperty(Drawable.prototype,"super",{get:function(){return this._hasPointer?new Drawable(this.$native.super):null},enumerable:!0}),Drawable.className="android.graphics.drawable.Drawable",Drawable.prototype.className="android.graphics.drawable.Drawable",Object.defineProperty(Drawable,"class",{get:function(){return Hyperloop.getClass("android.graphics.drawable.Drawable")},enumerable:!0,configurable:!1}),Drawable.extend=function(e){var t=Hyperloop.extend("android.graphics.drawable.Drawable"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var a=t.newInstance(arguments),i=this,o=e,u={};Object.keys(o).forEach(function(e){i[e]=function(){return o[e].apply(i,arguments)},u[e]=function(){return i[e].apply(i,r.apply(this,arguments))}}),a.setOverrides(u),this.$native=a,this._hasPointer=null!=a,this._private={}};return n.prototype=Object.create(Drawable.prototype),n.prototype.constructor=n,n},Drawable.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Drawable(Hyperloop.cast("android.graphics.drawable.Drawable",e.$native)):e},Object.defineProperty(Drawable,"Callback",{get:function(){return require("android.graphics.drawable.Drawable$Callback")},enumerable:!0}),Object.defineProperty(Drawable,"ConstantState",{get:function(){return require("android.graphics.drawable.Drawable$ConstantState")},enumerable:!0}),Drawable.resolveOpacity=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"resolveOpacity",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.createFromStream=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"createFromStream",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.createFromXml=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"createFromXml",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.createFromResourceStream=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"createFromResourceStream",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.createFromXmlInner=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"createFromXmlInner",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.createFromPath=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"createFromPath",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setFilterBitmap=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setFilterBitmap",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setColorFilter=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setColorFilter",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getMinimumHeight=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMinimumHeight",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setTintMode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setTintMode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getChangingConfigurations=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getChangingConfigurations",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setCallback=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setCallback",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getIntrinsicWidth=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIntrinsicWidth",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getBounds=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getBounds",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getAlpha=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAlpha",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setLevel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setLevel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getOpacity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getOpacity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.invalidateSelf=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"invalidateSelf",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getColorFilter=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getColorFilter",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setLayoutDirection=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setLayoutDirection",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getIntrinsicHeight=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getIntrinsicHeight",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setVisible=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setVisible",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.isAutoMirrored=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isAutoMirrored",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setAlpha=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setAlpha",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.isVisible=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isVisible",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getCallback=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getCallback",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setTint=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setTint",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.canApplyTheme=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"canApplyTheme",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getHotspotBounds=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getHotspotBounds",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.onLevelChange=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onLevelChange",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getCurrent=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getCurrent",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.isFilterBitmap=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isFilterBitmap",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.onLayoutDirectionChanged=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onLayoutDirectionChanged",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setHotspot=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setHotspot",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setChangingConfigurations=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setChangingConfigurations",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setDither=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setDither",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.scheduleSelf=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"scheduleSelf",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.onBoundsChange=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onBoundsChange",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getConstantState=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getConstantState",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.applyTheme=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"applyTheme",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.clearColorFilter=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"clearColorFilter",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setHotspotBounds=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setHotspotBounds",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.copyBounds=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"copyBounds",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getOutline=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getOutline",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getMinimumWidth=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMinimumWidth",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.onStateChange=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onStateChange",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.isStateful=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isStateful",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setAutoMirrored=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setAutoMirrored",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.mutate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"mutate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getDirtyBounds=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDirtyBounds",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getPadding=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPadding",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.jumpToCurrentState=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"jumpToCurrentState",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.draw=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"draw",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setBounds=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setBounds",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getLayoutDirection=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLayoutDirection",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getLevel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getLevel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.unscheduleSelf=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"unscheduleSelf",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getState=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getState",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.getTransparentRegion=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTransparentRegion",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.inflate=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"inflate",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setState=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setState",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},Drawable.prototype.setTintList=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setTintList",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.drawable.Drawable"===e.apiName)return new Drawable(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Drawable;