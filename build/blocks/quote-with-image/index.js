(()=>{"use strict";var e,t={795:()=>{const e=window.wp.blocks,t=window.wp.element,a=window.wp.i18n,n=window.wp.blockEditor,l=window.wp.components,i=JSON.parse('{"u2":"itineris-assignment/quote-with-image"}');(0,e.registerBlockType)(i.u2,{edit:e=>{const{attributes:{title:i,mediaID:o,mediaURL:s,qouteBody:r,qouteSource:c},setAttributes:m}=e,u=(0,n.useBlockProps)();return(0,t.createElement)("div",u,(0,t.createElement)("h3",null,(0,a.__)("Quote Title","itineris-test-assignment")),(0,t.createElement)(n.RichText,{tagName:"h4",placeholder:(0,a.__)("Write Quote title…","itineris-test-assignment"),value:i,onChange:e=>{m({title:e})}}),(0,t.createElement)("h3",null,(0,a.__)("Quote Body","itineris-test-assignment")),(0,t.createElement)(n.RichText,{tagName:"div",placeholder:(0,a.__)("Write Quote Body…","itineris-test-assignment"),value:r,onChange:e=>{m({qouteBody:e})},className:"qouteBody"}),(0,t.createElement)("h3",null,(0,a.__)("Quote Source","itineris-test-assignment")),(0,t.createElement)(n.RichText,{tagName:"div",className:"qouteSource",placeholder:(0,a.__)("Write the bottom line…","itineris-test-assignment"),value:c,onChange:e=>{m({qouteSource:e})}}),(0,t.createElement)("div",{className:"quote-image"},(0,t.createElement)(n.MediaUpload,{onSelect:e=>{m({mediaURL:e.sizes.full.url,mediaID:e.id})},allowedTypes:"image",value:o,render:e=>{let{open:n}=e;return(0,t.createElement)(l.Button,{className:o?"image-button":"button button-large",onClick:n},o?(0,t.createElement)("img",{src:s,alt:(0,a.__)("Upload Quote Image","itineris-test-assignment"),style:{width:"100px"}}):(0,a.__)("Upload Image","itineris-test-assignment"))}})))},save:e=>{const{attributes:{title:a,mediaURL:l,mediaID:i,qouteBody:o,qouteSource:s}}=e;console.log(a),console.log(i),console.log(l);const r=n.useBlockProps.save();return(0,t.createElement)("div",r,(0,t.createElement)("section",{className:"w-full h-full bg-right bg-no-repeat mb-16",style:{backgroundImage:l?`url(${l})`:""}},(0,t.createElement)("div",{className:"container mx-auto px-4"},(0,t.createElement)("div",{className:"flex flex-wrap"},(0,t.createElement)("div",{className:"h-full justify-center lg:w-1/2"},(0,t.createElement)("div",{className:"quote p-2 lg:my-44 lg:ml-10 lg:p-4",style:"color: #252B39;"},(0,t.createElement)(n.RichText.Content,{tagName:"h4",className:"text-3xl font-semibold mb-4 font-gilory",value:a}),(0,t.createElement)(n.RichText.Content,{tagName:"q",className:"text-2xl block font-normal mb-10 qouteBody",value:o}),(0,t.createElement)(n.RichText.Content,{tagName:"p",className:"qouteSource text-base",value:s}))),(0,t.createElement)("div",{className:"lg:w-1/2"})))))}})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,l,i)=>{if(!a){var o=1/0;for(m=0;m<e.length;m++){a=e[m][0],l=e[m][1],i=e[m][2];for(var s=!0,r=0;r<a.length;r++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](a[r])))?a.splice(r--,1):(s=!1,i<o&&(o=i));if(s){e.splice(m--,1);var c=l();void 0!==c&&(t=c)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[a,l,i]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={133:0,966:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,i,o=a[0],s=a[1],r=a[2],c=0;if(o.some((t=>0!==e[t]))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(r)var m=r(n)}for(t&&t(a);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(m)},a=self.webpackChunkitineris_test_assignment=self.webpackChunkitineris_test_assignment||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[966],(()=>n(795)));l=n.O(l)})();