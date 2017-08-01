var Hyperloop=require("hyperloop"),parentPackage=require("android.content"),IntentSender=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.content.IntentSender")?arguments[0]:IntentSender.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");IntentSender.prototype=Object.create(SuperClass.prototype),IntentSender.prototype.constructor=IntentSender,Object.defineProperty(IntentSender.prototype,"super",{get:function(){return this._hasPointer?new IntentSender(this.$native.super):null},enumerable:!0}),IntentSender.className="android.content.IntentSender",IntentSender.prototype.className="android.content.IntentSender",Object.defineProperty(IntentSender,"class",{get:function(){return Hyperloop.getClass("android.content.IntentSender")},enumerable:!0,configurable:!1}),IntentSender.extend=function(e){var t=Hyperloop.extend("android.content.IntentSender"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(IntentSender.prototype),n.prototype.constructor=n,n},IntentSender.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new IntentSender(Hyperloop.cast("android.content.IntentSender",e.$native)):e},Object.defineProperty(IntentSender,"SendIntentException",{get:function(){return require("android.content.IntentSender$SendIntentException")},enumerable:!0}),Object.defineProperty(IntentSender,"OnFinished",{get:function(){return require("android.content.IntentSender$OnFinished")},enumerable:!0}),Object.defineProperty(IntentSender,"CREATOR",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("CREATOR");if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),IntentSender.readIntentSenderOrNullFromParcel=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"readIntentSenderOrNullFromParcel",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.writeIntentSenderOrNullToParcel=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"writeIntentSenderOrNullToParcel",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.prototype.sendIntent=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendIntent",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.prototype.getTargetPackage=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTargetPackage",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.prototype.equals=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.prototype.getCreatorPackage=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getCreatorPackage",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.prototype.getCreatorUid=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getCreatorUid",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.prototype.describeContents=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"describeContents",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.prototype.writeToParcel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"writeToParcel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},IntentSender.prototype.getCreatorUserHandle=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getCreatorUserHandle",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.IntentSender"===e.apiName)return new IntentSender(e);var t=require(e.apiName);return new t(e)}return e},module.exports=IntentSender;