(()=>{var e={764:function(e,r,t){var n;e=t.nmd(e),n=function(){var e=null,r={};i("monochrome",null,[[0,0],[100,0]]),i("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),i("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),i("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),i("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),i("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),i("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),i("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var t=[],n=function(r){if(void 0!==(r=r||{}).seed&&null!==r.seed&&r.seed===parseInt(r.seed,10))e=r.seed;else if("string"==typeof r.seed)e=function(e){for(var r=0,t=0;t!==e.length&&!(r>=Number.MAX_SAFE_INTEGER);t++)r+=e.charCodeAt(t);return r}(r.seed);else{if(void 0!==r.seed&&null!==r.seed)throw new TypeError("The seed value must be an integer or string");e=null}var u,l;if(null!==r.count&&void 0!==r.count){for(var i=r.count,d=[],f=0;f<r.count;f++)t.push(!1);for(r.count=null;i>d.length;){var p=n(r);null!==e&&(r.seed=e),d.push(p)}return r.count=i,d}return function(e,r){switch(r.format){case"hsvArray":return e;case"hslArray":return h(e);case"hsl":var t=h(e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)";case"hsla":var n=h(e),a=r.alpha||Math.random();return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+a+")";case"rgbArray":return c(e);case"rgb":return"rgb("+c(e).join(", ")+")";case"rgba":var o=c(e);return a=r.alpha||Math.random(),"rgba("+o.join(", ")+", "+a+")";default:return function(e){var r=c(e);function t(e){var r=e.toString(16);return 1==r.length?"0"+r:r}return"#"+t(r[0])+t(r[1])+t(r[2])}(e)}}([u=a(r),l=o(u,r),s(u,l,r)],r)};function a(e){if(t.length>0){var n=l(s=function(e){if(isNaN(e)){if("string"==typeof e)if(r[e]){var t=r[e];if(t.hueRange)return t.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return u(d(e)[0]).hueRange}else{var n=parseInt(e);if(n<360&&n>0)return u(e).hueRange}return[0,360]}(e.hue)),a=(s[1]-s[0])/t.length,o=parseInt((n-s[0])/a);return!0===t[o]?o=(o+2)%t.length:t[o]=!0,(n=l(s=[(s[0]+o*a)%359,(s[0]+(o+1)*a)%359]))<0&&(n=360+n),n}var s;return(n=l(s=function(e){if("number"==typeof parseInt(e)){var t=parseInt(e);if(t<360&&t>0)return[t,t]}if("string"==typeof e)if(r[e]){var n=r[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=d(e)[0];return[a,a]}return[0,360]}(e.hue)))<0&&(n=360+n),n}function o(e,r){if("monochrome"===r.hue)return 0;if("random"===r.luminosity)return l([0,100]);var t=function(e){return u(e).saturationRange}(e),n=t[0],a=t[1];switch(r.luminosity){case"bright":n=55;break;case"dark":n=a-10;break;case"light":a=55}return l([n,a])}function s(e,r,t){var n=function(e,r){for(var t=u(e).lowerBounds,n=0;n<t.length-1;n++){var a=t[n][0],o=t[n][1],s=t[n+1][0],l=t[n+1][1];if(r>=a&&r<=s){var i=(l-o)/(s-a);return i*r+(o-i*a)}}return 0}(e,r),a=100;switch(t.luminosity){case"dark":a=n+20;break;case"light":n=(a+n)/2;break;case"random":n=0,a=100}return l([n,a])}function u(e){for(var t in e>=334&&e<=360&&(e-=360),r){var n=r[t];if(n.hueRange&&e>=n.hueRange[0]&&e<=n.hueRange[1])return r[t]}return"Color not found"}function l(r){if(null===e){var t=Math.random();return t+=.618033988749895,t%=1,Math.floor(r[0]+t*(r[1]+1-r[0]))}var n=r[1]||1,a=r[0]||0,o=(e=(9301*e+49297)%233280)/233280;return Math.floor(a+o*(n-a))}function i(e,t,n){var a=n[0][0],o=n[n.length-1][0],s=n[n.length-1][1],u=n[0][1];r[e]={hueRange:t,lowerBounds:n,saturationRange:[a,o],brightnessRange:[s,u]}}function c(e){var r=e[0];0===r&&(r=1),360===r&&(r=359),r/=360;var t=e[1]/100,n=e[2]/100,a=Math.floor(6*r),o=6*r-a,s=n*(1-t),u=n*(1-o*t),l=n*(1-(1-o)*t),i=256,c=256,d=256;switch(a){case 0:i=n,c=l,d=s;break;case 1:i=u,c=n,d=s;break;case 2:i=s,c=n,d=l;break;case 3:i=s,c=u,d=n;break;case 4:i=l,c=s,d=n;break;case 5:i=n,c=s,d=u}return[Math.floor(255*i),Math.floor(255*c),Math.floor(255*d)]}function d(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var r=parseInt(e.substr(0,2),16)/255,t=parseInt(e.substr(2,2),16)/255,n=parseInt(e.substr(4,2),16)/255,a=Math.max(r,t,n),o=a-Math.min(r,t,n),s=a?o/a:0;switch(a){case r:return[(t-n)/o%6*60||0,s,a];case t:return[60*((n-r)/o+2)||0,s,a];case n:return[60*((r-t)/o+4)||0,s,a]}}function h(e){var r=e[0],t=e[1]/100,n=e[2]/100,a=(2-t)*n;return[r,Math.round(t*n/(a<1?a:2-a)*1e4)/100,a/2*100]}return n}(),e&&e.exports&&(r=e.exports=n),r.randomColor=n}},r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";var e=t(764);const r=r=>{const t=document.createElement("div");return t.style="max-height: 70vh; overflow-y: scroll;",r.forEach((r=>{t.appendChild((r=>{const t=document.createElement("span");t.classList.add("project"),t.style.cursor="pointer";const n=document.createElement("div");n.classList.add("circle"),"default"==r.color?(r.color=e(),n.style.borderColor=r.color):n.style.borderColor=r.color,t.appendChild(n);const a=document.createElement("span");if(a.classList.add("project-name"),r.name.length<20)a.innerText=r.name;else{const e=r.name.slice(0,20);a.innerText=e+"..."}return t.appendChild(a),t})(r))})),localStorage.setItem("todoLists",JSON.stringify(r)),t};let n=[];const a=document.querySelector(".menuButton"),o=document.querySelector(".closeBtn"),s=document.querySelector(".projects");a.addEventListener("click",(function(){document.querySelector(".sidebar").style.width="300px",a.style.zIndex=-1})),o.addEventListener("click",(function(){document.querySelector(".sidebar").style.width="0px",a.style.zIndex=1}));const u=(e,r,t)=>({name:e,color:r,todos:t});window.onload=function(){if(localStorage.todoLists){if(localStorage.todoLists.length>0){const e=JSON.parse(localStorage.getItem("todoLists"));n=e,s.appendChild(r(n))}}else n.push(u("Project 1","default",[])),n.push(u("Project 2","default",[])),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(s),s.appendChild(r(n))}})()})();