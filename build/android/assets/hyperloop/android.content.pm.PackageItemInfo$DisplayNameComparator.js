var Hyperloop=require("hyperloop"),EnclosingClass=require("android.content.pm.PackageItemInfo"),DisplayNameComparator=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.content.pm.PackageItemInfo$DisplayNameComparator")?arguments[0]:DisplayNameComparator.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");DisplayNameComparator.prototype=Object.create(SuperClass.prototype),DisplayNameComparator.prototype.constructor=DisplayNameComparator,Object.defineProperty(DisplayNameComparator.prototype,"super",{get:function(){return this._hasPointer?new DisplayNameComparator(this.$native.super):null},enumerable:!0}),DisplayNameComparator.className="android.content.pm.PackageItemInfo$DisplayNameComparator",DisplayNameComparator.prototype.className="android.content.pm.PackageItemInfo$DisplayNameComparator",Object.defineProperty(DisplayNameComparator,"class",{get:function(){return Hyperloop.getClass("android.content.pm.PackageItemInfo$DisplayNameComparator")},enumerable:!0,configurable:!1}),DisplayNameComparator.extend=function(e){var t=Hyperloop.extend("android.content.pm.PackageItemInfo$DisplayNameComparator"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(DisplayNameComparator.prototype),n.prototype.constructor=n,n},DisplayNameComparator.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new DisplayNameComparator(Hyperloop.cast("android.content.pm.PackageItemInfo$DisplayNameComparator",e.$native)):e},DisplayNameComparator.prototype.compare=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"compare",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("android.content.pm.PackageItemInfo$DisplayNameComparator"===e.apiName)return new DisplayNameComparator(e);var t=require(e.apiName);return new t(e)}return e},module.exports=DisplayNameComparator;