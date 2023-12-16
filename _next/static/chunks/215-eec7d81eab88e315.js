"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[215],{70335:function(n,t,e){e.d(t,{Z:function(){return W}});var r=e(2784);function o(n){return function(n){return"[object Object]"===Object.prototype.toString.call(n)}(n)||Array.isArray(n)}function i(n,t){const e=Object.keys(n),r=Object.keys(t);if(e.length!==r.length)return!1;return JSON.stringify(Object.keys(n.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&e.every((e=>{const r=n[e],c=t[e];return"function"===typeof r?`${r}`===`${c}`:o(r)&&o(c)?i(r,c):r===c}))}function c(n){return n.concat().sort(((n,t)=>n.name>t.name?1:-1)).map((n=>n.options))}function u(n){return"number"===typeof n}function s(n){return"string"===typeof n}function a(n){return"boolean"===typeof n}function l(n){return"[object Object]"===Object.prototype.toString.call(n)}function f(n){return Math.abs(n)}function d(n){return Math.sign(n)}function m(n,t){return f(n-t)}function p(n){return h(n).map(Number)}function g(n){return n[v(n)]}function v(n){return Math.max(0,n.length-1)}function h(n){return Object.keys(n)}function x(n,t){return[n,t].reduce(((n,t)=>(h(t).forEach((e=>{const r=n[e],o=t[e],i=l(r)&&l(o);n[e]=i?x(r,o):o})),n)),{})}function b(n,t){return"undefined"!==typeof t.MouseEvent&&n instanceof t.MouseEvent}function y(n,t){const e={start:function(){return 0},center:function(n){return r(n)/2},end:r};function r(n){return t-n}return{measure:function(r){return u(n)?t*Number(n):e[n](r)}}}function M(n,t){const e=f(n-t);function r(t){return t<n}function o(n){return n>t}function i(n){return r(n)||o(n)}return{length:e,max:t,min:n,constrain:function(e){return i(e)?r(e)?n:t:e},reachedAny:i,reachedMax:o,reachedMin:r,removeOffset:function(n){return e?n-e*Math.ceil((n-t)/e):n}}}function S(n,t,e){const{constrain:r}=M(0,n),o=n+1;let i=c(t);function c(n){return e?f((o+n)%o):r(n)}function u(){return i}function s(){return S(n,u(),e)}const a={get:u,set:function(n){return i=c(n),a},add:function(n){return s().set(u()+n)},clone:s};return a}function w(){let n=[];const t={add:function(e,r,o,i={passive:!0}){return e.addEventListener(r,o,i),n.push((()=>e.removeEventListener(r,o,i))),t},clear:function(){n=n.filter((n=>n()))}};return t}function E(n,t,e,r,o,i,c,u,s,l,p,g,v,h,x,y,S,E,D){const{cross:O}=n,P=["INPUT","SELECT","TEXTAREA"],T={passive:!1},A=w(),L=w(),k=M(50,225).constrain(x.measure(20)),j={mouse:300,touch:400},F={mouse:500,touch:600},I=y?43:25;let z=!1,C=0,V=0,N=!1,B=!1,H=!1,R=!1;function W(n){const e=c.readPoint(n),r=c.readPoint(n,O),o=m(e,C),u=m(r,V);if(!B&&!R){if(!n.cancelable)return X(n);if(B=o>u,!B)return X(n)}const a=c.pointerMove(n);o>S&&(H=!0),p.useFriction(.3).useDuration(1),s.start(),i.add(t.apply(a)),n.preventDefault()}function X(n){const e=g.byDistance(0,!1).index!==v.get(),r=c.pointerUp(n)*(y?F:j)[R?"mouse":"touch"],o=function(n,t){const e=v.add(-1*d(n)),r=g.byDistance(n,!y).distance;return y||f(n)<k?r:E&&t?.5*r:g.byIndex(e.get(),0).distance}(t.apply(r),e),i=function(n,t){if(0===n||0===t)return 0;if(f(n)<=f(t))return 0;const e=m(f(n),f(t));return f(e/n)}(r,o),u=I-10*i,s=D+i/50;B=!1,N=!1,L.clear(),p.useDuration(u).useFriction(s),l.distance(o,!y),R=!1,h.emit("pointerUp")}function Y(n){H&&(n.stopPropagation(),n.preventDefault())}return{init:function(n,t){if(!t)return;function s(s){(a(t)||t(n,s))&&function(n){const t=b(n,o);if(R=t,t&&0!==n.button)return;if(function(n){const t=n.nodeName||"";return P.includes(t)}(n.target))return;H=y&&t&&!n.buttons&&z,z=m(i.get(),u.get())>=2,N=!0,c.pointerDown(n),p.useFriction(0).useDuration(0),i.set(u),function(){const n=R?r:e;L.add(n,"touchmove",W,T).add(n,"touchend",X).add(n,"mousemove",W,T).add(n,"mouseup",X)}(),C=c.readPoint(n),V=c.readPoint(n,O),h.emit("pointerDown")}(s)}const l=e;A.add(l,"dragstart",(n=>n.preventDefault()),T).add(l,"touchmove",(()=>{}),T).add(l,"touchend",(()=>{})).add(l,"touchstart",s).add(l,"mousedown",s).add(l,"touchcancel",X).add(l,"contextmenu",X).add(l,"click",Y,!0)},pointerDown:function(){return N},destroy:function(){A.clear(),L.clear()}}}function D(n,t){let e,r;function o(n){return n.timeStamp}function i(e,r){const o="client"+("x"===(r||n.scroll)?"X":"Y");return(b(e,t)?e:e.touches[0])[o]}return{pointerDown:function(n){return e=n,r=n,i(n)},pointerMove:function(n){const t=i(n)-i(r),c=o(n)-o(e)>170;return r=n,c&&(e=n),t},pointerUp:function(n){if(!e||!r)return 0;const t=i(r)-i(e),c=o(n)-o(e),u=o(n)-o(r)>170,s=t/c;return c&&!u&&f(s)>.1?s:0},readPoint:i}}function O(n,t,e,r,o){let i,c,u=[],s=!1;function l(n){return o.measureSize(n.getBoundingClientRect())}return{init:function(o,f){if(!f)return;c=l(n),u=r.map(l),i=new ResizeObserver((i=>{s||(a(f)||f(o,i))&&function(i){for(const s of i){const i=s.target===n,a=r.indexOf(s.target);if((i?c:u[a])!==l(i?n:r[a])){e.requestAnimationFrame((()=>{o.reInit(),t.emit("resize")}));break}}}(i)})),[n].concat(r).forEach((n=>i.observe(n)))},destroy:function(){i&&i.disconnect(),s=!0}}}function P(n,t,e,r,o){const i=o.measure(10),c=o.measure(50),u=M(.1,.99);let s=!1;return{constrain:function(o){if(s||!n.reachedAny(e.get())||!n.reachedAny(t.get()))return;const a=n.reachedMin(t.get())?"min":"max",l=f(n[a]-t.get()),d=e.get()-t.get(),m=u.constrain(l/c);e.subtract(d*m),!o&&f(d)<i&&(e.set(n.constrain(e.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(n){s=!n}}}function T(n,t,e,r){const o=M(-t+n,e[0]),i=e.map(o.constrain).map((n=>parseFloat(n.toFixed(3))));return{snapsContained:function(){if(t<=n)return[o.max];if("keepSnaps"===r)return i;const{min:e,max:c}=function(){const n=i[0],t=g(i),e=i.lastIndexOf(n),r=i.indexOf(t)+1;return M(e,r)}();return i.slice(e,c)}()}}function A(n,t,e,r){const o=t.min+.1,i=t.max+.1,{reachedMin:c,reachedMax:u}=M(o,i);return{loop:function(t){if(!function(n){return 1===n?u(e.get()):-1===n&&c(e.get())}(t))return;const o=n*(-1*t);r.forEach((n=>n.add(o)))}}}function L(n){const{max:t,length:e}=n;return{get:function(n){return(n-t)/-e}}}function k(n,t,e,r,o){const{reachedAny:i,removeOffset:c,constrain:u}=r;function s(n){return n.concat().sort(((n,t)=>f(n)-f(t)))[0]}function a(t,r){const o=[t,t+e,t-e];if(!n)return o[0];if(!r)return s(o);return s(o.filter((n=>d(n)===r)))}return{byDistance:function(e,r){const s=o.get()+e,{index:l,distance:d}=function(e){const r=n?c(e):u(e),o=t.map((n=>n-r)).map((n=>a(n,0))).map(((n,t)=>({diff:n,index:t}))).sort(((n,t)=>f(n.diff)-f(t.diff))),{index:i}=o[0];return{index:i,distance:r}}(s),m=!n&&i(s);return!r||m?{index:l,distance:e}:{index:l,distance:e+a(t[l]-d,0)}},byIndex:function(n,e){return{index:n,distance:a(t[n]-o.get(),e)}},shortcut:a}}function j(n){let t=n;function e(n){return u(n)?n:n.get()}return{get:function(){return t},set:function(n){t=e(n)},add:function(n){t+=e(n)},subtract:function(n){t-=e(n)}}}function F(n,t,e){const r="x"===n.scroll?function(n){return`translate3d(${n}px,0px,0px)`}:function(n){return`translate3d(0px,${n}px,0px)`},o=e.style;let i=!1;return{clear:function(){i||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(n){i||(o.transform=r(t.apply(n)))},toggleActive:function(n){i=!n}}}function I(n,t,e,r,o,i,c,u,s){const a=p(o),l=p(o).reverse(),f=function(){const n=i[0]-1;return g(m(l,n),"end")}().concat(function(){const n=e-i[0]-1;return g(m(a,n),"start")}());function d(n,t){return n.reduce(((n,t)=>n-o[t]),t)}function m(n,t){return n.reduce(((n,e)=>d(n,t)>0?n.concat([e]):n),[])}function g(e,o){const i="start"===o,a=i?-r:r,l=c.findSlideBounds([a]);return e.map((e=>{const o=i?0:-r,c=i?r:0,a=l.filter((n=>n.index===e))[0][i?"end":"start"];return{index:e,slideLocation:j(-1),translate:F(n,t,s[e]),target:()=>u.get()>a?o:c}}))}return{canLoop:function(){return f.every((({index:n})=>d(a.filter((t=>t!==n)),e)<=.1))},clear:function(){f.forEach((n=>n.translate.clear()))},loop:function(){f.forEach((n=>{const{target:t,translate:e,slideLocation:r}=n,o=t();o!==r.get()&&(e.to(o),r.set(o))}))},loopPoints:f}}function z(n,t){let e,r=!1;return{init:function(o,i){i&&(e=new MutationObserver((n=>{r||(a(i)||i(o,n))&&function(n){for(const e of n)if("childList"===e.type){o.reInit(),t.emit("slidesChanged");break}}(n)})),e.observe(n,{childList:!0}))},destroy:function(){e&&e.disconnect(),r=!0}}}function C(n,t,e,r,o,i,c){const{removeOffset:u,constrain:s}=o,a=i?[0,t,-t]:[0],l=f(a,c);function f(t,o){const i=t||a,c=function(n){const t=n||0;return e.map((n=>M(.5,n-.5).constrain(n*t)))}(o);return i.reduce(((t,o)=>{const i=r.map(((t,r)=>({start:t-e[r]+c[r]+o,end:t+n-c[r]+o,index:r})));return t.concat(i)}),[])}return{check:function(n,t){const e=i?u(n):s(n);return(t||l).reduce(((n,t)=>{const{index:r,start:o,end:i}=t;return!n.includes(r)&&(o<e&&i>e)?n.concat([r]):n}),[])},findSlideBounds:f}}function V(n,t,e){const r=u(e);return{groupSlides:function(o){return r?function(n,t){return p(n).filter((n=>n%t===0)).map((e=>n.slice(e,e+t)))}(o,e):function(e){return p(e).reduce(((e,r)=>{const o=t.slice(g(e),r+1).reduce(((n,t)=>n+t),0);return!r||o>n?e.concat(r):e}),[]).map(((n,t,r)=>e.slice(n,r[t+1])))}(o)}}}function N(n,t,e,r,o,i,c,u){const{align:s,axis:a,direction:l,startIndex:m,inViewThreshold:h,loop:x,duration:b,dragFree:N,dragThreshold:B,slidesToScroll:H,skipSnaps:R,containScroll:W}=i,X=t.getBoundingClientRect(),Y=e.map((n=>n.getBoundingClientRect())),q=function(n){const t="rtl"===n?-1:1;return{apply:function(n){return n*t}}}(l),$=function(n,t){const e="y"===n?"y":"x";return{scroll:e,cross:"y"===n?"x":"y",startEdge:"y"===e?"top":"rtl"===t?"right":"left",endEdge:"y"===e?"bottom":"rtl"===t?"left":"right",measureSize:function(n){const{width:t,height:r}=n;return"x"===e?t:r}}}(a,l),U=$.measureSize(X),_=function(n){return{measure:function(t){return n*(t/100)}}}(U),G=y(s,U),J=!x&&!!W,Q=x||!!W,{slideSizes:Z,slideSizesWithGaps:K}=function(n,t,e,r,o,i){const{measureSize:c,startEdge:u,endEdge:s}=n,a=e[0]&&o,l=function(){if(!a)return 0;const n=e[0];return f(t[u]-n[u])}(),d=function(){if(!a)return 0;const n=i.getComputedStyle(g(r));return parseFloat(n.getPropertyValue(`margin-${s}`))}(),m=e.map(c),p=e.map(((n,t,e)=>{const r=!t,o=t===v(e);return r?m[t]+l:o?m[t]+d:e[t+1][u]-n[u]})).map(f);return{slideSizes:m,slideSizesWithGaps:p}}($,X,Y,e,Q,o),nn=V(U,K,H),{snaps:tn,snapsAligned:en}=function(n,t,e,r,o,i,c){const{startEdge:u,endEdge:s}=n,{groupSlides:a}=i,l=a(r).map((n=>g(n)[s]-n[0][u])).map(f).map(t.measure),d=r.map((n=>e[u]-n[u])).map((n=>-f(n))),m=function(){const n=g(d)-g(o);return a(d).map((n=>n[0])).map(((t,e,r)=>{const o=!e,i=e===v(r);return c&&o?0:c&&i?n:t+l[e]}))}();return{snaps:d,snapsAligned:m}}($,G,X,Y,K,nn,J),rn=-g(tn)+g(K),{snapsContained:on}=T(U,rn,en,W),cn=J?on:en,{limit:un}=function(n,t,e){const r=t[0];return{limit:M(e?r-n:g(t),r)}}(rn,cn,x),sn=S(v(cn),m,x),an=sn.clone(),ln=p(e),fn={start:()=>u.start(yn),stop:()=>u.stop(yn),update:()=>(({dragHandler:n,scrollBody:t,scrollBounds:e,eventHandler:r,animation:o,options:{loop:i}})=>{const c=n.pointerDown();i||e.constrain(c);const u=t.seek().settled();u&&!c&&(o.stop(),r.emit("settle")),u||r.emit("scroll")})(yn),render:n=>(({scrollBody:n,translate:t,location:e,offsetLocation:r,scrollLooper:o,slideLooper:i,options:{loop:c}},u)=>{const s=n.velocity();r.set(e.get()-s+s*u),c&&(o.loop(n.direction()),i.loop()),t.to(r.get())})(yn,n)},dn=cn[sn.get()],mn=j(dn),pn=j(dn),gn=j(dn),vn=function(n,t,e,r){let o=!0,i=0,c=0,u=e,s=r,a=n.get(),l=0;function m(n){return u=n,g}function p(n){return s=n,g}const g={direction:function(){return c},duration:function(){return u},velocity:function(){return i},seek:function(){const e=t.get()-n.get();let r=0;return u?(i+=e/u,i*=s,a+=i,n.add(i),r=a-l):(i=0,n.set(t),r=e),c=d(r),l=a,o=f(e)<.001,g},settled:function(){return o},useBaseFriction:function(){return p(r)},useBaseDuration:function(){return m(e)},useFriction:p,useDuration:m};return g}(mn,gn,b,.68),hn=k(x,cn,rn,un,gn),xn=function(n,t,e,r,o,i,c){function u(r){const u=r.distance,s=r.index!==t.get();i.add(u),u&&(o.duration()?n.start():(n.update(),n.render(1),n.update())),s&&(e.set(t.get()),t.set(r.index),c.emit("select"))}return{distance:function(n,t){u(r.byDistance(n,t))},index:function(n,e){const o=t.clone().set(n);u(r.byIndex(o.get(),e))}}}(fn,sn,an,hn,vn,gn,c),bn=C(U,rn,Z,tn,un,x,h),yn={ownerDocument:r,ownerWindow:o,eventHandler:c,containerRect:X,slideRects:Y,animation:fn,axis:$,direction:q,dragHandler:E($,q,n,r,o,gn,D($,o),mn,fn,xn,vn,hn,sn,c,_,N,B,R,.68),eventStore:w(),percentOfView:_,index:sn,indexPrevious:an,limit:un,location:mn,offsetLocation:pn,options:i,resizeHandler:O(t,c,o,e,$),scrollBody:vn,scrollBounds:P(un,mn,gn,vn,_),scrollLooper:A(rn,un,pn,[mn,pn,gn]),scrollProgress:L(un),scrollSnaps:cn,scrollTarget:hn,scrollTo:xn,slideLooper:I($,q,U,rn,K,cn,bn,pn,e),slidesHandler:z(t,c),slidesInView:bn,slideIndexes:ln,slidesToScroll:nn,target:gn,translate:F($,q,t)};return yn}const B={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,dragThreshold:10,inViewThreshold:0,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function H(n){function t(n,t){return x(n,t||{})}const e={mergeOptions:t,optionsAtMedia:function(e){const r=e.breakpoints||{},o=h(r).filter((t=>n.matchMedia(t).matches)).map((n=>r[n])).reduce(((n,e)=>t(n,e)),{});return t(e,o)},optionsMediaQueries:function(t){return t.map((n=>h(n.breakpoints||{}))).reduce(((n,t)=>n.concat(t)),[]).map(n.matchMedia)}};return e}function R(n,t,e){const r=n.ownerDocument,o=r.defaultView,i=H(o),c=function(n){let t=[];return{init:function(e,r){return t=e.filter((({options:t})=>!1!==n.optionsAtMedia(t).active)),t.forEach((t=>t.init(r,n))),e.reduce(((n,t)=>Object.assign(n,{[t.name]:t})),{})},destroy:function(){t=t.filter((n=>n.destroy()))}}}(i),u=w(),a=w(),l=function(){const n={};let t;function e(t){return n[t]||[]}const r={init:function(n){t=n},emit:function(n){return e(n).forEach((e=>e(t,n))),r},off:function(t,o){return n[t]=e(t).filter((n=>n!==o)),r},on:function(t,o){return n[t]=e(t).concat([o]),r}};return r}(),{animationRealms:d}=R,{mergeOptions:m,optionsAtMedia:p,optionsMediaQueries:g}=i,{on:v,off:h,emit:x}=l,b=k;let y,M,S,E,D=!1,O=m(B,R.globalOptions),P=m(O),T=[];function A(t,e){const i=N(n,S,E,r,o,t,l,e);if(t.loop&&!i.slideLooper.canLoop()){return A(Object.assign({},t,{loop:!1}),e)}return i}function L(t,e){if(D)return;const i=d.find((n=>n.window===o)),l=i||function(n){const t=1e3/60;let e=[],r=null,o=0,i=0;function c(u){r||(r=u);const s=u-r;for(r=u,o+=s;o>=t;)e.forEach((({animation:n})=>n.update())),o-=t;const a=f(o/t);e.forEach((({animation:n})=>n.render(a))),i&&n.requestAnimationFrame(c)}return{start:function(t){e.includes(t)||e.push(t),i||(i=n.requestAnimationFrame(c))},stop:function(t){e=e.filter((n=>n!==t)),e.length||(n.cancelAnimationFrame(i),r=null,o=0,i=0)},reset:function(){r=null,o=0},window:n}}(o);i||d.push(l),O=m(O,t),P=p(O),T=e||T,function(){const{container:t,slides:e}=P,r=s(t)?n.querySelector(t):t;S=r||n.children[0];const o=s(e)?S.querySelectorAll(e):e;E=[].slice.call(o||S.children)}(),y=A(P,l),g([O,...T.map((({options:n})=>n))]).forEach((n=>u.add(n,"change",k))),P.active&&(y.translate.to(y.location.get()),y.eventHandler.init(C),y.resizeHandler.init(C,P.watchResize),y.slidesHandler.init(C,P.watchSlides),a.add(r,"visibilitychange",(()=>{r.hidden&&l.reset()})),y.options.loop&&y.slideLooper.loop(),S.offsetParent&&E.length&&y.dragHandler.init(C,P.watchDrag),M=c.init(T,C))}function k(n,t){const e=z();j(),L(m({startIndex:e},n),t),l.emit("reInit")}function j(){y.dragHandler.destroy(),y.animation.stop(),y.eventStore.clear(),y.translate.clear(),y.slideLooper.clear(),y.resizeHandler.destroy(),y.slidesHandler.destroy(),c.destroy(),u.clear(),a.clear()}function F(n){const t=y[n?"target":"location"].get(),e=P.loop?"removeOffset":"constrain";return y.slidesInView.check(y.limit[e](t))}function I(n,t,e){P.active&&!D&&(y.scrollBody.useBaseFriction().useDuration(t?0:P.duration),y.scrollTo.index(n,e||0))}function z(){return y.index.get()}const C={canScrollNext:function(){return y.index.add(1).get()!==z()},canScrollPrev:function(){return y.index.add(-1).get()!==z()},containerNode:function(){return S},internalEngine:function(){return y},destroy:function(){D||(D=!0,u.clear(),j(),l.emit("destroy"))},off:h,on:v,emit:x,plugins:function(){return M},previousScrollSnap:function(){return y.indexPrevious.get()},reInit:b,rootNode:function(){return n},scrollNext:function(n){I(y.index.add(1).get(),!0===n,-1)},scrollPrev:function(n){I(y.index.add(-1).get(),!0===n,1)},scrollProgress:function(){return y.scrollProgress.get(y.location.get())},scrollSnapList:function(){return y.scrollSnaps.map(y.scrollProgress.get)},scrollTo:I,selectedScrollSnap:z,slideNodes:function(){return E},slidesInView:F,slidesNotInView:function(n){const t=F(n);return y.slideIndexes.filter((n=>!t.includes(n)))}};return L(t,e),setTimeout((()=>l.emit("init")),0),C}function W(n={},t=[]){const e=(0,r.useRef)(n),o=(0,r.useRef)(t),[u,s]=(0,r.useState)(),[a,l]=(0,r.useState)(),f=(0,r.useCallback)((()=>{u&&u.reInit(e.current,o.current)}),[u]);return(0,r.useEffect)((()=>{if("undefined"!==typeof window&&window.document&&window.document.createElement&&a){R.globalOptions=W.globalOptions;const n=R(a,e.current,o.current);return s(n),()=>n.destroy()}s(void 0)}),[a,s]),(0,r.useEffect)((()=>{i(e.current,n)||(e.current=n,f())}),[n,f]),(0,r.useEffect)((()=>{(function(n,t){if(n.length!==t.length)return!1;const e=c(n),r=c(t);return e.every(((n,t)=>i(n,r[t])))})(o.current,t)||(o.current=t,f())}),[t,f]),[l,u]}R.animationRealms=[],R.globalOptions=void 0,W.globalOptions=void 0},4213:function(n,t,e){function r(){return r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},r.apply(this,arguments)}e.d(t,{Y:function(){return m}});function o(n,t){if(n.length!==t.length)throw new Error("vectors must be same length");return n.map((function(n,e){return n+t[e]}))}function i(n){return Math.max.apply(Math,n.map(Math.abs))}function c(n){return Object.freeze(n),Object.values(n).forEach((function(n){null===n||"object"!==typeof n||Object.isFrozen(n)||c(n)})),n}var u=[1,18,"undefined"!==typeof window&&window.innerHeight||800];var s=[-1,-1,-1];var a=function(n){return r({},n,{axisDelta:n.axisDelta.map((function(n){return t=n,e=-700,r=700,Math.min(Math.max(e,t),r);var t,e,r}))})},l=c({preventWheelAction:!0,reverseSign:[!0,!0,!1]});var f=function(n){void 0===n&&(n={});var t,e,f=function(){var n={};function t(t,e){n[t]=(n[t]||[]).filter((function(n){return n!==e}))}return c({on:function(e,r){return n[e]=(n[e]||[]).concat(r),function(){return t(e,r)}},off:t,dispatch:function(t,e){t in n&&n[t].forEach((function(n){return n(e)}))}})}(),d=f.on,m=f.off,p=f.dispatch,g=l,v={isStarted:!1,isStartPublished:!1,isMomentum:!1,startTime:0,lastAbsDelta:1/0,axisMovement:[0,0,0],axisVelocity:[0,0,0],accelerationFactors:[],scrollPoints:[],scrollPointsToMerge:[],willEndTimeout:400},h=!1,x=function(n){Array.isArray(n)?n.forEach((function(n){return M(n)})):M(n)},b=function(n){return void 0===n&&(n={}),Object.values(n).some((function(n){return void 0===n||null===n}))?g:g=c(r({},l,g,n))},y=function(n){var i=r({event:t,isStart:!1,isEnding:!1,isMomentumCancel:!1,isMomentum:v.isMomentum,axisDelta:[0,0,0],axisVelocity:v.axisVelocity,axisMovement:v.axisMovement,get axisMovementProjection(){return o(i.axisMovement,i.axisVelocity.map((function(n){return void 0===t&&(t=.996),n*t/(1-t);var t})))}},n);p("wheel",r({},i,{previous:e})),e=i},M=function(n){var e=a(function(n,t){if(!t)return n;var e=!0===t?s:t.map((function(n){return n?-1:1}));return r({},n,{axisDelta:n.axisDelta.map((function(n,t){return n*e[t]}))})}(function(n){var t=n.deltaX*u[n.deltaMode],e=n.deltaY*u[n.deltaMode],r=(n.deltaZ||0)*u[n.deltaMode];return{timeStamp:n.timeStamp,axisDelta:[t,e,r]}}(n),g.reverseSign)),c=e.axisDelta,l=e.timeStamp,f=i(c);n.preventDefault&&function(n,t){var e=g.preventWheelAction,r=t[0],o=t[1],i=t[2];if("boolean"===typeof e)return e;switch(e){case"x":return Math.abs(r)>=n;case"y":return Math.abs(o)>=n;case"z":return Math.abs(i)>=n;default:return!1}}(f,c)&&n.preventDefault(),v.isStarted?v.isMomentum&&f>Math.max(2,2*v.lastAbsDelta)&&(k(!0),A()):A(),0===f&&Object.is&&Object.is(n.deltaX,-0)?h=!0:(t=n,v.axisMovement=o(v.axisMovement,c),v.lastAbsDelta=f,v.scrollPointsToMerge.push({axisDelta:c,timeStamp:l}),S(),y({axisDelta:c,isStart:!v.isStartPublished}),v.isStartPublished=!0,L())},S=function(){var n;2===v.scrollPointsToMerge.length?(v.scrollPoints.unshift({axisDeltaSum:v.scrollPointsToMerge.map((function(n){return n.axisDelta})).reduce(o),timeStamp:(n=v.scrollPointsToMerge.map((function(n){return n.timeStamp})),n.reduce((function(n,t){return n+t}))/n.length)}),E(),v.scrollPointsToMerge.length=0,v.scrollPoints.length=1,v.isMomentum||P()):v.isStartPublished||w()},w=function(){var n;v.axisVelocity=(n=v.scrollPointsToMerge,n[n.length-1]).axisDelta.map((function(n){return n/v.willEndTimeout}))},E=function(){var n=v.scrollPoints,t=n[0],e=n[1];if(e&&t){var r=t.timeStamp-e.timeStamp;if(!(r<=0)){var o=t.axisDeltaSum.map((function(n){return n/r})),i=o.map((function(n,t){return n/(v.axisVelocity[t]||1)}));v.axisVelocity=o,v.accelerationFactors.push(i),D(r)}}},D=function(n){var t=10*Math.ceil(n/10)*1.2;v.isMomentum||(t=Math.max(100,2*t)),v.willEndTimeout=Math.min(1e3,Math.round(t))},O=function(n){return 0===n||n<=.96&&n>=.6},P=function(){if(v.accelerationFactors.length>=5){if(h&&(h=!1,i(v.axisVelocity)>=.2))return void T();var n=v.accelerationFactors.slice(-5);n.every((function(n){var t=!!n.reduce((function(n,t){return n&&n<1&&n===t?1:0})),e=n.filter(O).length===n.length;return t||e}))&&T(),v.accelerationFactors=n}},T=function(){v.isMomentum=!0},A=function(){(v={isStarted:!1,isStartPublished:!1,isMomentum:!1,startTime:0,lastAbsDelta:1/0,axisMovement:[0,0,0],axisVelocity:[0,0,0],accelerationFactors:[],scrollPoints:[],scrollPointsToMerge:[],willEndTimeout:400}).isStarted=!0,v.startTime=Date.now(),e=void 0,h=!1},L=function(){var n;return function(){clearTimeout(n),n=setTimeout(k,v.willEndTimeout)}}(),k=function(n){void 0===n&&(n=!1),v.isStarted&&(v.isMomentum&&n?y({isEnding:!0,isMomentumCancel:!0}):y({isEnding:!0}),v.isMomentum=!1,v.isStarted=!1)},j=function(n){var t=[],e=function(e){e.removeEventListener("wheel",n),t=t.filter((function(n){return n!==e}))};return c({observe:function(r){return r.addEventListener("wheel",n,{passive:!1}),t.push(r),function(){return e(r)}},unobserve:e,disconnect:function(){t.forEach(e)}})}(x),F=j.observe,I=j.unobserve,z=j.disconnect;return b(n),c({on:d,off:m,observe:F,unobserve:I,disconnect:z,feedWheel:x,updateOptions:b})},d={active:!0,breakpoints:{},wheelDraggingClass:"is-wheel-dragging",forceWheelAxis:void 0,target:void 0};m.globalOptions=void 0;function m(n){var t;void 0===n&&(n={});var e=function(){};return{name:"wheelGestures",options:n,init:function(r,o){var i,c,u=o.mergeOptions,s=o.optionsAtMedia,a=u(d,m.globalOptions),l=u(a,n);t=s(l);var p,g=r.internalEngine(),v=null!=(i=t.target)?i:r.containerNode().parentNode,h=null!=(c=t.forceWheelAxis)?c:g.options.axis,x=f({preventWheelAction:h,reverseSign:[!0,!0,!1]}),b=x.observe(v),y=x.on("wheel",(function(n){var r=n.axisDelta,o=r[0],i=r[1],c="x"===h?o:i,u="x"===h?i:o,s=n.isMomentum&&n.previous&&!n.previous.isMomentum,a=n.isEnding&&!n.isMomentum||s;Math.abs(c)>Math.abs(u)&&!M&&!n.isMomentum&&function(n){try{D(p=new MouseEvent("mousedown",n.event))}catch(r){return e()}M=!0,document.documentElement.addEventListener("mousemove",w,!0),document.documentElement.addEventListener("mouseup",w,!0),void document.documentElement.addEventListener("mousedown",w,!0),t.wheelDraggingClass&&v.classList.add(t.wheelDraggingClass)}(n);if(!M)return;a?function(n){M=!1,D(E("mouseup",n)),S(),t.wheelDraggingClass&&v.classList.remove(t.wheelDraggingClass)}(n):D(E("mousemove",n))})),M=!1;function S(){document.documentElement.removeEventListener("mousemove",w,!0),document.documentElement.removeEventListener("mouseup",w,!0),document.documentElement.removeEventListener("mousedown",w,!0)}function w(n){M&&n.isTrusted&&n.stopImmediatePropagation()}function E(n,t){var e,r;if(h===g.options.axis){var o=t.axisMovement;e=o[0],r=o[1]}else{var i=t.axisMovement;r=i[0],e=i[1]}return new MouseEvent(n,{clientX:p.clientX+e,clientY:p.clientY+r,screenX:p.screenX+e,screenY:p.screenY+r,movementX:e,movementY:r,button:0,bubbles:!0,cancelable:!0,composed:!0})}function D(n){r.containerNode().dispatchEvent(n)}e=function(){b(),y(),S()}},destroy:function(){return e()}}}}}]);