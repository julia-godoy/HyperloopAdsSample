var Hyperloop=require("hyperloop"),parentPackage=require("java.util"),IntSummaryStatistics=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.util.IntSummaryStatistics")?arguments[0]:IntSummaryStatistics.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");IntSummaryStatistics.prototype=Object.create(SuperClass.prototype),IntSummaryStatistics.prototype.constructor=IntSummaryStatistics,Object.defineProperty(IntSummaryStatistics.prototype,"super",{get:function(){return this._hasPointer?new IntSummaryStatistics(this.$native.super):null},enumerable:!0}),IntSummaryStatistics.className="java.util.IntSummaryStatistics",IntSummaryStatistics.prototype.className="java.util.IntSummaryStatistics",Object.defineProperty(IntSummaryStatistics,"class",{get:function(){return Hyperloop.getClass("java.util.IntSummaryStatistics")},enumerable:!0,configurable:!1}),IntSummaryStatistics.extend=function(e){var t=Hyperloop.extend("java.util.IntSummaryStatistics"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,l={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},l[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(l),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(IntSummaryStatistics.prototype),n.prototype.constructor=n,n},IntSummaryStatistics.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new IntSummaryStatistics(Hyperloop.cast("java.util.IntSummaryStatistics",e.$native)):e},IntSummaryStatistics.prototype.getMin=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMin",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.IntSummaryStatistics"===e.apiName)return new IntSummaryStatistics(e);var t=require(e.apiName);return new t(e)}return e},IntSummaryStatistics.prototype.getMax=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getMax",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.IntSummaryStatistics"===e.apiName)return new IntSummaryStatistics(e);var t=require(e.apiName);return new t(e)}return e},IntSummaryStatistics.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.IntSummaryStatistics"===e.apiName)return new IntSummaryStatistics(e);var t=require(e.apiName);return new t(e)}return e},IntSummaryStatistics.prototype.getCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.IntSummaryStatistics"===e.apiName)return new IntSummaryStatistics(e);var t=require(e.apiName);return new t(e)}return e},IntSummaryStatistics.prototype.getSum=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getSum",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.IntSummaryStatistics"===e.apiName)return new IntSummaryStatistics(e);var t=require(e.apiName);return new t(e)}return e},IntSummaryStatistics.prototype.getAverage=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAverage",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.IntSummaryStatistics"===e.apiName)return new IntSummaryStatistics(e);var t=require(e.apiName);return new t(e)}return e},IntSummaryStatistics.prototype.accept=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"accept",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.IntSummaryStatistics"===e.apiName)return new IntSummaryStatistics(e);var t=require(e.apiName);return new t(e)}return e},IntSummaryStatistics.prototype.combine=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"combine",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.IntSummaryStatistics"===e.apiName)return new IntSummaryStatistics(e);var t=require(e.apiName);return new t(e)}return e},module.exports=IntSummaryStatistics;