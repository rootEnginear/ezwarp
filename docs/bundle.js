var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function a(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c="undefined"!=typeof window?()=>window.performance.now():()=>Date.now(),i=t=>requestAnimationFrame(t);const u=new Set;let s,d=!1;function f(){u.forEach(t=>{t[0](c())||(u.delete(t),t[1]())}),(d=u.size>0)&&i(f)}function p(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function _(t,e,n){t.style.setProperty(e,n)}function E(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let k,S=0,C={};function O(t,e,n,r,o,a,l,c=0){const i=16.666/r;let u="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*a(t);u+=100*t+`%{${l(r,1-r)}}\n`}const d=u+`100% {${l(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(d)}_${c}`;if(!C[f]){if(!s){const t=y("style");document.head.appendChild(t),s=t.sheet}C[f]=!0,s.insertRule(`@keyframes ${f} ${d}`,s.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${o}ms 1 both`,S+=1,f}function D(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--S&&i(()=>{if(S)return;let t=s.cssRules.length;for(;t--;)s.deleteRule(t);C={}})}function j(t){k=t}function N(t){(function(){if(!k)throw new Error("Function called outside component initialization");return k})().$$.on_mount.push(t)}const L=[],R=[],A=[],H=[],J=Promise.resolve();let z,M=!1;function P(t){A.push(t)}function F(){const t=new Set;do{for(;L.length;){const t=L.shift();j(t),I(t.$$)}for(;R.length;)R.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];t.has(n)||(n(),t.add(n))}A.length=0}while(L.length);for(;H.length;)H.pop()();M=!1}function I(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(P))}function q(t,e,n){t.dispatchEvent(E(`${e?"intro":"outro"}${n}`))}const B=new Set;let T;function K(){T={r:0,c:[],p:T}}function W(){T.r||o(T.c),T=T.p}function U(t,e){t&&t.i&&(B.delete(t),t.i(e))}function Z(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),T.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function G(n,r,l,s){let p=r(n,l),h=s?0:1,m=null,g=null,y=null;function $(){y&&D(n,y)}function v(t,e){const n=t.b-h;return e*=Math.abs(n),{a:h,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(r){const{delay:a=0,duration:l=300,easing:s=e,tick:b=t,css:w}=p,x={start:c()+a,b:r};r||(x.group=T,T.r+=1),m?g=x:(w&&($(),y=O(n,h,r,l,a,s,w)),r&&b(0,1),m=v(x,l),P(()=>q(n,r,"start")),function(t){let e;d||(d=!0,i(f)),new Promise(n=>{u.add(e=[t,n])})}(t=>{if(g&&t>g.start&&(m=v(g,l),g=null,q(n,m.b,"start"),w&&($(),y=O(n,h,m.b,m.duration,0,s,p.css))),m)if(t>=m.end)b(h=m.b,1-h),q(n,m.b,"end"),g||(m.b?$():--m.group.r||o(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;h=m.a+m.d*s(e/m.duration),b(h,1-h)}return!(!m&&!g)}))}return{run(t){a(p)?(z||(z=Promise.resolve()).then(()=>{z=null}),z).then(()=>{p=p(),b(t)}):b(t)},end(){$(),m=g=null}}}function Q(t,e,r){const{fragment:l,on_mount:c,on_destroy:i,after_update:u}=t.$$;l.m(e,r),P(()=>{const e=c.map(n).filter(a);i?i.push(...e):o(e),t.$$.on_mount=[]}),u.forEach(P)}function V(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function X(t,e){t.$$.dirty||(L.push(t),M||(M=!0,J.then(F)),t.$$.dirty=r()),t.$$.dirty[e]=!0}function Y(e,n,a,l,c,i){const u=k;j(e);const s=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:null};let f=!1;var p;d.ctx=a?a(e,s,(t,n)=>{d.ctx&&c(d.ctx[t],d.ctx[t]=n)&&(d.bound[t]&&d.bound[t](n),f&&X(e,t))}):s,d.update(),f=!0,o(d.before_update),d.fragment=l(d.ctx),n.target&&(n.hydrate?d.fragment.l((p=n.target,Array.from(p.childNodes))):d.fragment.c(),n.intro&&U(e.$$.fragment),Q(e,n.target,n.anchor),F()),j(u)}class tt{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function et(t,{delay:e=0,duration:n=400}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>`opacity: ${t*r}`}}function nt(t,e,n){const r=Object.create(t);return r.url=e[n],r.i=n,r}function rt(t){var e,n,r,o,a,l,c,i,u,s,d=t.url;function f(){return t.click_handler(t)}return{c(){e=y("li"),n=y("a"),r=$(d),a=v(),(l=y("span")).textContent="❌",c=v(),w(n,"class","warp"),w(n,"href",o=t.url),w(l,"aria-label","delete"),w(l,"role","button"),w(l,"class","delete"),s=b(l,"click",f)},m(t,o){h(t,e,o),p(e,n),p(n,r),p(e,a),p(e,l),p(e,c),u=!0},p(e,a){t=a,u&&!e.urls||d===(d=t.url)||x(r,d),u&&!e.urls||o===(o=t.url)||w(n,"href",o)},i(t){u||(P(()=>{i||(i=G(e,et,{},!0)),i.run(1)}),u=!0)},o(t){i||(i=G(e,et,{},!1)),i.run(0),u=!1},d(t){t&&(m(e),i&&i.end()),s()}}}function ot(t){for(var e,n,r,o,a,l,c,i,u=new Date(+t.day).toLocaleDateString(),s=t.urls,d=[],f=0;f<s.length;f+=1)d[f]=rt(nt(t,s,f));const b=t=>Z(d[t],1,1,()=>{d[t]=null});return{c(){e=y("ul"),n=y("strong"),r=$("— "),o=$(u),a=$(" —"),l=v();for(var t=0;t<d.length;t+=1)d[t].c();w(e,"class","warplist")},m(t,c){h(t,e,c),p(e,n),p(n,r),p(n,o),p(n,a),p(e,l);for(var u=0;u<d.length;u+=1)d[u].m(e,null);i=!0},p(t,n){if(i&&!t.day||u===(u=new Date(+n.day).toLocaleDateString())||x(o,u),t.urls){s=n.urls;for(var r=0;r<s.length;r+=1){const o=nt(n,s,r);d[r]?(d[r].p(t,o),U(d[r],1)):(d[r]=rt(o),d[r].c(),U(d[r],1),d[r].m(e,null))}for(K(),r=s.length;r<d.length;r+=1)b(r);W()}},i(t){if(!i){for(var n=0;n<s.length;n+=1)U(d[n]);P(()=>{c||(c=G(e,et,{},!0)),c.run(1)}),i=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)Z(d[t]);c||(c=G(e,et,{},!1)),c.run(0),i=!1},d(t){t&&m(e),g(d,t),t&&c&&c.end()}}}function at(t,e,n){const r=function(){const t=k;return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=E(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}();let{day:o=0,urls:a=[]}=e;return t.$set=(t=>{"day"in t&&n("day",o=t.day),"urls"in t&&n("urls",a=t.urls)}),{dispatch:r,day:o,urls:a,click_handler:function({i:t}){return r("delete",{day:o,index:t})}}}class lt extends tt{constructor(t){super(),Y(this,t,at,ot,l,["day","urls"])}}function ct(t,e,n){const r=Object.create(t);return r.day=e[n],r}function it(t){var e,n=new lt({props:{day:t.day,urls:t.data[t.day]}});return n.$on("delete",t.deleteData),{c(){n.$$.fragment.c()},m(t,r){Q(n,t,r),e=!0},p(t,e){var r={};t.data&&(r.day=e.day),t.data&&(r.urls=e.data[e.day]),n.$set(r)},i(t){e||(U(n.$$.fragment,t),e=!0)},o(t){Z(n.$$.fragment,t),e=!1},d(t){V(n,t)}}}function ut(t){var e;return{c(){(e=y("h2")).innerHTML='<span class="hidden-small">—</span>\n\t\t\t          ไม่มีวาป!\n\t\t\t          <span class="hidden-small">—</span>',_(e,"margin","3rem 0 5rem"),_(e,"flex-grow","1")},m(t,n){h(t,e,n)},d(t){t&&m(e)}}}function st(t){var e,n,r;return{c(){e=y("div"),(n=y("button")).textContent="🗑️ ล้างประวัติ",w(n,"aria-label","clear history"),w(n,"class","destroy"),_(e,"margin-top","3rem"),r=b(n,"click",t.dropData)},m(t,r){h(t,e,r),p(e,n)},d(t){t&&m(e),r()}}}function dt(t){for(var e,n,r,a,l,c,i,u,s,d,f,E,k,S,C,O,D,j,N,L,R,A=Object.keys(t.data),H=[],J=0;J<A.length;J+=1)H[J]=it(ct(t,A,J));const z=t=>Z(H[t],1,1,()=>{H[t]=null});function M(t){return"{}"!==t.JSON.stringify(t.data)?st:ut}var P=M(t),F=P(t);return{c(){e=y("div"),n=y("div"),r=$(t.hours),a=$(":"),l=$(t.minutes),c=v(),i=y("div"),(u=y("h1")).textContent="EZWARP",s=v(),d=y("div"),f=y("input"),E=v(),k=y("button"),S=v(),C=y("div"),O=y("div");for(var o=0;o<H.length;o+=1)H[o].c();D=v(),F.c(),j=v(),(N=y("footer")).innerHTML='\n\t\t\t        Code with 🍆🍑💦 by rootEnginear\n\t\t\t        <br> <div style="margin-top:1rem;font-size:.8em">Web For Fun #1</div>',w(n,"class","time"),_(u,"margin-bottom","4rem"),w(f,"aria-label","warp"),w(f,"class","control expanded"),w(f,"placeholder","แปะวาปเบาๆ~"),w(k,"aria-label","go to entered warp"),w(k,"class","control search"),w(d,"class","field"),_(O,"display","flex"),_(O,"flex-wrap","wrap"),_(C,"margin-top","5rem"),_(i,"text-align","center"),w(e,"class","container"),R=[b(f,"input",t.input_input_handler),b(f,"keypress",t.searchKeypressHandler),b(k,"click",t.gotoSite)]},m(o,m){h(o,e,m),p(e,n),p(n,r),p(n,a),p(n,l),p(e,c),p(e,i),p(i,u),p(i,s),p(i,d),p(d,f),f.value=t.search,p(d,E),p(d,k),p(i,S),p(i,C),p(C,O);for(var g=0;g<H.length;g+=1)H[g].m(O,null);p(C,D),F.m(C,null),p(C,j),p(C,N),L=!0},p(t,e){if(L&&!t.hours||x(r,e.hours),L&&!t.minutes||x(l,e.minutes),t.search&&f.value!==e.search&&(f.value=e.search),t.data){A=Object.keys(e.data);for(var n=0;n<A.length;n+=1){const r=ct(e,A,n);H[n]?(H[n].p(t,r),U(H[n],1)):(H[n]=it(r),H[n].c(),U(H[n],1),H[n].m(O,null))}for(K(),n=A.length;n<H.length;n+=1)z(n);W()}P!==(P=M(e))&&(F.d(1),(F=P(e))&&(F.c(),F.m(C,j)))},i(t){if(!L){for(var e=0;e<A.length;e+=1)U(H[e]);L=!0}},o(t){H=H.filter(Boolean);for(let t=0;t<H.length;t+=1)Z(H[t]);L=!1},d(t){t&&m(e),g(H,t),F.d(),o(R)}}}const ft="ezwarp";function pt(t){localStorage.setItem(ft,t)}function ht(t,e,n){let r,o,a,l={},c="",i=function(t){let e="1291421431401440880780791521531540890831441361581501531581600911451581570963",n=e[e.length-1],r=(e=e.slice(0,-1)).match(new RegExp(".{1,"+n+"}","g")).map(t=>+t),o=r.length,a="";return r.forEach((t,e)=>{a+=String.fromCharCode(t-e-o)}),a}(),u=new Date;function s(){if(""===c.trim())return;let t=document.createElement("a");"!"===r[0]?t.href=i+r.slice(1):t.href=r,function(t){let e=+(new Date).setHours(0,0,0,0),r=l[e]||[];r.push(t);let o={};o[e]=r,n("data",l={...o,...l}),pt(JSON.stringify(l))}(t.href),t.target="_blank",t.click()}function d(){n("data",l=JSON.parse(localStorage.getItem(ft)||"{}"))}return N(()=>{d();const t=setInterval(()=>{n("time",u=new Date)},1e3);return()=>{clearInterval(t)}}),t.$$.update=((t={search:1,time:1})=>{t.search&&(r=function(t){let e=t;return["เอ","บี","ซี","ดี","อี","เอฟ","จี","เอช","ไอ","เจ","เค","แอล","เอ็ม","เอ็น","โอ","พี","คิว","อาร์","อา","เอส","ที","ยู","วี","ดับเบิ้ลยู","เอ็กซ์","วาย","แซด"].forEach((t,n)=>{e=e.replace(new RegExp(t,"g"),"abcdefghijklmnopqrrstuvwxyz"[n])}),(e=e.trim().split(" ").join("").replace(/ดอท/g,".").replace(/คอม/g,"com").replace(/เนท/g,"net").replace(/เนต/g,"net").replace(/เน็ต/g,"net").replace(/เน็ท/g,"net")).match(/.-\d/)&&!e.match("/")?e="!"+e.toLocaleUpperCase():"http"!==e.slice(0,4)&&(e="https://"+e),e}(c)),t.time&&n("hours",o=(t=>t<10?"0"+t:t)(u.getHours())),t.time&&n("minutes",a=(t=>t<10?"0"+t:t)(u.getMinutes()))}),{data:l,search:c,gotoSite:s,searchKeypressHandler:function(t){if("Enter"===t.key)return s()},deleteData:function(t){l[t.detail.day].splice(t.detail.index,1),l[t.detail.day].length||delete l[t.detail.day],n("data",l),pt(JSON.stringify(l))},dropData:function(){pt("{}"),d()},hours:o,minutes:a,JSON:JSON,input_input_handler:function(){c=this.value,n("search",c)}}}return new class extends tt{constructor(t){super(),Y(this,t,ht,dt,l,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
