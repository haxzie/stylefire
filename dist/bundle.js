!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.styleFire=t():e.styleFire=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){return`.${e} { ${function e(t,n){return Object.keys(n).map(o=>{const r=n[o];return"object"==typeof r?e(`${t}-${o}`,r):"string"==typeof r?"default"===o?`${t}: ${r}; `:`${t}-${o}: ${r}; `:void 0})}("",t).flat(1/0).map(e=>`-${e}`).join("")} }`}async function r(e,t){return new Promise(async(n,r)=>{let c="";if(!t)return console.error("invalid json"),r("invalid json");if("object"==typeof t)c=o(e,t);else{if("string"!=typeof t)return console.log("Invalid JSON data provided"),r("Invalid JSON data provided");try{const n=await fetch(t),r=await n.json();c=o(e,r)}catch(e){return console.error("ERROR",e.message),r(e)}}const i=document.getElementById(e);if(i&&"STYLE"===i.nodeName)return i.innerHTML=c,console.log(`StyleFire: Updated ${e} successfully`),n({name:e,apply:()=>{u(e)}});{const t=document.createElement("style");return t.type="text/css",t.id=e,t.innerHTML=c,document.getElementsByTagName("head")[0].appendChild(t),console.log(`StyleFire: created ${e} successfully`),n({name:e,apply:()=>{u(e)}})}})}n.r(t),n.d(t,"init",(function(){return i})),n.d(t,"apply",(function(){return u})),n.d(t,"load",(function(){return a})),n.d(t,"onStyleChanged",(function(){return l})),n.d(t,"create",(function(){return r}));const c="style-fire-theme";function i(){const e=localStorage.getItem(c);e&&u(e)}function u(e){localStorage.setItem(c,e),document.documentElement.className=e,window.styleFireCallBack&&window.styleFireCallBack(e)}function l(e){window.styleFireCallBack=e}function a(e,t){const n=document.createElement("style");n.type="text/css",n.href=t,n.id=e,document.getElementsByTagName("head")[0].appendChild(n)}}])}));