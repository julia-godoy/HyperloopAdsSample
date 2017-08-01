var Hyperloop=require("hyperloop"),parentPackage=require("android.view.accessibility"),AccessibilityRecord=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.view.accessibility.AccessibilityRecord")?arguments[0]:AccessibilityRecord.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");AccessibilityRecord.prototype=Object.create(SuperClass.prototype),AccessibilityRecord.prototype.constructor=AccessibilityRecord,Object.defineProperty(AccessibilityRecord.prototype,"super",{get:function(){return this._hasPointer?new AccessibilityRecord(this.$native.super):null},enumerable:!0}),AccessibilityRecord.className="android.view.accessibility.AccessibilityRecord",AccessibilityRecord.prototype.className="android.view.accessibility.AccessibilityRecord",Object.defineProperty(AccessibilityRecord,"class",{get:function(){return Hyperloop.getClass("android.view.accessibility.AccessibilityRecord")},enumerable:!0,configurable:!1}),AccessibilityRecord.extend=function(e){var t=Hyperloop.extend("android.view.accessibility.AccessibilityRecord"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(AccessibilityRecord.prototype),n.prototype.constructor=n,n},AccessibilityRecord.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new AccessibilityRecord(Hyperloop.cast("android.view.accessibility.AccessibilityRecord",e.$native)):e},AccessibilityRecord.obtain=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"obtain",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setSource=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setSource",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setPassword=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setPassword",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setBeforeText=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setBeforeText",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setFullScreen=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setFullScreen",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getAddedCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAddedCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getItemCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getItemCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getContentDescription=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getContentDescription",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setClassName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setClassName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getMaxScrollX=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMaxScrollX",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getMaxScrollY=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMaxScrollY",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getFromIndex=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getFromIndex",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setFromIndex=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setFromIndex",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getScrollX=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getScrollX",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getScrollY=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getScrollY",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.isScrollable=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isScrollable",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setCurrentItemIndex=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setCurrentItemIndex",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setChecked=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setChecked",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.recycle=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"recycle",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setContentDescription=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setContentDescription",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getCurrentItemIndex=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getCurrentItemIndex",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setMaxScrollX=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setMaxScrollX",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setMaxScrollY=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setMaxScrollY",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getToIndex=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getToIndex",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.isPassword=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isPassword",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setToIndex=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setToIndex",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getRemovedCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getRemovedCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getText=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getText",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getBeforeText=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getBeforeText",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.isChecked=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isChecked",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setItemCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setItemCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setEnabled=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setEnabled",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getSource=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSource",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.isEnabled=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isEnabled",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setScrollable=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setScrollable",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setAddedCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setAddedCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getParcelableData=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getParcelableData",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.isFullScreen=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isFullScreen",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getClassName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getClassName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setScrollX=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setScrollX",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setRemovedCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setRemovedCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.getWindowId=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getWindowId",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setScrollY=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setScrollY",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},AccessibilityRecord.prototype.setParcelableData=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setParcelableData",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.view.accessibility.AccessibilityRecord"===e.apiName)return new AccessibilityRecord(e);var t=require(e.apiName);return new t(e)}return e},module.exports=AccessibilityRecord;