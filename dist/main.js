(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),o=n.n(a),r=n(645),i=n.n(r)()(o());i.push([e.id,"\n.coffee-img{\n    height: 200px;\n    width: 250px;\n}\n\n.header-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.button-nav.active {\n    border-bottom: 2px solid black;\n  }",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,a);a.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var s=a(e,o),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),i=n.n(r),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(426),m={};function h(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const o=document.createElement("p");return o.textContent=t,n.appendChild(a),n.appendChild(o),n}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=function(){document.getElementById("main").appendChild(function(){const e=document.createElement("div");e.classList.add("menu"),e.appendChild(h("Pancakes","Two buttermilk pancakes, two eggs your way and a side of breakfast meat")),e.appendChild(h("French Toast","Sliced brioche stuffed with sweet cream cheese glaze, topped with chocolate, strawberries, toasted coconut flakes, vanilla anglaise")),e.appendChild(h("Waffles","Fluffy, sugar dusted waffle served with whipped butter.")),e.appendChild(h("Classic Breakfast","Two eggs your way, a side of breakfast meat, breakfast potatoes and your choice of baked good")),e.appendChild(h("Egg Benedict","Canadian bacon and two poached eggs over a toasted english muffin served with hollandaise sauce.")),e.appendChild(h("Biscuits and Gravy","Two buttermilk biscuits smothered in sausage gravy")),e.appendChild(h("Breakfast Sandwich","English muffin filled with egg, your choice of cheese, and your choice of breakfast meat.")),e.appendChild(h("Breakfast Tacos","3 flour or corn tortillas filled with scrambled eggs, potatoes and cheese. Served with salsa.")),e.appendChild(h("Migas","Eggs scrambled with tortilla strips, jalapenos, chorizo, onions, tomatoes, cheese and avocado. Served with black beans and a side of tortillas."))}())},g=function(){document.getElementById("main").appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.textContent="123-456-7890";const n=document.createElement("p");return n.textContent="123 Main St, Everytown, TX USA",e.appendChild(t),e.appendChild(n),e}())};function b(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}document.getElementById("content").appendChild(function(){const e=document.createElement("div");return e.classList.add("main"),e.setAttribute("id","main"),e}()),function(){const e=document.getElementById("nav");e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("button");t.classList.add("button-nav"),t.textContent="Menu",t.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(t),v())}));const n=document.createElement("button");return n.classList.add("button-nav"),n.textContent="Contact",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(n),g())})),e.appendChild(t),e.appendChild(n),e}())}(),document.getElementById("header").appendChild(function(){const e=document.createElement("div");e.classList.add("header-container");const t=document.createElement("img");t.classList.add("coffee-img"),t.src="coffee.jpg",t.altg="coffee cup";const n=document.createElement("H1");n.innerText="Dina's Diner";const a=document.createElement("p");return a.innerText="Dina's Diner was established in 1952 when Dina became an empty nester and missed being able to cook delicious meals for more than just her and her husband. Dina's Diner has been a pillar of this small town and you will not find any finer food.",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}()),v(),g()})()})();