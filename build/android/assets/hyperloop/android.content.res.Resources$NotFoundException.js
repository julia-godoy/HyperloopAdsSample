var Hyperloop=require("hyperloop"),EnclosingClass=require("android.content.res.Resources"),NotFoundException=function(){var e;e=1==arguments.length&&arguments[0].isNativeProxy&&arguments[0].isInstanceProxy&&arguments[0].isInstanceOf("android.content.res.Resources$NotFoundException")?arguments[0]:NotFoundException.class.newInstance(arguments),this.$native=e,this._hasPointer=null!=e,this._private={}},SuperClass=require("java.lang.RuntimeException");NotFoundException.prototype=Object.create(SuperClass.prototype),NotFoundException.prototype.constructor=NotFoundException,Object.defineProperty(NotFoundException.prototype,"super",{get:function(){return this._hasPointer?new NotFoundException(this.$native.super):null},enumerable:!0}),NotFoundException.className="android.content.res.Resources$NotFoundException",NotFoundException.prototype.className="android.content.res.Resources$NotFoundException",Object.defineProperty(NotFoundException,"class",{get:function(){return Hyperloop.getClass("android.content.res.Resources$NotFoundException")},enumerable:!0,configurable:!1}),NotFoundException.extend=function(e){var t=Hyperloop.extend("android.content.res.Resources$NotFoundException"),n=function(){function n(e){if(e.apiName&&e.isNativeProxy&&e.isInstanceProxy){var t=require(e.apiName);return new t(e)}return e}function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=n(arguments[t]);return e}var i=t.newInstance(arguments),a=this,o=e,u={};Object.keys(o).forEach(function(e){a[e]=function(){return o[e].apply(a,arguments)},u[e]=function(){return a[e].apply(a,r.apply(this,arguments))}}),i.setOverrides(u),this.$native=i,this._hasPointer=null!=i,this._private={}};return n.prototype=Object.create(NotFoundException.prototype),n.prototype.constructor=n,n},NotFoundException.cast=function(e){return e.$native&&e.$native.isInstanceProxy?new NotFoundException(Hyperloop.cast("android.content.res.Resources$NotFoundException",e.$native)):e},module.exports=NotFoundException;