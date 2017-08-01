function defineCloud(e){function t(e,t,n){if(void 0===t)throw"Argument "+e+" was not provided!";if(typeof t!=n)throw"Argument "+e+" was an unexpected type! Expected: "+n+", Received: "+typeof t}function n(t,n,r,i){e.debug&&Ti.API.info('ACS Request: { url: "'+t+'", verb: "'+n+'", data: '+JSON.stringify(r)+" })"),y.send(t,n,r,function(t){if(i){var n=t.response||{};t.meta&&"ok"==t.meta.status?(n.success=!0,n.error=!1,n.meta=t.meta,e.debug&&Ti.API.info(JSON.stringify(n))):(n.success=!1,n.error=!0,n.code=t.meta?t.meta.code:t.statusCode,n.message=t.meta?t.meta.message:t.message||t.statusText,e.debug&&Ti.API.error(n.code+": "+n.message)),i(n)}})}function r(e,r){t("data",e,"object"),t("callback",r,"function"),a(this),this.url||(this.url=this.restNamespace+"/"+this.restMethod+".json"),n(this.url,this.verb,e,r)}function i(){r.call(this,2==arguments.length?arguments[0]:{},2==arguments.length?arguments[1]:arguments[0])}function a(e){e.restNamespace||(e.restNamespace=e.property.toLowerCase()),e.restMethod||(e.restMethod=e.method.toLowerCase())}function o(){var e=arguments;r.call(this,2==e.length?e[0]:{},function(t){y.reset(),(2==e.length?e[1]:e[0])(t)})}function u(e,t){e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t;for(var n=Array(80),r=1732584193,i=-271733879,a=-1732584194,o=271733878,u=-1009589776,s=0;s<e.length;s+=16){for(var c=r,p=i,f=a,v=o,h=u,d=0;80>d;d++){n[d]=16>d?e[s+d]:(n[d-3]^n[d-8]^n[d-14]^n[d-16])<<1|(n[d-3]^n[d-8]^n[d-14]^n[d-16])>>>31;var y,m=r<<5|r>>>27;y=20>d?i&a|~i&o:40>d?i^a^o:60>d?i&a|i&o|a&o:i^a^o,m=l(l(m,y),l(l(u,n[d]),20>d?1518500249:40>d?1859775393:60>d?-1894007588:-899497514)),u=o,o=a,a=i<<30|i>>>2,i=r,r=m}r=l(r,c),i=l(i,p),a=l(a,f),o=l(o,v),u=l(u,h)}return[r,i,a,o,u]}function l(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function s(e){for(var t=[],n=(1<<d)-1,r=0;r<e.length*d;r+=d)t[r>>5]|=(e.charCodeAt(r/d)&n)<<32-d-r%32;return t}function c(e,t,n,r,i){var a=!1;return this.appKey=e,this.oauthKey=t,this.oauthSecret=n,this.apiBaseURL=r?r:p.sdk.url.baseURL,this.authBaseURL=i?i:p.sdk.url.authBaseURL,this.useThreeLegged=function(e){a=e,this.oauthKey||(this.oauthKey=this.appKey)},this.isThreeLegged=function(){return a},this}var p,f={PROPERTY_TYPE_ONLY_LATEST:0,PROPERTY_TYPE_SLASH_COMBINE:1,PROPERTY_TYPE_IGNORE:2};f.build=function e(t,n){var r,i=n.children||[];for(r in i)if(i.hasOwnProperty(r)){var a=i[r],o=a.propertyTypes||n.propertyTypes||{};o.children=f.PROPERTY_TYPE_IGNORE;for(var u in n)if(n.hasOwnProperty(u))switch(o[u]||f.PROPERTY_TYPE_ONLY_LATEST){case f.PROPERTY_TYPE_ONLY_LATEST:a[u]=void 0===a[u]?n[u]:a[u];break;case f.PROPERTY_TYPE_SLASH_COMBINE:var l=[];n[u]&&l.push(n[u]),a[u]&&l.push(a[u]),a[u]=l.join("/")}a.method&&!a.children?t[a.method]=function(e){return function(){return e.executor.apply(e,arguments)}}(a):a.property&&e(t[a.property]={},a)}},f.build(e,{verb:"GET",executor:r,children:[{method:"sendRequest",executor:function(e,r){t("params",e,"object"),t("url",e.url,"string"),t("method",e.method,"string"),t("callback",r,"function"),n(e.url,e.method,e.data?e.data:{},r)}},{method:"createX509CertificatePinningSecurityManager",executor:function(e){var t=!0;try{var n=require("appcelerator.https")}catch(e){Ti.API.error(e+" SecurityManager not set."),t=!1}t&&(e=n.createX509CertificatePinningSecurityManager(e),p.js.sdk.utils.setSecurityManager(e))}},{method:"hasStoredSession",executor:function(){return Ti.API.warn("Cloud.hasStoredSession has been deprecated. Use Cloud.sessionId property"),y.hasStoredSession()}},{method:"retrieveStoredSession",executor:function(){return Ti.API.warn("Cloud.retrieveStoredSession has been deprecated. Use Cloud.sessionId property"),y.retrieveStoredSession()}},{property:"ACLs",children:[{method:"create",verb:"POST"},{method:"update",verb:"PUT"},{method:"show"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"addUser",restMethod:"add",verb:"POST"},{method:"removeUser",restMethod:"remove",verb:"DELETE"},{method:"checkUser",restMethod:"check"}]},{property:"Chats",children:[{method:"create",verb:"POST"},{method:"query"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"queryChatGroups",restMethod:"query_chat_groups",executor:i},{method:"getChatGroups",restMethod:"get_chat_groups",executor:i}]},{property:"Checkins",children:[{method:"create",verb:"POST"},{method:"query",executor:i},{method:"show"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Clients",children:[{method:"geolocate",executor:i}]},{property:"Objects",executor:function(e,n){var i;e&&"object"==typeof e&&(t("data.classname",e.classname,"string"),a(this),this.url=this.restNamespace+"/"+e.classname+"/"+this.restMethod+".json",i=e.classname,delete e.classname),r.call(this,e,n),e.classname=i},children:[{method:"create",verb:"POST"},{method:"show"},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"query"}]},{property:"Emails",restNamespace:"custom_mailer",children:[{method:"send",verb:"POST",restMethod:"email_from_template"}]},{property:"Events",children:[{method:"create",verb:"POST"},{method:"show"},{method:"showOccurrences",restMethod:"show/occurrences"},{method:"query",executor:i},{method:"queryOccurrences",restMethod:"query/occurrences",executor:i},{method:"search",executor:i},{method:"searchOccurrences",restMethod:"search/occurrences",executor:i},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Files",children:[{method:"create",verb:"POST"},{method:"query",executor:i},{method:"show"},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Friends",children:[{method:"add",verb:"POST"},{method:"requests",executor:i},{method:"approve",verb:"PUT"},{method:"remove",verb:"DELETE"},{method:"search"}]},{property:"GeoFences",restNamespace:"geo_fences",children:[{method:"create",verb:"POST"},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"query"}]},{property:"KeyValues",children:[{method:"set",verb:"PUT"},{method:"get"},{method:"append",verb:"PUT"},{method:"increment",restMethod:"incrby",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Likes",children:[{method:"create",verb:"POST"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Messages",children:[{method:"create",verb:"POST"},{method:"reply",verb:"POST"},{method:"show"},{method:"showInbox",restMethod:"show/inbox",executor:i},{method:"showSent",restMethod:"show/sent",executor:i},{method:"showThreads",restMethod:"show/threads",executor:i},{method:"showThread",restMethod:"show/thread"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"removeThread",restMethod:"delete/thread",verb:"DELETE"}]},{property:"Photos",children:[{method:"create",verb:"POST"},{method:"show"},{method:"search"},{method:"query",executor:i},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"PhotoCollections",restNamespace:"collections",children:[{method:"create",verb:"POST"},{method:"show"},{method:"update",verb:"PUT"},{method:"search"},{method:"showSubcollections",restMethod:"show/subcollections"},{method:"showPhotos",restMethod:"show/photos"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Places",children:[{method:"create",verb:"POST"},{method:"search",executor:i},{method:"show"},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"query",executor:i}]},{property:"Posts",children:[{method:"create",verb:"POST"},{method:"show"},{method:"query",executor:i},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"PushNotifications",restNamespace:"push_notification",verb:"POST",children:[{method:"subscribe"},{method:"unsubscribe",verb:"DELETE"},{method:"notify"},{method:"query",verb:"GET"},{method:"subscribeToken",restMethod:"subscribe_token"},{method:"unsubscribeToken",restMethod:"unsubscribe_token",verb:"DELETE"},{method:"updateSubscription",restMethod:"subscription/update",verb:"PUT"},{method:"notifyTokens",restMethod:"notify_tokens"},{method:"resetBadge",restMethod:"reset_badge",verb:"PUT"},{method:"setBadge",restMethod:"set_badge",verb:"PUT",executor:i},{method:"queryChannels",restMethod:"channels/query",verb:"GET",executor:i},{method:"showChannels",restMethod:"channels/show",verb:"GET"}]},{property:"PushSchedules",restNamespace:"push_schedules",children:[{method:"create",restMethod:"create",verb:"POST"},{method:"query",restMethod:"query",executor:i},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Reviews",children:[{method:"create",verb:"POST"},{method:"show"},{method:"query"},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"SocialIntegrations",restNamespace:"users",children:[{method:"externalAccountLogin",restMethod:"external_account_login",verb:"POST"},{method:"externalAccountLink",restMethod:"external_account_link",verb:"POST"},{method:"externalAccountUnlink",restMethod:"external_account_unlink",verb:"DELETE"},{method:"searchFacebookFriends",restNamespace:"social",restMethod:"facebook/search_friends",executor:i}]},{property:"Statuses",children:[{method:"create",verb:"POST"},{method:"update",verb:"PUT"},{method:"show"},{method:"search"},{method:"query",executor:i},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Users",children:[{method:"create",verb:"POST"},{method:"login",verb:"POST"},{method:"show"},{method:"showMe",restMethod:"show/me",executor:function(e){r.call(this,{},e)}},{method:"search",executor:i},{method:"query",executor:i},{method:"update",verb:"PUT"},{method:"logout",executor:o},{method:"remove",restMethod:"delete",verb:"DELETE",executor:o},{method:"requestResetPassword",restMethod:"request_reset_password"},{method:"resendConfirmation",restMethod:"resend_confirmation"}]}]});var v;null==v&&(v={}),v.setProperties=function(e,t){if(null!=e&&null!=t)for(var n in t)e[n]=t[n];return e},v.setProperties(v,{percentEncode:function(e){if(null==e)return"";if(e instanceof Array){for(var t="";0<e.length;++e)""!=t&&(t+="&"),t+=v.percentEncode(e[0]);return t}return e=encodeURIComponent(e),e=e.replace(/\!/g,"%21"),e=e.replace(/\*/g,"%2A"),e=e.replace(/\'/g,"%27"),e=e.replace(/\(/g,"%28"),e=e.replace(/\)/g,"%29")},decodePercent:function(e){return null!=e&&(e=e.replace(/\+/g," ")),decodeURIComponent(e)},getParameterList:function(e){if(null==e)return[];if("object"!=typeof e)return v.decodeForm(e+"");if(e instanceof Array)return e;var t,n=[];for(t in e)n.push([t,e[t]]);return n},getParameterMap:function(e){if(null==e)return{};if("object"!=typeof e)return v.getParameterMap(v.decodeForm(e+""));if(e instanceof Array){for(var t={},n=0;n<e.length;++n){var r=e[n][0];void 0===t[r]&&(t[r]=e[n][1])}return t}return e},getParameter:function(e,t){if(!(e instanceof Array))return v.getParameterMap(e)[t];for(var n=0;n<e.length;++n)if(e[n][0]==t)return e[n][1];return null},formEncode:function(e){for(var t="",e=v.getParameterList(e),n=0;n<e.length;++n){var r=e[n][1];null==r&&(r=""),""!=t&&(t+="&"),t+=v.percentEncode(e[n][0])+"="+v.percentEncode(r)}return t},decodeForm:function(e){for(var t=[],e=e.split("&"),n=0;n<e.length;++n){var r=e[n];if(""!=r){var i,a=r.indexOf("=");0>a?(i=v.decodePercent(r),r=null):(i=v.decodePercent(r.substring(0,a)),r=v.decodePercent(r.substring(a+1))),t.push([i,r])}}return t},setParameter:function(e,t,n){var r=e.parameters;if(r instanceof Array){for(e=0;e<r.length;++e)r[e][0]==t&&(void 0===n?r.splice(e,1):(r[e][1]=n,n=void 0));void 0!==n&&r.push([t,n])}else r=v.getParameterMap(r),r[t]=n,e.parameters=r},setParameters:function(e,t){for(var n=v.getParameterList(t),r=0;r<n.length;++r)v.setParameter(e,n[r][0],n[r][1])},completeRequest:function(e,t){null==e.method&&(e.method="GET");var n=v.getParameterMap(e.parameters);null==n.oauth_consumer_key&&v.setParameter(e,"oauth_consumer_key",t.consumerKey||""),null==n.oauth_token&&null!=t.token&&v.setParameter(e,"oauth_token",t.token),null==n.oauth_version&&v.setParameter(e,"oauth_version","1.0"),null==n.oauth_timestamp&&v.setParameter(e,"oauth_timestamp",v.timestamp()),null==n.oauth_nonce&&v.setParameter(e,"oauth_nonce",v.nonce(6)),v.SignatureMethod.sign(e,t)},setTimestampAndNonce:function(e){v.setParameter(e,"oauth_timestamp",v.timestamp()),v.setParameter(e,"oauth_nonce",v.nonce(6))},addToURL:function(e,t){if(newURL=e,null!=t){var n=v.formEncode(t);0<n.length&&(newURL=0>e.indexOf("?")?newURL+"?":newURL+"&",newURL+=n)}return newURL},getAuthorizationHeader:function(e,t){for(var n='OAuth realm="'+v.percentEncode(e)+'"',r=v.getParameterList(t),i=0;i<r.length;++i){var a=r[i],o=a[0];0==o.indexOf("oauth_")&&(n+=","+v.percentEncode(o)+'="'+v.percentEncode(a[1])+'"')}return n},correctTimestamp:function(e){v.timeCorrectionMsec=1e3*e-(new Date).getTime()},timeCorrectionMsec:0,timestamp:function(){var e=(new Date).getTime()+v.timeCorrectionMsec;return Math.floor(e/1e3)},nonce:function(e){for(var t=v.nonce.CHARS,n="",r=0;r<e;++r)var i=Math.floor(Math.random()*t.length),n=n+t.substring(i,i+1);return n}}),v.nonce.CHARS="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",v.declareClass=function(e,t,n){var r=e[t];if(e[t]=n,null!=n&&null!=r)for(var i in r)"prototype"!=i&&(n[i]=r[i]);return n},v.declareClass(v,"SignatureMethod",function(){}),v.setProperties(v.SignatureMethod.prototype,{sign:function(e){var t=this.getSignature(v.SignatureMethod.getBaseString(e));return v.setParameter(e,"oauth_signature",t),t},initialize:function(e,t){var n;n=null!=t.accessorSecret&&9<e.length&&"-Accessor"==e.substring(e.length-9)?t.accessorSecret:t.consumerSecret,this.key=v.percentEncode(n)+"&"+v.percentEncode(t.tokenSecret)}}),v.setProperties(v.SignatureMethod,{sign:function(e,t){var n=v.getParameterMap(e.parameters).oauth_signature_method;null!=n&&""!=n||(n="HMAC-SHA1",v.setParameter(e,"oauth_signature_method",n)),v.SignatureMethod.newMethod(n,t).sign(e)},newMethod:function(e,t){var n=v.SignatureMethod.REGISTERED[e];if(null!=n){var r=new n;return r.initialize(e,t),r}var n=Error("signature_method_rejected"),i="";for(r in v.SignatureMethod.REGISTERED)""!=i&&(i+="&"),i+=v.percentEncode(r);throw n.oauth_acceptable_signature_methods=i,n},REGISTERED:{},registerMethodClass:function(e,t){for(var n=0;n<e.length;++n)v.SignatureMethod.REGISTERED[e[n]]=t},makeSubclass:function(e){var t=v.SignatureMethod,n=function(){t.call(this)};return n.prototype=new t,n.prototype.getSignature=e,n.prototype.constructor=n},getBaseString:function(e){var t=e.action,n=t.indexOf("?");if(0>n)n=e.parameters;else for(var n=v.decodeForm(t.substring(n+1)),r=v.getParameterList(e.parameters),i=0;i<r.length;++i)n.push(r[i]);return v.percentEncode(e.method.toUpperCase())+"&"+v.percentEncode(v.SignatureMethod.normalizeUrl(t))+"&"+v.percentEncode(v.SignatureMethod.normalizeParameters(n))},normalizeUrl:function(e){var t=v.SignatureMethod.parseUri(e),e=t.protocol.toLowerCase(),n=t.authority.toLowerCase();if("http"==e&&80==t.port||"https"==e&&443==t.port){var r=n.lastIndexOf(":");0<=r&&(n=n.substring(0,r))}return(t=t.path)||(t="/"),e+"://"+n+t},parseUri:function(e){for(var t="source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","),e=/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),n={},r=14;r--;)n[t[r]]=e[r]||"";return n},normalizeParameters:function(e){if(null==e)return"";for(var t=v.getParameterList(e),e=[],n=0;n<t.length;++n){var r=t[n];"oauth_signature"!=r[0]&&e.push([v.percentEncode(r[0])+" "+v.percentEncode(r[1]),r])}for(e.sort(function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0}),t=[],n=0;n<e.length;++n)t.push(e[n][1]);return v.formEncode(t)}}),v.SignatureMethod.registerMethodClass(["PLAINTEXT","PLAINTEXT-Accessor"],v.SignatureMethod.makeSubclass(function(){return this.key})),v.SignatureMethod.registerMethodClass(["HMAC-SHA1","HMAC-SHA1-Accessor"],v.SignatureMethod.makeSubclass(function(e){h="=";var t=this.key,n=s(t);16<n.length&&(n=u(n,t.length*d));for(var r=Array(16),t=Array(16),i=0;16>i;i++)r[i]=909522486^n[i],t[i]=1549556828^n[i];for(e=u(r.concat(s(e)),512+e.length*d),e=u(t.concat(e),672),n="",t=0;t<4*e.length;t+=3)for(r=(e[t>>2]>>8*(3-t%4)&255)<<16|(e[t+1>>2]>>8*(3-(t+1)%4)&255)<<8|e[t+2>>2]>>8*(3-(t+2)%4)&255,i=0;4>i;i++)n=8*t+6*i>32*e.length?n+h:n+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r>>6*(3-i)&63);return n}));var h="",d=8;c.prototype.sendRequest=function(e,t,n,r){var i=p.js.sdk.utils.getAuthType(this);if(i==p.constants.unknown)r(p.constants.noAppKeyError);else{var a=this.apiBaseURL+"/"+p.sdk.url.version+"/"+e,a=i==p.constants.app_key?a+(p.constants.keyParam+this.appKey):a+(p.constants.oauthKeyParam+this.oauthKey);if(null==n&&(n={}),t=t?t.toUpperCase():p.constants.get_method,n[p.constants.suppressCode]="true",!this.isThreeLegged()){var o=p.js.sdk.utils.getCookie(p.constants.sessionId);o||(o=this.session_id),o&&(a=-1!=a.indexOf("?")?a+("&"+p.constants.sessionId+"="+o):a+("?"+p.constants.sessionId+"="+o))}if(this.isThreeLegged()&&(!this.accessToken&&(o=this.getSession())&&(this.accessToken=o.access_token),this.accessToken&&(n[p.constants.accessToken]=this.accessToken)),o=n,Ti.App.analytics){var u=o.analytics||{};u.id=Ti.Platform.createUUID(),Ti.Platform.id&&(u.mid=Ti.Platform.id),u.aguid=Ti.App.guid,u.event="cloud."+e.replace(/\//g,".").replace(/\.json/,""),u.deploytype=Ti.App.deployType||"development",u.sid=Ti.App.sessionId,o.ti_analytics=JSON.stringify(u)}if(n=p.js.sdk.utils.cleanInvalidData(n),e=p.js.sdk.utils.getFileObject(n)){try{var l;if(l=e.toString().match(/TiFilesystemFile/)?e.read():e,!l)return void r(p.constants.fileLoadError);n[p.constants.file]?(delete n[p.constants.file],n[p.constants.file]=l):n[p.constants.photo]&&(delete n[p.constants.photo],n[p.constants.photo]=l)}catch(e){return void r(p.constants.fileLoadError)}l={},i!=p.constants.oauth&&i!=p.constants.three_legged_oauth||(i={method:t,action:a,parameters:[]},p.js.sdk.utils.populateOAuthParameters(i.parameters,this.oauthKey),this.oauthSecret&&v.completeRequest(i,{consumerSecret:this.oauthSecret}),l[p.constants.oauth_header]=v.getAuthorizationHeader("",i.parameters))}else if(l={},i==p.constants.oauth||i==p.constants.three_legged_oauth){var s,i={method:t,action:a,parameters:[]};for(s in n)n.hasOwnProperty(s)&&i.parameters.push([s,n[s]]);p.js.sdk.utils.populateOAuthParameters(i.parameters,this.oauthKey),this.oauthSecret&&v.completeRequest(i,{consumerSecret:this.oauthSecret}),l[p.constants.oauth_header]=v.getAuthorizationHeader("",i.parameters)}p.js.sdk.utils.sendAppceleratorRequest(a,t,n,l,r,this)}},c.prototype.sendAuthRequest=function(e){if(p.js.sdk.utils.getAuthType(this)!==p.constants.three_legged_oauth)alert("wrong authorization type!");else{var e=e||{},t=this.authBaseURL,t=t+"/oauth/authorize"+(p.constants.oauthKeyParam+this.oauthKey),t=t+(p.constants.clientIdParam+this.oauthKey),t=t+(p.constants.responseTypeParam+"token"),e=e.params||{};e.action="login",e.url=t;var n=this,r=e.cb;r&&delete e.cb,p.js.sdk.ui(e,function(e){n.saveSession(e),r&&r(e)})}},c.prototype.signUpRequest=function(e){if(p.js.sdk.utils.getAuthType(this)!==p.constants.three_legged_oauth)alert("wrong authorization type!");else{var e=e||{},t=this.authBaseURL,t=t+"/users/sign_up"+(p.constants.oauthKeyParam+this.oauthKey),t=t+(p.constants.clientIdParam+this.oauthKey),e=e.params||{};e.action="signup",e.url=t;var n=this,r=e.cb;r&&delete e.cb,p.js.sdk.ui(e,function(e){n.saveSession(e),r&&r(e)})}},c.prototype.saveSession=function(e){return e&&e.access_token?(p.js.sdk.utils.setCookie(p.constants.accessToken,e.access_token),p.js.sdk.utils.setCookie(p.constants.expiresIn,e.expires_in),this.accessToken=e.access_token,this.expiresIn=e.expires_in,this.authorized=!0):this.authorized=!1},c.prototype.getSession=function(){var e={};return e.access_token=p.js.sdk.utils.getCookie(p.constants.accessToken),e.expires_in=p.js.sdk.utils.getCookie(p.constants.expiresIn),e.access_token?(this.accessToken=e.access_token,this.expiresIn=e.expires_in,this.authorized=!0,e):this.authorized=!1},c.prototype.clearSession=function(){p.js.sdk.utils.setCookie(p.constants.accessToken,""),p.js.sdk.utils.setCookie(p.constants.expiresIn,""),delete this.accessToken,delete this.expiresIn,this.authorized=!1},c.prototype.checkStatus=function(){return!!this.getSession()},p=void 0,p={constants:{},js:{}},p.js.sdk={},p.js.sdk.utils={},p.sdk={},p.sdk.url={},p.sdk.url.baseURL="https://api.cloud.appcelerator.com",p.sdk.url.authBaseURL="https://secure-identity.cloud.appcelerator.com",p.sdk.url.version="v1",p.constants.get_method="GET",p.constants.post_method="POST",p.constants.put_method="PUT",p.constants.delete_method="DELETE",p.constants.app_key=1,p.constants.oauth=2,p.constants.three_legged_oauth=3,p.constants.unknown=-1,p.constants.keyParam="?key=",p.constants.oauthKeyParam="?oauth_consumer_key=",p.constants.clientIdParam="&client_id=",p.constants.redirectUriParam="&redirect_uri=",p.constants.responseTypeParam="&response_type=",p.constants.accessToken="access_token",p.constants.expiresIn="expires_in",p.constants.appKey="app_key",p.constants.json="json",p.constants.sessionId="_session_id",p.constants.sessionCookieName="Cookie",p.constants.responseCookieName="Set-Cookie",p.constants.file="file",p.constants.suppressCode="suppress_response_codes",p.constants.response_wrapper="response_wrapper",p.constants.photo="photo",p.constants.method="_method",p.constants.name="name",p.constants.value="value",p.constants.oauth_header="Authorization",p.constants.noAppKeyError={meta:{status:"fail",code:409,message:"Application key is not provided."}},p.constants.fileLoadError={meta:{status:"fail",code:400,message:"Unable to load file"}},p.js.sdk.utils.getSessionParams=function(){var e=null,t=p.js.sdk.utils.getCookie(p.constants.sessionId);return t&&(e=p.constants.sessionId+"="+t),e},p.js.sdk.utils.cookieMap=[],p.js.sdk.utils.cookieMap[p.constants.sessionId]="sessionId",p.js.sdk.utils.cookieMap[p.constants.accessToken]="accessToken",p.js.sdk.utils.cookieMap[p.constants.expiresIn]="expiresIn",p.js.sdk.utils.securityManager=null,p.js.sdk.utils.getCookie=function(t){return(t=p.js.sdk.utils.cookieMap[t])&&e[t]||null},p.js.sdk.utils.setCookie=function(t,n){var r=p.js.sdk.utils.cookieMap[t];r&&(""===n?delete e[r]:e[r]=n)},p.js.sdk.utils.deleteCookie=function(t){(t=p.js.sdk.utils.cookieMap[t])&&delete e[t]},p.js.sdk.utils.getAuthType=function(e){if(e){if(e.isThreeLegged())return p.constants.three_legged_oauth;if(e.appKey)return p.constants.app_key;if(e.oauthKey&&e.oauthSecret)return p.constants.oauth}return p.constants.unknown},p.js.sdk.utils.getFileObject=function(e){if(e)for(var t in e)if(e.hasOwnProperty(t)&&(t==p.constants.photo||t==p.constants.file))return e[t];return null},p.js.sdk.utils.cleanInvalidData=function(e){if(e){for(var t in e)if(e.hasOwnProperty(t)){if(null==e[t]&&delete e[t],"object"==typeof e[t]){if(t==p.constants.photo||t==p.constants.file)continue;e[t]=JSON.stringify(e[t])}!0!==e[t]&&!1!==e[t]||(e[t]=e[t]?1:0)}return e}return{}},p.js.sdk.utils.uploadMessageCallback=function(e){return e&&e.data?JSON.parse(e.data):{}},p.js.sdk.utils.getOAuthParameters=function(e){var t="";if(e)for(var e=v.getParameterList(e),n=0;n<e.length;++n){var r=e[n],i=r[0];0==i.indexOf("oauth_")&&"oauth_token"!=i&&(t+="&"+v.percentEncode(i)+"="+v.percentEncode(r[1]))}return 0<t.length&&(t=t.substring(1)),t},p.js.sdk.utils.populateOAuthParameters=function(e,t){e&&t&&(e.push(["oauth_version","1.0"]),e.push(["oauth_consumer_key",t]),e.push(["oauth_signature_method","HMAC-SHA1"]),e.push(["oauth_nonce",v.nonce(15)]))},p.js.sdk.utils.sendAppceleratorRequest=function(t,n,r,i,a,o){var u=Ti.Network.createHTTPClient({timeout:6e4,onsendstream:function(n){e.onsendstream&&e.onsendstream({url:t,progress:n.progress})},ondatastream:function(n){e.ondatastream&&e.ondatastream({url:t,progress:n.progress})},onerror:function(e){var t={};if(this.responseText){var n=this.responseText;try{(n=n.trim())&&0<n.length&&(t=JSON.parse(n))}catch(e){t=e}}t.message||(t.message=e.error),t.error=!0,t.statusText=this.statusText,t.status=this.status,t.meta&&(t.metaString=JSON.stringify(t.meta)),a(t)},onload:function(){var e=JSON.parse(this.responseText);if(e&&e.meta&&(e.metaString=JSON.stringify(e.meta),e.meta.session_id)){var t=e.meta.session_id;p.js.sdk.utils.setCookie(p.constants.sessionId,t),o.session_id=t}a(e)},securityManager:p.js.sdk.utils.securityManager}),l=t;if(n.toUpperCase()==p.constants.get_method||n.toUpperCase()==p.constants.delete_method){var s,c="";for(s in r)r.hasOwnProperty(s)&&(c+="&"+s+"="+v.percentEncode(r[s]));0<c.length&&(l=0<t.indexOf("?")?l+c:l+("?"+c.substring(1)),r={})}if(e.debug&&(Ti.API.info(n+": "+l),Ti.API.info("header: "+JSON.stringify(i)),Ti.API.info("data: "+JSON.stringify(r))),u.open(n,l),"mobileweb"!=Ti.Platform.osname&&u.setRequestHeader("Accept-Encoding","gzip,deflate"),i)for(s in i)i.hasOwnProperty(s)&&u.setRequestHeader(s,i[s]);u.send(r)},p.js.sdk.utils.decodeQS=function(e){var t,n,r=decodeURIComponent,i={},e=e.split("&");for(t=0;t<e.length;t++)(n=e[t].split("=",2))&&n[0]&&(i[r(n[0])]=r(n[1]));return i},p.js.sdk.utils.guid=function(){return"f"+(1073741824*Math.random()).toString(16).replace(".","")},p.js.sdk.utils.copy=function(e,t,n,r){for(var i in t)(n||"undefined"==typeof e[i])&&(e[i]=r?r(t[i]):t[i]);return e},p.js.sdk.utils.setSecurityManager=function(e){p.js.sdk.utils.securityManager=e};var y={session:null,fetchSetting:function(e,t){var n,r="production"==Ti.App.deployType.toLowerCase()?"production":"development";return(n=Ti.App.Properties.getString(e+"-"+r))&&"undefined"!=n||(n=Ti.App.Properties.getString(e))&&"undefined"!=n?n:t},fetchSession:function(){var e=y.fetchSetting("acs-api-key",null),t=y.fetchSetting("acs-base-url",p.sdk.url.baseURL),n=y.fetchSetting("acs-authbase-url",p.sdk.url.authBaseURL),r=y.fetchSetting("acs-oauth-key",null),i=y.fetchSetting("acs-oauth-secret",null);return new c(e,r,i,t,n)}};return y.getSession=function(){return null==y.session&&(y.session=y.fetchSession()),y.session},y.send=function(e,t,n,r){y.getSession().sendRequest(e,t,n,r)},y.hasStoredSession=function(){return!!p.js.sdk.utils.getCookie(p.constants.sessionId)},y.retrieveStoredSession=function(){return p.js.sdk.utils.getCookie(p.constants.sessionId)},y.reset=function(){p.js.sdk.utils.deleteCookie(p.constants.sessionId),y.session&&(y.session.clearSession(),y.session=null)},y.secureSend=function(e,t){var n=y.getSession();n.useThreeLegged(!0),"secureCreate"===e?n.signUpRequest(t):"secureLogin"===e&&n.sendAuthRequest(t)},y.checkStatus=function(){return y.getSession().checkStatus()},p.js.sdk.UIManager={redirect_uri:"acsconnect://success",displayModal:function(t){function n(e){var t=/^acsconnect:\/\/([^#]*)#(.*)/.exec(decodeURIComponent(e.url));if(t&&3==t.length){var l=null;if("success"==t[1])l=p.js.sdk.utils.decodeQS(t[2]);else if("cancel"!=t[1])return;o.removeEventListener("beforeload",n),o.removeEventListener("load",n),r=l,null!=i?i.close():a&&a.close()}u&&"load"==e.type&&(a.remove(u),u=null)}e.debug&&Ti.API.info("ThreeLegged Request url: "+t.url);var r,i=null,a=Ti.UI.createWindow({fullscreen:!1,title:t.params.title||"Appcelerator Cloud Service"}),o=Ti.UI.createWebView({url:t.url,scalesPageToFit:!1,showScrollbars:!0}),u=Ti.UI.createLabel({text:"Loading, please wait...",color:"black",width:Ti.UI.SIZE||"auto",height:Ti.UI.SIZE||"auto",zIndex:100});if(o.addEventListener("beforeload",n),o.addEventListener("load",n),a.addEventListener("close",function(){t&&(t.cb&&t.cb(r),o=a=u=t=r=null)}),"android"!=Ti.Platform.osname){var l=Ti.UI.createButton({title:"close",width:"50%",height:"20%"});l.addEventListener("click",function(){i.close()}),a.rightNavButton=l,"iphone"!=Ti.Platform.osname&&"ios"!=Ti.Platform.osname||(i=Ti.UI.iOS.createNavigationWindow({window:a}))}a.add(o),a.add(u),null!=i?i.open({modal:!0}):a.open()},processParams:function(e,t){return{cb:t,url:e.url+p.constants.redirectUriParam+p.js.sdk.UIManager.redirect_uri,params:e}}},p.js.sdk.ui=function(e,t){if("mobileweb"===Ti.Platform.osname)alert("Three Legged OAuth is not currently supported on MobileWeb");else if(e.action){var n=p.js.sdk.UIManager.processParams(e,t);n&&p.js.sdk.UIManager.displayModal(n)}else alert('"action" is a required parameter for com.cocoafish.js.sdk.ui().')},e}defineCloud(exports);