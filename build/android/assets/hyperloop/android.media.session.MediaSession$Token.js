var Hyperloop=require("hyperloop"),EnclosingClass=require("android.media.session.MediaSession"),Token=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.media.session.MediaSession$Token")?arguments[0]:Token.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");Token.prototype=Object.create(SuperClass.prototype),Token.prototype.constructor=Token,Object.defineProperty(Token.prototype,"super",{get:function(){return this._hasPointer?new Token(this.$native.super):null},enumerable:!0}),Token.className="android.media.session.MediaSession$Token",Token.prototype.className="android.media.session.MediaSession$Token",Object.defineProperty(Token,"class",{get:function(){return Hyperloop.getClass("android.media.session.MediaSession$Token")},enumerable:!0,configurable:!1}),Token.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Token(Hyperloop.cast("android.media.session.MediaSession$Token",e.$native)):e},Object.defineProperty(Token,"CREATOR",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("CREATOR");if(null==e)return null;if(e.apiName){if("android.media.session.MediaSession$Token"===e.apiName)return new Token(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Token.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.session.MediaSession$Token"===e.apiName)return new Token(e);var t=require(e.apiName);return new t(e)}return e},Token.prototype.equals=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.session.MediaSession$Token"===e.apiName)return new Token(e);var t=require(e.apiName);return new t(e)}return e},Token.prototype.describeContents=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"describeContents",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.session.MediaSession$Token"===e.apiName)return new Token(e);var t=require(e.apiName);return new t(e)}return e},Token.prototype.writeToParcel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"writeToParcel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.media.session.MediaSession$Token"===e.apiName)return new Token(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Token;