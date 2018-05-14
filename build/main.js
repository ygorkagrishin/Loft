!function(){"use strict";var a=document.querySelector("#js-acco").children;function c(e){var t=e;t.classList.contains("active")&&t.classList.remove("active"),t.getElementsByClassName("acco__cont")[0].parentNode.removeAttribute("style")}function n(e){var t=e;!function(e){for(var t=0,n=a.length-1;t<=n;t++)c(a[t])}(),t.classList.contains("active")||t.classList.add("active");var n=t.getElementsByClassName("acco__cont")[0];n.parentNode.style.height=n.offsetHeight+"px"}function e(e){var t=this;t.classList.contains("active")?c(t):n(t)}for(var t=0,s=a.length-1;t<=s;t++){a[t].addEventListener("click",e,!1)}}();var hor=function(){for(var c=document.querySelectorAll(".js-h-acco-sect"),s=function(e){var t=(e=e).getElementsByClassName("js-h-acco-fade")[0];e.classList.contains("active")&&e.classList.remove("active"),t.classList.contains("js-h-acco-fade--in")&&(t.classList.remove("js-h-acco-fade--in"),t.classList.add("js-h-acco-fade--out"))},e=function(e){var t=this;t.classList.contains("active")?s(t):function(e){for(var t=(e=e).getElementsByClassName("js-h-acco-fade")[0],n=0,a=c.length-1;n<=a;n++)s(c[n]);e.classList.contains("active")||e.classList.add("active"),t.classList.contains("js-h-acco-fade--out")&&(t.classList.remove("js-h-acco-fade--out"),t.classList.add("js-h-acco-fade--in"))}(t)},t=0,n=c.length-1;t<=n;t++)c[t].addEventListener("click",e)}(),ajax=void $("#js-form").on("submit",function(e){e.preventDefault();var a=$(this),t=a.attr("action"),n=a.attr("method"),c=a.serialize();$.ajax({type:n,url:t,data:c,success:function(){a.trigger("reset");var t=$(".form__answer"),n=$(".form__answer-close");t.hasClass("active")||t.addClass("active"),n.on("click",function(e){e.preventDefault(),t.hasClass("active")&&t.removeClass("active"),n.off()})}})});!function(){"use strict";var n,a,c,s,r=document.querySelector("#js-container"),i=r.children,o=document.querySelector(".js-nav").getElementsByTagName("a"),l="data-anchor",u=[],v=700,d=0,f=i.length-1;function e(e){return e.preventDefault(),SCROLL||(SCROLL=!0),function(e){for(var t=0,n=i.length-1;t<=n;t++)i[t].id===e&&(d=t);return m(i[d])}(this.getAttribute(l))}function m(e){var t,n=e.offsetTop;t=n,r.style.transform="translateY(-"+t+"px)",r.style.transition="all "+v+"ms",h(d)}function h(e){for(var t=o[e],n=0,a=o.length-1;n<=a;n++){var c=o[n];c.classList.contains("active")&&c.classList.remove("active")}t.classList.contains("active")||t.classList.add("active")}!function(){for(var e=0,t=o.length-1;e<=t;e++)o[e].hasAttribute(l)&&u.push(o[e].getAttribute(l))}(),function(){for(var e=0,t=i.length-1;e<=t;e++)i[e].hasAttribute(l)||(i[e].id=u[e])}(),h(d),r.addEventListener("touchstart",function(e){if(1===e.touches.length){var t=e.changedTouches[0];n=t.screenX,a=t.screenY}}),r.addEventListener("touchmove",function(e){e.preventDefault()}),r.addEventListener("touchend",function(e){var t=e.changedTouches[0];c=t.screenX,s=t.screenY,Math.abs(n-c)>=Math.abs(a-s)||(d!==f&&s<a&&SCROLL?m(i[++d]):0!==d&&a<s&&SCROLL&&m(i[--d]))});for(var t=document.querySelectorAll("["+l+"]"),L=0,g=t.length-1;L<=g;L++)t[L].addEventListener("click",e)}();var SCROLL=!1;!function(){"use strict";var a="data-src",e=document.querySelectorAll("[data-src]");if(!("IntersectionObserver"in window))for(var t=0,n=e.length-1;t<=n;t++){r(s=e[t])}if("IntersectionObserver"in window){var c=new IntersectionObserver(function(e){for(var t=0,n=e.length-1;t<=n;t++){var a=e[t];0<a.intersectionRatio&&(c.unobserve(a.target),r(a.target))}},{root:null,rootMargin:"0px",threshold:.5});for(t=0,n=e.length-1;t<=n;t++){var s=e[t];c.observe(s)}}function r(e){var t=e,n=t.getAttribute(a);t.style.backgroundImage="url("+n+")"}}(),function(){var n,a;ymaps.ready(function(){n=new ymaps.Map("map",{center:[59.94,30.3],zoom:11,controls:["zoomControl"],behaviors:["drag"]});for(var e=[[59.97,30.31],[59.95,30.38],[59.91,30.48],[59.88,30.31]],t=0;t<=e.length-1;t++)a=new ymaps.Placemark(e[t],{},{iconLayout:"default#image",iconImageHref:"image/svg/map-marker.svg",iconImageSize:[46,57.727]}),n.geoObjects.add(a)})}(),function(){"use strict";var e=document.querySelector(".js-hamburger-menu-trig"),t=document.querySelector(".js-navbar"),n=t.getElementsByTagName("a"),a=document.querySelector(".js-navbar-close");function c(){if(SCROLL=!0,t.classList.contains("active"))return t.classList.remove("active")}e.addEventListener("click",function(){if(SCROLL=!1,!t.classList.contains("active"))return t.classList.add("active")});for(var s=0,r=n.length-1;s<=r;s++)n[s].addEventListener("click",c);a.addEventListener("click",c)}(),window.addEventListener("orientationchange",function(){var e=window.orientation,t=document.querySelector(".landscape");switch(e){case 0:t.classList.contains("active")&&t.classList.remove("active");break;case 90:case-90:t.classList.contains("active")||t.classList.add("active")}}),window.addEventListener("load",function(){document.querySelector("#preloader").style.display="none",SCROLL=!0}),function(){"use strict";var t,e=document.querySelectorAll("[data-popup]"),n=(document.querySelectorAll(".review__popup"),document.querySelectorAll(".js-popup-close"));function a(e){e.preventDefault(),(t=document.querySelector(this.getAttribute("data-popup"))).classList.contains("active")?c(t):(SCROLL=!1,t.classList.add("active"))}function c(e){return SCROLL=!0,t.classList.remove("active")}for(var s=0,r=n.length-1;s<=r;s++)n[s].addEventListener("click",c);for(s=0,r=e.length-1;s<=r;s++)e[s].addEventListener("click",a)}(),function(){"use strict";var e,n,a,c,s,r,i,t,o=document.querySelector("#carousel"),l=o.firstChild,u=l.children,v=document.querySelector(".js-arrow-prev"),d=document.querySelector(".js-arrow-next"),f=0,m=700,h=u[0].cloneNode(!0);l.appendChild(h),e=u.length-1;var L=document.querySelectorAll(".caro__comp"),g=document.querySelectorAll(".caro__comp-close");function y(){--f<0&&(f=e,q(),y()),E(),setTimeout(C,20)}function S(){e<++f&&(f=0,q(),S()),E(),setTimeout(C,20)}function p(e){return e.classList.remove("active")}function E(){for(var e=0,t=L.length-1;e<=t;e++){var n=L[e];if(n.classList.contains("active"))return p(n)}}function b(){var e;this.classList.contains("active")?p(this):(e=this,clearInterval(t),e.classList.add("active"))}v.addEventListener("click",function(){clearInterval(t),y()}),d.addEventListener("click",function(){clearInterval(t),S()});for(var w=0,j=g.length-1;w<=j;w++)L[w].addEventListener("click",b,!1),g[w].addEventListener("click",b,!1);function C(){var e=l.style;e.transition="all "+m+"ms",e.transform="translateX(-"+f+"00%)"}function q(){var e=l.style;e.transition="0ms",e.transform="translateX(-"+f+"00%)"}o.addEventListener("touchstart",function(e){var t=e.changedTouches[0];n=t.clientX,a=t.clientY}),o.addEventListener("touchmove",function(){clearInterval(t)}),o.addEventListener("touchend",function(e){var t=e.changedTouches[0];c=t.clientX,s=t.clientY,r=n-c,i=a-s,Math.abs(i)>=Math.abs(r)||(c<n?S():y())}),t=setInterval(S,5e3)}(),function(e,t){"use strict";if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return;var n,a,c="localStorage"in e&&null!==e.localStorage,s=function(){t.body.insertAdjacentHTML("afterbegin",a)},r=function(){t.body?s():t.addEventListener("DOMContentLoaded",s)};if(c&&1==localStorage.getItem("inlineSVGrev")&&(a=localStorage.getItem("inlineSVGdata")))return r();try{(n=new XMLHttpRequest).open("GET","svg/symbols.svg",!0),n.onload=function(){200<=n.status&&n.status<400&&(a=n.responseText,r(),c&&(localStorage.setItem("inlineSVGdata",a),localStorage.setItem("inlineSVGrev",1)))},n.send()}catch(e){}}(window,document);