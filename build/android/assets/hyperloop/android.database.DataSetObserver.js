var Hyperloop=require("hyperloop"),parentPackage=require("android.database"),DataSetObserver=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.database.DataSetObserver")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: android.database.DataSetObserver. Create a subclass using android.database.DataSetObserver.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");DataSetObserver.prototype=Object.create(SuperClass.prototype),DataSetObserver.prototype.constructor=DataSetObserver,Object.defineProperty(DataSetObserver.prototype,"super",{get:function(){return this._hasPointer?new DataSetObserver(this.$native.super):null},enumerable:!0}),DataSetObserver.className="android.database.DataSetObserver",DataSetObserver.prototype.className="android.database.DataSetObserver",Object.defineProperty(DataSetObserver,"class",{get:function(){return Hyperloop.getClass("android.database.DataSetObserver")},enumerable:!0,configurable:!1}),DataSetObserver.extend=function(e){var t=Hyperloop.extend("android.database.DataSetObserver"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(DataSetObserver.prototype),n.prototype.constructor=n,n},DataSetObserver.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new DataSetObserver(Hyperloop.cast("android.database.DataSetObserver",e.$native)):e},DataSetObserver.prototype.onChanged=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onChanged",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.database.DataSetObserver"===e.apiName)return new DataSetObserver(e);var t=require(e.apiName);return new t(e)}return e},DataSetObserver.prototype.onInvalidated=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onInvalidated",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.database.DataSetObserver"===e.apiName)return new DataSetObserver(e);var t=require(e.apiName);return new t(e)}return e},module.exports=DataSetObserver;