"use strict";var precacheConfig=[["/bsg/index.html","106196d5396628e88028b4a9050cc309"],["/bsg/static/css/main.67f0a930.css","79632c854602d9c7684fe16121df4b8f"],["/bsg/static/js/main.117e3ecb.js","dd3d1e3ebce5c5cc9565a0c8daa8e5f1"],["/bsg/static/media/1.314887b7.png","314887b7de74f20a6f0ead88df28d59f"],["/bsg/static/media/2.a7d8e757.png","a7d8e75701669e02d59d3d97e66c8379"],["/bsg/static/media/3.93f87c8e.png","93f87c8eae25334ee7b70cb5a7416941"],["/bsg/static/media/4.06b63246.png","06b632463d48aee3129f59d23885183f"],["/bsg/static/media/5.a65caae5.png","a65caae5eec20b9ad02aa4559bef6e61"],["/bsg/static/media/6.406bf55f.png","406bf55f2cddfc15cd8f90e8f56abb98"],["/bsg/static/media/7.a544ed8f.png","a544ed8f118f8e16489460d79adaacca"],["/bsg/static/media/8.41bd7c57.png","41bd7c57f8a155d39334722be2ba11e1"],["/bsg/static/media/9.d6f682a6.png","d6f682a62a8b023fe9b7981c7c995518"],["/bsg/static/media/ballistick.1babd552.png","1babd55265c50b3f44263203caead58c"],["/bsg/static/media/bbb.11fb797a.png","11fb797a42b27b121d243337fc78d240"],["/bsg/static/media/dos-hero.fc3f5bad.png","fc3f5bad6e465c20aaf8bbfa7e2c8f02"],["/bsg/static/media/dos-previewImage.31c25b0b.png","31c25b0be0ceb13364b346aeaf411c28"],["/bsg/static/media/dos-tentacles-sm.d20e8fbe.png","d20e8fbe3629bc0ebf830eea09d3e58e"],["/bsg/static/media/dos-tentacles.f3430056.png","f34300565156a13d745b13f5213bead6"],["/bsg/static/media/jqa.ce338663.png","ce3386630062e4ccfff12638539daaa9"],["/bsg/static/media/page-background.5049755a.png","5049755aca60b459d0df0bab44735d71"],["/bsg/static/media/page-foreground.632304a4.png","632304a43cfb1875d8b7c8fb6020c790"],["/bsg/static/media/play-btn.7cdf700f.svg","7cdf700fbaee45aef05bb8c21250fd6a"],["/bsg/static/media/sonar.464f3388.gif","464f3388f10849aef4a75dba6ee9150f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),s=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var s="/bsg/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});