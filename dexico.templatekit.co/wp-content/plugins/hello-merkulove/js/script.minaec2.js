(()=>{"use strict";var t={771:(t,e,n)=>{function o(t){if("object"!=typeof t)return;const{delay:e,slugPrefix:n,slugSuffix:o,msg:i}=t,a=document.createElement("div"),s=document.createElement("a");let d=Date.now(),r=0,c=0,l=0,p=window.innerHeight-108,f=!1;function m(){let t="this product";return"start"===n&&(t=window.location.hostname.split(".")[0]),"end"===n&&(t=window.location.pathname.split("/")[window.location.pathname.split("/").length-1]),t}setTimeout((function(){a.classList.add("mdp-float"),a.classList.add("mdp-float-init"),s.classList.add("mdp-float-btn"),s.href=function(){const t=o.length>0?"-".concat(o):"";return"https://1.envato.market/"+m()+t}(),s.target="_blank",s.innerHTML='<svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m506.887 114.74c-3.979-5.097-10.086-8.076-16.553-8.076h-399.808l-5.943-66.207c-.972-10.827-10.046-19.123-20.916-19.123h-42.667c-11.598 0-21 9.402-21 21s9.402 21 21 21h23.468l23.018 256.439c.005.302-.01.599.007.903.047.806.152 1.594.286 2.37l.842 9.376c.016.177.034.354.055.529 2.552 22.11 13.851 41.267 30.19 54.21-8.466 10.812-13.532 24.407-13.532 39.172 0 35.106 28.561 63.667 63.666 63.667 35.106 0 63.667-28.561 63.667-63.667 0-7.605-1.345-14.9-3.801-21.667h114.936c-2.457 6.767-3.801 14.062-3.801 21.667 0 35.106 28.561 63.667 63.667 63.667s63.667-28.561 63.667-63.667-28.561-63.667-63.667-63.667h-234.526c-15.952 0-29.853-9.624-35.853-23.646l335.608-19.724c9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c1.567-6.272.158-12.918-3.821-18.016z"/></svg>',s.rel="noreferrer noopener",a.appendChild(s),a.style.top="".concat(window.scrollY+window.innerHeight-108,"px"),document.body.appendChild(a),setTimeout((()=>{a.classList.remove("mdp-float-init"),a.classList.remove("mdp-float-inertia")}),1001),"iframe"===i&&window.self!==window.top&&function(t,e,n,o){const i=document.createElement("div");if(i.classList.add("mdp-float-popup"),t.length>0){const e=document.createElement("h4");e.classList.add("mdp-float-h"),e.innerHTML=t,i.appendChild(e)}const s=document.createElement("p");s.classList.add("mdp-float-msg"),s.innerHTML=e,i.appendChild(s);const d=document.createElement("a");d.classList.add("mdp-float-action"),d.href=o,d.target="_blank",d.rel="noreferrer noopener",d.innerHTML="<span>".concat(n,"</span>"),i.appendChild(d),setTimeout((()=>{a.appendChild(i)}),1500)}("","Some features of ".concat(m().charAt(0).toUpperCase()+m().slice(1)," may not work correctly inside an iframe."),"Open without iframe",window.location.href)}),e),setInterval((function(){const t=Date.now()-d;a.classList.remove("mdp-float-slow"),a.classList.remove("mdp-float-inertia"),
/*!catMouseOver &&*/
t-r>2e3&&t-r<2999&&(p=t>e+2021&&Math.abs(c-l)<500?l+window.innerHeight-2*a.offsetHeight:l+window.innerHeight>a.offsetTop?l+window.innerHeight-1.5*a.offsetHeight:l+window.innerHeight-2.5*a.offsetHeight,a.style.top="".concat(p,"px"),setTimeout((()=>{a.classList.add("mdp-float-inertia"),a.style.top="".concat(l+window.innerHeight-2*a.offsetHeight,"px")}),751),c=l)}),2e3),window.addEventListener("scroll",(function(t){r=t.timeStamp,l=window.scrollY,a.classList.add("mdp-float-slow"),p=l+window.innerHeight-2*a.offsetHeight,a.style.top="".concat(p,"px")})),a.addEventListener("mouseenter",(()=>{f=!0,a.style.top="".concat(l+a.getBoundingClientRect().top,"px")})),a.addEventListener("mouseout",(()=>{f=!1}))}n.d(e,{D:()=>o})},457:(t,e,n)=>{},988:(t,e,n)=>{var o=n(771);window.addEventListener("DOMContentLoaded",(t=>{(0,o.D)(window.hmFloat)}))}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(771),n(457);n(988)})();