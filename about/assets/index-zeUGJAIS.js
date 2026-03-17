(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $a(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ie={},ar=[],En=()=>{},$u=()=>!1,ao=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ya=n=>n.startsWith("onUpdate:"),ye=Object.assign,Ka=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},qh=Object.prototype.hasOwnProperty,Kt=(n,t)=>qh.call(n,t),Pt=Array.isArray,lr=n=>Zr(n)==="[object Map]",Yu=n=>Zr(n)==="[object Set]",Il=n=>Zr(n)==="[object Date]",Bt=n=>typeof n=="function",ge=n=>typeof n=="string",bn=n=>typeof n=="symbol",Zt=n=>n!==null&&typeof n=="object",Ku=n=>(Zt(n)||Bt(n))&&Bt(n.then)&&Bt(n.catch),Zu=Object.prototype.toString,Zr=n=>Zu.call(n),jh=n=>Zr(n).slice(8,-1),Ju=n=>Zr(n)==="[object Object]",Za=n=>ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ur=$a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lo=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},$h=/-\w/g,ui=lo(n=>n.replace($h,t=>t.slice(1).toUpperCase())),Yh=/\B([A-Z])/g,Bi=lo(n=>n.replace(Yh,"-$1").toLowerCase()),Qu=lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Po=lo(n=>n?`on${Qu(n)}`:""),si=(n,t)=>!Object.is(n,t),Lo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},tf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Kh=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Zh=n=>{const t=ge(n)?Number(n):NaN;return isNaN(t)?n:t};let Ul;const co=()=>Ul||(Ul=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(n){if(Pt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=ge(i)?ed(i):Jr(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(ge(n)||Zt(n))return n}const Jh=/;(?![^(]*\))/g,Qh=/:([^]+)/,td=/\/\*[^]*?\*\//g;function ed(n){const t={};return n.replace(td,"").split(Jh).forEach(e=>{if(e){const i=e.split(Qh);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ni(n){let t="";if(ge(n))t=n;else if(Pt(n))for(let e=0;e<n.length;e++){const i=ni(n[e]);i&&(t+=i+" ")}else if(Zt(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const nd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",id=$a(nd);function ef(n){return!!n||n===""}function rd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Ja(n[i],t[i]);return e}function Ja(n,t){if(n===t)return!0;let e=Il(n),i=Il(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=bn(n),i=bn(t),e||i)return n===t;if(e=Pt(n),i=Pt(t),e||i)return e&&i?rd(n,t):!1;if(e=Zt(n),i=Zt(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Ja(n[o],t[o]))return!1}}return String(n)===String(t)}const nf=n=>!!(n&&n.__v_isRef===!0),de=n=>ge(n)?n:n==null?"":Pt(n)||Zt(n)&&(n.toString===Zu||!Bt(n.toString))?nf(n)?de(n.value):JSON.stringify(n,rf,2):String(n),rf=(n,t)=>nf(t)?rf(n,t.value):lr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Do(i,s)+" =>"]=r,e),{})}:Yu(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Do(e))}:bn(t)?Do(t):Zt(t)&&!Pt(t)&&!Ju(t)?String(t):t,Do=(n,t="")=>{var e;return bn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ze;class sd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ze,!t&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=ze;try{return ze=this,t()}finally{ze=e}}}on(){++this._on===1&&(this.prevScope=ze,ze=this)}off(){this._on>0&&--this._on===0&&(ze=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function od(){return ze}let ee;const Io=new WeakSet;class sf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ze&&ze.active&&ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Io.has(this)&&(Io.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||af(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nl(this),lf(this);const t=ee,e=ln;ee=this,ln=!0;try{return this.fn()}finally{cf(this),ee=t,ln=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)el(t);this.deps=this.depsTail=void 0,Nl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Io.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wa(this)&&this.run()}get dirty(){return wa(this)}}let of=0,Nr,Fr;function af(n,t=!1){if(n.flags|=8,t){n.next=Fr,Fr=n;return}n.next=Nr,Nr=n}function Qa(){of++}function tl(){if(--of>0)return;if(Fr){let t=Fr;for(Fr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Nr;){let t=Nr;for(Nr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function lf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function cf(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),el(i),ad(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function wa(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(uf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function uf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Vr)||(n.globalVersion=Vr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!wa(n))))return;n.flags|=2;const t=n.dep,e=ee,i=ln;ee=n,ln=!0;try{lf(n);const r=n.fn(n._value);(t.version===0||si(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{ee=e,ln=i,cf(n),n.flags&=-3}}function el(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)el(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function ad(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let ln=!0;const ff=[];function zn(){ff.push(ln),ln=!1}function Hn(){const n=ff.pop();ln=n===void 0?!0:n}function Nl(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ee;ee=void 0;try{t()}finally{ee=e}}}let Vr=0;class ld{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ee||!ln||ee===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ee)e=this.activeLink=new ld(ee,this),ee.deps?(e.prevDep=ee.depsTail,ee.depsTail.nextDep=e,ee.depsTail=e):ee.deps=ee.depsTail=e,hf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ee.depsTail,e.nextDep=void 0,ee.depsTail.nextDep=e,ee.depsTail=e,ee.deps===e&&(ee.deps=i)}return e}trigger(t){this.version++,Vr++,this.notify(t)}notify(t){Qa();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{tl()}}}function hf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)hf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Aa=new WeakMap,Fi=Symbol(""),Ra=Symbol(""),Gr=Symbol("");function Ae(n,t,e){if(ln&&ee){let i=Aa.get(n);i||Aa.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new nl),r.map=i,r.key=e),r.track()}}function On(n,t,e,i,r,s){const o=Aa.get(n);if(!o){Vr++;return}const a=l=>{l&&l.trigger()};if(Qa(),t==="clear")o.forEach(a);else{const l=Pt(n),c=l&&Za(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Gr||!bn(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Gr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Fi)),lr(n)&&a(o.get(Ra)));break;case"delete":l||(a(o.get(Fi)),lr(n)&&a(o.get(Ra)));break;case"set":lr(n)&&a(o.get(Fi));break}}tl()}function Hi(n){const t=Yt(n);return t===n?t:(Ae(t,"iterate",Gr),cn(n)?t:t.map(kn))}function il(n){return Ae(n=Yt(n),"iterate",Gr),n}function Zn(n,t){return fi(n)?Wr(cr(n)?kn(t):t):kn(t)}const cd={__proto__:null,[Symbol.iterator](){return Uo(this,Symbol.iterator,n=>Zn(this,n))},concat(...n){return Hi(this).concat(...n.map(t=>Pt(t)?Hi(t):t))},entries(){return Uo(this,"entries",n=>(n[1]=Zn(this,n[1]),n))},every(n,t){return An(this,"every",n,t,void 0,arguments)},filter(n,t){return An(this,"filter",n,t,e=>e.map(i=>Zn(this,i)),arguments)},find(n,t){return An(this,"find",n,t,e=>Zn(this,e),arguments)},findIndex(n,t){return An(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return An(this,"findLast",n,t,e=>Zn(this,e),arguments)},findLastIndex(n,t){return An(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return An(this,"forEach",n,t,void 0,arguments)},includes(...n){return No(this,"includes",n)},indexOf(...n){return No(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return No(this,"lastIndexOf",n)},map(n,t){return An(this,"map",n,t,void 0,arguments)},pop(){return Er(this,"pop")},push(...n){return Er(this,"push",n)},reduce(n,...t){return Fl(this,"reduce",n,t)},reduceRight(n,...t){return Fl(this,"reduceRight",n,t)},shift(){return Er(this,"shift")},some(n,t){return An(this,"some",n,t,void 0,arguments)},splice(...n){return Er(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return Er(this,"unshift",n)},values(){return Uo(this,"values",n=>Zn(this,n))}};function Uo(n,t,e){const i=il(n),r=i[t]();return i!==n&&!cn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const ud=Array.prototype;function An(n,t,e,i,r,s){const o=il(n),a=o!==n&&!cn(n),l=o[t];if(l!==ud[t]){const f=l.apply(n,s);return a?kn(f):f}let c=e;o!==n&&(a?c=function(f,h){return e.call(this,Zn(n,f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Fl(n,t,e,i){const r=il(n);let s=e;return r!==n&&(cn(n)?e.length>3&&(s=function(o,a,l){return e.call(this,o,a,l,n)}):s=function(o,a,l){return e.call(this,o,Zn(n,a),l,n)}),r[t](s,...i)}function No(n,t,e){const i=Yt(n);Ae(i,"iterate",Gr);const r=i[t](...e);return(r===-1||r===!1)&&al(e[0])?(e[0]=Yt(e[0]),i[t](...e)):r}function Er(n,t,e=[]){zn(),Qa();const i=Yt(n)[t].apply(n,e);return tl(),Hn(),i}const fd=$a("__proto__,__v_isRef,__isVue"),df=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bn));function hd(n){bn(n)||(n=String(n));const t=Yt(this);return Ae(t,"has",n),t.hasOwnProperty(n)}class pf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?yd:vf:s?_f:gf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Pt(t);if(!r){let l;if(o&&(l=cd[e]))return l;if(e==="hasOwnProperty")return hd}const a=Reflect.get(t,e,Re(t)?t:i);if((bn(e)?df.has(e):fd(e))||(r||Ae(t,"get",e),s))return a;if(Re(a)){const l=o&&Za(e)?a:a.value;return r&&Zt(l)?Pa(l):l}return Zt(a)?r?Pa(a):sl(a):a}}class mf extends pf{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Pt(t)&&Za(e);if(!this._isShallow){const c=fi(s);if(!cn(i)&&!fi(i)&&(s=Yt(s),i=Yt(i)),!o&&Re(s)&&!Re(i))return c||(s.value=i),!0}const a=o?Number(e)<t.length:Kt(t,e),l=Reflect.set(t,e,i,Re(t)?t:r);return t===Yt(r)&&(a?si(i,s)&&On(t,"set",e,i):On(t,"add",e,i)),l}deleteProperty(t,e){const i=Kt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&On(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!bn(e)||!df.has(e))&&Ae(t,"has",e),i}ownKeys(t){return Ae(t,"iterate",Pt(t)?"length":Fi),Reflect.ownKeys(t)}}class dd extends pf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const pd=new mf,md=new dd,gd=new mf(!0);const Ca=n=>n,cs=n=>Reflect.getPrototypeOf(n);function _d(n,t,e){return function(...i){const r=this.__v_raw,s=Yt(r),o=lr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?Ca:t?Wr:kn;return!t&&Ae(s,"iterate",l?Ra:Fi),ye(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function us(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function vd(n,t){const e={get(r){const s=this.__v_raw,o=Yt(s),a=Yt(r);n||(si(r,a)&&Ae(o,"get",r),Ae(o,"get",a));const{has:l}=cs(o),c=t?Ca:n?Wr:kn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ae(Yt(r),"iterate",Fi),r.size},has(r){const s=this.__v_raw,o=Yt(s),a=Yt(r);return n||(si(r,a)&&Ae(o,"has",r),Ae(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Yt(a),c=t?Ca:n?Wr:kn;return!n&&Ae(l,"iterate",Fi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return ye(e,n?{add:us("add"),set:us("set"),delete:us("delete"),clear:us("clear")}:{add(r){!t&&!cn(r)&&!fi(r)&&(r=Yt(r));const s=Yt(this);return cs(s).has.call(s,r)||(s.add(r),On(s,"add",r,r)),this},set(r,s){!t&&!cn(s)&&!fi(s)&&(s=Yt(s));const o=Yt(this),{has:a,get:l}=cs(o);let c=a.call(o,r);c||(r=Yt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?si(s,u)&&On(o,"set",r,s):On(o,"add",r,s),this},delete(r){const s=Yt(this),{has:o,get:a}=cs(s);let l=o.call(s,r);l||(r=Yt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&On(s,"delete",r,void 0),c},clear(){const r=Yt(this),s=r.size!==0,o=r.clear();return s&&On(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=_d(r,n,t)}),e}function rl(n,t){const e=vd(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Kt(e,r)&&r in i?e:i,r,s)}const xd={get:rl(!1,!1)},Md={get:rl(!1,!0)},Sd={get:rl(!0,!1)};const gf=new WeakMap,_f=new WeakMap,vf=new WeakMap,yd=new WeakMap;function Ed(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bd(n){return n.__v_skip||!Object.isExtensible(n)?0:Ed(jh(n))}function sl(n){return fi(n)?n:ol(n,!1,pd,xd,gf)}function Td(n){return ol(n,!1,gd,Md,_f)}function Pa(n){return ol(n,!0,md,Sd,vf)}function ol(n,t,e,i,r){if(!Zt(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=bd(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function cr(n){return fi(n)?cr(n.__v_raw):!!(n&&n.__v_isReactive)}function fi(n){return!!(n&&n.__v_isReadonly)}function cn(n){return!!(n&&n.__v_isShallow)}function al(n){return n?!!n.__v_raw:!1}function Yt(n){const t=n&&n.__v_raw;return t?Yt(t):n}function wd(n){return!Kt(n,"__v_skip")&&Object.isExtensible(n)&&tf(n,"__v_skip",!0),n}const kn=n=>Zt(n)?sl(n):n,Wr=n=>Zt(n)?Pa(n):n;function Re(n){return n?n.__v_isRef===!0:!1}function gn(n){return Ad(n,!1)}function Ad(n,t){return Re(n)?n:new Rd(n,t)}class Rd{constructor(t,e){this.dep=new nl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Yt(t),this._value=e?t:kn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||cn(t)||fi(t);t=i?t:Yt(t),si(t,e)&&(this._rawValue=t,this._value=i?t:kn(t),this.dep.trigger())}}function ne(n){return Re(n)?n.value:n}const Cd={get:(n,t,e)=>t==="__v_raw"?n:ne(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Re(r)&&!Re(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function xf(n){return cr(n)?n:new Proxy(n,Cd)}class Pd{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new nl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ee!==this)return af(this,!0),!0}get value(){const t=this.dep.track();return uf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ld(n,t,e=!1){let i,r;return Bt(n)?i=n:(i=n.get,r=n.set),new Pd(i,r,e)}const fs={},qs=new WeakMap;let Ri;function Dd(n,t=!1,e=Ri){if(e){let i=qs.get(e);i||qs.set(e,i=[]),i.push(n)}}function Id(n,t,e=ie){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,c=b=>r?b:cn(b)||r===!1||r===0?Qn(b,1):Qn(b);let u,f,h,m,v=!1,_=!1;if(Re(n)?(f=()=>n.value,v=cn(n)):cr(n)?(f=()=>c(n),v=!0):Pt(n)?(_=!0,v=n.some(b=>cr(b)||cn(b)),f=()=>n.map(b=>{if(Re(b))return b.value;if(cr(b))return c(b);if(Bt(b))return l?l(b,2):b()})):Bt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){zn();try{h()}finally{Hn()}}const b=Ri;Ri=u;try{return l?l(n,3,[m]):n(m)}finally{Ri=b}}:f=En,t&&r){const b=f,I=r===!0?1/0:r;f=()=>Qn(b(),I)}const p=od(),d=()=>{u.stop(),p&&p.active&&Ka(p.effects,u)};if(s&&t){const b=t;t=(...I)=>{b(...I),d()}}let E=_?new Array(n.length).fill(fs):fs;const M=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const I=u.run();if(r||v||(_?I.some((A,R)=>si(A,E[R])):si(I,E))){h&&h();const A=Ri;Ri=u;try{const R=[I,E===fs?void 0:_&&E[0]===fs?[]:E,m];E=I,l?l(t,3,R):t(...R)}finally{Ri=A}}}else u.run()};return a&&a(M),u=new sf(f),u.scheduler=o?()=>o(M,!1):M,m=b=>Dd(b,!1,u),h=u.onStop=()=>{const b=qs.get(u);if(b){if(l)l(b,4);else for(const I of b)I();qs.delete(u)}},t?i?M(!0):E=u.run():o?o(M.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Qn(n,t=1/0,e){if(t<=0||!Zt(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Re(n))Qn(n.value,t,e);else if(Pt(n))for(let i=0;i<n.length;i++)Qn(n[i],t,e);else if(Yu(n)||lr(n))n.forEach(i=>{Qn(i,t,e)});else if(Ju(n)){for(const i in n)Qn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qr(n,t,e,i){try{return i?n(...i):n()}catch(r){uo(r,t,e)}}function fn(n,t,e,i){if(Bt(n)){const r=Qr(n,t,e,i);return r&&Ku(r)&&r.catch(s=>{uo(s,t,e)}),r}if(Pt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(fn(n[s],t,e,i));return r}}function uo(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ie;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){zn(),Qr(s,null,10,[n,l,c]),Hn();return}}Ud(n,e,r,i,o)}function Ud(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const De=[];let mn=-1;const ur=[];let Jn=null,rr=0;const Mf=Promise.resolve();let js=null;function Sf(n){const t=js||Mf;return n?t.then(this?n.bind(this):n):t}function Nd(n){let t=mn+1,e=De.length;for(;t<e;){const i=t+e>>>1,r=De[i],s=Xr(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function ll(n){if(!(n.flags&1)){const t=Xr(n),e=De[De.length-1];!e||!(n.flags&2)&&t>=Xr(e)?De.push(n):De.splice(Nd(t),0,n),n.flags|=1,yf()}}function yf(){js||(js=Mf.then(bf))}function Fd(n){Pt(n)?ur.push(...n):Jn&&n.id===-1?Jn.splice(rr+1,0,n):n.flags&1||(ur.push(n),n.flags|=1),yf()}function Ol(n,t,e=mn+1){for(;e<De.length;e++){const i=De[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;De.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ef(n){if(ur.length){const t=[...new Set(ur)].sort((e,i)=>Xr(e)-Xr(i));if(ur.length=0,Jn){Jn.push(...t);return}for(Jn=t,rr=0;rr<Jn.length;rr++){const e=Jn[rr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Jn=null,rr=0}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function bf(n){try{for(mn=0;mn<De.length;mn++){const t=De[mn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Qr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;mn<De.length;mn++){const t=De[mn];t&&(t.flags&=-2)}mn=-1,De.length=0,Ef(),js=null,(De.length||ur.length)&&bf()}}let Sn=null,Tf=null;function $s(n){const t=Sn;return Sn=n,Tf=n&&n.type.__scopeId||null,t}function fo(n,t=Sn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&Zs(-1);const s=$s(t);let o;try{o=n(...r)}finally{$s(s),i._d&&Zs(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vi(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(zn(),fn(l,e,8,[n.el,a,n,t]),Hn())}}function Od(n,t){if(Ne){let e=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===e&&(e=Ne.provides=Object.create(i)),e[n]=t}}function Hs(n,t,e=!1){const i=nh();if(i||fr){let r=fr?fr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Bt(t)?t.call(i&&i.proxy):t}}const Bd=Symbol.for("v-scx"),zd=()=>Hs(Bd);function ks(n,t,e){return wf(n,t,e)}function wf(n,t,e=ie){const{immediate:i,deep:r,flush:s,once:o}=e,a=ye({},e),l=t&&i||!t&&s!=="post";let c;if($r){if(s==="sync"){const m=zd();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=En,m.resume=En,m.pause=En,m}}const u=Ne;a.call=(m,v,_)=>fn(m,u,v,_);let f=!1;s==="post"?a.scheduler=m=>{Be(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,v)=>{v?m():ll(m)}),a.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Id(n,t,a);return $r&&(c?c.push(h):l&&h()),h}function Hd(n,t,e){const i=this.proxy,r=ge(n)?n.includes(".")?Af(i,n):()=>i[n]:n.bind(i,i);let s;Bt(t)?s=t:(s=t.handler,e=t);const o=ts(this),a=wf(r,s.bind(i),e);return o(),a}function Af(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const kd=Symbol("_vte"),Rf=n=>n.__isTeleport,_n=Symbol("_leaveCb"),br=Symbol("_enterCb");function Vd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mo(()=>{n.isMounted=!0}),Ff(()=>{n.isUnmounting=!0}),n}const Ke=[Function,Array],Cf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},Pf=n=>{const t=n.subTree;return t.component?Pf(t.component):t},Gd={name:"BaseTransition",props:Cf,setup(n,{slots:t}){const e=nh(),i=Vd();return()=>{const r=t.default&&If(t.default(),!0);if(!r||!r.length)return;const s=Lf(r),o=Yt(n),{mode:a}=o;if(i.isLeaving)return Fo(s);const l=Bl(s);if(!l)return Fo(s);let c=La(l,o,i,e,f=>c=f);l.type!==Ue&&qr(l,c);let u=e.subTree&&Bl(e.subTree);if(u&&u.type!==Ue&&!Li(u,l)&&Pf(e).type!==Ue){let f=La(u,o,i,e);if(qr(u,f),a==="out-in"&&l.type!==Ue)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,u=void 0},Fo(s);a==="in-out"&&l.type!==Ue?f.delayLeave=(h,m,v)=>{const _=Df(i,u);_[String(u.key)]=u,h[_n]=()=>{m(),h[_n]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Lf(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Ue){t=e;break}}return t}const Wd=Gd;function Df(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function La(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:p,onAppear:d,onAfterAppear:E,onAppearCancelled:M}=t,b=String(n.key),I=Df(e,n),A=(S,x)=>{S&&fn(S,i,9,x)},R=(S,x)=>{const z=x[1];A(S,x),Pt(S)?S.every(L=>L.length<=1)&&z():S.length<=1&&z()},F={mode:o,persisted:a,beforeEnter(S){let x=l;if(!e.isMounted)if(s)x=p||l;else return;S[_n]&&S[_n](!0);const z=I[b];z&&Li(n,z)&&z.el[_n]&&z.el[_n](),A(x,[S])},enter(S){if(I[b]===n)return;let x=c,z=u,L=f;if(!e.isMounted)if(s)x=d||c,z=E||u,L=M||f;else return;let D=!1;S[br]=J=>{D||(D=!0,J?A(L,[S]):A(z,[S]),F.delayedLeave&&F.delayedLeave(),S[br]=void 0)};const X=S[br].bind(null,!1);x?R(x,[S,X]):X()},leave(S,x){const z=String(n.key);if(S[br]&&S[br](!0),e.isUnmounting)return x();A(h,[S]);let L=!1;S[_n]=X=>{L||(L=!0,x(),X?A(_,[S]):A(v,[S]),S[_n]=void 0,I[z]===n&&delete I[z])};const D=S[_n].bind(null,!1);I[z]=n,m?R(m,[S,D]):D()},clone(S){const x=La(S,t,e,i,r);return r&&r(x),x}};return F}function Fo(n){if(ho(n))return n=hi(n),n.children=null,n}function Bl(n){if(!ho(n))return Rf(n.type)&&n.children?Lf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Bt(e.default))return e.default()}}function qr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,qr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function If(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===sn?(o.patchFlag&128&&r++,i=i.concat(If(o.children,t,a))):(t||o.type!==Ue)&&i.push(a!=null?hi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Uf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zl(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Ys=new WeakMap;function Or(n,t,e,i,r=!1){if(Pt(n)){n.forEach((_,p)=>Or(_,t&&(Pt(t)?t[p]:t),e,i,r));return}if(Br(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Or(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?hl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState,h=Yt(f),m=f===ie?$u:_=>zl(u,_)?!1:Kt(h,_),v=(_,p)=>!(p&&zl(u,p));if(c!=null&&c!==l){if(Hl(t),ge(c))u[c]=null,m(c)&&(f[c]=null);else if(Re(c)){const _=t;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Bt(l))Qr(l,a,12,[o,u]);else{const _=ge(l),p=Re(l);if(_||p){const d=()=>{if(n.f){const E=_?m(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)Pt(E)&&Ka(E,s);else if(Pt(E))E.includes(s)||E.push(s);else if(_)u[l]=[s],m(l)&&(f[l]=u[l]);else{const M=[s];v(l,n.k)&&(l.value=M),n.k&&(u[n.k]=M)}}else _?(u[l]=o,m(l)&&(f[l]=o)):p&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const E=()=>{d(),Ys.delete(n)};E.id=-1,Ys.set(n,E),Be(E,e)}else Hl(n),d()}}}function Hl(n){const t=Ys.get(n);t&&(t.flags|=8,Ys.delete(n))}co().requestIdleCallback;co().cancelIdleCallback;const Br=n=>!!n.type.__asyncLoader,ho=n=>n.type.__isKeepAlive;function Xd(n,t){Nf(n,"a",t)}function qd(n,t){Nf(n,"da",t)}function Nf(n,t,e=Ne){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(po(t,i,e),e){let r=e.parent;for(;r&&r.parent;)ho(r.parent.vnode)&&jd(i,t,e,r),r=r.parent}}function jd(n,t,e,i){const r=po(t,n,i,!0);go(()=>{Ka(i[t],r)},e)}function po(n,t,e=Ne,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{zn();const a=ts(e),l=fn(t,e,n,o);return a(),Hn(),l});return i?r.unshift(s):r.push(s),s}}const Vn=n=>(t,e=Ne)=>{(!$r||n==="sp")&&po(n,(...i)=>t(...i),e)},$d=Vn("bm"),mo=Vn("m"),Yd=Vn("bu"),Kd=Vn("u"),Ff=Vn("bum"),go=Vn("um"),Zd=Vn("sp"),Jd=Vn("rtg"),Qd=Vn("rtc");function tp(n,t=Ne){po("ec",n,t)}const ep=Symbol.for("v-ndc"),Da=n=>n?ih(n)?hl(n):Da(n.parent):null,zr=ye(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Da(n.parent),$root:n=>Da(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bf(n),$forceUpdate:n=>n.f||(n.f=()=>{ll(n.update)}),$nextTick:n=>n.n||(n.n=Sf.bind(n.proxy)),$watch:n=>Hd.bind(n)}),Oo=(n,t)=>n!==ie&&!n.__isScriptSetup&&Kt(n,t),np={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Oo(i,t))return o[t]=1,i[t];if(r!==ie&&Kt(r,t))return o[t]=2,r[t];if(Kt(s,t))return o[t]=3,s[t];if(e!==ie&&Kt(e,t))return o[t]=4,e[t];Ia&&(o[t]=0)}}const c=zr[t];let u,f;if(c)return t==="$attrs"&&Ae(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ie&&Kt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,Kt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Oo(r,t)?(r[t]=e,!0):i!==ie&&Kt(i,t)?(i[t]=e,!0):Kt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==ie&&a[0]!=="$"&&Kt(n,a)||Oo(t,a)||Kt(s,a)||Kt(i,a)||Kt(zr,a)||Kt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Kt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function kl(n){return Pt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ia=!0;function ip(n){const t=Bf(n),e=n.proxy,i=n.ctx;Ia=!1,t.beforeCreate&&Vl(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:_,deactivated:p,beforeDestroy:d,beforeUnmount:E,destroyed:M,unmounted:b,render:I,renderTracked:A,renderTriggered:R,errorCaptured:F,serverPrefetch:S,expose:x,inheritAttrs:z,components:L,directives:D,filters:X}=t;if(c&&rp(c,i,null),o)for(const nt in o){const V=o[nt];Bt(V)&&(i[nt]=V.bind(e))}if(r){const nt=r.call(e,e);Zt(nt)&&(n.data=sl(nt))}if(Ia=!0,s)for(const nt in s){const V=s[nt],at=Bt(V)?V.bind(e,e):Bt(V.get)?V.get.bind(e,e):En,lt=!Bt(V)&&Bt(V.set)?V.set.bind(e):En,vt=sh({get:at,set:lt});Object.defineProperty(i,nt,{enumerable:!0,configurable:!0,get:()=>vt.value,set:Rt=>vt.value=Rt})}if(a)for(const nt in a)Of(a[nt],i,e,nt);if(l){const nt=Bt(l)?l.call(e):l;Reflect.ownKeys(nt).forEach(V=>{Od(V,nt[V])})}u&&Vl(u,n,"c");function tt(nt,V){Pt(V)?V.forEach(at=>nt(at.bind(e))):V&&nt(V.bind(e))}if(tt($d,f),tt(mo,h),tt(Yd,m),tt(Kd,v),tt(Xd,_),tt(qd,p),tt(tp,F),tt(Qd,A),tt(Jd,R),tt(Ff,E),tt(go,b),tt(Zd,S),Pt(x))if(x.length){const nt=n.exposed||(n.exposed={});x.forEach(V=>{Object.defineProperty(nt,V,{get:()=>e[V],set:at=>e[V]=at,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===En&&(n.render=I),z!=null&&(n.inheritAttrs=z),L&&(n.components=L),D&&(n.directives=D),S&&Uf(n)}function rp(n,t,e=En){Pt(n)&&(n=Ua(n));for(const i in n){const r=n[i];let s;Zt(r)?"default"in r?s=Hs(r.from||i,r.default,!0):s=Hs(r.from||i):s=Hs(r),Re(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Vl(n,t,e){fn(Pt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Of(n,t,e,i){let r=i.includes(".")?Af(e,i):()=>e[i];if(ge(n)){const s=t[n];Bt(s)&&ks(r,s)}else if(Bt(n))ks(r,n.bind(e));else if(Zt(n))if(Pt(n))n.forEach(s=>Of(s,t,e,i));else{const s=Bt(n.handler)?n.handler.bind(e):t[n.handler];Bt(s)&&ks(r,s,n)}}function Bf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>Ks(l,c,o,!0)),Ks(l,t,o)),Zt(t)&&s.set(t,l),l}function Ks(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Ks(n,s,e,!0),r&&r.forEach(o=>Ks(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=sp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const sp={data:Gl,props:Wl,emits:Wl,methods:Dr,computed:Dr,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Dr,directives:Dr,watch:ap,provide:Gl,inject:op};function Gl(n,t){return t?n?function(){return ye(Bt(n)?n.call(this,this):n,Bt(t)?t.call(this,this):t)}:t:n}function op(n,t){return Dr(Ua(n),Ua(t))}function Ua(n){if(Pt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Pe(n,t){return n?[...new Set([].concat(n,t))]:t}function Dr(n,t){return n?ye(Object.create(null),n,t):t}function Wl(n,t){return n?Pt(n)&&Pt(t)?[...new Set([...n,...t])]:ye(Object.create(null),kl(n),kl(t??{})):t}function ap(n,t){if(!n)return t;if(!t)return n;const e=ye(Object.create(null),n);for(const i in t)e[i]=Pe(n[i],t[i]);return e}function zf(){return{app:null,config:{isNativeTag:$u,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lp=0;function cp(n,t){return function(i,r=null){Bt(i)||(i=ye({},i)),r!=null&&!Zt(r)&&(r=null);const s=zf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:lp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:kp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Bt(u.install)?(o.add(u),u.install(c,...f)):Bt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||Fe(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,hl(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(fn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=fr;fr=c;try{return u()}finally{fr=f}}};return c}}let fr=null;const up=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ui(t)}Modifiers`]||n[`${Bi(t)}Modifiers`];function fp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ie;let r=e;const s=t.startsWith("update:"),o=s&&up(i,t.slice(7));o&&(o.trim&&(r=e.map(u=>ge(u)?u.trim():u)),o.number&&(r=e.map(Kh)));let a,l=i[a=Po(t)]||i[a=Po(ui(t))];!l&&s&&(l=i[a=Po(Bi(t))]),l&&fn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,fn(c,n,6,r)}}const hp=new WeakMap;function Hf(n,t,e=!1){const i=e?hp:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Bt(n)){const l=c=>{const u=Hf(c,t,!0);u&&(a=!0,ye(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Zt(n)&&i.set(n,null),null):(Pt(s)?s.forEach(l=>o[l]=null):ye(o,s),Zt(n)&&i.set(n,o),o)}function _o(n,t){return!n||!ao(t)?!1:(t=t.slice(2).replace(/Once$/,""),Kt(n,t[0].toLowerCase()+t.slice(1))||Kt(n,Bi(t))||Kt(n,t))}function Xl(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:v,inheritAttrs:_}=n,p=$s(n);let d,E;try{if(e.shapeFlag&4){const b=r||i,I=b;d=xn(c.call(I,b,u,f,m,h,v)),E=a}else{const b=t;d=xn(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),E=t.props?a:dp(a)}}catch(b){Hr.length=0,uo(b,n,1),d=Fe(Ue)}let M=d;if(E&&_!==!1){const b=Object.keys(E),{shapeFlag:I}=M;b.length&&I&7&&(s&&b.some(Ya)&&(E=pp(E,s)),M=hi(M,E,!1,!0))}return e.dirs&&(M=hi(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&qr(M,e.transition),d=M,$s(p),d}const dp=n=>{let t;for(const e in n)(e==="class"||e==="style"||ao(e))&&((t||(t={}))[e]=n[e]);return t},pp=(n,t)=>{const e={};for(const i in n)(!Ya(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function mp(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?ql(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(kf(o,i,h)&&!_o(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ql(i,o,c):!0:!!o;return!1}function ql(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(kf(t,n,s)&&!_o(e,s))return!0}return!1}function kf(n,t,e){const i=n[e],r=t[e];return e==="style"&&Zt(i)&&Zt(r)?!Ja(i,r):i!==r}function gp({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Vf={},Gf=()=>Object.create(Vf),Wf=n=>Object.getPrototypeOf(n)===Vf;function _p(n,t,e,i=!1){const r={},s=Gf();n.propsDefaults=Object.create(null),Xf(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:Td(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function vp(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Yt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(_o(n.emitsOptions,h))continue;const m=t[h];if(l)if(Kt(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const v=ui(h);r[v]=Na(l,a,v,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Xf(n,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!Kt(t,f)&&((u=Bi(f))===f||!Kt(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=Na(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!Kt(t,f))&&(delete s[f],c=!0)}c&&On(n.attrs,"set","")}function Xf(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ur(l))continue;const c=t[l];let u;r&&Kt(r,u=ui(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:_o(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Yt(e),c=a||ie;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Na(r,l,f,c[f],n,!Kt(c,f))}}return o}function Na(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=Kt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Bt(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=ts(r);i=c[e]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Bi(e))&&(i=!0))}return i}const xp=new WeakMap;function qf(n,t,e=!1){const i=e?xp:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Bt(n)){const u=f=>{l=!0;const[h,m]=qf(f,t,!0);ye(o,h),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Zt(n)&&i.set(n,ar),ar;if(Pt(s))for(let u=0;u<s.length;u++){const f=ui(s[u]);jl(f)&&(o[f]=ie)}else if(s)for(const u in s){const f=ui(u);if(jl(f)){const h=s[u],m=o[f]=Pt(h)||Bt(h)?{type:h}:ye({},h),v=m.type;let _=!1,p=!0;if(Pt(v))for(let d=0;d<v.length;++d){const E=v[d],M=Bt(E)&&E.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(p=!1)}else _=Bt(v)&&v.name==="Boolean";m[0]=_,m[1]=p,(_||Kt(m,"default"))&&a.push(f)}}const c=[o,a];return Zt(n)&&i.set(n,c),c}function jl(n){return n[0]!=="$"&&!Ur(n)}const cl=n=>n==="_"||n==="_ctx"||n==="$stable",ul=n=>Pt(n)?n.map(xn):[xn(n)],Mp=(n,t,e)=>{if(t._n)return t;const i=fo((...r)=>ul(t(...r)),e);return i._c=!1,i},jf=(n,t,e)=>{const i=n._ctx;for(const r in n){if(cl(r))continue;const s=n[r];if(Bt(s))t[r]=Mp(r,s,i);else if(s!=null){const o=ul(s);t[r]=()=>o}}},$f=(n,t)=>{const e=ul(t);n.slots.default=()=>e},Yf=(n,t,e)=>{for(const i in t)(e||!cl(i))&&(n[i]=t[i])},Sp=(n,t,e)=>{const i=n.slots=Gf();if(n.vnode.shapeFlag&32){const r=t._;r?(Yf(i,t,e),e&&tf(i,"_",r,!0)):jf(t,i)}else t&&$f(n,t)},yp=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=ie;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:Yf(r,t,e):(s=!t.$stable,jf(t,r)),o=t}else t&&($f(n,t),o={default:1});if(s)for(const a in r)!cl(a)&&o[a]==null&&delete r[a]},Be=Ap;function Ep(n){return bp(n)}function bp(n,t){const e=co();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=En,insertStaticContent:v}=n,_=(w,P,G,q=null,Z=null,y=null,g=void 0,U=null,B=!!P.dynamicChildren)=>{if(w===P)return;w&&!Li(w,P)&&(q=ut(w),Rt(w,Z,y,!0),w=null),P.patchFlag===-2&&(B=!1,P.dynamicChildren=null);const{type:N,ref:W,shapeFlag:et}=P;switch(N){case vo:p(w,P,G,q);break;case Ue:d(w,P,G,q);break;case zo:w==null&&E(P,G,q,g);break;case sn:L(w,P,G,q,Z,y,g,U,B);break;default:et&1?I(w,P,G,q,Z,y,g,U,B):et&6?D(w,P,G,q,Z,y,g,U,B):(et&64||et&128)&&N.process(w,P,G,q,Z,y,g,U,B,Mt)}W!=null&&Z?Or(W,w&&w.ref,y,P||w,!P):W==null&&w&&w.ref!=null&&Or(w.ref,null,y,w,!0)},p=(w,P,G,q)=>{if(w==null)i(P.el=a(P.children),G,q);else{const Z=P.el=w.el;P.children!==w.children&&c(Z,P.children)}},d=(w,P,G,q)=>{w==null?i(P.el=l(P.children||""),G,q):P.el=w.el},E=(w,P,G,q)=>{[w.el,w.anchor]=v(w.children,P,G,q,w.el,w.anchor)},M=({el:w,anchor:P},G,q)=>{let Z;for(;w&&w!==P;)Z=h(w),i(w,G,q),w=Z;i(P,G,q)},b=({el:w,anchor:P})=>{let G;for(;w&&w!==P;)G=h(w),r(w),w=G;r(P)},I=(w,P,G,q,Z,y,g,U,B)=>{if(P.type==="svg"?g="svg":P.type==="math"&&(g="mathml"),w==null)A(P,G,q,Z,y,g,U,B);else{const N=w.el&&w.el._isVueCE?w.el:null;try{N&&N._beginPatch(),S(w,P,Z,y,g,U,B)}finally{N&&N._endPatch()}}},A=(w,P,G,q,Z,y,g,U)=>{let B,N;const{props:W,shapeFlag:et,transition:$,dirs:rt}=w;if(B=w.el=o(w.type,y,W&&W.is,W),et&8?u(B,w.children):et&16&&F(w.children,B,null,q,Z,Bo(w,y),g,U),rt&&vi(w,null,q,"created"),R(B,w,w.scopeId,g,q),W){for(const it in W)it!=="value"&&!Ur(it)&&s(B,it,null,W[it],y,q);"value"in W&&s(B,"value",null,W.value,y),(N=W.onVnodeBeforeMount)&&pn(N,q,w)}rt&&vi(w,null,q,"beforeMount");const ct=Tp(Z,$);ct&&$.beforeEnter(B),i(B,P,G),((N=W&&W.onVnodeMounted)||ct||rt)&&Be(()=>{N&&pn(N,q,w),ct&&$.enter(B),rt&&vi(w,null,q,"mounted")},Z)},R=(w,P,G,q,Z)=>{if(G&&m(w,G),q)for(let y=0;y<q.length;y++)m(w,q[y]);if(Z){let y=Z.subTree;if(P===y||Qf(y.type)&&(y.ssContent===P||y.ssFallback===P)){const g=Z.vnode;R(w,g,g.scopeId,g.slotScopeIds,Z.parent)}}},F=(w,P,G,q,Z,y,g,U,B=0)=>{for(let N=B;N<w.length;N++){const W=w[N]=U?Fn(w[N]):xn(w[N]);_(null,W,P,G,q,Z,y,g,U)}},S=(w,P,G,q,Z,y,g)=>{const U=P.el=w.el;let{patchFlag:B,dynamicChildren:N,dirs:W}=P;B|=w.patchFlag&16;const et=w.props||ie,$=P.props||ie;let rt;if(G&&xi(G,!1),(rt=$.onVnodeBeforeUpdate)&&pn(rt,G,P,w),W&&vi(P,w,G,"beforeUpdate"),G&&xi(G,!0),(et.innerHTML&&$.innerHTML==null||et.textContent&&$.textContent==null)&&u(U,""),N?x(w.dynamicChildren,N,U,G,q,Bo(P,Z),y):g||V(w,P,U,null,G,q,Bo(P,Z),y,!1),B>0){if(B&16)z(U,et,$,G,Z);else if(B&2&&et.class!==$.class&&s(U,"class",null,$.class,Z),B&4&&s(U,"style",et.style,$.style,Z),B&8){const ct=P.dynamicProps;for(let it=0;it<ct.length;it++){const ot=ct[it],St=et[ot],pt=$[ot];(pt!==St||ot==="value")&&s(U,ot,St,pt,Z,G)}}B&1&&w.children!==P.children&&u(U,P.children)}else!g&&N==null&&z(U,et,$,G,Z);((rt=$.onVnodeUpdated)||W)&&Be(()=>{rt&&pn(rt,G,P,w),W&&vi(P,w,G,"updated")},q)},x=(w,P,G,q,Z,y,g)=>{for(let U=0;U<P.length;U++){const B=w[U],N=P[U],W=B.el&&(B.type===sn||!Li(B,N)||B.shapeFlag&198)?f(B.el):G;_(B,N,W,null,q,Z,y,g,!0)}},z=(w,P,G,q,Z)=>{if(P!==G){if(P!==ie)for(const y in P)!Ur(y)&&!(y in G)&&s(w,y,P[y],null,Z,q);for(const y in G){if(Ur(y))continue;const g=G[y],U=P[y];g!==U&&y!=="value"&&s(w,y,U,g,Z,q)}"value"in G&&s(w,"value",P.value,G.value,Z)}},L=(w,P,G,q,Z,y,g,U,B)=>{const N=P.el=w?w.el:a(""),W=P.anchor=w?w.anchor:a("");let{patchFlag:et,dynamicChildren:$,slotScopeIds:rt}=P;rt&&(U=U?U.concat(rt):rt),w==null?(i(N,G,q),i(W,G,q),F(P.children||[],G,W,Z,y,g,U,B)):et>0&&et&64&&$&&w.dynamicChildren&&w.dynamicChildren.length===$.length?(x(w.dynamicChildren,$,G,Z,y,g,U),(P.key!=null||Z&&P===Z.subTree)&&Kf(w,P,!0)):V(w,P,G,W,Z,y,g,U,B)},D=(w,P,G,q,Z,y,g,U,B)=>{P.slotScopeIds=U,w==null?P.shapeFlag&512?Z.ctx.activate(P,G,q,g,B):X(P,G,q,Z,y,g,B):J(w,P,B)},X=(w,P,G,q,Z,y,g)=>{const U=w.component=Up(w,q,Z);if(ho(w)&&(U.ctx.renderer=Mt),Np(U,!1,g),U.asyncDep){if(Z&&Z.registerDep(U,tt,g),!w.el){const B=U.subTree=Fe(Ue);d(null,B,P,G),w.placeholder=B.el}}else tt(U,w,P,G,Z,y,g)},J=(w,P,G)=>{const q=P.component=w.component;if(mp(w,P,G))if(q.asyncDep&&!q.asyncResolved){nt(q,P,G);return}else q.next=P,q.update();else P.el=w.el,q.vnode=P},tt=(w,P,G,q,Z,y,g)=>{const U=()=>{if(w.isMounted){let{next:et,bu:$,u:rt,parent:ct,vnode:it}=w;{const Dt=Zf(w);if(Dt){et&&(et.el=it.el,nt(w,et,g)),Dt.asyncDep.then(()=>{Be(()=>{w.isUnmounted||N()},Z)});return}}let ot=et,St;xi(w,!1),et?(et.el=it.el,nt(w,et,g)):et=it,$&&Lo($),(St=et.props&&et.props.onVnodeBeforeUpdate)&&pn(St,ct,et,it),xi(w,!0);const pt=Xl(w),_t=w.subTree;w.subTree=pt,_(_t,pt,f(_t.el),ut(_t),w,Z,y),et.el=pt.el,ot===null&&gp(w,pt.el),rt&&Be(rt,Z),(St=et.props&&et.props.onVnodeUpdated)&&Be(()=>pn(St,ct,et,it),Z)}else{let et;const{el:$,props:rt}=P,{bm:ct,m:it,parent:ot,root:St,type:pt}=w,_t=Br(P);xi(w,!1),ct&&Lo(ct),!_t&&(et=rt&&rt.onVnodeBeforeMount)&&pn(et,ot,P),xi(w,!0);{St.ce&&St.ce._hasShadowRoot()&&St.ce._injectChildStyle(pt);const Dt=w.subTree=Xl(w);_(null,Dt,G,q,w,Z,y),P.el=Dt.el}if(it&&Be(it,Z),!_t&&(et=rt&&rt.onVnodeMounted)){const Dt=P;Be(()=>pn(et,ot,Dt),Z)}(P.shapeFlag&256||ot&&Br(ot.vnode)&&ot.vnode.shapeFlag&256)&&w.a&&Be(w.a,Z),w.isMounted=!0,P=G=q=null}};w.scope.on();const B=w.effect=new sf(U);w.scope.off();const N=w.update=B.run.bind(B),W=w.job=B.runIfDirty.bind(B);W.i=w,W.id=w.uid,B.scheduler=()=>ll(W),xi(w,!0),N()},nt=(w,P,G)=>{P.component=w;const q=w.vnode.props;w.vnode=P,w.next=null,vp(w,P.props,q,G),yp(w,P.children,G),zn(),Ol(w),Hn()},V=(w,P,G,q,Z,y,g,U,B=!1)=>{const N=w&&w.children,W=w?w.shapeFlag:0,et=P.children,{patchFlag:$,shapeFlag:rt}=P;if($>0){if($&128){lt(N,et,G,q,Z,y,g,U,B);return}else if($&256){at(N,et,G,q,Z,y,g,U,B);return}}rt&8?(W&16&&gt(N,Z,y),et!==N&&u(G,et)):W&16?rt&16?lt(N,et,G,q,Z,y,g,U,B):gt(N,Z,y,!0):(W&8&&u(G,""),rt&16&&F(et,G,q,Z,y,g,U,B))},at=(w,P,G,q,Z,y,g,U,B)=>{w=w||ar,P=P||ar;const N=w.length,W=P.length,et=Math.min(N,W);let $;for($=0;$<et;$++){const rt=P[$]=B?Fn(P[$]):xn(P[$]);_(w[$],rt,G,null,Z,y,g,U,B)}N>W?gt(w,Z,y,!0,!1,et):F(P,G,q,Z,y,g,U,B,et)},lt=(w,P,G,q,Z,y,g,U,B)=>{let N=0;const W=P.length;let et=w.length-1,$=W-1;for(;N<=et&&N<=$;){const rt=w[N],ct=P[N]=B?Fn(P[N]):xn(P[N]);if(Li(rt,ct))_(rt,ct,G,null,Z,y,g,U,B);else break;N++}for(;N<=et&&N<=$;){const rt=w[et],ct=P[$]=B?Fn(P[$]):xn(P[$]);if(Li(rt,ct))_(rt,ct,G,null,Z,y,g,U,B);else break;et--,$--}if(N>et){if(N<=$){const rt=$+1,ct=rt<W?P[rt].el:q;for(;N<=$;)_(null,P[N]=B?Fn(P[N]):xn(P[N]),G,ct,Z,y,g,U,B),N++}}else if(N>$)for(;N<=et;)Rt(w[N],Z,y,!0),N++;else{const rt=N,ct=N,it=new Map;for(N=ct;N<=$;N++){const Ut=P[N]=B?Fn(P[N]):xn(P[N]);Ut.key!=null&&it.set(Ut.key,N)}let ot,St=0;const pt=$-ct+1;let _t=!1,Dt=0;const Gt=new Array(pt);for(N=0;N<pt;N++)Gt[N]=0;for(N=rt;N<=et;N++){const Ut=w[N];if(St>=pt){Rt(Ut,Z,y,!0);continue}let Xt;if(Ut.key!=null)Xt=it.get(Ut.key);else for(ot=ct;ot<=$;ot++)if(Gt[ot-ct]===0&&Li(Ut,P[ot])){Xt=ot;break}Xt===void 0?Rt(Ut,Z,y,!0):(Gt[Xt-ct]=N+1,Xt>=Dt?Dt=Xt:_t=!0,_(Ut,P[Xt],G,null,Z,y,g,U,B),St++)}const $t=_t?wp(Gt):ar;for(ot=$t.length-1,N=pt-1;N>=0;N--){const Ut=ct+N,Xt=P[Ut],yt=P[Ut+1],C=Ut+1<W?yt.el||Jf(yt):q;Gt[N]===0?_(null,Xt,G,C,Z,y,g,U,B):_t&&(ot<0||N!==$t[ot]?vt(Xt,G,C,2):ot--)}}},vt=(w,P,G,q,Z=null)=>{const{el:y,type:g,transition:U,children:B,shapeFlag:N}=w;if(N&6){vt(w.component.subTree,P,G,q);return}if(N&128){w.suspense.move(P,G,q);return}if(N&64){g.move(w,P,G,Mt);return}if(g===sn){i(y,P,G);for(let et=0;et<B.length;et++)vt(B[et],P,G,q);i(w.anchor,P,G);return}if(g===zo){M(w,P,G);return}if(q!==2&&N&1&&U)if(q===0)U.beforeEnter(y),i(y,P,G),Be(()=>U.enter(y),Z);else{const{leave:et,delayLeave:$,afterLeave:rt}=U,ct=()=>{w.ctx.isUnmounted?r(y):i(y,P,G)},it=()=>{y._isLeaving&&y[_n](!0),et(y,()=>{ct(),rt&&rt()})};$?$(y,ct,it):it()}else i(y,P,G)},Rt=(w,P,G,q=!1,Z=!1)=>{const{type:y,props:g,ref:U,children:B,dynamicChildren:N,shapeFlag:W,patchFlag:et,dirs:$,cacheIndex:rt}=w;if(et===-2&&(Z=!1),U!=null&&(zn(),Or(U,null,G,w,!0),Hn()),rt!=null&&(P.renderCache[rt]=void 0),W&256){P.ctx.deactivate(w);return}const ct=W&1&&$,it=!Br(w);let ot;if(it&&(ot=g&&g.onVnodeBeforeUnmount)&&pn(ot,P,w),W&6)st(w.component,G,q);else{if(W&128){w.suspense.unmount(G,q);return}ct&&vi(w,null,P,"beforeUnmount"),W&64?w.type.remove(w,P,G,Mt,q):N&&!N.hasOnce&&(y!==sn||et>0&&et&64)?gt(N,P,G,!1,!0):(y===sn&&et&384||!Z&&W&16)&&gt(B,P,G),q&&jt(w)}(it&&(ot=g&&g.onVnodeUnmounted)||ct)&&Be(()=>{ot&&pn(ot,P,w),ct&&vi(w,null,P,"unmounted")},G)},jt=w=>{const{type:P,el:G,anchor:q,transition:Z}=w;if(P===sn){Q(G,q);return}if(P===zo){b(w);return}const y=()=>{r(G),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(w.shapeFlag&1&&Z&&!Z.persisted){const{leave:g,delayLeave:U}=Z,B=()=>g(G,y);U?U(w.el,y,B):B()}else y()},Q=(w,P)=>{let G;for(;w!==P;)G=h(w),r(w),w=G;r(P)},st=(w,P,G)=>{const{bum:q,scope:Z,job:y,subTree:g,um:U,m:B,a:N}=w;$l(B),$l(N),q&&Lo(q),Z.stop(),y&&(y.flags|=8,Rt(g,w,P,G)),U&&Be(U,P),Be(()=>{w.isUnmounted=!0},P)},gt=(w,P,G,q=!1,Z=!1,y=0)=>{for(let g=y;g<w.length;g++)Rt(w[g],P,G,q,Z)},ut=w=>{if(w.shapeFlag&6)return ut(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=h(w.anchor||w.el),G=P&&P[kd];return G?h(G):P};let Lt=!1;const Et=(w,P,G)=>{let q;w==null?P._vnode&&(Rt(P._vnode,null,null,!0),q=P._vnode.component):_(P._vnode||null,w,P,null,null,null,G),P._vnode=w,Lt||(Lt=!0,Ol(q),Ef(),Lt=!1)},Mt={p:_,um:Rt,m:vt,r:jt,mt:X,mc:F,pc:V,pbc:x,n:ut,o:n};return{render:Et,hydrate:void 0,createApp:cp(Et)}}function Bo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function xi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Tp(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Kf(n,t,e=!1){const i=n.children,r=t.children;if(Pt(i)&&Pt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Fn(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Kf(o,a)),a.type===vo&&(a.patchFlag===-1&&(a=r[s]=Fn(a)),a.el=o.el),a.type===Ue&&!a.el&&(a.el=o.el)}}function wp(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function Zf(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zf(t)}function $l(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Jf(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Jf(t.subTree):null}const Qf=n=>n.__isSuspense;function Ap(n,t){t&&t.pendingBranch?Pt(n)?t.effects.push(...n):t.effects.push(n):Fd(n)}const sn=Symbol.for("v-fgt"),vo=Symbol.for("v-txt"),Ue=Symbol.for("v-cmt"),zo=Symbol.for("v-stc"),Hr=[];let $e=null;function qe(n=!1){Hr.push($e=n?null:[])}function Rp(){Hr.pop(),$e=Hr[Hr.length-1]||null}let jr=1;function Zs(n,t=!1){jr+=n,n<0&&$e&&t&&($e.hasOnce=!0)}function th(n){return n.dynamicChildren=jr>0?$e||ar:null,Rp(),jr>0&&$e&&$e.push(n),n}function oi(n,t,e,i,r,s){return th(xt(n,t,e,i,r,s,!0))}function kr(n,t,e,i,r){return th(Fe(n,t,e,i,r,!0))}function Js(n){return n?n.__v_isVNode===!0:!1}function Li(n,t){return n.type===t.type&&n.key===t.key}const eh=({key:n})=>n??null,Vs=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ge(n)||Re(n)||Bt(n)?{i:Sn,r:n,k:t,f:!!e}:n:null);function xt(n,t=null,e=null,i=0,r=null,s=n===sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&eh(t),ref:t&&Vs(t),scopeId:Tf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Sn};return a?(fl(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=ge(e)?8:16),jr>0&&!o&&$e&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$e.push(l),l}const Fe=Cp;function Cp(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===ep)&&(n=Ue),Js(n)){const a=hi(n,t,!0);return e&&fl(a,e),jr>0&&!s&&$e&&(a.shapeFlag&6?$e[$e.indexOf(n)]=a:$e.push(a)),a.patchFlag=-2,a}if(zp(n)&&(n=n.__vccOpts),t){t=Pp(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=ni(a)),Zt(l)&&(al(l)&&!Pt(l)&&(l=ye({},l)),t.style=Jr(l))}const o=ge(n)?1:Qf(n)?128:Rf(n)?64:Zt(n)?4:Bt(n)?2:0;return xt(n,t,e,i,r,o,s,!0)}function Pp(n){return n?al(n)||Wf(n)?ye({},n):n:null}function hi(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=t?Lp(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&eh(c),ref:t&&t.ref?e&&s?Pt(s)?s.concat(Vs(t)):[s,Vs(t)]:Vs(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==sn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&hi(n.ssContent),ssFallback:n.ssFallback&&hi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&qr(u,l.clone(u)),u}function hr(n=" ",t=0){return Fe(vo,null,n,t)}function ti(n="",t=!1){return t?(qe(),kr(Ue,null,n)):Fe(Ue,null,n)}function xn(n){return n==null||typeof n=="boolean"?Fe(Ue):Pt(n)?Fe(sn,null,n.slice()):Js(n)?Fn(n):Fe(vo,null,String(n))}function Fn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:hi(n)}function fl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Pt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),fl(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Wf(t)?t._ctx=Sn:r===3&&Sn&&(Sn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Bt(t)?(t={default:t,_ctx:Sn},e=32):(t=String(t),i&64?(e=16,t=[hr(t)]):e=8);n.children=t,n.shapeFlag|=e}function Lp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=ni([t.class,i.class]));else if(r==="style")t.style=Jr([t.style,i.style]);else if(ao(r)){const s=t[r],o=i[r];o&&s!==o&&!(Pt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function pn(n,t,e,i=null){fn(n,t,7,[e,i])}const Dp=zf();let Ip=0;function Up(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Dp,s={uid:Ip++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qf(i,r),emitsOptions:Hf(i,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=fp.bind(null,s),n.ce&&n.ce(s),s}let Ne=null;const nh=()=>Ne||Sn;let Qs,Fa;{const n=co(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Qs=t("__VUE_INSTANCE_SETTERS__",e=>Ne=e),Fa=t("__VUE_SSR_SETTERS__",e=>$r=e)}const ts=n=>{const t=Ne;return Qs(n),n.scope.on(),()=>{n.scope.off(),Qs(t)}},Yl=()=>{Ne&&Ne.scope.off(),Qs(null)};function ih(n){return n.vnode.shapeFlag&4}let $r=!1;function Np(n,t=!1,e=!1){t&&Fa(t);const{props:i,children:r}=n.vnode,s=ih(n);_p(n,i,s,t),Sp(n,r,e||t);const o=s?Fp(n,t):void 0;return t&&Fa(!1),o}function Fp(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,np);const{setup:i}=e;if(i){zn();const r=n.setupContext=i.length>1?Bp(n):null,s=ts(n),o=Qr(i,n,0,[n.props,r]),a=Ku(o);if(Hn(),s(),(a||n.sp)&&!Br(n)&&Uf(n),a){if(o.then(Yl,Yl),t)return o.then(l=>{Kl(n,l)}).catch(l=>{uo(l,n,0)});n.asyncDep=o}else Kl(n,o)}else rh(n)}function Kl(n,t,e){Bt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Zt(t)&&(n.setupState=xf(t)),rh(n)}function rh(n,t,e){const i=n.type;n.render||(n.render=i.render||En);{const r=ts(n);zn();try{ip(n)}finally{Hn(),r()}}}const Op={get(n,t){return Ae(n,"get",""),n[t]}};function Bp(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Op),slots:n.slots,emit:n.emit,expose:t}}function hl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xf(wd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in zr)return zr[e](n)},has(t,e){return e in t||e in zr}})):n.proxy}function zp(n){return Bt(n)&&"__vccOpts"in n}const sh=(n,t)=>Ld(n,t,$r);function Hp(n,t,e){try{Zs(-1);const i=arguments.length;return i===2?Zt(t)&&!Pt(t)?Js(t)?Fe(n,null,[t]):Fe(n,t):Fe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Js(e)&&(e=[e]),Fe(n,t,e))}finally{Zs(1)}}const kp="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oa;const Zl=typeof window<"u"&&window.trustedTypes;if(Zl)try{Oa=Zl.createPolicy("vue",{createHTML:n=>n})}catch{}const oh=Oa?n=>Oa.createHTML(n):n=>n,Vp="http://www.w3.org/2000/svg",Gp="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,Jl=Nn&&Nn.createElement("template"),Wp={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Nn.createElementNS(Vp,n):t==="mathml"?Nn.createElementNS(Gp,n):e?Nn.createElement(n,{is:e}):Nn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Nn.createTextNode(n),createComment:n=>Nn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Nn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Jl.innerHTML=oh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Jl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Wn="transition",Tr="animation",Yr=Symbol("_vtc"),ah={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xp=ye({},Cf,ah),qp=n=>(n.displayName="Transition",n.props=Xp,n),dl=qp((n,{slots:t})=>Hp(Wd,jp(n),t)),Mi=(n,t=[])=>{Pt(n)?n.forEach(e=>e(...t)):n&&n(...t)},Ql=n=>n?Pt(n)?n.some(t=>t.length>1):n.length>1:!1;function jp(n){const t={};for(const L in n)L in ah||(t[L]=n[L]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:m=`${e}-leave-to`}=n,v=$p(r),_=v&&v[0],p=v&&v[1],{onBeforeEnter:d,onEnter:E,onEnterCancelled:M,onLeave:b,onLeaveCancelled:I,onBeforeAppear:A=d,onAppear:R=E,onAppearCancelled:F=M}=t,S=(L,D,X,J)=>{L._enterCancelled=J,Si(L,D?u:a),Si(L,D?c:o),X&&X()},x=(L,D)=>{L._isLeaving=!1,Si(L,f),Si(L,m),Si(L,h),D&&D()},z=L=>(D,X)=>{const J=L?R:E,tt=()=>S(D,L,X);Mi(J,[D,tt]),tc(()=>{Si(D,L?l:s),Rn(D,L?u:a),Ql(J)||ec(D,i,_,tt)})};return ye(t,{onBeforeEnter(L){Mi(d,[L]),Rn(L,s),Rn(L,o)},onBeforeAppear(L){Mi(A,[L]),Rn(L,l),Rn(L,c)},onEnter:z(!1),onAppear:z(!0),onLeave(L,D){L._isLeaving=!0;const X=()=>x(L,D);Rn(L,f),L._enterCancelled?(Rn(L,h),rc(L)):(rc(L),Rn(L,h)),tc(()=>{L._isLeaving&&(Si(L,f),Rn(L,m),Ql(b)||ec(L,i,p,X))}),Mi(b,[L,X])},onEnterCancelled(L){S(L,!1,void 0,!0),Mi(M,[L])},onAppearCancelled(L){S(L,!0,void 0,!0),Mi(F,[L])},onLeaveCancelled(L){x(L),Mi(I,[L])}})}function $p(n){if(n==null)return null;if(Zt(n))return[Ho(n.enter),Ho(n.leave)];{const t=Ho(n);return[t,t]}}function Ho(n){return Zh(n)}function Rn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Yr]||(n[Yr]=new Set)).add(t)}function Si(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Yr];e&&(e.delete(t),e.size||(n[Yr]=void 0))}function tc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Yp=0;function ec(n,t,e,i){const r=n._endId=++Yp,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=Kp(n,t);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function Kp(n,t){const e=window.getComputedStyle(n),i=v=>(e[v]||"").split(", "),r=i(`${Wn}Delay`),s=i(`${Wn}Duration`),o=nc(r,s),a=i(`${Tr}Delay`),l=i(`${Tr}Duration`),c=nc(a,l);let u=null,f=0,h=0;t===Wn?o>0&&(u=Wn,f=o,h=s.length):t===Tr?c>0&&(u=Tr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Wn:Tr:null,h=u?u===Wn?s.length:l.length:0);const m=u===Wn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Wn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function nc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>ic(e)+ic(n[i])))}function ic(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function rc(n){return(n?n.ownerDocument:document).body.offsetHeight}function Zp(n,t,e){const i=n[Yr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const sc=Symbol("_vod"),Jp=Symbol("_vsh"),Qp=Symbol(""),tm=/(?:^|;)\s*display\s*:/;function em(n,t,e){const i=n.style,r=ge(e);let s=!1;if(e&&!r){if(t)if(ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Gs(i,a,"")}else for(const o in t)e[o]==null&&Gs(i,o,"");for(const o in e)o==="display"&&(s=!0),Gs(i,o,e[o])}else if(r){if(t!==e){const o=i[Qp];o&&(e+=";"+o),i.cssText=e,s=tm.test(e)}}else t&&n.removeAttribute("style");sc in n&&(n[sc]=s?i.display:"",n[Jp]&&(i.display="none"))}const oc=/\s*!important$/;function Gs(n,t,e){if(Pt(e))e.forEach(i=>Gs(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=nm(n,t);oc.test(e)?n.setProperty(Bi(i),e.replace(oc,""),"important"):n[i]=e}}const ac=["Webkit","Moz","ms"],ko={};function nm(n,t){const e=ko[t];if(e)return e;let i=ui(t);if(i!=="filter"&&i in n)return ko[t]=i;i=Qu(i);for(let r=0;r<ac.length;r++){const s=ac[r]+i;if(s in n)return ko[t]=s}return t}const lc="http://www.w3.org/1999/xlink";function cc(n,t,e,i,r,s=id(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(lc,t.slice(6,t.length)):n.setAttributeNS(lc,t,e):e==null||s&&!ef(e)?n.removeAttribute(t):n.setAttribute(t,s?"":bn(e)?String(e):e)}function uc(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?oh(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=ef(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function im(n,t,e,i){n.addEventListener(t,e,i)}function rm(n,t,e,i){n.removeEventListener(t,e,i)}const fc=Symbol("_vei");function sm(n,t,e,i,r=null){const s=n[fc]||(n[fc]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=om(t);if(i){const c=s[t]=cm(i,r);im(n,a,c,l)}else o&&(rm(n,a,o,l),s[t]=void 0)}}const hc=/(?:Once|Passive|Capture)$/;function om(n){let t;if(hc.test(n)){t={};let i;for(;i=n.match(hc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Bi(n.slice(2)),t]}let Vo=0;const am=Promise.resolve(),lm=()=>Vo||(am.then(()=>Vo=0),Vo=Date.now());function cm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;fn(um(i,e.value),t,5,[i])};return e.value=n,e.attached=lm(),e}function um(n,t){if(Pt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const dc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,fm=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?Zp(n,i,o):t==="style"?em(n,e,i):ao(t)?Ya(t)||sm(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hm(n,t,i,o))?(uc(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&cc(n,t,i,o,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!ge(i))?uc(n,ui(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),cc(n,t,i,o))};function hm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&dc(t)&&Bt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return dc(t)&&ge(e)?!1:t in n}const dm=["ctrl","shift","alt","meta"],pm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>dm.some(e=>n[`${e}Key`]&&!t.includes(e))},mm=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=pm[t[o]];if(a&&a(r,t))return}return n(r,...s)})},gm=ye({patchProp:fm},Wp);let pc;function _m(){return pc||(pc=Ep(gm))}const vm=(...n)=>{const t=_m().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Mm(i);if(!r)return;const s=t._component;!Bt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,xm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function xm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Mm(n){return ge(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="163",Sm=0,mc=1,ym=2,lh=1,ch=2,Un=3,di=0,ke=1,je=2,ai=0,dr=1,gc=2,_c=3,vc=4,Em=5,Di=100,bm=101,Tm=102,wm=103,Am=104,Rm=200,Cm=201,Pm=202,Lm=203,Ba=204,za=205,Dm=206,Im=207,Um=208,Nm=209,Fm=210,Om=211,Bm=212,zm=213,Hm=214,km=0,Vm=1,Gm=2,to=3,Wm=4,Xm=5,qm=6,jm=7,ml=0,$m=1,Ym=2,li=0,Km=1,Zm=2,Jm=3,uh=4,Qm=5,tg=6,eg=7,fh=300,gr=301,_r=302,Ha=303,ka=304,xo=306,Va=1e3,Ui=1001,Ga=1002,Qe=1003,ng=1004,hs=1005,on=1006,Go=1007,Ni=1008,ci=1009,ig=1010,rg=1011,hh=1012,dh=1013,vr=1014,ii=1015,eo=1016,ph=1017,mh=1018,es=1020,sg=35902,og=1021,ag=1022,yn=1023,lg=1024,cg=1025,pr=1026,Kr=1027,ug=1028,gh=1029,fg=1030,_h=1031,vh=1033,Wo=33776,Xo=33777,qo=33778,jo=33779,xc=35840,Mc=35841,Sc=35842,yc=35843,xh=36196,Ec=37492,bc=37496,Tc=37808,wc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Lc=37814,Dc=37815,Ic=37816,Uc=37817,Nc=37818,Fc=37819,Oc=37820,Bc=37821,$o=36492,zc=36494,Hc=36495,hg=36283,kc=36284,Vc=36285,Gc=36286,dg=3200,pg=3201,Mh=0,mg=1,ei="",vn="srgb",mi="srgb-linear",gl="display-p3",Mo="display-p3-linear",no="linear",se="srgb",io="rec709",ro="p3",ki=7680,Wc=519,gg=512,_g=513,vg=514,Sh=515,xg=516,Mg=517,Sg=518,yg=519,Xc=35044,qc="300 es",Bn=2e3,so=2001;class Mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,Wa=180/Math.PI;function ns(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function He(n,t,e){return Math.max(t,Math.min(e,n))}function Eg(n,t){return(n%t+t)%t}function Yo(n,t,e){return(1-e)*n+e*t}function wr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,r,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],_=r[0],p=r[3],d=r[6],E=r[1],M=r[4],b=r[7],I=r[2],A=r[5],R=r[8];return s[0]=o*_+a*E+l*I,s[3]=o*p+a*M+l*A,s[6]=o*d+a*b+l*R,s[1]=c*_+u*E+f*I,s[4]=c*p+u*M+f*A,s[7]=c*d+u*b+f*R,s[2]=h*_+m*E+v*I,s[5]=h*p+m*M+v*A,s[8]=h*d+m*b+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,v=e*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=f*_,t[1]=(r*c-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new Vt;function yh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bg(){const n=oo("canvas");return n.style.display="block",n}const jc={};function Tg(n){n in jc||(jc[n]=!0,console.warn(n))}const $c=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yc=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[mi]:{transfer:no,primaries:io,toReference:n=>n,fromReference:n=>n},[vn]:{transfer:se,primaries:io,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Mo]:{transfer:no,primaries:ro,toReference:n=>n.applyMatrix3(Yc),fromReference:n=>n.applyMatrix3($c)},[gl]:{transfer:se,primaries:ro,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Yc),fromReference:n=>n.applyMatrix3($c).convertLinearToSRGB()}},wg=new Set([mi,Mo]),Qt={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!wg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=ds[t].toReference,r=ds[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return ds[n].primaries},getTransfer:function(n){return n===ei?no:ds[n].transfer}};function mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class Ag{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=oo("canvas")),Vi.width=t.width,Vi.height=t.height;const i=Vi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mr(e[i]/255)*255):e[i]=mr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rg=0;class Eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jo(r[o].image)):s.push(Jo(r[o]))}else s=Jo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ag.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cg=0;class Ve extends Mr{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=Ui,r=Ui,s=on,o=Ni,a=yn,l=ci,c=Ve.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=ns(),this.name="",this.source=new Eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=fh;Ve.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,r=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,b=(m+1)/2,I=(d+1)/2,A=(u+h)/4,R=(f+_)/4,F=(v+p)/4;return M>b&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=R/i):b>I?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=F/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=F/s),this.set(i,r,s,e),this}let E=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-v)/E,this.y=(f-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pg extends Mr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Ve(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Eh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Pg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class bh extends Ve{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lg extends Ve{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=v,t[e+3]=_;return}if(f!==_||l!==h||c!==m||u!==v){let p=1-a;const d=l*h+c*m+u*v+f*_,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const I=Math.sqrt(M),A=Math.atan2(I,d*E);p=Math.sin(p*A)/I,a=Math.sin(a*A)/I}const b=a*E;if(l=l*p+h*b,c=c*p+m*b,u=u*p+v*b,f=f*p+_*b,p===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return t[e]=a*v+u*f+l*m-c*h,t[e+1]=l*v+u*h+c*f-a*m,t[e+2]=c*v+u*m+a*h-l*f,t[e+3]=u*v-a*f-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new O,Kc=new is;class rs{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ps.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ps.copy(i.boundingBox)),ps.applyMatrix4(t.matrixWorld),this.union(ps)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),ms.subVectors(this.max,Ar),Gi.subVectors(t.a,Ar),Wi.subVectors(t.b,Ar),Xi.subVectors(t.c,Ar),Xn.subVectors(Wi,Gi),qn.subVectors(Xi,Wi),yi.subVectors(Gi,Xi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-yi.z,yi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,yi.z,0,-yi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-yi.y,yi.x,0];return!ta(e,Gi,Wi,Xi,ms)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,Gi,Wi,Xi,ms))?!1:(gs.crossVectors(Xn,qn),e=[gs.x,gs.y,gs.z],ta(e,Gi,Wi,Xi,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new O,new O,new O,new O,new O,new O,new O,new O],en=new O,ps=new rs,Gi=new O,Wi=new O,Xi=new O,Xn=new O,qn=new O,yi=new O,Ar=new O,ms=new O,gs=new O,Ei=new O;function ta(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ei.fromArray(n,s);const a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),u=i.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dg=new rs,Rr=new O,ea=new O;class ss{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Dg.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);const e=Rr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Rr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(ea)),this.expandByPoint(Rr.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new O,na=new O,_s=new O,jn=new O,ia=new O,vs=new O,ra=new O;class So{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){na.copy(t).add(e).multiplyScalar(.5),_s.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(na);const s=t.distanceTo(e)*.5,o=-this.direction.dot(_s),a=jn.dot(this.direction),l=-jn.dot(_s),c=jn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const _=1/u;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(na).addScaledVector(_s,h),m}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,i,r,s){ia.subVectors(e,t),vs.subVectors(i,t),ra.crossVectors(ia,vs);let o=this.direction.dot(ra),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const l=a*this.direction.dot(vs.crossVectors(jn,vs));if(l<0)return null;const c=a*this.direction.dot(ia.cross(jn));if(c<0||l+c>o)return null;const u=-a*jn.dot(ra);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,r,s,o,a,l,c,u,f,h,m,v,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,h,m,v,_,p)}set(t,e,i,r,s,o,a,l,c,u,f,h,m,v,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=v,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/qi.setFromMatrixColumn(t,0).length(),s=1/qi.setFromMatrixColumn(t,1).length(),o=1/qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,m=o*f,v=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+v*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=v+m*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,m=l*f,v=c*u,_=c*f;e[0]=h+_*a,e[4]=v*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-v,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,m=l*f,v=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,m=o*f,v=a*u,_=a*f;e[0]=l*u,e[4]=v*c-m,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=m*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,m=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=v*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*f+v,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,m=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=m*f-v,e[2]=v*f-m,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ig,t,Ug)}lookAt(t,e,i){const r=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),$n.crossVectors(i,We),$n.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),$n.crossVectors(i,We)),$n.normalize(),xs.crossVectors(We,$n),r[0]=$n.x,r[4]=xs.x,r[8]=We.x,r[1]=$n.y,r[5]=xs.y,r[9]=We.y,r[2]=$n.z,r[6]=xs.z,r[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],_=i[6],p=i[10],d=i[14],E=i[3],M=i[7],b=i[11],I=i[15],A=r[0],R=r[4],F=r[8],S=r[12],x=r[1],z=r[5],L=r[9],D=r[13],X=r[2],J=r[6],tt=r[10],nt=r[14],V=r[3],at=r[7],lt=r[11],vt=r[15];return s[0]=o*A+a*x+l*X+c*V,s[4]=o*R+a*z+l*J+c*at,s[8]=o*F+a*L+l*tt+c*lt,s[12]=o*S+a*D+l*nt+c*vt,s[1]=u*A+f*x+h*X+m*V,s[5]=u*R+f*z+h*J+m*at,s[9]=u*F+f*L+h*tt+m*lt,s[13]=u*S+f*D+h*nt+m*vt,s[2]=v*A+_*x+p*X+d*V,s[6]=v*R+_*z+p*J+d*at,s[10]=v*F+_*L+p*tt+d*lt,s[14]=v*S+_*D+p*nt+d*vt,s[3]=E*A+M*x+b*X+I*V,s[7]=E*R+M*z+b*J+I*at,s[11]=E*F+M*L+b*tt+I*lt,s[15]=E*S+M*D+b*nt+I*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],m=t[14],v=t[3],_=t[7],p=t[11],d=t[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+_*(+e*l*m-e*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+e*c*f-e*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-e*l*f+e*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],m=t[11],v=t[12],_=t[13],p=t[14],d=t[15],E=f*p*c-_*h*c+_*l*m-a*p*m-f*l*d+a*h*d,M=v*h*c-u*p*c-v*l*m+o*p*m+u*l*d-o*h*d,b=u*_*c-v*f*c+v*a*m-o*_*m-u*a*d+o*f*d,I=v*f*l-u*_*l-v*a*h+o*_*h+u*a*p-o*f*p,A=e*E+i*M+r*b+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=E*R,t[1]=(_*h*s-f*p*s-_*r*m+i*p*m+f*r*d-i*h*d)*R,t[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*d+i*l*d)*R,t[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*R,t[4]=M*R,t[5]=(u*p*s-v*h*s+v*r*m-e*p*m-u*r*d+e*h*d)*R,t[6]=(v*l*s-o*p*s-v*r*c+e*p*c+o*r*d-e*l*d)*R,t[7]=(o*h*s-u*l*s+u*r*c-e*h*c-o*r*m+e*l*m)*R,t[8]=b*R,t[9]=(v*f*s-u*_*s-v*i*m+e*_*m+u*i*d-e*f*d)*R,t[10]=(o*_*s-v*a*s+v*i*c-e*_*c-o*i*d+e*a*d)*R,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*m-e*a*m)*R,t[12]=I*R,t[13]=(u*_*r-v*f*r+v*i*h-e*_*h-u*i*p+e*f*p)*R,t[14]=(v*a*r-o*_*r-v*i*l+e*_*l+o*i*p-e*a*p)*R,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*h+e*a*h)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,v=s*f,_=o*u,p=o*f,d=a*f,E=l*c,M=l*u,b=l*f,I=i.x,A=i.y,R=i.z;return r[0]=(1-(_+d))*I,r[1]=(m+b)*I,r[2]=(v-M)*I,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(h+d))*A,r[6]=(p+E)*A,r[7]=0,r[8]=(v+M)*R,r[9]=(p-E)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),a=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],nn.copy(this);const c=1/s,u=1/o,f=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,e.setFromRotationMatrix(nn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Bn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let m,v;if(a===Bn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===so)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Bn){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(o-s),h=(e+t)*c,m=(i+r)*u;let v,_;if(a===Bn)v=(o+s)*f,_=-2*f;else if(a===so)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const qi=new O,nn=new oe,Ig=new O(0,0,0),Ug=new O(1,1,1),$n=new O,xs=new O,We=new O,Zc=new oe,Jc=new is;class Tn{constructor(t=0,e=0,i=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ng=0;const Qc=new O,ji=new is,Ln=new oe,Ms=new O,Cr=new O,Fg=new O,Og=new is,tu=new O(1,0,0),eu=new O(0,1,0),nu=new O(0,0,1),iu={type:"added"},Bg={type:"removed"},$i={type:"childadded",child:null},sa={type:"childremoved",child:null};class Se extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new O,e=new Tn,i=new is,r=new O(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new Vt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ms.copy(t):Ms.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Cr,Ms,this.up):Ln.lookAt(Ms,Cr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(Ln),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iu),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bg),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iu),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,Fg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Og,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Se.DEFAULT_UP=new O(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new O,Dn=new O,oa=new O,In=new O,Yi=new O,Ki=new O,ru=new O,aa=new O,la=new O,ca=new O;class an{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),rn.subVectors(t,e),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){rn.subVectors(r,e),Dn.subVectors(i,e),oa.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(Dn),l=rn.dot(oa),c=Dn.dot(Dn),u=Dn.dot(oa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static isFrontFacing(t,e,i,r){return rn.subVectors(i,e),Dn.subVectors(t,e),rn.cross(Dn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),rn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return an.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,i),Ki.subVectors(s,i),aa.subVectors(t,i);const l=Yi.dot(aa),c=Ki.dot(aa);if(l<=0&&c<=0)return e.copy(i);la.subVectors(t,r);const u=Yi.dot(la),f=Ki.dot(la);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Yi,o);ca.subVectors(t,s);const m=Yi.dot(ca),v=Ki.dot(ca);if(v>=0&&m<=v)return e.copy(s);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Ki,a);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return ru.subVectors(s,r),a=(f-u)/(f-u+(m-v)),e.copy(r).addScaledVector(ru,a);const d=1/(p+_+h);return o=_*d,a=h*d,e.copy(i).addScaledVector(Yi,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function ua(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=Eg(t,1),e=He(e,0,1),i=He(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ua(o,s,t+1/3),this.g=ua(o,s,t),this.b=ua(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){const i=Th[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=Zo(t.r),this.g=Zo(t.g),this.b=Zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return Qt.fromWorkingColorSpace(we.copy(this),t),Math.round(He(we.r*255,0,255))*65536+Math.round(He(we.g*255,0,255))*256+Math.round(He(we.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(we.copy(this),e);const i=we.r,r=we.g,s=we.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=vn){Qt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,i=we.g,r=we.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Ss);const i=Yo(Yn.h,Ss.h,e),r=Yo(Yn.s,Ss.s,e),s=Yo(Yn.l,Ss.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new qt;qt.NAMES=Th;let zg=0;class zi extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=dr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ba&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ie extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new O,ys=new zt;class un{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Tg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xc&&(t.usage=this.usage),t}}class wh extends un{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ah extends un{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ae extends un{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Hg=0;const Ze=new oe,fa=new Se,Zi=new O,Xe=new rs,Pr=new rs,Me=new O;class Ce extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yh(t)?Ah:wh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Vt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,i){return Ze.makeTranslation(t,e,i),this.applyMatrix4(Ze),this}scale(t,e,i){return Ze.makeScale(t,e,i),this.applyMatrix4(Ze),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Xe.min,Pr.min),Xe.expandByPoint(Me),Me.addVectors(Xe.max,Pr.max),Xe.expandByPoint(Me)):(Xe.expandByPoint(Pr.min),Xe.expandByPoint(Pr.max))}Xe.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Me.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(t,c),Me.add(Zi)),r=Math.max(r,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new O,l[F]=new O;const c=new O,u=new O,f=new O,h=new zt,m=new zt,v=new zt,_=new O,p=new O;function d(F,S,x){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,F),m.fromBufferAttribute(s,S),v.fromBufferAttribute(s,x),u.sub(c),f.sub(c),m.sub(h),v.sub(h);const z=1/(m.x*v.y-v.x*m.y);isFinite(z)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(z),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(z),a[F].add(_),a[S].add(_),a[x].add(_),l[F].add(p),l[S].add(p),l[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,S=E.length;F<S;++F){const x=E[F],z=x.start,L=x.count;for(let D=z,X=z+L;D<X;D+=3)d(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const M=new O,b=new O,I=new O,A=new O;function R(F){I.fromBufferAttribute(r,F),A.copy(I);const S=a[F];M.copy(S),M.sub(I.multiplyScalar(I.dot(S))).normalize(),b.crossVectors(A,S);const z=b.dot(l[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,z)}for(let F=0,S=E.length;F<S;++F){const x=E[F],z=x.start,L=x.count;for(let D=z,X=z+L;D<X;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(t)for(let h=0,m=t.count;h<m;h+=3){const v=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)h[v++]=c[m++]}return new un(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=t(h,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new oe,bi=new So,Es=new ss,ou=new O,Ji=new O,Qi=new O,tr=new O,ha=new O,bs=new O,Ts=new zt,ws=new zt,As=new zt,au=new O,lu=new O,cu=new O,Rs=new O,Cs=new O;class bt extends Se{constructor(t=new Ce,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ha.fromBufferAttribute(f,t),o?bs.addScaledVector(ha,u):bs.addScaledVector(ha.sub(e),u))}e.add(bs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(Es.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Es,ou)===null||bi.origin.distanceToSquared(ou)>(t.far-t.near)**2))&&(su.copy(s).invert(),bi.copy(t.ray).applyMatrix4(su),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const p=h[v],d=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,I=M;b<I;b+=3){const A=a.getX(b),R=a.getX(b+1),F=a.getX(b+2);r=Ps(this,d,t,i,c,u,f,A,R,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=v,d=_;p<d;p+=3){const E=a.getX(p),M=a.getX(p+1),b=a.getX(p+2);r=Ps(this,o,t,i,c,u,f,E,M,b),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const p=h[v],d=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,I=M;b<I;b+=3){const A=b,R=b+1,F=b+2;r=Ps(this,d,t,i,c,u,f,A,R,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,d=_;p<d;p+=3){const E=p,M=p+1,b=p+2;r=Ps(this,o,t,i,c,u,f,E,M,b),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function kg(n,t,e,i,r,s,o,a){let l;if(t.side===ke?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===di,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Cs);return c<e.near||c>e.far?null:{distance:c,point:Cs.clone(),object:n}}function Ps(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Ji),n.getVertexPosition(l,Qi),n.getVertexPosition(c,tr);const u=kg(n,t,e,i,Ji,Qi,tr,Rs);if(u){r&&(Ts.fromBufferAttribute(r,a),ws.fromBufferAttribute(r,l),As.fromBufferAttribute(r,c),u.uv=an.getInterpolation(Rs,Ji,Qi,tr,Ts,ws,As,new zt)),s&&(Ts.fromBufferAttribute(s,a),ws.fromBufferAttribute(s,l),As.fromBufferAttribute(s,c),u.uv1=an.getInterpolation(Rs,Ji,Qi,tr,Ts,ws,As,new zt)),o&&(au.fromBufferAttribute(o,a),lu.fromBufferAttribute(o,l),cu.fromBufferAttribute(o,c),u.normal=an.getInterpolation(Rs,Ji,Qi,tr,au,lu,cu,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};an.getNormal(Ji,Qi,tr,f.normal),u.face=f}return u}class Wt extends Ce{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function v(_,p,d,E,M,b,I,A,R,F,S){const x=b/R,z=I/F,L=b/2,D=I/2,X=A/2,J=R+1,tt=F+1;let nt=0,V=0;const at=new O;for(let lt=0;lt<tt;lt++){const vt=lt*z-D;for(let Rt=0;Rt<J;Rt++){const jt=Rt*x-L;at[_]=jt*E,at[p]=vt*M,at[d]=X,c.push(at.x,at.y,at.z),at[_]=0,at[p]=0,at[d]=A>0?1:-1,u.push(at.x,at.y,at.z),f.push(Rt/R),f.push(1-lt/F),nt+=1}}for(let lt=0;lt<F;lt++)for(let vt=0;vt<R;vt++){const Rt=h+vt+J*lt,jt=h+vt+J*(lt+1),Q=h+(vt+1)+J*(lt+1),st=h+(vt+1)+J*lt;l.push(Rt,jt,st),l.push(jt,Q,st),V+=6}a.addGroup(m,V,S),m+=V,h+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Le(n){const t={};for(let e=0;e<n.length;e++){const i=xr(n[e]);for(const r in i)t[r]=i[r]}return t}function Vg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Gg={clone:xr,merge:Le};var Wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wg,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=Vg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ch extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new O,uu=new zt,fu=new zt;class Je extends Ch{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,uu,fu),e.subVectors(fu,uu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const er=-90,nr=1;class qg extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Je(er,nr,t,e);r.layers=this.layers,this.add(r);const s=new Je(er,nr,t,e);s.layers=this.layers,this.add(s);const o=new Je(er,nr,t,e);o.layers=this.layers,this.add(o);const a=new Je(er,nr,t,e);a.layers=this.layers,this.add(a);const l=new Je(er,nr,t,e);l.layers=this.layers,this.add(l);const c=new Je(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,h,m),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ph extends Ve{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:gr,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jg extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ph(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wt(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:ai});s.uniforms.tEquirect.value=e;const o=new bt(r,s),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=on),new qg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const da=new O,$g=new O,Yg=new Vt;class Ci{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=da.subVectors(i,e).cross($g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(da),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Yg.getNormalMatrix(t),r=this.coplanarPoint(da).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new ss,Ls=new O;class vl{constructor(t=new Ci,e=new Ci,i=new Ci,r=new Ci,s=new Ci,o=new Ci){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],v=r[9],_=r[10],p=r[11],d=r[12],E=r[13],M=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,p-m,b-d).normalize(),i[1].setComponents(l+s,h+c,p+m,b+d).normalize(),i[2].setComponents(l+o,h+u,p+v,b+E).normalize(),i[3].setComponents(l-o,h-u,p-v,b-E).normalize(),i[4].setComponents(l-a,h-f,p-_,b-M).normalize(),e===Bn)i[5].setComponents(l+a,h+f,p+_,b+M).normalize();else if(e===so)i[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ls.x=r.normal.x>0?t.max.x:t.min.x,Ls.y=r.normal.y>0?t.max.y:t.min.y,Ls.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Kg(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let m=0,v=h.length;m<v;m++){const _=h[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class yo extends Ce{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,m=[],v=[],_=[],p=[];for(let d=0;d<u;d++){const E=d*h-o;for(let M=0;M<c;M++){const b=M*f-s;v.push(b,-E,0),_.push(0,0,1),p.push(M/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const M=E+c*d,b=E+c*(d+1),I=E+1+c*(d+1),A=E+1+c*d;m.push(M,b,A),m.push(b,I,A)}this.setIndex(m),this.setAttribute("position",new ae(v,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,a_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,M_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A_="gl_FragColor = linearToOutputTexel( gl_FragColor );",R_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,C_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,H_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,d0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,p0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,g0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ov=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Zg,alphahash_pars_fragment:Jg,alphamap_fragment:Qg,alphamap_pars_fragment:t_,alphatest_fragment:e_,alphatest_pars_fragment:n_,aomap_fragment:i_,aomap_pars_fragment:r_,batching_pars_vertex:s_,batching_vertex:o_,begin_vertex:a_,beginnormal_vertex:l_,bsdfs:c_,iridescence_fragment:u_,bumpmap_pars_fragment:f_,clipping_planes_fragment:h_,clipping_planes_pars_fragment:d_,clipping_planes_pars_vertex:p_,clipping_planes_vertex:m_,color_fragment:g_,color_pars_fragment:__,color_pars_vertex:v_,color_vertex:x_,common:M_,cube_uv_reflection_fragment:S_,defaultnormal_vertex:y_,displacementmap_pars_vertex:E_,displacementmap_vertex:b_,emissivemap_fragment:T_,emissivemap_pars_fragment:w_,colorspace_fragment:A_,colorspace_pars_fragment:R_,envmap_fragment:C_,envmap_common_pars_fragment:P_,envmap_pars_fragment:L_,envmap_pars_vertex:D_,envmap_physical_pars_fragment:W_,envmap_vertex:I_,fog_vertex:U_,fog_pars_vertex:N_,fog_fragment:F_,fog_pars_fragment:O_,gradientmap_pars_fragment:B_,lightmap_fragment:z_,lightmap_pars_fragment:H_,lights_lambert_fragment:k_,lights_lambert_pars_fragment:V_,lights_pars_begin:G_,lights_toon_fragment:X_,lights_toon_pars_fragment:q_,lights_phong_fragment:j_,lights_phong_pars_fragment:$_,lights_physical_fragment:Y_,lights_physical_pars_fragment:K_,lights_fragment_begin:Z_,lights_fragment_maps:J_,lights_fragment_end:Q_,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:n0,logdepthbuf_vertex:i0,map_fragment:r0,map_pars_fragment:s0,map_particle_fragment:o0,map_particle_pars_fragment:a0,metalnessmap_fragment:l0,metalnessmap_pars_fragment:c0,morphinstance_vertex:u0,morphcolor_vertex:f0,morphnormal_vertex:h0,morphtarget_pars_vertex:d0,morphtarget_vertex:p0,normal_fragment_begin:m0,normal_fragment_maps:g0,normal_pars_fragment:_0,normal_pars_vertex:v0,normal_vertex:x0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:b0,opaque_fragment:T0,packing:w0,premultiplied_alpha_fragment:A0,project_vertex:R0,dithering_fragment:C0,dithering_pars_fragment:P0,roughnessmap_fragment:L0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:U0,shadowmap_vertex:N0,shadowmask_pars_fragment:F0,skinbase_vertex:O0,skinning_pars_vertex:B0,skinning_vertex:z0,skinnormal_vertex:H0,specularmap_fragment:k0,specularmap_pars_fragment:V0,tonemapping_fragment:G0,tonemapping_pars_fragment:W0,transmission_fragment:X0,transmission_pars_fragment:q0,uv_pars_fragment:j0,uv_pars_vertex:$0,uv_vertex:Y0,worldpos_vertex:K0,background_vert:Z0,background_frag:J0,backgroundCube_vert:Q0,backgroundCube_frag:tv,cube_vert:ev,cube_frag:nv,depth_vert:iv,depth_frag:rv,distanceRGBA_vert:sv,distanceRGBA_frag:ov,equirect_vert:av,equirect_frag:lv,linedashed_vert:cv,linedashed_frag:uv,meshbasic_vert:fv,meshbasic_frag:hv,meshlambert_vert:dv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:gv,meshnormal_vert:_v,meshnormal_frag:vv,meshphong_vert:xv,meshphong_frag:Mv,meshphysical_vert:Sv,meshphysical_frag:yv,meshtoon_vert:Ev,meshtoon_frag:bv,points_vert:Tv,points_frag:wv,shadow_vert:Av,shadow_frag:Rv,sprite_vert:Cv,sprite_frag:Pv},dt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Mn={basic:{uniforms:Le([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Le([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Le([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Le([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Le([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Le([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Le([dt.points,dt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Le([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Le([dt.common,dt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Le([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Le([dt.sprite,dt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Le([dt.common,dt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Le([dt.lights,dt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Mn.physical={uniforms:Le([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Ds={r:0,b:0,g:0},wi=new Tn,Lv=new oe;function Dv(n,t,e,i,r,s,o){const a=new qt(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function v(p,d){let E=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?e:t).get(M)),M===null?_(a,l):M&&M.isColor&&(_(M,1),E=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===xo)?(u===void 0&&(u=new bt(new Wt(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:xr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),wi.copy(d.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(wi)),u.material.toneMapped=Qt.getTransfer(M.colorSpace)!==se,(f!==M||h!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new bt(new yo(2,2),new pi({name:"BackgroundMaterial",uniforms:xr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==se,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(Ds,Rh(n)),i.buffers.color.setClear(Ds.r,Ds.g,Ds.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:v}}function Iv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,z,L,D,X){let J=!1;const tt=f(D,L,z);s!==tt&&(s=tt,c(s.object)),J=m(x,D,L,X),J&&v(x,D,L,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,b(x,z,L,D),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,z,L){const D=L.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let J=X[z.id];J===void 0&&(J={},X[z.id]=J);let tt=J[D];return tt===void 0&&(tt=h(l()),J[D]=tt),tt}function h(x){const z=[],L=[],D=[];for(let X=0;X<e;X++)z[X]=0,L[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:L,attributeDivisors:D,object:x,attributes:{},index:null}}function m(x,z,L,D){const X=s.attributes,J=z.attributes;let tt=0;const nt=L.getAttributes();for(const V in nt)if(nt[V].location>=0){const lt=X[V];let vt=J[V];if(vt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(vt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(vt=x.instanceColor)),lt===void 0||lt.attribute!==vt||vt&&lt.data!==vt.data)return!0;tt++}return s.attributesNum!==tt||s.index!==D}function v(x,z,L,D){const X={},J=z.attributes;let tt=0;const nt=L.getAttributes();for(const V in nt)if(nt[V].location>=0){let lt=J[V];lt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor));const vt={};vt.attribute=lt,lt&&lt.data&&(vt.data=lt.data),X[V]=vt,tt++}s.attributes=X,s.attributesNum=tt,s.index=D}function _(){const x=s.newAttributes;for(let z=0,L=x.length;z<L;z++)x[z]=0}function p(x){d(x,0)}function d(x,z){const L=s.newAttributes,D=s.enabledAttributes,X=s.attributeDivisors;L[x]=1,D[x]===0&&(n.enableVertexAttribArray(x),D[x]=1),X[x]!==z&&(n.vertexAttribDivisor(x,z),X[x]=z)}function E(){const x=s.newAttributes,z=s.enabledAttributes;for(let L=0,D=z.length;L<D;L++)z[L]!==x[L]&&(n.disableVertexAttribArray(L),z[L]=0)}function M(x,z,L,D,X,J,tt){tt===!0?n.vertexAttribIPointer(x,z,L,X,J):n.vertexAttribPointer(x,z,L,D,X,J)}function b(x,z,L,D){_();const X=D.attributes,J=L.getAttributes(),tt=z.defaultAttributeValues;for(const nt in J){const V=J[nt];if(V.location>=0){let at=X[nt];if(at===void 0&&(nt==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),nt==="instanceColor"&&x.instanceColor&&(at=x.instanceColor)),at!==void 0){const lt=at.normalized,vt=at.itemSize,Rt=t.get(at);if(Rt===void 0)continue;const jt=Rt.buffer,Q=Rt.type,st=Rt.bytesPerElement,gt=Q===n.INT||Q===n.UNSIGNED_INT||at.gpuType===dh;if(at.isInterleavedBufferAttribute){const ut=at.data,Lt=ut.stride,Et=at.offset;if(ut.isInstancedInterleavedBuffer){for(let Mt=0;Mt<V.locationSize;Mt++)d(V.location+Mt,ut.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Mt=0;Mt<V.locationSize;Mt++)p(V.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let Mt=0;Mt<V.locationSize;Mt++)M(V.location+Mt,vt/V.locationSize,Q,lt,Lt*st,(Et+vt/V.locationSize*Mt)*st,gt)}else{if(at.isInstancedBufferAttribute){for(let ut=0;ut<V.locationSize;ut++)d(V.location+ut,at.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ut=0;ut<V.locationSize;ut++)p(V.location+ut);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let ut=0;ut<V.locationSize;ut++)M(V.location+ut,vt/V.locationSize,Q,lt,vt*st,vt/V.locationSize*ut*st,gt)}}else if(tt!==void 0){const lt=tt[nt];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(V.location,lt);break;case 3:n.vertexAttrib3fv(V.location,lt);break;case 4:n.vertexAttrib4fv(V.location,lt);break;default:n.vertexAttrib1fv(V.location,lt)}}}}E()}function I(){F();for(const x in i){const z=i[x];for(const L in z){const D=z[L];for(const X in D)u(D[X].object),delete D[X];delete z[L]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const z=i[x.id];for(const L in z){const D=z[L];for(const X in D)u(D[X].object),delete D[X];delete z[L]}delete i[x.id]}function R(x){for(const z in i){const L=i[z];if(L[x.id]===void 0)continue;const D=L[x.id];for(const X in D)u(D[X].object),delete D[X];delete L[x.id]}}function F(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function Uv(n,t,e){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u;h++)this.render(l[h],c[h]);else{f.multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];e.update(h,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Nv(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=e.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),p=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),d=u>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:d,maxSamples:E}}function Fv(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Ci,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,M=E*4;let b=d.clippingState||null;l.value=b,b=u(v,h,M,m);for(let I=0;I!==M;++I)b[I]=e[I];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,m,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const d=m+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,b=m;M!==_;++M,b+=4)o.copy(f[M]).applyMatrix4(E,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Ov(n){let t=new WeakMap;function e(o,a){return a===Ha?o.mapping=gr:a===ka&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ha||a===ka)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jg(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class xl extends Ch{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const sr=4,hu=[.125,.215,.35,.446,.526,.582],Ii=20,pa=new xl,du=new qt;let ma=null,ga=0,_a=0,va=!1;const Pi=(1+Math.sqrt(5))/2,ir=1/Pi,pu=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Pi,ir),new O(0,Pi,-ir),new O(ir,0,Pi),new O(-ir,0,Pi),new O(Pi,ir,0),new O(-Pi,ir,0)];class mu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=va,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gr||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:eo,format:yn,colorSpace:mi,depthBuffer:!1},r=gu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bv(s)),this._blurMaterial=zv(s,t,e)}return r}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,i,r){const a=new Je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(du),u.toneMapping=li,u.autoClear=!1;const m=new Ie({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),v=new bt(new Wt,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(du),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;Is(r,E*M,d>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===gr||t.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Is(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,pa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pu[(r-1)%pu.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new bt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ii-1),_=s/v,p=isFinite(s)?1+Math.floor(u*_):Ii;p>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);const d=[];let E=0;for(let R=0;R<Ii;++R){const F=R/_,S=Math.exp(-F*F/2);d.push(S),R===0?E+=S:R<p&&(E+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/E;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=v,h.mipInt.value=M-i;const b=this._sizeLods[r],I=3*b*(r>M-sr?r-M+sr:0),A=4*(this._cubeSize-b);Is(e,I,A,3*b,2*b),l.setRenderTarget(e),l.render(f,pa)}}function Bv(n){const t=[],e=[],i=[];let r=n;const s=n-sr+1+hu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-sr?l=hu[o-n+sr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,_=3,p=2,d=1,E=new Float32Array(_*v*m),M=new Float32Array(p*v*m),b=new Float32Array(d*v*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,F=A>2?0:-1,S=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];E.set(S,_*v*A),M.set(h,p*v*A);const x=[A,A,A,A,A,A];b.set(x,d*v*A)}const I=new Ce;I.setAttribute("position",new un(E,_)),I.setAttribute("uv",new un(M,p)),I.setAttribute("faceIndex",new un(b,d)),t.push(I),r>sr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function gu(n,t,e){const i=new Oi(n,t,e);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function zv(n,t,e){const i=new Float32Array(Ii),r=new O(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function _u(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function vu(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ha||l===ka,u=l===gr||l===_r;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new mu(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new mu(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function kv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vv(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)t.update(h[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const _=m[v];for(let p=0,d=_.length;p<d;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let M=0,b=E.length;M<b;M+=3){const I=E[M+0],A=E[M+1],R=E[M+2];h.push(I,A,A,R,R,I)}}else if(v!==void 0){const E=v.array;_=v.version;for(let M=0,b=E.length/3-1;M<b;M+=3){const I=M+0,A=M+1,R=M+2;h.push(I,A,A,R,R,I)}}else return;const p=new(yh(h)?Ah:wh)(h,1);p.version=_;const d=s.get(f);d&&t.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Gv(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),e.update(h,i,1)}function c(f,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,f*o,m),e.update(h,i,m))}function u(f,h,m){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<m;_++)this.render(f[_]/o,h[_]);else{v.multiDrawElementsWEBGL(i,h,0,s,f,0,m);let _=0;for(let p=0;p<m;p++)_+=h[p];e.update(_,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Wv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Xv(n,t,e){const i=new WeakMap,r=new ue;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let b=0;v===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let I=a.attributes.position.count*b,A=1;I>t.maxTextureSize&&(A=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*A*4*f),F=new bh(R,I,A,f);F.type=ii,F.needsUpdate=!0;const S=b*4;for(let z=0;z<f;z++){const L=d[z],D=E[z],X=M[z],J=I*A*4*z;for(let tt=0;tt<L.count;tt++){const nt=tt*S;v===!0&&(r.fromBufferAttribute(L,tt),R[J+nt+0]=r.x,R[J+nt+1]=r.y,R[J+nt+2]=r.z,R[J+nt+3]=0),_===!0&&(r.fromBufferAttribute(D,tt),R[J+nt+4]=r.x,R[J+nt+5]=r.y,R[J+nt+6]=r.z,R[J+nt+7]=0),p===!0&&(r.fromBufferAttribute(X,tt),R[J+nt+8]=r.x,R[J+nt+9]=r.y,R[J+nt+10]=r.z,R[J+nt+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:F,size:new zt(I,A)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function qv(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Dh extends Ve{constructor(t,e,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:pr,u!==pr&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===pr&&(i=vr),i===void 0&&u===Kr&&(i=es),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ih=new Ve,Uh=new Dh(1,1);Uh.compareFunction=Sh;const Nh=new bh,Fh=new Lg,Oh=new Ph,xu=[],Mu=[],Su=new Float32Array(16),yu=new Float32Array(9),Eu=new Float32Array(4);function Sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=xu[r];if(s===void 0&&(s=new Float32Array(r),xu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Eo(n,t){let e=Mu[t];e===void 0&&(e=new Int32Array(t),Mu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function jv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function Yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function Kv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function Zv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),ve(e,i)}}function Jv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;yu.set(i),n.uniformMatrix3fv(this.addr,!1,yu),ve(e,i)}}function Qv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;Su.set(i),n.uniformMatrix4fv(this.addr,!1,Su),ve(e,i)}}function tx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ex(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function ix(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function rx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function lx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Uh:Ih;e.setTexture2D(t||s,r)}function cx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Fh,r)}function ux(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Oh,r)}function fx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Nh,r)}function hx(n){switch(n){case 5126:return jv;case 35664:return $v;case 35665:return Yv;case 35666:return Kv;case 35674:return Zv;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return rx;case 36294:return sx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return fx}}function dx(n,t){n.uniform1fv(this.addr,t)}function px(n,t){const e=Sr(t,this.size,2);n.uniform2fv(this.addr,e)}function mx(n,t){const e=Sr(t,this.size,3);n.uniform3fv(this.addr,e)}function gx(n,t){const e=Sr(t,this.size,4);n.uniform4fv(this.addr,e)}function _x(n,t){const e=Sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function vx(n,t){const e=Sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function xx(n,t){const e=Sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Mx(n,t){n.uniform1iv(this.addr,t)}function Sx(n,t){n.uniform2iv(this.addr,t)}function yx(n,t){n.uniform3iv(this.addr,t)}function Ex(n,t){n.uniform4iv(this.addr,t)}function bx(n,t){n.uniform1uiv(this.addr,t)}function Tx(n,t){n.uniform2uiv(this.addr,t)}function wx(n,t){n.uniform3uiv(this.addr,t)}function Ax(n,t){n.uniform4uiv(this.addr,t)}function Rx(n,t,e){const i=this.cache,r=t.length,s=Eo(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Ih,s[o])}function Cx(n,t,e){const i=this.cache,r=t.length,s=Eo(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Fh,s[o])}function Px(n,t,e){const i=this.cache,r=t.length,s=Eo(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Oh,s[o])}function Lx(n,t,e){const i=this.cache,r=t.length,s=Eo(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Nh,s[o])}function Dx(n){switch(n){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return _x;case 35675:return vx;case 35676:return xx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return yx;case 35669:case 35673:return Ex;case 5125:return bx;case 36294:return Tx;case 36295:return wx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}class Ix{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=hx(e.type)}}class Ux{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dx(e.type)}}class Nx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function bu(n,t){n.seq.push(t),n.map[t.id]=t}function Fx(n,t,e){const i=n.name,r=i.length;for(xa.lastIndex=0;;){const s=xa.exec(i),o=xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bu(e,c===void 0?new Ix(a,n,t):new Ux(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Nx(a),bu(e,f)),e=f}}}class Xs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Fx(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Tu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ox=37297;let Bx=0;function zx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Hx(n){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(n);let i;switch(t===e?i="":t===ro&&e===io?i="LinearDisplayP3ToLinearSRGB":t===io&&e===ro&&(i="LinearSRGBToLinearDisplayP3"),n){case mi:case Mo:return[i,"LinearTransferOETF"];case vn:case gl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function wu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+zx(n.getShaderSource(t),o)}else return r}function kx(n,t){const e=Hx(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Vx(n,t){let e;switch(t){case Km:e="Linear";break;case Zm:e="Reinhard";break;case Jm:e="OptimizedCineon";break;case uh:e="ACESFilmic";break;case tg:e="AgX";break;case eg:e="Neutral";break;case Qm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Wx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Xx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ir(n){return n!==""}function Au(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ru(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(n){return n.replace(qx,$x)}const jx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $x(n,t){let e=kt[t];if(e===void 0){const i=jx.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xa(e)}const Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(n){return n.replace(Yx,Kx)}function Kx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function Jx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case _r:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _r:t="ENVMAP_MODE_REFRACTION";break}return t}function tM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ml:t="ENVMAP_BLENDING_MULTIPLY";break;case $m:t="ENVMAP_BLENDING_MIX";break;case Ym:t="ENVMAP_BLENDING_ADD";break}return t}function eM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function nM(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Zx(e),c=Jx(e),u=Qx(e),f=tM(e),h=eM(e),m=Gx(e),v=Wx(s),_=r.createProgram();let p,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ir).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ir).join(`
`),d.length>0&&(d+=`
`)):(p=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),d=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?kt.tonemapping_pars_fragment:"",e.toneMapping!==li?Vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,kx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Xa(o),o=Au(o,e),o=Ru(o,e),a=Xa(a),a=Au(a,e),a=Ru(a,e),o=Cu(o),a=Cu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=E+p+o,b=E+d+a,I=Tu(r,r.VERTEX_SHADER,M),A=Tu(r,r.FRAGMENT_SHADER,b);r.attachShader(_,I),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(z){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(I).trim(),X=r.getShaderInfoLog(A).trim();let J=!0,tt=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,I,A);else{const nt=wu(r,I,"vertex"),V=wu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+L+`
`+nt+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||X==="")&&(tt=!1);tt&&(z.diagnostics={runnable:J,programLog:L,vertexShader:{log:D,prefix:p},fragmentShader:{log:X,prefix:d}})}r.deleteShader(I),r.deleteShader(A),F=new Xs(r,_),S=Xx(r,_)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,Ox)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let iM=0;class rM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new sM(t),e.set(t,i)),i}}class sM{constructor(t){this.id=iM++,this.code=t,this.usedTimes=0}}function oM(n,t,e,i,r,s,o){const a=new _l,l=new rM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,z,L,D){const X=L.fog,J=D.geometry,tt=S.isMeshStandardMaterial?L.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||tt),V=nt&&nt.mapping===xo?nt.image.height:null,at=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const lt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,vt=lt!==void 0?lt.length:0;let Rt=0;J.morphAttributes.position!==void 0&&(Rt=1),J.morphAttributes.normal!==void 0&&(Rt=2),J.morphAttributes.color!==void 0&&(Rt=3);let jt,Q,st,gt;if(at){const Ee=Mn[at];jt=Ee.vertexShader,Q=Ee.fragmentShader}else jt=S.vertexShader,Q=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),gt=l.getFragmentShaderID(S);const ut=n.getRenderTarget(),Lt=D.isInstancedMesh===!0,Et=D.isBatchedMesh===!0,Mt=!!S.map,k=!!S.matcap,w=!!nt,P=!!S.aoMap,G=!!S.lightMap,q=!!S.bumpMap,Z=!!S.normalMap,y=!!S.displacementMap,g=!!S.emissiveMap,U=!!S.metalnessMap,B=!!S.roughnessMap,N=S.anisotropy>0,W=S.clearcoat>0,et=S.iridescence>0,$=S.sheen>0,rt=S.transmission>0,ct=N&&!!S.anisotropyMap,it=W&&!!S.clearcoatMap,ot=W&&!!S.clearcoatNormalMap,St=W&&!!S.clearcoatRoughnessMap,pt=et&&!!S.iridescenceMap,_t=et&&!!S.iridescenceThicknessMap,Dt=$&&!!S.sheenColorMap,Gt=$&&!!S.sheenRoughnessMap,$t=!!S.specularMap,Ut=!!S.specularColorMap,Xt=!!S.specularIntensityMap,yt=rt&&!!S.transmissionMap,C=rt&&!!S.thicknessMap,ht=!!S.gradientMap,ft=!!S.alphaMap,wt=S.alphaTest>0,At=!!S.alphaHash,te=!!S.extensions;let le=li;S.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(le=n.toneMapping);const fe={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:jt,fragmentShader:Q,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:gt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Et,instancing:Lt,instancingColor:Lt&&D.instanceColor!==null,instancingMorph:Lt&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:mi,alphaToCoverage:!!S.alphaToCoverage,map:Mt,matcap:k,envMap:w,envMapMode:w&&nt.mapping,envMapCubeUVHeight:V,aoMap:P,lightMap:G,bumpMap:q,normalMap:Z,displacementMap:h&&y,emissiveMap:g,normalMapObjectSpace:Z&&S.normalMapType===mg,normalMapTangentSpace:Z&&S.normalMapType===Mh,metalnessMap:U,roughnessMap:B,anisotropy:N,anisotropyMap:ct,clearcoat:W,clearcoatMap:it,clearcoatNormalMap:ot,clearcoatRoughnessMap:St,iridescence:et,iridescenceMap:pt,iridescenceThicknessMap:_t,sheen:$,sheenColorMap:Dt,sheenRoughnessMap:Gt,specularMap:$t,specularColorMap:Ut,specularIntensityMap:Xt,transmission:rt,transmissionMap:yt,thicknessMap:C,gradientMap:ht,opaque:S.transparent===!1&&S.blending===dr&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:wt,alphaHash:At,combine:S.combine,mapUv:Mt&&_(S.map.channel),aoMapUv:P&&_(S.aoMap.channel),lightMapUv:G&&_(S.lightMap.channel),bumpMapUv:q&&_(S.bumpMap.channel),normalMapUv:Z&&_(S.normalMap.channel),displacementMapUv:y&&_(S.displacementMap.channel),emissiveMapUv:g&&_(S.emissiveMap.channel),metalnessMapUv:U&&_(S.metalnessMap.channel),roughnessMapUv:B&&_(S.roughnessMap.channel),anisotropyMapUv:ct&&_(S.anisotropyMap.channel),clearcoatMapUv:it&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(S.sheenRoughnessMap.channel),specularMapUv:$t&&_(S.specularMap.channel),specularColorMapUv:Ut&&_(S.specularColorMap.channel),specularIntensityMapUv:Xt&&_(S.specularIntensityMap.channel),transmissionMapUv:yt&&_(S.transmissionMap.channel),thicknessMapUv:C&&_(S.thicknessMap.channel),alphaMapUv:ft&&_(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Z||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!J.attributes.uv&&(Mt||ft),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Rt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Mt&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===je,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:te&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:te&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function d(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)x.push(z),x.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(E(x,S),M(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),S.push(a.mask)}function b(S){const x=v[S.type];let z;if(x){const L=Mn[x];z=Gg.clone(L.uniforms)}else z=S.uniforms;return z}function I(S,x){let z;for(let L=0,D=u.length;L<D;L++){const X=u[L];if(X.cacheKey===x){z=X,++z.usedTimes;break}}return z===void 0&&(z=new nM(n,x,S,s),u.push(z)),z}function A(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:F}}function aM(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function lM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Lu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Du(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,m,v,_,p){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=_,d.group=p),t++,d}function a(f,h,m,v,_,p){const d=o(f,h,m,v,_,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):e.push(d)}function l(f,h,m,v,_,p){const d=o(f,h,m,v,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function c(f,h){e.length>1&&e.sort(f||lM),i.length>1&&i.sort(h||Lu),r.length>1&&r.sort(h||Lu)}function u(){for(let f=t,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function cM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Du,n.set(i,[o])):r>=s.length?(o=new Du,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function uM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new qt};break;case"SpotLight":e={position:new O,direction:new O,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function fM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let hM=0;function dM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function pM(n){const t=new uM,e=fM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new oe,o=new oe;function a(c,u){let f=0,h=0,m=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let v=0,_=0,p=0,d=0,E=0,M=0,b=0,I=0,A=0,R=0,F=0;c.sort(dM);const S=u===!0?Math.PI:1;for(let z=0,L=c.length;z<L;z++){const D=c[z],X=D.color,J=D.intensity,tt=D.distance,nt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=X.r*J*S,h+=X.g*J*S,m+=X.b*J*S;else if(D.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],J);F++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const at=D.shadow,lt=e.get(D);lt.shadowBias=at.bias,lt.shadowNormalBias=at.normalBias,lt.shadowRadius=at.radius,lt.shadowMapSize=at.mapSize,i.directionalShadow[v]=lt,i.directionalShadowMap[v]=nt,i.directionalShadowMatrix[v]=D.shadow.matrix,M++}i.directional[v]=V,v++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(X).multiplyScalar(J*S),V.distance=tt,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[p]=V;const at=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,at.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[p]=at.matrix,D.castShadow){const lt=e.get(D);lt.shadowBias=at.bias,lt.shadowNormalBias=at.normalBias,lt.shadowRadius=at.radius,lt.shadowMapSize=at.mapSize,i.spotShadow[p]=lt,i.spotShadowMap[p]=nt,I++}p++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(X).multiplyScalar(J),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[d]=V,d++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*S),V.distance=D.distance,V.decay=D.decay,D.castShadow){const at=D.shadow,lt=e.get(D);lt.shadowBias=at.bias,lt.shadowNormalBias=at.normalBias,lt.shadowRadius=at.radius,lt.shadowMapSize=at.mapSize,lt.shadowCameraNear=at.camera.near,lt.shadowCameraFar=at.camera.far,i.pointShadow[_]=lt,i.pointShadowMap[_]=nt,i.pointShadowMatrix[_]=D.shadow.matrix,b++}i.point[_]=V,_++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(J*S),V.groundColor.copy(D.groundColor).multiplyScalar(J*S),i.hemi[E]=V,E++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=m;const x=i.hash;(x.directionalLength!==v||x.pointLength!==_||x.spotLength!==p||x.rectAreaLength!==d||x.hemiLength!==E||x.numDirectionalShadows!==M||x.numPointShadows!==b||x.numSpotShadows!==I||x.numSpotMaps!==A||x.numLightProbes!==F)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=d,i.point.length=_,i.hemi.length=E,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=I+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=F,x.directionalLength=v,x.pointLength=_,x.spotLength=p,x.rectAreaLength=d,x.hemiLength=E,x.numDirectionalShadows=M,x.numPointShadows=b,x.numSpotShadows=I,x.numSpotMaps=A,x.numLightProbes=F,i.version=hM++)}function l(c,u){let f=0,h=0,m=0,v=0,_=0;const p=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const M=c[d];if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(M.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Iu(n){const t=new pM(n),e=[],i=[];function r(){e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}return{init:r,state:{lightsArray:e,shadowsArray:i,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mM(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Iu(n),t.set(r,[a])):s>=o.length?(a=new Iu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class gM extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _M extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MM(n,t,e){let i=new vl;const r=new zt,s=new zt,o=new ue,a=new gM({depthPacking:pg}),l=new _M,c={},u=e.maxTextureSize,f={[di]:ke,[ke]:di,[je]:je},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:vM,fragmentShader:xM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ce;v.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let d=this.type;this.render=function(A,R,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ai),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=d!==Un&&this.type===Un,X=d===Un&&this.type!==Un;for(let J=0,tt=A.length;J<tt;J++){const nt=A[J],V=nt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const at=V.getFrameExtents();if(r.multiply(at),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/at.x),r.x=s.x*at.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/at.y),r.y=s.y*at.y,V.mapSize.y=s.y)),V.map===null||D===!0||X===!0){const vt=this.type!==Un?{minFilter:Qe,magFilter:Qe}:{};V.map!==null&&V.map.dispose(),V.map=new Oi(r.x,r.y,vt),V.map.texture.name=nt.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const lt=V.getViewportCount();for(let vt=0;vt<lt;vt++){const Rt=V.getViewport(vt);o.set(s.x*Rt.x,s.y*Rt.y,s.x*Rt.z,s.y*Rt.w),L.viewport(o),V.updateMatrices(nt,vt),i=V.getFrustum(),b(R,F,V.camera,nt,this.type)}V.isPointLightShadow!==!0&&this.type===Un&&E(V,F),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(S,x,z)};function E(A,R){const F=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Oi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,F,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,F,m,_,null)}function M(A,R,F,S){let x=null;const z=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)x=z;else if(x=F.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const L=x.uuid,D=R.uuid;let X=c[L];X===void 0&&(X={},c[L]=X);let J=X[D];J===void 0&&(J=x.clone(),X[D]=J,R.addEventListener("dispose",I)),x=J}if(x.visible=R.visible,x.wireframe=R.wireframe,S===Un?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=n.properties.get(x);L.light=F}return x}function b(A,R,F,S,x){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Un)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const D=t.update(A),X=A.material;if(Array.isArray(X)){const J=D.groups;for(let tt=0,nt=J.length;tt<nt;tt++){const V=J[tt],at=X[V.materialIndex];if(at&&at.visible){const lt=M(A,at,S,x);A.onBeforeShadow(n,A,R,F,D,lt,V),n.renderBufferDirect(F,null,D,lt,A,V),A.onAfterShadow(n,A,R,F,D,lt,V)}}}else if(X.visible){const J=M(A,X,S,x);A.onBeforeShadow(n,A,R,F,D,J,null),n.renderBufferDirect(F,null,D,J,A,null),A.onAfterShadow(n,A,R,F,D,J,null)}}const L=A.children;for(let D=0,X=L.length;D<X;D++)b(L[D],R,F,S,x)}function I(A){A.target.removeEventListener("dispose",I);for(const F in c){const S=c[F],x=A.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function SM(n){function t(){let C=!1;const ht=new ue;let ft=null;const wt=new ue(0,0,0,0);return{setMask:function(At){ft!==At&&!C&&(n.colorMask(At,At,At,At),ft=At)},setLocked:function(At){C=At},setClear:function(At,te,le,fe,Ee){Ee===!0&&(At*=fe,te*=fe,le*=fe),ht.set(At,te,le,fe),wt.equals(ht)===!1&&(n.clearColor(At,te,le,fe),wt.copy(ht))},reset:function(){C=!1,ft=null,wt.set(-1,0,0,0)}}}function e(){let C=!1,ht=null,ft=null,wt=null;return{setTest:function(At){At?gt(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(At){ht!==At&&!C&&(n.depthMask(At),ht=At)},setFunc:function(At){if(ft!==At){switch(At){case km:n.depthFunc(n.NEVER);break;case Vm:n.depthFunc(n.ALWAYS);break;case Gm:n.depthFunc(n.LESS);break;case to:n.depthFunc(n.LEQUAL);break;case Wm:n.depthFunc(n.EQUAL);break;case Xm:n.depthFunc(n.GEQUAL);break;case qm:n.depthFunc(n.GREATER);break;case jm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=At}},setLocked:function(At){C=At},setClear:function(At){wt!==At&&(n.clearDepth(At),wt=At)},reset:function(){C=!1,ht=null,ft=null,wt=null}}}function i(){let C=!1,ht=null,ft=null,wt=null,At=null,te=null,le=null,fe=null,Ee=null;return{setTest:function(re){C||(re?gt(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(re){ht!==re&&!C&&(n.stencilMask(re),ht=re)},setFunc:function(re,hn,dn){(ft!==re||wt!==hn||At!==dn)&&(n.stencilFunc(re,hn,dn),ft=re,wt=hn,At=dn)},setOp:function(re,hn,dn){(te!==re||le!==hn||fe!==dn)&&(n.stencilOp(re,hn,dn),te=re,le=hn,fe=dn)},setLocked:function(re){C=re},setClear:function(re){Ee!==re&&(n.clearStencil(re),Ee=re)},reset:function(){C=!1,ht=null,ft=null,wt=null,At=null,te=null,le=null,fe=null,Ee=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],m=null,v=!1,_=null,p=null,d=null,E=null,M=null,b=null,I=null,A=new qt(0,0,0),R=0,F=!1,S=null,x=null,z=null,L=null,D=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,tt=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),J=tt>=1):nt.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),J=tt>=2);let V=null,at={};const lt=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),Rt=new ue().fromArray(lt),jt=new ue().fromArray(vt);function Q(C,ht,ft,wt){const At=new Uint8Array(4),te=n.createTexture();n.bindTexture(C,te),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let le=0;le<ft;le++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(ht+le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return te}const st={};st[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),s.setFunc(to),q(!1),Z(mc),gt(n.CULL_FACE),P(ai);function gt(C){c[C]!==!0&&(n.enable(C),c[C]=!0)}function ut(C){c[C]!==!1&&(n.disable(C),c[C]=!1)}function Lt(C,ht){return u[C]!==ht?(n.bindFramebuffer(C,ht),u[C]=ht,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ht),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function Et(C,ht){let ft=h,wt=!1;if(C){ft=f.get(ht),ft===void 0&&(ft=[],f.set(ht,ft));const At=C.textures;if(ft.length!==At.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let te=0,le=At.length;te<le;te++)ft[te]=n.COLOR_ATTACHMENT0+te;ft.length=At.length,wt=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,wt=!0);wt&&n.drawBuffers(ft)}function Mt(C){return m!==C?(n.useProgram(C),m=C,!0):!1}const k={[Di]:n.FUNC_ADD,[bm]:n.FUNC_SUBTRACT,[Tm]:n.FUNC_REVERSE_SUBTRACT};k[wm]=n.MIN,k[Am]=n.MAX;const w={[Rm]:n.ZERO,[Cm]:n.ONE,[Pm]:n.SRC_COLOR,[Ba]:n.SRC_ALPHA,[Fm]:n.SRC_ALPHA_SATURATE,[Um]:n.DST_COLOR,[Dm]:n.DST_ALPHA,[Lm]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[Nm]:n.ONE_MINUS_DST_COLOR,[Im]:n.ONE_MINUS_DST_ALPHA,[Om]:n.CONSTANT_COLOR,[Bm]:n.ONE_MINUS_CONSTANT_COLOR,[zm]:n.CONSTANT_ALPHA,[Hm]:n.ONE_MINUS_CONSTANT_ALPHA};function P(C,ht,ft,wt,At,te,le,fe,Ee,re){if(C===ai){v===!0&&(ut(n.BLEND),v=!1);return}if(v===!1&&(gt(n.BLEND),v=!0),C!==Em){if(C!==_||re!==F){if((p!==Di||M!==Di)&&(n.blendEquation(n.FUNC_ADD),p=Di,M=Di),re)switch(C){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.ONE,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}d=null,E=null,b=null,I=null,A.set(0,0,0),R=0,_=C,F=re}return}At=At||ht,te=te||ft,le=le||wt,(ht!==p||At!==M)&&(n.blendEquationSeparate(k[ht],k[At]),p=ht,M=At),(ft!==d||wt!==E||te!==b||le!==I)&&(n.blendFuncSeparate(w[ft],w[wt],w[te],w[le]),d=ft,E=wt,b=te,I=le),(fe.equals(A)===!1||Ee!==R)&&(n.blendColor(fe.r,fe.g,fe.b,Ee),A.copy(fe),R=Ee),_=C,F=!1}function G(C,ht){C.side===je?ut(n.CULL_FACE):gt(n.CULL_FACE);let ft=C.side===ke;ht&&(ft=!ft),q(ft),C.blending===dr&&C.transparent===!1?P(ai):P(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),r.setMask(C.colorWrite);const wt=C.stencilWrite;o.setTest(wt),wt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),g(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(C){S!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),S=C)}function Z(C){C!==Sm?(gt(n.CULL_FACE),C!==x&&(C===mc?n.cullFace(n.BACK):C===ym?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),x=C}function y(C){C!==z&&(J&&n.lineWidth(C),z=C)}function g(C,ht,ft){C?(gt(n.POLYGON_OFFSET_FILL),(L!==ht||D!==ft)&&(n.polygonOffset(ht,ft),L=ht,D=ft)):ut(n.POLYGON_OFFSET_FILL)}function U(C){C?gt(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function B(C){C===void 0&&(C=n.TEXTURE0+X-1),V!==C&&(n.activeTexture(C),V=C)}function N(C,ht,ft){ft===void 0&&(V===null?ft=n.TEXTURE0+X-1:ft=V);let wt=at[ft];wt===void 0&&(wt={type:void 0,texture:void 0},at[ft]=wt),(wt.type!==C||wt.texture!==ht)&&(V!==ft&&(n.activeTexture(ft),V=ft),n.bindTexture(C,ht||st[C]),wt.type=C,wt.texture=ht)}function W(){const C=at[V];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function it(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Gt(C){Rt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Rt.copy(C))}function $t(C){jt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),jt.copy(C))}function Ut(C,ht){let ft=l.get(ht);ft===void 0&&(ft=new WeakMap,l.set(ht,ft));let wt=ft.get(C);wt===void 0&&(wt=n.getUniformBlockIndex(ht,C.name),ft.set(C,wt))}function Xt(C,ht){const wt=l.get(ht).get(C);a.get(ht)!==wt&&(n.uniformBlockBinding(ht,wt,C.__bindingPointIndex),a.set(ht,wt))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,at={},u={},f=new WeakMap,h=[],m=null,v=!1,_=null,p=null,d=null,E=null,M=null,b=null,I=null,A=new qt(0,0,0),R=0,F=!1,S=null,x=null,z=null,L=null,D=null,Rt.set(0,0,n.canvas.width,n.canvas.height),jt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:gt,disable:ut,bindFramebuffer:Lt,drawBuffers:Et,useProgram:Mt,setBlending:P,setMaterial:G,setFlipSided:q,setCullFace:Z,setLineWidth:y,setPolygonOffset:g,setScissorTest:U,activeTexture:B,bindTexture:N,unbindTexture:W,compressedTexImage2D:et,compressedTexImage3D:$,texImage2D:_t,texImage3D:Dt,updateUBOMapping:Ut,uniformBlockBinding:Xt,texStorage2D:St,texStorage3D:pt,texSubImage2D:rt,texSubImage3D:ct,compressedTexSubImage2D:it,compressedTexSubImage3D:ot,scissor:Gt,viewport:$t,reset:yt}}function yM(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,g){return m?new OffscreenCanvas(y,g):oo("canvas")}function _(y,g,U){let B=1;const N=Z(y);if((N.width>U||N.height>U)&&(B=U/Math.max(N.width,N.height)),B<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const W=Math.floor(B*N.width),et=Math.floor(B*N.height);f===void 0&&(f=v(W,et));const $=g?v(W,et):f;return $.width=W,$.height=et,$.getContext("2d").drawImage(y,0,0,W,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+W+"x"+et+")."),$}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),y;return y}function p(y){return y.generateMipmaps&&y.minFilter!==Qe&&y.minFilter!==on}function d(y){n.generateMipmap(y)}function E(y,g,U,B,N=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let W=g;if(g===n.RED&&(U===n.FLOAT&&(W=n.R32F),U===n.HALF_FLOAT&&(W=n.R16F),U===n.UNSIGNED_BYTE&&(W=n.R8)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.R8UI),U===n.UNSIGNED_SHORT&&(W=n.R16UI),U===n.UNSIGNED_INT&&(W=n.R32UI),U===n.BYTE&&(W=n.R8I),U===n.SHORT&&(W=n.R16I),U===n.INT&&(W=n.R32I)),g===n.RG&&(U===n.FLOAT&&(W=n.RG32F),U===n.HALF_FLOAT&&(W=n.RG16F),U===n.UNSIGNED_BYTE&&(W=n.RG8)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.RG8UI),U===n.UNSIGNED_SHORT&&(W=n.RG16UI),U===n.UNSIGNED_INT&&(W=n.RG32UI),U===n.BYTE&&(W=n.RG8I),U===n.SHORT&&(W=n.RG16I),U===n.INT&&(W=n.RG32I)),g===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),g===n.RGBA){const et=N?no:Qt.getTransfer(B);U===n.FLOAT&&(W=n.RGBA32F),U===n.HALF_FLOAT&&(W=n.RGBA16F),U===n.UNSIGNED_BYTE&&(W=et===se?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function M(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Qe&&y.minFilter!==on?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function b(y){const g=y.target;g.removeEventListener("dispose",b),A(g),g.isVideoTexture&&u.delete(g)}function I(y){const g=y.target;g.removeEventListener("dispose",I),F(g)}function A(y){const g=i.get(y);if(g.__webglInit===void 0)return;const U=y.source,B=h.get(U);if(B){const N=B[g.__cacheKey];N.usedTimes--,N.usedTimes===0&&R(y),Object.keys(B).length===0&&h.delete(U)}i.remove(y)}function R(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const U=y.source,B=h.get(U);delete B[g.__cacheKey],o.memory.textures--}function F(y){const g=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let N=0;N<g.__webglFramebuffer[B].length;N++)n.deleteFramebuffer(g.__webglFramebuffer[B][N]);else n.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)n.deleteFramebuffer(g.__webglFramebuffer[B]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=y.textures;for(let B=0,N=U.length;B<N;B++){const W=i.get(U[B]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(U[B])}i.remove(y)}let S=0;function x(){S=0}function z(){const y=S;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),S+=1,y}function L(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function D(y,g){const U=i.get(y);if(y.isVideoTexture&&G(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const B=y.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(U,y,g);return}}e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function X(y,g){const U=i.get(y);if(y.version>0&&U.__version!==y.version){Rt(U,y,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function J(y,g){const U=i.get(y);if(y.version>0&&U.__version!==y.version){Rt(U,y,g);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function tt(y,g){const U=i.get(y);if(y.version>0&&U.__version!==y.version){jt(U,y,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}const nt={[Va]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},V={[Qe]:n.NEAREST,[ng]:n.NEAREST_MIPMAP_NEAREST,[hs]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Go]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},at={[gg]:n.NEVER,[yg]:n.ALWAYS,[_g]:n.LESS,[Sh]:n.LEQUAL,[vg]:n.EQUAL,[Sg]:n.GEQUAL,[xg]:n.GREATER,[Mg]:n.NOTEQUAL};function lt(y,g){if(g.type===ii&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===on||g.magFilter===Go||g.magFilter===hs||g.magFilter===Ni||g.minFilter===on||g.minFilter===Go||g.minFilter===hs||g.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,nt[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,nt[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,nt[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,V[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,V[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,at[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Qe||g.minFilter!==hs&&g.minFilter!==Ni||g.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function vt(y,g){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",b));const B=g.source;let N=h.get(B);N===void 0&&(N={},h.set(B,N));const W=L(g);if(W!==y.__cacheKey){N[W]===void 0&&(N[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),N[W].usedTimes++;const et=N[y.__cacheKey];et!==void 0&&(N[y.__cacheKey].usedTimes--,et.usedTimes===0&&R(g)),y.__cacheKey=W,y.__webglTexture=N[W].texture}return U}function Rt(y,g,U){let B=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=n.TEXTURE_3D);const N=vt(y,g),W=g.source;e.bindTexture(B,y.__webglTexture,n.TEXTURE0+U);const et=i.get(W);if(W.version!==et.__version||N===!0){e.activeTexture(n.TEXTURE0+U);const $=Qt.getPrimaries(Qt.workingColorSpace),rt=g.colorSpace===ei?null:Qt.getPrimaries(g.colorSpace),ct=g.colorSpace===ei||$===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let it=_(g.image,!1,r.maxTextureSize);it=q(g,it);const ot=s.convert(g.format,g.colorSpace),St=s.convert(g.type);let pt=E(g.internalFormat,ot,St,g.colorSpace,g.isVideoTexture);lt(B,g);let _t;const Dt=g.mipmaps,Gt=g.isVideoTexture!==!0&&pt!==xh,$t=et.__version===void 0||N===!0,Ut=W.dataReady,Xt=M(g,it);if(g.isDepthTexture)pt=n.DEPTH_COMPONENT16,g.type===ii?pt=n.DEPTH_COMPONENT32F:g.type===vr?pt=n.DEPTH_COMPONENT24:g.type===es&&(pt=n.DEPTH24_STENCIL8),$t&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,pt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,pt,it.width,it.height,0,ot,St,null));else if(g.isDataTexture)if(Dt.length>0){Gt&&$t&&e.texStorage2D(n.TEXTURE_2D,Xt,pt,Dt[0].width,Dt[0].height);for(let yt=0,C=Dt.length;yt<C;yt++)_t=Dt[yt],Gt?Ut&&e.texSubImage2D(n.TEXTURE_2D,yt,0,0,_t.width,_t.height,ot,St,_t.data):e.texImage2D(n.TEXTURE_2D,yt,pt,_t.width,_t.height,0,ot,St,_t.data);g.generateMipmaps=!1}else Gt?($t&&e.texStorage2D(n.TEXTURE_2D,Xt,pt,it.width,it.height),Ut&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,ot,St,it.data)):e.texImage2D(n.TEXTURE_2D,0,pt,it.width,it.height,0,ot,St,it.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Gt&&$t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,pt,Dt[0].width,Dt[0].height,it.depth);for(let yt=0,C=Dt.length;yt<C;yt++)_t=Dt[yt],g.format!==yn?ot!==null?Gt?Ut&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,0,_t.width,_t.height,it.depth,ot,_t.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,yt,pt,_t.width,_t.height,it.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?Ut&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,0,_t.width,_t.height,it.depth,ot,St,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,yt,pt,_t.width,_t.height,it.depth,0,ot,St,_t.data)}else{Gt&&$t&&e.texStorage2D(n.TEXTURE_2D,Xt,pt,Dt[0].width,Dt[0].height);for(let yt=0,C=Dt.length;yt<C;yt++)_t=Dt[yt],g.format!==yn?ot!==null?Gt?Ut&&e.compressedTexSubImage2D(n.TEXTURE_2D,yt,0,0,_t.width,_t.height,ot,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,yt,pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?Ut&&e.texSubImage2D(n.TEXTURE_2D,yt,0,0,_t.width,_t.height,ot,St,_t.data):e.texImage2D(n.TEXTURE_2D,yt,pt,_t.width,_t.height,0,ot,St,_t.data)}else if(g.isDataArrayTexture)Gt?($t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,pt,it.width,it.height,it.depth),Ut&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,St,it.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,pt,it.width,it.height,it.depth,0,ot,St,it.data);else if(g.isData3DTexture)Gt?($t&&e.texStorage3D(n.TEXTURE_3D,Xt,pt,it.width,it.height,it.depth),Ut&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,St,it.data)):e.texImage3D(n.TEXTURE_3D,0,pt,it.width,it.height,it.depth,0,ot,St,it.data);else if(g.isFramebufferTexture){if($t)if(Gt)e.texStorage2D(n.TEXTURE_2D,Xt,pt,it.width,it.height);else{let yt=it.width,C=it.height;for(let ht=0;ht<Xt;ht++)e.texImage2D(n.TEXTURE_2D,ht,pt,yt,C,0,ot,St,null),yt>>=1,C>>=1}}else if(Dt.length>0){if(Gt&&$t){const yt=Z(Dt[0]);e.texStorage2D(n.TEXTURE_2D,Xt,pt,yt.width,yt.height)}for(let yt=0,C=Dt.length;yt<C;yt++)_t=Dt[yt],Gt?Ut&&e.texSubImage2D(n.TEXTURE_2D,yt,0,0,ot,St,_t):e.texImage2D(n.TEXTURE_2D,yt,pt,ot,St,_t);g.generateMipmaps=!1}else if(Gt){if($t){const yt=Z(it);e.texStorage2D(n.TEXTURE_2D,Xt,pt,yt.width,yt.height)}Ut&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,St,it)}else e.texImage2D(n.TEXTURE_2D,0,pt,ot,St,it);p(g)&&d(B),et.__version=W.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function jt(y,g,U){if(g.image.length!==6)return;const B=vt(y,g),N=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+U);const W=i.get(N);if(N.version!==W.__version||B===!0){e.activeTexture(n.TEXTURE0+U);const et=Qt.getPrimaries(Qt.workingColorSpace),$=g.colorSpace===ei?null:Qt.getPrimaries(g.colorSpace),rt=g.colorSpace===ei||et===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const ct=g.isCompressedTexture||g.image[0].isCompressedTexture,it=g.image[0]&&g.image[0].isDataTexture,ot=[];for(let C=0;C<6;C++)!ct&&!it?ot[C]=_(g.image[C],!0,r.maxCubemapSize):ot[C]=it?g.image[C].image:g.image[C],ot[C]=q(g,ot[C]);const St=ot[0],pt=s.convert(g.format,g.colorSpace),_t=s.convert(g.type),Dt=E(g.internalFormat,pt,_t,g.colorSpace),Gt=g.isVideoTexture!==!0,$t=W.__version===void 0||B===!0,Ut=N.dataReady;let Xt=M(g,St);lt(n.TEXTURE_CUBE_MAP,g);let yt;if(ct){Gt&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Dt,St.width,St.height);for(let C=0;C<6;C++){yt=ot[C].mipmaps;for(let ht=0;ht<yt.length;ht++){const ft=yt[ht];g.format!==yn?pt!==null?Gt?Ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ht,0,0,ft.width,ft.height,pt,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ht,Dt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ht,0,0,ft.width,ft.height,pt,_t,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ht,Dt,ft.width,ft.height,0,pt,_t,ft.data)}}}else{if(yt=g.mipmaps,Gt&&$t){yt.length>0&&Xt++;const C=Z(ot[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,Dt,C.width,C.height)}for(let C=0;C<6;C++)if(it){Gt?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,ot[C].width,ot[C].height,pt,_t,ot[C].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Dt,ot[C].width,ot[C].height,0,pt,_t,ot[C].data);for(let ht=0;ht<yt.length;ht++){const wt=yt[ht].image[C].image;Gt?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ht+1,0,0,wt.width,wt.height,pt,_t,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ht+1,Dt,wt.width,wt.height,0,pt,_t,wt.data)}}else{Gt?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,pt,_t,ot[C]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Dt,pt,_t,ot[C]);for(let ht=0;ht<yt.length;ht++){const ft=yt[ht];Gt?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ht+1,0,0,pt,_t,ft.image[C]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ht+1,Dt,pt,_t,ft.image[C])}}}p(g)&&d(n.TEXTURE_CUBE_MAP),W.__version=N.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Q(y,g,U,B,N,W){const et=s.convert(U.format,U.colorSpace),$=s.convert(U.type),rt=E(U.internalFormat,et,$,U.colorSpace);if(!i.get(g).__hasExternalTextures){const it=Math.max(1,g.width>>W),ot=Math.max(1,g.height>>W);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?e.texImage3D(N,W,rt,it,ot,g.depth,0,et,$,null):e.texImage2D(N,W,rt,it,ot,0,et,$,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),P(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,N,i.get(U).__webglTexture,0,w(g)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,N,i.get(U).__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(y,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer&&!g.stencilBuffer){let B=n.DEPTH_COMPONENT24;if(U||P(g)){const N=g.depthTexture;N&&N.isDepthTexture&&(N.type===ii?B=n.DEPTH_COMPONENT32F:N.type===vr&&(B=n.DEPTH_COMPONENT24));const W=w(g);P(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,B,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,W,B,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,B,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(g.depthBuffer&&g.stencilBuffer){const B=w(g);U&&P(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,B,n.DEPTH24_STENCIL8,g.width,g.height):P(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,B,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const B=g.textures;for(let N=0;N<B.length;N++){const W=B[N],et=s.convert(W.format,W.colorSpace),$=s.convert(W.type),rt=E(W.internalFormat,et,$,W.colorSpace),ct=w(g);U&&P(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,rt,g.width,g.height):P(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,rt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,rt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),D(g.depthTexture,0);const B=i.get(g.depthTexture).__webglTexture,N=w(g);if(g.depthTexture.format===pr)P(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0);else if(g.depthTexture.format===Kr)P(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function ut(y){const g=i.get(y),U=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");gt(g.__webglFramebuffer,y)}else if(U){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]=n.createRenderbuffer(),st(g.__webglDepthbuffer[B],y,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),st(g.__webglDepthbuffer,y,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(y,g,U){const B=i.get(y);g!==void 0&&Q(B.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ut(y)}function Et(y){const g=y.texture,U=i.get(y),B=i.get(g);y.addEventListener("dispose",I);const N=y.textures,W=y.isWebGLCubeRenderTarget===!0,et=N.length>1;if(et||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=g.version,o.memory.textures++),W){U.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[$]=[];for(let rt=0;rt<g.mipmaps.length;rt++)U.__webglFramebuffer[$][rt]=n.createFramebuffer()}else U.__webglFramebuffer[$]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)U.__webglFramebuffer[$]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(et)for(let $=0,rt=N.length;$<rt;$++){const ct=i.get(N[$]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&P(y)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let $=0;$<N.length;$++){const rt=N[$];U.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[$]);const ct=s.convert(rt.format,rt.colorSpace),it=s.convert(rt.type),ot=E(rt.internalFormat,ct,it,rt.colorSpace,y.isXRRenderTarget===!0),St=w(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,ot,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,U.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),st(U.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),lt(n.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let rt=0;rt<g.mipmaps.length;rt++)Q(U.__webglFramebuffer[$][rt],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt);else Q(U.__webglFramebuffer[$],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(g)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){for(let $=0,rt=N.length;$<rt;$++){const ct=N[$],it=i.get(ct);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),lt(n.TEXTURE_2D,ct),Q(U.__webglFramebuffer,y,ct,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,0),p(ct)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let $=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&($=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture($,B.__webglTexture),lt($,g),g.mipmaps&&g.mipmaps.length>0)for(let rt=0;rt<g.mipmaps.length;rt++)Q(U.__webglFramebuffer[rt],y,g,n.COLOR_ATTACHMENT0,$,rt);else Q(U.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,$,0);p(g)&&d($),e.unbindTexture()}y.depthBuffer&&ut(y)}function Mt(y){const g=y.textures;for(let U=0,B=g.length;U<B;U++){const N=g[U];if(p(N)){const W=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,et=i.get(N).__webglTexture;e.bindTexture(W,et),d(W),e.unbindTexture()}}}function k(y){if(y.samples>0&&P(y)===!1){const g=y.textures,U=y.width,B=y.height;let N=n.COLOR_BUFFER_BIT;const W=[],et=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=i.get(y),rt=g.length>1;if(rt)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){W.push(n.COLOR_ATTACHMENT0+ct),y.depthBuffer&&W.push(et);const it=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(it===!1&&(y.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&$.__isTransmissionRenderTarget!==!0&&(N|=n.STENCIL_BUFFER_BIT)),rt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$.__webglColorRenderbuffer[ct]),it===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[et]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[et])),rt){const ot=i.get(g[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,U,B,0,0,U,B,N,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,W)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,$.__webglColorRenderbuffer[ct]);const it=i.get(g[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}}function w(y){return Math.min(r.maxSamples,y.samples)}function P(y){const g=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function G(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function q(y,g){const U=y.colorSpace,B=y.format,N=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||U!==mi&&U!==ei&&(Qt.getTransfer(U)===se?(B!==yn||N!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function Z(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=x,this.setTexture2D=D,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=tt,this.rebindTextures=Lt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=P}function EM(n,t){function e(i,r=ei){let s;const o=Qt.getTransfer(r);if(i===ci)return n.UNSIGNED_BYTE;if(i===ph)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ig)return n.BYTE;if(i===rg)return n.SHORT;if(i===hh)return n.UNSIGNED_SHORT;if(i===dh)return n.INT;if(i===vr)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===eo)return n.HALF_FLOAT;if(i===og)return n.ALPHA;if(i===ag)return n.RGB;if(i===yn)return n.RGBA;if(i===lg)return n.LUMINANCE;if(i===cg)return n.LUMINANCE_ALPHA;if(i===pr)return n.DEPTH_COMPONENT;if(i===Kr)return n.DEPTH_STENCIL;if(i===ug)return n.RED;if(i===gh)return n.RED_INTEGER;if(i===fg)return n.RG;if(i===_h)return n.RG_INTEGER;if(i===vh)return n.RGBA_INTEGER;if(i===Wo||i===Xo||i===qo||i===jo)if(o===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xc||i===Mc||i===Sc||i===yc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xh)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Ec||i===bc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ec)return o===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tc||i===wc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ac)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ic)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bc)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===zc||i===Hc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===$o)return o===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hg||i===kc||i===Vc||i===Gc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===$o)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class bM extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class tn extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const wM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ve,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new pi({vertexShader:wM,fragmentShader:AM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bt(new yo(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class CM extends Mr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,v=null;const _=new RM,p=e.getContextAttributes();let d=null,E=null;const M=[],b=[],I=new zt;let A=null;const R=new Je;R.layers.enable(1),R.viewport=new ue;const F=new Je;F.layers.enable(2),F.viewport=new ue;const S=[R,F],x=new bM;x.layers.enable(1),x.layers.enable(2);let z=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let st=M[Q];return st===void 0&&(st=new Ma,M[Q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Q){let st=M[Q];return st===void 0&&(st=new Ma,M[Q]=st),st.getGripSpace()},this.getHand=function(Q){let st=M[Q];return st===void 0&&(st=new Ma,M[Q]=st),st.getHandSpace()};function D(Q){const st=b.indexOf(Q.inputSource);if(st===-1)return;const gt=M[st];gt!==void 0&&(gt.update(Q.inputSource,Q.frame,c||o),gt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let Q=0;Q<M.length;Q++){const st=b[Q];st!==null&&(b[Q]=null,M[Q].disconnect(st))}z=null,L=null,_.reset(),t.setRenderTarget(d),m=null,h=null,f=null,r=null,E=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),r.renderState.layers===void 0){const st={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Oi(m.framebufferWidth,m.framebufferHeight,{format:yn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,gt=null,ut=null;p.depth&&(ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?Kr:pr,gt=p.stencil?es:vr);const Lt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Lt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new Oi(h.textureWidth,h.textureHeight,{format:yn,type:ci,depthTexture:new Dh(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const Et=t.properties.get(E);Et.__ignoreDepthValues=h.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),jt.setContext(r),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(Q){for(let st=0;st<Q.removed.length;st++){const gt=Q.removed[st],ut=b.indexOf(gt);ut>=0&&(b[ut]=null,M[ut].disconnect(gt))}for(let st=0;st<Q.added.length;st++){const gt=Q.added[st];let ut=b.indexOf(gt);if(ut===-1){for(let Et=0;Et<M.length;Et++)if(Et>=b.length){b.push(gt),ut=Et;break}else if(b[Et]===null){b[Et]=gt,ut=Et;break}if(ut===-1)break}const Lt=M[ut];Lt&&Lt.connect(gt)}}const tt=new O,nt=new O;function V(Q,st,gt){tt.setFromMatrixPosition(st.matrixWorld),nt.setFromMatrixPosition(gt.matrixWorld);const ut=tt.distanceTo(nt),Lt=st.projectionMatrix.elements,Et=gt.projectionMatrix.elements,Mt=Lt[14]/(Lt[10]-1),k=Lt[14]/(Lt[10]+1),w=(Lt[9]+1)/Lt[5],P=(Lt[9]-1)/Lt[5],G=(Lt[8]-1)/Lt[0],q=(Et[8]+1)/Et[0],Z=Mt*G,y=Mt*q,g=ut/(-G+q),U=g*-G;st.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(U),Q.translateZ(g),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const B=Mt+g,N=k+g,W=Z-U,et=y+(ut-U),$=w*k/N*B,rt=P*k/N*B;Q.projectionMatrix.makePerspective(W,et,$,rt,B,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function at(Q,st){st===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(st.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;_.texture!==null&&(Q.near=_.depthNear,Q.far=_.depthFar),x.near=F.near=R.near=Q.near,x.far=F.far=R.far=Q.far,(z!==x.near||L!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),z=x.near,L=x.far,R.near=z,R.far=L,F.near=z,F.far=L,R.updateProjectionMatrix(),F.updateProjectionMatrix(),Q.updateProjectionMatrix());const st=Q.parent,gt=x.cameras;at(x,st);for(let ut=0;ut<gt.length;ut++)at(gt[ut],st);gt.length===2?V(x,R,F):x.projectionMatrix.copy(R.projectionMatrix),lt(Q,x,st)};function lt(Q,st,gt){gt===null?Q.matrix.copy(st.matrixWorld):(Q.matrix.copy(gt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(st.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Wa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null};let vt=null;function Rt(Q,st){if(u=st.getViewerPose(c||o),v=st,u!==null){const gt=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let ut=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let Et=0;Et<gt.length;Et++){const Mt=gt[Et];let k=null;if(m!==null)k=m.getViewport(Mt);else{const P=f.getViewSubImage(h,Mt);k=P.viewport,Et===0&&(t.setRenderTargetTextures(E,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(E))}let w=S[Et];w===void 0&&(w=new Je,w.layers.enable(Et),w.viewport=new ue,S[Et]=w),w.matrix.fromArray(Mt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Mt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(k.x,k.y,k.width,k.height),Et===0&&(x.matrix.copy(w.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(w)}const Lt=r.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Et=f.getDepthInformation(gt[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,r.renderState)}}for(let gt=0;gt<M.length;gt++){const ut=b[gt],Lt=M[gt];ut!==null&&Lt!==void 0&&Lt.update(ut,st,c||o)}_.render(t,x),vt&&vt(Q,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),v=null}const jt=new Lh;jt.setAnimationLoop(Rt),this.setAnimationLoop=function(Q){vt=Q},this.dispose=function(){}}}const Ai=new Tn,PM=new oe;function LM(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Rh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,E,M,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,E,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ke&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ke&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=t.get(d),M=E.envMap,b=E.envMapRotation;if(M&&(p.envMap.value=M,Ai.copy(b),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),p.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(Ai)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const I=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*I,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=M*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ke&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DM(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const b=M.program;i.uniformBlockBinding(E,b)}function c(E,M){let b=r[E.id];b===void 0&&(v(E),b=u(E),r[E.id]=b,E.addEventListener("dispose",p));const I=M.program;i.updateUBOMapping(E,I);const A=t.render.frame;s[E.id]!==A&&(h(E),s[E.id]=A)}function u(E){const M=f();E.__bindingPointIndex=M;const b=n.createBuffer(),I=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const M=r[E.id],b=E.uniforms,I=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,R=b.length;A<R;A++){const F=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,x=F.length;S<x;S++){const z=F[S];if(m(z,A,S,I)===!0){const L=z.__offset,D=Array.isArray(z.value)?z.value:[z.value];let X=0;for(let J=0;J<D.length;J++){const tt=D[J],nt=_(tt);typeof tt=="number"||typeof tt=="boolean"?(z.__data[0]=tt,n.bufferSubData(n.UNIFORM_BUFFER,L+X,z.__data)):tt.isMatrix3?(z.__data[0]=tt.elements[0],z.__data[1]=tt.elements[1],z.__data[2]=tt.elements[2],z.__data[3]=0,z.__data[4]=tt.elements[3],z.__data[5]=tt.elements[4],z.__data[6]=tt.elements[5],z.__data[7]=0,z.__data[8]=tt.elements[6],z.__data[9]=tt.elements[7],z.__data[10]=tt.elements[8],z.__data[11]=0):(tt.toArray(z.__data,X),X+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,M,b,I){const A=E.value,R=M+"_"+b;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{const F=I[R];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return I[R]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function v(E){const M=E.uniforms;let b=0;const I=16;for(let R=0,F=M.length;R<F;R++){const S=Array.isArray(M[R])?M[R]:[M[R]];for(let x=0,z=S.length;x<z;x++){const L=S[x],D=Array.isArray(L.value)?L.value:[L.value];for(let X=0,J=D.length;X<J;X++){const tt=D[X],nt=_(tt),V=b%I;V!==0&&I-V<nt.boundary&&(b+=I-V),L.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=nt.storage}}}const A=b%I;return A>0&&(b+=I-A),E.__size=b,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){const M=E.target;M.removeEventListener("dispose",p);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class IM{constructor(t={}){const{canvas:e=bg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this._useLegacyLights=!1,this.toneMapping=li,this.toneMappingExposure=1;const M=this;let b=!1,I=0,A=0,R=null,F=-1,S=null;const x=new ue,z=new ue;let L=null;const D=new qt(0);let X=0,J=e.width,tt=e.height,nt=1,V=null,at=null;const lt=new ue(0,0,J,tt),vt=new ue(0,0,J,tt);let Rt=!1;const jt=new vl;let Q=!1,st=!1;const gt=new oe,ut=new zt,Lt=new O,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return R===null?nt:1}let k=i;function w(T,H){const Y=e.getContext(T,H);return Y!==null?Y:null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",wt,!1),k===null){const H="webgl2";if(k=w(H,T),k===null)throw w(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let P,G,q,Z,y,g,U,B,N,W,et,$,rt,ct,it,ot,St,pt,_t,Dt,Gt,$t,Ut,Xt;function yt(){P=new kv(k),P.init(),G=new Nv(k,P,t),$t=new EM(k,P),q=new SM(k),Z=new Wv(k),y=new aM,g=new yM(k,P,q,y,G,$t,Z),U=new Ov(M),B=new Hv(M),N=new Kg(k),Ut=new Iv(k,N),W=new Vv(k,N,Z,Ut),et=new qv(k,W,N,Z),_t=new Xv(k,G,g),ot=new Fv(y),$=new oM(M,U,B,P,G,Ut,ot),rt=new LM(M,y),ct=new cM,it=new mM(P),pt=new Dv(M,U,B,q,et,h,l),St=new MM(M,et,G),Xt=new DM(k,Z,G,q),Dt=new Uv(k,P,Z),Gt=new Gv(k,P,Z),Z.programs=$.programs,M.capabilities=G,M.extensions=P,M.properties=y,M.renderLists=ct,M.shadowMap=St,M.state=q,M.info=Z}yt();const C=new CM(M,k);this.xr=C,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=P.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=P.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(T){T!==void 0&&(nt=T,this.setSize(J,tt,!1))},this.getSize=function(T){return T.set(J,tt)},this.setSize=function(T,H,Y=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,tt=H,e.width=Math.floor(T*nt),e.height=Math.floor(H*nt),Y===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(J*nt,tt*nt).floor()},this.setDrawingBufferSize=function(T,H,Y){J=T,tt=H,nt=Y,e.width=Math.floor(T*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(lt)},this.setViewport=function(T,H,Y,K){T.isVector4?lt.set(T.x,T.y,T.z,T.w):lt.set(T,H,Y,K),q.viewport(x.copy(lt).multiplyScalar(nt).round())},this.getScissor=function(T){return T.copy(vt)},this.setScissor=function(T,H,Y,K){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,H,Y,K),q.scissor(z.copy(vt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(T){q.setScissorTest(Rt=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(T=!0,H=!0,Y=!0){let K=0;if(T){let j=!1;if(R!==null){const mt=R.texture.format;j=mt===vh||mt===_h||mt===gh}if(j){const mt=R.texture.type,Tt=mt===ci||mt===vr||mt===hh||mt===es||mt===ph||mt===mh,Ct=pt.getClearColor(),It=pt.getClearAlpha(),Ft=Ct.r,Nt=Ct.g,Ot=Ct.b;Tt?(m[0]=Ft,m[1]=Nt,m[2]=Ot,m[3]=It,k.clearBufferuiv(k.COLOR,0,m)):(v[0]=Ft,v[1]=Nt,v[2]=Ot,v[3]=It,k.clearBufferiv(k.COLOR,0,v))}else K|=k.COLOR_BUFFER_BIT}H&&(K|=k.DEPTH_BUFFER_BIT),Y&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),ct.dispose(),it.dispose(),y.dispose(),U.dispose(),B.dispose(),et.dispose(),Ut.dispose(),Xt.dispose(),$.dispose(),C.dispose(),C.removeEventListener("sessionstart",hn),C.removeEventListener("sessionend",dn),gi.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=Z.autoReset,H=St.enabled,Y=St.autoUpdate,K=St.needsUpdate,j=St.type;yt(),Z.autoReset=T,St.enabled=H,St.autoUpdate=Y,St.needsUpdate=K,St.type=j}function wt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function At(T){const H=T.target;H.removeEventListener("dispose",At),te(H)}function te(T){le(T),y.remove(T)}function le(T){const H=y.get(T).programs;H!==void 0&&(H.forEach(function(Y){$.releaseProgram(Y)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Y,K,j,mt){H===null&&(H=Et);const Tt=j.isMesh&&j.matrixWorld.determinant()<0,Ct=Vh(T,H,Y,K,j);q.setMaterial(K,Tt);let It=Y.index,Ft=1;if(K.wireframe===!0){if(It=W.getWireframeAttribute(Y),It===void 0)return;Ft=2}const Nt=Y.drawRange,Ot=Y.attributes.position;let pe=Nt.start*Ft,Ge=(Nt.start+Nt.count)*Ft;mt!==null&&(pe=Math.max(pe,mt.start*Ft),Ge=Math.min(Ge,(mt.start+mt.count)*Ft)),It!==null?(pe=Math.max(pe,0),Ge=Math.min(Ge,It.count)):Ot!=null&&(pe=Math.max(pe,0),Ge=Math.min(Ge,Ot.count));const xe=Ge-pe;if(xe<0||xe===1/0)return;Ut.setup(j,K,Ct,Y,It);let wn,he=Dt;if(It!==null&&(wn=N.get(It),he=Gt,he.setIndex(wn)),j.isMesh)K.wireframe===!0?(q.setLineWidth(K.wireframeLinewidth*Mt()),he.setMode(k.LINES)):he.setMode(k.TRIANGLES);else if(j.isLine){let Ht=K.linewidth;Ht===void 0&&(Ht=1),q.setLineWidth(Ht*Mt()),j.isLineSegments?he.setMode(k.LINES):j.isLineLoop?he.setMode(k.LINE_LOOP):he.setMode(k.LINE_STRIP)}else j.isPoints?he.setMode(k.POINTS):j.isSprite&&he.setMode(k.TRIANGLES);if(j.isBatchedMesh)he.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)he.renderInstances(pe,xe,j.count);else if(Y.isInstancedBufferGeometry){const Ht=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,wo=Math.min(Y.instanceCount,Ht);he.renderInstances(pe,xe,wo)}else he.render(pe,xe)};function fe(T,H,Y){T.transparent===!0&&T.side===je&&T.forceSinglePass===!1?(T.side=ke,T.needsUpdate=!0,ls(T,H,Y),T.side=di,T.needsUpdate=!0,ls(T,H,Y),T.side=je):ls(T,H,Y)}this.compile=function(T,H,Y=null){Y===null&&(Y=T),p=it.get(Y),p.init(),E.push(p),Y.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),T!==Y&&T.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(M._useLegacyLights);const K=new Set;return T.traverse(function(j){const mt=j.material;if(mt)if(Array.isArray(mt))for(let Tt=0;Tt<mt.length;Tt++){const Ct=mt[Tt];fe(Ct,Y,j),K.add(Ct)}else fe(mt,Y,j),K.add(mt)}),E.pop(),p=null,K},this.compileAsync=function(T,H,Y=null){const K=this.compile(T,H,Y);return new Promise(j=>{function mt(){if(K.forEach(function(Tt){y.get(Tt).currentProgram.isReady()&&K.delete(Tt)}),K.size===0){j(T);return}setTimeout(mt,10)}P.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ee=null;function re(T){Ee&&Ee(T)}function hn(){gi.stop()}function dn(){gi.start()}const gi=new Lh;gi.setAnimationLoop(re),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(T){Ee=T,C.setAnimationLoop(T),T===null?gi.stop():gi.start()},C.addEventListener("sessionstart",hn),C.addEventListener("sessionend",dn),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(H),H=C.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,H,R),p=it.get(T,E.length),p.init(),E.push(p),gt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),jt.setFromProjectionMatrix(gt),st=this.localClippingEnabled,Q=ot.init(this.clippingPlanes,st),_=ct.get(T,d.length),_.init(),d.push(_),wl(T,H,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(V,at),this.info.render.frame++,Q===!0&&ot.beginShadows();const Y=p.state.shadowsArray;if(St.render(Y,T,H),Q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1)&&pt.render(_,T),p.setupLights(M._useLegacyLights),H.isArrayCamera){const K=H.cameras;for(let j=0,mt=K.length;j<mt;j++){const Tt=K[j];Al(_,T,Tt,Tt.viewport)}}else Al(_,T,H);R!==null&&(g.updateMultisampleRenderTarget(R),g.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(M,T,H),Ut.resetDefaultState(),F=-1,S=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function wl(T,H,Y,K){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||jt.intersectsSprite(T)){K&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(gt);const Tt=et.update(T),Ct=T.material;Ct.visible&&_.push(T,Tt,Ct,Y,Lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||jt.intersectsObject(T))){const Tt=et.update(T),Ct=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Lt.copy(Tt.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(gt)),Array.isArray(Ct)){const It=Tt.groups;for(let Ft=0,Nt=It.length;Ft<Nt;Ft++){const Ot=It[Ft],pe=Ct[Ot.materialIndex];pe&&pe.visible&&_.push(T,Tt,pe,Y,Lt.z,Ot)}}else Ct.visible&&_.push(T,Tt,Ct,Y,Lt.z,null)}}const mt=T.children;for(let Tt=0,Ct=mt.length;Tt<Ct;Tt++)wl(mt[Tt],H,Y,K)}function Al(T,H,Y,K){const j=T.opaque,mt=T.transmissive,Tt=T.transparent;p.setupLightsView(Y),Q===!0&&ot.setGlobalState(M.clippingPlanes,Y),mt.length>0&&kh(j,mt,H,Y),K&&q.viewport(x.copy(K)),j.length>0&&as(j,H,Y),mt.length>0&&as(mt,H,Y),Tt.length>0&&as(Tt,H,Y),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function kh(T,H,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Oi(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")||P.has("EXT_color_buffer_float")?eo:ci,minFilter:Ni,samples:4,stencilBuffer:s});const Ft=y.get(p.state.transmissionRenderTarget);Ft.__isTransmissionRenderTarget=!0}const mt=p.state.transmissionRenderTarget;M.getDrawingBufferSize(ut),mt.setSize(ut.x,ut.y);const Tt=M.getRenderTarget();M.setRenderTarget(mt),M.getClearColor(D),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear();const Ct=M.toneMapping;M.toneMapping=li,as(T,Y,K),g.updateMultisampleRenderTarget(mt),g.updateRenderTargetMipmap(mt);let It=!1;for(let Ft=0,Nt=H.length;Ft<Nt;Ft++){const Ot=H[Ft],pe=Ot.object,Ge=Ot.geometry,xe=Ot.material,wn=Ot.group;if(xe.side===je&&pe.layers.test(K.layers)){const he=xe.side;xe.side=ke,xe.needsUpdate=!0,Rl(pe,Y,K,Ge,xe,wn),xe.side=he,xe.needsUpdate=!0,It=!0}}It===!0&&(g.updateMultisampleRenderTarget(mt),g.updateRenderTargetMipmap(mt)),M.setRenderTarget(Tt),M.setClearColor(D,X),M.toneMapping=Ct}function as(T,H,Y){const K=H.isScene===!0?H.overrideMaterial:null;for(let j=0,mt=T.length;j<mt;j++){const Tt=T[j],Ct=Tt.object,It=Tt.geometry,Ft=K===null?Tt.material:K,Nt=Tt.group;Ct.layers.test(Y.layers)&&Rl(Ct,H,Y,It,Ft,Nt)}}function Rl(T,H,Y,K,j,mt){T.onBeforeRender(M,H,Y,K,j,mt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(M,H,Y,K,T,mt),j.transparent===!0&&j.side===je&&j.forceSinglePass===!1?(j.side=ke,j.needsUpdate=!0,M.renderBufferDirect(Y,H,K,j,T,mt),j.side=di,j.needsUpdate=!0,M.renderBufferDirect(Y,H,K,j,T,mt),j.side=je):M.renderBufferDirect(Y,H,K,j,T,mt),T.onAfterRender(M,H,Y,K,j,mt)}function ls(T,H,Y){H.isScene!==!0&&(H=Et);const K=y.get(T),j=p.state.lights,mt=p.state.shadowsArray,Tt=j.state.version,Ct=$.getParameters(T,j.state,mt,H,Y),It=$.getProgramCacheKey(Ct);let Ft=K.programs;K.environment=T.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(T.isMeshStandardMaterial?B:U).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",At),Ft=new Map,K.programs=Ft);let Nt=Ft.get(It);if(Nt!==void 0){if(K.currentProgram===Nt&&K.lightsStateVersion===Tt)return Pl(T,Ct),Nt}else Ct.uniforms=$.getUniforms(T),T.onBuild(Y,Ct,M),T.onBeforeCompile(Ct,M),Nt=$.acquireProgram(Ct,It),Ft.set(It,Nt),K.uniforms=Ct.uniforms;const Ot=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=ot.uniform),Pl(T,Ct),K.needsLights=Wh(T),K.lightsStateVersion=Tt,K.needsLights&&(Ot.ambientLightColor.value=j.state.ambient,Ot.lightProbe.value=j.state.probe,Ot.directionalLights.value=j.state.directional,Ot.directionalLightShadows.value=j.state.directionalShadow,Ot.spotLights.value=j.state.spot,Ot.spotLightShadows.value=j.state.spotShadow,Ot.rectAreaLights.value=j.state.rectArea,Ot.ltc_1.value=j.state.rectAreaLTC1,Ot.ltc_2.value=j.state.rectAreaLTC2,Ot.pointLights.value=j.state.point,Ot.pointLightShadows.value=j.state.pointShadow,Ot.hemisphereLights.value=j.state.hemi,Ot.directionalShadowMap.value=j.state.directionalShadowMap,Ot.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ot.spotShadowMap.value=j.state.spotShadowMap,Ot.spotLightMatrix.value=j.state.spotLightMatrix,Ot.spotLightMap.value=j.state.spotLightMap,Ot.pointShadowMap.value=j.state.pointShadowMap,Ot.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=Nt,K.uniformsList=null,Nt}function Cl(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Xs.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Pl(T,H){const Y=y.get(T);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Vh(T,H,Y,K,j){H.isScene!==!0&&(H=Et),g.resetTextureUnits();const mt=H.fog,Tt=K.isMeshStandardMaterial?H.environment:null,Ct=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mi,It=(K.isMeshStandardMaterial?B:U).get(K.envMap||Tt),Ft=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Nt=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ot=!!Y.morphAttributes.position,pe=!!Y.morphAttributes.normal,Ge=!!Y.morphAttributes.color;let xe=li;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xe=M.toneMapping);const wn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,he=wn!==void 0?wn.length:0,Ht=y.get(K),wo=p.state.lights;if(Q===!0&&(st===!0||T!==S)){const Ye=T===S&&K.id===F;ot.setState(K,T,Ye)}let ce=!1;K.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==wo.state.version||Ht.outputColorSpace!==Ct||j.isBatchedMesh&&Ht.batching===!1||!j.isBatchedMesh&&Ht.batching===!0||j.isInstancedMesh&&Ht.instancing===!1||!j.isInstancedMesh&&Ht.instancing===!0||j.isSkinnedMesh&&Ht.skinning===!1||!j.isSkinnedMesh&&Ht.skinning===!0||j.isInstancedMesh&&Ht.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ht.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ht.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ht.instancingMorph===!1&&j.morphTexture!==null||Ht.envMap!==It||K.fog===!0&&Ht.fog!==mt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ot.numPlanes||Ht.numIntersection!==ot.numIntersection)||Ht.vertexAlphas!==Ft||Ht.vertexTangents!==Nt||Ht.morphTargets!==Ot||Ht.morphNormals!==pe||Ht.morphColors!==Ge||Ht.toneMapping!==xe||Ht.morphTargetsCount!==he)&&(ce=!0):(ce=!0,Ht.__version=K.version);let _i=Ht.currentProgram;ce===!0&&(_i=ls(K,H,j));let Ll=!1,yr=!1,Ao=!1;const be=_i.getUniforms(),Gn=Ht.uniforms;if(q.useProgram(_i.program)&&(Ll=!0,yr=!0,Ao=!0),K.id!==F&&(F=K.id,yr=!0),Ll||S!==T){be.setValue(k,"projectionMatrix",T.projectionMatrix),be.setValue(k,"viewMatrix",T.matrixWorldInverse);const Ye=be.map.cameraPosition;Ye!==void 0&&Ye.setValue(k,Lt.setFromMatrixPosition(T.matrixWorld)),G.logarithmicDepthBuffer&&be.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&be.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,yr=!0,Ao=!0)}if(j.isSkinnedMesh){be.setOptional(k,j,"bindMatrix"),be.setOptional(k,j,"bindMatrixInverse");const Ye=j.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),be.setValue(k,"boneTexture",Ye.boneTexture,g))}j.isBatchedMesh&&(be.setOptional(k,j,"batchingTexture"),be.setValue(k,"batchingTexture",j._matricesTexture,g));const Ro=Y.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0)&&_t.update(j,Y,_i),(yr||Ht.receiveShadow!==j.receiveShadow)&&(Ht.receiveShadow=j.receiveShadow,be.setValue(k,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Gn.envMap.value=It,Gn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(Gn.envMapIntensity.value=H.environmentIntensity),yr&&(be.setValue(k,"toneMappingExposure",M.toneMappingExposure),Ht.needsLights&&Gh(Gn,Ao),mt&&K.fog===!0&&rt.refreshFogUniforms(Gn,mt),rt.refreshMaterialUniforms(Gn,K,nt,tt,p.state.transmissionRenderTarget),Xs.upload(k,Cl(Ht),Gn,g)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Xs.upload(k,Cl(Ht),Gn,g),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&be.setValue(k,"center",j.center),be.setValue(k,"modelViewMatrix",j.modelViewMatrix),be.setValue(k,"normalMatrix",j.normalMatrix),be.setValue(k,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ye=K.uniformsGroups;for(let Co=0,Xh=Ye.length;Co<Xh;Co++){const Dl=Ye[Co];Xt.update(Dl,_i),Xt.bind(Dl,_i)}}return _i}function Gh(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Wh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,H,Y){y.get(T.texture).__webglTexture=H,y.get(T.depthTexture).__webglTexture=Y;const K=y.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const Y=y.get(T);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Y=0){R=T,I=H,A=Y;let K=!0,j=null,mt=!1,Tt=!1;if(T){const It=y.get(T);It.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(k.FRAMEBUFFER,null),K=!1):It.__webglFramebuffer===void 0?g.setupRenderTarget(T):It.__hasExternalTextures&&g.rebindTextures(T,y.get(T.texture).__webglTexture,y.get(T.depthTexture).__webglTexture);const Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Tt=!0);const Nt=y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[H])?j=Nt[H][Y]:j=Nt[H],mt=!0):T.samples>0&&g.useMultisampledRTT(T)===!1?j=y.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?j=Nt[Y]:j=Nt,x.copy(T.viewport),z.copy(T.scissor),L=T.scissorTest}else x.copy(lt).multiplyScalar(nt).floor(),z.copy(vt).multiplyScalar(nt).floor(),L=Rt;if(q.bindFramebuffer(k.FRAMEBUFFER,j)&&K&&q.drawBuffers(T,j),q.viewport(x),q.scissor(z),q.setScissorTest(L),mt){const It=y.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,It.__webglTexture,Y)}else if(Tt){const It=y.get(T.texture),Ft=H||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,It.__webglTexture,Y||0,Ft)}F=-1},this.readRenderTargetPixels=function(T,H,Y,K,j,mt,Tt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){q.bindFramebuffer(k.FRAMEBUFFER,Ct);try{const It=T.texture,Ft=It.format,Nt=It.type;if(Ft!==yn&&$t.convert(Ft)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Nt===eo&&(P.has("EXT_color_buffer_half_float")||P.has("EXT_color_buffer_float"));if(Nt!==ci&&$t.convert(Nt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&Nt!==ii&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-K&&Y>=0&&Y<=T.height-j&&k.readPixels(H,Y,K,j,$t.convert(Ft),$t.convert(Nt),mt)}finally{const It=R!==null?y.get(R).__webglFramebuffer:null;q.bindFramebuffer(k.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(T,H,Y=0){const K=Math.pow(2,-Y),j=Math.floor(H.image.width*K),mt=Math.floor(H.image.height*K);g.setTexture2D(H,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,T.x,T.y,j,mt),q.unbindTexture()},this.copyTextureToTexture=function(T,H,Y,K=0){const j=H.image.width,mt=H.image.height,Tt=$t.convert(Y.format),Ct=$t.convert(Y.type);g.setTexture2D(Y,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment),H.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,K,T.x,T.y,j,mt,Tt,Ct,H.image.data):H.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,K,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Tt,H.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,K,T.x,T.y,Tt,Ct,H.image),K===0&&Y.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Y,K,j=0){const mt=Math.round(T.max.x-T.min.x),Tt=Math.round(T.max.y-T.min.y),Ct=T.max.z-T.min.z+1,It=$t.convert(K.format),Ft=$t.convert(K.type);let Nt;if(K.isData3DTexture)g.setTexture3D(K,0),Nt=k.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)g.setTexture2DArray(K,0),Nt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const Ot=k.getParameter(k.UNPACK_ROW_LENGTH),pe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ge=k.getParameter(k.UNPACK_SKIP_PIXELS),xe=k.getParameter(k.UNPACK_SKIP_ROWS),wn=k.getParameter(k.UNPACK_SKIP_IMAGES),he=Y.isCompressedTexture?Y.mipmaps[j]:Y.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,he.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,he.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),Y.isDataTexture||Y.isData3DTexture?k.texSubImage3D(Nt,j,H.x,H.y,H.z,mt,Tt,Ct,It,Ft,he.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,j,H.x,H.y,H.z,mt,Tt,Ct,It,he.data):k.texSubImage3D(Nt,j,H.x,H.y,H.z,mt,Tt,Ct,It,Ft,he),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ge),k.pixelStorei(k.UNPACK_SKIP_ROWS,xe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,wn),j===0&&K.generateMipmaps&&k.generateMipmap(Nt),q.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?g.setTextureCube(T,0):T.isData3DTexture?g.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?g.setTexture2DArray(T,0):g.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){I=0,A=0,R=null,q.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===gl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Mo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Sl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new Sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class UM extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bh extends zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Uu=new O,Nu=new O,Fu=new oe,Sa=new So,Us=new ss;class NM extends Se{constructor(t=new Ce,e=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Uu.fromBufferAttribute(e,r-1),Nu.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Uu.distanceTo(Nu);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(r),Us.radius+=s,t.ray.intersectsSphere(Us)===!1)return;Fu.copy(r).invert(),Sa.copy(t.ray).applyMatrix4(Fu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,f=new O,h=new O,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const d=Math.max(0,o.start),E=Math.min(v.count,o.start+o.count);for(let M=d,b=E-1;M<b;M+=m){const I=v.getX(M),A=v.getX(M+1);if(c.fromBufferAttribute(p,I),u.fromBufferAttribute(p,A),Sa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(h);F<t.near||F>t.far||e.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),E=Math.min(p.count,o.start+o.count);for(let M=d,b=E-1;M<b;M+=m){if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,M+1),Sa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(h);A<t.near||A>t.far||e.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ou=new O,Bu=new O;class FM extends NM{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ou.fromBufferAttribute(e,r),Bu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ou.distanceTo(Bu);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zh extends zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zu=new oe,qa=new So,Ns=new ss,Fs=new O;class OM extends Se{constructor(t=new Ce,e=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,t.ray.intersectsSphere(Ns)===!1)return;zu.copy(r).invert(),qa.copy(t.ray).applyMatrix4(zu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=h,_=m;v<_;v++){const p=c.getX(v);Fs.fromBufferAttribute(f,p),Hu(Fs,p,l,r,t,e,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=h,_=m;v<_;v++)Fs.fromBufferAttribute(f,v),Hu(Fs,v,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hu(n,t,e,i,r,s,o){const a=qa.distanceSqToPoint(n);if(a<e){const l=new O;qa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class bo extends Ce{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new O,u=new zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const m=i+f/e*r;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ri extends Ce{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],m=[];let v=0;const _=[],p=i/2;let d=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(m,2));function E(){const b=new O,I=new O;let A=0;const R=(e-t)/i;for(let F=0;F<=s;F++){const S=[],x=F/s,z=x*(e-t)+t;for(let L=0;L<=r;L++){const D=L/r,X=D*l+a,J=Math.sin(X),tt=Math.cos(X);I.x=z*J,I.y=-x*i+p,I.z=z*tt,f.push(I.x,I.y,I.z),b.set(J,R,tt).normalize(),h.push(b.x,b.y,b.z),m.push(D,1-x),S.push(v++)}_.push(S)}for(let F=0;F<r;F++)for(let S=0;S<s;S++){const x=_[S][F],z=_[S+1][F],L=_[S+1][F+1],D=_[S][F+1];u.push(x,z,D),u.push(z,L,D),A+=6}c.addGroup(d,A,0),d+=A}function M(b){const I=v,A=new zt,R=new O;let F=0;const S=b===!0?t:e,x=b===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,p*x,0),h.push(0,x,0),m.push(.5,.5),v++;const z=v;for(let L=0;L<=r;L++){const X=L/r*l+a,J=Math.cos(X),tt=Math.sin(X);R.x=S*tt,R.y=p*x,R.z=S*J,f.push(R.x,R.y,R.z),h.push(0,x,0),A.x=J*.5+.5,A.y=tt*.5*x+.5,m.push(A.x,A.y),v++}for(let L=0;L<r;L++){const D=I+L,X=z+L;b===!0?u.push(X,X+1,D):u.push(X+1,X,D),F+=3}c.addGroup(d,F,b===!0?1:2),d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yl extends Ce{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new O,b=new O,I=new O;for(let A=0;A<e.length;A+=3)m(e[A+0],M),m(e[A+1],b),m(e[A+2],I),l(M,b,I,E)}function l(E,M,b,I){const A=I+1,R=[];for(let F=0;F<=A;F++){R[F]=[];const S=E.clone().lerp(b,F/A),x=M.clone().lerp(b,F/A),z=A-F;for(let L=0;L<=z;L++)L===0&&F===A?R[F][L]=S:R[F][L]=S.clone().lerp(x,L/z)}for(let F=0;F<A;F++)for(let S=0;S<2*(A-F)-1;S++){const x=Math.floor(S/2);S%2===0?(h(R[F][x+1]),h(R[F+1][x]),h(R[F][x])):(h(R[F][x+1]),h(R[F+1][x+1]),h(R[F+1][x]))}}function c(E){const M=new O;for(let b=0;b<s.length;b+=3)M.x=s[b+0],M.y=s[b+1],M.z=s[b+2],M.normalize().multiplyScalar(E),s[b+0]=M.x,s[b+1]=M.y,s[b+2]=M.z}function u(){const E=new O;for(let M=0;M<s.length;M+=3){E.x=s[M+0],E.y=s[M+1],E.z=s[M+2];const b=p(E)/2/Math.PI+.5,I=d(E)/Math.PI+.5;o.push(b,1-I)}v(),f()}function f(){for(let E=0;E<o.length;E+=6){const M=o[E+0],b=o[E+2],I=o[E+4],A=Math.max(M,b,I),R=Math.min(M,b,I);A>.9&&R<.1&&(M<.2&&(o[E+0]+=1),b<.2&&(o[E+2]+=1),I<.2&&(o[E+4]+=1))}}function h(E){s.push(E.x,E.y,E.z)}function m(E,M){const b=E*3;M.x=t[b+0],M.y=t[b+1],M.z=t[b+2]}function v(){const E=new O,M=new O,b=new O,I=new O,A=new zt,R=new zt,F=new zt;for(let S=0,x=0;S<s.length;S+=9,x+=6){E.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),b.set(s[S+6],s[S+7],s[S+8]),A.set(o[x+0],o[x+1]),R.set(o[x+2],o[x+3]),F.set(o[x+4],o[x+5]),I.copy(E).add(M).add(b).divideScalar(3);const z=p(I);_(A,x+0,E,z),_(R,x+2,M,z),_(F,x+4,b,z)}}function _(E,M,b,I){I<0&&E.x===1&&(o[M]=E.x-1),b.x===0&&b.z===0&&(o[M]=I/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.vertices,t.indices,t.radius,t.details)}}class os extends yl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new os(t.radius,t.detail)}}const Os=new O,Bs=new O,ya=new O,zs=new an;class BM extends Ce{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Ws*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},m=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:p,c:d}=zs;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),zs.getNormal(ya),f[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,f[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const M=(E+1)%3,b=f[E],I=f[M],A=zs[u[E]],R=zs[u[M]],F=`${b}_${I}`,S=`${I}_${b}`;S in h&&h[S]?(ya.dot(h[S].normal)<=s&&(m.push(A.x,A.y,A.z),m.push(R.x,R.y,R.z)),h[S]=null):F in h||(h[F]={index0:c[E],index1:c[M],normal:ya.clone()})}}for(const v in h)if(h[v]){const{index0:_,index1:p}=h[v];Os.fromBufferAttribute(a,_),Bs.fromBufferAttribute(a,p),m.push(Os.x,Os.y,Os.z),m.push(Bs.x,Bs.y,Bs.z)}this.setAttribute("position",new ae(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class or extends Ce{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=t;const h=(e-t)/r,m=new O,v=new zt;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const d=s+p/i*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,u.push(v.x,v.y)}f+=h}for(let _=0;_<r;_++){const p=_*(i+1);for(let d=0;d<i;d++){const E=d+p,M=E,b=E+i+1,I=E+i+2,A=E+1;a.push(M,b,A),a.push(b,I,A)}}this.setIndex(a),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class El extends Ce{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new O,h=new O,m=[],v=[],_=[],p=[];for(let d=0;d<=i;d++){const E=[],M=d/i;let b=0;d===0&&o===0?b=.5/e:d===i&&l===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){const A=I/e;f.x=-t*Math.cos(r+A*s)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(r+A*s)*Math.sin(o+M*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),p.push(A+b,1-M),E.push(c++)}u.push(E)}for(let d=0;d<i;d++)for(let E=0;E<e;E++){const M=u[d][E+1],b=u[d][E],I=u[d+1][E],A=u[d+1][E+1];(d!==0||o>0)&&m.push(M,b,A),(d!==i-1||l<Math.PI)&&m.push(b,I,A)}this.setIndex(m),this.setAttribute("position",new ae(v,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jt extends zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bl extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ea=new oe,ku=new O,Vu=new O;class Hh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(ku),Vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vu),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gu=new oe,Lr=new O,ba=new O;class zM extends Hh{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Lr),ba.copy(i.position),ba.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ba),i.updateMatrixWorld(),r.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Gu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu)}}class HM extends bl{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new zM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kM extends Hh{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wu extends bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new kM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class VM extends bl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xu=new oe;class GM{constructor(t,e,i=0,r=1/0){this.ray=new So(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(t,e=!0,i=[]){return ja(t,this,i,e),i.sort(qu),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)ja(t[r],this,i,e);return i.sort(qu),i}}function qu(n,t){return n.distance-t.distance}function ja(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)ja(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);function WM(){const n=new tn,t=16571568,e=5910544,i=16777215,r=2833234,s=1708042,o=3900150,a=1710618,l=860471,c=new tn;c.scale.setScalar(.78),n.add(c);const u=new bt(new bo(.38,16),new Ie({color:0,transparent:!0,opacity:.2}));u.rotation.x=-Math.PI/2,u.position.y=.01,n.add(u);const f=new Wt(.22,.54,.22),h=new Jt({color:r}),m=new bt(f,h);m.position.set(-.14,.3,0),m.castShadow=!0,c.add(m);const v=new bt(f,h);v.position.set(.14,.3,0),v.castShadow=!0,c.add(v);const _=new Jt({color:s});for(const[Et,Mt]of[[-.14,.05],[.14,.05]]){const k=new bt(new Wt(.24,.13,.3),_);k.position.set(Et,.065,Mt),c.add(k)}const p=new Jt({color:i}),d=new bt(new Wt(.52,.62,.32),p);d.position.y=.87,d.castShadow=!0,c.add(d);const E=new Jt({color:14540253}),M=new bt(new Wt(.16,.1,.14),E);M.position.set(0,1.19,.1),c.add(M);const b=new Jt({color:t}),I=new bt(new Wt(.18,.22,.18),p);I.position.set(-.36,.94,0),I.castShadow=!0,c.add(I);const A=new bt(new Wt(.16,.26,.16),b);A.position.set(-.36,.7,0),A.castShadow=!0,c.add(A);const R=new bt(new Wt(.18,.22,.18),p);R.position.set(.36,.94,0),R.castShadow=!0,c.add(R);const F=new bt(new Wt(.16,.26,.16),b);F.position.set(.36,.7,0),F.castShadow=!0,c.add(F);const S=new Jt({color:t});for(const Et of[-.36,.36]){const Mt=new bt(new Wt(.16,.15,.15),S);Mt.position.set(Et,.54,0),c.add(Mt)}const x=new Jt({color:a}),z=new Jt({color:l}),L=new bt(new Wt(.2,.07,.2),x);L.position.set(-.36,.575,0),c.add(L);const D=new bt(new Wt(.1,.06,.08),x);D.position.set(-.36,.582,.1),c.add(D);const X=new bt(new Wt(.07,.04,.02),z);X.position.set(-.36,.583,.145),c.add(X);const J=new Jt({color:t}),tt=new bt(new Wt(.44,.44,.4),J);tt.position.y=1.42,tt.castShadow=!0,c.add(tt);const nt=new Jt({color:e}),V=new bt(new Wt(.46,.14,.42),nt);V.position.y=1.66,c.add(V);for(const[Et,Mt]of[[-.23,1.44],[.23,1.44]]){const k=new bt(new Wt(.04,.28,.36),nt);k.position.set(Et,Mt,0),c.add(k)}const at=new Ie({color:16777215}),lt=new Ie({color:o}),vt=new Ie({color:1118481});for(const Et of[-1,1]){const Mt=new bt(new Wt(.09,.08,.04),at);Mt.position.set(Et*.11,1.44,.2),c.add(Mt);const k=new bt(new Wt(.07,.07,.04),lt);k.position.set(Et*.11,1.44,.22),c.add(k);const w=new bt(new Wt(.04,.04,.04),vt);w.position.set(Et*.11,1.44,.24),c.add(w)}const Rt=new Ie({color:5909018}),jt=new bt(new Wt(.14,.04,.04),Rt);jt.position.set(0,1.28,.2),c.add(jt);let Q=0;const st=new O(0,0,0),gt=5,ut=9.5;function Lt(Et,Mt){const k=Mt.x!==0||Mt.z!==0;if(k){const w=Math.sqrt(Mt.x*Mt.x+Mt.z*Mt.z),P=Mt.x/w,G=Mt.z/w,q=P,Z=G;st.x+=q*gt*Et,st.z+=Z*gt*Et,st.x=Math.max(-ut,Math.min(ut,st.x)),st.z=Math.max(-ut,Math.min(ut,st.z));const y=Math.atan2(q,Z);n.rotation.y=y,Q+=Et*6}if(n.position.set(st.x,0,st.z),k){const w=Math.sin(Q)*.35;m.rotation.x=w,v.rotation.x=-w,I.rotation.x=-w*.6,A.rotation.x=-w*.6,R.rotation.x=w*.6,F.rotation.x=w*.6,d.position.y=.87+Math.abs(Math.sin(Q))*.03,tt.position.y=1.42+Math.abs(Math.sin(Q))*.03,V.position.y=1.66+Math.abs(Math.sin(Q))*.03}else{Q+=Et*1.5;const w=Math.sin(Q)*.01;d.position.y=.87+w,tt.position.y=1.42+w,V.position.y=1.66+w,m.rotation.x*=.85,v.rotation.x*=.85,I.rotation.x*=.85,A.rotation.x*=.85,R.rotation.x*=.85,F.rotation.x*=.85}}return{group:n,update:Lt,position:st}}function XM(n){const i=[1715786,1189181,1454920,2045269,991285];for(let _=-10;_<=10;_++)for(let p=-10;p<=10;p++){const d=i[((_+p)%i.length+i.length)%i.length],E=new Wt(2-.04,.18,2-.04),M=new Jt({color:d}),b=new bt(E,M);b.position.set(_*2,-.09,p*2),b.receiveShadow=!0,n.add(b)}const r=9.8,s=new BM(new Wt(r*2,.5,r*2)),o=new Bh({color:4886745,linewidth:2}),a=new FM(s,o);a.position.y=.25,n.add(a);const l=[[-8,-8],[-8,-4],[-8,0],[-8,4],[-8,8],[8,-8],[8,-4],[8,0],[8,4],[8,8],[-4,-8],[0,-8],[4,-8],[-4,8],[0,8],[4,8]],c=[2278750,1483594,4906624,8843180,6732650];l.forEach(([_,p],d)=>{qM(n,_,p,c[d%c.length])}),[[-4,-4],[4,-4],[-4,4],[4,4]].forEach(([_,p])=>jM(n,_,p));const f=[4674921,6583435,9741240];[[-7,2],[7,-2],[2,7],[-2,-7],[7,7],[-7,-7]].forEach(([_,p],d)=>{$M(n,_,p,f[d%f.length])}),[...function(){const _=[];for(let p=-3;p<=3;p++)for(let d=-3;d<=3;d++)Math.abs(p)+Math.abs(d)<=3&&_.push([p*1.2,d*1.2]);return _}()].forEach(([_,p])=>{const d=new bt(new bo(.12,8),new Ie({color:3900150,transparent:!0,opacity:.35}));d.rotation.x=-Math.PI/2,d.position.set(_,.02,p),n.add(d)});function v(_){}return{update:v}}function qM(n,t,e,i){const r=new tn,s=new bt(new ri(.12,.17,.7,7),new Jt({color:7029286}));s.position.y=.35,s.castShadow=!0,r.add(s);const o=new bt(new os(.52,0),new Jt({color:i}));o.position.y=1.1,o.castShadow=!0,r.add(o),r.position.set(t,0,e),n.add(r)}function jM(n,t,e){const i=new tn,r=new bt(new ri(.06,.08,2,8),new Jt({color:3621201}));r.position.y=1,r.castShadow=!0,i.add(r);const s=new bt(new El(.22,12,8),new Ie({color:16708551}));s.position.y=2.15,i.add(s);const o=new HM(16708551,.8,4.5);o.position.set(t,2.15,e),o.castShadow=!1,n.add(o),i.position.set(t,0,e),n.add(i)}function $M(n,t,e,i){const r=new os(.35+Math.random()*.2,0),s=new Jt({color:i}),o=new bt(r,s);o.position.set(t,.18,e),o.rotation.set(Math.random(),Math.random(),Math.random()),o.castShadow=!0,n.add(o)}function YM(n){const t=[];function e(u,f){const h=new tn,m=new bt(new Wt(1.2,.08,.8),new Jt({color:14865859}));m.position.y=.74,m.castShadow=!0,h.add(m);for(const[M,b]of[[-.5,-.32],[.5,-.32],[-.5,.32],[.5,.32]]){const I=new bt(new Wt(.08,.74,.08),new Jt({color:13153434}));I.position.set(M,.37,b),I.castShadow=!0,h.add(I)}const v=new bt(new Wt(.08,.3,.08),new Jt({color:4473924}));v.position.y=.93,h.add(v);const _=new bt(new Wt(.72,.48,.06),new Jt({color:1710638}));_.position.y=1.28,_.castShadow=!0,h.add(_);const p=new bt(new Wt(.62,.38,.02),new Ie({color:u}));p.position.set(0,1.28,.04),h.add(p);const d=new bt(new Wt(.48,.03,.2),new Jt({color:3355460}));d.position.set(0,.79,.12),h.add(d);const E=new bt(new or(.55,.72,32),new Ie({color:f,transparent:!0,opacity:.5,side:je}));return E.rotation.x=-Math.PI/2,E.position.y=.02,E.name="glowRing",h.add(E),{group:h,glowRing:E}}function i(u){const f=new tn,h=new bt(new ri(.07,.07,1,8),new Jt({color:5592405}));h.position.y=.5,h.castShadow=!0,f.add(h);const m=new bt(new Wt(.55,.4,.35),new Jt({color:u}));m.position.y=1.15,m.castShadow=!0,f.add(m);const v=new bt(new Wt(.06,.28,.06),new Jt({color:16729156}));v.position.set(.3,1.2,0),f.add(v);const _=new bt(new or(.45,.62,32),new Ie({color:u,transparent:!0,opacity:.5,side:je}));return _.rotation.x=-Math.PI/2,_.position.y=.02,_.name="glowRing",f.add(_),{group:f,glowRing:_}}function r(u){const f=new tn,h=new bt(new Wt(.7,.12,.7),new Jt({color:13150574}));h.position.y=.06,h.castShadow=!0,f.add(h);const m=new bt(new ri(.12,.12,.4,8),new Jt({color:13150574}));m.position.y=.32,f.add(m);const v=new bt(new ri(.28,.15,.5,12),new Jt({color:16766720}));v.position.y=.77,v.castShadow=!0,f.add(v);const _=new bt(new os(.15,0),new Ie({color:u}));_.position.y=1.2,f.add(_);const p=new bt(new or(.45,.62,32),new Ie({color:u,transparent:!0,opacity:.5,side:je}));return p.rotation.x=-Math.PI/2,p.position.y=.02,p.name="glowRing",f.add(p),{group:f,glowRing:p}}function s(u,f){const h=new tn;for(const _ of[-.3,.3]){const p=new bt(new ri(.05,.05,1.1,8),new Jt({color:8019e3}));p.position.set(_,.55,0),h.add(p)}const m=new bt(new Wt(.8,.5,.06),new Jt({color:u}));m.position.y=1,m.castShadow=!0,h.add(m);const v=new bt(new or(.45,.62,32),new Ie({color:u,transparent:!0,opacity:.5,side:je}));return v.rotation.x=-Math.PI/2,v.position.y=.02,v.name="glowRing",h.add(v),{group:h,glowRing:v}}const o=[{key:"about",pos:new O(-5,0,-5),label:"About Me",color:16739229,factory:()=>e(4285242879,16739229)},{key:"skills",pos:new O(5,0,-5),label:"Skills",color:10980346,factory:()=>e(10980346,10980346)},{key:"projects",pos:new O(0,0,-7),label:"Projects",color:3462041,factory:()=>r(3462041)},{key:"contact",pos:new O(-5,0,5),label:"Contact",color:16498468,factory:()=>i(16498468)},{key:"testimonials",pos:new O(5,0,5),label:"Clients",color:16347926,factory:()=>s(16347926)}];for(const u of o){const{group:f,glowRing:h}=u.factory();f.position.copy(u.pos),n.add(f),t.push({key:u.key,label:u.label,color:"#"+u.color.toString(16).padStart(6,"0"),position:u.pos,group:f,glowRing:h,radius:2.5,inRange:!1})}let a=0;function l(u,f){a+=u;const h=.35+Math.sin(a*2.5)*.12;for(const m of t){const v=f.x-m.position.x,_=f.z-m.position.z,p=Math.sqrt(v*v+_*_);if(m.inRange=p<m.radius,m.glowRing){m.glowRing.material.opacity=m.inRange?.7:h;const d=m.inRange?1.1+Math.sin(a*4)*.05:1;m.glowRing.scale.set(d,d,d)}m.key==="projects"&&m.group.children.forEach(d=>{d.geometry&&d.geometry.type==="DodecahedronGeometry"&&(d.rotation.y+=u*1.5,d.position.y=1.2+Math.sin(a*2)*.08)})}return t.filter(m=>m.inRange)}function c(u){const f=[];t.forEach(v=>v.group.traverse(_=>{_.isMesh&&f.push(_)}));const h=u.intersectObjects(f,!1);if(!h.length)return null;const m=h[0].object;for(const v of t){let _=!1;if(v.group.traverse(p=>{p===m&&(_=!0)}),_)return v}return null}return{items:t,update:l,getClickedItem:c}}function KM(){const n={},t={x:0,y:0,clicked:!1,justClicked:!1};let e=!1,i=!1;const r=l=>{n[l.code]=!0,l.code==="KeyE"&&(e||(i=!0),e=!0),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(l.code)&&l.preventDefault()},s=l=>{n[l.code]=!1,l.code==="KeyE"&&(e=!1)},o=l=>{t.x=l.clientX/window.innerWidth*2-1,t.y=-(l.clientY/window.innerHeight)*2+1},a=()=>{t.justClicked=!0};return window.addEventListener("keydown",r),window.addEventListener("keyup",s),window.addEventListener("mousemove",o),window.addEventListener("click",a),{keys:n,mouse:t,isMoving(){return n.ArrowUp||n.ArrowDown||n.ArrowLeft||n.ArrowRight||n.KeyW||n.KeyS||n.KeyA||n.KeyD},getMoveVector(){let l=0,c=0;return(n.ArrowUp||n.KeyW)&&(l-=1,c-=1),(n.ArrowDown||n.KeyS)&&(l+=1,c+=1),(n.ArrowLeft||n.KeyA)&&(l-=1,c+=1),(n.ArrowRight||n.KeyD)&&(l+=1,c-=1),{x:l,z:c}},consumeInteract(){return i?(i=!1,!0):!1},consumeClick(){return t.justClicked?(t.justClicked=!1,!0):!1},destroy(){window.removeEventListener("keydown",r),window.removeEventListener("keyup",s),window.removeEventListener("mousemove",o),window.removeEventListener("click",a)}}}function ZM(n,t){const e=new IM({canvas:n,antialias:!0,alpha:!1});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=ch,e.toneMapping=uh,e.toneMappingExposure=1.1;const i=new UM;i.background=new qt(661032),i.fog=new Sl(661032,18,32);const r=window.innerWidth/window.innerHeight,s=14,o=new xl(-s*r/2,s*r/2,s/2,-s/2,.1,100);o.position.set(14,14,14),o.lookAt(0,0,0);const a=new VM(3359846,1.2);i.add(a);const l=new Wu(16772829,1.8);l.position.set(10,18,8),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.near=.5,l.shadow.camera.far=60,l.shadow.camera.left=-20,l.shadow.camera.right=20,l.shadow.camera.top=20,l.shadow.camera.bottom=-20,l.shadow.bias=-.001,i.add(l);const c=new Wu(4491519,.6);c.position.set(-8,6,-10),i.add(c);const u=new Ce,f=600,h=new Float32Array(f*3);for(let L=0;L<f;L++)h[L*3+0]=(Math.random()-.5)*80,h[L*3+1]=8+Math.random()*20,h[L*3+2]=(Math.random()-.5)*80;u.setAttribute("position",new un(h,3));const m=new OM(u,new zh({color:11193599,size:.08,sizeAttenuation:!0}));i.add(m),XM(i);const v=WM();i.add(v.group);const _=YM(i),p=KM(),d=new GM,E=new O(14,14,14),M=new O;let b=null,I=!1,A=null,R=null;const F=()=>{const L=window.innerWidth,D=window.innerHeight,X=L/D;o.left=-s*X/2,o.right=s*X/2,o.updateProjectionMatrix(),e.setSize(L,D)};window.addEventListener("resize",F);let S=performance.now(),x;function z(){x=requestAnimationFrame(z);const L=performance.now(),D=Math.min((L-S)/1e3,.05);if(S=L,I)v.update(D,{x:0,z:0});else{const tt=p.getMoveVector();v.update(D,tt)}const X=_.update(D,v.position),J=b;if(b=X.length>0?X[0]:null,A&&b!==J&&A(b),!I&&b&&p.consumeInteract()&&(I=!0,R&&R(b.key)),!I&&p.consumeClick()){d.setFromCamera(p.mouse,o);const tt=_.getClickedItem(d);tt&&(I=!0,R&&R(tt.key))}m.rotation.y+=D*.01,M.lerp(v.position,1-Math.pow(.01,D)),o.position.set(M.x+E.x,E.y,M.z+E.z),o.lookAt(M),e.render(i,o)}return z(),{setDialogOpen(L){I=L},onNearbyChange(L){A=L},onDialogRequest(L){R=L},destroy(){cancelAnimationFrame(x),window.removeEventListener("resize",F),p.destroy(),e.dispose()}}}const To=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},JM={__name:"GameCanvas",props:{dialogOpen:Boolean},emits:["nearbyChange","interact"],setup(n,{expose:t,emit:e}){const i=e,r=gn(null);let s=null;return mo(()=>{s=ZM(r.value),s.onNearbyChange(o=>i("nearbyChange",o)),s.onDialogRequest(o=>i("interact",o))}),go(()=>{s==null||s.destroy()}),t({setDialogOpen(o){s==null||s.setDialogOpen(o)}}),(o,a)=>(qe(),oi("canvas",{ref_key:"canvasRef",ref:r,class:"game-canvas"},null,512))}},QM=To(JM,[["__scopeId","data-v-62f50af3"]]),tS={intro:{sub:"Frontend Developer · Digital Product Designer",desc:`Willkommen in meinem interaktiven Portfolio.
Laufe herum und entdecke 5 Stationen.`,hintWalk:"Laufen",hintInteract:"Interagieren",hintClick:"Objekte anklicken",btnPlay:"🎮 Los geht's!",backLink:"← Zurück zu miran.at"},hud:{controls:"Steuerung",walkAround:"Herumlaufen",interact:"Interagieren",clickObj:"Objekte anklicken",closeDialog:"Dialog schließen",nameSub:"Frontend-Entwickler · Digital Product Designer",promptHint:"Drücke E oder klicke"},dialog:{close:"✕",continue:"← Weiter erkunden"},items:{about:"Über mich",skills:"Skills",projects:"Projekte",contact:"Kontakt",testimonials:"Referenzen"}},eS={intro:{sub:"Frontend Developer · Digital Product Designer",desc:`Welcome to my interactive portfolio.
Walk around and explore 5 stations.`,hintWalk:"Walk",hintInteract:"Interact",hintClick:"Click objects",btnPlay:"🎮 Let's Play!",backLink:"← Back to miran.at"},hud:{controls:"Controls",walkAround:"Walk around",interact:"Interact",clickObj:"Click objects",closeDialog:"Close dialog",nameSub:"Frontend Dev · Digital Product Designer",promptHint:"Press E or click"},dialog:{close:"✕",continue:"← Continue exploring"},items:{about:"About Me",skills:"Skills",projects:"Projects",contact:"Contact",testimonials:"Clients"}},ju={de:tS,en:eS},Ta=gn("de");function Tl(){function n(e){const i=e.split(".");let r=ju[Ta.value];for(const s of i)if(r=r==null?void 0:r[s],r===void 0)break;return r??e}function t(e){ju[e]&&(Ta.value=e)}return{locale:Ta,t:n,setLocale:t}}const nS={class:"toggle"},iS={class:"controls-body"},rS={class:"control-row"},sS={class:"control-row"},oS={class:"control-row"},aS={class:"control-row"},lS={class:"prompt-icon"},cS={class:"prompt-text"},uS={class:"name-tag"},fS={class:"name-sub"},hS={__name:"HUD",props:{nearbyItem:Object},setup(n){const{t}=Tl(),e=gn(!1),i={about:"🧑‍💻",skills:"⚡",projects:"🚀",contact:"📬",testimonials:"⭐"};function r(s){return i[s]||"💡"}return(s,o)=>(qe(),oi(sn,null,[xt("div",{class:ni(["hud-controls",{hidden:e.value}])},[xt("div",{class:"controls-header",onClick:o[0]||(o[0]=a=>e.value=!e.value)},[o[1]||(o[1]=xt("span",null,"🎮",-1)),hr(" "+de(ne(t)("hud.controls"))+" ",1),xt("span",nS,de(e.value?"▲":"▼"),1)]),xt("div",iS,[xt("div",rS,[o[2]||(o[2]=xt("span",{class:"key-group"},[xt("kbd",null,"↑"),xt("kbd",null,"↓"),xt("kbd",null,"←"),xt("kbd",null,"→")],-1)),xt("span",null,de(ne(t)("hud.walkAround")),1)]),xt("div",sS,[o[3]||(o[3]=xt("span",{class:"key-group"},[xt("kbd",null,"E")],-1)),xt("span",null,de(ne(t)("hud.interact")),1)]),xt("div",oS,[o[4]||(o[4]=xt("span",{class:"key-group"},"🖱️",-1)),xt("span",null,de(ne(t)("hud.clickObj")),1)]),xt("div",aS,[o[5]||(o[5]=xt("span",{class:"key-group"},[xt("kbd",null,"Esc")],-1)),xt("span",null,de(ne(t)("hud.closeDialog")),1)])])],2),Fe(dl,{name:"prompt"},{default:fo(()=>[n.nearbyItem?(qe(),oi("div",{key:0,class:"interact-prompt",style:Jr({"--color":n.nearbyItem.color})},[xt("span",lS,de(r(n.nearbyItem.key)),1),xt("span",cS,[xt("strong",null,de(ne(t)("items."+n.nearbyItem.key)),1),o[6]||(o[6]=xt("br",null,null,-1)),hr(" "+de(ne(t)("hud.promptHint"))+" ",1),o[7]||(o[7]=xt("kbd",null,"E",-1))])],4)):ti("",!0)]),_:1}),xt("div",uS,[o[8]||(o[8]=xt("span",{class:"name-emoji"},"🎮",-1)),o[9]||(o[9]=xt("span",{class:"name-text"},"Miran Arnaut",-1)),xt("span",fS,de(ne(t)("hud.nameSub")),1)])],64))}},dS=To(hS,[["__scopeId","data-v-d78a0cbf"]]),pS={class:"dialog-header"},mS={class:"dialog-icon"},gS={class:"dialog-title"},_S=["innerHTML"],vS={key:0,class:"dialog-footer"},xS=["href"],MS={__name:"DialogModal",props:{modelValue:Boolean,item:Object},emits:["update:modelValue"],setup(n,{emit:t}){const{t:e}=Tl(),i=t;function r(){i("update:modelValue",!1)}function s(o){o.key==="Escape"&&r()}return mo(()=>window.addEventListener("keydown",s)),go(()=>window.removeEventListener("keydown",s)),(o,a)=>(qe(),kr(dl,{name:"dialog"},{default:fo(()=>{var l,c,u,f,h;return[n.modelValue?(qe(),oi("div",{key:0,class:"dialog-overlay",onClick:mm(r,["self"])},[xt("div",{class:"dialog-box",style:Jr({"--accent":((l=n.item)==null?void 0:l.color)||"#6366f1"})},[xt("button",{class:"close-btn",onClick:r,title:"Close (Esc)"},[xt("span",null,de(ne(e)("dialog.close")),1)]),xt("div",pS,[xt("div",mS,de((c=n.item)==null?void 0:c.icon),1),xt("h2",gS,de((u=n.item)==null?void 0:u.title),1)]),xt("div",{class:"dialog-body",innerHTML:(f=n.item)==null?void 0:f.description},null,8,_S),(h=n.item)!=null&&h.cta?(qe(),oi("div",vS,[xt("a",{href:n.item.cta.href,target:"_blank",class:"cta-btn"},de(n.item.cta.label),9,xS),xt("button",{class:"continue-btn",onClick:r},de(ne(e)("dialog.continue")),1)])):ti("",!0)],4)])):ti("",!0)]}),_:1}))}},SS=To(MS,[["__scopeId","data-v-7eca944b"]]);function yS(n){const t=n==="de";return{about:{id:"about",title:t?"Hey, ich bin Miran 👋":"Hey, I'm Miran 👋",icon:"🧑‍💻",color:"#ff6b9d",description:t?`
        <p>Ich bin <strong>Miran Arnaut</strong>, <strong>Frontend-Entwickler & Digital Product Designer</strong> in Karlsruhe.</p>
        <p>Ich entwickle digitale Erlebnisse, die begeistern — durch sauberen Code und mutiges Design, das Besucher in Kunden verwandelt.</p>
        <p>Von der Strategie bis zur pixelgenauen Umsetzung mit <strong>modernen Technologien</strong>, <strong>Performance-First-Denken</strong> und scharfem Blick für Details.</p>
        <ul>
          <li>🎨 UI/UX Design & Branding</li>
          <li>⚡ Hochperformante Web- & App-Entwicklung</li>
          <li>📈 Online-Strategie & Conversion-Optimierung</li>
          <li>🚀 Skalierbare, moderne Tech-Stacks</li>
        </ul>
      `:`
        <p>I'm <strong>Miran Arnaut</strong>, a <strong>Frontend Developer & Digital Product Designer</strong> based in Karlsruhe, Germany.</p>
        <p>I craft digital experiences that captivate — combining clean code with bold design to build products that convert visitors into customers.</p>
        <p>From strategy to pixel-perfect execution with <strong>modern technologies</strong>, <strong>performance-first thinking</strong>, and a sharp eye for detail.</p>
        <ul>
          <li>🎨 UI/UX Design & Branding</li>
          <li>⚡ High-performance Web & App Development</li>
          <li>📈 Online Strategy & Conversion Optimization</li>
          <li>🚀 Scalable, modern tech stacks</li>
        </ul>
      `,cta:t?{label:"Schreib mir ✉️",href:"mailto:arnaut@miran.at"}:{label:"Say Hello ✉️",href:"mailto:arnaut@miran.at"}},skills:{id:"skills",title:t?"Meine Skills & Tools":"My Skills & Tools",icon:"⚡",color:"#a78bfa",description:`
        <div class="skills-grid">
          <div class="skill-group">
            <h4>Frontend</h4>
            <div class="tags">
              <span>Vue.js</span><span>React</span><span>TypeScript</span>
              <span>HTML5</span><span>CSS3 / SCSS</span><span>Three.js</span>
              <span>Tailwind CSS</span><span>Nuxt.js</span>
            </div>
          </div>
          <div class="skill-group">
            <h4>Design</h4>
            <div class="tags">
              <span>Figma</span><span>Adobe XD</span><span>Illustrator</span>
              <span>Photoshop</span><span>Brand Identity</span><span>UI Systems</span>
            </div>
          </div>
          <div class="skill-group">
            <h4>Backend & CMS</h4>
            <div class="tags">
              <span>WordPress</span><span>Webflow</span><span>Node.js</span>
              <span>REST APIs</span><span>WooCommerce</span>
            </div>
          </div>
          <div class="skill-group">
            <h4>${t?"Strategie & Wachstum":"Strategy & Growth"}</h4>
            <div class="tags">
              <span>SEO</span>
              <span>${t?"Conversion-Rate":"Conversion Rate"}</span>
              <span>${t?"Nutzerforschung":"User Research"}</span>
              <span>Analytics</span><span>A/B Testing</span>
            </div>
          </div>
        </div>
      `,cta:t?{label:"Projekte ansehen →",href:"https://miran.at"}:{label:"View Projects →",href:"https://miran.at"}},projects:{id:"projects",title:t?"Ausgewählte Projekte":"Selected Projects",icon:"🚀",color:"#34d399",description:t?`
        <div class="projects-list">
          <div class="project-item">
            <div class="project-header"><span class="project-icon">⚖️</span>
              <div><h4>Kanzlei Schwab</h4><p class="project-sub">Steuerberatungskanzlei 4.0</p></div>
            </div>
            <p>Moderne digitale Präsenz für eine Full-Service-Steuerberatungskanzlei. Fokus auf Vertrauen, Klarheit und Lead-Generierung.</p>
            <div class="tags"><span>Webdesign</span><span>Frontend-Entwicklung</span><span>SEO</span></div>
          </div>
          <div class="project-item">
            <div class="project-header"><span class="project-icon">🎨</span>
              <div><h4>Brandfabrik</h4><p class="project-sub">Grafikdesign-Studio</p></div>
            </div>
            <p>Portfolio-Website für ein Konzeptdesign- & Branding-Studio. Mutige Optik, flüssige Interaktionen.</p>
            <div class="tags"><span>Webdesign</span><span>Frontend-Entwicklung</span><span>SEO</span></div>
          </div>
          <div class="project-item">
            <div class="project-header"><span class="project-icon">✈️</span>
              <div><h4>Kosmopolit</h4><p class="project-sub">Reiseagentur & Webshop</p></div>
            </div>
            <p>10+ Jahre Reiseerfahrung online gebracht. Individueller Webshop für Gruppen- und Individualreisen.</p>
            <div class="tags"><span>Webdesign</span><span>WooCommerce</span><span>SEO</span></div>
          </div>
        </div>
      `:`
        <div class="projects-list">
          <div class="project-item">
            <div class="project-header"><span class="project-icon">⚖️</span>
              <div><h4>Kanzlei Schwab</h4><p class="project-sub">Tax Consulting Agency 4.0</p></div>
            </div>
            <p>Modern digital presence for a full-service tax consulting firm. Focus on trust, clarity and lead generation.</p>
            <div class="tags"><span>Webdesign</span><span>Frontend Dev</span><span>SEO</span></div>
          </div>
          <div class="project-item">
            <div class="project-header"><span class="project-icon">🎨</span>
              <div><h4>Brandfabrik</h4><p class="project-sub">Graphic Design Studio</p></div>
            </div>
            <p>Portfolio website for a concept design & branding studio. Bold visuals, smooth interactions.</p>
            <div class="tags"><span>Webdesign</span><span>Frontend Dev</span><span>SEO</span></div>
          </div>
          <div class="project-item">
            <div class="project-header"><span class="project-icon">✈️</span>
              <div><h4>Kosmopolit</h4><p class="project-sub">Travel Agency & Webshop</p></div>
            </div>
            <p>10+ years of travel expertise brought online. Custom webshop with group & individual travel packages.</p>
            <div class="tags"><span>Webdesign</span><span>WooCommerce</span><span>SEO</span></div>
          </div>
        </div>
      `,cta:t?{label:"Alle Projekte ↗",href:"https://miran.at/projekte/"}:{label:"All Projects ↗",href:"https://miran.at/projekte/"}},contact:{id:"contact",title:t?"Lass uns zusammenarbeiten":"Let's Work Together",icon:"📬",color:"#fbbf24",description:t?`
        <p>Hast du ein Projekt im Kopf? <strong>Lass es uns umsetzen.</strong></p>
        <p>Ich arbeite mit kleinen bis mittleren Unternehmen, die skalierbare digitale Produkte wollen, die <strong>mehr Kunden konvertieren</strong>.</p>
        <div class="contact-links">
          <a href="mailto:arnaut@miran.at" class="contact-btn email"><span>✉️</span> arnaut@miran.at</a>
          <a href="https://www.linkedin.com/in/miran-arnaut/" target="_blank" class="contact-btn linkedin"><span>💼</span> LinkedIn</a>
          <a href="https://www.xing.com/profile/Miran_Arnaut/cv" target="_blank" class="contact-btn xing"><span>🔗</span> Xing</a>
          <a href="https://miran.at" target="_blank" class="contact-btn website"><span>🌐</span> miran.at</a>
        </div>
        <blockquote>„Eine schlecht gestaltete Webseite kann viel Geld kosten — das ändern wir."</blockquote>
      `:`
        <p>Have a project in mind? <strong>Let's make it happen.</strong></p>
        <p>I work with small to mid-size companies that want scalable digital products focused on <strong>converting more customers</strong>.</p>
        <div class="contact-links">
          <a href="mailto:arnaut@miran.at" class="contact-btn email"><span>✉️</span> arnaut@miran.at</a>
          <a href="https://www.linkedin.com/in/miran-arnaut/" target="_blank" class="contact-btn linkedin"><span>💼</span> LinkedIn</a>
          <a href="https://www.xing.com/profile/Miran_Arnaut/cv" target="_blank" class="contact-btn xing"><span>🔗</span> Xing</a>
          <a href="https://miran.at" target="_blank" class="contact-btn website"><span>🌐</span> miran.at</a>
        </div>
        <blockquote>"A poorly designed website can cost you a lot — let's fix that."</blockquote>
      `,cta:t?{label:"E-Mail senden ✉️",href:"mailto:arnaut@miran.at"}:{label:"Send Email ✉️",href:"mailto:arnaut@miran.at"}},testimonials:{id:"testimonials",title:t?"Was Kunden sagen":"What Clients Say",icon:"⭐",color:"#f97316",description:t?`
        <div class="testimonials-list">
          <div class="testimonial">
            <p>„Ich mag unseren Webshop jeden Tag mehr, weil er mein Leben viel einfacher macht. Miran steht zu 100&nbsp;% hinter seinem Produkt."</p>
            <footer>— <strong>Sanjin Selimovic</strong>, Geschäftsführer, Kontax</footer>
          </div>
          <div class="testimonial">
            <p>„Ich bin absolut begeistert von der Arbeit, die Miran für meine Homepage geleistet hat. Er hat meine Vision perfekt verstanden."</p>
            <footer>— <strong>Frank Koch</strong>, Geschäftsleitung, mehrkonzept GmbH</footer>
          </div>
          <div class="testimonial">
            <p>„Er arbeitet akribisch und nimmt sich viel Zeit für Details. Ein sympathischer junger Mann, der Ihre Website genau nach Ihren Wünschen konzipiert."</p>
            <footer>— <strong>Martin Schwab</strong>, Steuerberater, Kanzlei Schwab</footer>
          </div>
        </div>
      `:`
        <div class="testimonials-list">
          <div class="testimonial">
            <p>"I like our webshop more every day because it makes my life much easier. Miran stands 100% behind his product."</p>
            <footer>— <strong>Sanjin Selimovic</strong>, CEO, Kontax</footer>
          </div>
          <div class="testimonial">
            <p>"I am absolutely thrilled with the work Miran did for my business website. He perfectly understood my vision."</p>
            <footer>— <strong>Frank Koch</strong>, Managing Director, mehrkonzept GmbH</footer>
          </div>
          <div class="testimonial">
            <p>"He worked meticulously and paid great attention to detail. A likeable young man who designs your website exactly as you wish."</p>
            <footer>— <strong>Martin Schwab</strong>, Tax Consultant, Kanzlei Schwab</footer>
          </div>
        </div>
      `,cta:t?{label:"Jetzt anfragen →",href:"mailto:arnaut@miran.at"}:{label:"Hire Me →",href:"mailto:arnaut@miran.at"}}}}const ES={class:"app"},bS={key:0,class:"intro-screen"},TS={class:"intro-content"},wS={class:"lang-switcher intro-lang"},AS={class:"intro-sub"},RS=["innerHTML"],CS={class:"intro-hints"},PS={href:"https://miran.at",target:"_blank",class:"intro-link"},LS={key:0,class:"lang-switcher game-lang"},DS={__name:"App",setup(n){const{locale:t,t:e,setLocale:i}=Tl(),r=gn(!0),s=gn(!1),o=gn(!1),a=gn(null),l=gn(null),c=gn(null),u=gn(null),f=sh(()=>yS(t.value));ks(t,()=>{u.value&&(l.value=f.value[u.value])});function h(){s.value=!0,setTimeout(()=>{r.value=!1},200)}function m(p){a.value=p}function v(p){u.value=p,l.value=f.value[p],o.value=!0,Sf(()=>{var d;(d=c.value)==null||d.setDialogOpen(!0)})}function _(p){var d;p||(o.value=!1,u.value=null,(d=c.value)==null||d.setDialogOpen(!1))}return(p,d)=>(qe(),oi("div",ES,[Fe(dl,{name:"intro"},{default:fo(()=>[r.value?(qe(),oi("div",bS,[xt("div",TS,[xt("div",wS,[xt("button",{class:ni({active:ne(t)==="de"}),onClick:d[0]||(d[0]=E=>ne(i)("de"))},"🇩🇪 DE",2),xt("button",{class:ni({active:ne(t)==="en"}),onClick:d[1]||(d[1]=E=>ne(i)("en"))},"🇬🇧 EN",2)]),d[7]||(d[7]=xt("div",{class:"intro-avatar"},"🧑‍💻",-1)),d[8]||(d[8]=xt("h1",{class:"intro-title"},[hr(" Miran "),xt("span",{class:"accent"},"Arnaut")],-1)),xt("p",AS,de(ne(e)("intro.sub")),1),xt("p",{class:"intro-desc",innerHTML:ne(e)("intro.desc").replace("\\n","<br/>")},null,8,RS),xt("div",CS,[xt("span",null,[d[5]||(d[5]=xt("kbd",null,"↑↓←→",-1)),hr(" "+de(ne(e)("intro.hintWalk")),1)]),xt("span",null,[d[6]||(d[6]=xt("kbd",null,"E",-1)),hr(" "+de(ne(e)("intro.hintInteract")),1)]),xt("span",null,"🖱️ "+de(ne(e)("intro.hintClick")),1)]),xt("button",{class:"intro-btn",onClick:h},de(ne(e)("intro.btnPlay")),1),xt("a",PS,de(ne(e)("intro.backLink")),1)])])):ti("",!0)]),_:1}),s.value&&!o.value?(qe(),oi("div",LS,[xt("button",{class:ni({active:ne(t)==="de"}),onClick:d[2]||(d[2]=E=>ne(i)("de"))},"🇩🇪",2),xt("button",{class:ni({active:ne(t)==="en"}),onClick:d[3]||(d[3]=E=>ne(i)("en"))},"🇬🇧",2)])):ti("",!0),s.value?(qe(),kr(QM,{key:1,ref_key:"gameCanvas",ref:c,dialogOpen:o.value,onNearbyChange:m,onInteract:v},null,8,["dialogOpen"])):ti("",!0),s.value?(qe(),kr(dS,{key:2,nearbyItem:a.value},null,8,["nearbyItem"])):ti("",!0),s.value?(qe(),kr(SS,{key:3,modelValue:o.value,"onUpdate:modelValue":[d[4]||(d[4]=E=>o.value=E),_],item:l.value},null,8,["modelValue","item"])):ti("",!0)]))}},IS=To(DS,[["__scopeId","data-v-706a98da"]]);vm(IS).mount("#app");
