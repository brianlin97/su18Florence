!function e(t,n,r){function i(a,c){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(e){var n=t[a][1][e];return i(n?n:e)},d,d.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e){"use strict";function t(e){w={x:e.clientX-g.offsetLeft,y:e.clientY-g.offsetTop}}function n(){var e=P||Math.abs(E.x-y.x)>1||Math.abs(E.y-y.y)>1;return E=y,P=!1,e}function r(){if(!d)return requestAnimationFrame(r);y={x:y.x+(w.x-y.x)/b,y:y.y+(w.y-y.y)/b};for(var e=Math.floor(y.x/(d[0]/p));!T[e-1]&&e>1;)e--;if(!n()||!T[e])return requestAnimationFrame(r);var t=y.y/d[1],i=Math.max(d[0]/l.width,d[1]/l.height)+f(t)*x;m.save(),m.imageSmoothingEnabled=!1,m.webkitImageSmoothingEnabled=!1,m.mozImageSmoothingEnabled=!1,m.msImageSmoothingEnabled=!1,m.clearRect(0,0,d[0],d[1]);var o=i*l.width,a=i*l.height,c=(o-d[0])/-2,s=(a-d[1])/-2;m.drawImage(T[e],c,s,o,a),m.restore(),requestAnimationFrame(r)}function i(){d=[g.offsetWidth,g.offsetHeight],g.width=g.offsetWidth,g.height=g.offsetHeight,P=!0}function o(){function e(e){var n=new Image;n.src=h+v(t+1,4)+".png",n.addEventListener("load",function(){T[e]=n})}for(var t=0;p>t;t++)e(t)}var a=function(e){return e&&e.__esModule?e["default"]:e},c=e("./lib/getData"),s=c.redirectParent,u=c.getTitleData;e("points");var d,v=a(e("pad-number")),f=a(e("eases/cubic-in")),l={width:900,height:600},p=121,h="assets/frames/",g=document.querySelector("canvas"),m=g.getContext("2d"),w={x:0,y:0},E={},y={x:100,y:100},b=10,x=5,P=!1,T=[];o(),g.addEventListener("pointermove",t),window.addEventListener("resize",i),i(),r(),u(function(e){e.isHomepage&&(document.body.addEventListener("click",function(){s(e.domain_path)}),document.body.style.cursor="pointer")})},{"./lib/getData":5,"eases/cubic-in":2,"pad-number":3,points:4}],2:[function(e,t){function n(e){return e*e*e}t.exports=n},{}],3:[function(e,t){function n(e,t,n){n=n||"0",e+="";var r=e.length;return!t||r>=t?""+e:new Array(t-r+1).join(n)+e}t.exports=n},{}],4:[function(){!function(){"use strict";function e(){this.originalEvent.preventDefault()}var t,n,r,i,o,a,c,s,u,d,v,f;if(void 0===window.onpointerdown){f="screenX screenY clientX clientY ctrlKey shiftKey altKey metaKey relatedTarget detail button buttons pointerId pointerType width height pressure tiltX tiltY isPrimary".split(" ");try{i=new UIEvent("test"),a=function(e,t){return new UIEvent(e,{view:window,bubbles:t})}}catch(l){document.createEvent&&(a=function(e,t){var n=document.createEvent("UIEvents");return n.initUIEvent(e,t,!0,window),n})}if(!a)throw new Error("Cannot create events. You may be using an unsupported browser.");if(c=function(t,n,r,i){var o,c;for(o=a(t,!i),c=f.length;c--;)Object.defineProperty(o,f[c],{value:r[f[c]],writable:!1});return Object.defineProperty(o,"originalEvent",{value:n,writable:!1}),Object.defineProperty(o,"preventDefault",{value:e,writable:!1}),o},navigator.pointerEnabled=!0,void 0!==window.onmspointerdown)return["MSPointerDown","MSPointerUp","MSPointerCancel","MSPointerMove","MSPointerOver","MSPointerOut"].forEach(function(e){var t;t=e.toLowerCase().substring(2),"pointerover"===t||"pointerout"===t?window.addEventListener(e,function(e){var n=c(t,e,e,!1);e.target.dispatchEvent(n),e.target.contains(e.relatedTarget)||(n=c("pointerover"===t?"pointerenter":"pointerleave",e,e,!0),e.target.dispatchEvent(n))},!0):window.addEventListener(e,function(e){var n=c(t,e,e,!1);e.target.dispatchEvent(n)},!0)}),void(navigator.maxTouchPoints=navigator.msMaxTouchPoints);v={0:1,1:4,2:2},s=function(t,n,r){var i,o,a,s;return void 0!==n.buttons?(o=n.buttons,i=n.buttons?n.button:-1):0===event.button&&0===event.which?(i=-1,o=0):(i=n.button,o=v[i]),a=n.pressure||n.mozPressure||(o?.5:0),s={screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY,ctrlKey:n.ctrlKey,shiftKey:n.shiftKey,altKey:n.altKey,metaKey:n.metaKey,relatedTarget:n.relatedTarget,detail:n.detail,button:i,buttons:o,pointerId:1,pointerType:"mouse",width:0,height:0,pressure:a,tiltX:0,tiltY:0,isPrimary:!0,preventDefault:e},c(t,n,s,r)},u=void 0!==window.ontouchstart?function(e){for(var t,n=r.length,i=10;n--;)if(t=r[n],Math.abs(e.clientX-t.clientX)<i&&Math.abs(e.clientY-t.clientY)<i)return!0}:function(){return!1},o=function(e){"over"===e||"out"===e?window.addEventListener("mouse"+e,function(t){var n;u(t)||(n=s("pointer"+e,t),t.target.dispatchEvent(n),t.target.contains(t.relatedTarget)||(n=s("over"===e?"pointerenter":"pointerleave",t,!0),t.target.dispatchEvent(n)))}):window.addEventListener("mouse"+e,function(t){var n;u(t)||(n=s("pointer"+e,t),t.target.dispatchEvent(n))})},["down","up","over","out","move"].forEach(function(e){o(e)}),void 0!==window.ontouchstart&&(t={},n=0,r=[],d=function(n,r,i,o,a){var s;return s={screenX:r.screenX,screenY:r.screenY,clientX:i.clientX,clientY:i.clientY,ctrlKey:r.ctrlKey,shiftKey:r.shiftKey,altKey:r.altKey,metaKey:r.metaKey,relatedTarget:a||r.relatedTarget,detail:r.detail,button:0,buttons:1,pointerId:i.identifier+2,pointerType:"touch",width:20,height:20,pressure:.5,tiltX:0,tiltY:0,isPrimary:t[i.identifier].isPrimary,preventDefault:e},c(n,r,s,o)},window.addEventListener("touchstart",function(e){var o,a;for(o=e.changedTouches,a=function(i){var o,a,c,s;s={target:i.target,isPrimary:n?!1:!0},t[i.identifier]=s,n+=1,o=d("pointerdown",e,i),a=d("pointerover",e,i),c=d("pointerenter",e,i,!0),i.target.dispatchEvent(a),i.target.dispatchEvent(c),i.target.dispatchEvent(o),r.push(i),setTimeout(function(){var e=r.indexOf(i);-1!==e&&r.splice(e,1)},1500)},i=0;i<o.length;i+=1)a(o[i])}),window.addEventListener("touchmove",function(e){var n,r;for(n=e.changedTouches,r=function(n){var r,i,o,a,c,s,u,v;return s=t[n.identifier],v=document.elementFromPoint(n.clientX,n.clientY),s.target===v?(r=d("pointermove",e,n),void v.dispatchEvent(r)):(u=s.target,s.target=v,u.contains(v)||(c=d("pointerleave",e,n,!0,v),u.dispatchEvent(c)),o=d("pointerout",e,n,!1),u.dispatchEvent(o),r=d("pointermove",e,n,!1),v.dispatchEvent(r),i=d("pointerover",e,n,!1),v.dispatchEvent(i),void(v.contains(u)||(a=d("pointerenter",e,n,!0,u),v.dispatchEvent(a))))},i=0;i<n.length;i+=1)r(n[i])}),window.addEventListener("touchend",function(e){var r,o;for(r=e.changedTouches,o=function(r){var i,o,a,c;c=document.elementFromPoint(r.clientX,r.clientY),i=d("pointerup",e,r,!1),o=d("pointerout",e,r,!1),a=d("pointerleave",e,r,!0),delete t[r.identifier],n-=1,c.dispatchEvent(i),c.dispatchEvent(o),c.dispatchEvent(a)},i=0;i<r.length;i+=1)o(r[i])}),window.addEventListener("touchcancel",function(e){var r,o;for(r=e.changedTouches,o=function(r){var i,o,a;i=d("pointercancel",e,r),o=d("pointerout",e,r),a=d("pointerleave",e,r),r.target.dispatchEvent(i),r.target.dispatchEvent(o),r.target.dispatchEvent(a),delete t[r.identifier],n-=1},i=0;i<r.length;i+=1)o(r[i])}))}}()},{}],5:[function(e,t,n){"use strict";function r(e){parent.postMessage('{"status": "redirect", "domain_path": "'+e+'"}',"*")}function i(e){function t(){var e=RegExp("[?&]homepage=([^&]*)").exec(window.location.search);return e&&decodeURIComponent(e[1].replace(/\+/g," "))}window.addEventListener("message",function(n){var r=JSON.parse(n.data);void 0!==r.domain_path&&(r.isHomepage=t(),e(r))});var n=window.location.pathname.split("/")[4];parent.postMessage('{"status": "ready", "coverId": "'+n+'"}',"*")}n.redirectParent=r,n.getTitleData=i,Object.defineProperty(n,"__esModule",{value:!0})},{}]},{},[1]);