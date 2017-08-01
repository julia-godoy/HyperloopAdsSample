var Hyperloop=require("hyperloop"),parentPackage=require("android.view"),ViewTreeObserver=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.view.ViewTreeObserver")?arguments[0]:ViewTreeObserver.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");ViewTreeObserver.prototype=Object.create(SuperClass.prototype),ViewTreeObserver.prototype.constructor=ViewTreeObserver,Object.defineProperty(ViewTreeObserver.prototype,"super",{get:function(){return this._hasPointer?new ViewTreeObserver(this.$native.super):null},enumerable:!0}),ViewTreeObserver.className="android.view.ViewTreeObserver",ViewTreeObserver.prototype.className="android.view.ViewTreeObserver",Object.defineProperty(ViewTreeObserver,"class",{get:function(){return Hyperloop.getClass("android.view.ViewTreeObserver")},enumerable:!0,configurable:!1}),ViewTreeObserver.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new ViewTreeObserver(Hyperloop.cast("android.view.ViewTreeObserver",e.$native)):e},Object.defineProperty(ViewTreeObserver,"OnDrawListener",{get:function(){return require("android.view.ViewTreeObserver$OnDrawListener")},enumerable:!0}),Object.defineProperty(ViewTreeObserver,"OnGlobalFocusChangeListener",{get:function(){return require("android.view.ViewTreeObserver$OnGlobalFocusChangeListener")},enumerable:!0}),Object.defineProperty(ViewTreeObserver,"OnWindowAttachListener",{get:function(){return require("android.view.ViewTreeObserver$OnWindowAttachListener")},enumerable:!0}),Object.defineProperty(ViewTreeObserver,"OnPreDrawListener",{get:function(){return require("android.view.ViewTreeObserver$OnPreDrawListener")},enumerable:!0}),Object.defineProperty(ViewTreeObserver,"OnScrollChangedListener",{get:function(){return require("android.view.ViewTreeObserver$OnScrollChangedListener")},enumerable:!0}),Object.defineProperty(ViewTreeObserver,"OnTouchModeChangeListener",{get:function(){return require("android.view.ViewTreeObserver$OnTouchModeChangeListener")},enumerable:!0}),Object.defineProperty(ViewTreeObserver,"OnGlobalLayoutListener",{get:function(){return require("android.view.ViewTreeObserver$OnGlobalLayoutListener")},enumerable:!0}),Object.defineProperty(ViewTreeObserver,"OnWindowFocusChangeListener",{get:function(){return require("android.view.ViewTreeObserver$OnWindowFocusChangeListener")},enumerable:!0}),ViewTreeObserver.prototype.removeOnDrawListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeOnDrawListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.addOnPreDrawListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addOnPreDrawListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.removeOnPreDrawListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeOnPreDrawListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.addOnTouchModeChangeListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addOnTouchModeChangeListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.removeOnTouchModeChangeListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeOnTouchModeChangeListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.removeOnWindowAttachListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeOnWindowAttachListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.addOnGlobalLayoutListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addOnGlobalLayoutListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.isAlive=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isAlive",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.dispatchOnDraw=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"dispatchOnDraw",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.addOnScrollChangedListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addOnScrollChangedListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.removeOnGlobalFocusChangeListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeOnGlobalFocusChangeListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.dispatchOnPreDraw=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"dispatchOnPreDraw",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.addOnWindowFocusChangeListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addOnWindowFocusChangeListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.addOnGlobalFocusChangeListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addOnGlobalFocusChangeListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.addOnDrawListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addOnDrawListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.addOnWindowAttachListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addOnWindowAttachListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.removeOnWindowFocusChangeListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeOnWindowFocusChangeListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.dispatchOnGlobalLayout=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"dispatchOnGlobalLayout",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.removeOnScrollChangedListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeOnScrollChangedListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.removeGlobalOnLayoutListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeGlobalOnLayoutListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},ViewTreeObserver.prototype.removeOnGlobalLayoutListener=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeOnGlobalLayoutListener",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.ViewTreeObserver"===e.apiName)return new ViewTreeObserver(e);var t=require(e.apiName);return new t(e)}return e},module.exports=ViewTreeObserver;