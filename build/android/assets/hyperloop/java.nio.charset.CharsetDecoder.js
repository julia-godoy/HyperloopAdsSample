var Hyperloop=require("hyperloop"),parentPackage=require("java.nio.charset"),CharsetDecoder=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.nio.charset.CharsetDecoder")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.nio.charset.CharsetDecoder. Create a subclass using java.nio.charset.CharsetDecoder.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");CharsetDecoder.prototype=Object.create(SuperClass.prototype),CharsetDecoder.prototype.constructor=CharsetDecoder,Object.defineProperty(CharsetDecoder.prototype,"super",{get:function(){return this._hasPointer?new CharsetDecoder(this.$native.super):null},enumerable:!0}),CharsetDecoder.className="java.nio.charset.CharsetDecoder",CharsetDecoder.prototype.className="java.nio.charset.CharsetDecoder",Object.defineProperty(CharsetDecoder,"class",{get:function(){return Hyperloop.getClass("java.nio.charset.CharsetDecoder")},enumerable:!0,configurable:!1}),CharsetDecoder.extend=function(e){var t=Hyperloop.extend("java.nio.charset.CharsetDecoder"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,l={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},l[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(l),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(CharsetDecoder.prototype),n.prototype.constructor=n,n},CharsetDecoder.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new CharsetDecoder(Hyperloop.cast("java.nio.charset.CharsetDecoder",e.$native)):e},CharsetDecoder.prototype.averageCharsPerByte=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"averageCharsPerByte",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.implFlush=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"implFlush",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.charset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"charset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.maxCharsPerByte=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"maxCharsPerByte",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.decodeLoop=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"decodeLoop",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.onUnmappableCharacter=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onUnmappableCharacter",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.implReset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"implReset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.implOnMalformedInput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"implOnMalformedInput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.decode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"decode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.isCharsetDetected=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isCharsetDetected",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.isAutoDetecting=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isAutoDetecting",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.unmappableCharacterAction=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"unmappableCharacterAction",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.malformedInputAction=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"malformedInputAction",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.flush=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"flush",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.detectedCharset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"detectedCharset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.onMalformedInput=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"onMalformedInput",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.reset=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"reset",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.implReplaceWith=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"implReplaceWith",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.implOnUnmappableCharacter=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"implOnUnmappableCharacter",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.replacement=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"replacement",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},CharsetDecoder.prototype.replaceWith=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"replaceWith",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.charset.CharsetDecoder"===e.apiName)return new CharsetDecoder(e);var t=require(e.apiName);return new t(e)}return e},module.exports=CharsetDecoder;