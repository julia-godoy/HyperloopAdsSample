var Hyperloop=require("hyperloop"),parentPackage=require("java.lang.reflect"),Constructor=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.lang.reflect.Constructor")?arguments[0]:Constructor.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.reflect.Executable");Constructor.prototype=Object.create(SuperClass.prototype),Constructor.prototype.constructor=Constructor,Object.defineProperty(Constructor.prototype,"super",{get:function(){return this._hasPointer?new Constructor(this.$native.super):null},enumerable:!0}),Constructor.className="java.lang.reflect.Constructor",Constructor.prototype.className="java.lang.reflect.Constructor",Object.defineProperty(Constructor,"class",{get:function(){return Hyperloop.getClass("java.lang.reflect.Constructor")},enumerable:!0,configurable:!1}),Constructor.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new Constructor(Hyperloop.cast("java.lang.reflect.Constructor",e.$native)):e},Constructor.prototype.getName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getParameterCount=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getParameterCount",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.isVarArgs=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isVarArgs",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.isSynthetic=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"isSynthetic",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getParameterTypes=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getParameterTypes",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.newInstance=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"newInstance",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getGenericExceptionTypes=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getGenericExceptionTypes",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getAnnotatedReceiverType=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAnnotatedReceiverType",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getDeclaredAnnotations=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDeclaredAnnotations",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getDeclaringClass=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getDeclaringClass",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getExceptionTypes=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getExceptionTypes",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getGenericParameterTypes=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getGenericParameterTypes",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getAnnotation=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAnnotation",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.hashCode=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"hashCode",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.equals=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"equals",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.toGenericString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toGenericString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.toString=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"toString",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getModifiers=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getModifiers",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getTypeParameters=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getTypeParameters",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getParameterAnnotations=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getParameterAnnotations",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},Constructor.prototype.getAnnotatedReturnType=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"getAnnotatedReturnType",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.lang.reflect.Constructor"===e.apiName)return new Constructor(e);var t=require(e.apiName);return new t(e)}return e},module.exports=Constructor;