var Hyperloop=require("hyperloop"),parentPackage=require("java.util.concurrent"),TimeUnit=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.util.concurrent.TimeUnit")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.util.concurrent.TimeUnit. Create a subclass using java.util.concurrent.TimeUnit.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Enum");TimeUnit.prototype=Object.create(SuperClass.prototype),TimeUnit.prototype.constructor=TimeUnit,Object.defineProperty(TimeUnit.prototype,"super",{get:function(){return this._hasPointer?new TimeUnit(this.$native.super):null},enumerable:!0}),TimeUnit.className="java.util.concurrent.TimeUnit",TimeUnit.prototype.className="java.util.concurrent.TimeUnit",Object.defineProperty(TimeUnit,"class",{get:function(){return Hyperloop.getClass("java.util.concurrent.TimeUnit")},enumerable:!0,configurable:!1}),TimeUnit.extend=function(e){var t=Hyperloop.extend("java.util.concurrent.TimeUnit"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,l={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},l[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(l),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(TimeUnit.prototype),n.prototype.constructor=n,n},TimeUnit.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new TimeUnit(Hyperloop.cast("java.util.concurrent.TimeUnit",e.$native)):e},Object.defineProperty(TimeUnit,"MILLISECONDS",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("MILLISECONDS");if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(TimeUnit,"MICROSECONDS",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("MICROSECONDS");if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(TimeUnit,"HOURS",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("HOURS");if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(TimeUnit,"SECONDS",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("SECONDS");if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(TimeUnit,"NANOSECONDS",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("NANOSECONDS");if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(TimeUnit,"DAYS",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("DAYS");if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),Object.defineProperty(TimeUnit,"MINUTES",{get:function(){if(!this.class)return null;var e=this.class.getNativeField("MINUTES");if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},enumerable:!0}),TimeUnit.valueOf=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"valueOf",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.values=function(){if(!this.class)return null;var e=this.class.callNativeFunction({func:"values",instanceMethod:!1,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.timedJoin=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"timedJoin",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.timedWait=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"timedWait",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.convert=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"convert",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.toSeconds=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toSeconds",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.sleep=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sleep",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.toNanos=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toNanos",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.toMinutes=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toMinutes",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.toHours=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toHours",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.toMillis=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toMillis",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.toDays=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toDays",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},TimeUnit.prototype.toMicros=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toMicros",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.concurrent.TimeUnit"===e.apiName)return new TimeUnit(e);var t=require(e.apiName);return new t(e)}return e},module.exports=TimeUnit;