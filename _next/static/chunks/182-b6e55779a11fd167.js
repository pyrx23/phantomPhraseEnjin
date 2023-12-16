"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[182],{59182:function(t,e,n){n.d(e,{v:function(){return D}});var r=n(22970),o=n(71010);const i=new WeakMap;let s;function c({target:t,contentRect:e,borderBoxSize:n}){var r;null===(r=i.get(t))||void 0===r||r.forEach((r=>{r({target:t,contentSize:e,get size(){return function(t,e){if(e){const{inlineSize:t,blockSize:n}=e[0];return{width:t,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,n)}})}))}function l(t){t.forEach(c)}function f(t,e){s||"undefined"!==typeof ResizeObserver&&(s=new ResizeObserver(l));const n=(0,o.I)(t);return n.forEach((t=>{let n=i.get(t);n||(n=new Set,i.set(t,n)),n.add(e),null===s||void 0===s||s.observe(t)})),()=>{n.forEach((t=>{const n=i.get(t);null===n||void 0===n||n.delete(e),(null===n||void 0===n?void 0:n.size)||null===s||void 0===s||s.unobserve(t)}))}}const a=new Set;let u;function g(t){return a.add(t),u||(u=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};a.forEach((t=>t(e)))},window.addEventListener("resize",u)),()=>{a.delete(t),!a.size&&u&&(u=void 0)}}var d=n(26766);const h=(t,e,n)=>e-t===0?1:(n-t)/(e-t);const p={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function v(t,e,n,r){const o=n[e],{length:i,position:s}=p[e],c=o.current,l=n.time;o.current=t["scroll"+s],o.scrollLength=t["scroll"+i]-t["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=h(0,o.scrollLength,o.current);const f=r-l;var a,u;o.velocity=f>50?0:(a=o.current-c,(u=f)?a*(1e3/u):0)}const y=t=>t,m=(t,e,n)=>-n*t+n*e+t;function w(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const o=h(0,e,r);t.push(m(n,1,o))}}function E(t){const e=[0];return w(e,t-1),e}const x=t=>"number"===typeof t;function O(t,e){return(t=>Array.isArray(t)&&!x(t[0]))(t)?t[((t,e,n)=>{const r=e-t;return((n-t)%r+r)%r+t})(0,t.length,e)]:t}function L(t,e=E(t.length),n=y){const r=t.length,o=r-e.length;return o>0&&w(e,o),o=>{let i=0;for(;i<r-2&&!(o<e[i+1]);i++);let s=(c=0,l=1,f=h(e[i],e[i+1],o),Math.min(Math.max(f,c),l));var c,l,f;return s=O(n,i)(s),m(t[i],t[i+1],s)}}const b={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},W=t=>"string"===typeof t,z={start:0,center:.5,end:1};function S(t,e,n=0){let r=0;if(void 0!==z[t]&&(t=z[t]),W(t)){const e=parseFloat(t);t.endsWith("px")?r=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?r=e/100*document.documentElement.clientWidth:t.endsWith("vh")?r=e/100*document.documentElement.clientHeight:t=e}return x(t)&&(r=e*t),n+r}const B=[0,0];function H(t,e,n,r){let o=Array.isArray(t)?t:B,i=0,s=0;return x(t)?o=[t,t]:W(t)&&(o=(t=t.trim()).includes(" ")?t.split(" "):[t,z[t]?t:"0"]),i=S(o[0],n,r),s=S(o[1],e),i-s}const P={x:0,y:0};function k(t,e,n){let{offset:r=b.All}=n;const{target:o=t,axis:i="y"}=n,s="y"===i?"height":"width",c=o!==t?function(t,e){let n={x:0,y:0},r=t;for(;r&&r!==e;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){const{top:t,left:e}=r.getBBox();for(n.x+=e,n.y+=t;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(o,t):P,l=o===t?{width:t.scrollWidth,height:t.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},f={width:t.clientWidth,height:t.clientHeight};e[i].offset.length=0;let a=!e[i].interpolate;const u=r.length;for(let g=0;g<u;g++){const t=H(r[g],f[s],l[s],c[i]);a||t===e[i].interpolatorOffsets[g]||(a=!0),e[i].offset[g]=t}a&&(e[i].interpolate=L(E(u),e[i].offset),e[i].interpolatorOffsets=[...e[i].offset]),e[i].progress=e[i].interpolate(e[i].current)}function A(t,e,n,r={}){const o=r.axis||"y";return{measure:()=>function(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let r=e;for(;r&&r!=t;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}(t,r.target,n),update:e=>{!function(t,e,n){v(t,"x",e,n),v(t,"y",e,n),e.time=n}(t,n,e),(r.offset||r.target)&&k(t,n,r)},notify:(0,d.m)(e)?()=>e(n):j(e,n[o])}}function j(t,e){return t.pause(),t.forEachNative(((t,{easing:e})=>{var n,r;if(t.updateDuration)e||(t.easing=y),t.updateDuration(1);else{const o={duration:1e3};e||(o.easing="linear"),null===(r=null===(n=t.effect)||void 0===n?void 0:n.updateTiming)||void 0===r||r.call(n,o)}})),()=>{t.currentTime=e.progress}}const T=new WeakMap,M=new WeakMap,_=new WeakMap,N=t=>t===document.documentElement?window:t;function X(t,e={}){var{container:n=document.documentElement}=e,o=(0,r._T)(e,["container"]);let i=_.get(n);i||(i=new Set,_.set(n,i));const s=A(n,t,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},o);if(i.add(s),!T.has(n)){const t=()=>{const t=performance.now();for(const e of i)e.measure();for(const e of i)e.update(t);for(const e of i)e.notify()};T.set(n,t);const e=N(n);window.addEventListener("resize",t,{passive:!0}),n!==document.documentElement&&M.set(n,(c=n,l=t,(0,d.m)(c)?g(c):f(c,l))),e.addEventListener("scroll",t,{passive:!0})}var c,l;const a=T.get(n),u=requestAnimationFrame(a);return()=>{var e;"function"!==typeof t&&t.stop(),cancelAnimationFrame(u);const r=_.get(n);if(!r)return;if(r.delete(s),r.size)return;const o=T.get(n);T.delete(n),o&&(N(n).removeEventListener("scroll",o),null===(e=M.get(n))||void 0===e||e(),window.removeEventListener("resize",o))}}var Y=n(33234),F=n(96681),G=n(2784),R=n(58868);const C=()=>({scrollX:(0,Y.B)(0),scrollY:(0,Y.B)(0),scrollXProgress:(0,Y.B)(0),scrollYProgress:(0,Y.B)(0)});function D({container:t,target:e,layoutEffect:n=!0,...r}={}){const o=(0,F.h)(C);return(n?R.L:G.useEffect)((()=>X((({x:t,y:e})=>{o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(e.current),o.scrollYProgress.set(e.progress)}),{...r,container:(null===t||void 0===t?void 0:t.current)||void 0,target:(null===e||void 0===e?void 0:e.current)||void 0})),[]),o}},22970:function(t,e,n){n.d(e,{_T:function(){return o},pi:function(){return r}});var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError}}]);