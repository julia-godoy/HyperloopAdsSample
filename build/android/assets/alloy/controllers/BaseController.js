var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._,Controller=function(){function t(){return i.__widgetId?{widgetId:i.__widgetId,name:i.__controllerPath}:i.__controllerPath}var e=[],i=this;this.__iamalloy=!0,_.extend(this,Backbone.Events,{__views:{},__events:[],__proxyProperties:{},setParent:function(t){var i=e.length;if(i){t.__iamalloy?this.parent=t.parent:this.parent=t;for(var r=0;r<i;r++)e[r].__iamalloy?e[r].setParent(this.parent):this.parent.add(e[r])}},addTopLevelView:function(t){e.push(t)},addProxyProperty:function(t,e){this.__proxyProperties[t]=e},removeProxyProperty:function(t){delete this.__proxyProperties[t]},getTopLevelViews:function(){return e},getView:function(t){return"undefined"==typeof t||null===t?e[0]:this.__views[t]},removeView:function(t){delete this[t],delete this.__views[t]},getProxyProperty:function(t){return this.__proxyProperties[t]},getViews:function(){return this.__views},destroy:function(){},getViewEx:function(t){var e=t.recurse||!1;if(e){var i=this.getView();return i?i.__iamalloy?i.getViewEx({recurse:!0}):i:null}return this.getView()},getProxyPropertyEx:function(t,e){var i=e.recurse||!1;if(i){var r=this.getProxyProperty(t);return r?r.__iamalloy?r.getProxyProperty(t,{recurse:!0}):r:null}return this.getView(t)},createStyle:function(e){return Alloy.createStyle(t(),e)},UI:{create:function(e,i){return Alloy.UI.create(t(),e,i)}},addClass:function(e,i,r){return Alloy.addClass(t(),e,i,r)},removeClass:function(e,i,r){return Alloy.removeClass(t(),e,i,r)},resetClass:function(e,i,r){return Alloy.resetClass(t(),e,i,r)},updateViews:function(t){var e=this.getViews();return _.isObject(t)&&_.each(_.keys(t),function(i){var r=e[i.substring(1)];0===i.indexOf("#")&&"#"!==i&&_.isObject(r)&&"function"==typeof r.applyProperties&&r.applyProperties(t[i])}),this},addListener:function(t,e,i){return!t.id&&(t.id=_.uniqueId("__trackId"),_.has(this.__views,t.id))?void Ti.API.error("$.addListener: "+t.id+" was conflict."):(t.addEventListener(e,i),this.__events.push({id:t.id,view:t,type:e,handler:i}),t.id)},getListener:function(t,e){return _.filter(this.__events,function(i,r){return!(t&&t.id!==i.id||e&&e!==i.type)})},removeListener:function(t,e,r){return _.each(this.__events,function(n,s){t&&t.id!==n.id||e&&e!==n.type||r&&r!==n.handler||(n.view.removeEventListener(n.type,n.handler),delete i.__events[s])}),this}})};module.exports=Controller;