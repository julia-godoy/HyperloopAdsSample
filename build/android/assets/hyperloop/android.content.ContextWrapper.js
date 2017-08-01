var Hyperloop=require("hyperloop"),parentPackage=require("android.content"),ContextWrapper=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.content.ContextWrapper")?arguments[0]:ContextWrapper.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("android.content.Context");ContextWrapper.prototype=Object.create(SuperClass.prototype),ContextWrapper.prototype.constructor=ContextWrapper,Object.defineProperty(ContextWrapper.prototype,"super",{get:function(){return this._hasPointer?new ContextWrapper(this.$native.super):null},enumerable:!0}),ContextWrapper.className="android.content.ContextWrapper",ContextWrapper.prototype.className="android.content.ContextWrapper",Object.defineProperty(ContextWrapper,"class",{get:function(){return Hyperloop.getClass("android.content.ContextWrapper")},enumerable:!0,configurable:!1}),ContextWrapper.extend=function(e){var t=Hyperloop.extend("android.content.ContextWrapper"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(ContextWrapper.prototype),n.prototype.constructor=n,n},ContextWrapper.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new ContextWrapper(Hyperloop.cast("android.content.ContextWrapper",e.$native)):e},ContextWrapper.prototype.sendOrderedBroadcast=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendOrderedBroadcast",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getExternalFilesDirs=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getExternalFilesDirs",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.enforceCallingPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"enforceCallingPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getObbDir=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getObbDir",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.sendBroadcastAsUser=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendBroadcastAsUser",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.attachBaseContext=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"attachBaseContext",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getExternalCacheDir=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getExternalCacheDir",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.deleteDatabase=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"deleteDatabase",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.checkSelfPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"checkSelfPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.enforceCallingOrSelfPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"enforceCallingOrSelfPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.openFileInput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openFileInput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.removeStickyBroadcastAsUser=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeStickyBroadcastAsUser",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.checkPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"checkPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.enforceUriPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"enforceUriPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getContentResolver=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getContentResolver",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getPackageResourcePath=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPackageResourcePath",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.databaseList=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"databaseList",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getFilesDir=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFilesDir",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.sendStickyOrderedBroadcastAsUser=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendStickyOrderedBroadcastAsUser",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.fileList=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"fileList",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getExternalMediaDirs=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getExternalMediaDirs",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getWallpaper=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getWallpaper",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getDatabasePath=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDatabasePath",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.enforceCallingOrSelfUriPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"enforceCallingOrSelfUriPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getTheme=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTheme",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getCacheDir=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getCacheDir",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getExternalCacheDirs=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getExternalCacheDirs",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.startIntentSender=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"startIntentSender",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.checkCallingOrSelfPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"checkCallingOrSelfPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getSystemServiceName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSystemServiceName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getCodeCacheDir=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getCodeCacheDir",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.openOrCreateDatabase=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openOrCreateDatabase",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getFileStreamPath=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFileStreamPath",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.startActivities=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"startActivities",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getWallpaperDesiredMinimumHeight=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getWallpaperDesiredMinimumHeight",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.startService=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"startService",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.registerReceiver=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"registerReceiver",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.setTheme=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setTheme",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getPackageManager=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPackageManager",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.sendOrderedBroadcastAsUser=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendOrderedBroadcastAsUser",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getPackageName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPackageName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.bindService=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"bindService",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.isRestricted=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isRestricted",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getObbDirs=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getObbDirs",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.enforceCallingUriPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"enforceCallingUriPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.checkCallingUriPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"checkCallingUriPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.sendBroadcast=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendBroadcast",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getSystemService=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSystemService",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.unbindService=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"unbindService",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.removeStickyBroadcast=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeStickyBroadcast",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.checkCallingOrSelfUriPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"checkCallingOrSelfUriPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getPackageCodePath=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPackageCodePath",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.peekWallpaper=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"peekWallpaper",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getClassLoader=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getClassLoader",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.createConfigurationContext=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"createConfigurationContext",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.openFileOutput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openFileOutput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.startActivity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"startActivity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.createPackageContext=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"createPackageContext",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getBaseContext=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getBaseContext",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getApplicationContext=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getApplicationContext",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.sendStickyBroadcast=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendStickyBroadcast",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getResources=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getResources",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.enforcePermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"enforcePermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getNoBackupFilesDir=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getNoBackupFilesDir",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getSharedPreferences=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSharedPreferences",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.grantUriPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"grantUriPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.checkUriPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"checkUriPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getMainLooper=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMainLooper",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getAssets=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAssets",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getDir=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDir",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getWallpaperDesiredMinimumWidth=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getWallpaperDesiredMinimumWidth",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.startInstrumentation=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"startInstrumentation",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.deleteFile=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"deleteFile",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.clearWallpaper=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"clearWallpaper",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getExternalFilesDir=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getExternalFilesDir",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.sendStickyBroadcastAsUser=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendStickyBroadcastAsUser",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.revokeUriPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"revokeUriPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.setWallpaper=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setWallpaper",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.getApplicationInfo=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getApplicationInfo",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.sendStickyOrderedBroadcast=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sendStickyOrderedBroadcast",instanceMethod:!0,
args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.checkCallingPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"checkCallingPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.unregisterReceiver=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"unregisterReceiver",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.stopService=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"stopService",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},ContextWrapper.prototype.createDisplayContext=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"createDisplayContext",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContextWrapper"===e.apiName)return new ContextWrapper(e);var t=require(e.apiName);return new t(e)}return e},module.exports=ContextWrapper;