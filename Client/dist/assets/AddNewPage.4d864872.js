import{s as w,j as S,F as xe,a as c,r as ke}from"./index.9f59fa28.js";import{l as Ie}from"./Logo-v5.756ba38c.js";var G={exports:{}},we=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},qe=we,Y=Object.prototype.toString,Z=function(r){return function(e){var t=Y.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return Z(t)===r}}function ee(r){return Array.isArray(r)}function j(r){return typeof r=="undefined"}function Me(r){return r!==null&&!j(r)&&r.constructor!==null&&!j(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var ge=A("ArrayBuffer");function ze(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&ge(r.buffer),e}function He(r){return typeof r=="string"}function Je(r){return typeof r=="number"}function Re(r){return r!==null&&typeof r=="object"}function L(r){if(Z(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var We=A("Date"),Ve=A("File"),Xe=A("Blob"),Ke=A("FileList");function re(r){return Y.call(r)==="[object Function]"}function Qe(r){return Re(r)&&re(r.pipe)}function Ge(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Y.call(r)===e||re(r.toString)&&r.toString()===e)}var Ye=A("URLSearchParams");function Ze(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function er(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function te(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),ee(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function K(){var r={};function e(n,a){L(r[a])&&L(n)?r[a]=K(r[a],n):L(n)?r[a]=K({},n):ee(n)?r[a]=n.slice():r[a]=n}for(var t=0,i=arguments.length;t<i;t++)te(arguments[t],e);return r}function rr(r,e,t){return te(e,function(n,a){t&&typeof n=="function"?r[a]=qe(n,t):r[a]=n}),r}function tr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function nr(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function ir(r,e,t){var i,n,a,o={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)a=i[n],o[a]||(e[a]=r[a],o[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function ar(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function or(r){if(!r)return null;var e=r.length;if(j(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var sr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:ee,isArrayBuffer:ge,isBuffer:Me,isFormData:Ge,isArrayBufferView:ze,isString:He,isNumber:Je,isObject:Re,isPlainObject:L,isUndefined:j,isDate:We,isFile:Ve,isBlob:Xe,isFunction:re,isStream:Qe,isURLSearchParams:Ye,isStandardBrowserEnv:er,forEach:te,merge:K,extend:rr,trim:Ze,stripBOM:tr,inherits:nr,toFlatObject:ir,kindOf:Z,kindOfTest:A,endsWith:ar,toArray:or,isTypedArray:sr,isFileList:Ke},T=h;function se(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Se=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(T.isURLSearchParams(t))n=t.toString();else{var a=[];T.forEach(t,function(l,p){l===null||typeof l=="undefined"||(T.isArray(l)?p=p+"[]":l=[l],T.forEach(l,function(f){T.isDate(f)?f=f.toISOString():T.isObject(f)&&(f=JSON.stringify(f)),a.push(se(p)+"="+se(f))}))}),n=a.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},ur=h;function k(){this.handlers=[]}k.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};k.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};k.prototype.forEach=function(e){ur.forEach(this.handlers,function(i){i!==null&&e(i)})};var lr=k,fr=h,dr=function(e,t){fr.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},Oe=h;function P(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}Oe.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ae=P.prototype,Ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Ce[r]={value:r}});Object.defineProperties(P,Ce);Object.defineProperty(Ae,"isAxiosError",{value:!0});P.from=function(r,e,t,i,n,a){var o=Object.create(Ae);return Oe.toFlatObject(r,o,function(l){return l!==Error.prototype}),P.call(o,r.message,e,t,i,n),o.name=r.name,a&&Object.assign(o,a),o};var D=P,Te={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},x=h;function cr(r,e){e=e||new FormData;var t=[];function i(a){return a===null?"":x.isDate(a)?a.toISOString():x.isArrayBuffer(a)||x.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,o){if(x.isPlainObject(a)||x.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+o);t.push(a),x.forEach(a,function(l,p){if(!x.isUndefined(l)){var s=o?o+"."+p:p,f;if(l&&!o&&typeof l=="object"){if(x.endsWith(p,"{}"))l=JSON.stringify(l);else if(x.endsWith(p,"[]")&&(f=x.toArray(l))){f.forEach(function(b){!x.isUndefined(b)&&e.append(s,i(b))});return}}n(l,s)}}),t.pop()}else e.append(o,i(a))}return n(r),e}var Ne=cr,J=D,pr=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new J("Request failed with status code "+i.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},U=h,hr=U.isStandardBrowserEnv()?function(){return{write:function(t,i,n,a,o,u){var l=[];l.push(t+"="+encodeURIComponent(i)),U.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),U.isString(a)&&l.push("path="+a),U.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),mr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},vr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},br=mr,Er=vr,Pe=function(e,t){return e&&!br(t)?Er(e,t):t},W=h,yr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],xr=function(e){var t={},i,n,a;return e&&W.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),i=W.trim(u.substr(0,a)).toLowerCase(),n=W.trim(u.substr(a+1)),i){if(t[i]&&yr.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t},ue=h,wr=ue.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(a){var o=a;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(o){var u=ue.isString(o)?n(o):o;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}(),Q=D,gr=h;function _e(r){Q.call(this,r==null?"canceled":r,Q.ERR_CANCELED),this.name="CanceledError"}gr.inherits(_e,Q,{__CANCEL__:!0});var I=_e,Rr=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},B=h,Sr=pr,Or=hr,Ar=Se,Cr=Pe,Tr=xr,Nr=wr,Pr=Te,g=D,_r=I,$r=Rr,le=function(e){return new Promise(function(i,n){var a=e.data,o=e.headers,u=e.responseType,l;function p(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}B.isFormData(a)&&B.isStandardBrowserEnv()&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+b)}var m=Cr(e.baseURL,e.url);s.open(e.method.toUpperCase(),Ar(m,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function ae(){if(!!s){var y="getAllResponseHeaders"in s?Tr(s.getAllResponseHeaders()):null,C=!u||u==="text"||u==="json"?s.responseText:s.response,O={data:C,status:s.status,statusText:s.statusText,headers:y,config:e,request:s};Sr(function(H){i(H),p()},function(H){n(H),p()},O),s=null}}if("onloadend"in s?s.onloadend=ae:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(ae)},s.onabort=function(){!s||(n(new g("Request aborted",g.ECONNABORTED,e,s)),s=null)},s.onerror=function(){n(new g("Network Error",g.ERR_NETWORK,e,s,s)),s=null},s.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||Pr;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),n(new g(C,O.clarifyTimeoutError?g.ETIMEDOUT:g.ECONNABORTED,e,s)),s=null},B.isStandardBrowserEnv()){var oe=(e.withCredentials||Nr(m))&&e.xsrfCookieName?Or.read(e.xsrfCookieName):void 0;oe&&(o[e.xsrfHeaderName]=oe)}"setRequestHeader"in s&&B.forEach(o,function(C,O){typeof a=="undefined"&&O.toLowerCase()==="content-type"?delete o[O]:s.setRequestHeader(O,C)}),B.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(y){!s||(n(!y||y&&y.type?new _r:y),s.abort(),s=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null);var z=$r(m);if(z&&["http","https","file"].indexOf(z)===-1){n(new g("Unsupported protocol "+z+":",g.ERR_BAD_REQUEST,e));return}s.send(a)})},Dr=null,d=h,fe=dr,de=D,Br=Te,Ur=Ne,Lr={"Content-Type":"application/x-www-form-urlencoded"};function ce(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Fr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=le),r}function jr(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var q={transitional:Br,adapter:Fr(),transformRequest:[function(e,t){if(fe(t,"Accept"),fe(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return ce(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=d.isObject(e),n=t&&t["Content-Type"],a;if((a=d.isFileList(e))||i&&n==="multipart/form-data"){var o=this.env&&this.env.FormData;return Ur(a?{"files[]":e}:e,o&&new o)}else if(i||n==="application/json")return ce(t,"application/json"),jr(e);return e}],transformResponse:[function(e){var t=this.transitional||q.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?de.from(o,de.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],function(e){q.headers[e]={}});d.forEach(["post","put","patch"],function(e){q.headers[e]=d.merge(Lr)});var ne=q,kr=h,Ir=ne,qr=function(e,t,i){var n=this||Ir;return kr.forEach(i,function(o){e=o.call(n,e,t)}),e},$e=function(e){return!!(e&&e.__CANCEL__)},pe=h,V=qr,Mr=$e,zr=ne,Hr=I;function X(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Hr}var Jr=function(e){X(e),e.headers=e.headers||{},e.data=V.call(e,e.data,e.headers,e.transformRequest),e.headers=pe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),pe.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||zr.adapter;return t(e).then(function(n){return X(e),n.data=V.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Mr(n)||(X(e),n&&n.response&&(n.response.data=V.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,De=function(e,t){t=t||{};var i={};function n(s,f){return E.isPlainObject(s)&&E.isPlainObject(f)?E.merge(s,f):E.isPlainObject(f)?E.merge({},f):E.isArray(f)?f.slice():f}function a(s){if(E.isUndefined(t[s])){if(!E.isUndefined(e[s]))return n(void 0,e[s])}else return n(e[s],t[s])}function o(s){if(!E.isUndefined(t[s]))return n(void 0,t[s])}function u(s){if(E.isUndefined(t[s])){if(!E.isUndefined(e[s]))return n(void 0,e[s])}else return n(void 0,t[s])}function l(s){if(s in t)return n(e[s],t[s]);if(s in e)return n(void 0,e[s])}var p={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var b=p[f]||a,m=b(f);E.isUndefined(m)&&b!==l||(i[f]=m)}),i},Be={version:"0.27.2"},Wr=Be.version,R=D,ie={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ie[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var he={};ie.transitional=function(e,t,i){function n(a,o){return"[Axios v"+Wr+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return function(a,o,u){if(e===!1)throw new R(n(o," has been removed"+(t?" in "+t:"")),R.ERR_DEPRECATED);return t&&!he[o]&&(he[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,o,u):!0}};function Vr(r,e,t){if(typeof r!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var a=i[n],o=e[a];if(o){var u=r[a],l=u===void 0||o(u,a,r);if(l!==!0)throw new R("option "+a+" must be "+l,R.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new R("Unknown option "+a,R.ERR_BAD_OPTION)}}var Xr={assertOptions:Vr,validators:ie},Ue=h,Kr=Se,me=lr,ve=Jr,M=De,Qr=Pe,Le=Xr,N=Le.validators;function _(r){this.defaults=r,this.interceptors={request:new me,response:new me}}_.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=M(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&Le.assertOptions(i,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(a=a&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var o=[];this.interceptors.response.forEach(function(m){o.push(m.fulfilled,m.rejected)});var u;if(!a){var l=[ve,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var p=t;n.length;){var s=n.shift(),f=n.shift();try{p=s(p)}catch(b){f(b);break}}try{u=ve(p)}catch(b){return Promise.reject(b)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};_.prototype.getUri=function(e){e=M(this.defaults,e);var t=Qr(e.baseURL,e.url);return Kr(t,e.params,e.paramsSerializer)};Ue.forEach(["delete","get","head","options"],function(e){_.prototype[e]=function(t,i){return this.request(M(i||{},{method:e,url:t,data:(i||{}).data}))}});Ue.forEach(["post","put","patch"],function(e){function t(i){return function(a,o,u){return this.request(M(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}_.prototype[e]=t(),_.prototype[e+"Form"]=t(!0)});var Gr=_,Yr=I;function $(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,a=new Promise(function(o){t.subscribe(o),n=o}).then(i);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new Yr(n),e(t.reason))})}$.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};$.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};$.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};$.source=function(){var e,t=new $(function(n){e=n});return{token:t,cancel:e}};var Zr=$,et=function(e){return function(i){return e.apply(null,i)}},rt=h,tt=function(e){return rt.isObject(e)&&e.isAxiosError===!0},be=h,nt=we,F=Gr,it=De,at=ne;function Fe(r){var e=new F(r),t=nt(F.prototype.request,e);return be.extend(t,F.prototype,e),be.extend(t,e),t.create=function(n){return Fe(it(r,n))},t}var v=Fe(at);v.Axios=F;v.CanceledError=I;v.CancelToken=Zr;v.isCancel=$e;v.VERSION=Be.version;v.toFormData=Ne;v.AxiosError=D;v.Cancel=v.CanceledError;v.all=function(e){return Promise.all(e)};v.spread=et;v.isAxiosError=tt;G.exports=v;G.exports.default=v;var ot=G.exports;const st=w.div`
  max-width: 860px;
  max-height: 612px;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-image: url("src/assets/world-map.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 999;
  background-color: ${({theme:r})=>r.colors.addNewbg};
  border-radius: 10px;
  -webkit-box-shadow: 0px 8px 27px 19px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 8px 27px 19px rgba(0, 0, 0, 0.27);
`,ut=w.div`
  margin: 20px;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 130px;
`,lt=w.img`
  max-width: 120px;
  height: auto;
  position: relative;

  & + h1 {
    text-align: center;
    margin-bottom: 20px;
    color: white;
    font-size: ${({theme:r})=>r.fontSizes["3x"]};

    & + span {
      display: inline-block;
      font-size: 2rem;
      position: absolute;
      right: 4%;
      top: 20px;

      :hover {
        cursor: pointer;
      }
    }
  }
`,ft=w.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 80px;
  line-height: 2rem;

  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    margin-top: 4px;
    margin-bottom: 16px;
    resize: vertical;
    outline: none;
  }
`,Ee=w.input`
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.75);
  transform: matrix(1, 0, 0, 1, 0, 0);

  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: ${({theme:r})=>r.colors.InputText};
    font-size: ${({theme:r})=>r.fontSizes.md};
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: ${({theme:r})=>r.colors.InputText};
    font-size: ${({theme:r})=>r.fontSizes.md};
  }
`,dt=w.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 20px;
  position: relative;
`,ct=w.div`
  position: relative;
  display: flex;
  align-items: center;
  height: auto;
  width: 40%;
  margin: 0;

  ::after {
    content: "";
    width: 30px;
    height: 30px;
    background-image: url("src/assets/arrowdown.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    right: 0;
    padding-right: 10px;
    pointer-events: none;
  }
`,ye=w.select`
  border: none;
  max-width: 290px;
  border-radius: 10px;
  color: #000;
  margin: 0 !important;
  background: linear-gradient(180deg, #f1e0e0 23.33%, rgba(253, 247, 247, 0) 194.67%);
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  :hover {
    cursor: pointer;
  }
`,pt=w.label`
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  color: ${({theme:r})=>r.colors.fontColor};
  font-size: ${({theme:r})=>r.colors.md};
  & + textarea {
    border: none;
    border-radius: 10px;
    min-height: 185px;
    background: linear-gradient(180deg, #f1e0e0 23.33%, rgba(253, 247, 247, 0) 194.67%);
  }
`,ht=()=>S(xe,{children:[c(Ee,{type:"text",name:"name",placeholder:"Name:"}),c(Ee,{type:"text",name:"phoneNumber",placeholder:"Phone:"})]}),mt=[1,2,3,4,5,6,7,8,9,10,11,12],vt=()=>{const[r,e]=ke.exports.useState();function t(i){return{1:"Small",2:"Small",3:"Small",4:"Small",5:"Medium",6:"Medium",7:"Medium",8:"Medium",9:"Large",10:"Large",11:"Large",12:"Large"}[i]}return S(dt,{children:[c(ct,{children:S(ye,{name:"guestsNumber",value:r,onChange:i=>e(i.target.value),children:[c("option",{disabled:!0,selected:!0,hidden:!0,children:"People"}),mt.map(i=>S("option",{children:[" ",i," "]},i))]})}),c(ye,{name:"tableSize",children:c("option",{value:"title",disabled:!0,selected:!0,hidden:!0,children:t(r)})})]})},bt=()=>S(xe,{children:[c(pt,{htmlFor:"notes",children:"Notes:"}),c("textarea",{name:"notes",rows:"8"})]}),Et=w.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`,yt=w.input`
  width: 290px;
  height: 100px;
  border-radius: 10px;
  margin-top: 16px;
  border: none;
  color: white;
  font-weight: 600;
  background: linear-gradient(180deg, #c81927 -21.43%, rgba(230, 0, 18, 0) 132.47%);
  padding-bottom: 35px;
  opacity: 1;
  font-size: ${({theme:r})=>r.fontSizes["2x"]};
  position: absolute;
  /* Top: 0; */

  :hover {
    cursor: pointer;
  }
`,xt=()=>c(Et,{children:c(yt,{type:"submit",name:"submitInfo",value:"Submit"})}),wt=()=>S(ft,{onSubmit:e=>{const t=new FormData(e.target);ot.post("http://localhost:3000/v1/queues",Object.fromEntries(t.entries())).then()},children:[c(ht,{}),c(vt,{}),c(bt,{}),c(xt,{})]}),gt=({setShowAddNewForm:r})=>S(st,{children:[S(ut,{children:[c(lt,{src:Ie,alt:"logo"}),c("h1",{children:"Virtual Queuing"}),c("span",{onClick:()=>r(!1),children:"\xD7"})]}),c(wt,{})]});var Ot=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"}));export{gt as A,ot as a,Ot as b};
