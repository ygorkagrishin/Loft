!function(){"use strict";var s=document.querySelector("#js-acco").getElementsByClassName("js-acco-sect");function r(e){var t=e.querySelector(".js-acco-box");e.classList.contains("active")&&e.classList.remove("active"),t.removeAttribute("style")}function e(){var e=this;e.classList.contains("active")?r(e):function(e){for(var t=0,a=s.length-1;t<=a;t++)r(s[t]);var n=e.querySelector(".js-acco-box"),c=n.firstChild.offsetHeight+"px";e.classList.contains("active")||e.classList.add("active"),n.style.height=c}(e)}for(var t=0,a=s.length-1;t<=a;t++)s[t].addEventListener("click",e,!1)}();var hor=function(){for(var c=document.querySelectorAll(".js-h-acco-sect"),s=function(e){var t=(e=e).getElementsByClassName("js-h-acco-fade")[0];e.classList.contains("active")&&e.classList.remove("active"),t.classList.contains("js-h-acco-fade--in")&&(t.classList.remove("js-h-acco-fade--in"),t.classList.add("js-h-acco-fade--out"))},e=function(e){var t=this;t.classList.contains("active")?s(t):function(e){for(var t=(e=e).getElementsByClassName("js-h-acco-fade")[0],a=0,n=c.length-1;a<=n;a++)s(c[a]);e.classList.contains("active")||e.classList.add("active"),t.classList.contains("js-h-acco-fade--out")&&(t.classList.remove("js-h-acco-fade--out"),t.classList.add("js-h-acco-fade--in"))}(t)},t=0,a=c.length-1;t<=a;t++)c[t].addEventListener("click",e)}(),ajax=void $("#form").on("submit",function(e){e.preventDefault();var n=$(this),t=n.attr("action"),a=n.attr("method"),c=n.serialize();$.ajax({type:a,url:t,data:c,success:function(){var t=$(".form__answer"),a=$(".form__answer-close");t.hasClass("active")||t.addClass("active"),a.on("click",function(e){e.preventDefault(),t.hasClass("active")&&t.removeClass("active"),a.off()}),n.trigger("reset")}})});!function(){"use strict";var a,n,c,s,r=document.querySelector("#js-container"),i=r.children,o=document.querySelector(".js-nav").getElementsByTagName("a"),l="data-anchor",u=[],v=700,d=0,f=i.length-1;function e(e){e.preventDefault(),function(e){for(var t=0,a=i.length-1;t<=a;t++)i[t].id===e&&(d=t);m(i[d])}(this.getAttribute(l))}function m(e){var t,a=e.offsetTop;t=a,r.style="transform: translateY(-"+t+"px);              transition: all "+v+"ms",h(d)}function h(e){for(var t=o[e],a=0,n=o.length-1;a<=n;a++){var c=o[a];c.classList.contains("active")&&c.classList.remove("active")}t.classList.contains("active")||t.classList.add("active")}!function(){for(var e=0,t=o.length-1;e<=t;e++)o[e].hasAttribute(l)&&u.push(o[e].getAttribute(l))}(),function(){for(var e=0,t=i.length-1;e<=t;e++)i[e].hasAttribute(l)||(i[e].id=u[e])}(),h(d),r.addEventListener("touchstart",function(e){if(1===e.touches.length){var t=e.changedTouches[0];a=t.screenX,n=t.screenY}}),r.addEventListener("touchmove",function(e){e.preventDefault()}),r.addEventListener("touchend",function(e){var t=e.changedTouches[0];c=t.screenX,s=t.screenY,Math.abs(a-c)>=Math.abs(n-s)||(d!==f&&s<n?m(i[++d]):0!==d&&n<s&&m(i[--d]))});for(var t=document.querySelectorAll("["+l+"]"),g=0,L=t.length-1;g<=L;g++)t[g].addEventListener("click",e)}(),function(){"use strict";var n="data-src",e=document.querySelectorAll("[data-src]");if(!("IntersectionObserver"in window))for(var t=0,a=e.length-1;t<=a;t++){r(s=e[t])}var c=new IntersectionObserver(function(e){for(var t=0,a=e.length-1;t<=a;t++){var n=e[t];0<n.intersectionRatio&&(c.unobserve(n.target),r(n.target))}},{root:null,rootMargin:"0px",threshold:.5});for(t=0,a=e.length-1;t<=a;t++){var s=e[t];c.observe(s)}function r(e){var t=e,a=t.getAttribute(n);t.style.backgroundImage="url("+a+")"}}(),function(){var a,n;ymaps.ready(function(){a=new ymaps.Map("map",{center:[59.94,30.3],zoom:11,controls:["zoomControl"],behaviors:["drag"]});for(var e=[[59.97,30.31],[59.95,30.38],[59.91,30.48],[59.88,30.31]],t=0;t<=e.length-1;t++)n=new ymaps.Placemark(e[t],{},{iconLayout:"default#image",iconImageHref:"image/svg/map-marker.svg",iconImageSize:[46,57.727]}),a.geoObjects.add(n)})}(),function(){"use strict";var e=document.querySelector(".js-menu-trig"),t=document.querySelector(".js-navbar"),a=t.getElementsByTagName("a"),n=document.querySelector(".js-navbar-close");function c(){if(t.classList.contains("active"))return t.classList.remove("active")}e.addEventListener("click",function(){if(!t.classList.contains("active"))return t.classList.add("active")});for(var s=0,r=a.length-1;s<=r;s++)a[s].addEventListener("click",c);n.addEventListener("click",c)}(),window.addEventListener("orientationchange",function(){var e=screen.msOrientation||screen.orientation||screen.mozOrientation,t=document.querySelector(".page__landscape-err");if(e)switch(e.angle){case 0:t.classList.contains("active")&&t.classList.remove("active");break;case 90:case-90:t.classList.contains("active")||t.classList.add("active")}}),window.addEventListener("load",function(){document.querySelector("#preloader").style.display="none"}),function(){"use strict";var t,e=document.querySelectorAll("[data-popup]"),a=document.querySelectorAll(".js-popup-close");function n(e){if(e.preventDefault(),!(t=document.querySelector(this.getAttribute("data-popup"))).classList.contains("active"))return t.classList.add("active")}function c(){if(t.classList.contains("active"))return t.classList.remove("active")}for(var s=0,r=a.length-1;s<=r;s++)a[s].addEventListener("click",c);for(s=0,r=e.length-1;s<=r;s++)e[s].addEventListener("click",n)}(),function(){"use strict";var e,a,n,c,s,r,i,t,o=document.querySelector("#carousel"),l=o.firstChild,u=l.children,v=document.querySelector(".js-arrow-prev"),d=document.querySelector(".js-arrow-next"),f=0,m=700,h=u[0].cloneNode(!0);l.appendChild(h),e=u.length-1;var g=document.querySelectorAll(".caro__comp"),L=document.querySelectorAll(".caro__comp-close");function y(){--f<0&&(f=e,k(),y()),E(),setTimeout(w,20)}function p(){e<++f&&(f=0,k(),p()),E(),setTimeout(w,20)}function S(e){return e.classList.remove("active")}function E(){for(var e=0,t=g.length-1;e<=t;e++){var a=g[e];if(a.classList.contains("active"))return S(a)}}function b(){var e;this.classList.contains("active")?S(this):(e=this,clearInterval(t),e.classList.add("active"))}v.addEventListener("click",function(){clearInterval(t),y()}),d.addEventListener("click",function(){clearInterval(t),p()});for(var j=0,q=L.length-1;j<=q;j++)g[j].addEventListener("click",b,!1),L[j].addEventListener("click",b,!1);function w(){var e=l.style;e.transition="all "+m+"ms",e.transform="translateX(-"+f+"00%)"}function k(){var e=l.style;e.transition="0ms",e.transform="translateX(-"+f+"00%)"}o.addEventListener("touchstart",function(e){var t=e.changedTouches[0];a=t.clientX,n=t.clientY}),o.addEventListener("touchmove",function(){clearInterval(t)}),o.addEventListener("touchend",function(e){var t=e.changedTouches[0];c=t.clientX,s=t.clientY,r=a-c,i=n-s,Math.abs(i)>=Math.abs(r)||(c<a?p():y())}),t=setInterval(p,5e3)}(),function(e,t){"use strict";if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return;var a,n,c="localStorage"in e&&null!==e.localStorage,s=function(){t.body.insertAdjacentHTML("afterbegin",n)},r=function(){t.body?s():t.addEventListener("DOMContentLoaded",s)};if(c&&1==localStorage.getItem("inlineSVGrev")&&(n=localStorage.getItem("inlineSVGdata")))return r();try{(a=new XMLHttpRequest).open("GET","svg/symbols.svg",!0),a.onload=function(){200<=a.status&&a.status<400&&(n=a.responseText,r(),c&&(localStorage.setItem("inlineSVGdata",n),localStorage.setItem("inlineSVGrev",1)))},a.send()}catch(e){}}(window,document);