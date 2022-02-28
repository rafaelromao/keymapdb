
const header=document.getElementById("header");let lastPos=document.documentElement.scrollTop;window.addEventListener("scroll",()=>{const e=document.documentElement.scrollTop;e>lastPos?e>header.offsetHeight&&(header.classList.add("-translate-y-full"),header.classList.remove("header-shadow")):(header.classList.remove("-translate-y-full"),header.classList.add("header-shadow")),lastPos=e},!1);const menu=document.getElementById("menu"),searchBox=document.getElementById("search"),menuToggle=document.getElementById("menu-toggle");function $(e){return document.getElementById(e)}function isKeymapConforming(e,t){for(const[n,r]of e)if(n.endsWith("Count")){let e,i;[e,i]=r.split("-").map(Number),void 0!==i||isNaN(e)||(i=e);const o=Number(t[n]);if(!(e<=o&&o<=i))return!1}else if(t[n]instanceof Array){if(!r.split(",").some(e=>new Set(t[n]).has(e)))return!1}else if(t[n]!==r&&t[n]!==("true"===r))return console.log("Returning false because "+t[n]+" != "+r),!1;return!0}async function getFilteredKeymaps(){const e=await fetch("/keymapdb/index.json").then(e=>e.json()),t=new URLSearchParams(location.search);return e.filter(e=>isKeymapConforming(t,e))}menuToggle.addEventListener("click",()=>{menu.classList.toggle("hidden"),searchBox.classList.toggle("hidden")},!1);const pageRegExp=new RegExp("/keymapdb/page/[0-9]+");("/keymapdb/"===location.pathname||pageRegExp.test(location.pathname))&&(async()=>{let e=await getFilteredKeymaps();console.log("filtered keymaps ↓"),console.log(e);const t=$("post-grid");t.innerHTML="";const n=Number((location.pathname.match(/page\/([0-9]+)/)||["page/1","1"])[1]),r=9*(n-1),i=e.slice(r,r+9);if(console.log("sliced keymaps ↓"),console.log(i),r<e.length)$("showing-n-results").innerText=`Showing ${r+1} to ${Math.min(r+9,e.length)} of ${e.length} results found.`;else{$("showing-n-results").innerText=`Showing 0 to 0 of ${e.length} results found.`;const t=Math.ceil(e.length/9);$("showing-n-results").innerText+=1===t?` There is only 1 page for this search, not ${n}.`:` There are only ${t} pages for this search, not ${n}.`}syncPaginationButtons();for(const n of i){Boolean(n.isSplit);t.innerHTML+=`\n        <div class="w-full ${e.length>=3?"sm:w-1/2 md:w-1/3":""} self-stretch p-2 mb-2" style="height:fit-content;">\n            <div class="rounded shadow-md h-full">\n                <a href="${n.url}">\n                    <img class="w-full m-0 rounded-t lazy"  src="${n.keymap_image}" width="960" height="500" alt="${n.keymap_author}'s keymap for the ${n.keyboard}">\n                </a>\n                <div class="px-6 py-5">\n                    <div class="font-semibold text-lg mb-2">\n                        <a class="text-gray-900 hover:text-gray-700" href="${n.url}">${n.title}</a>\n                    </div>\n                    <p class="text-gray-700 mb-1">${n.stagger} stagger, ${n.keyCount} keys, ${n.isSplit?"split":"non-split"}</p>\n                    <p class="text-gray-800">\n                        ${null===n.summary?"":n.summary}\n                    </p>\n                </div>\n            </div>\n        </div>\n        `}})(),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).noUiSlider={})}(this,(function(e){"use strict";var t,n;function r(e){return"object"==typeof e&&"function"==typeof e.to}function i(e){e.parentElement.removeChild(e)}function o(e){return null!=e}function s(e){e.preventDefault()}function a(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function l(e,t,n){n>0&&(d(e,t),setTimeout((function(){f(e,t)}),n))}function u(e){return Math.max(Math.min(e,100),0)}function c(e){return Array.isArray(e)?e:[e]}function p(e){var t=(e=String(e)).split(".");return t.length>1?t[1].length:0}function d(e,t){e.classList&&!/\s/.test(t)?e.classList.add(t):e.className+=" "+t}function f(e,t){e.classList&&!/\s/.test(t)?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function h(e){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(e.compatMode||"");return{x:t?window.pageXOffset:n?e.documentElement.scrollLeft:e.body.scrollLeft,y:t?window.pageYOffset:n?e.documentElement.scrollTop:e.body.scrollTop}}function m(e,t){return 100/(t-e)}function g(e,t,n){return 100*t/(e[n+1]-e[n])}function v(e,t){for(var n=1;e>=t[n];)n+=1;return n}function y(e,t,n){if(n>=e.slice(-1)[0])return 100;var r=v(n,e),i=e[r-1],o=e[r],s=t[r-1],a=t[r];return s+function(e,t){return g(e,e[0]<0?t+Math.abs(e[0]):t-e[0],0)}([i,o],n)/m(s,a)}function S(e,t,n,r){if(100===r)return r;var i=v(r,e),o=e[i-1],s=e[i];return n?r-o>(s-o)/2?s:o:t[i-1]?e[i-1]+function(e,t){return Math.round(e/t)*t}(r-e[i-1],t[i-1]):r}e.PipsMode=void 0,(t=e.PipsMode||(e.PipsMode={})).Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values",e.PipsType=void 0,(n=e.PipsType||(e.PipsType={}))[n.None=-1]="None",n[n.NoValue=0]="NoValue",n[n.LargeValue=1]="LargeValue",n[n.SmallValue=2]="SmallValue";var b=function(){function e(e,t,n){var r;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[n||!1],this.xNumSteps=[!1],this.snap=t;var i=[];for(Object.keys(e).forEach((function(t){i.push([c(e[t]),t])})),i.sort((function(e,t){return e[0][0]-t[0][0]})),r=0;r<i.length;r++)this.handleEntryPoint(i[r][1],i[r][0]);for(this.xNumSteps=this.xSteps.slice(0),r=0;r<this.xNumSteps.length;r++)this.handleStepPoint(r,this.xNumSteps[r])}return e.prototype.getDistance=function(e){for(var t=[],n=0;n<this.xNumSteps.length-1;n++)t[n]=g(this.xVal,e,n);return t},e.prototype.getAbsoluteDistance=function(e,t,n){var r,i=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[i+1];)i++;else e===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);n||e!==this.xPct[i+1]||i++,null===t&&(t=[]);var o=1,s=t[i],a=0,l=0,u=0,c=0;for(r=n?(e-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-e)/(this.xPct[i+1]-this.xPct[i]);s>0;)a=this.xPct[i+1+c]-this.xPct[i+c],t[i+c]*o+100-100*r>100?(l=a*r,o=(s-100*r)/t[i+c],r=1):(l=t[i+c]*a/100*o,o=0),n?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),s=t[i+c]*o;return e+u},e.prototype.toStepping=function(e){return e=y(this.xVal,this.xPct,e)},e.prototype.fromStepping=function(e){return function(e,t,n){if(n>=100)return e.slice(-1)[0];var r=v(n,t),i=e[r-1],o=e[r],s=t[r-1];return function(e,t){return t*(e[1]-e[0])/100+e[0]}([i,o],(n-s)*m(s,t[r]))}(this.xVal,this.xPct,e)},e.prototype.getStep=function(e){return e=S(this.xPct,this.xSteps,this.snap,e)},e.prototype.getDefaultStep=function(e,t,n){var r=v(e,this.xPct);return(100===e||t&&e===this.xPct[r-1])&&(r=Math.max(r-1,1)),(this.xVal[r]-this.xVal[r-1])/n},e.prototype.getNearbySteps=function(e){var t=v(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},e.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(p);return Math.max.apply(null,e)},e.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},e.prototype.convert=function(e){return this.getStep(this.toStepping(e))},e.prototype.handleEntryPoint=function(e,t){var n;if(!a(n="min"===e?0:"max"===e?100:parseFloat(e))||!a(t[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(n),this.xVal.push(t[0]);var r=Number(t[1]);n?this.xSteps.push(!isNaN(r)&&r):isNaN(r)||(this.xSteps[0]=r),this.xHighestCompleteStep.push(0)},e.prototype.handleStepPoint=function(e,t){if(t)if(this.xVal[e]!==this.xVal[e+1]){this.xSteps[e]=g([this.xVal[e],this.xVal[e+1]],t,0)/m(this.xPct[e],this.xPct[e+1]);var n=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],r=Math.ceil(Number(n.toFixed(3))-1),i=this.xVal[e]+this.xNumSteps[e]*r;this.xHighestCompleteStep[e]=i}else this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e]},e}(),x={to:function(e){return void 0===e?"":e.toFixed(2)},from:Number},w={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},E=".__tooltips",P=".__aria";function C(e,t){if(!a(t))throw new Error("noUiSlider: 'step' is not numeric.");e.singleStep=t}function N(e,t){if(!a(t))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=t}function k(e,t){if(!a(t))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");e.keyboardMultiplier=t}function U(e,t){if(!a(t))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=t}function M(e,t){if("object"!=typeof t||Array.isArray(t))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===t.min||void 0===t.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");e.spectrum=new b(t,e.snap||!1,e.singleStep)}function V(e,t){if(t=c(t),!Array.isArray(t)||!t.length)throw new Error("noUiSlider: 'start' option is incorrect.");e.handles=t.length,e.start=t}function A(e,t){if("boolean"!=typeof t)throw new Error("noUiSlider: 'snap' option must be a boolean.");e.snap=t}function T(e,t){if("boolean"!=typeof t)throw new Error("noUiSlider: 'animate' option must be a boolean.");e.animate=t}function L(e,t){if("number"!=typeof t)throw new Error("noUiSlider: 'animationDuration' option must be a number.");e.animationDuration=t}function D(e,t){var n,r=[!1];if("lower"===t?t=[!0,!1]:"upper"===t&&(t=[!1,!0]),!0===t||!1===t){for(n=1;n<e.handles;n++)r.push(t);r.push(!1)}else{if(!Array.isArray(t)||!t.length||t.length!==e.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");r=t}e.connect=r}function O(e,t){switch(t){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function $(e,t){if(!a(t))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==t&&(e.margin=e.spectrum.getDistance(t))}function H(e,t){if(!a(t))throw new Error("noUiSlider: 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(t),!e.limit||e.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function j(e,t){var n;if(!a(t)&&!Array.isArray(t))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(t)&&2!==t.length&&!a(t[0])&&!a(t[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==t){for(Array.isArray(t)||(t=[t,t]),e.padding=[e.spectrum.getDistance(t[0]),e.spectrum.getDistance(t[1])],n=0;n<e.spectrum.xNumSteps.length-1;n++)if(e.padding[0][n]<0||e.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var r=t[0]+t[1],i=e.spectrum.xVal[0];if(r/(e.spectrum.xVal[e.spectrum.xVal.length-1]-i)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function R(e,t){switch(t){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function B(e,t){if("string"!=typeof t)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=t.indexOf("tap")>=0,r=t.indexOf("drag")>=0,i=t.indexOf("fixed")>=0,o=t.indexOf("snap")>=0,s=t.indexOf("hover")>=0,a=t.indexOf("unconstrained")>=0,l=t.indexOf("drag-all")>=0;if(i){if(2!==e.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");$(e,e.start[1]-e.start[0])}if(a&&(e.margin||e.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:n||o,drag:r,dragAll:l,fixed:i,snap:o,hover:s,unconstrained:a}}function F(e,t){if(!1!==t)if(!0===t||r(t)){e.tooltips=[];for(var n=0;n<e.handles;n++)e.tooltips.push(t)}else{if((t=c(t)).length!==e.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");t.forEach((function(e){if("boolean"!=typeof e&&!r(e))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),e.tooltips=t}}function z(e,t){if(t.length!==e.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");e.handleAttributes=t}function _(e,t){if(!r(t))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");e.ariaFormat=t}function I(e,t){if(!function(e){return r(e)&&"function"==typeof e.from}(t))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");e.format=t}function X(e,t){if("boolean"!=typeof t)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");e.keyboardSupport=t}function q(e,t){e.documentElement=t}function Y(e,t){if("string"!=typeof t&&!1!==t)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");e.cssPrefix=t}function K(e,t){if("object"!=typeof t)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(t).forEach((function(n){e.cssClasses[n]=e.cssPrefix+t[n]}))):e.cssClasses=t}function W(e){var t={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:x,format:x},n={step:{r:!1,t:C},keyboardPageMultiplier:{r:!1,t:N},keyboardMultiplier:{r:!1,t:k},keyboardDefaultStep:{r:!1,t:U},start:{r:!0,t:V},connect:{r:!0,t:D},direction:{r:!0,t:R},snap:{r:!1,t:A},animate:{r:!1,t:T},animationDuration:{r:!1,t:L},range:{r:!0,t:M},orientation:{r:!1,t:O},margin:{r:!1,t:$},limit:{r:!1,t:H},padding:{r:!1,t:j},behaviour:{r:!0,t:B},ariaFormat:{r:!1,t:_},format:{r:!1,t:I},tooltips:{r:!1,t:F},keyboardSupport:{r:!0,t:X},documentElement:{r:!1,t:q},cssPrefix:{r:!0,t:Y},cssClasses:{r:!0,t:K},handleAttributes:{r:!1,t:z}},r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:w,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach((function(i){if(o(e[i])||void 0!==r[i])n[i].t(t,o(e[i])?e[i]:r[i]);else if(n[i].r)throw new Error("noUiSlider: '"+i+"' is required.")})),t.pips=e.pips;var i=document.createElement("div"),s=void 0!==i.style.msTransform,a=void 0!==i.style.transform;t.transformRule=a?"transform":s?"msTransform":"webkitTransform";return t.style=[["left","top"],["right","bottom"]][t.dir][t.ort],t}function G(t,n,r){var a,p,m,g,v,y,S,b=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},x=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}(),w=t,C=n.spectrum,N=[],k=[],U=[],M=0,V={},A=t.ownerDocument,T=n.documentElement||A.documentElement,L=A.body,D="rtl"===A.dir||1===n.ort?0:100;function O(e,t){var n=A.createElement("div");return t&&d(n,t),e.appendChild(n),n}function $(e,t){var r=O(e,n.cssClasses.origin),i=O(r,n.cssClasses.handle);if(O(i,n.cssClasses.touchArea),i.setAttribute("data-handle",String(t)),n.keyboardSupport&&(i.setAttribute("tabindex","0"),i.addEventListener("keydown",(function(e){return function(e,t){if(R()||B(t))return!1;var r=["Left","Right"],i=["Down","Up"],o=["PageDown","PageUp"],s=["Home","End"];n.dir&&!n.ort?r.reverse():n.ort&&!n.dir&&(i.reverse(),o.reverse());var a,l=e.key.replace("Arrow",""),u=l===o[0],c=l===o[1],p=l===i[0]||l===r[0]||u,d=l===i[1]||l===r[1]||c,f=l===s[0],h=l===s[1];if(!(p||d||f||h))return!0;if(e.preventDefault(),d||p){var m=p?0:1,g=ve(t)[m];if(null===g)return!1;!1===g&&(g=C.getDefaultStep(k[t],p,n.keyboardDefaultStep)),g*=c||u?n.keyboardPageMultiplier:n.keyboardMultiplier,g=Math.max(g,1e-7),g*=p?-1:1,a=N[t]+g}else a=h?n.spectrum.xVal[n.spectrum.xVal.length-1]:n.spectrum.xVal[0];return de(t,C.toStepping(a),!0,!0),se("slide",t),se("update",t),se("change",t),se("set",t),!1}(e,t)}))),void 0!==n.handleAttributes){var o=n.handleAttributes[t];Object.keys(o).forEach((function(e){i.setAttribute(e,o[e])}))}return i.setAttribute("role","slider"),i.setAttribute("aria-orientation",n.ort?"vertical":"horizontal"),0===t?d(i,n.cssClasses.handleLower):t===n.handles-1&&d(i,n.cssClasses.handleUpper),r}function H(e,t){return!!t&&O(e,n.cssClasses.connect)}function j(e,t){return!(!n.tooltips||!n.tooltips[t])&&O(e.firstChild,n.cssClasses.tooltip)}function R(){return w.hasAttribute("disabled")}function B(e){return p[e].hasAttribute("disabled")}function F(){v&&(oe("update"+E),v.forEach((function(e){e&&i(e)})),v=null)}function z(){F(),v=p.map(j),ie("update"+E,(function(e,t,r){if(v&&n.tooltips&&!1!==v[t]){var i=e[t];!0!==n.tooltips[t]&&(i=n.tooltips[t].to(r[t])),v[t].innerHTML=i}}))}function _(e,t){return e.map((function(e){return C.fromStepping(t?C.getStep(e):e)}))}function I(t){var n,r=function(t){if(t.mode===e.PipsMode.Range||t.mode===e.PipsMode.Steps)return C.xVal;if(t.mode===e.PipsMode.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var n=t.values-1,r=100/n,i=[];n--;)i[n]=n*r;return i.push(100),_(i,t.stepped)}return t.mode===e.PipsMode.Positions?_(t.values,t.stepped):t.mode===e.PipsMode.Values?t.stepped?t.values.map((function(e){return C.fromStepping(C.getStep(C.toStepping(e)))})):t.values:[]}(t),i={},o=C.xVal[0],s=C.xVal[C.xVal.length-1],a=!1,l=!1,u=0;return n=r.slice().sort((function(e,t){return e-t})),(r=n.filter((function(e){return!this[e]&&(this[e]=!0)}),{}))[0]!==o&&(r.unshift(o),a=!0),r[r.length-1]!==s&&(r.push(s),l=!0),r.forEach((function(n,o){var s,c,p,d,f,h,m,g,v,y,S=n,b=r[o+1],x=t.mode===e.PipsMode.Steps;for(x&&(s=C.xNumSteps[o]),s||(s=b-S),void 0===b&&(b=S),s=Math.max(s,1e-7),c=S;c<=b;c=Number((c+s).toFixed(7))){for(g=(f=(d=C.toStepping(c))-u)/(t.density||1),y=f/(v=Math.round(g)),p=1;p<=v;p+=1)i[(h=u+p*y).toFixed(5)]=[C.fromStepping(h),0];m=r.indexOf(c)>-1?e.PipsType.LargeValue:x?e.PipsType.SmallValue:e.PipsType.NoValue,!o&&a&&c!==b&&(m=0),c===b&&l||(i[d.toFixed(5)]=[c,m]),u=d}})),i}function X(t,r,i){var o,s,a=A.createElement("div"),l=((o={})[e.PipsType.None]="",o[e.PipsType.NoValue]=n.cssClasses.valueNormal,o[e.PipsType.LargeValue]=n.cssClasses.valueLarge,o[e.PipsType.SmallValue]=n.cssClasses.valueSub,o),u=((s={})[e.PipsType.None]="",s[e.PipsType.NoValue]=n.cssClasses.markerNormal,s[e.PipsType.LargeValue]=n.cssClasses.markerLarge,s[e.PipsType.SmallValue]=n.cssClasses.markerSub,s),c=[n.cssClasses.valueHorizontal,n.cssClasses.valueVertical],p=[n.cssClasses.markerHorizontal,n.cssClasses.markerVertical];function f(e,t){var r=t===n.cssClasses.value,i=r?l:u;return t+" "+(r?c:p)[n.ort]+" "+i[e]}return d(a,n.cssClasses.pips),d(a,0===n.ort?n.cssClasses.pipsHorizontal:n.cssClasses.pipsVertical),Object.keys(t).forEach((function(o){!function(t,o,s){if((s=r?r(o,s):s)!==e.PipsType.None){var l=O(a,!1);l.className=f(s,n.cssClasses.marker),l.style[n.style]=t+"%",s>e.PipsType.NoValue&&((l=O(a,!1)).className=f(s,n.cssClasses.value),l.setAttribute("data-value",String(o)),l.style[n.style]=t+"%",l.innerHTML=String(i.to(o)))}}(o,t[o][0],t[o][1])})),a}function q(){g&&(i(g),g=null)}function Y(e){q();var t=I(e),n=e.filter,r=e.format||{to:function(e){return String(Math.round(e))}};return g=w.appendChild(X(t,n,r))}function K(){var e=a.getBoundingClientRect(),t="offset"+["Width","Height"][n.ort];return 0===n.ort?e.width||a[t]:e.height||a[t]}function G(e,t,r,i){var o=function(o){var s,a,l=function(e,t,n){var r=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),s=0,a=0;0===e.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(r){var l=function(t){var r=t.target;return r===n||n.contains(r)||e.composed&&e.composedPath().shift()===n};if("touchstart"===e.type){var u=Array.prototype.filter.call(e.touches,l);if(u.length>1)return!1;s=u[0].pageX,a=u[0].pageY}else{var c=Array.prototype.find.call(e.changedTouches,l);if(!c)return!1;s=c.pageX,a=c.pageY}}t=t||h(A),(i||o)&&(s=e.clientX+t.x,a=e.clientY+t.y);return e.pageOffset=t,e.points=[s,a],e.cursor=i||o,e}(o,i.pageOffset,i.target||t);return!!l&&(!(R()&&!i.doNotReject)&&(s=w,a=n.cssClasses.tap,!((s.classList?s.classList.contains(a):new RegExp("\\b"+a+"\\b").test(s.className))&&!i.doNotReject)&&(!(e===b.start&&void 0!==l.buttons&&l.buttons>1)&&((!i.hover||!l.buttons)&&(x||l.preventDefault(),l.calcPoint=l.points[n.ort],void r(l,i))))))},s=[];return e.split(" ").forEach((function(e){t.addEventListener(e,o,!!x&&{passive:!0}),s.push([e,o])})),s}function J(e){var t,r,i,o,s,l,c=100*(e-(t=a,r=n.ort,i=t.getBoundingClientRect(),o=t.ownerDocument,s=o.documentElement,l=h(o),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),r?i.top+l.y-s.clientTop:i.left+l.x-s.clientLeft))/K();return c=u(c),n.dir?100-c:c}function Q(e,t){"mouseout"===e.type&&"HTML"===e.target.nodeName&&null===e.relatedTarget&&ee(e,t)}function Z(e,t){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===e.buttons&&0!==t.buttonsProperty)return ee(e,t);var r=(n.dir?-1:1)*(e.calcPoint-t.startCalcPoint);ue(r>0,100*r/t.baseSize,t.locations,t.handleNumbers,t.connect)}function ee(e,t){t.handle&&(f(t.handle,n.cssClasses.active),M-=1),t.listeners.forEach((function(e){T.removeEventListener(e[0],e[1])})),0===M&&(f(w,n.cssClasses.drag),pe(),e.cursor&&(L.style.cursor="",L.removeEventListener("selectstart",s))),t.handleNumbers.forEach((function(e){se("change",e),se("set",e),se("end",e)}))}function te(e,t){if(!t.handleNumbers.some(B)){var r;if(1===t.handleNumbers.length)r=p[t.handleNumbers[0]].children[0],M+=1,d(r,n.cssClasses.active);e.stopPropagation();var i=[],o=G(b.move,T,Z,{target:e.target,handle:r,connect:t.connect,listeners:i,startCalcPoint:e.calcPoint,baseSize:K(),pageOffset:e.pageOffset,handleNumbers:t.handleNumbers,buttonsProperty:e.buttons,locations:k.slice()}),a=G(b.end,T,ee,{target:e.target,handle:r,listeners:i,doNotReject:!0,handleNumbers:t.handleNumbers}),l=G("mouseout",T,Q,{target:e.target,handle:r,listeners:i,doNotReject:!0,handleNumbers:t.handleNumbers});i.push.apply(i,o.concat(a,l)),e.cursor&&(L.style.cursor=getComputedStyle(e.target).cursor,p.length>1&&d(w,n.cssClasses.drag),L.addEventListener("selectstart",s,!1)),t.handleNumbers.forEach((function(e){se("start",e)}))}}function ne(e){e.stopPropagation();var t=J(e.calcPoint),r=function(e){var t=100,n=!1;return p.forEach((function(r,i){if(!B(i)){var o=k[i],s=Math.abs(o-e);(s<t||s<=t&&e>o||100===s&&100===t)&&(n=i,t=s)}})),n}(t);!1!==r&&(n.events.snap||l(w,n.cssClasses.tap,n.animationDuration),de(r,t,!0,!0),pe(),se("slide",r,!0),se("update",r,!0),n.events.snap?te(e,{handleNumbers:[r]}):(se("change",r,!0),se("set",r,!0)))}function re(e){var t=J(e.calcPoint),n=C.getStep(t),r=C.fromStepping(n);Object.keys(V).forEach((function(e){"hover"===e.split(".")[0]&&V[e].forEach((function(e){e.call(ye,r)}))}))}function ie(e,t){V[e]=V[e]||[],V[e].push(t),"update"===e.split(".")[0]&&p.forEach((function(e,t){se("update",t)}))}function oe(e){var t=e&&e.split(".")[0],n=t?e.substring(t.length):e;Object.keys(V).forEach((function(e){var r=e.split(".")[0],i=e.substring(r.length);t&&t!==r||n&&n!==i||function(e){return e===P||e===E}(i)&&n!==i||delete V[e]}))}function se(e,t,r){Object.keys(V).forEach((function(i){var o=i.split(".")[0];e===o&&V[i].forEach((function(e){e.call(ye,N.map(n.format.to),t,N.slice(),r||!1,k.slice(),ye)}))}))}function ae(e,t,r,i,o,s){var a;return p.length>1&&!n.events.unconstrained&&(i&&t>0&&(a=C.getAbsoluteDistance(e[t-1],n.margin,!1),r=Math.max(r,a)),o&&t<p.length-1&&(a=C.getAbsoluteDistance(e[t+1],n.margin,!0),r=Math.min(r,a))),p.length>1&&n.limit&&(i&&t>0&&(a=C.getAbsoluteDistance(e[t-1],n.limit,!1),r=Math.min(r,a)),o&&t<p.length-1&&(a=C.getAbsoluteDistance(e[t+1],n.limit,!0),r=Math.max(r,a))),n.padding&&(0===t&&(a=C.getAbsoluteDistance(0,n.padding[0],!1),r=Math.max(r,a)),t===p.length-1&&(a=C.getAbsoluteDistance(100,n.padding[1],!0),r=Math.min(r,a))),!((r=u(r=C.getStep(r)))===e[t]&&!s)&&r}function le(e,t){var r=n.ort;return(r?t:e)+", "+(r?e:t)}function ue(e,t,n,r,i){var o=n.slice(),s=r[0],a=[!e,e],l=[e,!e];r=r.slice(),e&&r.reverse(),r.length>1?r.forEach((function(e,n){var r=ae(o,e,o[e]+t,a[n],l[n],!1);!1===r?t=0:(t=r-o[e],o[e]=r)})):a=l=[!0];var u=!1;r.forEach((function(e,r){u=de(e,n[e]+t,a[r],l[r])||u})),u&&(r.forEach((function(e){se("update",e),se("slide",e)})),null!=i&&se("drag",s))}function ce(e,t){return n.dir?100-e-t:e}function pe(){U.forEach((function(e){var t=k[e]>50?-1:1,n=3+(p.length+t*e);p[e].style.zIndex=String(n)}))}function de(e,t,r,i,o){return o||(t=ae(k,e,t,r,i,!1)),!1!==t&&(function(e,t){k[e]=t,N[e]=C.fromStepping(t);var r="translate("+le(ce(t,0)-D+"%","0")+")";p[e].style[n.transformRule]=r,fe(e),fe(e+1)}(e,t),!0)}function fe(e){if(m[e]){var t=0,r=100;0!==e&&(t=k[e-1]),e!==m.length-1&&(r=k[e]);var i=r-t,o="translate("+le(ce(t,i)+"%","0")+")",s="scale("+le(i/100,"1")+")";m[e].style[n.transformRule]=o+" "+s}}function he(e,t){return null===e||!1===e||void 0===e?k[t]:("number"==typeof e&&(e=String(e)),!1!==(e=n.format.from(e))&&(e=C.toStepping(e)),!1===e||isNaN(e)?k[t]:e)}function me(e,t,r){var i=c(e),o=void 0===k[0];t=void 0===t||t,n.animate&&!o&&l(w,n.cssClasses.tap,n.animationDuration),U.forEach((function(e){de(e,he(i[e],e),!0,!1,r)}));var s=1===U.length?0:1;if(o&&C.hasNoSize()&&(r=!0,k[0]=0,U.length>1)){var a=100/(U.length-1);U.forEach((function(e){k[e]=e*a}))}for(;s<U.length;++s)U.forEach((function(e){de(e,k[e],!0,!0,r)}));pe(),U.forEach((function(e){se("update",e),null!==i[e]&&t&&se("set",e)}))}function ge(e){if(void 0===e&&(e=!1),e)return 1===N.length?N[0]:N.slice(0);var t=N.map(n.format.to);return 1===t.length?t[0]:t}function ve(e){var t=k[e],r=C.getNearbySteps(t),i=N[e],o=r.thisStep.step,s=null;if(n.snap)return[i-r.stepBefore.startValue||null,r.stepAfter.startValue-i||null];!1!==o&&i+o>r.stepAfter.startValue&&(o=r.stepAfter.startValue-i),s=i>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&i-r.stepBefore.highestStep,100===t?o=null:0===t&&(s=null);var a=C.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,o]}d(y=w,n.cssClasses.target),0===n.dir?d(y,n.cssClasses.ltr):d(y,n.cssClasses.rtl),0===n.ort?d(y,n.cssClasses.horizontal):d(y,n.cssClasses.vertical),d(y,"rtl"===getComputedStyle(y).direction?n.cssClasses.textDirectionRtl:n.cssClasses.textDirectionLtr),a=O(y,n.cssClasses.base),function(e,t){var r=O(t,n.cssClasses.connects);p=[],(m=[]).push(H(r,e[0]));for(var i=0;i<n.handles;i++)p.push($(t,i)),U[i]=i,m.push(H(r,e[i+1]))}(n.connect,a),(S=n.events).fixed||p.forEach((function(e,t){G(b.start,e.children[0],te,{handleNumbers:[t]})})),S.tap&&G(b.start,a,ne,{}),S.hover&&G(b.move,a,re,{hover:!0}),S.drag&&m.forEach((function(e,t){if(!1!==e&&0!==t&&t!==m.length-1){var r=p[t-1],i=p[t],o=[e],s=[r,i],a=[t-1,t];d(e,n.cssClasses.draggable),S.fixed&&(o.push(r.children[0]),o.push(i.children[0])),S.dragAll&&(s=p,a=U),o.forEach((function(t){G(b.start,t,te,{handles:s,handleNumbers:a,connect:e})}))}})),me(n.start),n.pips&&Y(n.pips),n.tooltips&&z(),oe("update"+P),ie("update"+P,(function(e,t,r,i,o){U.forEach((function(e){var t=p[e],i=ae(k,e,0,!0,!0,!0),s=ae(k,e,100,!0,!0,!0),a=o[e],l=String(n.ariaFormat.to(r[e]));i=C.fromStepping(i).toFixed(1),s=C.fromStepping(s).toFixed(1),a=C.fromStepping(a).toFixed(1),t.children[0].setAttribute("aria-valuemin",i),t.children[0].setAttribute("aria-valuemax",s),t.children[0].setAttribute("aria-valuenow",a),t.children[0].setAttribute("aria-valuetext",l)}))}));var ye={destroy:function(){for(oe(P),oe(E),Object.keys(n.cssClasses).forEach((function(e){f(w,n.cssClasses[e])}));w.firstChild;)w.removeChild(w.firstChild);delete w.noUiSlider},steps:function(){return U.map(ve)},on:ie,off:oe,get:ge,set:me,setHandle:function(e,t,n,r){if(!((e=Number(e))>=0&&e<U.length))throw new Error("noUiSlider: invalid handle number, got: "+e);de(e,he(t,e),!0,!0,r),se("update",e),n&&se("set",e)},reset:function(e){me(n.start,e)},__moveHandles:function(e,t,n){ue(e,t,k,n)},options:r,updateOptions:function(e,t){var i=ge(),s=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];s.forEach((function(t){void 0!==e[t]&&(r[t]=e[t])}));var a=W(r);s.forEach((function(t){void 0!==e[t]&&(n[t]=a[t])})),C=a.spectrum,n.margin=a.margin,n.limit=a.limit,n.padding=a.padding,n.pips?Y(n.pips):q(),n.tooltips?z():F(),k=[],me(o(e.start)?e.start:i,t)},target:w,removePips:q,removeTooltips:F,getPositions:function(){return k.slice()},getTooltips:function(){return v},getOrigins:function(){return p},pips:Y};return ye}function J(e,t){if(!e||!e.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=G(e,W(t),t);return e.noUiSlider=n,n}var Q={__spectrum:b,cssClasses:w,create:J};e.create=J,e.cssClasses=w,e.default=Q,Object.defineProperty(e,"__esModule",{value:!0})}));let keyCountSlider=$("keyCountSlider"),layerCountSlider=$("layerCountSlider");const MAX_KEY_COUNT=120,keyCountPipsStep=20;let keyCountPips=[1];for(let e=20;e<=120;e+=20)keyCountPips.push(e);noUiSlider.create(keyCountSlider,{start:[1,120],connect:!0,step:1,tooltips:!0,format:{to:e=>Math.round(e),from:e=>Number(e.replace(",-",""))},pips:{mode:"values",values:keyCountPips,density:4},range:{min:1,max:120}}),keyCountSlider.noUiSlider.on("change",e=>updateUrlSearchParams(keyCountSlider));const MAX_LAYER_COUNT=16,layerCountPipsStep=4;let layerCountPips=[1];for(let e=4;e<=16;e+=4)layerCountPips.push(e);function mergeTooltips(e,t,n){var r="rtl"===getComputedStyle(e).direction,i="rtl"===e.noUiSlider.options.direction,o="vertical"===e.noUiSlider.options.orientation,s=e.noUiSlider.getTooltips(),a=e.noUiSlider.getOrigins();s.forEach((function(e,t){e&&a[t].appendChild(e)})),e.noUiSlider.on("update",(function(e,a,l,u,c){var p=[[]],d=[[]],f=[[]],h=0;s[0]&&(p[0][0]=0,d[0][0]=c[0],f[0][0]=e[0]);for(var m=1;m<c.length;m++)(!s[m]||c[m]-c[m-1]>t)&&(p[++h]=[],f[h]=[],d[h]=[]),s[m]&&(p[h].push(m),f[h].push(e[m]),d[h].push(c[m]));p.forEach((function(e,t){for(var a=e.length,l=0;l<a;l++){var u=e[l];if(l===a-1){var c=0;d[t].forEach((function(e){c+=1e3-e}));var p=o?"bottom":"right",h=i?0:a-1,m=1e3-d[t][h];c=(r&&!o?100:0)+c/a-m;var g=f[t].filter((e,t,n)=>n.indexOf(e)===t);s[u].innerHTML=g.join(n),s[u].style.display="block",s[u].style[p]=c+"%"}else s[u].style.display="none"}}))}))}function isSliderMinMaxed(e){return e.get().length>=2&&e.options.range.min===e.get().at(0)&&e.options.range.max===e.get().at(-1)}function getElementValue(e){return e instanceof HTMLSelectElement?Array.from(e.options).filter(e=>e.selected).map(e=>e.value).toString():e instanceof HTMLInputElement&&e.hasAttribute("type")&&"checkbox"===e.type?Array.from(document.querySelectorAll(`input[name=${e.name}]:checked`)).map(e=>e.value).toString():"noUiSlider"in e?e.noUiSlider.get().join("-"):e.getAttribute("value")}function updateUrlSearchParams(e){console.log("updating...");const t=new URLSearchParams(location.search),n=getElementValue(e),r=e.getAttribute("name");""===n||"noUiSlider"in e&&isSliderMinMaxed(e.noUiSlider)?t.delete(r):"checked"in e&&t.get(r)===n?(e.checked=!1,t.delete(r)):t.set(r,n);""===t.toString()||t.toString();location.search=t.toString(),syncSidebarFilters(),syncPaginationButtons()}function disableHrefButton(e){e.classList.add("disabled"),e.href="javascript:void(0)",e.setAttribute("tabindex",-1)}function enableHrefButton(e){e.classList.remove("disabled"),e.href=e.getAttribute("href-if-enabled"),e.removeAttribute("tabindex")}function syncPaginationButtons(){const e=new URLSearchParams(location.search);[matchedString,start,end,total]=$("showing-n-results").innerText.match(/Showing ([0-9]+) to ([0-9]+) of ([0-9]+) results found/),Number(start)>1||0===Number(start)?(enableHrefButton($("previous-button")),$("previous-button").search=e):disableHrefButton($("previous-button")),Number(end)<Number(total)?(enableHrefButton($("next-button")),$("next-button").search=e):disableHrefButton($("next-button")),console.log("search of next button is now = "+$("next-button").search)}function syncSidebarFilters(){const e=new URLSearchParams(location.search);for(const[t,n]of e.entries()){let e=document.getElementsByName(t);for(let r of e)if("checked"in r){const e=n.split(",");r.checked=e.includes(r.value)}else if("noUiSlider"in r){const e=r.noUiSlider,t=n.split("-");e.set(t)}else if(r instanceof HTMLSelectElement)if(r.multiple){const e=r.options,t=n.split(",");for(const n of e)n.selected=t.includes(n.value)}else r.value=n,-1===r.selectedIndex&&(alert(`The ${t} "${n}" is not present in the database!\nReverting to "Any".`),r.selectedIndex=0)}}function resetSidebarFilters(){const e=new URLSearchParams(location.search);for(const[t,n]of e.entries()){let e=document.getElementsByName(t);for(let t of e)if("checked"in t)t.checked=!1;else if("noUiSlider"in t){const e=t.noUiSlider;e.set(e.options.start)}else if(t instanceof HTMLSelectElement)if(t.multiple){const e=t.options;for(const t of e)t.selected=!1}else t.selectedIndex=0}history.replaceState({},"",location.pathname)}noUiSlider.create(layerCountSlider,{start:[1,16],connect:!0,step:1,tooltips:!0,format:{to:e=>Math.round(e),from:e=>Number(e.replace(",-",""))},pips:{mode:"values",values:layerCountPips,density:7},range:{min:1,max:16}}),layerCountSlider.noUiSlider.on("change",e=>updateUrlSearchParams(layerCountSlider)),mergeTooltips(keyCountSlider,15,"–"),mergeTooltips(layerCountSlider,15,"–"),window.onload=function(){syncSidebarFilters(),syncPaginationButtons()};
