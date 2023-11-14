(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function lo(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ie={},Tn=[],Ze=()=>{},Af=()=>!1,Pf=/^on[^a-z]/,Fs=t=>Pf.test(t),uo=t=>t.startsWith("onUpdate:"),Te=Object.assign,fo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sf=Object.prototype.hasOwnProperty,G=(t,e)=>Sf.call(t,e),F=Array.isArray,Rn=t=>$s(t)==="[object Map]",Gc=t=>$s(t)==="[object Set]",j=t=>typeof t=="function",_e=t=>typeof t=="string",Us=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Jc=t=>(ae(t)||j(t))&&j(t.then)&&j(t.catch),Yc=Object.prototype.toString,$s=t=>Yc.call(t),Cf=t=>$s(t).slice(8,-1),Qc=t=>$s(t)==="[object Object]",ho=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ns=lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Of=/-(\w)/g,pt=Bs(t=>t.replace(Of,(e,n)=>n?n.toUpperCase():"")),kf=/\B([A-Z])/g,$n=Bs(t=>t.replace(kf,"-$1").toLowerCase()),js=Bs(t=>t.charAt(0).toUpperCase()+t.slice(1)),fi=Bs(t=>t?`on${js(t)}`:""),sn=(t,e)=>!Object.is(t,e),rs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},gs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ki=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let aa;const Ni=()=>aa||(aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function po(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=_e(r)?Vf(r):po(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(_e(t)||ae(t))return t}const Nf=/;(?![^(]*\))/g,Df=/:([^]+)/,xf=/\/\*[^]*?\*\//g;function Vf(t){const e={};return t.replace(xf,"").split(Nf).forEach(n=>{if(n){const r=n.split(Df);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mo(t){let e="";if(_e(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=mo(t[n]);r&&(e+=r+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Mf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lf=lo(Mf);function Xc(t){return!!t||t===""}const Ff=t=>_e(t)?t:t==null?"":F(t)||ae(t)&&(t.toString===Yc||!j(t.toString))?JSON.stringify(t,Zc,2):String(t),Zc=(t,e)=>e&&e.__v_isRef?Zc(t,e.value):Rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Gc(e)?{[`Set(${e.size})`]:[...e.values()]}:ae(e)&&!F(e)&&!Qc(e)?String(e):e;let $e;class el{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!e&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$e;try{return $e=this,e()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function tl(t){return new el(t)}function Uf(t,e=$e){e&&e.active&&e.effects.push(t)}function nl(){return $e}function $f(t){$e&&$e.cleanups.push(t)}const go=t=>{const e=new Set(t);return e.w=0,e.n=0,e},rl=t=>(t.w&qt)>0,sl=t=>(t.n&qt)>0,Bf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qt},jf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];rl(s)&&!sl(s)?s.delete(t):e[n++]=s,s.w&=~qt,s.n&=~qt}e.length=n}},_s=new WeakMap;let Xn=0,qt=1;const Di=30;let Qe;const en=Symbol(""),xi=Symbol("");class _o{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Uf(this,r)}run(){if(!this.active)return this.fn();let e=Qe,n=Ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qe,Qe=this,Ft=!0,qt=1<<++Xn,Xn<=Di?Bf(this):ca(this),this.fn()}finally{Xn<=Di&&jf(this),qt=1<<--Xn,Qe=this.parent,Ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qe===this?this.deferStop=!0:this.active&&(ca(this),this.onStop&&this.onStop(),this.active=!1)}}function ca(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ft=!0;const il=[];function Bn(){il.push(Ft),Ft=!1}function jn(){const t=il.pop();Ft=t===void 0?!0:t}function Le(t,e,n){if(Ft&&Qe){let r=_s.get(t);r||_s.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=go()),ol(s)}}function ol(t,e){let n=!1;Xn<=Di?sl(t)||(t.n|=qt,n=!rl(t)):n=!t.has(Qe),n&&(t.add(Qe),Qe.deps.push(t))}function Et(t,e,n,r,s,i){const o=_s.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Us(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?ho(n)&&a.push(o.get("length")):(a.push(o.get(en)),Rn(t)&&a.push(o.get(xi)));break;case"delete":F(t)||(a.push(o.get(en)),Rn(t)&&a.push(o.get(xi)));break;case"set":Rn(t)&&a.push(o.get(en));break}if(a.length===1)a[0]&&Vi(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Vi(go(c))}}function Vi(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&la(r);for(const r of n)r.computed||la(r)}function la(t,e){(t!==Qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Hf(t,e){var n;return(n=_s.get(t))==null?void 0:n.get(e)}const qf=lo("__proto__,__v_isRef,__isVue"),al=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Us)),ua=zf();function zf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Le(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bn();const r=J(this)[e].apply(this,n);return jn(),r}}),t}function Wf(t){const e=J(this);return Le(e,"has",t),e.hasOwnProperty(t)}class cl{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?id:dl:i?fl:ul).get(e))return e;const o=F(e);if(!s){if(o&&G(ua,n))return Reflect.get(ua,n,r);if(n==="hasOwnProperty")return Wf}const a=Reflect.get(e,n,r);return(Us(n)?al.has(n):qf(n))||(s||Le(e,"get",n),i)?a:fe(a)?o&&ho(n)?a:a.value:ae(a)?s?pl(a):kr(a):a}}class ll extends cl{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(Cn(i)&&fe(i)&&!fe(r))return!1;if(!this._shallow&&(!ys(r)&&!Cn(r)&&(i=J(i),r=J(r)),!F(e)&&fe(i)&&!fe(r)))return i.value=r,!0;const o=F(e)&&ho(n)?Number(n)<e.length:G(e,n),a=Reflect.set(e,n,r,s);return e===J(s)&&(o?sn(r,i)&&Et(e,"set",n,r):Et(e,"add",n,r)),a}deleteProperty(e,n){const r=G(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Et(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Us(n)||!al.has(n))&&Le(e,"has",n),r}ownKeys(e){return Le(e,"iterate",F(e)?"length":en),Reflect.ownKeys(e)}}class Kf extends cl{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gf=new ll,Jf=new Kf,Yf=new ll(!0),yo=t=>t,Hs=t=>Reflect.getPrototypeOf(t);function zr(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);n||(sn(e,i)&&Le(s,"get",e),Le(s,"get",i));const{has:o}=Hs(s),a=r?yo:n?wo:pr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Wr(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return e||(sn(t,s)&&Le(r,"has",t),Le(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Kr(t,e=!1){return t=t.__v_raw,!e&&Le(J(t),"iterate",en),Reflect.get(t,"size",t)}function fa(t){t=J(t);const e=J(this);return Hs(e).has.call(e,t)||(e.add(t),Et(e,"add",t,t)),this}function da(t,e){e=J(e);const n=J(this),{has:r,get:s}=Hs(n);let i=r.call(n,t);i||(t=J(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?sn(e,o)&&Et(n,"set",t,e):Et(n,"add",t,e),this}function ha(t){const e=J(this),{has:n,get:r}=Hs(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Et(e,"delete",t,void 0),i}function pa(){const t=J(this),e=t.size!==0,n=t.clear();return e&&Et(t,"clear",void 0,void 0),n}function Gr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=e?yo:t?wo:pr;return!t&&Le(a,"iterate",en),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Jr(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=Rn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?yo:e?wo:pr;return!e&&Le(i,"iterate",c?xi:en),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function St(t){return function(...e){return t==="delete"?!1:this}}function Qf(){const t={get(i){return zr(this,i)},get size(){return Kr(this)},has:Wr,add:fa,set:da,delete:ha,clear:pa,forEach:Gr(!1,!1)},e={get(i){return zr(this,i,!1,!0)},get size(){return Kr(this)},has:Wr,add:fa,set:da,delete:ha,clear:pa,forEach:Gr(!1,!0)},n={get(i){return zr(this,i,!0)},get size(){return Kr(this,!0)},has(i){return Wr.call(this,i,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Gr(!0,!1)},r={get(i){return zr(this,i,!0,!0)},get size(){return Kr(this,!0)},has(i){return Wr.call(this,i,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Jr(i,!1,!1),n[i]=Jr(i,!0,!1),e[i]=Jr(i,!1,!0),r[i]=Jr(i,!0,!0)}),[t,n,e,r]}const[Xf,Zf,ed,td]=Qf();function vo(t,e){const n=e?t?td:ed:t?Zf:Xf;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const nd={get:vo(!1,!1)},rd={get:vo(!1,!0)},sd={get:vo(!0,!1)},ul=new WeakMap,fl=new WeakMap,dl=new WeakMap,id=new WeakMap;function od(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ad(t){return t.__v_skip||!Object.isExtensible(t)?0:od(Cf(t))}function kr(t){return Cn(t)?t:Eo(t,!1,Gf,nd,ul)}function hl(t){return Eo(t,!1,Yf,rd,fl)}function pl(t){return Eo(t,!0,Jf,sd,dl)}function Eo(t,e,n,r,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ad(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ut(t){return Cn(t)?Ut(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function ys(t){return!!(t&&t.__v_isShallow)}function ml(t){return Ut(t)||Cn(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function qs(t){return gs(t,"__v_skip",!0),t}const pr=t=>ae(t)?kr(t):t,wo=t=>ae(t)?pl(t):t;function gl(t){Ft&&Qe&&(t=J(t),ol(t.dep||(t.dep=go())))}function _l(t,e){t=J(t);const n=t.dep;n&&Vi(n)}function fe(t){return!!(t&&t.__v_isRef===!0)}function It(t){return yl(t,!1)}function cd(t){return yl(t,!0)}function yl(t,e){return fe(t)?t:new ld(t,e)}class ld{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:pr(e)}get value(){return gl(this),this._value}set value(e){const n=this.__v_isShallow||ys(e)||Cn(e);e=n?e:J(e),sn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pr(e),_l(this))}}function ue(t){return fe(t)?t.value:t}const ud={get:(t,e,n)=>ue(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function vl(t){return Ut(t)?t:new Proxy(t,ud)}function fd(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=hd(t,n);return e}class dd{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Hf(J(this._object),this._key)}}function hd(t,e,n){const r=t[e];return fe(r)?r:new dd(t,e,n)}class pd{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _o(e,()=>{this._dirty||(this._dirty=!0,_l(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=J(this);return gl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function md(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=Ze):(r=t.get,s=t.set),new pd(r,s,i||!s,n)}function $t(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){zs(i,e,n)}return s}function et(t,e,n,r){if(j(t)){const i=$t(t,e,n,r);return i&&Jc(i)&&i.catch(o=>{zs(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(et(t[i],e,n,r));return s}function zs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){$t(c,null,10,[t,o,a]);return}}gd(t,n,s,r)}function gd(t,e,n,r=!0){console.error(t)}let mr=!1,Mi=!1;const Se=[];let ut=0;const An=[];let _t=null,Qt=0;const El=Promise.resolve();let Io=null;function bo(t){const e=Io||El;return t?e.then(this?t.bind(this):t):e}function _d(t){let e=ut+1,n=Se.length;for(;e<n;){const r=e+n>>>1,s=Se[r],i=gr(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function To(t){(!Se.length||!Se.includes(t,mr&&t.allowRecurse?ut+1:ut))&&(t.id==null?Se.push(t):Se.splice(_d(t.id),0,t),wl())}function wl(){!mr&&!Mi&&(Mi=!0,Io=El.then(bl))}function yd(t){const e=Se.indexOf(t);e>ut&&Se.splice(e,1)}function vd(t){F(t)?An.push(...t):(!_t||!_t.includes(t,t.allowRecurse?Qt+1:Qt))&&An.push(t),wl()}function ma(t,e=mr?ut+1:0){for(;e<Se.length;e++){const n=Se[e];n&&n.pre&&(Se.splice(e,1),e--,n())}}function Il(t){if(An.length){const e=[...new Set(An)];if(An.length=0,_t){_t.push(...e);return}for(_t=e,_t.sort((n,r)=>gr(n)-gr(r)),Qt=0;Qt<_t.length;Qt++)_t[Qt]();_t=null,Qt=0}}const gr=t=>t.id==null?1/0:t.id,Ed=(t,e)=>{const n=gr(t)-gr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bl(t){Mi=!1,mr=!0,Se.sort(Ed);const e=Ze;try{for(ut=0;ut<Se.length;ut++){const n=Se[ut];n&&n.active!==!1&&$t(n,null,14)}}finally{ut=0,Se.length=0,Il(),mr=!1,Io=null,(Se.length||An.length)&&bl()}}function wd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||ie;p&&(s=n.map(g=>_e(g)?g.trim():g)),h&&(s=n.map(ki))}let a,c=r[a=fi(e)]||r[a=fi(pt(e))];!c&&i&&(c=r[a=fi($n(e))]),c&&et(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,et(l,t,6,s)}}function Tl(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=Tl(l,e,!0);u&&(a=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ae(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):Te(o,i),ae(t)&&r.set(t,o),o)}function Ws(t,e){return!t||!Fs(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,$n(e))||G(t,e))}let je=null,Rl=null;function vs(t){const e=je;return je=t,Rl=t&&t.type.__scopeId||null,e}function ss(t,e=je,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Aa(-1);const i=vs(e);let o;try{o=t(...s)}finally{vs(i),r._d&&Aa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function di(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:g,ctx:b,inheritAttrs:S}=t;let M,O;const N=vs(t);try{if(n.shapeFlag&4){const D=s||r;M=ct(u.call(D,D,h,i,g,p,b)),O=c}else{const D=e;M=ct(D.length>1?D(i,{attrs:c,slots:a,emit:l}):D(i,null)),O=e.props?c:Id(c)}}catch(D){sr.length=0,zs(D,t,1),M=Me(on)}let H=M;if(O&&S!==!1){const D=Object.keys(O),{shapeFlag:Q}=H;D.length&&Q&7&&(o&&D.some(uo)&&(O=bd(O,o)),H=kn(H,O))}return n.dirs&&(H=kn(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),M=H,vs(N),M}const Id=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fs(n))&&((e||(e={}))[n]=t[n]);return e},bd=(t,e)=>{const n={};for(const r in t)(!uo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Td(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ga(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Ws(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ga(r,o,l):!0:!!o;return!1}function ga(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ws(n,i))return!0}return!1}function Rd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Al="components";function Ad(t,e){return Sd(Al,t,!0,e)||t}const Pd=Symbol.for("v-ndc");function Sd(t,e,n=!0,r=!1){const s=je||ve;if(s){const i=s.type;if(t===Al){const a=Eh(i,!1);if(a&&(a===e||a===pt(e)||a===js(pt(e))))return i}const o=_a(s[t]||i[t],e)||_a(s.appContext[t],e);return!o&&r?i:o}}function _a(t,e){return t&&(t[e]||t[pt(e)]||t[js(pt(e))])}const Cd=t=>t.__isSuspense;function Od(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):vd(t)}const Yr={};function nr(t,e,n){return Pl(t,e,n)}function Pl(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ie){var a;const c=nl()===((a=ve)==null?void 0:a.scope)?ve:null;let l,u=!1,h=!1;if(fe(t)?(l=()=>t.value,u=ys(t)):Ut(t)?(l=()=>t,r=!0):F(t)?(h=!0,u=t.some(D=>Ut(D)||ys(D)),l=()=>t.map(D=>{if(fe(D))return D.value;if(Ut(D))return Zt(D);if(j(D))return $t(D,c,2)})):j(t)?e?l=()=>$t(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),et(t,c,3,[g])}:l=Ze,e&&r){const D=l;l=()=>Zt(D())}let p,g=D=>{p=N.onStop=()=>{$t(D,c,4)}},b;if(vr)if(g=Ze,e?n&&et(e,c,3,[l(),h?[]:void 0,g]):l(),s==="sync"){const D=bh();b=D.__watcherHandles||(D.__watcherHandles=[])}else return Ze;let S=h?new Array(t.length).fill(Yr):Yr;const M=()=>{if(N.active)if(e){const D=N.run();(r||u||(h?D.some((Q,de)=>sn(Q,S[de])):sn(D,S)))&&(p&&p(),et(e,c,3,[D,S===Yr?void 0:h&&S[0]===Yr?[]:S,g]),S=D)}else N.run()};M.allowRecurse=!!e;let O;s==="sync"?O=M:s==="post"?O=()=>De(M,c&&c.suspense):(M.pre=!0,c&&(M.id=c.uid),O=()=>To(M));const N=new _o(l,O);e?n?M():S=N.run():s==="post"?De(N.run.bind(N),c&&c.suspense):N.run();const H=()=>{N.stop(),c&&c.scope&&fo(c.scope.effects,N)};return b&&b.push(H),H}function kd(t,e,n){const r=this.proxy,s=_e(t)?t.includes(".")?Sl(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=ve;Nn(this);const a=Pl(s,i.bind(r),n);return o?Nn(o):tn(),a}function Sl(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Zt(t,e){if(!ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),fe(t))Zt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Zt(t[n],e);else if(Gc(t)||Rn(t))t.forEach(n=>{Zt(n,e)});else if(Qc(t))for(const n in t)Zt(t[n],e);return t}function On(t,e){const n=je;if(n===null)return t;const r=Ys(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ie]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&Zt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Gt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Bn(),et(c,n,8,[t.el,a,t,e]),jn())}}/*! #__NO_SIDE_EFFECTS__ */function Cl(t,e){return j(t)?(()=>Te({name:t.name},e,{setup:t}))():t}const is=t=>!!t.type.__asyncLoader,Ol=t=>t.type.__isKeepAlive;function Nd(t,e){kl(t,"a",e)}function Dd(t,e){kl(t,"da",e)}function kl(t,e,n=ve){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ks(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ol(s.parent.vnode)&&xd(r,e,n,s),s=s.parent}}function xd(t,e,n,r){const s=Ks(e,t,r,!0);Dl(()=>{fo(r[e],s)},n)}function Ks(t,e,n=ve,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bn(),Nn(n);const a=et(e,n,t,o);return tn(),jn(),a});return r?s.unshift(i):s.push(i),i}}const Rt=t=>(e,n=ve)=>(!vr||t==="sp")&&Ks(t,(...r)=>e(...r),n),Vd=Rt("bm"),Nl=Rt("m"),Md=Rt("bu"),Ld=Rt("u"),Fd=Rt("bum"),Dl=Rt("um"),Ud=Rt("sp"),$d=Rt("rtg"),Bd=Rt("rtc");function jd(t,e=ve){Ks("ec",t,e)}function Hd(t,e,n,r){let s;const i=n&&n[r];if(F(t)||_e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Li=t=>t?ql(t)?Ys(t)||t.proxy:Li(t.parent):null,rr=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Li(t.parent),$root:t=>Li(t.root),$emit:t=>t.emit,$options:t=>Ro(t),$forceUpdate:t=>t.f||(t.f=()=>To(t.update)),$nextTick:t=>t.n||(t.n=bo.bind(t.proxy)),$watch:t=>kd.bind(t)}),hi=(t,e)=>t!==ie&&!t.__isScriptSetup&&G(t,e),qd={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(hi(r,e))return o[e]=1,r[e];if(s!==ie&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==ie&&G(n,e))return o[e]=4,n[e];Fi&&(o[e]=0)}}const u=rr[e];let h,p;if(u)return e==="$attrs"&&Le(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ie&&G(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return hi(s,e)?(s[e]=n,!0):r!==ie&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&G(t,o)||hi(e,o)||(a=i[0])&&G(a,o)||G(r,o)||G(rr,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ya(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fi=!0;function zd(t){const e=Ro(t),n=t.proxy,r=t.ctx;Fi=!1,e.beforeCreate&&va(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:g,updated:b,activated:S,deactivated:M,beforeDestroy:O,beforeUnmount:N,destroyed:H,unmounted:D,render:Q,renderTracked:de,renderTriggered:pe,errorCaptured:W,serverPrefetch:q,expose:ce,inheritAttrs:Re,components:Fe,directives:ze,filters:Kt}=e;if(l&&Wd(l,r,null),o)for(const re in o){const X=o[re];j(X)&&(r[re]=X.bind(n))}if(s){const re=s.call(n,n);ae(re)&&(t.data=kr(re))}if(Fi=!0,i)for(const re in i){const X=i[re],mt=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):Ze,Pt=!j(X)&&j(X.set)?X.set.bind(n):Ze,st=Ge({get:mt,set:Pt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ne=>st.value=Ne})}if(a)for(const re in a)xl(a[re],r,n,re);if(c){const re=j(c)?c.call(n):c;Reflect.ownKeys(re).forEach(X=>{os(X,re[X])})}u&&va(u,t,"c");function Y(re,X){F(X)?X.forEach(mt=>re(mt.bind(n))):X&&re(X.bind(n))}if(Y(Vd,h),Y(Nl,p),Y(Md,g),Y(Ld,b),Y(Nd,S),Y(Dd,M),Y(jd,W),Y(Bd,de),Y($d,pe),Y(Fd,N),Y(Dl,D),Y(Ud,q),F(ce))if(ce.length){const re=t.exposed||(t.exposed={});ce.forEach(X=>{Object.defineProperty(re,X,{get:()=>n[X],set:mt=>n[X]=mt})})}else t.exposed||(t.exposed={});Q&&t.render===Ze&&(t.render=Q),Re!=null&&(t.inheritAttrs=Re),Fe&&(t.components=Fe),ze&&(t.directives=ze)}function Wd(t,e,n=Ze){F(t)&&(t=Ui(t));for(const r in t){const s=t[r];let i;ae(s)?"default"in s?i=Je(s.from||r,s.default,!0):i=Je(s.from||r):i=Je(s),fe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function va(t,e,n){et(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xl(t,e,n,r){const s=r.includes(".")?Sl(n,r):()=>n[r];if(_e(t)){const i=e[t];j(i)&&nr(s,i)}else if(j(t))nr(s,t.bind(n));else if(ae(t))if(F(t))t.forEach(i=>xl(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&nr(s,i,t)}}function Ro(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Es(c,l,o,!0)),Es(c,e,o)),ae(e)&&i.set(e,c),c}function Es(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Es(t,i,n,!0),s&&s.forEach(o=>Es(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Kd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Kd={data:Ea,props:wa,emits:wa,methods:Zn,computed:Zn,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Zn,directives:Zn,watch:Jd,provide:Ea,inject:Gd};function Ea(t,e){return e?t?function(){return Te(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Gd(t,e){return Zn(Ui(t),Ui(e))}function Ui(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function Zn(t,e){return t?Te(Object.create(null),t,e):e}function wa(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:Te(Object.create(null),ya(t),ya(e??{})):e}function Jd(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const r in e)n[r]=Oe(t[r],e[r]);return n}function Vl(){return{app:null,config:{isNativeTag:Af,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yd=0;function Qd(t,e){return function(r,s=null){j(r)||(r=Te({},r)),s!=null&&!ae(s)&&(s=null);const i=Vl(),o=new WeakSet;let a=!1;const c=i.app={_uid:Yd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Th,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...u)):j(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const p=Me(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Ys(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){_r=c;try{return l()}finally{_r=null}}};return c}}let _r=null;function os(t,e){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[t]=e}}function Je(t,e,n=!1){const r=ve||je;if(r||_r){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:_r._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function Xd(){return!!(ve||je||_r)}function Zd(t,e,n,r=!1){const s={},i={};gs(i,Js,1),t.propsDefaults=Object.create(null),Ml(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function eh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Ws(t.emitsOptions,p))continue;const g=e[p];if(c)if(G(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const b=pt(p);s[b]=$i(c,a,b,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Ml(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!G(e,h)&&((u=$n(h))===h||!G(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=$i(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!G(e,h))&&(delete i[h],l=!0)}l&&Et(t,"set","$attrs")}function Ml(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ns(c))continue;const l=e[c];let u;s&&G(s,u=pt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ws(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=$i(s,c,h,l[h],t,!G(l,h))}}return o}function $i(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Nn(s),r=l[n]=c.call(null,e),tn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===$n(n))&&(r=!0))}return r}function Ll(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=h=>{c=!0;const[p,g]=Ll(h,e,!0);Te(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ae(t)&&r.set(t,Tn),Tn;if(F(i))for(let u=0;u<i.length;u++){const h=pt(i[u]);Ia(h)&&(o[h]=ie)}else if(i)for(const u in i){const h=pt(u);if(Ia(h)){const p=i[u],g=o[h]=F(p)||j(p)?{type:p}:Te({},p);if(g){const b=Ra(Boolean,g.type),S=Ra(String,g.type);g[0]=b>-1,g[1]=S<0||b<S,(b>-1||G(g,"default"))&&a.push(h)}}}const l=[o,a];return ae(t)&&r.set(t,l),l}function Ia(t){return t[0]!=="$"}function ba(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ta(t,e){return ba(t)===ba(e)}function Ra(t,e){return F(e)?e.findIndex(n=>Ta(n,t)):j(e)&&Ta(e,t)?0:-1}const Fl=t=>t[0]==="_"||t==="$stable",Ao=t=>F(t)?t.map(ct):[ct(t)],th=(t,e,n)=>{if(e._n)return e;const r=ss((...s)=>Ao(e(...s)),n);return r._c=!1,r},Ul=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fl(s))continue;const i=t[s];if(j(i))e[s]=th(s,i,r);else if(i!=null){const o=Ao(i);e[s]=()=>o}}},$l=(t,e)=>{const n=Ao(e);t.slots.default=()=>n},nh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),gs(e,"_",n)):Ul(e,t.slots={})}else t.slots={},e&&$l(t,e);gs(t.slots,Js,1)},rh=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Te(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ul(e,s)),o=e}else e&&($l(t,e),o={default:1});if(i)for(const a in s)!Fl(a)&&o[a]==null&&delete s[a]};function Bi(t,e,n,r,s=!1){if(F(t)){t.forEach((p,g)=>Bi(p,e&&(F(e)?e[g]:e),n,r,s));return}if(is(r)&&!s)return;const i=r.shapeFlag&4?Ys(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(_e(l)?(u[l]=null,G(h,l)&&(h[l]=null)):fe(l)&&(l.value=null)),j(c))$t(c,a,12,[o,u]);else{const p=_e(c),g=fe(c);if(p||g){const b=()=>{if(t.f){const S=p?G(h,c)?h[c]:u[c]:c.value;s?F(S)&&fo(S,i):F(S)?S.includes(i)||S.push(i):p?(u[c]=[i],G(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,G(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,De(b,n)):b()}}}const De=Od;function sh(t){return ih(t)}function ih(t,e){const n=Ni();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:g=Ze,insertStaticContent:b}=t,S=(f,d,m,_=null,v=null,E=null,A=!1,I=null,T=!!d.dynamicChildren)=>{if(f===d)return;f&&!Jn(f,d)&&(_=y(f),Ne(f,v,E,!0),f=null),d.patchFlag===-2&&(T=!1,d.dynamicChildren=null);const{type:w,ref:x,shapeFlag:C}=d;switch(w){case Gs:M(f,d,m,_);break;case on:O(f,d,m,_);break;case pi:f==null&&N(d,m,_,A);break;case at:Fe(f,d,m,_,v,E,A,I,T);break;default:C&1?Q(f,d,m,_,v,E,A,I,T):C&6?ze(f,d,m,_,v,E,A,I,T):(C&64||C&128)&&w.process(f,d,m,_,v,E,A,I,T,R)}x!=null&&v&&Bi(x,f&&f.ref,E,d||f,!d)},M=(f,d,m,_)=>{if(f==null)r(d.el=a(d.children),m,_);else{const v=d.el=f.el;d.children!==f.children&&l(v,d.children)}},O=(f,d,m,_)=>{f==null?r(d.el=c(d.children||""),m,_):d.el=f.el},N=(f,d,m,_)=>{[f.el,f.anchor]=b(f.children,d,m,_,f.el,f.anchor)},H=({el:f,anchor:d},m,_)=>{let v;for(;f&&f!==d;)v=p(f),r(f,m,_),f=v;r(d,m,_)},D=({el:f,anchor:d})=>{let m;for(;f&&f!==d;)m=p(f),s(f),f=m;s(d)},Q=(f,d,m,_,v,E,A,I,T)=>{A=A||d.type==="svg",f==null?de(d,m,_,v,E,A,I,T):q(f,d,v,E,A,I,T)},de=(f,d,m,_,v,E,A,I)=>{let T,w;const{type:x,props:C,shapeFlag:V,transition:$,dirs:z}=f;if(T=f.el=o(f.type,E,C&&C.is,C),V&8?u(T,f.children):V&16&&W(f.children,T,null,_,v,E&&x!=="foreignObject",A,I),z&&Gt(f,null,_,"created"),pe(T,f,f.scopeId,A,_),C){for(const ne in C)ne!=="value"&&!ns(ne)&&i(T,ne,null,C[ne],E,f.children,_,v,Ae);"value"in C&&i(T,"value",null,C.value),(w=C.onVnodeBeforeMount)&&ot(w,_,f)}z&&Gt(f,null,_,"beforeMount");const se=oh(v,$);se&&$.beforeEnter(T),r(T,d,m),((w=C&&C.onVnodeMounted)||se||z)&&De(()=>{w&&ot(w,_,f),se&&$.enter(T),z&&Gt(f,null,_,"mounted")},v)},pe=(f,d,m,_,v)=>{if(m&&g(f,m),_)for(let E=0;E<_.length;E++)g(f,_[E]);if(v){let E=v.subTree;if(d===E){const A=v.vnode;pe(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},W=(f,d,m,_,v,E,A,I,T=0)=>{for(let w=T;w<f.length;w++){const x=f[w]=I?Nt(f[w]):ct(f[w]);S(null,x,d,m,_,v,E,A,I)}},q=(f,d,m,_,v,E,A)=>{const I=d.el=f.el;let{patchFlag:T,dynamicChildren:w,dirs:x}=d;T|=f.patchFlag&16;const C=f.props||ie,V=d.props||ie;let $;m&&Jt(m,!1),($=V.onVnodeBeforeUpdate)&&ot($,m,d,f),x&&Gt(d,f,m,"beforeUpdate"),m&&Jt(m,!0);const z=v&&d.type!=="foreignObject";if(w?ce(f.dynamicChildren,w,I,m,_,z,E):A||X(f,d,I,null,m,_,z,E,!1),T>0){if(T&16)Re(I,d,C,V,m,_,v);else if(T&2&&C.class!==V.class&&i(I,"class",null,V.class,v),T&4&&i(I,"style",C.style,V.style,v),T&8){const se=d.dynamicProps;for(let ne=0;ne<se.length;ne++){const he=se[ne],Ye=C[he],_n=V[he];(_n!==Ye||he==="value")&&i(I,he,Ye,_n,v,f.children,m,_,Ae)}}T&1&&f.children!==d.children&&u(I,d.children)}else!A&&w==null&&Re(I,d,C,V,m,_,v);(($=V.onVnodeUpdated)||x)&&De(()=>{$&&ot($,m,d,f),x&&Gt(d,f,m,"updated")},_)},ce=(f,d,m,_,v,E,A)=>{for(let I=0;I<d.length;I++){const T=f[I],w=d[I],x=T.el&&(T.type===at||!Jn(T,w)||T.shapeFlag&70)?h(T.el):m;S(T,w,x,null,_,v,E,A,!0)}},Re=(f,d,m,_,v,E,A)=>{if(m!==_){if(m!==ie)for(const I in m)!ns(I)&&!(I in _)&&i(f,I,m[I],null,A,d.children,v,E,Ae);for(const I in _){if(ns(I))continue;const T=_[I],w=m[I];T!==w&&I!=="value"&&i(f,I,w,T,A,d.children,v,E,Ae)}"value"in _&&i(f,"value",m.value,_.value)}},Fe=(f,d,m,_,v,E,A,I,T)=>{const w=d.el=f?f.el:a(""),x=d.anchor=f?f.anchor:a("");let{patchFlag:C,dynamicChildren:V,slotScopeIds:$}=d;$&&(I=I?I.concat($):$),f==null?(r(w,m,_),r(x,m,_),W(d.children,m,x,v,E,A,I,T)):C>0&&C&64&&V&&f.dynamicChildren?(ce(f.dynamicChildren,V,m,v,E,A,I),(d.key!=null||v&&d===v.subTree)&&Bl(f,d,!0)):X(f,d,m,x,v,E,A,I,T)},ze=(f,d,m,_,v,E,A,I,T)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?v.ctx.activate(d,m,_,A,T):Kt(d,m,_,v,E,A,T):We(f,d,T)},Kt=(f,d,m,_,v,E,A)=>{const I=f.component=mh(f,_,v);if(Ol(f)&&(I.ctx.renderer=R),gh(I),I.asyncDep){if(v&&v.registerDep(I,Y),!f.el){const T=I.subTree=Me(on);O(null,T,d,m)}return}Y(I,f,d,m,v,E,A)},We=(f,d,m)=>{const _=d.component=f.component;if(Td(f,d,m))if(_.asyncDep&&!_.asyncResolved){re(_,d,m);return}else _.next=d,yd(_.update),_.update();else d.el=f.el,_.vnode=d},Y=(f,d,m,_,v,E,A)=>{const I=()=>{if(f.isMounted){let{next:x,bu:C,u:V,parent:$,vnode:z}=f,se=x,ne;Jt(f,!1),x?(x.el=z.el,re(f,x,A)):x=z,C&&rs(C),(ne=x.props&&x.props.onVnodeBeforeUpdate)&&ot(ne,$,x,z),Jt(f,!0);const he=di(f),Ye=f.subTree;f.subTree=he,S(Ye,he,h(Ye.el),y(Ye),f,v,E),x.el=he.el,se===null&&Rd(f,he.el),V&&De(V,v),(ne=x.props&&x.props.onVnodeUpdated)&&De(()=>ot(ne,$,x,z),v)}else{let x;const{el:C,props:V}=d,{bm:$,m:z,parent:se}=f,ne=is(d);if(Jt(f,!1),$&&rs($),!ne&&(x=V&&V.onVnodeBeforeMount)&&ot(x,se,d),Jt(f,!0),C&&Z){const he=()=>{f.subTree=di(f),Z(C,f.subTree,f,v,null)};ne?d.type.__asyncLoader().then(()=>!f.isUnmounted&&he()):he()}else{const he=f.subTree=di(f);S(null,he,m,_,f,v,E),d.el=he.el}if(z&&De(z,v),!ne&&(x=V&&V.onVnodeMounted)){const he=d;De(()=>ot(x,se,he),v)}(d.shapeFlag&256||se&&is(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&De(f.a,v),f.isMounted=!0,d=m=_=null}},T=f.effect=new _o(I,()=>To(w),f.scope),w=f.update=()=>T.run();w.id=f.uid,Jt(f,!0),w()},re=(f,d,m)=>{d.component=f;const _=f.vnode.props;f.vnode=d,f.next=null,eh(f,d.props,_,m),rh(f,d.children,m),Bn(),ma(),jn()},X=(f,d,m,_,v,E,A,I,T=!1)=>{const w=f&&f.children,x=f?f.shapeFlag:0,C=d.children,{patchFlag:V,shapeFlag:$}=d;if(V>0){if(V&128){Pt(w,C,m,_,v,E,A,I,T);return}else if(V&256){mt(w,C,m,_,v,E,A,I,T);return}}$&8?(x&16&&Ae(w,v,E),C!==w&&u(m,C)):x&16?$&16?Pt(w,C,m,_,v,E,A,I,T):Ae(w,v,E,!0):(x&8&&u(m,""),$&16&&W(C,m,_,v,E,A,I,T))},mt=(f,d,m,_,v,E,A,I,T)=>{f=f||Tn,d=d||Tn;const w=f.length,x=d.length,C=Math.min(w,x);let V;for(V=0;V<C;V++){const $=d[V]=T?Nt(d[V]):ct(d[V]);S(f[V],$,m,null,v,E,A,I,T)}w>x?Ae(f,v,E,!0,!1,C):W(d,m,_,v,E,A,I,T,C)},Pt=(f,d,m,_,v,E,A,I,T)=>{let w=0;const x=d.length;let C=f.length-1,V=x-1;for(;w<=C&&w<=V;){const $=f[w],z=d[w]=T?Nt(d[w]):ct(d[w]);if(Jn($,z))S($,z,m,null,v,E,A,I,T);else break;w++}for(;w<=C&&w<=V;){const $=f[C],z=d[V]=T?Nt(d[V]):ct(d[V]);if(Jn($,z))S($,z,m,null,v,E,A,I,T);else break;C--,V--}if(w>C){if(w<=V){const $=V+1,z=$<x?d[$].el:_;for(;w<=V;)S(null,d[w]=T?Nt(d[w]):ct(d[w]),m,z,v,E,A,I,T),w++}}else if(w>V)for(;w<=C;)Ne(f[w],v,E,!0),w++;else{const $=w,z=w,se=new Map;for(w=z;w<=V;w++){const Ue=d[w]=T?Nt(d[w]):ct(d[w]);Ue.key!=null&&se.set(Ue.key,w)}let ne,he=0;const Ye=V-z+1;let _n=!1,sa=0;const Gn=new Array(Ye);for(w=0;w<Ye;w++)Gn[w]=0;for(w=$;w<=C;w++){const Ue=f[w];if(he>=Ye){Ne(Ue,v,E,!0);continue}let it;if(Ue.key!=null)it=se.get(Ue.key);else for(ne=z;ne<=V;ne++)if(Gn[ne-z]===0&&Jn(Ue,d[ne])){it=ne;break}it===void 0?Ne(Ue,v,E,!0):(Gn[it-z]=w+1,it>=sa?sa=it:_n=!0,S(Ue,d[it],m,null,v,E,A,I,T),he++)}const ia=_n?ah(Gn):Tn;for(ne=ia.length-1,w=Ye-1;w>=0;w--){const Ue=z+w,it=d[Ue],oa=Ue+1<x?d[Ue+1].el:_;Gn[w]===0?S(null,it,m,oa,v,E,A,I,T):_n&&(ne<0||w!==ia[ne]?st(it,m,oa,2):ne--)}}},st=(f,d,m,_,v=null)=>{const{el:E,type:A,transition:I,children:T,shapeFlag:w}=f;if(w&6){st(f.component.subTree,d,m,_);return}if(w&128){f.suspense.move(d,m,_);return}if(w&64){A.move(f,d,m,R);return}if(A===at){r(E,d,m);for(let C=0;C<T.length;C++)st(T[C],d,m,_);r(f.anchor,d,m);return}if(A===pi){H(f,d,m);return}if(_!==2&&w&1&&I)if(_===0)I.beforeEnter(E),r(E,d,m),De(()=>I.enter(E),v);else{const{leave:C,delayLeave:V,afterLeave:$}=I,z=()=>r(E,d,m),se=()=>{C(E,()=>{z(),$&&$()})};V?V(E,z,se):se()}else r(E,d,m)},Ne=(f,d,m,_=!1,v=!1)=>{const{type:E,props:A,ref:I,children:T,dynamicChildren:w,shapeFlag:x,patchFlag:C,dirs:V}=f;if(I!=null&&Bi(I,null,m,f,!0),x&256){d.ctx.deactivate(f);return}const $=x&1&&V,z=!is(f);let se;if(z&&(se=A&&A.onVnodeBeforeUnmount)&&ot(se,d,f),x&6)qr(f.component,m,_);else{if(x&128){f.suspense.unmount(m,_);return}$&&Gt(f,null,d,"beforeUnmount"),x&64?f.type.remove(f,d,m,v,R,_):w&&(E!==at||C>0&&C&64)?Ae(w,d,m,!1,!0):(E===at&&C&384||!v&&x&16)&&Ae(T,d,m),_&&mn(f)}(z&&(se=A&&A.onVnodeUnmounted)||$)&&De(()=>{se&&ot(se,d,f),$&&Gt(f,null,d,"unmounted")},m)},mn=f=>{const{type:d,el:m,anchor:_,transition:v}=f;if(d===at){gn(m,_);return}if(d===pi){D(f);return}const E=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:I}=v,T=()=>A(m,E);I?I(f.el,E,T):T()}else E()},gn=(f,d)=>{let m;for(;f!==d;)m=p(f),s(f),f=m;s(d)},qr=(f,d,m)=>{const{bum:_,scope:v,update:E,subTree:A,um:I}=f;_&&rs(_),v.stop(),E&&(E.active=!1,Ne(A,f,d,m)),I&&De(I,d),De(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ae=(f,d,m,_=!1,v=!1,E=0)=>{for(let A=E;A<f.length;A++)Ne(f[A],d,m,_,v)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),P=(f,d,m)=>{f==null?d._vnode&&Ne(d._vnode,null,null,!0):S(d._vnode||null,f,d,null,null,null,m),ma(),Il(),d._vnode=f},R={p:S,um:Ne,m:st,r:mn,mt:Kt,mc:W,pc:X,pbc:ce,n:y,o:t};let k,Z;return e&&([k,Z]=e(R)),{render:P,hydrate:k,createApp:Qd(P,k)}}function Jt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function oh(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bl(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Nt(s[i]),a.el=o.el),n||Bl(o,a)),a.type===Gs&&(a.el=o.el)}}function ah(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ch=t=>t.__isTeleport,at=Symbol.for("v-fgt"),Gs=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),pi=Symbol.for("v-stc"),sr=[];let Xe=null;function Pe(t=!1){sr.push(Xe=t?null:[])}function lh(){sr.pop(),Xe=sr[sr.length-1]||null}let yr=1;function Aa(t){yr+=t}function jl(t){return t.dynamicChildren=yr>0?Xe||Tn:null,lh(),yr>0&&Xe&&Xe.push(t),t}function Ke(t,e,n,r,s,i){return jl(oe(t,e,n,r,s,i,!0))}function as(t,e,n,r,s){return jl(Me(t,e,n,r,s,!0))}function ji(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const Js="__vInternal",Hl=({key:t})=>t??null,cs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||fe(t)||j(t)?{i:je,r:t,k:e,f:!!n}:t:null);function oe(t,e=null,n=null,r=0,s=null,i=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hl(e),ref:e&&cs(e),scopeId:Rl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:je};return a?(Po(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),yr>0&&!o&&Xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Xe.push(c),c}const Me=uh;function uh(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Pd)&&(t=on),ji(t)){const a=kn(t,e,!0);return n&&Po(a,n),yr>0&&!i&&Xe&&(a.shapeFlag&6?Xe[Xe.indexOf(t)]=a:Xe.push(a)),a.patchFlag|=-2,a}if(wh(t)&&(t=t.__vccOpts),e){e=fh(e);let{class:a,style:c}=e;a&&!_e(a)&&(e.class=mo(a)),ae(c)&&(ml(c)&&!F(c)&&(c=Te({},c)),e.style=po(c))}const o=_e(t)?1:Cd(t)?128:ch(t)?64:ae(t)?4:j(t)?2:0;return oe(t,e,n,r,s,o,i,!0)}function fh(t){return t?ml(t)||Js in t?Te({},t):t:null}function kn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?dh(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Hl(a),ref:e&&e.ref?n&&s?F(s)?s.concat(cs(e)):[s,cs(e)]:cs(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ls(t=" ",e=0){return Me(Gs,null,t,e)}function mi(t="",e=!1){return e?(Pe(),as(on,null,t)):Me(on,null,t)}function ct(t){return t==null||typeof t=="boolean"?Me(on):F(t)?Me(at,null,t.slice()):typeof t=="object"?Nt(t):Me(Gs,null,String(t))}function Nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kn(t)}function Po(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Po(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Js in e)?e._ctx=je:s===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:je},n=32):(e=String(e),r&64?(n=16,e=[ls(e)]):n=8);t.children=e,t.shapeFlag|=n}function dh(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mo([e.class,r.class]));else if(s==="style")e.style=po([e.style,r.style]);else if(Fs(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ot(t,e,n,r=null){et(t,e,7,[n,r])}const hh=Vl();let ph=0;function mh(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hh,i={uid:ph++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new el(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ll(r,s),emitsOptions:Tl(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wd.bind(null,i),t.ce&&t.ce(i),i}let ve=null,So,yn,Pa="__VUE_INSTANCE_SETTERS__";(yn=Ni()[Pa])||(yn=Ni()[Pa]=[]),yn.push(t=>ve=t),So=t=>{yn.length>1?yn.forEach(e=>e(t)):yn[0](t)};const Nn=t=>{So(t),t.scope.on()},tn=()=>{ve&&ve.scope.off(),So(null)};function ql(t){return t.vnode.shapeFlag&4}let vr=!1;function gh(t,e=!1){vr=e;const{props:n,children:r}=t.vnode,s=ql(t);Zd(t,n,s,e),nh(t,r);const i=s?_h(t,e):void 0;return vr=!1,i}function _h(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qs(new Proxy(t.ctx,qd));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?vh(t):null;Nn(t),Bn();const i=$t(r,t,0,[t.props,s]);if(jn(),tn(),Jc(i)){if(i.then(tn,tn),e)return i.then(o=>{Sa(t,o,e)}).catch(o=>{zs(o,t,0)});t.asyncDep=i}else Sa(t,i,e)}else zl(t,e)}function Sa(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=vl(e)),zl(t,n)}let Ca;function zl(t,e,n){const r=t.type;if(!t.render){if(!e&&Ca&&!r.render){const s=r.template||Ro(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Te(Te({isCustomElement:i,delimiters:a},o),c);r.render=Ca(s,l)}}t.render=r.render||Ze}{Nn(t),Bn();try{zd(t)}finally{jn(),tn()}}}function yh(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Le(t,"get","$attrs"),e[n]}}))}function vh(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return yh(t)},slots:t.slots,emit:t.emit,expose:e}}function Ys(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vl(qs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in rr)return rr[n](t)},has(e,n){return n in e||n in rr}}))}function Eh(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function wh(t){return j(t)&&"__vccOpts"in t}const Ge=(t,e)=>md(t,e,vr);function Wl(t,e,n){const r=arguments.length;return r===2?ae(e)&&!F(e)?ji(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ji(n)&&(n=[n]),Me(t,e,n))}const Ih=Symbol.for("v-scx"),bh=()=>Je(Ih),Th="3.3.8",Rh="http://www.w3.org/2000/svg",Xt=typeof document<"u"?document:null,Oa=Xt&&Xt.createElement("template"),Ah={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Xt.createElementNS(Rh,t):Xt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oa.innerHTML=r?`<svg>${t}</svg>`:t;const a=Oa.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ph=Symbol("_vtc");function Sh(t,e,n){const r=t[Ph];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ch=Symbol("_vod");function Oh(t,e,n){const r=t.style,s=_e(n);if(n&&!s){if(e&&!_e(e))for(const i in e)n[i]==null&&Hi(r,i,"");for(const i in n)Hi(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Ch in t&&(r.display=i)}}const ka=/\s*!important$/;function Hi(t,e,n){if(F(n))n.forEach(r=>Hi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=kh(t,e);ka.test(n)?t.setProperty($n(r),n.replace(ka,""),"important"):t[r]=n}}const Na=["Webkit","Moz","ms"],gi={};function kh(t,e){const n=gi[e];if(n)return n;let r=pt(e);if(r!=="filter"&&r in t)return gi[e]=r;r=js(r);for(let s=0;s<Na.length;s++){const i=Na[s]+r;if(i in t)return gi[e]=i}return e}const Da="http://www.w3.org/1999/xlink";function Nh(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Da,e.slice(6,e.length)):t.setAttributeNS(Da,e,n);else{const i=Lf(e);n==null||i&&!Xc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Dh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Xc(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function En(t,e,n,r){t.addEventListener(e,n,r)}function xh(t,e,n,r){t.removeEventListener(e,n,r)}const xa=Symbol("_vei");function Vh(t,e,n,r,s=null){const i=t[xa]||(t[xa]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Mh(e);if(r){const l=i[e]=Uh(r,s);En(t,a,l,c)}else o&&(xh(t,a,o,c),i[e]=void 0)}}const Va=/(?:Once|Passive|Capture)$/;function Mh(t){let e;if(Va.test(t)){e={};let r;for(;r=t.match(Va);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$n(t.slice(2)),e]}let _i=0;const Lh=Promise.resolve(),Fh=()=>_i||(Lh.then(()=>_i=0),_i=Date.now());function Uh(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;et($h(r,n.value),e,5,[r])};return n.value=t,n.attached=Fh(),n}function $h(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ma=/^on[a-z]/,Bh=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Sh(t,r,s):e==="style"?Oh(t,n,r):Fs(e)?uo(e)||Vh(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jh(t,e,r,s))?Dh(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nh(t,e,r,s))};function jh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ma.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ma.test(e)&&_e(n)?!1:e in t}const La=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>rs(e,n):e};function Hh(t){t.target.composing=!0}function Fa(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yi=Symbol("_assign"),Dn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[yi]=La(s);const i=r||s.props&&s.props.type==="number";En(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ki(a)),t[yi](a)}),n&&En(t,"change",()=>{t.value=t.value.trim()}),e||(En(t,"compositionstart",Hh),En(t,"compositionend",Fa),En(t,"change",Fa))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[yi]=La(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ki(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},qh=["ctrl","shift","alt","meta"],zh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qh.some(n=>t[`${n}Key`]&&!e.includes(n))},Qs=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=zh[e[s]];if(i&&i(n,e))return}return t(n,...r)},Wh=Te({patchProp:Bh},Ah);let Ua;function Kh(){return Ua||(Ua=sh(Wh))}const Gh=(...t)=>{const e=Kh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Jh(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Jh(t){return _e(t)?document.querySelector(t):t}var Yh=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Kl;const Xs=t=>Kl=t,Gl=Symbol();function qi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ir;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ir||(ir={}));function Qh(){const t=tl(!0),e=t.run(()=>It({}));let n=[],r=[];const s=qs({install(i){Xs(s),s._a=i,i.provide(Gl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Yh?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Jl=()=>{};function $a(t,e,n,r=Jl){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&nl()&&$f(s),s}function vn(t,...e){t.slice().forEach(n=>{n(...e)})}const Xh=t=>t();function zi(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];qi(s)&&qi(r)&&t.hasOwnProperty(n)&&!fe(r)&&!Ut(r)?t[n]=zi(s,r):t[n]=r}return t}const Zh=Symbol();function ep(t){return!qi(t)||!t.hasOwnProperty(Zh)}const{assign:kt}=Object;function tp(t){return!!(fe(t)&&t.effect)}function np(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=fd(n.state.value[t]);return kt(u,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=qs(Ge(()=>{Xs(n);const g=n._s.get(t);return o[p].call(g,g)})),h),{}))}return c=Yl(t,l,e,n,r,!0),c}function Yl(t,e,n={},r,s,i){let o;const a=kt({actions:{}},n),c={deep:!0};let l,u,h=[],p=[],g;const b=r.state.value[t];!i&&!b&&(r.state.value[t]={}),It({});let S;function M(W){let q;l=u=!1,typeof W=="function"?(W(r.state.value[t]),q={type:ir.patchFunction,storeId:t,events:g}):(zi(r.state.value[t],W),q={type:ir.patchObject,payload:W,storeId:t,events:g});const ce=S=Symbol();bo().then(()=>{S===ce&&(l=!0)}),u=!0,vn(h,q,r.state.value[t])}const O=i?function(){const{state:q}=n,ce=q?q():{};this.$patch(Re=>{kt(Re,ce)})}:Jl;function N(){o.stop(),h=[],p=[],r._s.delete(t)}function H(W,q){return function(){Xs(r);const ce=Array.from(arguments),Re=[],Fe=[];function ze(Y){Re.push(Y)}function Kt(Y){Fe.push(Y)}vn(p,{args:ce,name:W,store:Q,after:ze,onError:Kt});let We;try{We=q.apply(this&&this.$id===t?this:Q,ce)}catch(Y){throw vn(Fe,Y),Y}return We instanceof Promise?We.then(Y=>(vn(Re,Y),Y)).catch(Y=>(vn(Fe,Y),Promise.reject(Y))):(vn(Re,We),We)}}const D={_p:r,$id:t,$onAction:$a.bind(null,p),$patch:M,$reset:O,$subscribe(W,q={}){const ce=$a(h,W,q.detached,()=>Re()),Re=o.run(()=>nr(()=>r.state.value[t],Fe=>{(q.flush==="sync"?u:l)&&W({storeId:t,type:ir.direct,events:g},Fe)},kt({},c,q)));return ce},$dispose:N},Q=kr(D);r._s.set(t,Q);const pe=(r._a&&r._a.runWithContext||Xh)(()=>r._e.run(()=>(o=tl()).run(e)));for(const W in pe){const q=pe[W];if(fe(q)&&!tp(q)||Ut(q))i||(b&&ep(q)&&(fe(q)?q.value=b[W]:zi(q,b[W])),r.state.value[t][W]=q);else if(typeof q=="function"){const ce=H(W,q);pe[W]=ce,a.actions[W]=q}}return kt(Q,pe),kt(J(Q),pe),Object.defineProperty(Q,"$state",{get:()=>r.state.value[t],set:W=>{M(q=>{kt(q,W)})}}),r._p.forEach(W=>{kt(Q,o.run(()=>W({store:Q,app:r._a,pinia:r,options:a})))}),b&&i&&n.hydrate&&n.hydrate(Q.$state,b),l=!0,u=!0,Q}function Ql(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Xd();return a=a||(l?Je(Gl,null):null),a&&Xs(a),a=Kl,a._s.has(r)||(i?Yl(r,e,s,a):np(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const wn=typeof window<"u";function rp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function vi(t,e){const n={};for(const r in e){const s=e[r];n[r]=tt(s)?s.map(t):t(s)}return n}const or=()=>{},tt=Array.isArray,sp=/\/$/,ip=t=>t.replace(sp,"");function Ei(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=lp(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function op(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ba(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ap(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&xn(e.matched[r],n.matched[s])&&Xl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cp(t[n],e[n]))return!1;return!0}function cp(t,e){return tt(t)?ja(t,e):tt(e)?ja(e,t):t===e}function ja(t,e){return tt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function lp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Er;(function(t){t.pop="pop",t.push="push"})(Er||(Er={}));var ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ar||(ar={}));function up(t){if(!t)if(wn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ip(t)}const fp=/^[^#]+#/;function dp(t,e){return t.replace(fp,"#")+e}function hp(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Zs=()=>({left:window.pageXOffset,top:window.pageYOffset});function pp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hp(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ha(t,e){return(history.state?history.state.position-e:-1)+t}const Wi=new Map;function mp(t,e){Wi.set(t,e)}function gp(t){const e=Wi.get(t);return Wi.delete(t),e}let _p=()=>location.protocol+"//"+location.host;function Zl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ba(c,"")}return Ba(n,t)+r+s}function yp(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=Zl(t,location),b=n.value,S=e.value;let M=0;if(p){if(n.value=g,e.value=p,o&&o===b){o=null;return}M=S?p.position-S.position:0}else r(g);s.forEach(O=>{O(n.value,b,{delta:M,type:Er.pop,direction:M?M>0?ar.forward:ar.back:ar.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const b=s.indexOf(p);b>-1&&s.splice(b,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:Zs()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function qa(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Zs():null}}function vp(t){const{history:e,location:n}=window,r={value:Zl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:_p()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=te({},e.state,qa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=te({},s.value,e.state,{forward:c,scroll:Zs()});i(u.current,u,!0);const h=te({},qa(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Ep(t){t=up(t);const e=vp(t),n=yp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:t,go:r,createHref:dp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function wp(t){return typeof t=="string"||t&&typeof t=="object"}function eu(t){return typeof t=="string"||typeof t=="symbol"}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tu=Symbol("");var za;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(za||(za={}));function Vn(t,e){return te(new Error,{type:t,[tu]:!0},e)}function gt(t,e){return t instanceof Error&&tu in t&&(e==null||!!(t.type&e))}const Wa="[^/]+?",Ip={sensitive:!1,strict:!1,start:!0,end:!0},bp=/[.+*?^${}()[\]/\\]/g;function Tp(t,e){const n=te({},Ip,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let g=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(bp,"\\$&"),g+=40;else if(p.type===1){const{value:b,repeatable:S,optional:M,regexp:O}=p;i.push({name:b,repeatable:S,optional:M});const N=O||Wa;if(N!==Wa){g+=10;try{new RegExp(`(${N})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${b}" (${N}): `+D.message)}}let H=S?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(H=M&&l.length<2?`(?:/${H})`:"/"+H),M&&(H+="?"),s+=H,g+=20,M&&(g+=-8),S&&(g+=-20),N===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",b=i[p-1];h[b.name]=g&&b.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:b,repeatable:S,optional:M}=g,O=b in l?l[b]:"";if(tt(O)&&!S)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const N=tt(O)?O.join("/"):O;if(!N)if(M)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${b}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Rp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ap(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Rp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ka(r))return 1;if(Ka(s))return-1}return s.length-r.length}function Ka(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pp={type:0,value:""},Sp=/[a-zA-Z0-9_]/;function Cp(t){if(!t)return[[]];if(t==="/")return[[Pp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Sp.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Op(t,e,n){const r=Tp(Cp(t.path),n),s=te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kp(t,e){const n=[],r=new Map;e=Ya({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const g=!p,b=Np(u);b.aliasOf=p&&p.record;const S=Ya(e,u),M=[b];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of H)M.push(te({},b,{components:p?p.record.components:b.components,path:D,aliasOf:p?p.record:b}))}let O,N;for(const H of M){const{path:D}=H;if(h&&D[0]!=="/"){const Q=h.record.path,de=Q[Q.length-1]==="/"?"":"/";H.path=h.record.path+(D&&de+D)}if(O=Op(H,h,S),p?p.alias.push(O):(N=N||O,N!==O&&N.alias.push(O),g&&u.name&&!Ja(O)&&o(u.name)),b.children){const Q=b.children;for(let de=0;de<Q.length;de++)i(Q[de],O,p&&p.children[de])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return N?()=>{o(N)}:or}function o(u){if(eu(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Ap(u,n[h])>=0&&(u.record.path!==n[h].record.path||!nu(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ja(u)&&r.set(u.record.name,u)}function l(u,h){let p,g={},b,S;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Vn(1,{location:u});S=p.record.name,g=te(Ga(h.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Ga(u.params,p.keys.map(N=>N.name))),b=p.stringify(g)}else if("path"in u)b=u.path,p=n.find(N=>N.re.test(b)),p&&(g=p.parse(b),S=p.record.name);else{if(p=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!p)throw Vn(1,{location:u,currentLocation:h});S=p.record.name,g=te({},h.params,u.params),b=p.stringify(g)}const M=[];let O=p;for(;O;)M.unshift(O.record),O=O.parent;return{name:S,path:b,params:g,matched:M,meta:xp(M)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ga(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Np(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Dp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Dp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ja(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xp(t){return t.reduce((e,n)=>te(e,n.meta),{})}function Ya(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function nu(t,e){return e.children.some(n=>n===t||nu(t,n))}const ru=/#/g,Vp=/&/g,Mp=/\//g,Lp=/=/g,Fp=/\?/g,su=/\+/g,Up=/%5B/g,$p=/%5D/g,iu=/%5E/g,Bp=/%60/g,ou=/%7B/g,jp=/%7C/g,au=/%7D/g,Hp=/%20/g;function Co(t){return encodeURI(""+t).replace(jp,"|").replace(Up,"[").replace($p,"]")}function qp(t){return Co(t).replace(ou,"{").replace(au,"}").replace(iu,"^")}function Ki(t){return Co(t).replace(su,"%2B").replace(Hp,"+").replace(ru,"%23").replace(Vp,"%26").replace(Bp,"`").replace(ou,"{").replace(au,"}").replace(iu,"^")}function zp(t){return Ki(t).replace(Lp,"%3D")}function Wp(t){return Co(t).replace(ru,"%23").replace(Fp,"%3F")}function Kp(t){return t==null?"":Wp(t).replace(Mp,"%2F")}function ws(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Gp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(su," "),o=i.indexOf("="),a=ws(o<0?i:i.slice(0,o)),c=o<0?null:ws(i.slice(o+1));if(a in e){let l=e[a];tt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Qa(t){let e="";for(let n in t){const r=t[n];if(n=zp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(tt(r)?r.map(i=>i&&Ki(i)):[r&&Ki(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Jp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=tt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Yp=Symbol(""),Xa=Symbol(""),ei=Symbol(""),Oo=Symbol(""),Gi=Symbol("");function Yn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Dt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Vn(4,{from:n,to:e})):h instanceof Error?a(h):wp(h)?a(Vn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function wi(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Qp(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Dt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=rp(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&Dt(p,n,r,i,o)()}))}}return s}function Qp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Za(t){const e=Je(ei),n=Je(Oo),r=Ge(()=>e.resolve(ue(t.to))),s=Ge(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(xn.bind(null,u));if(p>-1)return p;const g=ec(c[l-2]);return l>1&&ec(u)===g&&h[h.length-1].path!==g?h.findIndex(xn.bind(null,c[l-2])):p}),i=Ge(()=>s.value>-1&&em(n.params,r.value.params)),o=Ge(()=>s.value>-1&&s.value===n.matched.length-1&&Xl(n.params,r.value.params));function a(c={}){return Zp(c)?e[ue(t.replace)?"replace":"push"](ue(t.to)).catch(or):Promise.resolve()}return{route:r,href:Ge(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Xp=Cl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Za,setup(t,{slots:e}){const n=kr(Za(t)),{options:r}=Je(ei),s=Ge(()=>({[tc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[tc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Wl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),us=Xp;function Zp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function em(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!tt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ec(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const tc=(t,e,n)=>t??e??n,tm=Cl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Je(Gi),s=Ge(()=>t.route||r.value),i=Je(Xa,0),o=Ge(()=>{let l=ue(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ge(()=>s.value.matched[o.value]);os(Xa,Ge(()=>o.value+1)),os(Yp,a),os(Gi,s);const c=It();return nr(()=>[c.value,a.value,t.name],([l,u,h],[p,g,b])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!xn(u,g)||!p)&&(u.enterCallbacks[h]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return nc(n.default,{Component:p,route:l});const g=h.props[u],b=g?g===!0?l.params:typeof g=="function"?g(l):g:null,M=Wl(p,te({},b,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return nc(n.default,{Component:M,route:l})||M}}});function nc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nm=tm;function rm(t){const e=kp(t.routes,t),n=t.parseQuery||Gp,r=t.stringifyQuery||Qa,s=t.history,i=Yn(),o=Yn(),a=Yn(),c=cd(Ct);let l=Ct;wn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vi.bind(null,y=>""+y),h=vi.bind(null,Kp),p=vi.bind(null,ws);function g(y,P){let R,k;return eu(y)?(R=e.getRecordMatcher(y),k=P):k=y,e.addRoute(k,R)}function b(y){const P=e.getRecordMatcher(y);P&&e.removeRoute(P)}function S(){return e.getRoutes().map(y=>y.record)}function M(y){return!!e.getRecordMatcher(y)}function O(y,P){if(P=te({},P||c.value),typeof y=="string"){const m=Ei(n,y,P.path),_=e.resolve({path:m.path},P),v=s.createHref(m.fullPath);return te(m,_,{params:p(_.params),hash:ws(m.hash),redirectedFrom:void 0,href:v})}let R;if("path"in y)R=te({},y,{path:Ei(n,y.path,P.path).path});else{const m=te({},y.params);for(const _ in m)m[_]==null&&delete m[_];R=te({},y,{params:h(m)}),P.params=h(P.params)}const k=e.resolve(R,P),Z=y.hash||"";k.params=u(p(k.params));const f=op(r,te({},y,{hash:qp(Z),path:k.path})),d=s.createHref(f);return te({fullPath:f,hash:Z,query:r===Qa?Jp(y.query):y.query||{}},k,{redirectedFrom:void 0,href:d})}function N(y){return typeof y=="string"?Ei(n,y,c.value.path):te({},y)}function H(y,P){if(l!==y)return Vn(8,{from:P,to:y})}function D(y){return pe(y)}function Q(y){return D(te(N(y),{replace:!0}))}function de(y){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:R}=P;let k=typeof R=="function"?R(y):R;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=N(k):{path:k},k.params={}),te({query:y.query,hash:y.hash,params:"path"in k?{}:y.params},k)}}function pe(y,P){const R=l=O(y),k=c.value,Z=y.state,f=y.force,d=y.replace===!0,m=de(R);if(m)return pe(te(N(m),{state:typeof m=="object"?te({},Z,m.state):Z,force:f,replace:d}),P||R);const _=R;_.redirectedFrom=P;let v;return!f&&ap(r,k,R)&&(v=Vn(16,{to:_,from:k}),st(k,k,!0,!1)),(v?Promise.resolve(v):ce(_,k)).catch(E=>gt(E)?gt(E,2)?E:Pt(E):X(E,_,k)).then(E=>{if(E){if(gt(E,2))return pe(te({replace:d},N(E.to),{state:typeof E.to=="object"?te({},Z,E.to.state):Z,force:f}),P||_)}else E=Fe(_,k,!0,d,Z);return Re(_,k,E),E})}function W(y,P){const R=H(y,P);return R?Promise.reject(R):Promise.resolve()}function q(y){const P=gn.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(y):y()}function ce(y,P){let R;const[k,Z,f]=sm(y,P);R=wi(k.reverse(),"beforeRouteLeave",y,P);for(const m of k)m.leaveGuards.forEach(_=>{R.push(Dt(_,y,P))});const d=W.bind(null,y,P);return R.push(d),Ae(R).then(()=>{R=[];for(const m of i.list())R.push(Dt(m,y,P));return R.push(d),Ae(R)}).then(()=>{R=wi(Z,"beforeRouteUpdate",y,P);for(const m of Z)m.updateGuards.forEach(_=>{R.push(Dt(_,y,P))});return R.push(d),Ae(R)}).then(()=>{R=[];for(const m of f)if(m.beforeEnter)if(tt(m.beforeEnter))for(const _ of m.beforeEnter)R.push(Dt(_,y,P));else R.push(Dt(m.beforeEnter,y,P));return R.push(d),Ae(R)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),R=wi(f,"beforeRouteEnter",y,P),R.push(d),Ae(R))).then(()=>{R=[];for(const m of o.list())R.push(Dt(m,y,P));return R.push(d),Ae(R)}).catch(m=>gt(m,8)?m:Promise.reject(m))}function Re(y,P,R){a.list().forEach(k=>q(()=>k(y,P,R)))}function Fe(y,P,R,k,Z){const f=H(y,P);if(f)return f;const d=P===Ct,m=wn?history.state:{};R&&(k||d?s.replace(y.fullPath,te({scroll:d&&m&&m.scroll},Z)):s.push(y.fullPath,Z)),c.value=y,st(y,P,R,d),Pt()}let ze;function Kt(){ze||(ze=s.listen((y,P,R)=>{if(!qr.listening)return;const k=O(y),Z=de(k);if(Z){pe(te(Z,{replace:!0}),k).catch(or);return}l=k;const f=c.value;wn&&mp(Ha(f.fullPath,R.delta),Zs()),ce(k,f).catch(d=>gt(d,12)?d:gt(d,2)?(pe(d.to,k).then(m=>{gt(m,20)&&!R.delta&&R.type===Er.pop&&s.go(-1,!1)}).catch(or),Promise.reject()):(R.delta&&s.go(-R.delta,!1),X(d,k,f))).then(d=>{d=d||Fe(k,f,!1),d&&(R.delta&&!gt(d,8)?s.go(-R.delta,!1):R.type===Er.pop&&gt(d,20)&&s.go(-1,!1)),Re(k,f,d)}).catch(or)}))}let We=Yn(),Y=Yn(),re;function X(y,P,R){Pt(y);const k=Y.list();return k.length?k.forEach(Z=>Z(y,P,R)):console.error(y),Promise.reject(y)}function mt(){return re&&c.value!==Ct?Promise.resolve():new Promise((y,P)=>{We.add([y,P])})}function Pt(y){return re||(re=!y,Kt(),We.list().forEach(([P,R])=>y?R(y):P()),We.reset()),y}function st(y,P,R,k){const{scrollBehavior:Z}=t;if(!wn||!Z)return Promise.resolve();const f=!R&&gp(Ha(y.fullPath,0))||(k||!R)&&history.state&&history.state.scroll||null;return bo().then(()=>Z(y,P,f)).then(d=>d&&pp(d)).catch(d=>X(d,y,P))}const Ne=y=>s.go(y);let mn;const gn=new Set,qr={currentRoute:c,listening:!0,addRoute:g,removeRoute:b,hasRoute:M,getRoutes:S,resolve:O,options:t,push:D,replace:Q,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:mt,install(y){const P=this;y.component("RouterLink",us),y.component("RouterView",nm),y.config.globalProperties.$router=P,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(c)}),wn&&!mn&&c.value===Ct&&(mn=!0,D(s.location).catch(Z=>{}));const R={};for(const Z in Ct)Object.defineProperty(R,Z,{get:()=>c.value[Z],enumerable:!0});y.provide(ei,P),y.provide(Oo,hl(R)),y.provide(Gi,c);const k=y.unmount;gn.add(y),y.unmount=function(){gn.delete(y),gn.size<1&&(l=Ct,ze&&ze(),ze=null,c.value=Ct,mn=!1,re=!1),k()}}};function Ae(y){return y.reduce((P,R)=>P.then(()=>q(R)),Promise.resolve())}return qr}function sm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>xn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>xn(l,c))||s.push(c))}return[n,r,s]}function im(){return Je(ei)}function om(){return Je(Oo)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},am=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):am(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new cm;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const b=l<<6&192|h;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lm=function(t){const e=cu(t);return lu.encodeByteArray(e,!0)},Is=function(t){return lm(t).replace(/\./g,"")},uu=function(t){try{return lu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=()=>um().__FIREBASE_DEFAULTS__,dm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uu(t[1]);return e&&JSON.parse(e)},ko=()=>{try{return fm()||dm()||hm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fu=t=>{var e,n;return(n=(e=ko())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pm=t=>{const e=fu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},du=()=>{var t;return(t=ko())===null||t===void 0?void 0:t.config},hu=t=>{var e;return(e=ko())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Is(JSON.stringify(n)),Is(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _m(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function ym(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Em(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wm(){try{return typeof indexedDB=="object"}catch{return!1}}function Im(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bm,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Tm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new At(s,a,r)}}function Tm(t,e){return t.replace(Rm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rm=/\{\$([^}]+)}/g;function Am(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(rc(i)&&rc(o)){if(!bs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function er(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function tr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Pm(t,e){const n=new Sm(t,e);return n.subscribe.bind(n)}class Sm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ii),s.error===void 0&&(s.error=Ii),s.complete===void 0&&(s.complete=Ii);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ii(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nm(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:km(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function km(t){return t===Yt?void 0:t}function Nm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Om(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const xm={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Vm=ee.INFO,Mm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Lm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Mm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class No{constructor(e){this.name=e,this._logLevel=Vm,this._logHandler=Lm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Fm=(t,e)=>e.some(n=>t instanceof n);let sc,ic;function Um(){return sc||(sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $m(){return ic||(ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pu=new WeakMap,Ji=new WeakMap,mu=new WeakMap,bi=new WeakMap,Do=new WeakMap;function Bm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pu.set(n,t)}).catch(()=>{}),Do.set(e,t),e}function jm(t){if(Ji.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ji.set(t,e)}let Yi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ji.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hm(t){Yi=t(Yi)}function qm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ti(this),e,...n);return mu.set(r,e.sort?e.sort():[e]),Bt(r)}:$m().includes(t)?function(...e){return t.apply(Ti(this),e),Bt(pu.get(this))}:function(...e){return Bt(t.apply(Ti(this),e))}}function zm(t){return typeof t=="function"?qm(t):(t instanceof IDBTransaction&&jm(t),Fm(t,Um())?new Proxy(t,Yi):t)}function Bt(t){if(t instanceof IDBRequest)return Bm(t);if(bi.has(t))return bi.get(t);const e=zm(t);return e!==t&&(bi.set(t,e),Do.set(e,t)),e}const Ti=t=>Do.get(t);function Wm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Km=["get","getKey","getAll","getAllKeys","count"],Gm=["put","add","delete","clear"],Ri=new Map;function oc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Gm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Km.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ri.set(e,i),i}Hm(t=>({...t,get:(e,n,r)=>oc(e,n)||t.get(e,n,r),has:(e,n)=>!!oc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ym(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ym(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qi="@firebase/app",ac="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new No("@firebase/app"),Qm="@firebase/app-compat",Xm="@firebase/analytics-compat",Zm="@firebase/analytics",eg="@firebase/app-check-compat",tg="@firebase/app-check",ng="@firebase/auth",rg="@firebase/auth-compat",sg="@firebase/database",ig="@firebase/database-compat",og="@firebase/functions",ag="@firebase/functions-compat",cg="@firebase/installations",lg="@firebase/installations-compat",ug="@firebase/messaging",fg="@firebase/messaging-compat",dg="@firebase/performance",hg="@firebase/performance-compat",pg="@firebase/remote-config",mg="@firebase/remote-config-compat",gg="@firebase/storage",_g="@firebase/storage-compat",yg="@firebase/firestore",vg="@firebase/firestore-compat",Eg="firebase",wg="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]",Ig={[Qi]:"fire-core",[Qm]:"fire-core-compat",[Zm]:"fire-analytics",[Xm]:"fire-analytics-compat",[tg]:"fire-app-check",[eg]:"fire-app-check-compat",[ng]:"fire-auth",[rg]:"fire-auth-compat",[sg]:"fire-rtdb",[ig]:"fire-rtdb-compat",[og]:"fire-fn",[ag]:"fire-fn-compat",[cg]:"fire-iid",[lg]:"fire-iid-compat",[ug]:"fire-fcm",[fg]:"fire-fcm-compat",[dg]:"fire-perf",[hg]:"fire-perf-compat",[pg]:"fire-rc",[mg]:"fire-rc-compat",[gg]:"fire-gcs",[_g]:"fire-gcs-compat",[yg]:"fire-fst",[vg]:"fire-fst-compat","fire-js":"fire-js",[Eg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Map,Zi=new Map;function bg(t,e){try{t.container.addComponent(e)}catch(n){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if(Zi.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;Zi.set(e,t);for(const n of Ts.values())bg(n,t);return!0}function xo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jt=new Nr("app","Firebase",Tg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=wg;function gu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(n||(n=du()),!n)throw jt.create("no-options");const i=Ts.get(s);if(i){if(bs(n,i.options)&&bs(r,i.config))return i;throw jt.create("duplicate-app",{appName:s})}const o=new Dm(s);for(const c of Zi.values())o.addComponent(c);const a=new Rg(n,r,o);return Ts.set(s,a),a}function _u(t=Xi){const e=Ts.get(t);if(!e&&t===Xi&&du())return gu();if(!e)throw jt.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let s=(r=Ig[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}Mn(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="firebase-heartbeat-database",Pg=1,wr="firebase-heartbeat-store";let Ai=null;function yu(){return Ai||(Ai=Wm(Ag,Pg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wr)}}}).catch(t=>{throw jt.create("idb-open",{originalErrorMessage:t.message})})),Ai}async function Sg(t){try{return await(await yu()).transaction(wr).objectStore(wr).get(vu(t))}catch(e){if(e instanceof At)cn.warn(e.message);else{const n=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(n.message)}}}async function cc(t,e){try{const r=(await yu()).transaction(wr,"readwrite");await r.objectStore(wr).put(e,vu(t)),await r.done}catch(n){if(n instanceof At)cn.warn(n.message);else{const r=jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(r.message)}}}function vu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=1024,Og=30*24*60*60*1e3;class kg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Og}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lc(),{heartbeatsToSend:r,unsentEntries:s}=Ng(this._heartbeatsCache.heartbeats),i=Is(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lc(){return new Date().toISOString().substring(0,10)}function Ng(t,e=Cg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),uc(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wm()?Im().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function uc(t){return Is(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){Mn(new an("platform-logger",e=>new Jm(e),"PRIVATE")),Mn(new an("heartbeat",e=>new kg(e),"PRIVATE")),Ht(Qi,ac,t),Ht(Qi,ac,"esm2017"),Ht("fire-js","")}xg("");function Vo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Eu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vg=Eu,wu=new Nr("auth","Firebase",Eu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new No("@firebase/auth");function Mg(t,...e){Rs.logLevel<=ee.WARN&&Rs.warn(`Auth (${Hn}): ${t}`,...e)}function fs(t,...e){Rs.logLevel<=ee.ERROR&&Rs.error(`Auth (${Hn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,...e){throw Mo(t,...e)}function dt(t,...e){return Mo(t,...e)}function Lg(t,e,n){const r=Object.assign(Object.assign({},Vg()),{[e]:n});return new Nr("auth","Firebase",r).create(e,{appName:t.name})}function Mo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wu.create(t,...e)}function U(t,e,...n){if(!t)throw Mo(e,...n)}function yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fs(e),new Error(e)}function bt(t,e){t||yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fg(){return fc()==="http:"||fc()==="https:"}function fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fg()||ym()||"connection"in navigator)?navigator.onLine:!0}function $g(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=_m()||vm()}get(){return Ug()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new xr(3e4,6e4);function zt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wt(t,e,n,r,s={}){return bu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Dr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Iu.fetch()(Tu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function bu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bg),e);try{const s=new qg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Lg(t,u,l);nt(t,u)}}catch(s){if(s instanceof At)throw s;nt(t,"network-request-failed",{message:String(s)})}}async function Vr(t,e,n,r,s={}){const i=await Wt(t,e,n,r,s);return"mfaPendingCredential"in i&&nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Tu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Lo(t.config,s):`${t.config.apiScheme}://${s}`}function Hg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),jg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dt(t,e,r);return s.customData._tokenResponse=n,s}function dc(t){return t!==void 0&&t.enterprise!==void 0}class zg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Hg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Wg(t,e){return Wt(t,"GET","/v2/recaptchaConfig",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(t,e){return Wt(t,"POST","/v1/accounts:delete",e)}async function Gg(t,e){return Wt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jg(t,e=!1){const n=Ee(t),r=await n.getIdToken(e),s=Fo(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:cr(Pi(s.auth_time)),issuedAtTime:cr(Pi(s.iat)),expirationTime:cr(Pi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pi(t){return Number(t)*1e3}function Fo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fs("JWT malformed, contained fewer than 3 sections"),null;try{const s=uu(n);return s?JSON.parse(s):(fs("Failed to decode base64 JWT payload"),null)}catch(s){return fs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Yg(t){const e=Fo(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&Qg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ir(t,Gg(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?t_(i.providerUserInfo):[],a=e_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ru(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Zg(t){const e=Ee(t);await As(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function t_(t){return t.map(e=>{var{providerId:n}=e,r=Vo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e){const n=await bu(t,{},async()=>{const r=Dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Tu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Iu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function r_(t,e){return Wt(t,"POST","/v2/accounts:revokeToken",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await n_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new br;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ru(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ir(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jg(this,e)}reload(){return Zg(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await As(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ir(this,Kg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:D,isAnonymous:Q,providerData:de,stsTokenManager:pe}=n;U(H&&pe,e,"internal-error");const W=br.fromJSON(this.name,pe);U(typeof H=="string",e,"internal-error"),Ot(h,e.name),Ot(p,e.name),U(typeof D=="boolean",e,"internal-error"),U(typeof Q=="boolean",e,"internal-error"),Ot(g,e.name),Ot(b,e.name),Ot(S,e.name),Ot(M,e.name),Ot(O,e.name),Ot(N,e.name);const q=new nn({uid:H,auth:e,email:p,emailVerified:D,displayName:h,isAnonymous:Q,photoURL:b,phoneNumber:g,tenantId:S,stsTokenManager:W,createdAt:O,lastLoginAt:N});return de&&Array.isArray(de)&&(q.providerData=de.map(ce=>Object.assign({},ce))),M&&(q._redirectEventId=M),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new br;s.updateFromServerResponse(n);const i=new nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await As(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Map;function vt(t){bt(t instanceof Function,"Expected a class definition");let e=hc.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Au.type="NONE";const pc=Au;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t,e,n){return`firebase:${t}:${e}:${n}`}class Pn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ds(this.userKey,s.apiKey,i),this.fullPersistenceKey=ds("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pn(vt(pc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||vt(pc);const o=ds(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=nn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Pn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Pn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ku(e))return"Blackberry";if(Nu(e))return"Webos";if(Uo(e))return"Safari";if((e.includes("chrome/")||Su(e))&&!e.includes("edge/"))return"Chrome";if(Ou(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pu(t=Ce()){return/firefox\//i.test(t)}function Uo(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Su(t=Ce()){return/crios\//i.test(t)}function Cu(t=Ce()){return/iemobile/i.test(t)}function Ou(t=Ce()){return/android/i.test(t)}function ku(t=Ce()){return/blackberry/i.test(t)}function Nu(t=Ce()){return/webos/i.test(t)}function ti(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function s_(t=Ce()){var e;return ti(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function i_(){return Em()&&document.documentMode===10}function Du(t=Ce()){return ti(t)||Ou(t)||Nu(t)||ku(t)||/windows phone/i.test(t)||Cu(t)}function o_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e=[]){let n;switch(t){case"Browser":n=mc(Ce());break;case"Worker":n=`${mc(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(t,e={}){return Wt(t,"GET","/v2/passwordPolicy",zt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=6;class u_{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:l_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gc(this),this.idTokenSubscription=new gc(this),this.beforeStateQueue=new a_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await As(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$g()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ee(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await c_(this),n=new u_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await r_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pn(t){return Ee(t)}class gc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pm(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Vu(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",d_().appendChild(r)})}function h_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const p_="https://www.google.com/recaptcha/enterprise.js?render=",m_="recaptcha-enterprise",g_="NO_RECAPTCHA";class __{constructor(e){this.type=m_,this.auth=pn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Wg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new zg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;dc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(g_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&dc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Vu(p_+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _c(t,e,n,r=!1){const s=new __(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function to(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _c(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _c(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t,e){const n=xo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bs(i,e??{}))return s;nt(s,"already-initialized")}return n.initialize({options:e})}function v_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function E_(t,e,n){const r=pn(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Mu(e),{host:o,port:a}=w_(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||I_()}function Mu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function w_(t){const e=Mu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yc(o)}}}function yc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function I_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,n){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}async function b_(t,e){return Wt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(t,e){return Vr(t,"POST","/v1/accounts:signInWithPassword",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",zt(t,e))}async function A_(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends $o{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Tr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Tr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return to(e,n,"signInWithPassword",T_);case"emailLink":return R_(e,{email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return to(e,r,"signUpPassword",b_);case"emailLink":return A_(e,{idToken:n,email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(t,e){return Vr(t,"POST","/v1/accounts:signInWithIdp",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="http://localhost";class ln extends $o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ln(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sn(e,n)}buildRequest(){const e={requestUri:P_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function C_(t){const e=er(tr(t)).link,n=e?er(tr(e)).deep_link_id:null,r=er(tr(t)).deep_link_id;return(r?er(tr(r)).link:null)||r||n||e||t}class Bo{constructor(e){var n,r,s,i,o,a;const c=er(tr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=S_((s=c.mode)!==null&&s!==void 0?s:null);U(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=C_(e);try{return new Bo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(e,n){return Tr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bo.parseLink(n);return U(r,"argument-error"),Tr._fromEmailAndCode(e,r.code,r.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Mr{constructor(){super("facebook.com")}static credential(e){return ln._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ln._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Mr{constructor(){super("github.com")}static credential(e){return ln._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Mr{constructor(){super("twitter.com")}static credential(e,n){return ln._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t,e){return Vr(t,"POST","/v1/accounts:signUp",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nn._fromIdTokenResponse(e,r,s),o=vc(r);return new un({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vc(r);return new un({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends At{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ps.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ps(e,n,r,s)}}function Fu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ps._fromErrorAndOperation(t,i,e,r):i})}async function k_(t,e,n=!1){const r=await Ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return un._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ir(t,Fu(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=Fo(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),un._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(t,e,n=!1){const r="signIn",s=await Fu(t,r,e),i=await un._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function D_(t,e){return Uu(pn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(t){const e=pn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function x_(t,e,n){const r=pn(t),o=await to(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",O_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&$u(t),c}),a=await un._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function V_(t,e,n){return D_(Ee(t),qn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$u(t),r})}function M_(t,e,n,r){return Ee(t).onIdTokenChanged(e,n,r)}function L_(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function Bu(t,e,n,r){return Ee(t).onAuthStateChanged(e,n,r)}function F_(t){return Ee(t).signOut()}const Ss="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ss,"1"),this.storage.removeItem(Ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(){const t=Ce();return Uo(t)||ti(t)}const $_=1e3,B_=10;class Hu extends ju{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=U_()&&o_(),this.fallbackToPolling=Du(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);i_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,B_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hu.type="LOCAL";const j_=Hu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends ju{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qu.type="SESSION";const zu=qu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ni(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await H_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ni.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=jo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function z_(t){ht().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function W_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function G_(){return Wu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="firebaseLocalStorageDb",J_=1,Cs="firebaseLocalStorage",Gu="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ri(t,e){return t.transaction([Cs],e?"readwrite":"readonly").objectStore(Cs)}function Y_(){const t=indexedDB.deleteDatabase(Ku);return new Lr(t).toPromise()}function no(){const t=indexedDB.open(Ku,J_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cs,{keyPath:Gu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cs)?e(r):(r.close(),await Y_(),e(await no()))})})}async function Ec(t,e,n){const r=ri(t,!0).put({[Gu]:e,value:n});return new Lr(r).toPromise()}async function Q_(t,e){const n=ri(t,!1).get(e),r=await new Lr(n).toPromise();return r===void 0?null:r.value}function wc(t,e){const n=ri(t,!0).delete(e);return new Lr(n).toPromise()}const X_=800,Z_=3;class Ju{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await no(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Z_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ni._getInstance(G_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await W_(),!this.activeServiceWorker)return;this.sender=new q_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await no();return await Ec(e,Ss,"1"),await wc(e,Ss),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ec(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Q_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ri(s,!1).getAll();return new Lr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ju.type="LOCAL";const ey=Ju;new xr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){return e?vt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends $o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ny(t){return Uu(t.auth,new Ho(t),t.bypassAuthState)}function ry(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),N_(n,new Ho(t),t.bypassAuthState)}async function sy(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),k_(n,new Ho(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ny;case"linkViaPopup":case"linkViaRedirect":return sy;case"reauthViaPopup":case"reauthViaRedirect":return ry;default:nt(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new xr(2e3,1e4);class bn extends Yu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iy.get())};e()}}bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="pendingRedirect",hs=new Map;class ay extends Yu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hs.get(this.auth._key());if(!e){try{const r=await cy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hs.set(this.auth._key(),e)}return this.bypassAuthState||hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cy(t,e){const n=fy(e),r=uy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ly(t,e){hs.set(t._key(),e)}function uy(t){return vt(t._redirectPersistence)}function fy(t){return ds(oy,t.config.apiKey,t.name)}async function dy(t,e,n=!1){const r=pn(t),s=ty(r,e),o=await new ay(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=10*60*1e3;class py{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!my(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ic(e))}saveEventToCache(e){this.cachedEventUids.add(Ic(e)),this.lastProcessedEventTime=Date.now()}}function Ic(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function my(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(t,e={}){return Wt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yy=/^https?/;async function vy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gy(t);for(const n of e)try{if(Ey(n))return}catch{}nt(t,"unauthorized-domain")}function Ey(t){const e=eo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yy.test(n))return!1;if(_y.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new xr(3e4,6e4);function bc(){const t=ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Iy(t){return new Promise((e,n)=>{var r,s,i;function o(){bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bc(),n(dt(t,"network-request-failed"))},timeout:wy.get()})}if(!((s=(r=ht().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ht().gapi)===null||i===void 0)&&i.load)o();else{const a=h_("iframefcb");return ht()[a]=()=>{gapi.load?o():n(dt(t,"network-request-failed"))},Vu(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ps=null,e})}let ps=null;function by(t){return ps=ps||Iy(t),ps}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new xr(5e3,15e3),Ry="__/auth/iframe",Ay="emulator/auth/iframe",Py={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cy(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lo(e,Ay):`https://${t.config.authDomain}/${Ry}`,r={apiKey:e.apiKey,appName:t.name,v:Hn},s=Sy.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Dr(r).slice(1)}`}async function Oy(t){const e=await by(t),n=ht().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Cy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Py,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dt(t,"network-request-failed"),a=ht().setTimeout(()=>{i(o)},Ty.get());function c(){ht().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ny=500,Dy=600,xy="_blank",Vy="http://localhost";class Tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function My(t,e,n,r=Ny,s=Dy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ky),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ce().toLowerCase();n&&(a=Su(l)?xy:n),Pu(l)&&(e=e||Vy,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,b])=>`${p}${g}=${b},`,"");if(s_(l)&&a!=="_self")return Ly(e||"",a),new Tc(null);const h=window.open(e||"",a,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Tc(h)}function Ly(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="__/auth/handler",Uy="emulator/auth/handler",$y=encodeURIComponent("fac");async function Rc(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hn,eventId:s};if(e instanceof Lu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Am(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Mr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${$y}=${encodeURIComponent(c)}`:"";return`${By(t)}?${Dr(a).slice(1)}${l}`}function By({config:t}){return t.emulator?Lo(t,Uy):`https://${t.authDomain}/${Fy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="webStorageSupport";class jy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zu,this._completeRedirectFn=dy,this._overrideRedirectResult=ly}async _openPopup(e,n,r,s){var i;bt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rc(e,n,r,eo(),s);return My(e,o,jo())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Rc(e,n,r,eo(),s);return z_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Oy(e),r=new py(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Si,{type:Si},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Si];o!==void 0&&n(!!o),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Du()||Uo()||ti()}}const Hy=jy;var Ac="@firebase/auth",Pc="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Wy(t){Mn(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xu(t)},l=new f_(r,s,i,c);return v_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new an("auth-internal",e=>{const n=pn(e.getProvider("auth").getImmediate());return(r=>new qy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Ac,Pc,zy(t)),Ht(Ac,Pc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=5*60,Gy=hu("authIdTokenMaxAge")||Ky;let Sc=null;const Jy=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gy)return;const s=n==null?void 0:n.token;Sc!==s&&(Sc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Yy(t=_u()){const e=xo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=y_(t,{popupRedirectResolver:Hy,persistence:[ey,j_,zu]}),r=hu("authTokenSyncURL");if(r){const i=Jy(r);L_(n,i,()=>i(n.currentUser)),M_(n,o=>i(o))}const s=fu("auth");return s&&E_(n,`http://${s}`),n}Wy("Browser");var Qy="firebase",Xy="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(Qy,Xy,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new No("@firebase/firestore");function Os(t,...e){if(Ln.logLevel<=ee.DEBUG){const n=e.map(zo);Ln.debug(`Firestore (${zn}): ${t}`,...n)}}function qo(t,...e){if(Ln.logLevel<=ee.ERROR){const n=e.map(zo);Ln.error(`Firestore (${zn}): ${t}`,...n)}}function Xu(t,...e){if(Ln.logLevel<=ee.WARN){const n=e.map(zo);Ln.warn(`Firestore (${zn}): ${t}`,...n)}}function zo(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+t;throw qo(e),new Error(e)}function He(t,e){t||le()}function Fr(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="ok",Zy="cancelled",lr="unknown",B="invalid-argument",ev="deadline-exceeded",tv="not-found",nv="permission-denied",ro="unauthenticated",rv="resource-exhausted",Fn="failed-precondition",sv="aborted",iv="out-of-range",Zu="unimplemented",ov="internal",av="unavailable";class L extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xe.UNAUTHENTICATED))}shutdown(){}}class lv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uv{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(He(typeof e.accessToken=="string"),new ef(e.accessToken,new xe(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class fv{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class dv{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new fv(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pv{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(He(typeof e.token=="string"),new hv(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Rr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}class Ar{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ar.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ar?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Ar{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(B,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const gv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Ar{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return gv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(B,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(B,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(B,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(B,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(ge.fromString(e))}static fromName(e){return new be(ge.fromString(e).popFirst(5))}static empty(){return new be(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t,e,n){if(!n)throw new L(B,`Function ${t}() cannot be called with an empty ${e}.`)}function Oc(t){if(!be.isDocumentKey(t))throw new L(B,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kc(t){if(be.isDocumentKey(t))throw new L(B,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function si(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(B,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=si(t);throw new L(B,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr=null;function _v(){return Xr===null?Xr=function(){return 268435456+Math.round(2147483648*Math.random())}():Xr++,"0x"+Xr.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){return t==null}function ks(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nc,K;function Dc(t){if(t===void 0)return qo("RPC_ERROR","HTTP error has no status"),lr;switch(t){case 200:return Cc;case 400:return Fn;case 401:return ro;case 403:return nv;case 404:return tv;case 409:return sv;case 416:return iv;case 429:return rv;case 499:return Zy;case 500:return lr;case 501:return Zu;case 503:return av;case 504:return ev;default:return t>=200&&t<300?Cc:t>=400&&t<500?Fn:t>=500&&t<600?ov:lr}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(K=Nc||(Nc={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";class Ev extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get P(){return!1}R(n,r,s,i,o){const a=_v(),c=this.I(n,r);Os("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(l,i,o),this.p(n,c,l,s).then(u=>(Os("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Xu("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}g(n,r,s,i,o,a){return this.R(n,r,s,i,o)}V(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}I(n,r){const s=vv[n];return`${this.m}/v1/${r}:${s}`}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(c){const l=c;throw new L(Dc(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const l=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new L(Dc(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=wv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function rf(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bv("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const Tv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(t){if(He(!!t),typeof t=="string"){let e=0;const n=Tv.exec(t);if(He(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(B,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(B,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(B,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(B,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function of(t){const e=t.mapValue.fields.__previous_value__;return sf(e)?of(e):e}function Sr(t){const e=fn(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr={fields:{__type__:{stringValue:"__max__"}}};function dn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sf(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:le()}function Ns(t,e){if(t===e)return!0;const n=dn(t);if(n!==dn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sr(t).isEqual(Sr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fn(s.timestampValue),a=fn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Pr(s.bytesValue).isEqual(Pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),a=me(i.doubleValue);return o===a?ks(o)===ks(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return rf(t.arrayValue.values||[],e.arrayValue.values||[],Ns);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(xc(o)!==xc(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Ns(o[c],a[c])))return!1;return!0}(t,e);default:return le()}}function Cr(t,e){return(t.values||[]).find(n=>Ns(n,e))!==void 0}function Ds(t,e){if(t===e)return 0;const n=dn(t),r=dn(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=me(i.integerValue||i.doubleValue),c=me(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Vc(t.timestampValue,e.timestampValue);case 4:return Vc(Sr(t),Sr(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Pr(i),c=Pr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ye(a[l],c[l]);if(u!==0)return u}return ye(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ye(me(i.latitude),me(o.latitude));return a!==0?a:ye(me(i.longitude),me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ds(a[l],c[l]);if(u)return u}return ye(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Zr&&o===Zr)return 0;if(i===Zr)return 1;if(o===Zr)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const p=ye(c[h],u[h]);if(p!==0)return p;const g=Ds(a[c[h]],l[u[h]]);if(g!==0)return g}return ye(c.length,u.length)}(t.mapValue,e.mapValue);default:throw le()}}function Vc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=fn(t),r=fn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Mc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function af(t){return!!t&&"arrayValue"in t}function Lc(t){return!!t&&"nullValue"in t}function Fc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ci(t){return!!t&&"mapValue"in t}function ur(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ur(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ur(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Uc{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{}class rt extends cf{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Rv(e,n,r):n==="array-contains"?new Sv(e,r):n==="in"?new Cv(e,r):n==="not-in"?new Ov(e,r):n==="array-contains-any"?new kv(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Av(e,r):new Pv(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ds(n,this.value)):n!==null&&dn(this.value)===dn(n)&&this.matchesComparison(Ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $r extends cf{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new $r(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class Rv extends rt{constructor(e,n,r){super(e,n,r),this.key=be.fromName(r.referenceValue)}matches(e){const n=be.comparator(e.key,this.key);return this.matchesComparison(n)}}class Av extends rt{constructor(e,n){super(e,"in",n),this.keys=lf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Pv extends rt{constructor(e,n){super(e,"not-in",n),this.keys=lf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>be.fromName(r.referenceValue))}class Sv extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return af(n)&&Cr(n.arrayValue,this.value)}}class Cv extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cr(this.value.arrayValue,n)}}class Ov extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cr(this.value.arrayValue,n)}}class kv extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!af(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.timestamp=e}static fromTimestamp(e){return new we(e)}static min(){return new we(new qe(0,0))}static max(){return new we(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.comparator=e,this.root=n||Ie.EMPTY}insert(e,n){return new xs(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new xs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ie.RED,this.left=s??Ie.EMPTY,this.right=i??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ie(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ie(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.comparator=e,this.data=new xs(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $c(this.data.getIterator())}getIteratorFrom(e){return new $c(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Or)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Or(this.comparator);return n.data=e,n}}class $c{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new hn([])}unionWith(e){let n=new Or(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rf(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ci(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ur(n)}setAll(e){let n=Ve.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ur(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ci(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ns(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ci(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ur(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Be(ur(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,we.min(),we.min(),we.min(),Be.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,we.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,we.min(),we.min(),Be.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,we.min(),we.min(),Be.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.C=null}}function Bc(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Nv(t,e,n,r,s,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function Dv(t){return t.collectionGroup!==null}function xv(t){const e=Fr(t);if(e.S===null){e.S=[];const n=new Set;for(const i of e.explicitOrderBy)e.S.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Or(Ve.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.S.push(new so(i,r))}),n.has(Ve.keyField().canonicalString())||e.S.push(new so(Ve.keyField(),r))}return e.S}function Vv(t){const e=Fr(t);return e.N||(e.N=Mv(e,xv(t))),e.N}function Mv(t,e){if(t.limitType==="F")return Bc(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new so(s.field,i)});const n=t.endAt?new Uc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uc(t.startAt.position,t.startAt.inclusive):null;return Bc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function io(t,e){const n=t.filters.concat([e]);return new uf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!ks(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,s){if(r.useProto3Json){if(isNaN(s))return{doubleValue:"NaN"};if(s===1/0)return{doubleValue:"Infinity"};if(s===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ks(s)?"-0":s}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this._=void 0}}class Fv extends ii{}class Uv extends ii{constructor(e){super(),this.elements=e}}class $v extends ii{constructor(e){super(),this.elements=e}}class Bv extends ii{constructor(e,n){super(),this.serializer=e,this.q=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class oi{}class ff extends oi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wo extends oi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class df extends oi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jv extends oi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zv=(()=>({and:"AND",or:"OR"}))();class Wv{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function oo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Gv(t,e){return oo(t,e.toTimestamp())}function fr(t){return He(!!t),we.fromTimestamp(function(n){const r=fn(n);return new qe(r.seconds,r.nanos)}(t))}function Ko(t,e){return function(r){return new ge(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Vs(t,e){return Ko(t.databaseId,e.path)}function ao(t,e){const n=function(s){const i=ge.fromString(s);return He(mf(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new L(B,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(B,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new be(function(s){return He(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}(n))}function jc(t,e){return Ko(t.databaseId,e)}function hf(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hc(t,e,n){return{name:Vs(t,e),fields:n.value.mapValue.fields}}function Jv(t,e){return"found"in e?function(r,s){He(!!s.found),s.found.name,s.found.updateTime;const i=ao(r,s.found.name),o=fr(s.found.updateTime),a=s.found.createTime?fr(s.found.createTime):we.min(),c=new Be({mapValue:{fields:s.found.fields}});return lt.newFoundDocument(i,o,a,c)}(t,e):"missing"in e?function(r,s){He(!!s.missing),He(!!s.readTime);const i=ao(r,s.missing),o=fr(s.readTime);return lt.newNoDocument(i,o)}(t,e):le()}function Yv(t,e){let n;if(e instanceof ff)n={update:Hc(t,e.key,e.value)};else if(e instanceof df)n={delete:Vs(t,e.key)};else if(e instanceof Wo)n={update:Hc(t,e.key,e.data),updateMask:tE(e.fieldMask)};else{if(!(e instanceof jv))return le();n={verify:Vs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Fv)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Uv)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof $v)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Bv)return{fieldPath:o.field.canonicalString(),increment:a.q};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Gv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function Qv(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=jc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return pf($r.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:In(h.field),direction:Xv(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||yv(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Xv(t){return Hv[t]}function Zv(t){return qv[t]}function eE(t){return zv[t]}function In(t){return{fieldPath:t.canonicalString()}}function pf(t){return t instanceof rt?function(n){if(n.op==="=="){if(Fc(n.value))return{unaryFilter:{field:In(n.field),op:"IS_NAN"}};if(Lc(n.value))return{unaryFilter:{field:In(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fc(n.value))return{unaryFilter:{field:In(n.field),op:"IS_NOT_NAN"}};if(Lc(n.value))return{unaryFilter:{field:In(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:In(n.field),op:Zv(n.op),value:n.value}}}(t):t instanceof $r?function(n){const r=n.getFilters().map(s=>pf(s));return r.length===1?r[0]:{compositeFilter:{op:eE(n.op),filters:r}}}(t):le()}function tE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){return new Wv(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J=!1}Y(){if(this.J)throw new L(Fn,"The client has already been terminated.")}R(e,n,r){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.R(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ro&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(lr,s.toString())})}g(e,n,r,s){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.g(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===ro&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(lr,i.toString())})}terminate(){this.J=!0}}async function Jo(t,e){const n=Fr(t),r=hf(n.serializer)+"/documents",s={writes:e.map(i=>Yv(n.serializer,i))};await n.R("Commit",r,s)}async function rE(t,e){const n=Fr(t),r=hf(n.serializer)+"/documents",s={documents:e.map(c=>Vs(n.serializer,c))},i=await n.g("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(c=>{const l=Jv(n.serializer,c);o.set(l.key.toString(),l)});const a=[];return e.forEach(c=>{const l=o.get(c.toString());He(!!l),a.push(l)}),a}async function sE(t,e){const n=Fr(t),r=Qv(n.serializer,Vv(e));return(await n.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(o,a,c){const l=ao(o,a.name),u=fr(a.updateTime),h=a.createTime?fr(a.createTime):we.min(),p=new Be({mapValue:{fields:a.fields}}),g=lt.newFoundDocument(l,u,h,p);return c&&g.setHasCommittedMutations(),c?g.setHasCommittedMutations():g}(n.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map;function Br(t){if(t._terminated)throw new L(Fn,"The client has already been terminated.");if(!dr.has(t)){Os("ComponentProvider","Initializing Datastore");const e=function(i){return new Ev(i,fetch.bind(null))}(function(i,o,a,c){return new mv(i,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,nf(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=Go(t._databaseId),r=function(i,o,a,c){return new nE(i,o,a,c)}(t._authCredentials,t._appCheckCredentials,e,n);dr.set(t,r)}return dr.get(t)}class qc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(B,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(B,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,c){if(o===!0&&c===!0)throw new L(B,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(B,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(B,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(B,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ai{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(Fn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(Fn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cv;switch(r.type){case"firstParty":return new dv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(B,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dr.get(n);r&&(Os("ComponentProvider","Removing Datastore"),dr.delete(n),r.terminate())}(this),Promise.resolve()}}function iE(t,e){const n=typeof t=="object"?t:_u(),r=typeof t=="string"?t:e||"(default)",s=xo(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=pm("firestore");i&&oE(s,...i)}return s}function oE(t,e,n,r={}){var s;const i=(t=Wn(t,ai))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Xu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=xe.MOCK_USER;else{a=gm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(B,"mockUserToken must contain 'sub' or 'user_id' field!");c=new xe(l)}t._authCredentials=new lv(new ef(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kn(this.firestore,e,this._query)}}class ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class wt extends Kn{constructor(e,n,r){super(e,n,function(i){return new uf(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new be(e))}withConverter(e){return new wt(this.firestore,e,this._path)}}function ts(t,e,...n){if(t=Ee(t),tf("collection","path",e),t instanceof ai){const r=ge.fromString(e,...n);return kc(r),new wt(t,null,r)}{if(!(t instanceof ke||t instanceof wt))throw new L(B,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return kc(r),new wt(t.firestore,null,r)}}function ms(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=Iv.newId()),tf("doc","path",e),t instanceof ai){const r=ge.fromString(e,...n);return Oc(r),new ke(t,null,new be(r))}{if(!(t instanceof ke||t instanceof wt))throw new L(B,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Oc(r),new ke(t.firestore,t instanceof wt?t.converter:null,new be(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Tt.fromBase64String(e))}catch(n){throw new L(B,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Un(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(B,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(B,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(B,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=/^__.*__$/;class cE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wo(e,this.data,this.fieldMask,n,this.fieldTransforms):new ff(e,this.data,n,this.fieldTransforms)}}class gf{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wo(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _f(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Xo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.X(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new Xo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.et({path:r,nt:!1});return s.it(e),s}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.et({path:r,nt:!1});return s.X(),s}ot(e){return this.et({path:void 0,nt:!0})}ut(e){return Ms(e,this.settings.methodName,this.settings._t||!1,this.path,this.settings.ct)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}X(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(_f(this.tt)&&aE.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class lE{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Go(e)}lt(e,n,r,s=!1){return new Xo({tt:e,methodName:n,ct:r,path:Ve.emptyPath(),nt:!1,_t:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zo(t){const e=t._freezeSettings(),n=Go(t._databaseId);return new lE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uE(t,e,n,r,s,i={}){const o=t.lt(i.merge||i.mergeFields?2:0,e,n,s);ea("Data must be an object, but it was:",o,r);const a=yf(r,o);let c,l;if(i.merge)c=new hn(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const p=co(e,h,n);if(!o.contains(p))throw new L(B,`Field '${p}' is specified in your field mask but missing from your input data.`);Ef(u,p)||u.push(p)}c=new hn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new cE(new Be(a),c,l)}class li extends Yo{_toFieldTransform(e){if(e.tt!==2)throw e.tt===1?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof li}}function fE(t,e,n,r){const s=t.lt(1,e,n);ea("Data must be an object, but it was:",s,r);const i=[],o=Be.empty();Ur(r,(c,l)=>{const u=ta(e,c,n);l=Ee(l);const h=s.st(u);if(l instanceof li)i.push(u);else{const p=jr(l,h);p!=null&&(i.push(u),o.set(u,p))}});const a=new hn(i);return new gf(o,a,s.fieldTransforms)}function dE(t,e,n,r,s,i){const o=t.lt(1,e,n),a=[co(e,r,n)],c=[s];if(i.length%2!=0)throw new L(B,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(co(e,i[p])),c.push(i[p+1]);const l=[],u=Be.empty();for(let p=a.length-1;p>=0;--p)if(!Ef(l,a[p])){const g=a[p];let b=c[p];b=Ee(b);const S=o.st(g);if(b instanceof li)l.push(g);else{const M=jr(b,S);M!=null&&(l.push(g),u.set(g,M))}}const h=new hn(l);return new gf(u,h,o.fieldTransforms)}function hE(t,e,n,r=!1){return jr(n,t.lt(r?4:3,e))}function jr(t,e){if(vf(t=Ee(t)))return ea("Unsupported field value:",e,t),yf(t,e);if(t instanceof Yo)return function(r,s){if(!_f(s.tt))throw s.ut(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ut(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.nt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=jr(a,s.ot(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:oo(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oo(s.serializer,i)}}if(r instanceof Qo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Un)return{bytesValue:Kv(s.serializer,r._byteString)};if(r instanceof ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.ut(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ko(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.ut(`Unsupported field value: ${si(r)}`)}(t,e)}function yf(t,e){const n={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(t,(r,s)=>{const i=jr(s,e.rt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function vf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Qo||t instanceof Un||t instanceof ke||t instanceof Yo)}function ea(t,e,n){if(!vf(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=si(n);throw r==="an object"?e.ut(t+" a custom object"):e.ut(t+" "+r)}}function co(t,e,n){if((e=Ee(e))instanceof ci)return e._internalPath;if(typeof e=="string")return ta(t,e);throw Ms("Field path arguments must be of type string or ",t,!1,void 0,n)}const pE=new RegExp("[~\\*/\\[\\]]");function ta(t,e,n){if(e.search(pE)>=0)throw Ms(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ci(...e.split("."))._internalPath}catch{throw Ms(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ms(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new L(B,a+t+c)}function Ef(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new If(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class If extends wf{data(){return super.data()}}class mE{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function bf(t,e){return typeof e=="string"?ta(t,e):e instanceof ci?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{}class gE extends na{}function _E(t,e,...n){let r=[];e instanceof na&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof ra).length,a=i.filter(c=>c instanceof ui).length;if(o>1||o>0&&a>0)throw new L(B,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ui extends gE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ui(e,n,r)}_apply(e){const n=this._parse(e);return Tf(e._query,n),new Kn(e.firestore,e.converter,io(e._query,n))}_parse(e){const n=Zo(e.firestore);return function(i,o,a,c,l,u,h){let p;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(B,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Wc(h,u);const g=[];for(const b of h)g.push(zc(c,i,b));p={arrayValue:{values:g}}}else p=zc(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Wc(h,u),p=hE(a,o,h,u==="in"||u==="not-in");return rt.create(l,u,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function yE(t,e,n){const r=e,s=bf("where",t);return ui._create(s,r,n)}class ra extends na{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ra(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$r.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Tf(o,c),o=io(o,c)}(e._query,n),new Kn(e.firestore,e.converter,io(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zc(t,e,n){if(typeof(n=Ee(n))=="string"){if(n==="")throw new L(B,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dv(e)&&n.indexOf("/")!==-1)throw new L(B,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!be.isDocumentKey(r))throw new L(B,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mc(t,new be(r))}if(n instanceof ke)return Mc(t,n._key);throw new L(B,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${si(n)}.`)}function Wc(t,e){if(!Array.isArray(t)||t.length===0)throw new L(B,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tf(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(B,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(B,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Rf extends class{convertValue(n,r="none"){switch(dn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return me(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(Pr(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw le()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const s={};return Ur(n,(i,o)=>{s[i]=this.convertValue(o,r)}),s}convertGeoPoint(n){return new Qo(me(n.latitude),me(n.longitude))}convertArray(n,r){return(n.values||[]).map(s=>this.convertValue(s,r))}convertServerTimestamp(n,r){switch(r){case"previous":const s=of(n);return s==null?null:this.convertValue(s,r);case"estimate":return this.convertTimestamp(Sr(n));default:return null}}convertTimestamp(n){const r=fn(n);return new qe(r.seconds,r.nanos)}convertDocumentKey(n,r){const s=ge.fromString(n);He(mf(s));const i=new Rr(s.get(1),s.get(3)),o=new be(s.popFirst(5));return i.isEqual(r)||qo(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function Oi(t){const e=Br((t=Wn(t,ke)).firestore),n=new Rf(t.firestore);return rE(e,[t._key]).then(r=>{He(r.length===1);const s=r[0];return new wf(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)})}function EE(t){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new L(Zu,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Wn(t,Kn))._query);const e=Br(t.firestore),n=new Rf(t.firestore);return sE(e,t._query).then(r=>{const s=r.map(i=>new If(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new mE(t,s)})}function wE(t,e,n,...r){const s=Zo((t=Wn(t,ke)).firestore);let i;return i=typeof(e=Ee(e))=="string"||e instanceof ci?dE(s,"updateDoc",t._key,e,n,r):fE(s,"updateDoc",t._key,e),Jo(Br(t.firestore),[i.toMutation(t._key,rn.exists(!0))])}function IE(t){return Jo(Br((t=Wn(t,ke)).firestore),[new df(t._key,rn.none())])}function bE(t,e){const n=ms(t=Wn(t,wt)),r=vE(t.converter,e),s=uE(Zo(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return Jo(Br(t.firestore),[s.toMutation(n._key,rn.exists(!1))]).then(()=>n)}(function(){(function(n){zn=n})(`${Hn}_lite`),Mn(new an("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new ai(new uv(e.getProvider("auth-internal")),new pv(e.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(B,'"projectId" not provided in firebase.initializeApp.');return new Rr(a.options.projectId,c)}(s,n),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Ht("firestore-lite","4.3.2",""),Ht("firestore-lite","4.3.2","esm2017")})();const TE={apiKey:"AIzaSyDS1YgqN4PmB35NaQoCF2tCjswb-BIO39o",authDomain:"vue-2022-a0b86.firebaseapp.com",projectId:"vue-2022-a0b86",storageBucket:"vue-2022-a0b86.appspot.com",messagingSenderId:"286001330890",appId:"1:286001330890:web:5cc4ae1781f5ca490a9233"};gu(TE);const ft=Yy(),Qn=iE();let RE=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const Ls=Ql("database",{state:()=>({documents:[],loadingDoc:!1}),actions:{async getUrls(){this.loadingDoc=!0;try{const t=_E(ts(Qn,"urls"),yE("user","==",ft.currentUser.uid));(await EE(t)).forEach(n=>{console.log(n.id,n.data()),this.documents.push({id:n.id,...n.data()})})}catch(t){console.log(t)}finally{this.loadingDoc=!1}},async addUrl(t){this.loadingDoc=!0;try{const e={name:t,short:RE(6),user:ft.currentUser.uid},n=await bE(ts(Qn,"urls"),e);this.documents.push({...e,id:n.id})}catch(e){console.log(e)}finally{this.loadingDoc=!1}},async readDoc(t){this.loadingDoc=!0;try{const e=ms(ts(Qn,"urls"),t),n=await Oi(e);if(!n.exists())throw new Error(" no existe el doc");if(n.data().user!==ft.currentUser.uid)throw new Error(" no le pertenece");return n.data().name}catch(e){console.log(e.message)}finally{this.loadingDoc=!1}},async updateUrl(t,e){this.loadingDoc=!0;try{const n=ms(Qn,"urls",t),r=await Oi(n);if(!r.exists())throw new Error(" no existe el doc");if(r.data().user!==ft.currentUser.uid)throw new Error(" no le pertenece");await wE(n,{name:e}),this.documents=this.documents.map(s=>s.id===t?{...s,name:e}:s),hr.push("/")}catch(n){console.log(n.message)}finally{this.loadingDoc=!1}},async deletedUrl(t){this.loadingDoc=!0;try{const e=ms(ts(Qn,"urls"),t),n=await Oi(e);if(!n.exists())throw new Error(" no existe el doc");if(n.data().user!==ft.currentUser.uid)throw new Error(" no le pertenece");await IE(e),this.documents=this.documents.filter(r=>r.id!==t)}catch(e){console.log(e.message)}finally{this.loadingDoc=!1}}}}),AE=oe("h1",null,"HOMEEEE ",-1),PE={key:0},SE={key:1},CE=["onSubmit"],OE=oe("button",{type:"submit"},"send",-1),kE=["onClick"],NE=["onClick"],DE={__name:"HomeView",setup(t){const e=Ls(),n=im();e.getUrls(),Hr(),Bu(ft,i=>{});const r=It(""),s=()=>{e.addUrl(r.value)};return(i,o)=>(Pe(),Ke("div",null,[AE,ue(e).loadingDoc?(Pe(),Ke("p",PE," cargando DOCSSSS......")):(Pe(),Ke("div",SE,[oe("form",{onSubmit:Qs(s,["prevent"])},[On(oe("input",{type:"text",placeholder:"urls","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a)},null,512),[[Dn,r.value]]),OE],40,CE),(Pe(!0),Ke(at,null,Hd(ue(e).documents,a=>(Pe(),Ke("div",{key:a.id},[oe("p",null,Ff(a.id),1),oe("button",{onClick:c=>ue(e).deletedUrl(a.id)},"eliminar",8,kE),oe("button",{onClick:c=>ue(n).push(`/editar/${a.id}`)},"editar",8,NE)]))),128))]))]))}},xE=oe("h1",null,"REGISTERRRRRR",-1),VE=["onSubmit"],ME=["disabled"],LE={__name:"RegisterView",setup(t){const e=Hr(),n=It(""),r=It(""),s=async()=>{if(!n.value||!r.value)return alert("rellena los campos");await e.register(n.value,r.value)};return(i,o)=>(Pe(),Ke("div",null,[xE,oe("form",{onSubmit:Qs(s,["prevent"])},[On(oe("input",{type:"email",placeholder:"email","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a)},null,512),[[Dn,n.value,void 0,{trim:!0}]]),On(oe("input",{type:"password",placeholder:"password","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[Dn,r.value,void 0,{trim:!0}]]),oe("button",{type:"submit",disabled:ue(e).loadIn},"crear usuario",8,ME)],40,VE)]))}},FE=oe("h1",null,"login",-1),UE=["onSubmit"],$E=["disabled"],BE={__name:"LogInView",setup(t){const e=Hr(),n=It(""),r=It(""),s=async()=>{if(!n.value||!r.value)return alert("rellena los campos");await e.logIn(n.value,r.value)};return(i,o)=>(Pe(),Ke("div",null,[FE,oe("form",{onSubmit:Qs(s,["prevent"])},[On(oe("input",{type:"email",placeholder:"email","onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a)},null,512),[[Dn,n.value,void 0,{trim:!0}]]),On(oe("input",{type:"password",placeholder:"password","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[Dn,r.value,void 0,{trim:!0}]]),oe("button",{type:"submit",disabled:ue(e).loadIn},"acc",8,$E)],40,UE)]))}},jE={key:0},HE={key:1},qE=oe("h1",null,"EDIISOMNM id:route.params",-1),zE=["onSubmit"],WE=oe("button",{type:"submit"},"send",-1),KE={__name:"EditarView",setup(t){const e=om(),n=Ls(),r=It(""),s=()=>{n.updateUrl(e.params.id,r.value)};return Nl(async()=>{r.value=await n.readDoc(e.params.id)}),(i,o)=>ue(n).loadingDoc?(Pe(),Ke("p",jE," cargando DOCSSSS......")):(Pe(),Ke("div",HE,[qE,oe("form",{onSubmit:Qs(s,["prevent"])},[On(oe("input",{type:"text",placeholder:"url","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a)},null,512),[[Dn,r.value]]),WE],40,zE)]))}},Kc=async(t,e,n)=>{const r=Hr();r.loadingSession=!0,await r.currentUser()?n():n("/login"),r.loadingSession=!1},GE=[{path:"/",component:DE,beforeEnter:Kc},{path:"/editar/:id",component:KE,beforeEnter:Kc},{path:"/register",component:LE},{path:"/login",component:BE}],hr=rm({routes:GE,history:Ep()}),Hr=Ql("userStore",{state:()=>({userData:null,loadIn:!1,loadingSession:!1}),actions:{async register(t,e){this.loadIn=!0;try{const{user:n}=await x_(ft,t,e);console.log(n),this.userData={email:n.email,uid:n.uid,password:n.password},hr.push("/")}catch(n){console.log(n)}finally{this.loadIn=!1}},async logIn(t,e){this.loadIn=!0;try{const{user:n}=await V_(ft,t,e);this.userData={email:n.email,uid:n.uid,password:n.password},hr.push("/")}catch(n){console.log(n)}finally{this.loadIn=!1}},async logOut(){Ls().$reset(),this.loadIn=!0;try{await F_(ft),this.userData=null,hr.push("/login")}catch(e){console.log(e)}finally{this.loadIn=!1}},currentUser(){let t;return new Promise((e,n)=>{t=Bu(ft,r=>{r?this.userData={email:r.email,uid:r.uid}:this.userData=null,e(r)})}).then(e=>(Ls().$reset(),t(),e))}}}),JE={key:0},YE=["disabled"],QE={key:1},XE={__name:"App",setup(t){const e=Hr(),n=async()=>{await e.logOut()};return(r,s)=>{const i=Ad("router-view");return Pe(),Ke("div",null,[ue(e).loadingSession?(Pe(),Ke("div",QE," cargando... ")):(Pe(),Ke("nav",JE,[ue(e).userData?mi("",!0):(Pe(),as(ue(us),{key:0,class:"link",to:"/login"},{default:ss(()=>[ls("LogIn")]),_:1})),ue(e).userData?(Pe(),as(ue(us),{key:1,class:"link",to:"/"},{default:ss(()=>[ls("Home")]),_:1})):mi("",!0),ue(e).userData?mi("",!0):(Pe(),as(ue(us),{key:2,class:"link",to:"/register"},{default:ss(()=>[ls("Register")]),_:1})),oe("button",{onClick:n,disabled:ue(e).loadIn},"log out",8,YE)])),Me(i)])}}};Gh(XE).use(hr).use(Qh()).mount("#app");
