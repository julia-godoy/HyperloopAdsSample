var Hyperloop=require("hyperloop"),EnclosingClass=require("android.app.VoiceInteractor"),Prompt=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.app.VoiceInteractor$Prompt")?arguments[0]:Prompt.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Prompt.prototype=Object.create(SuperClass.prototype),Prompt.prototype.constructor=Prompt,Object.defineProperty(Prompt.prototype,"super",{get:function(){return this._hasPointer?new Prompt(this.$native.super):null},enumerable:!0}),Prompt.className="android.app.VoiceInteractor$Prompt",Prompt.prototype.className="android.app.VoiceInteractor$Prompt",Object.defineProperty(Prompt,"class",{get:function(){return Hyperloop.getClass("android.app.VoiceInteractor$Prompt")},enumerable:!0,configurable:!1}),Prompt.extend=function(e){var t=Hyperloop.extend("android.app.VoiceInteractor$Prompt"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(Prompt.prototype),n.prototype.constructor=n,n},Prompt.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Prompt(Hyperloop.cast("android.app.VoiceInteractor$Prompt",e.$native)):e},Object.defineProperty(Prompt,"CREATOR",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("CREATOR");if(null==e)return null;if(e.apiName){if("android.app.VoiceInteractor$Prompt"===e.apiName)return new Prompt(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Prompt.prototype.getVoicePromptAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getVoicePromptAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.VoiceInteractor$Prompt"===e.apiName)return new Prompt(e);var t=require(e.apiName);return new t(e)}return e},Prompt.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.VoiceInteractor$Prompt"===e.apiName)return new Prompt(e);var t=require(e.apiName);return new t(e)}return e},Prompt.prototype.countVoicePrompts=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"countVoicePrompts",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.VoiceInteractor$Prompt"===e.apiName)return new Prompt(e);var t=require(e.apiName);return new t(e)}return e},Prompt.prototype.getVisualPrompt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getVisualPrompt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.VoiceInteractor$Prompt"===e.apiName)return new Prompt(e);var t=require(e.apiName);return new t(e)}return e},Prompt.prototype.describeContents=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"describeContents",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.VoiceInteractor$Prompt"===e.apiName)return new Prompt(e);var t=require(e.apiName);return new t(e)}return e},Prompt.prototype.writeToParcel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"writeToParcel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.app.VoiceInteractor$Prompt"===e.apiName)return new Prompt(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Prompt;