var Hyperloop=require("hyperloop"),parentPackage=require("android.graphics"),BitmapFactory=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.graphics.BitmapFactory")?arguments[0]:BitmapFactory.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");BitmapFactory.prototype=Object.create(SuperClass.prototype),BitmapFactory.prototype.constructor=BitmapFactory,Object.defineProperty(BitmapFactory.prototype,"super",{get:function(){return this._hasPointer?new BitmapFactory(this.$native.super):null},enumerable:!0}),BitmapFactory.className="android.graphics.BitmapFactory",BitmapFactory.prototype.className="android.graphics.BitmapFactory",Object.defineProperty(BitmapFactory,"class",{get:function(){return Hyperloop.getClass("android.graphics.BitmapFactory")},enumerable:!0,configurable:!1}),BitmapFactory.extend=function(e){var t=Hyperloop.extend("android.graphics.BitmapFactory"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(BitmapFactory.prototype),n.prototype.constructor=n,n},BitmapFactory.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new BitmapFactory(Hyperloop.cast("android.graphics.BitmapFactory",e.$native)):e},BitmapFactory.decodeResourceStream=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"decodeResourceStream",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory"===e.apiName)return new BitmapFactory(e);var t=require(e.apiName);return new t(e)}return e},BitmapFactory.decodeByteArray=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"decodeByteArray",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory"===e.apiName)return new BitmapFactory(e);var t=require(e.apiName);return new t(e)}return e},BitmapFactory.decodeFile=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"decodeFile",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory"===e.apiName)return new BitmapFactory(e);var t=require(e.apiName);return new t(e)}return e},BitmapFactory.decodeStream=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"decodeStream",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory"===e.apiName)return new BitmapFactory(e);var t=require(e.apiName);return new t(e)}return e},BitmapFactory.decodeResource=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"decodeResource",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory"===e.apiName)return new BitmapFactory(e);var t=require(e.apiName);return new t(e)}return e},BitmapFactory.decodeFileDescriptor=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"decodeFileDescriptor",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.graphics.BitmapFactory"===e.apiName)return new BitmapFactory(e);var t=require(e.apiName);return new t(e)}return e},module.exports=BitmapFactory;