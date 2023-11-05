/*!
* CookieConsent 3.0.0-rc.16
* https://github.com/orestbida/cookieconsent/tree/v3.0-beta
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='data-category';class s{constructor(){this.t={mode:t,revision:0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],C:!1,v:null,S:null,h:null,D:'',T:!0,N:!1,k:!0,j:[],F:!1,O:'',I:!1,M:[],A:[],R:[],P:[],B:!1,J:!1,L:!1,U:[],G:[],H:[],q:{},K:{},V:{},W:{},X:{},Y:[]},this.Z={$:{},ee:{}},this.te={},this.oe={ne:'cc:onFirstConsent',se:'cc:onConsent',ce:'cc:onChange'}}}const c=new s,r=(e,t)=>e.indexOf(t),a=(e,t)=>-1!==r(e,t),i=e=>Array.isArray(e),l=e=>'string'==typeof e,f=e=>!!e&&'object'==typeof e&&!i(e),d=e=>'function'==typeof e,_=e=>Object.keys(e),u=e=>Array.from(new Set(e)),p=e=>e.dispatchEvent(new Event('change')),m=e=>{const t=document.createElement(e);return'button'===e&&(t.type=e),t},g=(e,t,o)=>e.setAttribute(t,o),C=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},v=(e,t,o)=>e.getAttribute(o?'data-'+t:t),y=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=y(n)}return t},S=()=>{const e={},{M:t,q:o,K:n}=c.o;for(const s of t)e[s]=b(n[s],_(o[s]));return e},h=()=>{const e=c.t.cookie.expiresAfterDays;return d(e)?e(c.o.O):e},b=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!a(n,e))).concat(n.filter((e=>!a(o,e))))},w=e=>{c.o.A=u(e),c.o.O=(()=>{let e='custom';const{A:t,M:o,R:n}=c.o,s=t.length;return s===o.length?e='all':s===n.length&&(e='necessary'),e})()},D=(e,t,o)=>{const{ce:n,se:s,ne:r,re:a,ae:i,ie:l}=c.te,f=c.oe,_={cookie:c.o.p};e===f.ne?d(r)&&r(y(_)):e===f.se?d(s)&&s(y(_)):(_.changedCategories=c.o.j,_.changedServices=c.o.W,d(n)&&n(y(_))),((e,t)=>{dispatchEvent(new CustomEvent(e,{detail:t}))})(e,y(_))},T=e=>{const{K:t,W:o,M:s,q:r,Y:i,p:l,j:f}=c.o;for(const e of s){const n=o[e]||t[e]||[];for(const o of n){const n=r[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.le&&a(t[e],o)&&d(s)?(n.le=!0,s()):n.le&&!a(t[e],o)&&d(c)&&(n.le=!1,c())}}if(!c.t.manageScriptTags)return;const _=i,u=e||l.categories||[],p=(e,s)=>{if(s>=e.length)return;const c=i[s];if(c.fe)return p(e,s+1);const r=c.de,l=c._e,d=c.ue,_=a(u,l),y=!!d&&a(t[l],d);if(!d&&!c.pe&&_||!d&&c.pe&&!_&&a(f,l)||d&&!c.pe&&y||d&&c.pe&&!y&&a(o[l]||[],d)){c.fe=!0;const t=v(r,'type',!0);C(r,'type',!!t),C(r,n);let o=v(r,'src',!0);o&&C(r,'src',!0);const a=m('script');a.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)g(a,e,r[e]||v(r,e));t&&(a.type=t),o?a.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(a.onload=a.onerror=()=>{p(e,++s)}),r.replaceWith(a),i)return}p(e,++s)};p(_,0)},E=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=r(e,t);return o>-1?[e[o]]:[]}},N=e=>{const{hostname:t,protocol:o}=location,{name:n,path:s,domain:r,sameSite:i}=c.t.cookie,l=encodeURIComponent(JSON.stringify(c.o.p)),f=e?(()=>{const e=c.o.h,t=e?new Date-e:0;return 864e5*h()-t})():864e5*h(),d=new Date;d.setTime(d.getTime()+f);let _=n+'='+l+(0!==f?'; expires='+d.toUTCString():'')+'; Path='+s+'; SameSite='+i;a(t,'.')&&(_+='; Domain='+r),'https:'===o&&(_+='; Secure'),document.cookie=_,c.o.p},x=(e,t,o)=>{if(0===e.length)return;const n=o||c.t.cookie.domain,s=t||c.t.cookie.path,r='www.'===n.slice(0,4),a=r&&n.substring(4),i=(e,t)=>{document.cookie=e+'=; path='+s+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)i(t),i(t,n),r&&i(t,a)},k=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(j(e||c.t.cookie.name,!0)),j=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},F=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];if(e)try{e.test(t)&&o.push(t)}catch(e){}else o.push(t)}return o},O=(e,n=[])=>{((e,t)=>{const{M:o,A:n,R:s,me:r,V:f,q:d}=c.o;let u=[];if(e){i(e)?u.push(...e):l(e)&&(u='all'===e?o:[e]);for(const e of o)f[e]=a(u,e)?_(d[e]):[]}else u=r?(()=>{const e=c.Z.$;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})():n;u=u.filter((e=>!a(o,e)||!a(t,e))),u.push(...s),w(u)})(e,n),(e=>{const t=c.o,{V:o,R:n,K:s,q:r,M:i}=t,l=i;t.X=y(s);for(const e of l){const t=r[e],c=_(t),i=o[e]&&o[e].length>0,l=a(n,e);if(0!==c.length){if(s[e]=[],l)s[e].push(...c);else if(i){const t=o[e];s[e].push(...t)}else s[e]=[];s[e]=u(s[e])}}})(),(()=>{const e=c.o;e.j=c.t.mode===o&&e.T?b(e.P,e.A):b(e.A,e.p.categories);let n=e.j.length>0,s=!1;for(const t of e.M)e.W[t]=b(e.K[t],e.X[t]),e.W[t].length>0&&(s=!0);const r=c.Z.$;for(const t in r)r[t].checked=a(e.A,t);for(const t of e.M){const o=c.Z.ee[t],n=e.K[t];for(const e in o)o[e].checked=a(n,e)}e.S||(e.S=new Date),e.D||(e.D=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:y(e.A),revision:c.t.revision,data:e.v,consentTimestamp:e.S.toISOString(),consentId:e.D,services:y(e.K)};let i=!1;const l=n||s;(e.T||l)&&(e.T&&(e.T=!1,i=!0),e.h=e.h?new Date:e.S,e.p.lastConsentTimestamp=e.h.toISOString(),N(),c.t.autoClearCookies&&(i||l)&&(e=>{const t=c.o,o=F(),n=(e=>{const t=c.o;return(e?t.M:t.j).filter((e=>{const o=t.I[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.W)for(const n of t.W[e]){const s=t.q[e][n].cookies;if(!a(t.K[e],n)&&s)for(const e of s){const t=E(o,e.name);x(t,e.path,e.domain)}}for(const s of n){const n=t.I[s].autoClear,c=n&&n.cookies||[],r=a(t.j,s),i=!a(t.A,s),l=r&&i;if(e?i:l){n.reloadPage&&l&&(t.F=!0);for(const e of c){const t=E(o,e.name);x(t,e.path,e.domain)}}}})(i),T()),i&&(D(c.oe.ne),D(c.oe.se),c.t.mode===t)||(l&&D(c.oe.ce),e.F&&(e.F=!1,location.reload()))})()},I=(e,t,o)=>{let n=[];const s=e=>{if(l(e)){let t=j(e);''!==t&&n.push(t)}else n.push(...F(e))};if(i(e))for(let t of e)s(t);else s(e);x(n,t,o)},M=(e,t)=>{const o=k(t);return e?o[e]:o},A=()=>!c.o.T;e.acceptCategory=O,e.acceptService=(e,t)=>{const{M:o,q:n}=c.o;if(!(e&&t&&l(t)&&a(o,t)&&0!==_(n[t]).length))return!1;((e,t)=>{const o=c.o,{q:n,V:s,me:r}=o,f=c.Z.ee[t]||{},d=c.Z.$[t]||{},m=_(n[t]);if(s[t]=[],l(e)){if('all'===e){if(s[t].push(...m),r)for(let e in f)f[e].checked=!0,p(f[e])}else if(a(m,e)&&s[t].push(e),r)for(let t in f)f[t].checked=e===t,p(f[t])}else if(i(e))for(let o of m){const n=a(e,o);n&&s[t].push(o),r&&(f[o].checked=n,p(f[o]))}const g=0===s[t].length;o.A=g?o.A.filter((e=>e!==t)):u([...o.A,t]),r&&(d.checked=!g,p(d))})(e,t),O()},e.acceptedCategory=e=>{const t=c.o.T?[]:c.o.A;return a(t,e)},e.acceptedService=(e,t)=>{const o=c.o.T?[]:c.o.K[t];return a(o,e)},e.eraseCookies=I,e.getConfig=e=>{const t=c.t,o=c.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=M,e.getUserPreferences=()=>{const{O:e,K:t}=c.o,{accepted:o,rejected:n}=(()=>{const{T:e,A:t,M:o}=c.o;return{accepted:t,rejected:e?[]:o.filter((e=>!a(t,e)))}})();return y({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:S()})},e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=m('script'),f(t))for(const e in t)g(o,e,t[e]);var s,c;o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,s=document.head,c=o,s.appendChild(c)}))},e.reset=e=>{const{name:t,path:o,domain:n}=c.t.cookie;e&&I(t,o,n);for(const{ge:e,Ce:t,ve:o}of c.o.m)e.removeEventListener(t,o);const r=new s;for(const e in c)c[e]=r[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:s,oe:r}=c,d=window;if(!d._ccRun){if(d._ccRun=!0,(e=>{const{Z:t,t:s,o:r}=c,i=s,l=r,{cookie:d}=i,u=c.te,p=e.cookie,m=e.categories,g=_(m)||[],C=navigator,y=document;t.ye=y,t.Se=y.documentElement,d.domain=location.hostname,l.i=e,l.I=m,l.M=g,u.ne=e.onFirstConsent,u.se=e.onConsent,u.ce=e.onChange;const{mode:S,autoClearCookies:h,revision:b,manageScriptTags:w,hideFromBots:D}=e;S===o&&(i.mode=S),'boolean'==typeof h&&(i.autoClearCookies=h),'boolean'==typeof w&&(i.manageScriptTags=w),'number'==typeof b&&b>=0&&(i.revision=b,l.N=!0),!1===D&&(i.hideFromBots=!1),!0===i.hideFromBots&&C&&(l.B=C.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(C.userAgent)||C.webdriver),f(p)&&(i.cookie={...d,...p}),i.autoClearCookies,l.N,i.manageScriptTags,(e=>{const{I:t,q:o,K:n,V:s,R:r}=c.o;for(let a of e){const e=t[a],i=e.services||{},l=f(i)&&_(i)||[];o[a]={},n[a]=[],s[a]=[],e.readOnly&&(r.push(a),n[a]=l),c.Z.ee[a]={};for(let e of l){const t=i[e];t.le=!1,o[a][e]=t}}})(g),(()=>{if(!c.t.manageScriptTags)return;const e=c.o,t=(o=document,s='script['+n+']',o.querySelectorAll(s));var o,s;for(const o of t){let t=v(o,n),s=o.dataset.service||'',c=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),c=!0),'!'===s.charAt(0)&&(s=s.slice(1),c=!0),a(e.M,t)&&(e.Y.push({de:o,fe:!1,pe:c,_e:t,ue:s}),s)){const o=e.q[t];o[s]||(o[s]={le:!1})}}})()})(e),t.B)return;if((()=>{const e=c.o,t=c.t,n=k(),{categories:s,services:r,consentId:a,consentTimestamp:f,lastConsentTimestamp:d,data:_,revision:u}=n,p=i(s);e.p=n,e.D=a;const m=!!a&&l(a);e.S=f,e.S&&(e.S=new Date(f)),e.h=d,e.h&&(e.h=new Date(d)),e.v=void 0!==_?_:null,e.N&&m&&u!==t.revision&&(e.k=!1),e.T=!(m&&e.k&&e.S&&e.h&&p),e.T,(()=>{const e=c.o;for(const t of e.M){const n=e.I[t];if(n.readOnly||n.enabled&&e.i.mode===o){e.P.push(t);const o=e.q[t]||{};for(let n in o)e.K[t].push(n)}}})(),e.T?t.mode===o&&(e.A=[...e.P]):(e.K={...e.K,...r},w([...e.R,...s])),e.V={...e.K}})(),A())return T(),D(r.se);s.mode===o&&T(t.P)}},e.setCookieData=e=>{let t,o=e.value,n=e.mode,s=!1;const r=c.o;if('update'===n){r.v=t=M('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],s=!0)}else!e&&t||t===o||(t=o,s=!0)}else t=o,s=!0;return s&&(r.v=t,r.p.data=t,N(!0)),s},e.validConsent=A,e.validCookie=e=>''!==j(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
