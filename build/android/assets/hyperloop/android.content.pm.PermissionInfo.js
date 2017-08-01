var Hyperloop=require("hyperloop"),parentPackage=require("android.content.pm"),PermissionInfo=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.content.pm.PermissionInfo")?arguments[0]:PermissionInfo.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("android.content.pm.PackageItemInfo");PermissionInfo.prototype=Object.create(SuperClass.prototype),PermissionInfo.prototype.constructor=PermissionInfo,Object.defineProperty(PermissionInfo.prototype,"super",{get:function(){return this._hasPointer?new PermissionInfo(this.$native.super):null},enumerable:!0}),PermissionInfo.className="android.content.pm.PermissionInfo",PermissionInfo.prototype.className="android.content.pm.PermissionInfo",Object.defineProperty(PermissionInfo,"class",{get:function(){return Hyperloop.getClass("android.content.pm.PermissionInfo")},enumerable:!0,configurable:!1}),PermissionInfo.extend=function(e){var t=Hyperloop.extend("android.content.pm.PermissionInfo"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(PermissionInfo.prototype),n.prototype.constructor=n,n},PermissionInfo.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new PermissionInfo(Hyperloop.cast("android.content.pm.PermissionInfo",e.$native)):e},PermissionInfo.FLAG_COSTS_MONEY=1,PermissionInfo.FLAG_INSTALLED=1073741824,PermissionInfo.PROTECTION_DANGEROUS=1,PermissionInfo.PROTECTION_FLAG_DEVELOPMENT=32,PermissionInfo.PROTECTION_MASK_FLAGS=4080,PermissionInfo.PROTECTION_FLAG_APPOP=64,PermissionInfo.PROTECTION_SIGNATURE=2,PermissionInfo.PROTECTION_FLAG_VERIFIER=512,PermissionInfo.PROTECTION_FLAG_INSTALLER=256,PermissionInfo.PROTECTION_NORMAL=0,PermissionInfo.PROTECTION_FLAG_SYSTEM=16,PermissionInfo.PROTECTION_FLAG_PREINSTALLED=1024,PermissionInfo.PROTECTION_MASK_BASE=15,PermissionInfo.PROTECTION_FLAG_PRE23=128,PermissionInfo.PROTECTION_FLAG_PRIVILEGED=16,PermissionInfo.PROTECTION_SIGNATURE_OR_SYSTEM=3,Object.defineProperty(PermissionInfo,"CREATOR",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("CREATOR");if(null==e)return null;if(e.apiName){if("android.content.pm.PermissionInfo"===e.apiName)return new PermissionInfo(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(PermissionInfo.prototype,"nonLocalizedDescription",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("nonLocalizedDescription");if(null==e)return null;if(e.apiName){if("android.content.pm.PermissionInfo"===e.apiName)return new PermissionInfo(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("nonLocalizedDescription",e)},enumerable:!0}),Object.defineProperty(PermissionInfo.prototype,"flags",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("flags");if(null==e)return null;if(e.apiName){if("android.content.pm.PermissionInfo"===e.apiName)return new PermissionInfo(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("flags",e)},enumerable:!0}),Object.defineProperty(PermissionInfo.prototype,"descriptionRes",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("descriptionRes");if(null==e)return null;if(e.apiName){if("android.content.pm.PermissionInfo"===e.apiName)return new PermissionInfo(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("descriptionRes",e)},enumerable:!0}),Object.defineProperty(PermissionInfo.prototype,"protectionLevel",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("protectionLevel");if(null==e)return null;if(e.apiName){if("android.content.pm.PermissionInfo"===e.apiName)return new PermissionInfo(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("protectionLevel",e)},enumerable:!0}),Object.defineProperty(PermissionInfo.prototype,"group",{get:function(){if(!this._hasPointer)return null;var e=this.$native.getNativeField("group");if(null==e)return null;if(e.apiName){if("android.content.pm.PermissionInfo"===e.apiName)return new PermissionInfo(e);var t=require(e.apiName);return new t(e)}return e},set:function(e){this._hasPointer&&this.$native.setNativeField("group",e)},enumerable:!0}),PermissionInfo.prototype.loadDescription=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"loadDescription",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.pm.PermissionInfo"===e.apiName)return new PermissionInfo(e);var t=require(e.apiName);return new t(e)}return e},PermissionInfo.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.pm.PermissionInfo"===e.apiName)return new PermissionInfo(e);var t=require(e.apiName);return new t(e)}return e},PermissionInfo.prototype.describeContents=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"describeContents",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.pm.PermissionInfo"===e.apiName)return new PermissionInfo(e);var t=require(e.apiName);return new t(e)}return e},PermissionInfo.prototype.writeToParcel=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"writeToParcel",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.pm.PermissionInfo"===e.apiName)return new PermissionInfo(e);var t=require(e.apiName);return new t(e)}return e},module.exports=PermissionInfo;