!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18);function r(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,c=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw c}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=document.querySelector(".manufacturers__list"),l=document.querySelector(".manufacturers__main"),i=document.querySelector(".types"),s=i.querySelector(".types__list"),a=i.querySelector(".types__main"),u=l.querySelector(".open-btn"),d=l.querySelector(".close-btn"),f=i.querySelector(".open-btn"),p=i.querySelector(".close-btn"),y=document.querySelector(".aside"),m=document.querySelector(".header__burger button"),v=y.querySelector(".aside__close-btn"),b=document.querySelector(".feedback"),_=document.querySelector(".feedback__close-btn"),L=document.querySelectorAll(".feedback-open-btn"),S=document.querySelector(".call"),k=document.querySelector(".call__close-btn"),q=document.querySelectorAll(".call-open-btn");d.remove(),p.remove(),u.onclick=function(){c.classList.remove("manufacturers__list--closed"),c.classList.add("manufacturers__list--opened"),u.remove(),l.appendChild(d)},d.onclick=function(){c.classList.remove("manufacturers__list--opened"),c.classList.add("manufacturers__list--closed"),d.remove(),l.appendChild(u)},f.onclick=function(){s.classList.remove("types__list--closed"),s.classList.add("types__list--opened"),f.remove(),a.appendChild(p)},p.onclick=function(){s.classList.remove("types__list--opened"),s.classList.add("types__list--closed"),p.remove(),a.appendChild(f)},m.onclick=function(){y.classList.add("aside--opened"),y.classList.remove("aside--closed")},v.onclick=function(){y.classList.remove("aside--opened"),y.classList.add("aside--closed")},y.addEventListener("click",(function(e){e.target==y&&(y.classList.remove("aside--opened"),y.classList.add("aside--closed"))}));var g,h=r(L);try{for(h.s();!(g=h.n()).done;){g.value.addEventListener("click",(function(e){e.preventDefault(),b.classList.remove("feedback--closed"),b.classList.add("feedback--opened")}))}}catch(e){h.e(e)}finally{h.f()}_.addEventListener("click",(function(e){e.preventDefault(),b.classList.remove("feedback--opened"),b.classList.add("feedback--closed")})),b.addEventListener("click",(function(e){e.target==b&&(b.classList.remove("feedback--opened"),b.classList.add("feedback--closed"))}));var j,O=r(q);try{for(O.s();!(j=O.n()).done;){j.value.addEventListener("click",(function(e){e.preventDefault(),S.classList.remove("call--closed"),S.classList.add("call--opened")}))}}catch(e){O.e(e)}finally{O.f()}k.addEventListener("click",(function(e){e.preventDefault(),S.classList.remove("call--opened"),S.classList.add("call--closed")})),S.addEventListener("click",(function(e){e.target==S&&(S.classList.remove("call--opened"),S.classList.add("call--closed"))}))},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map