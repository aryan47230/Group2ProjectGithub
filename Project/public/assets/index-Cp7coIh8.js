var Cx=Object.defineProperty;var bx=(t,e,n)=>e in t?Cx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var xp=(t,e,n)=>bx(t,typeof e!="symbol"?e+"":e,n);function Ax(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Rx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e_={exports:{}},Mc={},t_={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),Px=Symbol.for("react.portal"),Nx=Symbol.for("react.fragment"),Lx=Symbol.for("react.strict_mode"),Dx=Symbol.for("react.profiler"),Ix=Symbol.for("react.provider"),Ux=Symbol.for("react.context"),Fx=Symbol.for("react.forward_ref"),Ox=Symbol.for("react.suspense"),kx=Symbol.for("react.memo"),Bx=Symbol.for("react.lazy"),yp=Symbol.iterator;function zx(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var n_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i_=Object.assign,r_={};function da(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||n_}da.prototype.isReactComponent={};da.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};da.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function s_(){}s_.prototype=da.prototype;function Jf(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||n_}var Qf=Jf.prototype=new s_;Qf.constructor=Jf;i_(Qf,da.prototype);Qf.isPureReactComponent=!0;var Sp=Array.isArray,a_=Object.prototype.hasOwnProperty,eh={current:null},o_={key:!0,ref:!0,__self:!0,__source:!0};function l_(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)a_.call(e,i)&&!o_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Eo,type:t,key:s,ref:a,props:r,_owner:eh.current}}function Vx(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function th(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function Hx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ep=/\/+/g;function qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hx(""+t.key):e.toString(36)}function Cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Eo:case Px:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+qc(a,0):i,Sp(r)?(n="",t!=null&&(n=t.replace(Ep,"$&/")+"/"),Cl(r,e,n,"",function(c){return c})):r!=null&&(th(r)&&(r=Vx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ep,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Sp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+qc(s,o);a+=Cl(s,e,n,l,r)}else if(l=zx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+qc(s,o++),a+=Cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Uo(t,e,n){if(t==null)return t;var i=[],r=0;return Cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Gx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},bl={transition:null},jx={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:bl,ReactCurrentOwner:eh};function c_(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Uo,forEach:function(t,e,n){Uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Uo(t,function(){e++}),e},toArray:function(t){return Uo(t,function(e){return e})||[]},only:function(t){if(!th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=da;Ze.Fragment=Nx;Ze.Profiler=Dx;Ze.PureComponent=Jf;Ze.StrictMode=Lx;Ze.Suspense=Ox;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Ze.act=c_;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=i_({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)a_.call(e,l)&&!o_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Eo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(t){return t={$$typeof:Ux,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ix,_context:t},t.Consumer=t};Ze.createElement=l_;Ze.createFactory=function(t){var e=l_.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:Fx,render:t}};Ze.isValidElement=th;Ze.lazy=function(t){return{$$typeof:Bx,_payload:{_status:-1,_result:t},_init:Gx}};Ze.memo=function(t,e){return{$$typeof:kx,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};Ze.unstable_act=c_;Ze.useCallback=function(t,e){return pn.current.useCallback(t,e)};Ze.useContext=function(t){return pn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return pn.current.useEffect(t,e)};Ze.useId=function(){return pn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return pn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Ze.useRef=function(t){return pn.current.useRef(t)};Ze.useState=function(t){return pn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return pn.current.useTransition()};Ze.version="18.3.1";t_.exports=Ze;var L=t_.exports;const u_=Rx(L),Wx=Ax({__proto__:null,default:u_},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x=L,Xx=Symbol.for("react.element"),qx=Symbol.for("react.fragment"),Yx=Object.prototype.hasOwnProperty,Kx=$x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zx={key:!0,ref:!0,__self:!0,__source:!0};function d_(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Yx.call(e,i)&&!Zx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Xx,type:t,key:s,ref:a,props:r,_owner:Kx.current}}Mc.Fragment=qx;Mc.jsx=d_;Mc.jsxs=d_;e_.exports=Mc;var _=e_.exports,ad={},f_={exports:{}},On={},h_={exports:{}},p_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,H){var Q=V.length;V.push(H);e:for(;0<Q;){var le=Q-1>>>1,U=V[le];if(0<r(U,H))V[le]=H,V[Q]=U,Q=le;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var H=V[0],Q=V.pop();if(Q!==H){V[0]=Q;e:for(var le=0,U=V.length,ae=U>>>1;le<ae;){var Me=2*(le+1)-1,De=V[Me],q=Me+1,re=V[q];if(0>r(De,Q))q<U&&0>r(re,De)?(V[le]=re,V[q]=Q,le=q):(V[le]=De,V[Me]=Q,le=Me);else if(q<U&&0>r(re,Q))V[le]=re,V[q]=Q,le=q;else break e}}return H}function r(V,H){var Q=V.sortIndex-H.sortIndex;return Q!==0?Q:V.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,m=!1,v=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(V){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=V)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function E(V){if(S=!1,y(V),!v)if(n(l)!==null)v=!0,j(T);else{var H=n(c);H!==null&&O(E,H.startTime-V)}}function T(V,H){v=!1,S&&(S=!1,u(x),x=-1),m=!0;var Q=d;try{for(y(H),h=n(l);h!==null&&(!(h.expirationTime>H)||V&&!N());){var le=h.callback;if(typeof le=="function"){h.callback=null,d=h.priorityLevel;var U=le(h.expirationTime<=H);H=t.unstable_now(),typeof U=="function"?h.callback=U:h===n(l)&&i(l),y(H)}else i(l);h=n(l)}if(h!==null)var ae=!0;else{var Me=n(c);Me!==null&&O(E,Me.startTime-H),ae=!1}return ae}finally{h=null,d=Q,m=!1}}var b=!1,w=null,x=-1,C=5,D=-1;function N(){return!(t.unstable_now()-D<C)}function P(){if(w!==null){var V=t.unstable_now();D=V;var H=!0;try{H=w(!0,V)}finally{H?F():(b=!1,w=null)}}else b=!1}var F;if(typeof g=="function")F=function(){g(P)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,z=W.port2;W.port1.onmessage=P,F=function(){z.postMessage(null)}}else F=function(){p(P,0)};function j(V){w=V,b||(b=!0,F())}function O(V,H){x=p(function(){V(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,j(T))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var Q=d;d=H;try{return V()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,H){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Q=d;d=V;try{return H()}finally{d=Q}},t.unstable_scheduleCallback=function(V,H,Q){var le=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,V){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Q+U,V={id:f++,callback:H,priorityLevel:V,startTime:Q,expirationTime:U,sortIndex:-1},Q>le?(V.sortIndex=Q,e(c,V),n(l)===null&&V===n(c)&&(S?(u(x),x=-1):S=!0,O(E,Q-le))):(V.sortIndex=U,e(l,V),v||m||(v=!0,j(T))),V},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(V){var H=d;return function(){var Q=d;d=H;try{return V.apply(this,arguments)}finally{d=Q}}}})(p_);h_.exports=p_;var Jx=h_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qx=L,Fn=Jx;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m_=new Set,Ja={};function us(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(Ja[t]=e,t=0;t<e.length;t++)m_.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),od=Object.prototype.hasOwnProperty,ey=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mp={},Tp={};function ty(t){return od.call(Tp,t)?!0:od.call(Mp,t)?!1:ey.test(t)?Tp[t]=!0:(Mp[t]=!0,!1)}function ny(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iy(t,e,n,i){if(e===null||typeof e>"u"||ny(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var nh=/[\-:]([a-z])/g;function ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nh,ih);Zt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nh,ih);Zt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nh,ih);Zt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iy(e,n,r,i)&&(n=null),i||r===null?ty(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=Qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fo=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),__=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),v_=Symbol.for("react.offscreen"),wp=Symbol.iterator;function xa(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Yc;function Ua(t){if(Yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yc=e&&e[1]||""}return`
`+Yc+t}var Kc=!1;function Zc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ua(t):""}function ry(t){switch(t.tag){case 5:return Ua(t.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ls:return"Portal";case ld:return"Profiler";case sh:return"StrictMode";case cd:return"Suspense";case ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case __:return(t.displayName||"Context")+".Consumer";case g_:return(t._context.displayName||"Context")+".Provider";case ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oh:return e=t.displayName||null,e!==null?e:dd(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return dd(t(e))}catch{}}return null}function sy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(e);case 8:return e===sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ay(t){var e=x_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oo(t){t._valueTracker||(t._valueTracker=ay(t))}function y_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=x_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fd(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S_(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function hd(t,e){S_(t,e);var n=Rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&pd(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pd(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fa=Array.isArray;function js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Fa(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function E_(t,e){var n=Rr(e.value),i=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Rp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function M_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?M_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ko,T_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oy=["Webkit","ms","Moz","O"];Object.keys(Ga).forEach(function(t){oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ga[e]=Ga[t]})});function w_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ga.hasOwnProperty(t)&&Ga[t]?(""+e).trim():e+"px"}function C_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=w_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ly=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _d(t,e){if(e){if(ly[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function vd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yd=null,Ws=null,$s=null;function Pp(t){if(t=wo(t)){if(typeof yd!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Ac(e),yd(t.stateNode,t.type,e))}}function b_(t){Ws?$s?$s.push(t):$s=[t]:Ws=t}function A_(){if(Ws){var t=Ws,e=$s;if($s=Ws=null,Pp(t),e)for(t=0;t<e.length;t++)Pp(e[t])}}function R_(t,e){return t(e)}function P_(){}var Jc=!1;function N_(t,e,n){if(Jc)return t(e,n);Jc=!0;try{return R_(t,e,n)}finally{Jc=!1,(Ws!==null||$s!==null)&&(P_(),A_())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Sd=!1;if(ji)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{Sd=!1}function cy(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ja=!1,$l=null,Xl=!1,Ed=null,uy={onError:function(t){ja=!0,$l=t}};function dy(t,e,n,i,r,s,a,o,l){ja=!1,$l=null,cy.apply(uy,arguments)}function fy(t,e,n,i,r,s,a,o,l){if(dy.apply(this,arguments),ja){if(ja){var c=$l;ja=!1,$l=null}else throw Error(ce(198));Xl||(Xl=!0,Ed=c)}}function ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function L_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Np(t){if(ds(t)!==t)throw Error(ce(188))}function hy(t){var e=t.alternate;if(!e){if(e=ds(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Np(r),t;if(s===i)return Np(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function D_(t){return t=hy(t),t!==null?I_(t):null}function I_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=I_(t);if(e!==null)return e;t=t.sibling}return null}var U_=Fn.unstable_scheduleCallback,Lp=Fn.unstable_cancelCallback,py=Fn.unstable_shouldYield,my=Fn.unstable_requestPaint,Lt=Fn.unstable_now,gy=Fn.unstable_getCurrentPriorityLevel,ch=Fn.unstable_ImmediatePriority,F_=Fn.unstable_UserBlockingPriority,ql=Fn.unstable_NormalPriority,_y=Fn.unstable_LowPriority,O_=Fn.unstable_IdlePriority,Tc=null,xi=null;function vy(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Tc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:Sy,xy=Math.log,yy=Math.LN2;function Sy(t){return t>>>=0,t===0?32:31-(xy(t)/yy|0)|0}var Bo=64,zo=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Oa(o):(s&=a,s!==0&&(i=Oa(s)))}else a=n&~r,a!==0?i=Oa(a):s!==0&&(i=Oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function Ey(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function My(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ai(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Ey(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Md(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k_(){var t=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),t}function Qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function Ty(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function B_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z_,dh,V_,H_,G_,Td=!1,Vo=[],yr=null,Sr=null,Er=null,to=new Map,no=new Map,hr=[],wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dp(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function Sa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wo(e),e!==null&&dh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Cy(t,e,n,i,r){switch(e){case"focusin":return yr=Sa(yr,t,e,n,i,r),!0;case"dragenter":return Sr=Sa(Sr,t,e,n,i,r),!0;case"mouseover":return Er=Sa(Er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return to.set(s,Sa(to.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,no.set(s,Sa(no.get(s)||null,t,e,n,i,r)),!0}return!1}function j_(t){var e=Kr(t.target);if(e!==null){var n=ds(e);if(n!==null){if(e=n.tag,e===13){if(e=L_(n),e!==null){t.blockedOn=e,G_(t.priority,function(){V_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xd=i,n.target.dispatchEvent(i),xd=null}else return e=wo(n),e!==null&&dh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ip(t,e,n){Al(t)&&n.delete(e)}function by(){Td=!1,yr!==null&&Al(yr)&&(yr=null),Sr!==null&&Al(Sr)&&(Sr=null),Er!==null&&Al(Er)&&(Er=null),to.forEach(Ip),no.forEach(Ip)}function Ea(t,e){t.blockedOn===e&&(t.blockedOn=null,Td||(Td=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,by)))}function io(t){function e(r){return Ea(r,t)}if(0<Vo.length){Ea(Vo[0],t);for(var n=1;n<Vo.length;n++){var i=Vo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yr!==null&&Ea(yr,t),Sr!==null&&Ea(Sr,t),Er!==null&&Ea(Er,t),to.forEach(e),no.forEach(e),n=0;n<hr.length;n++)i=hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)j_(n),n.blockedOn===null&&hr.shift()}var Xs=Zi.ReactCurrentBatchConfig,Kl=!0;function Ay(t,e,n,i){var r=ut,s=Xs.transition;Xs.transition=null;try{ut=1,fh(t,e,n,i)}finally{ut=r,Xs.transition=s}}function Ry(t,e,n,i){var r=ut,s=Xs.transition;Xs.transition=null;try{ut=4,fh(t,e,n,i)}finally{ut=r,Xs.transition=s}}function fh(t,e,n,i){if(Kl){var r=wd(t,e,n,i);if(r===null)cu(t,e,i,Zl,n),Dp(t,i);else if(Cy(r,t,e,n,i))i.stopPropagation();else if(Dp(t,i),e&4&&-1<wy.indexOf(t)){for(;r!==null;){var s=wo(r);if(s!==null&&z_(s),s=wd(t,e,n,i),s===null&&cu(t,e,i,Zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cu(t,e,i,null,n)}}var Zl=null;function wd(t,e,n,i){if(Zl=null,t=lh(i),t=Kr(t),t!==null)if(e=ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=L_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function W_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gy()){case ch:return 1;case F_:return 4;case ql:case _y:return 16;case O_:return 536870912;default:return 16}default:return 16}}var gr=null,hh=null,Rl=null;function $_(){if(Rl)return Rl;var t,e=hh,n=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Rl=r.slice(t,1<i?1-i:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function Up(){return!1}function kn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:Up,this.isPropagationStopped=Up,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),e}var fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=kn(fa),To=bt({},fa,{view:0,detail:0}),Py=kn(To),eu,tu,Ma,wc=bt({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ma&&(Ma&&t.type==="mousemove"?(eu=t.screenX-Ma.screenX,tu=t.screenY-Ma.screenY):tu=eu=0,Ma=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Fp=kn(wc),Ny=bt({},wc,{dataTransfer:0}),Ly=kn(Ny),Dy=bt({},To,{relatedTarget:0}),nu=kn(Dy),Iy=bt({},fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Uy=kn(Iy),Fy=bt({},fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Oy=kn(Fy),ky=bt({},fa,{data:0}),Op=kn(ky),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vy[t])?!!e[t]:!1}function mh(){return Hy}var Gy=bt({},To,{key:function(t){if(t.key){var e=By[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jy=kn(Gy),Wy=bt({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=kn(Wy),$y=bt({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),Xy=kn($y),qy=bt({},fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=kn(qy),Ky=bt({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=kn(Ky),Jy=[9,13,27,32],gh=ji&&"CompositionEvent"in window,Wa=null;ji&&"documentMode"in document&&(Wa=document.documentMode);var Qy=ji&&"TextEvent"in window&&!Wa,X_=ji&&(!gh||Wa&&8<Wa&&11>=Wa),Bp=" ",zp=!1;function q_(t,e){switch(t){case"keyup":return Jy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function eS(t,e){switch(t){case"compositionend":return Y_(e);case"keypress":return e.which!==32?null:(zp=!0,Bp);case"textInput":return t=e.data,t===Bp&&zp?null:t;default:return null}}function tS(t,e){if(Is)return t==="compositionend"||!gh&&q_(t,e)?(t=$_(),Rl=hh=gr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return X_&&e.locale!=="ko"?null:e.data;default:return null}}var nS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nS[t.type]:e==="textarea"}function K_(t,e,n,i){b_(i),e=Jl(e,"onChange"),0<e.length&&(n=new ph("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $a=null,ro=null;function iS(t){o0(t,0)}function Cc(t){var e=Os(t);if(y_(e))return t}function rS(t,e){if(t==="change")return e}var Z_=!1;if(ji){var iu;if(ji){var ru="oninput"in document;if(!ru){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),ru=typeof Hp.oninput=="function"}iu=ru}else iu=!1;Z_=iu&&(!document.documentMode||9<document.documentMode)}function Gp(){$a&&($a.detachEvent("onpropertychange",J_),ro=$a=null)}function J_(t){if(t.propertyName==="value"&&Cc(ro)){var e=[];K_(e,ro,t,lh(t)),N_(iS,e)}}function sS(t,e,n){t==="focusin"?(Gp(),$a=e,ro=n,$a.attachEvent("onpropertychange",J_)):t==="focusout"&&Gp()}function aS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(ro)}function oS(t,e){if(t==="click")return Cc(e)}function lS(t,e){if(t==="input"||t==="change")return Cc(e)}function cS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:cS;function so(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!od.call(e,r)||!li(t[r],e[r]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,e){var n=jp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jp(n)}}function Q_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Q_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e0(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function _h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uS(t){var e=e0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Q_(n.ownerDocument.documentElement,n)){if(i!==null&&_h(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wp(n,s);var a=Wp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dS=ji&&"documentMode"in document&&11>=document.documentMode,Us=null,Cd=null,Xa=null,bd=!1;function $p(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bd||Us==null||Us!==Wl(i)||(i=Us,"selectionStart"in i&&_h(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xa&&so(Xa,i)||(Xa=i,i=Jl(Cd,"onSelect"),0<i.length&&(e=new ph("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Us)))}function Go(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},su={},t0={};ji&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function bc(t){if(su[t])return su[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t0)return su[t]=e[n];return t}var n0=bc("animationend"),i0=bc("animationiteration"),r0=bc("animationstart"),s0=bc("transitionend"),a0=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){a0.set(t,e),us(e,[t])}for(var au=0;au<Xp.length;au++){var ou=Xp[au],fS=ou.toLowerCase(),hS=ou[0].toUpperCase()+ou.slice(1);Lr(fS,"on"+hS)}Lr(n0,"onAnimationEnd");Lr(i0,"onAnimationIteration");Lr(r0,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(s0,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function qp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,fy(i,e,void 0,t),t.currentTarget=null}function o0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;qp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;qp(r,o,c),s=l}}}if(Xl)throw t=Ed,Xl=!1,Ed=null,t}function yt(t,e){var n=e[Ld];n===void 0&&(n=e[Ld]=new Set);var i=t+"__bubble";n.has(i)||(l0(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),l0(n,t,i,e)}var jo="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[jo]){t[jo]=!0,m_.forEach(function(n){n!=="selectionchange"&&(pS.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jo]||(e[jo]=!0,lu("selectionchange",!1,e))}}function l0(t,e,n,i){switch(W_(e)){case 1:var r=Ay;break;case 4:r=Ry;break;default:r=fh}n=r.bind(null,e,n,t),r=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Kr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}N_(function(){var c=s,f=lh(n),h=[];e:{var d=a0.get(t);if(d!==void 0){var m=ph,v=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":m=jy;break;case"focusin":v="focus",m=nu;break;case"focusout":v="blur",m=nu;break;case"beforeblur":case"afterblur":m=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ly;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Xy;break;case n0:case i0:case r0:m=Uy;break;case s0:m=Yy;break;case"scroll":m=Py;break;case"wheel":m=Zy;break;case"copy":case"cut":case"paste":m=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=kp}var S=(e&4)!==0,p=!S&&t==="scroll",u=S?d!==null?d+"Capture":null:d;S=[];for(var g=c,y;g!==null;){y=g;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,u!==null&&(E=eo(g,u),E!=null&&S.push(oo(g,E,y)))),p)break;g=g.return}0<S.length&&(d=new m(d,v,null,n,f),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==xd&&(v=n.relatedTarget||n.fromElement)&&(Kr(v)||v[Wi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Kr(v):null,v!==null&&(p=ds(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(S=Fp,E="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=kp,E="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?d:Os(m),y=v==null?d:Os(v),d=new S(E,g+"leave",m,n,f),d.target=p,d.relatedTarget=y,E=null,Kr(f)===c&&(S=new S(u,g+"enter",v,n,f),S.target=y,S.relatedTarget=p,E=S),p=E,m&&v)t:{for(S=m,u=v,g=0,y=S;y;y=_s(y))g++;for(y=0,E=u;E;E=_s(E))y++;for(;0<g-y;)S=_s(S),g--;for(;0<y-g;)u=_s(u),y--;for(;g--;){if(S===u||u!==null&&S===u.alternate)break t;S=_s(S),u=_s(u)}S=null}else S=null;m!==null&&Yp(h,d,m,S,!1),v!==null&&p!==null&&Yp(h,p,v,S,!0)}}e:{if(d=c?Os(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=rS;else if(Vp(d))if(Z_)T=lS;else{T=aS;var b=sS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=oS);if(T&&(T=T(t,c))){K_(h,T,n,f);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&pd(d,"number",d.value)}switch(b=c?Os(c):window,t){case"focusin":(Vp(b)||b.contentEditable==="true")&&(Us=b,Cd=c,Xa=null);break;case"focusout":Xa=Cd=Us=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,$p(h,n,f);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":$p(h,n,f)}var w;if(gh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Is?q_(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(X_&&n.locale!=="ko"&&(Is||x!=="onCompositionStart"?x==="onCompositionEnd"&&Is&&(w=$_()):(gr=f,hh="value"in gr?gr.value:gr.textContent,Is=!0)),b=Jl(c,x),0<b.length&&(x=new Op(x,t,null,n,f),h.push({event:x,listeners:b}),w?x.data=w:(w=Y_(n),w!==null&&(x.data=w)))),(w=Qy?eS(t,n):tS(t,n))&&(c=Jl(c,"onBeforeInput"),0<c.length&&(f=new Op("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=w))}o0(h,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=eo(t,n),s!=null&&i.unshift(oo(t,s,r)),s=eo(t,e),s!=null&&i.push(oo(t,s,r))),t=t.return}return i}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=eo(n,s),l!=null&&a.unshift(oo(n,l,o))):r||(l=eo(n,s),l!=null&&a.push(oo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function Kp(t){return(typeof t=="string"?t:""+t).replace(mS,`
`).replace(gS,"")}function Wo(t,e,n){if(e=Kp(e),Kp(t)!==e&&n)throw Error(ce(425))}function Ql(){}var Ad=null,Rd=null;function Pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(t){return Zp.resolve(null).then(t).catch(xS)}:Nd;function xS(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),io(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);io(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ha=Math.random().toString(36).slice(2),gi="__reactFiber$"+ha,lo="__reactProps$"+ha,Wi="__reactContainer$"+ha,Ld="__reactEvents$"+ha,yS="__reactListeners$"+ha,SS="__reactHandles$"+ha;function Kr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jp(t);t!==null;){if(n=t[gi])return n;t=Jp(t)}return e}t=n,n=t.parentNode}return null}function wo(t){return t=t[gi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Ac(t){return t[lo]||null}var Dd=[],ks=-1;function Dr(t){return{current:t}}function St(t){0>ks||(t.current=Dd[ks],Dd[ks]=null,ks--)}function vt(t,e){ks++,Dd[ks]=t.current,t.current=e}var Pr={},on=Dr(Pr),En=Dr(!1),is=Pr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return Pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function ec(){St(En),St(on)}function Qp(t,e,n){if(on.current!==Pr)throw Error(ce(168));vt(on,e),vt(En,n)}function c0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,sy(t)||"Unknown",r));return bt({},n,i)}function tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,is=on.current,vt(on,t),vt(En,En.current),!0}function em(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=c0(t,e,is),i.__reactInternalMemoizedMergedChildContext=t,St(En),St(on),vt(on,t)):St(En),vt(En,n)}var Ui=null,Rc=!1,du=!1;function u0(t){Ui===null?Ui=[t]:Ui.push(t)}function ES(t){Rc=!0,u0(t)}function Ir(){if(!du&&Ui!==null){du=!0;var t=0,e=ut;try{var n=Ui;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,Rc=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),U_(ch,Ir),r}finally{ut=e,du=!1}}return null}var Bs=[],zs=0,nc=null,ic=0,Vn=[],Hn=0,rs=null,Oi=1,ki="";function jr(t,e){Bs[zs++]=ic,Bs[zs++]=nc,nc=t,ic=e}function d0(t,e,n){Vn[Hn++]=Oi,Vn[Hn++]=ki,Vn[Hn++]=rs,rs=t;var i=Oi;t=ki;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Oi=1<<32-ai(e)+r|n<<r|i,ki=s+t}else Oi=1<<s|n<<r|i,ki=t}function vh(t){t.return!==null&&(jr(t,1),d0(t,1,0))}function xh(t){for(;t===nc;)nc=Bs[--zs],Bs[zs]=null,ic=Bs[--zs],Bs[zs]=null;for(;t===rs;)rs=Vn[--Hn],Vn[Hn]=null,ki=Vn[--Hn],Vn[Hn]=null,Oi=Vn[--Hn],Vn[Hn]=null}var In=null,Ln=null,Et=!1,ni=null;function f0(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Ln=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rs!==null?{id:Oi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Ln=null,!0):!1;default:return!1}}function Id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ud(t){if(Et){var e=Ln;if(e){var n=e;if(!tm(t,e)){if(Id(t))throw Error(ce(418));e=Mr(n.nextSibling);var i=In;e&&tm(t,e)?f0(i,n):(t.flags=t.flags&-4097|2,Et=!1,In=t)}}else{if(Id(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Et=!1,In=t}}}function nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function $o(t){if(t!==In)return!1;if(!Et)return nm(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pd(t.type,t.memoizedProps)),e&&(e=Ln)){if(Id(t))throw h0(),Error(ce(418));for(;e;)f0(t,e),e=Mr(e.nextSibling)}if(nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=In?Mr(t.stateNode.nextSibling):null;return!0}function h0(){for(var t=Ln;t;)t=Mr(t.nextSibling)}function ea(){Ln=In=null,Et=!1}function yh(t){ni===null?ni=[t]:ni.push(t)}var MS=Zi.ReactCurrentBatchConfig;function Ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Xo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function im(t){var e=t._init;return e(t._payload)}function p0(t){function e(u,g){if(t){var y=u.deletions;y===null?(u.deletions=[g],u.flags|=16):y.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=br(u,g),u.index=0,u.sibling=null,u}function s(u,g,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<g?(u.flags|=2,g):y):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,y,E){return g===null||g.tag!==6?(g=vu(y,u.mode,E),g.return=u,g):(g=r(g,y),g.return=u,g)}function l(u,g,y,E){var T=y.type;return T===Ds?f(u,g,y.props.children,E,y.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===dr&&im(T)===g.type)?(E=r(g,y.props),E.ref=Ta(u,g,y),E.return=u,E):(E=Ol(y.type,y.key,y.props,null,u.mode,E),E.ref=Ta(u,g,y),E.return=u,E)}function c(u,g,y,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=xu(y,u.mode,E),g.return=u,g):(g=r(g,y.children||[]),g.return=u,g)}function f(u,g,y,E,T){return g===null||g.tag!==7?(g=ns(y,u.mode,E,T),g.return=u,g):(g=r(g,y),g.return=u,g)}function h(u,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=vu(""+g,u.mode,y),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fo:return y=Ol(g.type,g.key,g.props,null,u.mode,y),y.ref=Ta(u,null,g),y.return=u,y;case Ls:return g=xu(g,u.mode,y),g.return=u,g;case dr:var E=g._init;return h(u,E(g._payload),y)}if(Fa(g)||xa(g))return g=ns(g,u.mode,y,null),g.return=u,g;Xo(u,g)}return null}function d(u,g,y,E){var T=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:o(u,g,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Fo:return y.key===T?l(u,g,y,E):null;case Ls:return y.key===T?c(u,g,y,E):null;case dr:return T=y._init,d(u,g,T(y._payload),E)}if(Fa(y)||xa(y))return T!==null?null:f(u,g,y,E,null);Xo(u,y)}return null}function m(u,g,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(y)||null,o(g,u,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Fo:return u=u.get(E.key===null?y:E.key)||null,l(g,u,E,T);case Ls:return u=u.get(E.key===null?y:E.key)||null,c(g,u,E,T);case dr:var b=E._init;return m(u,g,y,b(E._payload),T)}if(Fa(E)||xa(E))return u=u.get(y)||null,f(g,u,E,T,null);Xo(g,E)}return null}function v(u,g,y,E){for(var T=null,b=null,w=g,x=g=0,C=null;w!==null&&x<y.length;x++){w.index>x?(C=w,w=null):C=w.sibling;var D=d(u,w,y[x],E);if(D===null){w===null&&(w=C);break}t&&w&&D.alternate===null&&e(u,w),g=s(D,g,x),b===null?T=D:b.sibling=D,b=D,w=C}if(x===y.length)return n(u,w),Et&&jr(u,x),T;if(w===null){for(;x<y.length;x++)w=h(u,y[x],E),w!==null&&(g=s(w,g,x),b===null?T=w:b.sibling=w,b=w);return Et&&jr(u,x),T}for(w=i(u,w);x<y.length;x++)C=m(w,u,x,y[x],E),C!==null&&(t&&C.alternate!==null&&w.delete(C.key===null?x:C.key),g=s(C,g,x),b===null?T=C:b.sibling=C,b=C);return t&&w.forEach(function(N){return e(u,N)}),Et&&jr(u,x),T}function S(u,g,y,E){var T=xa(y);if(typeof T!="function")throw Error(ce(150));if(y=T.call(y),y==null)throw Error(ce(151));for(var b=T=null,w=g,x=g=0,C=null,D=y.next();w!==null&&!D.done;x++,D=y.next()){w.index>x?(C=w,w=null):C=w.sibling;var N=d(u,w,D.value,E);if(N===null){w===null&&(w=C);break}t&&w&&N.alternate===null&&e(u,w),g=s(N,g,x),b===null?T=N:b.sibling=N,b=N,w=C}if(D.done)return n(u,w),Et&&jr(u,x),T;if(w===null){for(;!D.done;x++,D=y.next())D=h(u,D.value,E),D!==null&&(g=s(D,g,x),b===null?T=D:b.sibling=D,b=D);return Et&&jr(u,x),T}for(w=i(u,w);!D.done;x++,D=y.next())D=m(w,u,x,D.value,E),D!==null&&(t&&D.alternate!==null&&w.delete(D.key===null?x:D.key),g=s(D,g,x),b===null?T=D:b.sibling=D,b=D);return t&&w.forEach(function(P){return e(u,P)}),Et&&jr(u,x),T}function p(u,g,y,E){if(typeof y=="object"&&y!==null&&y.type===Ds&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Fo:e:{for(var T=y.key,b=g;b!==null;){if(b.key===T){if(T=y.type,T===Ds){if(b.tag===7){n(u,b.sibling),g=r(b,y.props.children),g.return=u,u=g;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===dr&&im(T)===b.type){n(u,b.sibling),g=r(b,y.props),g.ref=Ta(u,b,y),g.return=u,u=g;break e}n(u,b);break}else e(u,b);b=b.sibling}y.type===Ds?(g=ns(y.props.children,u.mode,E,y.key),g.return=u,u=g):(E=Ol(y.type,y.key,y.props,null,u.mode,E),E.ref=Ta(u,g,y),E.return=u,u=E)}return a(u);case Ls:e:{for(b=y.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(u,g.sibling),g=r(g,y.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=xu(y,u.mode,E),g.return=u,u=g}return a(u);case dr:return b=y._init,p(u,g,b(y._payload),E)}if(Fa(y))return v(u,g,y,E);if(xa(y))return S(u,g,y,E);Xo(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,y),g.return=u,u=g):(n(u,g),g=vu(y,u.mode,E),g.return=u,u=g),a(u)):n(u,g)}return p}var ta=p0(!0),m0=p0(!1),rc=Dr(null),sc=null,Vs=null,Sh=null;function Eh(){Sh=Vs=sc=null}function Mh(t){var e=rc.current;St(rc),t._currentValue=e}function Fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){sc=t,Sh=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Sh!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(sc===null)throw Error(ce(308));Vs=t,sc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Zr=null;function Th(t){Zr===null?Zr=[t]:Zr.push(t)}function g0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Th(e)):(n.next=r.next,r.next=n),e.interleaved=n,$i(t,i)}function $i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(t,n)}return r=i.interleaved,r===null?(e.next=e,Th(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}function rm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,i){var r=t.updateQueue;fr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,S=o;switch(d=e,m=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=bt({},h,d);break e;case 2:fr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);as|=a,t.lanes=a,t.memoizedState=h}}function sm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Co={},yi=Dr(Co),co=Dr(Co),uo=Dr(Co);function Jr(t){if(t===Co)throw Error(ce(174));return t}function Ch(t,e){switch(vt(uo,e),vt(co,t),vt(yi,Co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gd(e,t)}St(yi),vt(yi,e)}function na(){St(yi),St(co),St(uo)}function v0(t){Jr(uo.current);var e=Jr(yi.current),n=gd(e,t.type);e!==n&&(vt(co,t),vt(yi,n))}function bh(t){co.current===t&&(St(yi),St(co))}var wt=Dr(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Ah(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var Ll=Zi.ReactCurrentDispatcher,hu=Zi.ReactCurrentBatchConfig,ss=0,Ct=null,Bt=null,Wt=null,lc=!1,qa=!1,fo=0,TS=0;function Qt(){throw Error(ce(321))}function Rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function Ph(t,e,n,i,r,s){if(ss=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?AS:RS,t=n(i,r),qa){s=0;do{if(qa=!1,fo=0,25<=s)throw Error(ce(301));s+=1,Wt=Bt=null,e.updateQueue=null,Ll.current=PS,t=n(i,r)}while(qa)}if(Ll.current=cc,e=Bt!==null&&Bt.next!==null,ss=0,Wt=Bt=Ct=null,lc=!1,e)throw Error(ce(300));return t}function Nh(){var t=fo!==0;return fo=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Ct.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Xn(){if(Bt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Wt===null?Ct.memoizedState:Wt.next;if(e!==null)Wt=e,Bt=t;else{if(t===null)throw Error(ce(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Wt===null?Ct.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function ho(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((ss&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Ct.lanes|=f,as|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,li(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,as|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);li(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function x0(){}function y0(t,e){var n=Ct,i=Xn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,Lh(M0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,po(9,E0.bind(null,n,i,r,e),void 0,null),$t===null)throw Error(ce(349));ss&30||S0(n,e,r)}return r}function S0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function E0(t,e,n,i){e.value=n,e.getSnapshot=i,T0(e)&&w0(t)}function M0(t,e,n){return n(function(){T0(e)&&w0(t)})}function T0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function w0(t){var e=$i(t,1);e!==null&&oi(e,t,1,-1)}function am(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=bS.bind(null,Ct,t),[e.memoizedState,t]}function po(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function C0(){return Xn().memoizedState}function Dl(t,e,n,i){var r=pi();Ct.flags|=t,r.memoizedState=po(1|e,n,void 0,i===void 0?null:i)}function Pc(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&Rh(i,a.deps)){r.memoizedState=po(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=po(1|e,n,s,i)}function om(t,e){return Dl(8390656,8,t,e)}function Lh(t,e){return Pc(2048,8,t,e)}function b0(t,e){return Pc(4,2,t,e)}function A0(t,e){return Pc(4,4,t,e)}function R0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P0(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4,4,R0.bind(null,e,t),n)}function Dh(){}function N0(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function L0(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function D0(t,e,n){return ss&21?(li(n,e)||(n=k_(),Ct.lanes|=n,as|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function wS(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=hu.transition;hu.transition={};try{t(!1),e()}finally{ut=n,hu.transition=i}}function I0(){return Xn().memoizedState}function CS(t,e,n){var i=Cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},U0(t))F0(e,n);else if(n=g0(t,e,n,i),n!==null){var r=fn();oi(n,t,i,r),O0(n,e,i)}}function bS(t,e,n){var i=Cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(U0(t))F0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,li(o,a)){var l=e.interleaved;l===null?(r.next=r,Th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=g0(t,e,r,i),n!==null&&(r=fn(),oi(n,t,i,r),O0(n,e,i))}}function U0(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function F0(t,e){qa=lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}var cc={readContext:$n,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},AS={readContext:$n,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,R0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=CS.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:am,useDebugValue:Dh,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=am(!1),e=t[0];return t=wS.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=pi();if(Et){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),$t===null)throw Error(ce(349));ss&30||S0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,om(M0.bind(null,i,s,t),[t]),i.flags|=2048,po(9,E0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=$t.identifierPrefix;if(Et){var n=ki,i=Oi;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RS={readContext:$n,useCallback:N0,useContext:$n,useEffect:Lh,useImperativeHandle:P0,useInsertionEffect:b0,useLayoutEffect:A0,useMemo:L0,useReducer:pu,useRef:C0,useState:function(){return pu(ho)},useDebugValue:Dh,useDeferredValue:function(t){var e=Xn();return D0(e,Bt.memoizedState,t)},useTransition:function(){var t=pu(ho)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:x0,useSyncExternalStore:y0,useId:I0,unstable_isNewReconciler:!1},PS={readContext:$n,useCallback:N0,useContext:$n,useEffect:Lh,useImperativeHandle:P0,useInsertionEffect:b0,useLayoutEffect:A0,useMemo:L0,useReducer:mu,useRef:C0,useState:function(){return mu(ho)},useDebugValue:Dh,useDeferredValue:function(t){var e=Xn();return Bt===null?e.memoizedState=t:D0(e,Bt.memoizedState,t)},useTransition:function(){var t=mu(ho)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:x0,useSyncExternalStore:y0,useId:I0,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Od(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Cr(t),s=zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(oi(e,t,r,i),Nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Cr(t),s=zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(oi(e,t,r,i),Nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=Cr(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Tr(t,r,i),e!==null&&(oi(e,t,i,n),Nl(e,t,i))}};function lm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!so(n,i)||!so(r,s):!0}function k0(t,e,n){var i=!1,r=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=Mn(e)?is:on.current,i=e.contextTypes,s=(i=i!=null)?Qs(t,r):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function cm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=Mn(e)?is:on.current,r.context=Qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Od(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nc.enqueueReplaceState(r,r.state,null),ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ia(t,e){try{var n="",i=e;do n+=ry(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NS=typeof WeakMap=="function"?WeakMap:Map;function B0(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dc||(dc=!0,Yd=i),Bd(t,e)},n}function z0(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bd(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function um(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new NS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=WS.bind(null,t,e,n),e.then(t,t))}function dm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var LS=Zi.ReactCurrentOwner,Sn=!1;function un(t,e,n,i){e.child=t===null?m0(e,null,n,i):ta(e,t.child,n,i)}function hm(t,e,n,i,r){n=n.render;var s=e.ref;return qs(e,r),i=Ph(t,e,n,i,s,r),n=Nh(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(Et&&n&&vh(e),e.flags|=1,un(t,e,i,r),e.child)}function pm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V0(t,e,s,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(a,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=br(s,i),t.ref=e.ref,t.return=e,e.child=t}function V0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(so(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return zd(t,e,n,i,r)}function H0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Gs,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Gs,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Gs,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Gs,Nn),Nn|=i;return un(t,e,r,n),e.child}function G0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zd(t,e,n,i,r){var s=Mn(n)?is:on.current;return s=Qs(e,s),qs(e,r),n=Ph(t,e,n,i,s,r),i=Nh(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(Et&&i&&vh(e),e.flags|=1,un(t,e,n,r),e.child)}function mm(t,e,n,i,r){if(Mn(n)){var s=!0;tc(e)}else s=!1;if(qs(e,r),e.stateNode===null)Il(t,e),k0(e,n,i),kd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=Mn(n)?is:on.current,c=Qs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&cm(e,a,i,c),fr=!1;var d=e.memoizedState;a.state=d,ac(e,i,a,r),l=e.memoizedState,o!==i||d!==l||En.current||fr?(typeof f=="function"&&(Od(e,n,f,i),l=e.memoizedState),(o=fr||lm(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,_0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ei(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=Mn(n)?is:on.current,l=Qs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&cm(e,a,i,l),fr=!1,d=e.memoizedState,a.state=d,ac(e,i,a,r);var v=e.memoizedState;o!==h||d!==v||En.current||fr?(typeof m=="function"&&(Od(e,n,m,i),v=e.memoizedState),(c=fr||lm(e,n,c,i,d,v,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Vd(t,e,n,i,s,r)}function Vd(t,e,n,i,r,s){G0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&em(e,n,!1),Xi(t,e,s);i=e.stateNode,LS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ta(e,t.child,null,s),e.child=ta(e,null,o,s)):un(t,e,o,s),e.memoizedState=i.state,r&&em(e,n,!0),e.child}function j0(t){var e=t.stateNode;e.pendingContext?Qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qp(t,e.context,!1),Ch(t,e.containerInfo)}function gm(t,e,n,i,r){return ea(),yh(r),e.flags|=256,un(t,e,n,i),e.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function W0(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(wt,r&1),t===null)return Ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ic(a,i,0,null),t=ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gd(n),e.memoizedState=Hd,t):Ih(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return DS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=br(o,s):(s=ns(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Gd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Hd,i}return s=t.child,t=s.sibling,i=br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ih(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qo(t,e,n,i){return i!==null&&yh(i),ta(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(ce(422))),qo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ic({mode:"visible",children:i.children},r,0,null),s=ns(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ta(e,t.child,null,a),e.child.memoizedState=Gd(a),e.memoizedState=Hd,s);if(!(e.mode&1))return qo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=gu(s,i,void 0),qo(t,e,a,i)}if(o=(a&t.childLanes)!==0,Sn||o){if(i=$t,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(t,r),oi(i,t,r,-1))}return zh(),i=gu(Error(ce(421))),qo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=$S.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=Mr(r.nextSibling),In=e,Et=!0,ni=null,t!==null&&(Vn[Hn++]=Oi,Vn[Hn++]=ki,Vn[Hn++]=rs,Oi=t.id,ki=t.overflow,rs=e),e=Ih(e,i.children),e.flags|=4096,e)}function _m(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fd(t.return,e,n)}function _u(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,n,e);else if(t.tag===19)_m(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_u(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_u(e,!0,n,null,s);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),as|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IS(t,e,n){switch(e.tag){case 3:j0(e),ea();break;case 5:v0(e);break;case 1:Mn(e.type)&&tc(e);break;case 4:Ch(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(rc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?W0(t,e,n):(vt(wt,wt.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);vt(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,H0(t,e,n)}return Xi(t,e,n)}var X0,jd,q0,Y0;X0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jd=function(){};q0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(yi.current);var s=null;switch(n){case"input":r=fd(t,r),i=fd(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=md(t,r),i=md(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}_d(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ja.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Y0=function(t,e,n,i){n!==i&&(e.flags|=4)};function wa(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function US(t,e,n){var i=e.pendingProps;switch(xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return Mn(e.type)&&ec(),en(e),null;case 3:return i=e.stateNode,na(),St(En),St(on),Ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Jd(ni),ni=null))),jd(t,e),en(e),null;case 5:bh(e);var r=Jr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)q0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return en(e),null}if(t=Jr(yi.current),$o(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[lo]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<ka.length;r++)yt(ka[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Cp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":Ap(i,s),yt("invalid",i)}_d(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,o,t),r=["children",""+o]):Ja.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(n){case"input":Oo(i),bp(i,s,!0);break;case"textarea":Oo(i),Rp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=M_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[gi]=e,t[lo]=i,X0(t,e,!1,!1),e.stateNode=t;e:{switch(a=vd(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ka.length;r++)yt(ka[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":Cp(t,i),r=fd(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),yt("invalid",t);break;case"textarea":Ap(t,i),r=md(t,i),yt("invalid",t);break;default:r=i}_d(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?C_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qa(t,l):typeof l=="number"&&Qa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ja.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",t):l!=null&&rh(t,s,l,a))}switch(n){case"input":Oo(t),bp(t,i,!1);break;case"textarea":Oo(t),Rp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?js(t,!!i.multiple,s,!1):i.defaultValue!=null&&js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)Y0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Jr(uo.current),Jr(yi.current),$o(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:Wo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return en(e),null;case 13:if(St(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Ln!==null&&e.mode&1&&!(e.flags&128))h0(),ea(),e.flags|=98560,s=!1;else if(s=$o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[gi]=e}else ea(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ni!==null&&(Jd(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?zt===0&&(zt=3):zh())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return na(),jd(t,e),t===null&&ao(e.stateNode.containerInfo),en(e),null;case 10:return Mh(e.type._context),en(e),null;case 17:return Mn(e.type)&&ec(),en(e),null;case 19:if(St(wt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)wa(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=oc(t),a!==null){for(e.flags|=128,wa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>ra&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304)}else{if(!i)if(t=oc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return en(e),null}else 2*Lt()-s.renderingStartTime>ra&&n!==1073741824&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=wt.current,vt(wt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function FS(t,e){switch(xh(e),e.tag){case 1:return Mn(e.type)&&ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return na(),St(En),St(on),Ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bh(e),null;case 13:if(St(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));ea()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(wt),null;case 4:return na(),null;case 10:return Mh(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var Yo=!1,sn=!1,OS=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function Wd(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var vm=!1;function kS(t,e){if(Ad=Kl,t=e0(),_h(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rd={focusedElem:t,selectionRange:n},Kl=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,p=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:ei(e.type,S),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(E){Pt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return v=vm,vm=!1,v}function Ya(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wd(e,n,s)}r=r.next}while(r!==i)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K0(t){var e=t.alternate;e!==null&&(t.alternate=null,K0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[lo],delete e[Ld],delete e[yS],delete e[SS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z0(t){return t.tag===5||t.tag===3||t.tag===4}function xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}function qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}var qt=null,ti=!1;function tr(t,e,n){for(n=n.child;n!==null;)J0(t,e,n),n=n.sibling}function J0(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:sn||Hs(n,e);case 6:var i=qt,r=ti;qt=null,tr(t,e,n),qt=i,ti=r,qt!==null&&(ti?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ti?(t=qt,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),io(t)):uu(qt,n.stateNode));break;case 4:i=qt,r=ti,qt=n.stateNode.containerInfo,ti=!0,tr(t,e,n),qt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Wd(n,e,a),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!sn&&(Hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Pt(n,e,o)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,tr(t,e,n),sn=i):tr(t,e,n);break;default:tr(t,e,n)}}function ym(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OS),e.forEach(function(i){var r=XS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:qt=o.stateNode,ti=!1;break e;case 3:qt=o.stateNode.containerInfo,ti=!0;break e;case 4:qt=o.stateNode.containerInfo,ti=!0;break e}o=o.return}if(qt===null)throw Error(ce(160));J0(s,a,r),qt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q0(e,t),e=e.sibling}function Q0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),di(t),i&4){try{Ya(3,t,t.return),Lc(3,t)}catch(S){Pt(t,t.return,S)}try{Ya(5,t,t.return)}catch(S){Pt(t,t.return,S)}}break;case 1:Kn(e,t),di(t),i&512&&n!==null&&Hs(n,n.return);break;case 5:if(Kn(e,t),di(t),i&512&&n!==null&&Hs(n,n.return),t.flags&32){var r=t.stateNode;try{Qa(r,"")}catch(S){Pt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&S_(r,s),vd(o,a);var c=vd(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?C_(r,h):f==="dangerouslySetInnerHTML"?T_(r,h):f==="children"?Qa(r,h):rh(r,f,h,c)}switch(o){case"input":hd(r,s);break;case"textarea":E_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?js(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[lo]=s}catch(S){Pt(t,t.return,S)}}break;case 6:if(Kn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Pt(t,t.return,S)}}break;case 3:if(Kn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(S){Pt(t,t.return,S)}break;case 4:Kn(e,t),di(t);break;case 13:Kn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Oh=Lt())),i&4&&ym(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,Kn(e,t),sn=c):Kn(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ce=t,f=t.child;f!==null;){for(h=Ce=f;Ce!==null;){switch(d=Ce,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ya(4,d,d.return);break;case 1:Hs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){Pt(i,n,S)}}break;case 5:Hs(d,d.return);break;case 22:if(d.memoizedState!==null){Em(h);continue}}m!==null?(m.return=d,Ce=m):Em(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=w_("display",a))}catch(S){Pt(t,t.return,S)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){Pt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Kn(e,t),di(t),i&4&&ym(t);break;case 21:break;default:Kn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z0(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qa(r,""),i.flags&=-33);var s=xm(t);qd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=xm(t);Xd(t,o,a);break;default:throw Error(ce(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BS(t,e,n){Ce=t,ev(t)}function ev(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Yo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||sn;o=Yo;var c=sn;if(Yo=a,(sn=l)&&!c)for(Ce=r;Ce!==null;)a=Ce,l=a.child,a.tag===22&&a.memoizedState!==null?Mm(r):l!==null?(l.return=a,Ce=l):Mm(r);for(;s!==null;)Ce=s,ev(s),s=s.sibling;Ce=r,Yo=o,sn=c}Sm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):Sm(t)}}function Sm(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&io(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}sn||e.flags&512&&$d(e)}catch(d){Pt(e,e.return,d)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function Em(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function Mm(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{$d(e)}catch(l){Pt(e,s,l)}break;case 5:var a=e.return;try{$d(e)}catch(l){Pt(e,a,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){Ce=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ce=o;break}Ce=e.return}}var zS=Math.ceil,uc=Zi.ReactCurrentDispatcher,Uh=Zi.ReactCurrentOwner,Wn=Zi.ReactCurrentBatchConfig,it=0,$t=null,Ft=null,Kt=0,Nn=0,Gs=Dr(0),zt=0,mo=null,as=0,Dc=0,Fh=0,Ka=null,yn=null,Oh=0,ra=1/0,Ii=null,dc=!1,Yd=null,wr=null,Ko=!1,_r=null,fc=0,Za=0,Kd=null,Ul=-1,Fl=0;function fn(){return it&6?Lt():Ul!==-1?Ul:Ul=Lt()}function Cr(t){return t.mode&1?it&2&&Kt!==0?Kt&-Kt:MS.transition!==null?(Fl===0&&(Fl=k_()),Fl):(t=ut,t!==0||(t=window.event,t=t===void 0?16:W_(t.type)),t):1}function oi(t,e,n,i){if(50<Za)throw Za=0,Kd=null,Error(ce(185));Mo(t,n,i),(!(it&2)||t!==$t)&&(t===$t&&(!(it&2)&&(Dc|=n),zt===4&&pr(t,Kt)),Tn(t,i),n===1&&it===0&&!(e.mode&1)&&(ra=Lt()+500,Rc&&Ir()))}function Tn(t,e){var n=t.callbackNode;My(t,e);var i=Yl(t,t===$t?Kt:0);if(i===0)n!==null&&Lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lp(n),e===1)t.tag===0?ES(Tm.bind(null,t)):u0(Tm.bind(null,t)),vS(function(){!(it&6)&&Ir()}),n=null;else{switch(B_(i)){case 1:n=ch;break;case 4:n=F_;break;case 16:n=ql;break;case 536870912:n=O_;break;default:n=ql}n=lv(n,tv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tv(t,e){if(Ul=-1,Fl=0,it&6)throw Error(ce(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var i=Yl(t,t===$t?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=hc(t,i);else{e=i;var r=it;it|=2;var s=iv();($t!==t||Kt!==e)&&(Ii=null,ra=Lt()+500,ts(t,e));do try{GS();break}catch(o){nv(t,o)}while(!0);Eh(),uc.current=s,it=r,Ft!==null?e=0:($t=null,Kt=0,e=zt)}if(e!==0){if(e===2&&(r=Md(t),r!==0&&(i=r,e=Zd(t,r))),e===1)throw n=mo,ts(t,0),pr(t,i),Tn(t,Lt()),n;if(e===6)pr(t,i);else{if(r=t.current.alternate,!(i&30)&&!VS(r)&&(e=hc(t,i),e===2&&(s=Md(t),s!==0&&(i=s,e=Zd(t,s))),e===1))throw n=mo,ts(t,0),pr(t,i),Tn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Wr(t,yn,Ii);break;case 3:if(pr(t,i),(i&130023424)===i&&(e=Oh+500-Lt(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nd(Wr.bind(null,t,yn,Ii),e);break}Wr(t,yn,Ii);break;case 4:if(pr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ai(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zS(i/1960))-i,10<i){t.timeoutHandle=Nd(Wr.bind(null,t,yn,Ii),i);break}Wr(t,yn,Ii);break;case 5:Wr(t,yn,Ii);break;default:throw Error(ce(329))}}}return Tn(t,Lt()),t.callbackNode===n?tv.bind(null,t):null}function Zd(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=hc(t,e),t!==2&&(e=yn,yn=n,e!==null&&Jd(e)),t}function Jd(t){yn===null?yn=t:yn.push.apply(yn,t)}function VS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Fh,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function Tm(t){if(it&6)throw Error(ce(327));Ys();var e=Yl(t,0);if(!(e&1))return Tn(t,Lt()),null;var n=hc(t,e);if(t.tag!==0&&n===2){var i=Md(t);i!==0&&(e=i,n=Zd(t,i))}if(n===1)throw n=mo,ts(t,0),pr(t,e),Tn(t,Lt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,yn,Ii),Tn(t,Lt()),null}function kh(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(ra=Lt()+500,Rc&&Ir())}}function os(t){_r!==null&&_r.tag===0&&!(it&6)&&Ys();var e=it;it|=1;var n=Wn.transition,i=ut;try{if(Wn.transition=null,ut=1,t)return t()}finally{ut=i,Wn.transition=n,it=e,!(it&6)&&Ir()}}function Bh(){Nn=Gs.current,St(Gs)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_S(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ec();break;case 3:na(),St(En),St(on),Ah();break;case 5:bh(i);break;case 4:na();break;case 13:St(wt);break;case 19:St(wt);break;case 10:Mh(i.type._context);break;case 22:case 23:Bh()}n=n.return}if($t=t,Ft=t=br(t.current,null),Kt=Nn=e,zt=0,mo=null,Fh=Dc=as=0,yn=Ka=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Zr=null}return t}function nv(t,e){do{var n=Ft;try{if(Eh(),Ll.current=cc,lc){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lc=!1}if(ss=0,Wt=Bt=Ct=null,qa=!1,fo=0,Uh.current=null,n===null||n.return===null){zt=1,mo=e,Ft=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=dm(a);if(m!==null){m.flags&=-257,fm(m,a,o,s,e),m.mode&1&&um(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){um(s,c,e),zh();break e}l=Error(ce(426))}}else if(Et&&o.mode&1){var p=dm(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),fm(p,a,o,s,e),yh(ia(l,o));break e}}s=l=ia(l,o),zt!==4&&(zt=2),Ka===null?Ka=[s]:Ka.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=B0(s,l,e);rm(s,u);break e;case 1:o=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wr===null||!wr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=z0(s,o,e);rm(s,E);break e}}s=s.return}while(s!==null)}sv(n)}catch(T){e=T,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function iv(){var t=uc.current;return uc.current=cc,t===null?cc:t}function zh(){(zt===0||zt===3||zt===2)&&(zt=4),$t===null||!(as&268435455)&&!(Dc&268435455)||pr($t,Kt)}function hc(t,e){var n=it;it|=2;var i=iv();($t!==t||Kt!==e)&&(Ii=null,ts(t,e));do try{HS();break}catch(r){nv(t,r)}while(!0);if(Eh(),it=n,uc.current=i,Ft!==null)throw Error(ce(261));return $t=null,Kt=0,zt}function HS(){for(;Ft!==null;)rv(Ft)}function GS(){for(;Ft!==null&&!py();)rv(Ft)}function rv(t){var e=ov(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?sv(t):Ft=e,Uh.current=null}function sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FS(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Ft=null;return}}else if(n=US(n,e,Nn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);zt===0&&(zt=5)}function Wr(t,e,n){var i=ut,r=Wn.transition;try{Wn.transition=null,ut=1,jS(t,e,n,i)}finally{Wn.transition=r,ut=i}return null}function jS(t,e,n,i){do Ys();while(_r!==null);if(it&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ty(t,s),t===$t&&(Ft=$t=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,lv(ql,function(){return Ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var a=ut;ut=1;var o=it;it|=4,Uh.current=null,kS(t,n),Q0(n,t),uS(Rd),Kl=!!Ad,Rd=Ad=null,t.current=n,BS(n),my(),it=o,ut=a,Wn.transition=s}else t.current=n;if(Ko&&(Ko=!1,_r=t,fc=r),s=t.pendingLanes,s===0&&(wr=null),vy(n.stateNode),Tn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dc)throw dc=!1,t=Yd,Yd=null,t;return fc&1&&t.tag!==0&&Ys(),s=t.pendingLanes,s&1?t===Kd?Za++:(Za=0,Kd=t):Za=0,Ir(),null}function Ys(){if(_r!==null){var t=B_(fc),e=Wn.transition,n=ut;try{if(Wn.transition=null,ut=16>t?16:t,_r===null)var i=!1;else{if(t=_r,_r=null,fc=0,it&6)throw Error(ce(331));var r=it;for(it|=4,Ce=t.current;Ce!==null;){var s=Ce,a=s.child;if(Ce.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ce=c;Ce!==null;){var f=Ce;switch(f.tag){case 0:case 11:case 15:Ya(8,f,s)}var h=f.child;if(h!==null)h.return=f,Ce=h;else for(;Ce!==null;){f=Ce;var d=f.sibling,m=f.return;if(K0(f),f===c){Ce=null;break}if(d!==null){d.return=m,Ce=d;break}Ce=m}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}Ce=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ce=a;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ya(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ce=u;break e}Ce=s.return}}var g=t.current;for(Ce=g;Ce!==null;){a=Ce;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ce=y;else e:for(a=g;Ce!==null;){if(o=Ce,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Lc(9,o)}}catch(T){Pt(o,o.return,T)}if(o===a){Ce=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Ce=E;break e}Ce=o.return}}if(it=r,Ir(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Tc,t)}catch{}i=!0}return i}finally{ut=n,Wn.transition=e}}return!1}function wm(t,e,n){e=ia(n,e),e=B0(t,e,1),t=Tr(t,e,1),e=fn(),t!==null&&(Mo(t,1,e),Tn(t,e))}function Pt(t,e,n){if(t.tag===3)wm(t,t,n);else for(;e!==null;){if(e.tag===3){wm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=ia(n,t),t=z0(e,t,1),e=Tr(e,t,1),t=fn(),e!==null&&(Mo(e,1,t),Tn(e,t));break}}e=e.return}}function WS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,$t===t&&(Kt&n)===n&&(zt===4||zt===3&&(Kt&130023424)===Kt&&500>Lt()-Oh?ts(t,0):Fh|=n),Tn(t,e)}function av(t,e){e===0&&(t.mode&1?(e=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):e=1);var n=fn();t=$i(t,e),t!==null&&(Mo(t,e,n),Tn(t,n))}function $S(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),av(t,n)}function XS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),av(t,n)}var ov;ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||En.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,IS(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,Et&&e.flags&1048576&&d0(e,ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Il(t,e),t=e.pendingProps;var r=Qs(e,on.current);qs(e,n),r=Ph(null,e,i,t,r,n);var s=Nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,tc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wh(e),r.updater=Nc,e.stateNode=r,r._reactInternals=e,kd(e,i,t,n),e=Vd(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&vh(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=YS(i),t=ei(i,t),r){case 0:e=zd(null,e,i,t,n);break e;case 1:e=mm(null,e,i,t,n);break e;case 11:e=hm(null,e,i,t,n);break e;case 14:e=pm(null,e,i,ei(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),zd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),mm(t,e,i,r,n);case 3:e:{if(j0(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_0(t,e),ac(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ia(Error(ce(423)),e),e=gm(t,e,i,n,r);break e}else if(i!==r){r=ia(Error(ce(424)),e),e=gm(t,e,i,n,r);break e}else for(Ln=Mr(e.stateNode.containerInfo.firstChild),In=e,Et=!0,ni=null,n=m0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ea(),i===r){e=Xi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return v0(e),t===null&&Ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Pd(i,r)?a=null:s!==null&&Pd(i,s)&&(e.flags|=32),G0(t,e),un(t,e,a,n),e.child;case 6:return t===null&&Ud(e),null;case 13:return W0(t,e,n);case 4:return Ch(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ta(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),hm(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,vt(rc,i._currentValue),i._currentValue=a,s!==null)if(li(s.value,a)){if(s.children===r.children&&!En.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Fd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,qs(e,n),r=$n(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),pm(t,e,i,r,n);case 15:return V0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Il(t,e),e.tag=1,Mn(i)?(t=!0,tc(e)):t=!1,qs(e,n),k0(e,i,r),kd(e,i,r,n),Vd(null,e,i,!0,t,n);case 19:return $0(t,e,n);case 22:return H0(t,e,n)}throw Error(ce(156,e.tag))};function lv(t,e){return U_(t,e)}function qS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new qS(t,e,n,i)}function Vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YS(t){if(typeof t=="function")return Vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ah)return 11;if(t===oh)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Vh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ds:return ns(n.children,r,s,e);case sh:a=8,r|=8;break;case ld:return t=jn(12,n,e,r|2),t.elementType=ld,t.lanes=s,t;case cd:return t=jn(13,n,e,r),t.elementType=cd,t.lanes=s,t;case ud:return t=jn(19,n,e,r),t.elementType=ud,t.lanes=s,t;case v_:return Ic(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g_:a=10;break e;case __:a=9;break e;case ah:a=11;break e;case oh:a=14;break e;case dr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=jn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ns(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function Ic(t,e,n,i){return t=jn(22,t,i,e),t.elementType=v_,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function xu(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qc(0),this.expirationTimes=Qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hh(t,e,n,i,r,s,a,o,l){return t=new KS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(s),t}function ZS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function cv(t){if(!t)return Pr;t=t._reactInternals;e:{if(ds(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Mn(n))return c0(t,n,e)}return e}function uv(t,e,n,i,r,s,a,o,l){return t=Hh(n,i,!0,t,r,s,a,o,l),t.context=cv(null),n=t.current,i=fn(),r=Cr(n),s=zi(i,r),s.callback=e??null,Tr(n,s,r),t.current.lanes=r,Mo(t,r,i),Tn(t,i),t}function Uc(t,e,n,i){var r=e.current,s=fn(),a=Cr(r);return n=cv(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Tr(r,e,a),t!==null&&(oi(t,r,a,s),Nl(t,r,a)),a}function pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gh(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function JS(){return null}var dv=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}Fc.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Uc(t,e,null,null)};Fc.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){Uc(null,t,null,null)}),e[Wi]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=H_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&j_(t)}};function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bm(){}function QS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=pc(a);s.call(c)}}var a=uv(e,i,t,0,null,!1,!1,"",bm);return t._reactRootContainer=a,t[Wi]=a.current,ao(t.nodeType===8?t.parentNode:t),os(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=pc(l);o.call(c)}}var l=Hh(t,0,!1,null,null,!1,!1,"",bm);return t._reactRootContainer=l,t[Wi]=l.current,ao(t.nodeType===8?t.parentNode:t),os(function(){Uc(e,l,n,i)}),l}function kc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=pc(a);o.call(l)}}Uc(e,a,t,r)}else a=QS(n,e,t,r,i);return pc(a)}z_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(uh(e,n|1),Tn(e,Lt()),!(it&6)&&(ra=Lt()+500,Ir()))}break;case 13:os(function(){var i=$i(t,1);if(i!==null){var r=fn();oi(i,t,1,r)}}),Gh(t,1)}};dh=function(t){if(t.tag===13){var e=$i(t,134217728);if(e!==null){var n=fn();oi(e,t,134217728,n)}Gh(t,134217728)}};V_=function(t){if(t.tag===13){var e=Cr(t),n=$i(t,e);if(n!==null){var i=fn();oi(n,t,e,i)}Gh(t,e)}};H_=function(){return ut};G_=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};yd=function(t,e,n){switch(e){case"input":if(hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ac(i);if(!r)throw Error(ce(90));y_(i),hd(i,r)}}}break;case"textarea":E_(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};R_=kh;P_=os;var eE={usingClientEntryPoint:!1,Events:[wo,Os,Ac,b_,A_,kh]},Ca={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tE={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||JS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Tc=Zo.inject(tE),xi=Zo}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eE;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(e))throw Error(ce(200));return ZS(t,e,null,n)};On.createRoot=function(t,e){if(!Wh(t))throw Error(ce(299));var n=!1,i="",r=dv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hh(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,ao(t.nodeType===8?t.parentNode:t),new jh(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=D_(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return os(t)};On.hydrate=function(t,e,n){if(!Oc(e))throw Error(ce(200));return kc(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!Wh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=dv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=uv(e,null,t,1,n??null,r,!1,s,a),t[Wi]=e.current,ao(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fc(e)};On.render=function(t,e,n){if(!Oc(e))throw Error(ce(200));return kc(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Oc(t))throw Error(ce(40));return t._reactRootContainer?(os(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};On.unstable_batchedUpdates=kh;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Oc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return kc(t,e,n,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fv)}catch(t){console.error(t)}}fv(),f_.exports=On;var nE=f_.exports,Am=nE;ad.createRoot=Am.createRoot,ad.hydrateRoot=Am.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},go.apply(this,arguments)}var vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(vr||(vr={}));const Rm="popstate";function iE(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Qd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:mc(r)}return sE(e,n,null,t)}function Ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $h(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rE(){return Math.random().toString(36).substr(2,8)}function Pm(t,e){return{usr:t.state,key:t.key,idx:e}}function Qd(t,e,n,i){return n===void 0&&(n=null),go({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?pa(e):e,{state:n,key:e&&e.key||i||rE()})}function mc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function pa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function sE(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=vr.Pop,l=null,c=f();c==null&&(c=0,a.replaceState(go({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function h(){o=vr.Pop;let p=f(),u=p==null?null:p-c;c=p,l&&l({action:o,location:S.location,delta:u})}function d(p,u){o=vr.Push;let g=Qd(S.location,p,u);c=f()+1;let y=Pm(g,c),E=S.createHref(g);try{a.pushState(y,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(E)}s&&l&&l({action:o,location:S.location,delta:1})}function m(p,u){o=vr.Replace;let g=Qd(S.location,p,u);c=f();let y=Pm(g,c),E=S.createHref(g);a.replaceState(y,"",E),s&&l&&l({action:o,location:S.location,delta:0})}function v(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:mc(p);return g=g.replace(/ $/,"%20"),Ot(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let S={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Rm,h),l=p,()=>{r.removeEventListener(Rm,h),l=null}},createHref(p){return e(r,p)},createURL:v,encodeLocation(p){let u=v(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:d,replace:m,go(p){return a.go(p)}};return S}var Nm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Nm||(Nm={}));function aE(t,e,n){return n===void 0&&(n="/"),oE(t,e,n)}function oE(t,e,n,i){let r=typeof e=="string"?pa(e):e,s=Xh(r.pathname||"/",n);if(s==null)return null;let a=hv(t);lE(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=yE(s);o=_E(a[l],c)}return o}function hv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Ot(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ar([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Ot(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),hv(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:mE(c,s.index),routesMeta:f})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of pv(s.path))r(s,a,l)}),e}function pv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=pv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function lE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const cE=/^:[\w-]+$/,uE=3,dE=2,fE=1,hE=10,pE=-2,Lm=t=>t==="*";function mE(t,e){let n=t.split("/"),i=n.length;return n.some(Lm)&&(i+=pE),e&&(i+=dE),n.filter(r=>!Lm(r)).reduce((r,s)=>r+(cE.test(s)?uE:s===""?fE:hE),i)}function gE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function _E(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=vE({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),d=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:Ar([s,h.pathname]),pathnameBase:wE(Ar([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=Ar([s,h.pathnameBase]))}return a}function vE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=xE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,f,h)=>{let{paramName:d,isOptional:m}=f;if(d==="*"){let S=o[h]||"";a=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const v=o[h];return m&&!v?c[d]=void 0:c[d]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function xE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$h(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function yE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $h(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Xh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const SE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,EE=t=>SE.test(t);function ME(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?pa(t):t,s;if(n)if(EE(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),$h(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Dm(n.substring(1),"/"):s=Dm(n,e)}else s=e;return{pathname:s,search:CE(i),hash:bE(r)}}function Dm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function yu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function TE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function mv(t,e){let n=TE(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function gv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=pa(t):(r=go({},t),Ot(!r.pathname||!r.pathname.includes("?"),yu("?","pathname","search",r)),Ot(!r.pathname||!r.pathname.includes("#"),yu("#","pathname","hash",r)),Ot(!r.search||!r.search.includes("#"),yu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),h-=1;r.pathname=d.join("/")}o=h>=0?e[h]:"/"}let l=ME(r,o),c=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const Ar=t=>t.join("/").replace(/\/\/+/g,"/"),wE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function AE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const _v=["post","put","patch","delete"];new Set(_v);const RE=["get",..._v];new Set(RE);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_o.apply(this,arguments)}const qh=L.createContext(null),PE=L.createContext(null),fs=L.createContext(null),Bc=L.createContext(null),hs=L.createContext({outlet:null,matches:[],isDataRoute:!1}),vv=L.createContext(null);function NE(t,e){let{relative:n}=e===void 0?{}:e;bo()||Ot(!1);let{basename:i,navigator:r}=L.useContext(fs),{hash:s,pathname:a,search:o}=yv(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Ar([i,a])),r.createHref({pathname:l,search:o,hash:s})}function bo(){return L.useContext(Bc)!=null}function ps(){return bo()||Ot(!1),L.useContext(Bc).location}function xv(t){L.useContext(fs).static||L.useLayoutEffect(t)}function Ao(){let{isDataRoute:t}=L.useContext(hs);return t?jE():LE()}function LE(){bo()||Ot(!1);let t=L.useContext(qh),{basename:e,future:n,navigator:i}=L.useContext(fs),{matches:r}=L.useContext(hs),{pathname:s}=ps(),a=JSON.stringify(mv(r,n.v7_relativeSplatPath)),o=L.useRef(!1);return xv(()=>{o.current=!0}),L.useCallback(function(c,f){if(f===void 0&&(f={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let h=gv(c,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Ar([e,h.pathname])),(f.replace?i.replace:i.push)(h,f.state,f)},[e,i,a,s,t])}function yv(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=L.useContext(fs),{matches:r}=L.useContext(hs),{pathname:s}=ps(),a=JSON.stringify(mv(r,i.v7_relativeSplatPath));return L.useMemo(()=>gv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function DE(t,e){return IE(t,e)}function IE(t,e,n,i){bo()||Ot(!1);let{navigator:r}=L.useContext(fs),{matches:s}=L.useContext(hs),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=ps(),f;if(e){var h;let p=typeof e=="string"?pa(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||Ot(!1),f=p}else f=c;let d=f.pathname||"/",m=d;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=aE(t,{pathname:m}),S=BE(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Ar([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Ar([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&S?L.createElement(Bc.Provider,{value:{location:_o({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:vr.Pop}},S):S}function UE(){let t=GE(),e=AE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:r},n):null,null)}const FE=L.createElement(UE,null);class OE extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(hs.Provider,{value:this.props.routeContext},L.createElement(vv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kE(t){let{routeContext:e,match:n,children:i}=t,r=L.useContext(qh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(hs.Provider,{value:e},i)}function BE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let f=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);f>=0||Ot(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let h=a[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:d,errors:m}=n,v=h.route.loader&&d[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||v){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((f,h,d)=>{let m,v=!1,S=null,p=null;n&&(m=o&&h.route.id?o[h.route.id]:void 0,S=h.route.errorElement||FE,l&&(c<0&&d===0?(WE("route-fallback"),v=!0,p=null):c===d&&(v=!0,p=h.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,d+1)),g=()=>{let y;return m?y=S:v?y=p:h.route.Component?y=L.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=f,L.createElement(kE,{match:h,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?L.createElement(OE,{location:n.location,revalidation:n.revalidation,component:S,error:m,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var Sv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Sv||{}),Ev=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ev||{});function zE(t){let e=L.useContext(qh);return e||Ot(!1),e}function VE(t){let e=L.useContext(PE);return e||Ot(!1),e}function HE(t){let e=L.useContext(hs);return e||Ot(!1),e}function Mv(t){let e=HE(),n=e.matches[e.matches.length-1];return n.route.id||Ot(!1),n.route.id}function GE(){var t;let e=L.useContext(vv),n=VE(),i=Mv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function jE(){let{router:t}=zE(Sv.UseNavigateStable),e=Mv(Ev.UseNavigateStable),n=L.useRef(!1);return xv(()=>{n.current=!0}),L.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,_o({fromRouteId:e},s)))},[t,e])}const Im={};function WE(t,e,n){Im[t]||(Im[t]=!0)}function $E(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function $r(t){Ot(!1)}function XE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=vr.Pop,navigator:s,static:a=!1,future:o}=t;bo()&&Ot(!1);let l=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:l,navigator:s,static:a,future:_o({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=pa(i));let{pathname:f="/",search:h="",hash:d="",state:m=null,key:v="default"}=i,S=L.useMemo(()=>{let p=Xh(f,l);return p==null?null:{location:{pathname:p,search:h,hash:d,state:m,key:v},navigationType:r}},[l,f,h,d,m,v,r]);return S==null?null:L.createElement(fs.Provider,{value:c},L.createElement(Bc.Provider,{children:n,value:S}))}function qE(t){let{children:e,location:n}=t;return DE(ef(e),n)}new Promise(()=>{});function ef(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(i,r)=>{if(!L.isValidElement(i))return;let s=[...e,r];if(i.type===L.Fragment){n.push.apply(n,ef(i.props.children,s));return}i.type!==$r&&Ot(!1),!i.props.index||!i.props.children||Ot(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=ef(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tf(){return tf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tf.apply(this,arguments)}function YE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function KE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ZE(t,e){return t.button===0&&(!e||e==="_self")&&!KE(t)}function nf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function JE(t,e){let n=nf(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}const QE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],eM="6";try{window.__reactRouterVersion=eM}catch{}const tM="startTransition",Um=Wx[tM];function nM(t){let{basename:e,children:n,future:i,window:r}=t,s=L.useRef();s.current==null&&(s.current=iE({window:r,v5Compat:!0}));let a=s.current,[o,l]=L.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},f=L.useCallback(h=>{c&&Um?Um(()=>l(h)):l(h)},[l,c]);return L.useLayoutEffect(()=>a.listen(f),[a,f]),L.useEffect(()=>$E(i),[i]),L.createElement(XE,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const iM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fm=L.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:f,viewTransition:h}=e,d=YE(e,QE),{basename:m}=L.useContext(fs),v,S=!1;if(typeof c=="string"&&rM.test(c)&&(v=c,iM))try{let y=new URL(window.location.href),E=c.startsWith("//")?new URL(y.protocol+c):new URL(c),T=Xh(E.pathname,m);E.origin===y.origin&&T!=null?c=T+E.search+E.hash:S=!0}catch{}let p=NE(c,{relative:r}),u=sM(c,{replace:a,state:o,target:l,preventScrollReset:f,relative:r,viewTransition:h});function g(y){i&&i(y),y.defaultPrevented||u(y)}return L.createElement("a",tf({},d,{href:v||p,onClick:S||s?i:g,ref:n,target:l}))});var Om;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Om||(Om={}));var km;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(km||(km={}));function sM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=Ao(),c=ps(),f=yv(t,{relative:a});return L.useCallback(h=>{if(ZE(h,n)){h.preventDefault();let d=i!==void 0?i:mc(c)===mc(f);l(t,{replace:d,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,f,i,r,n,t,s,a,o])}function Tv(t){let e=L.useRef(nf(t)),n=L.useRef(!1),i=ps(),r=L.useMemo(()=>JE(i.search,n.current?null:e.current),[i.search]),s=Ao(),a=L.useCallback((o,l)=>{const c=nf(typeof o=="function"?o(r):o);n.current=!0,s("?"+c,l)},[s,r]);return[r,a]}const Cn="/api";async function Jo(t){const e=await fetch(`${Cn}/concepts/${encodeURIComponent(t)}`);if(!e.ok)throw new Error(`Failed to fetch concept: ${e.statusText}`);return e.json()}async function aM(t){const e=await fetch(`${Cn}/concepts/search?q=${encodeURIComponent(t)}`);if(!e.ok)throw new Error(`Search failed: ${e.statusText}`);return(await e.json()).results}async function oM(t,e){const n=await fetch(`${Cn}/concepts/${encodeURIComponent(t)}/enrich`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({extract:e})});if(!n.ok)throw new Error(`Enrich failed: ${n.statusText}`);return n.json()}async function lM(t){const e=await fetch(`${Cn}/concepts/${encodeURIComponent(t)}/links`);if(!e.ok)throw new Error(`Links failed: ${e.statusText}`);return(await e.json()).links}async function cM(t){const e=await fetch(`${Cn}/concepts/${encodeURIComponent(t)}`);if(!e.ok)return null;const n=await e.json();return{title:n.title,summary:n.summary,extract:n.extract,image:n.image}}async function uM(){const t=await fetch(`${Cn}/me`);return t.ok?(await t.json()).user:null}async function dM(t,e){const n=await fetch(`${Cn}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})}),i=await n.json();if(!n.ok)throw new Error(i.error||`HTTP ${n.status}`);return i.user}async function fM(t,e){const n=await fetch(`${Cn}/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})}),i=await n.json();if(!n.ok)throw new Error(i.error||`HTTP ${n.status}`);return i.user}async function hM(){await fetch(`${Cn}/logout`,{method:"POST"})}async function Bm(){const t=await fetch(`${Cn}/trees`);return t.ok?t.json():[]}async function wv(t){await fetch(`${Cn}/trees`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}async function pM(t){await fetch(`${Cn}/trees/${encodeURIComponent(t)}`,{method:"DELETE"})}async function mM(t,e){const n={topic:t};Array.isArray(e)&&e.length&&(n.context=e);const i=await fetch(`${Cn}/skill-tree`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok){const s=await i.json().catch(()=>({error:`HTTP ${i.status}`}));throw new Error(s.error||i.status)}const r=await i.json();if(!r.nodes||!Array.isArray(r.nodes))throw new Error("Unexpected response format");return r.nodes}async function gM(t){const e=await fetch(`${Cn}/skill-tree/questions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:t})});if(!e.ok){const i=await e.json().catch(()=>({error:`HTTP ${e.status}`}));throw new Error(i.error||e.status)}const n=await e.json();if(!Array.isArray(n.questions))throw new Error("Unexpected response format");return n.questions}const Cv=L.createContext(null);function _M({children:t}){const[e,n]=L.useState(null),[i,r]=L.useState(!1),[s,a]=L.useState(null);L.useEffect(()=>{uM().then(d=>n(d)).catch(()=>n(null)).finally(()=>r(!0))},[]);const o=L.useCallback(async(d,m)=>{const v=await dM(d,m);n(v);const S=JSON.parse(localStorage.getItem("skillTrees")||"[]");return S.length>0&&a({count:S.length}),v},[]),l=L.useCallback(async(d,m)=>{const v=await fM(d,m);n(v);const S=JSON.parse(localStorage.getItem("skillTrees")||"[]");return S.length>0&&a({count:S.length}),v},[]),c=L.useCallback(async()=>{await hM(),n(null),a(null)},[]),f=L.useCallback(async()=>{const d=JSON.parse(localStorage.getItem("skillTrees")||"[]");for(const m of d)await wv(m);localStorage.removeItem("skillTrees"),a(null)},[]),h=L.useCallback(()=>a(null),[]);return _.jsx(Cv.Provider,{value:{user:e,ready:i,login:o,register:l,logout:c,pendingImport:s,acceptImport:f,dismissImport:h},children:t})}function zc(){const t=L.useContext(Cv);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const bv=L.createContext(null);function vM({children:t}){const{user:e,ready:n,pendingImport:i}=zc(),[r,s]=L.useState([]),[a,o]=L.useState(()=>JSON.parse(localStorage.getItem("skillTrees")||"[]")),[l,c]=L.useState(""),[f,h]=L.useState([]),[d,m]=L.useState(()=>new Set),[v,S]=L.useState(!1),[p,u]=L.useState("");L.useEffect(()=>{n&&(e?Bm().then(D=>s(D||[])):s([]))},[e,n]);const g=L.useRef(i);L.useEffect(()=>{g.current&&!i&&e&&(Bm().then(D=>s(D||[])),o(JSON.parse(localStorage.getItem("skillTrees")||"[]"))),g.current=i},[i,e]);const y=e?r:a,E=L.useCallback(async D=>{if(e)await wv(D),s(N=>{const P=N.findIndex(F=>F.topic.toLowerCase()===D.topic.toLowerCase());if(P>=0){const F=[...N];return F[P]=D,F}return[D,...N]});else{const N=JSON.parse(localStorage.getItem("skillTrees")||"[]"),P=N.findIndex(F=>F.topic.toLowerCase()===D.topic.toLowerCase());P>=0?N[P]=D:N.unshift(D),localStorage.setItem("skillTrees",JSON.stringify(N)),o(N)}},[e]),T=L.useCallback(async D=>{if(e)await pM(D),s(N=>N.filter(P=>P.topic!==D));else{const N=JSON.parse(localStorage.getItem("skillTrees")||"[]").filter(P=>P.topic!==D);localStorage.setItem("skillTrees",JSON.stringify(N)),o(N)}},[e]),b=L.useCallback(D=>{c(D.topic),h(D.nodes),m(new Set(D.completed||[]))},[]),w=L.useCallback(()=>{c(""),h([]),m(new Set)},[]),x=L.useCallback(D=>{m(N=>{const P=new Set(N);if(P.has(D)){P.delete(D);const W=z=>{var j;for(const O of f)(j=O.requires)!=null&&j.includes(z)&&P.has(O.name)&&(P.delete(O.name),W(O.name))};W(D)}else P.add(D);const F={topic:l,nodes:f,completed:[...P],savedAt:Date.now()};return E(F),P})},[f,l,E]),C=L.useCallback(async(D,N)=>{S(!0),u("");try{const P=await mM(D,N);c(D),h(P),m(new Set);const F={topic:D,nodes:P,completed:[],savedAt:Date.now()};return await E(F),{topic:D,nodes:P}}catch(P){throw u(P.message),P}finally{S(!1)}},[E]);return _.jsx(bv.Provider,{value:{savedTrees:y,currentTopic:l,currentNodes:f,completedNodes:d,generating:v,generateError:p,generateTree:C,openTree:b,closeTree:w,toggleComplete:x,deleteTree:T},children:t})}function ma(){const t=L.useContext(bv);if(!t)throw new Error("useSkillTree must be used within SkillTreeProvider");return t}const xM="_header_ced1x_3",yM="_brand_ced1x_22",SM="_brandTag_ced1x_29",EM="_brandTitle_ced1x_43",MM="_brandItalic_ced1x_52",TM="_brandChip_ced1x_61",wM="_tabs_ced1x_74",CM="_tab_ced1x_74",bM="_tabActive_ced1x_104",AM="_auth_ced1x_117",RM="_greeting_ced1x_124",PM="_btnGhost_ced1x_131",NM="_btnPill_ced1x_151",tn={header:xM,brand:yM,brandTag:SM,brandTitle:EM,brandItalic:MM,brandChip:TM,tabs:wM,tab:CM,tabActive:bM,auth:AM,greeting:RM,btnGhost:PM,btnPill:NM};function Yh({onSignIn:t,onSignUp:e}){const{user:n,logout:i}=zc(),{pathname:r}=ps(),s=r.startsWith("/explore"),a=!s;return _.jsxs("header",{className:tn.header,children:[_.jsxs("div",{className:tn.brand,children:[_.jsx("span",{className:tn.brandTag,children:"STG"}),_.jsxs("span",{className:tn.brandTitle,children:["Skill Tree ",_.jsx("span",{className:tn.brandItalic,children:"Generator"})]}),_.jsx("span",{className:tn.brandChip,children:"v1"})]}),_.jsxs("nav",{className:tn.tabs,"aria-label":"Primary",children:[_.jsx(Fm,{to:"/skill-tree",className:`${tn.tab} ${a?tn.tabActive:""}`,children:"Skill Tree"}),_.jsx(Fm,{to:"/explore",className:`${tn.tab} ${s?tn.tabActive:""}`,children:"Wikihopper"})]}),_.jsx("div",{className:tn.auth,children:n?_.jsxs(_.Fragment,{children:[_.jsxs("span",{className:tn.greeting,children:["@",n.username]}),_.jsx("button",{className:tn.btnGhost,onClick:i,children:"Logout"})]}):_.jsxs(_.Fragment,{children:[_.jsx("button",{className:tn.btnGhost,onClick:t,children:"Sign In"}),_.jsx("button",{className:tn.btnPill,onClick:e,children:"Sign Up"})]})})]})}const LM="_banner_1q55g_3",DM="_left_1q55g_20",IM="_tag_1q55g_27",UM="_message_1q55g_40",FM="_actions_1q55g_50",OM="_yes_1q55g_56",kM="_no_1q55g_77",Or={banner:LM,left:DM,tag:IM,message:UM,actions:FM,yes:OM,no:kM};function Av(){const{pendingImport:t,acceptImport:e,dismissImport:n}=zc();if(!t)return null;const{count:i}=t;return _.jsxs("div",{className:Or.banner,role:"status","aria-live":"polite",children:[_.jsxs("div",{className:Or.left,children:[_.jsx("span",{className:Or.tag,children:"IMPORT"}),_.jsxs("p",{className:Or.message,children:[i," local tree",i>1?"s":""," found — sync to your account?"]})]}),_.jsxs("div",{className:Or.actions,children:[_.jsx("button",{className:Or.yes,onClick:e,children:"Import"}),_.jsx("button",{className:Or.no,onClick:n,children:"Dismiss"})]})]})}const BM="_overlay_78y8f_3",zM="_modal_78y8f_22",VM="_modalHeader_78y8f_74",HM="_eyebrow_78y8f_80",GM="_tabs_78y8f_88",jM="_tab_78y8f_88",WM="_tabActive_78y8f_117",$M="_form_78y8f_124",XM="_error_78y8f_160",qM="_submit_78y8f_174",YM="_close_78y8f_206",An={overlay:BM,modal:zM,modalHeader:VM,eyebrow:HM,tabs:GM,tab:jM,tabActive:WM,form:$M,error:XM,submit:qM,close:YM};function Kh({initialMode:t="login",onClose:e}){const{login:n,register:i}=zc(),[r,s]=L.useState(t),[a,o]=L.useState(""),[l,c]=L.useState(""),[f,h]=L.useState(""),[d,m]=L.useState(!1),v=L.useRef(null);L.useEffect(()=>{var u;(u=v.current)==null||u.focus()},[]);async function S(u){u.preventDefault(),h(""),m(!0);try{r==="login"?await n(a.trim(),l):await i(a.trim(),l),e()}catch(g){h(g.message==="Failed to fetch"?"Network error — is the server running?":g.message)}finally{m(!1)}}function p(u){u.target===u.currentTarget&&e()}return _.jsx("div",{className:An.overlay,onClick:p,children:_.jsxs("div",{className:An.modal,"data-mode":r,children:[_.jsxs("div",{className:An.modalHeader,children:[_.jsxs("span",{className:An.eyebrow,children:[r==="login"?"ACCESS":"JOIN"," · STG"]}),_.jsxs("div",{className:An.tabs,children:[_.jsx("button",{type:"button",className:`${An.tab} ${r==="login"?An.tabActive:""}`,onClick:()=>{s("login"),h("")},children:"Sign In"}),_.jsx("button",{type:"button",className:`${An.tab} ${r==="register"?An.tabActive:""}`,onClick:()=>{s("register"),h("")},children:"Sign Up"})]})]}),_.jsxs("form",{className:An.form,onSubmit:S,children:[_.jsx("label",{htmlFor:"auth-username",children:"Username"}),_.jsx("input",{id:"auth-username",ref:v,type:"text",autoComplete:"username",required:!0,value:a,onChange:u=>o(u.target.value)}),_.jsx("label",{htmlFor:"auth-password",children:"Password"}),_.jsx("input",{id:"auth-password",type:"password",autoComplete:r==="login"?"current-password":"new-password",required:!0,value:l,onChange:u=>c(u.target.value)}),f&&_.jsx("p",{className:An.error,children:f}),_.jsx("button",{type:"submit",className:An.submit,disabled:d,children:r==="login"?"Sign In":"Sign Up"})]}),_.jsx("button",{type:"button",className:An.close,onClick:e,children:"Cancel"})]})})}const KM="_promptView_rtplp_3",ZM="_dotGrid_rtplp_15",JM="_hero_rtplp_30",QM="_eyebrow_rtplp_39",e1="_modeDropdown_rtplp_49",t1="_modeDropdownTrigger_rtplp_54",n1="_modeDropdownCaret_rtplp_72",i1="_modeDropdownCaretOpen_rtplp_78",r1="_modeDropdownMenu_rtplp_82",s1="_modeDropdownItem_rtplp_106",a1="_modeDropdownItemActive_rtplp_126",o1="_modeDropdownCheck_rtplp_130",l1="_heading_rtplp_136",c1="_headingItalic_rtplp_147",u1="_subtitle_rtplp_154",d1="_form_rtplp_164",f1="_formIcon_rtplp_184",h1="_topicInput_rtplp_191",p1="_generateBtn_rtplp_203",m1="_formWrap_rtplp_230",g1="_suggestions_rtplp_244",_1="_suggestCat_rtplp_271",v1="_suggestCatLabel_rtplp_273",x1="_suggestTopics_rtplp_282",y1="_suggestPill_rtplp_288",S1="_status_rtplp_307",E1="_divider_rtplp_316",M1="_dividerLine_rtplp_325",T1="_dividerLabel_rtplp_332",w1="_exploreForm_rtplp_341",C1="_exploreInput_rtplp_360",b1="_exploreBtn_rtplp_372",A1="_savedSection_rtplp_395",R1="_savedHeader_rtplp_404",P1="_savedTag_rtplp_412",N1="_savedHeading_rtplp_424",L1="_savedCount_rtplp_433",D1="_savedList_rtplp_441",I1="_savedItem_rtplp_448",U1="_savedInfo_rtplp_467",F1="_savedTopic_rtplp_474",O1="_savedProgress_rtplp_486",k1="_savedBarTrack_rtplp_494",B1="_savedBarFill_rtplp_501",z1="_savedActions_rtplp_508",V1="_savedOpen_rtplp_514",H1="_savedDelete_rtplp_534",G1="_treeView_rtplp_555",j1="_treeHeader_rtplp_566",W1="_backBtn_rtplp_581",$1="_backArrow_rtplp_606",X1="_treeTitleWrap_rtplp_613",q1="_treeEyebrow_rtplp_622",Y1="_treeTitle_rtplp_613",K1="_progressWrap_rtplp_644",Z1="_progressLabel_rtplp_651",J1="_progressTrack_rtplp_660",Q1="_progressFill_rtplp_668",eT="_treeBody_rtplp_677",tT="_graphContainer_rtplp_684",nT="_detailPanel_rtplp_699",iT="_detailPanelOpen_rtplp_721",rT="_detailHeader_rtplp_732",sT="_detailName_rtplp_741",aT="_detailClose_rtplp_750",oT="_closeIcon_rtplp_771",lT="_detailLevelRow_rtplp_791",cT="_detailLevel_rtplp_791",uT="_detailLocked_rtplp_810",dT="_detailDone_rtplp_820",fT="_tabBar_rtplp_832",hT="_tabBtn_rtplp_843",pT="_tabBtnActive_rtplp_860",mT="_tabPane_rtplp_866",gT="_detailLabel_rtplp_873",_T="_detailDescription_rtplp_892",vT="_list_rtplp_901",xT="_requires_rtplp_918",yT="_tips_rtplp_919",ST="_outcomes_rtplp_920",ET="_mistakes_rtplp_921",MT="_concepts_rtplp_922",TT="_resources_rtplp_923",wT="_resourceType_rtplp_943",CT="_resourceDesc_rtplp_952",bT="_exploreWikiLink_rtplp_960",AT="_completeBtn_rtplp_966",RT="_completeBtnDone_rtplp_990",PT="_graph_rtplp_684",NT="_nodeRing_rtplp_1134",LT="_completePulse_rtplp_1143",DT="_shareWrap_rtplp_1170",IT="_shareBtn_rtplp_1175",UT="_shareDropdown_rtplp_1196",FT="_shareOption_rtplp_1213",OT="_nodeTooltip_rtplp_1235",kT="_tooltipName_rtplp_1252",BT="_tooltipLevel_rtplp_1260",zT="_tooltipDesc_rtplp_1269",VT="_tooltipReqs_rtplp_1277",J={promptView:KM,dotGrid:ZM,hero:JM,eyebrow:QM,modeDropdown:e1,modeDropdownTrigger:t1,modeDropdownCaret:n1,modeDropdownCaretOpen:i1,modeDropdownMenu:r1,modeDropdownItem:s1,modeDropdownItemActive:a1,modeDropdownCheck:o1,heading:l1,headingItalic:c1,subtitle:u1,form:d1,formIcon:f1,topicInput:h1,generateBtn:p1,formWrap:m1,suggestions:g1,suggestCat:_1,suggestCatLabel:v1,suggestTopics:x1,suggestPill:y1,status:S1,divider:E1,dividerLine:M1,dividerLabel:T1,exploreForm:w1,exploreInput:C1,exploreBtn:b1,savedSection:A1,savedHeader:R1,savedTag:P1,savedHeading:N1,savedCount:L1,savedList:D1,savedItem:I1,savedInfo:U1,savedTopic:F1,savedProgress:O1,savedBarTrack:k1,savedBarFill:B1,savedActions:z1,savedOpen:V1,savedDelete:H1,treeView:G1,treeHeader:j1,backBtn:W1,backArrow:$1,treeTitleWrap:X1,treeEyebrow:q1,treeTitle:Y1,progressWrap:K1,progressLabel:Z1,progressTrack:J1,progressFill:Q1,treeBody:eT,graphContainer:tT,detailPanel:nT,detailPanelOpen:iT,detailHeader:rT,detailName:sT,detailClose:aT,closeIcon:oT,detailLevelRow:lT,detailLevel:cT,detailLocked:uT,detailDone:dT,tabBar:fT,tabBtn:hT,tabBtnActive:pT,tabPane:mT,detailLabel:gT,detailDescription:_T,list:vT,requires:xT,tips:yT,outcomes:ST,mistakes:ET,concepts:MT,resources:TT,resourceType:wT,resourceDesc:CT,exploreWikiLink:bT,completeBtn:AT,completeBtnDone:RT,graph:PT,nodeRing:NT,completePulse:LT,shareWrap:DT,shareBtn:IT,shareDropdown:UT,shareOption:FT,nodeTooltip:OT,tooltipName:kT,tooltipLevel:BT,tooltipDesc:zT,tooltipReqs:VT};function HT(){const{savedTrees:t,openTree:e,deleteTree:n}=ma();return!t||t.length===0?null:_.jsxs("section",{className:J.savedSection,children:[_.jsxs("header",{className:J.savedHeader,children:[_.jsx("span",{className:J.savedTag,children:"SAVED"}),_.jsx("h2",{className:J.savedHeading,children:"Your Trees"}),_.jsx("span",{className:J.savedCount,children:t.length.toString().padStart(2,"0")})]}),_.jsx("ul",{className:J.savedList,children:t.map(i=>{var o,l;const r=((o=i.completed)==null?void 0:o.length)||0,s=((l=i.nodes)==null?void 0:l.length)||0,a=s?Math.round(r/s*100):0;return _.jsxs("li",{className:J.savedItem,children:[_.jsxs("div",{className:J.savedInfo,children:[_.jsx("span",{className:J.savedTopic,children:i.topic}),_.jsxs("span",{className:J.savedProgress,children:[r.toString().padStart(2,"0"),"/",s.toString().padStart(2,"0")," · ",a,"%"]})]}),_.jsx("div",{className:J.savedBarTrack,children:_.jsx("div",{className:J.savedBarFill,style:{width:`${a}%`}})}),_.jsxs("div",{className:J.savedActions,children:[_.jsx("button",{className:J.savedOpen,onClick:()=>e(i),children:"Open →"}),_.jsx("button",{className:J.savedDelete,onClick:()=>n(i.topic),children:"Delete"})]})]},i.topic)})})]})}const zm=[{value:"standard",label:"STANDARD GENERATOR"},{value:"advanced",label:"ADVANCED GENERATOR"}];function GT({value:t,onChange:e}){const[n,i]=L.useState(!1),r=L.useRef(null),s=zm.find(a=>a.value===t);return L.useEffect(()=>{function a(o){r.current&&!r.current.contains(o.target)&&i(!1)}return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),_.jsxs("div",{className:J.modeDropdown,ref:r,children:[_.jsxs("button",{type:"button",className:`${J.eyebrow} ${J.modeDropdownTrigger}`,onClick:()=>i(a=>!a),"aria-haspopup":"listbox","aria-expanded":n,children:[s==null?void 0:s.label,_.jsx("span",{className:`${J.modeDropdownCaret} ${n?J.modeDropdownCaretOpen:""}`,"aria-hidden":"true",children:"▾"})]}),n&&_.jsx("ul",{className:J.modeDropdownMenu,role:"listbox",children:zm.map(a=>_.jsxs("li",{role:"option","aria-selected":a.value===t,className:`${J.modeDropdownItem} ${a.value===t?J.modeDropdownItemActive:""}`,onClick:()=>{e(a.value),i(!1)},children:[a.label,a.value===t&&_.jsx("span",{className:J.modeDropdownCheck,children:"✓"})]},a.value))})]})}const Vm=[{category:"Creative",topics:["Guitar","Digital Art","Photography","Creative Writing","Music Production"]},{category:"Tech",topics:["Python","Machine Learning","Web Development","React","Data Science"]},{category:"Science",topics:["Quantum Physics","Organic Chemistry","Astronomy","Neuroscience"]},{category:"Languages",topics:["Japanese","Spanish","Mandarin Chinese","Sign Language"]},{category:"Life Skills",topics:["Cooking","Public Speaking","Personal Finance","Chess"]},{category:"Fitness",topics:["Calisthenics","Yoga","Rock Climbing","Swimming"]}];function jT({hideExplore:t=!1}){const{generating:e,generateError:n,generateTree:i}=ma(),[r,s]=L.useState(""),[a,o]=L.useState(""),[l,c]=L.useState(""),[f,h]=L.useState(!1),[d,m]=L.useState("standard"),v=L.useRef(null),S=Ao(),p=L.useRef(!1),u=r.trim()?Vm.map(w=>({...w,topics:w.topics.filter(x=>x.toLowerCase().includes(r.toLowerCase()))})).filter(w=>w.topics.length>0):Vm;function g(w){s(w),h(!1),d==="advanced"?S(`/skill-tree/advanced?topic=${encodeURIComponent(w)}`):y(w)}L.useEffect(()=>{function w(x){v.current&&!v.current.contains(x.target)&&h(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]);async function y(w){const x=w.trim();if(x){c("Generating skill tree...");try{await i(x),c("")}catch(C){c(`Error: ${C.message}`)}}}async function E(w){w.preventDefault();const x=r.trim();x&&(d==="advanced"?S(`/skill-tree/advanced?topic=${encodeURIComponent(x)}`):y(x))}function T(w){w.preventDefault();const x=a.trim();x&&S(`/explore?q=${encodeURIComponent(x)}`)}L.useEffect(()=>{if(p.current)return;const x=new URLSearchParams(window.location.search).get("generate");x&&(p.current=!0,window.history.replaceState({},"","/"),s(x),y(x))},[]);const b=n&&!l?`Error: ${n}`:l;return _.jsxs("main",{className:J.promptView,children:[_.jsx("div",{className:J.dotGrid,"aria-hidden":"true"}),_.jsxs("header",{className:J.hero,children:[_.jsx(GT,{value:d,onChange:m}),_.jsxs("h1",{className:J.heading,children:["What do you want ",_.jsx("span",{className:J.headingItalic,children:"to learn"}),"?"]}),_.jsx("p",{className:J.subtitle,children:"Type anything — a hobby, a language, a field. We'll chart a layered skill tree."})]}),_.jsxs("div",{className:J.formWrap,ref:v,children:[_.jsxs("form",{className:J.form,onSubmit:E,children:[_.jsx("span",{className:J.formIcon,children:"▸"}),_.jsx("input",{className:J.topicInput,type:"text",placeholder:"e.g. cooking, archery, guitar...",required:!0,value:r,onChange:w=>{s(w.target.value),h(!0)},onFocus:()=>h(!0)}),_.jsx("button",{type:"submit",className:J.generateBtn,disabled:e,children:e?"Generating…":d==="advanced"?"Next":"Generate"})]}),f&&u.length>0&&_.jsx("div",{className:J.suggestions,children:u.map(w=>_.jsxs("div",{className:J.suggestCat,children:[_.jsx("div",{className:J.suggestCatLabel,children:w.category}),_.jsx("div",{className:J.suggestTopics,children:w.topics.map(x=>_.jsx("button",{className:J.suggestPill,onClick:()=>g(x),children:x},x))})]},w.category))})]}),_.jsx("div",{className:J.status,"aria-live":"polite",children:b}),!t&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:J.divider,children:[_.jsx("span",{className:J.dividerLine}),_.jsx("span",{className:J.dividerLabel,children:"OR USE WIKIHOPPER"}),_.jsx("span",{className:J.dividerLine})]}),_.jsxs("form",{className:J.exploreForm,onSubmit:T,children:[_.jsx("input",{className:J.exploreInput,type:"text",placeholder:"e.g. quantum mechanics, stoicism...",value:a,onChange:w=>o(w.target.value)}),_.jsx("button",{type:"submit",className:J.exploreBtn,children:"Wikihopper →"})]})]}),_.jsx(HT,{})]})}const WT="http://www.w3.org/2000/svg";function at(t,e={}){const n=document.createElementNS(WT,t);for(const[i,r]of Object.entries(e))n.setAttribute(i,r);return n}function Hm(t,e,n=20){const i=`${t}|${e}`;let r=2166136261;for(let s=0;s<i.length;s++)r=(r^i.charCodeAt(s))>>>0,r=Math.imul(r,16777619)>>>0;return r%(n*2+1)-n}const Gm=220,Su=145,jm=85,$T=140,XT=75,Wm=48,Eu=40,Mu=36,Tu=30;function qT({nodes:t,completedNodes:e,justCompleted:n,onNodeClick:i}){const r=L.useRef(null),s=L.useRef(null),a=L.useRef(null);return L.useEffect(()=>{var N;const o=s.current,l=r.current;if(!o||!l||!(t!=null&&t.length))return;o.innerHTML="";const c=t.map(P=>({...P,level:P.level??1,requires:P.requires??[],icon:P.icon||P.name[0]||"◆"})),f=Math.max(...c.map(P=>P.level)),h={};for(const P of c)(h[N=P.level]||(h[N]=[])).push(P);const d={};for(const P of c)d[P.name]=new Set(P.requires);for(let P=1;P<f;P++){const F=h[P]||[],W=h[P+1]||[];W.length&&F.forEach((z,j)=>{if(!W.some(V=>d[V.name].has(z.name))){const V=F.length>1?j/(F.length-1):.5,H=Math.round(V*(W.length-1));d[W[Math.min(H,W.length-1)].name].add(z.name)}})}const m=P=>{const F=[...d[P]||[]];return F.length===0||F.every(W=>e.has(W))},S=(Math.max(...Object.values(h).map(P=>P.length))-1)*Su+XT*2,p=jm+(f-1)*Gm+$T,u={};for(let P=1;P<=f;P++){const F=h[P]||[],W=jm+(P-1)*Gm,z=(F.length-1)*Su,j=S/2-z/2;F.forEach((O,V)=>{u[O.name]={x:W,y:j+V*Su}})}o.setAttribute("width",p),o.setAttribute("height",S),o.setAttribute("viewBox",`0 0 ${p} ${S}`);const g=at("defs"),y=at("pattern",{id:"rn-dots",width:"30",height:"30",patternUnits:"userSpaceOnUse"});y.appendChild(at("circle",{cx:"0.5",cy:"0.5",r:".65",fill:"rgba(130,170,220,0.08)"})),g.appendChild(y);const E=at("filter",{id:"rn-bloom",x:"-150%",y:"-150%",width:"400%",height:"400%"});E.appendChild(at("feGaussianBlur",{stdDeviation:"14"})),g.appendChild(E),[["rn-glA",9,"#ffaa40"],["rn-glD",5,"#00fff2"],["rn-glO",4,"#4d9fff"],["rn-glH",10,"#00fff2"]].forEach(([P,F,W])=>{const z=at("filter",{id:P,x:"-80%",y:"-80%",width:"260%",height:"260%"});z.appendChild(at("feGaussianBlur",{in:"SourceAlpha",stdDeviation:String(F),result:"b"})),z.appendChild(at("feFlood",{"flood-color":W,result:"c"})),z.appendChild(at("feComposite",{in:"c",in2:"b",operator:"in",result:"g"}));const j=at("feMerge");j.appendChild(at("feMergeNode",{in:"g"})),j.appendChild(at("feMergeNode",{in:"SourceGraphic"})),z.appendChild(j),g.appendChild(z)}),o.appendChild(g),o.appendChild(at("rect",{width:p,height:S,fill:"url(#rn-dots)"}));const T=at("g"),b=[];for(const P of c){const F=u[P.name];if(!F)continue;const W=e.has(P.name);for(const z of[...d[P.name]||[]]){const j=u[z];if(!j)continue;const O=e.has(z),V=W&&O,H=!m(P.name),Q=O?Eu:m(z)?Mu:Tu,le=P.level===f?Wm:W?Eu:H?Tu:Mu,U=j.x+Q,ae=j.y,Me=F.x-le,De=F.y,q=(Me-U)*.48,re=Hm(P.name,z,18),oe=Hm(z,P.name,18),Te=`M ${U},${ae} C ${U+q},${ae+re} ${Me-q},${De+oe} ${Me},${De}`,ve=at("path",{d:Te,fill:"none","pointer-events":"none"});V?(ve.setAttribute("stroke","rgba(0,255,242,0.58)"),ve.setAttribute("stroke-width","2"),ve.style.filter="drop-shadow(0 0 3px rgba(0,255,242,0.44))"):H?(ve.setAttribute("stroke","rgba(80,95,115,0.14)"),ve.setAttribute("stroke-width","1")):(ve.setAttribute("stroke","rgba(77,159,255,0.15)"),ve.setAttribute("stroke-width","1.5")),b.push({el:ve,from:P.name,to:z,bothDone:V,isLocked:H}),T.appendChild(ve)}}o.appendChild(T);const w=at("g"),x=new Map;for(const P of c){const F=u[P.name];if(!F)continue;const W=P.level===f,z=e.has(P.name),j=!m(P.name),O=W?Wm:z?Eu:j?Tu:Mu;let V,H,Q,le,U;W?(V="#ffaa40",H="none",Q="rn-glA",le="#ffaa40",U="2.5"):z?(V="#00fff2",H="none",Q="rn-glD",le="#00fff2",U="1.8"):j?(V="#3d4e62",H="rgba(20,30,45,0.15)",Q="",le="#3d4e62",U="1.0"):(V="#4d9fff",H="none",Q="rn-glO",le="#6aacff",U="1.5");const ae=at("g",{transform:`translate(${F.x},${F.y})`,"data-name":P.name}),Me=at("circle",{r:String(O+15),fill:V,opacity:"0","pointer-events":"none"});if(Me.setAttribute("filter","url(#rn-bloom)"),ae.appendChild(Me),ae.appendChild(at("circle",{r:String(O+16),fill:"transparent",stroke:"none"})),!W&&!j){const $=at("circle",{r:String(O+12),fill:"none",stroke:V,"stroke-width":"0.8","pointer-events":"none"});$.classList.add(J.nodeRing),ae.appendChild($)}const De=at("circle",{r:String(O),fill:H,stroke:V,"stroke-width":U,"pointer-events":"none"});Q&&De.setAttribute("filter",`url(#${Q})`),ae.appendChild(De),W&&ae.appendChild(at("circle",{r:String(O-9),fill:"none",stroke:"#ffaa40","stroke-width":"1.5",opacity:".40","pointer-events":"none"}));const q=P.icon,re=W?17:q.length>2?11.5:15,oe=at("text",{x:"0",y:W?"-10":"-7","text-anchor":"middle","dominant-baseline":"middle",fill:le,"font-family":"'JetBrains Mono', monospace","font-size":String(re),"font-weight":"600","pointer-events":"none"});oe.textContent=q,ae.appendChild(oe);const Te=P.name.length>8?P.name.slice(0,7)+"…":P.name,ve=at("text",{x:"0",y:W?"12":"10","text-anchor":"middle","dominant-baseline":"middle",fill:le,"font-family":"'Outfit', sans-serif","font-size":W?"9":"8","font-weight":"500","letter-spacing":".04em",opacity:".70","pointer-events":"none"});if(ve.textContent=Te,ae.appendChild(ve),W){const $=at("text",{x:String(O+15),y:"1","text-anchor":"start","dominant-baseline":"middle",fill:"#ffaa40","font-family":"'Outfit', sans-serif","font-size":"13.5","font-weight":"600","letter-spacing":".04em","pointer-events":"none"});$.textContent=P.name,ae.appendChild($)}else{const $=z?"#aabbd0":j?"#252f3c":"#7a94b8",ie=at("text",{x:"0",y:String(O+16),"text-anchor":"middle","dominant-baseline":"hanging",fill:$,"font-family":"'Outfit', sans-serif","font-size":"11","font-weight":z?"500":"400","letter-spacing":".025em","pointer-events":"none"});ie.textContent=P.name,ae.appendChild(ie)}if(z&&!W){const $=O*.62,ie=-O*.62;ae.appendChild(at("circle",{cx:String($),cy:String(ie),r:"7.5",fill:"#070b18",stroke:"#00fff2","stroke-width":"1.1","pointer-events":"none"}));const fe=at("text",{x:String($),y:String(ie+.5),"text-anchor":"middle","dominant-baseline":"middle",fill:"#00fff2","font-family":"'JetBrains Mono', monospace","font-size":"9","font-weight":"700","pointer-events":"none"});fe.textContent="✓",ae.appendChild(fe)}if(n===P.name&&z){const $=at("circle",{r:String(O),fill:"none",stroke:"#00fff2","stroke-width":"2","pointer-events":"none",opacity:"0.8"});$.style.transformOrigin="center",$.classList.add(J.completePulse),ae.appendChild($);const ie=at("circle",{r:String(O),fill:"none",stroke:"#00fff2","stroke-width":"1.5","pointer-events":"none",opacity:"0.5"});ie.style.transformOrigin="center",ie.style.animationDelay="0.15s",ie.classList.add(J.completePulse),ae.appendChild(ie)}ae.addEventListener("click",()=>{a.current&&(a.current.style.opacity="0"),i(P)}),x.set(P.name,{g:ae,skill:P,isApex:W,isDone:z,isLock:j,strokeCol:V,bloom:Me,px:F.x,py:F.y}),w.appendChild(ae)}o.appendChild(w);function C(P){const F=new Set,W=[P],z=new Set;for(;W.length;){const j=W.shift();if(!z.has(j)){z.add(j);for(const O of b)O.from===j&&(F.add(O),!e.has(O.to)&&!z.has(O.to)&&W.push(O.to))}}return F}function D(){for(const P of b)P.el.style.opacity="",P.bothDone?(P.el.setAttribute("stroke","rgba(0,255,242,0.58)"),P.el.setAttribute("stroke-width","2"),P.el.style.filter="drop-shadow(0 0 3px rgba(0,255,242,0.44))"):P.isLocked?(P.el.setAttribute("stroke","rgba(80,95,115,0.14)"),P.el.setAttribute("stroke-width","1"),P.el.style.filter=""):(P.el.setAttribute("stroke","rgba(77,159,255,0.15)"),P.el.setAttribute("stroke-width","1.5"),P.el.style.filter="")}for(const[P,{g:F,skill:W,isApex:z,bloom:j,px:O,py:V}]of x)F.addEventListener("mouseenter",()=>{var le;F.setAttribute("transform",`translate(${O},${V}) scale(1.13)`),j.setAttribute("opacity",z?"0.32":"0.24");const H=a.current;if(H){const U=(le=W.requires)!=null&&le.length?W.requires.join(", "):null;H.innerHTML=`<div class="${J.tooltipName}">${W.name}</div><div class="${J.tooltipLevel}">LVL ${W.level}</div>`+(W.description?`<div class="${J.tooltipDesc}">${W.description.slice(0,120)}${W.description.length>120?"...":""}</div>`:"")+(U?`<div class="${J.tooltipReqs}">Requires: ${U}</div>`:"");const ae=r.current.getBoundingClientRect(),Me=s.current.getBoundingClientRect(),De=r.current.scrollLeft,q=r.current.scrollTop,re=O-De+(Me.left-ae.left),oe=V-q+(Me.top-ae.top)-20;H.style.left=`${re}px`,H.style.top=`${oe}px`,H.style.opacity="1",H.style.pointerEvents="none"}for(const[U,{g:ae}]of x)U!==P&&(ae.style.opacity="0.38");const Q=C(P);for(const U of b)Q.has(U)?(U.el.setAttribute("stroke",U.bothDone?"rgba(0,255,242,0.95)":"rgba(77,159,255,0.88)"),U.el.setAttribute("stroke-width","2.5"),U.el.style.filter=U.bothDone?"drop-shadow(0 0 6px rgba(0,255,242,0.60))":"drop-shadow(0 0 5px rgba(77,159,255,0.46))",U.el.style.opacity="1"):U.el.style.opacity="0.04"}),F.addEventListener("mouseleave",()=>{F.setAttribute("transform",`translate(${O},${V})`),j.setAttribute("opacity","0");for(const[,{g:H}]of x)H.style.opacity="";D(),a.current&&(a.current.style.opacity="0")});return()=>{o.innerHTML=""}},[t,e,n,i]),_.jsxs("div",{ref:r,className:J.graphContainer,children:[_.jsx("svg",{ref:s,className:J.graph}),_.jsx("div",{ref:a,className:J.nodeTooltip})]})}function YT({node:t,open:e,completedNodes:n,onClose:i,onToggleComplete:r}){var d;const[s,a]=L.useState("overview");if(L.useEffect(()=>{t&&a("overview")},[t==null?void 0:t.name]),!t)return _.jsx("aside",{className:J.detailPanel,"aria-hidden":"true"});const l=!(!t.requires||t.requires.length===0||t.requires.every(m=>n.has(m))),c=n.has(t.name),f=((d=t.requires)==null?void 0:d.filter(m=>!n.has(m)))||[],h=`${J.detailPanel} ${e?J.detailPanelOpen:""}`;return _.jsxs("aside",{className:h,children:[_.jsxs("div",{className:J.detailHeader,children:[_.jsx("h3",{className:J.detailName,children:t.name}),_.jsx("button",{className:J.detailClose,onClick:i,"aria-label":"Close details",children:_.jsx("span",{className:J.closeIcon})})]}),_.jsxs("div",{className:J.detailLevelRow,children:[_.jsxs("span",{className:J.detailLevel,children:["LVL ",t.level]}),l&&_.jsx("span",{className:J.detailLocked,children:"LOCKED"}),c&&_.jsx("span",{className:J.detailDone,children:"COMPLETE"})]}),!l&&_.jsxs("div",{className:J.tabBar,children:[_.jsx("button",{className:`${J.tabBtn} ${s==="overview"?J.tabBtnActive:""}`,onClick:()=>a("overview"),children:"Overview"}),_.jsx("button",{className:`${J.tabBtn} ${s==="learn"?J.tabBtnActive:""}`,onClick:()=>a("learn"),children:"Learn"}),_.jsx("button",{className:`${J.tabBtn} ${s==="resources"?J.tabBtnActive:""}`,onClick:()=>a("resources"),children:"Resources"})]}),l?_.jsxs("div",{className:J.tabPane,children:[t.requires&&t.requires.length>0&&_.jsxs("div",{children:[_.jsx("p",{className:J.detailLabel,children:"Requires"}),_.jsx("ul",{className:`${J.list} ${J.requires}`,children:t.requires.map(m=>{const v=n.has(m);return _.jsxs("li",{style:{color:v?"hsl(142,55%,55%)":void 0},children:[v?"✓ ":"",m]},m)})})]}),_.jsxs("p",{className:J.detailDescription,children:["Complete ",f.join(" and ")," to unlock this skill."]})]}):_.jsxs(_.Fragment,{children:[s==="overview"&&_.jsxs("div",{className:J.tabPane,children:[t.requires&&t.requires.length>0&&_.jsxs("div",{children:[_.jsx("p",{className:J.detailLabel,children:"Requires"}),_.jsx("ul",{className:`${J.list} ${J.requires}`,children:t.requires.map(m=>{const v=n.has(m);return _.jsxs("li",{style:{color:v?"hsl(142,55%,55%)":void 0},children:[v?"✓ ":"",m]},m)})})]}),_.jsx("p",{className:J.detailLabel,children:"How to develop"}),_.jsx("p",{className:J.detailDescription,children:t.description||"No description available."}),_.jsx("p",{className:J.detailLabel,children:"Practice tips"}),_.jsx("ul",{className:`${J.list} ${J.tips}`,children:(t.tips||[]).map((m,v)=>_.jsx("li",{children:m},v))}),t.outcomes&&t.outcomes.length>0&&_.jsxs("div",{children:[_.jsx("p",{className:J.detailLabel,children:"What you'll be able to do"}),_.jsx("ul",{className:`${J.list} ${J.outcomes}`,children:t.outcomes.map((m,v)=>_.jsx("li",{children:m},v))})]})]}),s==="learn"&&_.jsxs("div",{className:J.tabPane,children:[t.keyConcepts&&t.keyConcepts.length>0&&_.jsxs("div",{children:[_.jsx("p",{className:J.detailLabel,children:"Key concepts"}),_.jsx("ul",{className:`${J.list} ${J.concepts}`,children:t.keyConcepts.map((m,v)=>_.jsx("li",{children:typeof m=="object"?_.jsxs(_.Fragment,{children:[_.jsx("strong",{children:m.term})," — ",m.explanation]}):m},v))})]}),t.commonMistakes&&t.commonMistakes.length>0&&_.jsxs("div",{children:[_.jsx("p",{className:J.detailLabel,children:"Common mistakes"}),_.jsx("ul",{className:`${J.list} ${J.mistakes}`,children:t.commonMistakes.map((m,v)=>_.jsx("li",{children:m},v))})]})]}),s==="resources"&&_.jsx("div",{className:J.tabPane,children:_.jsxs("div",{children:[_.jsx("p",{className:J.detailLabel,children:"Resources"}),_.jsxs("ul",{className:`${J.list} ${J.resources}`,children:[(t.resources||[]).map((m,v)=>_.jsxs("li",{children:[_.jsx("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",children:m.name}),_.jsxs("span",{className:J.resourceType,children:["[",m.type,"]"]}),m.description&&_.jsx("p",{className:J.resourceDesc,children:m.description})]},v)),_.jsxs("li",{className:J.exploreWikiLink,children:[_.jsxs("a",{href:`/explore?q=${encodeURIComponent(t.name)}`,children:['Explore "',t.name,'" on Wikipedia']}),_.jsx("span",{className:J.resourceType,children:"[wiki]"}),_.jsx("p",{className:J.resourceDesc,children:"Dive deeper with the interactive knowledge graph explorer."})]})]})]})}),_.jsx("button",{className:`${J.completeBtn} ${c?J.completeBtnDone:""}`,onClick:()=>r(t.name),children:c?"COMPLETED":"MARK COMPLETE"})]})]})}function KT({topic:t,nodes:e,completedNodes:n}){const[i,r]=L.useState(!1),[s,a]=L.useState(!1),o=L.useRef(null);L.useEffect(()=>{function f(h){o.current&&!o.current.contains(h.target)&&r(!1)}return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[]);function l(){const f=`${window.location.origin}/?generate=${encodeURIComponent(t)}`;navigator.clipboard.writeText(f).then(()=>{a(!0),setTimeout(()=>{a(!1),r(!1)},1200)})}function c(){const f={topic:t,exportedAt:new Date().toISOString(),nodes:e.map(v=>({...v,completed:n.has(v.name)}))},h=new Blob([JSON.stringify(f,null,2)],{type:"application/json"}),d=URL.createObjectURL(h),m=document.createElement("a");m.href=d,m.download=`skill-tree-${t.toLowerCase().replace(/\s+/g,"-")}.json`,m.click(),URL.revokeObjectURL(d),r(!1)}return _.jsxs("div",{ref:o,className:J.shareWrap,children:[_.jsx("button",{className:J.shareBtn,onClick:()=>r(!i),title:"Share / Export",children:"⤤"}),i&&_.jsxs("div",{className:J.shareDropdown,children:[_.jsx("button",{className:J.shareOption,onClick:l,children:s?"✓ Copied!":"Copy Link"}),_.jsx("button",{className:J.shareOption,onClick:c,children:"Export JSON"})]})]})}function ZT(){const{currentTopic:t,currentNodes:e,completedNodes:n,closeTree:i,toggleComplete:r}=ma(),[s,a]=L.useState(null),[o,l]=L.useState(!1),c=L.useCallback(u=>{a(u),l(!0)},[]),f=L.useCallback(()=>{l(!1)},[]),h=L.useRef(null),d=L.useCallback(u=>{n.has(u)?h.current=null:h.current=u,r(u)},[r,n]),m=s?e.find(u=>u.name===s.name)||s:null,v=e.length,S=n.size,p=v?S/v*100:0;return _.jsxs("div",{className:J.treeView,children:[_.jsxs("div",{className:J.treeHeader,children:[_.jsxs("button",{className:J.backBtn,onClick:i,children:[_.jsx("span",{className:J.backArrow,children:"←"}),_.jsx("span",{children:"Back"})]}),_.jsxs("div",{className:J.treeTitleWrap,children:[_.jsx("span",{className:J.treeEyebrow,children:"TOPIC"}),_.jsx("h2",{className:J.treeTitle,children:t})]}),_.jsxs("div",{className:J.progressWrap,children:[_.jsxs("span",{className:J.progressLabel,children:[S.toString().padStart(2,"0"),"/",v.toString().padStart(2,"0")," · ",Math.round(p),"%"]}),_.jsx("div",{className:J.progressTrack,children:_.jsx("div",{className:J.progressFill,style:{width:`${p}%`}})})]}),_.jsx(KT,{topic:t,nodes:e,completedNodes:n})]}),_.jsxs("div",{className:J.treeBody,children:[_.jsx(qT,{nodes:e,completedNodes:n,justCompleted:h.current,onNodeClick:c}),_.jsx(YT,{node:m,open:o&&!!m,completedNodes:n,onClose:f,onToggleComplete:d})]})]})}const JT="_overlay_1d10p_1",QT="_card_1d10p_19",ew="_title_1d10p_37",tw="_grid_1d10p_48",nw="_row_1d10p_54",iw="_key_1d10p_60",rw="_desc_1d10p_79",sw="_trigger_1d10p_86",nr={overlay:JT,card:QT,title:ew,grid:tw,row:nw,key:iw,desc:rw,trigger:sw},aw=[{key:"Tab",desc:"Cycle through graph nodes"},{key:"Enter",desc:"Preview focused node"},{key:"Esc",desc:"Close preview / overlay"},{key:"Dbl-click",desc:"Jump to concept"},{key:"Drag",desc:"Pan the graph"},{key:"/",desc:"Focus search bar"},{key:"?",desc:"Toggle this help"}],ow=[{key:"Click",desc:"View node details"},{key:"Esc",desc:"Close detail panel"},{key:"?",desc:"Toggle this help"}];function Rv({page:t="explore"}){const[e,n]=L.useState(!1),i=L.useCallback(()=>n(s=>!s),[]);L.useEffect(()=>{function s(a){a.target.tagName==="INPUT"||a.target.tagName==="TEXTAREA"||((a.key==="?"||a.key==="/"&&a.shiftKey)&&(a.preventDefault(),i()),a.key==="Escape"&&e&&n(!1))}return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[e,i]);const r=t==="explore"?aw:ow;return _.jsxs(_.Fragment,{children:[_.jsx("button",{className:nr.trigger,onClick:i,title:"Keyboard shortcuts",children:"?"}),e&&_.jsx("div",{className:nr.overlay,onClick:()=>n(!1),children:_.jsxs("div",{className:nr.card,onClick:s=>s.stopPropagation(),children:[_.jsx("div",{className:nr.title,children:"Keyboard Shortcuts"}),_.jsx("div",{className:nr.grid,children:r.map(s=>_.jsxs("div",{className:nr.row,children:[_.jsx("span",{className:nr.key,children:s.key}),_.jsx("span",{className:nr.desc,children:s.desc})]},s.key))})]})})]})}function lw({topic:t}){return _.jsxs("div",{style:{position:"fixed",inset:0,background:"#000000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,zIndex:900,fontFamily:"var(--font-display, 'Outfit'), sans-serif"},children:[_.jsx("div",{style:{width:14,height:14,borderRadius:"50%",background:"#ffd27a",boxShadow:"0 0 12px rgba(255,200,90,0.9), 0 0 28px rgba(255,170,64,0.55), 0 0 60px rgba(255,170,64,0.3)",animation:"branchPulse 1.6s ease-in-out infinite"}}),_.jsx("div",{style:{color:"rgba(255,200,90,0.85)",fontSize:11,letterSpacing:4,textTransform:"uppercase",textShadow:"0 0 10px rgba(255,170,64,0.5)"},children:"Growing skill tree"}),t&&_.jsx("div",{style:{color:"rgba(255,255,255,0.55)",fontSize:13,letterSpacing:1},children:t}),_.jsx("style",{children:`
        @keyframes branchPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `})]})}function wu({hideExplore:t=!1}={}){const{currentTopic:e,currentNodes:n,generating:i,generateTree:r}=ma(),[s,a]=L.useState(null),l=new URLSearchParams(window.location.search).get("generate"),[c,f]=L.useState(!!l),[h,d]=L.useState(l||""),m=L.useRef(!1);L.useEffect(()=>{m.current||l&&(m.current=!0,window.history.replaceState({},"","/"),r(l).catch(()=>{}).finally(()=>f(!1)))},[]);const v=e&&n.length>0;return(c||i)&&!v?_.jsx(lw,{topic:h}):_.jsxs(_.Fragment,{children:[_.jsx(Yh,{onSignIn:()=>a("login"),onSignUp:()=>a("register")}),_.jsx(Av,{}),v?_.jsx(ZT,{}):_.jsx(jT,{hideExplore:t}),_.jsx(Rv,{page:"skilltree"}),s&&_.jsx(Kh,{initialMode:s,onClose:()=>a(null)})]})}const Pv=L.createContext(null),cw={Science:["physics","chemistry","biology","quantum","science","experiment","atom","molecule","evolution","genetics"],Technology:["technology","computing","software","internet","engineering","computer","algorithm","digital","electrical"],Mathematics:["mathematics","algebra","geometry","theorem","calculus","statistics","logic","number","equation"],History:["history","war","century","ancient","empire","dynasty","civilization","revolution","medieval"],Philosophy:["philosophy","ethics","logic","metaphysics","epistemology","consciousness","ontology","moral"],Art:["art","music","literature","film","culture","painting","poetry","architecture","cinema"],Society:["society","politics","economics","law","social","government","democracy","culture","religion"]},uw={Science:"#00d4ff",Technology:"#7c8aff",Mathematics:"#c8a0ff",History:"#ffd97c",Philosophy:"#ff9f7c",Art:"#5cffa0",Society:"#ff7cc8",Unknown:"#334"};function dw(t=[]){const e=t.join(" ").toLowerCase();let n="Unknown",i=0;for(const[r,s]of Object.entries(cw)){const a=s.filter(o=>e.includes(o)).length;a>i&&(i=a,n=r)}return n}const fw={currentConcept:null,trail:[],trailIndex:-1,graphData:null,loading:!1,enriching:!1,enriched:!1,error:null,trailOpen:!1,journeyOpen:!1,previewNode:null,expandedNode:null,detailLoading:!1,prevCenterTitle:null,focusMode:!1,highlightedNodeId:null};function $m(t,e=new Set){const n=[],i=[];for(const r of t.connections||[])e.has(r.title)||n.push({id:r.title,label:r.title,type:"primary",relation:r.relation,strength:r.strength,description:r.description,color:{core:"blue",related:"cyan",application:"gold",foundation:"purple"}[r.relation]||"cyan",hopDistance:0,cluster:null}),i.push({source:t.title,target:r.title,strength:r.strength||1,color:{core:"blue",related:"cyan",application:"gold",foundation:"purple"}[r.relation]||"cyan",type:"connection"});return{nodes:n,edges:i}}function Xm(t){return t.map(e=>!e.visited||e.type==="center"?e:{...e,cluster:dw(e.categories||[])})}function hw(t,e){var n,i;switch(e.type){case"LOAD_START":return{...t,loading:!0,error:null};case"LOAD_SUCCESS":{const r=e.payload,s=e.isHistoryNav,a=e.requestedTitle,o=r.title;let l,c;if(s)l=t.trail,c=e.historyIndex;else{const x={title:o,timestamp:Date.now(),categories:r.categories||[]};l=[...t.trail.slice(0,t.trailIndex+1),x],c=l.length-1}const f=new Set(l.map(x=>x.title)),h=t.graphData&&((n=t.graphData.nodes.find(x=>x.type==="center"))==null?void 0:n.id)||null;if(!t.graphData){const{nodes:x,edges:C}=$m(r),N=[{id:o,label:o,type:"center",color:"gold",hopDistance:0,cluster:null,categories:r.categories||[]},...x].map(P=>({...P,visited:f.has(P.id)}));return{...t,loading:!1,currentConcept:r,trail:l,trailIndex:c,graphData:{nodes:Xm(N),edges:C},previewNode:null,enriching:!1,enriched:!1,expandedNode:null,prevCenterTitle:null}}let d=t.graphData.nodes,m=t.graphData.edges;a&&a!==o&&(d=d.map(x=>x.id===a?{...x,id:o,label:o}:x),m=m.map(x=>({...x,source:x.source===a?o:x.source,target:x.target===a?o:x.target})));const v=d.map(x=>x.id===o?{...x,type:"center",hopDistance:0,color:"gold"}:x.type==="center"?{...x,type:"trail",hopDistance:1,color:"gold"}:x.type==="primary"?{...x,type:"dormant",hopDistance:1}:{...x,hopDistance:Math.min(x.hopDistance||0,4)}),S=new Set(v.map(x=>x.id)),{nodes:p,edges:u}=$m(r,S),g=[];if(!s&&l.length>=2){const x=l[l.length-2].title,C=d.some(D=>D.id===o&&(D.type==="primary"||D.type==="secondary"));g.push({source:x,target:o,strength:3,color:"gold",type:"trail",trailType:C?"direct":"indirect"})}const y=[...v,...p].map(x=>({...x,visited:f.has(x.id),categories:x.categories||(x.id===o?r.categories:[])})),E=new Set(y.map(x=>x.id)),T=[...m,...u,...g];T.sort((x,C)=>(C.type==="trail"?1:0)-(x.type==="trail"?1:0));const b=new Set,w=[];for(const x of T){if(!E.has(x.source)||!E.has(x.target))continue;const C=x.source+"→"+x.target;b.has(C)||(b.add(C),w.push(x))}return{...t,loading:!1,currentConcept:r,trail:l,trailIndex:c,graphData:{nodes:Xm(y),edges:w},previewNode:null,enriching:!1,enriched:!1,expandedNode:null,prevCenterTitle:h}}case"LOAD_ERROR":return{...t,loading:!1,error:e.payload};case"ENRICH_START":return{...t,enriching:!0};case"REPLACE_CONNECTIONS":{const r=e.payload;if(!t.graphData)return{...t,enriching:!1};const s=(i=t.currentConcept)==null?void 0:i.title,a=new Set(t.graphData.nodes.filter(u=>u.type==="primary").map(u=>u.id)),o=new Set;for(const u of t.graphData.edges)u.type==="secondary"&&a.has(u.source)&&o.add(u.target);const l=new Set;for(const u of a)l.add(u);for(const u of o)l.add(u);const c=t.graphData.nodes.filter(u=>!l.has(u.id)||u.type==="trail"||u.type==="dormant"||u.type==="center"),f=new Set(c.map(u=>u.id)),h=t.graphData.edges.filter(u=>f.has(u.source)&&f.has(u.target)),d=new Set(t.trail.map(u=>u.title)),m=new Set(f),v=[],S=[];for(const u of r)m.has(u.title)||(v.push({id:u.title,label:u.title,type:"primary",relation:u.relation,strength:u.strength,description:u.description,color:{core:"blue",related:"cyan",application:"gold",foundation:"purple"}[u.relation]||"cyan",hopDistance:0,cluster:null,visited:d.has(u.title),enriched:!0,categories:[]}),m.add(u.title)),S.push({source:s,target:u.title,strength:u.strength||2,color:{core:"blue",related:"cyan",application:"gold",foundation:"purple"}[u.relation]||"cyan",type:"connection"});const p={...t.currentConcept,connections:r};return{...t,enriching:!1,enriched:!0,currentConcept:p,graphData:{nodes:[...c,...v],edges:[...h,...S]}}}case"ENRICH_ERROR":return{...t,enriching:!1};case"ADD_SECOND_LAYER":{const{parentId:r,childTitles:s}=e.payload;if(!t.graphData)return t;const a=new Set(t.graphData.nodes.map(h=>h.id)),o=new Set(t.graphData.edges.map(h=>h.source+"→"+h.target)),l=new Set(t.trail.map(h=>h.title)),c=[],f=[];for(const h of s){a.has(h)||(c.push({id:h,label:h,type:"secondary",color:"purple",hopDistance:0,cluster:null,visited:l.has(h),categories:[]}),a.add(h));const d=r+"→"+h;o.has(d)||(f.push({source:r,target:h,strength:1,color:"purple",type:"secondary"}),o.add(d))}return{...t,graphData:{nodes:[...t.graphData.nodes,...c],edges:[...t.graphData.edges,...f]}}}case"SET_NODE_SUMMARY":{const{nodeId:r,summary:s,extract:a,image:o}=e.payload;if(!t.graphData)return t;const l=t.graphData.nodes.map(c=>c.id===r?{...c,description:s,extract:a,image:o}:c);return{...t,graphData:{...t.graphData,nodes:l}}}case"SET_EXPANDED":return{...t,expandedNode:e.payload,detailLoading:!1};case"DETAIL_LOADING":return{...t,detailLoading:!0};case"CLEAR_EXPANDED":return{...t,expandedNode:null,detailLoading:!1};case"GO_BACK":return t;case"GO_FORWARD":return t;case"SET_PREVIEW":return{...t,previewNode:e.payload};case"CLEAR_PREVIEW":return{...t,previewNode:null};case"TOGGLE_TRAIL":return{...t,trailOpen:!t.trailOpen};case"TOGGLE_JOURNEY":return{...t,journeyOpen:!t.journeyOpen};case"TOGGLE_FOCUS":return{...t,focusMode:!t.focusMode};case"SET_HIGHLIGHT":return{...t,highlightedNodeId:e.payload};case"CLEAR_HIGHLIGHT":return{...t,highlightedNodeId:null};default:return t}}function pw({children:t}){const[e,n]=L.useReducer(hw,fw),i=L.useRef({}),r=L.useCallback(async T=>{n({type:"LOAD_START"});try{let b;i.current[T]?b=i.current[T]:(b=await Jo(T),i.current[b.title]=b,T!==b.title&&(i.current[T]=b)),n({type:"LOAD_SUCCESS",payload:b,requestedTitle:T})}catch(b){n({type:"LOAD_ERROR",payload:b.message})}},[]),s=L.useCallback(async()=>{if(e.trailIndex<=0)return;const T=e.trailIndex-1,b=e.trail[T].title;n({type:"LOAD_START"});try{let w;i.current[b]?w=i.current[b]:(w=await Jo(b),i.current[w.title]=w),n({type:"LOAD_SUCCESS",payload:w,requestedTitle:b,isHistoryNav:!0,historyIndex:T})}catch(w){n({type:"LOAD_ERROR",payload:w.message})}},[e.trailIndex,e.trail]),a=L.useCallback(async()=>{if(e.trailIndex>=e.trail.length-1)return;const T=e.trailIndex+1,b=e.trail[T].title;n({type:"LOAD_START"});try{let w;i.current[b]?w=i.current[b]:(w=await Jo(b),i.current[w.title]=w),n({type:"LOAD_SUCCESS",payload:w,requestedTitle:b,isHistoryNav:!0,historyIndex:T})}catch(w){n({type:"LOAD_ERROR",payload:w.message})}},[e.trailIndex,e.trail]),o=L.useCallback(async T=>{if(T<0||T>=e.trail.length||T===e.trailIndex)return;const b=e.trail[T].title;n({type:"LOAD_START"});try{let w;i.current[b]?w=i.current[b]:(w=await Jo(b),i.current[w.title]=w),n({type:"LOAD_SUCCESS",payload:w,requestedTitle:b,isHistoryNav:!0,historyIndex:T})}catch(w){n({type:"LOAD_ERROR",payload:w.message})}},[e.trailIndex,e.trail]),l=L.useCallback(async()=>{if(!(!e.currentConcept||e.enriching)){n({type:"ENRICH_START"});try{const T=await oM(e.currentConcept.title,e.currentConcept.extract);T.connections&&T.connections.length>0?n({type:"REPLACE_CONNECTIONS",payload:T.connections}):n({type:"ENRICH_ERROR"})}catch(T){console.warn("Enrich failed:",T.message),n({type:"ENRICH_ERROR"})}}},[e.currentConcept,e.enriching]),c=L.useCallback(()=>{if(!e.graphData)return null;const T=e.graphData.nodes.filter(C=>C.type!=="center"&&!C.visited&&C.type!=="secondary");if(!T.length){const C=e.graphData.nodes.filter(N=>N.type!=="center"&&!N.visited);if(!C.length)return null;const D=C[Math.floor(Math.random()*C.length)];return r(D.id),D}const b=T.filter(C=>C.type==="dormant"||C.type==="trail"),w=b.length?b:T,x=w[Math.floor(Math.random()*w.length)];return r(x.id),x},[e.graphData,r]),f=L.useCallback(async T=>{try{const b=await lM(T);n({type:"ADD_SECOND_LAYER",payload:{parentId:T,childTitles:b}})}catch(b){console.warn("Expand failed:",b.message)}},[]),h=L.useCallback(async T=>{if(T.extract)n({type:"SET_EXPANDED",payload:T});else{n({type:"DETAIL_LOADING"});const b=await cM(T.id||T.label);b?(n({type:"SET_NODE_SUMMARY",payload:{nodeId:T.id,...b}}),n({type:"SET_EXPANDED",payload:{...T,...b}})):n({type:"SET_EXPANDED",payload:T})}},[]),d=L.useCallback(()=>n({type:"CLEAR_EXPANDED"}),[]),m=L.useCallback(T=>n({type:"SET_PREVIEW",payload:T}),[]),v=L.useCallback(()=>n({type:"CLEAR_PREVIEW"}),[]),S=L.useCallback(()=>n({type:"TOGGLE_TRAIL"}),[]),p=L.useCallback(()=>n({type:"TOGGLE_JOURNEY"}),[]),u=L.useCallback(()=>n({type:"TOGGLE_FOCUS"}),[]),g=L.useCallback(T=>n({type:"SET_HIGHLIGHT",payload:T}),[]),y=L.useCallback(()=>n({type:"CLEAR_HIGHLIGHT"}),[]),E={...e,jumpTo:r,goBack:s,goForward:a,goToIndex:o,enrich:l,pickCuriosity:c,expandNode:f,showNodeDetail:h,clearExpanded:d,setPreview:m,clearPreview:v,toggleTrail:S,toggleJourney:p,toggleFocus:u,setHighlight:g,clearHighlight:y,clusterColors:uw};return _.jsx(Pv.Provider,{value:E,children:t})}function qn(){const t=L.useContext(Pv);if(!t)throw new Error("useExplorer must be used within ExplorerProvider");return t}const mw="_topbar_1ex99_95",gw="_searchArea_1ex99_109",_w="_searchBar_1ex99_116",vw="_scanning_1ex99_141",xw="_searchIcon_1ex99_150",yw="_searchInput_1ex99_156",Sw="_dropdown_1ex99_172",Ew="_dropdownItem_1ex99_185",Mw="_dropdownTitle_1ex99_201",Tw="_dropdownSnippet_1ex99_207",ww="_right_1ex99_216",Cw="_jumpCount_1ex99_223",bw="_jumpCountLabel_1ex99_237",Aw="_btn_1ex99_244",Rw="_btnCuriosity_1ex99_257",Pw="_btnTrail_1ex99_269",Nw="_active_1ex99_274",Lw="_btnJourney_1ex99_281",Dw="_breadcrumbs_1ex99_294",Iw="_breadcrumbItem_1ex99_307",Uw="_breadcrumbEllipsis_1ex99_320",Fw="_breadcrumbSep_1ex99_326",Ow="_breadcrumbLabel_1ex99_331",kw="_breadcrumbActive_1ex99_345",_t={topbar:mw,searchArea:gw,searchBar:_w,scanning:vw,searchIcon:xw,searchInput:yw,dropdown:Sw,dropdownItem:Ew,dropdownTitle:Mw,dropdownSnippet:Tw,right:ww,jumpCount:Cw,jumpCountLabel:bw,btn:Aw,btnCuriosity:Rw,btnTrail:Pw,active:Nw,btnJourney:Lw,breadcrumbs:Dw,breadcrumbItem:Iw,breadcrumbEllipsis:Uw,breadcrumbSep:Fw,breadcrumbLabel:Ow,breadcrumbActive:kw};function Bw(){const{trail:t,trailIndex:e,toggleTrail:n,toggleJourney:i,trailOpen:r,pickCuriosity:s,currentConcept:a,goToIndex:o}=qn(),{jumpTo:l}=qn(),[c,f]=L.useState(""),[h,d]=L.useState([]),[m,v]=L.useState(!1),[S,p]=L.useState(!1),u=L.useRef(null),g=L.useRef(null),y=L.useRef(null);L.useEffect(()=>{function x(C){u.current&&!u.current.contains(C.target)&&v(!1)}return document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x),clearTimeout(g.current),clearTimeout(y.current)}},[]);function E(x){if(f(x),p(!0),clearTimeout(y.current),y.current=setTimeout(()=>p(!1),1500),clearTimeout(g.current),x.trim().length<2){d([]),v(!1);return}g.current=setTimeout(async()=>{try{const C=await aM(x);d(C.slice(0,6)),v(!0)}catch{d([])}},300)}function T(x){f(x),v(!1),l(x)}function b(x){x.key==="Enter"&&c.trim()&&(v(!1),l(c.trim()))}L.useEffect(()=>{a&&(f(""),v(!1))},[a==null?void 0:a.title]);const w=e+1;return _.jsxs(_.Fragment,{children:[_.jsxs("div",{className:_t.topbar,children:[_.jsxs("div",{className:_t.searchArea,ref:u,children:[_.jsxs("div",{className:`${_t.searchBar} ${S?_t.scanning:""}`,children:[_.jsx("span",{className:_t.searchIcon,children:"/"}),_.jsx("input",{value:c,onChange:x=>E(x.target.value),onKeyDown:b,placeholder:"explore a concept...",className:_t.searchInput})]}),m&&h.length>0&&_.jsx("div",{className:_t.dropdown,children:h.map(x=>_.jsxs("div",{className:_t.dropdownItem,onClick:()=>T(x.title),children:[_.jsx("div",{className:_t.dropdownTitle,children:x.title}),_.jsx("div",{className:_t.dropdownSnippet,children:x.snippet})]},x.title))})]}),_.jsxs("div",{className:_t.right,children:[w>0&&_.jsxs("div",{className:_t.jumpCount,children:[_.jsx("span",{children:w}),_.jsx("span",{className:_t.jumpCountLabel,children:"hops"})]}),a&&_.jsx("button",{className:`${_t.btn} ${_t.btnCuriosity}`,onClick:s,title:"Jump to a random unexplored node",children:"RANDOM"}),_.jsx("button",{className:`${_t.btn} ${_t.btnTrail} ${r?_t.active:""}`,onClick:n,children:"TRAIL"}),_.jsx("button",{className:`${_t.btn} ${_t.btnJourney}`,onClick:i,children:"MAP"})]})]}),t.length>1&&_.jsxs("div",{className:_t.breadcrumbs,children:[t.length>5&&_.jsx("span",{className:_t.breadcrumbEllipsis,children:"..."}),t.slice(-5).map((x,C)=>{const D=t.length-5+C,N=t.length<=5?C:D,P=N===e;return _.jsxs("span",{className:_t.breadcrumbItem,children:[C>0&&_.jsx("span",{className:_t.breadcrumbSep,children:">"}),_.jsx("span",{className:`${_t.breadcrumbLabel} ${P?_t.breadcrumbActive:""}`,onClick:()=>!P&&o(N),children:x.title})]},`${x.title}-${N}`)})]})]})}const zw="_bar_mysdi_1",Vw="_backBtn_mysdi_12",Hw="_disabled_mysdi_26",Gw="_trail_mysdi_33",jw="_crumbWrap_mysdi_36",Ww="_sep_mysdi_38",$w="_crumb_mysdi_36",Xw="_current_mysdi_51",ir={bar:zw,backBtn:Vw,disabled:Hw,trail:Gw,crumbWrap:jw,sep:Ww,crumb:$w,current:Xw};function qw(){const{trail:t,trailIndex:e,goBack:n,goToIndex:i}=qn(),r=L.useRef(null);if(L.useEffect(()=>{r.current&&(r.current.scrollLeft=r.current.scrollWidth)},[e]),t.length===0)return null;const s=t.slice(0,e+1);return _.jsxs("div",{className:ir.bar,children:[_.jsx("button",{className:`${ir.backBtn} ${e<=0?ir.disabled:""}`,onClick:n,disabled:e<=0,children:"← Back"}),_.jsx("div",{className:ir.trail,ref:r,children:s.map((a,o)=>_.jsxs("span",{className:ir.crumbWrap,children:[o>0&&_.jsx("span",{className:ir.sep,children:"›"}),_.jsx("span",{className:`${ir.crumb} ${o===e?ir.current:""}`,onClick:()=>o!==e&&i(o),children:a.title})]},`${a.title}-${o}`))})]})}const Yw="_hero_1vh1e_1",Kw="_image_1vh1e_9",Zw="_img_1vh1e_20",Jw="_scanlines_1vh1e_35",Qw="_scanText_1vh1e_36",eC="_placeholder_1vh1e_38",tC="_imageOverlay_1vh1e_44",nC="_body_1vh1e_53",iC="_category_1vh1e_55",rC="_title_1vh1e_70",sC="_summary_1vh1e_79",aC="_facts_1vh1e_86",oC="_fact_1vh1e_86",lC="_factLabel_1vh1e_117",cC="_factValue_1vh1e_125",ln={hero:Yw,image:Kw,img:Zw,scanlines:Jw,scanText:Qw,placeholder:eC,imageOverlay:tC,body:nC,category:iC,title:rC,summary:sC,facts:aC,fact:oC,factLabel:lC,factValue:cC};function uC({concept:t}){var e;return _.jsxs("div",{className:ln.hero,children:[_.jsxs("div",{className:ln.image,children:[t.image?_.jsx("img",{src:t.image,alt:t.title,className:ln.img}):_.jsx("span",{className:ln.placeholder,children:"No image available"}),_.jsx("div",{className:ln.imageOverlay}),_.jsx("div",{className:ln.scanlines}),t.image&&_.jsx("span",{className:ln.scanText,children:"SCANNING..."},t.title)]}),_.jsxs("div",{className:ln.body,children:[_.jsx("div",{className:ln.category,children:((e=t.categories)==null?void 0:e[0])||"Concept"}),_.jsx("h1",{className:ln.title,children:t.title}),_.jsx("p",{className:ln.summary,children:t.summary}),_.jsx("div",{className:ln.facts,children:(t.facts||[]).map((n,i)=>_.jsxs("div",{className:ln.fact,children:[_.jsx("span",{className:ln.factLabel,children:n.label}),_.jsx("span",{className:ln.factValue,children:n.value})]},i))})]})]})}const dC="_layer_hnhf7_1",fC="_open_hnhf7_11",hC="_header_hnhf7_13",pC="_headerText_hnhf7_35",mC="_title_hnhf7_37",gC="_hint_hnhf7_44",_C="_arrow_hnhf7_50",vC="_body_hnhf7_60",rr={layer:dC,open:fC,header:hC,headerText:pC,title:mC,hint:gC,arrow:_C,body:vC};function xC({title:t,hint:e,defaultOpen:n=!1,children:i}){const[r,s]=L.useState(n);return _.jsxs("div",{className:`${rr.layer} ${r?rr.open:""}`,children:[_.jsxs("div",{className:rr.header,onClick:()=>s(!r),children:[_.jsxs("div",{className:rr.headerText,children:[_.jsx("h3",{className:rr.title,children:t}),e&&_.jsx("div",{className:rr.hint,children:e})]}),_.jsx("span",{className:rr.arrow,children:r?"−":"+"})]}),r&&_.jsx("div",{className:rr.body,children:i})]})}const yC="_section_n4r87_1",SC="_arrow_n4r87_14",EC="_heading_n4r87_16",MC="_source_n4r87_24",Qo={section:yC,arrow:SC,heading:EC,source:MC};function TC({sections:t,wikiUrl:e}){return!t||t.length===0?null:_.jsxs("div",{children:[t.map(n=>_.jsxs("div",{className:Qo.section,children:[_.jsx("span",{className:Qo.arrow,children:"▶"}),_.jsx("strong",{className:Qo.heading,children:n.heading})]},n.index)),e&&_.jsxs("div",{className:Qo.source,children:["📖 Source: ",_.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e.replace("https://","")})]})]})}const wC="_section_10psq_1",CC="_header_10psq_3",bC="_title_10psq_11",AC="_count_10psq_20",RC="_grid_10psq_22",PC="_card_10psq_24",NC="_cardHighlighted_10psq_42",LC="_strength_10psq_49",DC="_dot_10psq_50",IC="_rel_10psq_52",UC="_cardTitle_10psq_68",FC="_cardDesc_10psq_76",OC="_actions_10psq_78",_n={section:wC,header:CC,title:bC,count:AC,grid:RC,card:PC,cardHighlighted:NC,strength:LC,dot:DC,rel:IC,"rel-core":"_rel-core_10psq_63","rel-related":"_rel-related_10psq_64","rel-application":"_rel-application_10psq_65","rel-foundation":"_rel-foundation_10psq_66",cardTitle:UC,cardDesc:FC,actions:OC},kC={core:"Core",related:"Related",application:"Application",foundation:"Foundation"};function BC({connections:t}){const{jumpTo:e,setPreview:n,setHighlight:i,clearHighlight:r,highlightedNodeId:s}=qn(),a=L.useRef(null);return L.useEffect(()=>{if(!s||!a.current)return;const o=a.current.querySelector(`[data-node-id="${CSS.escape(s)}"]`);o&&o.scrollIntoView({behavior:"smooth",block:"nearest"})},[s]),!t||t.length===0?null:_.jsxs("div",{className:_n.section,children:[_.jsxs("div",{className:_n.header,children:[_.jsx("span",{className:_n.title,children:"On the Graph"}),_.jsxs("span",{className:_n.count,children:[t.length," directly connected"]})]}),_.jsx("div",{className:_n.grid,ref:a,children:t.map(o=>_.jsxs("div",{className:`${_n.card} ${s===o.title?_n.cardHighlighted:""}`,"data-node-id":o.title,onMouseEnter:()=>i(o.title),onMouseLeave:()=>r(),children:[_.jsx("div",{className:_n.strength,children:[1,2,3].map(l=>_.jsx("div",{className:_n.dot,style:{background:l<=o.strength?`var(--accent-${o.relation==="core"?"blue":o.relation==="application"?"gold":o.relation==="foundation"?"purple":"green"})`:"#333"}},l))}),_.jsx("span",{className:`${_n.rel} ${_n[`rel-${o.relation}`]}`,children:kC[o.relation]||o.relation}),_.jsx("h4",{className:_n.cardTitle,children:o.title}),_.jsx("p",{className:_n.cardDesc,children:o.description}),_.jsxs("div",{className:_n.actions,children:[_.jsx("span",{onClick:()=>e(o.title),children:"Jump"}),_.jsx("span",{onClick:()=>n({...o,id:o.title,label:o.title}),children:"Preview"})]})]},o.title))})]})}const zC="_panel_16vtv_1",VC="_cornerTL_16vtv_30",HC="_cornerTR_16vtv_30",GC="_cornerBL_16vtv_30",jC="_cornerBR_16vtv_30",WC="_panelGlitch_16vtv_44",$C="_staggerIn_16vtv_53",XC="_empty_16vtv_65",qC="_error_16vtv_90",YC="_spinner_16vtv_92",KC="_enrichBtn_16vtv_105",ZC="_enrichComplete_16vtv_143",JC="_enrichSpinner_16vtv_169",QC="_skillTreeLinkGroup_16vtv_197",eb="_skillTreeLink_16vtv_197",tb="_skillTreeLinkIcon_16vtv_238",Mt={panel:zC,cornerTL:VC,cornerTR:HC,cornerBL:GC,cornerBR:jC,panelGlitch:WC,staggerIn:$C,empty:XC,error:qC,spinner:YC,enrichBtn:KC,enrichComplete:ZC,enrichSpinner:JC,skillTreeLinkGroup:QC,skillTreeLink:eb,skillTreeLinkIcon:tb};function nb(){var c;const{currentConcept:t,loading:e,error:n,enriching:i,enriched:r,enrich:s}=qn(),[a,o]=L.useState(!1);if(L.useEffect(()=>{if(t){o(!0);const f=setTimeout(()=>o(!1),300);return()=>clearTimeout(f)}},[t==null?void 0:t.title]),!t&&!e)return _.jsx("div",{className:Mt.panel,children:_.jsxs("div",{className:Mt.empty,children:[_.jsx("h2",{children:"Begin Exploring"}),_.jsx("p",{children:"Search for any concept to start"})]})});if(e)return _.jsx("div",{className:Mt.panel,children:_.jsxs("div",{className:Mt.empty,children:[_.jsx("div",{className:Mt.spinner}),_.jsx("p",{children:"Exploring the knowledge map..."})]})});if(n)return _.jsx("div",{className:Mt.panel,children:_.jsx("div",{className:Mt.empty,children:_.jsxs("p",{className:Mt.error,children:["Something went wrong: ",n]})})});const l=t;return _.jsxs("div",{className:`${Mt.panel} ${a?Mt.panelGlitch:""}`,children:[_.jsx("div",{className:Mt.cornerTL}),_.jsx("div",{className:Mt.cornerTR}),_.jsx("div",{className:Mt.cornerBL}),_.jsx("div",{className:Mt.cornerBR}),_.jsxs("div",{className:Mt.staggerIn,children:[_.jsx(qw,{}),_.jsx(uC,{concept:l}),_.jsx("button",{className:`${Mt.enrichBtn} ${r?Mt.enrichComplete:""}`,onClick:s,disabled:i||r,children:i?_.jsxs(_.Fragment,{children:[_.jsx("span",{className:Mt.enrichSpinner})," Enriching..."]}):r?"AI Enhanced":"Enrich with AI"}),_.jsxs("div",{className:Mt.skillTreeLinkGroup,children:[_.jsxs("a",{href:`/?generate=${encodeURIComponent(l.title)}`,className:Mt.skillTreeLink,children:[_.jsx("span",{className:Mt.skillTreeLinkIcon,children:"⟡"}),"Generate Skill Tree"]}),_.jsxs("a",{href:`/skill-tree/advanced?topic=${encodeURIComponent(l.title)}`,className:Mt.skillTreeLink,children:[_.jsx("span",{className:Mt.skillTreeLinkIcon,children:"✦"}),"Advanced Skill Tree"]})]}),((c=l.sections)==null?void 0:c.length)>0&&_.jsx(xC,{title:"Deep Dive",hint:"Full Wikipedia sections",children:_.jsx(TC,{sections:l.sections,wikiUrl:l.wikiUrl})}),_.jsx(BC,{connections:l.connections}),_.jsx("div",{style:{height:30}})]},l.title)]})}function ib(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return Nv(this.cover(e,n),e,n,t)}function Nv(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var r,s=t._root,a={data:i},o=t._x0,l=t._y0,c=t._x1,f=t._y1,h,d,m,v,S,p,u,g;if(!s)return t._root=a,t;for(;s.length;)if((S=e>=(h=(o+c)/2))?o=h:c=h,(p=n>=(d=(l+f)/2))?l=d:f=d,r=s,!(s=s[u=p<<1|S]))return r[u]=a,t;if(m=+t._x.call(null,s.data),v=+t._y.call(null,s.data),e===m&&n===v)return a.next=s,r?r[u]=a:t._root=a,t;do r=r?r[u]=new Array(4):t._root=new Array(4),(S=e>=(h=(o+c)/2))?o=h:c=h,(p=n>=(d=(l+f)/2))?l=d:f=d;while((u=p<<1|S)===(g=(v>=d)<<1|m>=h));return r[g]=s,r[u]=a,t}function rb(t){var e,n,i=t.length,r,s,a=new Array(i),o=new Array(i),l=1/0,c=1/0,f=-1/0,h=-1/0;for(n=0;n<i;++n)isNaN(r=+this._x.call(null,e=t[n]))||isNaN(s=+this._y.call(null,e))||(a[n]=r,o[n]=s,r<l&&(l=r),r>f&&(f=r),s<c&&(c=s),s>h&&(h=s));if(l>f||c>h)return this;for(this.cover(l,c).cover(f,h),n=0;n<i;++n)Nv(this,a[n],o[n],t[n]);return this}function sb(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(n))r=(n=Math.floor(t))+1,s=(i=Math.floor(e))+1;else{for(var a=r-n||1,o=this._root,l,c;n>t||t>=r||i>e||e>=s;)switch(c=(e<i)<<1|t<n,l=new Array(4),l[c]=o,o=l,a*=2,c){case 0:r=n+a,s=i+a;break;case 1:n=r-a,s=i+a;break;case 2:r=n+a,i=s-a;break;case 3:n=r-a,i=s-a;break}this._root&&this._root.length&&(this._root=o)}return this._x0=n,this._y0=i,this._x1=r,this._y1=s,this}function ab(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function ob(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function dn(t,e,n,i,r){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=r}function lb(t,e,n){var i,r=this._x0,s=this._y0,a,o,l,c,f=this._x1,h=this._y1,d=[],m=this._root,v,S;for(m&&d.push(new dn(m,r,s,f,h)),n==null?n=1/0:(r=t-n,s=e-n,f=t+n,h=e+n,n*=n);v=d.pop();)if(!(!(m=v.node)||(a=v.x0)>f||(o=v.y0)>h||(l=v.x1)<r||(c=v.y1)<s))if(m.length){var p=(a+l)/2,u=(o+c)/2;d.push(new dn(m[3],p,u,l,c),new dn(m[2],a,u,p,c),new dn(m[1],p,o,l,u),new dn(m[0],a,o,p,u)),(S=(e>=u)<<1|t>=p)&&(v=d[d.length-1],d[d.length-1]=d[d.length-1-S],d[d.length-1-S]=v)}else{var g=t-+this._x.call(null,m.data),y=e-+this._y.call(null,m.data),E=g*g+y*y;if(E<n){var T=Math.sqrt(n=E);r=t-T,s=e-T,f=t+T,h=e+T,i=m.data}}return i}function cb(t){if(isNaN(f=+this._x.call(null,t))||isNaN(h=+this._y.call(null,t)))return this;var e,n=this._root,i,r,s,a=this._x0,o=this._y0,l=this._x1,c=this._y1,f,h,d,m,v,S,p,u;if(!n)return this;if(n.length)for(;;){if((v=f>=(d=(a+l)/2))?a=d:l=d,(S=h>=(m=(o+c)/2))?o=m:c=m,e=n,!(n=n[p=S<<1|v]))return this;if(!n.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,u=p)}for(;n.data!==t;)if(r=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,r?(s?r.next=s:delete r.next,this):e?(s?e[p]=s:delete e[p],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[u]=n:this._root=n),this):(this._root=s,this)}function ub(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function db(){return this._root}function fb(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function hb(t){var e=[],n,i=this._root,r,s,a,o,l;for(i&&e.push(new dn(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,s=n.x0,a=n.y0,o=n.x1,l=n.y1)&&i.length){var c=(s+o)/2,f=(a+l)/2;(r=i[3])&&e.push(new dn(r,c,f,o,l)),(r=i[2])&&e.push(new dn(r,s,f,c,l)),(r=i[1])&&e.push(new dn(r,c,a,o,f)),(r=i[0])&&e.push(new dn(r,s,a,c,f))}return this}function pb(t){var e=[],n=[],i;for(this._root&&e.push(new dn(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var s,a=i.x0,o=i.y0,l=i.x1,c=i.y1,f=(a+l)/2,h=(o+c)/2;(s=r[0])&&e.push(new dn(s,a,o,f,h)),(s=r[1])&&e.push(new dn(s,f,o,l,h)),(s=r[2])&&e.push(new dn(s,a,h,f,c)),(s=r[3])&&e.push(new dn(s,f,h,l,c))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function mb(t){return t[0]}function gb(t){return arguments.length?(this._x=t,this):this._x}function _b(t){return t[1]}function vb(t){return arguments.length?(this._y=t,this):this._y}function Lv(t,e,n){var i=new Zh(e??mb,n??_b,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function Zh(t,e,n,i,r,s){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function qm(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var gn=Lv.prototype=Zh.prototype;gn.copy=function(){var t=new Zh(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=qm(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?n.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=qm(i));return t};gn.add=ib;gn.addAll=rb;gn.cover=sb;gn.data=ab;gn.extent=ob;gn.find=lb;gn.remove=cb;gn.removeAll=ub;gn.root=db;gn.size=fb;gn.visit=hb;gn.visitAfter=pb;gn.x=gb;gn.y=vb;function Dn(t){return function(){return t}}function gc(t){return(t()-.5)*1e-6}function xb(t){return t.x+t.vx}function yb(t){return t.y+t.vy}function Sb(t){var e,n,i,r=1,s=1;typeof t!="function"&&(t=Dn(t==null?1:+t));function a(){for(var c,f=e.length,h,d,m,v,S,p,u=0;u<s;++u)for(h=Lv(e,xb,yb).visitAfter(o),c=0;c<f;++c)d=e[c],S=n[d.index],p=S*S,m=d.x+d.vx,v=d.y+d.vy,h.visit(g);function g(y,E,T,b,w){var x=y.data,C=y.r,D=S+C;if(x){if(x.index>d.index){var N=m-x.x-x.vx,P=v-x.y-x.vy,F=N*N+P*P;F<D*D&&(N===0&&(N=gc(i),F+=N*N),P===0&&(P=gc(i),F+=P*P),F=(D-(F=Math.sqrt(F)))/F*r,d.vx+=(N*=F)*(D=(C*=C)/(p+C)),d.vy+=(P*=F)*D,x.vx-=N*(D=1-D),x.vy-=P*D)}return}return E>m+D||b<m-D||T>v+D||w<v-D}}function o(c){if(c.data)return c.r=n[c.data.index];for(var f=c.r=0;f<4;++f)c[f]&&c[f].r>c.r&&(c.r=c[f].r)}function l(){if(e){var c,f=e.length,h;for(n=new Array(f),c=0;c<f;++c)h=e[c],n[h.index]=+t(h,c,e)}}return a.initialize=function(c,f){e=c,i=f,l()},a.iterations=function(c){return arguments.length?(s=+c,a):s},a.strength=function(c){return arguments.length?(r=+c,a):r},a.radius=function(c){return arguments.length?(t=typeof c=="function"?c:Dn(+c),l(),a):t},a}function Eb(t){return t.index}function Ym(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function Mb(t){var e=Eb,n=h,i,r=Dn(30),s,a,o,l,c,f=1;t==null&&(t=[]);function h(p){return 1/Math.min(o[p.source.index],o[p.target.index])}function d(p){for(var u=0,g=t.length;u<f;++u)for(var y=0,E,T,b,w,x,C,D;y<g;++y)E=t[y],T=E.source,b=E.target,w=b.x+b.vx-T.x-T.vx||gc(c),x=b.y+b.vy-T.y-T.vy||gc(c),C=Math.sqrt(w*w+x*x),C=(C-s[y])/C*p*i[y],w*=C,x*=C,b.vx-=w*(D=l[y]),b.vy-=x*D,T.vx+=w*(D=1-D),T.vy+=x*D}function m(){if(a){var p,u=a.length,g=t.length,y=new Map(a.map((T,b)=>[e(T,b,a),T])),E;for(p=0,o=new Array(u);p<g;++p)E=t[p],E.index=p,typeof E.source!="object"&&(E.source=Ym(y,E.source)),typeof E.target!="object"&&(E.target=Ym(y,E.target)),o[E.source.index]=(o[E.source.index]||0)+1,o[E.target.index]=(o[E.target.index]||0)+1;for(p=0,l=new Array(g);p<g;++p)E=t[p],l[p]=o[E.source.index]/(o[E.source.index]+o[E.target.index]);i=new Array(g),v(),s=new Array(g),S()}}function v(){if(a)for(var p=0,u=t.length;p<u;++p)i[p]=+n(t[p],p,t)}function S(){if(a)for(var p=0,u=t.length;p<u;++p)s[p]=+r(t[p],p,t)}return d.initialize=function(p,u){a=p,c=u,m()},d.links=function(p){return arguments.length?(t=p,m(),d):t},d.id=function(p){return arguments.length?(e=p,d):e},d.iterations=function(p){return arguments.length?(f=+p,d):f},d.strength=function(p){return arguments.length?(n=typeof p=="function"?p:Dn(+p),v(),d):n},d.distance=function(p){return arguments.length?(r=typeof p=="function"?p:Dn(+p),S(),d):r},d}var Tb={value:()=>{}};function Dv(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new kl(n)}function kl(t){this._=t}function wb(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}kl.prototype=Dv.prototype={constructor:kl,on:function(t,e){var n=this._,i=wb(t+"",n),r,s=-1,a=i.length;if(arguments.length<2){for(;++s<a;)if((r=(t=i[s]).type)&&(r=Cb(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<a;)if(r=(t=i[s]).type)n[r]=Km(n[r],t.name,e);else if(e==null)for(r in n)n[r]=Km(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new kl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,s;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],i=0,r=s.length;i<r;++i)s[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,s=i.length;r<s;++r)i[r].value.apply(e,n)}};function Cb(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function Km(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=Tb,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var sa=0,Ba=0,ba=0,Iv=1e3,_c,za,vc=0,ls=0,Vc=0,vo=typeof performance=="object"&&performance.now?performance:Date,Uv=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Fv(){return ls||(Uv(bb),ls=vo.now()+Vc)}function bb(){ls=0}function rf(){this._call=this._time=this._next=null}rf.prototype=Ov.prototype={constructor:rf,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Fv():+n)+(e==null?0:+e),!this._next&&za!==this&&(za?za._next=this:_c=this,za=this),this._call=t,this._time=n,sf()},stop:function(){this._call&&(this._call=null,this._time=1/0,sf())}};function Ov(t,e,n){var i=new rf;return i.restart(t,e,n),i}function Ab(){Fv(),++sa;for(var t=_c,e;t;)(e=ls-t._time)>=0&&t._call.call(void 0,e),t=t._next;--sa}function Zm(){ls=(vc=vo.now())+Vc,sa=Ba=0;try{Ab()}finally{sa=0,Pb(),ls=0}}function Rb(){var t=vo.now(),e=t-vc;e>Iv&&(Vc-=e,vc=t)}function Pb(){for(var t,e=_c,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:_c=n);za=t,sf(i)}function sf(t){if(!sa){Ba&&(Ba=clearTimeout(Ba));var e=t-ls;e>24?(t<1/0&&(Ba=setTimeout(Zm,t-vo.now()-Vc)),ba&&(ba=clearInterval(ba))):(ba||(vc=vo.now(),ba=setInterval(Rb,Iv)),sa=1,Uv(Zm))}}const Nb=1664525,Lb=1013904223,Jm=4294967296;function Db(){let t=1;return()=>(t=(Nb*t+Lb)%Jm)/Jm}var Ib=10,Ub=Math.PI*(3-Math.sqrt(5));function Fb(t){var e,n=1,i=.001,r=1-Math.pow(i,1/300),s=0,a=.6,o=new Map,l=Ov(h),c=Dv("tick","end"),f=Db();t==null&&(t=[]);function h(){d(),c.call("tick",e),n<i&&(l.stop(),c.call("end",e))}function d(S){var p,u=t.length,g;S===void 0&&(S=1);for(var y=0;y<S;++y)for(n+=(s-n)*r,o.forEach(function(E){E(n)}),p=0;p<u;++p)g=t[p],g.fx==null?g.x+=g.vx*=a:(g.x=g.fx,g.vx=0),g.fy==null?g.y+=g.vy*=a:(g.y=g.fy,g.vy=0);return e}function m(){for(var S=0,p=t.length,u;S<p;++S){if(u=t[S],u.index=S,u.fx!=null&&(u.x=u.fx),u.fy!=null&&(u.y=u.fy),isNaN(u.x)||isNaN(u.y)){var g=Ib*Math.sqrt(.5+S),y=S*Ub;u.x=g*Math.cos(y),u.y=g*Math.sin(y)}(isNaN(u.vx)||isNaN(u.vy))&&(u.vx=u.vy=0)}}function v(S){return S.initialize&&S.initialize(t,f),S}return m(),e={tick:d,restart:function(){return l.restart(h),e},stop:function(){return l.stop(),e},nodes:function(S){return arguments.length?(t=S,m(),o.forEach(v),e):t},alpha:function(S){return arguments.length?(n=+S,e):n},alphaMin:function(S){return arguments.length?(i=+S,e):i},alphaDecay:function(S){return arguments.length?(r=+S,e):+r},alphaTarget:function(S){return arguments.length?(s=+S,e):s},velocityDecay:function(S){return arguments.length?(a=1-S,e):1-a},randomSource:function(S){return arguments.length?(f=S,o.forEach(v),e):f},force:function(S,p){return arguments.length>1?(p==null?o.delete(S):o.set(S,v(p)),e):o.get(S)},find:function(S,p,u){var g=0,y=t.length,E,T,b,w,x;for(u==null?u=1/0:u*=u,g=0;g<y;++g)w=t[g],E=S-w.x,T=p-w.y,b=E*E+T*T,b<u&&(x=w,u=b);return x},on:function(S,p){return arguments.length>1?(c.on(S,p),e):c.on(S)}}}function Ob(t){var e=Dn(.1),n,i,r;typeof t!="function"&&(t=Dn(t==null?0:+t));function s(o){for(var l=0,c=n.length,f;l<c;++l)f=n[l],f.vx+=(r[l]-f.x)*i[l]*o}function a(){if(n){var o,l=n.length;for(i=new Array(l),r=new Array(l),o=0;o<l;++o)i[o]=isNaN(r[o]=+t(n[o],o,n))?0:+e(n[o],o,n)}}return s.initialize=function(o){n=o,a()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:Dn(+o),a(),s):e},s.x=function(o){return arguments.length?(t=typeof o=="function"?o:Dn(+o),a(),s):t},s}function kb(t){var e=Dn(.1),n,i,r;typeof t!="function"&&(t=Dn(t==null?0:+t));function s(o){for(var l=0,c=n.length,f;l<c;++l)f=n[l],f.vy+=(r[l]-f.y)*i[l]*o}function a(){if(n){var o,l=n.length;for(i=new Array(l),r=new Array(l),o=0;o<l;++o)i[o]=isNaN(r[o]=+t(n[o],o,n))?0:+e(n[o],o,n)}}return s.initialize=function(o){n=o,a()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:Dn(+o),a(),s):e},s.y=function(o){return arguments.length?(t=typeof o=="function"?o:Dn(+o),a(),s):t},s}const Qm=12e3,eg=9e3,el=500,tl=2e3,Bb=.01;function zb(t,e){const[n,i]=L.useState({}),[r,s]=L.useState({width:Qm,height:eg}),a=L.useRef(null),o=L.useRef({}),l=L.useRef({}),c=L.useRef(!0),f=L.useRef(null),h=L.useRef(new Set),d=L.useRef({width:Qm,height:eg}),m=L.useRef({});L.useEffect(()=>{d.current=r},[r]);const v=L.useCallback(S=>{let p=1/0,u=-1/0,g=1/0,y=-1/0;for(const E in S){const T=S[E];T.x<p&&(p=T.x),T.x>u&&(u=T.x),T.y<g&&(g=T.y),T.y>y&&(y=T.y)}s(E=>{let{width:T,height:b}=E,w=!1;return p<el&&(T+=tl,w=!0),u>T-el&&(T+=tl,w=!0),g<el&&(b+=tl,w=!0),y>b-el&&(b+=tl,w=!0),w?{width:T,height:b}:E})},[]);return L.useEffect(()=>{if(!t||!t.nodes.length){i({}),o.current={},l.current={},c.current=!0;return}a.current&&a.current.stop(),f.current&&cancelAnimationFrame(f.current);const{width:S,height:p}=d.current,u=S/2,g=p/2,y=t.nodes.find(U=>U.type==="center");let E=u,T=g;y&&o.current[y.id]&&(E=o.current[y.id].x,T=o.current[y.id].y);const b=12,w=new Array(b).fill(0),x=400;for(const U in l.current){if(y&&U===y.id)continue;const ae=l.current[U],Me=ae.x-E,De=ae.y-T,q=Math.sqrt(Me*Me+De*De);if(q>x)continue;const re=1-q/x,oe=Math.atan2(De,Me),Te=Math.floor((oe+Math.PI)/(2*Math.PI)*b)%b;w[Te]+=re,w[(Te+1)%b]+=re*.5,w[(Te-1+b)%b]+=re*.5}const C=e?o.current[e]:null;let D=Math.random()*Math.PI*2;if(y&&C&&o.current[y.id]){const U=o.current[y.id],ae=U.x-C.x,Me=U.y-C.y;(Math.abs(ae)>1||Math.abs(Me)>1)&&(D=Math.atan2(Me,ae))}const N=y&&C&&o.current[y.id];let P;if(N)P=D;else{let U=0,ae=-1/0;for(let Me=0;Me<b;Me++)-w[Me]>ae&&(ae=-w[Me],U=Me);P=U/b*2*Math.PI-Math.PI}const F=Object.values(l.current).filter(U=>{const ae=U.x-E,Me=U.y-T;return Math.sqrt(ae*ae+Me*Me)<300}).length,W=Math.min(F*8,50),z=450,j=180;if(y&&o.current[y.id]){const ae=new Array(12).fill(0);for(const De in l.current){if(De===y.id)continue;const q=l.current[De],re=q.x-E,oe=q.y-T,Te=Math.sqrt(re*re+oe*oe);if(Te<z&&Te>1){const ve=Math.atan2(oe,re),$=Math.floor((ve+Math.PI)/(2*Math.PI)*12)%12;ae[$]+=1}}const Me=300;for(const De in l.current){if(De===y.id)continue;const q=l.current[De],re=q.x-E,oe=q.y-T,Te=Math.sqrt(re*re+oe*oe);if(Te<z&&Te>1){const ve=m.current[De]||0;if(ve>=Me)continue;const $=1-Te/z;let ie=j*$*$;ie=Math.min(ie,Me-ve);let fe=Math.atan2(oe,re);const Fe=Math.floor((fe+Math.PI)/(2*Math.PI)*12)%12,Ve=(Fe-1+12)%12,ze=(Fe+1)%12;ae[Ve]<ae[ze]?fe-=.26*$:ae[ze]<ae[Ve]&&(fe+=.26*$);const Qe=Math.cos(fe),I=Math.sin(fe);l.current[De]={x:q.x+Qe*ie,y:q.y+I*ie},o.current[De]&&(o.current[De]={x:o.current[De].x+Qe*ie,y:o.current[De].y+I*ie}),m.current[De]=ve+ie}}}const O=new Set,V=t.nodes.map((U,ae)=>{const Me=U.hopDistance||0;if(o.current[U.id]){const ie=o.current[U.id];return U.type==="center"?c.current?(c.current=!1,l.current[U.id]={x:u,y:g},{...U,x:u,y:g}):(l.current[U.id]={x:ie.x,y:ie.y},{...U,x:ie.x,y:ie.y}):{...U,x:ie.x,y:ie.y}}if(O.add(U.id),U.type==="center")return c.current?(c.current=!1,l.current[U.id]={x:u,y:g},{...U,x:u,y:g}):{...U,x:u,y:g};const De=t.nodes.filter(ie=>ie.type==="primary"),q=De.indexOf(U),re=De.length;let oe,Te;if(U.type==="primary"){const ie=U.strength||1;oe=(ie===3?180:ie===2?260:350)+W+(Math.random()-.5)*30;const Fe=Math.PI*.9;if(re>1&&q>=0){const Ve=q/(re-1);Te=P+(Ve-.5)*Fe}else Te=P+(Math.random()-.5)*Fe}else if(U.type==="secondary"){oe=90+(Math.random()-.5)*20;const ie=t.edges.find(fe=>fe.target===U.id&&fe.type==="secondary");if(ie&&o.current[ie.source]){const fe=o.current[ie.source];Te=Math.atan2(fe.y-T,fe.x-E)+(Math.random()-.5)*1.2}else Te=P+(Math.random()-.5)*Math.PI}else U.type==="trail"?(oe=400+Me*150,Te=P+Math.PI+(Math.random()-.5)*.5):(oe=350+Me*120,Te=Math.random()*Math.PI*2);let ve=E,$=T;if(U.type==="secondary"){const ie=t.edges.find(fe=>fe.target===U.id&&fe.type==="secondary");ie&&o.current[ie.source]&&(ve=o.current[ie.source].x,$=o.current[ie.source].y)}return{...U,x:ve+Math.cos(Te)*oe,y:$+Math.sin(Te)*oe}});h.current=O;const H=new Set(V.map(U=>U.id)),Q=t.edges.filter(U=>H.has(U.source)&&H.has(U.target)).map(U=>({source:U.source,target:U.target,strength:U.strength,edgeType:U.type})),le=Fb(V).force("link",Mb(Q).id(U=>U.id).distance(U=>{if(U.edgeType==="trail")return 500;if(U.edgeType==="secondary")return 90;const ae=U.strength||1;return ae===3?180:ae===2?260:350}).strength(U=>U.edgeType==="trail"?.03:U.edgeType==="secondary"?.1:.15)).force("anchorX",Ob().x(U=>l.current[U.id]?l.current[U.id].x:U.x).strength(U=>h.current.has(U.id)?.03:l.current[U.id]?.9:.1)).force("anchorY",kb().y(U=>l.current[U.id]?l.current[U.id].y:U.y).strength(U=>h.current.has(U.id)?.03:l.current[U.id]?.9:.1)).force("collide",Sb().radius(U=>{if(U.type==="center")return 110;if(U.type==="trail"){const ae=U.hopDistance||0;return ae>=3?40:ae>=2?65:90}if(U.type==="primary")return 75;if(U.type==="secondary")return 48;if(U.type==="dormant"){const ae=U.hopDistance||0;return ae>=3?30:ae>=2?50:60}return 55}).strength(.9).iterations(3)).alpha(.4).alphaDecay(.06).velocityDecay(.6);return le.on("tick",()=>{const U={};V.forEach(ae=>{U[ae.id]={x:ae.x,y:ae.y}}),o.current=U,f.current&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>{i({...U})}),le.alpha()<Bb&&(le.stop(),V.forEach(ae=>{l.current[ae.id]={x:ae.x,y:ae.y}}),h.current.clear(),v(U))}),a.current=le,()=>{le.stop(),f.current&&cancelAnimationFrame(f.current)}},[t,e,v]),{positions:n,canvasSize:r}}const Vb="_center_s7h5e_2",Hb="_centerGlow_s7h5e_11",Gb="_radarRing_s7h5e_31",jb="_radarRing1_s7h5e_38",Wb="_radarRing2_s7h5e_44",$b="_radarRing3_s7h5e_51",Xb="_centerParticles_s7h5e_63",qb="_centerParticle_s7h5e_63",Yb="_centerCircle_s7h5e_92",Kb="_centerLabel_s7h5e_118",Zb="_centerName_s7h5e_132",Jb="_node_s7h5e_147",Qb="_primaryNode_s7h5e_167",eA="_circle_s7h5e_167",tA="_nodeLabel_s7h5e_176",nA="_circleNode_s7h5e_181",iA="_nodeIconChar_s7h5e_215",rA="_circleLabel_s7h5e_231",sA="_focused_s7h5e_244",aA="_hexNode_s7h5e_250",oA="_hex_s7h5e_250",lA="_hexLabel_s7h5e_317",cA="_labelSmall_s7h5e_352",uA="_cursor_s7h5e_366",dA="_constellation_s7h5e_384",fA="_constellationDot_s7h5e_392",hA="_highlighted_s7h5e_408",tt={center:Vb,centerGlow:Hb,radarRing:Gb,radarRing1:jb,radarRing2:Wb,radarRing3:$b,centerParticles:Xb,centerParticle:qb,centerCircle:Yb,centerLabel:Kb,centerName:Zb,node:Jb,primaryNode:Qb,circle:eA,nodeLabel:tA,circleNode:nA,nodeIconChar:iA,circleLabel:rA,focused:sA,hexNode:aA,hex:oA,hexLabel:lA,labelSmall:cA,cursor:uA,constellation:dA,constellationDot:fA,highlighted:hA};function pA(t){return t===0?1:t===1?.85:t===2?.65:.45}const tg={white:{border:"#00fff2",fill:"rgba(0, 255, 242, 0.06)",glow:"rgba(0,255,242,0.25)",text:"#00fff2"},cyan:{border:"#4d9fff",fill:"rgba(77, 159, 255, 0.05)",glow:"rgba(77,159,255,0.2)",text:"#4d9fff"},blue:{border:"#4d9fff",fill:"rgba(77, 159, 255, 0.05)",glow:"rgba(77,159,255,0.2)",text:"#4d9fff"},gold:{border:"#ffaa40",fill:"rgba(255, 170, 64, 0.05)",glow:"rgba(255,170,64,0.18)",text:"#ffaa40"},purple:{border:"#8b5cf6",fill:"rgba(139, 92, 246, 0.05)",glow:"rgba(139,92,246,0.18)",text:"#8b5cf6"},red:{border:"#ff4466",fill:"rgba(255, 68, 102, 0.05)",glow:"rgba(255,68,102,0.15)",text:"#ff4466"}};function mA(t,e){const[n,i]=L.useState(e?"":t),[r,s]=L.useState(!1),a=L.useRef(t);return L.useEffect(()=>{if(!e||t===a.current){i(t),s(!1);return}a.current=t,i(""),s(!0);let o=0;const l=setInterval(()=>{o++,i(t.slice(0,o)),o>=t.length&&(clearInterval(l),s(!1))},50);return()=>clearInterval(l)},[t,e]),{displayed:n,isTyping:r}}function gA(t){if(!t)return"";if(t.length<=10)return t;const e=t.split(" ");return e.length>=3?e.slice(0,2).map(n=>n.slice(0,4)).join(" "):e.length===2?e.map(n=>n.slice(0,5)).join(" "):t.slice(0,9)+"…"}function _A(t,e,n){if(t==="center")return 96;if(t==="secondary")return 48;if(t==="trail"){const i=Math.min(e||0,3);return[80,80,64,32][i]}if(t==="dormant"){const i=Math.min(e||0,3);return[60,60,48,28][i]}return t==="primary"?68:56}function vA({node:t,x:e,y:n,onClick:i,focused:r,highlighted:s}){var w;const a=t.type==="center",o=t.type==="secondary",l=t.type==="dormant",c=t.type==="trail",f=pA(t.hopDistance||0),h=tg[t.color]||tg.cyan,d=_A(t.type,t.hopDistance),m=d/2,v=gA(t.label),{displayed:S,isTyping:p}=mA(v,a||!l&&!c),u=(((w=t.label)==null?void 0:w[0])||"◆").toUpperCase();if(a)return _.jsxs("div",{className:tt.center,style:{left:e-m,top:n-m,width:d,height:d},onClick:()=>i==null?void 0:i(t),"data-node-id":t.id,children:[_.jsx("div",{className:tt.centerGlow}),_.jsx("div",{className:tt.radarRing+" "+tt.radarRing1}),_.jsx("div",{className:tt.radarRing+" "+tt.radarRing2}),_.jsx("div",{className:tt.radarRing+" "+tt.radarRing3}),_.jsx("div",{className:tt.centerParticles,children:[0,1,2,3,4,5].map(x=>_.jsx("div",{className:tt.centerParticle,style:{"--dx":`${Math.cos(x*1.047)*50}px`,"--dy":`${Math.sin(x*1.047)*50}px`}},x))}),_.jsx("div",{className:tt.centerCircle,children:_.jsxs("span",{className:tt.centerLabel,children:[S,p&&_.jsx("span",{className:tt.cursor})]})}),_.jsx("div",{className:tt.centerName,children:t.label})]});const g=o?tt.hex:tt.circle,y=o?tt.hexLabel:tt.circleLabel;function E(x){x.stopPropagation(),i==null||i(t)}if((c||l)&&(t.hopDistance||0)>=3)return _.jsxs("div",{className:`${tt.node} ${tt.constellation} ${s?tt.highlighted:""}`,style:{left:e-m,top:n-m,width:d,height:d,opacity:f,"--node-border":h.border,"--node-fill":h.fill},onClick:E,"data-node-id":t.id,children:[_.jsx("div",{className:tt.constellationDot}),_.jsx("div",{className:`${tt.nodeLabel} ${tt.labelSmall}`,children:t.label})]});const b=t.type==="primary";return _.jsxs("div",{className:`${tt.node} ${b?tt.primaryNode:""} ${r?tt.focused:""} ${s?tt.highlighted:""} ${o?tt.hexNode:tt.circleNode}`,style:{left:e-m,top:n-m,width:d,height:d,opacity:f,"--node-border":h.border,"--node-fill":h.fill,"--node-glow":h.glow,"--node-text":h.text},onClick:E,"data-node-id":t.id,children:[_.jsxs("div",{className:g,children:[!o&&_.jsx("span",{className:tt.nodeIconChar,children:u}),_.jsxs("span",{className:y,style:{fontSize:o?8:9},children:[S,p&&_.jsx("span",{className:tt.cursor})]})]}),_.jsx("div",{className:`${tt.nodeLabel} ${o?tt.labelSmall:""}`,children:t.label})]})}const xA=L.memo(vA,(t,e)=>t.x===e.x&&t.y===e.y&&t.focused===e.focused&&t.highlighted===e.highlighted&&t.node.type===e.node.type&&t.node.id===e.node.id&&t.node.visited===e.node.visited&&t.node.hopDistance===e.node.hopDistance),yA="_popover_1es13_1",SA="_header_1es13_22",EA="_category_1es13_27",MA="_title_1es13_37",TA="_summary_1es13_45",wA="_actions_1es13_51",CA="_jumpBtn_1es13_57",bA="_expandBtn_1es13_79",AA="_dismissBtn_1es13_101",Ai={popover:yA,header:SA,category:EA,title:MA,summary:TA,actions:wA,jumpBtn:CA,expandBtn:bA,dismissBtn:AA};function RA({node:t,x:e,y:n}){var h;const{jumpTo:i,clearPreview:r,showNodeDetail:s}=qn(),a=L.useRef(null),[o,l]=L.useState({dx:76,dy:-28}),[c,f]=L.useState(!1);return L.useEffect(()=>{f(!1),a.current&&requestAnimationFrame(()=>{const d=a.current;if(!d)return;const m=d.closest('[class*="canvas"]'),v=m==null?void 0:m.parentElement;if(!m||!v){f(!0);return}const S=v.getBoundingClientRect(),p=d.getBoundingClientRect();let u=76,g=-28;p.right>S.right-10&&(u=-296),p.bottom>S.bottom-10&&(g=-(p.height+10)),p.top<S.top+10&&(g=40),l({dx:u,dy:g}),f(!0)})},[e,n,t]),t?_.jsxs("div",{ref:a,className:Ai.popover,style:{left:e+o.dx,top:n+o.dy,visibility:c?"visible":"hidden"},"data-popover":!0,children:[_.jsxs("div",{className:Ai.header,children:[_.jsx("div",{className:Ai.category,children:((h=t.relation)==null?void 0:h.toUpperCase())||"CONCEPT"}),_.jsx("h3",{className:Ai.title,children:t.label}),_.jsx("p",{className:Ai.summary,children:t.description||"Explore this concept."})]}),_.jsxs("div",{className:Ai.actions,children:[_.jsx("button",{className:Ai.jumpBtn,onPointerDown:d=>d.stopPropagation(),onClick:d=>{d.stopPropagation(),r(),i(t.label)},children:"JUMP HERE"}),_.jsx("button",{className:Ai.expandBtn,onPointerDown:d=>d.stopPropagation(),onClick:d=>{d.stopPropagation(),r(),s(t)},children:"DETAILS"}),_.jsx("button",{className:Ai.dismissBtn,onPointerDown:d=>d.stopPropagation(),onClick:d=>{d.stopPropagation(),r()},children:"x"})]})]}):null}const PA="_overlay_2qk2w_1",NA="_card_2qk2w_18",LA="_top_2qk2w_33",DA="_category_2qk2w_38",IA="_title_2qk2w_48",UA="_imageWrap_2qk2w_56",FA="_image_2qk2w_56",OA="_body_2qk2w_69",kA="_extract_2qk2w_76",BA="_summary_2qk2w_83",zA="_actions_2qk2w_92",VA="_jumpBtn_2qk2w_100",HA="_closeBtn_2qk2w_122",GA="_loadingWrap_2qk2w_141",jA="_spinner_2qk2w_150",WA="_loadingText_2qk2w_163",It={overlay:PA,card:NA,top:LA,category:DA,title:IA,imageWrap:UA,image:FA,body:OA,extract:kA,summary:BA,actions:zA,jumpBtn:VA,closeBtn:HA,loadingWrap:GA,spinner:jA,loadingText:WA};function $A(){var s,a;const{expandedNode:t,detailLoading:e,clearExpanded:n,jumpTo:i}=qn();if(!t&&!e)return null;if(e)return _.jsx("div",{className:It.overlay,onClick:n,children:_.jsx("div",{className:It.card,onClick:o=>o.stopPropagation(),children:_.jsxs("div",{className:It.loadingWrap,children:[_.jsx("div",{className:It.spinner}),_.jsx("p",{className:It.loadingText,children:"Loading details..."})]})})});const r=()=>{n(),i(t.label||t.id)};return _.jsx("div",{className:It.overlay,onClick:n,children:_.jsxs("div",{className:It.card,onClick:o=>o.stopPropagation(),children:[_.jsxs("div",{className:It.top,children:[_.jsx("div",{className:It.category,children:((s=t.relation)==null?void 0:s.toUpperCase())||((a=t.type)==null?void 0:a.toUpperCase())||"CONCEPT"}),_.jsx("h2",{className:It.title,children:t.label||t.id})]}),_.jsxs("div",{className:It.body,children:[t.image&&_.jsx("div",{className:It.imageWrap,children:_.jsx("img",{src:t.image,alt:t.label,className:It.image})}),t.extract?_.jsx("p",{className:It.extract,children:t.extract}):t.description?_.jsx("p",{className:It.extract,children:t.description}):_.jsx("p",{className:It.extract,children:"No detailed information available."}),t.summary&&t.summary!==t.extract&&_.jsx("p",{className:It.summary,children:t.summary})]}),_.jsxs("div",{className:It.actions,children:[_.jsx("button",{className:It.jumpBtn,onClick:r,children:"JUMP HERE"}),_.jsx("button",{className:It.closeBtn,onClick:n,children:"CLOSE"})]})]})})}const XA="_container_16qx5_2",qA="_vignette_16qx5_14",YA="_empty_16qx5_28",KA="_emptyText_16qx5_48",ZA="_nebula_16qx5_57",JA="_blob_16qx5_64",QA="_blob1_16qx5_71",eR="_blob2_16qx5_80",tR="_blob3_16qx5_90",nR="_particles_16qx5_106",iR="_particle_16qx5_106",rR="_label_16qx5_129",sR="_hint_16qx5_143",aR="_canvas_16qx5_156",oR="_svg_16qx5_163",lR="_edgeGroup_16qx5_174",cR="_starfield_16qx5_193",uR="_star_16qx5_193",dR="_shootingStar_16qx5_214",fR="_jumpPulse_16qx5_231",hR="_focusBtn_16qx5_250",pR="_hoverTooltip_16qx5_275",xt={container:XA,vignette:qA,empty:YA,emptyText:KA,nebula:ZA,blob:JA,blob1:QA,blob2:eR,blob3:tR,particles:nR,particle:iR,label:rR,hint:sR,canvas:aR,svg:oR,edgeGroup:lR,starfield:cR,star:uR,shootingStar:dR,jumpPulse:fR,focusBtn:hR,hoverTooltip:pR},mR={white:"#ffaa40",cyan:"#4d9fff",blue:"#4d9fff",gold:"#ffaa40",purple:"#8b5cf6",red:"#ff4466"};function gR(t,e){const n={};for(const i of t)!i.cluster||i.cluster==="Unknown"||!e[i.id]||(n[i.cluster]||(n[i.cluster]=[]),n[i.cluster].push(e[i.id]));return n}function _R(t){if(t.length<2)return null;const e=t.map(o=>o.x),n=t.map(o=>o.y),i=(Math.min(...e)+Math.max(...e))/2,r=(Math.min(...n)+Math.max(...n))/2,s=(Math.max(...e)-Math.min(...e))/2+60,a=(Math.max(...n)-Math.min(...n))/2+60;return{cx:i,cy:r,rx:Math.max(s,65),ry:Math.max(a,65)}}function vR(){const{graphData:t,setPreview:e,clearPreview:n,previewNode:i,currentConcept:r,expandNode:s,clusterColors:a,prevCenterTitle:o,focusMode:l,toggleFocus:c,highlightedNodeId:f,setHighlight:h,clearHighlight:d,jumpTo:m}=qn(),v=L.useRef(null),S=L.useRef(null),[p,u]=L.useState({x:0,y:0}),[g,y]=L.useState(!1),E=L.useRef(p),T=L.useRef(new Set),[b,w]=L.useState(-1),[x,C]=L.useState(null),D=L.useRef(null),N=L.useRef(null),P=L.useRef({width:12e3,height:9e3});L.useEffect(()=>{E.current=p},[p]);const[F,W]=L.useState([]);L.useEffect(()=>{const ie=setInterval(()=>{W(fe=>[...fe.slice(-2),{id:Date.now(),x:Math.random()*80+10,y:Math.random()*40,angle:-20-Math.random()*25,dur:1+Math.random()*1}])},8e3);return()=>clearInterval(ie)},[]);const[z,j]=L.useState(!1);L.useEffect(()=>{if(r){j(!0);const $=setTimeout(()=>j(!1),900);return()=>clearTimeout($)}},[r==null?void 0:r.title]);const O=L.useMemo(()=>Array.from({length:40},($,ie)=>({left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,dur:`${3+Math.random()*4}s`,delay:`${Math.random()*5}s`,minOp:`${.05+Math.random()*.1}`,maxOp:`${.3+Math.random()*.4}`,w:`${1+Math.random()*2}px`,h:`${1+Math.random()*2}px`})),[]),V=L.useMemo(()=>Array.from({length:20},($,ie)=>({left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,dur:`${8+Math.random()*12}s`,delay:`${Math.random()*10}s`,w:`${1+Math.random()*1.5}px`,h:`${1+Math.random()*1.5}px`})),[]),{positions:H,canvasSize:Q}=zb(t,o),le=L.useRef(null);L.useEffect(()=>{if(!r||!t)return;const $=t.nodes.find(ot=>ot.type==="center");if(!$||!H[$.id]||le.current===r.title)return;le.current=r.title;const ie=H[$.id],fe=-(ie.x-Q.width/2),Fe=-(ie.y-Q.height/2);y(!0);const Ve=E.current,ze=fe-Ve.x,Qe=Fe-Ve.y;if(Math.sqrt(ze*ze+Qe*Qe)>200){const ot=Ve.x+ze*.5+Qe*.15,et=Ve.y+Qe*.5-ze*.15;u({x:ot,y:et});const Ke=setTimeout(()=>u({x:fe,y:Fe}),300),Ae=setTimeout(()=>y(!1),700);return()=>{clearTimeout(Ke),clearTimeout(Ae)}}else{u({x:fe,y:Fe});const ot=setTimeout(()=>y(!1),600);return()=>clearTimeout(ot)}},[r==null?void 0:r.title,H,Q.width,Q.height]),L.useEffect(()=>{const $=P.current,ie=Q.width-$.width,fe=Q.height-$.height;if(P.current={width:Q.width,height:Q.height},ie===0&&fe===0)return;const Fe=E.current.x+ie/2,Ve=E.current.y+fe/2;E.current={x:Fe,y:Ve},S.current&&(S.current.style.transition="none",S.current.style.transform=`translate(calc(-50% + ${Fe}px), calc(-50% + ${Ve}px))`),u({x:Fe,y:Ve})},[Q.width,Q.height]),L.useEffect(()=>{if(!t)return;t.nodes.filter(ie=>ie.type==="primary").sort((ie,fe)=>(fe.strength||0)-(ie.strength||0)).slice(0,1).forEach(ie=>{T.current.has(ie.id)||(T.current.add(ie.id),s(ie.id))})},[r==null?void 0:r.title]);const U=L.useMemo(()=>t?t.nodes.filter($=>$.type!=="center"&&$.type!=="secondary"):[],[t]),ae=L.useMemo(()=>{const $=new Map;return U.forEach((ie,fe)=>$.set(ie.id,fe)),$},[U]);L.useEffect(()=>{function $(ie){var fe;t&&((fe=document.activeElement)==null?void 0:fe.tagName)!=="INPUT"&&(ie.key==="Tab"?(ie.preventDefault(),w(Fe=>(Fe+1)%U.length)):ie.key==="Escape"?(e(null),w(-1)):ie.key==="Enter"&&b>=0&&U[b]&&e(U[b]))}return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[t,b,U,e]);function Me($){if(clearTimeout(D.current),C(null),$.type==="center")return;if(N.current&&N.current.nodeId===$.id){clearTimeout(N.current.timer),N.current=null,n(),m($.label||$.id);return}const ie=setTimeout(()=>{N.current=null,e($)},250);N.current={nodeId:$.id,timer:ie}}function De($,ie){return!0}const q=L.useMemo(()=>{if(!t)return{};const $={};for(const ie of t.nodes)$[ie.id]=ie;return $},[t]),re=L.useMemo(()=>{if(!t)return null;const $=t.nodes.find(ie=>ie.type==="center");return $?$.id:null},[t]),oe=L.useMemo(()=>{if(!t)return[];const $=gR(t.nodes,H);return Object.entries($).map(([ie,fe])=>({name:ie,ellipse:_R(fe),color:a[ie]||"#445"})).filter(ie=>ie.ellipse)},[t,H,a]),Te=L.useMemo(()=>t?t.edges.map(($,ie)=>{const fe=H[$.source],Fe=H[$.target];if(!fe||!Fe)return null;if(l){const Ue=q[$.source],Be=q[$.target];if(((Ue==null?void 0:Ue.hopDistance)||0)>=3||((Be==null?void 0:Be.hopDistance)||0)>=3)return null}const Ve=q[$.source],ze=q[$.target],Qe=Math.max((Ve==null?void 0:Ve.hopDistance)||0,(ze==null?void 0:ze.hopDistance)||0);if(Qe>=4&&$.type!=="trail")return null;const I=Fe.x-fe.x,ot=Fe.y-fe.y,et=mR[$.color]||"#00d4ff",Ke=$.type==="trail",Ae=Ke&&$.trailType==="indirect",R=!Ke&&Qe>=2,M=R?`M ${fe.x} ${fe.y} L ${Fe.x} ${Fe.y}`:`M ${fe.x} ${fe.y} Q ${fe.x+I*.5+ot*.12} ${fe.y+ot*.5-I*.12} ${Fe.x} ${Fe.y}`,B=$.type==="secondary",ne=!B&&!R&&($.source===re||$.target===re);let se,ee,Se,he;return he=Ke?"#ffaa40":et,Ke?(se=Ae?2.8:2.2,ee=.55,Se=Ae?"6 4":"none"):Qe>=3?(se=.5,ee=.1,Se="2 6"):Qe>=2?(se=.7,ee=.18,Se="3 6"):ne?(se=1.8,ee=.55,Se="none"):(se=B?.7:1.2,ee=B?.18:.35,Se=B?"2 4":"none"),_.jsxs("g",{className:xt.edgeGroup,children:[(Ke||!R)&&_.jsx("path",{d:M,fill:"none",stroke:he,strokeWidth:Ke?10:ne?8:B?4:6,opacity:Ke?.1:ne?.08:.03,filter:"url(#edgeGlow)"}),_.jsx("path",{d:M,fill:"none",stroke:he,strokeWidth:se,opacity:ee,strokeLinecap:"round",strokeDasharray:Se,filter:ne||Ke?"url(#neonGlow)":"none"})]},`${$.source}-${$.target}-${ie}`)}):[],[t,H,q,re,l]);if(!t||!r)return _.jsx("div",{className:xt.container,children:_.jsx("div",{className:xt.empty,children:_.jsx("p",{className:xt.emptyText,children:"Search a concept to begin exploring"})})});const ve=g?"transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)":"transform 0.08s ease-out";return _.jsxs("div",{className:xt.container,ref:v,tabIndex:0,style:{userSelect:"none",WebkitUserSelect:"none"},children:[_.jsx("div",{className:xt.vignette}),_.jsxs("div",{className:xt.starfield,children:[O.map(($,ie)=>_.jsx("div",{className:xt.star,style:{left:$.left,top:$.top,"--dur":$.dur,"--delay":$.delay,"--min-op":$.minOp,"--max-op":$.maxOp,width:$.w,height:$.h}},ie)),F.map($=>_.jsx("div",{className:xt.shootingStar,style:{left:`${$.x}%`,top:`${$.y}%`,"--angle":`${$.angle}deg`,"--dur":`${$.dur}s`}},$.id))]}),_.jsxs("div",{className:xt.nebula,children:[_.jsx("div",{className:`${xt.blob} ${xt.blob1}`}),_.jsx("div",{className:`${xt.blob} ${xt.blob2}`}),_.jsx("div",{className:`${xt.blob} ${xt.blob3}`})]}),_.jsx("div",{className:xt.particles,children:V.map(($,ie)=>_.jsx("div",{className:xt.particle,style:{left:$.left,top:$.top,animationDuration:$.dur,animationDelay:$.delay,width:$.w,height:$.h}},ie))}),_.jsx("div",{className:xt.label,children:"KNOWLEDGE GRAPH"}),_.jsx("button",{className:xt.focusBtn,onClick:c,children:l?"SHOW ALL":"FOCUS"}),_.jsx("div",{className:xt.hint,children:"TAB cycle · ENTER preview · DBL-CLICK jump · ESC close"}),_.jsxs("div",{ref:S,className:xt.canvas,style:{width:Q.width,height:Q.height,transform:`translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))`,transition:ve},children:[z&&H[r.title]&&_.jsx("div",{className:xt.jumpPulse,style:{left:H[r.title].x,top:H[r.title].y}}),_.jsxs("svg",{className:xt.svg,viewBox:`0 0 ${Q.width} ${Q.height}`,children:[_.jsxs("defs",{children:[_.jsxs("filter",{id:"edgeGlow",children:[_.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),_.jsxs("feMerge",{children:[_.jsx("feMergeNode",{in:"blur"}),_.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),_.jsxs("filter",{id:"neonGlow",children:[_.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),_.jsx("feComposite",{in:"blur",in2:"SourceGraphic",operator:"over"})]})]}),oe.map(({name:$,ellipse:ie,color:fe})=>_.jsxs("g",{opacity:.7,children:[_.jsx("ellipse",{cx:ie.cx,cy:ie.cy,rx:ie.rx,ry:ie.ry,fill:fe+"08",stroke:fe+"18",strokeWidth:1,strokeDasharray:"6 8"}),_.jsx("text",{x:ie.cx,y:ie.cy-ie.ry-10,textAnchor:"middle",fontSize:10,fill:fe+"44",fontFamily:"'Outfit', sans-serif",fontWeight:"600",letterSpacing:"0.15em",children:$.toUpperCase()})]},$)),Te]}),t.nodes.map($=>{const ie=H[$.id];if(!ie||(De(ie.x,ie.y),l&&($.hopDistance||0)>=3&&$.type!=="center"))return null;const fe=ae.get($.id)??-1;return _.jsx("div",{"data-node":!0,onMouseEnter:()=>{h($.id),$.type!=="center"&&(D.current=setTimeout(()=>{const Fe=($.description||"").split(". ")[0];Fe&&C({id:$.id,text:Fe+".",x:ie.x,y:ie.y})},800))},onMouseLeave:()=>{d(),clearTimeout(D.current),C(null)},children:_.jsx(xA,{node:$,x:ie.x,y:ie.y,onClick:Me,focused:fe>=0&&fe===b,highlighted:f===$.id})},$.id)}),x&&H[x.id]&&!i&&(()=>{const $=H[x.id].x,ie=H[x.id].y,fe=$>Q.width*.6;return _.jsx("div",{className:xt.hoverTooltip,style:{left:fe?$-80:$+80,top:ie,transform:fe?"translate(-100%, -50%)":"translateY(-50%)"},children:x.text})})(),i&&H[i.id]&&_.jsx(RA,{node:i,x:H[i.id].x,y:H[i.id].y})]}),_.jsx($A,{})]})}const xR={Science:["physics","chemistry","biology","quantum","science","experiment","atom","molecule","evolution","genetics"],Technology:["technology","computing","software","internet","engineering","computer","algorithm","digital","electrical"],Mathematics:["mathematics","algebra","geometry","theorem","calculus","statistics","logic","number","equation"],History:["history","war","century","ancient","empire","dynasty","civilization","revolution","medieval"],Philosophy:["philosophy","ethics","logic","metaphysics","epistemology","consciousness","ontology","moral"],Art:["art","music","literature","film","culture","painting","poetry","architecture","cinema"],Society:["society","politics","economics","law","social","government","democracy","culture","religion"]};function kv(t=[]){const e=t.join(" ").toLowerCase();let n="Other",i=0;for(const[r,s]of Object.entries(xR)){const a=s.filter(o=>e.includes(o)).length;a>i&&(i=a,n=r)}return n}const yR="_sidebar_19dgf_1",SR="_header_19dgf_12",ER="_title_19dgf_14",MR="_close_19dgf_20",TR="_stats_19dgf_31",wR="_stat_19dgf_31",CR="_statVal_19dgf_39",bR="_statLabel_19dgf_40",AR="_trail_19dgf_42",RR="_item_19dgf_45",PR="_dot_19dgf_47",NR="_dotVisited_19dgf_54",LR="_dotCurrent_19dgf_55",DR="_itemTitle_19dgf_57",IR="_meta_19dgf_58",UR="_back_19dgf_60",Rt={sidebar:yR,header:SR,title:ER,close:MR,stats:TR,stat:wR,statVal:CR,statLabel:bR,trail:AR,item:RR,dot:PR,dotVisited:NR,dotCurrent:LR,itemTitle:DR,meta:IR,back:UR};function FR(){const{trail:t,trailIndex:e,trailOpen:n,toggleTrail:i,goToIndex:r}=qn();if(!n)return null;const s=t.length>0?t[0].timestamp:Date.now(),a=Date.now()-s,o=Math.max(1,Math.round(a/6e4)),l=new Set(t.map(c=>kv(c.categories||[])));return _.jsxs("div",{className:Rt.sidebar,children:[_.jsxs("div",{className:Rt.header,children:[_.jsx("div",{className:Rt.title,children:"Your Trail"}),_.jsx("div",{className:Rt.close,onClick:i,children:"x"})]}),_.jsxs("div",{className:Rt.stats,children:[_.jsxs("div",{className:Rt.stat,children:[_.jsx("div",{className:Rt.statVal,children:t.length}),_.jsx("div",{className:Rt.statLabel,children:"Jumps"})]}),_.jsxs("div",{className:Rt.stat,children:[_.jsxs("div",{className:Rt.statVal,children:[o,"m"]}),_.jsx("div",{className:Rt.statLabel,children:"Time"})]}),_.jsxs("div",{className:Rt.stat,children:[_.jsx("div",{className:Rt.statVal,children:l.size}),_.jsx("div",{className:Rt.statLabel,children:"Domains"})]})]}),_.jsx("div",{className:Rt.trail,children:t.map((c,f)=>{const h=f===e;return _.jsxs("div",{className:Rt.item,children:[_.jsx("div",{className:`${Rt.dot} ${h?Rt.dotCurrent:Rt.dotVisited}`,children:f+1}),_.jsxs("div",{children:[_.jsx("h4",{className:Rt.itemTitle,children:c.title}),_.jsx("div",{className:Rt.meta,children:h?"Currently exploring":`${Math.round((Date.now()-c.timestamp)/6e4)}m ago`}),!h&&_.jsx("div",{className:Rt.back,onClick:()=>r(f),children:"Jump here"})]})]},`${c.title}-${f}`)})})]})}const OR="_overlay_1xzu3_1",kR="_card_1xzu3_11",BR="_top_1xzu3_18",zR="_graph_1xzu3_27",VR="_pathWrap_1xzu3_32",HR="_arrow_1xzu3_34",GR="_node_1xzu3_36",jR="_circle_1xzu3_38",WR="_start_1xzu3_48",$R="_mid_1xzu3_49",XR="_end_1xzu3_50",qR="_nodeLabel_1xzu3_52",YR="_statsRow_1xzu3_54",KR="_stat_1xzu3_54",ZR="_statVal_1xzu3_62",JR="_statLabel_1xzu3_63",QR="_closeBtn_1xzu3_65",Tt={overlay:OR,card:kR,top:BR,graph:zR,pathWrap:VR,arrow:HR,node:GR,circle:jR,start:WR,mid:$R,end:XR,nodeLabel:qR,statsRow:YR,stat:KR,statVal:ZR,statLabel:JR,closeBtn:QR};function e2(){const{trail:t,journeyOpen:e,toggleJourney:n}=qn();if(!e||t.length===0)return null;const i=t[0].timestamp,r=Math.max(1,Math.round((Date.now()-i)/6e4)),s=new Set(t.map(a=>kv(a.categories||[])));return _.jsx("div",{className:Tt.overlay,onClick:a=>a.target===a.currentTarget&&n(),children:_.jsxs("div",{className:Tt.card,children:[_.jsxs("div",{className:Tt.top,children:[_.jsx("h2",{children:"Your Journey Map"}),_.jsx("p",{children:"Where curiosity took you today"})]}),_.jsx("div",{className:Tt.graph,children:t.map((a,o)=>{const l=o===0,c=o===t.length-1,f=a.title.split(" ").map(h=>h[0]).join("").slice(0,3).toUpperCase();return _.jsxs("div",{className:Tt.pathWrap,children:[o>0&&_.jsx("div",{className:Tt.arrow,children:"→"}),_.jsxs("div",{className:Tt.node,children:[_.jsx("div",{className:`${Tt.circle} ${l?Tt.start:c?Tt.end:Tt.mid}`,children:f}),_.jsx("div",{className:Tt.nodeLabel,children:a.title})]})]},`${a.title}-${o}`)})}),_.jsxs("div",{className:Tt.statsRow,children:[_.jsxs("div",{className:Tt.stat,children:[_.jsx("div",{className:Tt.statVal,children:t.length}),_.jsx("div",{className:Tt.statLabel,children:"Concepts"})]}),_.jsxs("div",{className:Tt.stat,children:[_.jsxs("div",{className:Tt.statVal,children:[r,"m"]}),_.jsx("div",{className:Tt.statLabel,children:"Time"})]}),_.jsxs("div",{className:Tt.stat,children:[_.jsx("div",{className:Tt.statVal,children:s.size}),_.jsx("div",{className:Tt.statLabel,children:"Domains"})]})]}),_.jsx("button",{className:Tt.closeBtn,onClick:n,children:"Close"})]})})}class t2 extends L.Component{constructor(n){super(n);xp(this,"handleReset",()=>{this.setState({hasError:!1,error:null})});this.state={hasError:!1,error:null}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,i){console.error("ErrorBoundary caught:",n,i.componentStack)}render(){return this.state.hasError?_.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",background:"var(--bg-primary, #06090f)",color:"rgba(226, 232, 240, 0.7)",fontFamily:"'Outfit', sans-serif",gap:"16px"},children:[_.jsx("p",{style:{fontSize:"14px",color:"rgba(200, 210, 225, 0.45)"},children:"Something went wrong in the graph renderer."}),_.jsx("button",{onClick:this.handleReset,style:{padding:"10px 24px",borderRadius:"8px",border:"1px solid rgba(0, 212, 255, 0.25)",background:"rgba(0, 212, 255, 0.06)",color:"rgba(0, 212, 255, 0.8)",cursor:"pointer",fontSize:"12px",fontWeight:700,letterSpacing:"0.06em",fontFamily:"'Outfit', sans-serif"},children:"RETRY"})]}):this.props.children}}const n2="_app_1qmcd_1",i2="_main_1qmcd_8",r2="_leftPanel_1qmcd_15",s2="_rightPanel_1qmcd_23",nl={app:n2,main:i2,leftPanel:r2,rightPanel:s2};function a2(){const{jumpTo:t}=qn(),[e,n]=L.useState(!1),[i,r]=Tv();return L.useEffect(()=>{if(e)return;const s=i.get("q");if(s){n(!0);const a=new URLSearchParams(i);a.delete("q"),r(a,{replace:!0}),t(s)}},[e,t,i,r]),null}function o2({topic:t}){return _.jsxs("div",{style:{position:"fixed",inset:0,background:"radial-gradient(ellipse at 50% 45%, rgba(255,170,64,0.06) 0%, rgba(0,255,242,0.02) 30%, #000000 65%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,zIndex:900,pointerEvents:"none",fontFamily:"var(--font-display, 'Outfit'), sans-serif"},children:[_.jsxs("div",{style:{position:"relative",width:36,height:36},children:[_.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:"1px solid rgba(255,170,64,0.15)",animation:"loaderRing 2s ease-in-out infinite"}}),_.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:16,height:16,borderRadius:"50%",background:"#ffd27a",boxShadow:"0 0 14px rgba(255,200,90,0.9), 0 0 32px rgba(255,170,64,0.55), 0 0 60px rgba(255,170,64,0.3)",animation:"branchPulse 1.6s ease-in-out infinite"}})]}),_.jsx("div",{style:{color:"rgba(255,200,90,0.85)",fontSize:11,letterSpacing:4,textTransform:"uppercase",textShadow:"0 0 10px rgba(255,170,64,0.5)"},children:"Loading concept"}),t&&_.jsx("div",{style:{color:"rgba(255,255,255,0.55)",fontSize:13,letterSpacing:1},children:t}),_.jsx("style",{children:`
        @keyframes branchPulse {
          0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 0.9; }
          50% { transform: translate(-50%,-50%) scale(1.3); opacity: 1; }
        }
        @keyframes loaderRing {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.25); opacity: 0.8; }
        }
      `})]})}function l2({onSignIn:t,onSignUp:e,pendingTopic:n}){const{currentConcept:i,loading:r}=qn(),s=!!i,a=!s&&(r||!!n),o=!s&&!r&&!n;return L.useEffect(()=>{s&&window.dispatchEvent(new CustomEvent("explore:ready"))},[s]),_.jsxs(_.Fragment,{children:[a&&_.jsx(o2,{topic:n||"..."}),(s||o)&&_.jsxs(_.Fragment,{children:[_.jsx(Yh,{onSignIn:t,onSignUp:e}),_.jsx(Bw,{})]}),o&&_.jsxs("div",{style:{position:"fixed",inset:0,background:"radial-gradient(ellipse at 50% 40%, rgba(255,170,64,0.03) 0%, transparent 60%), #000000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,zIndex:50,fontFamily:"var(--font-display, 'Outfit'), sans-serif",paddingTop:120},children:[_.jsx("div",{style:{width:14,height:14,borderRadius:"50%",background:"#ffd27a",boxShadow:"0 0 12px rgba(255,200,90,0.6), 0 0 28px rgba(255,170,64,0.3)",opacity:.7}}),_.jsx("div",{style:{color:"rgba(255,200,90,0.85)",fontSize:12,letterSpacing:4,textTransform:"uppercase",textShadow:"0 0 10px rgba(255,170,64,0.5)"},children:"Wiki Hopper"}),_.jsx("div",{style:{color:"rgba(255,255,255,0.45)",fontSize:14,letterSpacing:1,maxWidth:400,textAlign:"center",lineHeight:1.6},children:"Use the search bar above to explore any Wikipedia concept"})]}),_.jsx("div",{className:nl.app,style:{visibility:s?"visible":"hidden",background:"#000000"},children:_.jsxs("div",{className:nl.main,children:[_.jsx("div",{className:nl.leftPanel,children:_.jsx(nb,{})}),_.jsxs("div",{className:nl.rightPanel,children:[_.jsx(t2,{children:_.jsx(vR,{})}),_.jsx(FR,{})]})]})}),_.jsx(e2,{}),s&&_.jsx(Rv,{page:"explore"})]})}function ng(){const[t,e]=L.useState(null),n=new URLSearchParams(window.location.search).get("q")||"";return _.jsxs(pw,{children:[_.jsx(l2,{pendingTopic:n,onSignIn:()=>e("login"),onSignUp:()=>e("register")}),_.jsx(a2,{}),t&&_.jsx(Kh,{initialMode:t,onClose:()=>e(null)})]})}const c2="_questionStack_1xskq_1",u2="_questionCard_1xskq_10",d2="_questionIndex_1xskq_27",f2="_questionPrompt_1xskq_35",h2="_answerInput_1xskq_44",p2="_actions_1xskq_71",m2="_skipBtn_1xskq_79",g2="_submitBtn_1xskq_106",_2="_backLink_1xskq_133",v2="_topicLabel_1xskq_153",x2="_errorNote_1xskq_167",vn={questionStack:c2,questionCard:u2,questionIndex:d2,questionPrompt:f2,answerInput:h2,actions:p2,skipBtn:m2,submitBtn:g2,backLink:_2,topicLabel:v2,errorNote:x2};function ig({label:t}){return _.jsxs("div",{style:{position:"fixed",inset:0,background:"#000000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,zIndex:900,fontFamily:"var(--font-display, 'Outfit'), sans-serif"},children:[_.jsx("div",{style:{width:14,height:14,borderRadius:"50%",background:"#ffd27a",boxShadow:"0 0 12px rgba(255,200,90,0.9), 0 0 28px rgba(255,170,64,0.55), 0 0 60px rgba(255,170,64,0.3)",animation:"branchPulse 1.6s ease-in-out infinite"}}),_.jsx("div",{style:{color:"rgba(255,200,90,0.85)",fontSize:11,letterSpacing:4,textTransform:"uppercase",textShadow:"0 0 10px rgba(255,170,64,0.5)"},children:t}),_.jsx("style",{children:`
        @keyframes branchPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `})]})}function y2(){const[t]=Tv(),e=(t.get("topic")||"").trim(),n=Ao(),{generateTree:i,generating:r}=ma(),[s,a]=L.useState([]),[o,l]=L.useState({}),[c,f]=L.useState(!!e),[h,d]=L.useState(""),[m,v]=L.useState(""),[S,p]=L.useState(null),u=L.useRef(!1);L.useEffect(()=>{u.current||e&&(u.current=!0,f(!0),d(""),gM(e).then(w=>{a(w),l(Object.fromEntries(w.map(x=>[x.id,""])))}).catch(w=>{d(w.message||"Could not load questions")}).finally(()=>f(!1)))},[e]);function g(w,x){l(C=>({...C,[w]:x}))}async function y(w){var C;(C=w==null?void 0:w.preventDefault)==null||C.call(w);const x=s.map(D=>({question:D.prompt,answer:(o[D.id]||"").trim()})).filter(D=>D.answer);try{await i(e,x),n("/")}catch{}}async function E(){try{await i(e),n("/")}catch{}}function T(w){w.preventDefault();const x=m.trim();x&&n(`/skill-tree/advanced?topic=${encodeURIComponent(x)}`)}if(r)return _.jsx(ig,{label:"Growing skill tree"});if(c)return _.jsx(ig,{label:"Preparing questions"});const b=Object.values(o).some(w=>(w||"").trim());return _.jsxs(_.Fragment,{children:[_.jsx(Yh,{onSignIn:()=>p("login"),onSignUp:()=>p("register")}),_.jsx(Av,{}),_.jsxs("main",{className:J.promptView,children:[_.jsx("div",{className:J.dotGrid,"aria-hidden":"true"}),_.jsxs("header",{className:J.hero,children:[_.jsx("span",{className:J.eyebrow,children:"ADVANCED GENERATOR"}),_.jsxs("h1",{className:J.heading,children:["A few questions ",_.jsx("span",{className:J.headingItalic,children:"to tailor it"}),"."]}),_.jsx("p",{className:J.subtitle,children:"Your answers shape the skill tree — what you want to do after, where you're starting from, how much time you have. Skip any you're not sure about."}),e&&_.jsxs("span",{className:vn.topicLabel,children:["For ",_.jsx("strong",{children:e})]})]}),e?h?_.jsxs(_.Fragment,{children:[_.jsx("div",{className:vn.errorNote,children:h}),_.jsxs("div",{className:vn.actions,children:[_.jsx("button",{className:vn.skipBtn,onClick:()=>n("/"),type:"button",children:"Back"}),_.jsx("button",{className:vn.submitBtn,onClick:E,type:"button",children:"Use defaults"})]})]}):_.jsxs("form",{className:vn.questionStack,onSubmit:y,children:[s.map((w,x)=>_.jsxs("label",{className:vn.questionCard,children:[_.jsxs("span",{className:vn.questionIndex,children:["QUESTION ",String(x+1).padStart(2,"0")]}),_.jsx("span",{className:vn.questionPrompt,children:w.prompt}),_.jsx("textarea",{className:vn.answerInput,value:o[w.id]||"",onChange:C=>g(w.id,C.target.value),placeholder:w.placeholder||"",rows:3})]},w.id)),_.jsxs("div",{className:vn.actions,children:[_.jsx("button",{type:"button",className:vn.backLink,onClick:()=>n(-1),children:"← Back"}),_.jsx("button",{type:"button",className:vn.skipBtn,onClick:E,disabled:r,children:"Skip — use defaults"}),_.jsx("button",{type:"submit",className:vn.submitBtn,disabled:r||!b,children:"Grow tree"})]})]}):_.jsxs("form",{className:J.form,onSubmit:T,children:[_.jsx("span",{className:J.formIcon,children:"▸"}),_.jsx("input",{className:J.topicInput,type:"text",placeholder:"Enter a topic to customize...",value:m,onChange:w=>v(w.target.value),autoFocus:!0}),_.jsx("button",{type:"submit",className:J.generateBtn,children:"Next"})]})]}),S&&_.jsx(Kh,{initialMode:S,onClose:()=>p(null)})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jh="183",S2=0,rg=1,E2=2,Bl=1,M2=2,Va=3,Nr=0,wn=1,Fi=2,Vi=0,Ks=1,sg=2,ag=3,og=4,T2=5,qr=100,w2=101,C2=102,b2=103,A2=104,R2=200,P2=201,N2=202,L2=203,af=204,of=205,D2=206,I2=207,U2=208,F2=209,O2=210,k2=211,B2=212,z2=213,V2=214,lf=0,cf=1,uf=2,aa=3,df=4,ff=5,hf=6,pf=7,Bv=0,H2=1,G2=2,Si=0,zv=1,Vv=2,Hv=3,Gv=4,jv=5,Wv=6,$v=7,Xv=300,cs=301,oa=302,Cu=303,bu=304,Hc=306,mf=1e3,Bi=1001,gf=1002,Yt=1003,j2=1004,il=1005,an=1006,Au=1007,Qr=1008,Gn=1009,qv=1010,Yv=1011,xo=1012,Qh=1013,Ti=1014,_i=1015,qi=1016,ep=1017,tp=1018,yo=1020,Kv=35902,Zv=35899,Jv=1021,Qv=1022,si=1023,Yi=1026,es=1027,ex=1028,np=1029,la=1030,ip=1031,rp=1033,zl=33776,Vl=33777,Hl=33778,Gl=33779,_f=35840,vf=35841,xf=35842,yf=35843,Sf=36196,Ef=37492,Mf=37496,Tf=37488,wf=37489,Cf=37490,bf=37491,Af=37808,Rf=37809,Pf=37810,Nf=37811,Lf=37812,Df=37813,If=37814,Uf=37815,Ff=37816,Of=37817,kf=37818,Bf=37819,zf=37820,Vf=37821,Hf=36492,Gf=36494,jf=36495,Wf=36283,$f=36284,Xf=36285,qf=36286,W2=3200,$2=0,X2=1,mr="",zn="srgb",ca="srgb-linear",xc="linear",ct="srgb",vs=7680,lg=519,q2=512,Y2=513,K2=514,sp=515,Z2=516,J2=517,ap=518,Q2=519,cg=35044,ug="300 es",vi=2e3,yc=2001;function eP(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tP(){const t=Sc("canvas");return t.style.display="block",t}const dg={};function fg(...t){const e="THREE."+t.shift();console.log(e,...t)}function tx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=tx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function st(...t){t=tx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ec(...t){const e=t.join(" ");e in dg||(dg[e]=!0,Ge(...t))}function nP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const iP={[lf]:cf,[uf]:hf,[df]:pf,[aa]:ff,[cf]:lf,[hf]:uf,[pf]:df,[ff]:aa};class ga{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=Math.PI/180,Yf=180/Math.PI;function Ro(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function rP(t,e){return(t%e+e)%e}function Pu(t,e,n){return(1-n)*t+n*e}function Aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[a+0],m=s[a+1],v=s[a+2],S=s[a+3];if(h!==S||l!==d||c!==m||f!==v){let p=l*d+c*m+f*v+h*S;p<0&&(d=-d,m=-m,v=-v,S=-S,p=-p);let u=1-o;if(p<.9995){const g=Math.acos(p),y=Math.sin(g);u=Math.sin(u*g)/y,o=Math.sin(o*g)/y,l=l*u+d*o,c=c*u+m*o,f=f*u+v*o,h=h*u+S*o}else{l=l*u+d*o,c=c*u+m*o,f=f*u+v*o,h=h*u+S*o;const g=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=g,c*=g,f*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+f*h+l*m-c*d,e[n+1]=l*v+f*d+c*h-o*m,e[n+2]=c*v+f*m+o*d-l*h,e[n+3]=f*v-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h-d*m*v;break;case"YXZ":this._x=d*f*h+c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h+d*m*v;break;case"ZXY":this._x=d*f*h-c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h-d*m*v;break;case"ZYX":this._x=d*f*h-c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h+d*m*v;break;case"YZX":this._x=d*f*h+c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h-d*m*v;break;case"XZY":this._x=d*f*h-c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h+d*m*v;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nu.copy(this).projectOnVector(e),this.sub(Nu)}reflect(e){return this.sub(Nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nu=new K,hg=new _a;class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],v=i[8],S=r[0],p=r[3],u=r[6],g=r[1],y=r[4],E=r[7],T=r[2],b=r[5],w=r[8];return s[0]=a*S+o*g+l*T,s[3]=a*p+o*y+l*b,s[6]=a*u+o*E+l*w,s[1]=c*S+f*g+h*T,s[4]=c*p+f*y+h*b,s[7]=c*u+f*E+h*w,s[2]=d*S+m*g+v*T,s[5]=d*p+m*y+v*b,s[8]=d*u+m*E+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,m=c*s-a*l,v=n*h+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=h*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Lu.makeScale(e,n)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lu=new $e,pg=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mg=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sP(){const t={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=Zs(r.r),r.g=Zs(r.g),r.b=Zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?xc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ec("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ec("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ca]:{primaries:e,whitePoint:i,transfer:xc,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),t}const nt=sP();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class aP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xs===void 0&&(xs=Sc("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oP=0;class op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oP++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Du(r[a].image)):s.push(Du(r[a]))}else s=Du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?aP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let lP=0;const Iu=new K;class hn extends ga{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Bi,r=Bi,s=an,a=Qr,o=si,l=Gn,c=hn.DEFAULT_ANISOTROPY,f=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lP++}),this.uuid=Ro(),this.name="",this.source=new op(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Xv;hn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],v=l[9],S=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-S)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+S)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,E=(m+1)/2,T=(u+1)/2,b=(f+d)/4,w=(h+S)/4,x=(v+p)/4;return y>E&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=w/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=b/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=x/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-v)*(p-v)+(h-S)*(h-S)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(h-S)/g,this.z=(d-f)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cP extends ga{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new hn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new op(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends cP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class nx extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uP extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kt{constructor(e,n,i,r,s,a,o,l,c,f,h,d,m,v,S,p){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,m,v,S,p)}set(e,n,i,r,s,a,o,l,c,f,h,d,m,v,S,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=v,u[11]=S,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,m=a*h,v=o*f,S=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,v=c*f,S=c*h;n[0]=d+S*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=m*o-v,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,v=c*f,S=c*h;n[0]=d-S*o,n[4]=-a*h,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*f,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,m=a*h,v=o*f,S=o*h;n[0]=l*f,n[4]=v*c-m,n[8]=d*c+S,n[1]=l*h,n[5]=S*c+d,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,S=o*c;n[0]=l*f,n[4]=S-d*h,n[8]=v*h+m,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*h+v,n[10]=d-S*h}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,S=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+S,n[5]=a*f,n[9]=m*h-v,n[2]=v*h-m,n[6]=o*f,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dP,e,fP)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),sr.crossVectors(i,Rn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),sr.crossVectors(i,Rn)),sr.normalize(),rl.crossVectors(Rn,sr),r[0]=sr.x,r[4]=rl.x,r[8]=Rn.x,r[1]=sr.y,r[5]=rl.y,r[9]=Rn.y,r[2]=sr.z,r[6]=rl.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],v=i[2],S=i[6],p=i[10],u=i[14],g=i[3],y=i[7],E=i[11],T=i[15],b=r[0],w=r[4],x=r[8],C=r[12],D=r[1],N=r[5],P=r[9],F=r[13],W=r[2],z=r[6],j=r[10],O=r[14],V=r[3],H=r[7],Q=r[11],le=r[15];return s[0]=a*b+o*D+l*W+c*V,s[4]=a*w+o*N+l*z+c*H,s[8]=a*x+o*P+l*j+c*Q,s[12]=a*C+o*F+l*O+c*le,s[1]=f*b+h*D+d*W+m*V,s[5]=f*w+h*N+d*z+m*H,s[9]=f*x+h*P+d*j+m*Q,s[13]=f*C+h*F+d*O+m*le,s[2]=v*b+S*D+p*W+u*V,s[6]=v*w+S*N+p*z+u*H,s[10]=v*x+S*P+p*j+u*Q,s[14]=v*C+S*F+p*O+u*le,s[3]=g*b+y*D+E*W+T*V,s[7]=g*w+y*N+E*z+T*H,s[11]=g*x+y*P+E*j+T*Q,s[15]=g*C+y*F+E*O+T*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],v=e[3],S=e[7],p=e[11],u=e[15],g=l*m-c*d,y=o*m-c*h,E=o*d-l*h,T=a*m-c*f,b=a*d-l*f,w=a*h-o*f;return n*(S*g-p*y+u*E)-i*(v*g-p*T+u*b)+r*(v*y-S*T+u*w)-s*(v*E-S*b+p*w)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],v=e[12],S=e[13],p=e[14],u=e[15],g=n*o-i*a,y=n*l-r*a,E=n*c-s*a,T=i*l-r*o,b=i*c-s*o,w=r*c-s*l,x=f*S-h*v,C=f*p-d*v,D=f*u-m*v,N=h*p-d*S,P=h*u-m*S,F=d*u-m*p,W=g*F-y*P+E*N+T*D-b*C+w*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/W;return e[0]=(o*F-l*P+c*N)*z,e[1]=(r*P-i*F-s*N)*z,e[2]=(S*w-p*b+u*T)*z,e[3]=(d*b-h*w-m*T)*z,e[4]=(l*D-a*F-c*C)*z,e[5]=(n*F-r*D+s*C)*z,e[6]=(p*E-v*w-u*y)*z,e[7]=(f*w-d*E+m*y)*z,e[8]=(a*P-o*D+c*x)*z,e[9]=(i*D-n*P-s*x)*z,e[10]=(v*b-S*E+u*g)*z,e[11]=(h*E-f*b-m*g)*z,e[12]=(o*C-a*N-l*x)*z,e[13]=(n*N-i*C+r*x)*z,e[14]=(S*y-v*T-p*g)*z,e[15]=(f*T-h*y+d*g)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,m=s*f,v=s*h,S=a*f,p=a*h,u=o*h,g=l*c,y=l*f,E=l*h,T=i.x,b=i.y,w=i.z;return r[0]=(1-(S+u))*T,r[1]=(m+E)*T,r[2]=(v-y)*T,r[3]=0,r[4]=(m-E)*b,r[5]=(1-(d+u))*b,r[6]=(p+g)*b,r[7]=0,r[8]=(v+y)*w,r[9]=(p-g)*w,r[10]=(1-(d+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),l=ys.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Zn.copy(this);const c=1/a,f=1/o,h=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,n.setFromRotationMatrix(Zn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=vi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let v,S;if(l)v=s/(a-s),S=a*s/(a-s);else if(o===vi)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===yc)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=vi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,S;if(l)v=1/(a-s),S=a/(a-s);else if(o===vi)v=-2/(a-s),S=-(a+s)/(a-s);else if(o===yc)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new K,Zn=new kt,dP=new K(0,0,0),fP=new K(1,1,1),sr=new K,rl=new K,Rn=new K,gg=new kt,_g=new _a;class Ki{constructor(e=0,n=0,i=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class ix{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hP=0;const vg=new K,Ss=new _a,Ri=new kt,sl=new K,Ra=new K,pP=new K,mP=new _a,xg=new K(1,0,0),yg=new K(0,1,0),Sg=new K(0,0,1),Eg={type:"added"},gP={type:"removed"},Es={type:"childadded",child:null},Uu={type:"childremoved",child:null};class Un extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hP++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new K,n=new Ki,i=new _a,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new $e}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ix,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(xg,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,n){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xg,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sl.copy(e):sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ra,sl,this.up):Ri.lookAt(sl,Ra,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Ri),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eg),Es.child=e,this.dispatchEvent(Es),Es.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gP),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eg),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,pP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,mP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Un.DEFAULT_UP=new K(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class al extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _P={type:"move"};class Fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),u=this._getHandJoint(c,S);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_P)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new al;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},ol={h:0,s:0,l:0};function Ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ht{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=rP(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ou(a,s,e+1/3),this.g=Ou(a,s,e),this.b=Ou(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=rx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return nt.workingToColorSpace(rn.copy(this),e),Math.round(Je(rn.r*255,0,255))*65536+Math.round(Je(rn.g*255,0,255))*256+Math.round(Je(rn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=nt.workingColorSpace){return nt.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=zn){nt.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(ol);const i=Pu(ar.h,ol.h,n),r=Pu(ar.s,ol.s,n),s=Pu(ar.l,ol.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ht;ht.NAMES=rx;class vP extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new K,Pi=new K,ku=new K,Ni=new K,Ms=new K,Ts=new K,Mg=new K,Bu=new K,zu=new K,Vu=new K,Hu=new Dt,Gu=new Dt,ju=new Dt;class ri{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Pi.subVectors(i,n),ku.subVectors(e,n);const a=Jn.dot(Jn),o=Jn.dot(Pi),l=Jn.dot(ku),c=Pi.dot(Pi),f=Pi.dot(ku),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*f)*d,v=(a*f-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Hu.setScalar(0),Gu.setScalar(0),ju.setScalar(0),Hu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,i),ju.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Hu,s.x),a.addScaledVector(Gu,s.y),a.addScaledVector(ju,s.z),a}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Pi.subVectors(e,n),Jn.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Jn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ms.subVectors(r,i),Ts.subVectors(s,i),Bu.subVectors(e,i);const l=Ms.dot(Bu),c=Ts.dot(Bu);if(l<=0&&c<=0)return n.copy(i);zu.subVectors(e,r);const f=Ms.dot(zu),h=Ts.dot(zu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Ms,a);Vu.subVectors(e,s);const m=Ms.dot(Vu),v=Ts.dot(Vu);if(v>=0&&m<=v)return n.copy(s);const S=m*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Ts,o);const p=f*v-m*h;if(p<=0&&h-f>=0&&m-v>=0)return Mg.subVectors(s,r),o=(h-f)/(h-f+(m-v)),n.copy(r).addScaledVector(Mg,o);const u=1/(p+S+d);return a=S*u,o=d*u,n.copy(i).addScaledVector(Ms,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Po{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ll.copy(i.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),cl.subVectors(this.max,Pa),ws.subVectors(e.a,Pa),Cs.subVectors(e.b,Pa),bs.subVectors(e.c,Pa),or.subVectors(Cs,ws),lr.subVectors(bs,Cs),kr.subVectors(ws,bs);let n=[0,-or.z,or.y,0,-lr.z,lr.y,0,-kr.z,kr.y,or.z,0,-or.x,lr.z,0,-lr.x,kr.z,0,-kr.x,-or.y,or.x,0,-lr.y,lr.x,0,-kr.y,kr.x,0];return!Wu(n,ws,Cs,bs,cl)||(n=[1,0,0,0,1,0,0,0,1],!Wu(n,ws,Cs,bs,cl))?!1:(ul.crossVectors(or,lr),n=[ul.x,ul.y,ul.z],Wu(n,ws,Cs,bs,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new K,new K,new K,new K,new K,new K,new K,new K],Qn=new K,ll=new Po,ws=new K,Cs=new K,bs=new K,or=new K,lr=new K,kr=new K,Pa=new K,cl=new K,ul=new K,Br=new K;function Wu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Br.fromArray(t,s);const o=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),c=n.dot(Br),f=i.dot(Br);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Ut=new K,dl=new pt;let xP=0;class Mi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cg,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Aa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cg&&(e.usage=this.usage),e}}class sx extends Mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ax extends Mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gi extends Mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const yP=new Po,Na=new K,$u=new K;class lp{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const n=Na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add($u)),this.expandByPoint(Na.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let SP=0;const Bn=new kt,Xu=new Un,As=new K,Pn=new Po,La=new Po,jt=new K;class Ji extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SP++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eP(e)?ax:sx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];La.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Pn.min,La.min),Pn.expandByPoint(jt),jt.addVectors(Pn.max,La.max),Pn.expandByPoint(jt)):(Pn.expandByPoint(La.min),Pn.expandByPoint(La.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)jt.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),jt.add(As)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new K,l[x]=new K;const c=new K,f=new K,h=new K,d=new pt,m=new pt,v=new pt,S=new K,p=new K;function u(x,C,D){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,D),d.fromBufferAttribute(s,x),m.fromBufferAttribute(s,C),v.fromBufferAttribute(s,D),f.sub(c),h.sub(c),m.sub(d),v.sub(d);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(S.copy(f).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(N),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(N),o[x].add(S),o[C].add(S),o[D].add(S),l[x].add(p),l[C].add(p),l[D].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,C=g.length;x<C;++x){const D=g[x],N=D.start,P=D.count;for(let F=N,W=N+P;F<W;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new K,E=new K,T=new K,b=new K;function w(x){T.fromBufferAttribute(r,x),b.copy(T);const C=o[x];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(b,C);const N=E.dot(l[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,N)}for(let x=0,C=g.length;x<C;++x){const D=g[x],N=D.start,P=D.count;for(let F=N,W=N+P;F<W;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,f=new K,h=new K;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),S=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,p),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let m=0,v=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*f;for(let u=0;u<f;u++)d[v++]=c[m++]}return new Mi(d,f,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ji,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let EP=0;class Gc extends ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EP++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=Ks,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=af,this.blendDst=of,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ge(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ge(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==af&&(i.blendSrc=this.blendSrc),this.blendDst!==of&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Di=new K,qu=new K,fl=new K,cr=new K,Yu=new K,hl=new K,Ku=new K;class MP{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qu.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(qu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(fl),o=cr.dot(this.direction),l=-cr.dot(fl),c=cr.lengthSq(),f=Math.abs(1-a*a);let h,d,m,v;if(f>0)if(h=a*l-o,d=a*o-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const S=1/f;h*=S,d*=S,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qu).addScaledVector(fl,d),m}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,i,r,s){Yu.subVectors(n,e),hl.subVectors(i,e),Ku.crossVectors(Yu,hl);let a=this.direction.dot(Ku),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cr.subVectors(this.origin,e);const l=o*this.direction.dot(hl.crossVectors(cr,hl));if(l<0)return null;const c=o*this.direction.dot(Yu.cross(cr));if(c<0||l+c>a)return null;const f=-o*cr.dot(Ku);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ox extends Gc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tg=new kt,zr=new MP,pl=new lp,wg=new K,ml=new K,gl=new K,_l=new K,Zu=new K,vl=new K,Cg=new K,xl=new K;class wi extends Un{constructor(e=new Ji,n=new ox){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(Zu.fromBufferAttribute(h,e),a?vl.addScaledVector(Zu,f):vl.addScaledVector(Zu.sub(n),f))}n.add(vl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(pl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(pl,wg)===null||zr.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Tg.copy(s).invert(),zr.copy(e.ray).applyMatrix4(Tg),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const p=d[v],u=a[p.materialIndex],g=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,T=y;E<T;E+=3){const b=o.getX(E),w=o.getX(E+1),x=o.getX(E+2);r=yl(this,u,e,i,c,f,h,b,w,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=v,u=S;p<u;p+=3){const g=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);r=yl(this,a,e,i,c,f,h,g,y,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const p=d[v],u=a[p.materialIndex],g=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,T=y;E<T;E+=3){const b=E,w=E+1,x=E+2;r=yl(this,u,e,i,c,f,h,b,w,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=v,u=S;p<u;p+=3){const g=p,y=p+1,E=p+2;r=yl(this,a,e,i,c,f,h,g,y,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function TP(t,e,n,i,r,s,a,o){let l;if(e.side===wn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Nr,o),l===null)return null;xl.copy(o),xl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xl);return c<n.near||c>n.far?null:{distance:c,point:xl.clone(),object:t}}function yl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ml),t.getVertexPosition(l,gl),t.getVertexPosition(c,_l);const f=TP(t,e,n,i,ml,gl,_l,Cg);if(f){const h=new K;ri.getBarycoord(Cg,ml,gl,_l,h),r&&(f.uv=ri.getInterpolatedAttribute(r,o,l,c,h,new pt)),s&&(f.uv1=ri.getInterpolatedAttribute(s,o,l,c,h,new pt)),a&&(f.normal=ri.getInterpolatedAttribute(a,o,l,c,h,new K),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new K,materialIndex:0};ri.getNormal(ml,gl,_l,d.normal),f.face=d,f.barycoord=h}return f}class wP extends hn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Yt,f=Yt,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ju=new K,CP=new K,bP=new $e;class Xr{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ju.subVectors(i,n).cross(CP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||bP.getNormalMatrix(e),r=this.coplanarPoint(Ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new lp,AP=new pt(.5,.5),Sl=new K;class lx{constructor(e=new Xr,n=new Xr,i=new Xr,r=new Xr,s=new Xr,a=new Xr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],m=s[7],v=s[8],S=s[9],p=s[10],u=s[11],g=s[12],y=s[13],E=s[14],T=s[15];if(r[0].setComponents(c-a,m-f,u-v,T-g).normalize(),r[1].setComponents(c+a,m+f,u+v,T+g).normalize(),r[2].setComponents(c+o,m+h,u+S,T+y).normalize(),r[3].setComponents(c-o,m-h,u-S,T-y).normalize(),i)r[4].setComponents(l,d,p,E).normalize(),r[5].setComponents(c-l,m-d,u-p,T-E).normalize();else if(r[4].setComponents(c-l,m-d,u-p,T-E).normalize(),n===vi)r[5].setComponents(c+l,m+d,u+p,T+E).normalize();else if(n===yc)r[5].setComponents(l,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){Vr.center.set(0,0,0);const n=AP.distanceTo(e.center);return Vr.radius=.7071067811865476+n,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sl.x=r.normal.x>0?e.max.x:e.min.x,Sl.y=r.normal.y>0?e.max.y:e.min.y,Sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cx extends hn{constructor(e=[],n=cs,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class So extends hn{constructor(e,n,i=Ti,r,s,a,o=Yt,l=Yt,c,f=Yi,h=1){if(f!==Yi&&f!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class RP extends So{constructor(e,n=Ti,i=cs,r,s,a=Yt,o=Yt,l,c=Yi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ux extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class No extends Ji{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gi(c,3)),this.setAttribute("normal",new Gi(f,3)),this.setAttribute("uv",new Gi(h,2));function v(S,p,u,g,y,E,T,b,w,x,C){const D=E/w,N=T/x,P=E/2,F=T/2,W=b/2,z=w+1,j=x+1;let O=0,V=0;const H=new K;for(let Q=0;Q<j;Q++){const le=Q*N-F;for(let U=0;U<z;U++){const ae=U*D-P;H[S]=ae*g,H[p]=le*y,H[u]=W,c.push(H.x,H.y,H.z),H[S]=0,H[p]=0,H[u]=b>0?1:-1,f.push(H.x,H.y,H.z),h.push(U/w),h.push(1-Q/x),O+=1}}for(let Q=0;Q<x;Q++)for(let le=0;le<w;le++){const U=d+le+z*Q,ae=d+le+z*(Q+1),Me=d+(le+1)+z*(Q+1),De=d+(le+1)+z*Q;l.push(U,ae,De),l.push(ae,Me,De),V+=6}o.addGroup(m,V,C),m+=V,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Lo extends Ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,m=[],v=[],S=[],p=[];for(let u=0;u<f;u++){const g=u*d-a;for(let y=0;y<c;y++){const E=y*h-s;v.push(E,-g,0),S.push(0,0,1),p.push(y/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const y=g+c*u,E=g+c*(u+1),T=g+1+c*(u+1),b=g+1+c*u;m.push(y,E,b),m.push(E,T,b)}this.setIndex(m),this.setAttribute("position",new Gi(v,3)),this.setAttribute("normal",new Gi(S,3)),this.setAttribute("uv",new Gi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.widthSegments,e.heightSegments)}}function ua(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=ua(t[n]);for(const r in i)e[r]=i[r]}return e}function PP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const NP={clone:ua,merge:cn};var LP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Gc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LP,this.fragmentShader=DP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=PP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class IP extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class UP extends Gc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FP extends Gc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const El=new K,Ml=new _a,fi=new K;class fx extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(El,Ml,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,Ml,fi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(El,Ml,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,Ml,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new K,bg=new pt,Ag=new pt;class ii extends fx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yf*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,bg,Ag),n.subVectors(Ag,bg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ru*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cp extends fx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Rs=-90,Ps=1;class OP extends Un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ii(Rs,Ps,e,n);r.layers=this.layers,this.add(r);const s=new ii(Rs,Ps,e,n);s.layers=this.layers,this.add(s);const a=new ii(Rs,Ps,e,n);a.layers=this.layers,this.add(a);const o=new ii(Rs,Ps,e,n);o.layers=this.layers,this.add(o);const l=new ii(Rs,Ps,e,n);l.layers=this.layers,this.add(l);const c=new ii(Rs,Ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class kP extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class BP{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=zP.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function zP(){this._document.hidden===!1&&this.reset()}function Rg(t,e,n,i){const r=VP(i);switch(n){case Jv:return t*e;case ex:return t*e/r.components*r.byteLength;case np:return t*e/r.components*r.byteLength;case la:return t*e*2/r.components*r.byteLength;case ip:return t*e*2/r.components*r.byteLength;case Qv:return t*e*3/r.components*r.byteLength;case si:return t*e*4/r.components*r.byteLength;case rp:return t*e*4/r.components*r.byteLength;case zl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vf:case yf:return Math.max(t,16)*Math.max(e,8)/4;case _f:case xf:return Math.max(t,8)*Math.max(e,8)/2;case Sf:case Ef:case Tf:case wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mf:case Cf:case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Hf:case Gf:case jf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Wf:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xf:case qf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VP(t){switch(t){case Gn:case qv:return{byteLength:1,components:1};case xo:case Yv:case qi:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case Ti:case Qh:case _i:return{byteLength:4,components:1};case Kv:case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HP(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<h.length;m++){const v=h[d],S=h[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++d,h[d]=S)}h.length=d+1;for(let m=0,v=h.length;m<v;m++){const S=h[m];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var GP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jP=`#ifdef USE_ALPHAHASH
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
#endif`,WP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$P=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YP=`#ifdef USE_AOMAP
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
#endif`,KP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZP=`#ifdef USE_BATCHING
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
#endif`,JP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n3=`#ifdef USE_IRIDESCENCE
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
#endif`,i3=`#ifdef USE_BUMPMAP
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
#endif`,r3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,f3=`#define PI 3.141592653589793
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
} // validated`,h3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p3=`vec3 transformedNormal = objectNormal;
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
#endif`,m3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x3="gl_FragColor = linearToOutputTexel( gl_FragColor );",y3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S3=`#ifdef USE_ENVMAP
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
#endif`,E3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M3=`#ifdef USE_ENVMAP
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
#endif`,T3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w3=`#ifdef USE_ENVMAP
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
#endif`,C3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P3=`#ifdef USE_GRADIENTMAP
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
}`,N3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I3=`uniform bool receiveShadow;
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
#endif`,U3=`#ifdef USE_ENVMAP
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
#endif`,F3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z3=`PhysicalMaterial material;
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
#endif`,V3=`uniform sampler2D dfgLUT;
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
}`,H3=`
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
#endif`,G3=`#if defined( RE_IndirectDiffuse )
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
#endif`,j3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J3=`#if defined( USE_POINTS_UV )
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
#endif`,Q3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rN=`#ifdef USE_MORPHTARGETS
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
#endif`,sN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dN=`#ifdef USE_NORMALMAP
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
#endif`,fN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_N=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bN=`float getShadowMask() {
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
}`,AN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RN=`#ifdef USE_SKINNING
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
#endif`,PN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NN=`#ifdef USE_SKINNING
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
#endif`,LN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FN=`#ifdef USE_TRANSMISSION
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
#endif`,ON=`#ifdef USE_TRANSMISSION
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
#endif`,kN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GN=`uniform sampler2D t2D;
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
}`,jN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$N=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qN=`#include <common>
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
}`,YN=`#if DEPTH_PACKING == 3200
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
}`,KN=`#define DISTANCE
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
}`,ZN=`#define DISTANCE
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
}`,JN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eL=`uniform float scale;
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
}`,tL=`uniform vec3 diffuse;
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
}`,nL=`#include <common>
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
}`,iL=`uniform vec3 diffuse;
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
}`,rL=`#define LAMBERT
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
}`,sL=`#define LAMBERT
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
}`,aL=`#define MATCAP
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
}`,oL=`#define MATCAP
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
}`,lL=`#define NORMAL
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
}`,cL=`#define NORMAL
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
}`,uL=`#define PHONG
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
}`,dL=`#define PHONG
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
}`,fL=`#define STANDARD
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
}`,hL=`#define STANDARD
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
}`,pL=`#define TOON
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
}`,mL=`#define TOON
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
}`,gL=`uniform float size;
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
}`,_L=`uniform vec3 diffuse;
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
}`,vL=`#include <common>
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
}`,xL=`uniform vec3 color;
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
}`,yL=`uniform float rotation;
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
}`,SL=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:GP,alphahash_pars_fragment:jP,alphamap_fragment:WP,alphamap_pars_fragment:$P,alphatest_fragment:XP,alphatest_pars_fragment:qP,aomap_fragment:YP,aomap_pars_fragment:KP,batching_pars_vertex:ZP,batching_vertex:JP,begin_vertex:QP,beginnormal_vertex:e3,bsdfs:t3,iridescence_fragment:n3,bumpmap_pars_fragment:i3,clipping_planes_fragment:r3,clipping_planes_pars_fragment:s3,clipping_planes_pars_vertex:a3,clipping_planes_vertex:o3,color_fragment:l3,color_pars_fragment:c3,color_pars_vertex:u3,color_vertex:d3,common:f3,cube_uv_reflection_fragment:h3,defaultnormal_vertex:p3,displacementmap_pars_vertex:m3,displacementmap_vertex:g3,emissivemap_fragment:_3,emissivemap_pars_fragment:v3,colorspace_fragment:x3,colorspace_pars_fragment:y3,envmap_fragment:S3,envmap_common_pars_fragment:E3,envmap_pars_fragment:M3,envmap_pars_vertex:T3,envmap_physical_pars_fragment:U3,envmap_vertex:w3,fog_vertex:C3,fog_pars_vertex:b3,fog_fragment:A3,fog_pars_fragment:R3,gradientmap_pars_fragment:P3,lightmap_pars_fragment:N3,lights_lambert_fragment:L3,lights_lambert_pars_fragment:D3,lights_pars_begin:I3,lights_toon_fragment:F3,lights_toon_pars_fragment:O3,lights_phong_fragment:k3,lights_phong_pars_fragment:B3,lights_physical_fragment:z3,lights_physical_pars_fragment:V3,lights_fragment_begin:H3,lights_fragment_maps:G3,lights_fragment_end:j3,logdepthbuf_fragment:W3,logdepthbuf_pars_fragment:$3,logdepthbuf_pars_vertex:X3,logdepthbuf_vertex:q3,map_fragment:Y3,map_pars_fragment:K3,map_particle_fragment:Z3,map_particle_pars_fragment:J3,metalnessmap_fragment:Q3,metalnessmap_pars_fragment:eN,morphinstance_vertex:tN,morphcolor_vertex:nN,morphnormal_vertex:iN,morphtarget_pars_vertex:rN,morphtarget_vertex:sN,normal_fragment_begin:aN,normal_fragment_maps:oN,normal_pars_fragment:lN,normal_pars_vertex:cN,normal_vertex:uN,normalmap_pars_fragment:dN,clearcoat_normal_fragment_begin:fN,clearcoat_normal_fragment_maps:hN,clearcoat_pars_fragment:pN,iridescence_pars_fragment:mN,opaque_fragment:gN,packing:_N,premultiplied_alpha_fragment:vN,project_vertex:xN,dithering_fragment:yN,dithering_pars_fragment:SN,roughnessmap_fragment:EN,roughnessmap_pars_fragment:MN,shadowmap_pars_fragment:TN,shadowmap_pars_vertex:wN,shadowmap_vertex:CN,shadowmask_pars_fragment:bN,skinbase_vertex:AN,skinning_pars_vertex:RN,skinning_vertex:PN,skinnormal_vertex:NN,specularmap_fragment:LN,specularmap_pars_fragment:DN,tonemapping_fragment:IN,tonemapping_pars_fragment:UN,transmission_fragment:FN,transmission_pars_fragment:ON,uv_pars_fragment:kN,uv_pars_vertex:BN,uv_vertex:zN,worldpos_vertex:VN,background_vert:HN,background_frag:GN,backgroundCube_vert:jN,backgroundCube_frag:WN,cube_vert:$N,cube_frag:XN,depth_vert:qN,depth_frag:YN,distance_vert:KN,distance_frag:ZN,equirect_vert:JN,equirect_frag:QN,linedashed_vert:eL,linedashed_frag:tL,meshbasic_vert:nL,meshbasic_frag:iL,meshlambert_vert:rL,meshlambert_frag:sL,meshmatcap_vert:aL,meshmatcap_frag:oL,meshnormal_vert:lL,meshnormal_frag:cL,meshphong_vert:uL,meshphong_frag:dL,meshphysical_vert:fL,meshphysical_frag:hL,meshtoon_vert:pL,meshtoon_frag:mL,points_vert:gL,points_frag:_L,shadow_vert:vL,shadow_frag:xL,sprite_vert:yL,sprite_frag:SL},_e={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},mi={basic:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ht(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:cn([_e.points,_e.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:cn([_e.common,_e.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:cn([_e.sprite,_e.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:cn([_e.common,_e.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:cn([_e.lights,_e.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};mi.physical={uniforms:cn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Tl={r:0,b:0,g:0},Hr=new Ki,EL=new kt;function ML(t,e,n,i,r,s){const a=new ht(0);let o=r===!0?0:1,l,c,f=null,h=0,d=null;function m(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){const E=g.backgroundBlurriness>0;y=e.get(y,E)}return y}function v(g){let y=!1;const E=m(g);E===null?p(a,o):E&&E.isColor&&(p(E,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(g,y){const E=m(y);E&&(E.isCubeTexture||E.mapping===Hc)?(c===void 0&&(c=new wi(new No(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:ua(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Hr.copy(y.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(EL.makeRotationFromEuler(Hr)),c.material.toneMapped=nt.getTransfer(E.colorSpace)!==ct,(f!==E||h!==E.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new wi(new Lo(2,2),new ci({name:"BackgroundMaterial",uniforms:ua(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=nt.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=E,h=E.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,y){g.getRGB(Tl,dx(t)),n.buffers.color.setClear(Tl.r,Tl.g,Tl.b,y,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,p(a,o)},render:v,addToRenderList:S,dispose:u}}function TL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(N,P,F,W,z){let j=!1;const O=h(N,W,F,P);s!==O&&(s=O,c(s.object)),j=m(N,W,F,z),j&&v(N,W,F,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(N,P,F,W),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function f(N){return t.deleteVertexArray(N)}function h(N,P,F,W){const z=W.wireframe===!0;let j=i[P.id];j===void 0&&(j={},i[P.id]=j);const O=N.isInstancedMesh===!0?N.id:0;let V=j[O];V===void 0&&(V={},j[O]=V);let H=V[F.id];H===void 0&&(H={},V[F.id]=H);let Q=H[z];return Q===void 0&&(Q=d(l()),H[z]=Q),Q}function d(N){const P=[],F=[],W=[];for(let z=0;z<n;z++)P[z]=0,F[z]=0,W[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:W,object:N,attributes:{},index:null}}function m(N,P,F,W){const z=s.attributes,j=P.attributes;let O=0;const V=F.getAttributes();for(const H in V)if(V[H].location>=0){const le=z[H];let U=j[H];if(U===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),le===void 0||le.attribute!==U||U&&le.data!==U.data)return!0;O++}return s.attributesNum!==O||s.index!==W}function v(N,P,F,W){const z={},j=P.attributes;let O=0;const V=F.getAttributes();for(const H in V)if(V[H].location>=0){let le=j[H];le===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(le=N.instanceColor));const U={};U.attribute=le,le&&le.data&&(U.data=le.data),z[H]=U,O++}s.attributes=z,s.attributesNum=O,s.index=W}function S(){const N=s.newAttributes;for(let P=0,F=N.length;P<F;P++)N[P]=0}function p(N){u(N,0)}function u(N,P){const F=s.newAttributes,W=s.enabledAttributes,z=s.attributeDivisors;F[N]=1,W[N]===0&&(t.enableVertexAttribArray(N),W[N]=1),z[N]!==P&&(t.vertexAttribDivisor(N,P),z[N]=P)}function g(){const N=s.newAttributes,P=s.enabledAttributes;for(let F=0,W=P.length;F<W;F++)P[F]!==N[F]&&(t.disableVertexAttribArray(F),P[F]=0)}function y(N,P,F,W,z,j,O){O===!0?t.vertexAttribIPointer(N,P,F,z,j):t.vertexAttribPointer(N,P,F,W,z,j)}function E(N,P,F,W){S();const z=W.attributes,j=F.getAttributes(),O=P.defaultAttributeValues;for(const V in j){const H=j[V];if(H.location>=0){let Q=z[V];if(Q===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const le=Q.normalized,U=Q.itemSize,ae=e.get(Q);if(ae===void 0)continue;const Me=ae.buffer,De=ae.type,q=ae.bytesPerElement,re=De===t.INT||De===t.UNSIGNED_INT||Q.gpuType===Qh;if(Q.isInterleavedBufferAttribute){const oe=Q.data,Te=oe.stride,ve=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let $=0;$<H.locationSize;$++)u(H.location+$,oe.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let $=0;$<H.locationSize;$++)p(H.location+$);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let $=0;$<H.locationSize;$++)y(H.location+$,U/H.locationSize,De,le,Te*q,(ve+U/H.locationSize*$)*q,re)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)u(H.location+oe,Q.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let oe=0;oe<H.locationSize;oe++)y(H.location+oe,U/H.locationSize,De,le,U*q,U/H.locationSize*oe*q,re)}}else if(O!==void 0){const le=O[V];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(H.location,le);break;case 3:t.vertexAttrib3fv(H.location,le);break;case 4:t.vertexAttrib4fv(H.location,le);break;default:t.vertexAttrib1fv(H.location,le)}}}}g()}function T(){C();for(const N in i){const P=i[N];for(const F in P){const W=P[F];for(const z in W){const j=W[z];for(const O in j)f(j[O].object),delete j[O];delete W[z]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const P=i[N.id];for(const F in P){const W=P[F];for(const z in W){const j=W[z];for(const O in j)f(j[O].object),delete j[O];delete W[z]}}delete i[N.id]}function w(N){for(const P in i){const F=i[P];for(const W in F){const z=F[W];if(z[N.id]===void 0)continue;const j=z[N.id];for(const O in j)f(j[O].object),delete j[O];delete z[N.id]}}}function x(N){for(const P in i){const F=i[P],W=N.isInstancedMesh===!0?N.id:0,z=F[W];if(z!==void 0){for(const j in z){const O=z[j];for(const V in O)f(O[V].object),delete O[V];delete z[j]}delete F[W],Object.keys(F).length===0&&delete i[P]}}}function C(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:p,disableUnusedAttributes:g}}function wL(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function o(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=f[v];n.update(m,i,1)}function l(c,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],f[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let v=0;for(let S=0;S<h;S++)v+=f[S]*d[S];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function CL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==si&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Gn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_i&&!x)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ge("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:E,maxSamples:T,samples:b}}function bL(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Xr,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,y=g*4;let E=u.clippingState||null;l.value=E,E=f(v,d,y,m);for(let T=0;T!==y;++T)E[T]=n[T];u.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,v){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=l.value,v!==!0||p===null){const u=m+S*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let y=0,E=m;y!==S;++y,E+=4)a.copy(h[y]).applyMatrix4(g,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}const xr=4,Pg=[.125,.215,.35,.446,.526,.582],Yr=20,AL=256,Da=new cp,Ng=new ht;let Qu=null,ed=0,td=0,nd=!1;const RL=new K;class Lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=RL}=s;Qu=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:qi,format:si,colorSpace:ca,depthBuffer:!1},r=Dg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PL(s)),this._blurMaterial=LL(s,e,n),this._ggxMaterial=NL(s,e,n)}return r}_compileMaterial(e){const n=new wi(new Ji,e);this._renderer.compile(n,Da)}_sceneToCubeUV(e,n,i,r,s){const l=new ii(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Ng),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new No,new ox({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let u=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,u=!0):(p.color.copy(Ng),u=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):E===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const T=this._cubeSize;Ns(r,E*T,y>2?T:0,T,T),h.setRenderTarget(r),u&&h.render(S,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===cs||e.mapping===oa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ns(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Da)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,m=h*d,{_lodMax:v}=this,S=this._sizeLods[i],p=3*S*(i>v-xr?i-v+xr:0),u=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,Ns(s,p,u,3*S,2*S),r.setRenderTarget(s),r.render(o,Da),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ns(e,p,u,3*S,2*S),r.setRenderTarget(e),r.render(o,Da)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&st("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Yr-1),S=s/v,p=isFinite(s)?1+Math.floor(f*S):Yr;p>Yr&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yr}`);const u=[];let g=0;for(let w=0;w<Yr;++w){const x=w/S,C=Math.exp(-x*x/2);u.push(C),w===0?g+=C:w<p&&(g+=2*C)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-i;const E=this._sizeLods[r],T=3*E*(r>y-xr?r-y+xr:0),b=4*(this._cubeSize-E);Ns(n,T,b,3*E,2*E),l.setRenderTarget(n),l.render(h,Da)}}function PL(t){const e=[],n=[],i=[];let r=t;const s=t-xr+1+Pg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-xr?l=Pg[a-t+xr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,v=6,S=3,p=2,u=1,g=new Float32Array(S*v*m),y=new Float32Array(p*v*m),E=new Float32Array(u*v*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,x=b>2?0:-1,C=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];g.set(C,S*v*b),y.set(d,p*v*b);const D=[b,b,b,b,b,b];E.set(D,u*v*b)}const T=new Ji;T.setAttribute("position",new Mi(g,S)),T.setAttribute("uv",new Mi(y,p)),T.setAttribute("faceIndex",new Mi(E,u)),i.push(new wi(T,null)),r>xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Dg(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function NL(t,e,n){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function LL(t,e,n){const i=new Float32Array(Yr),r=new K(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Ig(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Ug(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}class px extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new No(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:ua(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Vi});s.uniforms.tEquirect.value=n;const a=new wi(r,s),o=n.minFilter;return n.minFilter===Qr&&(n.minFilter=an),new OP(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function DL(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Cu||m===bu)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const S=new px(v.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,v=m===Cu||m===bu,S=m===cs||m===oa;if(v||S){let p=n.get(d);const u=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Lg(t)),p=v?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const g=d.image;return v&&g&&g.height>0||S&&g&&l(g)?(i===null&&(i=new Lg(t)),p=v?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function o(d,m){return m===Cu?d.mapping=cs:m===bu&&(d.mapping=oa),d}function l(d){let m=0;const v=6;for(let S=0;S<v;S++)d[S]!==void 0&&m++;return m===v}function c(d){const m=d.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function IL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ec("WebGLRenderer: "+i+" extension not supported."),r}}}function UL(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,v=h.attributes.position;let S=0;if(v===void 0)return;if(m!==null){const g=m.array;S=m.version;for(let y=0,E=g.length;y<E;y+=3){const T=g[y+0],b=g[y+1],w=g[y+2];d.push(T,b,b,w,w,T)}}else{const g=v.array;S=v.version;for(let y=0,E=g.length/3-1;y<E;y+=3){const T=y+0,b=y+1,w=y+2;d.push(T,b,b,w,w,T)}}const p=new(v.count>=65535?ax:sx)(d,1);p.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function FL(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*a),n.update(m,i,1)}function c(d,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,d*a,v),n.update(m,i,v))}function f(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];n.update(p,i,1)}function h(d,m,v,S){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],S[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,S,0,v);let u=0;for(let g=0;g<v;g++)u+=m[g]*S[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function OL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kL(t,e,n){const i=new WeakMap,r=new Dt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let D=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var m=D;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),S===!0&&(E=2),p===!0&&(E=3);let T=o.attributes.position.count*E,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*b*4*h),x=new nx(w,T,b,h);x.type=_i,x.needsUpdate=!0;const C=E*4;for(let N=0;N<h;N++){const P=u[N],F=g[N],W=y[N],z=T*b*4*N;for(let j=0;j<P.count;j++){const O=j*C;v===!0&&(r.fromBufferAttribute(P,j),w[z+O+0]=r.x,w[z+O+1]=r.y,w[z+O+2]=r.z,w[z+O+3]=0),S===!0&&(r.fromBufferAttribute(F,j),w[z+O+4]=r.x,w[z+O+5]=r.y,w[z+O+6]=r.z,w[z+O+7]=0),p===!0&&(r.fromBufferAttribute(W,j),w[z+O+8]=r.x,w[z+O+9]=r.y,w[z+O+10]=r.z,w[z+O+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:x,size:new pt(T,b)},i.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const S=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function BL(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const zL={[zv]:"LINEAR_TONE_MAPPING",[Vv]:"REINHARD_TONE_MAPPING",[Hv]:"CINEON_TONE_MAPPING",[Gv]:"ACES_FILMIC_TONE_MAPPING",[Wv]:"AGX_TONE_MAPPING",[$v]:"NEUTRAL_TONE_MAPPING",[jv]:"CUSTOM_TONE_MAPPING"};function VL(t,e,n,i,r){const s=new Ei(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new Ei(e,n,{type:qi,depthBuffer:!1,stencilBuffer:!1}),o=new Ji;o.setAttribute("position",new Gi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Gi([0,2,0,0,2,0],2));const l=new IP({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new wi(o,l),f=new cp(-1,1,1,-1,0,1);let h=null,d=null,m=!1,v,S=null,p=[],u=!1;this.setSize=function(g,y){s.setSize(g,y),a.setSize(g,y);for(let E=0;E<p.length;E++){const T=p[E];T.setSize&&T.setSize(g,y)}},this.setEffects=function(g){p=g,u=p.length>0&&p[0].isRenderPass===!0;const y=s.width,E=s.height;for(let T=0;T<p.length;T++){const b=p[T];b.setSize&&b.setSize(y,E)}},this.begin=function(g,y){if(m||g.toneMapping===Si&&p.length===0)return!1;if(S=y,y!==null){const E=y.width,T=y.height;(s.width!==E||s.height!==T)&&this.setSize(E,T)}return u===!1&&g.setRenderTarget(s),v=g.toneMapping,g.toneMapping=Si,!0},this.hasRenderPass=function(){return u},this.end=function(g,y){g.toneMapping=v,m=!0;let E=s,T=a;for(let b=0;b<p.length;b++){const w=p[b];if(w.enabled!==!1&&(w.render(g,T,E,y),w.needsSwap!==!1)){const x=E;E=T,T=x}}if(h!==g.outputColorSpace||d!==g.toneMapping){h=g.outputColorSpace,d=g.toneMapping,l.defines={},nt.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");const b=zL[d];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,g.setRenderTarget(S),g.render(c,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const mx=new hn,Kf=new So(1,1),gx=new nx,_x=new uP,vx=new cx,Fg=[],Og=[],kg=new Float32Array(16),Bg=new Float32Array(9),zg=new Float32Array(4);function va(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Fg[r];if(s===void 0&&(s=new Float32Array(r),Fg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wc(t,e){let n=Og[e];n===void 0&&(n=new Int32Array(e),Og[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function jL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function WL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function $L(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;zg.set(i),t.uniformMatrix2fv(this.addr,!1,zg),Ht(n,i)}}function XL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;Bg.set(i),t.uniformMatrix3fv(this.addr,!1,Bg),Ht(n,i)}}function qL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;kg.set(i),t.uniformMatrix4fv(this.addr,!1,kg),Ht(n,i)}}function YL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function KL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function ZL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function JL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function QL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function tD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function nD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function iD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Kf.compareFunction=n.isReversedDepthBuffer()?ap:sp,s=Kf):s=mx,n.setTexture2D(e||s,r)}function rD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||_x,r)}function sD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||vx,r)}function aD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||gx,r)}function oD(t){switch(t){case 5126:return HL;case 35664:return GL;case 35665:return jL;case 35666:return WL;case 35674:return $L;case 35675:return XL;case 35676:return qL;case 5124:case 35670:return YL;case 35667:case 35671:return KL;case 35668:case 35672:return ZL;case 35669:case 35673:return JL;case 5125:return QL;case 36294:return eD;case 36295:return tD;case 36296:return nD;case 35678:case 36198:case 36298:case 36306:case 35682:return iD;case 35679:case 36299:case 36307:return rD;case 35680:case 36300:case 36308:case 36293:return sD;case 36289:case 36303:case 36311:case 36292:return aD}}function lD(t,e){t.uniform1fv(this.addr,e)}function cD(t,e){const n=va(e,this.size,2);t.uniform2fv(this.addr,n)}function uD(t,e){const n=va(e,this.size,3);t.uniform3fv(this.addr,n)}function dD(t,e){const n=va(e,this.size,4);t.uniform4fv(this.addr,n)}function fD(t,e){const n=va(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hD(t,e){const n=va(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pD(t,e){const n=va(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mD(t,e){t.uniform1iv(this.addr,e)}function gD(t,e){t.uniform2iv(this.addr,e)}function _D(t,e){t.uniform3iv(this.addr,e)}function vD(t,e){t.uniform4iv(this.addr,e)}function xD(t,e){t.uniform1uiv(this.addr,e)}function yD(t,e){t.uniform2uiv(this.addr,e)}function SD(t,e){t.uniform3uiv(this.addr,e)}function ED(t,e){t.uniform4uiv(this.addr,e)}function MD(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Kf:a=mx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function TD(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||_x,s[a])}function wD(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||vx,s[a])}function CD(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||gx,s[a])}function bD(t){switch(t){case 5126:return lD;case 35664:return cD;case 35665:return uD;case 35666:return dD;case 35674:return fD;case 35675:return hD;case 35676:return pD;case 5124:case 35670:return mD;case 35667:case 35671:return gD;case 35668:case 35672:return _D;case 35669:case 35673:return vD;case 5125:return xD;case 36294:return yD;case 36295:return SD;case 36296:return ED;case 35678:case 36198:case 36298:case 36306:case 35682:return MD;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return wD;case 36289:case 36303:case 36311:case 36292:return CD}}class AD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oD(n.type)}}class RD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bD(n.type)}}class PD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const id=/(\w+)(\])?(\[|\.)?/g;function Vg(t,e){t.seq.push(e),t.map[e.id]=e}function ND(t,e,n){const i=t.name,r=i.length;for(id.lastIndex=0;;){const s=id.exec(i),a=id.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Vg(n,c===void 0?new AD(o,t,e):new RD(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new PD(o),Vg(n,h)),n=h}}}class jl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);ND(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Hg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const LD=37297;let DD=0;function ID(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Gg=new $e;function UD(t){nt._getMatrix(Gg,nt.workingColorSpace,t);const e=`mat3( ${Gg.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case xc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function jg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+ID(t.getShaderSource(e),o)}else return s}function FD(t,e){const n=UD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const OD={[zv]:"Linear",[Vv]:"Reinhard",[Hv]:"Cineon",[Gv]:"ACESFilmic",[Wv]:"AgX",[$v]:"Neutral",[jv]:"Custom"};function kD(t,e){const n=OD[e];return n===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new K;function BD(){nt.getLuminanceCoefficients(wl);const t=wl.x.toFixed(4),e=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function VD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function HD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ha(t){return t!==""}function Wg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $g(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(t){return t.replace(GD,WD)}const jD=new Map;function WD(t,e){let n=Xe[e];if(n===void 0){const i=jD.get(e);if(i!==void 0)n=Xe[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zf(n)}const $D=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(t){return t.replace($D,XD)}function XD(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const qD={[Bl]:"SHADOWMAP_TYPE_PCF",[Va]:"SHADOWMAP_TYPE_VSM"};function YD(t){return qD[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KD={[cs]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function ZD(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":KD[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const JD={[oa]:"ENVMAP_MODE_REFRACTION"};function QD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":JD[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eI={[Bv]:"ENVMAP_BLENDING_MULTIPLY",[H2]:"ENVMAP_BLENDING_MIX",[G2]:"ENVMAP_BLENDING_ADD"};function tI(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":eI[t.combine]||"ENVMAP_BLENDING_NONE"}function nI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iI(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=YD(n),c=ZD(n),f=QD(n),h=tI(n),d=nI(n),m=zD(n),v=VD(s),S=r.createProgram();let p,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ha).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ha).join(`
`),u.length>0&&(u+=`
`)):(p=[qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),u=[qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Si?kD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,FD("linearToOutputTexel",n.outputColorSpace),BD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ha).join(`
`)),a=Zf(a),a=Wg(a,n),a=$g(a,n),o=Zf(o),o=Wg(o,n),o=$g(o,n),a=Xg(a),o=Xg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=g+p+a,E=g+u+o,T=Hg(r,r.VERTEX_SHADER,y),b=Hg(r,r.FRAGMENT_SHADER,E);r.attachShader(S,T),r.attachShader(S,b),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(N){if(t.debug.checkShaderErrors){const P=r.getProgramInfoLog(S)||"",F=r.getShaderInfoLog(T)||"",W=r.getShaderInfoLog(b)||"",z=P.trim(),j=F.trim(),O=W.trim();let V=!0,H=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,T,b);else{const Q=jg(r,T,"vertex"),le=jg(r,b,"fragment");st("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+Q+`
`+le)}else z!==""?Ge("WebGLProgram: Program Info Log:",z):(j===""||O==="")&&(H=!1);H&&(N.diagnostics={runnable:V,programLog:z,vertexShader:{log:j,prefix:p},fragmentShader:{log:O,prefix:u}})}r.deleteShader(T),r.deleteShader(b),x=new jl(r,S),C=HD(r,S)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(S,LD)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DD++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=b,this}let rI=0;class sI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aI(e),n.set(e,i)),i}}class aI{constructor(e){this.id=rI++,this.code=e,this.usedTimes=0}}function oI(t,e,n,i,r,s){const a=new ix,o=new sI,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,C,D,N,P){const F=N.fog,W=P.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||z,j),V=O&&O.mapping===Hc?O.image.height:null,H=m[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=Q!==void 0?Q.length:0;let U=0;W.morphAttributes.position!==void 0&&(U=1),W.morphAttributes.normal!==void 0&&(U=2),W.morphAttributes.color!==void 0&&(U=3);let ae,Me,De,q;if(H){const lt=mi[H];ae=lt.vertexShader,Me=lt.fragmentShader}else ae=x.vertexShader,Me=x.fragmentShader,o.update(x),De=o.getVertexShaderID(x),q=o.getFragmentShaderID(x);const re=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),Te=P.isInstancedMesh===!0,ve=P.isBatchedMesh===!0,$=!!x.map,ie=!!x.matcap,fe=!!O,Fe=!!x.aoMap,Ve=!!x.lightMap,ze=!!x.bumpMap,Qe=!!x.normalMap,I=!!x.displacementMap,ot=!!x.emissiveMap,et=!!x.metalnessMap,Ke=!!x.roughnessMap,Ae=x.anisotropy>0,R=x.clearcoat>0,M=x.dispersion>0,B=x.iridescence>0,ne=x.sheen>0,se=x.transmission>0,ee=Ae&&!!x.anisotropyMap,Se=R&&!!x.clearcoatMap,he=R&&!!x.clearcoatNormalMap,Ue=R&&!!x.clearcoatRoughnessMap,Be=B&&!!x.iridescenceMap,ue=B&&!!x.iridescenceThicknessMap,pe=ne&&!!x.sheenColorMap,Re=ne&&!!x.sheenRoughnessMap,Ne=!!x.specularMap,Ee=!!x.specularColorMap,qe=!!x.specularIntensityMap,k=se&&!!x.transmissionMap,ge=se&&!!x.thicknessMap,me=!!x.gradientMap,be=!!x.alphaMap,de=x.alphaTest>0,te=!!x.alphaHash,Pe=!!x.extensions;let He=Si;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(He=t.toneMapping);const gt={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:Me,defines:x.defines,customVertexShaderID:De,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ve,batchingColor:ve&&P._colorsTexture!==null,instancing:Te,instancingColor:Te&&P.instanceColor!==null,instancingMorph:Te&&P.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ca,alphaToCoverage:!!x.alphaToCoverage,map:$,matcap:ie,envMap:fe,envMapMode:fe&&O.mapping,envMapCubeUVHeight:V,aoMap:Fe,lightMap:Ve,bumpMap:ze,normalMap:Qe,displacementMap:I,emissiveMap:ot,normalMapObjectSpace:Qe&&x.normalMapType===X2,normalMapTangentSpace:Qe&&x.normalMapType===$2,metalnessMap:et,roughnessMap:Ke,anisotropy:Ae,anisotropyMap:ee,clearcoat:R,clearcoatMap:Se,clearcoatNormalMap:he,clearcoatRoughnessMap:Ue,dispersion:M,iridescence:B,iridescenceMap:Be,iridescenceThicknessMap:ue,sheen:ne,sheenColorMap:pe,sheenRoughnessMap:Re,specularMap:Ne,specularColorMap:Ee,specularIntensityMap:qe,transmission:se,transmissionMap:k,thicknessMap:ge,gradientMap:me,opaque:x.transparent===!1&&x.blending===Ks&&x.alphaToCoverage===!1,alphaMap:be,alphaTest:de,alphaHash:te,combine:x.combine,mapUv:$&&v(x.map.channel),aoMapUv:Fe&&v(x.aoMap.channel),lightMapUv:Ve&&v(x.lightMap.channel),bumpMapUv:ze&&v(x.bumpMap.channel),normalMapUv:Qe&&v(x.normalMap.channel),displacementMapUv:I&&v(x.displacementMap.channel),emissiveMapUv:ot&&v(x.emissiveMap.channel),metalnessMapUv:et&&v(x.metalnessMap.channel),roughnessMapUv:Ke&&v(x.roughnessMap.channel),anisotropyMapUv:ee&&v(x.anisotropyMap.channel),clearcoatMapUv:Se&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(x.sheenRoughnessMap.channel),specularMapUv:Ne&&v(x.specularMap.channel),specularColorMapUv:Ee&&v(x.specularColorMap.channel),specularIntensityMapUv:qe&&v(x.specularIntensityMap.channel),transmissionMapUv:k&&v(x.transmissionMap.channel),thicknessMapUv:ge&&v(x.thicknessMap.channel),alphaMapUv:be&&v(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Qe||Ae),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!W.attributes.uv&&($||be),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&Qe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:P.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:U,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:He,decodeVideoTexture:$&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:ot&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fi,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&x.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function p(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)C.push(D),C.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(u(C,x),g(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function u(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function g(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){const C=m[x.type];let D;if(C){const N=mi[C];D=NP.clone(N.uniforms)}else D=x.uniforms;return D}function E(x,C){let D=f.get(C);return D!==void 0?++D.usedTimes:(D=new iI(t,C,x,r),c.push(D),f.set(C,D)),D}function T(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:w}}function lI(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function cI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Yg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,v,S,p,u){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:m,material:v,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:p,group:u},t[e]=g):(g.id=d.id,g.object=d,g.geometry=m,g.material=v,g.materialVariant=a(d),g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=p,g.group=u),e++,g}function l(d,m,v,S,p,u){const g=o(d,m,v,S,p,u);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function c(d,m,v,S,p,u){const g=o(d,m,v,S,p,u);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function f(d,m){n.length>1&&n.sort(d||cI),i.length>1&&i.sort(m||Yg),r.length>1&&r.sort(m||Yg)}function h(){for(let d=e,m=t.length;d<m;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function uI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Kg,t.set(i,[a])):r>=s.length?(a=new Kg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function dI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new ht};break;case"SpotLight":n={position:new K,direction:new K,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function fI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hI=0;function pI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mI(t){const e=new dI,n=fI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new kt,a=new kt;function o(c){let f=0,h=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,v=0,S=0,p=0,u=0,g=0,y=0,E=0,T=0,b=0,w=0;c.sort(pI);for(let C=0,D=c.length;C<D;C++){const N=c[C],P=N.color,F=N.intensity,W=N.distance;let z=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===la?z=N.shadow.map.texture:z=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=P.r*F,h+=P.g*F,d+=P.b*F;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],F);w++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const O=N.shadow,V=n.get(N);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=N.shadow.matrix,g++}i.directional[m]=j,m++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(P).multiplyScalar(F),j.distance=W,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[S]=j;const O=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,O.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[S]=O.matrix,N.castShadow){const V=n.get(N);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,i.spotShadow[S]=V,i.spotShadowMap[S]=z,E++}S++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(P).multiplyScalar(F),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[p]=j,p++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const O=N.shadow,V=n.get(N);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,V.shadowCameraNear=O.camera.near,V.shadowCameraFar=O.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=N.shadow.matrix,y++}i.point[v]=j,v++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(F),j.groundColor.copy(N.groundColor).multiplyScalar(F),i.hemi[u]=j,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==m||x.pointLength!==v||x.spotLength!==S||x.rectAreaLength!==p||x.hemiLength!==u||x.numDirectionalShadows!==g||x.numPointShadows!==y||x.numSpotShadows!==E||x.numSpotMaps!==T||x.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,x.directionalLength=m,x.pointLength=v,x.spotLength=S,x.rectAreaLength=p,x.hemiLength=u,x.numDirectionalShadows=g,x.numPointShadows=y,x.numSpotShadows=E,x.numSpotMaps=T,x.numLightProbes=w,i.version=hI++)}function l(c,f){let h=0,d=0,m=0,v=0,S=0;const p=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const y=c[u];if(y.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(y.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:i}}function Zg(t){const e=new mI(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function gI(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Zg(t),e.set(r,[o])):s>=a.length?(o=new Zg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const _I=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vI=`uniform sampler2D shadow_pass;
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
}`,xI=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],yI=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Jg=new kt,Ia=new K,rd=new K;function SI(t,e,n){let i=new lx;const r=new pt,s=new pt,a=new Dt,o=new UP,l=new FP,c={},f=n.maxTextureSize,h={[Nr]:wn,[wn]:Nr,[Fi]:Fi},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:_I,fragmentShader:vI}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ji;v.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new wi(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let u=this.type;this.render=function(b,w,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===M2&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bl);const C=t.getRenderTarget(),D=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Vi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const F=u!==this.type;F&&w.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(z=>z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,z=b.length;W<z;W++){const j=b[W],O=j.shadow;if(O===void 0){Ge("WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const V=O.getFrameExtents();r.multiply(V),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,O.mapSize.y=s.y));const H=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Va){if(j.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ei(r.x,r.y,{format:la,type:qi,minFilter:an,magFilter:an,generateMipmaps:!1}),O.map.texture.name=j.name+".shadowMap",O.map.depthTexture=new So(r.x,r.y,_i),O.map.depthTexture.name=j.name+".shadowMapDepth",O.map.depthTexture.format=Yi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt}else j.isPointLight?(O.map=new px(r.x),O.map.depthTexture=new RP(r.x,Ti)):(O.map=new Ei(r.x,r.y),O.map.depthTexture=new So(r.x,r.y,Ti)),O.map.depthTexture.name=j.name+".shadowMap",O.map.depthTexture.format=Yi,this.type===Bl?(O.map.depthTexture.compareFunction=H?ap:sp,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt);O.camera.updateProjectionMatrix()}const Q=O.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<Q;le++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,le),t.clear();else{le===0&&(t.setRenderTarget(O.map),t.clear());const U=O.getViewport(le);a.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),P.viewport(a)}if(j.isPointLight){const U=O.camera,ae=O.matrix,Me=j.distance||U.far;Me!==U.far&&(U.far=Me,U.updateProjectionMatrix()),Ia.setFromMatrixPosition(j.matrixWorld),U.position.copy(Ia),rd.copy(U.position),rd.add(xI[le]),U.up.copy(yI[le]),U.lookAt(rd),U.updateMatrixWorld(),ae.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Jg.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Jg,U.coordinateSystem,U.reversedDepth)}else O.updateMatrices(j);i=O.getFrustum(),E(w,x,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===Va&&g(O,x),O.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(C,D,N)};function g(b,w){const x=e.update(S);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ei(r.x,r.y,{format:la,type:qi})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,x,d,S,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,x,m,S,null)}function y(b,w,x,C){let D=null;const N=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)D=N;else if(D=x.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const P=D.uuid,F=w.uuid;let W=c[P];W===void 0&&(W={},c[P]=W);let z=W[F];z===void 0&&(z=D.clone(),W[F]=z,w.addEventListener("dispose",T)),D=z}if(D.visible=w.visible,D.wireframe=w.wireframe,C===Va?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:h[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const P=t.properties.get(D);P.light=x}return D}function E(b,w,x,C,D){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Va)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const F=e.update(b),W=b.material;if(Array.isArray(W)){const z=F.groups;for(let j=0,O=z.length;j<O;j++){const V=z[j],H=W[V.materialIndex];if(H&&H.visible){const Q=y(b,H,C,D);b.onBeforeShadow(t,b,w,x,F,Q,V),t.renderBufferDirect(x,null,F,Q,b,V),b.onAfterShadow(t,b,w,x,F,Q,V)}}}else if(W.visible){const z=y(b,W,C,D);b.onBeforeShadow(t,b,w,x,F,z,null),t.renderBufferDirect(x,null,F,z,b,null),b.onAfterShadow(t,b,w,x,F,z,null)}}const P=b.children;for(let F=0,W=P.length;F<W;F++)E(P[F],w,x,C,D)}function T(b){b.target.removeEventListener("dispose",T);for(const x in c){const C=c[x],D=b.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}function EI(t,e){function n(){let k=!1;const ge=new Dt;let me=null;const be=new Dt(0,0,0,0);return{setMask:function(de){me!==de&&!k&&(t.colorMask(de,de,de,de),me=de)},setLocked:function(de){k=de},setClear:function(de,te,Pe,He,gt){gt===!0&&(de*=He,te*=He,Pe*=He),ge.set(de,te,Pe,He),be.equals(ge)===!1&&(t.clearColor(de,te,Pe,He),be.copy(ge))},reset:function(){k=!1,me=null,be.set(-1,0,0,0)}}}function i(){let k=!1,ge=!1,me=null,be=null,de=null;return{setReversed:function(te){if(ge!==te){const Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ge=te;const He=de;de=null,this.setClear(He)}},getReversed:function(){return ge},setTest:function(te){te?re(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(te){me!==te&&!k&&(t.depthMask(te),me=te)},setFunc:function(te){if(ge&&(te=iP[te]),be!==te){switch(te){case lf:t.depthFunc(t.NEVER);break;case cf:t.depthFunc(t.ALWAYS);break;case uf:t.depthFunc(t.LESS);break;case aa:t.depthFunc(t.LEQUAL);break;case df:t.depthFunc(t.EQUAL);break;case ff:t.depthFunc(t.GEQUAL);break;case hf:t.depthFunc(t.GREATER);break;case pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}be=te}},setLocked:function(te){k=te},setClear:function(te){de!==te&&(de=te,ge&&(te=1-te),t.clearDepth(te))},reset:function(){k=!1,me=null,be=null,de=null,ge=!1}}}function r(){let k=!1,ge=null,me=null,be=null,de=null,te=null,Pe=null,He=null,gt=null;return{setTest:function(lt){k||(lt?re(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(lt){ge!==lt&&!k&&(t.stencilMask(lt),ge=lt)},setFunc:function(lt,Ci,bi){(me!==lt||be!==Ci||de!==bi)&&(t.stencilFunc(lt,Ci,bi),me=lt,be=Ci,de=bi)},setOp:function(lt,Ci,bi){(te!==lt||Pe!==Ci||He!==bi)&&(t.stencilOp(lt,Ci,bi),te=lt,Pe=Ci,He=bi)},setLocked:function(lt){k=lt},setClear:function(lt){gt!==lt&&(t.clearStencil(lt),gt=lt)},reset:function(){k=!1,ge=null,me=null,be=null,de=null,te=null,Pe=null,He=null,gt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,m=[],v=null,S=!1,p=null,u=null,g=null,y=null,E=null,T=null,b=null,w=new ht(0,0,0),x=0,C=!1,D=null,N=null,P=null,F=null,W=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,O=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=O>=2);let H=null,Q={};const le=t.getParameter(t.SCISSOR_BOX),U=t.getParameter(t.VIEWPORT),ae=new Dt().fromArray(le),Me=new Dt().fromArray(U);function De(k,ge,me,be){const de=new Uint8Array(4),te=t.createTexture();t.bindTexture(k,te),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<me;Pe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ge+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return te}const q={};q[t.TEXTURE_2D]=De(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=De(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=De(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=De(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(aa),ze(!1),Qe(rg),re(t.CULL_FACE),Fe(Vi);function re(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function oe(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function Te(k,ge){return h[k]!==ge?(t.bindFramebuffer(k,ge),h[k]=ge,k===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ge),k===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function ve(k,ge){let me=m,be=!1;if(k){me=d.get(ge),me===void 0&&(me=[],d.set(ge,me));const de=k.textures;if(me.length!==de.length||me[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Pe=de.length;te<Pe;te++)me[te]=t.COLOR_ATTACHMENT0+te;me.length=de.length,be=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,be=!0);be&&t.drawBuffers(me)}function $(k){return v!==k?(t.useProgram(k),v=k,!0):!1}const ie={[qr]:t.FUNC_ADD,[w2]:t.FUNC_SUBTRACT,[C2]:t.FUNC_REVERSE_SUBTRACT};ie[b2]=t.MIN,ie[A2]=t.MAX;const fe={[R2]:t.ZERO,[P2]:t.ONE,[N2]:t.SRC_COLOR,[af]:t.SRC_ALPHA,[O2]:t.SRC_ALPHA_SATURATE,[U2]:t.DST_COLOR,[D2]:t.DST_ALPHA,[L2]:t.ONE_MINUS_SRC_COLOR,[of]:t.ONE_MINUS_SRC_ALPHA,[F2]:t.ONE_MINUS_DST_COLOR,[I2]:t.ONE_MINUS_DST_ALPHA,[k2]:t.CONSTANT_COLOR,[B2]:t.ONE_MINUS_CONSTANT_COLOR,[z2]:t.CONSTANT_ALPHA,[V2]:t.ONE_MINUS_CONSTANT_ALPHA};function Fe(k,ge,me,be,de,te,Pe,He,gt,lt){if(k===Vi){S===!0&&(oe(t.BLEND),S=!1);return}if(S===!1&&(re(t.BLEND),S=!0),k!==T2){if(k!==p||lt!==C){if((u!==qr||E!==qr)&&(t.blendEquation(t.FUNC_ADD),u=qr,E=qr),lt)switch(k){case Ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sg:t.blendFunc(t.ONE,t.ONE);break;case ag:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case og:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:st("WebGLState: Invalid blending: ",k);break}else switch(k){case Ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ag:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case og:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",k);break}g=null,y=null,T=null,b=null,w.set(0,0,0),x=0,p=k,C=lt}return}de=de||ge,te=te||me,Pe=Pe||be,(ge!==u||de!==E)&&(t.blendEquationSeparate(ie[ge],ie[de]),u=ge,E=de),(me!==g||be!==y||te!==T||Pe!==b)&&(t.blendFuncSeparate(fe[me],fe[be],fe[te],fe[Pe]),g=me,y=be,T=te,b=Pe),(He.equals(w)===!1||gt!==x)&&(t.blendColor(He.r,He.g,He.b,gt),w.copy(He),x=gt),p=k,C=!1}function Ve(k,ge){k.side===Fi?oe(t.CULL_FACE):re(t.CULL_FACE);let me=k.side===wn;ge&&(me=!me),ze(me),k.blending===Ks&&k.transparent===!1?Fe(Vi):Fe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const be=k.stencilWrite;o.setTest(be),be&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ot(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(k){D!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),D=k)}function Qe(k){k!==S2?(re(t.CULL_FACE),k!==N&&(k===rg?t.cullFace(t.BACK):k===E2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),N=k}function I(k){k!==P&&(j&&t.lineWidth(k),P=k)}function ot(k,ge,me){k?(re(t.POLYGON_OFFSET_FILL),(F!==ge||W!==me)&&(F=ge,W=me,a.getReversed()&&(ge=-ge),t.polygonOffset(ge,me))):oe(t.POLYGON_OFFSET_FILL)}function et(k){k?re(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function Ke(k){k===void 0&&(k=t.TEXTURE0+z-1),H!==k&&(t.activeTexture(k),H=k)}function Ae(k,ge,me){me===void 0&&(H===null?me=t.TEXTURE0+z-1:me=H);let be=Q[me];be===void 0&&(be={type:void 0,texture:void 0},Q[me]=be),(be.type!==k||be.texture!==ge)&&(H!==me&&(t.activeTexture(me),H=me),t.bindTexture(k,ge||q[k]),be.type=k,be.texture=ge)}function R(){const k=Q[H];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(k){st("WebGLState:",k)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(k){st("WebGLState:",k)}}function ne(){try{t.texSubImage2D(...arguments)}catch(k){st("WebGLState:",k)}}function se(){try{t.texSubImage3D(...arguments)}catch(k){st("WebGLState:",k)}}function ee(){try{t.compressedTexSubImage2D(...arguments)}catch(k){st("WebGLState:",k)}}function Se(){try{t.compressedTexSubImage3D(...arguments)}catch(k){st("WebGLState:",k)}}function he(){try{t.texStorage2D(...arguments)}catch(k){st("WebGLState:",k)}}function Ue(){try{t.texStorage3D(...arguments)}catch(k){st("WebGLState:",k)}}function Be(){try{t.texImage2D(...arguments)}catch(k){st("WebGLState:",k)}}function ue(){try{t.texImage3D(...arguments)}catch(k){st("WebGLState:",k)}}function pe(k){ae.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ae.copy(k))}function Re(k){Me.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Me.copy(k))}function Ne(k,ge){let me=c.get(ge);me===void 0&&(me=new WeakMap,c.set(ge,me));let be=me.get(k);be===void 0&&(be=t.getUniformBlockIndex(ge,k.name),me.set(k,be))}function Ee(k,ge){const be=c.get(ge).get(k);l.get(ge)!==be&&(t.uniformBlockBinding(ge,be,k.__bindingPointIndex),l.set(ge,be))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},H=null,Q={},h={},d=new WeakMap,m=[],v=null,S=!1,p=null,u=null,g=null,y=null,E=null,T=null,b=null,w=new ht(0,0,0),x=0,C=!1,D=null,N=null,P=null,F=null,W=null,ae.set(0,0,t.canvas.width,t.canvas.height),Me.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:oe,bindFramebuffer:Te,drawBuffers:ve,useProgram:$,setBlending:Fe,setMaterial:Ve,setFlipSided:ze,setCullFace:Qe,setLineWidth:I,setPolygonOffset:ot,setScissorTest:et,activeTexture:Ke,bindTexture:Ae,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:Be,texImage3D:ue,updateUBOMapping:Ne,uniformBlockBinding:Ee,texStorage2D:he,texStorage3D:Ue,texSubImage2D:ne,texSubImage3D:se,compressedTexSubImage2D:ee,compressedTexSubImage3D:Se,scissor:pe,viewport:Re,reset:qe}}function MI(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return m?new OffscreenCanvas(R,M):Sc("canvas")}function S(R,M,B){let ne=1;const se=Ae(R);if((se.width>B||se.height>B)&&(ne=B/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(ne*se.width),Se=Math.floor(ne*se.height);h===void 0&&(h=v(ee,Se));const he=M?v(ee,Se):h;return he.width=ee,he.height=Se,he.getContext("2d").drawImage(R,0,0,ee,Se),Ge("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ee+"x"+Se+")."),he}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function p(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,M,B,ne,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=M;if(M===t.RED&&(B===t.FLOAT&&(ee=t.R32F),B===t.HALF_FLOAT&&(ee=t.R16F),B===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.R8UI),B===t.UNSIGNED_SHORT&&(ee=t.R16UI),B===t.UNSIGNED_INT&&(ee=t.R32UI),B===t.BYTE&&(ee=t.R8I),B===t.SHORT&&(ee=t.R16I),B===t.INT&&(ee=t.R32I)),M===t.RG&&(B===t.FLOAT&&(ee=t.RG32F),B===t.HALF_FLOAT&&(ee=t.RG16F),B===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.RG8UI),B===t.UNSIGNED_SHORT&&(ee=t.RG16UI),B===t.UNSIGNED_INT&&(ee=t.RG32UI),B===t.BYTE&&(ee=t.RG8I),B===t.SHORT&&(ee=t.RG16I),B===t.INT&&(ee=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),B===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),B===t.UNSIGNED_INT&&(ee=t.RGB32UI),B===t.BYTE&&(ee=t.RGB8I),B===t.SHORT&&(ee=t.RGB16I),B===t.INT&&(ee=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),B===t.UNSIGNED_INT&&(ee=t.RGBA32UI),B===t.BYTE&&(ee=t.RGBA8I),B===t.SHORT&&(ee=t.RGBA16I),B===t.INT&&(ee=t.RGBA32I)),M===t.RGB&&(B===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),M===t.RGBA){const Se=se?xc:nt.getTransfer(ne);B===t.FLOAT&&(ee=t.RGBA32F),B===t.HALF_FLOAT&&(ee=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ee=Se===ct?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(R,M){let B;return R?M===null||M===Ti||M===yo?B=t.DEPTH24_STENCIL8:M===_i?B=t.DEPTH32F_STENCIL8:M===xo&&(B=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ti||M===yo?B=t.DEPTH_COMPONENT24:M===_i?B=t.DEPTH_COMPONENT32F:M===xo&&(B=t.DEPTH_COMPONENT16),B}function T(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),x(M),M.isVideoTexture&&f.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),D(M)}function x(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,ne=d.get(B);if(ne){const se=ne[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(R),Object.keys(ne).length===0&&d.delete(B)}i.remove(R)}function C(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,ne=d.get(B);delete ne[M.__cacheKey],a.memory.textures--}function D(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let se=0;se<M.__webglFramebuffer[ne].length;se++)t.deleteFramebuffer(M.__webglFramebuffer[ne][se]);else t.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[ne]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let ne=0,se=B.length;ne<se;ne++){const ee=i.get(B[ne]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(B[ne])}i.remove(R)}let N=0;function P(){N=0}function F(){const R=N;return R>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function z(R,M){const B=i.get(R);if(R.isVideoTexture&&et(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const ne=R.image;if(ne===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function j(R,M){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){q(B,R,M);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function O(R,M){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){q(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function V(R,M){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){re(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const H={[mf]:t.REPEAT,[Bi]:t.CLAMP_TO_EDGE,[gf]:t.MIRRORED_REPEAT},Q={[Yt]:t.NEAREST,[j2]:t.NEAREST_MIPMAP_NEAREST,[il]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[Au]:t.LINEAR_MIPMAP_NEAREST,[Qr]:t.LINEAR_MIPMAP_LINEAR},le={[q2]:t.NEVER,[Q2]:t.ALWAYS,[Y2]:t.LESS,[sp]:t.LEQUAL,[K2]:t.EQUAL,[ap]:t.GEQUAL,[Z2]:t.GREATER,[J2]:t.NOTEQUAL};function U(R,M){if(M.type===_i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===Au||M.magFilter===il||M.magFilter===Qr||M.minFilter===an||M.minFilter===Au||M.minFilter===il||M.minFilter===Qr)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,H[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,H[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,H[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Yt||M.minFilter!==il&&M.minFilter!==Qr||M.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ae(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const ne=M.source;let se=d.get(ne);se===void 0&&(se={},d.set(ne,se));const ee=W(M);if(ee!==R.__cacheKey){se[ee]===void 0&&(se[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),se[ee].usedTimes++;const Se=se[R.__cacheKey];Se!==void 0&&(se[R.__cacheKey].usedTimes--,Se.usedTimes===0&&C(M)),R.__cacheKey=ee,R.__webglTexture=se[ee].texture}return B}function Me(R,M,B){return Math.floor(Math.floor(R/B)/M)}function De(R,M,B,ne){const ee=R.updateRanges;if(ee.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,B,ne,M.data);else{ee.sort((ue,pe)=>ue.start-pe.start);let Se=0;for(let ue=1;ue<ee.length;ue++){const pe=ee[Se],Re=ee[ue],Ne=pe.start+pe.count,Ee=Me(Re.start,M.width,4),qe=Me(pe.start,M.width,4);Re.start<=Ne+1&&Ee===qe&&Me(Re.start+Re.count-1,M.width,4)===Ee?pe.count=Math.max(pe.count,Re.start+Re.count-pe.start):(++Se,ee[Se]=Re)}ee.length=Se+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Ue=t.getParameter(t.UNPACK_SKIP_PIXELS),Be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let ue=0,pe=ee.length;ue<pe;ue++){const Re=ee[ue],Ne=Math.floor(Re.start/4),Ee=Math.ceil(Re.count/4),qe=Ne%M.width,k=Math.floor(Ne/M.width),ge=Ee,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,qe,k,ge,me,B,ne,M.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(t.UNPACK_SKIP_ROWS,Be)}}function q(R,M,B){let ne=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=t.TEXTURE_3D);const se=ae(R,M),ee=M.source;n.bindTexture(ne,R.__webglTexture,t.TEXTURE0+B);const Se=i.get(ee);if(ee.version!==Se.__version||se===!0){n.activeTexture(t.TEXTURE0+B);const he=nt.getPrimaries(nt.workingColorSpace),Ue=M.colorSpace===mr?null:nt.getPrimaries(M.colorSpace),Be=M.colorSpace===mr||he===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ue=S(M.image,!1,r.maxTextureSize);ue=Ke(M,ue);const pe=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let Ne=y(M.internalFormat,pe,Re,M.colorSpace,M.isVideoTexture);U(ne,M);let Ee;const qe=M.mipmaps,k=M.isVideoTexture!==!0,ge=Se.__version===void 0||se===!0,me=ee.dataReady,be=T(M,ue);if(M.isDepthTexture)Ne=E(M.format===es,M.type),ge&&(k?n.texStorage2D(t.TEXTURE_2D,1,Ne,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ue.width,ue.height,0,pe,Re,null));else if(M.isDataTexture)if(qe.length>0){k&&ge&&n.texStorage2D(t.TEXTURE_2D,be,Ne,qe[0].width,qe[0].height);for(let de=0,te=qe.length;de<te;de++)Ee=qe[de],k?me&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ee.width,Ee.height,pe,Re,Ee.data):n.texImage2D(t.TEXTURE_2D,de,Ne,Ee.width,Ee.height,0,pe,Re,Ee.data);M.generateMipmaps=!1}else k?(ge&&n.texStorage2D(t.TEXTURE_2D,be,Ne,ue.width,ue.height),me&&De(M,ue,pe,Re)):n.texImage2D(t.TEXTURE_2D,0,Ne,ue.width,ue.height,0,pe,Re,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Ne,qe[0].width,qe[0].height,ue.depth);for(let de=0,te=qe.length;de<te;de++)if(Ee=qe[de],M.format!==si)if(pe!==null)if(k){if(me)if(M.layerUpdates.size>0){const Pe=Rg(Ee.width,Ee.height,M.format,M.type);for(const He of M.layerUpdates){const gt=Ee.data.subarray(He*Pe/Ee.data.BYTES_PER_ELEMENT,(He+1)*Pe/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,He,Ee.width,Ee.height,1,pe,gt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,ue.depth,pe,Ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Ne,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,ue.depth,pe,Re,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Ne,Ee.width,Ee.height,ue.depth,0,pe,Re,Ee.data)}else{k&&ge&&n.texStorage2D(t.TEXTURE_2D,be,Ne,qe[0].width,qe[0].height);for(let de=0,te=qe.length;de<te;de++)Ee=qe[de],M.format!==si?pe!==null?k?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,Ee.width,Ee.height,pe,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Ne,Ee.width,Ee.height,0,Ee.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?me&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ee.width,Ee.height,pe,Re,Ee.data):n.texImage2D(t.TEXTURE_2D,de,Ne,Ee.width,Ee.height,0,pe,Re,Ee.data)}else if(M.isDataArrayTexture)if(k){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Ne,ue.width,ue.height,ue.depth),me)if(M.layerUpdates.size>0){const de=Rg(ue.width,ue.height,M.format,M.type);for(const te of M.layerUpdates){const Pe=ue.data.subarray(te*de/ue.data.BYTES_PER_ELEMENT,(te+1)*de/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ue.width,ue.height,1,pe,Re,Pe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,pe,Re,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,pe,Re,ue.data);else if(M.isData3DTexture)k?(ge&&n.texStorage3D(t.TEXTURE_3D,be,Ne,ue.width,ue.height,ue.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,pe,Re,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,pe,Re,ue.data);else if(M.isFramebufferTexture){if(ge)if(k)n.texStorage2D(t.TEXTURE_2D,be,Ne,ue.width,ue.height);else{let de=ue.width,te=ue.height;for(let Pe=0;Pe<be;Pe++)n.texImage2D(t.TEXTURE_2D,Pe,Ne,de,te,0,pe,Re,null),de>>=1,te>>=1}}else if(qe.length>0){if(k&&ge){const de=Ae(qe[0]);n.texStorage2D(t.TEXTURE_2D,be,Ne,de.width,de.height)}for(let de=0,te=qe.length;de<te;de++)Ee=qe[de],k?me&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,pe,Re,Ee):n.texImage2D(t.TEXTURE_2D,de,Ne,pe,Re,Ee);M.generateMipmaps=!1}else if(k){if(ge){const de=Ae(ue);n.texStorage2D(t.TEXTURE_2D,be,Ne,de.width,de.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Re,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ne,pe,Re,ue);p(M)&&u(ne),Se.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,B){if(M.image.length!==6)return;const ne=ae(R,M),se=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const ee=i.get(se);if(se.version!==ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const Se=nt.getPrimaries(nt.workingColorSpace),he=M.colorSpace===mr?null:nt.getPrimaries(M.colorSpace),Ue=M.colorSpace===mr||Se===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Be=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!Be&&!ue?pe[te]=S(M.image[te],!0,r.maxCubemapSize):pe[te]=ue?M.image[te].image:M.image[te],pe[te]=Ke(M,pe[te]);const Re=pe[0],Ne=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),qe=y(M.internalFormat,Ne,Ee,M.colorSpace),k=M.isVideoTexture!==!0,ge=ee.__version===void 0||ne===!0,me=se.dataReady;let be=T(M,Re);U(t.TEXTURE_CUBE_MAP,M);let de;if(Be){k&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,qe,Re.width,Re.height);for(let te=0;te<6;te++){de=pe[te].mipmaps;for(let Pe=0;Pe<de.length;Pe++){const He=de[Pe];M.format!==si?Ne!==null?k?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,He.width,He.height,Ne,He.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,qe,He.width,He.height,0,He.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,He.width,He.height,Ne,Ee,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,qe,He.width,He.height,0,Ne,Ee,He.data)}}}else{if(de=M.mipmaps,k&&ge){de.length>0&&be++;const te=Ae(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,be,qe,te.width,te.height)}for(let te=0;te<6;te++)if(ue){k?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,Ne,Ee,pe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,pe[te].width,pe[te].height,0,Ne,Ee,pe[te].data);for(let Pe=0;Pe<de.length;Pe++){const gt=de[Pe].image[te].image;k?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,gt.width,gt.height,Ne,Ee,gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,qe,gt.width,gt.height,0,Ne,Ee,gt.data)}}else{k?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,Ee,pe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Ne,Ee,pe[te]);for(let Pe=0;Pe<de.length;Pe++){const He=de[Pe];k?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,Ne,Ee,He.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,qe,Ne,Ee,He.image[te])}}}p(M)&&u(t.TEXTURE_CUBE_MAP),ee.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function oe(R,M,B,ne,se,ee){const Se=s.convert(B.format,B.colorSpace),he=s.convert(B.type),Ue=y(B.internalFormat,Se,he,B.colorSpace),Be=i.get(M),ue=i.get(B);if(ue.__renderTarget=M,!Be.__hasExternalTextures){const pe=Math.max(1,M.width>>ee),Re=Math.max(1,M.height>>ee);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,ee,Ue,pe,Re,M.depth,0,Se,he,null):n.texImage2D(se,ee,Ue,pe,Re,0,Se,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ot(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,se,ue.__webglTexture,0,I(M)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,se,ue.__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const ne=M.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,ee=E(M.stencilBuffer,se),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ot(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(M),ee,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(M),ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{const ne=M.textures;for(let se=0;se<ne.length;se++){const ee=ne[se],Se=s.convert(ee.format,ee.colorSpace),he=s.convert(ee.type),Ue=y(ee.internalFormat,Se,he,ee.colorSpace);ot(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(M),Ue,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(M),Ue,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ue,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(R,M,B){const ne=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(M.depthTexture);if(se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne){if(se.__webglInit===void 0&&(se.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),U(t.TEXTURE_CUBE_MAP,M.depthTexture);const Be=s.convert(M.depthTexture.format),ue=s.convert(M.depthTexture.type);let pe;M.depthTexture.format===Yi?pe=t.DEPTH_COMPONENT24:M.depthTexture.format===es&&(pe=t.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,pe,M.width,M.height,0,Be,ue,null)}}else z(M.depthTexture,0);const ee=se.__webglTexture,Se=I(M),he=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,Ue=M.depthTexture.format===es?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Yi)ot(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ue,he,ee,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,Ue,he,ee,0);else if(M.depthTexture.format===es)ot(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ue,he,ee,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,Ue,he,ee,0);else throw new Error("Unknown depthTexture format")}function $(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){const se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=ne}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let ne=0;ne<6;ne++)ve(M.__webglFramebuffer[ne],R,ne);else{const ne=R.texture.mipmaps;ne&&ne.length>0?ve(M.__webglFramebuffer[0],R,0):ve(M.__webglFramebuffer,R,0)}else if(B){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=t.createRenderbuffer(),Te(M.__webglDepthbuffer[ne],R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ee)}}else{const ne=R.texture.mipmaps;if(ne&&ne.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Te(M.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ee)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,M,B){const ne=i.get(R);M!==void 0&&oe(ne.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&$(R)}function fe(R){const M=R.texture,B=i.get(R),ne=i.get(M);R.addEventListener("dispose",w);const se=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Se=se.length>1;if(Se||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=M.version,a.memory.textures++),ee){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let Ue=0;Ue<M.mipmaps.length;Ue++)B.__webglFramebuffer[he][Ue]=t.createFramebuffer()}else B.__webglFramebuffer[he]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)B.__webglFramebuffer[he]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Se)for(let he=0,Ue=se.length;he<Ue;he++){const Be=i.get(se[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&ot(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const Ue=se[he];B.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Be=s.convert(Ue.format,Ue.colorSpace),ue=s.convert(Ue.type),pe=y(Ue.internalFormat,Be,ue,Ue.colorSpace,R.isXRRenderTarget===!0),Re=I(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,B.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),U(t.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)oe(B.__webglFramebuffer[he][Ue],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue);else oe(B.__webglFramebuffer[he],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let he=0,Ue=se.length;he<Ue;he++){const Be=se[he],ue=i.get(Be);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,ue.__webglTexture),U(pe,Be),oe(B.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+he,pe,0),p(Be)&&u(pe)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,ne.__webglTexture),U(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)oe(B.__webglFramebuffer[Ue],R,M,t.COLOR_ATTACHMENT0,he,Ue);else oe(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,he,0);p(M)&&u(he),n.unbindTexture()}R.depthBuffer&&$(R)}function Fe(R){const M=R.textures;for(let B=0,ne=M.length;B<ne;B++){const se=M[B];if(p(se)){const ee=g(R),Se=i.get(se).__webglTexture;n.bindTexture(ee,Se),u(ee),n.unbindTexture()}}}const Ve=[],ze=[];function Qe(R){if(R.samples>0){if(ot(R)===!1){const M=R.textures,B=R.width,ne=R.height;let se=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),he=M.length>1;if(he)for(let Be=0;Be<M.length;Be++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ue=R.texture.mipmaps;Ue&&Ue.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Be=0;Be<M.length;Be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Be]);const ue=i.get(M[Be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,B,ne,0,0,B,ne,se,t.NEAREST),l===!0&&(Ve.length=0,ze.length=0,Ve.push(t.COLOR_ATTACHMENT0+Be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push(ee),ze.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Be=0;Be<M.length;Be++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Be]);const ue=i.get(M[Be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function I(R){return Math.min(r.maxSamples,R.samples)}function ot(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(R){const M=a.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function Ke(R,M){const B=R.colorSpace,ne=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ca&&B!==mr&&(nt.getTransfer(B)===ct?(ne!==si||se!==Gn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",B)),M}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=j,this.setTexture3D=O,this.setTextureCube=V,this.rebindTextures=ie,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function TI(t,e){function n(i,r=mr){let s;const a=nt.getTransfer(r);if(i===Gn)return t.UNSIGNED_BYTE;if(i===ep)return t.UNSIGNED_SHORT_4_4_4_4;if(i===tp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Kv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===qv)return t.BYTE;if(i===Yv)return t.SHORT;if(i===xo)return t.UNSIGNED_SHORT;if(i===Qh)return t.INT;if(i===Ti)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===qi)return t.HALF_FLOAT;if(i===Jv)return t.ALPHA;if(i===Qv)return t.RGB;if(i===si)return t.RGBA;if(i===Yi)return t.DEPTH_COMPONENT;if(i===es)return t.DEPTH_STENCIL;if(i===ex)return t.RED;if(i===np)return t.RED_INTEGER;if(i===la)return t.RG;if(i===ip)return t.RG_INTEGER;if(i===rp)return t.RGBA_INTEGER;if(i===zl||i===Vl||i===Hl||i===Gl)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_f||i===vf||i===xf||i===yf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_f)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sf||i===Ef||i===Mf||i===Tf||i===wf||i===Cf||i===bf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sf||i===Ef)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tf)return s.COMPRESSED_R11_EAC;if(i===wf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Cf)return s.COMPRESSED_RG11_EAC;if(i===bf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Af||i===Rf||i===Pf||i===Nf||i===Lf||i===Df||i===If||i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===zf||i===Vf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Af)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Df)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===If)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ff)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Of)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hf||i===Gf||i===jf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hf)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wf||i===$f||i===Xf||i===qf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$f)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const wI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CI=`
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

}`;class bI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ux(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ci({vertexShader:wI,fragmentShader:CI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wi(new Lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AI extends ga{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,v=null;const S=typeof XRWebGLBinding<"u",p=new bI,u={},g=n.getContextAttributes();let y=null,E=null;const T=[],b=[],w=new pt;let x=null;const C=new ii;C.viewport=new Dt;const D=new ii;D.viewport=new Dt;const N=[C,D],P=new kP;let F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=T[q];return re===void 0&&(re=new Fu,T[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=T[q];return re===void 0&&(re=new Fu,T[q]=re),re.getGripSpace()},this.getHand=function(q){let re=T[q];return re===void 0&&(re=new Fu,T[q]=re),re.getHandSpace()};function z(q){const re=b.indexOf(q.inputSource);if(re===-1)return;const oe=T[re];oe!==void 0&&(oe.update(q.inputSource,q.frame,c||a),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",O);for(let q=0;q<T.length;q++){const re=b[q];re!==null&&(b[q]=null,T[q].disconnect(re))}F=null,W=null,p.reset();for(const q in u)delete u[q];e.setRenderTarget(y),m=null,d=null,h=null,r=null,E=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Te=null,ve=null;g.depth&&(ve=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=g.stencil?es:Yi,Te=g.stencil?yo:Ti);const $={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer($),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ei(d.textureWidth,d.textureHeight,{format:si,type:Gn,depthTexture:new So(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Ei(m.framebufferWidth,m.framebufferHeight,{format:si,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(q){for(let re=0;re<q.removed.length;re++){const oe=q.removed[re],Te=b.indexOf(oe);Te>=0&&(b[Te]=null,T[Te].disconnect(oe))}for(let re=0;re<q.added.length;re++){const oe=q.added[re];let Te=b.indexOf(oe);if(Te===-1){for(let $=0;$<T.length;$++)if($>=b.length){b.push(oe),Te=$;break}else if(b[$]===null){b[$]=oe,Te=$;break}if(Te===-1)break}const ve=T[Te];ve&&ve.connect(oe)}}const V=new K,H=new K;function Q(q,re,oe){V.setFromMatrixPosition(re.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const Te=V.distanceTo(H),ve=re.projectionMatrix.elements,$=oe.projectionMatrix.elements,ie=ve[14]/(ve[10]-1),fe=ve[14]/(ve[10]+1),Fe=(ve[9]+1)/ve[5],Ve=(ve[9]-1)/ve[5],ze=(ve[8]-1)/ve[0],Qe=($[8]+1)/$[0],I=ie*ze,ot=ie*Qe,et=Te/(-ze+Qe),Ke=et*-ze;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ke),q.translateZ(et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ve[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ae=ie+et,R=fe+et,M=I-Ke,B=ot+(Te-Ke),ne=Fe*fe/R*Ae,se=Ve*fe/R*Ae;q.projectionMatrix.makePerspective(M,B,ne,se,Ae,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,oe=q.far;p.texture!==null&&(p.depthNear>0&&(re=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),P.near=D.near=C.near=re,P.far=D.far=C.far=oe,(F!==P.near||W!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,W=P.far),P.layers.mask=q.layers.mask|6,C.layers.mask=P.layers.mask&-5,D.layers.mask=P.layers.mask&-3;const Te=q.parent,ve=P.cameras;le(P,Te);for(let $=0;$<ve.length;$++)le(ve[$],Te);ve.length===2?Q(P,C,D):P.projectionMatrix.copy(C.projectionMatrix),U(q,P,Te)};function U(q,re,oe){oe===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(q){return u[q]};let ae=null;function Me(q,re){if(f=re.getViewerPose(c||a),v=re,f!==null){const oe=f.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Te=!1;oe.length!==P.cameras.length&&(P.cameras.length=0,Te=!0);for(let fe=0;fe<oe.length;fe++){const Fe=oe[fe];let Ve=null;if(m!==null)Ve=m.getViewport(Fe);else{const Qe=h.getViewSubImage(d,Fe);Ve=Qe.viewport,fe===0&&(e.setRenderTargetTextures(E,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(E))}let ze=N[fe];ze===void 0&&(ze=new ii,ze.layers.enable(fe),ze.viewport=new Dt,N[fe]=ze),ze.matrix.fromArray(Fe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Fe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),fe===0&&(P.matrix.copy(ze.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Te===!0&&P.cameras.push(ze)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const fe=h.getDepthInformation(oe[0]);fe&&fe.isValid&&fe.texture&&p.init(fe,r.renderState)}if(ve&&ve.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let fe=0;fe<oe.length;fe++){const Fe=oe[fe].camera;if(Fe){let Ve=u[Fe];Ve||(Ve=new ux,u[Fe]=Ve);const ze=h.getCameraImage(Fe);Ve.sourceTexture=ze}}}}for(let oe=0;oe<T.length;oe++){const Te=b[oe],ve=T[oe];Te!==null&&ve!==void 0&&ve.update(Te,re,c||a)}ae&&ae(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const De=new hx;De.setAnimationLoop(Me),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}const Gr=new Ki,RI=new kt;function PI(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,dx(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,y,E){u.isMeshBasicMaterial?s(p,u):u.isMeshLambertMaterial?(s(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),S(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,y):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===wn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===wn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u),y=g.envMap,E=g.envMapRotation;y&&(p.envMap.value=y,Gr.copy(E),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),p.envMapRotation.value.setFromMatrix4(RI.makeRotationFromEuler(Gr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,y){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=y*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===wn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NI(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const E=y.program;i.uniformBlockBinding(g,E)}function c(g,y){let E=r[g.id];E===void 0&&(v(g),E=f(g),r[g.id]=E,g.addEventListener("dispose",p));const T=y.program;i.updateUBOMapping(g,T);const b=e.render.frame;s[g.id]!==b&&(d(g),s[g.id]=b)}function f(g){const y=h();g.__bindingPointIndex=y;const E=t.createBuffer(),T=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,T,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function h(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const y=r[g.id],E=g.uniforms,T=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let b=0,w=E.length;b<w;b++){const x=Array.isArray(E[b])?E[b]:[E[b]];for(let C=0,D=x.length;C<D;C++){const N=x[C];if(m(N,b,C,T)===!0){const P=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let z=0;z<F.length;z++){const j=F[z],O=S(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,P+W,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,P,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,y,E,T){const b=g.value,w=y+"_"+E;if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:T[w]=b.clone(),!0;{const x=T[w];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return T[w]=b,!0}else if(x.equals(b)===!1)return x.copy(b),!0}return!1}function v(g){const y=g.uniforms;let E=0;const T=16;for(let w=0,x=y.length;w<x;w++){const C=Array.isArray(y[w])?y[w]:[y[w]];for(let D=0,N=C.length;D<N;D++){const P=C[D],F=Array.isArray(P.value)?P.value:[P.value];for(let W=0,z=F.length;W<z;W++){const j=F[W],O=S(j),V=E%T,H=V%O.boundary,Q=V+H;E+=H,Q!==0&&T-Q<O.storage&&(E+=T-Q),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=O.storage}}}const b=E%T;return b>0&&(E+=T-b),g.__size=E,g.__cache={},this}function S(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",g),y}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const LI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function DI(){return hi===null&&(hi=new wP(LI,16,16,la,qi),hi.name="DFG_LUT",hi.minFilter=an,hi.magFilter=an,hi.wrapS=Bi,hi.wrapT=Bi,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class II{constructor(e={}){const{canvas:n=tP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Gn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const S=m,p=new Set([rp,ip,np]),u=new Set([Gn,Ti,xo,yo,ep,tp]),g=new Uint32Array(4),y=new Int32Array(4);let E=null,T=null;const b=[],w=[];let x=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=zn;let N=0,P=0,F=null,W=-1,z=null;const j=new Dt,O=new Dt;let V=null;const H=new ht(0);let Q=0,le=n.width,U=n.height,ae=1,Me=null,De=null;const q=new Dt(0,0,le,U),re=new Dt(0,0,le,U);let oe=!1;const Te=new lx;let ve=!1,$=!1;const ie=new kt,fe=new K,Fe=new Dt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Qe(){return F===null?ae:1}let I=i;function ot(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jh}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",gt,!1),I===null){const G="webgl2";if(I=ot(G,A),I===null)throw ot(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw st("WebGLRenderer: "+A.message),A}let et,Ke,Ae,R,M,B,ne,se,ee,Se,he,Ue,Be,ue,pe,Re,Ne,Ee,qe,k,ge,me,be;function de(){et=new IL(I),et.init(),ge=new TI(I,et),Ke=new CL(I,et,e,ge),Ae=new EI(I,et),Ke.reversedDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),R=new OL(I),M=new lI,B=new MI(I,et,Ae,M,Ke,ge,R),ne=new DL(C),se=new HP(I),me=new TL(I,se),ee=new UL(I,se,R,me),Se=new BL(I,ee,se,me,R),Ee=new kL(I,Ke,B),pe=new bL(M),he=new oI(C,ne,et,Ke,me,pe),Ue=new PI(C,M),Be=new uI,ue=new gI(et),Ne=new ML(C,ne,Ae,Se,v,l),Re=new SI(C,Se,Ke),be=new NI(I,R,Ke,Ae),qe=new wL(I,et,R),k=new FL(I,et,R),R.programs=he.programs,C.capabilities=Ke,C.extensions=et,C.properties=M,C.renderLists=Be,C.shadowMap=Re,C.state=Ae,C.info=R}de(),S!==Gn&&(x=new VL(S,n.width,n.height,r,s));const te=new AI(C,I);this.xr=te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(le,U,!1))},this.getSize=function(A){return A.set(le,U)},this.setSize=function(A,G,Z=!0){if(te.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,U=G,n.width=Math.floor(A*ae),n.height=Math.floor(G*ae),Z===!0&&(n.style.width=A+"px",n.style.height=G+"px"),x!==null&&x.setSize(n.width,n.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(le*ae,U*ae).floor()},this.setDrawingBufferSize=function(A,G,Z){le=A,U=G,ae=Z,n.width=Math.floor(A*Z),n.height=Math.floor(G*Z),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(S===Gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(q)},this.setViewport=function(A,G,Z,Y){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,G,Z,Y),Ae.viewport(j.copy(q).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,G,Z,Y){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,G,Z,Y),Ae.scissor(O.copy(re).multiplyScalar(ae).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){Ae.setScissorTest(oe=A)},this.setOpaqueSort=function(A){Me=A},this.setTransparentSort=function(A){De=A},this.getClearColor=function(A){return A.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,Z=!0){let Y=0;if(A){let X=!1;if(F!==null){const xe=F.texture.format;X=p.has(xe)}if(X){const xe=F.texture.type,we=u.has(xe),ye=Ne.getClearColor(),Le=Ne.getClearAlpha(),Oe=ye.r,je=ye.g,Ye=ye.b;we?(g[0]=Oe,g[1]=je,g[2]=Ye,g[3]=Le,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Oe,y[1]=je,y[2]=Ye,y[3]=Le,I.clearBufferiv(I.COLOR,0,y))}else Y|=I.COLOR_BUFFER_BIT}G&&(Y|=I.DEPTH_BUFFER_BIT),Z&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",gt,!1),Ne.dispose(),Be.dispose(),ue.dispose(),M.dispose(),ne.dispose(),Se.dispose(),me.dispose(),be.dispose(),he.dispose(),te.dispose(),te.removeEventListener("sessionstart",dp),te.removeEventListener("sessionend",fp),Ur.stop()};function Pe(A){A.preventDefault(),fg("WebGLRenderer: Context Lost."),D=!0}function He(){fg("WebGLRenderer: Context Restored."),D=!1;const A=R.autoReset,G=Re.enabled,Z=Re.autoUpdate,Y=Re.needsUpdate,X=Re.type;de(),R.autoReset=A,Re.enabled=G,Re.autoUpdate=Z,Re.needsUpdate=Y,Re.type=X}function gt(A){st("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){const G=A.target;G.removeEventListener("dispose",lt),Ci(G)}function Ci(A){bi(A),M.remove(A)}function bi(A){const G=M.get(A).programs;G!==void 0&&(G.forEach(function(Z){he.releaseProgram(Z)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Z,Y,X,xe){G===null&&(G=Ve);const we=X.isMesh&&X.matrixWorld.determinant()<0,ye=yx(A,G,Z,Y,X);Ae.setMaterial(Y,we);let Le=Z.index,Oe=1;if(Y.wireframe===!0){if(Le=ee.getWireframeAttribute(Z),Le===void 0)return;Oe=2}const je=Z.drawRange,Ye=Z.attributes.position;let ke=je.start*Oe,dt=(je.start+je.count)*Oe;xe!==null&&(ke=Math.max(ke,xe.start*Oe),dt=Math.min(dt,(xe.start+xe.count)*Oe)),Le!==null?(ke=Math.max(ke,0),dt=Math.min(dt,Le.count)):Ye!=null&&(ke=Math.max(ke,0),dt=Math.min(dt,Ye.count));const Nt=dt-ke;if(Nt<0||Nt===1/0)return;me.setup(X,Y,ye,Z,Le);let At,ft=qe;if(Le!==null&&(At=se.get(Le),ft=k,ft.setIndex(At)),X.isMesh)Y.wireframe===!0?(Ae.setLineWidth(Y.wireframeLinewidth*Qe()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(X.isLine){let Jt=Y.linewidth;Jt===void 0&&(Jt=1),Ae.setLineWidth(Jt*Qe()),X.isLineSegments?ft.setMode(I.LINES):X.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else X.isPoints?ft.setMode(I.POINTS):X.isSprite&&ft.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ec("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Jt=X._multiDrawStarts,Ie=X._multiDrawCounts,bn=X._multiDrawCount,rt=Le?se.get(Le).bytesPerElement:1,Yn=M.get(Y).currentProgram.getUniforms();for(let ui=0;ui<bn;ui++)Yn.setValue(I,"_gl_DrawID",ui),ft.render(Jt[ui]/rt,Ie[ui])}else if(X.isInstancedMesh)ft.renderInstances(ke,Nt,X.count);else if(Z.isInstancedBufferGeometry){const Jt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ie=Math.min(Z.instanceCount,Jt);ft.renderInstances(ke,Nt,Ie)}else ft.render(ke,Nt)};function up(A,G,Z){A.transparent===!0&&A.side===Fi&&A.forceSinglePass===!1?(A.side=wn,A.needsUpdate=!0,Io(A,G,Z),A.side=Nr,A.needsUpdate=!0,Io(A,G,Z),A.side=Fi):Io(A,G,Z)}this.compile=function(A,G,Z=null){Z===null&&(Z=A),T=ue.get(Z),T.init(G),w.push(T),Z.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),A!==Z&&A.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights();const Y=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const ye=xe[we];up(ye,Z,X),Y.add(ye)}else up(xe,Z,X),Y.add(xe)}),T=w.pop(),Y},this.compileAsync=function(A,G,Z=null){const Y=this.compile(A,G,Z);return new Promise(X=>{function xe(){if(Y.forEach(function(we){M.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){X(A);return}setTimeout(xe,10)}et.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let $c=null;function xx(A){$c&&$c(A)}function dp(){Ur.stop()}function fp(){Ur.start()}const Ur=new hx;Ur.setAnimationLoop(xx),typeof self<"u"&&Ur.setContext(self),this.setAnimationLoop=function(A){$c=A,te.setAnimationLoop(A),A===null?Ur.stop():Ur.start()},te.addEventListener("sessionstart",dp),te.addEventListener("sessionend",fp),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const Z=te.enabled===!0&&te.isPresenting===!0,Y=x!==null&&(F===null||Z)&&x.begin(C,F);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(G),G=te.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,G,F),T=ue.get(A,w.length),T.init(G),w.push(T),ie.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Te.setFromProjectionMatrix(ie,vi,G.reversedDepth),$=this.localClippingEnabled,ve=pe.init(this.clippingPlanes,$),E=Be.get(A,b.length),E.init(),b.push(E),te.enabled===!0&&te.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&Xc(we,G,-1/0,C.sortObjects)}Xc(A,G,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(Me,De),ze=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ze&&Ne.addToRenderList(E,A),this.info.render.frame++,ve===!0&&pe.beginShadows();const X=T.state.shadowsArray;if(Re.render(X,A,G),ve===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&x.hasRenderPass())===!1){const we=E.opaque,ye=E.transmissive;if(T.setupLights(),G.isArrayCamera){const Le=G.cameras;if(ye.length>0)for(let Oe=0,je=Le.length;Oe<je;Oe++){const Ye=Le[Oe];pp(we,ye,A,Ye)}ze&&Ne.render(A);for(let Oe=0,je=Le.length;Oe<je;Oe++){const Ye=Le[Oe];hp(E,A,Ye,Ye.viewport)}}else ye.length>0&&pp(we,ye,A,G),ze&&Ne.render(A),hp(E,A,G)}F!==null&&P===0&&(B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F)),Y&&x.end(C),A.isScene===!0&&A.onAfterRender(C,A,G),me.resetDefaultState(),W=-1,z=null,w.pop(),w.length>0?(T=w[w.length-1],ve===!0&&pe.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?E=b[b.length-1]:E=null};function Xc(A,G,Z,Y){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Te.intersectsSprite(A)){Y&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ie);const we=Se.update(A),ye=A.material;ye.visible&&E.push(A,we,ye,Z,Fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Te.intersectsObject(A))){const we=Se.update(A),ye=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Fe.copy(we.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(ie)),Array.isArray(ye)){const Le=we.groups;for(let Oe=0,je=Le.length;Oe<je;Oe++){const Ye=Le[Oe],ke=ye[Ye.materialIndex];ke&&ke.visible&&E.push(A,we,ke,Z,Fe.z,Ye)}}else ye.visible&&E.push(A,we,ye,Z,Fe.z,null)}}const xe=A.children;for(let we=0,ye=xe.length;we<ye;we++)Xc(xe[we],G,Z,Y)}function hp(A,G,Z,Y){const{opaque:X,transmissive:xe,transparent:we}=A;T.setupLightsView(Z),ve===!0&&pe.setGlobalState(C.clippingPlanes,Z),Y&&Ae.viewport(j.copy(Y)),X.length>0&&Do(X,G,Z),xe.length>0&&Do(xe,G,Z),we.length>0&&Do(we,G,Z),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function pp(A,G,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){const ke=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new Ei(1,1,{generateMipmaps:!0,type:ke?qi:Gn,minFilter:Qr,samples:Math.max(4,Ke.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const xe=T.state.transmissionRenderTarget[Y.id],we=Y.viewport||j;xe.setSize(we.z*C.transmissionResolutionScale,we.w*C.transmissionResolutionScale);const ye=C.getRenderTarget(),Le=C.getActiveCubeFace(),Oe=C.getActiveMipmapLevel();C.setRenderTarget(xe),C.getClearColor(H),Q=C.getClearAlpha(),Q<1&&C.setClearColor(16777215,.5),C.clear(),ze&&Ne.render(Z);const je=C.toneMapping;C.toneMapping=Si;const Ye=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),ve===!0&&pe.setGlobalState(C.clippingPlanes,Y),Do(A,Z,Y),B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe),et.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let dt=0,Nt=G.length;dt<Nt;dt++){const At=G[dt],{object:ft,geometry:Jt,material:Ie,group:bn}=At;if(Ie.side===Fi&&ft.layers.test(Y.layers)){const rt=Ie.side;Ie.side=wn,Ie.needsUpdate=!0,mp(ft,Z,Y,Jt,Ie,bn),Ie.side=rt,Ie.needsUpdate=!0,ke=!0}}ke===!0&&(B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe))}C.setRenderTarget(ye,Le,Oe),C.setClearColor(H,Q),Ye!==void 0&&(Y.viewport=Ye),C.toneMapping=je}function Do(A,G,Z){const Y=G.isScene===!0?G.overrideMaterial:null;for(let X=0,xe=A.length;X<xe;X++){const we=A[X],{object:ye,geometry:Le,group:Oe}=we;let je=we.material;je.allowOverride===!0&&Y!==null&&(je=Y),ye.layers.test(Z.layers)&&mp(ye,G,Z,Le,je,Oe)}}function mp(A,G,Z,Y,X,xe){A.onBeforeRender(C,G,Z,Y,X,xe),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(C,G,Z,Y,A,xe),X.transparent===!0&&X.side===Fi&&X.forceSinglePass===!1?(X.side=wn,X.needsUpdate=!0,C.renderBufferDirect(Z,G,Y,X,A,xe),X.side=Nr,X.needsUpdate=!0,C.renderBufferDirect(Z,G,Y,X,A,xe),X.side=Fi):C.renderBufferDirect(Z,G,Y,X,A,xe),A.onAfterRender(C,G,Z,Y,X,xe)}function Io(A,G,Z){G.isScene!==!0&&(G=Ve);const Y=M.get(A),X=T.state.lights,xe=T.state.shadowsArray,we=X.state.version,ye=he.getParameters(A,X.state,xe,G,Z),Le=he.getProgramCacheKey(ye);let Oe=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;const je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=ne.get(A.envMap||Y.environment,je),Y.envMapRotation=Y.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",lt),Oe=new Map,Y.programs=Oe);let Ye=Oe.get(Le);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===we)return _p(A,ye),Ye}else ye.uniforms=he.getUniforms(A),A.onBeforeCompile(ye,C),Ye=he.acquireProgram(ye,Le),Oe.set(Le,Ye),Y.uniforms=ye.uniforms;const ke=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=pe.uniform),_p(A,ye),Y.needsLights=Ex(A),Y.lightsStateVersion=we,Y.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Ye,Y.uniformsList=null,Ye}function gp(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=jl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function _p(A,G){const Z=M.get(A);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function yx(A,G,Z,Y,X){G.isScene!==!0&&(G=Ve),B.resetTextureUnits();const xe=G.fog,we=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,ye=F===null?C.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ca,Le=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Oe=ne.get(Y.envMap||we,Le),je=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ye=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,Nt=!!Z.morphAttributes.color;let At=Si;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(At=C.toneMapping);const ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Jt=ft!==void 0?ft.length:0,Ie=M.get(Y),bn=T.state.lights;if(ve===!0&&($===!0||A!==z)){const Gt=A===z&&Y.id===W;pe.setState(Y,A,Gt)}let rt=!1;Y.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==bn.state.version||Ie.outputColorSpace!==ye||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==Oe||Y.fog===!0&&Ie.fog!==xe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==pe.numPlanes||Ie.numIntersection!==pe.numIntersection)||Ie.vertexAlphas!==je||Ie.vertexTangents!==Ye||Ie.morphTargets!==ke||Ie.morphNormals!==dt||Ie.morphColors!==Nt||Ie.toneMapping!==At||Ie.morphTargetsCount!==Jt)&&(rt=!0):(rt=!0,Ie.__version=Y.version);let Yn=Ie.currentProgram;rt===!0&&(Yn=Io(Y,G,X));let ui=!1,Fr=!1,ms=!1;const mt=Yn.getUniforms(),Xt=Ie.uniforms;if(Ae.useProgram(Yn.program)&&(ui=!0,Fr=!0,ms=!0),Y.id!==W&&(W=Y.id,Fr=!0),ui||z!==A){Ae.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),mt.setValue(I,"projectionMatrix",A.projectionMatrix),mt.setValue(I,"viewMatrix",A.matrixWorldInverse);const er=mt.map.cameraPosition;er!==void 0&&er.setValue(I,fe.setFromMatrixPosition(A.matrixWorld)),Ke.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,Fr=!0,ms=!0)}if(Ie.needsLights&&(bn.state.directionalShadowMap.length>0&&mt.setValue(I,"directionalShadowMap",bn.state.directionalShadowMap,B),bn.state.spotShadowMap.length>0&&mt.setValue(I,"spotShadowMap",bn.state.spotShadowMap,B),bn.state.pointShadowMap.length>0&&mt.setValue(I,"pointShadowMap",bn.state.pointShadowMap,B)),X.isSkinnedMesh){mt.setOptional(I,X,"bindMatrix"),mt.setOptional(I,X,"bindMatrixInverse");const Gt=X.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),mt.setValue(I,"boneTexture",Gt.boneTexture,B))}X.isBatchedMesh&&(mt.setOptional(I,X,"batchingTexture"),mt.setValue(I,"batchingTexture",X._matricesTexture,B),mt.setOptional(I,X,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",X._indirectTexture,B),mt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",X._colorsTexture,B));const Qi=Z.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&Ee.update(X,Z,Yn),(Fr||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,mt.setValue(I,"receiveShadow",X.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(Xt.envMapIntensity.value=G.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=DI()),Fr&&(mt.setValue(I,"toneMappingExposure",C.toneMappingExposure),Ie.needsLights&&Sx(Xt,ms),xe&&Y.fog===!0&&Ue.refreshFogUniforms(Xt,xe),Ue.refreshMaterialUniforms(Xt,Y,ae,U,T.state.transmissionRenderTarget[A.id]),jl.upload(I,gp(Ie),Xt,B)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(jl.upload(I,gp(Ie),Xt,B),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(I,"center",X.center),mt.setValue(I,"modelViewMatrix",X.modelViewMatrix),mt.setValue(I,"normalMatrix",X.normalMatrix),mt.setValue(I,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Gt=Y.uniformsGroups;for(let er=0,gs=Gt.length;er<gs;er++){const vp=Gt[er];be.update(vp,Yn),be.bind(vp,Yn)}}return Yn}function Sx(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Ex(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,G,Z){const Y=M.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=G,M.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const Z=M.get(A);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const Mx=I.createFramebuffer();this.setRenderTarget=function(A,G=0,Z=0){F=A,N=G,P=Z;let Y=null,X=!1,xe=!1;if(A){const ye=M.get(A);if(ye.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(I.FRAMEBUFFER,ye.__webglFramebuffer),j.copy(A.viewport),O.copy(A.scissor),V=A.scissorTest,Ae.viewport(j),Ae.scissor(O),Ae.setScissorTest(V),W=-1;return}else if(ye.__webglFramebuffer===void 0)B.setupRenderTarget(A);else if(ye.__hasExternalTextures)B.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(ye.__boundDepthTexture!==je){if(je!==null&&M.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(A)}}const Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(xe=!0);const Oe=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[G])?Y=Oe[G][Z]:Y=Oe[G],X=!0):A.samples>0&&B.useMultisampledRTT(A)===!1?Y=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?Y=Oe[Z]:Y=Oe,j.copy(A.viewport),O.copy(A.scissor),V=A.scissorTest}else j.copy(q).multiplyScalar(ae).floor(),O.copy(re).multiplyScalar(ae).floor(),V=oe;if(Z!==0&&(Y=Mx),Ae.bindFramebuffer(I.FRAMEBUFFER,Y)&&Ae.drawBuffers(A,Y),Ae.viewport(j),Ae.scissor(O),Ae.setScissorTest(V),X){const ye=M.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,ye.__webglTexture,Z)}else if(xe){const ye=G;for(let Le=0;Le<A.textures.length;Le++){const Oe=M.get(A.textures[Le]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,Z,ye)}}else if(A!==null&&Z!==0){const ye=M.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ye.__webglTexture,Z)}W=-1},this.readRenderTargetPixels=function(A,G,Z,Y,X,xe,we,ye=0){if(!(A&&A.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){Ae.bindFramebuffer(I.FRAMEBUFFER,Le);try{const Oe=A.textures[ye],je=Oe.format,Ye=Oe.type;if(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),!Ke.textureFormatReadable(je)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ye)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-Y&&Z>=0&&Z<=A.height-X&&I.readPixels(G,Z,Y,X,ge.convert(je),ge.convert(Ye),xe)}finally{const Oe=F!==null?M.get(F).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,G,Z,Y,X,xe,we,ye=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le)if(G>=0&&G<=A.width-Y&&Z>=0&&Z<=A.height-X){Ae.bindFramebuffer(I.FRAMEBUFFER,Le);const Oe=A.textures[ye],je=Oe.format,Ye=Oe.type;if(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),!Ke.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),I.readPixels(G,Z,Y,X,ge.convert(je),ge.convert(Ye),0);const dt=F!==null?M.get(F).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,dt);const Nt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await nP(I,Nt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(ke),I.deleteSync(Nt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,Z=0){const Y=Math.pow(2,-Z),X=Math.floor(A.image.width*Y),xe=Math.floor(A.image.height*Y),we=G!==null?G.x:0,ye=G!==null?G.y:0;B.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,we,ye,X,xe),Ae.unbindTexture()};const Tx=I.createFramebuffer(),wx=I.createFramebuffer();this.copyTextureToTexture=function(A,G,Z=null,Y=null,X=0,xe=0){let we,ye,Le,Oe,je,Ye,ke,dt,Nt;const At=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(Z!==null)we=Z.max.x-Z.min.x,ye=Z.max.y-Z.min.y,Le=Z.isBox3?Z.max.z-Z.min.z:1,Oe=Z.min.x,je=Z.min.y,Ye=Z.isBox3?Z.min.z:0;else{const Xt=Math.pow(2,-X);we=Math.floor(At.width*Xt),ye=Math.floor(At.height*Xt),A.isDataArrayTexture?Le=At.depth:A.isData3DTexture?Le=Math.floor(At.depth*Xt):Le=1,Oe=0,je=0,Ye=0}Y!==null?(ke=Y.x,dt=Y.y,Nt=Y.z):(ke=0,dt=0,Nt=0);const ft=ge.convert(G.format),Jt=ge.convert(G.type);let Ie;G.isData3DTexture?(B.setTexture3D(G,0),Ie=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(B.setTexture2DArray(G,0),Ie=I.TEXTURE_2D_ARRAY):(B.setTexture2D(G,0),Ie=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const bn=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Yn=I.getParameter(I.UNPACK_SKIP_PIXELS),ui=I.getParameter(I.UNPACK_SKIP_ROWS),Fr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Oe),I.pixelStorei(I.UNPACK_SKIP_ROWS,je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ye);const ms=A.isDataArrayTexture||A.isData3DTexture,mt=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Xt=M.get(A),Qi=M.get(G),Gt=M.get(Xt.__renderTarget),er=M.get(Qi.__renderTarget);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let gs=0;gs<Le;gs++)ms&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,M.get(A).__webglTexture,X,Ye+gs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,M.get(G).__webglTexture,xe,Nt+gs)),I.blitFramebuffer(Oe,je,we,ye,ke,dt,we,ye,I.DEPTH_BUFFER_BIT,I.NEAREST);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||M.has(A)){const Xt=M.get(A),Qi=M.get(G);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,Tx),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,wx);for(let Gt=0;Gt<Le;Gt++)ms?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.__webglTexture,X,Ye+Gt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xt.__webglTexture,X),mt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qi.__webglTexture,xe,Nt+Gt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qi.__webglTexture,xe),X!==0?I.blitFramebuffer(Oe,je,we,ye,ke,dt,we,ye,I.COLOR_BUFFER_BIT,I.NEAREST):mt?I.copyTexSubImage3D(Ie,xe,ke,dt,Nt+Gt,Oe,je,we,ye):I.copyTexSubImage2D(Ie,xe,ke,dt,Oe,je,we,ye);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else mt?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ie,xe,ke,dt,Nt,we,ye,Le,ft,Jt,At.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(Ie,xe,ke,dt,Nt,we,ye,Le,ft,At.data):I.texSubImage3D(Ie,xe,ke,dt,Nt,we,ye,Le,ft,Jt,At):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,ke,dt,we,ye,ft,Jt,At.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,ke,dt,At.width,At.height,ft,At.data):I.texSubImage2D(I.TEXTURE_2D,xe,ke,dt,we,ye,ft,Jt,At);I.pixelStorei(I.UNPACK_ROW_LENGTH,bn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Yn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ui),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fr),xe===0&&G.generateMipmaps&&I.generateMipmap(Ie),Ae.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&B.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?B.setTextureCube(A,0):A.isData3DTexture?B.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?B.setTexture2DArray(A,0):B.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){N=0,P=0,F=null,Ae.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}const UI=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,FI=`
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
`;function sd({intensity:t=1,className:e,style:n}){const i=L.useRef(null);return L.useEffect(()=>{const r=i.current;if(!r)return;const s=new II({alpha:!0,antialias:!0,premultipliedAlpha:!1});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.setClearColor(0,0),r.appendChild(s.domElement),s.domElement.style.display="block",s.domElement.style.width="100%",s.domElement.style.height="100%";const a=new vP,o=new cp(-1,1,1,-1,0,1),l={uTime:{value:0},uIntensity:{value:t}},c=new ci({uniforms:l,vertexShader:UI,fragmentShader:FI,transparent:!0,depthWrite:!1}),f=new Lo(2,2),h=new wi(f,c);a.add(h);const d=()=>{const y=Math.max(1,r.clientWidth),E=Math.max(1,r.clientHeight);s.setSize(y,E,!1)};d();const m=new ResizeObserver(d);m.observe(r);const v=new BP;let S=0,p=!0;const u=()=>{p&&(v.update(),l.uTime.value=v.getElapsed(),s.render(a,o),S=requestAnimationFrame(u))};u();const g=()=>{document.hidden?(p=!1,cancelAnimationFrame(S)):p||(p=!0,u())};return document.addEventListener("visibilitychange",g),()=>{p=!1,cancelAnimationFrame(S),document.removeEventListener("visibilitychange",g),m.disconnect(),s.domElement.parentNode===r&&r.removeChild(s.domElement),f.dispose(),c.dispose(),s.dispose()}},[t]),_.jsx("div",{ref:i,className:e,"aria-hidden":"true",style:{position:"absolute",inset:0,borderRadius:"50%",overflow:"hidden",pointerEvents:"none",...n}})}const OI="_launcher_1a40a_1",kI="_fadeOut_1a40a_14",BI="_backdrop_1a40a_19",zI="_connectors_1a40a_28",VI="_connector_1a40a_28",HI="_connectorVisible_1a40a_44",GI="_node_1a40a_49",jI="_hero_1a40a_75",WI="_heroLabel_1a40a_83",$I="_heroDim_1a40a_97",XI="_heroGone_1a40a_109",qI="_heroGenerating_1a40a_115",YI="_loadingPanel_1a40a_125",KI="_loadingPanelShown_1a40a_139",ZI="_loadingLabel_1a40a_143",JI="_loadingTopic_1a40a_151",QI="_child_1a40a_158",eU="_childSW_1a40a_166",tU="_childSE_1a40a_171",nU="_childShown_1a40a_176",iU="_childLabel_1a40a_191",rU="_childFaded_1a40a_207",sU="_childChosen_1a40a_214",aU="_panel_1a40a_229",oU="_panelShown_1a40a_246",lU="_panelLabel_1a40a_252",cU="_panelHint_1a40a_260",uU="_textarea_1a40a_267",dU="_generate_1a40a_290",fU="_generateText_1a40a_313",hU="_generateShimmer_1a40a_322",We={launcher:OI,fadeOut:kI,backdrop:BI,connectors:zI,connector:VI,connectorVisible:HI,node:GI,hero:jI,heroLabel:WI,heroDim:$I,heroGone:XI,heroGenerating:qI,loadingPanel:YI,loadingPanelShown:KI,loadingLabel:ZI,loadingTopic:JI,child:QI,childSW:eU,childSE:tU,childShown:nU,childLabel:iU,childFaded:rU,childChosen:sU,panel:aU,panelShown:oU,panelLabel:lU,panelHint:cU,textarea:uU,generate:dU,generateText:fU,generateShimmer:hU},Qg="wikiloop.launcher.seen";function pU(){const t=Ao(),{generateTree:e}=ma(),[n,i]=L.useState("idle"),[r,s]=L.useState(null),[a,o]=L.useState(""),[l,c]=L.useState(!1),[f,h]=L.useState(!1),[d,m]=L.useState(()=>{try{return sessionStorage.getItem(Qg)==="1"}catch{return!1}}),v=L.useRef(null);if(L.useEffect(()=>{if(n==="prompting"&&v.current&&!f){const C=setTimeout(()=>{var D;return(D=v.current)==null?void 0:D.focus()},420);return()=>clearTimeout(C)}},[n,f]),d)return null;const S=()=>{c(!0);try{sessionStorage.setItem(Qg,"1")}catch{}setTimeout(()=>m(!0),520)},p=()=>{n==="idle"&&i("selecting")},u=C=>{n==="selecting"&&(s(C),i("prompting"))},g=async()=>{const C=a.trim();if(!C||f)return;if(h(!0),r==="skilltree"){try{await e(C),S()}catch{h(!1)}return}const D=()=>{window.removeEventListener("explore:ready",D),S()};window.addEventListener("explore:ready",D),t(`/explore?q=${encodeURIComponent(C)}`),setTimeout(()=>{window.removeEventListener("explore:ready",D),l||S()},15e3)},y=C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),g())},E=n==="selecting",T=n==="prompting",b=r==="skilltree"?"SKILL TREE MODE":"WIKI HOPPER MODE",w=r==="skilltree"?"Enter a topic or skill to map — e.g. Machine Learning, Music Theory, Photography":"Enter a concept to explore — e.g. Quantum mechanics, Jazz, Byzantine Empire",x=r==="skilltree"?"Growing skill tree":"Loading concept";return _.jsxs("div",{className:`${We.launcher} ${l?We.fadeOut:""}`,"aria-hidden":l,children:[_.jsx("div",{className:We.backdrop}),_.jsxs("svg",{className:We.connectors,"aria-hidden":"true",children:[_.jsx("line",{x1:"50%",y1:"50%",x2:"calc(50% - 290px)",y2:"calc(50% + 240px)",className:`${We.connector} ${E?We.connectorVisible:""}`}),_.jsx("line",{x1:"50%",y1:"50%",x2:"calc(50% + 290px)",y2:"calc(50% + 240px)",className:`${We.connector} ${E?We.connectorVisible:""}`})]}),_.jsxs("button",{type:"button",onClick:p,className:`${We.node} ${We.hero} ${E?We.heroDim:""} ${T&&!f?We.heroGone:""} ${f?We.heroGenerating:""}`,disabled:n!=="idle"||f,"aria-label":"Begin",children:[_.jsx(sd,{intensity:f?1.6:1.15}),!f&&_.jsx("span",{className:We.heroLabel,children:"BRANCHER"})]}),_.jsxs("button",{type:"button",onClick:()=>u("skilltree"),className:`${We.node} ${We.child} ${We.childSW} ${E||T?We.childShown:""} ${T&&r!=="skilltree"?We.childFaded:""} ${T&&r==="skilltree"?We.childChosen:""} ${f?We.childFaded:""}`,"aria-label":"Skill Tree mode",tabIndex:E?0:-1,disabled:f,children:[_.jsx(sd,{intensity:.95}),_.jsxs("span",{className:We.childLabel,children:["SKILL",_.jsx("br",{}),"TREE"]})]}),_.jsxs("button",{type:"button",onClick:()=>u("wikihopper"),className:`${We.node} ${We.child} ${We.childSE} ${E||T?We.childShown:""} ${T&&r!=="wikihopper"?We.childFaded:""} ${T&&r==="wikihopper"?We.childChosen:""} ${f?We.childFaded:""}`,"aria-label":"Wiki Hopper mode",tabIndex:E?0:-1,disabled:f,children:[_.jsx(sd,{intensity:.95}),_.jsxs("span",{className:We.childLabel,children:["WIKI",_.jsx("br",{}),"HOPPER"]})]}),!f&&_.jsxs("div",{className:`${We.panel} ${T?We.panelShown:""}`,children:[_.jsx("div",{className:We.panelLabel,children:b}),_.jsx("div",{className:We.panelHint,children:w}),_.jsx("textarea",{ref:v,className:We.textarea,rows:2,value:a,onChange:C=>o(C.target.value),onKeyDown:y,placeholder:"Type a topic..."}),_.jsxs("button",{type:"button",className:We.generate,onClick:g,disabled:!a.trim(),children:[_.jsx("span",{className:We.generateShimmer}),_.jsx("span",{className:We.generateText,children:"GENERATE"})]})]}),_.jsxs("div",{className:`${We.loadingPanel} ${f?We.loadingPanelShown:""}`,children:[_.jsx("div",{className:We.loadingLabel,children:x}),a&&_.jsx("div",{className:We.loadingTopic,children:a})]})]})}function mU(){const t=ps(),[e,n]=L.useState(!1);return L.useEffect(()=>{n(!0);const i=setTimeout(()=>n(!1),50);return()=>clearTimeout(i)},[t.pathname]),_.jsx(_M,{children:_.jsxs(vM,{children:[_.jsx(pU,{}),_.jsx("div",{className:`route-container ${e?"route-entering":"route-visible"}`,children:_.jsxs(qE,{children:[_.jsx($r,{path:"/",element:_.jsx(wu,{hideExplore:!0})}),_.jsx($r,{path:"/skill-tree",element:_.jsx(wu,{hideExplore:!0})}),_.jsx($r,{path:"/skill-tree/advanced",element:_.jsx(y2,{})}),_.jsx($r,{path:"/explore",element:_.jsx(ng,{})}),_.jsx($r,{path:"/explore/*",element:_.jsx(ng,{})}),_.jsx($r,{path:"*",element:_.jsx(wu,{hideExplore:!0})})]})})]})})}ad.createRoot(document.getElementById("root")).render(_.jsx(u_.StrictMode,{children:_.jsx(nM,{children:_.jsx(mU,{})})}));
