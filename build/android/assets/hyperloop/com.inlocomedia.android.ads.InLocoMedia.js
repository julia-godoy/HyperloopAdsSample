var Hyperloop=require("hyperloop"),parentPackage=require("com.inlocomedia.android.ads"),InLocoMedia=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("com.inlocomedia.android.ads.InLocoMedia")?arguments[0]:InLocoMedia.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");InLocoMedia.prototype=Object.create(SuperClass.prototype),InLocoMedia.prototype.constructor=InLocoMedia,Object.defineProperty(InLocoMedia.prototype,"super",{get:function(){return this._hasPointer?new InLocoMedia(this.$native.super):null},enumerable:!0}),InLocoMedia.className="com.inlocomedia.android.ads.InLocoMedia",InLocoMedia.prototype.className="com.inlocomedia.android.ads.InLocoMedia",Object.defineProperty(InLocoMedia,"class",{get:function(){return Hyperloop.getClass("com.inlocomedia.android.ads.InLocoMedia")},enumerable:!0,configurable:!1}),InLocoMedia.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new InLocoMedia(Hyperloop.cast("com.inlocomedia.android.ads.InLocoMedia",e.$native)):e},Object.defineProperty(InLocoMedia,"Notification",{get:function(){return require("com.inlocomedia.android.ads.InLocoMedia$Notification")},enumerable:!0}),InLocoMedia.init=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"init",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.isLocationTrackingEnabled=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"isLocationTrackingEnabled",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.removeLocationUpdates=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"removeLocationUpdates",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestStores=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestStores",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestLocation=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestLocation",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestRetailImageThumbNail=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestRetailImageThumbNail",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestLocationUpdates=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestLocationUpdates",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestRetailImage=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestRetailImage",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestPermissions=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestPermissions",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestMapImage=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestMapImage",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestRetails=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestRetails",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestMaps=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestMaps",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.removeMapsLocationUpdates=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"removeMapsLocationUpdates",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestLocationPermission=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestLocationPermission",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestCoarseLocationPermission=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestCoarseLocationPermission",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.setLocationTrackingEnabled=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"setLocationTrackingEnabled",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestMapsLocationUpdates=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestMapsLocationUpdates",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},InLocoMedia.requestMapsLocation=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestMapsLocation",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("com.inlocomedia.android.ads.InLocoMedia"===e.apiName)return new InLocoMedia(e);var t=require(e.apiName);return new t(e)}return e},module.exports=InLocoMedia;