var Hyperloop=require("hyperloop"),parentPackage=require("java.lang"),StringBuilder=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.lang.StringBuilder")?arguments[0]:StringBuilder.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.AbstractStringBuilder");StringBuilder.prototype=Object.create(SuperClass.prototype),StringBuilder.prototype.constructor=StringBuilder,Object.defineProperty(StringBuilder.prototype,"super",{get:function(){return this._hasPointer?new StringBuilder(this.$native.super):null},enumerable:!0}),StringBuilder.className="java.lang.StringBuilder",StringBuilder.prototype.className="java.lang.StringBuilder",Object.defineProperty(StringBuilder,"class",{get:function(){return Hyperloop.getClass("java.lang.StringBuilder")},enumerable:!0,configurable:!1}),StringBuilder.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new StringBuilder(Hyperloop.cast("java.lang.StringBuilder",e.$native)):e},StringBuilder.prototype.deleteCharAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"deleteCharAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.codePointAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"codePointAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.replace=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"replace",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.setCharAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setCharAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.insert=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"insert",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.delete=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"delete",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.substring=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"substring",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.capacity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"capacity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.appendCodePoint=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"appendCodePoint",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.codePointBefore=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"codePointBefore",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.indexOf=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"indexOf",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.codePointCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"codePointCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.trimToSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"trimToSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.getChars=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getChars",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.length=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"length",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.subSequence=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"subSequence",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.reverse=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"reverse",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.lastIndexOf=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"lastIndexOf",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.setLength=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"setLength",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.ensureCapacity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"ensureCapacity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.append=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"append",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.offsetByCodePoints=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"offsetByCodePoints",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},StringBuilder.prototype.charAt=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"charAt",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.StringBuilder"===e.apiName)return new StringBuilder(e);var t=require(e.apiName);return new t(e)}return e},module.exports=StringBuilder;