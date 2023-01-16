(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{function e(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function t(t){return t instanceof e(t).Element||t instanceof Element}function n(t){return t instanceof e(t).HTMLElement||t instanceof HTMLElement}function r(t){return"undefined"!=typeof ShadowRoot&&(t instanceof e(t).ShadowRoot||t instanceof ShadowRoot)}Math.max,Math.min;var o=Math.round;function i(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function a(r,a,s){void 0===a&&(a=!1),void 0===s&&(s=!1);var c=r.getBoundingClientRect(),f=1,u=1;a&&n(r)&&(f=r.offsetWidth>0&&o(c.width)/r.offsetWidth||1,u=r.offsetHeight>0&&o(c.height)/r.offsetHeight||1);var l=(t(r)?e(r):window).visualViewport,p=!!/^((?!chrome|android).)*safari/i.test(i())&&s,d=(c.left+(p&&l?l.offsetLeft:0))/f,m=(c.top+(p&&l?l.offsetTop:0))/u,h=c.width/f,v=c.height/u;return{width:h,height:v,top:m,right:d+h,bottom:m+v,left:d,x:d,y:m}}function s(t){var n=e(t);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function c(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return((t(e)?e.ownerDocument:e.document)||window.document).documentElement}function u(t){return e(t).getComputedStyle(t)}function l(e){var t=u(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function p(t,r,i){void 0===i&&(i=!1);var u,p,d=n(r),m=n(r)&&function(e){var t=e.getBoundingClientRect(),n=o(t.width)/e.offsetWidth||1,r=o(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(r),h=f(r),v=a(t,m,i),y={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(d||!d&&!i)&&(("body"!==c(r)||l(h))&&(y=(u=r)!==e(u)&&n(u)?{scrollLeft:(p=u).scrollLeft,scrollTop:p.scrollTop}:s(u)),n(r)?((b=a(r,!0)).x+=r.clientLeft,b.y+=r.clientTop):h&&(b.x=function(e){return a(f(e)).left+s(e).scrollLeft}(h))),{x:v.left+y.scrollLeft-b.x,y:v.top+y.scrollTop-b.y,width:v.width,height:v.height}}function d(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||(r(e)?e.host:null)||f(e)}function m(e){return["html","body","#document"].indexOf(c(e))>=0?e.ownerDocument.body:n(e)&&l(e)?e:m(d(e))}function h(t,n){var r;void 0===n&&(n=[]);var o=m(t),i=o===(null==(r=t.ownerDocument)?void 0:r.body),a=e(o),s=i?[a].concat(a.visualViewport||[],l(o)?o:[]):o,c=n.concat(s);return i?c:c.concat(h(d(s)))}function v(e){return["table","td","th"].indexOf(c(e))>=0}function y(e){return n(e)&&"fixed"!==u(e).position?e.offsetParent:null}function b(t){for(var o=e(t),a=y(t);a&&v(a)&&"static"===u(a).position;)a=y(a);return a&&("html"===c(a)||"body"===c(a)&&"static"===u(a).position)?o:a||function(e){var t=/firefox/i.test(i());if(/Trident/i.test(i())&&n(e)&&"fixed"===u(e).position)return null;var o=d(e);for(r(o)&&(o=o.host);n(o)&&["html","body"].indexOf(c(o))<0;){var a=u(o);if("none"!==a.transform||"none"!==a.perspective||"paint"===a.contain||-1!==["transform","perspective"].indexOf(a.willChange)||t&&"filter"===a.willChange||t&&a.filter&&"none"!==a.filter)return o;o=o.parentNode}return null}(t)||o}var g="top",w="bottom",O="right",x="left",j="end",E=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function S(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var L={placement:"bottom",modifiers:[],strategy:"absolute"};function P(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function A(e){void 0===e&&(e={});var n=e,r=n.defaultModifiers,o=void 0===r?[]:r,i=n.defaultOptions,s=void 0===i?L:i;return function(e,n,r){void 0===r&&(r=s);var i,c,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},L,s),modifiersData:{},elements:{reference:e,popper:n},attributes:{},styles:{}},u=[],l=!1,d={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;m(),f.options=Object.assign({},s,f.options,i),f.scrollParents={reference:t(e)?h(e):e.contextElement?h(e.contextElement):[],popper:h(n)};var a,c,l=function(e){var t=S(e);return E.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(o,f.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))));return f.orderedModifiers=l.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:d,options:r});u.push(i||function(){})}})),d.update()},forceUpdate:function(){if(!l){var e=f.elements,t=e.reference,n=e.popper;if(P(t,n)){var r,o,i,s;f.rects={reference:p(t,b(n),"fixed"===f.options.strategy),popper:(r=n,o=a(r),i=r.offsetWidth,s=r.offsetHeight,Math.abs(o.width-i)<=1&&(i=o.width),Math.abs(o.height-s)<=1&&(s=o.height),{x:r.offsetLeft,y:r.offsetTop,width:i,height:s})},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var c=0;c<f.orderedModifiers.length;c++)if(!0!==f.reset){var u=f.orderedModifiers[c],m=u.fn,h=u.options,v=void 0===h?{}:h,y=u.name;"function"==typeof m&&(f=m({state:f,options:v,name:y,instance:d})||f)}else f.reset=!1,c=-1}}},update:(i=function(){return new Promise((function(e){d.forceUpdate(),e(f)}))},function(){return c||(c=new Promise((function(e){Promise.resolve().then((function(){c=void 0,e(i())}))}))),c}),destroy:function(){m(),l=!0}};if(!P(e,n))return d;function m(){u.forEach((function(e){return e()})),u=[]}return d.setOptions(r).then((function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)})),d}}var M={passive:!0};function D(e){return e.split("-")[0]}function T(e){return e.split("-")[1]}var k={top:"auto",right:"auto",bottom:"auto",left:"auto"};function R(t){var n,r=t.popper,i=t.popperRect,a=t.placement,s=t.variation,c=t.offsets,l=t.position,p=t.gpuAcceleration,d=t.adaptive,m=t.roundOffsets,h=t.isFixed,v=c.x,y=void 0===v?0:v,E=c.y,S=void 0===E?0:E,L="function"==typeof m?m({x:y,y:S}):{x:y,y:S};y=L.x,S=L.y;var P=c.hasOwnProperty("x"),A=c.hasOwnProperty("y"),M=x,D=g,T=window;if(d){var R=b(r),W="clientHeight",q="clientWidth";R===e(r)&&"static"!==u(R=f(r)).position&&"absolute"===l&&(W="scrollHeight",q="scrollWidth"),(a===g||(a===x||a===O)&&s===j)&&(D=w,S-=(h&&R===T&&T.visualViewport?T.visualViewport.height:R[W])-i.height,S*=p?1:-1),a!==x&&(a!==g&&a!==w||s!==j)||(M=O,y-=(h&&R===T&&T.visualViewport?T.visualViewport.width:R[q])-i.width,y*=p?1:-1)}var C,H=Object.assign({position:l},d&&k),V=!0===m?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:o(t*r)/r||0,y:o(n*r)/r||0}}({x:y,y:S}):{x:y,y:S};return y=V.x,S=V.y,p?Object.assign({},H,((C={})[D]=A?"0":"",C[M]=P?"0":"",C.transform=(T.devicePixelRatio||1)<=1?"translate("+y+"px, "+S+"px)":"translate3d("+y+"px, "+S+"px, 0)",C)):Object.assign({},H,((n={})[D]=A?S+"px":"",n[M]=P?y+"px":"",n.transform="",n))}var W=A({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var n=t.state,r=t.instance,o=t.options,i=o.scroll,a=void 0===i||i,s=o.resize,c=void 0===s||s,f=e(n.elements.popper),u=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",r.update,M)})),c&&f.addEventListener("resize",r.update,M),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",r.update,M)})),c&&f.removeEventListener("resize",r.update,M)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=function(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?D(o):null,a=o?T(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case g:t={x:s,y:n.y-r.height};break;case w:t={x:s,y:n.y+n.height};break;case O:t={x:n.x+n.width,y:c};break;case x:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var f=i?function(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}(i):null;if(null!=f){var u="y"===f?"height":"width";switch(a){case"start":t[f]=t[f]-(n[u]/2-r[u]/2);break;case j:t[f]=t[f]+(n[u]/2-r[u]/2)}}return t}({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,f={placement:D(t.placement),variation:T(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,R(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,R(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];n(i)&&c(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});n(o)&&c(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]}]});function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function C(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===q(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}console.log("Hello World");var B=document.querySelectorAll(".accordion");B.length>0&&B.forEach((function(e){var t=e.querySelector(".accordion-title"),n=e.querySelector("button");t.addEventListener("click",(function(){event.preventDefault(),e.classList.toggle("is-open"),n.classList.toggle("rotate-180")}))}));var I=["mouseenter","focus"],N=["mouseleave","blur"];document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".button-tooltip"),document.querySelector(".tooltip"),document.querySelectorAll(".button-tooltip").forEach((function(e){var t=e.nextElementSibling,n=W(e,t,{modifiers:[{name:"offset",options:{offset:[40,40]}}],placement:"top"});I.forEach((function(r){e.addEventListener(r,(function(){!function(e,t){t.setAttribute("data-show",""),t.classList.toggle("show-tooltip"),e.setOptions((function(e){return F(F({},e),{},{modifiers:[].concat(C(e.modifiers),[{name:"eventListeners",enabled:!0}])})})),e.update()}(n,t)}))})),N.forEach((function(r){e.addEventListener(r,(function(){!function(e,t){t.removeAttribute("data-show"),t.classList.toggle("show-tooltip"),e.setOptions((function(e){return F(F({},e),{},{modifiers:[].concat(C(e.modifiers),[{name:"eventListeners",enabled:!1}])})}))}(n,t)}))})),t.classList.remove("hidden")}))}))})(),e.p,e.p})();