(()=>{var e,t,r={705:(e,t,r)=>{var i=r(639).Symbol;e.exports=i},239:(e,t,r)=>{var i=r(705),o=r(607),n=r(333),s=i?i.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?o(e):n(e)}},957:(e,t,r)=>{var i="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=i},607:(e,t,r)=>{var i=r(705),o=Object.prototype,n=o.hasOwnProperty,s=o.toString,l=i?i.toStringTag:void 0;e.exports=function(e){var t=n.call(e,l),r=e[l];try{e[l]=void 0;var i=!0}catch(e){}var o=s.call(e);return i&&(t?e[l]=r:delete e[l]),o}},333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},639:(e,t,r)=>{var i=r(957),o="object"==typeof self&&self&&self.Object===Object&&self,n=i||o||Function("return this")();e.exports=n},279:(e,t,r)=>{var i=r(218),o=r(771),n=r(841),s=Math.max,l=Math.min;e.exports=function(e,t,r){var a,c,u,d,h,f,p=0,v=!1,g=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=a,i=c;return a=c=void 0,p=t,d=e.apply(i,r)}function w(e){return p=e,h=setTimeout(S,t),v?b(e):d}function y(e){var r=e-f;return void 0===f||r>=t||r<0||g&&e-p>=u}function S(){var e=o();if(y(e))return T(e);h=setTimeout(S,function(e){var r=t-(e-f);return g?l(r,u-(e-p)):r}(e))}function T(e){return h=void 0,m&&a?b(e):(a=c=void 0,d)}function x(){var e=o(),r=y(e);if(a=arguments,c=this,f=e,r){if(void 0===h)return w(f);if(g)return clearTimeout(h),h=setTimeout(S,t),b(f)}return void 0===h&&(h=setTimeout(S,t)),d}return t=n(t)||0,i(r)&&(v=!!r.leading,u=(g="maxWait"in r)?s(n(r.maxWait)||0,t):u,m="trailing"in r?!!r.trailing:m),x.cancel=function(){void 0!==h&&clearTimeout(h),p=0,a=f=c=h=void 0},x.flush=function(){return void 0===h?d:T(o())},x}},218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},448:(e,t,r)=>{var i=r(239),o=r(5);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==i(e)}},771:(e,t,r)=>{var i=r(639);e.exports=function(){return i.Date.now()}},493:(e,t,r)=>{var i=r(279),o=r(218);e.exports=function(e,t,r){var n=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(r)&&(n="leading"in r?!!r.leading:n,s="trailing"in r?!!r.trailing:s),i(e,t,{leading:n,maxWait:t,trailing:s})}},841:(e,t,r)=>{var i=r(218),o=r(448),n=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=l.test(e);return r||a.test(e)?c(e.slice(2),r?2:8):s.test(e)?NaN:+e}}},i={};function o(e){if(i[e])return i[e].exports;var t=i[e]={exports:{}};return r[e](t,t.exports,o),t.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".a4a182613a2fa5b26c89.js",o.miniCssF=e=>"styles."+{377:"a4a182613a2fa5b26c89"}[e]+".css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="beautiful-ballooning:",o.l=(r,i,n)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==n)for(var a=document.getElementsByTagName("script"),c=0;c<a.length;c++){var u=a[c];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+n){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+n),s.src=r),e[r]=[i];var d=(t,i)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(i))),t)return t(i)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,r)=>{var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var n=new Promise(((r,o)=>{i=e[t]=[r,o]}));r.push(i[2]=n);var s=o.p+o.u(t),l=new Error;o.l(s,(r=>{if(o.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,i[1](l)}}),"chunk-"+t)}};var t=self.webpackChunkbeautiful_ballooning=self.webpackChunkbeautiful_ballooning||[],r=t.push.bind(t);t.push=t=>{for(var i,n,[s,l,a]=t,c=0,u=[];c<s.length;c++)n=s[c],o.o(e,n)&&e[n]&&u.push(e[n][0]),e[n]=0;for(i in l)o.o(l,i)&&(o.m[i]=l[i]);for(a&&a(o),r(t);u.length;)u.shift()()}})(),(()=>{"use strict";var e=o(493),t=o.n(e),r=o(279),i=o.n(r);const n=class{constructor(e,r){this.thresholdPercent=r,this.itemsToReveal=e,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=t()(this.calcCaller,200).bind(this),this.events()}events(){window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",i()((()=>{console.log("resize"),this.browserHeight=window.innerHeight}),300))}calcCaller(){console.log("scrol function ran"),this.itemsToReveal.forEach((e=>{0==e.isRevealed&&this.calculateIfScrolledto(e)}))}calculateIfScrolledto(e){window.scrollY+this.browserHeight>e.offsetTop&&(console.log("element calculated"),e.getBoundingClientRect().y/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle)))}hideInitially(){this.itemsToReveal.forEach((e=>{e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}};let s;new class{constructor(){this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}events(){window.addEventListener("scroll",t()((()=>this.runOnScroll()),200)),window.addEventListener("resize",i()((()=>{this.browserHeight=window.innerHeight}),300))}runOnScroll(){this.determineScrollDirection(),window.scrollY>30?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((e=>this.calcSection(e)))}determineScrollDirection(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}calcSection(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){let t=e.getBoundingClientRect().y/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){let t=e.getAttribute("data-matching-link");document.querySelectorAll(`.primary-nav a:not(${t})`).forEach((e=>e.classList.remove("is-current-link"))),document.querySelector(t).classList.add("is-current-link")}else t>38&&"up"==this.scrollDirection&&document.querySelector("#flights-link").classList.remove("is-current-link")}}},new n(document.querySelectorAll(".feature-item"),75),new n(document.querySelectorAll(".testimonial"),60),new class{constructor(){this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}events(){this.menuIcon.addEventListener("click",(()=>this.toggleTheMenu()))}toggleTheMenu(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}},document.querySelectorAll(".open-modal").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),void 0===s?o.e(377).then(o.bind(o,377)).then((e=>{s=new e.default,setTimeout((()=>s.openTheModal()),20)})).catch((()=>console.log("There was a problem!"))):s.openThemodal()}))}))})()})();