var Hyperloop=require("hyperloop"),parentPackage=require("android.content"),ContentResolver=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.content.ContentResolver")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: android.content.ContentResolver. Create a subclass using android.content.ContentResolver.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");ContentResolver.prototype=Object.create(SuperClass.prototype),ContentResolver.prototype.constructor=ContentResolver,Object.defineProperty(ContentResolver.prototype,"super",{get:function(){return this._hasPointer?new ContentResolver(this.$native.super):null},enumerable:!0}),ContentResolver.className="android.content.ContentResolver",ContentResolver.prototype.className="android.content.ContentResolver",Object.defineProperty(ContentResolver,"class",{get:function(){return Hyperloop.getClass("android.content.ContentResolver")},enumerable:!0,configurable:!1}),ContentResolver.extend=function(e){var t=Hyperloop.extend("android.content.ContentResolver"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(ContentResolver.prototype),n.prototype.constructor=n,n},ContentResolver.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new ContentResolver(Hyperloop.cast("android.content.ContentResolver",e.$native)):e},ContentResolver.SYNC_EXTRAS_DO_NOT_RETRY="do_not_retry",ContentResolver.SCHEME_ANDROID_RESOURCE="android.resource",ContentResolver.SYNC_EXTRAS_ACCOUNT="account",ContentResolver.SYNC_EXTRAS_IGNORE_BACKOFF="ignore_backoff",ContentResolver.SYNC_EXTRAS_OVERRIDE_TOO_MANY_DELETIONS="deletions_override",ContentResolver.SYNC_EXTRAS_EXPEDITED="expedited",ContentResolver.SYNC_EXTRAS_FORCE="force",ContentResolver.CURSOR_DIR_BASE_TYPE="vnd.android.cursor.dir",ContentResolver.SYNC_EXTRAS_IGNORE_SETTINGS="ignore_settings",ContentResolver.ANY_CURSOR_ITEM_TYPE="vnd.android.cursor.item/*",ContentResolver.EXTRA_SIZE="android.content.extra.SIZE",ContentResolver.CURSOR_ITEM_BASE_TYPE="vnd.android.cursor.item",ContentResolver.SYNC_OBSERVER_TYPE_PENDING=2,ContentResolver.SYNC_EXTRAS_INITIALIZE="initialize",ContentResolver.SCHEME_CONTENT="content",ContentResolver.SYNC_EXTRAS_MANUAL="force",ContentResolver.SYNC_EXTRAS_UPLOAD="upload",ContentResolver.SYNC_EXTRAS_DISCARD_LOCAL_DELETIONS="discard_deletions",ContentResolver.SYNC_OBSERVER_TYPE_SETTINGS=1,ContentResolver.SYNC_OBSERVER_TYPE_ACTIVE=4,ContentResolver.SCHEME_FILE="file",ContentResolver.requestSync=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"requestSync",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.addPeriodicSync=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"addPeriodicSync",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.getMasterSyncAutomatically=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getMasterSyncAutomatically",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.setMasterSyncAutomatically=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"setMasterSyncAutomatically",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.getCurrentSync=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getCurrentSync",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.isSyncActive=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"isSyncActive",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.validateSyncExtrasBundle=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"validateSyncExtrasBundle",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.getSyncAutomatically=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getSyncAutomatically",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.removeStatusChangeListener=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"removeStatusChangeListener",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.getSyncAdapterTypes=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getSyncAdapterTypes",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.setSyncAutomatically=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"setSyncAutomatically",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.isSyncPending=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"isSyncPending",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.cancelSync=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"cancelSync",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.setIsSyncable=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"setIsSyncable",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.getCurrentSyncs=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getCurrentSyncs",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.getPeriodicSyncs=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getPeriodicSyncs",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.getIsSyncable=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"getIsSyncable",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.removePeriodicSync=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"removePeriodicSync",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.addStatusChangeListener=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"addStatusChangeListener",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.getOutgoingPersistedUriPermissions=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getOutgoingPersistedUriPermissions",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.notifyChange=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"notifyChange",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.startSync=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"startSync",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.insert=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"insert",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.update=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"update",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.acquireContentProviderClient=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"acquireContentProviderClient",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.openTypedAssetFileDescriptor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openTypedAssetFileDescriptor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.delete=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"delete",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.openAssetFileDescriptor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openAssetFileDescriptor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.uncanonicalize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"uncanonicalize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.getPersistedUriPermissions=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getPersistedUriPermissions",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.bulkInsert=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"bulkInsert",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.openFileDescriptor=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openFileDescriptor",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.openOutputStream=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openOutputStream",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.getStreamTypes=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getStreamTypes",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.canonicalize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"canonicalize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.openInputStream=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"openInputStream",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.applyBatch=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"applyBatch",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.unregisterContentObserver=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"unregisterContentObserver",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.takePersistableUriPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"takePersistableUriPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.cancelSync=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"cancelSync",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.query=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"query",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.releasePersistableUriPermission=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"releasePersistableUriPermission",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.call=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"call",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.getType=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getType",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.registerContentObserver=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"registerContentObserver",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},ContentResolver.prototype.acquireUnstableContentProviderClient=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"acquireUnstableContentProviderClient",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.ContentResolver"===e.apiName)return new ContentResolver(e);var t=require(e.apiName);return new t(e)}return e},module.exports=ContentResolver;