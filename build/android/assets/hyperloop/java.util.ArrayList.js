var Hyperloop=require("hyperloop"),parentPackage=require("java.util"),ArrayList=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.util.ArrayList")?arguments[0]:ArrayList.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.util.AbstractList");ArrayList.prototype=Object.create(SuperClass.prototype),ArrayList.prototype.constructor=ArrayList,Object.defineProperty(ArrayList.prototype,"super",{get:function(){return this._hasPointer?new ArrayList(this.$native.super):null},enumerable:!0}),ArrayList.className="java.util.ArrayList",ArrayList.prototype.className="java.util.ArrayList",Object.defineProperty(ArrayList,"class",{get:function(){return Hyperloop.getClass("java.util.ArrayList")},enumerable:!0,configurable:!1}),ArrayList.extend=function(e){var t=Hyperloop.extend("java.util.ArrayList"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,l={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},l[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(l),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(ArrayList.prototype),n.prototype.constructor=n,n},ArrayList.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new ArrayList(Hyperloop.cast("java.util.ArrayList",e.$native)):e},ArrayList.prototype.replaceAll=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"replaceAll",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.remove=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"remove",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.removeAll=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeAll",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.iterator=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"iterator",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.get=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"get",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.toArray=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toArray",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.removeRange=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeRange",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.indexOf=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"indexOf",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.add=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"add",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.subList=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"subList",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.trimToSize=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"trimToSize",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.set=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"set",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.spliterator=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"spliterator",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.forEach=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"forEach",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.isEmpty=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isEmpty",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.clear=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"clear",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.sort=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"sort",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.removeIf=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"removeIf",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.lastIndexOf=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"lastIndexOf",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.contains=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"contains",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.size=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"size",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.addAll=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"addAll",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.clone=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"clone",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.listIterator=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"listIterator",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.ensureCapacity=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"ensureCapacity",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},ArrayList.prototype.retainAll=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"retainAll",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.util.ArrayList"===e.apiName)return new ArrayList(e);var t=require(e.apiName);return new t(e)}return e},module.exports=ArrayList;