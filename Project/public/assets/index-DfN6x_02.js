var Sx=Object.defineProperty;var Ex=(t,e,n)=>e in t?Sx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var gp=(t,e,n)=>Ex(t,typeof e!="symbol"?e+"":e,n);function Mx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Tx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yg={exports:{}},Sc={},Kg={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),wx=Symbol.for("react.portal"),Cx=Symbol.for("react.fragment"),bx=Symbol.for("react.strict_mode"),Ax=Symbol.for("react.profiler"),Rx=Symbol.for("react.provider"),Px=Symbol.for("react.context"),Nx=Symbol.for("react.forward_ref"),Lx=Symbol.for("react.suspense"),Dx=Symbol.for("react.memo"),Ix=Symbol.for("react.lazy"),_p=Symbol.iterator;function Ux(t){return t===null||typeof t!="object"?null:(t=_p&&t[_p]||t["@@iterator"],typeof t=="function"?t:null)}var Zg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jg=Object.assign,Qg={};function ua(t,e,n){this.props=t,this.context=e,this.refs=Qg,this.updater=n||Zg}ua.prototype.isReactComponent={};ua.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ua.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e_(){}e_.prototype=ua.prototype;function Zf(t,e,n){this.props=t,this.context=e,this.refs=Qg,this.updater=n||Zg}var Jf=Zf.prototype=new e_;Jf.constructor=Zf;Jg(Jf,ua.prototype);Jf.isPureReactComponent=!0;var vp=Array.isArray,t_=Object.prototype.hasOwnProperty,Qf={current:null},n_={key:!0,ref:!0,__self:!0,__source:!0};function i_(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)t_.call(e,i)&&!n_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:yo,type:t,key:s,ref:a,props:r,_owner:Qf.current}}function Fx(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function Ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xp=/\/+/g;function Xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ox(""+t.key):e.toString(36)}function Tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case yo:case wx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Xc(a,0):i,vp(r)?(n="",t!=null&&(n=t.replace(xp,"$&/")+"/"),Tl(r,e,n,"",function(c){return c})):r!=null&&(eh(r)&&(r=Fx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(xp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",vp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Xc(s,o);a+=Tl(s,e,n,l,r)}else if(l=Ux(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Xc(s,o++),a+=Tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Do(t,e,n){if(t==null)return t;var i=[],r=0;return Tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function kx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},wl={transition:null},Bx={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:wl,ReactCurrentOwner:Qf};function r_(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Do,forEach:function(t,e,n){Do(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Do(t,function(){e++}),e},toArray:function(t){return Do(t,function(e){return e})||[]},only:function(t){if(!eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=ua;Je.Fragment=Cx;Je.Profiler=Ax;Je.PureComponent=Zf;Je.StrictMode=bx;Je.Suspense=Lx;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;Je.act=r_;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Jg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)t_.call(e,l)&&!n_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:yo,type:t.type,key:r,ref:s,props:i,_owner:a}};Je.createContext=function(t){return t={$$typeof:Px,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rx,_context:t},t.Consumer=t};Je.createElement=i_;Je.createFactory=function(t){var e=i_.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:Nx,render:t}};Je.isValidElement=eh;Je.lazy=function(t){return{$$typeof:Ix,_payload:{_status:-1,_result:t},_init:kx}};Je.memo=function(t,e){return{$$typeof:Dx,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};Je.unstable_act=r_;Je.useCallback=function(t,e){return pn.current.useCallback(t,e)};Je.useContext=function(t){return pn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return pn.current.useEffect(t,e)};Je.useId=function(){return pn.current.useId()};Je.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return pn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Je.useRef=function(t){return pn.current.useRef(t)};Je.useState=function(t){return pn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return pn.current.useTransition()};Je.version="18.3.1";Kg.exports=Je;var D=Kg.exports;const s_=Tx(D),zx=Mx({__proto__:null,default:s_},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx=D,Hx=Symbol.for("react.element"),Gx=Symbol.for("react.fragment"),jx=Object.prototype.hasOwnProperty,Wx=Vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$x={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)jx.call(e,i)&&!$x.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Hx,type:t,key:s,ref:a,props:r,_owner:Wx.current}}Sc.Fragment=Gx;Sc.jsx=a_;Sc.jsxs=a_;Yg.exports=Sc;var v=Yg.exports,sd={},o_={exports:{}},Un={},l_={exports:{}},c_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,W){var te=V.length;V.push(W);e:for(;0<te;){var ne=te-1>>>1,U=V[ne];if(0<r(U,W))V[ne]=W,V[te]=U,te=ne;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var W=V[0],te=V.pop();if(te!==W){V[0]=te;e:for(var ne=0,U=V.length,ae=U>>>1;ne<ae;){var Me=2*(ne+1)-1,Le=V[Me],q=Me+1,re=V[q];if(0>r(Le,te))q<U&&0>r(re,Le)?(V[ne]=re,V[q]=te,ne=q):(V[ne]=Le,V[Me]=te,ne=Me);else if(q<U&&0>r(re,te))V[ne]=re,V[q]=te,ne=q;else break e}}return W}function r(V,W){var te=V.sortIndex-W.sortIndex;return te!==0?te:V.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,m=!1,_=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(V){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=V)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function E(V){if(S=!1,y(V),!_)if(n(l)!==null)_=!0,G(T);else{var W=n(c);W!==null&&O(E,W.startTime-V)}}function T(V,W){_=!1,S&&(S=!1,u(x),x=-1),m=!0;var te=d;try{for(y(W),h=n(l);h!==null&&(!(h.expirationTime>W)||V&&!P());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,d=h.priorityLevel;var U=ne(h.expirationTime<=W);W=t.unstable_now(),typeof U=="function"?h.callback=U:h===n(l)&&i(l),y(W)}else i(l);h=n(l)}if(h!==null)var ae=!0;else{var Me=n(c);Me!==null&&O(E,Me.startTime-W),ae=!1}return ae}finally{h=null,d=te,m=!1}}var w=!1,A=null,x=-1,C=5,I=-1;function P(){return!(t.unstable_now()-I<C)}function N(){if(A!==null){var V=t.unstable_now();I=V;var W=!0;try{W=A(!0,V)}finally{W?F():(w=!1,A=null)}}else w=!1}var F;if(typeof g=="function")F=function(){g(N)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,B=j.port2;j.port1.onmessage=N,F=function(){B.postMessage(null)}}else F=function(){p(N,0)};function G(V){A=V,w||(w=!0,F())}function O(V,W){x=p(function(){V(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,G(T))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var te=d;d=W;try{return V()}finally{d=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,W){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var te=d;d=V;try{return W()}finally{d=te}},t.unstable_scheduleCallback=function(V,W,te){var ne=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ne+te:ne):te=ne,V){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=te+U,V={id:f++,callback:W,priorityLevel:V,startTime:te,expirationTime:U,sortIndex:-1},te>ne?(V.sortIndex=te,e(c,V),n(l)===null&&V===n(c)&&(S?(u(x),x=-1):S=!0,O(E,te-ne))):(V.sortIndex=U,e(l,V),_||m||(_=!0,G(T))),V},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(V){var W=d;return function(){var te=d;d=W;try{return V.apply(this,arguments)}finally{d=te}}}})(c_);l_.exports=c_;var Xx=l_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qx=D,In=Xx;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u_=new Set,Ka={};function ls(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(Ka[t]=e,t=0;t<e.length;t++)u_.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,Yx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},Sp={};function Kx(t){return ad.call(Sp,t)?!0:ad.call(yp,t)?!1:Yx.test(t)?Sp[t]=!0:(yp[t]=!0,!1)}function Zx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jx(t,e,n,i){if(e===null||typeof e>"u"||Zx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(th,nh);Zt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(th,nh);Zt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(th,nh);Zt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ih(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jx(e,n,r,i)&&(n=null),i||r===null?Kx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ki=qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),d_=Symbol.for("react.provider"),f_=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),cd=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),h_=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function _a(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,qc;function Da(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var Yc=!1;function Kc(t,e){if(!t||Yc)return"";Yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function Qx(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=Kc(t.type,!1),t;case 11:return t=Kc(t.type.render,!1),t;case 1:return t=Kc(t.type,!0),t;default:return""}}function ud(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Ns:return"Portal";case od:return"Profiler";case rh:return"StrictMode";case ld:return"Suspense";case cd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f_:return(t.displayName||"Context")+".Consumer";case d_:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ah:return e=t.displayName||null,e!==null?e:ud(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return ud(t(e))}catch{}}return null}function ey(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ud(e);case 8:return e===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ty(t){var e=p_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Uo(t){t._valueTracker||(t._valueTracker=ty(t))}function m_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=p_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dd(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g_(t,e){e=e.checked,e!=null&&ih(t,"checked",e,!1)}function fd(t,e){g_(t,e);var n=Ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hd(t,e.type,n):e.hasOwnProperty("defaultValue")&&hd(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hd(t,e,n){(e!=="number"||Gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function Gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function pd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Ia(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function __(t,e){var n=Ar(e.value),i=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Cp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function v_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function md(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?v_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fo,x_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ny=["Webkit","ms","Moz","O"];Object.keys(Va).forEach(function(t){ny.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Va[e]=Va[t]})});function y_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Va.hasOwnProperty(t)&&Va[t]?(""+e).trim():e+"px"}function S_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=y_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var iy=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gd(t,e){if(e){if(iy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function _d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vd=null;function oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xd=null,js=null,Ws=null;function bp(t){if(t=Mo(t)){if(typeof xd!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Cc(e),xd(t.stateNode,t.type,e))}}function E_(t){js?Ws?Ws.push(t):Ws=[t]:js=t}function M_(){if(js){var t=js,e=Ws;if(Ws=js=null,bp(t),e)for(t=0;t<e.length;t++)bp(e[t])}}function T_(t,e){return t(e)}function w_(){}var Zc=!1;function C_(t,e,n){if(Zc)return t(e,n);Zc=!0;try{return T_(t,e,n)}finally{Zc=!1,(js!==null||Ws!==null)&&(w_(),M_())}}function Ja(t,e){var n=t.stateNode;if(n===null)return null;var i=Cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var yd=!1;if(Gi)try{var va={};Object.defineProperty(va,"passive",{get:function(){yd=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{yd=!1}function ry(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ha=!1,jl=null,Wl=!1,Sd=null,sy={onError:function(t){Ha=!0,jl=t}};function ay(t,e,n,i,r,s,a,o,l){Ha=!1,jl=null,ry.apply(sy,arguments)}function oy(t,e,n,i,r,s,a,o,l){if(ay.apply(this,arguments),Ha){if(Ha){var c=jl;Ha=!1,jl=null}else throw Error(ce(198));Wl||(Wl=!0,Sd=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function b_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ap(t){if(cs(t)!==t)throw Error(ce(188))}function ly(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ap(r),t;if(s===i)return Ap(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function A_(t){return t=ly(t),t!==null?R_(t):null}function R_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=R_(t);if(e!==null)return e;t=t.sibling}return null}var P_=In.unstable_scheduleCallback,Rp=In.unstable_cancelCallback,cy=In.unstable_shouldYield,uy=In.unstable_requestPaint,Nt=In.unstable_now,dy=In.unstable_getCurrentPriorityLevel,lh=In.unstable_ImmediatePriority,N_=In.unstable_UserBlockingPriority,$l=In.unstable_NormalPriority,fy=In.unstable_LowPriority,L_=In.unstable_IdlePriority,Ec=null,vi=null;function hy(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(Ec,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:gy,py=Math.log,my=Math.LN2;function gy(t){return t>>>=0,t===0?32:31-(py(t)/my|0)|0}var Oo=64,ko=4194304;function Ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ua(o):(s&=a,s!==0&&(i=Ua(s)))}else a=n&~r,a!==0?i=Ua(a):s!==0&&(i=Ua(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function _y(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-si(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=_y(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function D_(){var t=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),t}function Jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function So(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function xy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function I_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U_,uh,F_,O_,k_,Md=!1,Bo=[],xr=null,yr=null,Sr=null,Qa=new Map,eo=new Map,fr=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function xa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Mo(e),e!==null&&uh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Sy(t,e,n,i,r){switch(e){case"focusin":return xr=xa(xr,t,e,n,i,r),!0;case"dragenter":return yr=xa(yr,t,e,n,i,r),!0;case"mouseover":return Sr=xa(Sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Qa.set(s,xa(Qa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,eo.set(s,xa(eo.get(s)||null,t,e,n,i,r)),!0}return!1}function B_(t){var e=qr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=b_(n),e!==null){t.blockedOn=e,k_(t.priority,function(){F_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);vd=i,n.target.dispatchEvent(i),vd=null}else return e=Mo(n),e!==null&&uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Np(t,e,n){Cl(t)&&n.delete(e)}function Ey(){Md=!1,xr!==null&&Cl(xr)&&(xr=null),yr!==null&&Cl(yr)&&(yr=null),Sr!==null&&Cl(Sr)&&(Sr=null),Qa.forEach(Np),eo.forEach(Np)}function ya(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,Ey)))}function to(t){function e(r){return ya(r,t)}if(0<Bo.length){ya(Bo[0],t);for(var n=1;n<Bo.length;n++){var i=Bo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(xr!==null&&ya(xr,t),yr!==null&&ya(yr,t),Sr!==null&&ya(Sr,t),Qa.forEach(e),eo.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)B_(n),n.blockedOn===null&&fr.shift()}var $s=Ki.ReactCurrentBatchConfig,ql=!0;function My(t,e,n,i){var r=ut,s=$s.transition;$s.transition=null;try{ut=1,dh(t,e,n,i)}finally{ut=r,$s.transition=s}}function Ty(t,e,n,i){var r=ut,s=$s.transition;$s.transition=null;try{ut=4,dh(t,e,n,i)}finally{ut=r,$s.transition=s}}function dh(t,e,n,i){if(ql){var r=Td(t,e,n,i);if(r===null)lu(t,e,i,Yl,n),Pp(t,i);else if(Sy(r,t,e,n,i))i.stopPropagation();else if(Pp(t,i),e&4&&-1<yy.indexOf(t)){for(;r!==null;){var s=Mo(r);if(s!==null&&U_(s),s=Td(t,e,n,i),s===null&&lu(t,e,i,Yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lu(t,e,i,null,n)}}var Yl=null;function Td(t,e,n,i){if(Yl=null,t=oh(i),t=qr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=b_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function z_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dy()){case lh:return 1;case N_:return 4;case $l:case fy:return 16;case L_:return 536870912;default:return 16}default:return 16}}var mr=null,fh=null,bl=null;function V_(){if(bl)return bl;var t,e=fh,n=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function Lp(){return!1}function Fn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zo:Lp,this.isPropagationStopped=Lp,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),e}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=Fn(da),Eo=Ct({},da,{view:0,detail:0}),wy=Fn(Eo),Qc,eu,Sa,Mc=Ct({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(Qc=t.screenX-Sa.screenX,eu=t.screenY-Sa.screenY):eu=Qc=0,Sa=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),Dp=Fn(Mc),Cy=Ct({},Mc,{dataTransfer:0}),by=Fn(Cy),Ay=Ct({},Eo,{relatedTarget:0}),tu=Fn(Ay),Ry=Ct({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=Fn(Ry),Ny=Ct({},da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ly=Fn(Ny),Dy=Ct({},da,{data:0}),Ip=Fn(Dy),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fy[t])?!!e[t]:!1}function ph(){return Oy}var ky=Ct({},Eo,{key:function(t){if(t.key){var e=Iy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),By=Fn(ky),zy=Ct({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Fn(zy),Vy=Ct({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),Hy=Fn(Vy),Gy=Ct({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),jy=Fn(Gy),Wy=Ct({},Mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$y=Fn(Wy),Xy=[9,13,27,32],mh=Gi&&"CompositionEvent"in window,Ga=null;Gi&&"documentMode"in document&&(Ga=document.documentMode);var qy=Gi&&"TextEvent"in window&&!Ga,H_=Gi&&(!mh||Ga&&8<Ga&&11>=Ga),Fp=" ",Op=!1;function G_(t,e){switch(t){case"keyup":return Xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function Yy(t,e){switch(t){case"compositionend":return j_(e);case"keypress":return e.which!==32?null:(Op=!0,Fp);case"textInput":return t=e.data,t===Fp&&Op?null:t;default:return null}}function Ky(t,e){if(Ds)return t==="compositionend"||!mh&&G_(t,e)?(t=V_(),bl=fh=mr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return H_&&e.locale!=="ko"?null:e.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zy[t.type]:e==="textarea"}function W_(t,e,n,i){E_(i),e=Kl(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ja=null,no=null;function Jy(t){n0(t,0)}function Tc(t){var e=Fs(t);if(m_(e))return t}function Qy(t,e){if(t==="change")return e}var $_=!1;if(Gi){var nu;if(Gi){var iu="oninput"in document;if(!iu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),iu=typeof Bp.oninput=="function"}nu=iu}else nu=!1;$_=nu&&(!document.documentMode||9<document.documentMode)}function zp(){ja&&(ja.detachEvent("onpropertychange",X_),no=ja=null)}function X_(t){if(t.propertyName==="value"&&Tc(no)){var e=[];W_(e,no,t,oh(t)),C_(Jy,e)}}function eS(t,e,n){t==="focusin"?(zp(),ja=e,no=n,ja.attachEvent("onpropertychange",X_)):t==="focusout"&&zp()}function tS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tc(no)}function nS(t,e){if(t==="click")return Tc(e)}function iS(t,e){if(t==="input"||t==="change")return Tc(e)}function rS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:rS;function io(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ad.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=Vp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vp(n)}}function q_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?q_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Y_(){for(var t=window,e=Gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gl(t.document)}return e}function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sS(t){var e=Y_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&q_(n.ownerDocument.documentElement,n)){if(i!==null&&gh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hp(n,s);var a=Hp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aS=Gi&&"documentMode"in document&&11>=document.documentMode,Is=null,wd=null,Wa=null,Cd=!1;function Gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cd||Is==null||Is!==Gl(i)||(i=Is,"selectionStart"in i&&gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wa&&io(Wa,i)||(Wa=i,i=Kl(wd,"onSelect"),0<i.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Is)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},ru={},K_={};Gi&&(K_=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function wc(t){if(ru[t])return ru[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K_)return ru[t]=e[n];return t}var Z_=wc("animationend"),J_=wc("animationiteration"),Q_=wc("animationstart"),e0=wc("transitionend"),t0=new Map,jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){t0.set(t,e),ls(e,[t])}for(var su=0;su<jp.length;su++){var au=jp[su],oS=au.toLowerCase(),lS=au[0].toUpperCase()+au.slice(1);Nr(oS,"on"+lS)}Nr(Z_,"onAnimationEnd");Nr(J_,"onAnimationIteration");Nr(Q_,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(e0,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function Wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,oy(i,e,void 0,t),t.currentTarget=null}function n0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Wp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Wp(r,o,c),s=l}}}if(Wl)throw t=Sd,Wl=!1,Sd=null,t}function yt(t,e){var n=e[Nd];n===void 0&&(n=e[Nd]=new Set);var i=t+"__bubble";n.has(i)||(i0(e,t,2,!1),n.add(i))}function ou(t,e,n){var i=0;e&&(i|=4),i0(n,t,i,e)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[Ho]){t[Ho]=!0,u_.forEach(function(n){n!=="selectionchange"&&(cS.has(n)||ou(n,!1,t),ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ho]||(e[Ho]=!0,ou("selectionchange",!1,e))}}function i0(t,e,n,i){switch(z_(e)){case 1:var r=My;break;case 4:r=Ty;break;default:r=dh}n=r.bind(null,e,n,t),r=void 0,!yd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function lu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=qr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}C_(function(){var c=s,f=oh(n),h=[];e:{var d=t0.get(t);if(d!==void 0){var m=hh,_=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":m=By;break;case"focusin":_="focus",m=tu;break;case"focusout":_="blur",m=tu;break;case"beforeblur":case"afterblur":m=tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Hy;break;case Z_:case J_:case Q_:m=Py;break;case e0:m=jy;break;case"scroll":m=wy;break;case"wheel":m=$y;break;case"copy":case"cut":case"paste":m=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Up}var S=(e&4)!==0,p=!S&&t==="scroll",u=S?d!==null?d+"Capture":null:d;S=[];for(var g=c,y;g!==null;){y=g;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,u!==null&&(E=Ja(g,u),E!=null&&S.push(so(g,E,y)))),p)break;g=g.return}0<S.length&&(d=new m(d,_,null,n,f),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==vd&&(_=n.relatedTarget||n.fromElement)&&(qr(_)||_[ji]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?qr(_):null,_!==null&&(p=cs(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(S=Dp,E="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=Up,E="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?d:Fs(m),y=_==null?d:Fs(_),d=new S(E,g+"leave",m,n,f),d.target=p,d.relatedTarget=y,E=null,qr(f)===c&&(S=new S(u,g+"enter",_,n,f),S.target=y,S.relatedTarget=p,E=S),p=E,m&&_)t:{for(S=m,u=_,g=0,y=S;y;y=ms(y))g++;for(y=0,E=u;E;E=ms(E))y++;for(;0<g-y;)S=ms(S),g--;for(;0<y-g;)u=ms(u),y--;for(;g--;){if(S===u||u!==null&&S===u.alternate)break t;S=ms(S),u=ms(u)}S=null}else S=null;m!==null&&$p(h,d,m,S,!1),_!==null&&p!==null&&$p(h,p,_,S,!0)}}e:{if(d=c?Fs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=Qy;else if(kp(d))if($_)T=iS;else{T=tS;var w=eS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=nS);if(T&&(T=T(t,c))){W_(h,T,n,f);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&hd(d,"number",d.value)}switch(w=c?Fs(c):window,t){case"focusin":(kp(w)||w.contentEditable==="true")&&(Is=w,wd=c,Wa=null);break;case"focusout":Wa=wd=Is=null;break;case"mousedown":Cd=!0;break;case"contextmenu":case"mouseup":case"dragend":Cd=!1,Gp(h,n,f);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":Gp(h,n,f)}var A;if(mh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ds?G_(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(H_&&n.locale!=="ko"&&(Ds||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ds&&(A=V_()):(mr=f,fh="value"in mr?mr.value:mr.textContent,Ds=!0)),w=Kl(c,x),0<w.length&&(x=new Ip(x,t,null,n,f),h.push({event:x,listeners:w}),A?x.data=A:(A=j_(n),A!==null&&(x.data=A)))),(A=qy?Yy(t,n):Ky(t,n))&&(c=Kl(c,"onBeforeInput"),0<c.length&&(f=new Ip("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=A))}n0(h,e)})}function so(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ja(t,n),s!=null&&i.unshift(so(t,s,r)),s=Ja(t,e),s!=null&&i.push(so(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $p(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ja(n,s),l!=null&&a.unshift(so(n,l,o))):r||(l=Ja(n,s),l!=null&&a.push(so(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var uS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function Xp(t){return(typeof t=="string"?t:""+t).replace(uS,`
`).replace(dS,"")}function Go(t,e,n){if(e=Xp(e),Xp(t)!==e&&n)throw Error(ce(425))}function Zl(){}var bd=null,Ad=null;function Rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pd=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(t){return qp.resolve(null).then(t).catch(pS)}:Pd;function pS(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),to(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);to(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fa=Math.random().toString(36).slice(2),mi="__reactFiber$"+fa,ao="__reactProps$"+fa,ji="__reactContainer$"+fa,Nd="__reactEvents$"+fa,mS="__reactListeners$"+fa,gS="__reactHandles$"+fa;function qr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yp(t);t!==null;){if(n=t[mi])return n;t=Yp(t)}return e}t=n,n=t.parentNode}return null}function Mo(t){return t=t[mi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Cc(t){return t[ao]||null}var Ld=[],Os=-1;function Lr(t){return{current:t}}function St(t){0>Os||(t.current=Ld[Os],Ld[Os]=null,Os--)}function vt(t,e){Os++,Ld[Os]=t.current,t.current=e}var Rr={},on=Lr(Rr),Sn=Lr(!1),ts=Rr;function Js(t,e){var n=t.type.contextTypes;if(!n)return Rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function Jl(){St(Sn),St(on)}function Kp(t,e,n){if(on.current!==Rr)throw Error(ce(168));vt(on,e),vt(Sn,n)}function r0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,ey(t)||"Unknown",r));return Ct({},n,i)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,ts=on.current,vt(on,t),vt(Sn,Sn.current),!0}function Zp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=r0(t,e,ts),i.__reactInternalMemoizedMergedChildContext=t,St(Sn),St(on),vt(on,t)):St(Sn),vt(Sn,n)}var Ii=null,bc=!1,uu=!1;function s0(t){Ii===null?Ii=[t]:Ii.push(t)}function _S(t){bc=!0,s0(t)}function Dr(){if(!uu&&Ii!==null){uu=!0;var t=0,e=ut;try{var n=Ii;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,bc=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),P_(lh,Dr),r}finally{ut=e,uu=!1}}return null}var ks=[],Bs=0,ec=null,tc=0,zn=[],Vn=0,ns=null,Fi=1,Oi="";function Gr(t,e){ks[Bs++]=tc,ks[Bs++]=ec,ec=t,tc=e}function a0(t,e,n){zn[Vn++]=Fi,zn[Vn++]=Oi,zn[Vn++]=ns,ns=t;var i=Fi;t=Oi;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Fi=1<<32-si(e)+r|n<<r|i,Oi=s+t}else Fi=1<<s|n<<r|i,Oi=t}function _h(t){t.return!==null&&(Gr(t,1),a0(t,1,0))}function vh(t){for(;t===ec;)ec=ks[--Bs],ks[Bs]=null,tc=ks[--Bs],ks[Bs]=null;for(;t===ns;)ns=zn[--Vn],zn[Vn]=null,Oi=zn[--Vn],zn[Vn]=null,Fi=zn[--Vn],zn[Vn]=null}var Ln=null,Pn=null,Et=!1,ti=null;function o0(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Pn=null,!0):!1;default:return!1}}function Dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Id(t){if(Et){var e=Pn;if(e){var n=e;if(!Jp(t,e)){if(Dd(t))throw Error(ce(418));e=Er(n.nextSibling);var i=Ln;e&&Jp(t,e)?o0(i,n):(t.flags=t.flags&-4097|2,Et=!1,Ln=t)}}else{if(Dd(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Et=!1,Ln=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function jo(t){if(t!==Ln)return!1;if(!Et)return Qp(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rd(t.type,t.memoizedProps)),e&&(e=Pn)){if(Dd(t))throw l0(),Error(ce(418));for(;e;)o0(t,e),e=Er(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=Ln?Er(t.stateNode.nextSibling):null;return!0}function l0(){for(var t=Pn;t;)t=Er(t.nextSibling)}function Qs(){Pn=Ln=null,Et=!1}function xh(t){ti===null?ti=[t]:ti.push(t)}var vS=Ki.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Wo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function em(t){var e=t._init;return e(t._payload)}function c0(t){function e(u,g){if(t){var y=u.deletions;y===null?(u.deletions=[g],u.flags|=16):y.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Cr(u,g),u.index=0,u.sibling=null,u}function s(u,g,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<g?(u.flags|=2,g):y):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,y,E){return g===null||g.tag!==6?(g=_u(y,u.mode,E),g.return=u,g):(g=r(g,y),g.return=u,g)}function l(u,g,y,E){var T=y.type;return T===Ls?f(u,g,y.props.children,E,y.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ur&&em(T)===g.type)?(E=r(g,y.props),E.ref=Ea(u,g,y),E.return=u,E):(E=Ul(y.type,y.key,y.props,null,u.mode,E),E.ref=Ea(u,g,y),E.return=u,E)}function c(u,g,y,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=vu(y,u.mode,E),g.return=u,g):(g=r(g,y.children||[]),g.return=u,g)}function f(u,g,y,E,T){return g===null||g.tag!==7?(g=es(y,u.mode,E,T),g.return=u,g):(g=r(g,y),g.return=u,g)}function h(u,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=_u(""+g,u.mode,y),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:return y=Ul(g.type,g.key,g.props,null,u.mode,y),y.ref=Ea(u,null,g),y.return=u,y;case Ns:return g=vu(g,u.mode,y),g.return=u,g;case ur:var E=g._init;return h(u,E(g._payload),y)}if(Ia(g)||_a(g))return g=es(g,u.mode,y,null),g.return=u,g;Wo(u,g)}return null}function d(u,g,y,E){var T=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:o(u,g,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Io:return y.key===T?l(u,g,y,E):null;case Ns:return y.key===T?c(u,g,y,E):null;case ur:return T=y._init,d(u,g,T(y._payload),E)}if(Ia(y)||_a(y))return T!==null?null:f(u,g,y,E,null);Wo(u,y)}return null}function m(u,g,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(y)||null,o(g,u,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Io:return u=u.get(E.key===null?y:E.key)||null,l(g,u,E,T);case Ns:return u=u.get(E.key===null?y:E.key)||null,c(g,u,E,T);case ur:var w=E._init;return m(u,g,y,w(E._payload),T)}if(Ia(E)||_a(E))return u=u.get(y)||null,f(g,u,E,T,null);Wo(g,E)}return null}function _(u,g,y,E){for(var T=null,w=null,A=g,x=g=0,C=null;A!==null&&x<y.length;x++){A.index>x?(C=A,A=null):C=A.sibling;var I=d(u,A,y[x],E);if(I===null){A===null&&(A=C);break}t&&A&&I.alternate===null&&e(u,A),g=s(I,g,x),w===null?T=I:w.sibling=I,w=I,A=C}if(x===y.length)return n(u,A),Et&&Gr(u,x),T;if(A===null){for(;x<y.length;x++)A=h(u,y[x],E),A!==null&&(g=s(A,g,x),w===null?T=A:w.sibling=A,w=A);return Et&&Gr(u,x),T}for(A=i(u,A);x<y.length;x++)C=m(A,u,x,y[x],E),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?x:C.key),g=s(C,g,x),w===null?T=C:w.sibling=C,w=C);return t&&A.forEach(function(P){return e(u,P)}),Et&&Gr(u,x),T}function S(u,g,y,E){var T=_a(y);if(typeof T!="function")throw Error(ce(150));if(y=T.call(y),y==null)throw Error(ce(151));for(var w=T=null,A=g,x=g=0,C=null,I=y.next();A!==null&&!I.done;x++,I=y.next()){A.index>x?(C=A,A=null):C=A.sibling;var P=d(u,A,I.value,E);if(P===null){A===null&&(A=C);break}t&&A&&P.alternate===null&&e(u,A),g=s(P,g,x),w===null?T=P:w.sibling=P,w=P,A=C}if(I.done)return n(u,A),Et&&Gr(u,x),T;if(A===null){for(;!I.done;x++,I=y.next())I=h(u,I.value,E),I!==null&&(g=s(I,g,x),w===null?T=I:w.sibling=I,w=I);return Et&&Gr(u,x),T}for(A=i(u,A);!I.done;x++,I=y.next())I=m(A,u,x,I.value,E),I!==null&&(t&&I.alternate!==null&&A.delete(I.key===null?x:I.key),g=s(I,g,x),w===null?T=I:w.sibling=I,w=I);return t&&A.forEach(function(N){return e(u,N)}),Et&&Gr(u,x),T}function p(u,g,y,E){if(typeof y=="object"&&y!==null&&y.type===Ls&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Io:e:{for(var T=y.key,w=g;w!==null;){if(w.key===T){if(T=y.type,T===Ls){if(w.tag===7){n(u,w.sibling),g=r(w,y.props.children),g.return=u,u=g;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ur&&em(T)===w.type){n(u,w.sibling),g=r(w,y.props),g.ref=Ea(u,w,y),g.return=u,u=g;break e}n(u,w);break}else e(u,w);w=w.sibling}y.type===Ls?(g=es(y.props.children,u.mode,E,y.key),g.return=u,u=g):(E=Ul(y.type,y.key,y.props,null,u.mode,E),E.ref=Ea(u,g,y),E.return=u,u=E)}return a(u);case Ns:e:{for(w=y.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(u,g.sibling),g=r(g,y.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=vu(y,u.mode,E),g.return=u,u=g}return a(u);case ur:return w=y._init,p(u,g,w(y._payload),E)}if(Ia(y))return _(u,g,y,E);if(_a(y))return S(u,g,y,E);Wo(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,y),g.return=u,u=g):(n(u,g),g=_u(y,u.mode,E),g.return=u,u=g),a(u)):n(u,g)}return p}var ea=c0(!0),u0=c0(!1),nc=Lr(null),ic=null,zs=null,yh=null;function Sh(){yh=zs=ic=null}function Eh(t){var e=nc.current;St(nc),t._currentValue=e}function Ud(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Xs(t,e){ic=t,yh=zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(yh!==t)if(t={context:t,memoizedValue:e,next:null},zs===null){if(ic===null)throw Error(ce(308));zs=t,ic.dependencies={lanes:0,firstContext:t}}else zs=zs.next=t;return e}var Yr=null;function Mh(t){Yr===null?Yr=[t]:Yr.push(t)}function d0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function Th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,Mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}function tm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rc(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(d=e,m=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){h=_.call(m,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break e;h=Ct({},h,d);break e;case 2:dr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);rs|=a,t.lanes=a,t.memoizedState=h}}function nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var To={},xi=Lr(To),oo=Lr(To),lo=Lr(To);function Kr(t){if(t===To)throw Error(ce(174));return t}function wh(t,e){switch(vt(lo,e),vt(oo,t),vt(xi,To),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:md(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=md(e,t)}St(xi),vt(xi,e)}function ta(){St(xi),St(oo),St(lo)}function h0(t){Kr(lo.current);var e=Kr(xi.current),n=md(e,t.type);e!==n&&(vt(oo,t),vt(xi,n))}function Ch(t){oo.current===t&&(St(xi),St(oo))}var Tt=Lr(0);function sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function bh(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var Pl=Ki.ReactCurrentDispatcher,fu=Ki.ReactCurrentBatchConfig,is=0,wt=null,Bt=null,Wt=null,ac=!1,$a=!1,co=0,xS=0;function Qt(){throw Error(ce(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function Rh(t,e,n,i,r,s){if(is=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?MS:TS,t=n(i,r),$a){s=0;do{if($a=!1,co=0,25<=s)throw Error(ce(301));s+=1,Wt=Bt=null,e.updateQueue=null,Pl.current=wS,t=n(i,r)}while($a)}if(Pl.current=oc,e=Bt!==null&&Bt.next!==null,is=0,Wt=Bt=wt=null,ac=!1,e)throw Error(ce(300));return t}function Ph(){var t=co!==0;return co=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?wt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function $n(){if(Bt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Wt===null?wt.memoizedState:Wt.next;if(e!==null)Wt=e,Bt=t;else{if(t===null)throw Error(ce(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Wt===null?wt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function uo(t,e){return typeof e=="function"?e(t):e}function hu(t){var e=$n(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((is&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,wt.lanes|=f,rs|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,oi(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,rs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pu(t){var e=$n(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);oi(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function p0(){}function m0(t,e){var n=wt,i=$n(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Nh(v0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,fo(9,_0.bind(null,n,i,r,e),void 0,null),$t===null)throw Error(ce(349));is&30||g0(n,e,r)}return r}function g0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _0(t,e,n,i){e.value=n,e.getSnapshot=i,x0(e)&&y0(t)}function v0(t,e,n){return n(function(){x0(e)&&y0(t)})}function x0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function y0(t){var e=Wi(t,1);e!==null&&ai(e,t,1,-1)}function im(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:t},e.queue=t,t=t.dispatch=ES.bind(null,wt,t),[e.memoizedState,t]}function fo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function S0(){return $n().memoizedState}function Nl(t,e,n,i){var r=hi();wt.flags|=t,r.memoizedState=fo(1|e,n,void 0,i===void 0?null:i)}function Ac(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&Ah(i,a.deps)){r.memoizedState=fo(e,n,s,i);return}}wt.flags|=t,r.memoizedState=fo(1|e,n,s,i)}function rm(t,e){return Nl(8390656,8,t,e)}function Nh(t,e){return Ac(2048,8,t,e)}function E0(t,e){return Ac(4,2,t,e)}function M0(t,e){return Ac(4,4,t,e)}function T0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w0(t,e,n){return n=n!=null?n.concat([t]):null,Ac(4,4,T0.bind(null,e,t),n)}function Lh(){}function C0(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function b0(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function A0(t,e,n){return is&21?(oi(n,e)||(n=D_(),wt.lanes|=n,rs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function yS(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=fu.transition;fu.transition={};try{t(!1),e()}finally{ut=n,fu.transition=i}}function R0(){return $n().memoizedState}function SS(t,e,n){var i=wr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},P0(t))N0(e,n);else if(n=d0(t,e,n,i),n!==null){var r=fn();ai(n,t,i,r),L0(n,e,i)}}function ES(t,e,n){var i=wr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(P0(t))N0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,oi(o,a)){var l=e.interleaved;l===null?(r.next=r,Mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=d0(t,e,r,i),n!==null&&(r=fn(),ai(n,t,i,r),L0(n,e,i))}}function P0(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function N0(t,e){$a=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function L0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}var oc={readContext:Wn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},MS={readContext:Wn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,T0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=SS.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:im,useDebugValue:Lh,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=im(!1),e=t[0];return t=yS.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=hi();if(Et){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),$t===null)throw Error(ce(349));is&30||g0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,rm(v0.bind(null,i,s,t),[t]),i.flags|=2048,fo(9,_0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=$t.identifierPrefix;if(Et){var n=Oi,i=Fi;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TS={readContext:Wn,useCallback:C0,useContext:Wn,useEffect:Nh,useImperativeHandle:w0,useInsertionEffect:E0,useLayoutEffect:M0,useMemo:b0,useReducer:hu,useRef:S0,useState:function(){return hu(uo)},useDebugValue:Lh,useDeferredValue:function(t){var e=$n();return A0(e,Bt.memoizedState,t)},useTransition:function(){var t=hu(uo)[0],e=$n().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:R0,unstable_isNewReconciler:!1},wS={readContext:Wn,useCallback:C0,useContext:Wn,useEffect:Nh,useImperativeHandle:w0,useInsertionEffect:E0,useLayoutEffect:M0,useMemo:b0,useReducer:pu,useRef:S0,useState:function(){return pu(uo)},useDebugValue:Lh,useDeferredValue:function(t){var e=$n();return Bt===null?e.memoizedState=t:A0(e,Bt.memoizedState,t)},useTransition:function(){var t=pu(uo)[0],e=$n().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:R0,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rc={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=wr(t),s=Bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,r),e!==null&&(ai(e,t,r,i),Rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=wr(t),s=Bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,r),e!==null&&(ai(e,t,r,i),Rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=wr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Mr(t,r,i),e!==null&&(ai(e,t,i,n),Rl(e,t,i))}};function sm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!io(n,i)||!io(r,s):!0}function D0(t,e,n){var i=!1,r=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=En(e)?ts:on.current,i=e.contextTypes,s=(i=i!=null)?Js(t,r):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function am(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Rc.enqueueReplaceState(e,e.state,null)}function Od(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Th(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=En(e)?ts:on.current,r.context=Js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rc.enqueueReplaceState(r,r.state,null),rc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function na(t,e){try{var n="",i=e;do n+=Qx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CS=typeof WeakMap=="function"?WeakMap:Map;function I0(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){cc||(cc=!0,qd=i),kd(t,e)},n}function U0(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){kd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kd(t,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function om(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new CS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zS.bind(null,t,e,n),e.then(t,t))}function lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var bS=Ki.ReactCurrentOwner,yn=!1;function un(t,e,n,i){e.child=t===null?u0(e,null,n,i):ea(e,t.child,n,i)}function um(t,e,n,i,r){n=n.render;var s=e.ref;return Xs(e,r),i=Rh(t,e,n,i,s,r),n=Ph(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(Et&&n&&_h(e),e.flags|=1,un(t,e,i,r),e.child)}function dm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,F0(t,e,s,i,r)):(t=Ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(a,i)&&t.ref===e.ref)return $i(t,e,r)}return e.flags|=1,t=Cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function F0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(io(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,$i(t,e,r)}return Bd(t,e,n,i,r)}function O0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Hs,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Hs,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Hs,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Hs,Rn),Rn|=i;return un(t,e,r,n),e.child}function k0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bd(t,e,n,i,r){var s=En(n)?ts:on.current;return s=Js(e,s),Xs(e,r),n=Rh(t,e,n,i,s,r),i=Ph(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(Et&&i&&_h(e),e.flags|=1,un(t,e,n,r),e.child)}function fm(t,e,n,i,r){if(En(n)){var s=!0;Ql(e)}else s=!1;if(Xs(e,r),e.stateNode===null)Ll(t,e),D0(e,n,i),Od(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=En(n)?ts:on.current,c=Js(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&am(e,a,i,c),dr=!1;var d=e.memoizedState;a.state=d,rc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Sn.current||dr?(typeof f=="function"&&(Fd(e,n,f,i),l=e.memoizedState),(o=dr||sm(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,f0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Qn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=En(n)?ts:on.current,l=Js(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&am(e,a,i,l),dr=!1,d=e.memoizedState,a.state=d,rc(e,i,a,r);var _=e.memoizedState;o!==h||d!==_||Sn.current||dr?(typeof m=="function"&&(Fd(e,n,m,i),_=e.memoizedState),(c=dr||sm(e,n,c,i,d,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return zd(t,e,n,i,s,r)}function zd(t,e,n,i,r,s){k0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Zp(e,n,!1),$i(t,e,s);i=e.stateNode,bS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ea(e,t.child,null,s),e.child=ea(e,null,o,s)):un(t,e,o,s),e.memoizedState=i.state,r&&Zp(e,n,!0),e.child}function B0(t){var e=t.stateNode;e.pendingContext?Kp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kp(t,e.context,!1),wh(t,e.containerInfo)}function hm(t,e,n,i,r){return Qs(),xh(r),e.flags|=256,un(t,e,n,i),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function z0(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(Tt,r&1),t===null)return Id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Lc(a,i,0,null),t=es(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hd(n),e.memoizedState=Vd,t):Dh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return AS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Cr(o,s):(s=es(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Hd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Vd,i}return s=t.child,t=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dh(t,e){return e=Lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $o(t,e,n,i){return i!==null&&xh(i),ea(e,t.child,null,n),t=Dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=mu(Error(ce(422))),$o(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Lc({mode:"visible",children:i.children},r,0,null),s=es(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ea(e,t.child,null,a),e.child.memoizedState=Hd(a),e.memoizedState=Vd,s);if(!(e.mode&1))return $o(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=mu(s,i,void 0),$o(t,e,a,i)}if(o=(a&t.childLanes)!==0,yn||o){if(i=$t,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),ai(i,t,r,-1))}return Bh(),i=mu(Error(ce(421))),$o(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=VS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=Er(r.nextSibling),Ln=e,Et=!0,ti=null,t!==null&&(zn[Vn++]=Fi,zn[Vn++]=Oi,zn[Vn++]=ns,Fi=t.id,Oi=t.overflow,ns=e),e=Dh(e,i.children),e.flags|=4096,e)}function pm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ud(t.return,e,n)}function gu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function V0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,n,e);else if(t.tag===19)pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&sc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),gu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&sc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}gu(e,!0,n,null,s);break;case"together":gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),rs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RS(t,e,n){switch(e.tag){case 3:B0(e),Qs();break;case 5:h0(e);break;case 1:En(e.type)&&Ql(e);break;case 4:wh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(nc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?z0(t,e,n):(vt(Tt,Tt.current&1),t=$i(t,e,n),t!==null?t.sibling:null);vt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return V0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,O0(t,e,n)}return $i(t,e,n)}var H0,Gd,G0,j0;H0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gd=function(){};G0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Kr(xi.current);var s=null;switch(n){case"input":r=dd(t,r),i=dd(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=pd(t,r),i=pd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zl)}gd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ka.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ka.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};j0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ma(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function PS(t,e,n){var i=e.pendingProps;switch(vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return En(e.type)&&Jl(),en(e),null;case 3:return i=e.stateNode,ta(),St(Sn),St(on),bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(Zd(ti),ti=null))),Gd(t,e),en(e),null;case 5:Ch(e);var r=Kr(lo.current);if(n=e.type,t!==null&&e.stateNode!=null)G0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return en(e),null}if(t=Kr(xi.current),jo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[ao]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Fa.length;r++)yt(Fa[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Mp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":wp(i,s),yt("invalid",i)}gd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,o,t),r=["children",""+o]):Ka.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(n){case"input":Uo(i),Tp(i,s,!0);break;case"textarea":Uo(i),Cp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=v_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[mi]=e,t[ao]=i,H0(t,e,!1,!1),e.stateNode=t;e:{switch(a=_d(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fa.length;r++)yt(Fa[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":Mp(t,i),r=dd(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),yt("invalid",t);break;case"textarea":wp(t,i),r=pd(t,i),yt("invalid",t);break;default:r=i}gd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?S_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&x_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Za(t,l):typeof l=="number"&&Za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ka.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",t):l!=null&&ih(t,s,l,a))}switch(n){case"input":Uo(t),Tp(t,i,!1);break;case"textarea":Uo(t),Cp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)j0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Kr(lo.current),Kr(xi.current),jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:Go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return en(e),null;case 13:if(St(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Pn!==null&&e.mode&1&&!(e.flags&128))l0(),Qs(),e.flags|=98560,s=!1;else if(s=jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[mi]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ti!==null&&(Zd(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?zt===0&&(zt=3):Bh())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return ta(),Gd(t,e),t===null&&ro(e.stateNode.containerInfo),en(e),null;case 10:return Eh(e.type._context),en(e),null;case 17:return En(e.type)&&Jl(),en(e),null;case 19:if(St(Tt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ma(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=sc(t),a!==null){for(e.flags|=128,Ma(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>ia&&(e.flags|=128,i=!0,Ma(s,!1),e.lanes=4194304)}else{if(!i)if(t=sc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ma(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return en(e),null}else 2*Nt()-s.renderingStartTime>ia&&n!==1073741824&&(e.flags|=128,i=!0,Ma(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Tt.current,vt(Tt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return kh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function NS(t,e){switch(vh(e),e.tag){case 1:return En(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ta(),St(Sn),St(on),bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ch(e),null;case 13:if(St(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(Tt),null;case 4:return ta(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var Xo=!1,sn=!1,LS=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function jd(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var mm=!1;function DS(t,e){if(bd=ql,t=Y_(),gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ad={focusedElem:t,selectionRange:n},ql=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,p=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Qn(e.type,S),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(E){Rt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return _=mm,mm=!1,_}function Xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jd(e,n,s)}r=r.next}while(r!==i)}}function Pc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W0(t){var e=t.alternate;e!==null&&(t.alternate=null,W0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[ao],delete e[Nd],delete e[mS],delete e[gS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $0(t){return t.tag===5||t.tag===3||t.tag===4}function gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(i!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}function Xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}var qt=null,ei=!1;function er(t,e,n){for(n=n.child;n!==null;)X0(t,e,n),n=n.sibling}function X0(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:sn||Vs(n,e);case 6:var i=qt,r=ei;qt=null,er(t,e,n),qt=i,ei=r,qt!==null&&(ei?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ei?(t=qt,n=n.stateNode,t.nodeType===8?cu(t.parentNode,n):t.nodeType===1&&cu(t,n),to(t)):cu(qt,n.stateNode));break;case 4:i=qt,r=ei,qt=n.stateNode.containerInfo,ei=!0,er(t,e,n),qt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&jd(n,e,a),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!sn&&(Vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Rt(n,e,o)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,er(t,e,n),sn=i):er(t,e,n);break;default:er(t,e,n)}}function _m(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LS),e.forEach(function(i){var r=HS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:qt=o.stateNode,ei=!1;break e;case 3:qt=o.stateNode.containerInfo,ei=!0;break e;case 4:qt=o.stateNode.containerInfo,ei=!0;break e}o=o.return}if(qt===null)throw Error(ce(160));X0(s,a,r),qt=null,ei=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q0(e,t),e=e.sibling}function q0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),ui(t),i&4){try{Xa(3,t,t.return),Pc(3,t)}catch(S){Rt(t,t.return,S)}try{Xa(5,t,t.return)}catch(S){Rt(t,t.return,S)}}break;case 1:Yn(e,t),ui(t),i&512&&n!==null&&Vs(n,n.return);break;case 5:if(Yn(e,t),ui(t),i&512&&n!==null&&Vs(n,n.return),t.flags&32){var r=t.stateNode;try{Za(r,"")}catch(S){Rt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&g_(r,s),_d(o,a);var c=_d(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?S_(r,h):f==="dangerouslySetInnerHTML"?x_(r,h):f==="children"?Za(r,h):ih(r,f,h,c)}switch(o){case"input":fd(r,s);break;case"textarea":__(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Gs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Gs(r,!!s.multiple,s.defaultValue,!0):Gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ao]=s}catch(S){Rt(t,t.return,S)}}break;case 6:if(Yn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Rt(t,t.return,S)}}break;case 3:if(Yn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(S){Rt(t,t.return,S)}break;case 4:Yn(e,t),ui(t);break;case 13:Yn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fh=Nt())),i&4&&_m(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,Yn(e,t),sn=c):Yn(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ce=t,f=t.child;f!==null;){for(h=Ce=f;Ce!==null;){switch(d=Ce,m=d.child,d.tag){case 0:case 11:case 14:case 15:Xa(4,d,d.return);break;case 1:Vs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){Rt(i,n,S)}}break;case 5:Vs(d,d.return);break;case 22:if(d.memoizedState!==null){xm(h);continue}}m!==null?(m.return=d,Ce=m):xm(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=y_("display",a))}catch(S){Rt(t,t.return,S)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){Rt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yn(e,t),ui(t),i&4&&_m(t);break;case 21:break;default:Yn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($0(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Za(r,""),i.flags&=-33);var s=gm(t);Xd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=gm(t);$d(t,o,a);break;default:throw Error(ce(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IS(t,e,n){Ce=t,Y0(t)}function Y0(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Xo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||sn;o=Xo;var c=sn;if(Xo=a,(sn=l)&&!c)for(Ce=r;Ce!==null;)a=Ce,l=a.child,a.tag===22&&a.memoizedState!==null?ym(r):l!==null?(l.return=a,Ce=l):ym(r);for(;s!==null;)Ce=s,Y0(s),s=s.sibling;Ce=r,Xo=o,sn=c}vm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):vm(t)}}function vm(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Pc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&to(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}sn||e.flags&512&&Wd(e)}catch(d){Rt(e,e.return,d)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function xm(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function ym(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pc(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{Wd(e)}catch(l){Rt(e,s,l)}break;case 5:var a=e.return;try{Wd(e)}catch(l){Rt(e,a,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Ce=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ce=o;break}Ce=e.return}}var US=Math.ceil,lc=Ki.ReactCurrentDispatcher,Ih=Ki.ReactCurrentOwner,jn=Ki.ReactCurrentBatchConfig,rt=0,$t=null,Ft=null,Kt=0,Rn=0,Hs=Lr(0),zt=0,ho=null,rs=0,Nc=0,Uh=0,qa=null,xn=null,Fh=0,ia=1/0,Di=null,cc=!1,qd=null,Tr=null,qo=!1,gr=null,uc=0,Ya=0,Yd=null,Dl=-1,Il=0;function fn(){return rt&6?Nt():Dl!==-1?Dl:Dl=Nt()}function wr(t){return t.mode&1?rt&2&&Kt!==0?Kt&-Kt:vS.transition!==null?(Il===0&&(Il=D_()),Il):(t=ut,t!==0||(t=window.event,t=t===void 0?16:z_(t.type)),t):1}function ai(t,e,n,i){if(50<Ya)throw Ya=0,Yd=null,Error(ce(185));So(t,n,i),(!(rt&2)||t!==$t)&&(t===$t&&(!(rt&2)&&(Nc|=n),zt===4&&hr(t,Kt)),Mn(t,i),n===1&&rt===0&&!(e.mode&1)&&(ia=Nt()+500,bc&&Dr()))}function Mn(t,e){var n=t.callbackNode;vy(t,e);var i=Xl(t,t===$t?Kt:0);if(i===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?_S(Sm.bind(null,t)):s0(Sm.bind(null,t)),hS(function(){!(rt&6)&&Dr()}),n=null;else{switch(I_(i)){case 1:n=lh;break;case 4:n=N_;break;case 16:n=$l;break;case 536870912:n=L_;break;default:n=$l}n=iv(n,K0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function K0(t,e){if(Dl=-1,Il=0,rt&6)throw Error(ce(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var i=Xl(t,t===$t?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dc(t,i);else{e=i;var r=rt;rt|=2;var s=J0();($t!==t||Kt!==e)&&(Di=null,ia=Nt()+500,Qr(t,e));do try{kS();break}catch(o){Z0(t,o)}while(!0);Sh(),lc.current=s,rt=r,Ft!==null?e=0:($t=null,Kt=0,e=zt)}if(e!==0){if(e===2&&(r=Ed(t),r!==0&&(i=r,e=Kd(t,r))),e===1)throw n=ho,Qr(t,0),hr(t,i),Mn(t,Nt()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!FS(r)&&(e=dc(t,i),e===2&&(s=Ed(t),s!==0&&(i=s,e=Kd(t,s))),e===1))throw n=ho,Qr(t,0),hr(t,i),Mn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:jr(t,xn,Di);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=Fh+500-Nt(),10<e)){if(Xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pd(jr.bind(null,t,xn,Di),e);break}jr(t,xn,Di);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-si(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*US(i/1960))-i,10<i){t.timeoutHandle=Pd(jr.bind(null,t,xn,Di),i);break}jr(t,xn,Di);break;case 5:jr(t,xn,Di);break;default:throw Error(ce(329))}}}return Mn(t,Nt()),t.callbackNode===n?K0.bind(null,t):null}function Kd(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=dc(t,e),t!==2&&(e=xn,xn=n,e!==null&&Zd(e)),t}function Zd(t){xn===null?xn=t:xn.push.apply(xn,t)}function FS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Uh,e&=~Nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function Sm(t){if(rt&6)throw Error(ce(327));qs();var e=Xl(t,0);if(!(e&1))return Mn(t,Nt()),null;var n=dc(t,e);if(t.tag!==0&&n===2){var i=Ed(t);i!==0&&(e=i,n=Kd(t,i))}if(n===1)throw n=ho,Qr(t,0),hr(t,e),Mn(t,Nt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,xn,Di),Mn(t,Nt()),null}function Oh(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(ia=Nt()+500,bc&&Dr())}}function ss(t){gr!==null&&gr.tag===0&&!(rt&6)&&qs();var e=rt;rt|=1;var n=jn.transition,i=ut;try{if(jn.transition=null,ut=1,t)return t()}finally{ut=i,jn.transition=n,rt=e,!(rt&6)&&Dr()}}function kh(){Rn=Hs.current,St(Hs)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fS(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(vh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:ta(),St(Sn),St(on),bh();break;case 5:Ch(i);break;case 4:ta();break;case 13:St(Tt);break;case 19:St(Tt);break;case 10:Eh(i.type._context);break;case 22:case 23:kh()}n=n.return}if($t=t,Ft=t=Cr(t.current,null),Kt=Rn=e,zt=0,ho=null,Uh=Nc=rs=0,xn=qa=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Yr=null}return t}function Z0(t,e){do{var n=Ft;try{if(Sh(),Pl.current=oc,ac){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ac=!1}if(is=0,Wt=Bt=wt=null,$a=!1,co=0,Ih.current=null,n===null||n.return===null){zt=1,ho=e,Ft=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=lm(a);if(m!==null){m.flags&=-257,cm(m,a,o,s,e),m.mode&1&&om(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){om(s,c,e),Bh();break e}l=Error(ce(426))}}else if(Et&&o.mode&1){var p=lm(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),cm(p,a,o,s,e),xh(na(l,o));break e}}s=l=na(l,o),zt!==4&&(zt=2),qa===null?qa=[s]:qa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=I0(s,l,e);tm(s,u);break e;case 1:o=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Tr===null||!Tr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=U0(s,o,e);tm(s,E);break e}}s=s.return}while(s!==null)}ev(n)}catch(T){e=T,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function J0(){var t=lc.current;return lc.current=oc,t===null?oc:t}function Bh(){(zt===0||zt===3||zt===2)&&(zt=4),$t===null||!(rs&268435455)&&!(Nc&268435455)||hr($t,Kt)}function dc(t,e){var n=rt;rt|=2;var i=J0();($t!==t||Kt!==e)&&(Di=null,Qr(t,e));do try{OS();break}catch(r){Z0(t,r)}while(!0);if(Sh(),rt=n,lc.current=i,Ft!==null)throw Error(ce(261));return $t=null,Kt=0,zt}function OS(){for(;Ft!==null;)Q0(Ft)}function kS(){for(;Ft!==null&&!cy();)Q0(Ft)}function Q0(t){var e=nv(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?ev(t):Ft=e,Ih.current=null}function ev(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NS(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Ft=null;return}}else if(n=PS(n,e,Rn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);zt===0&&(zt=5)}function jr(t,e,n){var i=ut,r=jn.transition;try{jn.transition=null,ut=1,BS(t,e,n,i)}finally{jn.transition=r,ut=i}return null}function BS(t,e,n,i){do qs();while(gr!==null);if(rt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xy(t,s),t===$t&&(Ft=$t=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,iv($l,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var a=ut;ut=1;var o=rt;rt|=4,Ih.current=null,DS(t,n),q0(n,t),sS(Ad),ql=!!bd,Ad=bd=null,t.current=n,IS(n),uy(),rt=o,ut=a,jn.transition=s}else t.current=n;if(qo&&(qo=!1,gr=t,uc=r),s=t.pendingLanes,s===0&&(Tr=null),hy(n.stateNode),Mn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(cc)throw cc=!1,t=qd,qd=null,t;return uc&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===Yd?Ya++:(Ya=0,Yd=t):Ya=0,Dr(),null}function qs(){if(gr!==null){var t=I_(uc),e=jn.transition,n=ut;try{if(jn.transition=null,ut=16>t?16:t,gr===null)var i=!1;else{if(t=gr,gr=null,uc=0,rt&6)throw Error(ce(331));var r=rt;for(rt|=4,Ce=t.current;Ce!==null;){var s=Ce,a=s.child;if(Ce.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ce=c;Ce!==null;){var f=Ce;switch(f.tag){case 0:case 11:case 15:Xa(8,f,s)}var h=f.child;if(h!==null)h.return=f,Ce=h;else for(;Ce!==null;){f=Ce;var d=f.sibling,m=f.return;if(W0(f),f===c){Ce=null;break}if(d!==null){d.return=m,Ce=d;break}Ce=m}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}Ce=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ce=a;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ce=u;break e}Ce=s.return}}var g=t.current;for(Ce=g;Ce!==null;){a=Ce;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ce=y;else e:for(a=g;Ce!==null;){if(o=Ce,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Pc(9,o)}}catch(T){Rt(o,o.return,T)}if(o===a){Ce=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Ce=E;break e}Ce=o.return}}if(rt=r,Dr(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(Ec,t)}catch{}i=!0}return i}finally{ut=n,jn.transition=e}}return!1}function Em(t,e,n){e=na(n,e),e=I0(t,e,1),t=Mr(t,e,1),e=fn(),t!==null&&(So(t,1,e),Mn(t,e))}function Rt(t,e,n){if(t.tag===3)Em(t,t,n);else for(;e!==null;){if(e.tag===3){Em(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){t=na(n,t),t=U0(e,t,1),e=Mr(e,t,1),t=fn(),e!==null&&(So(e,1,t),Mn(e,t));break}}e=e.return}}function zS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,$t===t&&(Kt&n)===n&&(zt===4||zt===3&&(Kt&130023424)===Kt&&500>Nt()-Fh?Qr(t,0):Uh|=n),Mn(t,e)}function tv(t,e){e===0&&(t.mode&1?(e=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):e=1);var n=fn();t=Wi(t,e),t!==null&&(So(t,e,n),Mn(t,n))}function VS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tv(t,n)}function HS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),tv(t,n)}var nv;nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,RS(t,e,n);yn=!!(t.flags&131072)}else yn=!1,Et&&e.flags&1048576&&a0(e,tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ll(t,e),t=e.pendingProps;var r=Js(e,on.current);Xs(e,n),r=Rh(null,e,i,t,r,n);var s=Ph();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,Ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Th(e),r.updater=Rc,e.stateNode=r,r._reactInternals=e,Od(e,i,t,n),e=zd(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&_h(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jS(i),t=Qn(i,t),r){case 0:e=Bd(null,e,i,t,n);break e;case 1:e=fm(null,e,i,t,n);break e;case 11:e=um(null,e,i,t,n);break e;case 14:e=dm(null,e,i,Qn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Bd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),fm(t,e,i,r,n);case 3:e:{if(B0(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,f0(t,e),rc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=na(Error(ce(423)),e),e=hm(t,e,i,n,r);break e}else if(i!==r){r=na(Error(ce(424)),e),e=hm(t,e,i,n,r);break e}else for(Pn=Er(e.stateNode.containerInfo.firstChild),Ln=e,Et=!0,ti=null,n=u0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),i===r){e=$i(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return h0(e),t===null&&Id(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Rd(i,r)?a=null:s!==null&&Rd(i,s)&&(e.flags|=32),k0(t,e),un(t,e,a,n),e.child;case 6:return t===null&&Id(e),null;case 13:return z0(t,e,n);case 4:return wh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ea(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),um(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,vt(nc,i._currentValue),i._currentValue=a,s!==null)if(oi(s.value,a)){if(s.children===r.children&&!Sn.current){e=$i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ud(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ud(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xs(e,n),r=Wn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),dm(t,e,i,r,n);case 15:return F0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Ll(t,e),e.tag=1,En(i)?(t=!0,Ql(e)):t=!1,Xs(e,n),D0(e,i,r),Od(e,i,r,n),zd(null,e,i,!0,t,n);case 19:return V0(t,e,n);case 22:return O0(t,e,n)}throw Error(ce(156,e.tag))};function iv(t,e){return P_(t,e)}function GS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new GS(t,e,n,i)}function zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jS(t){if(typeof t=="function")return zh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===ah)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")zh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ls:return es(n.children,r,s,e);case rh:a=8,r|=8;break;case od:return t=Gn(12,n,e,r|2),t.elementType=od,t.lanes=s,t;case ld:return t=Gn(13,n,e,r),t.elementType=ld,t.lanes=s,t;case cd:return t=Gn(19,n,e,r),t.elementType=cd,t.lanes=s,t;case h_:return Lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case d_:a=10;break e;case f_:a=9;break e;case sh:a=11;break e;case ah:a=14;break e;case ur:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Gn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function es(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Lc(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=h_,t.lanes=n,t.stateNode={isHidden:!1},t}function _u(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function vu(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vh(t,e,n,i,r,s,a,o,l){return t=new WS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(s),t}function $S(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function rv(t){if(!t)return Rr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(En(n))return r0(t,n,e)}return e}function sv(t,e,n,i,r,s,a,o,l){return t=Vh(n,i,!0,t,r,s,a,o,l),t.context=rv(null),n=t.current,i=fn(),r=wr(n),s=Bi(i,r),s.callback=e??null,Mr(n,s,r),t.current.lanes=r,So(t,r,i),Mn(t,i),t}function Dc(t,e,n,i){var r=e.current,s=fn(),a=wr(r);return n=rv(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Mr(r,e,a),t!==null&&(ai(t,r,a,s),Rl(t,r,a)),a}function fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hh(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function XS(){return null}var av=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gh(t){this._internalRoot=t}Ic.prototype.render=Gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Dc(t,e,null,null)};Ic.prototype.unmount=Gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ss(function(){Dc(null,t,null,null)}),e[ji]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=O_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&B_(t)}};function jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function qS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=fc(a);s.call(c)}}var a=sv(e,i,t,0,null,!1,!1,"",Tm);return t._reactRootContainer=a,t[ji]=a.current,ro(t.nodeType===8?t.parentNode:t),ss(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=fc(l);o.call(c)}}var l=Vh(t,0,!1,null,null,!1,!1,"",Tm);return t._reactRootContainer=l,t[ji]=l.current,ro(t.nodeType===8?t.parentNode:t),ss(function(){Dc(e,l,n,i)}),l}function Fc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=fc(a);o.call(l)}}Dc(e,a,t,r)}else a=qS(n,e,t,r,i);return fc(a)}U_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ua(e.pendingLanes);n!==0&&(ch(e,n|1),Mn(e,Nt()),!(rt&6)&&(ia=Nt()+500,Dr()))}break;case 13:ss(function(){var i=Wi(t,1);if(i!==null){var r=fn();ai(i,t,1,r)}}),Hh(t,1)}};uh=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=fn();ai(e,t,134217728,n)}Hh(t,134217728)}};F_=function(t){if(t.tag===13){var e=wr(t),n=Wi(t,e);if(n!==null){var i=fn();ai(n,t,e,i)}Hh(t,e)}};O_=function(){return ut};k_=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};xd=function(t,e,n){switch(e){case"input":if(fd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cc(i);if(!r)throw Error(ce(90));m_(i),fd(i,r)}}}break;case"textarea":__(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};T_=Oh;w_=ss;var YS={usingClientEntryPoint:!1,Events:[Mo,Fs,Cc,E_,M_,Oh]},Ta={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KS={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||XS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{Ec=Yo.inject(KS),vi=Yo}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YS;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(e))throw Error(ce(200));return $S(t,e,null,n)};Un.createRoot=function(t,e){if(!jh(t))throw Error(ce(299));var n=!1,i="",r=av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vh(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,ro(t.nodeType===8?t.parentNode:t),new Gh(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=A_(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return ss(t)};Un.hydrate=function(t,e,n){if(!Uc(e))throw Error(ce(200));return Fc(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!jh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=sv(e,null,t,1,n??null,r,!1,s,a),t[ji]=e.current,ro(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ic(e)};Un.render=function(t,e,n){if(!Uc(e))throw Error(ce(200));return Fc(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!Uc(t))throw Error(ce(40));return t._reactRootContainer?(ss(function(){Fc(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Un.unstable_batchedUpdates=Oh;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Uc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Fc(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov)}catch(t){console.error(t)}}ov(),o_.exports=Un;var ZS=o_.exports,wm=ZS;sd.createRoot=wm.createRoot,sd.hydrateRoot=wm.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},po.apply(this,arguments)}var _r;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(_r||(_r={}));const Cm="popstate";function JS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Jd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:hc(r)}return eE(e,n,null,t)}function Ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QS(){return Math.random().toString(36).substr(2,8)}function bm(t,e){return{usr:t.state,key:t.key,idx:e}}function Jd(t,e,n,i){return n===void 0&&(n=null),po({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ha(e):e,{state:n,key:e&&e.key||i||QS()})}function hc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ha(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function eE(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=_r.Pop,l=null,c=f();c==null&&(c=0,a.replaceState(po({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function h(){o=_r.Pop;let p=f(),u=p==null?null:p-c;c=p,l&&l({action:o,location:S.location,delta:u})}function d(p,u){o=_r.Push;let g=Jd(S.location,p,u);c=f()+1;let y=bm(g,c),E=S.createHref(g);try{a.pushState(y,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(E)}s&&l&&l({action:o,location:S.location,delta:1})}function m(p,u){o=_r.Replace;let g=Jd(S.location,p,u);c=f();let y=bm(g,c),E=S.createHref(g);a.replaceState(y,"",E),s&&l&&l({action:o,location:S.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:hc(p);return g=g.replace(/ $/,"%20"),Ot(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let S={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Cm,h),l=p,()=>{r.removeEventListener(Cm,h),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:d,replace:m,go(p){return a.go(p)}};return S}var Am;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Am||(Am={}));function tE(t,e,n){return n===void 0&&(n="/"),nE(t,e,n)}function nE(t,e,n,i){let r=typeof e=="string"?ha(e):e,s=$h(r.pathname||"/",n);if(s==null)return null;let a=lv(t);iE(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=mE(s);o=fE(a[l],c)}return o}function lv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Ot(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=br([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Ot(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lv(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:uE(c,s.index),routesMeta:f})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of cv(s.path))r(s,a,l)}),e}function cv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=cv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function iE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const rE=/^:[\w-]+$/,sE=3,aE=2,oE=1,lE=10,cE=-2,Rm=t=>t==="*";function uE(t,e){let n=t.split("/"),i=n.length;return n.some(Rm)&&(i+=cE),e&&(i+=aE),n.filter(r=>!Rm(r)).reduce((r,s)=>r+(rE.test(s)?sE:s===""?oE:lE),i)}function dE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function fE(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=hE({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),d=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:br([s,h.pathname]),pathnameBase:yE(br([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=br([s,h.pathnameBase]))}return a}function hE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=pE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,f,h)=>{let{paramName:d,isOptional:m}=f;if(d==="*"){let S=o[h]||"";a=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const _=o[h];return m&&!_?c[d]=void 0:c[d]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function pE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function mE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $h(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const gE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_E=t=>gE.test(t);function vE(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ha(t):t,s;if(n)if(_E(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Wh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Pm(n.substring(1),"/"):s=Pm(n,e)}else s=e;return{pathname:s,search:SE(i),hash:EE(r)}}function Pm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function xu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function uv(t,e){let n=xE(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function dv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ha(t):(r=po({},t),Ot(!r.pathname||!r.pathname.includes("?"),xu("?","pathname","search",r)),Ot(!r.pathname||!r.pathname.includes("#"),xu("#","pathname","hash",r)),Ot(!r.search||!r.search.includes("#"),xu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),h-=1;r.pathname=d.join("/")}o=h>=0?e[h]:"/"}let l=vE(r,o),c=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const br=t=>t.join("/").replace(/\/\/+/g,"/"),yE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),SE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,EE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ME(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const fv=["post","put","patch","delete"];new Set(fv);const TE=["get",...fv];new Set(TE);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mo.apply(this,arguments)}const Xh=D.createContext(null),wE=D.createContext(null),us=D.createContext(null),Oc=D.createContext(null),ds=D.createContext({outlet:null,matches:[],isDataRoute:!1}),hv=D.createContext(null);function CE(t,e){let{relative:n}=e===void 0?{}:e;wo()||Ot(!1);let{basename:i,navigator:r}=D.useContext(us),{hash:s,pathname:a,search:o}=mv(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:br([i,a])),r.createHref({pathname:l,search:o,hash:s})}function wo(){return D.useContext(Oc)!=null}function fs(){return wo()||Ot(!1),D.useContext(Oc).location}function pv(t){D.useContext(us).static||D.useLayoutEffect(t)}function kc(){let{isDataRoute:t}=D.useContext(ds);return t?BE():bE()}function bE(){wo()||Ot(!1);let t=D.useContext(Xh),{basename:e,future:n,navigator:i}=D.useContext(us),{matches:r}=D.useContext(ds),{pathname:s}=fs(),a=JSON.stringify(uv(r,n.v7_relativeSplatPath)),o=D.useRef(!1);return pv(()=>{o.current=!0}),D.useCallback(function(c,f){if(f===void 0&&(f={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let h=dv(c,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:br([e,h.pathname])),(f.replace?i.replace:i.push)(h,f.state,f)},[e,i,a,s,t])}function mv(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=D.useContext(us),{matches:r}=D.useContext(ds),{pathname:s}=fs(),a=JSON.stringify(uv(r,i.v7_relativeSplatPath));return D.useMemo(()=>dv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function AE(t,e){return RE(t,e)}function RE(t,e,n,i){wo()||Ot(!1);let{navigator:r}=D.useContext(us),{matches:s}=D.useContext(ds),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=fs(),f;if(e){var h;let p=typeof e=="string"?ha(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||Ot(!1),f=p}else f=c;let d=f.pathname||"/",m=d;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=tE(t,{pathname:m}),S=IE(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:br([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:br([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&S?D.createElement(Oc.Provider,{value:{location:mo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:_r.Pop}},S):S}function PE(){let t=kE(),e=ME(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:r},n):null,null)}const NE=D.createElement(PE,null);class LE extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(ds.Provider,{value:this.props.routeContext},D.createElement(hv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function DE(t){let{routeContext:e,match:n,children:i}=t,r=D.useContext(Xh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(ds.Provider,{value:e},i)}function IE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let f=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);f>=0||Ot(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let h=a[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:d,errors:m}=n,_=h.route.loader&&d[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((f,h,d)=>{let m,_=!1,S=null,p=null;n&&(m=o&&h.route.id?o[h.route.id]:void 0,S=h.route.errorElement||NE,l&&(c<0&&d===0?(zE("route-fallback"),_=!0,p=null):c===d&&(_=!0,p=h.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,d+1)),g=()=>{let y;return m?y=S:_?y=p:h.route.Component?y=D.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=f,D.createElement(DE,{match:h,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?D.createElement(LE,{location:n.location,revalidation:n.revalidation,component:S,error:m,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var gv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(gv||{}),_v=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(_v||{});function UE(t){let e=D.useContext(Xh);return e||Ot(!1),e}function FE(t){let e=D.useContext(wE);return e||Ot(!1),e}function OE(t){let e=D.useContext(ds);return e||Ot(!1),e}function vv(t){let e=OE(),n=e.matches[e.matches.length-1];return n.route.id||Ot(!1),n.route.id}function kE(){var t;let e=D.useContext(hv),n=FE(),i=vv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function BE(){let{router:t}=UE(gv.UseNavigateStable),e=vv(_v.UseNavigateStable),n=D.useRef(!1);return pv(()=>{n.current=!0}),D.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,mo({fromRouteId:e},s)))},[t,e])}const Nm={};function zE(t,e,n){Nm[t]||(Nm[t]=!0)}function VE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ps(t){Ot(!1)}function HE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=_r.Pop,navigator:s,static:a=!1,future:o}=t;wo()&&Ot(!1);let l=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:l,navigator:s,static:a,future:mo({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=ha(i));let{pathname:f="/",search:h="",hash:d="",state:m=null,key:_="default"}=i,S=D.useMemo(()=>{let p=$h(f,l);return p==null?null:{location:{pathname:p,search:h,hash:d,state:m,key:_},navigationType:r}},[l,f,h,d,m,_,r]);return S==null?null:D.createElement(us.Provider,{value:c},D.createElement(Oc.Provider,{children:n,value:S}))}function GE(t){let{children:e,location:n}=t;return AE(Qd(e),n)}new Promise(()=>{});function Qd(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(i,r)=>{if(!D.isValidElement(i))return;let s=[...e,r];if(i.type===D.Fragment){n.push.apply(n,Qd(i.props.children,s));return}i.type!==Ps&&Ot(!1),!i.props.index||!i.props.children||Ot(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Qd(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ef(){return ef=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ef.apply(this,arguments)}function jE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function WE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $E(t,e){return t.button===0&&(!e||e==="_self")&&!WE(t)}function tf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function XE(t,e){let n=tf(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}const qE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],YE="6";try{window.__reactRouterVersion=YE}catch{}const KE="startTransition",Lm=zx[KE];function ZE(t){let{basename:e,children:n,future:i,window:r}=t,s=D.useRef();s.current==null&&(s.current=JS({window:r,v5Compat:!0}));let a=s.current,[o,l]=D.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},f=D.useCallback(h=>{c&&Lm?Lm(()=>l(h)):l(h)},[l,c]);return D.useLayoutEffect(()=>a.listen(f),[a,f]),D.useEffect(()=>VE(i),[i]),D.createElement(HE,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const JE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dm=D.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:f,viewTransition:h}=e,d=jE(e,qE),{basename:m}=D.useContext(us),_,S=!1;if(typeof c=="string"&&QE.test(c)&&(_=c,JE))try{let y=new URL(window.location.href),E=c.startsWith("//")?new URL(y.protocol+c):new URL(c),T=$h(E.pathname,m);E.origin===y.origin&&T!=null?c=T+E.search+E.hash:S=!0}catch{}let p=CE(c,{relative:r}),u=eM(c,{replace:a,state:o,target:l,preventScrollReset:f,relative:r,viewTransition:h});function g(y){i&&i(y),y.defaultPrevented||u(y)}return D.createElement("a",ef({},d,{href:_||p,onClick:S||s?i:g,ref:n,target:l}))});var Im;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Im||(Im={}));var Um;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Um||(Um={}));function eM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=kc(),c=fs(),f=mv(t,{relative:a});return D.useCallback(h=>{if($E(h,n)){h.preventDefault();let d=i!==void 0?i:hc(c)===hc(f);l(t,{replace:d,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,f,i,r,n,t,s,a,o])}function tM(t){let e=D.useRef(tf(t)),n=D.useRef(!1),i=fs(),r=D.useMemo(()=>XE(i.search,n.current?null:e.current),[i.search]),s=kc(),a=D.useCallback((o,l)=>{const c=tf(typeof o=="function"?o(r):o);n.current=!0,s("?"+c,l)},[s,r]);return[r,a]}const On="/api";async function Ko(t){const e=await fetch(`${On}/concepts/${encodeURIComponent(t)}`);if(!e.ok)throw new Error(`Failed to fetch concept: ${e.statusText}`);return e.json()}async function nM(t){const e=await fetch(`${On}/concepts/search?q=${encodeURIComponent(t)}`);if(!e.ok)throw new Error(`Search failed: ${e.statusText}`);return(await e.json()).results}async function iM(t,e){const n=await fetch(`${On}/concepts/${encodeURIComponent(t)}/enrich`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({extract:e})});if(!n.ok)throw new Error(`Enrich failed: ${n.statusText}`);return n.json()}async function rM(t){const e=await fetch(`${On}/concepts/${encodeURIComponent(t)}/links`);if(!e.ok)throw new Error(`Links failed: ${e.statusText}`);return(await e.json()).links}async function sM(t){const e=await fetch(`${On}/concepts/${encodeURIComponent(t)}`);if(!e.ok)return null;const n=await e.json();return{title:n.title,summary:n.summary,extract:n.extract,image:n.image}}async function aM(){const t=await fetch(`${On}/me`);return t.ok?(await t.json()).user:null}async function oM(t,e){const n=await fetch(`${On}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})}),i=await n.json();if(!n.ok)throw new Error(i.error||`HTTP ${n.status}`);return i.user}async function lM(t,e){const n=await fetch(`${On}/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})}),i=await n.json();if(!n.ok)throw new Error(i.error||`HTTP ${n.status}`);return i.user}async function cM(){await fetch(`${On}/logout`,{method:"POST"})}async function Fm(){const t=await fetch(`${On}/trees`);return t.ok?t.json():[]}async function xv(t){await fetch(`${On}/trees`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}async function uM(t){await fetch(`${On}/trees/${encodeURIComponent(t)}`,{method:"DELETE"})}async function dM(t){const e=await fetch(`${On}/skill-tree`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:t})});if(!e.ok){const i=await e.json().catch(()=>({error:`HTTP ${e.status}`}));throw new Error(i.error||e.status)}const n=await e.json();if(!n.nodes||!Array.isArray(n.nodes))throw new Error("Unexpected response format");return n.nodes}const yv=D.createContext(null);function fM({children:t}){const[e,n]=D.useState(null),[i,r]=D.useState(!1),[s,a]=D.useState(null);D.useEffect(()=>{aM().then(d=>n(d)).catch(()=>n(null)).finally(()=>r(!0))},[]);const o=D.useCallback(async(d,m)=>{const _=await oM(d,m);n(_);const S=JSON.parse(localStorage.getItem("skillTrees")||"[]");return S.length>0&&a({count:S.length}),_},[]),l=D.useCallback(async(d,m)=>{const _=await lM(d,m);n(_);const S=JSON.parse(localStorage.getItem("skillTrees")||"[]");return S.length>0&&a({count:S.length}),_},[]),c=D.useCallback(async()=>{await cM(),n(null),a(null)},[]),f=D.useCallback(async()=>{const d=JSON.parse(localStorage.getItem("skillTrees")||"[]");for(const m of d)await xv(m);localStorage.removeItem("skillTrees"),a(null)},[]),h=D.useCallback(()=>a(null),[]);return v.jsx(yv.Provider,{value:{user:e,ready:i,login:o,register:l,logout:c,pendingImport:s,acceptImport:f,dismissImport:h},children:t})}function Bc(){const t=D.useContext(yv);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const Sv=D.createContext(null);function hM({children:t}){const{user:e,ready:n,pendingImport:i}=Bc(),[r,s]=D.useState([]),[a,o]=D.useState(()=>JSON.parse(localStorage.getItem("skillTrees")||"[]")),[l,c]=D.useState(""),[f,h]=D.useState([]),[d,m]=D.useState(()=>new Set),[_,S]=D.useState(!1),[p,u]=D.useState("");D.useEffect(()=>{n&&(e?Fm().then(I=>s(I||[])):s([]))},[e,n]);const g=D.useRef(i);D.useEffect(()=>{g.current&&!i&&e&&(Fm().then(I=>s(I||[])),o(JSON.parse(localStorage.getItem("skillTrees")||"[]"))),g.current=i},[i,e]);const y=e?r:a,E=D.useCallback(async I=>{if(e)await xv(I),s(P=>{const N=P.findIndex(F=>F.topic.toLowerCase()===I.topic.toLowerCase());if(N>=0){const F=[...P];return F[N]=I,F}return[I,...P]});else{const P=JSON.parse(localStorage.getItem("skillTrees")||"[]"),N=P.findIndex(F=>F.topic.toLowerCase()===I.topic.toLowerCase());N>=0?P[N]=I:P.unshift(I),localStorage.setItem("skillTrees",JSON.stringify(P)),o(P)}},[e]),T=D.useCallback(async I=>{if(e)await uM(I),s(P=>P.filter(N=>N.topic!==I));else{const P=JSON.parse(localStorage.getItem("skillTrees")||"[]").filter(N=>N.topic!==I);localStorage.setItem("skillTrees",JSON.stringify(P)),o(P)}},[e]),w=D.useCallback(I=>{c(I.topic),h(I.nodes),m(new Set(I.completed||[]))},[]),A=D.useCallback(()=>{c(""),h([]),m(new Set)},[]),x=D.useCallback(I=>{m(P=>{const N=new Set(P);if(N.has(I)){N.delete(I);const j=B=>{var G;for(const O of f)(G=O.requires)!=null&&G.includes(B)&&N.has(O.name)&&(N.delete(O.name),j(O.name))};j(I)}else N.add(I);const F={topic:l,nodes:f,completed:[...N],savedAt:Date.now()};return E(F),N})},[f,l,E]),C=D.useCallback(async I=>{S(!0),u("");try{const P=await dM(I);c(I),h(P),m(new Set);const N={topic:I,nodes:P,completed:[],savedAt:Date.now()};return await E(N),{topic:I,nodes:P}}catch(P){throw u(P.message),P}finally{S(!1)}},[E]);return v.jsx(Sv.Provider,{value:{savedTrees:y,currentTopic:l,currentNodes:f,completedNodes:d,generating:_,generateError:p,generateTree:C,openTree:w,closeTree:A,toggleComplete:x,deleteTree:T},children:t})}function Co(){const t=D.useContext(Sv);if(!t)throw new Error("useSkillTree must be used within SkillTreeProvider");return t}const pM="_header_1pu85_3",mM="_brand_1pu85_20",gM="_brandTag_1pu85_27",_M="_brandTitle_1pu85_41",vM="_brandItalic_1pu85_50",xM="_brandChip_1pu85_59",yM="_tabs_1pu85_72",SM="_tab_1pu85_72",EM="_tabActive_1pu85_102",MM="_auth_1pu85_115",TM="_greeting_1pu85_122",wM="_btnGhost_1pu85_129",CM="_btnPill_1pu85_149",tn={header:pM,brand:mM,brandTag:gM,brandTitle:_M,brandItalic:vM,brandChip:xM,tabs:yM,tab:SM,tabActive:EM,auth:MM,greeting:TM,btnGhost:wM,btnPill:CM};function Ev({onSignIn:t,onSignUp:e}){const{user:n,logout:i}=Bc(),{pathname:r}=fs(),s=r.startsWith("/explore"),a=!s;return v.jsxs("header",{className:tn.header,children:[v.jsxs("div",{className:tn.brand,children:[v.jsx("span",{className:tn.brandTag,children:"STG"}),v.jsxs("span",{className:tn.brandTitle,children:["Skill Tree ",v.jsx("span",{className:tn.brandItalic,children:"Generator"})]}),v.jsx("span",{className:tn.brandChip,children:"v1"})]}),v.jsxs("nav",{className:tn.tabs,"aria-label":"Primary",children:[v.jsx(Dm,{to:"/skill-tree",className:`${tn.tab} ${a?tn.tabActive:""}`,children:"Skill Tree"}),v.jsx(Dm,{to:"/explore",className:`${tn.tab} ${s?tn.tabActive:""}`,children:"Explore"})]}),v.jsx("div",{className:tn.auth,children:n?v.jsxs(v.Fragment,{children:[v.jsxs("span",{className:tn.greeting,children:["@",n.username]}),v.jsx("button",{className:tn.btnGhost,onClick:i,children:"Logout"})]}):v.jsxs(v.Fragment,{children:[v.jsx("button",{className:tn.btnGhost,onClick:t,children:"Sign In"}),v.jsx("button",{className:tn.btnPill,onClick:e,children:"Sign Up"})]})})]})}const bM="_banner_1q55g_3",AM="_left_1q55g_20",RM="_tag_1q55g_27",PM="_message_1q55g_40",NM="_actions_1q55g_50",LM="_yes_1q55g_56",DM="_no_1q55g_77",Fr={banner:bM,left:AM,tag:RM,message:PM,actions:NM,yes:LM,no:DM};function IM(){const{pendingImport:t,acceptImport:e,dismissImport:n}=Bc();if(!t)return null;const{count:i}=t;return v.jsxs("div",{className:Fr.banner,role:"status","aria-live":"polite",children:[v.jsxs("div",{className:Fr.left,children:[v.jsx("span",{className:Fr.tag,children:"IMPORT"}),v.jsxs("p",{className:Fr.message,children:[i," local tree",i>1?"s":""," found — sync to your account?"]})]}),v.jsxs("div",{className:Fr.actions,children:[v.jsx("button",{className:Fr.yes,onClick:e,children:"Import"}),v.jsx("button",{className:Fr.no,onClick:n,children:"Dismiss"})]})]})}const UM="_overlay_78y8f_3",FM="_modal_78y8f_22",OM="_modalHeader_78y8f_74",kM="_eyebrow_78y8f_80",BM="_tabs_78y8f_88",zM="_tab_78y8f_88",VM="_tabActive_78y8f_117",HM="_form_78y8f_124",GM="_error_78y8f_160",jM="_submit_78y8f_174",WM="_close_78y8f_206",Cn={overlay:UM,modal:FM,modalHeader:OM,eyebrow:kM,tabs:BM,tab:zM,tabActive:VM,form:HM,error:GM,submit:jM,close:WM};function Mv({initialMode:t="login",onClose:e}){const{login:n,register:i}=Bc(),[r,s]=D.useState(t),[a,o]=D.useState(""),[l,c]=D.useState(""),[f,h]=D.useState(""),[d,m]=D.useState(!1),_=D.useRef(null);D.useEffect(()=>{var u;(u=_.current)==null||u.focus()},[]);async function S(u){u.preventDefault(),h(""),m(!0);try{r==="login"?await n(a.trim(),l):await i(a.trim(),l),e()}catch(g){h(g.message==="Failed to fetch"?"Network error — is the server running?":g.message)}finally{m(!1)}}function p(u){u.target===u.currentTarget&&e()}return v.jsx("div",{className:Cn.overlay,onClick:p,children:v.jsxs("div",{className:Cn.modal,"data-mode":r,children:[v.jsxs("div",{className:Cn.modalHeader,children:[v.jsxs("span",{className:Cn.eyebrow,children:[r==="login"?"ACCESS":"JOIN"," · STG"]}),v.jsxs("div",{className:Cn.tabs,children:[v.jsx("button",{type:"button",className:`${Cn.tab} ${r==="login"?Cn.tabActive:""}`,onClick:()=>{s("login"),h("")},children:"Sign In"}),v.jsx("button",{type:"button",className:`${Cn.tab} ${r==="register"?Cn.tabActive:""}`,onClick:()=>{s("register"),h("")},children:"Sign Up"})]})]}),v.jsxs("form",{className:Cn.form,onSubmit:S,children:[v.jsx("label",{htmlFor:"auth-username",children:"Username"}),v.jsx("input",{id:"auth-username",ref:_,type:"text",autoComplete:"username",required:!0,value:a,onChange:u=>o(u.target.value)}),v.jsx("label",{htmlFor:"auth-password",children:"Password"}),v.jsx("input",{id:"auth-password",type:"password",autoComplete:r==="login"?"current-password":"new-password",required:!0,value:l,onChange:u=>c(u.target.value)}),f&&v.jsx("p",{className:Cn.error,children:f}),v.jsx("button",{type:"submit",className:Cn.submit,disabled:d,children:r==="login"?"Sign In":"Sign Up"})]}),v.jsx("button",{type:"button",className:Cn.close,onClick:e,children:"Cancel"})]})})}const $M="_promptView_riuku_3",XM="_dotGrid_riuku_15",qM="_hero_riuku_30",YM="_eyebrow_riuku_39",KM="_heading_riuku_49",ZM="_headingItalic_riuku_60",JM="_subtitle_riuku_67",QM="_form_riuku_77",e1="_formIcon_riuku_97",t1="_topicInput_riuku_104",n1="_generateBtn_riuku_116",i1="_formWrap_riuku_143",r1="_suggestions_riuku_157",s1="_suggestCat_riuku_184",a1="_suggestCatLabel_riuku_186",o1="_suggestTopics_riuku_195",l1="_suggestPill_riuku_201",c1="_status_riuku_220",u1="_divider_riuku_229",d1="_dividerLine_riuku_238",f1="_dividerLabel_riuku_245",h1="_exploreForm_riuku_254",p1="_exploreInput_riuku_273",m1="_exploreBtn_riuku_285",g1="_savedSection_riuku_308",_1="_savedHeader_riuku_317",v1="_savedTag_riuku_325",x1="_savedHeading_riuku_337",y1="_savedCount_riuku_346",S1="_savedList_riuku_354",E1="_savedItem_riuku_361",M1="_savedInfo_riuku_380",T1="_savedTopic_riuku_387",w1="_savedProgress_riuku_399",C1="_savedBarTrack_riuku_407",b1="_savedBarFill_riuku_414",A1="_savedActions_riuku_421",R1="_savedOpen_riuku_427",P1="_savedDelete_riuku_447",N1="_treeView_riuku_468",L1="_treeHeader_riuku_479",D1="_backBtn_riuku_494",I1="_backArrow_riuku_519",U1="_treeTitleWrap_riuku_526",F1="_treeEyebrow_riuku_535",O1="_treeTitle_riuku_526",k1="_progressWrap_riuku_557",B1="_progressLabel_riuku_564",z1="_progressTrack_riuku_573",V1="_progressFill_riuku_581",H1="_treeBody_riuku_590",G1="_graphContainer_riuku_597",j1="_detailPanel_riuku_612",W1="_detailPanelOpen_riuku_634",$1="_detailHeader_riuku_645",X1="_detailName_riuku_654",q1="_detailClose_riuku_663",Y1="_closeIcon_riuku_684",K1="_detailLevelRow_riuku_704",Z1="_detailLevel_riuku_704",J1="_detailLocked_riuku_723",Q1="_detailDone_riuku_733",eT="_tabBar_riuku_745",tT="_tabBtn_riuku_756",nT="_tabBtnActive_riuku_773",iT="_tabPane_riuku_779",rT="_detailLabel_riuku_786",sT="_detailDescription_riuku_805",aT="_list_riuku_814",oT="_requires_riuku_831",lT="_tips_riuku_832",cT="_outcomes_riuku_833",uT="_mistakes_riuku_834",dT="_concepts_riuku_835",fT="_resources_riuku_836",hT="_resourceType_riuku_856",pT="_resourceDesc_riuku_865",mT="_exploreWikiLink_riuku_873",gT="_completeBtn_riuku_879",_T="_completeBtnDone_riuku_903",vT="_graph_riuku_597",xT="_nodeRing_riuku_1047",yT="_completePulse_riuku_1056",ST="_shareWrap_riuku_1083",ET="_shareBtn_riuku_1088",MT="_shareDropdown_riuku_1109",TT="_shareOption_riuku_1126",wT="_nodeTooltip_riuku_1148",CT="_tooltipName_riuku_1165",bT="_tooltipLevel_riuku_1173",AT="_tooltipDesc_riuku_1182",RT="_tooltipReqs_riuku_1190",ie={promptView:$M,dotGrid:XM,hero:qM,eyebrow:YM,heading:KM,headingItalic:ZM,subtitle:JM,form:QM,formIcon:e1,topicInput:t1,generateBtn:n1,formWrap:i1,suggestions:r1,suggestCat:s1,suggestCatLabel:a1,suggestTopics:o1,suggestPill:l1,status:c1,divider:u1,dividerLine:d1,dividerLabel:f1,exploreForm:h1,exploreInput:p1,exploreBtn:m1,savedSection:g1,savedHeader:_1,savedTag:v1,savedHeading:x1,savedCount:y1,savedList:S1,savedItem:E1,savedInfo:M1,savedTopic:T1,savedProgress:w1,savedBarTrack:C1,savedBarFill:b1,savedActions:A1,savedOpen:R1,savedDelete:P1,treeView:N1,treeHeader:L1,backBtn:D1,backArrow:I1,treeTitleWrap:U1,treeEyebrow:F1,treeTitle:O1,progressWrap:k1,progressLabel:B1,progressTrack:z1,progressFill:V1,treeBody:H1,graphContainer:G1,detailPanel:j1,detailPanelOpen:W1,detailHeader:$1,detailName:X1,detailClose:q1,closeIcon:Y1,detailLevelRow:K1,detailLevel:Z1,detailLocked:J1,detailDone:Q1,tabBar:eT,tabBtn:tT,tabBtnActive:nT,tabPane:iT,detailLabel:rT,detailDescription:sT,list:aT,requires:oT,tips:lT,outcomes:cT,mistakes:uT,concepts:dT,resources:fT,resourceType:hT,resourceDesc:pT,exploreWikiLink:mT,completeBtn:gT,completeBtnDone:_T,graph:vT,nodeRing:xT,completePulse:yT,shareWrap:ST,shareBtn:ET,shareDropdown:MT,shareOption:TT,nodeTooltip:wT,tooltipName:CT,tooltipLevel:bT,tooltipDesc:AT,tooltipReqs:RT};function PT(){const{savedTrees:t,openTree:e,deleteTree:n}=Co();return!t||t.length===0?null:v.jsxs("section",{className:ie.savedSection,children:[v.jsxs("header",{className:ie.savedHeader,children:[v.jsx("span",{className:ie.savedTag,children:"SAVED"}),v.jsx("h2",{className:ie.savedHeading,children:"Your Trees"}),v.jsx("span",{className:ie.savedCount,children:t.length.toString().padStart(2,"0")})]}),v.jsx("ul",{className:ie.savedList,children:t.map(i=>{var o,l;const r=((o=i.completed)==null?void 0:o.length)||0,s=((l=i.nodes)==null?void 0:l.length)||0,a=s?Math.round(r/s*100):0;return v.jsxs("li",{className:ie.savedItem,children:[v.jsxs("div",{className:ie.savedInfo,children:[v.jsx("span",{className:ie.savedTopic,children:i.topic}),v.jsxs("span",{className:ie.savedProgress,children:[r.toString().padStart(2,"0"),"/",s.toString().padStart(2,"0")," · ",a,"%"]})]}),v.jsx("div",{className:ie.savedBarTrack,children:v.jsx("div",{className:ie.savedBarFill,style:{width:`${a}%`}})}),v.jsxs("div",{className:ie.savedActions,children:[v.jsx("button",{className:ie.savedOpen,onClick:()=>e(i),children:"Open →"}),v.jsx("button",{className:ie.savedDelete,onClick:()=>n(i.topic),children:"Delete"})]})]},i.topic)})})]})}const Om=[{category:"Creative",topics:["Guitar","Digital Art","Photography","Creative Writing","Music Production"]},{category:"Tech",topics:["Python","Machine Learning","Web Development","React","Data Science"]},{category:"Science",topics:["Quantum Physics","Organic Chemistry","Astronomy","Neuroscience"]},{category:"Languages",topics:["Japanese","Spanish","Mandarin Chinese","Sign Language"]},{category:"Life Skills",topics:["Cooking","Public Speaking","Personal Finance","Chess"]},{category:"Fitness",topics:["Calisthenics","Yoga","Rock Climbing","Swimming"]}];function NT({hideExplore:t=!1}){const{generating:e,generateError:n,generateTree:i}=Co(),[r,s]=D.useState(""),[a,o]=D.useState(""),[l,c]=D.useState(""),[f,h]=D.useState(!1),d=D.useRef(null),m=kc(),_=D.useRef(!1),S=r.trim()?Om.map(T=>({...T,topics:T.topics.filter(w=>w.toLowerCase().includes(r.toLowerCase()))})).filter(T=>T.topics.length>0):Om;function p(T){s(T),h(!1),u(T)}D.useEffect(()=>{function T(w){d.current&&!d.current.contains(w.target)&&h(!1)}return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);async function u(T){const w=T.trim();if(w){c("Generating skill tree...");try{await i(w),c("")}catch(A){c(`Error: ${A.message}`)}}}async function g(T){T.preventDefault(),u(r)}function y(T){T.preventDefault();const w=a.trim();w&&m(`/explore?q=${encodeURIComponent(w)}`)}D.useEffect(()=>{if(_.current)return;const w=new URLSearchParams(window.location.search).get("generate");w&&(_.current=!0,window.history.replaceState({},"","/"),s(w),u(w))},[]);const E=n&&!l?`Error: ${n}`:l;return v.jsxs("main",{className:ie.promptView,children:[v.jsx("div",{className:ie.dotGrid,"aria-hidden":"true"}),v.jsxs("header",{className:ie.hero,children:[v.jsx("span",{className:ie.eyebrow,children:"SKILL TREE GENERATOR · v1"}),v.jsxs("h1",{className:ie.heading,children:["What do you want ",v.jsx("span",{className:ie.headingItalic,children:"to learn"}),"?"]}),v.jsx("p",{className:ie.subtitle,children:"Type anything — a hobby, a language, a field. We'll chart a layered skill tree."})]}),v.jsxs("div",{className:ie.formWrap,ref:d,children:[v.jsxs("form",{className:ie.form,onSubmit:g,children:[v.jsx("span",{className:ie.formIcon,children:"▸"}),v.jsx("input",{className:ie.topicInput,type:"text",placeholder:"e.g. cooking, archery, guitar...",required:!0,value:r,onChange:T=>{s(T.target.value),h(!0)},onFocus:()=>h(!0)}),v.jsx("button",{type:"submit",className:ie.generateBtn,disabled:e,children:e?"Generating…":"Generate"})]}),f&&S.length>0&&v.jsx("div",{className:ie.suggestions,children:S.map(T=>v.jsxs("div",{className:ie.suggestCat,children:[v.jsx("div",{className:ie.suggestCatLabel,children:T.category}),v.jsx("div",{className:ie.suggestTopics,children:T.topics.map(w=>v.jsx("button",{className:ie.suggestPill,onClick:()=>p(w),children:w},w))})]},T.category))})]}),v.jsx("div",{className:ie.status,"aria-live":"polite",children:E}),!t&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:ie.divider,children:[v.jsx("span",{className:ie.dividerLine}),v.jsx("span",{className:ie.dividerLabel,children:"OR EXPLORE A WIKIPEDIA CONCEPT"}),v.jsx("span",{className:ie.dividerLine})]}),v.jsxs("form",{className:ie.exploreForm,onSubmit:y,children:[v.jsx("input",{className:ie.exploreInput,type:"text",placeholder:"e.g. quantum mechanics, stoicism...",value:a,onChange:T=>o(T.target.value)}),v.jsx("button",{type:"submit",className:ie.exploreBtn,children:"Explore →"})]})]}),v.jsx(PT,{})]})}const LT="http://www.w3.org/2000/svg";function ot(t,e={}){const n=document.createElementNS(LT,t);for(const[i,r]of Object.entries(e))n.setAttribute(i,r);return n}function km(t,e,n=20){const i=`${t}|${e}`;let r=2166136261;for(let s=0;s<i.length;s++)r=(r^i.charCodeAt(s))>>>0,r=Math.imul(r,16777619)>>>0;return r%(n*2+1)-n}const Bm=220,yu=145,zm=85,DT=140,IT=75,Vm=48,Su=40,Eu=36,Mu=30;function UT({nodes:t,completedNodes:e,justCompleted:n,onNodeClick:i}){const r=D.useRef(null),s=D.useRef(null),a=D.useRef(null);return D.useEffect(()=>{var P;const o=s.current,l=r.current;if(!o||!l||!(t!=null&&t.length))return;o.innerHTML="";const c=t.map(N=>({...N,level:N.level??1,requires:N.requires??[],icon:N.icon||N.name[0]||"◆"})),f=Math.max(...c.map(N=>N.level)),h={};for(const N of c)(h[P=N.level]||(h[P]=[])).push(N);const d={};for(const N of c)d[N.name]=new Set(N.requires);for(let N=1;N<f;N++){const F=h[N]||[],j=h[N+1]||[];j.length&&F.forEach((B,G)=>{if(!j.some(V=>d[V.name].has(B.name))){const V=F.length>1?G/(F.length-1):.5,W=Math.round(V*(j.length-1));d[j[Math.min(W,j.length-1)].name].add(B.name)}})}const m=N=>{const F=[...d[N]||[]];return F.length===0||F.every(j=>e.has(j))},S=(Math.max(...Object.values(h).map(N=>N.length))-1)*yu+IT*2,p=zm+(f-1)*Bm+DT,u={};for(let N=1;N<=f;N++){const F=h[N]||[],j=zm+(N-1)*Bm,B=(F.length-1)*yu,G=S/2-B/2;F.forEach((O,V)=>{u[O.name]={x:j,y:G+V*yu}})}o.setAttribute("width",p),o.setAttribute("height",S),o.setAttribute("viewBox",`0 0 ${p} ${S}`);const g=ot("defs"),y=ot("pattern",{id:"rn-dots",width:"30",height:"30",patternUnits:"userSpaceOnUse"});y.appendChild(ot("circle",{cx:"0.5",cy:"0.5",r:".65",fill:"rgba(130,170,220,0.08)"})),g.appendChild(y);const E=ot("filter",{id:"rn-bloom",x:"-150%",y:"-150%",width:"400%",height:"400%"});E.appendChild(ot("feGaussianBlur",{stdDeviation:"14"})),g.appendChild(E),[["rn-glA",9,"#ffaa40"],["rn-glD",5,"#00fff2"],["rn-glO",4,"#4d9fff"],["rn-glH",10,"#00fff2"]].forEach(([N,F,j])=>{const B=ot("filter",{id:N,x:"-80%",y:"-80%",width:"260%",height:"260%"});B.appendChild(ot("feGaussianBlur",{in:"SourceAlpha",stdDeviation:String(F),result:"b"})),B.appendChild(ot("feFlood",{"flood-color":j,result:"c"})),B.appendChild(ot("feComposite",{in:"c",in2:"b",operator:"in",result:"g"}));const G=ot("feMerge");G.appendChild(ot("feMergeNode",{in:"g"})),G.appendChild(ot("feMergeNode",{in:"SourceGraphic"})),B.appendChild(G),g.appendChild(B)}),o.appendChild(g),o.appendChild(ot("rect",{width:p,height:S,fill:"url(#rn-dots)"}));const T=ot("g"),w=[];for(const N of c){const F=u[N.name];if(!F)continue;const j=e.has(N.name);for(const B of[...d[N.name]||[]]){const G=u[B];if(!G)continue;const O=e.has(B),V=j&&O,W=!m(N.name),te=O?Su:m(B)?Eu:Mu,ne=N.level===f?Vm:j?Su:W?Mu:Eu,U=G.x+te,ae=G.y,Me=F.x-ne,Le=F.y,q=(Me-U)*.48,re=km(N.name,B,18),oe=km(B,N.name,18),Te=`M ${U},${ae} C ${U+q},${ae+re} ${Me-q},${Le+oe} ${Me},${Le}`,ve=ot("path",{d:Te,fill:"none","pointer-events":"none"});V?(ve.setAttribute("stroke","rgba(0,255,242,0.58)"),ve.setAttribute("stroke-width","2"),ve.style.filter="drop-shadow(0 0 3px rgba(0,255,242,0.44))"):W?(ve.setAttribute("stroke","rgba(80,95,115,0.14)"),ve.setAttribute("stroke-width","1")):(ve.setAttribute("stroke","rgba(77,159,255,0.15)"),ve.setAttribute("stroke-width","1.5")),w.push({el:ve,from:N.name,to:B,bothDone:V,isLocked:W}),T.appendChild(ve)}}o.appendChild(T);const A=ot("g"),x=new Map;for(const N of c){const F=u[N.name];if(!F)continue;const j=N.level===f,B=e.has(N.name),G=!m(N.name),O=j?Vm:B?Su:G?Mu:Eu;let V,W,te,ne,U;j?(V="#ffaa40",W="none",te="rn-glA",ne="#ffaa40",U="2.5"):B?(V="#00fff2",W="none",te="rn-glD",ne="#00fff2",U="1.8"):G?(V="#3d4e62",W="rgba(20,30,45,0.15)",te="",ne="#3d4e62",U="1.0"):(V="#4d9fff",W="none",te="rn-glO",ne="#6aacff",U="1.5");const ae=ot("g",{transform:`translate(${F.x},${F.y})`,"data-name":N.name}),Me=ot("circle",{r:String(O+15),fill:V,opacity:"0","pointer-events":"none"});if(Me.setAttribute("filter","url(#rn-bloom)"),ae.appendChild(Me),ae.appendChild(ot("circle",{r:String(O+16),fill:"transparent",stroke:"none"})),!j&&!G){const ge=ot("circle",{r:String(O+12),fill:"none",stroke:V,"stroke-width":"0.8","pointer-events":"none"});ge.classList.add(ie.nodeRing),ae.appendChild(ge)}const Le=ot("circle",{r:String(O),fill:W,stroke:V,"stroke-width":U,"pointer-events":"none"});te&&Le.setAttribute("filter",`url(#${te})`),ae.appendChild(Le),j&&ae.appendChild(ot("circle",{r:String(O-9),fill:"none",stroke:"#ffaa40","stroke-width":"1.5",opacity:".40","pointer-events":"none"}));const q=N.icon,re=j?17:q.length>2?11.5:15,oe=ot("text",{x:"0",y:j?"-10":"-7","text-anchor":"middle","dominant-baseline":"middle",fill:ne,"font-family":"'JetBrains Mono', monospace","font-size":String(re),"font-weight":"600","pointer-events":"none"});oe.textContent=q,ae.appendChild(oe);const Te=N.name.length>8?N.name.slice(0,7)+"…":N.name,ve=ot("text",{x:"0",y:j?"12":"10","text-anchor":"middle","dominant-baseline":"middle",fill:ne,"font-family":"'Outfit', sans-serif","font-size":j?"9":"8","font-weight":"500","letter-spacing":".04em",opacity:".70","pointer-events":"none"});if(ve.textContent=Te,ae.appendChild(ve),j){const ge=ot("text",{x:String(O+15),y:"1","text-anchor":"start","dominant-baseline":"middle",fill:"#ffaa40","font-family":"'Outfit', sans-serif","font-size":"13.5","font-weight":"600","letter-spacing":".04em","pointer-events":"none"});ge.textContent=N.name,ae.appendChild(ge)}else{const ge=B?"#aabbd0":G?"#252f3c":"#7a94b8",Ne=ot("text",{x:"0",y:String(O+16),"text-anchor":"middle","dominant-baseline":"hanging",fill:ge,"font-family":"'Outfit', sans-serif","font-size":"11","font-weight":B?"500":"400","letter-spacing":".025em","pointer-events":"none"});Ne.textContent=N.name,ae.appendChild(Ne)}if(B&&!j){const ge=O*.62,Ne=-O*.62;ae.appendChild(ot("circle",{cx:String(ge),cy:String(Ne),r:"7.5",fill:"#070b18",stroke:"#00fff2","stroke-width":"1.1","pointer-events":"none"}));const ze=ot("text",{x:String(ge),y:String(Ne+.5),"text-anchor":"middle","dominant-baseline":"middle",fill:"#00fff2","font-family":"'JetBrains Mono', monospace","font-size":"9","font-weight":"700","pointer-events":"none"});ze.textContent="✓",ae.appendChild(ze)}if(n===N.name&&B){const ge=ot("circle",{r:String(O),fill:"none",stroke:"#00fff2","stroke-width":"2","pointer-events":"none",opacity:"0.8"});ge.style.transformOrigin="center",ge.classList.add(ie.completePulse),ae.appendChild(ge);const Ne=ot("circle",{r:String(O),fill:"none",stroke:"#00fff2","stroke-width":"1.5","pointer-events":"none",opacity:"0.5"});Ne.style.transformOrigin="center",Ne.style.animationDelay="0.15s",Ne.classList.add(ie.completePulse),ae.appendChild(Ne)}ae.addEventListener("click",()=>{a.current&&(a.current.style.opacity="0"),i(N)}),x.set(N.name,{g:ae,skill:N,isApex:j,isDone:B,isLock:G,strokeCol:V,bloom:Me,px:F.x,py:F.y}),A.appendChild(ae)}o.appendChild(A);function C(N){const F=new Set,j=[N],B=new Set;for(;j.length;){const G=j.shift();if(!B.has(G)){B.add(G);for(const O of w)O.from===G&&(F.add(O),!e.has(O.to)&&!B.has(O.to)&&j.push(O.to))}}return F}function I(){for(const N of w)N.el.style.opacity="",N.bothDone?(N.el.setAttribute("stroke","rgba(0,255,242,0.58)"),N.el.setAttribute("stroke-width","2"),N.el.style.filter="drop-shadow(0 0 3px rgba(0,255,242,0.44))"):N.isLocked?(N.el.setAttribute("stroke","rgba(80,95,115,0.14)"),N.el.setAttribute("stroke-width","1"),N.el.style.filter=""):(N.el.setAttribute("stroke","rgba(77,159,255,0.15)"),N.el.setAttribute("stroke-width","1.5"),N.el.style.filter="")}for(const[N,{g:F,skill:j,isApex:B,bloom:G,px:O,py:V}]of x)F.addEventListener("mouseenter",()=>{var ne;F.setAttribute("transform",`translate(${O},${V}) scale(1.13)`),G.setAttribute("opacity",B?"0.32":"0.24");const W=a.current;if(W){const U=(ne=j.requires)!=null&&ne.length?j.requires.join(", "):null;W.innerHTML=`<div class="${ie.tooltipName}">${j.name}</div><div class="${ie.tooltipLevel}">LVL ${j.level}</div>`+(j.description?`<div class="${ie.tooltipDesc}">${j.description.slice(0,120)}${j.description.length>120?"...":""}</div>`:"")+(U?`<div class="${ie.tooltipReqs}">Requires: ${U}</div>`:"");const ae=r.current.getBoundingClientRect(),Me=s.current.getBoundingClientRect(),Le=r.current.scrollLeft,q=r.current.scrollTop,re=O-Le+(Me.left-ae.left),oe=V-q+(Me.top-ae.top)-20;W.style.left=`${re}px`,W.style.top=`${oe}px`,W.style.opacity="1",W.style.pointerEvents="none"}for(const[U,{g:ae}]of x)U!==N&&(ae.style.opacity="0.38");const te=C(N);for(const U of w)te.has(U)?(U.el.setAttribute("stroke",U.bothDone?"rgba(0,255,242,0.95)":"rgba(77,159,255,0.88)"),U.el.setAttribute("stroke-width","2.5"),U.el.style.filter=U.bothDone?"drop-shadow(0 0 6px rgba(0,255,242,0.60))":"drop-shadow(0 0 5px rgba(77,159,255,0.46))",U.el.style.opacity="1"):U.el.style.opacity="0.04"}),F.addEventListener("mouseleave",()=>{F.setAttribute("transform",`translate(${O},${V})`),G.setAttribute("opacity","0");for(const[,{g:W}]of x)W.style.opacity="";I(),a.current&&(a.current.style.opacity="0")});return()=>{o.innerHTML=""}},[t,e,n,i]),v.jsxs("div",{ref:r,className:ie.graphContainer,children:[v.jsx("svg",{ref:s,className:ie.graph}),v.jsx("div",{ref:a,className:ie.nodeTooltip})]})}function FT({node:t,open:e,completedNodes:n,onClose:i,onToggleComplete:r}){var d;const[s,a]=D.useState("overview");if(D.useEffect(()=>{t&&a("overview")},[t==null?void 0:t.name]),!t)return v.jsx("aside",{className:ie.detailPanel,"aria-hidden":"true"});const l=!(!t.requires||t.requires.length===0||t.requires.every(m=>n.has(m))),c=n.has(t.name),f=((d=t.requires)==null?void 0:d.filter(m=>!n.has(m)))||[],h=`${ie.detailPanel} ${e?ie.detailPanelOpen:""}`;return v.jsxs("aside",{className:h,children:[v.jsxs("div",{className:ie.detailHeader,children:[v.jsx("h3",{className:ie.detailName,children:t.name}),v.jsx("button",{className:ie.detailClose,onClick:i,"aria-label":"Close details",children:v.jsx("span",{className:ie.closeIcon})})]}),v.jsxs("div",{className:ie.detailLevelRow,children:[v.jsxs("span",{className:ie.detailLevel,children:["LVL ",t.level]}),l&&v.jsx("span",{className:ie.detailLocked,children:"LOCKED"}),c&&v.jsx("span",{className:ie.detailDone,children:"COMPLETE"})]}),!l&&v.jsxs("div",{className:ie.tabBar,children:[v.jsx("button",{className:`${ie.tabBtn} ${s==="overview"?ie.tabBtnActive:""}`,onClick:()=>a("overview"),children:"Overview"}),v.jsx("button",{className:`${ie.tabBtn} ${s==="learn"?ie.tabBtnActive:""}`,onClick:()=>a("learn"),children:"Learn"}),v.jsx("button",{className:`${ie.tabBtn} ${s==="resources"?ie.tabBtnActive:""}`,onClick:()=>a("resources"),children:"Resources"})]}),l?v.jsxs("div",{className:ie.tabPane,children:[t.requires&&t.requires.length>0&&v.jsxs("div",{children:[v.jsx("p",{className:ie.detailLabel,children:"Requires"}),v.jsx("ul",{className:`${ie.list} ${ie.requires}`,children:t.requires.map(m=>{const _=n.has(m);return v.jsxs("li",{style:{color:_?"hsl(142,55%,55%)":void 0},children:[_?"✓ ":"",m]},m)})})]}),v.jsxs("p",{className:ie.detailDescription,children:["Complete ",f.join(" and ")," to unlock this skill."]})]}):v.jsxs(v.Fragment,{children:[s==="overview"&&v.jsxs("div",{className:ie.tabPane,children:[t.requires&&t.requires.length>0&&v.jsxs("div",{children:[v.jsx("p",{className:ie.detailLabel,children:"Requires"}),v.jsx("ul",{className:`${ie.list} ${ie.requires}`,children:t.requires.map(m=>{const _=n.has(m);return v.jsxs("li",{style:{color:_?"hsl(142,55%,55%)":void 0},children:[_?"✓ ":"",m]},m)})})]}),v.jsx("p",{className:ie.detailLabel,children:"How to develop"}),v.jsx("p",{className:ie.detailDescription,children:t.description||"No description available."}),v.jsx("p",{className:ie.detailLabel,children:"Practice tips"}),v.jsx("ul",{className:`${ie.list} ${ie.tips}`,children:(t.tips||[]).map((m,_)=>v.jsx("li",{children:m},_))}),t.outcomes&&t.outcomes.length>0&&v.jsxs("div",{children:[v.jsx("p",{className:ie.detailLabel,children:"What you'll be able to do"}),v.jsx("ul",{className:`${ie.list} ${ie.outcomes}`,children:t.outcomes.map((m,_)=>v.jsx("li",{children:m},_))})]})]}),s==="learn"&&v.jsxs("div",{className:ie.tabPane,children:[t.keyConcepts&&t.keyConcepts.length>0&&v.jsxs("div",{children:[v.jsx("p",{className:ie.detailLabel,children:"Key concepts"}),v.jsx("ul",{className:`${ie.list} ${ie.concepts}`,children:t.keyConcepts.map((m,_)=>v.jsx("li",{children:typeof m=="object"?v.jsxs(v.Fragment,{children:[v.jsx("strong",{children:m.term})," — ",m.explanation]}):m},_))})]}),t.commonMistakes&&t.commonMistakes.length>0&&v.jsxs("div",{children:[v.jsx("p",{className:ie.detailLabel,children:"Common mistakes"}),v.jsx("ul",{className:`${ie.list} ${ie.mistakes}`,children:t.commonMistakes.map((m,_)=>v.jsx("li",{children:m},_))})]})]}),s==="resources"&&v.jsx("div",{className:ie.tabPane,children:v.jsxs("div",{children:[v.jsx("p",{className:ie.detailLabel,children:"Resources"}),v.jsxs("ul",{className:`${ie.list} ${ie.resources}`,children:[(t.resources||[]).map((m,_)=>v.jsxs("li",{children:[v.jsx("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",children:m.name}),v.jsxs("span",{className:ie.resourceType,children:["[",m.type,"]"]}),m.description&&v.jsx("p",{className:ie.resourceDesc,children:m.description})]},_)),v.jsxs("li",{className:ie.exploreWikiLink,children:[v.jsxs("a",{href:`/explore?q=${encodeURIComponent(t.name)}`,children:['Explore "',t.name,'" on Wikipedia']}),v.jsx("span",{className:ie.resourceType,children:"[wiki]"}),v.jsx("p",{className:ie.resourceDesc,children:"Dive deeper with the interactive knowledge graph explorer."})]})]})]})}),v.jsx("button",{className:`${ie.completeBtn} ${c?ie.completeBtnDone:""}`,onClick:()=>r(t.name),children:c?"COMPLETED":"MARK COMPLETE"})]})]})}function OT({topic:t,nodes:e,completedNodes:n}){const[i,r]=D.useState(!1),[s,a]=D.useState(!1),o=D.useRef(null);D.useEffect(()=>{function f(h){o.current&&!o.current.contains(h.target)&&r(!1)}return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[]);function l(){const f=`${window.location.origin}/?generate=${encodeURIComponent(t)}`;navigator.clipboard.writeText(f).then(()=>{a(!0),setTimeout(()=>{a(!1),r(!1)},1200)})}function c(){const f={topic:t,exportedAt:new Date().toISOString(),nodes:e.map(_=>({..._,completed:n.has(_.name)}))},h=new Blob([JSON.stringify(f,null,2)],{type:"application/json"}),d=URL.createObjectURL(h),m=document.createElement("a");m.href=d,m.download=`skill-tree-${t.toLowerCase().replace(/\s+/g,"-")}.json`,m.click(),URL.revokeObjectURL(d),r(!1)}return v.jsxs("div",{ref:o,className:ie.shareWrap,children:[v.jsx("button",{className:ie.shareBtn,onClick:()=>r(!i),title:"Share / Export",children:"⤤"}),i&&v.jsxs("div",{className:ie.shareDropdown,children:[v.jsx("button",{className:ie.shareOption,onClick:l,children:s?"✓ Copied!":"Copy Link"}),v.jsx("button",{className:ie.shareOption,onClick:c,children:"Export JSON"})]})]})}function kT(){const{currentTopic:t,currentNodes:e,completedNodes:n,closeTree:i,toggleComplete:r}=Co(),[s,a]=D.useState(null),[o,l]=D.useState(!1),c=D.useCallback(u=>{a(u),l(!0)},[]),f=D.useCallback(()=>{l(!1)},[]),h=D.useRef(null),d=D.useCallback(u=>{n.has(u)?h.current=null:h.current=u,r(u)},[r,n]),m=s?e.find(u=>u.name===s.name)||s:null,_=e.length,S=n.size,p=_?S/_*100:0;return v.jsxs("div",{className:ie.treeView,children:[v.jsxs("div",{className:ie.treeHeader,children:[v.jsxs("button",{className:ie.backBtn,onClick:i,children:[v.jsx("span",{className:ie.backArrow,children:"←"}),v.jsx("span",{children:"Back"})]}),v.jsxs("div",{className:ie.treeTitleWrap,children:[v.jsx("span",{className:ie.treeEyebrow,children:"TOPIC"}),v.jsx("h2",{className:ie.treeTitle,children:t})]}),v.jsxs("div",{className:ie.progressWrap,children:[v.jsxs("span",{className:ie.progressLabel,children:[S.toString().padStart(2,"0"),"/",_.toString().padStart(2,"0")," · ",Math.round(p),"%"]}),v.jsx("div",{className:ie.progressTrack,children:v.jsx("div",{className:ie.progressFill,style:{width:`${p}%`}})})]}),v.jsx(OT,{topic:t,nodes:e,completedNodes:n})]}),v.jsxs("div",{className:ie.treeBody,children:[v.jsx(UT,{nodes:e,completedNodes:n,justCompleted:h.current,onNodeClick:c}),v.jsx(FT,{node:m,open:o&&!!m,completedNodes:n,onClose:f,onToggleComplete:d})]})]})}const BT="_overlay_1d10p_1",zT="_card_1d10p_19",VT="_title_1d10p_37",HT="_grid_1d10p_48",GT="_row_1d10p_54",jT="_key_1d10p_60",WT="_desc_1d10p_79",$T="_trigger_1d10p_86",tr={overlay:BT,card:zT,title:VT,grid:HT,row:GT,key:jT,desc:WT,trigger:$T},XT=[{key:"Tab",desc:"Cycle through graph nodes"},{key:"Enter",desc:"Preview focused node"},{key:"Esc",desc:"Close preview / overlay"},{key:"Dbl-click",desc:"Jump to concept"},{key:"Drag",desc:"Pan the graph"},{key:"/",desc:"Focus search bar"},{key:"?",desc:"Toggle this help"}],qT=[{key:"Click",desc:"View node details"},{key:"Esc",desc:"Close detail panel"},{key:"?",desc:"Toggle this help"}];function Tv({page:t="explore"}){const[e,n]=D.useState(!1),i=D.useCallback(()=>n(s=>!s),[]);D.useEffect(()=>{function s(a){a.target.tagName==="INPUT"||a.target.tagName==="TEXTAREA"||((a.key==="?"||a.key==="/"&&a.shiftKey)&&(a.preventDefault(),i()),a.key==="Escape"&&e&&n(!1))}return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[e,i]);const r=t==="explore"?XT:qT;return v.jsxs(v.Fragment,{children:[v.jsx("button",{className:tr.trigger,onClick:i,title:"Keyboard shortcuts",children:"?"}),e&&v.jsx("div",{className:tr.overlay,onClick:()=>n(!1),children:v.jsxs("div",{className:tr.card,onClick:s=>s.stopPropagation(),children:[v.jsx("div",{className:tr.title,children:"Keyboard Shortcuts"}),v.jsx("div",{className:tr.grid,children:r.map(s=>v.jsxs("div",{className:tr.row,children:[v.jsx("span",{className:tr.key,children:s.key}),v.jsx("span",{className:tr.desc,children:s.desc})]},s.key))})]})})]})}function YT({topic:t}){return v.jsxs("div",{style:{position:"fixed",inset:0,background:"#000000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,zIndex:900,fontFamily:"var(--font-display, 'Outfit'), sans-serif"},children:[v.jsx("div",{style:{width:14,height:14,borderRadius:"50%",background:"#ffd27a",boxShadow:"0 0 12px rgba(255,200,90,0.9), 0 0 28px rgba(255,170,64,0.55), 0 0 60px rgba(255,170,64,0.3)",animation:"branchPulse 1.6s ease-in-out infinite"}}),v.jsx("div",{style:{color:"rgba(255,200,90,0.85)",fontSize:11,letterSpacing:4,textTransform:"uppercase",textShadow:"0 0 10px rgba(255,170,64,0.5)"},children:"Growing skill tree"}),t&&v.jsx("div",{style:{color:"rgba(255,255,255,0.55)",fontSize:13,letterSpacing:1},children:t}),v.jsx("style",{children:`
        @keyframes branchPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `})]})}function Tu({hideExplore:t=!1}={}){const{currentTopic:e,currentNodes:n,generating:i,generateTree:r}=Co(),[s,a]=D.useState(null),l=new URLSearchParams(window.location.search).get("generate"),[c,f]=D.useState(!!l),[h,d]=D.useState(l||""),m=D.useRef(!1);D.useEffect(()=>{m.current||l&&(m.current=!0,window.history.replaceState({},"","/"),r(l).catch(()=>{}).finally(()=>f(!1)))},[]);const _=e&&n.length>0;return(c||i)&&!_?v.jsx(YT,{topic:h}):v.jsxs(v.Fragment,{children:[v.jsx(Ev,{onSignIn:()=>a("login"),onSignUp:()=>a("register")}),v.jsx(IM,{}),_?v.jsx(kT,{}):v.jsx(NT,{hideExplore:t}),v.jsx(Tv,{page:"skilltree"}),s&&v.jsx(Mv,{initialMode:s,onClose:()=>a(null)})]})}const wv=D.createContext(null),KT={Science:["physics","chemistry","biology","quantum","science","experiment","atom","molecule","evolution","genetics"],Technology:["technology","computing","software","internet","engineering","computer","algorithm","digital","electrical"],Mathematics:["mathematics","algebra","geometry","theorem","calculus","statistics","logic","number","equation"],History:["history","war","century","ancient","empire","dynasty","civilization","revolution","medieval"],Philosophy:["philosophy","ethics","logic","metaphysics","epistemology","consciousness","ontology","moral"],Art:["art","music","literature","film","culture","painting","poetry","architecture","cinema"],Society:["society","politics","economics","law","social","government","democracy","culture","religion"]},ZT={Science:"#00d4ff",Technology:"#7c8aff",Mathematics:"#c8a0ff",History:"#ffd97c",Philosophy:"#ff9f7c",Art:"#5cffa0",Society:"#ff7cc8",Unknown:"#334"};function JT(t=[]){const e=t.join(" ").toLowerCase();let n="Unknown",i=0;for(const[r,s]of Object.entries(KT)){const a=s.filter(o=>e.includes(o)).length;a>i&&(i=a,n=r)}return n}const QT={currentConcept:null,trail:[],trailIndex:-1,graphData:null,loading:!1,enriching:!1,enriched:!1,error:null,trailOpen:!1,journeyOpen:!1,previewNode:null,expandedNode:null,detailLoading:!1,prevCenterTitle:null,focusMode:!1,highlightedNodeId:null};function Hm(t,e=new Set){const n=[],i=[];for(const r of t.connections||[])e.has(r.title)||n.push({id:r.title,label:r.title,type:"primary",relation:r.relation,strength:r.strength,description:r.description,color:{core:"blue",related:"cyan",application:"gold",foundation:"purple"}[r.relation]||"cyan",hopDistance:0,cluster:null}),i.push({source:t.title,target:r.title,strength:r.strength||1,color:{core:"blue",related:"cyan",application:"gold",foundation:"purple"}[r.relation]||"cyan",type:"connection"});return{nodes:n,edges:i}}function Gm(t){return t.map(e=>!e.visited||e.type==="center"?e:{...e,cluster:JT(e.categories||[])})}function ew(t,e){var n,i;switch(e.type){case"LOAD_START":return{...t,loading:!0,error:null};case"LOAD_SUCCESS":{const r=e.payload,s=e.isHistoryNav,a=e.requestedTitle,o=r.title;let l,c;if(s)l=t.trail,c=e.historyIndex;else{const x={title:o,timestamp:Date.now(),categories:r.categories||[]};l=[...t.trail.slice(0,t.trailIndex+1),x],c=l.length-1}const f=new Set(l.map(x=>x.title)),h=t.graphData&&((n=t.graphData.nodes.find(x=>x.type==="center"))==null?void 0:n.id)||null;if(!t.graphData){const{nodes:x,edges:C}=Hm(r),P=[{id:o,label:o,type:"center",color:"gold",hopDistance:0,cluster:null,categories:r.categories||[]},...x].map(N=>({...N,visited:f.has(N.id)}));return{...t,loading:!1,currentConcept:r,trail:l,trailIndex:c,graphData:{nodes:Gm(P),edges:C},previewNode:null,enriching:!1,enriched:!1,expandedNode:null,prevCenterTitle:null}}let d=t.graphData.nodes,m=t.graphData.edges;a&&a!==o&&(d=d.map(x=>x.id===a?{...x,id:o,label:o}:x),m=m.map(x=>({...x,source:x.source===a?o:x.source,target:x.target===a?o:x.target})));const _=d.map(x=>x.id===o?{...x,type:"center",hopDistance:0,color:"gold"}:x.type==="center"?{...x,type:"trail",hopDistance:1,color:"gold"}:x.type==="primary"?{...x,type:"dormant",hopDistance:1}:{...x,hopDistance:Math.min(x.hopDistance||0,4)}),S=new Set(_.map(x=>x.id)),{nodes:p,edges:u}=Hm(r,S),g=[];if(!s&&l.length>=2){const x=l[l.length-2].title,C=d.some(I=>I.id===o&&(I.type==="primary"||I.type==="secondary"));g.push({source:x,target:o,strength:3,color:"gold",type:"trail",trailType:C?"direct":"indirect"})}const y=[..._,...p].map(x=>({...x,visited:f.has(x.id),categories:x.categories||(x.id===o?r.categories:[])})),E=new Set(y.map(x=>x.id)),T=[...m,...u,...g];T.sort((x,C)=>(C.type==="trail"?1:0)-(x.type==="trail"?1:0));const w=new Set,A=[];for(const x of T){if(!E.has(x.source)||!E.has(x.target))continue;const C=x.source+"→"+x.target;w.has(C)||(w.add(C),A.push(x))}return{...t,loading:!1,currentConcept:r,trail:l,trailIndex:c,graphData:{nodes:Gm(y),edges:A},previewNode:null,enriching:!1,enriched:!1,expandedNode:null,prevCenterTitle:h}}case"LOAD_ERROR":return{...t,loading:!1,error:e.payload};case"ENRICH_START":return{...t,enriching:!0};case"REPLACE_CONNECTIONS":{const r=e.payload;if(!t.graphData)return{...t,enriching:!1};const s=(i=t.currentConcept)==null?void 0:i.title,a=new Set(t.graphData.nodes.filter(u=>u.type==="primary").map(u=>u.id)),o=new Set;for(const u of t.graphData.edges)u.type==="secondary"&&a.has(u.source)&&o.add(u.target);const l=new Set;for(const u of a)l.add(u);for(const u of o)l.add(u);const c=t.graphData.nodes.filter(u=>!l.has(u.id)||u.type==="trail"||u.type==="dormant"||u.type==="center"),f=new Set(c.map(u=>u.id)),h=t.graphData.edges.filter(u=>f.has(u.source)&&f.has(u.target)),d=new Set(t.trail.map(u=>u.title)),m=new Set(f),_=[],S=[];for(const u of r)m.has(u.title)||(_.push({id:u.title,label:u.title,type:"primary",relation:u.relation,strength:u.strength,description:u.description,color:{core:"blue",related:"cyan",application:"gold",foundation:"purple"}[u.relation]||"cyan",hopDistance:0,cluster:null,visited:d.has(u.title),enriched:!0,categories:[]}),m.add(u.title)),S.push({source:s,target:u.title,strength:u.strength||2,color:{core:"blue",related:"cyan",application:"gold",foundation:"purple"}[u.relation]||"cyan",type:"connection"});const p={...t.currentConcept,connections:r};return{...t,enriching:!1,enriched:!0,currentConcept:p,graphData:{nodes:[...c,..._],edges:[...h,...S]}}}case"ENRICH_ERROR":return{...t,enriching:!1};case"ADD_SECOND_LAYER":{const{parentId:r,childTitles:s}=e.payload;if(!t.graphData)return t;const a=new Set(t.graphData.nodes.map(h=>h.id)),o=new Set(t.graphData.edges.map(h=>h.source+"→"+h.target)),l=new Set(t.trail.map(h=>h.title)),c=[],f=[];for(const h of s){a.has(h)||(c.push({id:h,label:h,type:"secondary",color:"purple",hopDistance:0,cluster:null,visited:l.has(h),categories:[]}),a.add(h));const d=r+"→"+h;o.has(d)||(f.push({source:r,target:h,strength:1,color:"purple",type:"secondary"}),o.add(d))}return{...t,graphData:{nodes:[...t.graphData.nodes,...c],edges:[...t.graphData.edges,...f]}}}case"SET_NODE_SUMMARY":{const{nodeId:r,summary:s,extract:a,image:o}=e.payload;if(!t.graphData)return t;const l=t.graphData.nodes.map(c=>c.id===r?{...c,description:s,extract:a,image:o}:c);return{...t,graphData:{...t.graphData,nodes:l}}}case"SET_EXPANDED":return{...t,expandedNode:e.payload,detailLoading:!1};case"DETAIL_LOADING":return{...t,detailLoading:!0};case"CLEAR_EXPANDED":return{...t,expandedNode:null,detailLoading:!1};case"GO_BACK":return t;case"GO_FORWARD":return t;case"SET_PREVIEW":return{...t,previewNode:e.payload};case"CLEAR_PREVIEW":return{...t,previewNode:null};case"TOGGLE_TRAIL":return{...t,trailOpen:!t.trailOpen};case"TOGGLE_JOURNEY":return{...t,journeyOpen:!t.journeyOpen};case"TOGGLE_FOCUS":return{...t,focusMode:!t.focusMode};case"SET_HIGHLIGHT":return{...t,highlightedNodeId:e.payload};case"CLEAR_HIGHLIGHT":return{...t,highlightedNodeId:null};default:return t}}function tw({children:t}){const[e,n]=D.useReducer(ew,QT),i=D.useRef({}),r=D.useCallback(async T=>{n({type:"LOAD_START"});try{let w;i.current[T]?w=i.current[T]:(w=await Ko(T),i.current[w.title]=w,T!==w.title&&(i.current[T]=w)),n({type:"LOAD_SUCCESS",payload:w,requestedTitle:T})}catch(w){n({type:"LOAD_ERROR",payload:w.message})}},[]),s=D.useCallback(async()=>{if(e.trailIndex<=0)return;const T=e.trailIndex-1,w=e.trail[T].title;n({type:"LOAD_START"});try{let A;i.current[w]?A=i.current[w]:(A=await Ko(w),i.current[A.title]=A),n({type:"LOAD_SUCCESS",payload:A,requestedTitle:w,isHistoryNav:!0,historyIndex:T})}catch(A){n({type:"LOAD_ERROR",payload:A.message})}},[e.trailIndex,e.trail]),a=D.useCallback(async()=>{if(e.trailIndex>=e.trail.length-1)return;const T=e.trailIndex+1,w=e.trail[T].title;n({type:"LOAD_START"});try{let A;i.current[w]?A=i.current[w]:(A=await Ko(w),i.current[A.title]=A),n({type:"LOAD_SUCCESS",payload:A,requestedTitle:w,isHistoryNav:!0,historyIndex:T})}catch(A){n({type:"LOAD_ERROR",payload:A.message})}},[e.trailIndex,e.trail]),o=D.useCallback(async T=>{if(T<0||T>=e.trail.length||T===e.trailIndex)return;const w=e.trail[T].title;n({type:"LOAD_START"});try{let A;i.current[w]?A=i.current[w]:(A=await Ko(w),i.current[A.title]=A),n({type:"LOAD_SUCCESS",payload:A,requestedTitle:w,isHistoryNav:!0,historyIndex:T})}catch(A){n({type:"LOAD_ERROR",payload:A.message})}},[e.trailIndex,e.trail]),l=D.useCallback(async()=>{if(!(!e.currentConcept||e.enriching)){n({type:"ENRICH_START"});try{const T=await iM(e.currentConcept.title,e.currentConcept.extract);T.connections&&T.connections.length>0?n({type:"REPLACE_CONNECTIONS",payload:T.connections}):n({type:"ENRICH_ERROR"})}catch(T){console.warn("Enrich failed:",T.message),n({type:"ENRICH_ERROR"})}}},[e.currentConcept,e.enriching]),c=D.useCallback(()=>{if(!e.graphData)return null;const T=e.graphData.nodes.filter(C=>C.type!=="center"&&!C.visited&&C.type!=="secondary");if(!T.length){const C=e.graphData.nodes.filter(P=>P.type!=="center"&&!P.visited);if(!C.length)return null;const I=C[Math.floor(Math.random()*C.length)];return r(I.id),I}const w=T.filter(C=>C.type==="dormant"||C.type==="trail"),A=w.length?w:T,x=A[Math.floor(Math.random()*A.length)];return r(x.id),x},[e.graphData,r]),f=D.useCallback(async T=>{try{const w=await rM(T);n({type:"ADD_SECOND_LAYER",payload:{parentId:T,childTitles:w}})}catch(w){console.warn("Expand failed:",w.message)}},[]),h=D.useCallback(async T=>{if(T.extract)n({type:"SET_EXPANDED",payload:T});else{n({type:"DETAIL_LOADING"});const w=await sM(T.id||T.label);w?(n({type:"SET_NODE_SUMMARY",payload:{nodeId:T.id,...w}}),n({type:"SET_EXPANDED",payload:{...T,...w}})):n({type:"SET_EXPANDED",payload:T})}},[]),d=D.useCallback(()=>n({type:"CLEAR_EXPANDED"}),[]),m=D.useCallback(T=>n({type:"SET_PREVIEW",payload:T}),[]),_=D.useCallback(()=>n({type:"CLEAR_PREVIEW"}),[]),S=D.useCallback(()=>n({type:"TOGGLE_TRAIL"}),[]),p=D.useCallback(()=>n({type:"TOGGLE_JOURNEY"}),[]),u=D.useCallback(()=>n({type:"TOGGLE_FOCUS"}),[]),g=D.useCallback(T=>n({type:"SET_HIGHLIGHT",payload:T}),[]),y=D.useCallback(()=>n({type:"CLEAR_HIGHLIGHT"}),[]),E={...e,jumpTo:r,goBack:s,goForward:a,goToIndex:o,enrich:l,pickCuriosity:c,expandNode:f,showNodeDetail:h,clearExpanded:d,setPreview:m,clearPreview:_,toggleTrail:S,toggleJourney:p,toggleFocus:u,setHighlight:g,clearHighlight:y,clusterColors:ZT};return v.jsx(wv.Provider,{value:E,children:t})}function Xn(){const t=D.useContext(wv);if(!t)throw new Error("useExplorer must be used within ExplorerProvider");return t}const nw="_topbar_10e3w_95",iw="_searchArea_10e3w_108",rw="_searchBar_10e3w_115",sw="_scanning_10e3w_140",aw="_searchIcon_10e3w_149",ow="_searchInput_10e3w_155",lw="_dropdown_10e3w_171",cw="_dropdownItem_10e3w_184",uw="_dropdownTitle_10e3w_200",dw="_dropdownSnippet_10e3w_206",fw="_right_10e3w_215",hw="_jumpCount_10e3w_222",pw="_jumpCountLabel_10e3w_236",mw="_btn_10e3w_243",gw="_btnCuriosity_10e3w_256",_w="_btnTrail_10e3w_268",vw="_active_10e3w_273",xw="_btnJourney_10e3w_280",yw="_breadcrumbs_10e3w_293",Sw="_breadcrumbItem_10e3w_306",Ew="_breadcrumbEllipsis_10e3w_319",Mw="_breadcrumbSep_10e3w_325",Tw="_breadcrumbLabel_10e3w_330",ww="_breadcrumbActive_10e3w_344",_t={topbar:nw,searchArea:iw,searchBar:rw,scanning:sw,searchIcon:aw,searchInput:ow,dropdown:lw,dropdownItem:cw,dropdownTitle:uw,dropdownSnippet:dw,right:fw,jumpCount:hw,jumpCountLabel:pw,btn:mw,btnCuriosity:gw,btnTrail:_w,active:vw,btnJourney:xw,breadcrumbs:yw,breadcrumbItem:Sw,breadcrumbEllipsis:Ew,breadcrumbSep:Mw,breadcrumbLabel:Tw,breadcrumbActive:ww};function Cw(){const{trail:t,trailIndex:e,toggleTrail:n,toggleJourney:i,trailOpen:r,pickCuriosity:s,currentConcept:a,goToIndex:o}=Xn(),{jumpTo:l}=Xn(),[c,f]=D.useState(""),[h,d]=D.useState([]),[m,_]=D.useState(!1),[S,p]=D.useState(!1),u=D.useRef(null),g=D.useRef(null),y=D.useRef(null);D.useEffect(()=>{function x(C){u.current&&!u.current.contains(C.target)&&_(!1)}return document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x),clearTimeout(g.current),clearTimeout(y.current)}},[]);function E(x){if(f(x),p(!0),clearTimeout(y.current),y.current=setTimeout(()=>p(!1),1500),clearTimeout(g.current),x.trim().length<2){d([]),_(!1);return}g.current=setTimeout(async()=>{try{const C=await nM(x);d(C.slice(0,6)),_(!0)}catch{d([])}},300)}function T(x){f(x),_(!1),l(x)}function w(x){x.key==="Enter"&&c.trim()&&(_(!1),l(c.trim()))}D.useEffect(()=>{a&&(f(""),_(!1))},[a==null?void 0:a.title]);const A=e+1;return v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:_t.topbar,children:[v.jsxs("div",{className:_t.searchArea,ref:u,children:[v.jsxs("div",{className:`${_t.searchBar} ${S?_t.scanning:""}`,children:[v.jsx("span",{className:_t.searchIcon,children:"/"}),v.jsx("input",{value:c,onChange:x=>E(x.target.value),onKeyDown:w,placeholder:"explore a concept...",className:_t.searchInput})]}),m&&h.length>0&&v.jsx("div",{className:_t.dropdown,children:h.map(x=>v.jsxs("div",{className:_t.dropdownItem,onClick:()=>T(x.title),children:[v.jsx("div",{className:_t.dropdownTitle,children:x.title}),v.jsx("div",{className:_t.dropdownSnippet,children:x.snippet})]},x.title))})]}),v.jsxs("div",{className:_t.right,children:[A>0&&v.jsxs("div",{className:_t.jumpCount,children:[v.jsx("span",{children:A}),v.jsx("span",{className:_t.jumpCountLabel,children:"hops"})]}),a&&v.jsx("button",{className:`${_t.btn} ${_t.btnCuriosity}`,onClick:s,title:"Jump to a random unexplored node",children:"RANDOM"}),v.jsx("button",{className:`${_t.btn} ${_t.btnTrail} ${r?_t.active:""}`,onClick:n,children:"TRAIL"}),v.jsx("button",{className:`${_t.btn} ${_t.btnJourney}`,onClick:i,children:"MAP"})]})]}),t.length>1&&v.jsxs("div",{className:_t.breadcrumbs,children:[t.length>5&&v.jsx("span",{className:_t.breadcrumbEllipsis,children:"..."}),t.slice(-5).map((x,C)=>{const I=t.length-5+C,P=t.length<=5?C:I,N=P===e;return v.jsxs("span",{className:_t.breadcrumbItem,children:[C>0&&v.jsx("span",{className:_t.breadcrumbSep,children:">"}),v.jsx("span",{className:`${_t.breadcrumbLabel} ${N?_t.breadcrumbActive:""}`,onClick:()=>!N&&o(P),children:x.title})]},`${x.title}-${P}`)})]})]})}const bw="_bar_1jjd4_1",Aw="_backBtn_1jjd4_23",Rw="_disabled_1jjd4_51",Pw="_trail_1jjd4_65",Nw="_crumbWrap_1jjd4_71",Lw="_sep_1jjd4_75",Dw="_crumb_1jjd4_71",Iw="_current_1jjd4_101",nr={bar:bw,backBtn:Aw,disabled:Rw,trail:Pw,crumbWrap:Nw,sep:Lw,crumb:Dw,current:Iw};function Uw(){const{trail:t,trailIndex:e,goBack:n,goToIndex:i}=Xn(),r=D.useRef(null);if(D.useEffect(()=>{r.current&&(r.current.scrollLeft=r.current.scrollWidth)},[e]),t.length===0)return null;const s=t.slice(0,e+1);return v.jsxs("div",{className:nr.bar,children:[v.jsx("button",{className:`${nr.backBtn} ${e<=0?nr.disabled:""}`,onClick:n,disabled:e<=0,children:"← Back"}),v.jsx("div",{className:nr.trail,ref:r,children:s.map((a,o)=>v.jsxs("span",{className:nr.crumbWrap,children:[o>0&&v.jsx("span",{className:nr.sep,children:"›"}),v.jsx("span",{className:`${nr.crumb} ${o===e?nr.current:""}`,onClick:()=>o!==e&&i(o),children:a.title})]},`${a.title}-${o}`))})]})}const Fw="_hero_yspve_1",Ow="_image_yspve_17",kw="_img_yspve_39",Bw="_scanlines_yspve_69",zw="_scanText_yspve_71",Vw="_placeholder_yspve_75",Hw="_imageOverlay_yspve_87",Gw="_body_yspve_105",jw="_category_yspve_109",Ww="_title_yspve_139",$w="_summary_yspve_157",Xw="_facts_yspve_171",qw="_fact_yspve_171",Yw="_factLabel_yspve_233",Kw="_factValue_yspve_249",ln={hero:Fw,image:Ow,img:kw,scanlines:Bw,scanText:zw,placeholder:Vw,imageOverlay:Hw,body:Gw,category:jw,title:Ww,summary:$w,facts:Xw,fact:qw,factLabel:Yw,factValue:Kw};function Zw({concept:t}){var e;return v.jsxs("div",{className:ln.hero,children:[v.jsxs("div",{className:ln.image,children:[t.image?v.jsx("img",{src:t.image,alt:t.title,className:ln.img}):v.jsx("span",{className:ln.placeholder,children:"No image available"}),v.jsx("div",{className:ln.imageOverlay}),v.jsx("div",{className:ln.scanlines}),t.image&&v.jsx("span",{className:ln.scanText,children:"SCANNING..."},t.title)]}),v.jsxs("div",{className:ln.body,children:[v.jsx("div",{className:ln.category,children:((e=t.categories)==null?void 0:e[0])||"Concept"}),v.jsx("h1",{className:ln.title,children:t.title}),v.jsx("p",{className:ln.summary,children:t.summary}),v.jsx("div",{className:ln.facts,children:(t.facts||[]).map((n,i)=>v.jsxs("div",{className:ln.fact,children:[v.jsx("span",{className:ln.factLabel,children:n.label}),v.jsx("span",{className:ln.factValue,children:n.value})]},i))})]})]})}const Jw="_layer_sk8x1_1",Qw="_open_sk8x1_21",eC="_header_sk8x1_25",tC="_headerText_sk8x1_69",nC="_title_sk8x1_73",iC="_hint_sk8x1_87",rC="_arrow_sk8x1_99",sC="_body_sk8x1_119",ir={layer:Jw,open:Qw,header:eC,headerText:tC,title:nC,hint:iC,arrow:rC,body:sC};function aC({title:t,hint:e,defaultOpen:n=!1,children:i}){const[r,s]=D.useState(n);return v.jsxs("div",{className:`${ir.layer} ${r?ir.open:""}`,children:[v.jsxs("div",{className:ir.header,onClick:()=>s(!r),children:[v.jsxs("div",{className:ir.headerText,children:[v.jsx("h3",{className:ir.title,children:t}),e&&v.jsx("div",{className:ir.hint,children:e})]}),v.jsx("span",{className:ir.arrow,children:r?"−":"+"})]}),r&&v.jsx("div",{className:ir.body,children:i})]})}const oC="_section_19vrf_1",lC="_arrow_19vrf_27",cC="_heading_19vrf_31",uC="_source_19vrf_47",Zo={section:oC,arrow:lC,heading:cC,source:uC};function dC({sections:t,wikiUrl:e}){return!t||t.length===0?null:v.jsxs("div",{children:[t.map(n=>v.jsxs("div",{className:Zo.section,children:[v.jsx("span",{className:Zo.arrow,children:"▶"}),v.jsx("strong",{className:Zo.heading,children:n.heading})]},n.index)),e&&v.jsxs("div",{className:Zo.source,children:["📖 Source: ",v.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e.replace("https://","")})]})]})}const fC="_section_1nc1f_1",hC="_header_1nc1f_5",pC="_title_1nc1f_21",mC="_count_1nc1f_39",gC="_grid_1nc1f_43",_C="_card_1nc1f_47",vC="_cardHighlighted_1nc1f_83",xC="_strength_1nc1f_97",yC="_dot_1nc1f_99",SC="_rel_1nc1f_103",EC="_cardTitle_1nc1f_135",MC="_cardDesc_1nc1f_151",TC="_actions_1nc1f_155",_n={section:fC,header:hC,title:pC,count:mC,grid:gC,card:_C,cardHighlighted:vC,strength:xC,dot:yC,rel:SC,"rel-core":"_rel-core_1nc1f_125","rel-related":"_rel-related_1nc1f_127","rel-application":"_rel-application_1nc1f_129","rel-foundation":"_rel-foundation_1nc1f_131",cardTitle:EC,cardDesc:MC,actions:TC},wC={core:"Core",related:"Related",application:"Application",foundation:"Foundation"};function CC({connections:t}){const{jumpTo:e,setPreview:n,setHighlight:i,clearHighlight:r,highlightedNodeId:s}=Xn(),a=D.useRef(null);return D.useEffect(()=>{if(!s||!a.current)return;const o=a.current.querySelector(`[data-node-id="${CSS.escape(s)}"]`);o&&o.scrollIntoView({behavior:"smooth",block:"nearest"})},[s]),!t||t.length===0?null:v.jsxs("div",{className:_n.section,children:[v.jsxs("div",{className:_n.header,children:[v.jsx("span",{className:_n.title,children:"On the Graph"}),v.jsxs("span",{className:_n.count,children:[t.length," directly connected"]})]}),v.jsx("div",{className:_n.grid,ref:a,children:t.map(o=>v.jsxs("div",{className:`${_n.card} ${s===o.title?_n.cardHighlighted:""}`,"data-node-id":o.title,onMouseEnter:()=>i(o.title),onMouseLeave:()=>r(),children:[v.jsx("div",{className:_n.strength,children:[1,2,3].map(l=>v.jsx("div",{className:_n.dot,style:{background:l<=o.strength?`var(--accent-${o.relation==="core"?"blue":o.relation==="application"?"gold":o.relation==="foundation"?"purple":"green"})`:"#333"}},l))}),v.jsx("span",{className:`${_n.rel} ${_n[`rel-${o.relation}`]}`,children:wC[o.relation]||o.relation}),v.jsx("h4",{className:_n.cardTitle,children:o.title}),v.jsx("p",{className:_n.cardDesc,children:o.description}),v.jsxs("div",{className:_n.actions,children:[v.jsx("span",{onClick:()=>e(o.title),children:"Jump"}),v.jsx("span",{onClick:()=>n({...o,id:o.title,label:o.title}),children:"Preview"})]})]},o.title))})]})}const bC="_panel_1sqhy_1",AC="_cornerTL_1sqhy_30",RC="_cornerTR_1sqhy_30",PC="_cornerBL_1sqhy_30",NC="_cornerBR_1sqhy_30",LC="_panelGlitch_1sqhy_44",DC="_staggerIn_1sqhy_53",IC="_empty_1sqhy_65",UC="_error_1sqhy_90",FC="_spinner_1sqhy_92",OC="_enrichBtn_1sqhy_105",kC="_enrichComplete_1sqhy_143",BC="_enrichSpinner_1sqhy_169",zC="_skillTreeLink_1sqhy_197",VC="_skillTreeLinkIcon_1sqhy_227",Dt={panel:bC,cornerTL:AC,cornerTR:RC,cornerBL:PC,cornerBR:NC,panelGlitch:LC,staggerIn:DC,empty:IC,error:UC,spinner:FC,enrichBtn:OC,enrichComplete:kC,enrichSpinner:BC,skillTreeLink:zC,skillTreeLinkIcon:VC};function HC(){var c;const{currentConcept:t,loading:e,error:n,enriching:i,enriched:r,enrich:s}=Xn(),[a,o]=D.useState(!1);if(D.useEffect(()=>{if(t){o(!0);const f=setTimeout(()=>o(!1),300);return()=>clearTimeout(f)}},[t==null?void 0:t.title]),!t&&!e)return v.jsx("div",{className:Dt.panel,children:v.jsxs("div",{className:Dt.empty,children:[v.jsx("h2",{children:"Begin Exploring"}),v.jsx("p",{children:"Search for any concept to start"})]})});if(e)return v.jsx("div",{className:Dt.panel,children:v.jsxs("div",{className:Dt.empty,children:[v.jsx("div",{className:Dt.spinner}),v.jsx("p",{children:"Exploring the knowledge map..."})]})});if(n)return v.jsx("div",{className:Dt.panel,children:v.jsx("div",{className:Dt.empty,children:v.jsxs("p",{className:Dt.error,children:["Something went wrong: ",n]})})});const l=t;return v.jsxs("div",{className:`${Dt.panel} ${a?Dt.panelGlitch:""}`,children:[v.jsx("div",{className:Dt.cornerTL}),v.jsx("div",{className:Dt.cornerTR}),v.jsx("div",{className:Dt.cornerBL}),v.jsx("div",{className:Dt.cornerBR}),v.jsxs("div",{className:Dt.staggerIn,children:[v.jsx(Uw,{}),v.jsx(Zw,{concept:l}),v.jsx("button",{className:`${Dt.enrichBtn} ${r?Dt.enrichComplete:""}`,onClick:s,disabled:i||r,children:i?v.jsxs(v.Fragment,{children:[v.jsx("span",{className:Dt.enrichSpinner})," Enriching..."]}):r?"AI Enhanced":"Enrich with AI"}),v.jsxs("a",{href:`/?generate=${encodeURIComponent(l.title)}`,className:Dt.skillTreeLink,children:[v.jsx("span",{className:Dt.skillTreeLinkIcon,children:"⟡"}),"Generate Skill Tree"]}),((c=l.sections)==null?void 0:c.length)>0&&v.jsx(aC,{title:"Deep Dive",hint:"Full Wikipedia sections",children:v.jsx(dC,{sections:l.sections,wikiUrl:l.wikiUrl})}),v.jsx(CC,{connections:l.connections}),v.jsx("div",{style:{height:30}})]},l.title)]})}function GC(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return Cv(this.cover(e,n),e,n,t)}function Cv(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var r,s=t._root,a={data:i},o=t._x0,l=t._y0,c=t._x1,f=t._y1,h,d,m,_,S,p,u,g;if(!s)return t._root=a,t;for(;s.length;)if((S=e>=(h=(o+c)/2))?o=h:c=h,(p=n>=(d=(l+f)/2))?l=d:f=d,r=s,!(s=s[u=p<<1|S]))return r[u]=a,t;if(m=+t._x.call(null,s.data),_=+t._y.call(null,s.data),e===m&&n===_)return a.next=s,r?r[u]=a:t._root=a,t;do r=r?r[u]=new Array(4):t._root=new Array(4),(S=e>=(h=(o+c)/2))?o=h:c=h,(p=n>=(d=(l+f)/2))?l=d:f=d;while((u=p<<1|S)===(g=(_>=d)<<1|m>=h));return r[g]=s,r[u]=a,t}function jC(t){var e,n,i=t.length,r,s,a=new Array(i),o=new Array(i),l=1/0,c=1/0,f=-1/0,h=-1/0;for(n=0;n<i;++n)isNaN(r=+this._x.call(null,e=t[n]))||isNaN(s=+this._y.call(null,e))||(a[n]=r,o[n]=s,r<l&&(l=r),r>f&&(f=r),s<c&&(c=s),s>h&&(h=s));if(l>f||c>h)return this;for(this.cover(l,c).cover(f,h),n=0;n<i;++n)Cv(this,a[n],o[n],t[n]);return this}function WC(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(n))r=(n=Math.floor(t))+1,s=(i=Math.floor(e))+1;else{for(var a=r-n||1,o=this._root,l,c;n>t||t>=r||i>e||e>=s;)switch(c=(e<i)<<1|t<n,l=new Array(4),l[c]=o,o=l,a*=2,c){case 0:r=n+a,s=i+a;break;case 1:n=r-a,s=i+a;break;case 2:r=n+a,i=s-a;break;case 3:n=r-a,i=s-a;break}this._root&&this._root.length&&(this._root=o)}return this._x0=n,this._y0=i,this._x1=r,this._y1=s,this}function $C(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function XC(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function dn(t,e,n,i,r){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=r}function qC(t,e,n){var i,r=this._x0,s=this._y0,a,o,l,c,f=this._x1,h=this._y1,d=[],m=this._root,_,S;for(m&&d.push(new dn(m,r,s,f,h)),n==null?n=1/0:(r=t-n,s=e-n,f=t+n,h=e+n,n*=n);_=d.pop();)if(!(!(m=_.node)||(a=_.x0)>f||(o=_.y0)>h||(l=_.x1)<r||(c=_.y1)<s))if(m.length){var p=(a+l)/2,u=(o+c)/2;d.push(new dn(m[3],p,u,l,c),new dn(m[2],a,u,p,c),new dn(m[1],p,o,l,u),new dn(m[0],a,o,p,u)),(S=(e>=u)<<1|t>=p)&&(_=d[d.length-1],d[d.length-1]=d[d.length-1-S],d[d.length-1-S]=_)}else{var g=t-+this._x.call(null,m.data),y=e-+this._y.call(null,m.data),E=g*g+y*y;if(E<n){var T=Math.sqrt(n=E);r=t-T,s=e-T,f=t+T,h=e+T,i=m.data}}return i}function YC(t){if(isNaN(f=+this._x.call(null,t))||isNaN(h=+this._y.call(null,t)))return this;var e,n=this._root,i,r,s,a=this._x0,o=this._y0,l=this._x1,c=this._y1,f,h,d,m,_,S,p,u;if(!n)return this;if(n.length)for(;;){if((_=f>=(d=(a+l)/2))?a=d:l=d,(S=h>=(m=(o+c)/2))?o=m:c=m,e=n,!(n=n[p=S<<1|_]))return this;if(!n.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,u=p)}for(;n.data!==t;)if(r=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,r?(s?r.next=s:delete r.next,this):e?(s?e[p]=s:delete e[p],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[u]=n:this._root=n),this):(this._root=s,this)}function KC(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function ZC(){return this._root}function JC(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function QC(t){var e=[],n,i=this._root,r,s,a,o,l;for(i&&e.push(new dn(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,s=n.x0,a=n.y0,o=n.x1,l=n.y1)&&i.length){var c=(s+o)/2,f=(a+l)/2;(r=i[3])&&e.push(new dn(r,c,f,o,l)),(r=i[2])&&e.push(new dn(r,s,f,c,l)),(r=i[1])&&e.push(new dn(r,c,a,o,f)),(r=i[0])&&e.push(new dn(r,s,a,c,f))}return this}function eb(t){var e=[],n=[],i;for(this._root&&e.push(new dn(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var s,a=i.x0,o=i.y0,l=i.x1,c=i.y1,f=(a+l)/2,h=(o+c)/2;(s=r[0])&&e.push(new dn(s,a,o,f,h)),(s=r[1])&&e.push(new dn(s,f,o,l,h)),(s=r[2])&&e.push(new dn(s,a,h,f,c)),(s=r[3])&&e.push(new dn(s,f,h,l,c))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function tb(t){return t[0]}function nb(t){return arguments.length?(this._x=t,this):this._x}function ib(t){return t[1]}function rb(t){return arguments.length?(this._y=t,this):this._y}function bv(t,e,n){var i=new qh(e??tb,n??ib,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function qh(t,e,n,i,r,s){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function jm(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var gn=bv.prototype=qh.prototype;gn.copy=function(){var t=new qh(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=jm(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?n.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=jm(i));return t};gn.add=GC;gn.addAll=jC;gn.cover=WC;gn.data=$C;gn.extent=XC;gn.find=qC;gn.remove=YC;gn.removeAll=KC;gn.root=ZC;gn.size=JC;gn.visit=QC;gn.visitAfter=eb;gn.x=nb;gn.y=rb;function Nn(t){return function(){return t}}function pc(t){return(t()-.5)*1e-6}function sb(t){return t.x+t.vx}function ab(t){return t.y+t.vy}function ob(t){var e,n,i,r=1,s=1;typeof t!="function"&&(t=Nn(t==null?1:+t));function a(){for(var c,f=e.length,h,d,m,_,S,p,u=0;u<s;++u)for(h=bv(e,sb,ab).visitAfter(o),c=0;c<f;++c)d=e[c],S=n[d.index],p=S*S,m=d.x+d.vx,_=d.y+d.vy,h.visit(g);function g(y,E,T,w,A){var x=y.data,C=y.r,I=S+C;if(x){if(x.index>d.index){var P=m-x.x-x.vx,N=_-x.y-x.vy,F=P*P+N*N;F<I*I&&(P===0&&(P=pc(i),F+=P*P),N===0&&(N=pc(i),F+=N*N),F=(I-(F=Math.sqrt(F)))/F*r,d.vx+=(P*=F)*(I=(C*=C)/(p+C)),d.vy+=(N*=F)*I,x.vx-=P*(I=1-I),x.vy-=N*I)}return}return E>m+I||w<m-I||T>_+I||A<_-I}}function o(c){if(c.data)return c.r=n[c.data.index];for(var f=c.r=0;f<4;++f)c[f]&&c[f].r>c.r&&(c.r=c[f].r)}function l(){if(e){var c,f=e.length,h;for(n=new Array(f),c=0;c<f;++c)h=e[c],n[h.index]=+t(h,c,e)}}return a.initialize=function(c,f){e=c,i=f,l()},a.iterations=function(c){return arguments.length?(s=+c,a):s},a.strength=function(c){return arguments.length?(r=+c,a):r},a.radius=function(c){return arguments.length?(t=typeof c=="function"?c:Nn(+c),l(),a):t},a}function lb(t){return t.index}function Wm(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function cb(t){var e=lb,n=h,i,r=Nn(30),s,a,o,l,c,f=1;t==null&&(t=[]);function h(p){return 1/Math.min(o[p.source.index],o[p.target.index])}function d(p){for(var u=0,g=t.length;u<f;++u)for(var y=0,E,T,w,A,x,C,I;y<g;++y)E=t[y],T=E.source,w=E.target,A=w.x+w.vx-T.x-T.vx||pc(c),x=w.y+w.vy-T.y-T.vy||pc(c),C=Math.sqrt(A*A+x*x),C=(C-s[y])/C*p*i[y],A*=C,x*=C,w.vx-=A*(I=l[y]),w.vy-=x*I,T.vx+=A*(I=1-I),T.vy+=x*I}function m(){if(a){var p,u=a.length,g=t.length,y=new Map(a.map((T,w)=>[e(T,w,a),T])),E;for(p=0,o=new Array(u);p<g;++p)E=t[p],E.index=p,typeof E.source!="object"&&(E.source=Wm(y,E.source)),typeof E.target!="object"&&(E.target=Wm(y,E.target)),o[E.source.index]=(o[E.source.index]||0)+1,o[E.target.index]=(o[E.target.index]||0)+1;for(p=0,l=new Array(g);p<g;++p)E=t[p],l[p]=o[E.source.index]/(o[E.source.index]+o[E.target.index]);i=new Array(g),_(),s=new Array(g),S()}}function _(){if(a)for(var p=0,u=t.length;p<u;++p)i[p]=+n(t[p],p,t)}function S(){if(a)for(var p=0,u=t.length;p<u;++p)s[p]=+r(t[p],p,t)}return d.initialize=function(p,u){a=p,c=u,m()},d.links=function(p){return arguments.length?(t=p,m(),d):t},d.id=function(p){return arguments.length?(e=p,d):e},d.iterations=function(p){return arguments.length?(f=+p,d):f},d.strength=function(p){return arguments.length?(n=typeof p=="function"?p:Nn(+p),_(),d):n},d.distance=function(p){return arguments.length?(r=typeof p=="function"?p:Nn(+p),S(),d):r},d}var ub={value:()=>{}};function Av(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Fl(n)}function Fl(t){this._=t}function db(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Fl.prototype=Av.prototype={constructor:Fl,on:function(t,e){var n=this._,i=db(t+"",n),r,s=-1,a=i.length;if(arguments.length<2){for(;++s<a;)if((r=(t=i[s]).type)&&(r=fb(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<a;)if(r=(t=i[s]).type)n[r]=$m(n[r],t.name,e);else if(e==null)for(r in n)n[r]=$m(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Fl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,s;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],i=0,r=s.length;i<r;++i)s[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,s=i.length;r<s;++r)i[r].value.apply(e,n)}};function fb(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function $m(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=ub,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var ra=0,Oa=0,wa=0,Rv=1e3,mc,ka,gc=0,as=0,zc=0,go=typeof performance=="object"&&performance.now?performance:Date,Pv=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Nv(){return as||(Pv(hb),as=go.now()+zc)}function hb(){as=0}function nf(){this._call=this._time=this._next=null}nf.prototype=Lv.prototype={constructor:nf,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Nv():+n)+(e==null?0:+e),!this._next&&ka!==this&&(ka?ka._next=this:mc=this,ka=this),this._call=t,this._time=n,rf()},stop:function(){this._call&&(this._call=null,this._time=1/0,rf())}};function Lv(t,e,n){var i=new nf;return i.restart(t,e,n),i}function pb(){Nv(),++ra;for(var t=mc,e;t;)(e=as-t._time)>=0&&t._call.call(void 0,e),t=t._next;--ra}function Xm(){as=(gc=go.now())+zc,ra=Oa=0;try{pb()}finally{ra=0,gb(),as=0}}function mb(){var t=go.now(),e=t-gc;e>Rv&&(zc-=e,gc=t)}function gb(){for(var t,e=mc,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:mc=n);ka=t,rf(i)}function rf(t){if(!ra){Oa&&(Oa=clearTimeout(Oa));var e=t-as;e>24?(t<1/0&&(Oa=setTimeout(Xm,t-go.now()-zc)),wa&&(wa=clearInterval(wa))):(wa||(gc=go.now(),wa=setInterval(mb,Rv)),ra=1,Pv(Xm))}}const _b=1664525,vb=1013904223,qm=4294967296;function xb(){let t=1;return()=>(t=(_b*t+vb)%qm)/qm}var yb=10,Sb=Math.PI*(3-Math.sqrt(5));function Eb(t){var e,n=1,i=.001,r=1-Math.pow(i,1/300),s=0,a=.6,o=new Map,l=Lv(h),c=Av("tick","end"),f=xb();t==null&&(t=[]);function h(){d(),c.call("tick",e),n<i&&(l.stop(),c.call("end",e))}function d(S){var p,u=t.length,g;S===void 0&&(S=1);for(var y=0;y<S;++y)for(n+=(s-n)*r,o.forEach(function(E){E(n)}),p=0;p<u;++p)g=t[p],g.fx==null?g.x+=g.vx*=a:(g.x=g.fx,g.vx=0),g.fy==null?g.y+=g.vy*=a:(g.y=g.fy,g.vy=0);return e}function m(){for(var S=0,p=t.length,u;S<p;++S){if(u=t[S],u.index=S,u.fx!=null&&(u.x=u.fx),u.fy!=null&&(u.y=u.fy),isNaN(u.x)||isNaN(u.y)){var g=yb*Math.sqrt(.5+S),y=S*Sb;u.x=g*Math.cos(y),u.y=g*Math.sin(y)}(isNaN(u.vx)||isNaN(u.vy))&&(u.vx=u.vy=0)}}function _(S){return S.initialize&&S.initialize(t,f),S}return m(),e={tick:d,restart:function(){return l.restart(h),e},stop:function(){return l.stop(),e},nodes:function(S){return arguments.length?(t=S,m(),o.forEach(_),e):t},alpha:function(S){return arguments.length?(n=+S,e):n},alphaMin:function(S){return arguments.length?(i=+S,e):i},alphaDecay:function(S){return arguments.length?(r=+S,e):+r},alphaTarget:function(S){return arguments.length?(s=+S,e):s},velocityDecay:function(S){return arguments.length?(a=1-S,e):1-a},randomSource:function(S){return arguments.length?(f=S,o.forEach(_),e):f},force:function(S,p){return arguments.length>1?(p==null?o.delete(S):o.set(S,_(p)),e):o.get(S)},find:function(S,p,u){var g=0,y=t.length,E,T,w,A,x;for(u==null?u=1/0:u*=u,g=0;g<y;++g)A=t[g],E=S-A.x,T=p-A.y,w=E*E+T*T,w<u&&(x=A,u=w);return x},on:function(S,p){return arguments.length>1?(c.on(S,p),e):c.on(S)}}}function Mb(t){var e=Nn(.1),n,i,r;typeof t!="function"&&(t=Nn(t==null?0:+t));function s(o){for(var l=0,c=n.length,f;l<c;++l)f=n[l],f.vx+=(r[l]-f.x)*i[l]*o}function a(){if(n){var o,l=n.length;for(i=new Array(l),r=new Array(l),o=0;o<l;++o)i[o]=isNaN(r[o]=+t(n[o],o,n))?0:+e(n[o],o,n)}}return s.initialize=function(o){n=o,a()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:Nn(+o),a(),s):e},s.x=function(o){return arguments.length?(t=typeof o=="function"?o:Nn(+o),a(),s):t},s}function Tb(t){var e=Nn(.1),n,i,r;typeof t!="function"&&(t=Nn(t==null?0:+t));function s(o){for(var l=0,c=n.length,f;l<c;++l)f=n[l],f.vy+=(r[l]-f.y)*i[l]*o}function a(){if(n){var o,l=n.length;for(i=new Array(l),r=new Array(l),o=0;o<l;++o)i[o]=isNaN(r[o]=+t(n[o],o,n))?0:+e(n[o],o,n)}}return s.initialize=function(o){n=o,a()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:Nn(+o),a(),s):e},s.y=function(o){return arguments.length?(t=typeof o=="function"?o:Nn(+o),a(),s):t},s}const Ym=12e3,Km=9e3,Jo=500,Qo=2e3,wb=.01;function Cb(t,e){const[n,i]=D.useState({}),[r,s]=D.useState({width:Ym,height:Km}),a=D.useRef(null),o=D.useRef({}),l=D.useRef({}),c=D.useRef(!0),f=D.useRef(null),h=D.useRef(new Set),d=D.useRef({width:Ym,height:Km}),m=D.useRef({});D.useEffect(()=>{d.current=r},[r]);const _=D.useCallback(S=>{let p=1/0,u=-1/0,g=1/0,y=-1/0;for(const E in S){const T=S[E];T.x<p&&(p=T.x),T.x>u&&(u=T.x),T.y<g&&(g=T.y),T.y>y&&(y=T.y)}s(E=>{let{width:T,height:w}=E,A=!1;return p<Jo&&(T+=Qo,A=!0),u>T-Jo&&(T+=Qo,A=!0),g<Jo&&(w+=Qo,A=!0),y>w-Jo&&(w+=Qo,A=!0),A?{width:T,height:w}:E})},[]);return D.useEffect(()=>{if(!t||!t.nodes.length){i({}),o.current={},l.current={},c.current=!0;return}a.current&&a.current.stop(),f.current&&cancelAnimationFrame(f.current);const{width:S,height:p}=d.current,u=S/2,g=p/2,y=t.nodes.find(U=>U.type==="center");let E=u,T=g;y&&o.current[y.id]&&(E=o.current[y.id].x,T=o.current[y.id].y);const w=12,A=new Array(w).fill(0),x=400;for(const U in l.current){if(y&&U===y.id)continue;const ae=l.current[U],Me=ae.x-E,Le=ae.y-T,q=Math.sqrt(Me*Me+Le*Le);if(q>x)continue;const re=1-q/x,oe=Math.atan2(Le,Me),Te=Math.floor((oe+Math.PI)/(2*Math.PI)*w)%w;A[Te]+=re,A[(Te+1)%w]+=re*.5,A[(Te-1+w)%w]+=re*.5}const C=e?o.current[e]:null;let I=Math.random()*Math.PI*2;if(y&&C&&o.current[y.id]){const U=o.current[y.id],ae=U.x-C.x,Me=U.y-C.y;(Math.abs(ae)>1||Math.abs(Me)>1)&&(I=Math.atan2(Me,ae))}const P=y&&C&&o.current[y.id];let N;if(P)N=I;else{let U=0,ae=-1/0;for(let Me=0;Me<w;Me++)-A[Me]>ae&&(ae=-A[Me],U=Me);N=U/w*2*Math.PI-Math.PI}const F=Object.values(l.current).filter(U=>{const ae=U.x-E,Me=U.y-T;return Math.sqrt(ae*ae+Me*Me)<300}).length,j=Math.min(F*8,50),B=450,G=180;if(y&&o.current[y.id]){const ae=new Array(12).fill(0);for(const Le in l.current){if(Le===y.id)continue;const q=l.current[Le],re=q.x-E,oe=q.y-T,Te=Math.sqrt(re*re+oe*oe);if(Te<B&&Te>1){const ve=Math.atan2(oe,re),ge=Math.floor((ve+Math.PI)/(2*Math.PI)*12)%12;ae[ge]+=1}}const Me=300;for(const Le in l.current){if(Le===y.id)continue;const q=l.current[Le],re=q.x-E,oe=q.y-T,Te=Math.sqrt(re*re+oe*oe);if(Te<B&&Te>1){const ve=m.current[Le]||0;if(ve>=Me)continue;const ge=1-Te/B;let Ne=G*ge*ge;Ne=Math.min(Ne,Me-ve);let ze=Math.atan2(oe,re);const Ze=Math.floor((ze+Math.PI)/(2*Math.PI)*12)%12,tt=(Ze-1+12)%12,Y=(Ze+1)%12;ae[tt]<ae[Y]?ze-=.26*ge:ae[Y]<ae[tt]&&(ze+=.26*ge);const fe=Math.cos(ze),L=Math.sin(ze);l.current[Le]={x:q.x+fe*Ne,y:q.y+L*Ne},o.current[Le]&&(o.current[Le]={x:o.current[Le].x+fe*Ne,y:o.current[Le].y+L*Ne}),m.current[Le]=ve+Ne}}}const O=new Set,V=t.nodes.map((U,ae)=>{const Me=U.hopDistance||0;if(o.current[U.id]){const Ne=o.current[U.id];return U.type==="center"?c.current?(c.current=!1,l.current[U.id]={x:u,y:g},{...U,x:u,y:g}):(l.current[U.id]={x:Ne.x,y:Ne.y},{...U,x:Ne.x,y:Ne.y}):{...U,x:Ne.x,y:Ne.y}}if(O.add(U.id),U.type==="center")return c.current?(c.current=!1,l.current[U.id]={x:u,y:g},{...U,x:u,y:g}):{...U,x:u,y:g};const Le=t.nodes.filter(Ne=>Ne.type==="primary"),q=Le.indexOf(U),re=Le.length;let oe,Te;if(U.type==="primary"){const Ne=U.strength||1;oe=(Ne===3?180:Ne===2?260:350)+j+(Math.random()-.5)*30;const Ze=Math.PI*.9;if(re>1&&q>=0){const tt=q/(re-1);Te=N+(tt-.5)*Ze}else Te=N+(Math.random()-.5)*Ze}else if(U.type==="secondary"){oe=90+(Math.random()-.5)*20;const Ne=t.edges.find(ze=>ze.target===U.id&&ze.type==="secondary");if(Ne&&o.current[Ne.source]){const ze=o.current[Ne.source];Te=Math.atan2(ze.y-T,ze.x-E)+(Math.random()-.5)*1.2}else Te=N+(Math.random()-.5)*Math.PI}else U.type==="trail"?(oe=400+Me*150,Te=N+Math.PI+(Math.random()-.5)*.5):(oe=350+Me*120,Te=Math.random()*Math.PI*2);let ve=E,ge=T;if(U.type==="secondary"){const Ne=t.edges.find(ze=>ze.target===U.id&&ze.type==="secondary");Ne&&o.current[Ne.source]&&(ve=o.current[Ne.source].x,ge=o.current[Ne.source].y)}return{...U,x:ve+Math.cos(Te)*oe,y:ge+Math.sin(Te)*oe}});h.current=O;const W=new Set(V.map(U=>U.id)),te=t.edges.filter(U=>W.has(U.source)&&W.has(U.target)).map(U=>({source:U.source,target:U.target,strength:U.strength,edgeType:U.type})),ne=Eb(V).force("link",cb(te).id(U=>U.id).distance(U=>{if(U.edgeType==="trail")return 500;if(U.edgeType==="secondary")return 90;const ae=U.strength||1;return ae===3?180:ae===2?260:350}).strength(U=>U.edgeType==="trail"?.03:U.edgeType==="secondary"?.1:.15)).force("anchorX",Mb().x(U=>l.current[U.id]?l.current[U.id].x:U.x).strength(U=>h.current.has(U.id)?.03:l.current[U.id]?.9:.1)).force("anchorY",Tb().y(U=>l.current[U.id]?l.current[U.id].y:U.y).strength(U=>h.current.has(U.id)?.03:l.current[U.id]?.9:.1)).force("collide",ob().radius(U=>{if(U.type==="center")return 110;if(U.type==="trail"){const ae=U.hopDistance||0;return ae>=3?40:ae>=2?65:90}if(U.type==="primary")return 75;if(U.type==="secondary")return 48;if(U.type==="dormant"){const ae=U.hopDistance||0;return ae>=3?30:ae>=2?50:60}return 55}).strength(.9).iterations(3)).alpha(.4).alphaDecay(.06).velocityDecay(.6);return ne.on("tick",()=>{const U={};V.forEach(ae=>{U[ae.id]={x:ae.x,y:ae.y}}),o.current=U,f.current&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>{i({...U})}),ne.alpha()<wb&&(ne.stop(),V.forEach(ae=>{l.current[ae.id]={x:ae.x,y:ae.y}}),h.current.clear(),_(U))}),a.current=ne,()=>{ne.stop(),f.current&&cancelAnimationFrame(f.current)}},[t,e,_]),{positions:n,canvasSize:r}}const bb="_center_d9oqx_3",Ab="_centerGlow_d9oqx_21",Rb="_radarRing_d9oqx_61",Pb="_radarRing1_d9oqx_75",Nb="_radarRing2_d9oqx_87",Lb="_radarRing3_d9oqx_101",Db="_centerParticles_d9oqx_125",Ib="_centerParticle_d9oqx_125",Ub="_centerCircle_d9oqx_183",Fb="_centerLabel_d9oqx_235",Ob="_centerName_d9oqx_263",kb="_node_d9oqx_293",Bb="_primaryNode_d9oqx_333",zb="_circle_d9oqx_333",Vb="_nodeLabel_d9oqx_351",Hb="_circleNode_d9oqx_361",Gb="_nodeIconChar_d9oqx_429",jb="_circleLabel_d9oqx_461",Wb="_focused_d9oqx_487",$b="_hexNode_d9oqx_499",Xb="_hex_d9oqx_499",qb="_hexLabel_d9oqx_633",Yb="_labelSmall_d9oqx_703",Kb="_cursor_d9oqx_731",Zb="_constellation_d9oqx_767",Jb="_constellationDot_d9oqx_783",Qb="_highlighted_d9oqx_815",nt={center:bb,centerGlow:Ab,radarRing:Rb,radarRing1:Pb,radarRing2:Nb,radarRing3:Lb,centerParticles:Db,centerParticle:Ib,centerCircle:Ub,centerLabel:Fb,centerName:Ob,node:kb,primaryNode:Bb,circle:zb,nodeLabel:Vb,circleNode:Hb,nodeIconChar:Gb,circleLabel:jb,focused:Wb,hexNode:$b,hex:Xb,hexLabel:qb,labelSmall:Yb,cursor:Kb,constellation:Zb,constellationDot:Jb,highlighted:Qb};function eA(t){return t===0?1:t===1?.85:t===2?.65:.45}const Zm={white:{border:"#00fff2",fill:"rgba(0, 255, 242, 0.06)",glow:"rgba(0,255,242,0.25)",text:"#00fff2"},cyan:{border:"#4d9fff",fill:"rgba(77, 159, 255, 0.05)",glow:"rgba(77,159,255,0.2)",text:"#4d9fff"},blue:{border:"#4d9fff",fill:"rgba(77, 159, 255, 0.05)",glow:"rgba(77,159,255,0.2)",text:"#4d9fff"},gold:{border:"#ffaa40",fill:"rgba(255, 170, 64, 0.05)",glow:"rgba(255,170,64,0.18)",text:"#ffaa40"},purple:{border:"#8b5cf6",fill:"rgba(139, 92, 246, 0.05)",glow:"rgba(139,92,246,0.18)",text:"#8b5cf6"},red:{border:"#ff4466",fill:"rgba(255, 68, 102, 0.05)",glow:"rgba(255,68,102,0.15)",text:"#ff4466"}};function tA(t,e){const[n,i]=D.useState(e?"":t),[r,s]=D.useState(!1),a=D.useRef(t);return D.useEffect(()=>{if(!e||t===a.current){i(t),s(!1);return}a.current=t,i(""),s(!0);let o=0;const l=setInterval(()=>{o++,i(t.slice(0,o)),o>=t.length&&(clearInterval(l),s(!1))},50);return()=>clearInterval(l)},[t,e]),{displayed:n,isTyping:r}}function nA(t){if(!t)return"";if(t.length<=10)return t;const e=t.split(" ");return e.length>=3?e.slice(0,2).map(n=>n.slice(0,4)).join(" "):e.length===2?e.map(n=>n.slice(0,5)).join(" "):t.slice(0,9)+"…"}function iA(t,e,n){if(t==="center")return 96;if(t==="secondary")return 48;if(t==="trail"){const i=Math.min(e||0,3);return[80,80,64,32][i]}if(t==="dormant"){const i=Math.min(e||0,3);return[60,60,48,28][i]}return t==="primary"?68:56}function rA({node:t,x:e,y:n,onClick:i,focused:r,highlighted:s}){var A;const a=t.type==="center",o=t.type==="secondary",l=t.type==="dormant",c=t.type==="trail",f=eA(t.hopDistance||0),h=Zm[t.color]||Zm.cyan,d=iA(t.type,t.hopDistance),m=d/2,_=nA(t.label),{displayed:S,isTyping:p}=tA(_,a||!l&&!c),u=(((A=t.label)==null?void 0:A[0])||"◆").toUpperCase();if(a)return v.jsxs("div",{className:nt.center,style:{left:e-m,top:n-m,width:d,height:d},onClick:()=>i==null?void 0:i(t),"data-node-id":t.id,children:[v.jsx("div",{className:nt.centerGlow}),v.jsx("div",{className:nt.radarRing+" "+nt.radarRing1}),v.jsx("div",{className:nt.radarRing+" "+nt.radarRing2}),v.jsx("div",{className:nt.radarRing+" "+nt.radarRing3}),v.jsx("div",{className:nt.centerParticles,children:[0,1,2,3,4,5].map(x=>v.jsx("div",{className:nt.centerParticle,style:{"--dx":`${Math.cos(x*1.047)*50}px`,"--dy":`${Math.sin(x*1.047)*50}px`}},x))}),v.jsx("div",{className:nt.centerCircle,children:v.jsxs("span",{className:nt.centerLabel,children:[S,p&&v.jsx("span",{className:nt.cursor})]})}),v.jsx("div",{className:nt.centerName,children:t.label})]});const g=o?nt.hex:nt.circle,y=o?nt.hexLabel:nt.circleLabel;function E(x){x.stopPropagation(),i==null||i(t)}if((c||l)&&(t.hopDistance||0)>=3)return v.jsxs("div",{className:`${nt.node} ${nt.constellation} ${s?nt.highlighted:""}`,style:{left:e-m,top:n-m,width:d,height:d,opacity:f,"--node-border":h.border,"--node-fill":h.fill},onClick:E,"data-node-id":t.id,children:[v.jsx("div",{className:nt.constellationDot}),v.jsx("div",{className:`${nt.nodeLabel} ${nt.labelSmall}`,children:t.label})]});const w=t.type==="primary";return v.jsxs("div",{className:`${nt.node} ${w?nt.primaryNode:""} ${r?nt.focused:""} ${s?nt.highlighted:""} ${o?nt.hexNode:nt.circleNode}`,style:{left:e-m,top:n-m,width:d,height:d,opacity:f,"--node-border":h.border,"--node-fill":h.fill,"--node-glow":h.glow,"--node-text":h.text},onClick:E,"data-node-id":t.id,children:[v.jsxs("div",{className:g,children:[!o&&v.jsx("span",{className:nt.nodeIconChar,children:u}),v.jsxs("span",{className:y,style:{fontSize:o?8:9},children:[S,p&&v.jsx("span",{className:nt.cursor})]})]}),v.jsx("div",{className:`${nt.nodeLabel} ${o?nt.labelSmall:""}`,children:t.label})]})}const sA=D.memo(rA,(t,e)=>t.x===e.x&&t.y===e.y&&t.focused===e.focused&&t.highlighted===e.highlighted&&t.node.type===e.node.type&&t.node.id===e.node.id&&t.node.visited===e.node.visited&&t.node.hopDistance===e.node.hopDistance),aA="_popover_1es13_1",oA="_header_1es13_22",lA="_category_1es13_27",cA="_title_1es13_37",uA="_summary_1es13_45",dA="_actions_1es13_51",fA="_jumpBtn_1es13_57",hA="_expandBtn_1es13_79",pA="_dismissBtn_1es13_101",bi={popover:aA,header:oA,category:lA,title:cA,summary:uA,actions:dA,jumpBtn:fA,expandBtn:hA,dismissBtn:pA};function mA({node:t,x:e,y:n}){var h;const{jumpTo:i,clearPreview:r,showNodeDetail:s}=Xn(),a=D.useRef(null),[o,l]=D.useState({dx:76,dy:-28}),[c,f]=D.useState(!1);return D.useEffect(()=>{f(!1),a.current&&requestAnimationFrame(()=>{const d=a.current;if(!d)return;const m=d.closest('[class*="canvas"]'),_=m==null?void 0:m.parentElement;if(!m||!_){f(!0);return}const S=_.getBoundingClientRect(),p=d.getBoundingClientRect();let u=76,g=-28;p.right>S.right-10&&(u=-296),p.bottom>S.bottom-10&&(g=-(p.height+10)),p.top<S.top+10&&(g=40),l({dx:u,dy:g}),f(!0)})},[e,n,t]),t?v.jsxs("div",{ref:a,className:bi.popover,style:{left:e+o.dx,top:n+o.dy,visibility:c?"visible":"hidden"},"data-popover":!0,children:[v.jsxs("div",{className:bi.header,children:[v.jsx("div",{className:bi.category,children:((h=t.relation)==null?void 0:h.toUpperCase())||"CONCEPT"}),v.jsx("h3",{className:bi.title,children:t.label}),v.jsx("p",{className:bi.summary,children:t.description||"Explore this concept."})]}),v.jsxs("div",{className:bi.actions,children:[v.jsx("button",{className:bi.jumpBtn,onPointerDown:d=>d.stopPropagation(),onClick:d=>{d.stopPropagation(),r(),i(t.label)},children:"JUMP HERE"}),v.jsx("button",{className:bi.expandBtn,onPointerDown:d=>d.stopPropagation(),onClick:d=>{d.stopPropagation(),r(),s(t)},children:"DETAILS"}),v.jsx("button",{className:bi.dismissBtn,onPointerDown:d=>d.stopPropagation(),onClick:d=>{d.stopPropagation(),r()},children:"x"})]})]}):null}const gA="_overlay_1y2ba_1",_A="_card_1y2ba_35",vA="_top_1y2ba_65",xA="_category_1y2ba_75",yA="_title_1y2ba_95",SA="_imageWrap_1y2ba_111",EA="_image_1y2ba_111",MA="_body_1y2ba_137",TA="_extract_1y2ba_151",wA="_summary_1y2ba_165",CA="_actions_1y2ba_183",bA="_jumpBtn_1y2ba_199",AA="_closeBtn_1y2ba_243",RA="_loadingWrap_1y2ba_281",PA="_spinner_1y2ba_299",NA="_loadingText_1y2ba_325",It={overlay:gA,card:_A,top:vA,category:xA,title:yA,imageWrap:SA,image:EA,body:MA,extract:TA,summary:wA,actions:CA,jumpBtn:bA,closeBtn:AA,loadingWrap:RA,spinner:PA,loadingText:NA};function LA(){var s,a;const{expandedNode:t,detailLoading:e,clearExpanded:n,jumpTo:i}=Xn();if(!t&&!e)return null;if(e)return v.jsx("div",{className:It.overlay,onClick:n,children:v.jsx("div",{className:It.card,onClick:o=>o.stopPropagation(),children:v.jsxs("div",{className:It.loadingWrap,children:[v.jsx("div",{className:It.spinner}),v.jsx("p",{className:It.loadingText,children:"Loading details..."})]})})});const r=()=>{n(),i(t.label||t.id)};return v.jsx("div",{className:It.overlay,onClick:n,children:v.jsxs("div",{className:It.card,onClick:o=>o.stopPropagation(),children:[v.jsxs("div",{className:It.top,children:[v.jsx("div",{className:It.category,children:((s=t.relation)==null?void 0:s.toUpperCase())||((a=t.type)==null?void 0:a.toUpperCase())||"CONCEPT"}),v.jsx("h2",{className:It.title,children:t.label||t.id})]}),v.jsxs("div",{className:It.body,children:[t.image&&v.jsx("div",{className:It.imageWrap,children:v.jsx("img",{src:t.image,alt:t.label,className:It.image})}),t.extract?v.jsx("p",{className:It.extract,children:t.extract}):t.description?v.jsx("p",{className:It.extract,children:t.description}):v.jsx("p",{className:It.extract,children:"No detailed information available."}),t.summary&&t.summary!==t.extract&&v.jsx("p",{className:It.summary,children:t.summary})]}),v.jsxs("div",{className:It.actions,children:[v.jsx("button",{className:It.jumpBtn,onClick:r,children:"JUMP HERE"}),v.jsx("button",{className:It.closeBtn,onClick:n,children:"CLOSE"})]})]})})}const DA="_container_14spu_3",IA="_vignette_14spu_23",UA="_empty_14spu_51",FA="_emptyText_14spu_91",OA="_nebula_14spu_109",kA="_blob_14spu_123",BA="_blob1_14spu_137",zA="_blob2_14spu_155",VA="_blob3_14spu_175",HA="_particles_14spu_207",GA="_particle_14spu_207",jA="_label_14spu_253",WA="_hint_14spu_281",$A="_canvas_14spu_307",XA="_svg_14spu_321",qA="_edgeGroup_14spu_343",YA="_starfield_14spu_381",KA="_star_14spu_381",ZA="_shootingStar_14spu_423",JA="_jumpPulse_14spu_457",QA="_focusBtn_14spu_495",eR="_hoverTooltip_14spu_545",xt={container:DA,vignette:IA,empty:UA,emptyText:FA,nebula:OA,blob:kA,blob1:BA,blob2:zA,blob3:VA,particles:HA,particle:GA,label:jA,hint:WA,canvas:$A,svg:XA,edgeGroup:qA,starfield:YA,star:KA,shootingStar:ZA,jumpPulse:JA,focusBtn:QA,hoverTooltip:eR},tR={white:"#ffaa40",cyan:"#4d9fff",blue:"#4d9fff",gold:"#ffaa40",purple:"#8b5cf6",red:"#ff4466"};function nR(t,e){const n={};for(const i of t)!i.cluster||i.cluster==="Unknown"||!e[i.id]||(n[i.cluster]||(n[i.cluster]=[]),n[i.cluster].push(e[i.id]));return n}function iR(t){if(t.length<2)return null;const e=t.map(o=>o.x),n=t.map(o=>o.y),i=(Math.min(...e)+Math.max(...e))/2,r=(Math.min(...n)+Math.max(...n))/2,s=(Math.max(...e)-Math.min(...e))/2+60,a=(Math.max(...n)-Math.min(...n))/2+60;return{cx:i,cy:r,rx:Math.max(s,65),ry:Math.max(a,65)}}function rR(){const{graphData:t,setPreview:e,clearPreview:n,previewNode:i,currentConcept:r,expandNode:s,clusterColors:a,prevCenterTitle:o,focusMode:l,toggleFocus:c,highlightedNodeId:f,setHighlight:h,clearHighlight:d,jumpTo:m}=Xn(),_=D.useRef(null),S=D.useRef(null),[p,u]=D.useState({x:0,y:0}),g=D.useRef(!1),[y,E]=D.useState(!1),T=D.useRef({x:0,y:0}),w=D.useRef(p),A=D.useRef(new Set),[x,C]=D.useState(-1),[I,P]=D.useState(null),N=D.useRef(null),F=D.useRef(null),j=D.useRef({width:12e3,height:9e3});D.useEffect(()=>{w.current=p},[p]);const[B,G]=D.useState([]);D.useEffect(()=>{const fe=setInterval(()=>{G(L=>[...L.slice(-2),{id:Date.now(),x:Math.random()*80+10,y:Math.random()*40,angle:-20-Math.random()*25,dur:1+Math.random()*1}])},8e3);return()=>clearInterval(fe)},[]);const[O,V]=D.useState(!1);D.useEffect(()=>{if(r){V(!0);const Y=setTimeout(()=>V(!1),900);return()=>clearTimeout(Y)}},[r==null?void 0:r.title]);const W=D.useMemo(()=>Array.from({length:40},(Y,fe)=>({left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,dur:`${3+Math.random()*4}s`,delay:`${Math.random()*5}s`,minOp:`${.05+Math.random()*.1}`,maxOp:`${.3+Math.random()*.4}`,w:`${1+Math.random()*2}px`,h:`${1+Math.random()*2}px`})),[]),te=D.useMemo(()=>Array.from({length:20},(Y,fe)=>({left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,dur:`${8+Math.random()*12}s`,delay:`${Math.random()*10}s`,w:`${1+Math.random()*1.5}px`,h:`${1+Math.random()*1.5}px`})),[]),{positions:ne,canvasSize:U}=Cb(t,o),ae=D.useRef(null);D.useEffect(()=>{if(!r||!t)return;const Y=t.nodes.find(M=>M.type==="center");if(!Y||!ne[Y.id]||ae.current===r.title)return;ae.current=r.title;const fe=ne[Y.id],L=-(fe.x-U.width/2),$e=-(fe.y-U.height/2);E(!0);const Ge=w.current,Qe=L-Ge.x,Ee=$e-Ge.y;if(Math.sqrt(Qe*Qe+Ee*Ee)>200){const M=Ge.x+Qe*.5+Ee*.15,z=Ge.y+Ee*.5-Qe*.15;u({x:M,y:z});const J=setTimeout(()=>u({x:L,y:$e}),300),se=setTimeout(()=>E(!1),700);return()=>{clearTimeout(J),clearTimeout(se)}}else{u({x:L,y:$e});const M=setTimeout(()=>E(!1),600);return()=>clearTimeout(M)}},[r==null?void 0:r.title,ne,U.width,U.height]),D.useEffect(()=>{const Y=j.current,fe=U.width-Y.width,L=U.height-Y.height;if(j.current={width:U.width,height:U.height},fe===0&&L===0)return;const $e=w.current.x+fe/2,Ge=w.current.y+L/2;w.current={x:$e,y:Ge},S.current&&(S.current.style.transition="none",S.current.style.transform=`translate(calc(-50% + ${$e}px), calc(-50% + ${Ge}px))`),u({x:$e,y:Ge})},[U.width,U.height]),D.useEffect(()=>{if(!t)return;t.nodes.filter(fe=>fe.type==="primary").sort((fe,L)=>(L.strength||0)-(fe.strength||0)).slice(0,1).forEach(fe=>{A.current.has(fe.id)||(A.current.add(fe.id),s(fe.id))})},[r==null?void 0:r.title]);const Me=D.useCallback(Y=>{Y.target.closest("[data-node]")||Y.target.closest("[data-popover]")||(g.current=!0,T.current={x:Y.clientX-w.current.x,y:Y.clientY-w.current.y},_.current&&(_.current.style.cursor="grabbing"),S.current&&(S.current.style.transition="none"))},[]),Le=D.useCallback(Y=>{if(!g.current)return;const fe=Y.clientX-T.current.x,L=Y.clientY-T.current.y;w.current={x:fe,y:L},S.current&&(S.current.style.transform=`translate(calc(-50% + ${fe}px), calc(-50% + ${L}px))`)},[]),q=D.useCallback(()=>{g.current&&(g.current=!1,_.current&&(_.current.style.cursor=""),S.current&&(S.current.style.transition="transform 0.08s ease-out"),u({...w.current}))},[]);D.useEffect(()=>(window.addEventListener("mousemove",Le),window.addEventListener("mouseup",q),()=>{window.removeEventListener("mousemove",Le),window.removeEventListener("mouseup",q)}),[Le,q]);const re=D.useMemo(()=>t?t.nodes.filter(Y=>Y.type!=="center"&&Y.type!=="secondary"):[],[t]),oe=D.useMemo(()=>{const Y=new Map;return re.forEach((fe,L)=>Y.set(fe.id,L)),Y},[re]);D.useEffect(()=>{function Y(fe){var L;t&&((L=document.activeElement)==null?void 0:L.tagName)!=="INPUT"&&(fe.key==="Tab"?(fe.preventDefault(),C($e=>($e+1)%re.length)):fe.key==="Escape"?(e(null),C(-1)):fe.key==="Enter"&&x>=0&&re[x]&&e(re[x]))}return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[t,x,re,e]);function Te(Y){if(clearTimeout(N.current),P(null),Y.type==="center")return;if(F.current&&F.current.nodeId===Y.id){clearTimeout(F.current.timer),F.current=null,n(),m(Y.label||Y.id);return}const fe=setTimeout(()=>{F.current=null,e(Y)},250);F.current={nodeId:Y.id,timer:fe}}function ve(Y,fe){return!0}const ge=D.useMemo(()=>{if(!t)return{};const Y={};for(const fe of t.nodes)Y[fe.id]=fe;return Y},[t]),Ne=D.useMemo(()=>{if(!t)return null;const Y=t.nodes.find(fe=>fe.type==="center");return Y?Y.id:null},[t]),ze=D.useMemo(()=>{if(!t)return[];const Y=nR(t.nodes,ne);return Object.entries(Y).map(([fe,L])=>({name:fe,ellipse:iR(L),color:a[fe]||"#445"})).filter(fe=>fe.ellipse)},[t,ne,a]),Ze=D.useMemo(()=>t?t.edges.map((Y,fe)=>{const L=ne[Y.source],$e=ne[Y.target];if(!L||!$e)return null;if(l){const Pe=ge[Y.source],Se=ge[Y.target];if(((Pe==null?void 0:Pe.hopDistance)||0)>=3||((Se==null?void 0:Se.hopDistance)||0)>=3)return null}const Ge=ge[Y.source],Qe=ge[Y.target],Ee=Math.max((Ge==null?void 0:Ge.hopDistance)||0,(Qe==null?void 0:Qe.hopDistance)||0);if(Ee>=4&&Y.type!=="trail")return null;const R=$e.x-L.x,M=$e.y-L.y,z=tR[Y.color]||"#00d4ff",J=Y.type==="trail",se=J&&Y.trailType==="indirect",Q=!J&&Ee>=2,Re=Q?`M ${L.x} ${L.y} L ${$e.x} ${$e.y}`:`M ${L.x} ${L.y} Q ${L.x+R*.5+M*.12} ${L.y+M*.5-R*.12} ${$e.x} ${$e.y}`,he=Y.type==="secondary",Ue=!he&&!Q&&(Y.source===Ne||Y.target===Ne);let Be,le,ue,be;return be=J?"#ffaa40":z,J?(Be=se?2.8:2.2,le=.55,ue=se?"6 4":"none"):Ee>=3?(Be=.5,le=.1,ue="2 6"):Ee>=2?(Be=.7,le=.18,ue="3 6"):Ue?(Be=1.8,le=.55,ue="none"):(Be=he?.7:1.2,le=he?.18:.35,ue=he?"2 4":"none"),v.jsxs("g",{className:xt.edgeGroup,children:[(J||!Q)&&v.jsx("path",{d:Re,fill:"none",stroke:be,strokeWidth:J?10:Ue?8:he?4:6,opacity:J?.1:Ue?.08:.03,filter:"url(#edgeGlow)"}),v.jsx("path",{d:Re,fill:"none",stroke:be,strokeWidth:Be,opacity:le,strokeLinecap:"round",strokeDasharray:ue,filter:Ue||J?"url(#neonGlow)":"none"})]},`${Y.source}-${Y.target}-${fe}`)}):[],[t,ne,ge,Ne,l]);if(!t||!r)return v.jsx("div",{className:xt.container,children:v.jsx("div",{className:xt.empty,children:v.jsx("p",{className:xt.emptyText,children:"Search a concept to begin exploring"})})});const tt=y?"transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)":"transform 0.08s ease-out";return v.jsxs("div",{className:xt.container,ref:_,onMouseDown:Me,tabIndex:0,children:[v.jsx("div",{className:xt.vignette}),v.jsxs("div",{className:xt.starfield,children:[W.map((Y,fe)=>v.jsx("div",{className:xt.star,style:{left:Y.left,top:Y.top,"--dur":Y.dur,"--delay":Y.delay,"--min-op":Y.minOp,"--max-op":Y.maxOp,width:Y.w,height:Y.h}},fe)),B.map(Y=>v.jsx("div",{className:xt.shootingStar,style:{left:`${Y.x}%`,top:`${Y.y}%`,"--angle":`${Y.angle}deg`,"--dur":`${Y.dur}s`}},Y.id))]}),v.jsxs("div",{className:xt.nebula,children:[v.jsx("div",{className:`${xt.blob} ${xt.blob1}`}),v.jsx("div",{className:`${xt.blob} ${xt.blob2}`}),v.jsx("div",{className:`${xt.blob} ${xt.blob3}`})]}),v.jsx("div",{className:xt.particles,children:te.map((Y,fe)=>v.jsx("div",{className:xt.particle,style:{left:Y.left,top:Y.top,animationDuration:Y.dur,animationDelay:Y.delay,width:Y.w,height:Y.h}},fe))}),v.jsx("div",{className:xt.label,children:"KNOWLEDGE GRAPH"}),v.jsx("button",{className:xt.focusBtn,onClick:c,children:l?"SHOW ALL":"FOCUS"}),v.jsx("div",{className:xt.hint,children:"TAB cycle · ENTER preview · DBL-CLICK jump · ESC close · drag to pan"}),v.jsxs("div",{ref:S,className:xt.canvas,style:{width:U.width,height:U.height,transform:`translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))`,transition:tt},children:[O&&ne[r.title]&&v.jsx("div",{className:xt.jumpPulse,style:{left:ne[r.title].x,top:ne[r.title].y}}),v.jsxs("svg",{className:xt.svg,viewBox:`0 0 ${U.width} ${U.height}`,children:[v.jsxs("defs",{children:[v.jsxs("filter",{id:"edgeGlow",children:[v.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),v.jsxs("feMerge",{children:[v.jsx("feMergeNode",{in:"blur"}),v.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),v.jsxs("filter",{id:"neonGlow",children:[v.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),v.jsx("feComposite",{in:"blur",in2:"SourceGraphic",operator:"over"})]})]}),ze.map(({name:Y,ellipse:fe,color:L})=>v.jsxs("g",{opacity:.7,children:[v.jsx("ellipse",{cx:fe.cx,cy:fe.cy,rx:fe.rx,ry:fe.ry,fill:L+"08",stroke:L+"18",strokeWidth:1,strokeDasharray:"6 8"}),v.jsx("text",{x:fe.cx,y:fe.cy-fe.ry-10,textAnchor:"middle",fontSize:10,fill:L+"44",fontFamily:"'Outfit', sans-serif",fontWeight:"600",letterSpacing:"0.15em",children:Y.toUpperCase()})]},Y)),Ze]}),t.nodes.map(Y=>{const fe=ne[Y.id];if(!fe||(ve(fe.x,fe.y),l&&(Y.hopDistance||0)>=3&&Y.type!=="center"))return null;const L=oe.get(Y.id)??-1;return v.jsx("div",{"data-node":!0,onMouseEnter:()=>{h(Y.id),Y.type!=="center"&&(N.current=setTimeout(()=>{const $e=(Y.description||"").split(". ")[0];$e&&P({id:Y.id,text:$e+".",x:fe.x,y:fe.y})},800))},onMouseLeave:()=>{d(),clearTimeout(N.current),P(null)},children:v.jsx(sA,{node:Y,x:fe.x,y:fe.y,onClick:Te,focused:L>=0&&L===x,highlighted:f===Y.id})},Y.id)}),I&&ne[I.id]&&!i&&(()=>{const Y=ne[I.id].x,fe=ne[I.id].y,L=Y>U.width*.6;return v.jsx("div",{className:xt.hoverTooltip,style:{left:L?Y-80:Y+80,top:fe,transform:L?"translate(-100%, -50%)":"translateY(-50%)"},children:I.text})})(),i&&ne[i.id]&&v.jsx(mA,{node:i,x:ne[i.id].x,y:ne[i.id].y})]}),v.jsx(LA,{})]})}const sR={Science:["physics","chemistry","biology","quantum","science","experiment","atom","molecule","evolution","genetics"],Technology:["technology","computing","software","internet","engineering","computer","algorithm","digital","electrical"],Mathematics:["mathematics","algebra","geometry","theorem","calculus","statistics","logic","number","equation"],History:["history","war","century","ancient","empire","dynasty","civilization","revolution","medieval"],Philosophy:["philosophy","ethics","logic","metaphysics","epistemology","consciousness","ontology","moral"],Art:["art","music","literature","film","culture","painting","poetry","architecture","cinema"],Society:["society","politics","economics","law","social","government","democracy","culture","religion"]};function Dv(t=[]){const e=t.join(" ").toLowerCase();let n="Other",i=0;for(const[r,s]of Object.entries(sR)){const a=s.filter(o=>e.includes(o)).length;a>i&&(i=a,n=r)}return n}const aR="_sidebar_ztawj_1",oR="_header_ztawj_23",lR="_title_ztawj_27",cR="_close_ztawj_39",uR="_stats_ztawj_61",dR="_stat_ztawj_61",fR="_statVal_ztawj_77",hR="_statLabel_ztawj_79",pR="_trail_ztawj_83",mR="_item_ztawj_89",gR="_dot_ztawj_93",_R="_dotVisited_ztawj_107",vR="_dotCurrent_ztawj_109",xR="_itemTitle_ztawj_113",yR="_meta_ztawj_115",SR="_back_ztawj_119",At={sidebar:aR,header:oR,title:lR,close:cR,stats:uR,stat:dR,statVal:fR,statLabel:hR,trail:pR,item:mR,dot:gR,dotVisited:_R,dotCurrent:vR,itemTitle:xR,meta:yR,back:SR};function ER(){const{trail:t,trailIndex:e,trailOpen:n,toggleTrail:i,goToIndex:r}=Xn();if(!n)return null;const s=t.length>0?t[0].timestamp:Date.now(),a=Date.now()-s,o=Math.max(1,Math.round(a/6e4)),l=new Set(t.map(c=>Dv(c.categories||[])));return v.jsxs("div",{className:At.sidebar,children:[v.jsxs("div",{className:At.header,children:[v.jsx("div",{className:At.title,children:"Your Trail"}),v.jsx("div",{className:At.close,onClick:i,children:"x"})]}),v.jsxs("div",{className:At.stats,children:[v.jsxs("div",{className:At.stat,children:[v.jsx("div",{className:At.statVal,children:t.length}),v.jsx("div",{className:At.statLabel,children:"Jumps"})]}),v.jsxs("div",{className:At.stat,children:[v.jsxs("div",{className:At.statVal,children:[o,"m"]}),v.jsx("div",{className:At.statLabel,children:"Time"})]}),v.jsxs("div",{className:At.stat,children:[v.jsx("div",{className:At.statVal,children:l.size}),v.jsx("div",{className:At.statLabel,children:"Domains"})]})]}),v.jsx("div",{className:At.trail,children:t.map((c,f)=>{const h=f===e;return v.jsxs("div",{className:At.item,children:[v.jsx("div",{className:`${At.dot} ${h?At.dotCurrent:At.dotVisited}`,children:f+1}),v.jsxs("div",{children:[v.jsx("h4",{className:At.itemTitle,children:c.title}),v.jsx("div",{className:At.meta,children:h?"Currently exploring":`${Math.round((Date.now()-c.timestamp)/6e4)}m ago`}),!h&&v.jsx("div",{className:At.back,onClick:()=>r(f),children:"Jump here"})]})]},`${c.title}-${f}`)})})]})}const MR="_overlay_3m99m_1",TR="_card_3m99m_21",wR="_top_3m99m_35",CR="_graph_3m99m_53",bR="_pathWrap_3m99m_63",AR="_arrow_3m99m_67",RR="_node_3m99m_71",PR="_circle_3m99m_75",NR="_start_3m99m_95",LR="_mid_3m99m_97",DR="_end_3m99m_99",IR="_nodeLabel_3m99m_103",UR="_statsRow_3m99m_107",FR="_stat_3m99m_107",OR="_statVal_3m99m_123",kR="_statLabel_3m99m_125",BR="_closeBtn_3m99m_129",Mt={overlay:MR,card:TR,top:wR,graph:CR,pathWrap:bR,arrow:AR,node:RR,circle:PR,start:NR,mid:LR,end:DR,nodeLabel:IR,statsRow:UR,stat:FR,statVal:OR,statLabel:kR,closeBtn:BR};function zR(){const{trail:t,journeyOpen:e,toggleJourney:n}=Xn();if(!e||t.length===0)return null;const i=t[0].timestamp,r=Math.max(1,Math.round((Date.now()-i)/6e4)),s=new Set(t.map(a=>Dv(a.categories||[])));return v.jsx("div",{className:Mt.overlay,onClick:a=>a.target===a.currentTarget&&n(),children:v.jsxs("div",{className:Mt.card,children:[v.jsxs("div",{className:Mt.top,children:[v.jsx("h2",{children:"Your Journey Map"}),v.jsx("p",{children:"Where curiosity took you today"})]}),v.jsx("div",{className:Mt.graph,children:t.map((a,o)=>{const l=o===0,c=o===t.length-1,f=a.title.split(" ").map(h=>h[0]).join("").slice(0,3).toUpperCase();return v.jsxs("div",{className:Mt.pathWrap,children:[o>0&&v.jsx("div",{className:Mt.arrow,children:"→"}),v.jsxs("div",{className:Mt.node,children:[v.jsx("div",{className:`${Mt.circle} ${l?Mt.start:c?Mt.end:Mt.mid}`,children:f}),v.jsx("div",{className:Mt.nodeLabel,children:a.title})]})]},`${a.title}-${o}`)})}),v.jsxs("div",{className:Mt.statsRow,children:[v.jsxs("div",{className:Mt.stat,children:[v.jsx("div",{className:Mt.statVal,children:t.length}),v.jsx("div",{className:Mt.statLabel,children:"Concepts"})]}),v.jsxs("div",{className:Mt.stat,children:[v.jsxs("div",{className:Mt.statVal,children:[r,"m"]}),v.jsx("div",{className:Mt.statLabel,children:"Time"})]}),v.jsxs("div",{className:Mt.stat,children:[v.jsx("div",{className:Mt.statVal,children:s.size}),v.jsx("div",{className:Mt.statLabel,children:"Domains"})]})]}),v.jsx("button",{className:Mt.closeBtn,onClick:n,children:"Close"})]})})}class VR extends D.Component{constructor(n){super(n);gp(this,"handleReset",()=>{this.setState({hasError:!1,error:null})});this.state={hasError:!1,error:null}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,i){console.error("ErrorBoundary caught:",n,i.componentStack)}render(){return this.state.hasError?v.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",background:"var(--bg-primary, #06090f)",color:"rgba(226, 232, 240, 0.7)",fontFamily:"'Outfit', sans-serif",gap:"16px"},children:[v.jsx("p",{style:{fontSize:"14px",color:"rgba(200, 210, 225, 0.45)"},children:"Something went wrong in the graph renderer."}),v.jsx("button",{onClick:this.handleReset,style:{padding:"10px 24px",borderRadius:"8px",border:"1px solid rgba(0, 212, 255, 0.25)",background:"rgba(0, 212, 255, 0.06)",color:"rgba(0, 212, 255, 0.8)",cursor:"pointer",fontSize:"12px",fontWeight:700,letterSpacing:"0.06em",fontFamily:"'Outfit', sans-serif"},children:"RETRY"})]}):this.props.children}}const HR="_app_1qmcd_1",GR="_main_1qmcd_8",jR="_leftPanel_1qmcd_15",WR="_rightPanel_1qmcd_23",el={app:HR,main:GR,leftPanel:jR,rightPanel:WR};function $R(){const{jumpTo:t}=Xn(),[e,n]=D.useState(!1),[i,r]=tM();return D.useEffect(()=>{if(e)return;const s=i.get("q");if(s){n(!0);const a=new URLSearchParams(i);a.delete("q"),r(a,{replace:!0}),t(s)}},[e,t,i,r]),null}function XR({topic:t}){return v.jsxs("div",{style:{position:"fixed",inset:0,background:"radial-gradient(ellipse at 50% 45%, rgba(255,170,64,0.06) 0%, rgba(0,255,242,0.02) 30%, #000000 65%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,zIndex:900,pointerEvents:"none",fontFamily:"var(--font-display, 'Outfit'), sans-serif"},children:[v.jsxs("div",{style:{position:"relative",width:36,height:36},children:[v.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:"1px solid rgba(255,170,64,0.15)",animation:"loaderRing 2s ease-in-out infinite"}}),v.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:16,height:16,borderRadius:"50%",background:"#ffd27a",boxShadow:"0 0 14px rgba(255,200,90,0.9), 0 0 32px rgba(255,170,64,0.55), 0 0 60px rgba(255,170,64,0.3)",animation:"branchPulse 1.6s ease-in-out infinite"}})]}),v.jsx("div",{style:{color:"rgba(255,200,90,0.85)",fontSize:11,letterSpacing:4,textTransform:"uppercase",textShadow:"0 0 10px rgba(255,170,64,0.5)"},children:"Loading concept"}),t&&v.jsx("div",{style:{color:"rgba(255,255,255,0.55)",fontSize:13,letterSpacing:1},children:t}),v.jsx("style",{children:`
        @keyframes branchPulse {
          0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 0.9; }
          50% { transform: translate(-50%,-50%) scale(1.3); opacity: 1; }
        }
        @keyframes loaderRing {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.25); opacity: 0.8; }
        }
      `})]})}function qR({onSignIn:t,onSignUp:e,pendingTopic:n}){const{currentConcept:i,loading:r}=Xn(),s=!!i,a=!s&&(r||!!n),o=!s&&!r&&!n;return D.useEffect(()=>{s&&window.dispatchEvent(new CustomEvent("explore:ready"))},[s]),v.jsxs(v.Fragment,{children:[a&&v.jsx(XR,{topic:n||"..."}),(s||o)&&v.jsxs(v.Fragment,{children:[v.jsx(Ev,{onSignIn:t,onSignUp:e}),v.jsx(Cw,{})]}),o&&v.jsxs("div",{style:{position:"fixed",inset:0,background:"radial-gradient(ellipse at 50% 40%, rgba(255,170,64,0.03) 0%, transparent 60%), #000000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,zIndex:800,fontFamily:"var(--font-display, 'Outfit'), sans-serif",paddingTop:120},children:[v.jsx("div",{style:{width:14,height:14,borderRadius:"50%",background:"#ffd27a",boxShadow:"0 0 12px rgba(255,200,90,0.6), 0 0 28px rgba(255,170,64,0.3)",opacity:.7}}),v.jsx("div",{style:{color:"rgba(255,200,90,0.85)",fontSize:12,letterSpacing:4,textTransform:"uppercase",textShadow:"0 0 10px rgba(255,170,64,0.5)"},children:"Wiki Hopper"}),v.jsx("div",{style:{color:"rgba(255,255,255,0.45)",fontSize:14,letterSpacing:1,maxWidth:400,textAlign:"center",lineHeight:1.6},children:"Use the search bar above to explore any Wikipedia concept"})]}),v.jsx("div",{className:el.app,style:{visibility:s?"visible":"hidden",background:"#000000"},children:v.jsxs("div",{className:el.main,children:[v.jsx("div",{className:el.leftPanel,children:v.jsx(HC,{})}),v.jsxs("div",{className:el.rightPanel,children:[v.jsx(VR,{children:v.jsx(rR,{})}),v.jsx(ER,{})]})]})}),v.jsx(zR,{}),s&&v.jsx(Tv,{page:"explore"})]})}function Jm(){const[t,e]=D.useState(null),n=new URLSearchParams(window.location.search).get("q")||"";return v.jsxs(tw,{children:[v.jsx(qR,{pendingTopic:n,onSignIn:()=>e("login"),onSignUp:()=>e("register")}),v.jsx($R,{}),t&&v.jsx(Mv,{initialMode:t,onClose:()=>e(null)})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="183",YR=0,Qm=1,KR=2,Ol=1,ZR=2,Ba=3,Pr=0,Tn=1,Ui=2,zi=0,Ys=1,eg=2,tg=3,ng=4,JR=5,$r=100,QR=101,e2=102,t2=103,n2=104,i2=200,r2=201,s2=202,a2=203,sf=204,af=205,o2=206,l2=207,c2=208,u2=209,d2=210,f2=211,h2=212,p2=213,m2=214,of=0,lf=1,cf=2,sa=3,uf=4,df=5,ff=6,hf=7,Iv=0,g2=1,_2=2,yi=0,Uv=1,Fv=2,Ov=3,kv=4,Bv=5,zv=6,Vv=7,Hv=300,os=301,aa=302,wu=303,Cu=304,Vc=306,pf=1e3,ki=1001,mf=1002,Yt=1003,v2=1004,tl=1005,an=1006,bu=1007,Zr=1008,Hn=1009,Gv=1010,jv=1011,_o=1012,Kh=1013,Mi=1014,gi=1015,Xi=1016,Zh=1017,Jh=1018,vo=1020,Wv=35902,$v=35899,Xv=1021,qv=1022,ri=1023,qi=1026,Jr=1027,Yv=1028,Qh=1029,oa=1030,ep=1031,tp=1033,kl=33776,Bl=33777,zl=33778,Vl=33779,gf=35840,_f=35841,vf=35842,xf=35843,yf=36196,Sf=37492,Ef=37496,Mf=37488,Tf=37489,wf=37490,Cf=37491,bf=37808,Af=37809,Rf=37810,Pf=37811,Nf=37812,Lf=37813,Df=37814,If=37815,Uf=37816,Ff=37817,Of=37818,kf=37819,Bf=37820,zf=37821,Vf=36492,Hf=36494,Gf=36495,jf=36283,Wf=36284,$f=36285,Xf=36286,x2=3200,y2=0,S2=1,pr="",Bn="srgb",la="srgb-linear",_c="linear",ct="srgb",gs=7680,ig=519,E2=512,M2=513,T2=514,np=515,w2=516,C2=517,ip=518,b2=519,rg=35044,sg="300 es",_i=2e3,vc=2001;function A2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function R2(){const t=xc("canvas");return t.style.display="block",t}const ag={};function og(...t){const e="THREE."+t.shift();console.log(e,...t)}function Kv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function He(...t){t=Kv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function at(...t){t=Kv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function yc(...t){const e=t.join(" ");e in ag||(ag[e]=!0,He(...t))}function P2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const N2={[of]:lf,[cf]:ff,[uf]:hf,[sa]:df,[lf]:of,[ff]:cf,[hf]:uf,[df]:sa};class pa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,qf=180/Math.PI;function bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function L2(t,e){return(t%e+e)%e}function Ru(t,e,n){return(1-n)*t+n*e}function Ca(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(h!==S||l!==d||c!==m||f!==_){let p=l*d+c*m+f*_+h*S;p<0&&(d=-d,m=-m,_=-_,S=-S,p=-p);let u=1-o;if(p<.9995){const g=Math.acos(p),y=Math.sin(g);u=Math.sin(u*g)/y,o=Math.sin(o*g)/y,l=l*u+d*o,c=c*u+m*o,f=f*u+_*o,h=h*u+S*o}else{l=l*u+d*o,c=c*u+m*o,f=f*u+_*o,h=h*u+S*o;const g=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=g,c*=g,f*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+f*h+l*m-c*d,e[n+1]=l*_+f*d+c*h-o*m,e[n+2]=c*_+f*m+o*d-l*h,e[n+3]=f*_-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h-d*m*_;break;case"YXZ":this._x=d*f*h+c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h+d*m*_;break;case"ZXY":this._x=d*f*h-c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h-d*m*_;break;case"ZYX":this._x=d*f*h-c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h+d*m*_;break;case"YZX":this._x=d*f*h+c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h-d*m*_;break;case"XZY":this._x=d*f*h-c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h+d*m*_;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new K,lg=new ma;class Xe{constructor(e,n,i,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],_=i[8],S=r[0],p=r[3],u=r[6],g=r[1],y=r[4],E=r[7],T=r[2],w=r[5],A=r[8];return s[0]=a*S+o*g+l*T,s[3]=a*p+o*y+l*w,s[6]=a*u+o*E+l*A,s[1]=c*S+f*g+h*T,s[4]=c*p+f*y+h*w,s[7]=c*u+f*E+h*A,s[2]=d*S+m*g+_*T,s[5]=d*p+m*y+_*w,s[8]=d*u+m*E+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,m=c*s-a*l,_=n*h+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new Xe,cg=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ug=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D2(){const t={enabled:!0,workingColorSpace:la,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=Ks(r.r),r.g=Ks(r.g),r.b=Ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?_c:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[la]:{primaries:e,whitePoint:i,transfer:_c,toXYZ:cg,fromXYZ:ug,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:cg,fromXYZ:ug,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const it=D2();function Vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let _s;class I2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=xc("canvas")),_s.width=e.width,_s.height=e.height;const r=_s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vi(n[i]/255)*255):n[i]=Vi(n[i]);return{data:n,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U2=0;class rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U2++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Lu(r[a].image)):s.push(Lu(r[a]))}else s=Lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?I2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let F2=0;const Du=new K;class hn extends pa{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=ki,r=ki,s=an,a=Zr,o=ri,l=Hn,c=hn.DEFAULT_ANISOTROPY,f=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F2++}),this.uuid=bo(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Du).x}get height(){return this.source.getSize(Du).y}get depth(){return this.source.getSize(Du).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pf:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pf:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Hv;hn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],_=l[9],S=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,E=(m+1)/2,T=(u+1)/2,w=(f+d)/4,A=(h+S)/4,x=(_+p)/4;return y>E&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=A/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=x/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(h-S)*(h-S)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(h-S)/g,this.z=(d-f)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O2 extends pa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new hn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new rp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends O2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zv extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k2 extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kt{constructor(e,n,i,r,s,a,o,l,c,f,h,d,m,_,S,p){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,m,_,S,p)}set(e,n,i,r,s,a,o,l,c,f,h,d,m,_,S,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=_,u[11]=S,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,m=a*h,_=o*f,S=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,_=c*f,S=c*h;n[0]=d+S*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=m*o-_,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,_=c*f,S=c*h;n[0]=d-S*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*f,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,m=a*h,_=o*f,S=o*h;n[0]=l*f,n[4]=_*c-m,n[8]=d*c+S,n[1]=l*h,n[5]=S*c+d,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*f,n[4]=S-d*h,n[8]=_*h+m,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*h+_,n[10]=d-S*h}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+S,n[5]=a*f,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*f,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B2,e,z2)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),rr.crossVectors(i,bn),rr.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),rr.crossVectors(i,bn)),rr.normalize(),nl.crossVectors(bn,rr),r[0]=rr.x,r[4]=nl.x,r[8]=bn.x,r[1]=rr.y,r[5]=nl.y,r[9]=bn.y,r[2]=rr.z,r[6]=nl.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],_=i[2],S=i[6],p=i[10],u=i[14],g=i[3],y=i[7],E=i[11],T=i[15],w=r[0],A=r[4],x=r[8],C=r[12],I=r[1],P=r[5],N=r[9],F=r[13],j=r[2],B=r[6],G=r[10],O=r[14],V=r[3],W=r[7],te=r[11],ne=r[15];return s[0]=a*w+o*I+l*j+c*V,s[4]=a*A+o*P+l*B+c*W,s[8]=a*x+o*N+l*G+c*te,s[12]=a*C+o*F+l*O+c*ne,s[1]=f*w+h*I+d*j+m*V,s[5]=f*A+h*P+d*B+m*W,s[9]=f*x+h*N+d*G+m*te,s[13]=f*C+h*F+d*O+m*ne,s[2]=_*w+S*I+p*j+u*V,s[6]=_*A+S*P+p*B+u*W,s[10]=_*x+S*N+p*G+u*te,s[14]=_*C+S*F+p*O+u*ne,s[3]=g*w+y*I+E*j+T*V,s[7]=g*A+y*P+E*B+T*W,s[11]=g*x+y*N+E*G+T*te,s[15]=g*C+y*F+E*O+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],_=e[3],S=e[7],p=e[11],u=e[15],g=l*m-c*d,y=o*m-c*h,E=o*d-l*h,T=a*m-c*f,w=a*d-l*f,A=a*h-o*f;return n*(S*g-p*y+u*E)-i*(_*g-p*T+u*w)+r*(_*y-S*T+u*A)-s*(_*E-S*w+p*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],_=e[12],S=e[13],p=e[14],u=e[15],g=n*o-i*a,y=n*l-r*a,E=n*c-s*a,T=i*l-r*o,w=i*c-s*o,A=r*c-s*l,x=f*S-h*_,C=f*p-d*_,I=f*u-m*_,P=h*p-d*S,N=h*u-m*S,F=d*u-m*p,j=g*F-y*N+E*P+T*I-w*C+A*x;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/j;return e[0]=(o*F-l*N+c*P)*B,e[1]=(r*N-i*F-s*P)*B,e[2]=(S*A-p*w+u*T)*B,e[3]=(d*w-h*A-m*T)*B,e[4]=(l*I-a*F-c*C)*B,e[5]=(n*F-r*I+s*C)*B,e[6]=(p*E-_*A-u*y)*B,e[7]=(f*A-d*E+m*y)*B,e[8]=(a*N-o*I+c*x)*B,e[9]=(i*I-n*N-s*x)*B,e[10]=(_*w-S*E+u*g)*B,e[11]=(h*E-f*w-m*g)*B,e[12]=(o*C-a*P-l*x)*B,e[13]=(n*P-i*C+r*x)*B,e[14]=(S*y-_*T-p*g)*B,e[15]=(f*T-h*y+d*g)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,m=s*f,_=s*h,S=a*f,p=a*h,u=o*h,g=l*c,y=l*f,E=l*h,T=i.x,w=i.y,A=i.z;return r[0]=(1-(S+u))*T,r[1]=(m+E)*T,r[2]=(_-y)*T,r[3]=0,r[4]=(m-E)*w,r[5]=(1-(d+u))*w,r[6]=(p+g)*w,r[7]=0,r[8]=(_+y)*A,r[9]=(p-g)*A,r[10]=(1-(d+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),l=vs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);const c=1/a,f=1/o,h=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=f,Kn.elements[5]*=f,Kn.elements[6]*=f,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,n.setFromRotationMatrix(Kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=_i,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===_i)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===vc)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=_i,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===_i)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===vc)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new K,Kn=new kt,B2=new K(0,0,0),z2=new K(1,1,1),rr=new K,nl=new K,bn=new K,dg=new kt,fg=new ma;class Yi{constructor(e=0,n=0,i=0,r=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Jv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V2=0;const hg=new K,xs=new ma,Ai=new kt,il=new K,ba=new K,H2=new K,G2=new ma,pg=new K(1,0,0),mg=new K(0,1,0),gg=new K(0,0,1),_g={type:"added"},j2={type:"removed"},ys={type:"childadded",child:null},Iu={type:"childremoved",child:null};class Dn extends pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V2++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new K,n=new Yi,i=new ma,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new Xe}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(pg,e)}rotateY(e){return this.rotateOnAxis(mg,e)}rotateZ(e){return this.rotateOnAxis(gg,e)}translateOnAxis(e,n){return hg.copy(e).applyQuaternion(this.quaternion),this.position.add(hg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pg,e)}translateY(e){return this.translateOnAxis(mg,e)}translateZ(e){return this.translateOnAxis(gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?il.copy(e):il.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ba,il,this.up):Ai.lookAt(il,ba,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(Ai),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_g),ys.child=e,this.dispatchEvent(ys),ys.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(j2),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_g),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,H2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,G2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dn.DEFAULT_UP=new K(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rl extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W2={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),u=this._getHandJoint(c,S);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new rl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ht{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=L2(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Fu(a,s,e+1/3),this.g=Fu(a,s,e),this.b=Fu(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=Qv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return it.workingToColorSpace(rn.copy(this),e),Math.round(et(rn.r*255,0,255))*65536+Math.round(et(rn.g*255,0,255))*256+Math.round(et(rn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Bn){it.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(sl);const i=Ru(sr.h,sl.h,n),r=Ru(sr.s,sl.s,n),s=Ru(sr.l,sl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ht;ht.NAMES=Qv;class $2 extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zn=new K,Ri=new K,Ou=new K,Pi=new K,Ss=new K,Es=new K,vg=new K,ku=new K,Bu=new K,zu=new K,Vu=new Lt,Hu=new Lt,Gu=new Lt;class ii{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Ri.subVectors(i,n),Ou.subVectors(e,n);const a=Zn.dot(Zn),o=Zn.dot(Ri),l=Zn.dot(Ou),c=Ri.dot(Ri),f=Ri.dot(Ou),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Vu.setScalar(0),Hu.setScalar(0),Gu.setScalar(0),Vu.fromBufferAttribute(e,n),Hu.fromBufferAttribute(e,i),Gu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vu,s.x),a.addScaledVector(Hu,s.y),a.addScaledVector(Gu,s.z),a}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Ri.subVectors(e,n),Zn.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Zn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ss.subVectors(r,i),Es.subVectors(s,i),ku.subVectors(e,i);const l=Ss.dot(ku),c=Es.dot(ku);if(l<=0&&c<=0)return n.copy(i);Bu.subVectors(e,r);const f=Ss.dot(Bu),h=Es.dot(Bu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Ss,a);zu.subVectors(e,s);const m=Ss.dot(zu),_=Es.dot(zu);if(_>=0&&m<=_)return n.copy(s);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Es,o);const p=f*_-m*h;if(p<=0&&h-f>=0&&m-_>=0)return vg.subVectors(s,r),o=(h-f)/(h-f+(m-_)),n.copy(r).addScaledVector(vg,o);const u=1/(p+S+d);return a=S*u,o=d*u,n.copy(i).addScaledVector(Ss,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ao{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),al.copy(i.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),ol.subVectors(this.max,Aa),Ms.subVectors(e.a,Aa),Ts.subVectors(e.b,Aa),ws.subVectors(e.c,Aa),ar.subVectors(Ts,Ms),or.subVectors(ws,Ts),Or.subVectors(Ms,ws);let n=[0,-ar.z,ar.y,0,-or.z,or.y,0,-Or.z,Or.y,ar.z,0,-ar.x,or.z,0,-or.x,Or.z,0,-Or.x,-ar.y,ar.x,0,-or.y,or.x,0,-Or.y,Or.x,0];return!ju(n,Ms,Ts,ws,ol)||(n=[1,0,0,0,1,0,0,0,1],!ju(n,Ms,Ts,ws,ol))?!1:(ll.crossVectors(ar,or),n=[ll.x,ll.y,ll.z],ju(n,Ms,Ts,ws,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new K,new K,new K,new K,new K,new K,new K,new K],Jn=new K,al=new Ao,Ms=new K,Ts=new K,ws=new K,ar=new K,or=new K,Or=new K,Aa=new K,ol=new K,ll=new K,kr=new K;function ju(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){kr.fromArray(t,s);const o=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=e.dot(kr),c=n.dot(kr),f=i.dot(kr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Ut=new K,cl=new pt;let X2=0;class Ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rg,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ca(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ca(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ca(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ca(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ca(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rg&&(e.usage=this.usage),e}}class ex extends Ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class tx extends Ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Hi extends Ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}const q2=new Ao,Ra=new K,Wu=new K;class sp{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):q2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const n=Ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Wu)),this.expandByPoint(Ra.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Y2=0;const kn=new kt,$u=new Dn,Cs=new K,An=new Ao,Pa=new Ao,jt=new K;class Zi extends pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y2++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A2(e)?tx:ex)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Hi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Pa.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(An.min,Pa.min),An.expandByPoint(jt),jt.addVectors(An.max,Pa.max),An.expandByPoint(jt)):(An.expandByPoint(Pa.min),An.expandByPoint(Pa.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)jt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),jt.add(Cs)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new K,l[x]=new K;const c=new K,f=new K,h=new K,d=new pt,m=new pt,_=new pt,S=new K,p=new K;function u(x,C,I){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,I),d.fromBufferAttribute(s,x),m.fromBufferAttribute(s,C),_.fromBufferAttribute(s,I),f.sub(c),h.sub(c),m.sub(d),_.sub(d);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(P),o[x].add(S),o[C].add(S),o[I].add(S),l[x].add(p),l[C].add(p),l[I].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,C=g.length;x<C;++x){const I=g[x],P=I.start,N=I.count;for(let F=P,j=P+N;F<j;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new K,E=new K,T=new K,w=new K;function A(x){T.fromBufferAttribute(r,x),w.copy(T);const C=o[x];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(w,C);const P=E.dot(l[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,P)}for(let x=0,C=g.length;x<C;++x){const I=g[x],P=I.start,N=I.count;for(let F=P,j=P+N;F<j;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,f=new K,h=new K;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),S=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,p),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let m=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*f;for(let u=0;u<f;u++)d[_++]=c[m++]}return new Ei(d,f,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let K2=0;class Hc extends pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K2++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=Ys,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=af,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sf&&(i.blendSrc=this.blendSrc),this.blendDst!==af&&(i.blendDst=this.blendDst),this.blendEquation!==$r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Li=new K,Xu=new K,ul=new K,lr=new K,qu=new K,dl=new K,Yu=new K;class Z2{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xu.copy(e).add(n).multiplyScalar(.5),ul.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(Xu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ul),o=lr.dot(this.direction),l=-lr.dot(ul),c=lr.lengthSq(),f=Math.abs(1-a*a);let h,d,m,_;if(f>0)if(h=a*l-o,d=a*o-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const S=1/f;h*=S,d*=S,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xu).addScaledVector(ul,d),m}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,s){qu.subVectors(n,e),dl.subVectors(i,e),Yu.crossVectors(qu,dl);let a=this.direction.dot(Yu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;lr.subVectors(this.origin,e);const l=o*this.direction.dot(dl.crossVectors(lr,dl));if(l<0)return null;const c=o*this.direction.dot(qu.cross(lr));if(c<0||l+c>a)return null;const f=-o*lr.dot(Yu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nx extends Hc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xg=new kt,Br=new Z2,fl=new sp,yg=new K,hl=new K,pl=new K,ml=new K,Ku=new K,gl=new K,Sg=new K,_l=new K;class Ti extends Dn{constructor(e=new Zi,n=new nx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(Ku.fromBufferAttribute(h,e),a?gl.addScaledVector(Ku,f):gl.addScaledVector(Ku.sub(n),f))}n.add(gl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(fl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(fl,yg)===null||Br.origin.distanceToSquared(yg)>(e.far-e.near)**2))&&(xg.copy(s).invert(),Br.copy(e.ray).applyMatrix4(xg),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const p=d[_],u=a[p.materialIndex],g=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,T=y;E<T;E+=3){const w=o.getX(E),A=o.getX(E+1),x=o.getX(E+2);r=vl(this,u,e,i,c,f,h,w,A,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=_,u=S;p<u;p+=3){const g=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);r=vl(this,a,e,i,c,f,h,g,y,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const p=d[_],u=a[p.materialIndex],g=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,T=y;E<T;E+=3){const w=E,A=E+1,x=E+2;r=vl(this,u,e,i,c,f,h,w,A,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=_,u=S;p<u;p+=3){const g=p,y=p+1,E=p+2;r=vl(this,a,e,i,c,f,h,g,y,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function J2(t,e,n,i,r,s,a,o){let l;if(e.side===Tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Pr,o),l===null)return null;_l.copy(o),_l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_l);return c<n.near||c>n.far?null:{distance:c,point:_l.clone(),object:t}}function vl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,hl),t.getVertexPosition(l,pl),t.getVertexPosition(c,ml);const f=J2(t,e,n,i,hl,pl,ml,Sg);if(f){const h=new K;ii.getBarycoord(Sg,hl,pl,ml,h),r&&(f.uv=ii.getInterpolatedAttribute(r,o,l,c,h,new pt)),s&&(f.uv1=ii.getInterpolatedAttribute(s,o,l,c,h,new pt)),a&&(f.normal=ii.getInterpolatedAttribute(a,o,l,c,h,new K),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new K,materialIndex:0};ii.getNormal(hl,pl,ml,d.normal),f.face=d,f.barycoord=h}return f}class Q2 extends hn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Yt,f=Yt,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zu=new K,e3=new K,t3=new Xe;class Wr{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zu.subVectors(i,n).cross(e3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||t3.getNormalMatrix(e),r=this.coplanarPoint(Zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new sp,n3=new pt(.5,.5),xl=new K;class ix{constructor(e=new Wr,n=new Wr,i=new Wr,r=new Wr,s=new Wr,a=new Wr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],m=s[7],_=s[8],S=s[9],p=s[10],u=s[11],g=s[12],y=s[13],E=s[14],T=s[15];if(r[0].setComponents(c-a,m-f,u-_,T-g).normalize(),r[1].setComponents(c+a,m+f,u+_,T+g).normalize(),r[2].setComponents(c+o,m+h,u+S,T+y).normalize(),r[3].setComponents(c-o,m-h,u-S,T-y).normalize(),i)r[4].setComponents(l,d,p,E).normalize(),r[5].setComponents(c-l,m-d,u-p,T-E).normalize();else if(r[4].setComponents(c-l,m-d,u-p,T-E).normalize(),n===_i)r[5].setComponents(c+l,m+d,u+p,T+E).normalize();else if(n===vc)r[5].setComponents(l,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const n=n3.distanceTo(e.center);return zr.radius=.7071067811865476+n,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rx extends hn{constructor(e=[],n=os,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xo extends hn{constructor(e,n,i=Mi,r,s,a,o=Yt,l=Yt,c,f=qi,h=1){if(f!==qi&&f!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class i3 extends xo{constructor(e,n=Mi,i=os,r,s,a=Yt,o=Yt,l,c=qi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sx extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ro extends Zi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hi(c,3)),this.setAttribute("normal",new Hi(f,3)),this.setAttribute("uv",new Hi(h,2));function _(S,p,u,g,y,E,T,w,A,x,C){const I=E/A,P=T/x,N=E/2,F=T/2,j=w/2,B=A+1,G=x+1;let O=0,V=0;const W=new K;for(let te=0;te<G;te++){const ne=te*P-F;for(let U=0;U<B;U++){const ae=U*I-N;W[S]=ae*g,W[p]=ne*y,W[u]=j,c.push(W.x,W.y,W.z),W[S]=0,W[p]=0,W[u]=w>0?1:-1,f.push(W.x,W.y,W.z),h.push(U/A),h.push(1-te/x),O+=1}}for(let te=0;te<x;te++)for(let ne=0;ne<A;ne++){const U=d+ne+B*te,ae=d+ne+B*(te+1),Me=d+(ne+1)+B*(te+1),Le=d+(ne+1)+B*te;l.push(U,ae,Le),l.push(ae,Me,Le),V+=6}o.addGroup(m,V,C),m+=V,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Po extends Zi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,m=[],_=[],S=[],p=[];for(let u=0;u<f;u++){const g=u*d-a;for(let y=0;y<c;y++){const E=y*h-s;_.push(E,-g,0),S.push(0,0,1),p.push(y/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const y=g+c*u,E=g+c*(u+1),T=g+1+c*(u+1),w=g+1+c*u;m.push(y,E,w),m.push(E,T,w)}this.setIndex(m),this.setAttribute("position",new Hi(_,3)),this.setAttribute("normal",new Hi(S,3)),this.setAttribute("uv",new Hi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}function ca(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=ca(t[n]);for(const r in i)e[r]=i[r]}return e}function r3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ax(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const s3={clone:ca,merge:cn};var a3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Hc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a3,this.fragmentShader=o3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=r3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class l3 extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class c3 extends Hc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u3 extends Hc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yl=new K,Sl=new ma,di=new K;class ox extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yl,Sl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Sl,di.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(yl,Sl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Sl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new K,Eg=new pt,Mg=new pt;class ni extends ox{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,Eg,Mg),n.subVectors(Mg,Eg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Au*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ap extends ox{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bs=-90,As=1;class d3 extends Dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ni(bs,As,e,n);r.layers=this.layers,this.add(r);const s=new ni(bs,As,e,n);s.layers=this.layers,this.add(s);const a=new ni(bs,As,e,n);a.layers=this.layers,this.add(a);const o=new ni(bs,As,e,n);o.layers=this.layers,this.add(o);const l=new ni(bs,As,e,n);l.layers=this.layers,this.add(l);const c=new ni(bs,As,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class f3 extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class h3{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=p3.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function p3(){this._document.hidden===!1&&this.reset()}function Tg(t,e,n,i){const r=m3(i);switch(n){case Xv:return t*e;case Yv:return t*e/r.components*r.byteLength;case Qh:return t*e/r.components*r.byteLength;case oa:return t*e*2/r.components*r.byteLength;case ep:return t*e*2/r.components*r.byteLength;case qv:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case tp:return t*e*4/r.components*r.byteLength;case kl:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _f:case xf:return Math.max(t,16)*Math.max(e,8)/4;case gf:case vf:return Math.max(t,8)*Math.max(e,8)/2;case yf:case Sf:case Mf:case Tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ef:case wf:case Cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vf:case Hf:case Gf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jf:case Wf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case $f:case Xf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function m3(t){switch(t){case Hn:case Gv:return{byteLength:1,components:1};case _o:case jv:case Xi:return{byteLength:2,components:1};case Zh:case Jh:return{byteLength:2,components:4};case Mi:case Kh:case gi:return{byteLength:4,components:1};case Wv:case $v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function g3(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],S=h[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,h[d]=S)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const S=h[m];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var _3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v3=`#ifdef USE_ALPHAHASH
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
#endif`,x3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M3=`#ifdef USE_AOMAP
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
#endif`,T3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,C3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P3=`#ifdef USE_IRIDESCENCE
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
#endif`,N3=`#ifdef USE_BUMPMAP
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
#endif`,L3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,k3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,z3=`#define PI 3.141592653589793
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
} // validated`,V3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H3=`vec3 transformedNormal = objectNormal;
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
#endif`,G3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X3="gl_FragColor = linearToOutputTexel( gl_FragColor );",q3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y3=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z3=`#ifdef USE_ENVMAP
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
#endif`,J3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q3=`#ifdef USE_ENVMAP
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
#endif`,eP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rP=`#ifdef USE_GRADIENTMAP
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
}`,sP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lP=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,cP=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,uP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,mP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gP=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,_P=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,vP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CP=`#if defined( USE_POINTS_UV )
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
#endif`,bP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,DP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BP=`#ifdef USE_NORMALMAP
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
#endif`,zP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$P=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iN=`#ifdef USE_SKINNING
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
#endif`,rN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sN=`#ifdef USE_SKINNING
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
#endif`,aN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cN=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uN=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dN=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_N=`uniform sampler2D t2D;
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
}`,vN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EN=`#include <common>
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
}`,MN=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TN=`#define DISTANCE
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
}`,wN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,CN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AN=`uniform float scale;
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
}`,RN=`uniform vec3 diffuse;
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
}`,PN=`#include <common>
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
}`,NN=`uniform vec3 diffuse;
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
}`,LN=`#define LAMBERT
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
}`,DN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,IN=`#define MATCAP
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
}`,UN=`#define MATCAP
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
}`,FN=`#define NORMAL
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
}`,ON=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kN=`#define PHONG
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
}`,BN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,zN=`#define STANDARD
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
}`,VN=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,HN=`#define TOON
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
}`,GN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,jN=`uniform float size;
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
}`,WN=`uniform vec3 diffuse;
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
}`,$N=`#include <common>
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
}`,XN=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,qN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,YN=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:_3,alphahash_pars_fragment:v3,alphamap_fragment:x3,alphamap_pars_fragment:y3,alphatest_fragment:S3,alphatest_pars_fragment:E3,aomap_fragment:M3,aomap_pars_fragment:T3,batching_pars_vertex:w3,batching_vertex:C3,begin_vertex:b3,beginnormal_vertex:A3,bsdfs:R3,iridescence_fragment:P3,bumpmap_pars_fragment:N3,clipping_planes_fragment:L3,clipping_planes_pars_fragment:D3,clipping_planes_pars_vertex:I3,clipping_planes_vertex:U3,color_fragment:F3,color_pars_fragment:O3,color_pars_vertex:k3,color_vertex:B3,common:z3,cube_uv_reflection_fragment:V3,defaultnormal_vertex:H3,displacementmap_pars_vertex:G3,displacementmap_vertex:j3,emissivemap_fragment:W3,emissivemap_pars_fragment:$3,colorspace_fragment:X3,colorspace_pars_fragment:q3,envmap_fragment:Y3,envmap_common_pars_fragment:K3,envmap_pars_fragment:Z3,envmap_pars_vertex:J3,envmap_physical_pars_fragment:cP,envmap_vertex:Q3,fog_vertex:eP,fog_pars_vertex:tP,fog_fragment:nP,fog_pars_fragment:iP,gradientmap_pars_fragment:rP,lightmap_pars_fragment:sP,lights_lambert_fragment:aP,lights_lambert_pars_fragment:oP,lights_pars_begin:lP,lights_toon_fragment:uP,lights_toon_pars_fragment:dP,lights_phong_fragment:fP,lights_phong_pars_fragment:hP,lights_physical_fragment:pP,lights_physical_pars_fragment:mP,lights_fragment_begin:gP,lights_fragment_maps:_P,lights_fragment_end:vP,logdepthbuf_fragment:xP,logdepthbuf_pars_fragment:yP,logdepthbuf_pars_vertex:SP,logdepthbuf_vertex:EP,map_fragment:MP,map_pars_fragment:TP,map_particle_fragment:wP,map_particle_pars_fragment:CP,metalnessmap_fragment:bP,metalnessmap_pars_fragment:AP,morphinstance_vertex:RP,morphcolor_vertex:PP,morphnormal_vertex:NP,morphtarget_pars_vertex:LP,morphtarget_vertex:DP,normal_fragment_begin:IP,normal_fragment_maps:UP,normal_pars_fragment:FP,normal_pars_vertex:OP,normal_vertex:kP,normalmap_pars_fragment:BP,clearcoat_normal_fragment_begin:zP,clearcoat_normal_fragment_maps:VP,clearcoat_pars_fragment:HP,iridescence_pars_fragment:GP,opaque_fragment:jP,packing:WP,premultiplied_alpha_fragment:$P,project_vertex:XP,dithering_fragment:qP,dithering_pars_fragment:YP,roughnessmap_fragment:KP,roughnessmap_pars_fragment:ZP,shadowmap_pars_fragment:JP,shadowmap_pars_vertex:QP,shadowmap_vertex:eN,shadowmask_pars_fragment:tN,skinbase_vertex:nN,skinning_pars_vertex:iN,skinning_vertex:rN,skinnormal_vertex:sN,specularmap_fragment:aN,specularmap_pars_fragment:oN,tonemapping_fragment:lN,tonemapping_pars_fragment:cN,transmission_fragment:uN,transmission_pars_fragment:dN,uv_pars_fragment:fN,uv_pars_vertex:hN,uv_vertex:pN,worldpos_vertex:mN,background_vert:gN,background_frag:_N,backgroundCube_vert:vN,backgroundCube_frag:xN,cube_vert:yN,cube_frag:SN,depth_vert:EN,depth_frag:MN,distance_vert:TN,distance_frag:wN,equirect_vert:CN,equirect_frag:bN,linedashed_vert:AN,linedashed_frag:RN,meshbasic_vert:PN,meshbasic_frag:NN,meshlambert_vert:LN,meshlambert_frag:DN,meshmatcap_vert:IN,meshmatcap_frag:UN,meshnormal_vert:FN,meshnormal_frag:ON,meshphong_vert:kN,meshphong_frag:BN,meshphysical_vert:zN,meshphysical_frag:VN,meshtoon_vert:HN,meshtoon_frag:GN,points_vert:jN,points_frag:WN,shadow_vert:$N,shadow_frag:XN,sprite_vert:qN,sprite_frag:YN},_e={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},pi={basic:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ht(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:cn([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:cn([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:cn([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:cn([_e.common,_e.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:cn([_e.lights,_e.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};pi.physical={uniforms:cn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const El={r:0,b:0,g:0},Vr=new Yi,KN=new kt;function ZN(t,e,n,i,r,s){const a=new ht(0);let o=r===!0?0:1,l,c,f=null,h=0,d=null;function m(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){const E=g.backgroundBlurriness>0;y=e.get(y,E)}return y}function _(g){let y=!1;const E=m(g);E===null?p(a,o):E&&E.isColor&&(p(E,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(g,y){const E=m(y);E&&(E.isCubeTexture||E.mapping===Vc)?(c===void 0&&(c=new Ti(new Ro(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ca(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Vr.copy(y.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(KN.makeRotationFromEuler(Vr)),c.material.toneMapped=it.getTransfer(E.colorSpace)!==ct,(f!==E||h!==E.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ti(new Po(2,2),new li({name:"BackgroundMaterial",uniforms:ca(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=it.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=E,h=E.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,y){g.getRGB(El,ax(t)),n.buffers.color.setClear(El.r,El.g,El.b,y,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,p(a,o)},render:_,addToRenderList:S,dispose:u}}function JN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(P,N,F,j,B){let G=!1;const O=h(P,j,F,N);s!==O&&(s=O,c(s.object)),G=m(P,j,F,B),G&&_(P,j,F,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,E(P,N,F,j),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function h(P,N,F,j){const B=j.wireframe===!0;let G=i[N.id];G===void 0&&(G={},i[N.id]=G);const O=P.isInstancedMesh===!0?P.id:0;let V=G[O];V===void 0&&(V={},G[O]=V);let W=V[F.id];W===void 0&&(W={},V[F.id]=W);let te=W[B];return te===void 0&&(te=d(l()),W[B]=te),te}function d(P){const N=[],F=[],j=[];for(let B=0;B<n;B++)N[B]=0,F[B]=0,j[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:j,object:P,attributes:{},index:null}}function m(P,N,F,j){const B=s.attributes,G=N.attributes;let O=0;const V=F.getAttributes();for(const W in V)if(V[W].location>=0){const ne=B[W];let U=G[W];if(U===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(U=P.instanceColor)),ne===void 0||ne.attribute!==U||U&&ne.data!==U.data)return!0;O++}return s.attributesNum!==O||s.index!==j}function _(P,N,F,j){const B={},G=N.attributes;let O=0;const V=F.getAttributes();for(const W in V)if(V[W].location>=0){let ne=G[W];ne===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const U={};U.attribute=ne,ne&&ne.data&&(U.data=ne.data),B[W]=U,O++}s.attributes=B,s.attributesNum=O,s.index=j}function S(){const P=s.newAttributes;for(let N=0,F=P.length;N<F;N++)P[N]=0}function p(P){u(P,0)}function u(P,N){const F=s.newAttributes,j=s.enabledAttributes,B=s.attributeDivisors;F[P]=1,j[P]===0&&(t.enableVertexAttribArray(P),j[P]=1),B[P]!==N&&(t.vertexAttribDivisor(P,N),B[P]=N)}function g(){const P=s.newAttributes,N=s.enabledAttributes;for(let F=0,j=N.length;F<j;F++)N[F]!==P[F]&&(t.disableVertexAttribArray(F),N[F]=0)}function y(P,N,F,j,B,G,O){O===!0?t.vertexAttribIPointer(P,N,F,B,G):t.vertexAttribPointer(P,N,F,j,B,G)}function E(P,N,F,j){S();const B=j.attributes,G=F.getAttributes(),O=N.defaultAttributeValues;for(const V in G){const W=G[V];if(W.location>=0){let te=B[V];if(te===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){const ne=te.normalized,U=te.itemSize,ae=e.get(te);if(ae===void 0)continue;const Me=ae.buffer,Le=ae.type,q=ae.bytesPerElement,re=Le===t.INT||Le===t.UNSIGNED_INT||te.gpuType===Kh;if(te.isInterleavedBufferAttribute){const oe=te.data,Te=oe.stride,ve=te.offset;if(oe.isInstancedInterleavedBuffer){for(let ge=0;ge<W.locationSize;ge++)u(W.location+ge,oe.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<W.locationSize;ge++)p(W.location+ge);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let ge=0;ge<W.locationSize;ge++)y(W.location+ge,U/W.locationSize,Le,ne,Te*q,(ve+U/W.locationSize*ge)*q,re)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)u(W.location+oe,te.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<W.locationSize;oe++)p(W.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let oe=0;oe<W.locationSize;oe++)y(W.location+oe,U/W.locationSize,Le,ne,U*q,U/W.locationSize*oe*q,re)}}else if(O!==void 0){const ne=O[V];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(W.location,ne);break;case 3:t.vertexAttrib3fv(W.location,ne);break;case 4:t.vertexAttrib4fv(W.location,ne);break;default:t.vertexAttrib1fv(W.location,ne)}}}}g()}function T(){C();for(const P in i){const N=i[P];for(const F in N){const j=N[F];for(const B in j){const G=j[B];for(const O in G)f(G[O].object),delete G[O];delete j[B]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const N=i[P.id];for(const F in N){const j=N[F];for(const B in j){const G=j[B];for(const O in G)f(G[O].object),delete G[O];delete j[B]}}delete i[P.id]}function A(P){for(const N in i){const F=i[N];for(const j in F){const B=F[j];if(B[P.id]===void 0)continue;const G=B[P.id];for(const O in G)f(G[O].object),delete G[O];delete B[P.id]}}}function x(P){for(const N in i){const F=i[N],j=P.isInstancedMesh===!0?P.id:0,B=F[j];if(B!==void 0){for(const G in B){const O=B[G];for(const V in O)f(O[V].object),delete O[V];delete B[G]}delete F[j],Object.keys(F).length===0&&delete i[N]}}}function C(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:p,disableUnusedAttributes:g}}function QN(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function o(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=f[_];n.update(m,i,1)}function l(c,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],f[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let _=0;for(let S=0;S<h;S++)_+=f[S]*d[S];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function eL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==ri&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gi&&!x)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(He("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:E,maxSamples:T,samples:w}}function tL(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Wr,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,y=g*4;let E=u.clippingState||null;l.value=E,E=f(_,d,y,m);for(let T=0;T!==y;++T)E[T]=n[T];u.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,_){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const u=m+S*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let y=0,E=m;y!==S;++y,E+=4)a.copy(h[y]).applyMatrix4(g,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}const vr=4,wg=[.125,.215,.35,.446,.526,.582],Xr=20,nL=256,Na=new ap,Cg=new ht;let Ju=null,Qu=0,ed=0,td=!1;const iL=new K;class bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=iL}=s;Ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,Qu,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===os||e.mapping===aa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Xi,format:ri,colorSpace:la,depthBuffer:!1},r=Ag(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rL(s)),this._blurMaterial=aL(s,e,n),this._ggxMaterial=sL(s,e,n)}return r}_compileMaterial(e){const n=new Ti(new Zi,e);this._renderer.compile(n,Na)}_sceneToCubeUV(e,n,i,r,s){const l=new ni(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Cg),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ti(new Ro,new nx({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let u=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,u=!0):(p.color.copy(Cg),u=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):E===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const T=this._cubeSize;Rs(r,E*T,y>2?T:0,T,T),h.setRenderTarget(r),u&&h.render(S,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===os||e.mapping===aa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Rs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Na)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,m=h*d,{_lodMax:_}=this,S=this._sizeLods[i],p=3*S*(i>_-vr?i-_+vr:0),u=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,Rs(s,p,u,3*S,2*S),r.setRenderTarget(s),r.render(o,Na),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Rs(e,p,u,3*S,2*S),r.setRenderTarget(e),r.render(o,Na)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Xr-1),S=s/_,p=isFinite(s)?1+Math.floor(f*S):Xr;p>Xr&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xr}`);const u=[];let g=0;for(let A=0;A<Xr;++A){const x=A/S,C=Math.exp(-x*x/2);u.push(C),A===0?g+=C:A<p&&(g+=2*C)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const E=this._sizeLods[r],T=3*E*(r>y-vr?r-y+vr:0),w=4*(this._cubeSize-E);Rs(n,T,w,3*E,2*E),l.setRenderTarget(n),l.render(h,Na)}}function rL(t){const e=[],n=[],i=[];let r=t;const s=t-vr+1+wg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-vr?l=wg[a-t+vr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,_=6,S=3,p=2,u=1,g=new Float32Array(S*_*m),y=new Float32Array(p*_*m),E=new Float32Array(u*_*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,x=w>2?0:-1,C=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];g.set(C,S*_*w),y.set(d,p*_*w);const I=[w,w,w,w,w,w];E.set(I,u*_*w)}const T=new Zi;T.setAttribute("position",new Ei(g,S)),T.setAttribute("uv",new Ei(y,p)),T.setAttribute("faceIndex",new Ei(E,u)),i.push(new Ti(T,null)),r>vr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ag(t,e,n){const i=new Si(t,e,n);return i.texture.mapping=Vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sL(t,e,n){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function aL(t,e,n){const i=new Float32Array(Xr),r=new K(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Rg(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Pg(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}class cx extends Si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ro(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:zi});s.uniforms.tEquirect.value=n;const a=new Ti(r,s),o=n.minFilter;return n.minFilter===Zr&&(n.minFilter=an),new d3(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function oL(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===wu||m===Cu)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const S=new cx(_.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,_=m===wu||m===Cu,S=m===os||m===aa;if(_||S){let p=n.get(d);const u=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new bg(t)),p=_?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const g=d.image;return _&&g&&g.height>0||S&&g&&l(g)?(i===null&&(i=new bg(t)),p=_?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function o(d,m){return m===wu?d.mapping=os:m===Cu&&(d.mapping=aa),d}function l(d){let m=0;const _=6;for(let S=0;S<_;S++)d[S]!==void 0&&m++;return m===_}function c(d){const m=d.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function lL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&yc("WebGLRenderer: "+i+" extension not supported."),r}}}function cL(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,_=h.attributes.position;let S=0;if(_===void 0)return;if(m!==null){const g=m.array;S=m.version;for(let y=0,E=g.length;y<E;y+=3){const T=g[y+0],w=g[y+1],A=g[y+2];d.push(T,w,w,A,A,T)}}else{const g=_.array;S=_.version;for(let y=0,E=g.length/3-1;y<E;y+=3){const T=y+0,w=y+1,A=y+2;d.push(T,w,w,A,A,T)}}const p=new(_.count>=65535?tx:ex)(d,1);p.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function uL(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*a),n.update(m,i,1)}function c(d,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,d*a,_),n.update(m,i,_))}function f(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];n.update(p,i,1)}function h(d,m,_,S){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],S[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,S,0,_);let u=0;for(let g=0;g<_;g++)u+=m[g]*S[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function dL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fL(t,e,n){const i=new WeakMap,r=new Lt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let I=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var m=I;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),p===!0&&(E=3);let T=o.attributes.position.count*E,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*h),x=new Zv(A,T,w,h);x.type=gi,x.needsUpdate=!0;const C=E*4;for(let P=0;P<h;P++){const N=u[P],F=g[P],j=y[P],B=T*w*4*P;for(let G=0;G<N.count;G++){const O=G*C;_===!0&&(r.fromBufferAttribute(N,G),A[B+O+0]=r.x,A[B+O+1]=r.y,A[B+O+2]=r.z,A[B+O+3]=0),S===!0&&(r.fromBufferAttribute(F,G),A[B+O+4]=r.x,A[B+O+5]=r.y,A[B+O+6]=r.z,A[B+O+7]=0),p===!0&&(r.fromBufferAttribute(j,G),A[B+O+8]=r.x,A[B+O+9]=r.y,A[B+O+10]=r.z,A[B+O+11]=j.itemSize===4?r.w:1)}}d={count:h,texture:x,size:new pt(T,w)},i.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function hL(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const pL={[Uv]:"LINEAR_TONE_MAPPING",[Fv]:"REINHARD_TONE_MAPPING",[Ov]:"CINEON_TONE_MAPPING",[kv]:"ACES_FILMIC_TONE_MAPPING",[zv]:"AGX_TONE_MAPPING",[Vv]:"NEUTRAL_TONE_MAPPING",[Bv]:"CUSTOM_TONE_MAPPING"};function mL(t,e,n,i,r){const s=new Si(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new Si(e,n,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),o=new Zi;o.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Hi([0,2,0,0,2,0],2));const l=new l3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ti(o,l),f=new ap(-1,1,1,-1,0,1);let h=null,d=null,m=!1,_,S=null,p=[],u=!1;this.setSize=function(g,y){s.setSize(g,y),a.setSize(g,y);for(let E=0;E<p.length;E++){const T=p[E];T.setSize&&T.setSize(g,y)}},this.setEffects=function(g){p=g,u=p.length>0&&p[0].isRenderPass===!0;const y=s.width,E=s.height;for(let T=0;T<p.length;T++){const w=p[T];w.setSize&&w.setSize(y,E)}},this.begin=function(g,y){if(m||g.toneMapping===yi&&p.length===0)return!1;if(S=y,y!==null){const E=y.width,T=y.height;(s.width!==E||s.height!==T)&&this.setSize(E,T)}return u===!1&&g.setRenderTarget(s),_=g.toneMapping,g.toneMapping=yi,!0},this.hasRenderPass=function(){return u},this.end=function(g,y){g.toneMapping=_,m=!0;let E=s,T=a;for(let w=0;w<p.length;w++){const A=p[w];if(A.enabled!==!1&&(A.render(g,T,E,y),A.needsSwap!==!1)){const x=E;E=T,T=x}}if(h!==g.outputColorSpace||d!==g.toneMapping){h=g.outputColorSpace,d=g.toneMapping,l.defines={},it.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");const w=pL[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,g.setRenderTarget(S),g.render(c,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const ux=new hn,Yf=new xo(1,1),dx=new Zv,fx=new k2,hx=new rx,Ng=[],Lg=[],Dg=new Float32Array(16),Ig=new Float32Array(9),Ug=new Float32Array(4);function ga(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ng[r];if(s===void 0&&(s=new Float32Array(r),Ng[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jc(t,e){let n=Lg[e];n===void 0&&(n=new Int32Array(e),Lg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _L(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function vL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function xL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function yL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;Ug.set(i),t.uniformMatrix2fv(this.addr,!1,Ug),Ht(n,i)}}function SL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;Ig.set(i),t.uniformMatrix3fv(this.addr,!1,Ig),Ht(n,i)}}function EL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;Dg.set(i),t.uniformMatrix4fv(this.addr,!1,Dg),Ht(n,i)}}function ML(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function wL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function CL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function bL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function RL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function PL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function NL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Yf.compareFunction=n.isReversedDepthBuffer()?ip:np,s=Yf):s=ux,n.setTexture2D(e||s,r)}function LL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fx,r)}function DL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||hx,r)}function IL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||dx,r)}function UL(t){switch(t){case 5126:return gL;case 35664:return _L;case 35665:return vL;case 35666:return xL;case 35674:return yL;case 35675:return SL;case 35676:return EL;case 5124:case 35670:return ML;case 35667:case 35671:return TL;case 35668:case 35672:return wL;case 35669:case 35673:return CL;case 5125:return bL;case 36294:return AL;case 36295:return RL;case 36296:return PL;case 35678:case 36198:case 36298:case 36306:case 35682:return NL;case 35679:case 36299:case 36307:return LL;case 35680:case 36300:case 36308:case 36293:return DL;case 36289:case 36303:case 36311:case 36292:return IL}}function FL(t,e){t.uniform1fv(this.addr,e)}function OL(t,e){const n=ga(e,this.size,2);t.uniform2fv(this.addr,n)}function kL(t,e){const n=ga(e,this.size,3);t.uniform3fv(this.addr,n)}function BL(t,e){const n=ga(e,this.size,4);t.uniform4fv(this.addr,n)}function zL(t,e){const n=ga(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function VL(t,e){const n=ga(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function HL(t,e){const n=ga(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function GL(t,e){t.uniform1iv(this.addr,e)}function jL(t,e){t.uniform2iv(this.addr,e)}function WL(t,e){t.uniform3iv(this.addr,e)}function $L(t,e){t.uniform4iv(this.addr,e)}function XL(t,e){t.uniform1uiv(this.addr,e)}function qL(t,e){t.uniform2uiv(this.addr,e)}function YL(t,e){t.uniform3uiv(this.addr,e)}function KL(t,e){t.uniform4uiv(this.addr,e)}function ZL(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Yf:a=ux;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function JL(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||fx,s[a])}function QL(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||hx,s[a])}function eD(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||dx,s[a])}function tD(t){switch(t){case 5126:return FL;case 35664:return OL;case 35665:return kL;case 35666:return BL;case 35674:return zL;case 35675:return VL;case 35676:return HL;case 5124:case 35670:return GL;case 35667:case 35671:return jL;case 35668:case 35672:return WL;case 35669:case 35673:return $L;case 5125:return XL;case 36294:return qL;case 36295:return YL;case 36296:return KL;case 35678:case 36198:case 36298:case 36306:case 35682:return ZL;case 35679:case 36299:case 36307:return JL;case 35680:case 36300:case 36308:case 36293:return QL;case 36289:case 36303:case 36311:case 36292:return eD}}class nD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=UL(n.type)}}class iD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tD(n.type)}}class rD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function Fg(t,e){t.seq.push(e),t.map[e.id]=e}function sD(t,e,n){const i=t.name,r=i.length;for(nd.lastIndex=0;;){const s=nd.exec(i),a=nd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Fg(n,c===void 0?new nD(o,t,e):new iD(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new rD(o),Fg(n,h)),n=h}}}class Hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);sD(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Og(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const aD=37297;let oD=0;function lD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const kg=new Xe;function cD(t){it._getMatrix(kg,it.workingColorSpace,t);const e=`mat3( ${kg.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case _c:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Bg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+lD(t.getShaderSource(e),o)}else return s}function uD(t,e){const n=cD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const dD={[Uv]:"Linear",[Fv]:"Reinhard",[Ov]:"Cineon",[kv]:"ACESFilmic",[zv]:"AgX",[Vv]:"Neutral",[Bv]:"Custom"};function fD(t,e){const n=dD[e];return n===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ml=new K;function hD(){it.getLuminanceCoefficients(Ml);const t=Ml.x.toFixed(4),e=Ml.y.toFixed(4),n=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function mD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function za(t){return t!==""}function zg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _D=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kf(t){return t.replace(_D,xD)}const vD=new Map;function xD(t,e){let n=qe[e];if(n===void 0){const i=vD.get(e);if(i!==void 0)n=qe[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kf(n)}const yD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(t){return t.replace(yD,SD)}function SD(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ED={[Ol]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function MD(t){return ED[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TD={[os]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function wD(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":TD[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const CD={[aa]:"ENVMAP_MODE_REFRACTION"};function bD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":CD[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AD={[Iv]:"ENVMAP_BLENDING_MULTIPLY",[g2]:"ENVMAP_BLENDING_MIX",[_2]:"ENVMAP_BLENDING_ADD"};function RD(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":AD[t.combine]||"ENVMAP_BLENDING_NONE"}function PD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ND(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=MD(n),c=wD(n),f=bD(n),h=RD(n),d=PD(n),m=pD(n),_=mD(s),S=r.createProgram();let p,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(za).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(za).join(`
`),u.length>0&&(u+=`
`)):(p=[Gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),u=[Gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?qe.tonemapping_pars_fragment:"",n.toneMapping!==yi?fD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,uD("linearToOutputTexel",n.outputColorSpace),hD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(za).join(`
`)),a=Kf(a),a=zg(a,n),a=Vg(a,n),o=Kf(o),o=zg(o,n),o=Vg(o,n),a=Hg(a),o=Hg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=g+p+a,E=g+u+o,T=Og(r,r.VERTEX_SHADER,y),w=Og(r,r.FRAGMENT_SHADER,E);r.attachShader(S,T),r.attachShader(S,w),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(P){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(S)||"",F=r.getShaderInfoLog(T)||"",j=r.getShaderInfoLog(w)||"",B=N.trim(),G=F.trim(),O=j.trim();let V=!0,W=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,T,w);else{const te=Bg(r,T,"vertex"),ne=Bg(r,w,"fragment");at("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+te+`
`+ne)}else B!==""?He("WebGLProgram: Program Info Log:",B):(G===""||O==="")&&(W=!1);W&&(P.diagnostics={runnable:V,programLog:B,vertexShader:{log:G,prefix:p},fragmentShader:{log:O,prefix:u}})}r.deleteShader(T),r.deleteShader(w),x=new Hl(r,S),C=gD(r,S)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(S,aD)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oD++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=w,this}let LD=0;class DD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ID(e),n.set(e,i)),i}}class ID{constructor(e){this.id=LD++,this.code=e,this.usedTimes=0}}function UD(t,e,n,i,r,s){const a=new Jv,o=new DD,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,C,I,P,N){const F=P.fog,j=N.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||B,G),V=O&&O.mapping===Vc?O.image.height:null,W=m[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const te=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ne=te!==void 0?te.length:0;let U=0;j.morphAttributes.position!==void 0&&(U=1),j.morphAttributes.normal!==void 0&&(U=2),j.morphAttributes.color!==void 0&&(U=3);let ae,Me,Le,q;if(W){const lt=pi[W];ae=lt.vertexShader,Me=lt.fragmentShader}else ae=x.vertexShader,Me=x.fragmentShader,o.update(x),Le=o.getVertexShaderID(x),q=o.getFragmentShaderID(x);const re=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),Te=N.isInstancedMesh===!0,ve=N.isBatchedMesh===!0,ge=!!x.map,Ne=!!x.matcap,ze=!!O,Ze=!!x.aoMap,tt=!!x.lightMap,Y=!!x.bumpMap,fe=!!x.normalMap,L=!!x.displacementMap,$e=!!x.emissiveMap,Ge=!!x.metalnessMap,Qe=!!x.roughnessMap,Ee=x.anisotropy>0,R=x.clearcoat>0,M=x.dispersion>0,z=x.iridescence>0,J=x.sheen>0,se=x.transmission>0,Q=Ee&&!!x.anisotropyMap,Re=R&&!!x.clearcoatMap,he=R&&!!x.clearcoatNormalMap,Ue=R&&!!x.clearcoatRoughnessMap,Be=z&&!!x.iridescenceMap,le=z&&!!x.iridescenceThicknessMap,ue=J&&!!x.sheenColorMap,be=J&&!!x.sheenRoughnessMap,Pe=!!x.specularMap,Se=!!x.specularColorMap,Ye=!!x.specularIntensityMap,k=se&&!!x.transmissionMap,me=se&&!!x.thicknessMap,pe=!!x.gradientMap,Ae=!!x.alphaMap,de=x.alphaTest>0,ee=!!x.alphaHash,De=!!x.extensions;let Ve=yi;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ve=t.toneMapping);const gt={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:Me,defines:x.defines,customVertexShaderID:Le,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ve,batchingColor:ve&&N._colorsTexture!==null,instancing:Te,instancingColor:Te&&N.instanceColor!==null,instancingMorph:Te&&N.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:la,alphaToCoverage:!!x.alphaToCoverage,map:ge,matcap:Ne,envMap:ze,envMapMode:ze&&O.mapping,envMapCubeUVHeight:V,aoMap:Ze,lightMap:tt,bumpMap:Y,normalMap:fe,displacementMap:L,emissiveMap:$e,normalMapObjectSpace:fe&&x.normalMapType===S2,normalMapTangentSpace:fe&&x.normalMapType===y2,metalnessMap:Ge,roughnessMap:Qe,anisotropy:Ee,anisotropyMap:Q,clearcoat:R,clearcoatMap:Re,clearcoatNormalMap:he,clearcoatRoughnessMap:Ue,dispersion:M,iridescence:z,iridescenceMap:Be,iridescenceThicknessMap:le,sheen:J,sheenColorMap:ue,sheenRoughnessMap:be,specularMap:Pe,specularColorMap:Se,specularIntensityMap:Ye,transmission:se,transmissionMap:k,thicknessMap:me,gradientMap:pe,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:Ae,alphaTest:de,alphaHash:ee,combine:x.combine,mapUv:ge&&_(x.map.channel),aoMapUv:Ze&&_(x.aoMap.channel),lightMapUv:tt&&_(x.lightMap.channel),bumpMapUv:Y&&_(x.bumpMap.channel),normalMapUv:fe&&_(x.normalMap.channel),displacementMapUv:L&&_(x.displacementMap.channel),emissiveMapUv:$e&&_(x.emissiveMap.channel),metalnessMapUv:Ge&&_(x.metalnessMap.channel),roughnessMapUv:Qe&&_(x.roughnessMap.channel),anisotropyMapUv:Q&&_(x.anisotropyMap.channel),clearcoatMapUv:Re&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(x.sheenRoughnessMap.channel),specularMapUv:Pe&&_(x.specularMap.channel),specularColorMapUv:Se&&_(x.specularColorMap.channel),specularIntensityMapUv:Ye&&_(x.specularIntensityMap.channel),transmissionMapUv:k&&_(x.transmissionMap.channel),thicknessMapUv:me&&_(x.thicknessMap.channel),alphaMapUv:Ae&&_(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(fe||Ee),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(ge||Ae),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||j.attributes.normal===void 0&&fe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:U,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ge&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:$e&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:De&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&x.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function p(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)C.push(I),C.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(u(C,x),g(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function u(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function g(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){const C=m[x.type];let I;if(C){const P=pi[C];I=s3.clone(P.uniforms)}else I=x.uniforms;return I}function E(x,C){let I=f.get(C);return I!==void 0?++I.usedTimes:(I=new ND(t,C,x,r),c.push(I),f.set(C,I)),I}function T(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:A}}function FD(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function OD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function jg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,_,S,p,u){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:m,material:_,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:p,group:u},t[e]=g):(g.id=d.id,g.object=d,g.geometry=m,g.material=_,g.materialVariant=a(d),g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=p,g.group=u),e++,g}function l(d,m,_,S,p,u){const g=o(d,m,_,S,p,u);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):n.push(g)}function c(d,m,_,S,p,u){const g=o(d,m,_,S,p,u);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):n.unshift(g)}function f(d,m){n.length>1&&n.sort(d||OD),i.length>1&&i.sort(m||jg),r.length>1&&r.sort(m||jg)}function h(){for(let d=e,m=t.length;d<m;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function kD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Wg,t.set(i,[a])):r>=s.length?(a=new Wg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function BD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new ht};break;case"SpotLight":n={position:new K,direction:new K,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function zD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let VD=0;function HD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function GD(t){const e=new BD,n=zD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new kt,a=new kt;function o(c){let f=0,h=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,_=0,S=0,p=0,u=0,g=0,y=0,E=0,T=0,w=0,A=0;c.sort(HD);for(let C=0,I=c.length;C<I;C++){const P=c[C],N=P.color,F=P.intensity,j=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===oa?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=N.r*F,h+=N.g*F,d+=N.b*F;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],F);A++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,V=n.get(P);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=P.shadow.matrix,g++}i.directional[m]=G,m++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(F),G.distance=j,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[S]=G;const O=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,O.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[S]=O.matrix,P.castShadow){const V=n.get(P);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,i.spotShadow[S]=V,i.spotShadowMap[S]=B,E++}S++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(N).multiplyScalar(F),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=G,p++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const O=P.shadow,V=n.get(P);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,V.shadowCameraNear=O.camera.near,V.shadowCameraFar=O.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=P.shadow.matrix,y++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(F),G.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[u]=G,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==S||x.rectAreaLength!==p||x.hemiLength!==u||x.numDirectionalShadows!==g||x.numPointShadows!==y||x.numSpotShadows!==E||x.numSpotMaps!==T||x.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,x.directionalLength=m,x.pointLength=_,x.spotLength=S,x.rectAreaLength=p,x.hemiLength=u,x.numDirectionalShadows=g,x.numPointShadows=y,x.numSpotShadows=E,x.numSpotMaps=T,x.numLightProbes=A,i.version=VD++)}function l(c,f){let h=0,d=0,m=0,_=0,S=0;const p=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const y=c[u];if(y.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(y.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:i}}function $g(t){const e=new GD(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function jD(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new $g(t),e.set(r,[o])):s>=a.length?(o=new $g(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const WD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$D=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XD=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],qD=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Xg=new kt,La=new K,id=new K;function YD(t,e,n){let i=new ix;const r=new pt,s=new pt,a=new Lt,o=new c3,l=new u3,c={},f=n.maxTextureSize,h={[Pr]:Tn,[Tn]:Pr,[Ui]:Ui},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:WD,fragmentShader:$D}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Zi;_.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ti(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let u=this.type;this.render=function(w,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===ZR&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ol);const C=t.getRenderTarget(),I=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),N=t.state;N.setBlending(zi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=u!==this.type;F&&A.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(B=>B.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,B=w.length;j<B;j++){const G=w[j],O=G.shadow;if(O===void 0){He("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const V=O.getFrameExtents();r.multiply(V),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,O.mapSize.y=s.y));const W=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ba){if(G.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Si(r.x,r.y,{format:oa,type:Xi,minFilter:an,magFilter:an,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new xo(r.x,r.y,gi),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=qi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt}else G.isPointLight?(O.map=new cx(r.x),O.map.depthTexture=new i3(r.x,Mi)):(O.map=new Si(r.x,r.y),O.map.depthTexture=new xo(r.x,r.y,Mi)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=qi,this.type===Ol?(O.map.depthTexture.compareFunction=W?ip:np,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt);O.camera.updateProjectionMatrix()}const te=O.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<te;ne++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(O.map),t.clear());const U=O.getViewport(ne);a.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),N.viewport(a)}if(G.isPointLight){const U=O.camera,ae=O.matrix,Me=G.distance||U.far;Me!==U.far&&(U.far=Me,U.updateProjectionMatrix()),La.setFromMatrixPosition(G.matrixWorld),U.position.copy(La),id.copy(U.position),id.add(XD[ne]),U.up.copy(qD[ne]),U.lookAt(id),U.updateMatrixWorld(),ae.makeTranslation(-La.x,-La.y,-La.z),Xg.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Xg,U.coordinateSystem,U.reversedDepth)}else O.updateMatrices(G);i=O.getFrustum(),E(A,x,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===Ba&&g(O,x),O.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(C,I,P)};function g(w,A){const x=e.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Si(r.x,r.y,{format:oa,type:Xi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,x,d,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,x,m,S,null)}function y(w,A,x,C){let I=null;const P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)I=P;else if(I=x.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=I.uuid,F=A.uuid;let j=c[N];j===void 0&&(j={},c[N]=j);let B=j[F];B===void 0&&(B=I.clone(),j[F]=B,A.addEventListener("dispose",T)),I=B}if(I.visible=A.visible,I.wireframe=A.wireframe,C===Ba?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:h[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const N=t.properties.get(I);N.light=x}return I}function E(w,A,x,C,I){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Ba)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const F=e.update(w),j=w.material;if(Array.isArray(j)){const B=F.groups;for(let G=0,O=B.length;G<O;G++){const V=B[G],W=j[V.materialIndex];if(W&&W.visible){const te=y(w,W,C,I);w.onBeforeShadow(t,w,A,x,F,te,V),t.renderBufferDirect(x,null,F,te,w,V),w.onAfterShadow(t,w,A,x,F,te,V)}}}else if(j.visible){const B=y(w,j,C,I);w.onBeforeShadow(t,w,A,x,F,B,null),t.renderBufferDirect(x,null,F,B,w,null),w.onAfterShadow(t,w,A,x,F,B,null)}}const N=w.children;for(let F=0,j=N.length;F<j;F++)E(N[F],A,x,C,I)}function T(w){w.target.removeEventListener("dispose",T);for(const x in c){const C=c[x],I=w.target.uuid;I in C&&(C[I].dispose(),delete C[I])}}}function KD(t,e){function n(){let k=!1;const me=new Lt;let pe=null;const Ae=new Lt(0,0,0,0);return{setMask:function(de){pe!==de&&!k&&(t.colorMask(de,de,de,de),pe=de)},setLocked:function(de){k=de},setClear:function(de,ee,De,Ve,gt){gt===!0&&(de*=Ve,ee*=Ve,De*=Ve),me.set(de,ee,De,Ve),Ae.equals(me)===!1&&(t.clearColor(de,ee,De,Ve),Ae.copy(me))},reset:function(){k=!1,pe=null,Ae.set(-1,0,0,0)}}}function i(){let k=!1,me=!1,pe=null,Ae=null,de=null;return{setReversed:function(ee){if(me!==ee){const De=e.get("EXT_clip_control");ee?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),me=ee;const Ve=de;de=null,this.setClear(Ve)}},getReversed:function(){return me},setTest:function(ee){ee?re(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(ee){pe!==ee&&!k&&(t.depthMask(ee),pe=ee)},setFunc:function(ee){if(me&&(ee=N2[ee]),Ae!==ee){switch(ee){case of:t.depthFunc(t.NEVER);break;case lf:t.depthFunc(t.ALWAYS);break;case cf:t.depthFunc(t.LESS);break;case sa:t.depthFunc(t.LEQUAL);break;case uf:t.depthFunc(t.EQUAL);break;case df:t.depthFunc(t.GEQUAL);break;case ff:t.depthFunc(t.GREATER);break;case hf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ae=ee}},setLocked:function(ee){k=ee},setClear:function(ee){de!==ee&&(de=ee,me&&(ee=1-ee),t.clearDepth(ee))},reset:function(){k=!1,pe=null,Ae=null,de=null,me=!1}}}function r(){let k=!1,me=null,pe=null,Ae=null,de=null,ee=null,De=null,Ve=null,gt=null;return{setTest:function(lt){k||(lt?re(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(lt){me!==lt&&!k&&(t.stencilMask(lt),me=lt)},setFunc:function(lt,wi,Ci){(pe!==lt||Ae!==wi||de!==Ci)&&(t.stencilFunc(lt,wi,Ci),pe=lt,Ae=wi,de=Ci)},setOp:function(lt,wi,Ci){(ee!==lt||De!==wi||Ve!==Ci)&&(t.stencilOp(lt,wi,Ci),ee=lt,De=wi,Ve=Ci)},setLocked:function(lt){k=lt},setClear:function(lt){gt!==lt&&(t.clearStencil(lt),gt=lt)},reset:function(){k=!1,me=null,pe=null,Ae=null,de=null,ee=null,De=null,Ve=null,gt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,m=[],_=null,S=!1,p=null,u=null,g=null,y=null,E=null,T=null,w=null,A=new ht(0,0,0),x=0,C=!1,I=null,P=null,N=null,F=null,j=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=O>=2);let W=null,te={};const ne=t.getParameter(t.SCISSOR_BOX),U=t.getParameter(t.VIEWPORT),ae=new Lt().fromArray(ne),Me=new Lt().fromArray(U);function Le(k,me,pe,Ae){const de=new Uint8Array(4),ee=t.createTexture();t.bindTexture(k,ee),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let De=0;De<pe;De++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,Ae,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(me+De,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ee}const q={};q[t.TEXTURE_2D]=Le(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=Le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=Le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=Le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(sa),Y(!1),fe(Qm),re(t.CULL_FACE),Ze(zi);function re(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function oe(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function Te(k,me){return h[k]!==me?(t.bindFramebuffer(k,me),h[k]=me,k===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=me),k===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=me),!0):!1}function ve(k,me){let pe=m,Ae=!1;if(k){pe=d.get(me),pe===void 0&&(pe=[],d.set(me,pe));const de=k.textures;if(pe.length!==de.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,De=de.length;ee<De;ee++)pe[ee]=t.COLOR_ATTACHMENT0+ee;pe.length=de.length,Ae=!0}}else pe[0]!==t.BACK&&(pe[0]=t.BACK,Ae=!0);Ae&&t.drawBuffers(pe)}function ge(k){return _!==k?(t.useProgram(k),_=k,!0):!1}const Ne={[$r]:t.FUNC_ADD,[QR]:t.FUNC_SUBTRACT,[e2]:t.FUNC_REVERSE_SUBTRACT};Ne[t2]=t.MIN,Ne[n2]=t.MAX;const ze={[i2]:t.ZERO,[r2]:t.ONE,[s2]:t.SRC_COLOR,[sf]:t.SRC_ALPHA,[d2]:t.SRC_ALPHA_SATURATE,[c2]:t.DST_COLOR,[o2]:t.DST_ALPHA,[a2]:t.ONE_MINUS_SRC_COLOR,[af]:t.ONE_MINUS_SRC_ALPHA,[u2]:t.ONE_MINUS_DST_COLOR,[l2]:t.ONE_MINUS_DST_ALPHA,[f2]:t.CONSTANT_COLOR,[h2]:t.ONE_MINUS_CONSTANT_COLOR,[p2]:t.CONSTANT_ALPHA,[m2]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(k,me,pe,Ae,de,ee,De,Ve,gt,lt){if(k===zi){S===!0&&(oe(t.BLEND),S=!1);return}if(S===!1&&(re(t.BLEND),S=!0),k!==JR){if(k!==p||lt!==C){if((u!==$r||E!==$r)&&(t.blendEquation(t.FUNC_ADD),u=$r,E=$r),lt)switch(k){case Ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eg:t.blendFunc(t.ONE,t.ONE);break;case tg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ng:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",k);break}else switch(k){case Ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case tg:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ng:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",k);break}g=null,y=null,T=null,w=null,A.set(0,0,0),x=0,p=k,C=lt}return}de=de||me,ee=ee||pe,De=De||Ae,(me!==u||de!==E)&&(t.blendEquationSeparate(Ne[me],Ne[de]),u=me,E=de),(pe!==g||Ae!==y||ee!==T||De!==w)&&(t.blendFuncSeparate(ze[pe],ze[Ae],ze[ee],ze[De]),g=pe,y=Ae,T=ee,w=De),(Ve.equals(A)===!1||gt!==x)&&(t.blendColor(Ve.r,Ve.g,Ve.b,gt),A.copy(Ve),x=gt),p=k,C=!1}function tt(k,me){k.side===Ui?oe(t.CULL_FACE):re(t.CULL_FACE);let pe=k.side===Tn;me&&(pe=!pe),Y(pe),k.blending===Ys&&k.transparent===!1?Ze(zi):Ze(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const Ae=k.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),$e(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Y(k){I!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),I=k)}function fe(k){k!==YR?(re(t.CULL_FACE),k!==P&&(k===Qm?t.cullFace(t.BACK):k===KR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),P=k}function L(k){k!==N&&(G&&t.lineWidth(k),N=k)}function $e(k,me,pe){k?(re(t.POLYGON_OFFSET_FILL),(F!==me||j!==pe)&&(F=me,j=pe,a.getReversed()&&(me=-me),t.polygonOffset(me,pe))):oe(t.POLYGON_OFFSET_FILL)}function Ge(k){k?re(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function Qe(k){k===void 0&&(k=t.TEXTURE0+B-1),W!==k&&(t.activeTexture(k),W=k)}function Ee(k,me,pe){pe===void 0&&(W===null?pe=t.TEXTURE0+B-1:pe=W);let Ae=te[pe];Ae===void 0&&(Ae={type:void 0,texture:void 0},te[pe]=Ae),(Ae.type!==k||Ae.texture!==me)&&(W!==pe&&(t.activeTexture(pe),W=pe),t.bindTexture(k,me||q[k]),Ae.type=k,Ae.texture=me)}function R(){const k=te[W];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function z(){try{t.compressedTexImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function J(){try{t.texSubImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function se(){try{t.texSubImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function he(){try{t.texStorage2D(...arguments)}catch(k){at("WebGLState:",k)}}function Ue(){try{t.texStorage3D(...arguments)}catch(k){at("WebGLState:",k)}}function Be(){try{t.texImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function le(){try{t.texImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function ue(k){ae.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ae.copy(k))}function be(k){Me.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Me.copy(k))}function Pe(k,me){let pe=c.get(me);pe===void 0&&(pe=new WeakMap,c.set(me,pe));let Ae=pe.get(k);Ae===void 0&&(Ae=t.getUniformBlockIndex(me,k.name),pe.set(k,Ae))}function Se(k,me){const Ae=c.get(me).get(k);l.get(me)!==Ae&&(t.uniformBlockBinding(me,Ae,k.__bindingPointIndex),l.set(me,Ae))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},W=null,te={},h={},d=new WeakMap,m=[],_=null,S=!1,p=null,u=null,g=null,y=null,E=null,T=null,w=null,A=new ht(0,0,0),x=0,C=!1,I=null,P=null,N=null,F=null,j=null,ae.set(0,0,t.canvas.width,t.canvas.height),Me.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:oe,bindFramebuffer:Te,drawBuffers:ve,useProgram:ge,setBlending:Ze,setMaterial:tt,setFlipSided:Y,setCullFace:fe,setLineWidth:L,setPolygonOffset:$e,setScissorTest:Ge,activeTexture:Qe,bindTexture:Ee,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:Be,texImage3D:le,updateUBOMapping:Pe,uniformBlockBinding:Se,texStorage2D:he,texStorage3D:Ue,texSubImage2D:J,texSubImage3D:se,compressedTexSubImage2D:Q,compressedTexSubImage3D:Re,scissor:ue,viewport:be,reset:Ye}}function ZD(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return m?new OffscreenCanvas(R,M):xc("canvas")}function S(R,M,z){let J=1;const se=Ee(R);if((se.width>z||se.height>z)&&(J=z/Math.max(se.width,se.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*se.width),Re=Math.floor(J*se.height);h===void 0&&(h=_(Q,Re));const he=M?_(Q,Re):h;return he.width=Q,he.height=Re,he.getContext("2d").drawImage(R,0,0,Q,Re),He("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Re+")."),he}else return"data"in R&&He("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function p(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,M,z,J,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=M;if(M===t.RED&&(z===t.FLOAT&&(Q=t.R32F),z===t.HALF_FLOAT&&(Q=t.R16F),z===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.R8UI),z===t.UNSIGNED_SHORT&&(Q=t.R16UI),z===t.UNSIGNED_INT&&(Q=t.R32UI),z===t.BYTE&&(Q=t.R8I),z===t.SHORT&&(Q=t.R16I),z===t.INT&&(Q=t.R32I)),M===t.RG&&(z===t.FLOAT&&(Q=t.RG32F),z===t.HALF_FLOAT&&(Q=t.RG16F),z===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RG8UI),z===t.UNSIGNED_SHORT&&(Q=t.RG16UI),z===t.UNSIGNED_INT&&(Q=t.RG32UI),z===t.BYTE&&(Q=t.RG8I),z===t.SHORT&&(Q=t.RG16I),z===t.INT&&(Q=t.RG32I)),M===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),z===t.UNSIGNED_INT&&(Q=t.RGB32UI),z===t.BYTE&&(Q=t.RGB8I),z===t.SHORT&&(Q=t.RGB16I),z===t.INT&&(Q=t.RGB32I)),M===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),z===t.UNSIGNED_INT&&(Q=t.RGBA32UI),z===t.BYTE&&(Q=t.RGBA8I),z===t.SHORT&&(Q=t.RGBA16I),z===t.INT&&(Q=t.RGBA32I)),M===t.RGB&&(z===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),M===t.RGBA){const Re=se?_c:it.getTransfer(J);z===t.FLOAT&&(Q=t.RGBA32F),z===t.HALF_FLOAT&&(Q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Q=Re===ct?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(R,M){let z;return R?M===null||M===Mi||M===vo?z=t.DEPTH24_STENCIL8:M===gi?z=t.DEPTH32F_STENCIL8:M===_o&&(z=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mi||M===vo?z=t.DEPTH_COMPONENT24:M===gi?z=t.DEPTH_COMPONENT32F:M===_o&&(z=t.DEPTH_COMPONENT16),z}function T(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){const M=R.target;M.removeEventListener("dispose",w),x(M),M.isVideoTexture&&f.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),I(M)}function x(R){const M=i.get(R);if(M.__webglInit===void 0)return;const z=R.source,J=d.get(z);if(J){const se=J[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(R),Object.keys(J).length===0&&d.delete(z)}i.remove(R)}function C(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const z=R.source,J=d.get(z);delete J[M.__cacheKey],a.memory.textures--}function I(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let se=0;se<M.__webglFramebuffer[J].length;se++)t.deleteFramebuffer(M.__webglFramebuffer[J][se]);else t.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)t.deleteFramebuffer(M.__webglFramebuffer[J]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=R.textures;for(let J=0,se=z.length;J<se;J++){const Q=i.get(z[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(z[J])}i.remove(R)}let P=0;function N(){P=0}function F(){const R=P;return R>=r.maxTextures&&He("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function j(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function B(R,M){const z=i.get(R);if(R.isVideoTexture&&Ge(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const J=R.image;if(J===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,R,M);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function G(R,M){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){q(z,R,M);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function O(R,M){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){q(z,R,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function V(R,M){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){re(z,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const W={[pf]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[mf]:t.MIRRORED_REPEAT},te={[Yt]:t.NEAREST,[v2]:t.NEAREST_MIPMAP_NEAREST,[tl]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[bu]:t.LINEAR_MIPMAP_NEAREST,[Zr]:t.LINEAR_MIPMAP_LINEAR},ne={[E2]:t.NEVER,[b2]:t.ALWAYS,[M2]:t.LESS,[np]:t.LEQUAL,[T2]:t.EQUAL,[ip]:t.GEQUAL,[w2]:t.GREATER,[C2]:t.NOTEQUAL};function U(R,M){if(M.type===gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===bu||M.magFilter===tl||M.magFilter===Zr||M.minFilter===an||M.minFilter===bu||M.minFilter===tl||M.minFilter===Zr)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,W[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,W[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,W[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,te[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Yt||M.minFilter!==tl&&M.minFilter!==Zr||M.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ae(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const J=M.source;let se=d.get(J);se===void 0&&(se={},d.set(J,se));const Q=j(M);if(Q!==R.__cacheKey){se[Q]===void 0&&(se[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),se[Q].usedTimes++;const Re=se[R.__cacheKey];Re!==void 0&&(se[R.__cacheKey].usedTimes--,Re.usedTimes===0&&C(M)),R.__cacheKey=Q,R.__webglTexture=se[Q].texture}return z}function Me(R,M,z){return Math.floor(Math.floor(R/z)/M)}function Le(R,M,z,J){const Q=R.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,z,J,M.data);else{Q.sort((le,ue)=>le.start-ue.start);let Re=0;for(let le=1;le<Q.length;le++){const ue=Q[Re],be=Q[le],Pe=ue.start+ue.count,Se=Me(be.start,M.width,4),Ye=Me(ue.start,M.width,4);be.start<=Pe+1&&Se===Ye&&Me(be.start+be.count-1,M.width,4)===Se?ue.count=Math.max(ue.count,be.start+be.count-ue.start):(++Re,Q[Re]=be)}Q.length=Re+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Ue=t.getParameter(t.UNPACK_SKIP_PIXELS),Be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let le=0,ue=Q.length;le<ue;le++){const be=Q[le],Pe=Math.floor(be.start/4),Se=Math.ceil(be.count/4),Ye=Pe%M.width,k=Math.floor(Pe/M.width),me=Se,pe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,Ye,k,me,pe,z,J,M.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(t.UNPACK_SKIP_ROWS,Be)}}function q(R,M,z){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const se=ae(R,M),Q=M.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+z);const Re=i.get(Q);if(Q.version!==Re.__version||se===!0){n.activeTexture(t.TEXTURE0+z);const he=it.getPrimaries(it.workingColorSpace),Ue=M.colorSpace===pr?null:it.getPrimaries(M.colorSpace),Be=M.colorSpace===pr||he===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let le=S(M.image,!1,r.maxTextureSize);le=Qe(M,le);const ue=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let Pe=y(M.internalFormat,ue,be,M.colorSpace,M.isVideoTexture);U(J,M);let Se;const Ye=M.mipmaps,k=M.isVideoTexture!==!0,me=Re.__version===void 0||se===!0,pe=Q.dataReady,Ae=T(M,le);if(M.isDepthTexture)Pe=E(M.format===Jr,M.type),me&&(k?n.texStorage2D(t.TEXTURE_2D,1,Pe,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Pe,le.width,le.height,0,ue,be,null));else if(M.isDataTexture)if(Ye.length>0){k&&me&&n.texStorage2D(t.TEXTURE_2D,Ae,Pe,Ye[0].width,Ye[0].height);for(let de=0,ee=Ye.length;de<ee;de++)Se=Ye[de],k?pe&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,Se.width,Se.height,ue,be,Se.data):n.texImage2D(t.TEXTURE_2D,de,Pe,Se.width,Se.height,0,ue,be,Se.data);M.generateMipmaps=!1}else k?(me&&n.texStorage2D(t.TEXTURE_2D,Ae,Pe,le.width,le.height),pe&&Le(M,le,ue,be)):n.texImage2D(t.TEXTURE_2D,0,Pe,le.width,le.height,0,ue,be,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,Pe,Ye[0].width,Ye[0].height,le.depth);for(let de=0,ee=Ye.length;de<ee;de++)if(Se=Ye[de],M.format!==ri)if(ue!==null)if(k){if(pe)if(M.layerUpdates.size>0){const De=Tg(Se.width,Se.height,M.format,M.type);for(const Ve of M.layerUpdates){const gt=Se.data.subarray(Ve*De/Se.data.BYTES_PER_ELEMENT,(Ve+1)*De/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,Ve,Se.width,Se.height,1,ue,gt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,le.depth,ue,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Pe,Se.width,Se.height,le.depth,0,Se.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,le.depth,ue,be,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Pe,Se.width,Se.height,le.depth,0,ue,be,Se.data)}else{k&&me&&n.texStorage2D(t.TEXTURE_2D,Ae,Pe,Ye[0].width,Ye[0].height);for(let de=0,ee=Ye.length;de<ee;de++)Se=Ye[de],M.format!==ri?ue!==null?k?pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,Se.width,Se.height,ue,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Pe,Se.width,Se.height,0,Se.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?pe&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,Se.width,Se.height,ue,be,Se.data):n.texImage2D(t.TEXTURE_2D,de,Pe,Se.width,Se.height,0,ue,be,Se.data)}else if(M.isDataArrayTexture)if(k){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,Pe,le.width,le.height,le.depth),pe)if(M.layerUpdates.size>0){const de=Tg(le.width,le.height,M.format,M.type);for(const ee of M.layerUpdates){const De=le.data.subarray(ee*de/le.data.BYTES_PER_ELEMENT,(ee+1)*de/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,le.width,le.height,1,ue,be,De)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ue,be,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,le.width,le.height,le.depth,0,ue,be,le.data);else if(M.isData3DTexture)k?(me&&n.texStorage3D(t.TEXTURE_3D,Ae,Pe,le.width,le.height,le.depth),pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ue,be,le.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,le.width,le.height,le.depth,0,ue,be,le.data);else if(M.isFramebufferTexture){if(me)if(k)n.texStorage2D(t.TEXTURE_2D,Ae,Pe,le.width,le.height);else{let de=le.width,ee=le.height;for(let De=0;De<Ae;De++)n.texImage2D(t.TEXTURE_2D,De,Pe,de,ee,0,ue,be,null),de>>=1,ee>>=1}}else if(Ye.length>0){if(k&&me){const de=Ee(Ye[0]);n.texStorage2D(t.TEXTURE_2D,Ae,Pe,de.width,de.height)}for(let de=0,ee=Ye.length;de<ee;de++)Se=Ye[de],k?pe&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ue,be,Se):n.texImage2D(t.TEXTURE_2D,de,Pe,ue,be,Se);M.generateMipmaps=!1}else if(k){if(me){const de=Ee(le);n.texStorage2D(t.TEXTURE_2D,Ae,Pe,de.width,de.height)}pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,be,le)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ue,be,le);p(M)&&u(J),Re.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,z){if(M.image.length!==6)return;const J=ae(R,M),se=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const Q=i.get(se);if(se.version!==Q.__version||J===!0){n.activeTexture(t.TEXTURE0+z);const Re=it.getPrimaries(it.workingColorSpace),he=M.colorSpace===pr?null:it.getPrimaries(M.colorSpace),Ue=M.colorSpace===pr||Re===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Be=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!Be&&!le?ue[ee]=S(M.image[ee],!0,r.maxCubemapSize):ue[ee]=le?M.image[ee].image:M.image[ee],ue[ee]=Qe(M,ue[ee]);const be=ue[0],Pe=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),Ye=y(M.internalFormat,Pe,Se,M.colorSpace),k=M.isVideoTexture!==!0,me=Q.__version===void 0||J===!0,pe=se.dataReady;let Ae=T(M,be);U(t.TEXTURE_CUBE_MAP,M);let de;if(Be){k&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Ye,be.width,be.height);for(let ee=0;ee<6;ee++){de=ue[ee].mipmaps;for(let De=0;De<de.length;De++){const Ve=de[De];M.format!==ri?Pe!==null?k?pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,Ve.width,Ve.height,Pe,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,Ye,Ve.width,Ve.height,0,Ve.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,Ve.width,Ve.height,Pe,Se,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,Ye,Ve.width,Ve.height,0,Pe,Se,Ve.data)}}}else{if(de=M.mipmaps,k&&me){de.length>0&&Ae++;const ee=Ee(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(le){k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,Pe,Se,ue[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,ue[ee].width,ue[ee].height,0,Pe,Se,ue[ee].data);for(let De=0;De<de.length;De++){const gt=de[De].image[ee].image;k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,gt.width,gt.height,Pe,Se,gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,Ye,gt.width,gt.height,0,Pe,Se,gt.data)}}else{k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,Se,ue[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Pe,Se,ue[ee]);for(let De=0;De<de.length;De++){const Ve=de[De];k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,Pe,Se,Ve.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,Ye,Pe,Se,Ve.image[ee])}}}p(M)&&u(t.TEXTURE_CUBE_MAP),Q.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function oe(R,M,z,J,se,Q){const Re=s.convert(z.format,z.colorSpace),he=s.convert(z.type),Ue=y(z.internalFormat,Re,he,z.colorSpace),Be=i.get(M),le=i.get(z);if(le.__renderTarget=M,!Be.__hasExternalTextures){const ue=Math.max(1,M.width>>Q),be=Math.max(1,M.height>>Q);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,Q,Ue,ue,be,M.depth,0,Re,he,null):n.texImage2D(se,Q,Ue,ue,be,0,Re,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),$e(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,se,le.__webglTexture,0,L(M)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,se,le.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(R,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const J=M.depthTexture,se=J&&J.isDepthTexture?J.type:null,Q=E(M.stencilBuffer,se),Re=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;$e(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(M),Q,M.width,M.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(M),Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,R)}else{const J=M.textures;for(let se=0;se<J.length;se++){const Q=J[se],Re=s.convert(Q.format,Q.colorSpace),he=s.convert(Q.type),Ue=y(Q.internalFormat,Re,he,Q.colorSpace);$e(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(M),Ue,M.width,M.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(M),Ue,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ue,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(R,M,z){const J=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(M.depthTexture);if(se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J){if(se.__webglInit===void 0&&(se.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),U(t.TEXTURE_CUBE_MAP,M.depthTexture);const Be=s.convert(M.depthTexture.format),le=s.convert(M.depthTexture.type);let ue;M.depthTexture.format===qi?ue=t.DEPTH_COMPONENT24:M.depthTexture.format===Jr&&(ue=t.DEPTH24_STENCIL8);for(let be=0;be<6;be++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,M.width,M.height,0,Be,le,null)}}else B(M.depthTexture,0);const Q=se.__webglTexture,Re=L(M),he=J?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,Ue=M.depthTexture.format===Jr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===qi)$e(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ue,he,Q,0,Re):t.framebufferTexture2D(t.FRAMEBUFFER,Ue,he,Q,0);else if(M.depthTexture.format===Jr)$e(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ue,he,Q,0,Re):t.framebufferTexture2D(t.FRAMEBUFFER,Ue,he,Q,0);else throw new Error("Unknown depthTexture format")}function ge(R){const M=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",se)};J.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=J}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let J=0;J<6;J++)ve(M.__webglFramebuffer[J],R,J);else{const J=R.texture.mipmaps;J&&J.length>0?ve(M.__webglFramebuffer[0],R,0):ve(M.__webglFramebuffer,R,0)}else if(z){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=t.createRenderbuffer(),Te(M.__webglDepthbuffer[J],R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Q)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Te(M.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(R,M,z){const J=i.get(R);M!==void 0&&oe(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ge(R)}function ze(R){const M=R.texture,z=i.get(R),J=i.get(M);R.addEventListener("dispose",A);const se=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Re=se.length>1;if(Re||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,a.memory.textures++),Q){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let Ue=0;Ue<M.mipmaps.length;Ue++)z.__webglFramebuffer[he][Ue]=t.createFramebuffer()}else z.__webglFramebuffer[he]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)z.__webglFramebuffer[he]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Re)for(let he=0,Ue=se.length;he<Ue;he++){const Be=i.get(se[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&$e(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const Ue=se[he];z.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[he]);const Be=s.convert(Ue.format,Ue.colorSpace),le=s.convert(Ue.type),ue=y(Ue.internalFormat,Be,le,Ue.colorSpace,R.isXRRenderTarget===!0),be=L(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ue,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,z.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),U(t.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)oe(z.__webglFramebuffer[he][Ue],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue);else oe(z.__webglFramebuffer[he],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let he=0,Ue=se.length;he<Ue;he++){const Be=se[he],le=i.get(Be);let ue=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,le.__webglTexture),U(ue,Be),oe(z.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+he,ue,0),p(Be)&&u(ue)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,J.__webglTexture),U(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)oe(z.__webglFramebuffer[Ue],R,M,t.COLOR_ATTACHMENT0,he,Ue);else oe(z.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,he,0);p(M)&&u(he),n.unbindTexture()}R.depthBuffer&&ge(R)}function Ze(R){const M=R.textures;for(let z=0,J=M.length;z<J;z++){const se=M[z];if(p(se)){const Q=g(R),Re=i.get(se).__webglTexture;n.bindTexture(Q,Re),u(Q),n.unbindTexture()}}}const tt=[],Y=[];function fe(R){if(R.samples>0){if($e(R)===!1){const M=R.textures,z=R.width,J=R.height;let se=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(R),he=M.length>1;if(he)for(let Be=0;Be<M.length;Be++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Ue=R.texture.mipmaps;Ue&&Ue.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Be=0;Be<M.length;Be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Be]);const le=i.get(M[Be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,le,0)}t.blitFramebuffer(0,0,z,J,0,0,z,J,se,t.NEAREST),l===!0&&(tt.length=0,Y.length=0,tt.push(t.COLOR_ATTACHMENT0+Be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push(Q),Y.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Y)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,tt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Be=0;Be<M.length;Be++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Be]);const le=i.get(M[Be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function L(R){return Math.min(r.maxSamples,R.samples)}function $e(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(R){const M=a.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function Qe(R,M){const z=R.colorSpace,J=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==la&&z!==pr&&(it.getTransfer(z)===ct?(J!==ri||se!==Hn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",z)),M}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function JD(t,e){function n(i,r=pr){let s;const a=it.getTransfer(r);if(i===Hn)return t.UNSIGNED_BYTE;if(i===Zh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$v)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gv)return t.BYTE;if(i===jv)return t.SHORT;if(i===_o)return t.UNSIGNED_SHORT;if(i===Kh)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===Xi)return t.HALF_FLOAT;if(i===Xv)return t.ALPHA;if(i===qv)return t.RGB;if(i===ri)return t.RGBA;if(i===qi)return t.DEPTH_COMPONENT;if(i===Jr)return t.DEPTH_STENCIL;if(i===Yv)return t.RED;if(i===Qh)return t.RED_INTEGER;if(i===oa)return t.RG;if(i===ep)return t.RG_INTEGER;if(i===tp)return t.RGBA_INTEGER;if(i===kl||i===Bl||i===zl||i===Vl)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===kl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===kl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gf||i===_f||i===vf||i===xf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yf||i===Sf||i===Ef||i===Mf||i===Tf||i===wf||i===Cf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yf||i===Sf)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ef)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mf)return s.COMPRESSED_R11_EAC;if(i===Tf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===wf)return s.COMPRESSED_RG11_EAC;if(i===Cf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bf||i===Af||i===Rf||i===Pf||i===Nf||i===Lf||i===Df||i===If||i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===zf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Df)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===If)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ff)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Of)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vf||i===Hf||i===Gf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vf)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jf||i===Wf||i===$f||i===Xf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$f)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const QD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eI=`
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

}`;class tI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new sx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new li({vertexShader:QD,fragmentShader:eI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ti(new Po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nI extends pa{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",p=new tI,u={},g=n.getContextAttributes();let y=null,E=null;const T=[],w=[],A=new pt;let x=null;const C=new ni;C.viewport=new Lt;const I=new ni;I.viewport=new Lt;const P=[C,I],N=new f3;let F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=T[q];return re===void 0&&(re=new Uu,T[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=T[q];return re===void 0&&(re=new Uu,T[q]=re),re.getGripSpace()},this.getHand=function(q){let re=T[q];return re===void 0&&(re=new Uu,T[q]=re),re.getHandSpace()};function B(q){const re=w.indexOf(q.inputSource);if(re===-1)return;const oe=T[re];oe!==void 0&&(oe.update(q.inputSource,q.frame,c||a),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",O);for(let q=0;q<T.length;q++){const re=w[q];re!==null&&(w[q]=null,T[q].disconnect(re))}F=null,j=null,p.reset();for(const q in u)delete u[q];e.setRenderTarget(y),m=null,d=null,h=null,r=null,E=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",G),r.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Te=null,ve=null;g.depth&&(ve=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=g.stencil?Jr:qi,Te=g.stencil?vo:Mi);const ge={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Si(d.textureWidth,d.textureHeight,{format:ri,type:Hn,depthTexture:new xo(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Si(m.framebufferWidth,m.framebufferHeight,{format:ri,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(q){for(let re=0;re<q.removed.length;re++){const oe=q.removed[re],Te=w.indexOf(oe);Te>=0&&(w[Te]=null,T[Te].disconnect(oe))}for(let re=0;re<q.added.length;re++){const oe=q.added[re];let Te=w.indexOf(oe);if(Te===-1){for(let ge=0;ge<T.length;ge++)if(ge>=w.length){w.push(oe),Te=ge;break}else if(w[ge]===null){w[ge]=oe,Te=ge;break}if(Te===-1)break}const ve=T[Te];ve&&ve.connect(oe)}}const V=new K,W=new K;function te(q,re,oe){V.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(oe.matrixWorld);const Te=V.distanceTo(W),ve=re.projectionMatrix.elements,ge=oe.projectionMatrix.elements,Ne=ve[14]/(ve[10]-1),ze=ve[14]/(ve[10]+1),Ze=(ve[9]+1)/ve[5],tt=(ve[9]-1)/ve[5],Y=(ve[8]-1)/ve[0],fe=(ge[8]+1)/ge[0],L=Ne*Y,$e=Ne*fe,Ge=Te/(-Y+fe),Qe=Ge*-Y;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qe),q.translateZ(Ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ve[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ee=Ne+Ge,R=ze+Ge,M=L-Qe,z=$e+(Te-Qe),J=Ze*ze/R*Ee,se=tt*ze/R*Ee;q.projectionMatrix.makePerspective(M,z,J,se,Ee,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,oe=q.far;p.texture!==null&&(p.depthNear>0&&(re=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),N.near=I.near=C.near=re,N.far=I.far=C.far=oe,(F!==N.near||j!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,j=N.far),N.layers.mask=q.layers.mask|6,C.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;const Te=q.parent,ve=N.cameras;ne(N,Te);for(let ge=0;ge<ve.length;ge++)ne(ve[ge],Te);ve.length===2?te(N,C,I):N.projectionMatrix.copy(C.projectionMatrix),U(q,N,Te)};function U(q,re,oe){oe===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(q){return u[q]};let ae=null;function Me(q,re){if(f=re.getViewerPose(c||a),_=re,f!==null){const oe=f.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Te=!1;oe.length!==N.cameras.length&&(N.cameras.length=0,Te=!0);for(let ze=0;ze<oe.length;ze++){const Ze=oe[ze];let tt=null;if(m!==null)tt=m.getViewport(Ze);else{const fe=h.getViewSubImage(d,Ze);tt=fe.viewport,ze===0&&(e.setRenderTargetTextures(E,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(E))}let Y=P[ze];Y===void 0&&(Y=new ni,Y.layers.enable(ze),Y.viewport=new Lt,P[ze]=Y),Y.matrix.fromArray(Ze.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Ze.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(tt.x,tt.y,tt.width,tt.height),ze===0&&(N.matrix.copy(Y.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Te===!0&&N.cameras.push(Y)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const ze=h.getDepthInformation(oe[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,r.renderState)}if(ve&&ve.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let ze=0;ze<oe.length;ze++){const Ze=oe[ze].camera;if(Ze){let tt=u[Ze];tt||(tt=new sx,u[Ze]=tt);const Y=h.getCameraImage(Ze);tt.sourceTexture=Y}}}}for(let oe=0;oe<T.length;oe++){const Te=w[oe],ve=T[oe];Te!==null&&ve!==void 0&&ve.update(Te,re,c||a)}ae&&ae(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const Le=new lx;Le.setAnimationLoop(Me),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}const Hr=new Yi,iI=new kt;function rI(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,ax(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,y,E){u.isMeshBasicMaterial?s(p,u):u.isMeshLambertMaterial?(s(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),S(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,y):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Tn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Tn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u),y=g.envMap,E=g.envMapRotation;y&&(p.envMap.value=y,Hr.copy(E),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),p.envMapRotation.value.setFromMatrix4(iI.makeRotationFromEuler(Hr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,y){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=y*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Tn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sI(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const E=y.program;i.uniformBlockBinding(g,E)}function c(g,y){let E=r[g.id];E===void 0&&(_(g),E=f(g),r[g.id]=E,g.addEventListener("dispose",p));const T=y.program;i.updateUBOMapping(g,T);const w=e.render.frame;s[g.id]!==w&&(d(g),s[g.id]=w)}function f(g){const y=h();g.__bindingPointIndex=y;const E=t.createBuffer(),T=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,T,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function h(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const y=r[g.id],E=g.uniforms,T=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,A=E.length;w<A;w++){const x=Array.isArray(E[w])?E[w]:[E[w]];for(let C=0,I=x.length;C<I;C++){const P=x[C];if(m(P,w,C,T)===!0){const N=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let B=0;B<F.length;B++){const G=F[B],O=S(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,N+j,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,j),j+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,y,E,T){const w=g.value,A=y+"_"+E;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const x=T[A];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return T[A]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function _(g){const y=g.uniforms;let E=0;const T=16;for(let A=0,x=y.length;A<x;A++){const C=Array.isArray(y[A])?y[A]:[y[A]];for(let I=0,P=C.length;I<P;I++){const N=C[I],F=Array.isArray(N.value)?N.value:[N.value];for(let j=0,B=F.length;j<B;j++){const G=F[j],O=S(G),V=E%T,W=V%O.boundary,te=V+W;E+=W,te!==0&&T-te<O.storage&&(E+=T-te),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=O.storage}}}const w=E%T;return w>0&&(E+=T-w),g.__size=E,g.__cache={},this}function S(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",g),y}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const aI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function oI(){return fi===null&&(fi=new Q2(aI,16,16,oa,Xi),fi.name="DFG_LUT",fi.minFilter=an,fi.magFilter=an,fi.wrapS=ki,fi.wrapT=ki,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class lI{constructor(e={}){const{canvas:n=R2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Hn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=m,p=new Set([tp,ep,Qh]),u=new Set([Hn,Mi,_o,vo,Zh,Jh]),g=new Uint32Array(4),y=new Int32Array(4);let E=null,T=null;const w=[],A=[];let x=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1;this._outputColorSpace=Bn;let P=0,N=0,F=null,j=-1,B=null;const G=new Lt,O=new Lt;let V=null;const W=new ht(0);let te=0,ne=n.width,U=n.height,ae=1,Me=null,Le=null;const q=new Lt(0,0,ne,U),re=new Lt(0,0,ne,U);let oe=!1;const Te=new ix;let ve=!1,ge=!1;const Ne=new kt,ze=new K,Ze=new Lt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function fe(){return F===null?ae:1}let L=i;function $e(b,H){return n.getContext(b,H)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yh}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",Ve,!1),n.addEventListener("webglcontextcreationerror",gt,!1),L===null){const H="webgl2";if(L=$e(H,b),L===null)throw $e(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw at("WebGLRenderer: "+b.message),b}let Ge,Qe,Ee,R,M,z,J,se,Q,Re,he,Ue,Be,le,ue,be,Pe,Se,Ye,k,me,pe,Ae;function de(){Ge=new lL(L),Ge.init(),me=new JD(L,Ge),Qe=new eL(L,Ge,e,me),Ee=new KD(L,Ge),Qe.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),R=new dL(L),M=new FD,z=new ZD(L,Ge,Ee,M,Qe,me,R),J=new oL(C),se=new g3(L),pe=new JN(L,se),Q=new cL(L,se,R,pe),Re=new hL(L,Q,se,pe,R),Se=new fL(L,Qe,z),ue=new tL(M),he=new UD(C,J,Ge,Qe,pe,ue),Ue=new rI(C,M),Be=new kD,le=new jD(Ge),Pe=new ZN(C,J,Ee,Re,_,l),be=new YD(C,Re,Qe),Ae=new sI(L,R,Qe,Ee),Ye=new QN(L,Ge,R),k=new uL(L,Ge,R),R.programs=he.programs,C.capabilities=Qe,C.extensions=Ge,C.properties=M,C.renderLists=Be,C.shadowMap=be,C.state=Ee,C.info=R}de(),S!==Hn&&(x=new mL(S,n.width,n.height,r,s));const ee=new nI(C,L);this.xr=ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(b){b!==void 0&&(ae=b,this.setSize(ne,U,!1))},this.getSize=function(b){return b.set(ne,U)},this.setSize=function(b,H,Z=!0){if(ee.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,U=H,n.width=Math.floor(b*ae),n.height=Math.floor(H*ae),Z===!0&&(n.style.width=b+"px",n.style.height=H+"px"),x!==null&&x.setSize(n.width,n.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(ne*ae,U*ae).floor()},this.setDrawingBufferSize=function(b,H,Z){ne=b,U=H,ae=Z,n.width=Math.floor(b*Z),n.height=Math.floor(H*Z),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(S===Hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,H,Z,X){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,H,Z,X),Ee.viewport(G.copy(q).multiplyScalar(ae).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,H,Z,X){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,H,Z,X),Ee.scissor(O.copy(re).multiplyScalar(ae).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(b){Ee.setScissorTest(oe=b)},this.setOpaqueSort=function(b){Me=b},this.setTransparentSort=function(b){Le=b},this.getClearColor=function(b){return b.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,Z=!0){let X=0;if(b){let $=!1;if(F!==null){const xe=F.texture.format;$=p.has(xe)}if($){const xe=F.texture.type,we=u.has(xe),ye=Pe.getClearColor(),Ie=Pe.getClearAlpha(),Oe=ye.r,je=ye.g,Ke=ye.b;we?(g[0]=Oe,g[1]=je,g[2]=Ke,g[3]=Ie,L.clearBufferuiv(L.COLOR,0,g)):(y[0]=Oe,y[1]=je,y[2]=Ke,y[3]=Ie,L.clearBufferiv(L.COLOR,0,y))}else X|=L.COLOR_BUFFER_BIT}H&&(X|=L.DEPTH_BUFFER_BIT),Z&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",Ve,!1),n.removeEventListener("webglcontextcreationerror",gt,!1),Pe.dispose(),Be.dispose(),le.dispose(),M.dispose(),J.dispose(),Re.dispose(),pe.dispose(),Ae.dispose(),he.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",lp),ee.removeEventListener("sessionend",cp),Ir.stop()};function De(b){b.preventDefault(),og("WebGLRenderer: Context Lost."),I=!0}function Ve(){og("WebGLRenderer: Context Restored."),I=!1;const b=R.autoReset,H=be.enabled,Z=be.autoUpdate,X=be.needsUpdate,$=be.type;de(),R.autoReset=b,be.enabled=H,be.autoUpdate=Z,be.needsUpdate=X,be.type=$}function gt(b){at("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){const H=b.target;H.removeEventListener("dispose",lt),wi(H)}function wi(b){Ci(b),M.remove(b)}function Ci(b){const H=M.get(b).programs;H!==void 0&&(H.forEach(function(Z){he.releaseProgram(Z)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,Z,X,$,xe){H===null&&(H=tt);const we=$.isMesh&&$.matrixWorld.determinant()<0,ye=mx(b,H,Z,X,$);Ee.setMaterial(X,we);let Ie=Z.index,Oe=1;if(X.wireframe===!0){if(Ie=Q.getWireframeAttribute(Z),Ie===void 0)return;Oe=2}const je=Z.drawRange,Ke=Z.attributes.position;let ke=je.start*Oe,dt=(je.start+je.count)*Oe;xe!==null&&(ke=Math.max(ke,xe.start*Oe),dt=Math.min(dt,(xe.start+xe.count)*Oe)),Ie!==null?(ke=Math.max(ke,0),dt=Math.min(dt,Ie.count)):Ke!=null&&(ke=Math.max(ke,0),dt=Math.min(dt,Ke.count));const Pt=dt-ke;if(Pt<0||Pt===1/0)return;pe.setup($,X,ye,Z,Ie);let bt,ft=Ye;if(Ie!==null&&(bt=se.get(Ie),ft=k,ft.setIndex(bt)),$.isMesh)X.wireframe===!0?(Ee.setLineWidth(X.wireframeLinewidth*fe()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if($.isLine){let Jt=X.linewidth;Jt===void 0&&(Jt=1),Ee.setLineWidth(Jt*fe()),$.isLineSegments?ft.setMode(L.LINES):$.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else $.isPoints?ft.setMode(L.POINTS):$.isSprite&&ft.setMode(L.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)yc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Jt=$._multiDrawStarts,Fe=$._multiDrawCounts,wn=$._multiDrawCount,st=Ie?se.get(Ie).bytesPerElement:1,qn=M.get(X).currentProgram.getUniforms();for(let ci=0;ci<wn;ci++)qn.setValue(L,"_gl_DrawID",ci),ft.render(Jt[ci]/st,Fe[ci])}else if($.isInstancedMesh)ft.renderInstances(ke,Pt,$.count);else if(Z.isInstancedBufferGeometry){const Jt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fe=Math.min(Z.instanceCount,Jt);ft.renderInstances(ke,Pt,Fe)}else ft.render(ke,Pt)};function op(b,H,Z){b.transparent===!0&&b.side===Ui&&b.forceSinglePass===!1?(b.side=Tn,b.needsUpdate=!0,Lo(b,H,Z),b.side=Pr,b.needsUpdate=!0,Lo(b,H,Z),b.side=Ui):Lo(b,H,Z)}this.compile=function(b,H,Z=null){Z===null&&(Z=b),T=le.get(Z),T.init(H),A.push(T),Z.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),b!==Z&&b.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),T.setupLights();const X=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const xe=$.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const ye=xe[we];op(ye,Z,$),X.add(ye)}else op(xe,Z,$),X.add(xe)}),T=A.pop(),X},this.compileAsync=function(b,H,Z=null){const X=this.compile(b,H,Z);return new Promise($=>{function xe(){if(X.forEach(function(we){M.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){$(b);return}setTimeout(xe,10)}Ge.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Wc=null;function px(b){Wc&&Wc(b)}function lp(){Ir.stop()}function cp(){Ir.start()}const Ir=new lx;Ir.setAnimationLoop(px),typeof self<"u"&&Ir.setContext(self),this.setAnimationLoop=function(b){Wc=b,ee.setAnimationLoop(b),b===null?Ir.stop():Ir.start()},ee.addEventListener("sessionstart",lp),ee.addEventListener("sessionend",cp),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const Z=ee.enabled===!0&&ee.isPresenting===!0,X=x!==null&&(F===null||Z)&&x.begin(C,F);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(H),H=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,H,F),T=le.get(b,A.length),T.init(H),A.push(T),Ne.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Te.setFromProjectionMatrix(Ne,_i,H.reversedDepth),ge=this.localClippingEnabled,ve=ue.init(this.clippingPlanes,ge),E=Be.get(b,w.length),E.init(),w.push(E),ee.enabled===!0&&ee.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&$c(we,H,-1/0,C.sortObjects)}$c(b,H,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(Me,Le),Y=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Y&&Pe.addToRenderList(E,b),this.info.render.frame++,ve===!0&&ue.beginShadows();const $=T.state.shadowsArray;if(be.render($,b,H),ve===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&x.hasRenderPass())===!1){const we=E.opaque,ye=E.transmissive;if(T.setupLights(),H.isArrayCamera){const Ie=H.cameras;if(ye.length>0)for(let Oe=0,je=Ie.length;Oe<je;Oe++){const Ke=Ie[Oe];dp(we,ye,b,Ke)}Y&&Pe.render(b);for(let Oe=0,je=Ie.length;Oe<je;Oe++){const Ke=Ie[Oe];up(E,b,Ke,Ke.viewport)}}else ye.length>0&&dp(we,ye,b,H),Y&&Pe.render(b),up(E,b,H)}F!==null&&N===0&&(z.updateMultisampleRenderTarget(F),z.updateRenderTargetMipmap(F)),X&&x.end(C),b.isScene===!0&&b.onAfterRender(C,b,H),pe.resetDefaultState(),j=-1,B=null,A.pop(),A.length>0?(T=A[A.length-1],ve===!0&&ue.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function $c(b,H,Z,X){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Te.intersectsSprite(b)){X&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ne);const we=Re.update(b),ye=b.material;ye.visible&&E.push(b,we,ye,Z,Ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Te.intersectsObject(b))){const we=Re.update(b),ye=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ze.copy(we.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(Ne)),Array.isArray(ye)){const Ie=we.groups;for(let Oe=0,je=Ie.length;Oe<je;Oe++){const Ke=Ie[Oe],ke=ye[Ke.materialIndex];ke&&ke.visible&&E.push(b,we,ke,Z,Ze.z,Ke)}}else ye.visible&&E.push(b,we,ye,Z,Ze.z,null)}}const xe=b.children;for(let we=0,ye=xe.length;we<ye;we++)$c(xe[we],H,Z,X)}function up(b,H,Z,X){const{opaque:$,transmissive:xe,transparent:we}=b;T.setupLightsView(Z),ve===!0&&ue.setGlobalState(C.clippingPlanes,Z),X&&Ee.viewport(G.copy(X)),$.length>0&&No($,H,Z),xe.length>0&&No(xe,H,Z),we.length>0&&No(we,H,Z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function dp(b,H,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const ke=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Si(1,1,{generateMipmaps:!0,type:ke?Xi:Hn,minFilter:Zr,samples:Math.max(4,Qe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const xe=T.state.transmissionRenderTarget[X.id],we=X.viewport||G;xe.setSize(we.z*C.transmissionResolutionScale,we.w*C.transmissionResolutionScale);const ye=C.getRenderTarget(),Ie=C.getActiveCubeFace(),Oe=C.getActiveMipmapLevel();C.setRenderTarget(xe),C.getClearColor(W),te=C.getClearAlpha(),te<1&&C.setClearColor(16777215,.5),C.clear(),Y&&Pe.render(Z);const je=C.toneMapping;C.toneMapping=yi;const Ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),ve===!0&&ue.setGlobalState(C.clippingPlanes,X),No(b,Z,X),z.updateMultisampleRenderTarget(xe),z.updateRenderTargetMipmap(xe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let dt=0,Pt=H.length;dt<Pt;dt++){const bt=H[dt],{object:ft,geometry:Jt,material:Fe,group:wn}=bt;if(Fe.side===Ui&&ft.layers.test(X.layers)){const st=Fe.side;Fe.side=Tn,Fe.needsUpdate=!0,fp(ft,Z,X,Jt,Fe,wn),Fe.side=st,Fe.needsUpdate=!0,ke=!0}}ke===!0&&(z.updateMultisampleRenderTarget(xe),z.updateRenderTargetMipmap(xe))}C.setRenderTarget(ye,Ie,Oe),C.setClearColor(W,te),Ke!==void 0&&(X.viewport=Ke),C.toneMapping=je}function No(b,H,Z){const X=H.isScene===!0?H.overrideMaterial:null;for(let $=0,xe=b.length;$<xe;$++){const we=b[$],{object:ye,geometry:Ie,group:Oe}=we;let je=we.material;je.allowOverride===!0&&X!==null&&(je=X),ye.layers.test(Z.layers)&&fp(ye,H,Z,Ie,je,Oe)}}function fp(b,H,Z,X,$,xe){b.onBeforeRender(C,H,Z,X,$,xe),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(C,H,Z,X,b,xe),$.transparent===!0&&$.side===Ui&&$.forceSinglePass===!1?($.side=Tn,$.needsUpdate=!0,C.renderBufferDirect(Z,H,X,$,b,xe),$.side=Pr,$.needsUpdate=!0,C.renderBufferDirect(Z,H,X,$,b,xe),$.side=Ui):C.renderBufferDirect(Z,H,X,$,b,xe),b.onAfterRender(C,H,Z,X,$,xe)}function Lo(b,H,Z){H.isScene!==!0&&(H=tt);const X=M.get(b),$=T.state.lights,xe=T.state.shadowsArray,we=$.state.version,ye=he.getParameters(b,$.state,xe,H,Z),Ie=he.getProgramCacheKey(ye);let Oe=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,X.fog=H.fog;const je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=J.get(b.envMap||X.environment,je),X.envMapRotation=X.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",lt),Oe=new Map,X.programs=Oe);let Ke=Oe.get(Ie);if(Ke!==void 0){if(X.currentProgram===Ke&&X.lightsStateVersion===we)return pp(b,ye),Ke}else ye.uniforms=he.getUniforms(b),b.onBeforeCompile(ye,C),Ke=he.acquireProgram(ye,Ie),Oe.set(Ie,Ke),X.uniforms=ye.uniforms;const ke=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=ue.uniform),pp(b,ye),X.needsLights=_x(b),X.lightsStateVersion=we,X.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),X.currentProgram=Ke,X.uniformsList=null,Ke}function hp(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Hl.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function pp(b,H){const Z=M.get(b);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function mx(b,H,Z,X,$){H.isScene!==!0&&(H=tt),z.resetTextureUnits();const xe=H.fog,we=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?H.environment:null,ye=F===null?C.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:la,Ie=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Oe=J.get(X.envMap||we,Ie),je=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ke=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ke=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,Pt=!!Z.morphAttributes.color;let bt=yi;X.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(bt=C.toneMapping);const ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Jt=ft!==void 0?ft.length:0,Fe=M.get(X),wn=T.state.lights;if(ve===!0&&(ge===!0||b!==B)){const Gt=b===B&&X.id===j;ue.setState(X,b,Gt)}let st=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==wn.state.version||Fe.outputColorSpace!==ye||$.isBatchedMesh&&Fe.batching===!1||!$.isBatchedMesh&&Fe.batching===!0||$.isBatchedMesh&&Fe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Fe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Fe.instancing===!1||!$.isInstancedMesh&&Fe.instancing===!0||$.isSkinnedMesh&&Fe.skinning===!1||!$.isSkinnedMesh&&Fe.skinning===!0||$.isInstancedMesh&&Fe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Fe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Fe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Fe.instancingMorph===!1&&$.morphTexture!==null||Fe.envMap!==Oe||X.fog===!0&&Fe.fog!==xe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ue.numPlanes||Fe.numIntersection!==ue.numIntersection)||Fe.vertexAlphas!==je||Fe.vertexTangents!==Ke||Fe.morphTargets!==ke||Fe.morphNormals!==dt||Fe.morphColors!==Pt||Fe.toneMapping!==bt||Fe.morphTargetsCount!==Jt)&&(st=!0):(st=!0,Fe.__version=X.version);let qn=Fe.currentProgram;st===!0&&(qn=Lo(X,H,$));let ci=!1,Ur=!1,hs=!1;const mt=qn.getUniforms(),Xt=Fe.uniforms;if(Ee.useProgram(qn.program)&&(ci=!0,Ur=!0,hs=!0),X.id!==j&&(j=X.id,Ur=!0),ci||B!==b){Ee.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(L,"projectionMatrix",b.projectionMatrix),mt.setValue(L,"viewMatrix",b.matrixWorldInverse);const Qi=mt.map.cameraPosition;Qi!==void 0&&Qi.setValue(L,ze.setFromMatrixPosition(b.matrixWorld)),Qe.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,Ur=!0,hs=!0)}if(Fe.needsLights&&(wn.state.directionalShadowMap.length>0&&mt.setValue(L,"directionalShadowMap",wn.state.directionalShadowMap,z),wn.state.spotShadowMap.length>0&&mt.setValue(L,"spotShadowMap",wn.state.spotShadowMap,z),wn.state.pointShadowMap.length>0&&mt.setValue(L,"pointShadowMap",wn.state.pointShadowMap,z)),$.isSkinnedMesh){mt.setOptional(L,$,"bindMatrix"),mt.setOptional(L,$,"bindMatrixInverse");const Gt=$.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),mt.setValue(L,"boneTexture",Gt.boneTexture,z))}$.isBatchedMesh&&(mt.setOptional(L,$,"batchingTexture"),mt.setValue(L,"batchingTexture",$._matricesTexture,z),mt.setOptional(L,$,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",$._indirectTexture,z),mt.setOptional(L,$,"batchingColorTexture"),$._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",$._colorsTexture,z));const Ji=Z.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Se.update($,Z,qn),(Ur||Fe.receiveShadow!==$.receiveShadow)&&(Fe.receiveShadow=$.receiveShadow,mt.setValue(L,"receiveShadow",$.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&H.environment!==null&&(Xt.envMapIntensity.value=H.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=oI()),Ur&&(mt.setValue(L,"toneMappingExposure",C.toneMappingExposure),Fe.needsLights&&gx(Xt,hs),xe&&X.fog===!0&&Ue.refreshFogUniforms(Xt,xe),Ue.refreshMaterialUniforms(Xt,X,ae,U,T.state.transmissionRenderTarget[b.id]),Hl.upload(L,hp(Fe),Xt,z)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Hl.upload(L,hp(Fe),Xt,z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(L,"center",$.center),mt.setValue(L,"modelViewMatrix",$.modelViewMatrix),mt.setValue(L,"normalMatrix",$.normalMatrix),mt.setValue(L,"modelMatrix",$.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Gt=X.uniformsGroups;for(let Qi=0,ps=Gt.length;Qi<ps;Qi++){const mp=Gt[Qi];Ae.update(mp,qn),Ae.bind(mp,qn)}}return qn}function gx(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function _x(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,H,Z){const X=M.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),M.get(b.texture).__webglTexture=H,M.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const Z=M.get(b);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const vx=L.createFramebuffer();this.setRenderTarget=function(b,H=0,Z=0){F=b,P=H,N=Z;let X=null,$=!1,xe=!1;if(b){const ye=M.get(b);if(ye.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(L.FRAMEBUFFER,ye.__webglFramebuffer),G.copy(b.viewport),O.copy(b.scissor),V=b.scissorTest,Ee.viewport(G),Ee.scissor(O),Ee.setScissorTest(V),j=-1;return}else if(ye.__webglFramebuffer===void 0)z.setupRenderTarget(b);else if(ye.__hasExternalTextures)z.rebindTextures(b,M.get(b.texture).__webglTexture,M.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(ye.__boundDepthTexture!==je){if(je!==null&&M.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(b)}}const Ie=b.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(xe=!0);const Oe=M.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[H])?X=Oe[H][Z]:X=Oe[H],$=!0):b.samples>0&&z.useMultisampledRTT(b)===!1?X=M.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[Z]:X=Oe,G.copy(b.viewport),O.copy(b.scissor),V=b.scissorTest}else G.copy(q).multiplyScalar(ae).floor(),O.copy(re).multiplyScalar(ae).floor(),V=oe;if(Z!==0&&(X=vx),Ee.bindFramebuffer(L.FRAMEBUFFER,X)&&Ee.drawBuffers(b,X),Ee.viewport(G),Ee.scissor(O),Ee.setScissorTest(V),$){const ye=M.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,ye.__webglTexture,Z)}else if(xe){const ye=H;for(let Ie=0;Ie<b.textures.length;Ie++){const Oe=M.get(b.textures[Ie]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,Z,ye)}}else if(b!==null&&Z!==0){const ye=M.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ye.__webglTexture,Z)}j=-1},this.readRenderTargetPixels=function(b,H,Z,X,$,xe,we,ye=0){if(!(b&&b.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){Ee.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const Oe=b.textures[ye],je=Oe.format,Ke=Oe.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ye),!Qe.textureFormatReadable(je)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ke)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-X&&Z>=0&&Z<=b.height-$&&L.readPixels(H,Z,X,$,me.convert(je),me.convert(Ke),xe)}finally{const Oe=F!==null?M.get(F).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,H,Z,X,$,xe,we,ye=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie)if(H>=0&&H<=b.width-X&&Z>=0&&Z<=b.height-$){Ee.bindFramebuffer(L.FRAMEBUFFER,Ie);const Oe=b.textures[ye],je=Oe.format,Ke=Oe.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ye),!Qe.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,xe.byteLength,L.STREAM_READ),L.readPixels(H,Z,X,$,me.convert(je),me.convert(Ke),0);const dt=F!==null?M.get(F).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,dt);const Pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await P2(L,Pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xe),L.deleteBuffer(ke),L.deleteSync(Pt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,Z=0){const X=Math.pow(2,-Z),$=Math.floor(b.image.width*X),xe=Math.floor(b.image.height*X),we=H!==null?H.x:0,ye=H!==null?H.y:0;z.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,we,ye,$,xe),Ee.unbindTexture()};const xx=L.createFramebuffer(),yx=L.createFramebuffer();this.copyTextureToTexture=function(b,H,Z=null,X=null,$=0,xe=0){let we,ye,Ie,Oe,je,Ke,ke,dt,Pt;const bt=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(Z!==null)we=Z.max.x-Z.min.x,ye=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,Oe=Z.min.x,je=Z.min.y,Ke=Z.isBox3?Z.min.z:0;else{const Xt=Math.pow(2,-$);we=Math.floor(bt.width*Xt),ye=Math.floor(bt.height*Xt),b.isDataArrayTexture?Ie=bt.depth:b.isData3DTexture?Ie=Math.floor(bt.depth*Xt):Ie=1,Oe=0,je=0,Ke=0}X!==null?(ke=X.x,dt=X.y,Pt=X.z):(ke=0,dt=0,Pt=0);const ft=me.convert(H.format),Jt=me.convert(H.type);let Fe;H.isData3DTexture?(z.setTexture3D(H,0),Fe=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(z.setTexture2DArray(H,0),Fe=L.TEXTURE_2D_ARRAY):(z.setTexture2D(H,0),Fe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const wn=L.getParameter(L.UNPACK_ROW_LENGTH),st=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qn=L.getParameter(L.UNPACK_SKIP_PIXELS),ci=L.getParameter(L.UNPACK_SKIP_ROWS),Ur=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Oe),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ke);const hs=b.isDataArrayTexture||b.isData3DTexture,mt=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Xt=M.get(b),Ji=M.get(H),Gt=M.get(Xt.__renderTarget),Qi=M.get(Ji.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let ps=0;ps<Ie;ps++)hs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(b).__webglTexture,$,Ke+ps),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(H).__webglTexture,xe,Pt+ps)),L.blitFramebuffer(Oe,je,we,ye,ke,dt,we,ye,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||M.has(b)){const Xt=M.get(b),Ji=M.get(H);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,xx),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,yx);for(let Gt=0;Gt<Ie;Gt++)hs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xt.__webglTexture,$,Ke+Gt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xt.__webglTexture,$),mt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ji.__webglTexture,xe,Pt+Gt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ji.__webglTexture,xe),$!==0?L.blitFramebuffer(Oe,je,we,ye,ke,dt,we,ye,L.COLOR_BUFFER_BIT,L.NEAREST):mt?L.copyTexSubImage3D(Fe,xe,ke,dt,Pt+Gt,Oe,je,we,ye):L.copyTexSubImage2D(Fe,xe,ke,dt,Oe,je,we,ye);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Fe,xe,ke,dt,Pt,we,ye,Ie,ft,Jt,bt.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Fe,xe,ke,dt,Pt,we,ye,Ie,ft,bt.data):L.texSubImage3D(Fe,xe,ke,dt,Pt,we,ye,Ie,ft,Jt,bt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,xe,ke,dt,we,ye,ft,Jt,bt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,xe,ke,dt,bt.width,bt.height,ft,bt.data):L.texSubImage2D(L.TEXTURE_2D,xe,ke,dt,we,ye,ft,Jt,bt);L.pixelStorei(L.UNPACK_ROW_LENGTH,wn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ci),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ur),xe===0&&H.generateMipmaps&&L.generateMipmap(Fe),Ee.unbindTexture()},this.initRenderTarget=function(b){M.get(b).__webglFramebuffer===void 0&&z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?z.setTextureCube(b,0):b.isData3DTexture?z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?z.setTexture2DArray(b,0):z.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){P=0,N=0,F=null,Ee.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}const cI=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,uI=`
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uIntensity;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  #define PI 3.14159265359

  void main() {
    vec2 p = vUv - 0.5;
    float r = length(p) * 2.0;
    if (r > 1.0) {
      gl_FragColor = vec4(0.0);
      return;
    }
    float a = atan(p.y, p.x);

    float EH = 0.72; // event horizon radius — large dark core

    // Pure black core with a razor-thin photon-sphere rim
    if (r < EH) {
      float rim = smoothstep(EH - 0.008, EH - 0.001, r);
      vec3 rimCol = vec3(1.0, 0.75, 0.35) * rim * 0.9;
      gl_FragColor = vec4(rimCol, 1.0);
      return;
    }

    // Keplerian-ish differential rotation: faster closer to the horizon
    float rot = uTime * 0.55 / pow(max(r, 0.05), 0.9);

    // Discrete circling sparks: tile the ring in (angle, radius) cells and
    // place one tiny bright point per cell with a random orbital phase.
    float sparks = 0.0;
    const float TAU = 6.2831853;
    for (int L = 0; L < 3; L++) {
      float layer = float(L);
      float angDiv = 80.0 + layer * 40.0;   // # sparks around the ring per layer
      float radDiv = 6.0 + layer * 3.0;     // # radial bands in the thin ring
      float cellA = TAU / angDiv;
      float radLo = EH + 0.005;
      float radHi = 0.99;
      float rr = (r - radLo) / (radHi - radLo);
      if (rr < 0.0 || rr > 1.0) continue;
      // Angular cell index, shifted by rotation so sparks orbit
      float aShift = a + rot * (0.6 + layer * 0.15);
      float ai = floor(aShift / cellA);
      float af = fract(aShift / cellA);
      float ri = floor(rr * radDiv);
      float rf = fract(rr * radDiv);
      vec2 cell = vec2(ai, ri + layer * 17.0);
      // Random spark position inside the cell + random twinkle phase
      float hx = hash(cell);
      float hy = hash(cell + 3.17);
      float hp = hash(cell + 7.91);
      vec2 sp = vec2(hx, hy);
      vec2 d = vec2(af, rf) - sp;
      // Make sparks elongated tangentially for streak feel
      d.x *= 0.45;
      float dist2 = dot(d, d);
      float twinkle = 0.6 + 0.4 * sin(uTime * (2.0 + hp * 4.0) + hp * 6.28);
      float spark = exp(-dist2 * 140.0) * twinkle;
      sparks += spark * (0.9 - layer * 0.2);
    }

    // Thin bright filament hugging the horizon
    float filament = pow(abs(sin(a * 32.0 + rot * 6.0)), 50.0)
                   * smoothstep(EH + 0.04, EH, r);
    sparks += filament * 0.8;

    // Radial envelope: thin ring — fade up from horizon, fade down to outer
    float inner = smoothstep(EH, EH + 0.015, r);
    float outer = 1.0 - smoothstep(0.93, 1.0, r);
    float env = inner * outer;

    // Temperature gradient across the thin ring
    vec3 hot  = vec3(1.00, 0.96, 0.78);
    vec3 mid  = vec3(1.00, 0.63, 0.22);
    vec3 cool = vec3(0.65, 0.22, 0.05);
    vec3 col = mix(hot, mid, smoothstep(EH, EH + 0.12, r));
    col = mix(col, cool, smoothstep(EH + 0.12, 0.98, r));

    col *= sparks * env * uIntensity;

    // Soft outer halo (additive bloom hint) hugging the thin ring
    float halo = exp(-pow((r - (EH + 0.08)) * 10.0, 2.0)) * 0.35 * uIntensity;
    col += mix(hot, mid, 0.5) * halo * outer;

    float alpha = outer;
    gl_FragColor = vec4(col, alpha);
  }
`;function rd({intensity:t=1,className:e,style:n}){const i=D.useRef(null);return D.useEffect(()=>{const r=i.current;if(!r)return;const s=new lI({alpha:!0,antialias:!0,premultipliedAlpha:!1});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.setClearColor(0,0),r.appendChild(s.domElement),s.domElement.style.display="block",s.domElement.style.width="100%",s.domElement.style.height="100%";const a=new $2,o=new ap(-1,1,1,-1,0,1),l={uTime:{value:0},uIntensity:{value:t}},c=new li({uniforms:l,vertexShader:cI,fragmentShader:uI,transparent:!0,depthWrite:!1}),f=new Po(2,2),h=new Ti(f,c);a.add(h);const d=()=>{const y=Math.max(1,r.clientWidth),E=Math.max(1,r.clientHeight);s.setSize(y,E,!1)};d();const m=new ResizeObserver(d);m.observe(r);const _=new h3;let S=0,p=!0;const u=()=>{p&&(_.update(),l.uTime.value=_.getElapsed(),s.render(a,o),S=requestAnimationFrame(u))};u();const g=()=>{document.hidden?(p=!1,cancelAnimationFrame(S)):p||(p=!0,u())};return document.addEventListener("visibilitychange",g),()=>{p=!1,cancelAnimationFrame(S),document.removeEventListener("visibilitychange",g),m.disconnect(),s.domElement.parentNode===r&&r.removeChild(s.domElement),f.dispose(),c.dispose(),s.dispose()}},[t]),v.jsx("div",{ref:i,className:e,"aria-hidden":"true",style:{position:"absolute",inset:0,borderRadius:"50%",overflow:"hidden",pointerEvents:"none",...n}})}const dI="_launcher_1a40a_1",fI="_fadeOut_1a40a_14",hI="_backdrop_1a40a_19",pI="_connectors_1a40a_28",mI="_connector_1a40a_28",gI="_connectorVisible_1a40a_44",_I="_node_1a40a_49",vI="_hero_1a40a_75",xI="_heroLabel_1a40a_83",yI="_heroDim_1a40a_97",SI="_heroGone_1a40a_109",EI="_heroGenerating_1a40a_115",MI="_loadingPanel_1a40a_125",TI="_loadingPanelShown_1a40a_139",wI="_loadingLabel_1a40a_143",CI="_loadingTopic_1a40a_151",bI="_child_1a40a_158",AI="_childSW_1a40a_166",RI="_childSE_1a40a_171",PI="_childShown_1a40a_176",NI="_childLabel_1a40a_191",LI="_childFaded_1a40a_207",DI="_childChosen_1a40a_214",II="_panel_1a40a_229",UI="_panelShown_1a40a_246",FI="_panelLabel_1a40a_252",OI="_panelHint_1a40a_260",kI="_textarea_1a40a_267",BI="_generate_1a40a_290",zI="_generateText_1a40a_313",VI="_generateShimmer_1a40a_322",We={launcher:dI,fadeOut:fI,backdrop:hI,connectors:pI,connector:mI,connectorVisible:gI,node:_I,hero:vI,heroLabel:xI,heroDim:yI,heroGone:SI,heroGenerating:EI,loadingPanel:MI,loadingPanelShown:TI,loadingLabel:wI,loadingTopic:CI,child:bI,childSW:AI,childSE:RI,childShown:PI,childLabel:NI,childFaded:LI,childChosen:DI,panel:II,panelShown:UI,panelLabel:FI,panelHint:OI,textarea:kI,generate:BI,generateText:zI,generateShimmer:VI},qg="wikiloop.launcher.seen";function HI(){const t=kc(),{generateTree:e}=Co(),[n,i]=D.useState("idle"),[r,s]=D.useState(null),[a,o]=D.useState(""),[l,c]=D.useState(!1),[f,h]=D.useState(!1),[d,m]=D.useState(()=>{try{return sessionStorage.getItem(qg)==="1"}catch{return!1}}),_=D.useRef(null);if(D.useEffect(()=>{if(n==="prompting"&&_.current&&!f){const C=setTimeout(()=>{var I;return(I=_.current)==null?void 0:I.focus()},420);return()=>clearTimeout(C)}},[n,f]),d)return null;const S=()=>{c(!0);try{sessionStorage.setItem(qg,"1")}catch{}setTimeout(()=>m(!0),520)},p=()=>{n==="idle"&&i("selecting")},u=C=>{n==="selecting"&&(s(C),i("prompting"))},g=async()=>{const C=a.trim();if(!C||f)return;if(h(!0),r==="skilltree"){try{await e(C),S()}catch{h(!1)}return}const I=()=>{window.removeEventListener("explore:ready",I),S()};window.addEventListener("explore:ready",I),t(`/explore?q=${encodeURIComponent(C)}`),setTimeout(()=>{window.removeEventListener("explore:ready",I),l||S()},15e3)},y=C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),g())},E=n==="selecting",T=n==="prompting",w=r==="skilltree"?"SKILL TREE MODE":"WIKI HOPPER MODE",A=r==="skilltree"?"Enter a topic or skill to map — e.g. Machine Learning, Music Theory, Photography":"Enter a concept to explore — e.g. Quantum mechanics, Jazz, Byzantine Empire",x=r==="skilltree"?"Growing skill tree":"Loading concept";return v.jsxs("div",{className:`${We.launcher} ${l?We.fadeOut:""}`,"aria-hidden":l,children:[v.jsx("div",{className:We.backdrop}),v.jsxs("svg",{className:We.connectors,"aria-hidden":"true",children:[v.jsx("line",{x1:"50%",y1:"50%",x2:"calc(50% - 290px)",y2:"calc(50% + 240px)",className:`${We.connector} ${E?We.connectorVisible:""}`}),v.jsx("line",{x1:"50%",y1:"50%",x2:"calc(50% + 290px)",y2:"calc(50% + 240px)",className:`${We.connector} ${E?We.connectorVisible:""}`})]}),v.jsxs("button",{type:"button",onClick:p,className:`${We.node} ${We.hero} ${E?We.heroDim:""} ${T&&!f?We.heroGone:""} ${f?We.heroGenerating:""}`,disabled:n!=="idle"||f,"aria-label":"Begin",children:[v.jsx(rd,{intensity:f?1.6:1.15}),!f&&v.jsx("span",{className:We.heroLabel,children:"BRANCHER"})]}),v.jsxs("button",{type:"button",onClick:()=>u("skilltree"),className:`${We.node} ${We.child} ${We.childSW} ${E||T?We.childShown:""} ${T&&r!=="skilltree"?We.childFaded:""} ${T&&r==="skilltree"?We.childChosen:""} ${f?We.childFaded:""}`,"aria-label":"Skill Tree mode",tabIndex:E?0:-1,disabled:f,children:[v.jsx(rd,{intensity:.95}),v.jsxs("span",{className:We.childLabel,children:["SKILL",v.jsx("br",{}),"TREE"]})]}),v.jsxs("button",{type:"button",onClick:()=>u("wikihopper"),className:`${We.node} ${We.child} ${We.childSE} ${E||T?We.childShown:""} ${T&&r!=="wikihopper"?We.childFaded:""} ${T&&r==="wikihopper"?We.childChosen:""} ${f?We.childFaded:""}`,"aria-label":"Wiki Hopper mode",tabIndex:E?0:-1,disabled:f,children:[v.jsx(rd,{intensity:.95}),v.jsxs("span",{className:We.childLabel,children:["WIKI",v.jsx("br",{}),"HOPPER"]})]}),!f&&v.jsxs("div",{className:`${We.panel} ${T?We.panelShown:""}`,children:[v.jsx("div",{className:We.panelLabel,children:w}),v.jsx("div",{className:We.panelHint,children:A}),v.jsx("textarea",{ref:_,className:We.textarea,rows:2,value:a,onChange:C=>o(C.target.value),onKeyDown:y,placeholder:"Type a topic..."}),v.jsxs("button",{type:"button",className:We.generate,onClick:g,disabled:!a.trim(),children:[v.jsx("span",{className:We.generateShimmer}),v.jsx("span",{className:We.generateText,children:"GENERATE"})]})]}),v.jsxs("div",{className:`${We.loadingPanel} ${f?We.loadingPanelShown:""}`,children:[v.jsx("div",{className:We.loadingLabel,children:x}),a&&v.jsx("div",{className:We.loadingTopic,children:a})]})]})}function GI(){const t=fs(),[e,n]=D.useState(!1);return D.useEffect(()=>{n(!0);const i=setTimeout(()=>n(!1),50);return()=>clearTimeout(i)},[t.pathname]),v.jsx(fM,{children:v.jsxs(hM,{children:[v.jsx(HI,{}),v.jsx("div",{className:`route-container ${e?"route-entering":"route-visible"}`,children:v.jsxs(GE,{children:[v.jsx(Ps,{path:"/",element:v.jsx(Tu,{})}),v.jsx(Ps,{path:"/skill-tree",element:v.jsx(Tu,{hideExplore:!0})}),v.jsx(Ps,{path:"/explore",element:v.jsx(Jm,{})}),v.jsx(Ps,{path:"/explore/*",element:v.jsx(Jm,{})}),v.jsx(Ps,{path:"*",element:v.jsx(Tu,{})})]})})]})})}sd.createRoot(document.getElementById("root")).render(v.jsx(s_.StrictMode,{children:v.jsx(ZE,{children:v.jsx(GI,{})})}));
