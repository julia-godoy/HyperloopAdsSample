var Hyperloop=require("hyperloop"),parentPackage=require("java.nio.file.attribute"),UserPrincipalLookupService=function(){var e;1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("java.nio.file.attribute.UserPrincipalLookupService")?e=arguments[0]:Ti.API.error("Cannot instantiate instance of abstract class: java.nio.file.attribute.UserPrincipalLookupService. Create a subclass using java.nio.file.attribute.UserPrincipalLookupService.extend();"),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.Object");UserPrincipalLookupService.prototype=Object.create(SuperClass.prototype),UserPrincipalLookupService.prototype.constructor=UserPrincipalLookupService,Object.defineProperty(UserPrincipalLookupService.prototype,"super",{get:function(){return this._hasPointer?new UserPrincipalLookupService(this.$native.super):null},enumerable:!0}),UserPrincipalLookupService.className="java.nio.file.attribute.UserPrincipalLookupService",UserPrincipalLookupService.prototype.className="java.nio.file.attribute.UserPrincipalLookupService",Object.defineProperty(UserPrincipalLookupService,"class",{get:function(){return Hyperloop.getClass("java.nio.file.attribute.UserPrincipalLookupService")},enumerable:!0,configurable:!1}),UserPrincipalLookupService.extend=function(e){var t=Hyperloop.extend("java.nio.file.attribute.UserPrincipalLookupService"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,l={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},l[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(l),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(UserPrincipalLookupService.prototype),n.prototype.constructor=n,n},UserPrincipalLookupService.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new UserPrincipalLookupService(Hyperloop.cast("java.nio.file.attribute.UserPrincipalLookupService",e.$native)):e},UserPrincipalLookupService.prototype.lookupPrincipalByGroupName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"lookupPrincipalByGroupName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.file.attribute.UserPrincipalLookupService"===e.apiName)return new UserPrincipalLookupService(e);var t=require(e.apiName);return new t(e)}return e},UserPrincipalLookupService.prototype.lookupPrincipalByName=function(){if(!this._hasPointer)return null;var e=this.$native.callNativeFunction({func:"lookupPrincipalByName",instanceMethod:!0,args:Array.prototype.slice.call(arguments)});if(null==e)return null;if(e.apiName){if("java.nio.file.attribute.UserPrincipalLookupService"===e.apiName)return new UserPrincipalLookupService(e);var t=require(e.apiName);return new t(e)}return e},module.exports=UserPrincipalLookupService;