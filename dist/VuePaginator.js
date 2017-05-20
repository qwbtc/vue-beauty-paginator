!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuePaginator=t():e.VuePaginator=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(5),i=n(a);e.exports=i.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Pagination",props:{perPages:{type:Number,default:5},pageIndex:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:1}},methods:{prev:function(){this.index>1&&this.go(this.index-1)},next:function(){this.index<this.pages&&this.go(this.index+1)},first:function(){1!==this.index&&this.go(1)},last:function(){this.index!==this.pages&&this.go(this.pages)},go:function(e){this.index!==e&&(this.index=e,this.$emit("change",this.index))}},computed:{pages:function(){return Math.ceil(this.size/this.limit)},pagers:function(){var e=[],t=this.perPages,r=this.pages,n=this.index,a=(t-1)/2,i={start:n-a,end:n+a};i.start<1&&(i.end=i.end+(1-i.start),i.start=1),i.end>r&&(i.start=i.start-(i.end-r),i.end=r),i.start<1&&(i.start=1),this.showPrevMore=i.start>1,this.showNextMore=i.end<r;for(var o=i.start;o<=i.end;o++)e.push(o);return e}},data:function(){return{index:this.pageIndex,limit:this.pageSize,size:this.total||1,showPrevMore:!1,showNextMore:!1}},watch:{pageIndex:function(e){this.index=e||1},pageSize:function(e){this.limit=e||10},total:function(e){this.size=e||1}}}},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,"@font-face{font-family:SentyZHAO;src:url("+r(4)+') format("truetype")}.pager[data-v-7bf6a55b]{display:inline-block;padding:0;margin:1rem 0;font-size:0;list-style:none;user-select:none;font-family:SentyZHAO}.pager>.pager-btn[data-v-7bf6a55b]{display:inline;font-size:1.2rem;position:relative;padding:6px 12px;line-height:1.2rem;text-decoration:none;border:.1rem solid #2c3e50;margin-left:-1px;margin-right:.5rem;cursor:pointer;color:#2c3e50;border-radius:1rem;transition:all .5s ease-out}.pager>.pager-btn[data-v-7bf6a55b]:first-child{margin-left:0}.pager>.pager-btn[data-v-7bf6a55b]:hover{background-color:#2c3e50;border:.1rem solid #2c3e50;color:#fff}.pager>.pager-btn.pager-btn--disabled[data-v-7bf6a55b]{background-color:#2c3e50;color:#fff;cursor:not-allowed;opacity:.6}.pager>.pager-btn.pager-btn--current[data-v-7bf6a55b],.pager>.pager-btn.pager-btn--more[data-v-7bf6a55b]{cursor:default}.pager>.pager-btn.pager-btn--current[data-v-7bf6a55b]{background-color:#2c3e50;color:#fff;position:relative;z-index:1;border-color:#2c3e50}.pager>.pager-btn.pager-btn--more[data-v-7bf6a55b]:hover{background-color:transparent;color:#2c3e50}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(n[i]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&n[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),e.push(o))}},e}},function(e,t,r){e.exports=r.p+"./dist/fonts/SentyZHAO.d29f890.ttf"},function(e,t,r){r(8);var n=r(6)(r(1),r(7),"data-v-7bf6a55b",null);e.exports=n.exports},function(e,t){e.exports=function(e,t,r,n){var a,i=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(a=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),r&&(s._scopeId=r),n){var p=s.computed||(s.computed={});Object.keys(n).forEach(function(e){var t=n[e];p[e]=function(){return t}})}return{esModule:a,exports:i,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",{staticClass:"pager"},[r("li",{class:["pager-btn","pager-btn--first",{"pager-btn--disabled":1===e.index}],on:{click:e.first}},[e._v("first")]),e._v(" "),r("li",{class:["pager-btn","pager-btn--prev",{"pager-btn--disabled":1===e.index}],on:{click:e.prev}},[e._v("prev")]),e._v(" "),e.showPrevMore?r("li",{class:["pager-btn","pager-btn--more"]},[e._v("...")]):e._e(),e._v(" "),e._l(e.pagers,function(t){return r("li",{class:["pager-btn",{"pager-btn--current":e.index===t}],on:{click:function(r){e.go(t)}}},[e._v(e._s(t))])}),e._v(" "),e.showNextMore?r("li",{class:["pager-btn","pager-btn--more"]},[e._v("...")]):e._e(),e._v(" "),r("li",{class:["pager-btn","pager-btn--next",{"pager-btn--disabled":e.index===e.pages}],on:{click:e.next}},[e._v("next")]),e._v(" "),r("li",{class:["pager-btn","pager-btn--last",{"pager-btn--disabled":e.index===e.pages}],on:{click:e.last}},[e._v("last")])],2)])},staticRenderFns:[]}},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),r(9)("6f61d756",n,!0)},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=c[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(i(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(i(r.parts[a]));c[r.id]={id:r.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(g)return h;n.parentNode.removeChild(n)}if(b){var i=l++;n=f||(f=a()),t=o.bind(null,n,i,!1),r=o.bind(null,n,i,!0)}else n=a(),t=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function o(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=v(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p="undefined"!=typeof document,d=r(10),c={},u=p&&(document.head||document.getElementsByTagName("head")[0]),f=null,l=0,g=!1,h=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){g=r;var a=d(e,t);return n(a),function(t){for(var r=[],i=0;i<a.length;i++){var o=a[i],s=c[o.id];s.refs--,r.push(s)}t?(a=d(e,t),n(a)):a=[];for(var i=0;i<r.length;i++){var s=r[i];if(0===s.refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete c[s.id]}}}};var v=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],p=i[2],d=i[3],c={id:e+":"+a,css:s,media:p,sourceMap:d};n[o]?n[o].parts.push(c):r.push(n[o]={id:o,parts:[c]})}return r}}])});