var Hyperloop=require("hyperloop"),EnclosingClass=require("android.view.InputDevice"),MotionRange=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.view.InputDevice$MotionRange")?arguments[0]:MotionRange.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");MotionRange.prototype=Object.create(SuperClass.prototype),MotionRange.prototype.constructor=MotionRange,Object.defineProperty(MotionRange.prototype,"super",{get:function(){return this._hasPointer?new MotionRange(this.$native.super):null},enumerable:!0}),MotionRange.className="android.view.InputDevice$MotionRange",MotionRange.prototype.className="android.view.InputDevice$MotionRange",Object.defineProperty(MotionRange,"class",{get:function(){return Hyperloop.getClass("android.view.InputDevice$MotionRange")},enumerable:!0,configurable:!1}),MotionRange.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new MotionRange(Hyperloop.cast("android.view.InputDevice$MotionRange",e.$native)):e},MotionRange.prototype.getFlat=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFlat",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.InputDevice$MotionRange"===e.apiName)return new MotionRange(e);var t=require(e.apiName);return new t(e)}return e},MotionRange.prototype.getResolution=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getResolution",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.InputDevice$MotionRange"===e.apiName)return new MotionRange(e);var t=require(e.apiName);return new t(e)}return e},MotionRange.prototype.getMin=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMin",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.InputDevice$MotionRange"===e.apiName)return new MotionRange(e);var t=require(e.apiName);return new t(e)}return e},MotionRange.prototype.getSource=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSource",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.InputDevice$MotionRange"===e.apiName)return new MotionRange(e);var t=require(e.apiName);return new t(e)}return e},MotionRange.prototype.getMax=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMax",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.InputDevice$MotionRange"===e.apiName)return new MotionRange(e);var t=require(e.apiName);return new t(e)}return e},MotionRange.prototype.getRange=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getRange",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.InputDevice$MotionRange"===e.apiName)return new MotionRange(e);var t=require(e.apiName);return new t(e)}return e},MotionRange.prototype.isFromSource=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isFromSource",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.InputDevice$MotionRange"===e.apiName)return new MotionRange(e);var t=require(e.apiName);return new t(e)}return e},MotionRange.prototype.getAxis=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAxis",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.InputDevice$MotionRange"===e.apiName)return new MotionRange(e);var t=require(e.apiName);return new t(e)}return e},MotionRange.prototype.getFuzz=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFuzz",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.InputDevice$MotionRange"===e.apiName)return new MotionRange(e);var t=require(e.apiName);return new t(e)}return e},module.exports=MotionRange;